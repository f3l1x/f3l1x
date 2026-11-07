---
title: "PHP"
description: "Composer na shared hostingu - https://stackoverflow.com/questions/20894518/how-do-i-install-composer-on-a-shared-hosting/26277355#26277355"
status: ["Not started"]
source: "https://f3l1x.super.site/wiki/php"
---

# Resources

-   Composer na shared hostingu - [https://stackoverflow.com/questions/20894518/how-do-i-install-composer-on-a-shared-hosting/26277355#26277355](https://stackoverflow.com/questions/20894518/how-do-i-install-composer-on-a-shared-hosting/26277355#26277355)
-   Zajimavy trik jak zavolat metodu predka [https://github.com/nette/forms/commit/46875eabaf497103a61350271b9032c1f0ff0921](https://github.com/nette/forms/commit/46875eabaf497103a61350271b9032c1f0ff0921)
-   Novinky o PHP [https://php.watch](https://php.watch/)
-   PHP jak psat regexy [https://php.watch/articles/php-regex-readability](https://php.watch/articles/php-regex-readability)
-   PHP: knihovna pro inspiraci [https://github.com/paranoiq/dogma](https://github.com/paranoiq/dogma)
-   PHP: zajimava knihovna pro inspiraci [https://github.com/box/bart/tree/master/src/Bart](https://github.com/box/bart/tree/master/src/Bart)
-   Zajimava knihovny [https://github.com/hoaproject](https://github.com/hoaproject)
-   Zajimava knihovny [https://github.com/brick](https://github.com/brick)
-   Zajimava knihovna [https://github.com/sabre-io](https://github.com/sabre-io)
-   Blackfire konfigurace (extension=/usr/local/Cellar/php/7.2.6/pecl/20170718/blackfire.so, blackfire.agent\_socket=tcp://85.255.0.153:8707)
-   Fast PHP webser s PSR7: [https://github.com/spiral/roadrunner](https://github.com/spiral/roadrunner)
-   PHP + Nginx + Heroku [https://github.com/proweb/php-nginx-heroku](https://github.com/proweb/php-nginx-heroku)

# Doctrine

-   [https://github.com/KilikFr/TableBundle/blob/master/src/Services/TableService.php](https://github.com/KilikFr/TableBundle/blob/master/src/Services/TableService.php)
-   [https://symfonycasts.com/screencast/doctrine-queries/select-new-object](https://symfonycasts.com/screencast/doctrine-queries/select-new-object)
-   [https://dev.to/jszutkowski/fast-way-to-create-dto-using-doctrine-2dlf](https://dev.to/jszutkowski/fast-way-to-create-dto-using-doctrine-2dlf)
-   [https://github.com/MySpeedPuzzling/myspeedpuzzling.com/blob/main/src/Query/GetFastestPairs.php](https://github.com/MySpeedPuzzling/myspeedpuzzling.com/blob/main/src/Query/GetFastestPairs.php)

# Extensions

## xdebug

```javascript
pecl install xdebug
```

## blackfire

```javascript
brew install blackfire-php84
```

## ext-http

[https://github.com/m6w6/ext-http/issues/106#issuecomment-769068919](https://github.com/m6w6/ext-http/issues/106#issuecomment-769068919)

[https://mdref.m6w6.name/](https://mdref.m6w6.name/)

```shell
pecl install pecl_http

running: /private/tmp/pear/temp/pecl_http/configure —with-php-config=/usr/local/opt/php/bin/php-config —with-http-zlib-dir=/usr/local/opt/zlib —with-http-libcurl-dir=/usr —with-http-libevent-dir=/usr —with-http-libicu-dir=/usr/local/opt/icu4c —with-http-libidn2-dir=/usr —with-http-libidn-dir=/usr —with-http-libidnkit2-dir=/usr —with-http-libidnkit-dir=/usr

brew install zlib
```

## ext-memcache

```bash
PHP_ZLIB_DIR=/opt/homebrew/opt/zlib pecl install memcache
```

## ext-memcached

```bash
PHP_ZLIB_DIR=/opt/homebrew/opt/zlib pecl install --force memcached
```

## ext-imagick

```shell
brew install shivammathur/extensions/imagick@8.3
```

# Brew

```bash
# Switch versions
brew unlink php 
brew link php@8.2
```

# Benchmark

-   [https://web-frameworks-benchmark.netlify.app/](https://web-frameworks-benchmark.netlify.app/)

# Async

-   [https://github.com/roadrunner-server/roadrunner](https://github.com/roadrunner-server/roadrunner)
-   [https://github.com/walkor/Workerman](https://github.com/walkor/Workerman)
-   [https://github.com/driftphp](https://github.com/driftphp)
-   [https://openswoole.com/how-it-works](https://openswoole.com/how-it-works)
-   [https://github.com/swoole/swoole-src](https://github.com/swoole/swoole-src)

# Blogposts

-   [https://blog.devgenius.io/laravel-sail-with-https-swoole-ddab7f5303ec](https://blog.devgenius.io/laravel-sail-with-https-swoole-ddab7f5303ec)

# Frameworks

-   [https://github.com/fomo-framework/fomo](https://github.com/fomo-framework/fomo)
-   [https://github.com/hyperf/hyperf](https://github.com/hyperf/hyperf)

# Blackfire

```shell
docker \
  run \
  -it \
  --rm \
  -p 8307:8307 \
  -e BLACKFIRE_SERVER_ID=secret \
  -e BLACKFIRE_SERVER_TOKEN=secret \
  -e BLACKFIRE_CLIENT_ID=secret \
  -e BLACKFIRE_CLIENT_TOKEN=secret \
  blackfire/blackfire:2
```

# PlantUML

```shell
vendor/bin/php-class-diagram --svg-topurl='https://github.com/your-username/your-repo/blob/main/path/to/source' ../src/Domain/ > test.plantuml
cat test.plantuml | java -jar -DPLANTUML_LIMIT_SIZE=16384 plantuml-1.2024.6.jar -tpng -pipe > test.png
```

# Roadrunner

## Ecosystem

-   [https://github.com/roadrunner-server](https://github.com/roadrunner-server) (Go + PHP)
-   [https://github.com/roadrunner-php](https://github.com/roadrunner-php) (PHP components)
-   [https://github.com/spiral](https://github.com/spiral) (Spiral FW)
-   [https://github.com/spiral-packages](https://github.com/spiral-packages) (Spiral components)
-   [https://github.com/cycle/orm](https://github.com/cycle/orm) (Spiral ORM)

## Resources

-   [https://roadrunner.dev/docs/kv-redis/2023.x/en](https://roadrunner.dev/docs/kv-redis/2023.x/en)
-   [https://github.com/mallgroup/roadrunner](https://github.com/mallgroup/roadrunner)
-   [https://spiral.dev/](https://spiral.dev/)
-   [https://github.com/spiral](https://github.com/spiral)
-   [https://davegebler.com/post/php/turbo-charge-your-php-applications-with-roadrunner](https://davegebler.com/post/php/turbo-charge-your-php-applications-with-roadrunner)
-   [https://roadrunner.dev/docs/integration-slim/1.x/en](https://roadrunner.dev/docs/integration-slim/1.x/en)
-   [https://github.com/Lapinskas/roadrunner-ubiquity](https://github.com/Lapinskas/roadrunner-ubiquity)
-   [https://github.com/n1215/roadrunner-docker-skeleton/tree/slimphp](https://github.com/n1215/roadrunner-docker-skeleton/tree/slimphp)
-   [https://github.com/roadrunner-php/cli](https://github.com/roadrunner-php/cli)
-   [https://chriswhite.is/coding/swoole-vs-roadrunner-for-laravel-octane/](https://chriswhite.is/coding/swoole-vs-roadrunner-for-laravel-octane/)
-   [https://www.reddit.com/r/laravel/comments/nbc742/laravel\_octane\_roadrunner\_or\_swoole\_pros\_and\_cons/](https://www.reddit.com/r/laravel/comments/nbc742/laravel_octane_roadrunner_or_swoole_pros_and_cons/)

# Sessions

-   [https://jennifersoft.com/en/blog/tech/2019-04-08/](https://jennifersoft.com/en/blog/tech/2019-04-08/)
-   [https://zend18.zendesk.com/hc/en-us/articles/205880128-Lock-Picking-PHP-Sessions](https://zend18.zendesk.com/hc/en-us/articles/205880128-Lock-Picking-PHP-Sessions)
-   [https://doc.bccnsoft.com/docs/php-docs-7-en/function.session-start.html](https://doc.bccnsoft.com/docs/php-docs-7-en/function.session-start.html)
-   [https://www.google.com/search?q=php+session+locking+read\_and\_close&oq=php+session+locking+read\_and\_close&aqs=chrome..69i57j0i22i30l5j69i60l2.2946j0j7&sourceid=chrome&ie=UTF-8](https://www.google.com/search?q=php+session+locking+read_and_close&oq=php+session+locking+read_and_close&aqs=chrome..69i57j0i22i30l5j69i60l2.2946j0j7&sourceid=chrome&ie=UTF-8)
-   [https://github.com/zendframework/zend-expressive-session-ext/issues/26](https://github.com/zendframework/zend-expressive-session-ext/issues/26)
-   [https://docs.mezzio.dev/mezzio-session-ext/intro/#enabling-non-locking-sessions](https://docs.mezzio.dev/mezzio-session-ext/intro/#enabling-non-locking-sessions)
-   [https://www.leaseweb.com/labs/2014/08/session-locking-non-blocking-read-sessions-php/](https://www.leaseweb.com/labs/2014/08/session-locking-non-blocking-read-sessions-php/)

# Swoole

-   [https://www.swoole.com/](https://www.swoole.com/)
-   [https://github.com/swoole/awesome-swoole](https://github.com/swoole/awesome-swoole#testing)

# Symfony

-   Symfony Serializer [https://speakerdeck.com/dunglas/mastering-the-symfony-serializer?slide=41](https://speakerdeck.com/dunglas/mastering-the-symfony-serializer?slide=41)
-   Symfony Tips & Tricks [https://www.slideshare.net/javier.eguiluz/symfony-tips-and-tricks](https://www.slideshare.net/javier.eguiluz/symfony-tips-and-tricks)

# Serverless

-   [https://php.watch/articles/php-serverless-digital-ocean](https://php.watch/articles/php-serverless-digital-ocean)

# Performance

-   [https://medium.com/manychat-engineering/how-we-tamed-php-to-handle-over-25-000-webhooks-per-second-ce860cb59084](https://medium.com/manychat-engineering/how-we-tamed-php-to-handle-over-25-000-webhooks-per-second-ce860cb59084)
-   [https://medium.com/manychat-engineering/how-manychat-scaled-to-1-billion-conversations-using-php-a-startups-guide-to-smart-tech-choices-781c74f16f23](https://medium.com/manychat-engineering/how-manychat-scaled-to-1-billion-conversations-using-php-a-startups-guide-to-smart-tech-choices-781c74f16f23)

# Examples

‣

ContainerHelper
