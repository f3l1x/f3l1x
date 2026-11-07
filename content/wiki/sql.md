---
title: "SQL"
description: "Casova zona"
status: ["Not started"]
source: "https://f3l1x.super.site/wiki/sql"
---

Casova zona

```php
SELECT id FROM users WHERE DATE_FORMAT('%H:%i', CONVERT_TZ(NOW(), @@SESSION.time_zone, timezone)) = '09:00'
```
