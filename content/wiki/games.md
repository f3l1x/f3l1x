---
title: "Games"
description: "Headless server in Docker (docker-compose.yml)."
status: ["Not started"]
source: "https://f3l1x.super.site/wiki/games"
---

# Factorio

Headless server in Docker (docker-compose.yml).

```text
version: '3'

services:
  factorio:
    image: dtandersen/factorio:0.16
    ports:
      - 34197:34197/udp
      - 27015:27015/tcp
    volumes:
      - ./data:/factorio
    stdin_open: true
    tty: true
```
