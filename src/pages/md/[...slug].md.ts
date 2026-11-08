import type { APIRoute, GetStaticPaths } from 'astro'
import { allItems, plainMarkdown } from '../../lib/content'

export const getStaticPaths = (async () =>
  (await allItems()).map((item) => ({ params: { slug: item.url.slice(1) }, props: { item } }))) satisfies GetStaticPaths

export const GET: APIRoute = ({ props }) =>
  new Response(plainMarkdown(props.item), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } })
