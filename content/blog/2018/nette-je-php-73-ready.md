---
title: "Nette je PHP 7.3 ready"
description: "Poslední verze Nette je opravdu PHP 7.3 ready. Beží na něm například portál componette.com."
tags: ["nette","php"]
date: "2018-12-31"
source: "https://f3l1x.super.site/blog/2018/nette-je-php-73-ready"
---

Poslední verze Nette je opravdu PHP 7.3 ready. Beží na něm například portál componette.com.

Jak už nadpis napovídá, Nette, aktuálně poslední stable verze 2.4, je připraveno na PHP 7.3. Nejenom [componette.com](https://componette.com/), ale i kluci z [Pecka Design](https://twitter.com/PeckaDesignDev) potvrzují připravenost.

Pokud váháte jak PHP 7.3 otestovat, doporučuji vyzkoušet Docker. Přes celkem jednoduchý Dockerfile jste schopni váš projekt rozjet a otestovat základní vlastnosti.

Toto je [Dockerfile](https://github.com/componette/componette/blob/master/.docker/app/Dockerfile) na componette:

Jak je vidno, vycházím tu z oficiálního PHP 7.3 FPM image a jako webserver používám [Caddy server](https://github.com/componette/componette/blob/master/.docker/app/Caddyfile). Caddy server je napsaný v Go a jeho konfigurace je vážně minimalistická. Obohatil jsem ji raději komentáři, ať se v tom člověk lépe vyzná.

Používáte Caddy server na produkci nebo jenom na vývoj, podělte se do komentářů.
