---
title: "Wysiwyg"
date: "2021-08-30"
updated: "2024-11-07"
description: "TinyMCE snippet in JavaScript for pasting clean text, using the paste plugin to strip styles, classes and header formatting."
status: ["Not started"]
source: "https://f3l1x.super.site/wiki/wysiwyg"
---

# TinyMCE

Paste clean text into TinyMCE.

```javascript
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
