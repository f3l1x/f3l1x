---
title: "Git"
description: "Submoduly - https://chrisjean.com/git-submodules-adding-using-removing-and-updating/"
status: ["Not started"]
source: "https://f3l1x.super.site/wiki/git"
---

# Resources

-   Submoduly - [https://chrisjean.com/git-submodules-adding-using-removing-and-updating/](https://chrisjean.com/git-submodules-adding-using-removing-and-updating/)

# Tools

-   [https://github.com/mergestat/mergestat-lite](https://github.com/mergestat/mergestat-lite)
-   [https://github.com/mergestat/mergestat](https://github.com/mergestat/mergestat)
-   [https://sourced.tech/products/community-edition/](https://sourced.tech/products/community-edition/)
-   [https://github.com/gitsql](https://github.com/gitsql)
-   [https://github.com/dolthub/dolt](https://github.com/dolthub/dolt)
-   [https://github.com/src-d/gitbase](https://github.com/src-d/gitbase)

# Tricks

[https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html](https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html)

Vylistovani pouze zmenenych souboru v ramci commitu.

```javascript
#!/bin/bash

files=$(git ls-files -om --exclude-standard)

phpcs --standard=DrupalPractice $files
```
