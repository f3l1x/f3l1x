#!/bin/bash
set -e

################################################################################
## CONFIGURATION ###############################################################
################################################################################

USERNAME=${USER:-felix}
HOME_DIR=/home/${USERNAME}
APPS_DIR=${HOME_DIR}/apps

# Distribution
OS_DISTRIBUTION=uknown
OS_CODENAME=uknown
OS_ARCH=x86_64

# Base distribution (e.q. ubuntu for linux mint)
OS_BASE_DISTRIBUTION=uknown
OS_BASE_CODENAME=uknown

export DEBIAN_FRONTEND=noninteractive

################################################################################
## USAGE #######################################################################
################################################################################

usage() {

local distribution=${OS_DISTRIBUTION}
local codename=${OS_CODENAME}

if [ $OS_DISTRIBUTION != $OS_BASE_DISTRIBUTION ]; then
	distribution="$OS_DISTRIBUTION / $OS_BASE_DISTRIBUTION"
fi

if [ $OS_CODENAME != $OS_BASE_CODENAME ]; then
	codename="$OS_CODENAME / $OS_BASE_CODENAME"
fi

cat << EOF
Install all requirements. 

Distribution: ${distribution}
Codename: ${codename}
Architecture: ${OS_ARCH}

Username: ${USERNAME}
Userdir: ${HOME_DIR}

Usage:

  packages    Install base packages.
  ppa         Setup ppa.
  apps        Setup apps.
  sudo        Setup sudo.
  dotfiles    Setup dotfiles.

EOF
}

################################################################################
## SETUP(S) ####################################################################
################################################################################

# SETUP PACKAGES ===============================================================
# ==============================================================================

setup_packages() {
	# Update cache
	apt-get update

	# Update system
	apt-get dist-upgrade

	# Install base packages
	apt-get install \
		apt-transport-https \
		ca-certificates \
		sudo \
		curl \
		wget \
		htop \
		mc \
		filezilla \
		thunderbird \
		nano \
		gnupg \
		gnupg2 \
		git \
		keepassx \
		skype \
		vlc \
		--no-install-recommends

	# Ensure that exists /etc/apt/apt.conf.d
	mkdir -p /etc/apt/apt.conf.d

	# Turn off translations, speed up apt-get update
	echo 'Acquire::Languages "none";' >> /etc/apt/apt.conf.d/99translations
}

setup_packages_ppa() {
	# Install specific packages/sources
	setup_packages_ppa_advanced_power_management
	setup_packages_ppa_chrome
	setup_packages_ppa_docker
	setup_packages_ppa_smartgit
	setup_packages_ppa_java8
	setup_packages_ppa_xorg_edgers
	setup_packages_ppa_insynchq
	setup_packages_ppa_dropbox
	setup_packages_ppa_php7
	setup_packages_ppa_nodejs7
}

setup_packages_ppa_advanced_power_management() {
	# http://linrunner.de/en/tlp/docs/tlp-linux-advanced-power-management.html
	sudo add-apt-repository ppa:linrunner/tlp
	sudo apt-get update
	sudo apt-get install tlp tlp-rdw
}

setup_packages_ppa_chrome() {
	wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add - 
	# sudo sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'
	sudo apt-get update
	sudo apt-get install google-chrome-stable 
}

setup_packages_ppa_docker() {
	# Docker
	sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 36A1D7869245C8950F966E92D8576A8BA88D21E9

	if [[ $OS_DISTRIBUTION == "mint" ]]; then
		echo "deb https://apt.dockerproject.org/repo ${OS_BASE_DISTRIBUTION}-${OS_BASE_CODENAME} main" > /etc/apt/sources.list.d/docker.list
	elif [[ $OS_DISTRIBUTION == "ubuntu" ]]; then
		echo "deb https://apt.dockerproject.org/repo ${OS_DISTRIBUTION}-${OS_CODENAME} main" > /etc/apt/sources.list.d/docker.list
	elif [[ $OS_DISTRIBUTION == "debian" ]]; then
		echo "deb https://apt.dockerproject.org/repo ${OS_DISTRIBUTION}-${OS_CODENAME} main" > /etc/apt/sources.list.d/docker.list
	else 
		echo "Unsupported distribution $OS_DISTRIBUTION"
	fi

	sudo apt-get update
	sudo apt-get purge lxc-docker*
 	sudo apt-get purge docker.io*
	sudo apt-get install linux-image-extra-$(uname -r)
	sudo apt-get install docker-engine
	
	# Allow non-root access
	sudo gpasswd -a ${USERNAME} docker
	sudo service docker restart

	# Docker Compose
	sudo curl -L https://github.com/docker/compose/releases/download/1.9.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
	sudo chmod +x /usr/local/bin/docker-compose
}

setup_packages_ppa_smartgit() {
	sudo add-apt-repository ppa:eugenesan/ppa
	sudo apt-get update
	sudo apt-get install smartgit
}

setup_packages_ppa_java8() {
	sudo add-apt-repository ppa:webupd8team/java
	sudo apt-get update
	sudo apt-get install oracle-java8-installer
	sudo apt-get install oracle-java8-set-default
}

setup_packages_ppa_xorg_edgers() {
	sudo add-apt-repository ppa:xorg-edgers/ppa
	sudo apt-get update
}

setup_packages_ppa_insynchq() {
	wget -qO - https://d2t3ff60b2tol4.cloudfront.net/services@insynchq.com.gpg.key | sudo apt-key add -
	echo "deb http://apt.insynchq.com/${OS_DISTRIBUTION} ${OS_CODENAME} non-free contrib" >> /etc/apt/sources.list.d/insynchq.list
	sudo apt-get update
	sudo apt-get install insync
}

setup_packages_ppa_dropbox() {
	wget https://www.dropbox.com/download?dl=packages/${OS_BASE_DISTRIBUTION}/dropbox_2015.10.28_amd64.deb -O dropbox_2015.10.28_amd64.deb
	sudo dpkg -i dropbox_2015.10.28_amd64.deb
	rm dropbox_2015.10.28_amd64.deb 
}

setup_packages_ppa_php7() {
	sudo add-apt-repository ppa:ondrej/php
	sudo apt-get update
	sudo apt-get install -y php7.0-cli
}

setup_packages_ppa_nodejs5() {
	curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
	sudo apt-get install -y nodejs
}

setup_packages_ppa_nodejs6() {
	curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
	sudo apt-get install -y nodejs
}

setup_packages_ppa_nodejs7() {
	curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
	sudo apt-get install -y nodejs
}

setup_packages_ppa_ukuu() {
	# Ubuntu Kernel Upgrade Utility
	sudo apt-add-repository -y ppa:teejee2008/ppa
	sudo apt update
	sudo apt install ukuu
}

# SETUP APPLICATIONS ===========================================================
# ==============================================================================

setup_apps() {
	# Create apps dir
	mkdir -p ${APPS_DIR}

	setup_apps_phpstorm
	setup_apps_sublimetext
	setup_apps_atom
}

setup_apps_phpstorm() {
	local DIR=${APPS_DIR}/phpstorm
	mkdir -p ${DIR}
	mkdir -p ${DIR}/data
	wget https://download.jetbrains.com/webide/PhpStorm-2016.1.2.tar.gz
	tar -xvf PhpStorm-2016.1.2.tar.gz --strip-components=1 -C ${DIR}
	rm PhpStorm-2016.1.2.tar.gz
	ln -s ${DIR}/data/ ${HOME_DIR}/.PhpStorm2016.1.2
}

setup_apps_sublimetext() {
	local DIR=${APPS_DIR}/sublimetext
	mkdir -p ${DIR}
	mkdir -p ${DIR}/data
	wget https://download.sublimetext.com/sublime_text_3_build_3118_x64.tar.bz2
	tar -xvf sublime_text_3_build_3118_x64.tar.bz2 --strip-components=1 -C ${DIR}
	rm sublime_text_3_build_3118_x64.tar.bz2
	ln -s ${DIR}/data/ ${HOME_DIR}/.config/sublime-text-3
	ln -s ${DIR}/sublime_text.desktop ${HOME_DIR}/.local/share/applications/
}

setup_apps_atom() {
	local DIR=${APPS_DIR}/atom
	mkdir -p ${DIR}
	wget https://github.com/atom/atom/releases/download/v1.8.0/atom-amd64.tar.gz
	tar -xvf atom-amd64.tar.gz --strip-components=1 -C ${DIR}
	rm atom-amd64.tar.gz
}

# SETUP OTHERS =================================================================
# ==============================================================================

setup_sudo() {
	# add user to sudoers
	adduser "$USERNAME" sudo

	# add user to systemd groups
	# then you wont need sudo to view logs and shit
	gpasswd -a "$USERNAME" systemd-journal
	gpasswd -a "$USERNAME" systemd-network

	{ \
		echo -e "${USERNAME} ALL=(ALL:ALL) ALL"; \
	} >> /etc/sudoers
}

setup_dotfiles() {
	# create subshell
	(
	cd "${HOME_DIR}"

	# install dotfiles from repo
	git clone https://github.com/f3l1x/dotfiles.git "${HOME_DIR}/dotfiles"
	cd "${HOME_DIR}/dotfiles"

	# installs all the things
	make

	cd "${HOME_DIR}"
	)
}

################################################################################
## HELPERS #####################################################################
################################################################################

check_sudo() {
	if [ "$EUID" -ne 0 ]; then
		echo "Please run as root."
		exit
	fi
}

os_detect() {
	if [ ! -f /etc/debian_version ]; then
		echo "Only debian based distros are supported"
		exit 1
	fi

	OS_ARCH=$(uname -p)
	OS_CODENAME=$(lsb_release -sc)

	# Detect distributor
	local distributor=$(echo $(lsb_release -is) | tr '[:upper:]' '[:lower:]')

	if [ $distributor = "linuxmint" ]; then
		OS_DISTRIBUTION=mint
		OS_BASE_DISTRIBUTION=ubuntu
	elif [ $distributor = "debian" ]; then
		OS_DISTRIBUTION=debian
		OS_BASE_DISTRIBUTION=debian
	elif [ $distributor = "ubuntu" ]; then
		OS_DISTRIBUTION=ubuntu
		OS_BASE_DISTRIBUTION=ubuntu
	else 
		echo "Unsupported distributor ${distributor}"
		exit 1
	fi

	if [ $OS_DISTRIBUTION = "mint" ]; then
		if [ $OS_CODENAME = "sarah" ]; then
			OS_BASE_CODENAME=xenial
		elif [ $OS_CODENAME = "rosa" ]; then
			OS_BASE_CODENAME=trusty
		fi
	fi 
}


################################################################################
## MAIN LOOP ###################################################################
################################################################################

main() {
	local cmd=$1

	# Auto-detect and fill variable
	os_detect

	if [ -z "$cmd" ]; then
		usage
		exit 1
	fi

	if [ $cmd = "packages" ]; then
		check_sudo
		setup_packages
	elif [ $cmd = "ppa" ]; then
		check_sudo
		setup_packages_ppa
	elif [ $cmd = "apps" ]; then
		setup_apps
	elif [ $cmd = "dotfiles" ]; then
		setup_dotfiles
	elif [ $cmd = "sudo" ]; then
		check_sudo
		setup_sudo
	else
		usage
	fi
}

main "$@"
