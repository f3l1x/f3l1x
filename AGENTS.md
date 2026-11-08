# AGENTS.md

Guide for AI agents and humans working in this repo. See also [CONTENT.md](CONTENT.md) (writing content), [DESIGN.md](DESIGN.md) (UI) and [VOICE.md](VOICE.md) (tone of voice).

## What this is

Personal website of Milan Šulc ("Felix", f3l1x.io): blog, talks, wiki and notes. Static site built with Astro, content is plain Markdown in `content/`. Hosted on **Cloudflare Pages** (static output, no functions). This repository is also the GitHub profile repo (`f3l1x/f3l1x`), so `README.md` is the profile README: do not turn it into project docs.

## Development

Node `>=22.23.4`.

```sh
npm install
npm run dev        # dev server on :4321
npm run build      # static build to dist/
npm run preview    # serve the built site
```

The `Makefile` wraps these (`make install`, `dev`, `build`, `preview`, `clean`, `distclean`) and adds `make deploy`: a clean build uploaded to Cloudflare Pages with `npx wrangler@4` (project `f3l1x`, branch `master`; override with `CF_PROJECT=` / `CF_BRANCH=`).

There is no test suite: `npm run build` is the gate (type-checks the content schema and renders every page). After changing config files, restart the dev server; a stale cache can be cleared with `rm -rf .astro`.

Do not edit generated or ignored output: `dist/`, `.astro/`, `node_modules/`.

## Rules

- **URLs are a public contract.** A page URL is its path under `content/` without `.md`. Never rename or move a file without adding a redirect in `public/_redirects` (`source destination 301`; real 301s on Cloudflare Pages). No trailing slashes: `build.format: 'file'` emits `about.html`, which Pages serves at `/about`. The old `/wiki/index` page was removed (301 to `/wiki`); its subpages under `content/wiki/index/` are still live.
- **Everything is local.** Images live in the repo next to their Markdown file, no hotlinking. Only YouTube, SlidesLive and slide embeds (slides.com, Google Slides, Prezi, nowdoc.github.io) are allowed (CSP in `public/_headers`; add new embed hosts there).
- **Every page needs a real `description`** (90 to 155 characters, plain prose). See [CONTENT.md](CONTENT.md).
- **No client framework, no trackers.** Interactivity is a few small vanilla scripts (search, theme toggle, lightbox, copy button). Keep dependencies minimal; prefer a few lines of code over a new package.

- **Crawling is welcome.** `robots.txt` allows everyone, search and AI crawlers, with an explicit `Content-Signal`. In the Cloudflare dashboard keep AI-bot blocking and managed robots.txt off so the zone does not override it. HSTS is also set there (SSL/TLS > Edge Certificates), not in `_headers`.

## Git

- Commit messages: `Area: short message` (e.g. `Content: add talk covers`, `Design: code block surface`), with a short body when the why is not obvious.
- No AI attribution anywhere: no `Co-Authored-By` trailers, no "Generated with ..." lines in commits or PR bodies.
- Never force-push. Push to `master` only when asked (fast-forward only); otherwise use a branch and a PR.
- `.env` and anything secret stays out of git.

## Before you finish a change

1. `npm run build` passes without warnings.
2. Check the result in the dev server, in light and dark, and at ~400px width.
3. For content changes: images load, links work, frontmatter is complete.
