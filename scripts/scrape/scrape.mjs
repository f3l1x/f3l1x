// One-off migration: super.so (Notion) -> markdown files.
// Usage: node scrape.mjs [--refetch] [--limit N]
import { mkdir, writeFile, readFile, access } from 'node:fs/promises'
import path from 'node:path'
import { createHash } from 'node:crypto'
import { fileURLToPath } from 'node:url'
import * as cheerio from 'cheerio'
import TurndownService from 'turndown'
import { gfm } from 'turndown-plugin-gfm'
import { postprocess } from './postprocess.mjs'

const ORIGIN = 'https://f3l1x.super.site'
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const RAW = path.join(ROOT, 'migration/raw')
const OUT = path.join(ROOT, 'migration/content')
const args = process.argv.slice(2)
const REFETCH = args.includes('--refetch')
const LIMIT = args.includes('--limit') ? Number(args[args.indexOf('--limit') + 1]) : Infinity
const CONCURRENCY = 3
const UA = 'Mozilla/5.0 (f3l1x self-migration)'

const report = { pages: 0, empty: [], failedImages: [], failedPages: [], unknownClasses: {} }
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const exists = (p) => access(p).then(() => true, () => false)

async function fetchRetry(url, tries = 3) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { headers: { 'user-agent': UA }, signal: AbortSignal.timeout(30000) })
      if (res.ok) return res
      if (res.status === 404) throw new Error('404')
    } catch (e) {
      if (i === tries - 1 || e.message === '404') throw e
    }
    await sleep(500 * (i + 1))
  }
}

async function pool(items, n, fn) {
  const queue = [...items]
  await Promise.all(Array.from({ length: n }, async () => {
    while (queue.length) await fn(queue.shift())
  }))
}

// ---------- images ----------
function unwrapImage(src) {
  try {
    const u = new URL(src, ORIGIN)
    if (u.pathname === '/_next/image') return u.searchParams.get('url')
    return u.href
  } catch { return null }
}

async function downloadImage(src, assetDir, relPrefix) {
  const real = unwrapImage(src)
  if (!real || real.startsWith('data:')) return src
  const u = new URL(real)
  let ext = path.extname(u.pathname).toLowerCase()
  if (!/^\.(png|jpe?g|gif|svg|webp|avif|ico)$/.test(ext)) ext = ''
  const base = path.basename(u.pathname, ext).replace(/[^a-z0-9_-]/gi, '').slice(0, 40) || 'img'
  const hash = createHash('sha1').update(u.origin + u.pathname).digest('hex').slice(0, 8)
  let file = `${base}-${hash}${ext}`
  const dest = path.join(assetDir, file)
  try {
    if (!(await exists(dest)) && !(await exists(dest + '.done'))) {
      const res = await fetchRetry(real)
      if (!ext) {
        const ct = res.headers.get('content-type') || ''
        const map = { 'image/png': '.png', 'image/jpeg': '.jpg', 'image/gif': '.gif', 'image/svg+xml': '.svg', 'image/webp': '.webp' }
        file += map[ct.split(';')[0]] || ''
      }
      await mkdir(assetDir, { recursive: true })
      await writeFile(path.join(assetDir, file), Buffer.from(await res.arrayBuffer()))
    }
    return `${relPrefix}/${file}`
  } catch (e) {
    report.failedImages.push({ src: real, error: e.message })
    return real
  }
}

// ---------- html -> markdown ----------
function makeTurndown() {
  const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', bulletListMarker: '-', emDelimiter: '*' })
  td.use(gfm)
  td.addRule('callout', {
    filter: (n) => n.nodeName === 'DIV' && /notion-callout/.test(n.getAttribute('class') || ''),
    replacement: (c) => '\n\n' + c.trim().split('\n').map((l) => `> ${l}`).join('\n') + '\n\n',
  })
  td.addRule('toggle', {
    filter: (n) => n.nodeName === 'DETAILS',
    replacement: (c) => `\n\n<details>\n${c}\n</details>\n\n`,
  })
  td.addRule('summary', {
    filter: (n) => n.nodeName === 'SUMMARY',
    replacement: (c) => `<summary>${c.trim()}</summary>\n\n`,
  })
  td.addRule('checkbox', {
    filter: (n) => n.nodeName === 'DIV' && /notion-checkbox/.test(n.getAttribute('class') || ''),
    replacement: (c, n) => {
      const checked = /checked/.test(n.getAttribute('class') || '') || n.querySelector?.('[checked]')
      return `\n- [${checked ? 'x' : ' '}] ${c.trim()}\n`
    },
  })
  td.addRule('br-comment', { filter: (n) => n.nodeType === 8, replacement: () => '' })
  return td
}

const KNOWN = /^(notion-(root|text|heading|heading__anchor|link|list-item|bulleted-list|numbered-list|divider|pill|property|page__[a-z-]+|semantic-string|callout|toggle|checkbox|code|quote|image|table|column|column-list|bookmark|embed|video|equation|to-do|text__content|icon|asset-wrapper)(__[a-z-]+)?)$/

function frontmatter(obj) {
  const lines = ['---']
  for (const [k, v] of Object.entries(obj)) {
    if (v == null || v === '' || (Array.isArray(v) && !v.length)) continue
    lines.push(`${k}: ${JSON.stringify(v)}`)
  }
  lines.push('---')
  return lines.join('\n')
}

