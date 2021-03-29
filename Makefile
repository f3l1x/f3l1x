.PHONY: deploy install build

### ENV

ifeq ($(VERCEL),)
  ifeq ($(PRODUCTION),)
    VERCEL := vercel
  else
    VERCEL := vercel -c --prod
  endif
endif

##################################################
### ALL ##########################################
##################################################

all:
	@echo "At your service, my lord!"

##################################################
### COMMON #######################################
##################################################

deploy: www-deploy cv-deploy cdn-deploy

install: www-install

build: www-build

##################################################
### WWW ##########################################
##################################################

www-deploy:
	cd www && ${VERCEL}

www-install:
	cd www && npm ci

www-build: www-build-parcel www-build-hugo

www-build-parcel:
	cd www && npm run build

www-build-hugo:
	cd www && hugo

www-dev: www-build-parcel www-dev-hugo

www-dev-hugo:
	cd www && hugo server -D -v -w

www-dev-parcel:
	cd www && npm run dev

www-new-post:
	cd www && hugo new blog/$(shell date '+%Y')/$(shell date '+%Y-%m-%d').md

##################################################
### WIKI #########################################
##################################################

wiki-deploy:
	cd wiki && ${VERCEL}

##################################################
### CV ###########################################
##################################################

cv-deploy:
	cd cv && ${VERCEL}

##################################################
### CDN ##########################################
##################################################

cdn-deploy:
	cd cdn && ${VERCEL}
