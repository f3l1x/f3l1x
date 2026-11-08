import { getCollection, type CollectionKey } from 'astro:content'

export const SITE = 'https://f3l1x.io'
export const SITE_NAME = 'f3l1x'
export const SITE_TAGLINE = 'Milan Šulc (Felix): developer, open-source maintainer (Nette, Contributte). Blog posts, talks, a wiki and notes.'

const sections = ['blog', 'talks', 'wiki', 'notes', 'pages'] as const

export type Item = {
  section: (typeof sections)[number]
  id: string
  url: string // path without trailing slash, e.g. /blog/2024/foo
  title: string
  description?: string
  date?: Date
  body: string
  tags: string[]
  cover?: any
}

/** Page URL of an entry: its path under content/, pages sit at the root. */
export const entryUrl = (collection: string, id: string) => (collection === 'pages' ? `/${id}` : `/${collection}/${id}`)

/** A description is only usable for SEO/LLMs when it's prose, not a bare URL. */
export function usableDescription(d?: string) {
  const t = d?.replace(/\s+/g, ' ').trim()
  return t && !/^https?:\/\/\S+$/.test(t) ? t : undefined
}

export async function allItems(): Promise<Item[]> {
  const out: Item[] = []
  for (const section of sections) {
    for (const e of await getCollection(section)) {
      out.push({ section, id: e.id, url: entryUrl(section, e.id), title: e.data.title, description: usableDescription(e.data.description), date: e.data.date, body: e.body ?? '', tags: section === 'pages' ? [] : (e.data.tags ?? []), cover: e.data.cover })
    }
  }
  return out
}

const time = (d?: Date) => d?.getTime() ?? 0
export const byDateDesc = (a: Item, b: Item) => time(b.date) - time(a.date)
/** Same as byDateDesc, for raw collection entries. */
export const newestFirst = (a: { data: { date?: Date } }, b: { data: { date?: Date } }) => time(b.data.date) - time(a.data.date)

/** getStaticPaths for an entry route: one page per entry. */
export async function entryPaths(collection: CollectionKey, param = 'slug') {
  return (await getCollection(collection)).map((entry) => ({ params: { [param]: entry.id }, props: { entry } }))
}

/** getStaticPaths for /<collection>/<year>: entries under content/<collection>/<year>/, newest first. */
export async function yearPaths(collection: 'blog' | 'notes') {
  const all = (await getCollection(collection)).sort(newestFirst)
  const years = [...new Set(all.map((e) => e.id.split('/')[0]))].filter((y) => /^\d{4}$/.test(y))
  return years.map((year) => ({ params: { year }, props: { items: all.filter((e) => e.id.startsWith(year + '/')) } }))
}

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
