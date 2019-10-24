# f3l1x.io

This is monorepo of f3l1x.io domain. Welcome! 

It consists of these packages:

- [www](/pkg/www/) - https://f3l1x.io 
- [wiki](/pkg/wiki/) - https://wiki.f3l1x.io 
- [cv](/pkg/cv/) - https://cv.f3l1x.io 

## Www

### Development

- clone this repo (`git@github.com:f3l1x/f3l1x.git`)
- install hugo (https://gohugo.io/)
- install node modules `npm install`
- compile assets `npm run build` (or watch `npm run watch`)
- start Hugo webserver `hugo server -D -v`

### Deploy

- generate static content by calling `hugo`
- yes that's all :tada:
