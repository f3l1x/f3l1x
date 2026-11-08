import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { allItems, byDateDesc, SITE_NAME, SITE_TAGLINE } from '../lib/content'

export async function GET(context: APIContext) {
  const items = (await allItems()).filter((i) => (i.section === 'blog' || i.section === 'notes') && i.date).sort(byDateDesc)
  return rss({
    title: SITE_NAME,
    description: SITE_TAGLINE,
    site: context.site!,
    trailingSlash: false,
    items: items.map((i) => ({ title: i.title, pubDate: i.date!, link: i.url, description: i.description, categories: i.tags })),
    customData: '<language>cs</language>',
  })
}
