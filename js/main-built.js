/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */

/*
 * jQuery FlexSlider v2.1
 * http://www.woothemes.com/flexslider/
 *
 * Copyright 2012 WooThemes
 * Free to use under the GPLv2 license.
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Contributing author: Tyler Smith (@mbmufffin)
 */

/*
 * jQuery EasIng v1.1.2 - http://gsgd.co.uk/sandbox/jquery.easIng.php
 *
 * Uses the built In easIng capabilities added In jQuery 1.1
 * to offer multiple easIng options
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */

window.Modernizr = function (e, t, n) {
    function i(e) {
        v.cssText = e
    }

    function r(e, t) {
        return i(x.join(e + ";") + (t || ""))
    }

    function o(e, t) {
        return typeof e === t
    }

    function a(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function s(e, t) {
        for (var i in e) {
            var r = e[i];
            if (!a(r, "-") && v[r] !== n) return "pfx" != t || r
        }
        return !1
    }

    function c(e, t, i) {
        for (var r in e) {
            var a = t[e[r]];
            if (a !== n) return !1 === i ? e[r] : o(a, "function") ? a.bind(i || t) : a
        }
        return !1
    }

    function l(e, t, n) {
        var i = e.charAt(0).toUpperCase() + e.slice(1), r = (e + " " + C.join(i + " ") + i).split(" ");
        return o(t, "string") || o(t, "undefined") ? s(r, t) : (r = (e + " " + T.join(i + " ") + i).split(" "), c(r, t, n))
    }

    var u, d, f = {}, p = t.documentElement, h = "modernizr", m = t.createElement(h), v = m.style,
        g = t.createElement("input"), y = ":)", b = {}.toString, x = " -webkit- -moz- -o- -ms- ".split(" "),
        w = "Webkit Moz O ms", C = w.split(" "), T = w.toLowerCase().split(" "),
        S = {svg: "http://www.w3.org/2000/svg"}, N = {}, k = {}, E = {}, j = [], D = j.slice,
        A = function (e, n, i, r) {
            var o, a, s, c, l = t.createElement("div"), u = t.body, d = u || t.createElement("body");
            if (parseInt(i, 10)) for (; i--;) s = t.createElement("div"), s.id = r ? r[i] : h + (i + 1), l.appendChild(s);
            return o = ["&#173;", '<style id="s', h, '">', e, "</style>"].join(""), l.id = h, (u ? l : d).innerHTML += o, d.appendChild(l), u || (d.style.background = "", d.style.overflow = "hidden", c = p.style.overflow, p.style.overflow = "hidden", p.appendChild(d)), a = n(l, e), u ? l.parentNode.removeChild(l) : (d.parentNode.removeChild(d), p.style.overflow = c), !!a
        }, M = function (t) {
            var n = e.matchMedia || e.msMatchMedia;
            if (n) return n(t).matches;
            var i;
            return A("@media " + t + " { #" + h + " { position: absolute; } }", function (t) {
                i = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
            }), i
        }, P = function () {
            function e(e, r) {
                r = r || t.createElement(i[e] || "div"), e = "on" + e;
                var a = e in r;
                return a || (r.setAttribute || (r = t.createElement("div")), r.setAttribute && r.removeAttribute && (r.setAttribute(e, ""), a = o(r[e], "function"), o(r[e], "undefined") || (r[e] = n), r.removeAttribute(e))), r = null, a
            }

            var i = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return e
        }(), O = {}.hasOwnProperty;
    d = o(O, "undefined") || o(O.call, "undefined") ? function (e, t) {
        return t in e && o(e.constructor.prototype[t], "undefined")
    } : function (e, t) {
        return O.call(e, t)
    }, Function.prototype.bind || (Function.prototype.bind = function (e) {
        var t = this;
        if ("function" != typeof t) throw new TypeError;
        var n = D.call(arguments, 1), i = function () {
            if (this instanceof i) {
                var r = function () {
                };
                r.prototype = t.prototype;
                var o = new r, a = t.apply(o, n.concat(D.call(arguments)));
                return Object(a) === a ? a : o
            }
            return t.apply(e, n.concat(D.call(arguments)))
        };
        return i
    }), N.flexbox = function () {
        return l("flexWrap")
    }, N.canvas = function () {
        var e = t.createElement("canvas");
        return !!e.getContext && !!e.getContext("2d")
    }, N.canvastext = function () {
        return !!f.canvas && !!o(t.createElement("canvas").getContext("2d").fillText, "function")
    }, N.webgl = function () {
        return !!e.WebGLRenderingContext
    }, N.touch = function () {
        var n;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : A(["@media (", x.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (e) {
            n = 9 === e.offsetTop
        }), n
    }, N.geolocation = function () {
        return "geolocation" in navigator
    }, N.postmessage = function () {
        return !!e.postMessage
    }, N.websqldatabase = function () {
        return !!e.openDatabase
    }, N.indexedDB = function () {
        return !!l("indexedDB", e)
    }, N.hashchange = function () {
        return P("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
    }, N.history = function () {
        return !!e.history && !!history.pushState
    }, N.draganddrop = function () {
        var e = t.createElement("div");
        return "draggable" in e || "ondragstart" in e && "ondrop" in e
    }, N.websockets = function () {
        return "WebSocket" in e || "MozWebSocket" in e
    }, N.rgba = function () {
        return i("background-color:rgba(150,255,150,.5)"), a(v.backgroundColor, "rgba")
    }, N.hsla = function () {
        return i("background-color:hsla(120,40%,100%,.5)"), a(v.backgroundColor, "rgba") || a(v.backgroundColor, "hsla")
    }, N.multiplebgs = function () {
        return i("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(v.background)
    }, N.backgroundsize = function () {
        return l("backgroundSize")
    }, N.borderimage = function () {
        return l("borderImage")
    }, N.borderradius = function () {
        return l("borderRadius")
    }, N.boxshadow = function () {
        return l("boxShadow")
    }, N.textshadow = function () {
        return "" === t.createElement("div").style.textShadow
    }, N.opacity = function () {
        return r("opacity:.55"), /^0.55$/.test(v.opacity)
    }, N.cssanimations = function () {
        return l("animationName")
    }, N.csscolumns = function () {
        return l("columnCount")
    }, N.cssgradients = function () {
        var e = "background-image:";
        return i((e + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + e) + x.join("linear-gradient(left top,#9f9, white);" + e)).slice(0, -e.length)), a(v.backgroundImage, "gradient")
    }, N.cssreflections = function () {
        return l("boxReflect")
    }, N.csstransforms = function () {
        return !!l("transform")
    }, N.csstransforms3d = function () {
        var e = !!l("perspective");
        return e && "webkitPerspective" in p.style && A("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (t, n) {
            e = 9 === t.offsetLeft && 3 === t.offsetHeight
        }), e
    }, N.csstransitions = function () {
        return l("transition")
    }, N.fontface = function () {
        var e;
        return A('@font-face {font-family:"font";src:url("https://")}', function (n, i) {
            var r = t.getElementById("smodernizr"), o = r.sheet || r.styleSheet,
                a = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
            e = /src/i.test(a) && 0 === a.indexOf(i.split(" ")[0])
        }), e
    }, N.generatedcontent = function () {
        var e;
        return A(["#", h, "{font:0/0 a}#", h, ':after{content:"', y, '";visibility:hidden;font:3px/1 a}'].join(""), function (t) {
            e = t.offsetHeight >= 3
        }), e
    }, N.video = function () {
        var e = t.createElement("video"), n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (e) {
        }
        return n
    }, N.audio = function () {
        var e = t.createElement("audio"), n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (e) {
        }
        return n
    }, N.localstorage = function () {
        try {
            return localStorage.setItem(h, h), localStorage.removeItem(h), !0
        } catch (e) {
            return !1
        }
    }, N.sessionstorage = function () {
        try {
            return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0
        } catch (e) {
            return !1
        }
    }, N.webworkers = function () {
        return !!e.Worker
    }, N.applicationcache = function () {
        return !!e.applicationCache
    }, N.svg = function () {
        return !!t.createElementNS && !!t.createElementNS(S.svg, "svg").createSVGRect
    }, N.inlinesvg = function () {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == S.svg
    }, N.smil = function () {
        return !!t.createElementNS && /SVGAnimate/.test(b.call(t.createElementNS(S.svg, "animate")))
    }, N.svgclippaths = function () {
        return !!t.createElementNS && /SVGClipPath/.test(b.call(t.createElementNS(S.svg, "clipPath")))
    };
    for (var q in N) d(N, q) && (u = q.toLowerCase(), f[u] = N[q](), j.push((f[u] ? "" : "no-") + u));
    return f.input || function () {
        f.input = function (n) {
            for (var i = 0, r = n.length; i < r; i++) E[n[i]] = n[i] in g;
            return E.list && (E.list = !!t.createElement("datalist") && !!e.HTMLDataListElement), E
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), f.inputtypes = function (e) {
            for (var i, r, o, a = 0, s = e.length; a < s; a++) g.setAttribute("type", r = e[a]), i = "text" !== g.type, i && (g.value = y, g.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(r) && g.style.WebkitAppearance !== n ? (p.appendChild(g), o = t.defaultView, i = o.getComputedStyle && "textfield" !== o.getComputedStyle(g, null).WebkitAppearance && 0 !== g.offsetHeight, p.removeChild(g)) : /^(search|tel)$/.test(r) || (i = /^(url|email)$/.test(r) ? g.checkValidity && !1 === g.checkValidity() : g.value != y)), k[e[a]] = !!i;
            return k
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }(), f.addTest = function (e, t) {
        if ("object" == typeof e) for (var i in e) d(e, i) && f.addTest(i, e[i]); else {
            if (e = e.toLowerCase(), f[e] !== n) return f;
            t = "function" == typeof t ? t() : t, p.className += " " + (t ? "" : "no-") + e, f[e] = t
        }
        return f
    }, i(""), m = g = null, function (e, t) {
        function n(e, t) {
            var n = e.createElement("p"), i = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", i.insertBefore(n.lastChild, i.firstChild)
        }

        function i() {
            var e = g.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function r(e) {
            var t = v[e[h]];
            return t || (t = {}, m++, e[h] = m, v[m] = t), t
        }

        function o(e, n, i) {
            if (n || (n = t), u) return n.createElement(e);
            i || (i = r(n));
            var o;
            return o = i.cache[e] ? i.cache[e].cloneNode() : p.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e), o.canHaveChildren && !f.test(e) ? i.frag.appendChild(o) : o
        }

        function a(e, n) {
            if (e || (e = t), u) return e.createDocumentFragment();
            n = n || r(e);
            for (var o = n.frag.cloneNode(), a = 0, s = i(), c = s.length; a < c; a++) o.createElement(s[a]);
            return o
        }

        function s(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
                return g.shivMethods ? o(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/\w+/g, function (e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(g, t.frag)
        }

        function c(e) {
            e || (e = t);
            var i = r(e);
            return g.shivCSS && !l && !i.hasCSS && (i.hasCSS = !!n(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), u || s(e, i), e
        }

        var l, u, d = e.html5 || {}, f = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            h = "_html5shiv", m = 0, v = {};
        !function () {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", l = "hidden" in e, u = 1 == e.childNodes.length || function () {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement
                }()
            } catch (e) {
                l = !0, u = !0
            }
        }();
        var g = {
            elements: d.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: !1 !== d.shivCSS,
            supportsUnknownElements: u,
            shivMethods: !1 !== d.shivMethods,
            type: "default",
            shivDocument: c,
            createElement: o,
            createDocumentFragment: a
        };
        e.html5 = g, c(t)
    }(this, t), f._version = "2.6.2", f._prefixes = x, f._domPrefixes = T, f._cssomPrefixes = C, f.mq = M, f.hasEvent = P, f.testProp = function (e) {
        return s([e])
    }, f.testAllProps = l, f.testStyles = A, f.prefixed = function (e, t, n) {
        return t ? l(e, t, n) : l(e, "pfx")
    }, p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + j.join(" "), f
}(this, this.document), function (e, t, n) {
    function i(e) {
        return "[object Function]" == v.call(e)
    }

    function r(e) {
        return "string" == typeof e
    }

    function o() {
    }

    function a(e) {
        return !e || "loaded" == e || "complete" == e || "uninitialized" == e
    }

    function s() {
        var e = g.shift();
        y = 1, e ? e.t ? h(function () {
            ("c" == e.t ? f.injectCss : f.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
        }, 0) : (e(), s()) : y = 0
    }

    function c(e, n, i, r, o, c, l) {
        function u(t) {
            if (!p && a(d.readyState) && (b.r = p = 1, !y && s(), d.onload = d.onreadystatechange = null, t)) {
                "img" != e && h(function () {
                    w.removeChild(d)
                }, 50);
                for (var i in k[n]) k[n].hasOwnProperty(i) && k[n][i].onload()
            }
        }

        var l = l || f.errorTimeout, d = t.createElement(e), p = 0, v = 0, b = {t: i, s: n, e: o, a: c, x: l};
        1 === k[n] && (v = 1, k[n] = []), "object" == e ? d.data = n : (d.src = n, d.type = e), d.width = d.height = "0", d.onerror = d.onload = d.onreadystatechange = function () {
            u.call(this, v)
        }, g.splice(r, 0, b), "img" != e && (v || 2 === k[n] ? (w.insertBefore(d, x ? null : m), h(u, l)) : k[n].push(d))
    }

    function l(e, t, n, i, o) {
        return y = 0, t = t || "j", r(e) ? c("c" == t ? T : C, e, t, this.i++, n, i, o) : (g.splice(this.i++, 0, e), 1 == g.length && s()), this
    }

    function u() {
        var e = f;
        return e.loader = {load: l, i: 0}, e
    }

    var d, f, p = t.documentElement, h = e.setTimeout, m = t.getElementsByTagName("script")[0], v = {}.toString, g = [],
        y = 0, b = "MozAppearance" in p.style, x = b && !!t.createRange().compareNode, w = x ? p : m.parentNode,
        p = e.opera && "[object Opera]" == v.call(e.opera), p = !!t.attachEvent && !p,
        C = b ? "object" : p ? "script" : "img", T = p ? "script" : C, S = Array.isArray || function (e) {
            return "[object Array]" == v.call(e)
        }, N = [], k = {}, E = {
            timeout: function (e, t) {
                return t.length && (e.timeout = t[0]), e
            }
        };
    f = function (e) {
        function t(e) {
            var t, n, i, e = e.split("!"), r = N.length, o = e.pop(), a = e.length,
                o = {url: o, origUrl: o, prefixes: e};
            for (n = 0; n < a; n++) i = e[n].split("="), (t = E[i.shift()]) && (o = t(o, i));
            for (n = 0; n < r; n++) o = N[n](o);
            return o
        }

        function a(e, r, o, a, s) {
            var c = t(e), l = c.autoCallback;
            c.url.split(".").pop().split("?").shift(), c.bypass || (r && (r = i(r) ? r : r[e] || r[a] || r[e.split("/").pop().split("?")[0]]), c.instead ? c.instead(e, r, o, a, s) : (k[c.url] ? c.noexec = !0 : k[c.url] = 1, o.load(c.url, c.forceCSS || !c.forceJS && "css" == c.url.split(".").pop().split("?").shift() ? "c" : n, c.noexec, c.attrs, c.timeout), (i(r) || i(l)) && o.load(function () {
                u(), r && r(c.origUrl, s, a), l && l(c.origUrl, s, a), k[c.url] = 2
            })))
        }

        function s(e, t) {
            function n(e, n) {
                if (e) {
                    if (r(e)) n || (d = function () {
                        var e = [].slice.call(arguments);
                        f.apply(this, e), p()
                    }), a(e, d, t, 0, l); else if (Object(e) === e) for (c in s = function () {
                        var t, n = 0;
                        for (t in e) e.hasOwnProperty(t) && n++;
                        return n
                    }(), e) e.hasOwnProperty(c) && (!n && !--s && (i(d) ? d = function () {
                        var e = [].slice.call(arguments);
                        f.apply(this, e), p()
                    } : d[c] = function (e) {
                        return function () {
                            var t = [].slice.call(arguments);
                            e && e.apply(this, t), p()
                        }
                    }(f[c])), a(e[c], d, t, c, l))
                } else !n && p()
            }

            var s, c, l = !!e.test, u = e.load || e.both, d = e.callback || o, f = d, p = e.complete || o;
            n(l ? e.yep : e.nope, !!u), u && n(u)
        }

        var c, l, d = this.yepnope.loader;
        if (r(e)) a(e, 0, d, 0); else if (S(e)) for (c = 0; c < e.length; c++) l = e[c], r(l) ? a(l, 0, d, 0) : S(l) ? f(l) : Object(l) === l && s(l, d); else Object(e) === e && s(e, d)
    }, f.addPrefix = function (e, t) {
        E[e] = t
    }, f.addFilter = function (e) {
        N.push(e)
    }, f.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", d = function () {
        t.removeEventListener("DOMContentLoaded", d, 0), t.readyState = "complete"
    }, 0)), e.yepnope = u(), e.yepnope.executeStack = s, e.yepnope.injectJs = function (e, n, i, r, c, l) {
        var u, d, p = t.createElement("script"), r = r || f.errorTimeout;
        p.src = e;
        for (d in i) p.setAttribute(d, i[d]);
        n = l ? s : n || o, p.onreadystatechange = p.onload = function () {
            !u && a(p.readyState) && (u = 1, n(), p.onload = p.onreadystatechange = null)
        }, h(function () {
            u || (u = 1, n(1))
        }, r), c ? p.onload() : m.parentNode.insertBefore(p, m)
    }, e.yepnope.injectCss = function (e, n, i, r, a, c) {
        var l, r = t.createElement("link"), n = c ? s : n || o;
        r.href = e, r.rel = "stylesheet", r.type = "text/css";
        for (l in i) r.setAttribute(l, i[l]);
        a || (m.parentNode.insertBefore(r, m), h(n, 0))
    }
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
}, define("modernizr-2.6.2.min", function () {
}), function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = "length" in e && e.length, n = Z.type(e);
        return "function" !== n && !Z.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }

    function i(e, t, n) {
        if (Z.isFunction(t)) return Z.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return Z.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (se.test(t)) return Z.filter(t, e, n);
            t = Z.filter(t, e)
        }
        return Z.grep(e, function (e) {
            return U.call(t, e) >= 0 !== n
        })
    }

    function r(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    function o(e) {
        var t = pe[e] = {};
        return Z.each(e.match(fe) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        J.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), Z.ready()
    }

    function s() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = Z.expando + s.uid++
    }

    function c(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(be, "-$1").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
            try {
                n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ye.test(n) ? Z.parseJSON(n) : n)
            } catch (e) {
            }
            ge.set(e, t, n)
        } else n = void 0;
        return n
    }

    function l() {
        return !0
    }

    function u() {
        return !1
    }

    function d() {
        try {
            return J.activeElement
        } catch (e) {
        }
    }

    function f(e, t) {
        return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function p(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function h(e) {
        var t = Le.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function m(e, t) {
        for (var n = 0, i = e.length; i > n; n++) ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
    }

    function v(e, t) {
        var n, i, r, o, a, s, c, l;
        if (1 === t.nodeType) {
            if (ve.hasData(e) && (o = ve.access(e), a = ve.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (r in l) for (n = 0, i = l[r].length; i > n; n++) Z.event.add(t, r, l[r][n])
            }
            ge.hasData(e) && (s = ge.access(e), c = Z.extend({}, s), ge.set(t, c))
        }
    }

    function g(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
    }

    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Te.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function b(t, n) {
        var i, r = Z(n.createElement(t)).appendTo(n.body),
            o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : Z.css(r[0], "display");
        return r.detach(), o
    }

    function x(e) {
        var t = J, n = $e[e];
        return n || (n = b(e, t), "none" !== n && n || (He = (He || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = He[0].contentDocument, t.write(), t.close(), n = b(e, t), He.detach()), $e[e] = n), n
    }

    function w(e, t, n) {
        var i, r, o, a, s = e.style;
        return n = n || Be(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || Z.contains(e.ownerDocument, e) || (a = Z.style(e, t)), We.test(a) && Fe.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function C(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function T(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), i = t, r = Ve.length; r--;) if ((t = Ve[r] + n) in e) return t;
        return i
    }

    function S(e, t, n) {
        var i = ze.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function N(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += Z.css(e, n + we[o], !0, r)), i ? ("content" === n && (a -= Z.css(e, "padding" + we[o], !0, r)), "margin" !== n && (a -= Z.css(e, "border" + we[o] + "Width", !0, r))) : (a += Z.css(e, "padding" + we[o], !0, r), "padding" !== n && (a += Z.css(e, "border" + we[o] + "Width", !0, r)));
        return a
    }

    function k(e, t, n) {
        var i = !0, r = "width" === t ? e.offsetWidth : e.offsetHeight, o = Be(e),
            a = "border-box" === Z.css(e, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = w(e, t, o), (0 > r || null == r) && (r = e.style[t]), We.test(r)) return r;
            i = a && (G.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + N(e, t, n || (a ? "border" : "content"), i, o) + "px"
    }

    function E(e, t) {
        for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (o[a] = ve.get(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ce(i) && (o[a] = ve.access(i, "olddisplay", x(i.nodeName)))) : (r = Ce(i), "none" === n && r || ve.set(i, "olddisplay", r ? n : Z.css(i, "display"))));
        for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function j(e, t, n, i, r) {
        return new j.prototype.init(e, t, n, i, r)
    }

    function D() {
        return setTimeout(function () {
            Ye = void 0
        }), Ye = Z.now()
    }

    function A(e, t) {
        var n, i = 0, r = {height: e};
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = we[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function M(e, t, n) {
        for (var i, r = (tt[t] || []).concat(tt["*"]), o = 0, a = r.length; a > o; o++) if (i = r[o].call(n, t, e)) return i
    }

    function P(e, t, n) {
        var i, r, o, a, s, c, l, u = this, d = {}, f = e.style, p = e.nodeType && Ce(e), h = ve.get(e, "fxshow");
        n.queue || (s = Z._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, c = s.empty.fire, s.empty.fire = function () {
            s.unqueued || c()
        }), s.unqueued++, u.always(function () {
            u.always(function () {
                s.unqueued--, Z.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], l = Z.css(e, "display"), "inline" === ("none" === l ? ve.get(e, "olddisplay") || x(e.nodeName) : l) && "none" === Z.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", u.always(function () {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in t) if (r = t[i], Je.exec(r)) {
            if (delete t[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                if ("show" !== r || !h || void 0 === h[i]) continue;
                p = !0
            }
            d[i] = h && h[i] || Z.style(e, i)
        } else l = void 0;
        if (Z.isEmptyObject(d)) "inline" === ("none" === l ? x(e.nodeName) : l) && (f.display = l); else {
            h ? "hidden" in h && (p = h.hidden) : h = ve.access(e, "fxshow", {}), o && (h.hidden = !p), p ? Z(e).show() : u.done(function () {
                Z(e).hide()
            }), u.done(function () {
                var t;
                ve.remove(e, "fxshow");
                for (t in d) Z.style(e, t, d[t])
            });
            for (i in d) a = M(p ? h[i] : 0, i, u), i in h || (h[i] = a.start, p && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function O(e, t) {
        var n, i, r, o, a;
        for (n in e) if (i = Z.camelCase(n), r = t[i], o = e[n], Z.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = Z.cssHooks[i]) && "expand" in a) {
            o = a.expand(o), delete e[i];
            for (n in o) n in e || (e[n] = o[n], t[n] = r)
        } else t[i] = r
    }

    function q(e, t, n) {
        var i, r, o = 0, a = et.length, s = Z.Deferred().always(function () {
            delete c.elem
        }), c = function () {
            if (r) return !1;
            for (var t = Ye || D(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, o = 1 - i, a = 0, c = l.tweens.length; c > a; a++) l.tweens[a].run(o);
            return s.notifyWith(e, [l, o, n]), 1 > o && c ? n : (s.resolveWith(e, [l]), !1)
        }, l = s.promise({
            elem: e,
            props: Z.extend({}, t),
            opts: Z.extend(!0, {specialEasing: {}}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Ye || D(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var i = Z.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(i), i
            },
            stop: function (t) {
                var n = 0, i = t ? l.tweens.length : 0;
                if (r) return this;
                for (r = !0; i > n; n++) l.tweens[n].run(1);
                return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
            }
        }), u = l.props;
        for (O(u, l.opts.specialEasing); a > o; o++) if (i = et[o].call(l, e, u, l.opts)) return i;
        return Z.map(u, M, l), Z.isFunction(l.opts.start) && l.opts.start.call(e, l), Z.fx.timer(Z.extend(c, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function L(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0, o = t.toLowerCase().match(fe) || [];
            if (Z.isFunction(n)) for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function _(e, t, n, i) {
        function r(s) {
            var c;
            return o[s] = !0, Z.each(e[s] || [], function (e, s) {
                var l = s(t, n, i);
                return "string" != typeof l || a || o[l] ? a ? !(c = l) : void 0 : (t.dataTypes.unshift(l), r(l), !1)
            }), c
        }

        var o = {}, a = e === gt;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function I(e, t) {
        var n, i, r = Z.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && Z.extend(!0, e, i), e
    }

    function H(e, t, n) {
        for (var i, r, o, a, s = e.contents, c = e.dataTypes; "*" === c[0];) c.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i) for (r in s) if (s[r] && s[r].test(i)) {
            c.unshift(r);
            break
        }
        if (c[0] in n) o = c[0]; else {
            for (r in n) {
                if (!c[0] || e.converters[r + " " + c[0]]) {
                    o = r;
                    break
                }
                a || (a = r)
            }
            o = o || a
        }
        return o ? (o !== c[0] && c.unshift(o), n[o]) : void 0
    }

    function $(e, t, n, i) {
        var r, o, a, s, c, l = {}, u = e.dataTypes.slice();
        if (u[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (o = u.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = o, o = u.shift()) if ("*" === o) o = c; else if ("*" !== c && c !== o) {
            if (!(a = l[c + " " + o] || l["* " + o])) for (r in l) if (s = r.split(" "), s[1] === o && (a = l[c + " " + s[0]] || l["* " + s[0]])) {
                !0 === a ? a = l[r] : !0 !== l[r] && (o = s[0], u.unshift(s[1]));
                break
            }
            if (!0 !== a) if (a && e.throws) t = a(t); else try {
                t = a(t)
            } catch (e) {
                return {state: "parsererror", error: a ? e : "No conversion from " + c + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    function F(e, t, n, i) {
        var r;
        if (Z.isArray(t)) Z.each(t, function (t, r) {
            n || Ct.test(e) ? i(e, r) : F(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
        }); else if (n || "object" !== Z.type(t)) i(e, t); else for (r in t) F(e + "[" + r + "]", t[r], n, i)
    }

    function W(e) {
        return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }

    var B = [], R = B.slice, z = B.concat, X = B.push, U = B.indexOf, Q = {}, V = Q.toString, Y = Q.hasOwnProperty,
        G = {}, J = e.document, K = "2.1.4", Z = function (e, t) {
            return new Z.fn.init(e, t)
        }, ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, te = /^-ms-/, ne = /-([\da-z])/gi, ie = function (e, t) {
            return t.toUpperCase()
        };
    Z.fn = Z.prototype = {
        jquery: K, constructor: Z, selector: "", length: 0, toArray: function () {
            return R.call(this)
        }, get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : R.call(this)
        }, pushStack: function (e) {
            var t = Z.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e, t) {
            return Z.each(this, e, t)
        }, map: function (e) {
            return this.pushStack(Z.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(R.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: X, sort: B.sort, splice: B.splice
    }, Z.extend = Z.fn.extend = function () {
        var e, t, n, i, r, o, a = arguments[0] || {}, s = 1, c = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || Z.isFunction(a) || (a = {}), s === c && (a = this, s--); c > s; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], i = e[t], a !== i && (l && i && (Z.isPlainObject(i) || (r = Z.isArray(i))) ? (r ? (r = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, a[t] = Z.extend(l, o, i)) : void 0 !== i && (a[t] = i));
        return a
    }, Z.extend({
        expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === Z.type(e)
        }, isArray: Array.isArray, isWindow: function (e) {
            return null != e && e === e.window
        }, isNumeric: function (e) {
            return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
        }, isPlainObject: function (e) {
            return "object" === Z.type(e) && !e.nodeType && !Z.isWindow(e) && !(e.constructor && !Y.call(e.constructor.prototype, "isPrototypeOf"))
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Q[V.call(e)] || "object" : typeof e
        }, globalEval: function (e) {
            var t, n = eval;
            (e = Z.trim(e)) && (1 === e.indexOf("use strict") ? (t = J.createElement("script"), t.text = e, J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        }, camelCase: function (e) {
            return e.replace(te, "ms-").replace(ne, ie)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, i) {
            var r = 0, o = e.length, a = n(e);
            if (i) {
                if (a) for (; o > r && !1 !== t.apply(e[r], i); r++) ; else for (r in e) if (!1 === t.apply(e[r], i)) break
            } else if (a) for (; o > r && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(ee, "")
        }, makeArray: function (e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? Z.merge(i, "string" == typeof e ? [e] : e) : X.call(i, e)), i
        }, inArray: function (e, t, n) {
            return null == t ? -1 : U.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; n > i; i++) e[r++] = t[i];
            return e.length = r, e
        }, grep: function (e, t, n) {
            for (var i = [], r = 0, o = e.length, a = !n; o > r; r++) !t(e[r], r) !== a && i.push(e[r]);
            return i
        }, map: function (e, t, i) {
            var r, o = 0, a = e.length, s = n(e), c = [];
            if (s) for (; a > o; o++) null != (r = t(e[o], o, i)) && c.push(r); else for (o in e) null != (r = t(e[o], o, i)) && c.push(r);
            return z.apply([], c)
        }, guid: 1, proxy: function (e, t) {
            var n, i, r;
            return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (i = R.call(arguments, 2), r = function () {
                return e.apply(t || this, i.concat(R.call(arguments)))
            }, r.guid = e.guid = e.guid || Z.guid++, r) : void 0
        }, now: Date.now, support: G
    }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        Q["[object " + t + "]"] = t.toLowerCase()
    });
    var re = function (e) {
        function t(e, t, n, i) {
            var r, o, a, s, l, d, f, p, h, m;
            if ((t ? t.ownerDocument || t : H) !== A && D(t), t = t || A, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
            if (!i && P) {
                if (11 !== s && (r = ve.exec(e))) if (a = r[1]) {
                    if (9 === s) {
                        if (!(o = t.getElementById(a)) || !o.parentNode) return n;
                        if (o.id === a) return n.push(o), n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && _(t, o) && o.id === a) return n.push(o), n
                } else {
                    if (r[2]) return G.apply(n, t.getElementsByTagName(e)), n;
                    if ((a = r[3]) && b.getElementsByClassName) return G.apply(n, t.getElementsByClassName(a)), n
                }
                if (b.qsa && (!O || !O.test(e))) {
                    if (p = f = I, h = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (d = T(e), (f = t.getAttribute("id")) ? p = f.replace(ye, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = d.length; l--;) d[l] = p + u(d[l]);
                        h = ge.test(e) && c(t.parentNode) || t, m = d.join(",")
                    }
                    if (m) try {
                        return G.apply(n, h.querySelectorAll(m)), n
                    } catch (e) {
                    } finally {
                        f || t.removeAttribute("id")
                    }
                }
            }
            return N(e.replace(ae, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = i
            }

            var t = [];
            return e
        }

        function i(e) {
            return e[I] = !0, e
        }

        function r(e) {
            var t = A.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) x.attrHandle[n[i]] = t
        }

        function a(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return i(function (t) {
                return t = +t, i(function (n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function c(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function l() {
        }

        function u(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function d(e, t, n) {
            var i = t.dir, r = n && "parentNode" === i, o = F++;
            return t.first ? function (t, n, o) {
                for (; t = t[i];) if (1 === t.nodeType || r) return e(t, n, o)
            } : function (t, n, a) {
                var s, c, l = [$, o];
                if (a) {
                    for (; t = t[i];) if ((1 === t.nodeType || r) && e(t, n, a)) return !0
                } else for (; t = t[i];) if (1 === t.nodeType || r) {
                    if (c = t[I] || (t[I] = {}), (s = c[i]) && s[0] === $ && s[1] === o) return l[2] = s[2];
                    if (c[i] = l, l[2] = e(t, n, a)) return !0
                }
            }
        }

        function f(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var r = e.length; r--;) if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function p(e, n, i) {
            for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
            return i
        }

        function h(e, t, n, i, r) {
            for (var o, a = [], s = 0, c = e.length, l = null != t; c > s; s++) (o = e[s]) && (!n || n(o, i, r)) && (a.push(o), l && t.push(s));
            return a
        }

        function m(e, t, n, r, o, a) {
            return r && !r[I] && (r = m(r)), o && !o[I] && (o = m(o, a)), i(function (i, a, s, c) {
                var l, u, d, f = [], m = [], v = a.length, g = i || p(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !i && t ? g : h(g, f, e, s, c), b = n ? o || (i ? e : v || r) ? [] : a : y;
                if (n && n(y, b, s, c), r) for (l = h(b, m), r(l, [], s, c), u = l.length; u--;) (d = l[u]) && (b[m[u]] = !(y[m[u]] = d));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (l = [], u = b.length; u--;) (d = b[u]) && l.push(y[u] = d);
                            o(null, b = [], l, c)
                        }
                        for (u = b.length; u--;) (d = b[u]) && (l = o ? K(i, d) : f[u]) > -1 && (i[l] = !(a[l] = d))
                    }
                } else b = h(b === a ? b.splice(v, b.length) : b), o ? o(null, a, b, c) : G.apply(a, b)
            })
        }

        function v(e) {
            for (var t, n, i, r = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, c = d(function (e) {
                return e === t
            }, a, !0), l = d(function (e) {
                return K(t, e) > -1
            }, a, !0), p = [function (e, n, i) {
                var r = !o && (i || n !== k) || ((t = n).nodeType ? c(e, n, i) : l(e, n, i));
                return t = null, r
            }]; r > s; s++) if (n = x.relative[e[s].type]) p = [d(f(p), n)]; else {
                if (n = x.filter[e[s].type].apply(null, e[s].matches), n[I]) {
                    for (i = ++s; r > i && !x.relative[e[i].type]; i++) ;
                    return m(s > 1 && f(p), s > 1 && u(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(ae, "$1"), n, i > s && v(e.slice(s, i)), r > i && v(e = e.slice(i)), r > i && u(e))
                }
                p.push(n)
            }
            return f(p)
        }

        function g(e, n) {
            var r = n.length > 0, o = e.length > 0, a = function (i, a, s, c, l) {
                var u, d, f, p = 0, m = "0", v = i && [], g = [], y = k, b = i || o && x.find.TAG("*", l),
                    w = $ += null == y ? 1 : Math.random() || .1, C = b.length;
                for (l && (k = a !== A && a); m !== C && null != (u = b[m]); m++) {
                    if (o && u) {
                        for (d = 0; f = e[d++];) if (f(u, a, s)) {
                            c.push(u);
                            break
                        }
                        l && ($ = w)
                    }
                    r && ((u = !f && u) && p--, i && v.push(u))
                }
                if (p += m, r && m !== p) {
                    for (d = 0; f = n[d++];) f(v, g, a, s);
                    if (i) {
                        if (p > 0) for (; m--;) v[m] || g[m] || (g[m] = V.call(c));
                        g = h(g)
                    }
                    G.apply(c, g), l && !i && g.length > 0 && p + n.length > 1 && t.uniqueSort(c)
                }
                return l && ($ = w, k = y), v
            };
            return r ? i(a) : a
        }

        var y, b, x, w, C, T, S, N, k, E, j, D, A, M, P, O, q, L, _, I = "sizzle" + 1 * new Date, H = e.document, $ = 0,
            F = 0, W = n(), B = n(), R = n(), z = function (e, t) {
                return e === t && (j = !0), 0
            }, X = 1 << 31, U = {}.hasOwnProperty, Q = [], V = Q.pop, Y = Q.push, G = Q.push, J = Q.slice,
            K = function (e, t) {
                for (var n = 0, i = e.length; i > n; n++) if (e[n] === t) return n;
                return -1
            },
            Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ne = te.replace("w", "w#"),
            ie = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + ee + "*\\]",
            re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
            oe = new RegExp(ee + "+", "g"), ae = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            se = new RegExp("^" + ee + "*," + ee + "*"), ce = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), ue = new RegExp(re),
            de = new RegExp("^" + ne + "$"), fe = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ie),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Z + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            }, pe = /^(?:input|select|textarea|button)$/i, he = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ge = /[+~]/, ye = /'|\\/g,
            be = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), xe = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, we = function () {
                D()
            };
        try {
            G.apply(Q = J.call(H.childNodes), H.childNodes), Q[H.childNodes.length].nodeType
        } catch (e) {
            G = {
                apply: Q.length ? function (e, t) {
                    Y.apply(e, J.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];) ;
                    e.length = n - 1
                }
            }
        }
        b = t.support = {}, C = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, D = t.setDocument = function (e) {
            var t, n, i = e ? e.ownerDocument || e : H;
            return i !== A && 9 === i.nodeType && i.documentElement ? (A = i, M = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), P = !C(i), b.attributes = r(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), b.getElementsByTagName = r(function (e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), b.getElementsByClassName = me.test(i.getElementsByClassName), b.getById = r(function (e) {
                return M.appendChild(e).id = I, !i.getElementsByName || !i.getElementsByName(I).length
            }), b.getById ? (x.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && P) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, x.filter.ID = function (e) {
                var t = e.replace(be, xe);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete x.find.ID, x.filter.ID = function (e) {
                var t = e.replace(be, xe);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), x.find.TAG = b.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, x.find.CLASS = b.getElementsByClassName && function (e, t) {
                return P ? t.getElementsByClassName(e) : void 0
            }, q = [], O = [], (b.qsa = me.test(i.querySelectorAll)) && (r(function (e) {
                M.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + I + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + I + "+*").length || O.push(".#.+[+~]")
            }), r(function (e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
            })), (b.matchesSelector = me.test(L = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && r(function (e) {
                b.disconnectedMatch = L.call(e, "div"), L.call(e, "[s!='']:x"), q.push("!=", re)
            }), O = O.length && new RegExp(O.join("|")), q = q.length && new RegExp(q.join("|")), t = me.test(M.compareDocumentPosition), _ = t || me.test(M.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, z = t ? function (e, t) {
                if (e === t) return j = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === H && _(H, e) ? -1 : t === i || t.ownerDocument === H && _(H, t) ? 1 : E ? K(E, e) - K(E, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return j = !0, 0;
                var n, r = 0, o = e.parentNode, s = t.parentNode, c = [e], l = [t];
                if (!o || !s) return e === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : E ? K(E, e) - K(E, t) : 0;
                if (o === s) return a(e, t);
                for (n = e; n = n.parentNode;) c.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; c[r] === l[r];) r++;
                return r ? a(c[r], l[r]) : c[r] === H ? -1 : l[r] === H ? 1 : 0
            }, i) : A
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== A && D(e), n = n.replace(le, "='$1']"), !(!b.matchesSelector || !P || q && q.test(n) || O && O.test(n))) try {
                var i = L.call(e, n);
                if (i || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {
            }
            return t(n, A, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== A && D(e), _(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== A && D(e);
            var n = x.attrHandle[t.toLowerCase()],
                i = n && U.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
            return void 0 !== i ? i : b.attributes || !P ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [], i = 0, r = 0;
            if (j = !b.detectDuplicates, E = !b.sortStable && e.slice(0), e.sort(z), j) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return E = null, e
        }, w = t.getText = function (e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += w(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else for (; t = e[i++];) n += w(t);
            return n
        }, x = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(be, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(be, xe).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && W(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, n, i) {
                    return function (r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                    }
                }, CHILD: function (e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === i && 0 === r ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, c) {
                        var l, u, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling", v = t.parentNode,
                            g = s && t.nodeName.toLowerCase(), y = !c && !s;
                        if (v) {
                            if (o) {
                                for (; m;) {
                                    for (d = t; d = d[m];) if (s ? d.nodeName.toLowerCase() === g : 1 === d.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? v.firstChild : v.lastChild], a && y) {
                                for (u = v[I] || (v[I] = {}), l = u[e] || [], p = l[0] === $ && l[1], f = l[0] === $ && l[2], d = p && v.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop();) if (1 === d.nodeType && ++f && d === t) {
                                    u[e] = [$, p, f];
                                    break
                                }
                            } else if (y && (l = (t[I] || (t[I] = {}))[e]) && l[0] === $) f = l[1]; else for (; (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== g : 1 !== d.nodeType) || !++f || (y && ((d[I] || (d[I] = {}))[e] = [$, f]), d !== t));) ;
                            return (f -= r) === i || f % i == 0 && f / i >= 0
                        }
                    }
                }, PSEUDO: function (e, n) {
                    var r, o = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[I] ? o(n) : o.length > 1 ? (r = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                        for (var i, r = o(e, n), a = r.length; a--;) i = K(e, r[a]), e[i] = !(t[i] = r[a])
                    }) : function (e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [], n = [], r = S(e.replace(ae, "$1"));
                    return r[I] ? i(function (e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;) (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }), has: i(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }), contains: i(function (e) {
                    return e = e.replace(be, xe), function (t) {
                        return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                    }
                }), lang: i(function (e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, xe).toLowerCase(), function (t) {
                        var n;
                        do {
                            if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === M
                }, focus: function (e) {
                    return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return !1 === e.disabled
                }, disabled: function (e) {
                    return !0 === e.disabled
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !x.pseudos.empty(e)
                }, header: function (e) {
                    return he.test(e.nodeName)
                }, input: function (e) {
                    return pe.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: s(function () {
                    return [0]
                }), last: s(function (e, t) {
                    return [t - 1]
                }), eq: s(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }), even: s(function (e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }), odd: s(function (e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }), lt: s(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }), gt: s(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (y in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) x.pseudos[y] = function (e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(y);
        for (y in{submit: !0, reset: !0}) x.pseudos[y] = function (e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(y);
        return l.prototype = x.filters = x.pseudos, x.setFilters = new l, T = t.tokenize = function (e, n) {
            var i, r, o, a, s, c, l, u = B[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (s = e, c = [], l = x.preFilter; s;) {
                (!i || (r = se.exec(s))) && (r && (s = s.slice(r[0].length) || s), c.push(o = [])), i = !1, (r = ce.exec(s)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(ae, " ")
                }), s = s.slice(i.length));
                for (a in x.filter) !(r = fe[a].exec(s)) || l[a] && !(r = l[a](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: a,
                    matches: r
                }), s = s.slice(i.length));
                if (!i) break
            }
            return n ? s.length : s ? t.error(e) : B(e, c).slice(0)
        }, S = t.compile = function (e, t) {
            var n, i = [], r = [], o = R[e + " "];
            if (!o) {
                for (t || (t = T(e)), n = t.length; n--;) o = v(t[n]), o[I] ? i.push(o) : r.push(o);
                o = R(e, g(r, i)), o.selector = e
            }
            return o
        }, N = t.select = function (e, t, n, i) {
            var r, o, a, s, l, d = "function" == typeof e && e, f = !i && T(e = d.selector || e);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && b.getById && 9 === t.nodeType && P && x.relative[o[1].type]) {
                    if (!(t = (x.find.ID(a.matches[0].replace(be, xe), t) || [])[0])) return n;
                    d && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = fe.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !x.relative[s = a.type]);) if ((l = x.find[s]) && (i = l(a.matches[0].replace(be, xe), ge.test(o[0].type) && c(t.parentNode) || t))) {
                    if (o.splice(r, 1), !(e = i.length && u(o))) return G.apply(n, i), n;
                    break
                }
            }
            return (d || S(e, f))(i, t, !P, n, ge.test(e) && c(t.parentNode) || t), n
        }, b.sortStable = I.split("").sort(z).join("") === I, b.detectDuplicates = !!j, D(), b.sortDetached = r(function (e) {
            return 1 & e.compareDocumentPosition(A.createElement("div"))
        }), r(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), b.attributes && r(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), r(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(Z, function (e, t, n) {
            var i;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    Z.find = re, Z.expr = re.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = re.uniqueSort, Z.text = re.getText, Z.isXMLDoc = re.isXML, Z.contains = re.contains;
    var oe = Z.expr.match.needsContext, ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, se = /^.[^:#\[\.,]*$/;
    Z.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? Z.find.matchesSelector(i, e) ? [i] : [] : Z.find.matches(e, Z.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, Z.fn.extend({
        find: function (e) {
            var t, n = this.length, i = [], r = this;
            if ("string" != typeof e) return this.pushStack(Z(e).filter(function () {
                for (t = 0; n > t; t++) if (Z.contains(r[t], this)) return !0
            }));
            for (t = 0; n > t; t++) Z.find(e, r[t], i);
            return i = this.pushStack(n > 1 ? Z.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        }, filter: function (e) {
            return this.pushStack(i(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(i(this, e || [], !0))
        }, is: function (e) {
            return !!i(this, "string" == typeof e && oe.test(e) ? Z(e) : e || [], !1).length
        }
    });
    var ce, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (Z.fn.init = function (e, t) {
        var n, i;
        if (!e) return this;
        if ("string" == typeof e) {
            if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : le.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || ce).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), ae.test(n[1]) && Z.isPlainObject(t)) for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return i = J.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = J, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? void 0 !== ce.ready ? ce.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
    }).prototype = Z.fn, ce = Z(J);
    var ue = /^(?:parents|prev(?:Until|All))/, de = {children: !0, contents: !0, next: !0, prev: !0};
    Z.extend({
        dir: function (e, t, n) {
            for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                if (r && Z(e).is(n)) break;
                i.push(e)
            }
            return i
        }, sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), Z.fn.extend({
        has: function (e) {
            var t = Z(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; n > e; e++) if (Z.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            for (var n, i = 0, r = this.length, o = [], a = oe.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; r > i; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? Z.unique(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? U.call(Z(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Z.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return Z.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return Z.dir(e, "parentNode", n)
        }, next: function (e) {
            return r(e, "nextSibling")
        }, prev: function (e) {
            return r(e, "previousSibling")
        }, nextAll: function (e) {
            return Z.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return Z.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return Z.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return Z.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return Z.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return Z.sibling(e.firstChild)
        }, contents: function (e) {
            return e.contentDocument || Z.merge([], e.childNodes)
        }
    }, function (e, t) {
        Z.fn[e] = function (n, i) {
            var r = Z.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = Z.filter(i, r)), this.length > 1 && (de[e] || Z.unique(r), ue.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var fe = /\S+/g, pe = {};
    Z.Callbacks = function (e) {
        e = "string" == typeof e ? pe[e] || o(e) : Z.extend({}, e);
        var t, n, i, r, a, s, c = [], l = !e.once && [], u = function (o) {
            for (t = e.memory && o, n = !0, s = r || 0, r = 0, a = c.length, i = !0; c && a > s; s++) if (!1 === c[s].apply(o[0], o[1]) && e.stopOnFalse) {
                t = !1;
                break
            }
            i = !1, c && (l ? l.length && u(l.shift()) : t ? c = [] : d.disable())
        }, d = {
            add: function () {
                if (c) {
                    var n = c.length;
                    !function t(n) {
                        Z.each(n, function (n, i) {
                            var r = Z.type(i);
                            "function" === r ? e.unique && d.has(i) || c.push(i) : i && i.length && "string" !== r && t(i)
                        })
                    }(arguments), i ? a = c.length : t && (r = n, u(t))
                }
                return this
            }, remove: function () {
                return c && Z.each(arguments, function (e, t) {
                    for (var n; (n = Z.inArray(t, c, n)) > -1;) c.splice(n, 1), i && (a >= n && a--, s >= n && s--)
                }), this
            }, has: function (e) {
                return e ? Z.inArray(e, c) > -1 : !(!c || !c.length)
            }, empty: function () {
                return c = [], a = 0, this
            }, disable: function () {
                return c = l = t = void 0, this
            }, disabled: function () {
                return !c
            }, lock: function () {
                return l = void 0, t || d.disable(), this
            }, locked: function () {
                return !l
            }, fireWith: function (e, t) {
                return !c || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? l.push(t) : u(t)), this
            }, fire: function () {
                return d.fireWith(this, arguments), this
            }, fired: function () {
                return !!n
            }
        };
        return d
    }, Z.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", Z.Callbacks("once memory"), "resolved"], ["reject", "fail", Z.Callbacks("once memory"), "rejected"], ["notify", "progress", Z.Callbacks("memory")]],
                n = "pending", i = {
                    state: function () {
                        return n
                    }, always: function () {
                        return r.done(arguments).fail(arguments), this
                    }, then: function () {
                        var e = arguments;
                        return Z.Deferred(function (n) {
                            Z.each(t, function (t, o) {
                                var a = Z.isFunction(e[t]) && e[t];
                                r[o[1]](function () {
                                    var e = a && a.apply(this, arguments);
                                    e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? Z.extend(e, i) : i
                    }
                }, r = {};
            return i.pipe = i.then, Z.each(t, function (e, o) {
                var a = o[2], s = o[3];
                i[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function () {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = a.fireWith
            }), i.promise(r), e && e.call(r, r), r
        }, when: function (e) {
            var t, n, i, r = 0, o = R.call(arguments), a = o.length,
                s = 1 !== a || e && Z.isFunction(e.promise) ? a : 0, c = 1 === s ? e : Z.Deferred(),
                l = function (e, n, i) {
                    return function (r) {
                        n[e] = this, i[e] = arguments.length > 1 ? R.call(arguments) : r, i === t ? c.notifyWith(n, i) : --s || c.resolveWith(n, i)
                    }
                };
            if (a > 1) for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && Z.isFunction(o[r].promise) ? o[r].promise().done(l(r, i, o)).fail(c.reject).progress(l(r, n, t)) : --s;
            return s || c.resolveWith(i, o), c.promise()
        }
    });
    var he;
    Z.fn.ready = function (e) {
        return Z.ready.promise().done(e), this
    }, Z.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? Z.readyWait++ : Z.ready(!0)
        }, ready: function (e) {
            (!0 === e ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, !0 !== e && --Z.readyWait > 0 || (he.resolveWith(J, [Z]), Z.fn.triggerHandler && (Z(J).triggerHandler("ready"), Z(J).off("ready"))))
        }
    }), Z.ready.promise = function (t) {
        return he || (he = Z.Deferred(), "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))), he.promise(t)
    }, Z.ready.promise();
    var me = Z.access = function (e, t, n, i, r, o, a) {
        var s = 0, c = e.length, l = null == n;
        if ("object" === Z.type(n)) {
            r = !0;
            for (s in n) Z.access(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== i && (r = !0, Z.isFunction(i) || (a = !0), l && (a ? (t.call(e, i), t = null) : (l = t, t = function (e, t, n) {
                return l.call(Z(e), n)
            })), t)) for (; c > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return r ? e : l ? t.call(e) : c ? t(e[0], n) : o
    };
    Z.acceptData = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, s.uid = 1, s.accepts = Z.acceptData, s.prototype = {
        key: function (e) {
            if (!s.accepts(e)) return 0;
            var t = {}, n = e[this.expando];
            if (!n) {
                n = s.uid++;
                try {
                    t[this.expando] = {value: n}, Object.defineProperties(e, t)
                } catch (i) {
                    t[this.expando] = n, Z.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        }, set: function (e, t, n) {
            var i, r = this.key(e), o = this.cache[r];
            if ("string" == typeof t) o[t] = n; else if (Z.isEmptyObject(o)) Z.extend(this.cache[r], t); else for (i in t) o[i] = t[i];
            return o
        }, get: function (e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        }, access: function (e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, i, r, o = this.key(e), a = this.cache[o];
            if (void 0 === t) this.cache[o] = {}; else {
                Z.isArray(t) ? i = t.concat(t.map(Z.camelCase)) : (r = Z.camelCase(t), t in a ? i = [t, r] : (i = r, i = i in a ? [i] : i.match(fe) || [])), n = i.length;
                for (; n--;) delete a[i[n]]
            }
        }, hasData: function (e) {
            return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
        }, discard: function (e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ve = new s, ge = new s, ye = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, be = /([A-Z])/g;
    Z.extend({
        hasData: function (e) {
            return ge.hasData(e) || ve.hasData(e)
        }, data: function (e, t, n) {
            return ge.access(e, t, n)
        }, removeData: function (e, t) {
            ge.remove(e, t)
        }, _data: function (e, t, n) {
            return ve.access(e, t, n)
        }, _removeData: function (e, t) {
            ve.remove(e, t)
        }
    }), Z.fn.extend({
        data: function (e, t) {
            var n, i, r, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = ge.get(o), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = Z.camelCase(i.slice(5)), c(o, i, r[i])));
                    ve.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function () {
                ge.set(this, e)
            }) : me(this, function (t) {
                var n, i = Z.camelCase(e);
                if (o && void 0 === t) {
                    if (void 0 !== (n = ge.get(o, e))) return n;
                    if (void 0 !== (n = ge.get(o, i))) return n;
                    if (void 0 !== (n = c(o, i, void 0))) return n
                } else this.each(function () {
                    var n = ge.get(this, i);
                    ge.set(this, i, t), -1 !== e.indexOf("-") && void 0 !== n && ge.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                ge.remove(this, e)
            })
        }
    }), Z.extend({
        queue: function (e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = ve.get(e, t), n && (!i || Z.isArray(n) ? i = ve.access(e, t, Z.makeArray(n)) : i.push(n)), i || []) : void 0
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = Z.queue(e, t), i = n.length, r = n.shift(), o = Z._queueHooks(e, t), a = function () {
                Z.dequeue(e, t)
            };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return ve.get(e, n) || ve.access(e, n, {
                empty: Z.Callbacks("once memory").add(function () {
                    ve.remove(e, [t + "queue", n])
                })
            })
        }
    }), Z.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = Z.queue(this, e, t);
                Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                Z.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, i = 1, r = Z.Deferred(), o = this, a = this.length, s = function () {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (n = ve.get(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(t)
        }
    });
    var xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, we = ["Top", "Right", "Bottom", "Left"],
        Ce = function (e, t) {
            return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
        }, Te = /^(?:checkbox|radio)$/i;
    !function () {
        var e = J.createDocumentFragment(), t = e.appendChild(J.createElement("div")), n = J.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), G.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Se = "undefined";
    G.focusinBubbles = "onfocusin" in e;
    var Ne = /^key/, ke = /^(?:mouse|pointer|contextmenu)|click/, Ee = /^(?:focusinfocus|focusoutblur)$/,
        je = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function (e, t, n, i, r) {
            var o, a, s, c, l, u, d, f, p, h, m, v = ve.get(e);
            if (v) for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = Z.guid++), (c = v.events) || (c = v.events = {}), (a = v.handle) || (a = v.handle = function (t) {
                return typeof Z !== Se && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
            }), t = (t || "").match(fe) || [""], l = t.length; l--;) s = je.exec(t[l]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p && (d = Z.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, d = Z.event.special[p] || {}, u = Z.extend({
                type: p,
                origType: m,
                data: i,
                handler: n,
                guid: n.guid,
                selector: r,
                needsContext: r && Z.expr.match.needsContext.test(r),
                namespace: h.join(".")
            }, o), (f = c[p]) || (f = c[p] = [], f.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, h, a) || e.addEventListener && e.addEventListener(p, a, !1)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, u) : f.push(u), Z.event.global[p] = !0)
        },
        remove: function (e, t, n, i, r) {
            var o, a, s, c, l, u, d, f, p, h, m, v = ve.hasData(e) && ve.get(e);
            if (v && (c = v.events)) {
                for (t = (t || "").match(fe) || [""], l = t.length; l--;) if (s = je.exec(t[l]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                    for (d = Z.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, f = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) u = f[o], !r && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                    a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, v.handle) || Z.removeEvent(e, p, v.handle), delete c[p])
                } else for (p in c) Z.event.remove(e, p + t[l], n, i, !0);
                Z.isEmptyObject(c) && (delete v.handle, ve.remove(e, "events"))
            }
        },
        trigger: function (t, n, i, r) {
            var o, a, s, c, l, u, d, f = [i || J], p = Y.call(t, "type") ? t.type : t,
                h = Y.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = i = i || J, 3 !== i.nodeType && 8 !== i.nodeType && !Ee.test(p + Z.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), l = p.indexOf(":") < 0 && "on" + p, t = t[Z.expando] ? t : new Z.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : Z.makeArray(n, [t]), d = Z.event.special[p] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!r && !d.noBubble && !Z.isWindow(i)) {
                    for (c = d.delegateType || p, Ee.test(c + p) || (a = a.parentNode); a; a = a.parentNode) f.push(a), s = a;
                    s === (i.ownerDocument || J) && f.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0; (a = f[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? c : d.bindType || p, u = (ve.get(a, "events") || {})[t.type] && ve.get(a, "handle"), u && u.apply(a, n), (u = l && a[l]) && u.apply && Z.acceptData(a) && (t.result = u.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = p, r || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), n) || !Z.acceptData(i) || l && Z.isFunction(i[p]) && !Z.isWindow(i) && (s = i[l], s && (i[l] = null), Z.event.triggered = p, i[p](), Z.event.triggered = void 0, s && (i[l] = s)), t.result
            }
        },
        dispatch: function (e) {
            e = Z.event.fix(e);
            var t, n, i, r, o, a = [], s = R.call(arguments), c = (ve.get(this, "events") || {})[e.type] || [],
                l = Z.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                for (a = Z.event.handlers.call(this, e, c), t = 0; (r = a[t++]) && !e.isPropagationStopped();) for (e.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();) (!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, void 0 !== (i = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, i, r, o, a = [], s = t.delegateCount, c = e.target;
            if (s && c.nodeType && (!e.button || "click" !== e.type)) for (; c !== this; c = c.parentNode || this) if (!0 !== c.disabled || "click" !== e.type) {
                for (i = [], n = 0; s > n; n++) o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? Z(r, this).index(c) >= 0 : Z.find(r, this, null, [c]).length), i[r] && i.push(o);
                i.length && a.push({elem: c, handlers: i})
            }
            return s < t.length && a.push({elem: this, handlers: t.slice(s)}), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, i, r, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J, i = n.documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[Z.expando]) return e;
            var t, n, i, r = e.type, o = e, a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = ke.test(r) ? this.mouseHooks : Ne.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new Z.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
            return e.target || (e.target = J), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    return this !== d() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === d() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                }, _default: function (e) {
                    return Z.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, i) {
            var r = Z.extend(new Z.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            i ? Z.event.trigger(r, null, t) : Z.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, Z.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, Z.Event = function (e, t) {
        return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? l : u) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
    },
        Z.Event.prototype = {
            isDefaultPrevented: u,
            isPropagationStopped: u,
            isImmediatePropagationStopped: u,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = l, e && e.preventDefault && e.preventDefault()
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = l, e && e.stopPropagation && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = l, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        Z.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, i = this, r = e.relatedTarget, o = e.handleObj;
                return (!r || r !== i && !Z.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), G.focusinBubbles || Z.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            Z.event.simulate(t, e.target, Z.event.fix(e), !0)
        };
        Z.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this, r = ve.access(i, t);
                r || i.addEventListener(e, n, !0), ve.access(i, t, (r || 0) + 1)
            }, teardown: function () {
                var i = this.ownerDocument || this, r = ve.access(i, t) - 1;
                r ? ve.access(i, t, r) : (i.removeEventListener(e, n, !0), ve.remove(i, t))
            }
        }
    }), Z.fn.extend({
        on: function (e, t, n, i, r) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (a in e) this.on(a, t, n, e[a], r);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), !1 === i) i = u; else if (!i) return this;
            return 1 === r && (o = i, i = function (e) {
                return Z().off(e), o.apply(this, arguments)
            }, i.guid = o.guid || (o.guid = Z.guid++)), this.each(function () {
                Z.event.add(this, e, i, n, t)
            })
        }, one: function (e, t, n, i) {
            return this.on(e, t, n, i, 1)
        }, off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, Z(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = u), this.each(function () {
                Z.event.remove(this, e, n, t)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                Z.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            return n ? Z.event.trigger(e, t, n, !0) : void 0
        }
    });
    var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Ae = /<([\w:]+)/,
        Me = /<|&#?\w+;/, Pe = /<(?:script|style|link)/i, Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^$|\/(?:java|ecma)script/i, Le = /^true\/(.*)/, _e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ie = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ie.optgroup = Ie.option, Ie.tbody = Ie.tfoot = Ie.colgroup = Ie.caption = Ie.thead, Ie.th = Ie.td, Z.extend({
        clone: function (e, t, n) {
            var i, r, o, a, s = e.cloneNode(!0), c = Z.contains(e.ownerDocument, e);
            if (!(G.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e))) for (a = g(s), o = g(e), i = 0, r = o.length; r > i; i++) y(o[i], a[i]);
            if (t) if (n) for (o = o || g(e), a = a || g(s), i = 0, r = o.length; r > i; i++) v(o[i], a[i]); else v(e, s);
            return a = g(s, "script"), a.length > 0 && m(a, !c && g(e, "script")), s
        }, buildFragment: function (e, t, n, i) {
            for (var r, o, a, s, c, l, u = t.createDocumentFragment(), d = [], f = 0, p = e.length; p > f; f++) if ((r = e[f]) || 0 === r) if ("object" === Z.type(r)) Z.merge(d, r.nodeType ? [r] : r); else if (Me.test(r)) {
                for (o = o || u.appendChild(t.createElement("div")), a = (Ae.exec(r) || ["", ""])[1].toLowerCase(), s = Ie[a] || Ie._default, o.innerHTML = s[1] + r.replace(De, "<$1></$2>") + s[2], l = s[0]; l--;) o = o.lastChild;
                Z.merge(d, o.childNodes), o = u.firstChild, o.textContent = ""
            } else d.push(t.createTextNode(r));
            for (u.textContent = "", f = 0; r = d[f++];) if ((!i || -1 === Z.inArray(r, i)) && (c = Z.contains(r.ownerDocument, r), o = g(u.appendChild(r), "script"), c && m(o), n)) for (l = 0; r = o[l++];) qe.test(r.type || "") && n.push(r);
            return u
        }, cleanData: function (e) {
            for (var t, n, i, r, o = Z.event.special, a = 0; void 0 !== (n = e[a]); a++) {
                if (Z.acceptData(n) && (r = n[ve.expando]) && (t = ve.cache[r])) {
                    if (t.events) for (i in t.events) o[i] ? Z.event.remove(n, i) : Z.removeEvent(n, i, t.handle);
                    ve.cache[r] && delete ve.cache[r]
                }
                delete ge.cache[n[ge.expando]]
            }
        }
    }), Z.fn.extend({
        text: function (e) {
            return me(this, function (e) {
                return void 0 === e ? Z.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    f(this, e).appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = f(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function (e, t) {
            for (var n, i = e ? Z.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || Z.cleanData(g(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && m(g(n, "script")), n.parentNode.removeChild(n));
            return this
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(g(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return Z.clone(this, e, t)
            })
        }, html: function (e) {
            return me(this, function (e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Pe.test(e) && !Ie[(Ae.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(De, "<$1></$2>");
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode, Z.cleanData(g(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, t) {
            e = z.apply([], e);
            var n, i, r, o, a, s, c = 0, l = this.length, u = this, d = l - 1, f = e[0], m = Z.isFunction(f);
            if (m || l > 1 && "string" == typeof f && !G.checkClone && Oe.test(f)) return this.each(function (n) {
                var i = u.eq(n);
                m && (e[0] = f.call(this, n, i.html())), i.domManip(e, t)
            });
            if (l && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                for (r = Z.map(g(n, "script"), p), o = r.length; l > c; c++) a = n, c !== d && (a = Z.clone(a, !0, !0), o && Z.merge(r, g(a, "script"))), t.call(this[c], a, c);
                if (o) for (s = r[r.length - 1].ownerDocument, Z.map(r, h), c = 0; o > c; c++) a = r[c], qe.test(a.type || "") && !ve.access(a, "globalEval") && Z.contains(s, a) && (a.src ? Z._evalUrl && Z._evalUrl(a.src) : Z.globalEval(a.textContent.replace(_e, "")))
            }
            return this
        }
    }), Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        Z.fn[e] = function (e) {
            for (var n, i = [], r = Z(e), o = r.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), Z(r[a])[t](n), X.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var He, $e = {}, Fe = /^margin/, We = new RegExp("^(" + xe + ")(?!px)[a-z%]+$", "i"), Be = function (t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
    };
    !function () {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", r.appendChild(o);
            var t = e.getComputedStyle(a, null);
            n = "1%" !== t.top, i = "4px" === t.width, r.removeChild(o)
        }

        var n, i, r = J.documentElement, o = J.createElement("div"), a = J.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(a), e.getComputedStyle && Z.extend(G, {
            pixelPosition: function () {
                return t(), n
            }, boxSizingReliable: function () {
                return null == i && t(), i
            }, reliableMarginRight: function () {
                var t, n = a.appendChild(J.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", r.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), r.removeChild(o), a.removeChild(n), t
            }
        }))
    }(), Z.swap = function (e, t, n, i) {
        var r, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        r = n.apply(e, i || []);
        for (o in t) e.style[o] = a[o];
        return r
    };
    var Re = /^(none|table(?!-c[ea]).+)/, ze = new RegExp("^(" + xe + ")(.*)$", "i"),
        Xe = new RegExp("^([+-])=(" + xe + ")", "i"),
        Ue = {position: "absolute", visibility: "hidden", display: "block"},
        Qe = {letterSpacing: "0", fontWeight: "400"}, Ve = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = w(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {float: "cssFloat"},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = Z.camelCase(t), c = e.style;
                return t = Z.cssProps[s] || (Z.cssProps[s] = T(c, s)), a = Z.cssHooks[t] || Z.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : c[t] : (o = typeof n, "string" === o && (r = Xe.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(Z.css(e, t)), o = "number"), void(null != n && n === n && ("number" !== o || Z.cssNumber[s] || (n += "px"), G.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (c[t] = n))))
            }
        },
        css: function (e, t, n, i) {
            var r, o, a, s = Z.camelCase(t);
            return t = Z.cssProps[s] || (Z.cssProps[s] = T(e.style, s)), a = Z.cssHooks[t] || Z.cssHooks[s], a && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = w(e, t, i)), "normal" === r && t in Qe && (r = Qe[t]), "" === n || n ? (o = parseFloat(r), !0 === n || Z.isNumeric(o) ? o || 0 : r) : r
        }
    }), Z.each(["height", "width"], function (e, t) {
        Z.cssHooks[t] = {
            get: function (e, n, i) {
                return n ? Re.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ue, function () {
                    return k(e, t, i)
                }) : k(e, t, i) : void 0
            }, set: function (e, n, i) {
                var r = i && Be(e);
                return S(e, n, i ? N(e, t, i, "border-box" === Z.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), Z.cssHooks.marginRight = C(G.reliableMarginRight, function (e, t) {
        return t ? Z.swap(e, {display: "inline-block"}, w, [e, "marginRight"]) : void 0
    }), Z.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        Z.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + we[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, Fe.test(e) || (Z.cssHooks[e + t].set = S)
    }), Z.fn.extend({
        css: function (e, t) {
            return me(this, function (e, t, n) {
                var i, r, o = {}, a = 0;
                if (Z.isArray(t)) {
                    for (i = Be(e), r = t.length; r > a; a++) o[t[a]] = Z.css(e, t[a], !1, i);
                    return o
                }
                return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
            }, e, t, arguments.length > 1)
        }, show: function () {
            return E(this, !0)
        }, hide: function () {
            return E(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Ce(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }), Z.Tween = j, j.prototype = {
        constructor: j, init: function (e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (Z.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = j.propHooks[this.prop];
            return e && e.get ? e.get(this) : j.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = j.propHooks[this.prop];
            return this.options.duration ? this.pos = t = Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
        }
    }, j.prototype.init.prototype = j.prototype, j.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            }, set: function (e) {
                Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Z.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, Z.fx = j.prototype.init, Z.fx.step = {};
    var Ye, Ge, Je = /^(?:toggle|show|hide)$/, Ke = new RegExp("^(?:([+-])=|)(" + xe + ")([a-z%]*)$", "i"),
        Ze = /queueHooks$/, et = [P], tt = {
            "*": [function (e, t) {
                var n = this.createTween(e, t), i = n.cur(), r = Ke.exec(t), o = r && r[3] || (Z.cssNumber[e] ? "" : "px"),
                    a = (Z.cssNumber[e] || "px" !== o && +i) && Ke.exec(Z.css(n.elem, e)), s = 1, c = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], r = r || [], a = +i || 1;
                    do {
                        s = s || ".5", a /= s, Z.style(n.elem, e, a + o)
                    } while (s !== (s = n.cur() / i) && 1 !== s && --c)
                }
                return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
            }]
        };
    Z.Animation = Z.extend(q, {
        tweener: function (e, t) {
            Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, r = e.length; r > i; i++) n = e[i], tt[n] = tt[n] || [], tt[n].unshift(t)
        }, prefilter: function (e, t) {
            t ? et.unshift(e) : et.push(e)
        }
    }), Z.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? Z.extend({}, e) : {
            complete: n || !n && t || Z.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !Z.isFunction(t) && t
        };
        return i.duration = Z.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in Z.fx.speeds ? Z.fx.speeds[i.duration] : Z.fx.speeds._default, (null == i.queue || !0 === i.queue) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            Z.isFunction(i.old) && i.old.call(this), i.queue && Z.dequeue(this, i.queue)
        }, i
    }, Z.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(Ce).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
        }, animate: function (e, t, n, i) {
            var r = Z.isEmptyObject(e), o = Z.speed(t, n, i), a = function () {
                var t = q(this, Z.extend({}, e), o);
                (r || ve.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0, r = null != e && e + "queueHooks", o = Z.timers, a = ve.get(this);
                if (r) a[r] && a[r].stop && i(a[r]); else for (r in a) a[r] && a[r].stop && Ze.test(r) && i(a[r]);
                for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                (t || !n) && Z.dequeue(this, e)
            })
        }, finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, n = ve.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = Z.timers,
                    a = i ? i.length : 0;
                for (n.finish = !0, Z.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), Z.each(["toggle", "show", "hide"], function (e, t) {
        var n = Z.fn[t];
        Z.fn[t] = function (e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(A(t, !0), e, i, r)
        }
    }), Z.each({
        slideDown: A("show"),
        slideUp: A("hide"),
        slideToggle: A("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        Z.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), Z.timers = [], Z.fx.tick = function () {
        var e, t = 0, n = Z.timers;
        for (Ye = Z.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || Z.fx.stop(), Ye = void 0
    }, Z.fx.timer = function (e) {
        Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
    }, Z.fx.interval = 13, Z.fx.start = function () {
        Ge || (Ge = setInterval(Z.fx.tick, Z.fx.interval))
    }, Z.fx.stop = function () {
        clearInterval(Ge), Ge = null
    }, Z.fx.speeds = {slow: 600, fast: 200, _default: 400}, Z.fn.delay = function (e, t) {
        return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
            var i = setTimeout(t, e);
            n.stop = function () {
                clearTimeout(i)
            }
        })
    }, function () {
        var e = J.createElement("input"), t = J.createElement("select"), n = t.appendChild(J.createElement("option"));
        e.type = "checkbox", G.checkOn = "" !== e.value, G.optSelected = n.selected, t.disabled = !0, G.optDisabled = !n.disabled, e = J.createElement("input"), e.value = "t", e.type = "radio", G.radioValue = "t" === e.value
    }();
    var nt, it = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function (e, t) {
            return me(this, Z.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                Z.removeAttr(this, e)
            })
        }
    }), Z.extend({
        attr: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Se ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(), i = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? nt : void 0)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = Z.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t))
        }, removeAttr: function (e, t) {
            var n, i, r = 0, o = t && t.match(fe);
            if (o && 1 === e.nodeType) for (; n = o[r++];) i = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!G.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), nt = {
        set: function (e, t, n) {
            return !1 === t ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = it[t] || Z.find.attr;
        it[t] = function (e, t, i) {
            var r, o;
            return i || (o = it[t], it[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, it[t] = o), r
        }
    });
    var rt = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function (e, t) {
            return me(this, Z.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[Z.propFix[e] || e]
            })
        }
    }), Z.extend({
        propFix: {for: "htmlFor", class: "className"}, prop: function (e, t, n) {
            var i, r, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !Z.isXMLDoc(e), o && (t = Z.propFix[t] || t, r = Z.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    return e.hasAttribute("tabindex") || rt.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), G.optSelected || (Z.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        Z.propFix[this.toLowerCase()] = this
    });
    var ot = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function (e) {
            var t, n, i, r, o, a, s = "string" == typeof e && e, c = 0, l = this.length;
            if (Z.isFunction(e)) return this.each(function (t) {
                Z(this).addClass(e.call(this, t, this.className))
            });
            if (s) for (t = (e || "").match(fe) || []; l > c; c++) if (n = this[c], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ot, " ") : " ")) {
                for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                a = Z.trim(i), n.className !== a && (n.className = a)
            }
            return this
        }, removeClass: function (e) {
            var t, n, i, r, o, a, s = 0 === arguments.length || "string" == typeof e && e, c = 0, l = this.length;
            if (Z.isFunction(e)) return this.each(function (t) {
                Z(this).removeClass(e.call(this, t, this.className))
            });
            if (s) for (t = (e || "").match(fe) || []; l > c; c++) if (n = this[c], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ot, " ") : "")) {
                for (o = 0; r = t[o++];) for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                a = e ? Z.trim(i) : "", n.className !== a && (n.className = a)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ? function (n) {
                Z(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function () {
                if ("string" === n) for (var t, i = 0, r = Z(this), o = e.match(fe) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t); else (n === Se || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : ve.get(this, "__className__") || "")
            })
        }, hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ot, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var at = /\r/g;
    Z.fn.extend({
        val: function (e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = Z.isFunction(e), this.each(function (n) {
                var r;
                1 === this.nodeType && (r = i ? e.call(this, n, Z(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : Z.isArray(r) && (r = Z.map(r, function (e) {
                    return null == e ? "" : e + ""
                })), (t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = Z.valHooks[r.type] || Z.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(at, "") : null == n ? "" : n)) : void 0
        }
    }), Z.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = Z.find.attr(e, "value");
                    return null != t ? t : Z.trim(Z.text(e))
                }
            }, select: {
                get: function (e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, c = 0 > r ? s : o ? r : 0; s > c; c++) if (n = i[c], !(!n.selected && c !== r || (G.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                        if (t = Z(n).val(), o) return t;
                        a.push(t)
                    }
                    return a
                }, set: function (e, t) {
                    for (var n, i, r = e.options, o = Z.makeArray(t), a = r.length; a--;) i = r[a], (i.selected = Z.inArray(i.value, o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), Z.each(["radio", "checkbox"], function () {
        Z.valHooks[this] = {
            set: function (e, t) {
                return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
            }
        }, G.checkOn || (Z.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        Z.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Z.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var st = Z.now(), ct = /\?/;
    Z.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, Z.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
    };
    var lt = /#.*$/, ut = /([?&])_=[^&]*/, dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, pt = /^(?:GET|HEAD)$/, ht = /^\/\//,
        mt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, vt = {}, gt = {}, yt = "*/".concat("*"),
        bt = e.location.href, xt = mt.exec(bt.toLowerCase()) || [];
    Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: bt,
            type: "GET",
            isLocal: ft.test(xt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": yt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": Z.parseJSON, "text xml": Z.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? I(I(e, Z.ajaxSettings), t) : I(Z.ajaxSettings, e)
        },
        ajaxPrefilter: L(vt),
        ajaxTransport: L(gt),
        ajax: function (e, t) {
            function n(e, t, n, a) {
                var c, u, g, y, x, C = t;
                2 !== b && (b = 2, s && clearTimeout(s), i = void 0, o = a || "", w.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, n && (y = H(d, w, n)), y = $(d, y, w, c), c ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (Z.lastModified[r] = x), (x = w.getResponseHeader("etag")) && (Z.etag[r] = x)), 204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = y.state, u = y.data, g = y.error, c = !g)) : (g = C, (e || !C) && (C = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || C) + "", c ? h.resolveWith(f, [u, C, w]) : h.rejectWith(f, [w, C, g]), w.statusCode(v), v = void 0, l && p.trigger(c ? "ajaxSuccess" : "ajaxError", [w, d, c ? u : g]), m.fireWith(f, [w, C]), l && (p.trigger("ajaxComplete", [w, d]), --Z.active || Z.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, r, o, a, s, c, l, u, d = Z.ajaxSetup({}, t), f = d.context || d,
                p = d.context && (f.nodeType || f.jquery) ? Z(f) : Z.event, h = Z.Deferred(),
                m = Z.Callbacks("once memory"), v = d.statusCode || {}, g = {}, y = {}, b = 0, x = "canceled", w = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (2 === b) {
                            if (!a) for (a = {}; t = dt.exec(o);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return 2 === b ? o : null
                    }, setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, g[e] = t), this
                    }, overrideMimeType: function (e) {
                        return b || (d.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (2 > b) for (t in e) v[t] = [v[t], e[t]]; else w.always(e[w.status]);
                        return this
                    }, abort: function (e) {
                        var t = e || x;
                        return i && i.abort(t), n(0, t), this
                    }
                };
            if (h.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || bt) + "").replace(lt, "").replace(ht, xt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = Z.trim(d.dataType || "*").toLowerCase().match(fe) || [""], null == d.crossDomain && (c = mt.exec(d.url.toLowerCase()), d.crossDomain = !(!c || c[1] === xt[1] && c[2] === xt[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (xt[3] || ("http:" === xt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = Z.param(d.data, d.traditional)), _(vt, d, t, w), 2 === b) return w;
            l = Z.event && d.global, l && 0 == Z.active++ && Z.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !pt.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (ct.test(r) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = ut.test(r) ? r.replace(ut, "$1_=" + st++) : r + (ct.test(r) ? "&" : "?") + "_=" + st++)), d.ifModified && (Z.lastModified[r] && w.setRequestHeader("If-Modified-Since", Z.lastModified[r]), Z.etag[r] && w.setRequestHeader("If-None-Match", Z.etag[r])), (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + yt + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) w.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (!1 === d.beforeSend.call(f, w, d) || 2 === b)) return w.abort();
            x = "abort";
            for (u in{success: 1, error: 1, complete: 1}) w[u](d[u]);
            if (i = _(gt, d, t, w)) {
                w.readyState = 1, l && p.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function () {
                    w.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, i.send(g, n)
                } catch (e) {
                    if (!(2 > b)) throw e;
                    n(-1, e)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function (e, t, n) {
            return Z.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return Z.get(e, void 0, t, "script")
        }
    }), Z.each(["get", "post"], function (e, t) {
        Z[t] = function (e, n, i, r) {
            return Z.isFunction(n) && (r = r || i, i = n, n = void 0), Z.ajax({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            })
        }
    }), Z._evalUrl = function (e) {
        return Z.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
    }, Z.fn.extend({
        wrapAll: function (e) {
            var t;
            return Z.isFunction(e) ? this.each(function (t) {
                Z(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        }, wrapInner: function (e) {
            return this.each(Z.isFunction(e) ? function (t) {
                Z(this).wrapInner(e.call(this, t))
            } : function () {
                var t = Z(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = Z.isFunction(e);
            return this.each(function (n) {
                Z(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Z.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, Z.expr.filters.visible = function (e) {
        return !Z.expr.filters.hidden(e)
    };
    var wt = /%20/g, Ct = /\[\]$/, Tt = /\r?\n/g, St = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;
    Z.param = function (e, t) {
        var n, i = [], r = function (e, t) {
            t = Z.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function () {
            r(this.name, this.value)
        }); else for (n in e) F(n, e[n], t, r);
        return i.join("&").replace(wt, "+")
    }, Z.fn.extend({
        serialize: function () {
            return Z.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = Z.prop(this, "elements");
                return e ? Z.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !Z(this).is(":disabled") && Nt.test(this.nodeName) && !St.test(e) && (this.checked || !Te.test(e))
            }).map(function (e, t) {
                var n = Z(this).val();
                return null == n ? null : Z.isArray(n) ? Z.map(n, function (e) {
                    return {name: t.name, value: e.replace(Tt, "\r\n")}
                }) : {name: t.name, value: n.replace(Tt, "\r\n")}
            }).get()
        }
    }), Z.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (e) {
        }
    };
    var kt = 0, Et = {}, jt = {0: 200, 1223: 204}, Dt = Z.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function () {
        for (var e in Et) Et[e]()
    }), G.cors = !!Dt && "withCredentials" in Dt, G.ajax = Dt = !!Dt, Z.ajaxTransport(function (e) {
        var t;
        return G.cors || Dt && !e.crossDomain ? {
            send: function (n, i) {
                var r, o = e.xhr(), a = ++kt;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (r in e.xhrFields) o[r] = e.xhrFields[r];
                e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (r in n) o.setRequestHeader(r, n[r]);
                t = function (e) {
                    return function () {
                        t && (delete Et[a], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? i(o.status, o.statusText) : i(jt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {text: o.responseText} : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = t(), o.onerror = t("error"), t = Et[a] = t("abort");
                try {
                    o.send(e.hasContent && e.data || null)
                } catch (e) {
                    if (t) throw e
                }
            }, abort: function () {
                t && t()
            }
        } : void 0
    }), Z.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return Z.globalEval(e), e
            }
        }
    }), Z.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Z.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (i, r) {
                    t = Z("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), J.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        }
    });
    var At = [], Mt = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = At.pop() || Z.expando + "_" + st++;
            return this[e] = !0, e
        }
    }), Z.ajaxPrefilter("json jsonp", function (t, n, i) {
        var r, o, a,
            s = !1 !== t.jsonp && (Mt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Mt.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Mt, "$1" + r) : !1 !== t.jsonp && (t.url += (ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
            return a || Z.error(r + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
            a = arguments
        }, i.always(function () {
            e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, At.push(r)), a && Z.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), Z.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || J;
        var i = ae.exec(e), r = !n && [];
        return i ? [t.createElement(i[1])] : (i = Z.buildFragment([e], t, r), r && r.length && Z(r).remove(), Z.merge([], i.childNodes))
    };
    var Pt = Z.fn.load;
    Z.fn.load = function (e, t, n) {
        if ("string" != typeof e && Pt) return Pt.apply(this, arguments);
        var i, r, o, a = this, s = e.indexOf(" ");
        return s >= 0 && (i = Z.trim(e.slice(s)), e = e.slice(0, s)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && Z.ajax({
            url: e,
            type: r,
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(i ? Z("<div>").append(Z.parseHTML(e)).find(i) : e)
        }).complete(n && function (e, t) {
            a.each(n, o || [e.responseText, t, e])
        }), this
    }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        Z.fn[t] = function (e) {
            return this.on(t, e)
        }
    }),
        Z.expr.filters.animated = function (e) {
            return Z.grep(Z.timers, function (t) {
                return e === t.elem
            }).length
        };
    var Ot = e.document.documentElement;
    Z.offset = {
        setOffset: function (e, t, n) {
            var i, r, o, a, s, c, l, u = Z.css(e, "position"), d = Z(e), f = {};
            "static" === u && (e.style.position = "relative"), s = d.offset(), o = Z.css(e, "top"), c = Z.css(e, "left"), l = ("absolute" === u || "fixed" === u) && (o + c).indexOf("auto") > -1, l ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(c) || 0), Z.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, Z.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                Z.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0], r = {top: 0, left: 0}, o = i && i.ownerDocument;
            return o ? (t = o.documentElement, Z.contains(t, i) ? (typeof i.getBoundingClientRect !== Se && (r = i.getBoundingClientRect()), n = W(o), {
                top: r.top + n.pageYOffset - t.clientTop,
                left: r.left + n.pageXOffset - t.clientLeft
            }) : r) : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n = this[0], i = {top: 0, left: 0};
                return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (i = e.offset()), i.top += Z.css(e[0], "borderTopWidth", !0), i.left += Z.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - Z.css(n, "marginTop", !0),
                    left: t.left - i.left - Z.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || Ot; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
                return e || Ot
            })
        }
    }), Z.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, n) {
        var i = "pageYOffset" === n;
        Z.fn[t] = function (r) {
            return me(this, function (t, r, o) {
                var a = W(t);
                return void 0 === o ? a ? a[n] : t[r] : void(a ? a.scrollTo(i ? e.pageXOffset : o, i ? o : e.pageYOffset) : t[r] = o)
            }, t, r, arguments.length, null)
        }
    }), Z.each(["top", "left"], function (e, t) {
        Z.cssHooks[t] = C(G.pixelPosition, function (e, n) {
            return n ? (n = w(e, t), We.test(n) ? Z(e).position()[t] + "px" : n) : void 0
        })
    }), Z.each({Height: "height", Width: "width"}, function (e, t) {
        Z.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
            Z.fn[i] = function (i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    a = n || (!0 === i || !0 === r ? "margin" : "border");
                return me(this, function (t, n, i) {
                    var r;
                    return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? Z.css(t, n, a) : Z.style(t, n, i, a)
                }, t, o ? i : void 0, o, null)
            }
        })
    }), Z.fn.size = function () {
        return this.length
    }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return Z
    });
    var qt = e.jQuery, Lt = e.$;
    return Z.noConflict = function (t) {
        return e.$ === Z && (e.$ = Lt), t && e.jQuery === Z && (e.jQuery = qt), Z
    }, typeof t === Se && (e.jQuery = e.$ = Z), Z
}), define("jquery-2.1.4.min", function () {
}), function (e) {
    e.fn.JiSlider = function (t) {
        var n = this, i = (new Date).getTime(), r = function (e, t, i, r, o, a, s) {
            this.slider = n, this.slides = e, this.width = this.slider.width(), this.ul = this.slider.find("ul"), this.index = t, this.auto = i, this.time = r, this.stay = o, this.easing = a, this.reverse = s ? -1 : 1, this.play = setInterval(this.autoroll.bind(this), this.stay)
        };
        r.prototype = {
            init: function (t) {
                e.extend(this, t)
            }, roll: function (e) {
                var t = -this.index * this.width;
                o.css({
                    "-webkit-transform": "translateX(" + t + "px)",
                    "-webkit-transition": "-webkit-transform " + e / 1e3 + "s " + this.easing,
                    "-ms-transform": "translateX(" + t + "px)",
                    "-ms-transition": "-ms-transform " + e / 1e3 + "s " + this.easing,
                    transform: "translateX(" + t + "px)",
                    transition: "transform " + e / 1e3 + "s " + this.easing
                }), this.check(), this.controller && (this.controller.find(".jislider__button[data-index=" + this.index + "]").addClass("jislider__on").css("background-color", s.color), this.controller.find(".jislider__button[data-index!=" + this.index + "]").removeClass("jislider__on").css("background-color", "transparent"))
            }, autoroll: function () {
                this.auto && (this.index += this.reverse), this.roll(this.time)
            }, check: function () {
                var e = this;
                this.index > this.slides ? (this.index = 1, setTimeout(function () {
                    e.roll(0)
                }, this.time)) : this.index < 1 && (this.index = l, setTimeout(function () {
                    e.roll(0)
                }, this.time))
            }, control: function (e) {
                this.timeCheck() && (this.index = e, this.reset(), this.roll(this.time))
            }, timeCheck: function () {
                var e = (new Date).getTime();
                return e - i > this.time && (i = e, !0)
            }, reset: function () {
                clearInterval(this.play), this.play = setInterval(this.autoroll.bind(this), this.stay)
            }, resize: function (e) {
                this.width = e, this.reset(), this.roll(0)
            }
        };
        var o = this.find("ul"), a = this.find("ul li"), s = e.extend({
            auto: !0,
            start: 1,
            time: 600,
            stay: 3e3,
            controller: !0,
            easing: "ease",
            color: "#fff",
            reverse: !1
        }, t), c = this.width(), l = this.find("ul li").length;
        if (s.start > l) throw"Start value is bigger than number of slides";
        var u = a.first().clone(), d = a.last().clone();
        o.prepend(d), o.append(u), this.css({
            position: "relative",
            overflow: "hidden"
        }), o.css({
            width: 100 * (l + 2) + "%",
            "-webkit-transform": "translateX(" + -s.start * c + "px)",
            "-ms-transform": "translateX(" + -s.start * c + "px)",
            transform: "translateX(" + -s.start * c + "px)"
        }), a = this.find("ul li");
        var f = this.find("ul li img");
        a.css({width: 100 / (l + 2) + "%"}), f.each(function () {
            var t = e("<div>", {class: "jislider__img"}).css({backgroundImage: "url(" + e(this).attr("src") + ")"});
            e(this).after(t), e(this).remove()
        });
        var p = new r(l, s.start, s.auto, s.time, s.stay, s.easing, s.reverse);
        if (s.controller) {
            for (var h = e("<div>", {class: "jislider__left-arrow"}).click(function () {
                p.control(--p.index)
            }), m = e("<div>", {class: "jislider__left-arrow__top"}).css({backgroundColor: s.color}), v = e("<div>", {class: "jislider__left-arrow__bottom"}).css({backgroundColor: s.color}), g = e("<div>", {class: "jislider__right-arrow"}).click(function () {
                p.control(++p.index)
            }), y = e("<div>", {class: "jislider__right-arrow__top"}).css({backgroundColor: s.color}), b = e("<div>", {class: "jislider__right-arrow__bottom"}).css({backgroundColor: s.color}), x = e("<div>", {class: "jislider__controller"}).css({width: 20 * l}), w = new Array, C = 0; C < l; C++) w[C] = e("<div>", {
                class: "jislider__button",
                "data-index": C + 1
            }).css({border: "1px solid " + s.color}).click(function () {
                var t = e(this).data("index");
                p.control(t)
            });
            this.append(h, g, x), h.append(m, v), g.append(y, b), x.append(w), p.init({controller: x})
        }
        return p.roll(0), e(window).resize(function () {
            c = n.width(), p.resize(c)
        }), this
    }
}(jQuery), define("JiSlider", function () {
}), function (e) {
    e.flexslider = function (t, n) {
        var i = e(t), r = e.extend({}, e.flexslider.defaults, n), o = r.namespace,
            a = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
            s = a ? "touchend" : "click", c = "vertical" === r.direction, l = r.reverse, u = r.itemWidth > 0,
            d = "fade" === r.animation, f = "" !== r.asNavFor, p = {};
        e.data(t, "flexslider", i), p = {
            init: function () {
                i.animating = !1, i.currentSlide = r.startAt, i.animatingTo = i.currentSlide, i.atEnd = 0 === i.currentSlide || i.currentSlide === i.last, i.containerSelector = r.selector.substr(0, r.selector.search(" ")), i.slides = e(r.selector, i), i.container = e(i.containerSelector, i), i.count = i.slides.length, i.syncExists = e(r.sync).length > 0, "slide" === r.animation && (r.animation = "swing"), i.prop = c ? "top" : "marginLeft", i.args = {}, i.manualPause = !1, i.transitions = !r.video && !d && r.useCSS && function () {
                    var e = document.createElement("div"),
                        t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var n in t) if (void 0 !== e.style[t[n]]) return i.pfx = t[n].replace("Perspective", "").toLowerCase(), i.prop = "-" + i.pfx + "-transform", !0;
                    return !1
                }(), "" !== r.controlsContainer && (i.controlsContainer = e(r.controlsContainer).length > 0 && e(r.controlsContainer)), "" !== r.manualControls && (i.manualControls = e(r.manualControls).length > 0 && e(r.manualControls)), r.randomize && (i.slides.sort(function () {
                    return Math.round(Math.random()) - .5
                }), i.container.empty().append(i.slides)), i.doMath(), f && p.asNav.setup(), i.setup("init"), r.controlNav && p.controlNav.setup(), r.directionNav && p.directionNav.setup(), r.keyboard && (1 === e(i.containerSelector).length || r.multipleKeyboard) && e(document).bind("keyup", function (e) {
                    var t = e.keyCode;
                    if (!i.animating && (39 === t || 37 === t)) {
                        var n = 39 === t ? i.getTarget("next") : 37 === t && i.getTarget("prev");
                        i.flexAnimate(n, r.pauseOnAction)
                    }
                }), r.mousewheel && i.bind("mousewheel", function (e, t, n, o) {
                    e.preventDefault();
                    var a = t < 0 ? i.getTarget("next") : i.getTarget("prev");
                    i.flexAnimate(a, r.pauseOnAction)
                }), r.pausePlay && p.pausePlay.setup(), r.slideshow && (r.pauseOnHover && i.hover(function () {
                    i.manualPlay || i.manualPause || i.pause()
                }, function () {
                    i.manualPause || i.manualPlay || i.play()
                }), r.initDelay > 0 ? setTimeout(i.play, r.initDelay) : i.play()), a && r.touch && p.touch(), (!d || d && r.smoothHeight) && e(window).bind("resize focus", p.resize), setTimeout(function () {
                    r.start(i)
                }, 200)
            }, asNav: {
                setup: function () {
                    i.asNav = !0, i.animatingTo = Math.floor(i.currentSlide / i.move), i.currentItem = i.currentSlide, i.slides.removeClass(o + "active-slide").eq(i.currentItem).addClass(o + "active-slide"), i.slides.click(function (t) {
                        t.preventDefault();
                        var n = e(this), o = n.index();
                        e(r.asNavFor).data("flexslider").animating || n.hasClass("active") || (i.direction = i.currentItem < o ? "next" : "prev", i.flexAnimate(o, r.pauseOnAction, !1, !0, !0))
                    })
                }
            }, controlNav: {
                setup: function () {
                    i.manualControls ? p.controlNav.setupManual() : p.controlNav.setupPaging()
                }, setupPaging: function () {
                    var t, n = "thumbnails" === r.controlNav ? "control-thumbs" : "control-paging", c = 1;
                    if (i.controlNavScaffold = e('<ol class="' + o + "control-nav " + o + n + '"></ol>'), i.pagingCount > 1) for (var l = 0; l < i.pagingCount; l++) t = "thumbnails" === r.controlNav ? '<img src="' + i.slides.eq(l).attr("data-thumb") + '"/>' : "<a>" + c + "</a>", i.controlNavScaffold.append("<li>" + t + "</li>"), c++;
                    i.controlsContainer ? e(i.controlsContainer).append(i.controlNavScaffold) : i.append(i.controlNavScaffold), p.controlNav.set(), p.controlNav.active(), i.controlNavScaffold.delegate("a, img", s, function (t) {
                        t.preventDefault();
                        var n = e(this), a = i.controlNav.index(n);
                        n.hasClass(o + "active") || (i.direction = a > i.currentSlide ? "next" : "prev", i.flexAnimate(a, r.pauseOnAction))
                    }), a && i.controlNavScaffold.delegate("a", "click touchstart", function (e) {
                        e.preventDefault()
                    })
                }, setupManual: function () {
                    i.controlNav = i.manualControls, p.controlNav.active(), i.controlNav.live(s, function (t) {
                        t.preventDefault();
                        var n = e(this), a = i.controlNav.index(n);
                        n.hasClass(o + "active") || (a > i.currentSlide ? i.direction = "next" : i.direction = "prev", i.flexAnimate(a, r.pauseOnAction))
                    }), a && i.controlNav.live("click touchstart", function (e) {
                        e.preventDefault()
                    })
                }, set: function () {
                    var t = "thumbnails" === r.controlNav ? "img" : "a";
                    i.controlNav = e("." + o + "control-nav li " + t, i.controlsContainer ? i.controlsContainer : i)
                }, active: function () {
                    i.controlNav.removeClass(o + "active").eq(i.animatingTo).addClass(o + "active")
                }, update: function (t, n) {
                    i.pagingCount > 1 && "add" === t ? i.controlNavScaffold.append(e("<li><a>" + i.count + "</a></li>")) : 1 === i.pagingCount ? i.controlNavScaffold.find("li").remove() : i.controlNav.eq(n).closest("li").remove(), p.controlNav.set(), i.pagingCount > 1 && i.pagingCount !== i.controlNav.length ? i.update(n, t) : p.controlNav.active()
                }
            }, directionNav: {
                setup: function () {
                    var t = e('<ul class="' + o + 'direction-nav"><li><a class="' + o + 'prev" href="#">' + r.prevText + '</a></li><li><a class="' + o + 'next" href="#">' + r.nextText + "</a></li></ul>");
                    i.controlsContainer ? (e(i.controlsContainer).append(t), i.directionNav = e("." + o + "direction-nav li a", i.controlsContainer)) : (i.append(t), i.directionNav = e("." + o + "direction-nav li a", i)), p.directionNav.update(), i.directionNav.bind(s, function (t) {
                        t.preventDefault();
                        var n = e(this).hasClass(o + "next") ? i.getTarget("next") : i.getTarget("prev");
                        i.flexAnimate(n, r.pauseOnAction)
                    }), a && i.directionNav.bind("click touchstart", function (e) {
                        e.preventDefault()
                    })
                }, update: function () {
                    var e = o + "disabled";
                    1 === i.pagingCount ? i.directionNav.addClass(e) : r.animationLoop ? i.directionNav.removeClass(e) : 0 === i.animatingTo ? i.directionNav.removeClass(e).filter("." + o + "prev").addClass(e) : i.animatingTo === i.last ? i.directionNav.removeClass(e).filter("." + o + "next").addClass(e) : i.directionNav.removeClass(e)
                }
            }, pausePlay: {
                setup: function () {
                    var t = e('<div class="' + o + 'pauseplay"><a></a></div>');
                    i.controlsContainer ? (i.controlsContainer.append(t), i.pausePlay = e("." + o + "pauseplay a", i.controlsContainer)) : (i.append(t), i.pausePlay = e("." + o + "pauseplay a", i)), p.pausePlay.update(r.slideshow ? o + "pause" : o + "play"), i.pausePlay.bind(s, function (t) {
                        t.preventDefault(), e(this).hasClass(o + "pause") ? (i.manualPause = !0, i.manualPlay = !1, i.pause()) : (i.manualPause = !1, i.manualPlay = !0, i.play())
                    }), a && i.pausePlay.bind("click touchstart", function (e) {
                        e.preventDefault()
                    })
                }, update: function (e) {
                    "play" === e ? i.pausePlay.removeClass(o + "pause").addClass(o + "play").text(r.playText) : i.pausePlay.removeClass(o + "play").addClass(o + "pause").text(r.pauseText)
                }
            }, touch: function () {
                function e(e) {
                    i.animating ? e.preventDefault() : 1 === e.touches.length && (i.pause(), p = c ? i.h : i.w, m = Number(new Date), f = u && l && i.animatingTo === i.last ? 0 : u && l ? i.limit - (i.itemW + r.itemMargin) * i.move * i.animatingTo : u && i.currentSlide === i.last ? i.limit : u ? (i.itemW + r.itemMargin) * i.move * i.currentSlide : l ? (i.last - i.currentSlide + i.cloneOffset) * p : (i.currentSlide + i.cloneOffset) * p, a = c ? e.touches[0].pageY : e.touches[0].pageX, s = c ? e.touches[0].pageX : e.touches[0].pageY, t.addEventListener("touchmove", n, !1), t.addEventListener("touchend", o, !1))
                }

                function n(e) {
                    h = c ? a - e.touches[0].pageY : a - e.touches[0].pageX, (!(v = c ? Math.abs(h) < Math.abs(e.touches[0].pageX - s) : Math.abs(h) < Math.abs(e.touches[0].pageY - s)) || Number(new Date) - m > 500) && (e.preventDefault(), !d && i.transitions && (r.animationLoop || (h /= 0 === i.currentSlide && h < 0 || i.currentSlide === i.last && h > 0 ? Math.abs(h) / p + 2 : 1), i.setProps(f + h, "setTouch")))
                }

                function o(e) {
                    if (t.removeEventListener("touchmove", n, !1), i.animatingTo === i.currentSlide && !v && null !== h) {
                        var c = l ? -h : h, u = c > 0 ? i.getTarget("next") : i.getTarget("prev");
                        i.canAdvance(u) && (Number(new Date) - m < 550 && Math.abs(c) > 50 || Math.abs(c) > p / 2) ? i.flexAnimate(u, r.pauseOnAction) : d || i.flexAnimate(i.currentSlide, r.pauseOnAction, !0)
                    }
                    t.removeEventListener("touchend", o, !1), a = null, s = null, h = null, f = null
                }

                var a, s, f, p, h, m, v = !1;
                t.addEventListener("touchstart", e, !1)
            }, resize: function () {
                !i.animating && i.is(":visible") && (u || i.doMath(), d ? p.smoothHeight() : u ? (i.slides.width(i.computedW), i.update(i.pagingCount), i.setProps()) : c ? (i.viewport.height(i.h), i.setProps(i.h, "setTotal")) : (r.smoothHeight && p.smoothHeight(), i.newSlides.width(i.computedW), i.setProps(i.computedW, "setTotal")))
            }, smoothHeight: function (e) {
                if (!c || d) {
                    var t = d ? i : i.viewport;
                    e ? t.animate({height: i.slides.eq(i.animatingTo).height()}, e) : t.height(i.slides.eq(i.animatingTo).height())
                }
            }, sync: function (t) {
                var n = e(r.sync).data("flexslider"), o = i.animatingTo;
                switch (t) {
                    case"animate":
                        n.flexAnimate(o, r.pauseOnAction, !1, !0);
                        break;
                    case"play":
                        n.playing || n.asNav || n.play();
                        break;
                    case"pause":
                        n.pause()
                }
            }
        }, i.flexAnimate = function (t, n, s, h, m) {
            if (f && 1 === i.pagingCount && (i.direction = i.currentItem < t ? "next" : "prev"), !i.animating && (i.canAdvance(t, m) || s) && i.is(":visible")) {
                if (f && h) {
                    var v = e(r.asNavFor).data("flexslider");
                    if (i.atEnd = 0 === t || t === i.count - 1, v.flexAnimate(t, !0, !1, !0, m), i.direction = i.currentItem < t ? "next" : "prev", v.direction = i.direction, Math.ceil((t + 1) / i.visible) - 1 === i.currentSlide || 0 === t) return i.currentItem = t, i.slides.removeClass(o + "active-slide").eq(t).addClass(o + "active-slide"), !1;
                    i.currentItem = t, i.slides.removeClass(o + "active-slide").eq(t).addClass(o + "active-slide"), t = Math.floor(t / i.visible)
                }
                if (i.animating = !0, i.animatingTo = t, r.before(i), n && i.pause(), i.syncExists && !m && p.sync("animate"), r.controlNav && p.controlNav.active(), u || i.slides.removeClass(o + "active-slide").eq(t).addClass(o + "active-slide"), i.atEnd = 0 === t || t === i.last, r.directionNav && p.directionNav.update(), t === i.last && (r.end(i), r.animationLoop || i.pause()), d) a ? (i.slides.eq(i.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }), i.slides.eq(t).css({
                    opacity: 1,
                    zIndex: 2
                }), i.slides.unbind("webkitTransitionEnd transitionend"), i.slides.eq(i.currentSlide).bind("webkitTransitionEnd transitionend", function () {
                    r.after(i)
                }), i.animating = !1, i.currentSlide = i.animatingTo) : (i.slides.eq(i.currentSlide).fadeOut(r.animationSpeed, r.easing), i.slides.eq(t).fadeIn(r.animationSpeed, r.easing, i.wrapup)); else {
                    var g, y, b, x = c ? i.slides.filter(":first").height() : i.computedW;
                    u ? (g = r.itemWidth > i.w ? 2 * r.itemMargin : r.itemMargin, b = (i.itemW + g) * i.move * i.animatingTo, y = b > i.limit && 1 !== i.visible ? i.limit : b) : y = 0 === i.currentSlide && t === i.count - 1 && r.animationLoop && "next" !== i.direction ? l ? (i.count + i.cloneOffset) * x : 0 : i.currentSlide === i.last && 0 === t && r.animationLoop && "prev" !== i.direction ? l ? 0 : (i.count + 1) * x : l ? (i.count - 1 - t + i.cloneOffset) * x : (t + i.cloneOffset) * x, i.setProps(y, "", r.animationSpeed), i.transitions ? (r.animationLoop && i.atEnd || (i.animating = !1, i.currentSlide = i.animatingTo), i.container.unbind("webkitTransitionEnd transitionend"), i.container.bind("webkitTransitionEnd transitionend", function () {
                        i.wrapup(x)
                    })) : i.container.animate(i.args, r.animationSpeed, r.easing, function () {
                        i.wrapup(x)
                    })
                }
                r.smoothHeight && p.smoothHeight(r.animationSpeed)
            }
        }, i.wrapup = function (e) {
            d || u || (0 === i.currentSlide && i.animatingTo === i.last && r.animationLoop ? i.setProps(e, "jumpEnd") : i.currentSlide === i.last && 0 === i.animatingTo && r.animationLoop && i.setProps(e, "jumpStart")), i.animating = !1, i.currentSlide = i.animatingTo, r.after(i)
        }, i.animateSlides = function () {
            i.animating || i.flexAnimate(i.getTarget("next"))
        }, i.pause = function () {
            clearInterval(i.animatedSlides), i.playing = !1, r.pausePlay && p.pausePlay.update("play"), i.syncExists && p.sync("pause")
        }, i.play = function () {
            i.animatedSlides = setInterval(i.animateSlides, r.slideshowSpeed), i.playing = !0, r.pausePlay && p.pausePlay.update("pause"), i.syncExists && p.sync("play")
        }, i.canAdvance = function (e, t) {
            var n = f ? i.pagingCount - 1 : i.last;
            return !!t || (!(!f || i.currentItem !== i.count - 1 || 0 !== e || "prev" !== i.direction) || (!f || 0 !== i.currentItem || e !== i.pagingCount - 1 || "next" === i.direction) && (!(e === i.currentSlide && !f) && (!!r.animationLoop || (!i.atEnd || 0 !== i.currentSlide || e !== n || "next" === i.direction) && (!i.atEnd || i.currentSlide !== n || 0 !== e || "next" !== i.direction))))
        }, i.getTarget = function (e) {
            return i.direction = e, "next" === e ? i.currentSlide === i.last ? 0 : i.currentSlide + 1 : 0 === i.currentSlide ? i.last : i.currentSlide - 1
        }, i.setProps = function (e, t, n) {
            var o = function () {
                var n = e || (i.itemW + r.itemMargin) * i.move * i.animatingTo;
                return -1 * function () {
                    if (u) return "setTouch" === t ? e : l && i.animatingTo === i.last ? 0 : l ? i.limit - (i.itemW + r.itemMargin) * i.move * i.animatingTo : i.animatingTo === i.last ? i.limit : n;
                    switch (t) {
                        case"setTotal":
                            return l ? (i.count - 1 - i.currentSlide + i.cloneOffset) * e : (i.currentSlide + i.cloneOffset) * e;
                        case"setTouch":
                            return e;
                        case"jumpEnd":
                            return l ? e : i.count * e;
                        case"jumpStart":
                            return l ? i.count * e : e;
                        default:
                            return e
                    }
                }() + "px"
            }();
            i.transitions && (o = c ? "translate3d(0," + o + ",0)" : "translate3d(" + o + ",0,0)", n = void 0 !== n ? n / 1e3 + "s" : "0s", i.container.css("-" + i.pfx + "-transition-duration", n)), i.args[i.prop] = o, (i.transitions || void 0 === n) && i.container.css(i.args)
        }, i.setup = function (t) {
            if (d) i.slides.css({
                width: "100%",
                float: "left",
                marginRight: "-100%",
                position: "relative"
            }), "init" === t && (a ? i.slides.css({
                opacity: 0,
                display: "block",
                webkitTransition: "opacity " + r.animationSpeed / 1e3 + "s ease",
                zIndex: 1
            }).eq(i.currentSlide).css({
                opacity: 1,
                zIndex: 2
            }) : i.slides.eq(i.currentSlide).fadeIn(r.animationSpeed, r.easing)), r.smoothHeight && p.smoothHeight(); else {
                var n, s;
                "init" === t && (i.viewport = e('<div class="' + o + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(i).append(i.container), i.cloneCount = 0, i.cloneOffset = 0, l && (s = e.makeArray(i.slides).reverse(), i.slides = e(s), i.container.empty().append(i.slides))), r.animationLoop && !u && (i.cloneCount = 2, i.cloneOffset = 1, "init" !== t && i.container.find(".clone").remove(), i.container.append(i.slides.first().clone().addClass("clone")).prepend(i.slides.last().clone().addClass("clone"))), i.newSlides = e(r.selector, i), n = l ? i.count - 1 - i.currentSlide + i.cloneOffset : i.currentSlide + i.cloneOffset, c && !u ? (i.container.height(200 * (i.count + i.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function () {
                    i.newSlides.css({display: "block"}), i.doMath(), i.viewport.height(i.h), i.setProps(n * i.h, "init")
                }, "init" === t ? 100 : 0)) : (i.container.width(200 * (i.count + i.cloneCount) + "%"), i.setProps(n * i.computedW, "init"), setTimeout(function () {
                    i.doMath(), i.newSlides.css({
                        width: i.computedW,
                        float: "left",
                        display: "block"
                    }), r.smoothHeight && p.smoothHeight()
                }, "init" === t ? 100 : 0))
            }
            u || i.slides.removeClass(o + "active-slide").eq(i.currentSlide).addClass(o + "active-slide")
        }, i.doMath = function () {
            var e = i.slides.first(), t = r.itemMargin, n = r.minItems, o = r.maxItems;
            i.w = i.width(), i.h = e.height(), i.boxPadding = e.outerWidth() - e.width(), u ? (i.itemT = r.itemWidth + t, i.minW = n ? n * i.itemT : i.w, i.maxW = o ? o * i.itemT : i.w, i.itemW = i.minW > i.w ? (i.w - t * n) / n : i.maxW < i.w ? (i.w - t * o) / o : r.itemWidth > i.w ? i.w : r.itemWidth, i.visible = Math.floor(i.w / (i.itemW + t)), i.move = r.move > 0 && r.move < i.visible ? r.move : i.visible, i.pagingCount = Math.ceil((i.count - i.visible) / i.move + 1), i.last = i.pagingCount - 1, i.limit = 1 === i.pagingCount ? 0 : r.itemWidth > i.w ? (i.itemW + 2 * t) * i.count - i.w - t : (i.itemW + t) * i.count - i.w - t) : (i.itemW = i.w, i.pagingCount = i.count, i.last = i.count - 1), i.computedW = i.itemW - i.boxPadding
        }, i.update = function (e, t) {
            i.doMath(), u || (e < i.currentSlide ? i.currentSlide += 1 : e <= i.currentSlide && 0 !== e && (i.currentSlide -= 1), i.animatingTo = i.currentSlide), r.controlNav && !i.manualControls && ("add" === t && !u || i.pagingCount > i.controlNav.length ? p.controlNav.update("add") : ("remove" === t && !u || i.pagingCount < i.controlNav.length) && (u && i.currentSlide > i.last && (i.currentSlide -= 1, i.animatingTo -= 1), p.controlNav.update("remove", i.last))), r.directionNav && p.directionNav.update()
        }, i.addSlide = function (t, n) {
            var o = e(t);
            i.count += 1, i.last = i.count - 1, c && l ? void 0 !== n ? i.slides.eq(i.count - n).after(o) : i.container.prepend(o) : void 0 !== n ? i.slides.eq(n).before(o) : i.container.append(o), i.update(n, "add"), i.slides = e(r.selector + ":not(.clone)", i), i.setup(), r.added(i)
        }, i.removeSlide = function (t) {
            var n = isNaN(t) ? i.slides.index(e(t)) : t;
            i.count -= 1, i.last = i.count - 1, isNaN(t) ? e(t, i.slides).remove() : c && l ? i.slides.eq(i.last).remove() : i.slides.eq(t).remove(), i.doMath(), i.update(n, "remove"), i.slides = e(r.selector + ":not(.clone)", i), i.setup(), r.removed(i)
        }, p.init()
    }, e.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: " ",
        nextText: " ",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 0,
        maxItems: 0,
        move: 0,
        start: function () {
        },
        before: function () {
        },
        after: function () {
        },
        end: function () {
        },
        added: function () {
        },
        removed: function () {
        }
    }, e.fn.flexslider = function (t) {
        if (void 0 === t && (t = {}), "object" == typeof t) return this.each(function () {
            var n = e(this), i = t.selector ? t.selector : ".slides > li", r = n.find(i);
            1 === r.length ? (r.fadeIn(400), t.start && t.start(n)) : void 0 == n.data("flexslider") && new e.flexslider(this, t)
        });
        var n = e(this).data("flexslider");
        switch (t) {
            case"play":
                n.play();
                break;
            case"pause":
                n.pause();
                break;
            case"next":
                n.flexAnimate(n.getTarget("next"), !0);
                break;
            case"prev":
            case"previous":
                n.flexAnimate(n.getTarget("prev"), !0);
                break;
            default:
                "number" == typeof t && n.flexAnimate(t, !0)
        }
    }
}(jQuery), define("jquery.flexslider", function () {
}), $(document).ready(function () {
    toggle_nav_container(), gotoByScroll()
});
var toggle_nav_container = function () {
    var e = $("#toggle_m_nav");
    $navContainer = $("#m_nav_container"), $menuButton = $("#m_nav_menu"), $menuButtonBars = $(".m_nav_ham"), $wrapper = $("#wrapper"), e.on("click", function () {
        $(window).width();
        $navContainer.is(":hidden") ? ($wrapper.removeClass("closed_wrapper"), $wrapper.addClass("open_wrapper"), $navContainer.slideDown(200).addClass("container_open").css("z-index", "2"), $menuButtonBars.removeClass("button_closed"), $menuButtonBars.addClass("button_open"), $("#m_ham_1").addClass("m_nav_ham_1_open"), $("#m_ham_2").addClass("m_nav_ham_2_open"), $("#m_ham_3").addClass("m_nav_ham_3_open")) : ($navContainer.css("z-index", "0").removeClass("container_open").slideUp(200), $menuButtonBars.removeClass("button_open"), $menuButtonBars.addClass("button_closed"), $wrapper.removeClass("open_wrapper"), $wrapper.addClass("closed_wrapper"), $("#m_ham_1").removeClass("m_nav_ham_1_open"), $("#m_ham_2").removeClass("m_nav_ham_2_open"), $("#m_ham_3").removeClass("m_nav_ham_3_open"))
    })
}, gotoByScroll = function () {
    $(".m_nav_item a").on("click", function (e) {
        $("html,body").animate({scrollTop: $($(this).attr("href")).offset().top - 50}, "slow")
    })
};
define("main", function () {
}), function (e) {
    e.fn.extend({
        easyResponsiveTabs: function (t) {
            var n = {
                type: "default", width: "auto", fit: !0, closed: !1, activate: function () {
                }
            }, t = e.extend(n, t), i = t, r = i.type, o = i.fit, a = i.width, s = "vertical", c = "accordion";
            e(this).bind("tabactivate", function (e, n) {
                "function" == typeof t.activate && t.activate.call(n, e)
            }), this.each(function () {
                var n = e(this), i = n.find("ul.resp-tabs-list");
                n.find("ul.resp-tabs-list li").addClass("resp-tab-item"), n.css({
                    display: "block",
                    width: a
                }), n.find(".resp-tabs-container > div").addClass("resp-tab-content"), function () {
                    r == s && n.addClass("resp-vtabs"), 1 == o && n.css({
                        width: "100%",
                        margin: "0px"
                    }), r == c && (n.addClass("resp-easy-accordion"), n.find(".resp-tabs-list").css("display", "none"))
                }();
                var l;
                n.find(".resp-tab-content").before("<h5 class='resp-accordion' role='tab'><span class='resp-arrow'></span></h5>");
                var u = 0;
                n.find(".resp-accordion").each(function () {
                    l = e(this);
                    var t = n.find(".resp-tab-item:eq(" + u + ")").html();
                    n.find(".resp-accordion:eq(" + u + ")").append(t), l.attr("aria-controls", "tab_item-" + u), u++
                });
                var d, f = 0;
                n.find(".resp-tab-item").each(function () {
                    $tabItem = e(this), $tabItem.attr("aria-controls", "tab_item-" + f), $tabItem.attr("role", "tab"), !0 === t.closed || "accordion" === t.closed && !i.is(":visible") || "tabs" === t.closed && i.is(":visible") || (n.find(".resp-tab-item").first().addClass("resp-tab-active"), n.find(".resp-accordion").first().addClass("resp-tab-active"), n.find(".resp-tab-content").first().addClass("resp-tab-content-active").attr("style", "display:block"));
                    var r = 0;
                    n.find(".resp-tab-content").each(function () {
                        d = e(this), d.attr("aria-labelledby", "tab_item-" + r), r++
                    }), f++
                }), n.find("[role=tab]").each(function () {
                    var t = e(this);
                    t.click(function () {
                        var i = t.attr("aria-controls");
                        if (t.hasClass("resp-accordion") && t.hasClass("resp-tab-active")) return n.find(".resp-tab-content-active").slideUp("", function () {
                            e(this).addClass("resp-accordion-closed")
                        }), t.removeClass("resp-tab-active"), !1;
                        !t.hasClass("resp-tab-active") && t.hasClass("resp-accordion") ? (n.find(".resp-tab-active").removeClass("resp-tab-active"), n.find(".resp-tab-content-active").slideUp().removeClass("resp-tab-content-active resp-accordion-closed"), n.find("[aria-controls=" + i + "]").addClass("resp-tab-active"), n.find(".resp-tab-content[aria-labelledby = " + i + "]").slideDown().addClass("resp-tab-content-active")) : (n.find(".resp-tab-active").removeClass("resp-tab-active"), n.find(".resp-tab-content-active").removeAttr("style").removeClass("resp-tab-content-active").removeClass("resp-accordion-closed"), n.find("[aria-controls=" + i + "]").addClass("resp-tab-active"), n.find(".resp-tab-content[aria-labelledby = " + i + "]").addClass("resp-tab-content-active").attr("style", "display:block")), t.trigger("tabactivate", t)
                    }), e(window).resize(function () {
                        n.find(".resp-accordion-closed").removeAttr("style")
                    })
                })
            })
        }
    })
}(jQuery), define("easy-responsive-tabs", function () {
}), function (e) {
    e.fn.UItoTop = function (t) {
        var n = {
            text: "To Top",
            min: 200,
            inDelay: 600,
            outDelay: 400,
            containerID: "toTop",
            containerHoverID: "toTopHover",
            scrollSpeed: 1e3,
            easingType: "linear"
        }, i = e.extend(n, t), r = "#" + i.containerID, o = "#" + i.containerHoverID;
        e("body").append('<a href="#" id="' + i.containerID + '">' + i.text + "</a>"), e(r).hide().on("click.UItoTop", function () {
            return e("html, body").animate({scrollTop: 0}, i.scrollSpeed, i.easingType), e("#" + i.containerHoverID, this).stop().animate({opacity: 0}, i.inDelay, i.easingType), !1
        }).prepend('<span id="' + i.containerHoverID + '"></span>').hover(function () {
            e(o, this).stop().animate({opacity: 1}, 600, "linear")
        }, function () {
            e(o, this).stop().animate({opacity: 0}, 700, "linear")
        }), e(window).scroll(function () {
            var t = e(window).scrollTop();
            void 0 === document.body.style.maxHeight && e(r).css({
                position: "absolute",
                top: t + e(window).height() - 50
            }), t > i.min ? e(r).fadeIn(i.inDelay) : e(r).fadeOut(i.Outdelay)
        })
    }
}(jQuery), define("move-top", function () {
}), jQuery.extend(jQuery.easing, {
    easeInQuad: function (e, t, n, i, r) {
        return i * (t /= r) * t + n
    }, easeOutQuad: function (e, t, n, i, r) {
        return -i * (t /= r) * (t - 2) + n
    }, easeInOutQuad: function (e, t, n, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
    }, easeInCubic: function (e, t, n, i, r) {
        return i * (t /= r) * t * t + n
    }, easeOutCubic: function (e, t, n, i, r) {
        return i * ((t = t / r - 1) * t * t + 1) + n
    }, easeInOutCubic: function (e, t, n, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
    }, easeInQuart: function (e, t, n, i, r) {
        return i * (t /= r) * t * t * t + n
    }, easeOutQuart: function (e, t, n, i, r) {
        return -i * ((t = t / r - 1) * t * t * t - 1) + n
    }, easeInOutQuart: function (e, t, n, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
    }, easeInQuint: function (e, t, n, i, r) {
        return i * (t /= r) * t * t * t * t + n
    }, easeOutQuint: function (e, t, n, i, r) {
        return i * ((t = t / r - 1) * t * t * t * t + 1) + n
    }, easeInOutQuint: function (e, t, n, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
    }, easeInSine: function (e, t, n, i, r) {
        return -i * Math.cos(t / r * (Math.PI / 2)) + i + n
    }, easeOutSine: function (e, t, n, i, r) {
        return i * Math.sin(t / r * (Math.PI / 2)) + n
    }, easeInOutSine: function (e, t, n, i, r) {
        return -i / 2 * (Math.cos(Math.PI * t / r) - 1) + n
    }, easeInExpo: function (e, t, n, i, r) {
        return 0 == t ? n : i * Math.pow(2, 10 * (t / r - 1)) + n
    }, easeOutExpo: function (e, t, n, i, r) {
        return t == r ? n + i : i * (1 - Math.pow(2, -10 * t / r)) + n
    }, easeInOutExpo: function (e, t, n, i, r) {
        return 0 == t ? n : t == r ? n + i : (t /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --t)) + n
    }, easeInCirc: function (e, t, n, i, r) {
        return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + n
    }, easeOutCirc: function (e, t, n, i, r) {
        return i * Math.sqrt(1 - (t = t / r - 1) * t) + n
    }, easeInOutCirc: function (e, t, n, i, r) {
        return (t /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    }, easeInElastic: function (e, t, n, i, r) {
        var o = 1.70158, a = 0, s = i;
        if (0 == t) return n;
        if (1 == (t /= r)) return n + i;
        if (a || (a = .3 * r), s < Math.abs(i)) {
            s = i;
            var o = a / 4
        } else var o = a / (2 * Math.PI) * Math.asin(i / s);
        return -s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a) + n
    }, easeOutElastic: function (e, t, n, i, r) {
        var o = 1.70158, a = 0, s = i;
        if (0 == t) return n;
        if (1 == (t /= r)) return n + i;
        if (a || (a = .3 * r), s < Math.abs(i)) {
            s = i;
            var o = a / 4
        } else var o = a / (2 * Math.PI) * Math.asin(i / s);
        return s * Math.pow(2, -10 * t) * Math.sin((t * r - o) * (2 * Math.PI) / a) + i + n
    }, easeInOutElastic: function (e, t, n, i, r) {
        var o = 1.70158, a = 0, s = i;
        if (0 == t) return n;
        if (2 == (t /= r / 2)) return n + i;
        if (a || (a = r * (.3 * 1.5)), s < Math.abs(i)) {
            s = i;
            var o = a / 4
        } else var o = a / (2 * Math.PI) * Math.asin(i / s);
        return t < 1 ? s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a) * -.5 + n : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a) * .5 + i + n
    }, easeInBack: function (e, t, n, i, r, o) {
        return void 0 == o && (o = 1.70158), i * (t /= r) * t * ((o + 1) * t - o) + n
    }, easeOutBack: function (e, t, n, i, r, o) {
        return void 0 == o && (o = 1.70158), i * ((t = t / r - 1) * t * ((o + 1) * t + o) + 1) + n
    }, easeInOutBack: function (e, t, n, i, r, o) {
        return void 0 == o && (o = 1.70158), (t /= r / 2) < 1 ? i / 2 * (t * t * ((1 + (o *= 1.525)) * t - o)) + n : i / 2 * ((t -= 2) * t * ((1 + (o *= 1.525)) * t + o) + 2) + n
    }, easeInBounce: function (e, t, n, i, r) {
        return i - jQuery.easing.easeOutBounce(e, r - t, 0, i, r) + n
    }, easeOutBounce: function (e, t, n, i, r) {
        return (t /= r) < 1 / 2.75 ? i * (7.5625 * t * t) + n : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
    }, easeInOutBounce: function (e, t, n, i, r) {
        return t < r / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, i, r) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - r, 0, i, r) + .5 * i + n
    }
}), define("easing", function () {
}), require(["modernizr-2.6.2.min", "jquery-2.1.4.min", "JiSlider", "jquery.flexslider", "main", "easy-responsive-tabs", "move-top", "easing"], function (e, t, n) {
    console.log(1111)
}), define("ljb", function () {
});