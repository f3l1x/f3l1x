---
title: ".ENV"
date: "2021-08-30"
updated: "2024-11-07"
description: "Shell script that merges a .env example file into a production .env, adding only the variables that are missing, with usage example."
status: ["Not started"]
source: "https://f3l1x.super.site/wiki/env"
---

# Merge .ENV

## Usage

```text
sh merge-dotenv.sh env.example env.production
```

## Script

```shell
#!/bin/bash

EXAMPLE=$1
DOTENV=$2

while IFS='' read -r line || [[ -n "$line" ]]; do
    NAME="$(cut -d'=' -f1 <<<"$line")"
    if ! grep -q "$NAME" "$DOTENV"
    then
        echo "adding $NAME variable to $DOTENV"
        echo "$line" >> "$DOTENV"
    fi
done < "$EXAMPLE"
```

merge-dotenv.sh
