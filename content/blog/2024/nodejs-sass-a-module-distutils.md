---
title: "Nodejs: SASS a module distutils"
description: "Node.js ekosystem mám rád. Celkově Javascript je můj druhý nejsilnější jazyk. Když něco nechci psát v PHP, tak sáhnu po JS. Když do toho započítám Typescript, tak bomba."
tags: ["nodejs"]
date: "2025-01-09"
source: "https://f3l1x.super.site/blog/2024/nodejs-sass-a-module-distutils"
---

Node.js ekosystem mám rád. Celkově Javascript je můj druhý nejsilnější jazyk. Když něco nechci psát v PHP, tak sáhnu po JS. Když do toho započítám Typescript, tak bomba.

> > Víte, že Node.js od verze 23.6+ podporuje nativně Typescript?
> > 
> > [https://nodejs.org/api/typescript.html](https://nodejs.org/api/typescript.html)
> > 
> > ![image](https://prod-files-secure.s3.us-west-2.amazonaws.com/cd2f0ca9-eef7-4822-ba7b-d05d913a8c58/7b922f49-2ef6-472b-aa3d-c8ec6bf265e4/tweet-1876690820155531775.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKWL4WUI%2F20261107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261107T131942Z&X-Amz-Expires=21600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIAKiHicSqygFVnpBibwB%2FFFglaGDrWPUnPXhgGCQe9GXAiBkey0eKN0WLdJyqsi3p%2BQR%2BPlTUFOTtdyzXudVmEwxpyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnt3HxlFEknYNm5OEKtwDhAMxvgPHRFh6mqvAMLiq%2B9aBQdrYU2hZBtu5iADI5CEUYE%2FTlP3%2BGP7ktlSo3qKtzRvuZaA9S4dHaO0k0V40DD3qZH%2Fh32m5lMpBL%2Bxx6LgfsW8wotTdu1jHUUWwj40VTo4EvKxT4lXARruCJ7I9capM3cIOea4hNfTb6hGM2zOWMdbUDa3R5Dbuwt95XzRSMDxtROhMSqyJ3IkD1xCu1JBxpVS1LFIts268YOODedhOH2L%2BOHaQNLHUzOXW8b4t5WzUF%2BKspnQNoiqV%2BIkMM5yRIU%2Fa%2Bym8oR50Y%2BkLwvctYx%2FpX31w4IVpyBfFom75dKkcWHgrW0LaM9ZNk4JaE%2FkpHzXhVovsKQ4Hve3YZRMxdXy%2BZSHBjsSUhO%2FpwWKVE0VAOKps%2FNsOyUl9oj2F64LbjI0f9KNvknvejM39o7kz9Xv1D%2BIXiqqGBg5sx5E67n4%2BDjzOgDDbGI1wJU9QPckceIObcD5agG3mfgdV%2Bm045M6hpRAzBgagxOFwX%2FvOGROIKTgNfUfijbcY42z6CBLUrFdkINTitvEg8XQ%2FIhFLooG3yFGtcfciWBUvibEa7a3dYnNORJvcLwcf4GlHoLblCMsJRgTl5fNEEHKnxSgF%2FQStPZxFKw11nTAwvNe71wY6pgGtH0t4AnKO64OyEuLJKK2urdTaArbjfeEws9ocVbkFLibevdae2aOAxr4LYbWBx2PeXYXd8Edc4Gwk6K5azC19X238JXx1B3CyTy9nkRipxoqpJxTs9%2Fs1D2NdHcb85ZmNRpfel8heHmRQUlBee3zBQ6W8pbuR868sRFeHfJEyvr8zgQ9zM8giZdmcs6S3lFU%2FxbOKbyJbjk%2BP8uwSgo0iYcPtWPTv&X-Amz-Signature=538f0f05a28234eba939b7731fba930627bf36df85a960536187b3990ae27bac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Na OSX se mi stala chyba, která se mi sem tam opakuje a vždycky zapomenu o co jde. V hlavních rolích je tu **SASS** a modul distutils.

SASS již na nových projektech nepoužívám, šel jsem do [Tailwindu](https://tailwindcss.com/) a tak nějak není cesty zpět.

> > Znáte TailwindUI? Umí to dost šetřit čas.
> > 
> > [https://tailwindui.com/](https://tailwindui.com/)
> > 
> > ![image](https://prod-files-secure.s3.us-west-2.amazonaws.com/cd2f0ca9-eef7-4822-ba7b-d05d913a8c58/3e136329-7e54-453e-b39f-53a00ff9ee90/CleanShot_2025-01-09_at_17.28.332x.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKWL4WUI%2F20261107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261107T131942Z&X-Amz-Expires=21600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIAKiHicSqygFVnpBibwB%2FFFglaGDrWPUnPXhgGCQe9GXAiBkey0eKN0WLdJyqsi3p%2BQR%2BPlTUFOTtdyzXudVmEwxpyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnt3HxlFEknYNm5OEKtwDhAMxvgPHRFh6mqvAMLiq%2B9aBQdrYU2hZBtu5iADI5CEUYE%2FTlP3%2BGP7ktlSo3qKtzRvuZaA9S4dHaO0k0V40DD3qZH%2Fh32m5lMpBL%2Bxx6LgfsW8wotTdu1jHUUWwj40VTo4EvKxT4lXARruCJ7I9capM3cIOea4hNfTb6hGM2zOWMdbUDa3R5Dbuwt95XzRSMDxtROhMSqyJ3IkD1xCu1JBxpVS1LFIts268YOODedhOH2L%2BOHaQNLHUzOXW8b4t5WzUF%2BKspnQNoiqV%2BIkMM5yRIU%2Fa%2Bym8oR50Y%2BkLwvctYx%2FpX31w4IVpyBfFom75dKkcWHgrW0LaM9ZNk4JaE%2FkpHzXhVovsKQ4Hve3YZRMxdXy%2BZSHBjsSUhO%2FpwWKVE0VAOKps%2FNsOyUl9oj2F64LbjI0f9KNvknvejM39o7kz9Xv1D%2BIXiqqGBg5sx5E67n4%2BDjzOgDDbGI1wJU9QPckceIObcD5agG3mfgdV%2Bm045M6hpRAzBgagxOFwX%2FvOGROIKTgNfUfijbcY42z6CBLUrFdkINTitvEg8XQ%2FIhFLooG3yFGtcfciWBUvibEa7a3dYnNORJvcLwcf4GlHoLblCMsJRgTl5fNEEHKnxSgF%2FQStPZxFKw11nTAwvNe71wY6pgGtH0t4AnKO64OyEuLJKK2urdTaArbjfeEws9ocVbkFLibevdae2aOAxr4LYbWBx2PeXYXd8Edc4Gwk6K5azC19X238JXx1B3CyTy9nkRipxoqpJxTs9%2Fs1D2NdHcb85ZmNRpfel8heHmRQUlBee3zBQ6W8pbuR868sRFeHfJEyvr8zgQ9zM8giZdmcs6S3lFU%2FxbOKbyJbjk%2BP8uwSgo0iYcPtWPTv&X-Amz-Signature=6d4c789da91416b91601c4674fb5e3703eca83ad3bf5ea8b45404166d4cfa07f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Co s tím? Naštěstí stačí doinstalovat jeden balíček.

**OSX**

```shell
brew install python-setuptools
```

**Linux**

```shell
python3 -m pip install setuptools
```
