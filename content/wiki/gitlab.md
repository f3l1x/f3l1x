---
title: "Gitlab"
date: "2022-12-02"
updated: "2024-11-07"
description: "Notes on GitLab: a guide to configuring a Docker registry for a GitLab runner and a backup command for self-hosted instances."
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
