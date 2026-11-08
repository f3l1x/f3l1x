import type { APIRoute } from 'astro'
import { allItems, byDateDesc, SITE, SITE_NAME, SITE_TAGLINE } from '../lib/content'

const titles = { pages: 'About', blog: 'Blog', talks: 'Talks', notes: 'Notes', wiki: 'Wiki' } as const

export const GET: APIRoute = async () => {
  const items = await allItems()
  const lines = [`# ${SITE_NAME}`, '', `> ${SITE_TAGLINE}`, '', 'Every page is also available as plain Markdown under `/md/<path>.md`. The whole site in one file: ' + `${SITE}/llms-full.txt`, '']
  for (const section of ['pages', 'blog', 'talks', 'notes', 'wiki'] as const) {
    const list = items.filter((i) => i.section === section).sort(section === 'wiki' ? (a, b) => a.title.localeCompare(b.title) : byDateDesc)
    if (!list.length) continue
    lines.push(`## ${titles[section]}`, '')
    for (const i of list) lines.push(`- [${i.title}](${SITE}/md${i.url}.md)${i.description ? `: ${i.description}` : ''}`)
    lines.push('')
  }
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
