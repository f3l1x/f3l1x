# ################################################
# Development ####################################
# ################################################
.PHONY: install dev generate start lint tsc

install: # Install all dependencies
	npm ci

dev: # Start Nuxt for local development
	HOST=0 PORT=3000 APP_ENV=development npm run dev

generate: # Build static site
	npm run generate

start: # Serve static files
	HOST=0 PORT=3030 npm run start

lint: # Lint files
	npm run lint

tsc: # Typescript compiler
	npx tsc

# ################################################
# Deployment #####################################
# ################################################
.PHONY: deploy publish

deploy: # Deploy to Vercel [dev]
	vercel

publish: # Deploy to Vercel [prod]
	vercel --prod
