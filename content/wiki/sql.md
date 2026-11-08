---
title: "SQL"
date: "2022-02-01"
updated: "2024-11-06"
description: "SQL snippet that selects users whose local time matches 09:00 by converting the session time zone to a per-user timezone column."
status: ["Not started"]
source: "https://f3l1x.super.site/wiki/sql"
---

Casova zona

```php
SELECT id FROM users WHERE DATE_FORMAT('%H:%i', CONVERT_TZ(NOW(), @@SESSION.time_zone, timezone)) = '09:00'
```
