import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const base = z.object({
  title: z.string(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
  date: z.coerce.date().optional(),
  source: z.string().optional(),
})

const make = (dir: string, extra: z.ZodRawShape = {}) =>
  defineCollection({
    loader: glob({ pattern: '**/*.md', base: `./content/${dir}` }),
    schema: base.extend(extra),
  })

export const collections = {
  blog: make('blog'),
  notes: make('notes'),
  wiki: make('wiki', { status: z.array(z.string()).optional() }),
  talks: make('talks', {
    event: z.string().optional(),
    meetup: z.string().optional(),
    slides: z.string().optional(),
    github: z.string().optional(),
    video: z.string().optional(),
  }),
  pages: make('pages'),
}