function parseProps($) {
  const props = {}
  $('.notion-page__property').each((_, el) => {
    const name = $(el).find('.notion-page__property-name').text().trim().toLowerCase()
    const val = $(el).find('.notion-property')
    if (!name || !val.length) return
    const pills = val.find('.notion-pill').map((_, p) => $(p).text().trim()).get()
    if (pills.length) props[name] = pills
    else {
      const t = val.text().trim()
      if (t) props[name] = t
    }
  })
  return props
}

async function convert(html, url) {
  const $ = cheerio.load(html)
  const article = $('article').first()
  if (!article.length) return null
  const title = $('.notion-header__title').first().text().trim() || $('title').text().trim()
  const description = $('meta[name="description"]').attr('content') || ''
  const props = parseProps($)
  if (props.date) props.date = props.date.replace(/^(\d{4})\/(\d{2})\/(\d{2})$/, '$1-$2-$3')

  // listing pages (Notion collection galleries) are regenerated by the site, don't import them
  const hasCollection = article.find('.notion-collection').length > 0
  const otherText = article.clone().find('.notion-collection,.notion-page__properties').remove().end().text().trim()
  if ((hasCollection && !otherText) || /^\/(blog|notes)\/\d{4}\/?$/.test(new URL(url).pathname)) return { skip: true }

  article.find('.notion-page__properties').remove()
  article.find('script,style,noscript').remove()
  article.find('.notion-heading__anchor').remove()

  article.find('[class*="notion-"]').each((_, el) => {
    for (const c of (el.attribs.class || '').split(/\s+/)) {
      if (c.startsWith('notion-') && !KNOWN.test(c)) report.unknownClasses[c] = (report.unknownClasses[c] || 0) + 1
    }
  })

  // slug path: /blog/2015/foo -> content dir blog/2015, file foo
  const pathname = new URL(url).pathname.replace(/^\/|\/$/g, '') || 'index'
  const segs = pathname.split('/')
  const file = path.join(OUT, ...segs.slice(0, -1), segs.at(-1) + '.md')
  const assetRel = `./${segs.at(-1)}.assets`
  const assetDir = path.join(path.dirname(file), `${segs.at(-1)}.assets`)

  // images
  const imgs = article.find('img').toArray()
  for (const img of imgs) {
    const src = img.attribs.src
    if (!src) continue
    img.attribs.src = await downloadImage(src, assetDir, assetRel)
    delete img.attribs.srcset
    delete img.attribs.srcSet
  }

  // code blocks: keep language if present
  article.find('pre').each((_, pre) => {
    const code = $(pre).find('code').first()
    const lang = (code.attr('class') || $(pre).attr('class') || '').match(/language-([\w+-]+)/)?.[1]
    const text = (code.length ? code : $(pre)).text()
    $(pre).replaceWith(`<pre><code class="language-${lang || ''}">${$('<i>').text(text).html()}</code></pre>`)
  })

  // unwrap links to /_next/image or internal absolute links
  article.find('a[href]').each((_, a) => {
    const href = a.attribs.href
    if (href.startsWith(ORIGIN)) a.attribs.href = href.slice(ORIGIN.length) || '/'
  })

  const td = makeTurndown()
  article.find('h1,h2,h3,h4,h5,h6').each((_, h) => { $(h).find('strong,b').each((_, s) => { $(s).replaceWith($(s).contents()) }) })
  let md = td.turndown(article.html() || '').replace(/\u00a0/g, ' ').replace(/\n{3,}/g, '\n\n')
  md = postprocess(md).trim()

  const fm = { title, description: description !== title ? description : '', ...props, source: url }
  return { file, content: `${frontmatter(fm)}\n\n${md}\n`, bodyLength: md.length, segs }
}

// ---------- main ----------
async function main() {
  await mkdir(RAW, { recursive: true })
  const sm = await (await fetchRetry(`${ORIGIN}/sitemap.xml`)).text()
  let urls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  urls = urls.slice(0, LIMIT)
  console.log(`${urls.length} urls`)

  let done = 0
  await pool(urls, CONCURRENCY, async (url) => {
    const name = (new URL(url).pathname.replace(/^\/|\/$/g, '') || 'index').replace(/\//g, '__') + '.html'
    const rawFile = path.join(RAW, name)
    try {
      let html
      if (!REFETCH && (await exists(rawFile))) html = await readFile(rawFile, 'utf8')
      else {
        html = await (await fetchRetry(url)).text()
        await writeFile(rawFile, html)
        await sleep(200)
      }
      const out = await convert(html, url)
      if (!out) throw new Error('no <article>')
      if (out.skip) { report.listings = (report.listings || 0) + 1; return }
      await mkdir(path.dirname(out.file), { recursive: true })
      await writeFile(out.file, out.content)
      report.pages++
      if (out.bodyLength < 20) report.empty.push(url)
    } catch (e) {
      report.failedPages.push({ url, error: e.message })
    }
    if (++done % 20 === 0) console.log(`${done}/${urls.length}`)
  })

  await writeFile(path.join(ROOT, 'migration/report.json'), JSON.stringify(report, null, 2))
  console.log(JSON.stringify({ ...report, empty: report.empty.length, failedImages: report.failedImages.length, failedPages: report.failedPages }, null, 2))
}

main().catch((e) => { console.error(e); process.exit(1) })
