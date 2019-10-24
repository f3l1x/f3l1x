# SSH

## Convert SSH => OPENSSH

```sh
puttygen sshpriv.key -O private-openssh -o opensshpriv.key
```

## Multiple identities

You can setup multiple ssh keys on your host by following config.

### Bitbucket + Github

File `~/.ssh/config`

```ini
Host github.com
    User username
    HostName github.com
    IdentityFile ~/.ssh/rsa_github
    IdentitiesOnly yes

Host bitbucket.org
    User username
    HostName bitbucket.org
    IdentityFile ~/.ssh/rsa_bitbucket
    IdentitiesOnly yes
```

### Multiple Bitbucket/Github

File `~/.ssh/config`

```ini
Host personal.bitbucket.org
    User username1
    HostName personal.bitbucket.org
    IdentityFile ~/.ssh/rsa_bitbucket1
    IdentitiesOnly yes

Host work.bitbucket.org
    User username2
    HostName work.bitbucket.org
    IdentityFile ~/.ssh/rsa_bitbucket2
    IdentitiesOnly yes
```

Bitbucket for example has a wildcard DNS.

```sh
$ host personal.bitbucket.org
personal.bitbucket.org is an alias for bitbucket.org.
bitbucket.org has address 104.192.143.1
bitbucket.org has address 104.192.143.2
bitbucket.org has address 104.192.143.3
```

```sh
$ host work.bitbucket.org
work.bitbucket.org is an alias for bitbucket.org.
bitbucket.org has address 104.192.143.1
bitbucket.org has address 104.192.143.3
bitbucket.org has address 104.192.143.2
```

Github unfortunately does not have.
