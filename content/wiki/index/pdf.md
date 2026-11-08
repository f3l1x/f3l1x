---
title: "PDF"
date: "2025-03-08"
updated: "2025-03-08"
description: "Snippets for shrinking PDF files using macOS Preview, ImageMagick and Ghostscript with the pdfwrite device and screen quality settings."
status: ["Not started"]
source: "https://f3l1x.super.site/wiki/index/pdf"
---

## Optimizations

```shell
# MacOS
preview > export -> reduce size

# Imagick
magick -compress Zip -density 20x20 input.pdf output.pdf

# Ghostscript
gs -sDEVICE=pdfwrite -dNOPAUSE -dQUIET -dBATCH -dPDFSETTINGS=/screen -dCompatibilityLevel=1.4 -sOutputFile=output.pdf input.pdf
```
