import { SITE, SITE_NAME, SITE_TAGLINE } from './content'

export { SITE, SITE_NAME, SITE_TAGLINE }
export const TWITTER = '@xf3l1x'

/** Collapse whitespace and clip at a word boundary. */
export function clip(text: string, max = 155) {
  const t = text.replace(/\s+/g, ' ').trim()
  if (t.length <= max) return t
  const cut = t.slice(0, max - 1)
  return cut.slice(0, cut.lastIndexOf(' ') > 60 ? cut.lastIndexOf(' ') : cut.length).replace(/[\s,;:.\-–—]+$/, '') + '…'
}

/** Czech vs English, by share of Czech-only letters in the text. */
export function detectLang(text?: string): 'cs' | 'en' {
  const letters = (text ?? '').slice(0, 4000).match(/\p{L}/gu)?.length ?? 0
  if (letters < 40) return 'en'
  const cz = (text ?? '').slice(0, 4000).match(/[ěščřžďťňůĚŠČŘŽĎŤŇŮ]/g)?.length ?? 0
  return cz / letters > 0.012 ? 'cs' : 'en'
}

export const SECTION_LABEL: Record<string, string> = { blog: 'Blog', talks: 'Talk', wiki: 'Wiki', notes: 'Note', pages: 'Page' }

export const person = {
  '@type': 'Person',
  '@id': `${SITE}/#person`,
  name: 'Milan Šulc',
  alternateName: ['Felix', 'f3l1x'],
  url: `${SITE}/about`,
  image: `${SITE}/icon-512.png`,
  sameAs: ['https://github.com/f3l1x', 'https://twitter.com/xf3l1x'],
  jobTitle: 'Software developer',
}

export const websiteLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebSite', '@id': `${SITE}/#website`, url: SITE, name: SITE_NAME, description: SITE_TAGLINE, publisher: { '@id': `${SITE}/#person` }, inLanguage: ['en', 'cs'] },
    person,
  ],
}

export function breadcrumbLd(crumbs: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: `${SITE}${c.path}` })),
  }
}
