build:
	npm ci
	npm run build
	hugo

dev:
	hugo server -D -v -w
