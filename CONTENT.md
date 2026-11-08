# Content

All content is Markdown in `content/`. The file path is the URL. Voice: [VOICE.md](VOICE.md).

## Frontmatter

- `title`: required, specific, under ~65 characters.
- `description`: required, 90 to 155 characters, plain prose, no URL.
- `date`: `YYYY-MM-DD`, required for blog, notes and talks. For wiki pages it is the creation date.
- `updated`: `YYYY-MM-DD`, optional; bump it when you meaningfully change a page (wiki especially). Shown as "Updated …" and used as `dateModified`.
- `tags`: optional, lowercase.
- `cover`: optional, relative path to a local image, 16:9 or wider.
- Leave legacy fields (`source`, `status`) as they are.
- The schema lives in `src/content.config.ts`; the build fails on invalid frontmatter.

## Writing

- No `# Title` line in the body: the title is already the page heading. Use `##` and below.
- Internal links: absolute path, no trailing slash (`/blog/2018/some-post`).
- Code fences always have a language (`text` for plain output).
- No raw HTML for layout.

## Images

- Put images in `<slug>.assets/` next to the Markdown file and reference them relatively.
- Never hotlink.
- Always write alt text.
- Several images in one paragraph (no blank lines between) render as a gallery.

## URLs

- Never rename or move a file without adding a redirect in `public/_redirects` (one per line: `/old /new 301`).
- Do not create files for generated index pages (`/blog/<year>`, `/notes/<year>`).

## Checklist

- [ ] `title`, `description`, `date` set.
- [ ] Images local, with alt text; links work.
- [ ] `npm run build` passes. The page is then picked up automatically by the sitemap, `/rss.xml` (blog and notes), `/search.json` (site search), `/llms.txt` and `/md/<path>.md`.
