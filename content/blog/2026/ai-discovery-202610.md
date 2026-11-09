---
title: "AI discovery: 2026/10"
description: "AI news for October 2026: Claude Haiku 5.5, GPT-6.1 Terra, Copilot Fusion, Agentic Workflows GA and the Tensorlake npm compromise."
date: "2026-10-31"
tags: ["discovery","ai"]
---

## 01.10.2026 – 31.10.2026

**Product**

-   [Anthropic releases Claude Haiku 5.5 on October 7 at $0.10 input and $0.50 output per million tokens for prompts up to 100k, with an adjustable effort setting](https://www.anthropic.com/claude-haiku-5-5)
-   [OpenAI launches GPT-6.1 Terra on October 26 in ChatGPT Work and Codex and in the API as gpt-6.1-terra, at $1 input and $5 output per million tokens](https://bleepingcomputer.com/news/artificial-intelligence/openai-launches-gpt-61-terra-with-3x-faster-ai-agents-50-percent-lower-pricing)
-   [GitHub makes Copilot Fusion generally available: it routes each task across models with Standard, High and Max effort levels](https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion)
-   [The GitHub Copilot app adds Projects for multi-repository work and computer use for macOS and Windows, both in public preview](https://github.blog/changelog/2026-10-28-github-copilot-app-universe-releases)

**UX/UI**

-   [Copilot can generate and edit images from natural language inside chat in VS Code, the Copilot app and the CLI (public preview)](https://github.blog/changelog/2026-10-28-generate-and-edit-images-directly-in-copilot)
-   [GitHub Design open-sources Replica (MIT), a prototyping tool that builds interactive prototypes from a team's own design system through the Copilot app](https://github.blog/changelog/2026-10-28-introducing-replica-an-open-source-ai-prototyping-tool)
-   [Figma connects Google Drive to its agent on all plans (October 30) and adds version history for generative plugins and shaders (October 27)](https://www.figma.com/release-notes/)
-   [Cursor cloud agents can build interactive canvases that teams share by link, with environments of up to 300 repositories that load 5x faster](https://cursor.com/changelog/cloud-agent-canvases-and-environments)

**Engineering**

-   [Claude Code 2.1.314 (October 30) adds the `permissions.blockWritesOutsideWorkingDirectories` setting so Write, Edit and NotebookEdit refuse paths outside the working directories](https://code.claude.com/docs/en/changelog)
-   [GitHub intelligence brings Copilot Memory to general availability on paid plans and adds Dreaming, an opt-in feature in public preview](https://github.blog/changelog/2026-10-28-github-intelligence-puts-your-code-context-and-history-to-work)
-   [VS Code 1.141 (October 7) adds a session grid for watching agent sessions side by side and agent sandboxing on Windows, macOS and Linux](https://code.visualstudio.com/updates/v1_141)
-   [Shared Copilot Automations, now rolling out, let a team own prompt-and-trigger workflows that run in the cloud and bill AI credits to the repository owner instead of the creator](https://github.blog/changelog/2026-10-28-build-shared-workflows-for-your-team-with-copilot-automations)

**DevOps**

-   [GitHub Agentic Workflows is generally available: Markdown-defined automations compile to Actions YAML and run read-only in a sandbox behind a firewall](https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available)
-   [Dependabot reachability analysis enters public preview for JavaScript and TypeScript on GitHub Enterprise Cloud to show whether vulnerable functions are actually called](https://github.blog/changelog/2026-10-28-prioritize-dependabot-alerts-with-reachability-analysis)
-   [Devin Oncall becomes generally available on October 19, alongside a new Devin Review rules editor and CI status checks for commits, branches and tags](https://docs.devin.ai/release-notes/overview)
-   [Cloudflare Birthday Week puts Artifacts in open beta, Basin (Iceberg on R2) in general availability and Workers KV Instant live on October 1, and adds Cloudflare Traces on October 2](https://blog.cloudflare.com/birthday-week-2026-wrap-up/)

**Infosec**

-   [Malicious tensorlake@0.5.144 appears on npm on October 8 and steals GitHub, npm, cloud and SSH credentials through a preinstall hook; it stays live for about 1h40m](https://github.com/tensorlakeai/tensorlake/security/advisories/GHSA-8g63-53c9-65j2)
-   [A Cloud Security Alliance note covers CVE-2026-103572 in Copilot for Visual Studio, fixed in the October 13 Patch Tuesday release (builds 17.14.42 and 18.10.4)](https://labs.cloudsecurityalliance.org/research/csa-research-note-mcp-launch-path-rce-opencode-copilot-20261/)
-   [Forever Security reports that OpenAI Codex followed a malicious AGENTS.md in over 90% of tests, and that a malicious CLAUDE.md can redirect Claude Code API traffic](https://www.infoworld.com/article/4240233/how-malicious-downloads-can-trick-ai-coding-agents-into-compromising-themselves.html)
-   [Anthropic expands its Cyber Verification Program on October 6 into Defense, Red Team and Specialized access tiers covering Opus 5.5, Sonnet 5.5 and Mythos 5.1](https://www.anthropic.com/news/cyber-verification-program)

**Tricks & Tips**

-   [Simon Willison argues that usage-billed services need hard budget caps by default, now that agents make it easy to build things that cost money](https://simonwillison.net/2026/Oct/3/default-hard-budget-caps/)
-   [CSA lists defenses against poisoned instruction files: code-owner review of AGENTS.md and CLAUDE.md, scanning for hidden Unicode, and not running agents from `~/Downloads` or home directories](https://labs.cloudsecurityalliance.org/research/csa-research-note-agent-instruction-file-poisoning-20261027/)
-   [Simon Willison measures about 1.25x more tokens for the same prompt on Haiku 5.5 than on Haiku 4.5, which offsets part of the price cut](https://simonwillison.net/2026/oct/7/claude-haiku-5-5/)
-   [The new Copilot app security extension installs with `copilot plugin install github-security@awesome-copilot` and runs `/security-review` on local changes](https://github.blog/changelog/2026-10-28-security-extension-for-the-github-copilot-app)

**Reddit & Twitter**

-   [A r/ClaudeAI user reports Haiku 5.5 cost about 12x more than GPT-6 Luna on one task ($24.96 vs $1.96); the top reply doubts the method](https://buttondown.com/thedailyclaude/archive/the-daily-claude-2026-10-08/)
-   [A Claude Opus 5.5 user says on X (October 6) that an agent deleted his Windows C: drive and that NAS backups saved him; the thread does not show which command caused it](https://runtimewire.com/article/claude-opus-55-user-reports-c-drive-deletion)

**OSS**

-   [Recursive releases Flint (around October 22), a 39.8B-parameter mixture-of-experts coding model with about 2.5B active parameters, as Apache 2.0 weights for local use](https://huggingface.co/RecursiveSI/flint)
-   [Mistral publishes the Large 4 weights on October 29 (about 1T parameters, 52B active, 1M context) on Hugging Face under a modified MIT license](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B)
-   [OpenCode v1.19.0 (October 11) adds `opencode upgrade --major` to move to OpenCode 2 and stops installing updates automatically](https://github.com/anomalyco/opencode/releases/tag/v1.19.0)
