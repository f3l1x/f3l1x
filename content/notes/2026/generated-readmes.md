---
title: "Generated Readmes"
description: "I ran a small experiment on one repository, one task, and three AI agents."
date: "February 22, 2026"
tags: ["ai","readme"]
cover: "./generated-readmes.assets/cover.jpg"
source: "https://f3l1x.super.site/notes/2026/generated-readmes"
---

I ran a small experiment on one repository, one task, and three AI agents.

Repository: [https://github.com/contributte/apitte-skeleton](https://github.com/contributte/apitte-skeleton)

Task: improve README for newcomers (what it is, how to start, how to use it)

## Quick comparison

<table class="notion-table col-header"><tbody><tr style="color:var(--color-text-default)"><td style="min-width:120px;max-width:240px;background:var(--color-undefined)"><div class="notion-table__cell"><span class="notion-semantic-string"><strong>Agent</strong></span></div></td><td style="min-width:120px;max-width:240px;background:var(--color-undefined)"><div class="notion-table__cell"><span class="notion-semantic-string">PR</span></div></td><td style="min-width:120px;max-width:240px;background:var(--color-undefined)"><div class="notion-table__cell"><span class="notion-semantic-string"><strong>Commits</strong></span></div></td><td style="min-width:120px;max-width:240px;background:var(--color-undefined)"><div class="notion-table__cell"><span class="notion-semantic-string"><strong>Diff size</strong></span></div></td><td style="min-width:120px;max-width:240px;background:var(--color-undefined)"><div class="notion-table__cell"><span class="notion-semantic-string"><strong>Character</strong></span></div></td></tr><tr style="color:var(--color-text-default)"><td style="min-width:120px;max-width:240px"><div class="notion-table__cell"><span class="notion-semantic-string">Copilot</span></div></td><td style="min-width:120px;max-width:240px"><div class="notion-table__cell"><span class="notion-semantic-string"><a href="https://github.com/contributte/apitte-skeleton/pull/797" class="notion-link link" target="_blank" rel="noopener noreferrer">#797</a></span></div></td><td style="min-width:120px;max-width:240px"><div class="notion-table__cell"><span class="notion-semantic-string">3</span></div></td><td style="min-width:120px;max-width:240px"><div class="notion-table__cell"><span class="notion-semantic-string">+387 / -200</span></div></td><td style="min-width:120px;max-width:240px"><div class="notion-table__cell"><span class="notion-semantic-string">Broad rewrite, very comprehensive</span></div></td></tr><tr style="color:var(--color-text-default)"><td style="min-width:120px;max-width:240px"><div class="notion-table__cell"><span class="notion-semantic-string">Claude</span></div></td><td style="min-width:120px;max-width:240px"><div class="notion-table__cell"><span class="notion-semantic-string"><a href="https://github.com/contributte/apitte-skeleton/pull/798" class="notion-link link" target="_blank" rel="noopener noreferrer">#798</a></span></div></td><td style="min-width:120px;max-width:240px"><div class="notion-table__cell"><span class="notion-semantic-string">1</span></div></td><td style="min-width:120px;max-width:240px"><div class="notion-table__cell"><span class="notion-semantic-string">+212 / -215</span></div></td><td style="min-width:120px;max-width:240px"><div class="notion-table__cell"><span class="notion-semantic-string">Structured and onboarding-focused</span></div></td></tr><tr style="color:var(--color-text-default)"><td style="min-width:120px;max-width:240px"><div class="notion-table__cell"><span class="notion-semantic-string">Codex</span></div></td><td style="min-width:120px;max-width:240px"><div class="notion-table__cell"><span class="notion-semantic-string"><a href="https://github.com/contributte/apitte-skeleton/pull/799" class="notion-link link" target="_blank" rel="noopener noreferrer">#799</a></span></div></td><td style="min-width:120px;max-width:240px"><div class="notion-table__cell"><span class="notion-semantic-string">1</span></div></td><td style="min-width:120px;max-width:240px"><div class="notion-table__cell"><span class="notion-semantic-string">+54 / -124</span></div></td><td style="min-width:120px;max-width:240px"><div class="notion-table__cell"><span class="notion-semantic-string">Minimal and easy to review</span></div></td></tr></tbody></table>

## Copilot output

Copilot produced the largest rewrite with many added sections, examples, and navigation improvements.

Strong when you want a full docs refresh in one pass, weaker when you want a tight diff.

> ![image](./generated-readmes.assets/copilot-d1a5cae3.png)

## Claude output

Claude delivered a balanced rewrite: clear intro, quick-start flow, endpoint overview, and practical commands.

This felt closest to a “ready for team review” docs draft.

> ![image](./generated-readmes.assets/markdown-image-514367-d5b1adec.png)

## Codex output

Codex made the most conservative pass: short, focused, less noisy changes.

Great for maintainability and faster review cycles, but less ambitious in scope.

> ![image](./generated-readmes.assets/codex-980010ac.png)

## Takeaway

For README generation, model choice matters less than **prompt constraints**.

If the prompt is open-ended, the diff explodes.

If the prompt is strict, the output becomes mergeable.

My default constraints now:

-   keep the diff small
-   preserve section order unless asked
-   prefer clarity over volume
-   stay markdown-lint friendly

All three PRs were useful drafts. The winner is not “the smartest model”, but the one that best fits your review budget and documentation goals.
