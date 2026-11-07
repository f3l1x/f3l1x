---
title: "Nette - jak zapisovat služby (extension / neon)"
description: "Jaké jsou možnosti registrovat služby do dependency injection containeru. Porovnání zápisů přes Config a přes Extension."
tags: ["nette","dependency injection","neon"]
date: "2015-10-17"
source: "https://f3l1x.super.site/blog/2015/nette-jak-zapisovat-sluby-extension-neon"
---

Jaké jsou možnosti registrovat služby do `dependency injection containeru`. Porovnání zápisů přes Config a přes Extension.

`Nette\DI` a `Nette\DI\Container` jsou, jak už všichni víme, skvělé třídy, které nám ušetří spoustu a spoustu času. Jako fakt. Denně do DIC registrujeme služby, načítáme configy, přidáváme parametry. Přes DIC vytváříme služby, továrničky na služby, továrničky na cokoli…

## Jaké jsou možnosti

Existují 2 základní postupy. Přes **Config**, zpravidla config.neon nebo přes **Extension**.

Pro jednoduché prototypování a přepisování již existujících služeb se více hodí registrovat přes **Config**.

Pro samostatné standalone rozšíření, komponenty, addony apod. je ideální použít vlastní **Extension**

Příklad můžeme vidět hned u Nette, které je rozdělené do samostatných balíčků jako například:

