---
title: "Nodejs: SASS a module distutils"
description: "Node.js ekosystem mám rád. Celkově Javascript je můj druhý nejsilnější jazyk. Když něco nechci psát v PHP, tak sáhnu po JS. Když do toho započítám Typescript, tak bomba."
tags: ["nodejs"]
date: "2025-01-09"
cover: "./nodejs-sass-a-module-distutils.assets/cover.png"
source: "https://f3l1x.super.site/blog/2024/nodejs-sass-a-module-distutils"
---

Node.js ekosystem mám rád. Celkově Javascript je můj druhý nejsilnější jazyk. Když něco nechci psát v PHP, tak sáhnu po JS. Když do toho započítám Typescript, tak bomba.

> Víte, že Node.js od verze 23.6+ podporuje nativně Typescript?
>
> [https://nodejs.org/api/typescript.html](https://nodejs.org/api/typescript.html)
>
> ![image](./nodejs-sass-a-module-distutils.assets/tweet-1876690820155531775.png)

Na OSX se mi stala chyba, která se mi sem tam opakuje a vždycky zapomenu o co jde. V hlavních rolích je tu **SASS** a modul distutils.

SASS již na nových projektech nepoužívám, šel jsem do [Tailwindu](https://tailwindcss.com/) a tak nějak není cesty zpět.

> Znáte TailwindUI? Umí to dost šetřit čas.
>
> [https://tailwindui.com/](https://tailwindui.com/)
>
> ![image](./nodejs-sass-a-module-distutils.assets/cleanshot_2025-01-09_at_17.28.332x.png)

Co s tím? Naštěstí stačí doinstalovat jeden balíček.

**OSX**

```shell
brew install python-setuptools
```

**Linux**

```shell
python3 -m pip install setuptools
```
