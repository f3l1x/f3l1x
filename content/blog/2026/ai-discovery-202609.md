---
title: "AI discovery: 2026/09"
description: "AI news for September 2026: Claude Opus 5.5 and Sonnet 5.5, GPT-6 Astra, Gemini 3.8 Flash, Cursor Projects and the Plugin4Shell flaw."
date: "2026-09-30"
tags: ["discovery","ai"]
---

## 01.09.2026 – 30.09.2026

**Product**

-   [Anthropic releases Claude Fable 5.1 on 1 September at $10 / $50 per million tokens with a 1M token context window and cache reads at $0.25, and Claude Mythos 5.1 for verified organizations only](https://platform.claude.com/docs/en/models/fable-5-1/whats-new-fable-5-1)
-   [Google releases Gemini 3.8 Flash on 2 September, available in Antigravity, AI Studio and Android Studio, plus a restricted Gemini 3.8 Flash Cyber for vetted defenders](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)
-   [OpenAI introduces GPT-6 Astra for ChatGPT and Codex on 3 September, including an experimental Codex feature that keeps notes across context windows](https://9to5mac.com/2026/09/04/openai-releasing-major-upgrade-to-chatgpt-and-codex-with-gpt-6-astra-details-here/)
-   [Claude Opus 5.5 launches on 22 September at $4 / $20 per million tokens, which Anthropic estimates at about 40% lower cost than Opus 5 on typical workloads](https://www.anthropic.com/index/claude-opus-5-5)
-   [Claude Sonnet 5.5 launches on 28 September on the Claude API, Bedrock, Google Cloud and Foundry, and Anthropic deprecates Sonnet 4.5, which retires on 30 November](https://platform.claude.com/docs/en/release-notes/overview)

**UX/UI**

-   [Cursor Projects (beta, 10 September) adds a coordinator agent that delegates a feature, migration or app to other agents on its own cloud machine and can watch a Slack channel or your PRs](https://cursor.com/changelog/projects)
-   [Copilot for JetBrains 1.18.0 adds assisted tool approvals, re-editing earlier messages with file rewind, and plan mode for the Codex agent](https://github.blog/changelog/2026-09-22-new-features-and-improvements-in-copilot-for-jetbrains/)
-   [Copilot weekly release for the week of 21 September brings VS Code 1.139 session list filters and renaming, a chat layout preview and Dev Containers on remote hosts](https://github.blog/changelog/2026-09-25-github-copilot-weekly-releases-september-21)

**Engineering**

-   [Cognition ships SWE-2 on 10 September, post-trained from Kimi K3, and reports FrontierCode 1.1 within one point of Fable 5.1 at 64% lower cost](https://cognition.com/blog/swe-2)
-   [Devin Desktop and CLI get Fusion on 11 September, a lead-and-sidekick harness that pairs a frontier planner with a cheaper executor, claiming up to 39% better efficiency](https://cognition.com/blog/local-fusion)
-   [Claude API adds on-demand compaction in beta on 14 September (header `compact-2026-09-04`), returning a signed summary block when your application decides to compact](https://platform.claude.com/docs/en/build-with-claude/compaction-on-demand)
-   [GPT-6.1 Sol becomes generally available in GitHub Copilot on 29 September for Pro+, Max, Business and Enterprise plans](https://github.blog/changelog/2026-09-29-gpt-6-1-sol-in-github-copilot)

**DevOps**

-   [Cursor self-hosted machines (2 September) keep tool execution on your own infrastructure, with team pools that scale on demand and sandbox providers such as AWS Lambda, Coder, Daytona and E2B](https://cursor.com/changelog/self-hosted-machines)
-   [Cloudflare announces Cursor Cloud Agents on Cloudflare Sandboxes, where the agent loop stays with Cursor and tool calls run in the customer's own account](https://www.cloudflare.com/press/press-releases/2026/cloudflare-expands-support-for-ai-coding-agents-with-cursor-cloud-agents-on-cloudflare-sandboxes/)
-   [Cursor Rollouts (23 September) watches each pull request as it deploys, reports health per environment and can open a revert PR, for Teams and Enterprise plans](https://cursor.com/changelog/rollouts-and-security-reviewer)
-   [npm trusted publishing can now manage dist-tags with short-lived OIDC credentials through an opt-in setting, so no long-lived token is needed for promoting a version](https://github.blog/changelog/2026-09-30-opt-in-dist-tag-permissions-for-npm-trusted-publishing)
-   [Dependabot gets repository-level runner settings (type, label, group) for version and security updates on private and internal repositories](https://github.blog/changelog/2026-09-29-repository-custom-runner-settings-for-dependabot)

**Infosec**

-   [Air Security's Plugin4Shell, a zero-click RCE that bypasses plugin SHA pinning, affects Claude Code, Codex, Copilot and Gemini CLI; Help Net Security reports fixes in Claude Code 2.1.179 and Codex 0.146.0, none for Copilot, and Gemini CLI deprecated instead of patched](https://www.helpnetsecurity.com/2026/09/18/plugin4shell-ai-coding-agents-vulnerability/)
-   [Endor Labs, a security vendor, publishes its own benchmark on 8 September in which GPT-6 Astra in Codex reaches 82.1% functional pass against 87.2% for Fable 5.1 in Claude Code, and also trails on secure pass](https://www.endorlabs.com/learn/gpt-6-astra-on-codex---the-biggest-codex-leap-to-date)
-   [GitHub agentic autofix can now use Copilot Memory for context when fixing security alerts and saves each fix pattern as a new memory (public preview)](https://github.blog/changelog/2026-09-25-agentic-autofix-now-uses-copilot-memory)

**Tricks & Tips**

-   [Addy Osmani's guide to Opus 5.5 (22 September) advises defining what "done" means, dropping "think carefully" lines, putting stop rules in CLAUDE.md and keeping the task list in a file](https://claude.dev/blog/getting-the-most-out-of-opus-5-5/)
-   [Armin Ronacher reports a 35-hour unattended GPT-6 Astra run that cost about $1,200 in API usage and added 75k lines of code he calls unreadable](https://lucumr.pocoo.org/2026/9/7/astra-why/)
-   [Claude API cache diagnostics leaves beta on 23 September: send a `diagnostics` object with the previous message id to see which part of the prompt prefix broke the cache](https://platform.claude.com/docs/en/build-with-claude/cache-diagnostics)

**Reddit & Twitter**

-   [The Hacker News thread on the Claude Opus 5.5 announcement passes 1,800 points, with debate about Anthropic's "pacing the frontier" wording and its motives](https://news.ycombinator.com/item?id=49803892)
-   [The Daily Claude digest of 24 September summarizes r/ClaudeAI and r/ClaudeCode reactions to Opus 5.5: praise for speed and fewer hedges, plus replies on when Fable 5.1 is still worth using](https://buttondown.com/thedailyclaude/archive/the-daily-claude-2026-09-24/)
-   [Hacker News discussion of Eoin Higgins's essay "There are no 'rogue' AI agents" (27 September) argues about sandboxing and accountability after OpenAI's Hugging Face incident](https://news.ycombinator.com/item?id=49868083)

**OSS**

-   [DeepSeek publishes V4.1 Flash weights under the MIT license, a mixture-of-experts model with a 1M token context window](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)
-   [Xiaomi open-sources MiMo-V2.6-Pro around 22 September, a 1.02T parameter model with 42B active and a 1M token context window, tagged MIT on its Hugging Face page](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-MOPD)
-   [OpenCode ships nine releases in September (v1.18.26 to v1.18.34), including a system prompt for GPT-6 models and Codex OAuth support for gpt-6 model names, per the Havoptic release tracker](https://www.havoptic.com/releases/opencode/2026/9)
-   [AWS open-sources the Strands harness under Apache 2.0 and says it cut token use by 28% across six benchmarks with the same models](https://www.techzine.eu/news/devops/144435/aws-releases-strands-harness-as-an-open-source-agent-framework/)
