---
title: "Docker"
date: "2022-09-28"
updated: "2025-05-16"
description: "Docker notes and links: Docker Hub build hooks, multi-stage builds, tiny static web images, image builders like BuildKit and Packer, and registries."
status: ["Not started"]
source: "https://f3l1x.super.site/wiki/docker"
---

# Resources

-   Docker Hub a vlastni hooky pro buildeni [https://medium.com/microscaling-systems/labelling-automated-builds-on-docker-hub-f3d073fb8e1](https://medium.com/microscaling-systems/labelling-automated-builds-on-docker-hub-f3d073fb8e1)
-   Docker - Multi Stage build - [https://laravel-news.com/multi-stage-docker-builds-for-laravel](https://laravel-news.com/multi-stage-docker-builds-for-laravel)
-   Zajimavy docker entrypoint pro Symfony ([https://github.com/dunglas/symfony-docker/tree/master/docker/php](https://github.com/dunglas/symfony-docker/tree/master/docker/php))
-   Extra maly docker image s webovym serverem [https://lipanski.com/posts/smallest-docker-image-static-website](https://lipanski.com/posts/smallest-docker-image-static-website)
-   S6 layer [https://github.com/serversideup/docker-php/blob/main/src/fpm-apache/etc/s6-overlay/s6-rc.d/apache2/run](https://github.com/serversideup/docker-php/blob/main/src/fpm-apache/etc/s6-overlay/s6-rc.d/apache2/run)

# Image Builder

-   [https://boxfuse.com/](https://boxfuse.com/)
-   [https://www.packer.io/](https://www.packer.io/)
-   [https://github.com/uber/makisu](https://github.com/uber/makisu)
-   [https://github.com/moby/buildkit](https://github.com/moby/buildkit)
-   [https://github.com/genuinetools/img](https://github.com/genuinetools/img)
-   [https://github.com/containers/buildah](https://github.com/containers/buildah)
-   [https://github.com/cyphar/orca-build](https://github.com/cyphar/orca-build)
-   [https://github.com/GoogleContainerTools/kaniko](https://github.com/GoogleContainerTools/kaniko)
-   [https://github.com/bazelbuild](https://github.com/bazelbuild)
-   [https://github.com/openshift/source-to-image](https://github.com/openshift/source-to-image)
-   [https://news.ycombinator.com/item?id=12324788](https://news.ycombinator.com/item?id=12324788)
-   [https://www.projectatomic.io/docs/docker-building-images/](https://www.projectatomic.io/docs/docker-building-images/)
-   [https://devspace.cloud/docs/cli/image-building/configuration/build-tools](https://devspace.cloud/docs/cli/image-building/configuration/build-tools)
-   [https://developer.cisco.com/codeexchange/github/repo/cisco/elsy/](https://developer.cisco.com/codeexchange/github/repo/cisco/elsy/)

# Supervisor

-   [https://speakerdeck.com/johanjanssens/multiprocess-php-containers-with-s6-overlay-confoo-2023-fff7f58f-9471-459c-a0f6-edcd6fc05736?slide=27](https://speakerdeck.com/johanjanssens/multiprocess-php-containers-with-s6-overlay-confoo-2023-fff7f58f-9471-459c-a0f6-edcd6fc05736?slide=27)
-   [http://smarden.org/runit/](http://smarden.org/runit/)

# Volumes

-   [https://www.optimum-web.com/shared-storage-volumes-in-docker-swarm/](https://www.optimum-web.com/shared-storage-volumes-in-docker-swarm/)
-   [https://thenewstack.io/tutorial-create-a-docker-swarm-with-persistent-storage-using-glusterfs/](https://thenewstack.io/tutorial-create-a-docker-swarm-with-persistent-storage-using-glusterfs/)
-   [https://stackoverflow.com/questions/68329622/share-volume-in-docker-swarm-for-many-nodes](https://stackoverflow.com/questions/68329622/share-volume-in-docker-swarm-for-many-nodes)
-   [https://infinit.sh.gruntech.org/](https://infinit.sh.gruntech.org/)
-   [https://github.com/libopenstorage/openstorage](https://github.com/libopenstorage/openstorage)
-   [https://stackoverflow.com/questions/47756029/how-does-docker-swarm-implement-volume-sharing](https://stackoverflow.com/questions/47756029/how-does-docker-swarm-implement-volume-sharing)

# Firewall

-   [https://blog.jarrousse.org/2023/03/18/how-to-use-ufw-firewall-with-docker-containers/](https://blog.jarrousse.org/2023/03/18/how-to-use-ufw-firewall-with-docker-containers/)

-   [https://github.com/chaifeng/ufw-docker](https://github.com/chaifeng/ufw-docker)

# Registry

-   [https://www.repoflow.io/](https://www.repoflow.io/)
