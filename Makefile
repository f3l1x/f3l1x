.PHONY: deploy install build

### ENV

ifeq ($(NOW),)
  ifeq ($(PRODUCTION),)
    NOW := now
  else
    NOW := now -c --prod
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

deploy: www-deploy wiki-deploy cv-deploy

install: www-install

build: www-build

##################################################
### WWW ##########################################
##################################################

www-deploy:
	cd pkg/www && ${NOW}

www-install:
	cd pkg/www && npm install --production

www-build: www-build-parcel www-build-hugo

www-build-parcel:
	cd pkg/www && npm run build

www-build-hugo:
	cd pkg/www && hugo

www-dev-hugo:
	cd pkg/www && hugo server -D -v -w

www-dev-parcel:
	cd pkg/www && npm run dev

www-new-post:
	cd pkg/www && hugo new blog/$(shell date '+%Y')/$(shell date '+%Y-%m-%d').md

##################################################
### WIKI #########################################
##################################################

wiki-deploy:
	cd pkg/wiki && ${NOW}

##################################################
### CV ###########################################
##################################################

cv-deploy:
	cd pkg/cv && ${NOW}
