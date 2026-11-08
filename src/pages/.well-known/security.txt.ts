import type { APIRoute } from 'astro'
import { SITE } from '../../lib/content'

// RFC 9116. Expires is recomputed on every build (must be < 1 year ahead).
export const GET: APIRoute = () => {
  const expires = new Date(Date.now() + 330 * 24 * 3600 * 1000).toISOString().replace(/\.\d+Z$/, '.000Z')
  const body = [
    'Contact: mailto:milan@sulc.dev',
    `Expires: ${expires}`,
    'Preferred-Languages: en, cs',
    `Canonical: ${SITE}/.well-known/security.txt`,
    '',
  ].join('\n')
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
