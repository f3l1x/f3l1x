---
title: "AI discovery: 2026/07"
description: "Monthly AI news for July 2026: Claude Opus 5, GPT-5.6, the 2026-07-28 MCP spec, the AsyncAPI npm compromise and GitHub stacked pull requests."
date: "2026-07-31"
tags: ["discovery","ai"]
---

## 01.07.2026 – 31.07.2026

**Product**

-   [Anthropic releases Claude Opus 5 on July 24 at $5 input and $25 output per million tokens, and reports it within 0.5% of Fable 5 on CursorBench 3.2 at half the cost per task](https://www.anthropic.com/news/claude-opus-5)
-   [OpenAI rolls out GPT-5.6 on July 9 in three tiers, Sol, Terra and Luna, across ChatGPT, Codex and the API](https://techzine.eu/news/applications/142797/gpt-5-6-now-widely-available-sol-terra-and-luna-launched)
-   [GitHub adds Claude Opus 5 to Copilot on July 24 for Pro+, Max, Business and Enterprise plans, selectable in VS Code, Visual Studio, JetBrains, Xcode, Eclipse, Copilot CLI and the cloud agent](https://github.blog/changelog/2026-07-24-claude-opus-5-is-now-available-in-github-copilot)
-   [Copilot cloud agent for Linear becomes generally available: assign a Linear issue and the agent drafts a pull request and posts progress back](https://github.blog/changelog/2026-07-23-copilot-cloud-agent-for-linear-is-now-generally-available)
-   [Gemini 3.6 Flash arrives in GitHub Copilot on July 21 for coding and agentic tasks, with an admin policy to enable it for Business and Enterprise](https://github.blog/changelog/2026-07-21-gemini-3-6-flash-is-now-available-in-github-copilot)

**UX/UI**

-   [VS Code July releases (v1.127 to v1.131) add git worktree sessions for Copilot, Claude and Codex, subagent visibility and a CI-failure banner](https://github.blog/changelog/2026-07-30-github-copilot-in-visual-studio-code-july-2026-releases)
-   [Stacked pull requests enter public preview on July 30, so reviewers can check each small dependent layer on its own and merge a whole stack or single layers](https://github.blog/changelog/2026-07-30-stacked-pull-requests-are-now-in-public-preview)
-   [GitHub Issues gets agent automation controls in public preview: agents record a reason and confidence for each change, and changes can be applied automatically or held as suggestions](https://github.blog/changelog/2026-07-23-agent-automation-controls-in-github-issues-in-public-preview)

**Engineering**

-   [The 2026-07-28 MCP specification drops the initialize handshake and sessions, adds `Mcp-Method` and `Mcp-Name` routing headers and cacheable list results, and deprecates Roots, Sampling and Logging](https://blog.modelcontextprotocol.io/posts/2026-07-28/)
-   [GitHub MCP Server already supports the new stateless MCP specification, announced on July 23 ahead of the July 28 release](https://github.blog/changelog/2026-07-23-github-mcp-server-supports-the-next-mcp-specification)
-   [Copilot code review agent skills and MCP server connections reach general availability, with MCP tool calls limited to read-only access](https://github.blog/changelog/2026-07-29-copilot-code-review-agent-skills-and-mcp-now-generally-available)
-   [GitHub Code Quality is generally available for Enterprise Cloud and Team, combining CodeQL with AI detection, quality gates and coverage reporting at $10 per active committer per month plus usage](https://github.blog/changelog/2026-07-20-github-code-quality-is-now-generally-available)

**DevOps**

-   [GitHub Actions gets self-repository syntax: a `uses:` value starting with `$/` resolves to the workflow's own repository at the running commit, with no checkout needed (runner 2.336.0 or newer)](https://github.blog/changelog/2026-07-30-reference-same-repository-actions-with-self-repository-syntax)
-   [The Xcode 27 runner image enters public preview on arm64 GitHub-hosted macOS runners, selected with the `xcode-27` label](https://github.blog/changelog/2026-07-16-xcode-27-runner-image-now-in-public-preview)
-   [GitHub Models is retired on July 30, with GitHub pointing users to Microsoft Foundry or Copilot](https://github.blog/changelog/2026-07-30-github-models-is-now-retired)

**Infosec**

-   [Microsoft analyses the July 14 compromise of the @asyncapi npm packages: a `pull_request_target` workflow led to poisoned releases with valid provenance and a payload that runs on import, so `--ignore-scripts` does not help](https://www.microsoft.com/en-us/security/blog/2026/07/15/unpacking-asyncapi-npm-supply-chain-compromise-import-time-payload-delivery/)
-   [Searchlight Cyber reports a pre-auth SQL injection in WordPress chained to remote code execution, found with GPT-5.6 Sol Ultra for roughly $25 of pro-rata subscription usage](https://slcyber.io/research-center/exploit-brokers-pay-500000-for-a-wordpress-rce-i-found-one-with-gpt5-6/)
-   [GitHub Actions now holds potentially malicious workflow runs in public repositories until a collaborator with write access approves them](https://github.blog/changelog/2026-07-28-github-actions-holds-potentially-malicious-workflows-for-approval)
-   [npm will scan newly published packages for malware before they can be installed, and dual-use packages must declare a `contentPolicy` and a `DISCLOSURE` file](https://github.blog/changelog/2026-07-28-npm-publish-time-malware-scanning-and-dual-use-metadata)
-   [npm granular access tokens that bypass 2FA will need an interactive 2FA prompt for sensitive actions, and GitHub plans to remove direct publishing from them in January 2027](https://github.blog/changelog/2026-07-31-restricting-npm-bypass-2fa-granular-access-tokens)

**Tricks & Tips**

-   [Anthropic’s guide to prompting Claude Opus 5 says to drop explicit verification instructions, constrain scope on narrow tasks and cap subagent spawning, with Claude Code env vars for depth and concurrency](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-opus-5)
-   [Ploy moves a production agent from Claude Opus 4.8 to GPT-5.6 and reports 3m 42s instead of 8m per build at 27% lower cost, plus the tool-schema and prompt-caching changes it needed](https://ploy.ai/blog/migrating-a-production-ai-agent-to-gpt-5-6)
-   [Cursor 3.11 (July 10) adds side chats via `/side` or `/btw` that branch off a running agent, plus a local search index over past agent transcripts](https://www.digitalapplied.com/blog/cursor-3-11-side-chats-agent-transcript-search-2026)

**Reddit & Twitter**

-   [Hacker News thread on the Claude Opus 5 launch (1,700+ points, 1,300+ comments) debates a system-card example, costs and autonomy](https://news.ycombinator.com/item?id=49038433)
-   [Hacker News thread on elevated errors on Claude Opus 5, with users reporting 529 overloads, frequent outages and mixed views on output quality](https://news.ycombinator.com/item?id=49068029)
-   [A Hacker News post about GPT-5.6 Sol deleting most of a Mac’s files draws comments recommending guard tools such as Bubblewrap, and off-site backups](https://news.ycombinator.com/item?id=48865230)
-   [Bottleneck Labs lets GPT-5.6 Sol run a small iOS app business for 24 hours; it spammed users and lost $447, and Hacker News argues over the prompt](https://news.ycombinator.com/item?id=49113059)

**OSS**

-   [Anaconda acquires the open source coding agent Kilo Code on July 15](https://anaconda.com/press/anaconda-acquires-kilo-code)
-   [OpenCode v1.18.0 (July 14) completes the Desktop v2 migration, with a setting to switch between the new and old layouts](https://github.com/sst/opencode/releases/tag/v1.18.0)
-   [GitHub’s Advisory Database now ingests the OpenSSF malicious-packages repository, extending Dependabot malware alerts beyond npm](https://github.blog/changelog/2026-07-28-dependabot-alerts-on-malicious-packages-across-more-ecosystems)
