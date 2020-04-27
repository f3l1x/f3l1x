<h1 align=center>f3l1x</h1>

<p align=center>
   🏃‍♂️ This is monorepo of my websites. Welcome!
</p>

<p align=center>
🕹 <a href="https://f3l1x.io">f3l1x.io</a> | 💻 <a href="https://github.com/f3l1x">f3l1x</a> | 🐦 <a href="https://twitter.com/xf3l1x">@xf3l1x</a>
</p>

-----

It consists of these packages:

- [www](/pkg/www/) - [f3l1x.io](https://f3l1x.io)
- [wiki](/pkg/wiki/) - [sulc.dev](https://sulc.dev)
- [cv](/pkg/cv/) - [milan.works](https://milan.works)
- [cdn](/pkg/cdn/) - [milan.network](https://milan.network)

## Development

- clone this repo (`git@github.com:f3l1x/f3l1x.git`)
- install hugo (https://gohugo.io/)
- install deps `make install`

**Www**

- compile assets `make www-dev-parcel`
- start Hugo webserver `make www-dev-hugo`

## Deploy

- `make build`
- `make deploy`
- yes that's all :tada:
