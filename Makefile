.PHONY: deploy install build

### ENV

NOW?=now

##################################################
### COMMON #######################################
##################################################

deploy: deploy-www deploy-wiki deploy-cv

install: install-www

build: build-www

##################################################
### WWW ##########################################
##################################################

deploy-www:
	cd pkg/www && ${NOW}

install-www:
	cd pkg/www && npm install

build-www:
	cd pkg/www && npm run build
	cd pkg/www && hugo

dev-www-hugo:
	cd pkg/www && hugo server -D -v -w

dev-www-npm:
	cd pkg/www && npm run dev

##################################################
### WIKI #########################################
##################################################

deploy-wiki:
	cd pkg/wiki && ${NOW}

##################################################
### CV ###########################################
##################################################

deploy-cv:
	cd pkg/cv && ${NOW}
