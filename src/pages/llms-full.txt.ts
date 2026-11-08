import type { APIRoute } from 'astro'
import { allItems, byDateDesc, plainMarkdown, SITE_NAME, SITE_TAGLINE } from '../lib/content'

export const GET: APIRoute = async () => {
  const items = (await allItems()).sort(byDateDesc)
  const body = items.map((i) => plainMarkdown(i).replace(/^# /, '## ')).join('\n---\n\n')
  return new Response(`# ${SITE_NAME}\n\n> ${SITE_TAGLINE}\n\n${body}`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
