/*! Html5 Storage jQuery Plugin - v1.0 - 2013-01-19
 * https://github.com/artberri/jquery-html5storage
 * Copyright (c) 2013 Alberto Varela; Licensed MIT */
(function(e, t) {
    "use strict";
    var n = ["localStorage", "sessionStorage"],
        r = [];
    t.each(n, function(n, i) {
        try {
            r[i] = i in e && e[i] !== null
        } catch (s) {
            r[i] = !1
        }
        t[i] = {
            settings: {
                cookiePrefix: "html5fallback:" + i + ":",
                cookieOptions: {
                    path: "/",
                    domain: document.domain,
                    expires: "localStorage" === i ? {
                        expires: 365
                    } : undefined
                }
            },
            getItem: function(n) {
                var s;
                return r[i] ? s = e[i].getItem(n) : s = t.cookie(this.settings.cookiePrefix + n), s
            },
            setItem: function(n, s) {
                return r[i] ? e[i].setItem(n, s) : t.cookie(this.settings.cookiePrefix + n, s, this.settings.cookieOptions)
            },
            removeItem: function(n) {
                if (r[i]) return e[i].removeItem(n);
                var s = t.extend(this.settings.cookieOptions, {
                    expires: -1
                });
                return t.cookie(this.settings.cookiePrefix + n, null, s)
            },
            clear: function() {
                if (r[i]) return e[i].clear();
                var n = new RegExp("^" + this.settings.cookiePrefix, ""),
                    s = t.extend(this.settings.cookieOptions, {
                        expires: -1
                    });
                document.cookie && document.cookie !== "" && t.each(document.cookie.split(";"), function(e, r) {
                    n.test(r = t.trim(r)) && t.cookie(r.substr(0, r.indexOf("=")), null, s)
                })
            }
        }
    })
})(window, jQuery);
