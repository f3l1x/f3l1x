# Merge .ENV

## Usage

```
sh merge-dotenv.sh env.example env.production
```

## Script

```bash
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

