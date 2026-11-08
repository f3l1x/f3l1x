# Design

Minimal, typographic, content-first. Fast on bad networks.

## Rules

- Content is the interface: one reading column, nothing competing with the text.
- Quiet by default: muted chrome, colour only where the reader acts (links, focus, hover).
- One accent colour. Everything else is neutral. No pure black or white.
- System fonts only, no web-font payload.
- Light, dark and system themes are first-class: check every change in both.
- No decoration: no gradients, heavy shadows, parallax or animation beyond short transitions.
- Pages work without JS. Scripts only enhance (small, vanilla, no framework).
- Use the CSS variables in `src/layouts/Base.astro`; add a token before hard-coding a colour.
- Never let the page scroll horizontally: wide content scrolls inside its own container.
- Search: magnifier icon in the nav (also `/` and Ctrl/Cmd+K) opens a dialog over `/search.json` (titles, tags, descriptions, page text; diacritics ignored; exact title matches first). Keep it keyboard-first.
- Scoped search: `data-search-open data-search-scope="wiki"` opens the same dialog limited to one section, shown as a removable chip (click it or Backspace in an empty box to search everything). Wiki pages have a "Search the wiki…" box above the title, and there `/` opens wiki-scoped search while Ctrl/Cmd+K and the nav icon stay site-wide. Title/description hits show the description as the snippet.
- Wiki filter: `/wiki` has an inline filter box over titles, descriptions, tags and page text (page text from `/search.json`, loaded on focus). While filtering, results are ordered title > description/tags > text; Enter opens the top one; when nothing matches it hands the query to the site search.
- Wiki pages show only "Last updated <date> · <n> ago" (from `updated`, else `date`; the relative part is a JS enhancement, created date in the tooltip). The wiki list shows no dates.
- Images open in a lightbox that cycles through all images on the page (arrows, swipe, `n / total` counter); consecutive images in one paragraph become a gallery.

## Accessibility

- One `<h1>` per page, semantic landmarks.
- Visible focus ring on everything interactive; keyboard-operable controls with `aria-label`s.
- Text contrast WCAG AA or better.
- Alt text on content images, `alt=""` on decorative ones.

## Check

- Light and dark.
- ~400px width.
- Keyboard only.

## Don't

Add a UI framework, icon font, trackers or banners; centre-align body text; hide content behind JS; add a second accent colour without asking.
