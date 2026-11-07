---
title: "Doctrine - calculation of changeSet"
description: "Při práci s Doctrine a UUIDs v Symfony se často potýkáme s několika specifickými výzvami. Tento článek shrnuje klíčové aspekty správného použití."
date: "2025-11-29"
source: "https://f3l1x.super.site/blog/2025/doctrine-calculation-of-changeset"
---

Při práci s Doctrine a UUIDs v Symfony se často potýkáme s několika specifickými výzvami. Tento článek shrnuje klíčové aspekty správného použití.

### Hlavní body

-   Doctrine počítá changeSet porovnáním hodnot, nikoliv objektů
-   Při použití UUID objektů je potřeba implementovat správné metody pro porovnání
-   UUIDs je vhodné používat jako primární klíče namísto inkrementálních ID

### Nejčastější problémy

1.  **Porovnání UUID objektů**

-   Doctrine nedokáže správně detekovat změny u objektových hodnot
-   Řešení je implementace metody `__toString()` nebo použití vlastního typu

3.  **Typová kontrola**

-   Symfony a Doctrine mohou pracovat s různými reprezentacemi UUID
-   Pro konzistenci je vhodné používat stejný typ napříč aplikací

5.  **Optimalizace výkonu**

-   UUID jako řetězce jsou méně efektivní než binární reprezentace
-   Pro produkční nasazení zvažte binární ukládání UUID

### Doporučené postupy

-   Používejte dedikované knihovny pro práci s UUID
-   Implementujte vlastní Doctrine typy pro konzistentní konverzi
-   Dbejte na správné porovnávací metody v entitách

Tato problematika je důležitá zejména u větších aplikací, kde správná implementace může výrazně ovlivnit výkon a konzistenci dat.

## Reference

[https://medium.com/ekino-france/symfony-uuid-doctrine-and-type-hinting-everything-you-should-know-b846519a9927](https://medium.com/ekino-france/symfony-uuid-doctrine-and-type-hinting-everything-you-should-know-b846519a9927)
