---
title: "Makefile"
date: "2021-08-31"
updated: "2024-11-06"
description: "Makefile snippet showing how to read user input from the terminal with read and echo inside a make target."
status: ["Not started"]
source: "https://f3l1x.super.site/wiki/makefile"
---

## Read user input

```javascript
do :
    @echo "What is your age?: "; \
    read AGE; \
    echo "Your age is ", $$(AGE)
```
