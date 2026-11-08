import type { APIRoute } from 'astro'
import { allItems, byDateDesc } from '../lib/content'

/**
 * A bare URL becomes a short searchable name: the repo for code hosts (github.com/dunglas/symfony-docker -> symfony-docker),
 * otherwise the site name (https://boxfuse.com/ -> boxfuse). Keeps tools findable without every github.com link matching "git".
 */
function urlName(u: string) {
  try {
    const x = new URL(u)
    const host = x.hostname.replace(/^www\./, '')
    const parts = x.pathname.split('/').filter(Boolean)
    if (/^(github\.com|gitlab\.com|bitbucket\.org)$/.test(host)) return parts[1] ?? parts[0] ?? ''
    const labels = host.split('.')
    return labels.length > 1 ? labels[labels.length - 2] : host
  } catch {
    return ''
  }
}

/** Plain text for the search index: no code, images, link targets, raw URLs or markdown punctuation. */
function plain(md: string, max: number) {
  return md
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/https?:\/\/[^\s)<>\]]+/g, (u) => ` ${urlName(u)} `)
    .replace(/\(\s*\)/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_`|\\-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max)
}

export const GET: APIRoute = async () => {
  const items = (await allItems()).sort(byDateDesc)
  const docs = items.map((i) => ({
    t: i.title,
    u: i.url,
    s: i.section,
    d: i.description ?? '',
    g: i.tags,
    b: plain(i.body, i.section === 'pages' ? 20000 : 3000),
  }))
  return new Response(JSON.stringify(docs), { headers: { 'Content-Type': 'application/json; charset=utf-8' } })
}
