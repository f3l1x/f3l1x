---
title: "Tracy integrace do Nette"
description: "Tracy jiste každý, kdo používa Nette, zná, ale znáte všechny její nastavení?"
tags: ["nette","tracy","php"]
date: "2018-01-14"
source: "https://f3l1x.super.site/blog/2018/tracy-integrace-do-nette"
---

Tracy jiste každý, kdo používa Nette, zná, ale znáte všechny její nastavení?

Tracy je skvělý nástroj, už si nedovedu představit projekt bez ní. Všichni ji používáme v rámci Nette Frameworku. Má dokonce i svůj web (https://tracy.nette.org/).

Někdo ji používá i samostatně, jenom aby se mu dobře vyvíjelo. To je určitě validní přístup. Já bych se však rád podíval na Tracy integraci v rámci Nette, protože tam je cesta dosti neprobádaná.

[Aktuální dokumentace](https://doc.nette.org/en/2.4/configuring#toc-tracy-debugger) hovoří o pár konfiguračních hodnotách. Následující nastavení můžete vložit přímo do souboru `config.neon`.

```yaml
tracy:
    email: %webmasterEmail%
    strictMode: true
    editor: ...
    browser: ...
    bar: # panely do Debugger baru
        - Nette\Bridges\DITracy\ContainerPanel # alias DI Container baru
        - IncludePanel
        - XDebugHelper('myIdeKey')
        - MyPanel(@MyService)
    blueScreen: # panely do Laděnky
        - DoctrinePanel::renderException
```

V rámci jednoho PR jsem se pokusil zachytit a popsat všechny nastavení, které Tracy můžete předat.

PR: https://github.com/nette/docs/pull/669

I mě samotného překvapilo, kolik částí se dá konfigurovat. Například `browser` je dost magická volba, použije se tehdy, když spouštíte script z CLI a zaloguje se laděnka. Tehdy Tracy zjistí, jestli je `browser` nastavený a připadně vám přes `exec` zavolá tento kód. V praxi se vám otevře prohlížeč s právě vyhozenou výjimkou.
