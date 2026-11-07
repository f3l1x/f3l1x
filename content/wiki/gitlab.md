---
title: "Gitlab"
description: "https://aymdev.io/en/blog/post/configure-a-docker-registry-for-a-gitlab-runner"
status: ["Not started"]
source: "https://f3l1x.super.site/wiki/gitlab"
---

# Resources

-   [https://aymdev.io/en/blog/post/configure-a-docker-registry-for-a-gitlab-runner](https://aymdev.io/en/blog/post/configure-a-docker-registry-for-a-gitlab-runner)

## Selfhosted

How to backup?

```shell
sudo gitlab-backup create SKIP=artifacts,repositories,registry,uploads,builds,pages,lfs,packages,terraform_state
```
