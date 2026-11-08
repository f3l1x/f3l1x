// Embeddable video/slide URLs. Hosts must also be allowed in frame-src in public/_headers.

function youtube(u: string) {
  try {
    const x = new URL(u)
    const id = x.hostname.endsWith('youtu.be') ? x.pathname.slice(1) : /youtube\.com$/.test(x.hostname) ? x.searchParams.get('v') : null
    const t = parseInt(x.searchParams.get('t') ?? x.searchParams.get('start') ?? '0') || 0
    return id ? `https://www.youtube-nocookie.com/embed/${id}${t ? `?start=${t}` : ''}` : null
  } catch { return null }
}

function slideslive(u: string) {
  const id = u.match(/^https:\/\/slideslive\.com\/(\d+)/)?.[1]
  return id ? `https://slideslive.com/embed/presentation/${id}` : null
}

/** Embed URL for a talk video, or null when it can only be linked. */
export const videoEmbed = (u?: string) => (u ? youtube(u) ?? slideslive(u) : null)

/** Embed URL for talk slides, or null when they can only be linked. */
export function slidesEmbed(u?: string) {
  try {
    const x = new URL(u ?? '')
    const path = x.pathname.replace(/\/$/, '')
    if (x.hostname === 'slides.com') return `https://slides.com${path}/embed`
    const gdoc = x.hostname === 'docs.google.com' && path.match(/^\/presentation\/d\/([\w-]+)/)
    if (gdoc) return `https://docs.google.com/presentation/d/${gdoc[1]}/embed`
    const prezi = x.hostname === 'prezi.com' && path.match(/^\/(p\/)?([\w-]+)/)
    if (prezi) return prezi[1] ? `https://prezi.com/p/${prezi[2]}/embed/` : `https://prezi.com/embed/${prezi[2]}/`
    if (x.hostname === 'nowdoc.github.io') return x.href
    return null
  } catch { return null }
}
