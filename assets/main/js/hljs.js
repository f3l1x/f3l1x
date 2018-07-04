import hljs from 'highlight.js/lib/highlight';
import yaml from 'highlight.js/lib/languages/yaml';
import javascript from 'highlight.js/lib/languages/javascript';
import dockerfile from 'highlight.js/lib/languages/dockerfile';
import php from 'highlight.js/lib/languages/php';
import sql from 'highlight.js/lib/languages/sql';
import 'highlight.js/styles/agate.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('dockerfile', dockerfile);
hljs.registerLanguage('yaml', yaml);
hljs.registerLanguage('php', php);
hljs.registerLanguage('sql', sql);

window.addEventListener('DOMContentLoaded', () => {
    // Code highlightinÎg
    document.querySelectorAll('pre code').forEach(block => {
        // Clear markdown classes
        block.classList = [];
        hljs.highlightBlock(block);
    });
});
