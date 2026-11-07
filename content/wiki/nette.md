---
title: "Nette"
description: "https://github.com/nattreid"
status: ["Not started"]
source: "https://f3l1x.super.site/wiki/nette"
---

# CMS

-   [https://github.com/nattreid](https://github.com/nattreid)
-   [https://github.com/modette](https://github.com/modette)
-   [https://github.com/voonne](https://github.com/voonne)
-   [https://github.com/dravencms](https://github.com/dravencms)
-   [https://github.com/PolywebCZ](https://github.com/PolywebCZ)
-   [https://github.com/ThunboltCMS](https://github.com/ThunboltCMS)
-   [https://github.com/zbycz/npress](https://github.com/zbycz/npress)
-   [https://github.com/Ginny/NanoCMS](https://github.com/Ginny/NanoCMS)
-   [https://github.com/dmvk/cms](https://github.com/dmvk/cms)
-   [https://github.com/Mirgen/web\_cms](https://github.com/Mirgen/web_cms)
-   [https://github.com/occ2](https://github.com/occ2)
-   [https://github.com/netis-cms](https://github.com/netis-cms)
-   [https://github.com/wakerscz](https://github.com/wakerscz)
-   [https://github.com/chapcz/admin-sandbox](https://github.com/chapcz/admin-sandbox)

# Latte

## ifCurrentIn

```php
{block content}
{ifCurrentIn "Page:default", "Homepage:default"}
    Hello, standart macro
{/ifCurrentIn}

<div n:ifCurrentIn="'Page:default', 'Homepage:default'">
    Hello, n:macro
</div>
{/block}
```
