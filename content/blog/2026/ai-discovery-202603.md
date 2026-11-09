---
title: "AI discovery: 2026/03"
description: "AI news for March 2026: GPT-5.4, Claude Code auto mode, Cursor Composer 2, the LiteLLM and axios supply chain attacks and the Claude Code source leak."
date: "2026-03-31"
tags: ["discovery","ai"]
---

## 01.03.2026 – 31.03.2026

**Product**
-   [OpenAI releases GPT-5.4 on March 5 with native computer use in Codex and the API, 75% on OSWorld-Verified (GPT-5.2: 47.3%) and a 1M-token API context window](https://thenextweb.com/news/openai-gpt-54-launch-computer-use-benchmarks)
-   [Claude Code adds auto mode (a classifier approves safe actions and blocks risky ones, research preview), computer use in the desktop app and PR auto-fix on Claude Code on the web](https://code.claude.com/docs/en/whats-new/2026-w13)
-   [Cursor ships Composer 2 on March 19, priced at $0.50 input and $2.50 output per million tokens (Fast variant: $1.50 and $7.50)](https://cursor.com/changelog/composer-2)
-   [On March 13 Anthropic makes the 1M-token context window generally available for Opus 4.6 and Sonnet 4.6 at standard per-token pricing, with up to 600 images or PDF pages per request](https://claude.com/blog/1m-context-ga)
-   [OpenAI announces Codex Security, an agent that scans for vulnerabilities and proposes and applies fixes, as a research preview for ChatGPT Pro, Enterprise, Business and Edu customers](https://www.eweek.com/news/openai-codex-security-ai-agent-enterprise-vulnerabilities/)

**UX/UI**
-   [Google Labs rebuilds Stitch as an AI-native design canvas with a design agent, voice input and a DESIGN.md file for moving design rules between tools](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/)
-   [Figma opens its canvas to coding agents: the `use_figma` MCP tool can write to the canvas, free during the open beta, with markdown skills to teach agents a team's conventions](https://www.bitovi.com/blog/figma-just-opened-the-canvas-to-agents.-heres-what-actually-happens)
-   [GitHub shows coding agent sessions (Copilot, Claude, Codex) under the assignee in Issues and in Projects table and board views](https://github.blog/changelog/2026-03-26-agent-activity-in-github-issues-and-projects)
-   [GitHub puts a redesigned pull requests dashboard at github.com/pulls into public preview, with an inbox, saved views and AND/OR search](https://github.blog/changelog/2026-03-26-new-pull-requests-dashboard-is-in-public-preview)

**Engineering**
-   [OpenAI releases GPT-5.4 mini and nano on March 17, with mini scoring 54.4% on SWE-Bench Pro (GPT-5.4: 57.7%) and usable as a subagent in Codex](https://the-decoder.com/?p=33336)
-   [Anthropic launches Code Review for Claude Code: parallel agents review each pull request and a verification step filters false positives, at about $15 to $25 per review](https://www.helpnetsecurity.com/2026/03/10/anthropic-claude-code-review/)
-   [GitHub's Copilot coding agent can resolve merge conflicts on a pull request when you mention `@copilot`, then checks build and tests before pushing](https://github.blog/changelog/2026-03-26-ask-copilot-to-resolve-merge-conflicts-on-pull-requests)
-   [Cursor admits it should have disclosed that Composer 2 is built on Moonshot's open-source Kimi K2.5, saying about a quarter of the pretraining came from the base model](https://the-decoder.com/cursor-quietly-built-its-new-coding-model-on-top-of-chinese-open-source-kimi-k2-5)

**DevOps**
-   [Cloudflare puts Dynamic Workers into open beta: V8 isolate sandboxes for AI-generated code that start in milliseconds, with outbound network access that can be blocked](https://blog.cloudflare.com/dynamic-workers/)
-   [Datadog's MCP server is generally available, giving Claude Code, Cursor, Codex and Copilot access to live logs, metrics and traces](https://www.datadoghq.com/about/latest-news/press-releases/datadog-launches-mcp-server/)
-   [Custom images for GitHub-hosted runners are generally available, so you can bake tools, dependencies and certificates into your own runner image](https://github.blog/changelog/2026-03-26-custom-images-for-github-hosted-runners-are-now-generally-available)
-   [GitHub Actions run summaries now show the markdown config of an agentic workflow as it was when the run executed](https://github.blog/changelog/2026-03-26-view-agentic-workflow-configs-in-the-actions-run-summary)

**Infosec**
-   [Trend Micro analyzes the compromised axios npm releases 1.14.1 and 0.30.4 (March 31), which pulled in a hidden dependency that installed a cross-platform remote access trojan](https://www.trendmicro.com/en/research/26/c/axios-npm-package-compromised.html)
-   [Aqua Security's advisory (March 21) covers the malicious Trivy v0.69.4 release of March 19 and force-pushed `trivy-action` and `setup-trivy` tags that ran malicious commits](https://github.com/aquasecurity/trivy/security/advisories/GHSA-69fq-xp46-6x23)
-   [LiteLLM confirms that PyPI releases 1.82.7 and 1.82.8 on March 24 contained a credential stealer, removed them from PyPI and links the incident to the Trivy compromise](https://docs.litellm.ai/blog/security-update-march-2026)
-   [Claude Code 2.1.88 ships a source map to npm on March 31, exposing about 512,000 lines of TypeScript; Anthropic calls it a packaging error, not a breach](https://heise.de/-11242079)
-   [A CMS misconfiguration exposes about 3,000 unpublished Anthropic assets, and Anthropic confirms it is testing a new model, Claude Mythos, with early-access customers](https://fortune.com/2026/03/26/anthropic-says-testing-mythos-powerful-new-ai-model-after-data-leak-reveals-its-existence-step-change-in-capabilities/)
-   [GitHub will train on Copilot Free, Pro and Pro+ interaction data from April 24 unless you opt out in settings; Business and Enterprise are exempt](https://www.theregister.com/2026/03/26/github_ai_training_policy_changes/)

**Tricks & Tips**
-   [A GitHub engineer walks through a Copilot CLI workflow: plan with `/plan`, implement with `/autopilot`, loop on Copilot code review, then finish with a human review](https://github.blog/ai-and-ml/github-copilot/agent-driven-development-in-copilot-applied-science/)
-   [GitHub's Squad post shows how to set up a team of Copilot agents in a repository that share decisions through versioned files](https://github.blog/ai-and-ml/github-copilot/how-squad-runs-coordinated-ai-agents-inside-your-repository/)
-   [Claude Code 2.1.85 (March 26) lets hooks declare an `if` field in permission rule syntax, such as `Bash(git *)`, so a hook only runs for matching tool calls](https://github.com/anthropics/claude-code/releases/tag/v2.1.85)
-   [Anthropic's harness design write-up: a separate, skeptical evaluator agent works better than self-review, but costs more (a 6-hour run at $200 versus 20 minutes at $9)](https://www.anthropic.com/engineering/harness-design-long-running-apps)

**Reddit & Twitter**
-   [On Hacker News, the thread on the Claude Code source map leak reaches 2,095 points](https://news.ycombinator.com/item?id=47584540)
-   [On Hacker News, the thread on the malicious `litellm_init.pth` in LiteLLM 1.82.8 collects 739 points before moderators move the discussion to an earlier thread](https://news.ycombinator.com/item?id=47501729)
-   [On Hacker News, a 1,274-point thread about OpenCode's homepage collects complaints about defaults and stability and suggestions to try Codex or Claude Code](https://news.ycombinator.com/item?id=47460525)

**OSS**
-   [Mistral releases Small 4 under Apache 2.0 on March 16: 119B parameters (6B active) and 256k context, with reasoning, vision and coding in one model](https://mistral.ai/news/mistral-small-4)
-   [NVIDIA releases the open Nemotron 3 Super: 120B parameters (12B active), 1M-token context, available on Hugging Face and OpenRouter](https://siliconangle.com/2026/03/11/nvidias-nemotron-super-3-model-agentic-systems-launches-five-times-higher-throughput/)
-   [OpenAI announces on March 19 that it will acquire Astral, the maker of uv, Ruff and ty, and says it plans to keep supporting the open source tools](https://pydevtools.com/blog/openai-acquires-astral/)
