.DEFAULT_GOAL := build
.PHONY: install dev build preview clean distclean deploy

CF_PROJECT ?= f3l1x
CF_BRANCH  ?= master

install:
	npm ci

dev:
	npm run dev

build:
	npm run build

preview: build
	npm run preview

clean:
	rm -rf dist .astro

distclean: clean
	rm -rf node_modules

deploy: clean build
	npx --yes wrangler@4 pages deploy dist --project-name=$(CF_PROJECT) --branch=$(CF_BRANCH)
