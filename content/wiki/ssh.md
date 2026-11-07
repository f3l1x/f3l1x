---
title: "SSH"
description: "You can setup multiple ssh keys on your host by following config."
status: ["Not started"]
source: "https://f3l1x.super.site/wiki/ssh"
---

## Convert SSH => OPENSSH

```text
puttygen sshpriv.key -O private-openssh -o opensshpriv.key
```

## Multiple identities

You can setup multiple ssh keys on your host by following config.

### Bitbucket + Github

File `~/.ssh/config`

```text
Host github.com    User username    HostName github.com    IdentityFile ~/.ssh/rsa_github    IdentitiesOnly yesHost bitbucket.org    User username    HostName bitbucket.org    IdentityFile ~/.ssh/rsa_bitbucket    IdentitiesOnly yes
```

### Multiple Bitbucket/Github

File `~/.ssh/config`

```text
Host personal.bitbucket.org    User username1    HostName personal.bitbucket.org    IdentityFile ~/.ssh/rsa_bitbucket1    IdentitiesOnly yesHost work.bitbucket.org    User username2    HostName work.bitbucket.org    IdentityFile ~/.ssh/rsa_bitbucket2    IdentitiesOnly yes
```

Bitbucket for example has a wildcard DNS.

```text
$ host personal.bitbucket.orgpersonal.bitbucket.org is an alias for bitbucket.org.bitbucket.org has address 104.192.143.1bitbucket.org has address 104.192.143.2bitbucket.org has address 104.192.143.3
```

```text
$ host work.bitbucket.orgwork.bitbucket.org is an alias for bitbucket.org.bitbucket.org has address 104.192.143.1bitbucket.org has address 104.192.143.3bitbucket.org has address 104.192.143.2
```

Github unfortunately does not have.
