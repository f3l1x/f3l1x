# Nette > Latte > macro ifCurrentIn

```smarty
{block content}
{ifCurrentIn "Page:default", "Homepage:default"}
    Hello, standart macro
{/ifCurrentIn}


<div n:ifCurrentIn="'Page:default', 'Homepage:default'">
    Hello, n:macro
</div>
{/block}
```

```php
class HomepagePresenter extends BasePresenter
{
    public function templatePrepareFilters($template)
    {
        $template->registerFilter($latte = $this->context->nette->createLatte());
    
        $set = Nette\Latte\Macros\MacroSet::install($latte->getCompiler());
        $set->addMacro('ifCurrentIn', function($node, $writer)
        {
            return $writer->write('foreach (%node.array as $l) { if ($_presenter->isLinkCurrent($l)) { $_c = true; break; }} if (isset($_c)): ');
        }, 'endif; unset($_c);');
    }
```
