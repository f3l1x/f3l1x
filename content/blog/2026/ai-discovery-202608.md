---
title: "AI discovery: 2026/08"
description: "Monthly AI digest for August 2026: Meta Muse Code, Gemini 3.7 Flash, Cursor joining SpaceX, Claude Code auto mode default and the ChainDrop npm worm."
date: "2026-08-31"
tags: ["discovery","ai"]
---

## 01.08.2026 – 31.08.2026

**Product**

-   [Meta launches Muse Code, its first coding agent, in preview alongside Muse Spark 1.2, with pay-as-you-go API pricing and a much cheaper contributor tier that lets Meta use your data to improve the model](https://www.cnbc.com/2026/08/05/meta-debuts-muse-code-to-take-on-anthropic-and-openai-.html)
-   [Google releases Gemini 3.7 Flash for coding and agents, scoring 65.3% on DeepSWE v1.1 (3.6 Flash: 49.0%) at an introductory $0.75 / $3.75 per million tokens through 2026](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/)
-   [Cursor announces that SpaceX has acquired it and calls Grok 4.6 an early look at what the two can build together](https://cursor.com/blog/joining-spacex)
-   [OpenAI says it plans to end Cursor’s access to its models after the SpaceX acquisition, with a proposed cutoff of November 12 and no future models](https://www.cnbc.com/2026/08/29/openai-cursor-spacex-model-access.html)
-   [Claude Code makes auto mode the default permission mode for new sessions on Pro, Max and Team plans from August 14](https://code.claude.com/docs/en/whats-new/2026-w32)
-   [Anthropic opens a research preview of the Model Hardware Standard, a shared specification that lets AI agents operate lab and manufacturing devices through MCP, the CLI or code](https://www.anthropic.com/news/model-hardware-standard-research-preview)

**UX/UI**

-   [Claude Code adds the `/design` skill (research preview), which publishes a canvas of editable UI artboards for you to pick from and have Claude implement](https://code.claude.com/docs/en/whats-new/2026-w34)
-   [Claude Code Desktop can `/resume` sessions started in the terminal, and Claude drafts feedback reports that you review before anything is sent](https://code.claude.com/docs/en/whats-new/2026-w35)
-   [GitHub Copilot app’s Customize tab becomes generally available, and VS Code 1.135 adds a single-pane Agents layout and per-model chat usage](https://github.blog/changelog/2026-08-28-github-copilot-weekly-releases-august-24)

**Engineering**

-   [Cursor describes Continuity, a Git storage system built on an object-storage write-ahead log, and Origin, the hosting platform built on it](https://cursor.com/blog/git-at-any-scale)
-   [Copilot code review now covers bot-authored and Copilot cloud agent pull requests, drops the 300-file / 20,000-line limit and adds resolution reasons](https://github.blog/changelog/2026-08-27-copilot-code-review-resolution-reasons-and-expanded-capabilities)
-   [Claude Code v2.1.224 lets sessions on the same machine message each other through `ListAgents` and `SendMessage`, and removes the 200-subagent cap](https://code.claude.com/docs/en/whats-new/2026-w32)
-   [GitHub Copilot in Visual Studio adds per-task reasoning effort, pinned and compared models, org-shared custom agents and Git agent review of uncommitted changes](https://github.blog/changelog/2026-08-28-github-copilot-in-visual-studio-august-update-2)

**DevOps**

-   [Cloudflare launches Kitesurf, a Rust browser for agents on Workers, using about 3.1 to 3.8 times less CPU and 4.7 to 7.0 times less memory than Chromium but running 1.7 to 1.8 times slower](https://blog.cloudflare.com/kitesurf/)
-   [Cursor cloud agents start from prebuilt environment builds and respond up to 3x faster, and builds become the default for all environments on August 17](https://cursor.com/blog/builds)
-   [GitHub says that from October 1 the Actions retention setting also covers checks, workflow runs and statuses, with a 90-day default](https://github.blog/changelog/2026-08-27-actions-retention-will-cover-checks-workflow-runs-and-statuses)
-   [GitHub announces it will deprecate six Copilot models on September 1, including Claude Opus 4.5, Opus 4.6, Sonnet 4.5 and Gemini 3.1 Pro](https://github.blog/changelog/2026-08-31-selected-github-copilot-models-deprecated)

**Infosec**

-   [ChainDrop, a Shai-Hulud-style npm worm that began with the keyv maintainer’s GitHub account, compromises hundreds of packages and steals CI and cloud secrets](https://www.bleepingcomputer.com/news/security/massive-chaindrop-npm-supply-chain-attack-infects-hundreds-of-packages/)
-   [Wiz details how ChainDrop also targets AI-agent credential stores and persists through Claude Code hooks and VS Code `tasks.json`](https://www.wiz.io/blog/keyv-and-cacheable-npm-supply-chain-attack)
-   [At Black Hat, Novee Security shows a GitHub issue can reach CI secrets through Claude Code (CVE-2026-54316), Gemini CLI and Codex; all three vendors shipped mitigations](https://www.esecurityplanet.com/threats/black-hat-2026-critical-flaws-found-in-anthropic-google-and-openai-coding-agents/)
-   [Wiz publishes how a script injection in a Snowflake workflow, missed in review by Copilot and GitHub Advanced Security, exposed a Jira API token](https://www.wiz.io/blog/red-agent-snowflake-copilot-cicd-bug)
-   [Embrace The Red reports hijacking Claude Code with Opus 5 in auto mode via a web page summary, and Anthropic closes the report as working as designed](https://embracethered.com/blog/posts/2026/breaking-claude-code-opus-5-and-automode/)

**Tricks & Tips**

-   [Anthropic’s guide to cheaper Claude Code sessions: `/clear` between tasks, pick model and effort early, audit `/context`, and `/rewind` instead of compacting](https://claude.com/blog/maximizing-the-value-of-your-claude-code-sessions)
-   [Fabien Sanglard shares his `agent.md` for code quality: short specific rules, test-first bug fixes, a fresh session per feature and letting the agent maintain the file](https://fabiensanglard.net/agent.md/index.html)
-   [One developer’s telemetry suggests keeping four tools active and loading the rest on demand cuts turn-zero tool schema overhead by 75 to 82 percent (self-reported, single setup)](https://m-reschreiter.at/en/blog/how-i-cut-80-percent-context-overhead-dynamic-tools)

**Reddit & Twitter**

-   [Hacker News thread on auto mode becoming the default in Claude Code, split between permission fatigue and wanting to keep approving by hand](https://news.ycombinator.com/item?id=49239021)
-   [Hacker News thread on OpenAI’s decision to cut off Cursor after the SpaceX acquisition](https://news.ycombinator.com/item?id=49486172)
-   [Hacker News thread on a tweet claiming Anthropic A/B tests reduced effort levels in Claude Code, where a Claude Code team member says the selected effort is the effort you get](https://news.ycombinator.com/item?id=49401549)
-   [Hacker News discussion of a developer’s week of using Codex more than Claude Code](https://news.ycombinator.com/item?id=49393051)

**OSS**

-   [Meta releases Muse Glimmer, a 30B open-weight model under Apache 2.0 built for local agent workflows, with a drafter for speculative decoding](https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model)
-   [Cloudflare open-sources Cloudflare OS, a platform that gives each person in an organization an agent, where every agent and app starts with access to nothing](https://blog.cloudflare.com/cloudflare-os/)
-   [Alibaba releases Qwen3.8-27B, a dense vision-language model under Apache 2.0 with 262K native context, while the 2.4T flagship uses a custom license](https://www.eweek.com/news/alibaba-qwen3-8-27b-license-apac-china/)
-   [Z.ai releases the GLM-5.3 weights on August 28 as a 756 GB download under its own commercial license](https://runtimewire.com/article/zai-releases-glm-5-3-open-weights-coding-cyber-defense)
-   [SpaceXAI’s Grok Build terminal coding agent reaches version 1.0 on August 7, with fixes for reliability, permissions and the interface; its open-source harness is Apache 2.0](https://runtimewire.com/zh/article/grok-build-1-0-spacexai-terminal-coding-agent)
