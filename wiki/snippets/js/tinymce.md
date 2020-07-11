# TinyMCE

Paste clean text into TinyMCE.

```js
$('textarea.tinymce').tinymce({
  // Other configuration..   

  // Needs paste plugin
  plugins : "paste",

  // Paste: settings
  paste_auto_cleanup_on_paste: true,
  paste_convert_headers_to_strong: true,
  paste_remove_styles: true,
  paste_text_linebreaktype: true,
  paste_strip_class_attributes: "all",
  paste_retain_style_properties: "all"
});
```