-   [nette/security](https://github.com/nette/security/blob/v2.3/src/Bridges/SecurityDI/SecurityExtension.php)
-   [nette/caching](https://github.com/nette/caching/blob/v2.3/src/Bridges/CacheDI/CacheExtension.php)

Většinou je dobré se držet principu [konvence před konfigurací](https://en.wikipedia.org/wiki/Convention_over_configuration).

## Zápisy

Pro účely snadného porovnání zápisů jsem vytvořil balíček [planette/cookbook-dependency-injection](https://github.com/planette/cookbook-dependency-injection).

Najdete tam zápisy přes neon a totožné přes extension. Můžete tak snadno porovnat, jestli děláte vše správně, případně narazit na postup, který neznáte (hlavně začátečníci).

Nástroj vytváří 2 containery a přes `nette\tester` je porovnává.

### NEON

NEON je velmi důmyslný nástroj, ve kterém lze snadno definovat vše co potřebujeme.

**Potřebujeme službu?**

```yaml
services:
  - App\MyService
```

**Potřebujeme službě předat argumenty?**

```yaml
services:
  - App\MyService(path/to/folder)
```

```yaml
services:
  my:
    class: App\MyService
    arguments: [path/to/folder]
```

**Potřebujeme službu vytvořit s parametry?**

```yaml
services:
  my:
    class: App\MyService
    parameters: [a]
    arguments: [%a%]
```

```yaml
services:
  my:
    class: App\MyService(%a%)
    parameters: [a]
```

### Extension

Extension nebo-li [CompilerExtension](https://github.com/nette/di/blob/v2.3/src/DI/CompilerExtension.php) nám poskytuje API, přes které dokážeme nadefinovat věškerou funkčnost.

Hlavním nástrojem je zde [ContainerBuilder](https://github.com/nette/di/blob/v2.3/src/DI/ContainerBuilder.php). V extension ho získáme přes `$this->getContainerBuilder()`.

Třída obsahuje 3 základní metody:

-   **loadConfiguration**

-   volá se v 1. kroku
-   **co dělat:** registrovat a nastavovat svoje služby

-   **beforeCompile**

-   volá se ve 2. kroku
-   **co dělat:** upravovat již zaregistrované služby *(pokud víte co děláte!!!)*

-   **afterCompile**

-   volá se ve 3. kroku
-   **co dělat:** vkládat dekorující části PHP kódu, zejména do metody `initialize` *(pokud víte co děláte!)*

## Tipy a zajímavosti

**1\. Jak vytvořit container**

Nejjednodušeji container vytvoříte přes [ContainerLoader](https://github.com/nette/di/blob/v2.3/src/DI/ContainerLoader.php) takto:

```php
$loader = new ContainerLoader('path/to/temp', $autoRebuild = TRUE);
$class = $loader->load('mycontainer', function (Compiler $compiler) {
    $compiler->addExtension('my', new MyExtension());
    //
    $compiler->loadConfig('my.config.neon');
});

// Container_998a370549
$container = new $class;
```

**2\. Kde se bere název pro container**

Může za to metoda [ContainerLoader::getClassName($key)](https://github.com/nette/di/blob/v2.3/src/DI/ContainerLoader.php#L50-L53), což v předchozím případě vrátí **Container\_998a370549**.

```php
$key = 'mycontainer';
$name = 'Container_' . substr(md5(serialize($key)), 0, 10);
// Container_998a370549
```

**3\. Kde se berou defaultní extensions**

Nette definuje všechny defaultní extension v [Configuratoru](https://github.com/nette/bootstrap/blob/v2.3/src/Bootstrap/Configurator.php#L30-L47).

**4\. Kdy se přegeneruje container**

To záleží na konkrétním použití. Generování ovlivňuje **název containeru** a příznak **autoRebuild**.

K přegenerování dojde když:

-   [se změní jméno](https://github.com/nette/di/blob/v2.3/src/DI/ContainerLoader.php#L55)
-   dojde k expiraci a `autoRebuild` je [TRUE](https://github.com/nette/di/blob/v2.3/src/DI/ContainerLoader.php#L98)
-   upravíme [zaindexovaný soubor](https://github.com/nette/di/blob/v2.3/src/DI/ContainerLoader.php#L101)

Při vytváření containeru se [vytvoří i soubor \*.meta](https://github.com/nette/di/blob/v2.3/src/DI/ContainerLoader.php#L79), který nese informaci o [použitých souborech](https://github.com/nette/di/blob/v2.3/src/DI/ContainerLoader.php#L116-L117).

Pokud se nějaký soubor v průběhu změní, [kontrolní součet](https://github.com/nette/di/blob/v2.3/src/DI/ContainerLoader.php#L101) nebude sedět a dojde k přegenerování.

Pokud používáte Nette, tak [ten vytváří název containeru](https://github.com/nette/bootstrap/blob/v2.3/src/Bootstrap/Configurator.php#L216) podle parametrů a souborů (configů).

**5\. Neznámý počet parametrů**

Tuto vlastnost využijeme hlavně v metodě [CompilerExtension::afterCompile](https://github.com/nette/di/blob/v2.3/src/DI/CompilerExtension.php#L128-L134).

Uvažujme tento kód:

```php
$initialize = $class->getMethod('initialize');

$initialize->addBody('My\\Tracy\\Bar::init(?);', [1, 2]);
$initialize->addBody('My\\Tracy\\Bar::init(?*);', [[1, 2]]);
```

Výstup bude vypadat takto:

```php
public function initialize()
{
  My\Tracy\Bar::init(1);
  My\Tracy\Bar::init(1, 2);
}
```

Rozdíl je v placeholderu `?*`, který nám parametry expanduje jako pole argumentů. Dalo by se to přirovnat k `call_user_func_array`.

## Přehled

Kompletní přehled naleznete na GitHubu v repozitáři [planette/cookbook-dependency-injection](https://github.com/planette/cookbook-dependency-injection).

Tento přehled je pro Nette 2.3 a 2.4. Nette 3.0 má nějaké [nové vychytávky](/blog/2018/nette-3-dependency-injection).

### Simple

NEON ([code](https://github.com/contributte/cookbook/blob/0e65e9671493cf9598422032ac790391c4274b20/src/syntax/neon/syntax.neon#L3-L10))

```yaml
services:
    a1: TestClass

    a2:
        class: TestClass

    a3:
        create: TestClass
```

Extension ([code](https://github.com/contributte/cookbook/blob/0e65e9671493cf9598422032ac790391c4274b20/src/syntax/extension/SyntaxExtension.php#L11-L22))

```php
$builder = $this->getContainerBuilder();

$builder->addDefinition('a1')
    ->setClass('TestClass');

$builder->addDefinition('a2')
    ->setClass('TestClass');

$builder->addDefinition('a3')
    ->setFactory('TestClass');
```

Zkompilovaný kód ([code](https://github.com/contributte/cookbook/blob/0e65e9671493cf9598422032ac790391c4274b20/src/container/Container_syntax.php#L102-L129))

### Options

NEON ([code](https://github.com/contributte/cookbook/blob/0e65e9671493cf9598422032ac790391c4274b20/src/syntax/neon/syntax.neon#L12-L19))

```yaml
services:
    b1:
        class: TestClass
        autowired: off

    b2:
        class: TestClass
        inject: on
```

Extension ([code](https://github.com/contributte/cookbook/blob/0e65e9671493cf9598422032ac790391c4274b20/src/syntax/extension/SyntaxExtension.php#L24-L32))

```php
$builder = $this->getContainerBuilder();

$builder->addDefinition('b1')
    ->setClass('TestClass')
    ->setAutowired(FALSE);

$builder->addDefinition('b2')
    ->setClass('TestClass')
    ->setInject(TRUE);
```

Zkompilovaný kód ([code](https://github.com/contributte/cookbook/blob/0e65e9671493cf9598422032ac790391c4274b20/src/container/Container_syntax.php#L132-L149))

### Arguments

NEON ([code](https://github.com/contributte/cookbook/blob/0e65e9671493cf9598422032ac790391c4274b20/src/syntax/neon/syntax.neon#L21-L38))

```yaml
services:
    c1a: TestClass2(1, 2)

    c1b:
        class: TestClass2
        arguments: [1, 2]

    c2a: TestClass2(1)

    c2b:
        class: TestClass2
        arguments: [a: 1]

    c3a: TestClass2(b: 2)

    c3b:
        class: TestClass2
        arguments: [b: 2]
```

Extension ([code](https://github.com/contributte/cookbook/blob/0e65e9671493cf9598422032ac790391c4274b20/src/syntax/extension/SyntaxExtension.php#L34-L55))

Zkompilovaný kód ([code](https://github.com/contributte/cookbook/blob/0e65e9671493cf9598422032ac790391c4274b20/src/container/Container_syntax.php#L152-L209))

### Tags

NEON ([code](https://github.com/contributte/cookbook/blob/0e65e9671493cf9598422032ac790391c4274b20/src/syntax/neon/syntax.neon#L40-L46))

```yaml
services:
    d1:
        class: TestClass
        tags: [t1]
    d2:
        class: TestClass
        tags: [t1: foobar]
```

Extension ([code](https://github.com/contributte/cookbook/blob/0e65e9671493cf9598422032ac790391c4274b20/src/syntax/extension/SyntaxExtension.php#L57-L65))

```php
$builder = $this->getContainerBuilder();

$builder->addDefinition('d1')
    ->setClass('TestClass')
    ->addTag('t1');

$builder->addDefinition('d2')
    ->setClass('TestClass')
    ->setTags(['t1' => 'foobar']);
```

Zkompilovaný kód ([code](https://github.com/contributte/cookbook/blob/0e65e9671493cf9598422032ac790391c4274b20/src/container/Container_syntax.php#L221-L238))

### Arguments + parameters

NEON ([code](https://github.com/contributte/cookbook/blob/0e65e9671493cf9598422032ac790391c4274b20/src/syntax/neon/syntax.neon#L48-L65))

```yaml
services:
    e1:
        class: TestClass2
        parameters: [a]
        arguments: [%a%]

    e2:
        class: TestClass2
        parameters: [a: NULL, b: 1]
        arguments: [%a%, %b%]

    e3:
        class: TestClass2(%a%)
        parameters: [a]

    e4:
        class: TestClass2(b: %a%)
        parameters: [a]
```

Extension ([code](https://github.com/contributte/cookbook/blob/0e65e9671493cf9598422032ac790391c4274b20/src/syntax/extension/SyntaxExtension.php#L67-L88))

Zkompilovaný kód ([code](https://github.com/contributte/cookbook/blob/0e65e9671493cf9598422032ac790391c4274b20/src/container/Container_syntax.php#L241-L278))

### Implements (interfaces)

NEON ([code](https://github.com/contributte/cookbook/blob/0e65e9671493cf9598422032ac790391c4274b20/src/syntax/neon/syntax.neon#L67-L110))

Extension ([code](https://github.com/contributte/cookbook/blob/0e65e9671493cf9598422032ac790391c4274b20/src/syntax/extension/SyntaxExtension.php#L90-L138))

Zkompilovaný kód ([code](https://github.com/contributte/cookbook/blob/0e65e9671493cf9598422032ac790391c4274b20/src/container/Container_syntax.php#L281-L389))

### References

NEON ([code](https://github.com/contributte/cookbook/blob/0e65e9671493cf9598422032ac790391c4274b20/src/syntax/neon/syntax.neon#L112-L147))

Extension ([code](https://github.com/contributte/cookbook/blob/0e65e9671493cf9598422032ac790391c4274b20/src/syntax/extension/SyntaxExtension.php#L140-L180))

Zkompilovaný kód ([code](https://github.com/contributte/cookbook/blob/0e65e9671493cf9598422032ac790391c4274b20/src/container/Container_syntax.php#L392-L481))

### Setup

NEON ([code](https://github.com/contributte/cookbook/blob/0e65e9671493cf9598422032ac790391c4274b20/src/syntax/neon/syntax.neon#L149-L165))

```yaml
services:
    h1:
        class: stdClass
        setup:
            - $a(1)
            - [@self, $a](1)
            - @self::$a(1)
            - foo(1)
            - [@self, foo](1)
            - @self::foo(1)

    h2:
        class: stdClass
        setup:
            - "$service->hello(?)"(@h1)
            - "$service->hi(?)"(@container)
            - "My\\Tracy\\Bar::init(?)"(@self)
```

Extension ([code](https://github.com/contributte/cookbook/blob/0e65e9671493cf9598422032ac790391c4274b20/src/syntax/extension/SyntaxExtension.php#L182-L198))

Zkompilovaný kód ([code](https://github.com/contributte/cookbook/blob/0e65e9671493cf9598422032ac790391c4274b20/src/container/Container_syntax.php#L484-L510))
