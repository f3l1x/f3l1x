// Markdown cleanups shared by the scraper and the one-off content clean-up.
// Usage on existing content: node postprocess.mjs <dir>
import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

// Drop Notion's code-block "Copy" button label (a line that is just "Copy" outside fenced code).
function dropCopyLabels(md) {
  const out = []
  let inFence = false
  const lines = md.split('\n')
  for (let i = 0; i < lines.length; i++) {
    if (/^\s*```/.test(lines[i])) inFence = !inFence
    if (!inFence && lines[i].trim() === 'Copy') { if (lines[i + 1]?.trim() === '') i++; continue }
    out.push(lines[i])
  }
  return out.join('\n')
}

export function postprocess(md) {
  return dropCopyLabels(md)
    // Notion auto-links inside inline code: `[a.sh](http://a.sh)` -> `a.sh`
    .replace(/`\[([^\]`]+)\]\(https?:\/\/[^)`\s]+\)`/g, '`$1`')
    // Notion table-of-contents items: "- [\n\nTitle\n\n](#block-<id>)" -> dropped (Astro can build a TOC)
    .replace(/^[ \t]*-[ \t]+\[\s*\n[\s\S]*?\]\(#block-[0-9a-f]{32}\)[ \t]*\n?/gm, '')
    // Bookmark / link-preview cards: "[\n\n##### Title\n\ntext\n\n![](icon)\n\n](url)" -> "[Title](url)"
    .replace(/\[\s*\n\n([\s\S]*?)\n\n\]\((https?:\/\/[^)\s]+)\)/g, (_, inner, url) => {
      const first = inner.split('\n').map((l) => l.trim()).find((l) => l && !l.startsWith('!['))
      const title = (first || new URL(url).hostname).replace(/^#+\s*/, '').replace(/[\[\]]/g, '')
      return `[${title}](${url})`
    })
    .replace(/\n{3,}/g, '\n\n')
}

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) yield* walk(p)
    else if (p.endsWith('.md')) yield p
  }
}

if (process.argv[1].endsWith('postprocess.mjs') && process.argv[2]) {
  let changed = 0
  for await (const f of walk(path.resolve(process.argv[2]))) {
    const src = await readFile(f, 'utf8')
    const out = postprocess(src)
    if (out !== src) { await writeFile(f, out); changed++; console.log('cleaned', f) }
  }
  console.log(`${changed} files changed`)
}
