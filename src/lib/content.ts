import { getCollection } from 'astro:content'

export const SITE = 'https://f3l1x.io'
export const SITE_NAME = 'f3l1x'
export const SITE_TAGLINE = 'Milan Šulc (Felix): developer, open-source maintainer (Nette, Contributte). Blog posts, talks, a wiki and notes.'

const sections = ['blog', 'talks', 'wiki', 'notes'] as const

export type Item = {
  section: (typeof sections)[number] | 'pages'
  id: string
  url: string // path without trailing slash, e.g. /blog/2024/foo
  title: string
  description?: string
  date?: Date
  body: string
  tags: string[]
  cover?: any
}

/** A description is only usable for SEO/LLMs when it's prose, not a bare URL. */
export function usableDescription(d?: string) {
  const t = d?.replace(/\s+/g, ' ').trim()
  return t && !/^https?:\/\/\S+$/.test(t) ? t : undefined
}

export async function allItems(): Promise<Item[]> {
  const out: Item[] = []
  for (const section of sections) {
    for (const e of await getCollection(section)) {
      out.push({ section, id: e.id, url: `/${section}/${e.id}`, title: e.data.title, description: usableDescription(e.data.description), date: e.data.date, body: e.body ?? '', tags: e.data.tags ?? [], cover: e.data.cover })
    }
  }
  for (const e of await getCollection('pages')) {
    out.push({ section: 'pages', id: e.id, url: `/${e.id}`, title: e.data.title, description: usableDescription(e.data.description), date: e.data.date, body: e.body ?? '', tags: [], cover: e.data.cover })
  }
  return out
}

export const byDateDesc = (a: Item, b: Item) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0)

/** Markdown for LLMs / .md endpoints: drop image embeds (their paths are build-internal), keep alt text. */
export function plainMarkdown(item: Item) {
  const body = item.body
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, (_, alt) => (alt && alt !== 'image' ? `[Image: ${alt}]` : ''))
    .replace(/\(\/(?!\/)/g, `(${SITE}/`) // absolutise internal links
    .replace(/\n{3,}/g, '\n\n')
    .trim()
  const meta = [item.date ? `Date: ${item.date.toISOString().slice(0, 10)}` : '', item.tags.length ? `Tags: ${item.tags.join(', ')}` : '', `URL: ${SITE}${item.url}`].filter(Boolean).join('\n')
  return `# ${item.title}\n\n${meta}\n\n${body}\n`
}
