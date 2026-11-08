import type { ImageMetadata } from 'astro'

const images = import.meta.glob<{ default: ImageMetadata }>('/content/**/*.{png,jpg,jpeg,webp,gif,avif}')

/** Thumbnail for an entry: its cover, else the first local image used in its body. */
export async function thumbnail(entry: { id: string; collection: string; body?: string; data: { cover?: ImageMetadata } }): Promise<ImageMetadata | undefined> {
  if (entry.data.cover) return entry.data.cover
  const rel = entry.body?.match(/!\[[^\]]*\]\((\.\/[^)\s]+)\)/)?.[1]
  if (!rel) return undefined
  const dir = `/content/${entry.collection}/${entry.id}`.split('/').slice(0, -1)
  for (const part of rel.split('/')) {
    if (part === '..') dir.pop()
    else if (part !== '.') dir.push(decodeURIComponent(part))
  }
  const load = images[dir.join('/')]
  return load ? (await load()).default : undefined
}
