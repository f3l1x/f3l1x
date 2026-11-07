---
title: "Disabling FortiVPN Auto-Start on macOS"
description: "Modify the following launch agents to stop FortiClient from starting at boot:"
date: "November 30, 2025"
source: "https://f3l1x.super.site/notes/2025/disabling-fortivpn-auto-start-on-macos"
---

Modify the following **launch agents** to stop FortiClient from starting at boot:

File: `/Library/LaunchAgents/com.fortinet.forticlient.credential_store.plist`

```xml
<key>RunAtLoad</key>
<false/>
<key>KeepAlive</key>
<false/>
```

After rebooting, check running processes to confirm FortiClient no longer starts automatically.

```text
ps aux | grep -i forti
```

If FortiClient does **not** appear in the output, the changes were successful. For more details, refer to the **[official docs](https://docs.fortinet.com/product/forticlient/reference)****.**
