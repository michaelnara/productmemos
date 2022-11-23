/*
MASSARIUS.JS
30 MAART 2018
 */



!function () { function t(t, s) { t = t || "", s = s || {}; for (var u in e) e.hasOwnProperty(u) && (s.autoFix && (s["fix_" + u] = !0), s.fix = s.fix || s["fix_" + u]); var c = [], p = document.createElement("div"), f = function (t) { return "string" == typeof t && -1 !== t.indexOf("&") ? (p.innerHTML = t, p.textContent || p.innerText || t) : t }, l = function (e) { t += e }, h = function (e) { t = e + t }, d = { comment: /^<!--/, endTag: /^<\//, atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i, startTag: /^</, chars: /^[^<]/ }, m = { comment: function () { var e = t.indexOf("-->"); return e >= 0 ? { content: t.substr(4, e - 1), length: e + 3 } : void 0 }, endTag: function () { var e = t.match(n); return e ? { tagName: e[1], length: e[0].length } : void 0 }, atomicTag: function () { var e = m.startTag(); if (e) { var r = t.slice(e.length); if (r.match(new RegExp("</\\s*" + e.tagName + "\\s*>", "i"))) { var n = r.match(new RegExp("([\\s\\S]*?)</\\s*" + e.tagName + "\\s*>", "i")); if (n) return { tagName: e.tagName, attrs: e.attrs, content: n[1], length: n[0].length + e.length } } } }, startTag: function () { var e = t.indexOf(">"); if (-1 === e) return null; var n = t.match(r); if (n) { var a = {}, s = {}, u = n[2]; return n[2].replace(i, function (t, e) { if (arguments[2] || arguments[3] || arguments[4] || arguments[5]) if (arguments[5]) a[arguments[5]] = "", s[e] = !0; else { var r = arguments[2] || arguments[3] || arguments[4] || o.test(e) && e || ""; a[e] = f(r) } else a[e] = null; u = u.replace(t, "") }), { tagName: n[1], attrs: a, booleanAttrs: s, rest: u, unary: !!n[3], length: n[0].length } } }, chars: function () { var e = t.indexOf("<"); return { length: e >= 0 ? e : t.length } } }, g = function () { for (var e in d) if (d[e].test(t)) { a && console.log("suspected " + e); var r = m[e](); return r ? (a && console.log("parsed " + e, r), r.type = r.type || e, r.text = t.substr(0, r.length), t = t.slice(r.length), r) : null } }, y = function (t) { for (var e; e = g();) if (t[e.type] && t[e.type](e) === !1) return }, v = function () { var e = t; return t = "", e }, T = function () { return t }; return s.fix && !function () { var e = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i, r = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i, n = []; n.last = function () { return this[this.length - 1] }, n.lastTagNameEq = function (t) { var e = this.last(); return e && e.tagName && e.tagName.toUpperCase() === t.toUpperCase() }, n.containsTagName = function (t) { for (var e, r = 0; e = this[r]; r++) if (e.tagName === t) return !0; return !1 }; var i = function (t) { return t && "startTag" === t.type && (t.unary = e.test(t.tagName) || t.unary, t.html5Unary = !/\/>$/.test(t.text)), t }, o = g, a = function () { var e = t, r = i(o()); return t = e, r }, u = function () { var t = n.pop(); h("</" + t.tagName + ">") }, c = { startTag: function (t) { var e = t.tagName; "TR" === e.toUpperCase() && n.lastTagNameEq("TABLE") ? (h("<TBODY>"), f()) : s.fix_selfClose && r.test(e) && n.containsTagName(e) ? n.lastTagNameEq(e) ? u() : (h("</" + t.tagName + ">"), f()) : t.unary || n.push(t) }, endTag: function (t) { var e = n.last(); e ? s.fix_tagSoup && !n.lastTagNameEq(t.tagName) ? u() : n.pop() : s.fix_tagSoup && p() } }, p = function () { o(), f() }, f = function () { var t = a(); t && c[t.type] && c[t.type](t) }; g = function () { return f(), i(o()) } }(), { append: l, readToken: g, readTokens: y, clear: v, rest: T, stack: c } } var e = function () { var t, e = {}, r = this.document.createElement("div"); return t = "<P><I></P></I>", r.innerHTML = t, e.tagSoup = r.innerHTML !== t, r.innerHTML = "<P><i><P></P></i></P>", e.selfClose = 2 === r.childNodes.length, e }(), r = /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/, n = /^<\/([\-A-Za-z0-9_]+)[^>]*>/, i = /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g, o = /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i, a = !1; t.supports = e, t.tokenToString = function (t) { var e = { comment: function (t) { return "<!--" + t.content }, endTag: function (t) { return "</" + t.tagName + ">" }, atomicTag: function (t) { return a && console.log(t), e.startTag(t) + t.content + e.endTag(t) }, startTag: function (t) { var e = "<" + t.tagName; for (var r in t.attrs) { e += " " + r; var n = t.attrs[r]; ("undefined" == typeof t.booleanAttrs || "undefined" == typeof t.booleanAttrs[r]) && (e += '="' + (n ? n.replace(/(^|[^\\])"/g, '$1\\"') : "") + '"') } return t.rest && (e += t.rest), e + (t.unary && !t.html5Unary ? "/>" : ">") }, chars: function (t) { return t.text } }; return e[t.type](t) }, t.escapeAttributes = function (t) { var e = {}; for (var r in t) { var n = t[r]; e[r] = n && n.replace(/(^|[^\\])"/g, '$1\\"') } return e }; for (var s in e) t.browserHasFlaw = t.browserHasFlaw || !e[s] && s; this.htmlParser = t }(), function () { function t() { } function e(t) { return t !== l && null !== t } function r(t) { return "function" == typeof t } function n(t, e, r) { var n, i = t && t.length || 0; for (n = 0; i > n; n++) e.call(r, t[n], n) } function i(t, e, r) { var n; for (n in t) t.hasOwnProperty(n) && e.call(r, n, t[n]) } function o(t, e) { return i(e, function (e, r) { t[e] = r }), t } function a(t, r) { return t = t || {}, i(r, function (r, n) { e(t[r]) || (t[r] = n) }), t } function s(t) { try { return d.call(t) } catch (e) { var r = []; return n(t, function (t) { r.push(t) }), r } } function u(t) { return t && "tagName" in t ? !!~t.tagName.toLowerCase().indexOf("script") : !1 } function c(t) { return t && "tagName" in t ? !!~t.tagName.toLowerCase().indexOf("style") : !1 } var p = { afterAsync: t, afterDequeue: t, afterStreamStart: t, afterWrite: t, autoFix: !0, beforeEnqueue: t, beforeWriteToken: function (t) { return t }, beforeWrite: function (t) { return t }, done: t, error: function (t) { throw t }, releaseAsync: !1 }, f = this, l = void 0; if (!f.postscribe) { var h = !1, d = Array.prototype.slice, m = function (t) { return t[t.length - 1] }, g = function () { function t(t, r, n) { var i = p + r; if (2 === arguments.length) { var o = t.getAttribute(i); return e(o) ? String(o) : o } e(n) && "" !== n ? t.setAttribute(i, n) : t.removeAttribute(i) } function a(e, r) { var n = e.ownerDocument; o(this, { root: e, options: r, win: n.defaultView || n.parentWindow, doc: n, parser: htmlParser("", { autoFix: r.autoFix }), actuals: [e], proxyHistory: "", proxyRoot: n.createElement(e.nodeName), scriptStack: [], writeQueue: [] }), t(this.proxyRoot, "proxyof", 0) } var p = "data-ps-"; return a.prototype.write = function () { [].push.apply(this.writeQueue, arguments); for (var t; !this.deferredRemote && this.writeQueue.length;) t = this.writeQueue.shift(), r(t) ? this.callFunction(t) : this.writeImpl(t) }, a.prototype.callFunction = function (t) { var e = { type: "function", value: t.name || t.toString() }; this.onScriptStart(e), t.call(this.win, this.doc), this.onScriptDone(e) }, a.prototype.writeImpl = function (t) { this.parser.append(t); for (var e, r, n, i = []; (e = this.parser.readToken()) && !(r = u(e)) && !(n = c(e));) e = this.options.beforeWriteToken(e), e && i.push(e); this.writeStaticTokens(i), r && this.handleScriptToken(e), n && this.handleStyleToken(e) }, a.prototype.writeStaticTokens = function (t) { var e = this.buildChunk(t); if (e.actual) return e.html = this.proxyHistory + e.actual, this.proxyHistory += e.proxy, this.proxyRoot.innerHTML = e.html, h && (e.proxyInnerHTML = this.proxyRoot.innerHTML), this.walkChunk(), h && (e.actualInnerHTML = this.root.innerHTML), e }, a.prototype.buildChunk = function (t) { var e = this.actuals.length, r = [], i = [], o = []; return n(t, function (t) { var n = htmlParser.tokenToString(t); if (r.push(n), t.attrs) { if (!/^noscript$/i.test(t.tagName)) { var a = e++; i.push(n.replace(/(\/?>)/, " " + p + "id=" + a + " $1")), "ps-script" !== t.attrs.id && "ps-style" !== t.attrs.id && o.push("atomicTag" === t.type ? "" : "<" + t.tagName + " " + p + "proxyof=" + a + (t.unary ? " />" : ">")) } } else i.push(n), o.push("endTag" === t.type ? n : "") }), { tokens: t, raw: r.join(""), actual: i.join(""), proxy: o.join("") } }, a.prototype.walkChunk = function () { for (var r, n = [this.proxyRoot]; e(r = n.shift());) { var i = 1 === r.nodeType, o = i && t(r, "proxyof"); if (!o) { i && (this.actuals[t(r, "id")] = r, t(r, "id", null)); var a = r.parentNode && t(r.parentNode, "proxyof"); a && this.actuals[a].appendChild(r) } n.unshift.apply(n, s(r.childNodes)) } }, a.prototype.handleScriptToken = function (t) { var e = this.parser.clear(); if (e && this.writeQueue.unshift(e), t.src = t.attrs.src || t.attrs.SRC, t = this.options.beforeWriteToken(t)) { t.src && this.scriptStack.length ? this.deferredRemote = t : this.onScriptStart(t); var r = this; this.writeScriptToken(t, function () { r.onScriptDone(t) }) } }, a.prototype.handleStyleToken = function (t) { var e = this.parser.clear(); e && this.writeQueue.unshift(e), t.type = t.attrs.type || t.attrs.TYPE || "text/css", t = this.options.beforeWriteToken(t), t && this.writeStyleToken(t), e && this.write() }, a.prototype.writeStyleToken = function (t) { var e = this.buildStyle(t); this.insertStyle(e), t.content && (e.styleSheet && !e.sheet ? e.styleSheet.cssText = t.content : e.appendChild(this.doc.createTextNode(t.content))) }, a.prototype.buildStyle = function (t) { var e = this.doc.createElement(t.tagName); return e.setAttribute("type", t.type), i(t.attrs, function (t, r) { e.setAttribute(t, r) }), e }, a.prototype.insertStyle = function (t) { this.writeImpl('<span id="ps-style"/>'); var e = this.doc.getElementById("ps-style"); e.parentNode.replaceChild(t, e) }, a.prototype.onScriptStart = function (t) { t.outerWrites = this.writeQueue, this.writeQueue = [], this.scriptStack.unshift(t) }, a.prototype.onScriptDone = function (t) { return t !== this.scriptStack[0] ? void this.options.error({ message: "Bad script nesting or script finished twice" }) : (this.scriptStack.shift(), this.write.apply(this, t.outerWrites), void (!this.scriptStack.length && this.deferredRemote && (this.onScriptStart(this.deferredRemote), this.deferredRemote = null))) }, a.prototype.writeScriptToken = function (t, e) { var r = this.buildScript(t), n = this.shouldRelease(r), i = this.options.afterAsync; t.src && (r.src = t.src, this.scriptLoadHandler(r, n ? i : function () { e(), i() })); try { this.insertScript(r), (!t.src || n) && e() } catch (o) { this.options.error(o), e() } }, a.prototype.buildScript = function (t) { var e = this.doc.createElement(t.tagName); return i(t.attrs, function (t, r) { e.setAttribute(t, r) }), t.content && (e.text = t.content), e }, a.prototype.insertScript = function (t) { this.writeImpl('<span id="ps-script"/>'); var e = this.doc.getElementById("ps-script"); e.parentNode.replaceChild(t, e) }, a.prototype.scriptLoadHandler = function (t, e) { function r() { t = t.onload = t.onreadystatechange = t.onerror = null } function n() { r(), e() } function i(t) { r(), a(t), e() } var a = this.options.error; o(t, { onload: function () { n() }, onreadystatechange: function () { /^(loaded|complete)$/.test(t.readyState) && n() }, onerror: function () { i({ message: "remote script failed " + t.src }) } }) }, a.prototype.shouldRelease = function (t) { var e = /^script$/i.test(t.nodeName); return !e || !!(this.options.releaseAsync && t.src && t.hasAttribute("async")) }, a }(); f.postscribe = function () { function e() { var t, e = c.shift(); e && (t = m(e), t.afterDequeue(), e.stream = n.apply(null, e), t.afterStreamStart()) } function n(r, n, a) { function c(t) { t = a.beforeWrite(t), l.write(t), a.afterWrite(t) } l = new g(r, a), l.id = u++ , l.name = a.name || l.id, i.streams[l.name] = l; var p = r.ownerDocument, f = { close: p.close, open: p.open, write: p.write, writeln: p.writeln }; o(p, { close: t, open: t, write: function () { return c(s(arguments).join("")) }, writeln: function () { return c(s(arguments).join("") + "\n") } }); var h = l.win.onerror || t; return l.win.onerror = function (t, e, r) { a.error({ msg: t + " - " + e + ":" + r }), h.apply(l.win, arguments) }, l.write(n, function () { o(p, f), l.win.onerror = h, a.done(), l = null, e() }), l } function i(n, i, o) { r(o) && (o = { done: o }), o = a(o, p), n = /^#/.test(n) ? f.document.getElementById(n.substr(1)) : n.jquery ? n[0] : n; var s = [n, i, o]; return n.postscribe = { cancel: function () { s.stream ? s.stream.abort() : s[1] = t } }, o.beforeEnqueue(s), c.push(s), l || e(), n.postscribe } var u = 0, c = [], l = null; return o(i, { streams: {}, queue: c, WriteStream: g }) }() } }();

String.prototype.format = function () {
    var formatted = this;
    for (var arg in arguments) {
        formatted = formatted.replace("{" + arg + "}", arguments[arg]);
    }
    return formatted;
};

var MSHelpers = {

    configurePushUpBillboard: function (id, width, height) {
        var d = new Date();
        var tz = (d.getTimezoneOffset());
        console.log("Pushup billboard " + id + " adcall at " + d.toUTCString());

        postscribe(document.getElementById("ms-pb-ad"), '<script src="' + ((window.location.protocol.indexOf("https") > -1) ? "https://" : "http://") + "ad.360yield.com/adj?p=" + id + '&w=' + width + '&h=' + height + '&tz=' + tz + '"><\/script>', {
            done: function () { }
        });
    }





}


var MSRectangle = {

    allowsFloatingRectangle: true,
    loadedRectangeWidth: 0,
    loadedRectangleHeight: 0,
    configureFloatingDFPRect: function (dfpBannerId) {

        var topWin = window.top;

        var $elm = jQuery('#' + dfpBannerId);
        var elementPosition = $elm.offset();

        var targ = $elm[0];
        targ.zIndex = "10000";

        var i = topWin.document.createElement("DIV");

        i.style.zIndex = "100000";
        i.className = "rect-close";
        i.style.display = "none";
        i.style.position = "absolute";
        i.style.right = "-10px";
        i.style.top = "-10px";
        i.style.width = "30px";
        i.style.height = "30px";
        i.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"
        i.style.backgroundColor = "rgb(100, 100, 100)"
        i.style.borderRadius = "50%";

        i.onclick = function () {
            topWin.MSRectangle.allowsFloatingRectangle = false;


            $elm.find(".rect-close").css("display", "none");
            $elm.css({ position: 'relative', right: '', bottom: '', zIndex: '' });
        }
        targ.appendChild(i);

        var e = topWin.document.createElement("IMG");
        e.className = "rect-close-img";
        e.style.width = "30px";
        e.style.height = "30px";
        e.style.position = "absolute";
        e.style.top = "calc(50% - 15px)";
        e.style.left = "calc(50% - 15px)";
        e.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAyElEQVRYw+2WSwrDMAwFBTlkfqdLakIPaZguCiWNQyzZyqLFb23PgLAfEmlpafnb0BHo1adnVjob/glEnYKZCGwGBYF3IoMSD/DQC4bPpYxih4/6kaoVxfhEMbrjRUQYrxTV+GuFCz5RTO54ERGmo8IVnyrc8YnCH38Yyx34ROGPv11w84i+Xk7UN20Jvtc3bRHeVuZFeF3TVuHzTVuNd1HkO+e8ad3w503riq9QsOr/606xWBavzbx4BetuZ1sdFxO+paXlx/ICYTRfOPrpBZkAAAAASUVORK5CYII='
        i.appendChild(e);


        jQuery(window).scroll(function () {



            if (!(MSRectangle.loadedRectangeWidth > 200 && MSRectangle.loadedRectangleHeight > 200)) {

                var images = Array.prototype.slice.call(targ.getElementsByTagName('img'));
                var iframes = Array.prototype.slice.call(targ.getElementsByTagName('iframe'));
                var ins = Array.prototype.slice.call(targ.getElementsByTagName('ins'));
                var canvas = Array.prototype.slice.call(targ.getElementsByTagName('canvas'));
                var div = Array.prototype.slice.call(targ.getElementsByTagName('div'));
                var elements = images.concat(iframes.concat(ins.concat(canvas.concat(div))));

                for (var i = 0; i < elements.length; i++) {


                    var height = elements[i].offsetHeight;
                    var width = elements[i].offsetWidth;

                    if (MSRectangle.loadedRectangleHeight < height) {

                        MSRectangle.loadedRectangleHeight = height;
                    }

                    if (MSRectangle.loadedRectangeWidth < width) {

                        MSRectangle.loadedRectangeWidth = width;
                    }


                }


            }



            if (((MSRectangle.loadedRectangeWidth > 200 && MSRectangle.loadedRectangleHeight > 50))) {

                if (MSRectangle.loadedRectangeWidth > 400 && MSRectangle.loadedRectangleHeight > 400) {
                    console.log("rectangle ad to big to float: return");
                    return;
                }

                if (jQuery(window).scrollTop() > elementPosition.top && topWin.MSRectangle.allowsFloatingRectangle) {

                    $elm.find(".rect-close").css("display", "block");
                    $elm.css({ position: 'fixed', right: '20px', bottom: '20px', zIndex: '12000' });

                } else {
                    $elm.find(".rect-close").css("display", "none");
                    $elm.css({ position: 'relative', right: '', bottom: '', zIndex: '' });

                }
            }









        });
    },


}


var MSWallpaper = {
    wallpaperUnits: Array(),
    adSlots: Array(),
    windowReady: false,
    refreshSeconds: 0,
    loadBackUp: function () {

        if (!MSWallpaper.windowReady) {
            jQuery(window).ready(function () {
                MSWallpaper.callAds();

                if (MSWallpaper.refreshSeconds > 0) {
                    setInterval(function () {
                        MSWallpaper.callAds()
                    }, MSWallpaper.refreshSeconds * 1000);
                }
            })
        } else {
            MSWallpaper.callAds();

            if (MSWallpaper.refreshSeconds > 0) {
                setInterval(function () {
                    MSWallpaper.callAds()
                }, MSWallpaper.refreshSeconds * 1000);
            }
        }





    },
    isInViewport: function (element) {
        var isHidden = document.hidden || document.msHidden || document.webkitHidden || document.mozHidden;
        if (isHidden) {
            return false;
        }
        var rect = element.getBoundingClientRect();
        return rect.bottom > 0 &&
            rect.right > 0 &&
            rect.left < (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */ &&
            rect.top < (window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */;
    },
    callAds: function () {
        console.log("MSWallpaper: callAds with " + MSWallpaper.wallpaperUnits.length + " ads at " + new Date().toUTCString());
        for (var i = 0; i < MSWallpaper.wallpaperUnits.length; i++) {

            var backFillUnit = MSWallpaper.wallpaperUnits[i];
            var el = jQuery("#" + backFillUnit);

            if (el.length > 0) {
                var id = jQuery(el).attr('data-id');

                var d = new Date();
                var googleDFP = el.attr('data-googledfp') == "true";

                if (MSWallpaper.isInViewport(el[0])) {

                    if (googleDFP) {
                        if (el.find("#" + id).length == 0) {
                            var googleContainer = document.createElement("DIV");
                            googleContainer.id = id;
                            el.append(googleContainer);
                            console.log("created google dfp container");

                            if (googleDFP) {
                                if (googletag.display) {
                                    googletag.display(id);
                                } else {
                                    googletag.cmd.push(function () {
                                        googletag.display(dataId);
                                    })
                                }


                            }


                            console.log("Sidebar " + id + " loaded at " + d.toUTCString());
                        } else {
                            var slot = null;
                            console.log(MSWallpaper.adSlots);
                            for (var x = 0; x < MSWallpaper.adSlots.length; x++) {


                                var thisSlot = MSWallpaper.adSlots[x];
                                if (thisSlot.getSlotElementId() == id) {
                                    slot = thisSlot;
                                    break;
                                }

                            }

                            if (!slot) {
                                console.log("Massarius.js: the defined adslot was not found!");
                            }
                            googletag.pubads().refresh([slot]);

                            console.log("Sidebar " + id + " loaded at " + d.toUTCString());
                        }
                    } else {
                        var tz = (d.getTimezoneOffset());
                        console.log("Sidebar " + id + " loaded at " + d.toUTCString());
                        var width = jQuery(el).attr('data-width');
                        var height = jQuery(el).attr('data-height');
                        el.empty();
                        postscribe(el, '<script src="' + ((window.location.protocol.indexOf("https") > -1) ? "https://" : "http://") + "ad.360yield.com/adj?p=" + id + '&w=' + width + '&h=' + height + '&tz=' + tz + '"><\/script>', {
                            done: function () { }
                        });
                    }

                }



            } else {
                console.log("Sidebar " + id + " not loaded because it was either not visible or not inview at " + d.toUTCString());
            }
        }
    },
    setRefreshRate: function (seconds) {
        MSWallpaper.refreshSeconds = seconds;
    },
    configure: function (units) {
        console.log("MSWallpaper configure called at: " + new Date().toUTCString());
        MSWallpaper.wallpaperUnits = units;
    }
}

//Refresh

var MSRefresh = {
    elementIdsThatShouldRefresh: Array(),
    refreshSeconds: 60,
    adSlots: Array(),
    interval: null,
    setRefreshRate: function (seconds) {
        MSRefresh.refreshSeconds = seconds;
    },
    registerForRefresh: function (elementId) {
        MSRefresh.elementIdsThatShouldRefresh.push(elementId);
    },
    isInViewport: function (element) {
        var isHidden = document.hidden || document.msHidden || document.webkitHidden || document.mozHidden;
        if (isHidden) {
            return false;
        }
        var rect = element.getBoundingClientRect();
        return rect.bottom > 0 &&
            rect.right > 0 &&
            rect.left < (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */ &&
            rect.top < (window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */;
    },
    startRefreshing: function () {
        console.log("Massarius.js: start refreshing");
        if (MSRefresh.interval) {
            clearInterval(MSRefresh.interval);
        }
        MSRefresh.interval = setInterval(function () {
            for (var i = 0; i < MSRefresh.elementIdsThatShouldRefresh.length; i++) {
                var elementId = MSRefresh.elementIdsThatShouldRefresh[i];
                var element = jQuery("#" + elementId);
                if (element.is(":visible")) {
                    if (MSRefresh.isInViewport(element[0])) {
                        var slot = null;
                        for (var x = 0; x < MSRefresh.adSlots.length; x++) {
                            var thisSlot = MSRefresh.adSlots[x];
                            if (thisSlot.getSlotElementId() == elementId) {
                                slot = thisSlot;
                                break;
                            }

                        }
                        if (!slot) {
                            console.log("Massarius.js: the defined adslot was not found!");
                        }
                        googletag.pubads().refresh([slot]);
                        console.log("Massarius.js: did refresh unit with elementId: " + elementId);
                    }
                }
            }
        }, MSRefresh.refreshSeconds * 1000);
    }
}








var mss = {
    defaultOffset: 200,
    loaded: [],
    checkForAd: function (element, st) {
        var dataId;

        var googleDFP = element.classList.contains("massarius-dfp-unit");
        if (!googleDFP) {
            dataId = jQuery(element).attr('data-id');
        } else {
            dataId = element.id;
        }


        var smartAds = element.classList.contains("massarius-sas-unit");
        if (smartAds) {
            dataId = element.id;
        }

        var of = parseInt(jQuery(element).attr('data-offset'));
        if (!jQuery(element).attr('data-offset')) { of = mss.defaultOffset; }
        var top = jQuery(element).offset().top;
        var checkPoint = top - of;





        if (((st + jQuery(window).height()) > checkPoint) && jQuery.inArray(dataId, mss.loaded) < 0) {
            mss.loaded.push(dataId);

            if (!smartAds) {
                mss.showAd(dataId, googleDFP);
            } else {

                mss.showSmartAd(element);
            }

        }
    },
    cS: function () {
        var st = jQuery(window).scrollTop();

        jQuery('.massarius-unit').each(function () {
            mss.checkForAd(this, st);
        })

        jQuery('.massarius-dfp-unit').each(function () {
            mss.checkForAd(this, st);
        });

        jQuery('.massarius-sas-unit').each(function () {
            mss.checkForAd(this, st);
        });

    },
    showAd: function (dataId, googleDFP) {

        if (googleDFP) {
            if (googletag.display) {
                googletag.display(dataId);
            } else {
                googletag.cmd.push(function () {
                    googletag.display(dataId);
                })
            }
            return;
        }

        var el = jQuery('.massarius-unit[data-id="' + dataId + '"]');

        var id = parseInt(jQuery(el).attr('data-id'));
        var tz = (new Date().getTimezoneOffset());
        var width = jQuery(el).attr('data-width');
        var height = jQuery(el).attr('data-height');

        postscribe(el, '<script src="' + ((window.location.protocol.indexOf("https") > -1) ? "https://" : "http://") + "ad.360yield.com/adj?p=" + id + '&w=' + width + '&h=' + height + '&tz=' + tz + '"><\/script>', {
            done: function () { }
        });
    },
    showSmartAd: function (element) {

        var isLoaded = jQuery(element).attr('data-isloaded');
        if (!isLoaded) {

            var siteId = parseInt(jQuery(element).attr('data-siteid'));
            var pageId = parseInt(jQuery(element).attr('data-pageid'));
            var formatId = parseInt(jQuery(element).attr('data-formatid'));
            var nwId = parseInt(jQuery(element).attr('data-nwid'));
            var tagId = parseInt(element.id);

            var timeStamp = new Date().getTime();
            var screenHeight = screen.height;
            var screenWidth = screen.width;
            var pageUrl = encodeURIComponent(window.location.href);



            var url = '//www3.smartadserver.com/ac?nwid={0}&siteid={1}&pgid={2}&fmtid={3}&async=1&visit=m&tmstp={4}&orgfmtid={5}&tag={6}&sh={7}&sw={8}&pgDomain={9}&noadcbk=sas.noad';
            url = url.format(nwId, siteId, pageId, formatId, timeStamp, formatId, tagId, screenHeight, screenWidth, pageUrl);


            console.log("Massarius.js loadAd type SmartAdServer with nwId: " + nwId + " siteId: " + siteId + " pageId: " + pageId + " formatId: " + formatId + " tagId: " + tagId);
            console.log("SmartAdServer script url: " + url);

            element.setAttribute("data-isloaded", "true");
            var scriptSrc = '<script type="text/javascript" src="' + url + '" async="true"></script>';
            postscribe(element, scriptSrc, {
                done: function () { }
            });
        }





    }
}

var msv = {
    timer: null,
    makeSpotXContainer: function (parent, spotxChannelId, videoWidth, videoHeight, backFill, mute) {
        console.log("makeSpotXContainer");
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "//js.spotx.tv/easi/v1/" + spotxChannelId + ".js";

        window.spotx_ad_done_function = function (spotx_ad_found) {
            backFill();
        };


        s.setAttribute("data-spotx_channel_id", spotxChannelId);
        s.setAttribute("data-spotx_ad_unit", "incontent");

        if (videoWidth && videoHeight) {
            s.setAttribute("data-spotx_content_width", videoWidth);
            s.setAttribute("data-spotx_content_height", videoHeight);
        }

        s.setAttribute("data-spotx_content_type", "video");
        s.setAttribute("data-custom", "{&quot;Position&quot;:&quot;Outstream&quot;}");
        s.setAttribute("data-spotx_collapse", "1");
        s.setAttribute("data-spotx_autoplay", "1");
        s.setAttribute("data-spotx_ad_max_duration", "30");
        s.setAttribute("data-spotx_https", window.location.protocol == "https" ? "1" : "0");



        mute = true;

		s.setAttribute("data-spotx_ad_mute", "1");
		
		s.setAttribute("data-spotx_blocked_autoplay_override_mode", "1");

		
        var phone = jQuery(window).width() < 500;
        if (phone) {
            s.setAttribute("data-spotx_ad_volume", "0");
            s.setAttribute("data-spotx_unmute_on_mouse", "1");
        } else {
            if (mute) {
                s.setAttribute("data-spotx_ad_volume", "0");
                s.setAttribute("data-spotx_unmute_on_mouse", "0");
				  
            } else {
                s.setAttribute("data-spotx_unmute_on_mouse", "1");
            }
        }

        try {
            if (s) {
                parent.append(s);
            } else {
                console.log("Massarius.js: Script tag undefined")
                backFill();
            }
        } catch (err) {
            console.log("Massarius.js: SpotX failed to load with error: " + err);
            backFill();
        }

        s.onerror = function () {
            ;
            console.log("Massarius.js: SpotX script failed to load")
            backFill();
        }



    },
    registerVideoBackFill: function () {
        console.log("registerVideoBackFill");
        var adEl = jQuery('#massarius-vba');
        console.log(adEl.length);
        var mu = document.createElement('div');
        mu.id = "massarius-vba-backfill";
        mu.setAttribute('class', 'massarius-unit-video-backfill');
        mu.setAttribute('data-id', jQuery(adEl).attr('data-id'));
        mu.setAttribute('data-width', jQuery(adEl).attr('data-width'));
        mu.setAttribute('data-height', jQuery(adEl).attr('data-height'));

        var shouldMute = jQuery(adEl).data('mute') == "true" || jQuery(adEl).data('mute') == "1";
        var spotXChannelId = jQuery(adEl).data('spotxchannelid');
        var spotXWidth = jQuery(adEl).data('spotxwidth');
        var spotXHeight = jQuery(adEl).data('spotxheight');
        var isSticky = jQuery(adEl).data("sticky") == "true" || jQuery(adEl).data("sticky") == "1";


        adEl.append(mu);
        if (spotXChannelId) {

            console.log("VBA has spotx id");
            var content = document.createElement("DIV");
            content.id = spotXChannelId + "-content";
            var banner = document.createElement("DIV");
            banner.id = spotXChannelId + "-spotx-banner";
            adEl.append(content);
            adEl.append(banner);

            var responsiveUnit = document.createElement("P");

            if (isSticky) {
                responsiveUnit.className = "massarius-vba-vcontent";
                responsiveUnit.id = content.id + "-vcontent";
            }

            adEl.append(responsiveUnit);

            msv.makeSpotXContainer(responsiveUnit, spotXChannelId, spotXWidth, spotXHeight, function () {
                msv.showAlt();
            }, shouldMute);

        } else {
            window.spotx_ad_done_function = function (spotx_ad_found) {
                msv.showAlt();
            };

        }



        var googleDFP = adEl.attr('data-googledfp') == "true";
        if (googleDFP) {
            var id = jQuery(adEl).attr('data-id');
            var googleContainer = document.createElement("DIV");
            googleContainer.id = id;
            mu.appendChild(googleContainer);
        }


    },

    showAlt: function (t) {
        console.log("showAlt");
        var adEl = jQuery('#massarius-vba');
        var googleDFP = adEl.attr('data-googledfp') == "true";
        var id = jQuery(adEl).attr('data-id');
        var width = jQuery(adEl).attr('data-width');
        var height = jQuery(adEl).attr('data-height');
        var backFill = jQuery('#massarius-vba-backfill');

        var tz = (new Date().getTimezoneOffset());
        var isSet = backFill.attr("data-adset") == "true";
        if (!isSet) {
            backFill.attr("data-adset", "true");
            if (googleDFP) {
                if (googletag.display) {
                    googletag.display(id);
                    console.log("Massarius.js: backfill loaded with google DFP tag: " + id);
                } else {
                    googletag.cmd.push(function () {
                        googletag.display(id);
                        console.log("Massarius.js: backfill loaded with google DFP tag: " + id);
                    })
                }

            } else {

                console.log("Massarius.js: backfill loaded with Improve placement ID: " + id);
                var scriptSrc = '<script src="' + ((window.location.protocol.indexOf("https") > -1) ? "https://" : "http://") + "ad.360yield.com/adj?p=" + id + '&w=' + width + '&h=' + height + '&tz=' + tz + '"><\/script>';
                console.log("Massarius.js: request 360Yield script tag " + scriptSrc);

                postscribe(backFill, scriptSrc, {
                    done: function () { }
                });
            }
        }
    }
}

jQuery(document).ready(function () {
    mss.cS();


    MSWallpaper.windowReady = true;

    var $vba = jQuery("#massarius-vba");
    
    var top;
    if ($vba.length > 0) {
        msv.registerVideoBackFill();
        top = $vba.offset().top;
    }


    jQuery(document).scroll(function () {
        mss.cS();

        if ($vba.length > 0) {

            jQuery(".massarius-vba-vcontent").toggleClass("is-sticky", jQuery(window).scrollTop() > top);
        }

    });

});


try {
    if (googletag) {
        if (googletag.cmd) {
            googletag.cmd.push(function () {
                googletag.pubads().addEventListener('slotRenderEnded', function (event) {
                    var slot = event.slot;
                    MSRefresh.adSlots.push(slot);
                    MSWallpaper.adSlots.push(slot);

                });
            })
        }
    }
} catch (err) {
    console.log(err);
}