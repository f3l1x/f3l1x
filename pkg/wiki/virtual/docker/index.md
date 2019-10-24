# Docker

## OSX

Useful host aliases:

- host.docker.internal
- gateway.docker.internal

## Shortcuts

```sh
$ curl -fsSL https://raw.github.com/tcnksm/docker-alias/master/zshrc >> ~/.bashrc && source ~/.bashrc
```

```sh
# ------------------------------------
# Docker alias and function
# ------------------------------------

# Get latest container ID
alias dl="docker ps -l -q"

# Get container process
alias dps="docker ps"

# Get process included stop container
alias dpa="docker ps -a"

# Get images
alias di="docker images"

# Get container IP
alias dip="docker inspect --format '{{ .NetworkSettings.IPAddress }}'"

# Run deamonized container, e.g., $dkd base /bin/echo hello
alias dkd="docker run -d -P"

# Run interactive container, e.g., $dki base /bin/bash
alias dki="docker run -i -t -P"

# Execute interactive container, e.g., $dex base /bin/bash
alias dex="docker exec -i -t"

# Stop all containers
dstop() { docker stop $(docker ps -a -q); }

# Remove all containers
drm() { docker rm $(docker ps -a -q); }

# Stop and Remove all containers
alias drmf='docker stop $(docker ps -a -q) && docker rm $(docker ps -a -q)'

# Remove all images
dri() { docker rmi $(docker images -q); }

# Remove all <none> images
drin() { docker rmi -f $(docker images --filter "dangling=true" -q); }

# Dockerfile build, e.g., $dbu tcnksm/test 
dbu() { docker build -t=$1 .; }

# Show all alias related docker
dalias() { alias | grep 'docker' | sed "s/^\([^=]*\)=\(.*\)/\1 => \2/"| sed "s/['|\']//g" | sort; }
```

## Commands

### Enter to container

```sh
docker exec -it [container-id] bash
```

```sh
docker attach [container-id]
```

### Delete all container

```sh
docker rm -f $(docker ps -a -q)
```

### Delete all images

```sh
docker rmi -f $(docker images -q)
```

### Delete `<none>` images 

```sh
docker rmi -f $(docker images --filter "dangling=true" -q)
```

## Installation

```sh
# Check Kernel Version #
$ uname -r

# Prerequisites #
$ sudo apt-get install apt-transport-https ca-certificates

# Install/Enable aufs support #
$ sudo apt-get install linux-image-extra-`uname -r`

# Add GPG Key #
$ sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D

# Add Docker Repo to Ubuntu 12.04, 14.04 & 15.10 Systems #
$ sudo sh -c "echo 'deb https://apt.dockerproject.org/repo ubuntu-'$(lsb_release -cs)' main' >> /etc/apt/sources.list.d/docker.list"

# Add Docker Repo to Debian Systems 7 & 8 #
$ sudo sh -c "echo 'deb https://apt.dockerproject.org/repo debian-'$(lsb_release -cs)' main' >> /etc/apt/sources.list.d/docker.list"

# Add Docker Repo to Mint 17.1, 17.2 & 17.3 Systems #
$ sudo sh -c "echo 'deb https://apt.dockerproject.org/repo ubuntu-trusty main' >> /etc/apt/sources.list.d/docker.list"

# Update system index #
$ sudo apt-get update && sudo apt-get upgrade

# Install Docker #
$ sudo apt-get install docker-engine

# Start Docker daemon #
$ sudo service docker start     # For SysVinit Systems #
$ sudo systemctl start docker   # For systemd Systems #

# Verify Docker #
$ sudo docker run hello-world
```

## Share SSH

```sh
docker run -rm -t -i -v $(dirname $SSH_AUTH_SOCK) -e SSH_AUTH_SOCK=$SSH_AUTH_SOCK ubuntu /bin/bash
```
```sh
docker run --volume $SSH_AUTH_SOCK:/ssh-agent --env SSH_AUTH_SOCK=/ssh-agent ubuntu ssh-add -l
```
