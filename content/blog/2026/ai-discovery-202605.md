---
title: "AI discovery: 2026/05"
description: "AI news for May 2026: Claude Opus 4.8, Gemini 3.5 Flash and Antigravity 2.0 from Google I/O, Cursor Composer 2.5 and Mythos security findings."
date: "2026-05-31"
tags: ["discovery","ai"]
---

## 01.05.2026 – 31.05.2026

**Product**

-   [Anthropic releases Claude Opus 4.8 on May 28 at unchanged pricing ($5 input and $25 output per million tokens), with a cheaper fast mode and dynamic workflows (research preview) that run parallel subagents in Claude Code](https://www.anthropic.com/news/claude-opus-4-8)
-   [Google I/O on May 19 brings Gemini 3.5 Flash, Antigravity 2.0 as a desktop app, a new Antigravity CLI and Managed Agents in the Gemini API](https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-developer-highlights/)
-   [Cursor ships Composer 2.5 on May 18, priced at $0.50 input and $2.50 output per million tokens in standard mode, with a faster default tier](https://cursor.com/changelog/composer-2-5)
-   [Anthropic adds three Claude Managed Agents features on May 19: dreaming (memory curation across sessions), outcomes (rubric-based grading) and multiagent orchestration](https://claude.com/resources/articles/new-in-claude-managed-agents)

**UX/UI**

-   [Figma starts rolling out its design agent in beta on May 20: it edits designs on the canvas from prompts, can use your components and tokens, and does not consume AI credits during the beta](https://www.figma.com/blog/the-figma-agent-is-here/)
-   [Claude Code adds agent view (research preview): `claude agents` lists every session as running, blocked on you or done, on a single screen](https://code.claude.com/docs/en/whats-new/2026-w20.md)
-   [GitHub shows code coverage on pull requests in public preview, fed by a Cobertura report uploaded from CI](https://github.blog/changelog/2026-05-26-code-coverage-in-pull-requests-is-now-in-public-preview)

**Engineering**

-   [Claude Opus 4.8 is generally available in GitHub Copilot from May 28 for Pro+, Business and Enterprise, with a 15x premium request multiplier until usage-based billing starts on June 1](https://github.blog/changelog/2026-05-28-claude-opus-4-8-is-generally-available-for-github-copilot)
-   [Claude Code `/goal` keeps the agent working across turns until a condition you wrote holds, checked after every turn by a separate small fast model](https://code.claude.com/docs/en/goal)
-   [Simon Willison notes Gemini 3.5 Flash is generally available at $1.50 input and $9 output per million tokens, about three times the price of Gemini 3 Flash Preview](https://simonwillison.net/2026/May/19/gemini-35-flash/)
-   [GitHub lets enterprise owners enable specific Copilot models for selected organizations with targeted model rules (public preview, Business and Enterprise plans)](https://github.blog/changelog/2026-05-26-target-copilot-models-to-organizations-with-model-rules)
-   [Copilot Memory gets a per-repository off switch, clearer scope prompts and a `/memory` command in the Copilot CLI](https://github.blog/changelog/2026-05-26-copilot-memory-has-more-controls-for-deletion-scope-and-the-copilot-cli)

**DevOps**

-   [npm makes staged publishing generally available (a maintainer approves a version with 2FA before it becomes installable) and adds `--allow-file`, `--allow-remote` and `--allow-directory` flags in npm 11.15.0](https://github.blog/changelog/2026-05-22-staged-publishing-and-new-install-time-controls-for-npm)
-   [Claude Platform on AWS reaches general availability on May 11 with IAM authentication, consolidated AWS billing and CloudTrail logging in 17 regions](https://aws.amazon.com/about-aws/whats-new/2026/05/claude-platform-aws/)
-   [CodeQL 2.25.5 improves GitHub Actions queries: `actions/unpinned-tag` now checks composite actions and `poisonable_steps` finds more sinks](https://github.blog/changelog/2026-05-28-codeql-2-25-5-improves-query-accuracy-for-github-actions)
-   [Docker starts a “Coding Agent Horror Stories” series on May 18 and argues for running agents in microVM sandboxes with scoped mounts and network allowlists](https://www.docker.com/blog/coding-agent-horror-stories-the-security-crisis-threatening-developer-infrastructure/)
-   [GitHub Advanced Security gets hard budget limits that block new license assignments once the cap is reached](https://github.blog/changelog/2026-05-28-hard-budget-limits-now-available-for-github-advanced-security)

**Infosec**

-   [Anthropic’s first Project Glasswing update (May 22) reports more than 10,000 high or critical vulnerabilities found by partners, and 75 patched of an estimated 530 high or critical open-source bugs disclosed to maintainers](https://www.anthropic.com/news/glasswing-initial-update)
-   [Mozilla reports that Claude Mythos Preview found 271 bugs fixed in Firefox 150, 180 of them rated sec-high](https://hacks.mozilla.org/2026/05/behind-the-scenes-hardening-firefox/)
-   [Adversa AI’s TrustFall (May 7) shows Claude Code, Cursor CLI, Gemini CLI and Copilot CLI starting project-defined MCP servers after a single folder-trust prompt, and Anthropic declined the report as outside its threat model](https://adversa.ai/blog/trustfall-coding-agent-security-flaw-rce-claude-cursor-gemini-cli-copilot/)
-   [OpenAI releases GPT-5.5-Cyber in limited preview for verified security teams, a more permissive model for red teaming, penetration testing and vulnerability validation, per Help Net Security (May 8)](https://www.helpnetsecurity.com/2026/05/08/openai-gpt-5-5-cyber-model/)

**Tricks & Tips**

-   [Simon Willison says vibe coding and agentic engineering are converging in his work: he no longer reads every line agents write and treats them like another team’s service](https://simonwillison.net/2026/May/6/vibe-coding-and-agentic-engineering/)
-   [Claude Code 2.1.128 to 2.1.136 add `--plugin-url` for trying a plugin from a URL and `autoMode.hard_deny` rules that block actions even when allow rules match](https://code.claude.com/docs/en/whats-new/2026-w19.md)
-   [Simon Willison’s PyCon US lightning talk recaps six months of LLMs: coding agents became reliable, and laptop-sized open-weight models such as Qwen3.6-35B-A3B outperformed his expectations](https://simonwillison.net/2026/May/19/5-minute-llms/)

**Reddit & Twitter**

-   [The Hacker News thread on the Claude Opus 4.8 announcement has about 1,800 points and 1,400 comments](https://news.ycombinator.com/item?id=48311647)
-   [The Hacker News thread on Gemini CLI stopping on June 18, 2026 has about 400 points, with comments on naming, quotas and the closed-source Antigravity CLI](https://news.ycombinator.com/item?id=48196867)
-   [Simon Willison’s notes on Opus 4.8 call it “a modest but tangible improvement” and compare its effort levels with his pelican test](https://simonwillison.net/2026/May/28/claude-opus-4-8/)

**OSS**

-   [GitHub’s May 21 changelog says Copilot for Eclipse is open source under the MIT license, including completions, Next Edit Suggestions, agent mode and MCP integration](https://github.blog/changelog/2026-05-21-github-copilot-for-eclipse-is-open-source)
-   [OpenCode 1.14.51 (May 15) adds experimental background subagents so tasks keep running while you keep working](https://github.com/sst/opencode/releases/tag/v1.14.51)
-   [Google replaces the Apache 2.0 Gemini CLI with the closed-source Antigravity CLI for subscription users from June 18, while the Antigravity SDK is open source](https://simonwillison.net/2026/May/20/google-io/)
-   [Armin Ronacher asks that issue reports on Pi describe what the human actually observed, not AI-reworded text with guessed causes](https://simonwillison.net/2026/May/24/armin-ronacher/)
-   [Simon Willison releases Datasette Agent on May 21, an extensible assistant for asking questions about Datasette data, with plugins such as chart generation](https://simonwillison.net/2026/May/21/datasette-agent/)
