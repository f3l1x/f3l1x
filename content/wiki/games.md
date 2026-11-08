---
title: "Games"
date: "2021-08-30"
updated: "2024-11-07"
description: "Notes on running a headless Factorio game server in Docker, with a docker-compose.yml example exposing the game and RCON ports."
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
