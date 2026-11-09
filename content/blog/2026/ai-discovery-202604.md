---
title: "AI discovery: 2026/04"
description: "Monthly AI news for April 2026: Claude Opus 4.7, GPT-5.5, Project Glasswing, the Vercel incident, Gemma 4 and DeepSeek V4."
date: "2026-04-30"
tags: ["discovery","ai"]
---

## 01.04.2026 – 30.04.2026

**Product**

-   [Anthropic releases Claude Opus 4.7 on 16 April at the same $5/$25 per million tokens as Opus 4.6, adding an `xhigh` effort level and gains in advanced software engineering](https://www.anthropic.com/news/claude-opus-4-7)
-   [OpenAI announces GPT-5.5 on 23 April for ChatGPT and Codex, with the API following at $5/$30 per million tokens, double GPT-5.4](https://the-decoder.com/openai-unveils-gpt-5-5-claims-a-new-class-of-intelligence-at-double-the-api-price/)
-   [Cursor 3 ships on 2 April as a unified agent workspace with an Agents Window for local and cloud agents and a plugin marketplace](https://cursor.com/blog/cursor-3)
-   [Windsurf 2.0 arrives on 15 April with an Agent Command Center and one-click handoff from local Cascade sessions to Devin in the cloud](https://testingcatalog.com/windsurf-2-0-adds-devin-and-agent-command-center/)

**UX/UI**

-   [Anthropic Labs launches Claude Design on 17 April, built on Opus 4.7, with export to Canva, PDF, PPTX and HTML](https://www.anthropic.com/news/claude-design-anthropic-labs)
-   [GitHub Copilot for JetBrains gets inline agent mode in public preview, plus Next Edit Suggestions previews and global auto approve](https://github.blog/changelog/2026-04-24-inline-agent-mode-in-preview-and-more-in-github-copilot-for-jetbrains-ides)
-   [GitHub moves the global pull requests dashboard to an opt-out public preview with a reworked inbox and PR list](https://github.blog/changelog/2026-04-23-global-pull-requests-dashboard-moves-to-opt-out-public-preview)
-   [Copilot Chat on github.com can now summarize, review and answer questions about a pull request or a single diff](https://github.blog/changelog/2026-04-23-copilot-chat-improvements-for-pull-requests)

**Engineering**

-   [Anthropic’s postmortem traces Claude Code quality complaints to three changes (lower default effort, a thinking-clearing bug, a verbosity prompt), all resolved by 20 April in v2.1.116](https://www.anthropic.com/engineering/april-23-postmortem)
-   [Copilot cloud agent is no longer limited to pull requests: it can plan before coding, push to a branch without opening a PR and run research on a codebase](https://github.blog/changelog/2026-04-01-research-plan-and-code-with-copilot-cloud-agent)
-   [GitHub CLI adds `gh skill` (v2.90.0+) to discover, install, pin and publish agent skills for Copilot, Claude Code, Cursor, Codex and Gemini CLI](https://github.blog/changelog/2026-04-16-manage-agent-skills-with-github-cli)
-   [The OpenAI Codex app update adds computer use on Mac, an in-app browser, PR reviews and SSH to remote devboxes](https://mjtsai.com/blog/2026/04/17/codex-for-almost-everything/)
-   [GitHub pauses new Copilot Pro, Pro+ and Student signups on 20 April and removes Opus models from Pro as it tightens usage limits](https://github.blog/changelog/2026-04-20-changes-to-github-copilot-plans-for-individuals)

**DevOps**

-   [Cloudflare makes Sandboxes and Containers generally available on 13 April, with persistent agent environments and an egress proxy that injects credentials so agents never see them](https://blog.cloudflare.com/sandbox-ga/)
-   [GitHub Actions OIDC tokens get an immutable `sub` claim built from owner and repository IDs, so a recycled repository name cannot inherit trust](https://github.blog/changelog/2026-04-23-immutable-subject-claims-for-github-actions-oidc-tokens)
-   [Copilot cloud agent starts over 20% faster by running on Actions custom images](https://github.blog/changelog/2026-04-27-copilot-cloud-agent-starts-20-faster-with-actions-custom-images)
-   [Copilot code review will consume GitHub Actions minutes on private repositories from 1 June 2026](https://github.blog/changelog/2026-04-27-github-copilot-code-review-will-start-consuming-github-actions-minutes-on-june-1-2026)
-   [Dependabot-based dependency graphs for Python (pip, uv, Poetry) give fuller transitive trees and SBOMs without using Actions minutes](https://github.blog/changelog/2026-04-23-dependabot-graphs-for-python)

**Infosec**

-   [Anthropic launches Project Glasswing on 7 April, giving partners access to the unreleased Claude Mythos Preview to find and fix vulnerabilities, backed by up to $100M in usage credits](https://www.anthropic.com/glasswing)
-   [Vercel confirms a breach that started with a compromised Context.ai tool used by an employee and exposed some customers’ non-sensitive environment variables](https://vercel.com/kb/bulletin/vercel-april-2026-security-incident)
-   [OX Security reports that MCP’s STDIO transport in the official Python, TypeScript, Java and Rust SDKs executes commands by design, leading to 10 CVEs; Anthropic calls the behaviour expected](https://www.ox.security/blog/the-mother-of-all-ai-supply-chains-critical-systemic-vulnerability-at-the-core-of-the-mcp/)
-   [OWASP’s Q1 2026 GenAI exploit round-up covers eight incidents, including the Flowise CVE-2025-59528 exploitation on 7 April and the LiteLLM supply-chain breach](https://genai.owasp.org/2026/04/14/owasp-genai-exploit-round-up-report-q1-2026/)

**Tricks & Tips**

-   [Anthropic’s guide to Opus 4.7 in Claude Code: front-load the task, batch questions, keep effort at `xhigh` and spell out when to use subagents and tools](https://claude.com/blog/best-practices-for-using-claude-opus-4-7-with-claude-code)
-   [A measurement of the Opus 4.7 tokenizer finds about 1.3x more tokens on real Claude Code content, roughly 20-30% higher session cost at unchanged prices](https://www.claudecodecamp.com/p/i-measured-claude-4-7-s-new-tokenizer-here-s-what-it-costs-you)
-   [Guide to running Gemma 4 26B-A4B locally with LM Studio’s headless `lms` CLI and pointing Claude Code at it through its Anthropic-compatible endpoint](https://ai.georgeliu.com/p/running-google-gemma-4-locally-with)

**Reddit & Twitter**

-   [Hacker News thread on the Opus 4.7 announcement, where commenters argue about adaptive thinking, hidden reasoning and perceived quality regressions](https://news.ycombinator.com/item?id=47793411)
-   [Hacker News thread on Project Glasswing, split between doubt about vendor claims and credit for AI-found vulnerability reports](https://news.ycombinator.com/item?id=47679121)
-   [Hacker News thread on the Claude Code postmortem, focused on silent cache and thinking changes and requests for visible controls](https://news.ycombinator.com/item?id=47878905)
-   [Simon Willison’s blog: a quantized Qwen3.6-35B-A3B on his laptop draws a better pelican on a bicycle than Opus 4.7, though he doubts it is the more capable model](https://simonwillison.net/2026/Apr/16/qwen-beats-opus/)

**OSS**

-   [Google releases Gemma 4 on 2 April under Apache 2.0 in E2B, E4B, 26B MoE and 31B dense sizes with up to 256K context](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/)
-   [DeepSeek releases V4-Pro (1.6T total, 49B active) and V4-Flash (284B total, 13B active) on 24 April as a preview with open weights and 1M context](https://api-docs.deepseek.com/news/news260424)
-   [Alibaba releases Qwen3.6-27B, a dense Apache 2.0 model scoring 77.2 on SWE-bench Verified](https://huggingface.co/Qwen/Qwen3.6-27B)
-   [Moonshot open-sources Kimi K2.6, a 1T-parameter MoE with 32B active, 256K context and 58.6 on SWE-Bench Pro](https://huggingface.co/moonshotai/Kimi-K2.6)
