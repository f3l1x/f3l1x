// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import rehypeDemoteHeadings from './src/plugins/rehype-demote-headings.mjs'

export default defineConfig({
  site: 'https://f3l1x.io',
  trailingSlash: 'never',
  // URLs that existed on super.site but were junk pages
  redirects: { '/wiki/test': '/wiki', '/wiki/undefined': '/wiki' },
  integrations: [sitemap()],
  markdown: { rehypePlugins: [rehypeDemoteHeadings] },
})
