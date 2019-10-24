# Factorio

Headless server in Docker (docker-compose.yml).

```docker
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