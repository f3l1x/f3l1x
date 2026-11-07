---
title: ".ENV"
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
