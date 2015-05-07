!function (a, b) {
    function c() {
        return a[k] = a[k] || {}, q = f(p, a[k]), g("init"), -1 !== b.cookie.indexOf(j) ? void g(l, o) : navigator.CookiesOK ? (i("auto-CookiesOK"), void g(l, "plugin CookieOK")) : a.addEventListener ? void("complete" === b.readyState ? setTimeout(e) : (b.addEventListener("DOMContentLoaded", d, !1), a.addEventListener("load", d, !1))) : void g(l, "unsupported browser")
    }

    function d() {
        b.removeEventListener("DOMContentLoaded", d, !1), a.removeEventListener("load", d, !1), e()
    }

    function e() {
        g(m);
        var a = '<span>%t <a href="%l">%m</a></span> <a href="#">%a</a>';
        a = a.replace("%t", q.l18n.text).replace("%l", q.l18n.link).replace("%m", q.l18n.more).replace("%a", q.l18n.accept);
        var c = b.body, d = b.head, e = document.createElement("style");
        e.type = "text/css", e.appendChild(b.createTextNode(p.css));
        var f = b.createElement("div");
        f.className = j + " fucking-priority", f.innerHTML = a, d.appendChild(e), c.insertBefore(f, c.firstChild), f.getElementsByTagName("a")[1].addEventListener("click", function () {
            h(f)
        });
        var i = f.getElementsByTagName("a")[0];
        i.addEventListener("click", function () {
            g("open-more")
        }), q.options.popupMore && i.setAttribute("target", "_blank")
    }

    function f(a, b) {
        var c = {};
        for (key in a)"undefined" == typeof b[key] ? c[key] = a[key] : "object" == typeof b[key] ? c[key] = f(a[key], b[key]) : c[key] = b[key];
        return c
    }

    function g(b, c) {
        "function" == typeof q.options.callback && q.options.callback(b, c);
        var d = q.options.dataLayerName;
        d && a[d] && "function" == typeof a[d].push && a[d].push({event: j, action: b, label: c})
    }

    function h(a) {
        b.body.removeChild(a), g(n, o), i()
    }

    function i(a) {
        "undefined" == typeof a && (a = "1");
        var c = new Date;
        c.setFullYear(c.getFullYear() + 1);
        var d = "; expires=" + c.toGMTString();
        b.cookie = j + "=" + encodeURIComponent(a) + d + "; path=/"
    }

    var j = "fucking-eu-cookies", k = "fucking_eu_config", l = "no-show", m = "show", n = "hide", o = "consent", p = {
        css: ".fucking-eu-cookies{background: #000;display:flex;flex-wrap:nowrap;justify-content:center;align-items:center;color:#fff;padding:5px;z-index:1000;top:0;left:0;width:100%;position:fixed}.fucking-eu-cookies,.fucking-eu-cookies span,.fucking-eu-cookies a{font-size:12px;font-family:'Arial','Helvetica',sans-serif}.fucking-eu-cookies span{padding-right:5px}.fucking-eu-cookies a,.fucking-eu-cookies a:hover,.fucking-eu-cookies a:visited,.fucking-eu-cookies a:active,.fucking-eu-cookies a:focus{color:gold;text-decoration:underline}.fucking-eu-cookies button{flex-shrink:0;background: gold;cursor:pointer;font-weight:.9em}",
        l18n: {
            text: "By using this site you agree to the use of cookies for analytics, personalised content and ads.",
            accept: "Got it",
            more: "Learn more",
            link: "https://www.google.com/policies/technologies/cookies/"
        },
        options: {popupMore: !1, callback: null, dataLayerName: null}
    }, q = {};
    c()
}(window, window.document);