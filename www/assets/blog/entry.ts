// @ts-ignore
import hljs from "highlight.js/lib/core";
// @ts-ignore
import yaml from "highlight.js/lib/languages/yaml";
// @ts-ignore
import javascript from "highlight.js/lib/languages/javascript";
// @ts-ignore
import dockerfile from "highlight.js/lib/languages/dockerfile";
// @ts-ignore
import php from "highlight.js/lib/languages/php";
// @ts-ignore
import sql from "highlight.js/lib/languages/sql";
// @styles
import "../theme/hljs.scss";
import "../theme/hljs.dracula.scss";
import "../theme/richtext.scss";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("dockerfile", dockerfile);
hljs.registerLanguage("yaml", yaml);
hljs.registerLanguage("php", php);
hljs.registerLanguage("sql", sql);

window.addEventListener("DOMContentLoaded", () => {
  // Code highlightinÎg
  document.querySelectorAll("pre code").forEach(block => {
    // Clear markdown classes
    block.classList = [];
    hljs.highlightBlock(block);
  });
});
