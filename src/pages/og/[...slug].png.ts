import type { APIRoute, GetStaticPaths } from 'astro'
import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { allItems } from '../../lib/content'
import { clip, SECTION_LABEL, SITE_TAGLINE } from '../../lib/seo'

// Inter ships as separate unicode subsets; Satori falls back by family name, so latin-ext (Š, ř, ž, ...) gets its own family.
const fonts = [['Inter', 'latin'], ['InterExt', 'latin-ext']].flatMap(([name, subset]) =>
  ([700, 400] as const).map((weight) => ({
    name,
    data: readFileSync(path.join(process.cwd(), 'node_modules/@fontsource/inter/files', `inter-${subset}-${weight}-normal.woff`)),
    weight,
    style: 'normal' as const,
  })),
)

type Card = { title: string; kicker: string; meta: string }

// Pages with a cover use the cover itself as og:image, everything else gets a generated card.
export const getStaticPaths = (async () => {
  const items = (await allItems()).filter((i) => !i.cover)
  return [
    { params: { slug: 'default' }, props: { card: { title: 'f3l1x', kicker: '', meta: SITE_TAGLINE } satisfies Card } },
    ...items.map((i) => ({
      params: { slug: i.url.slice(1) },
      props: { card: { title: i.title, kicker: SECTION_LABEL[i.section] ?? '', meta: [i.date?.toISOString().slice(0, 10), ...i.tags.slice(0, 3).map((t) => `#${t}`)].filter(Boolean).join('   ') } satisfies Card },
    })),
  ]
}) satisfies GetStaticPaths

const el = (type: string, style: Record<string, unknown>, children?: unknown) => ({ type, props: { style: { display: 'flex', ...style }, children } })

export const GET: APIRoute = async ({ props }) => {
  const { title, kicker, meta } = props.card as Card
  const t = clip(title, 110)
  const size = t.length <= 34 ? 84 : t.length <= 60 ? 70 : t.length <= 90 ? 58 : 48
  const home = title === 'f3l1x'

  const tree = el('div', { width: 1200, height: 630, background: '#fdfdfc', color: '#18181b', padding: 80, boxSizing: 'border-box', flexDirection: 'column', justifyContent: 'space-between', fontFamily: 'Inter, InterExt' }, [
    el('div', { justifyContent: 'space-between', alignItems: 'center' }, [
      el('div', { alignItems: 'center', gap: 16, fontSize: 36, fontWeight: 700, letterSpacing: -1 }, [el('div', { width: 18, height: 18, borderRadius: 5, background: '#2f5fd0' }), 'f3l1x']),
      el('div', { fontSize: 24, fontWeight: 700, letterSpacing: 3, color: '#71717a', textTransform: 'uppercase' }, kicker || ' '),
    ]),
    el('div', { flexDirection: 'column', gap: 24 }, [
      el('div', { fontSize: home ? 120 : size, fontWeight: 700, lineHeight: 1.12, letterSpacing: -2 }, t),
      home ? el('div', { fontSize: 32, color: '#71717a', lineHeight: 1.35, maxWidth: 900 }, clip(meta, 120)) : null,
    ].filter(Boolean)),
    el('div', { justifyContent: 'space-between', alignItems: 'flex-end', fontSize: 26, color: '#71717a' }, [
      el('div', {}, home ? ' ' : meta || ' '),
      el('div', { fontWeight: 700 }, 'f3l1x.io'),
    ]),
  ])

  const svg = await satori(tree as any, { width: 1200, height: 630, fonts })
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng()
  return new Response(png, { headers: { 'Content-Type': 'image/png' } })
}
