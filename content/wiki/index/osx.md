---
title: "OSX"
date: "2025-01-23"
updated: "2025-01-23"
description: "macOS Homebrew snippets for upgrading all installed packages at once and upgrading every installed cask with a single command."
status: ["Not started"]
source: "https://f3l1x.super.site/wiki/index/osx"
---

# Brew

Upgrade all packages at once.

```shell
brew upgrade
```

Upgrade all cask at once.

```shell
brew upgrade --cask $(brew list --cask)
```
