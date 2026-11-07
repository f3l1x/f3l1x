---
title: "Communitte: jak se zapojit do Nette komunity"
description: "Rádi byste se zapojili do nějakého open-source projektu kolem Nette? Zde je pár tipů."
tags: ["nette","contributte"]
date: "2019-03-31"
source: "https://f3l1x.super.site/blog/2019/communitte-jak-se-zapojit-do-nette-komunity"
---

Rádi byste se zapojili do nějakého open-source projektu kolem Nette? Zde je pár tipů.

V rámci unikátní 103. poslední soboty ([#posobota](https://posobota.cz/)), která se konala ve formě hackathonu, bylo potřeba dát pár tipů na projekty kolem Nette, které by se daly nějakým způsobem rozvinout nebo vylepšit. Zkusil jsem sepsat s [@chemix](https://github.com/chemix) pár bodů.

1.  Vytvořit více příkladů do [contributte/playground](https://github.com/contributte/playground). Aktuálně jich tam je 9, ale věřím, že jich lze vymyslet daleko více. Tento tip je spíš pro lidi, co už Contributte znají a používají. Taktéž existuje hrací **pískoviště** pro [Nettrine](https://github.com/nettrine/playground) a pro [Apitte](https://github.com/apitte/playground).
2.  Nevděčný, ale neméně důležitý, task by byl projít dokumentace Contributte/Apitte/Nettrine balíčků a opravit angličtinu či typos. Pro velké znalce třeba i doplnit nějaké drobnosti. Všechno je to dostupné na doméně [contributte.org](https://contributte.org/), pro lepší orientaci.
3.  Upgrade na Nette v3 u Contributte/Nettrine/Apitte. Máme-li v composeru např. `nette/di: ~2.4.12`, nově by to tedy bylo `nette/di: ~2.4.12|~3.0.0` a případně další úpravy, co jsou s tím spojené.
4.  Existuje ukázkový API projekt postavený na [Apitte](https://github.com/planette/forest-project). Zkusit si ho rozjet, napsat případně, co rozjetí bránilo. Udělat tam nějaký příkladný endpoint nebo cokoli dalšího.
5.  Existuje ukázkový projekt postavený na [Contributte & Nettrine](https://github.com/planette/nutella-project). Zkusit si ho rozjet, napsat případně, co rozjetí bránilo. Udělat tam nějaké příklady komponent nebo tak.
6.  Existuje celkem rozsáhle popsané možnosti Dependency Injection (DI) v Nette. V [repozitáři s ukázkami](https://github.com/planette/cookbook-dependency-injection) zápisu v [NEONu](https://doc.nette.org/cs/2.4/neon) a [CompilerExtension](https://doc.nette.org/cs/2.4/di-extensions). Bylo by fajn ho doplnit o nějaké další ukázky, upravit pro Nette v3. Určitě jsou nějaké edge-cases, které tam nejsou obsažené.
7.  Existuje projekt [commits.nette.org](https://github.com/planette/commits), který agreguje a zobrazuje všechny commity z Nette balíčků. Zkusit se podívat na kód, aktualizovat závislosti, přidat phpstan/testy, případně vylepšit vzhled nebo cokoli.
8.  Existuje projekt [componette.com](https://github.com/componette/componette), který eviduje všemožné rozšíření do Nette. Stálo by za to připravit filtr pro PHP verze a též podle Nette verze. Např. chci si vyfiltrovat jenom PHP 7.3 kompatibilní balíčky postavené na Nette v3 (např. nette/di >= 3.0.0).

Doufám, že jsem vám alespoň trochu více přiblížil projekty, které se kolem Nette točí, a do čeho se můžete hned zapojit.

Kódu zdar! 👨‍💻

Původní zpráva byla publikována na Nette fóru - [https://forum.nette.org/cs/31926-posobota-103-hackathon-praha-30-3-2019#p203420](https://forum.nette.org/cs/31926-posobota-103-hackathon-praha-30-3-2019#p203420).
