// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import rehypeDemoteHeadings from './src/plugins/rehype-demote-headings.mjs'
import rehypeGallery from './src/plugins/rehype-gallery.mjs'

export default defineConfig({
  site: 'https://f3l1x.io',
  trailingSlash: 'never',
  // Cloudflare Pages serves about.html at /about (about/index.html would be /about/), matching the old URLs.
  build: { format: 'file' },
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [rehypeDemoteHeadings, rehypeGallery],
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' }, defaultColor: false },
  },
})
