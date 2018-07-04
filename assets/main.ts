// Bootstrap 4 (CSS + JS)
import 'bootstrap/js/src/tab';
import './main/css/bootstrap.scss';

// Font-awesome 4 (FTW)
import 'font-awesome/scss/font-awesome.scss';

// Highlight.js
import './main/js/hljs';

// CSS theme
import "./main/css/theme.less";

// Vue apps
if (document.getElementById('app-tools')) {
    import('./main/vue/app-tools');
}
