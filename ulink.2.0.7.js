!(function () {
  var f, g, h, i, ma;
  if (
    ("function" != typeof Object.create &&
      (Object.create = function (t) {
        function r() {}
        return (r.prototype = t), new r();
      }),
    Object.keys ||
      (Object.keys =
        ((f = Object.prototype.hasOwnProperty),
        (g = !{ toString: null }.propertyIsEnumerable("toString")),
        (h = [
          "toString",
          "toLocaleString",
          "valueOf",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "constructor",
        ]),
        (i = h.length),
        function (t) {
          var r = [];
          for (var e in t) f.call(t, e) && r.push(e);
          if (g) for (var n = 0; n < i; n++) f.call(t, h[n]) && r.push(h[n]);
          return r;
        })),
    Array.prototype.forEach ||
      (Array.prototype.forEach = function (t) {
        var r, e;
        if (null == this) throw new TypeError("this is null or not defined");
        var n = Object(this),
          o = n.length >>> 0;
        if ("function" != typeof t)
          throw new TypeError(t + " is not a function");
        for (1 < arguments.length && (r = arguments[1]), e = 0; e < o; ) {
          var i;
          e in n && ((i = n[e]), t.call(r, i, e, n)), e++;
        }
      }),
    Array.prototype.filter ||
      (Array.prototype.filter = function (t, r) {
        "use strict";
        if (("Function" != typeof t && "function" != typeof t) || !this)
          throw new TypeError();
        var e = this.length >>> 0,
          n = new Array(e),
          o = this,
          i = 0,
          l = -1;
        if (void 0 === r)
          for (; ++l !== e; ) l in this && t(o[l], l, o) && (n[i++] = o[l]);
        else
          for (; ++l !== e; )
            l in this && t.call(r, o[l], l, o) && (n[i++] = o[l]);
        return (n.length = i), n;
      }),
    Array.prototype.indexOf ||
      (Array.prototype.indexOf = (function (i, l, u) {
        "use strict";
        return function (t, r) {
          if (null == this)
            throw TypeError(
              "Array.prototype.indexOf called on null or undefined"
            );
          var e = i(this),
            n = e.length >>> 0,
            o = u(0 | r, n);
          if (o < 0) o = l(0, n + o);
          else if (n <= o) return -1;
          if (void 0 === t) {
            for (; o !== n; ++o) if (void 0 === e[o] && o in e) return o;
          } else if (t != t) {
            for (; o !== n; ++o) if (e[o] != e[o]) return o;
          } else for (; o !== n; ++o) if (e[o] === t) return o;
          return -1;
        };
      })(Object, Math.max, Math.min)),
    Array.isArray ||
      (Array.isArray = function (t) {
        return "[object Array]" === Object.prototype.toString.call(t);
      }),
    !window.getComputedStyle)
  ) {
    function c(t, r, e, n) {
      var o = r[e];
      return (
        (r = parseFloat(o)),
        (o = o.split(/\d/)[0]),
        (n =
          null !== n
            ? n
            : /%|em/.test(o) && t.parentElement
            ? c(t.parentElement, t.parentElement.currentStyle, "fontSize", null)
            : 16),
        (t =
          "fontSize" == e
            ? n
            : /width/i.test(e)
            ? t.clientWidth
            : t.clientHeight),
        "em" == o
          ? r * n
          : "in" == o
          ? 96 * r
          : "pt" == o
          ? (96 * r) / 72
          : "%" == o
          ? (r / 100) * t
          : r
      );
    }
    function a(t, r) {
      var e = r + "Top" + (i = "border" == r ? "Width" : ""),
        n = r + "Right" + i,
        o = r + "Bottom" + i,
        i = r + "Left" + i;
      t[r] = (
        ((t[e] == t[n]) == t[o]) == t[i]
          ? [t[e]]
          : t[e] == t[o] && t[i] == t[n]
          ? [t[e], t[n]]
          : t[i] == t[n]
          ? [t[e], t[n], t[o]]
          : [t[e], t[n], t[o], t[i]]
      ).join(" ");
    }
    function b(t) {
      var r,
        e = t.currentStyle,
        n = c(t, e, "fontSize", null);
      for (r in e)
        /width|height|margin.|padding.|border.+W/.test(r) && "auto" !== this[r]
          ? (this[r] = c(t, e, r, n) + "px")
          : "styleFloat" === r
          ? (this.float = e[r])
          : (this[r] = e[r]);
      return (
        a(this, "margin"),
        a(this, "padding"),
        a(this, "border"),
        (this.fontSize = n + "px"),
        this
      );
    }
    (b.prototype = {}),
      (window.getComputedStyle = function (t) {
        return new b(t);
      });
  }
  if (
    (window.JSON ||
      ((window.JSON = {}),
      (JSON.stringify =
        JSON.stringify ||
        function (t) {
          var r = typeof t;
          if ("object" != r || null === t)
            return "string" == r && (t = '"' + t + '"'), String(t);
          var e,
            n,
            o = [],
            i = t && t.constructor == Array;
          for (e in t)
            "string" == (r = typeof (n = t[e]))
              ? (n = '"' + n + '"')
              : "object" == r && null !== n && (n = JSON.stringify(n)),
              o.push((i ? "" : '"' + e + '":') + String(n));
          return (i ? "[" : "{") + String(o) + (i ? "]" : "}");
        }),
      (JSON.parse =
        JSON.parse ||
        function (str) {
          return "" === str && (str = '""'), eval("var p=" + str + ";"), p;
        })),
    !window.Element)
  ) {
    var obj = { prototype: {} };
    window.Element = obj;
  }
  if (!document.querySelectorAll) {
    var style = document.createStyleSheet();
    document.querySelectorAll = function (t, r, e, n, o) {
      (o = document.all), (r = []);
      for (
        e = (t = t.replace(/\[for\b/gi, "[htmlFor").split(",")).length;
        e--;

      ) {
        for (style.addRule(t[e], "k:v"), n = o.length; n--; )
          o[n].currentStyle.k && r.push(o[n]);
        style.removeRule(0);
      }
      return r;
    };
  }
  if (
    (document.querySelector ||
      (document.querySelector = function (t) {
        var r = document.querySelectorAll(t);
        return r.length ? r[0] : null;
      }),
    (window.querySelectorAll =
      ((ma = 1e4),
      document.createElement("div").querySelectorAll
        ? function (t, r) {
            return t.querySelectorAll(r);
          }
        : function (t, r) {
            var e = "" === t.id;
            e && (++ma, (t.id = "__qsa" + ma));
            try {
              return document.querySelectorAll("#" + t.id + " " + r);
            } finally {
              e && (t.id = "");
            }
          })),
    !Function.prototype.bind)
  ) {
    var slice = Array.prototype.slice;
    Function.prototype.bind = function (r) {
      var e = this,
        n = slice.call(arguments, 1);
      return function () {
        var t = slice.call(arguments);
        return (t = n.concat(t)), e.apply(r, t);
      };
    };
  }
  var origDefineProperty = Object.defineProperty,
    arePropertyDescriptorsSupported = function () {
      var t = {};
      try {
        for (var r in (origDefineProperty(t, "x", { enumerable: !1, value: t }),
        t))
          return !1;
        return t.x === t;
      } catch (t) {
        return !1;
      }
    },
    supportsDescriptors =
      origDefineProperty && arePropertyDescriptorsSupported();
  supportsDescriptors ||
    (Object.defineProperty = function (t, r, e) {
      if (origDefineProperty && 1 == t.nodeType)
        return origDefineProperty(t, r, e);
      t[r] = e.value || (e.get && e.get());
    }),
    document.head || (document.head = document.getElementsByTagName("head")[0]),
    console ||
      (console = {
        log: function () {},
        warn: function () {},
        error: function () {},
      });
})();
!(function webpackUniversalModuleDefinition(e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define("ulink", [], t)
    : "object" == typeof exports
    ? (exports["ulink"] = t())
    : (e["ulink"] = t());
})(window, function () {
  return (function (c) {
    function e(e) {
      for (var t, n, o = e[0], i = e[1], r = 0, a = []; r < o.length; r++)
        (n = o[r]),
          Object.prototype.hasOwnProperty.call(l, n) && l[n] && a.push(l[n][0]),
          (l[n] = 0);
      for (t in i) Object.prototype.hasOwnProperty.call(i, t) && (c[t] = i[t]);
      for (s && s(e); a.length; ) a.shift()();
    }
    var n = {},
      l = { 7: 0 };
    function u(e) {
      if (n[e]) return n[e].exports;
      var t = (n[e] = { i: e, l: !1, exports: {} });
      return c[e].call(t.exports, t, t.exports, u), (t.l = !0), t.exports;
    }
    (u.e = function (i) {
      var e = [],
        n = l[i];
      if (0 !== n)
        if (n) e.push(n[2]);
        else {
          var t = new Promise(function (e, t) {
            n = l[i] = [e, t];
          });
          e.push((n[2] = t));
          var o,
            r = document.createElement("script");
          (r.charset = "utf-8"),
            (r.timeout = 120),
            u.nc && r.setAttribute("nonce", u.nc),
            (r.src = (function s(e) {
              return (
                u.p +
                "js/" +
                ({
                  0: "captcha",
                  1: "chatRoom",
                  2: "h5pay",
                  3: "relationSelector",
                  4: "roleselector",
                  5: "roleselector_css",
                  6: "share",
                }[e] || e) +
                ".2.0.7.js"
              );
            })(i));
          var a = new Error();
          o = function (e) {
            (r.onerror = r.onload = null), clearTimeout(c);
            var t = l[i];
            if (0 !== t) {
              if (t) {
                var n = e && ("load" === e.type ? "missing" : e.type),
                  o = e && e.target && e.target.src;
                (a.message =
                  "Loading chunk " + i + " failed.\n(" + n + ": " + o + ")"),
                  (a.name = "ChunkLoadError"),
                  (a.type = n),
                  (a.request = o),
                  t[1](a);
              }
              l[i] = undefined;
            }
          };
          var c = setTimeout(function () {
            o({ type: "timeout", target: r });
          }, 12e4);
          (r.onerror = r.onload = o), document.head.appendChild(r);
        }
      return Promise.all(e);
    }),
      (u.m = c),
      (u.c = n),
      (u.d = function (e, t, n) {
        u.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (u.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (u.t = function (t, e) {
        if ((1 & e && (t = u(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (
          (u.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var o in t)
            u.d(
              n,
              o,
              function (e) {
                return t[e];
              }.bind(null, o)
            );
        return n;
      }),
      (u.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return u.d(t, "a", t), t;
      }),
      (u.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (u.p = "//ulink.qq.com/ulinksdk/dist/"),
      (u.oe = function (e) {
        throw (console.error(e), e);
      });
    var t = (window["webpackJsonpulink"] = window["webpackJsonpulink"] || []),
      o = t.push.bind(t);
    (t.push = e), (t = t.slice());
    for (var i = 0; i < t.length; i++) e(t[i]);
    var s = o;
    return u((u.s = 79));
  })([
    function (e, t, n) {
      "use strict";
      function o(t) {
        return function (e) {
          return {}.toString.call(e) == "[object " + t + "]";
        };
      }
      t.isType = o;
      var i = (t.isObject = function i(e) {
        return e && o("Object")(e);
      });
      (t.isArray = Array.isArray || o("Array")),
        (t.isFunction = o("Function")),
        (t.isUndefined = function (e) {
          return o("Undefined")(e) || e === undefined;
        }),
        (t.isBoolean = o("Boolean")),
        (t.isNumber = o("Number"));
      function r(e) {
        if (!e) return e;
        e += "";
        for (
          var t,
            n = [
              "3c",
              "3e",
              "27",
              "22",
              "28",
              "29",
              "60",
              { format: "script{}", chr: "3a" },
            ],
            o = [],
            i = [],
            r = "{}",
            a = 0;
          a < n.length;
          a++
        )
          (t =
            "string" == typeof n[a]
              ? ((r = "{}"), n[a])
              : ((r = n[a].format), n[a].chr)),
            o.push(r.replace("{}", "\\u00" + t)),
            o.push(r.replace("{}", "%" + t)),
            o.push(r.replace("{}", "%25" + t)),
            i.push(r.replace("{}", "&#x" + t + ";")),
            i.push(r.replace("{}", "%26%23x" + t + "%3B")),
            i.push(r.replace("{}", "%2526%2523x" + t + "%253B"));
        for (a = 0; a < o.length; a++)
          e = e.replace(new RegExp(o[a], "gi"), i[a]);
        return (e = e.replace(
          /script[\u000d\u000a\u0020]+\:/i,
          "script&#x3a;"
        ));
      }
      (t.isInArray = function a(e, t) {
        for (var n = 0; n < e.length; n++) if (e[n] == t) return !0;
        return !1;
      }),
        (t.extend = function c(e, t, n) {
          var o = void 0;
          if (!t) return e;
          if (!e) return t;
          for (o in t)
            e !== t[o] &&
              (i(t[o]) && i(e[o]) && n ? c(e[o], t[o], n) : (e[o] = t[o]));
          return e;
        }),
        (t.unSerialize = function s(e, t) {
          if (((t = t || 0), !(e = e.toString()))) return {};
          var n = {},
            o = e.split("&");
          if (0 == o.length) return n;
          for (var i = 0; i < o.length; i++) {
            if (o[i])
              if (2 <= o[i].split("=").length) {
                var r = o[i].substr(0, o[i].indexOf("=")),
                  a = o[i].substr(o[i].indexOf("=") + 1);
                if (((a = a || ""), r))
                  if (0 === t)
                    try {
                      n[r] = decodeURIComponent(a);
                    } catch (c) {
                      n[r] = a;
                    }
                  else n[r] = a;
              }
          }
          return n;
        }),
        (t.serialize = function l(e, t) {
          if (void 0 === e || "function" == typeof e) return "";
          if ("number" == typeof e || "string" == typeof e) return e;
          if ("boolean" == typeof e) return e ? "1" : "0";
          var n = [];
          for (var o in e) {
            var i = e[o];
            (t && ~["", undefined, null].indexOf(i)) || n.push(o + "=" + e[o]);
          }
          return n.join("&");
        }),
        (t.xssFilter = r),
        (t.xssFilterWxNickName = function u(e) {
          if (!e) return e;
          var t = (e += "").match(
              /\<span\sclass\=\"emoji\semoji[0-9a-z]+\"\>\<\/span\>/g
            ),
            n = "",
            o = "{tag_" + new Date().getTime() + "}";
          if (t && t.length) {
            n = r(
              e.replace(
                /\<span\sclass\=\"emoji\semoji[0-9a-z]+\"\>\<\/span\>/g,
                o
              )
            );
            for (var i = 0; i < t.length; i++) n = n.replace(o, t[i]);
            return n;
          }
          return r(e);
        }),
        (t.isLegalDomain = function d(e) {
          return !!(
            /^(https?:\/\/)?[\w\-.]+\.(qq)\.com($|\/|\\)/i.test(e) ||
            /^[\w][\w\/\.\-_%]+$/i.test(e) ||
            /^[\/\\][^\/\\]/i.test(e)
          );
        }),
        (t.isLegalPartnerDomain = function f(e) {
          return !!(
            /^(https?:\/\/)?[\w\-.]+\.(qq|douyu|huya|tencent)\.com($|\/|\\)/i.test(
              e
            ) ||
            /^[\w][\w\/\.\-_%]+$/i.test(e) ||
            /^[\/\\][^\/\\]/i.test(e)
          );
        }),
        (t.randomWord = function p(e) {
          for (
            var t = "",
              n = [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "a",
                "b",
                "c",
                "d",
                "e",
                "f",
                "g",
                "h",
                "i",
                "j",
                "k",
                "l",
                "m",
                "n",
                "o",
                "p",
                "q",
                "r",
                "s",
                "t",
                "u",
                "v",
                "w",
                "x",
                "y",
                "z",
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I",
                "J",
                "K",
                "L",
                "M",
                "N",
                "O",
                "P",
                "Q",
                "R",
                "S",
                "T",
                "U",
                "V",
                "W",
                "X",
                "Y",
                "Z",
              ],
              o = 0;
            o < e;
            o++
          )
            t += n[Math.round(Math.random() * (n.length - 1))];
          return t;
        }),
        (t.trim = function h(e) {
          return e.replace(/^(\s*)|(\s*)$/g, "");
        }),
        (t.getConfig = function m(e) {
          var t = window.ULINK_CFG;
          if (window.ULINK_CFG) return e ? t[e] : t;
          console.error(
            "\u8bf7\u5728\u9875\u9762\u4e0a\u5f15\u5165web\u914d\u7f6e\u6587\u4ef6"
          );
        }),
        (t.getProtocol = function g() {
          return (
            location.protocol ||
            location.href.substring(0, location.href.indexOf("//"))
          );
        });
    },
    function (e, t) {
      var n = (e.exports =
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math
          ? self
          : Function("return this")());
      "number" == typeof __g && (__g = n);
    },
    function (e, t) {
      var n = (e.exports = { version: "2.5.7" });
      "number" == typeof __e && (__e = n);
    },
    function (e, t, n) {
      var o = n(39)("wks"),
        i = n(29),
        r = n(1).Symbol,
        a = "function" == typeof r;
      (e.exports = function (e) {
        return o[e] || (o[e] = (a && r[e]) || (a ? r : i)("Symbol." + e));
      }).store = o;
    },
    function (e, t, n) {
      var o = n(9);
      e.exports = function (e) {
        if (!o(e)) throw TypeError(e + " is not an object!");
        return e;
      };
    },
    function (e, t, n) {
      var i = n(4),
        r = n(54),
        a = n(36),
        c = Object.defineProperty;
      t.f = n(10)
        ? Object.defineProperty
        : function (e, t, n) {
            if ((i(e), (t = a(t, !0)), i(n), r))
              try {
                return c(e, t, n);
              } catch (o) {}
            if ("get" in n || "set" in n)
              throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e;
          };
    },
    function (e, t, n) {
      "use strict";
      var i = n(31)["default"],
        r = n(32)["default"],
        o = n(75),
        a = n(0).xssFilter;
      n(121);
      var l,
        u,
        d,
        f,
        c =
          ((l = document),
          (u = "addEventListener"),
          (d = "querySelectorAll"),
          ((f = (p.fn = {}).init =
            function (e) {
              var n = this;
              return (
                e.forEach(function (e, t) {
                  n[t] = e;
                }),
                (this.length = e.length),
                this
              );
            }).prototype = p.fn),
          (p.one = function (e, t) {
            return p(e, t)[0] || null;
          }),
          p);
      function p(e, t, n) {
        if (e instanceof f) return e;
        var o = e[u]
          ? [e]
          : "string" == typeof e
          ? /</.test(e)
            ? (((t = l.createElement(t || u)).innerHTML = e), t.children)
            : t
            ? (t = p(t)[0])
              ? t[d]
                ? t[d](e)
                : window[d] && window[d](t, e)
              : new p.fn.init([])
            : l[d](e)
          : "function" == typeof e
          ? l.readyState[7]
            ? e()
            : l[u]("DOMContentLoaded", e)
          : e;
        if (
          o === window ||
          o === l ||
          h(o) ||
          (o instanceof Object &&
            !(o instanceof Array) &&
            "[object Object]" === o.toString() &&
            !m(o))
        )
          o = [o];
        else
          try {
            var i = o.length;
            (o = [].slice.apply(o, [0])).length = i;
          } catch (c) {
            try {
              i = o.length;
              (o = [].concat.apply([], o)).length = i;
            } catch (s) {
              if (o.length) {
                for (var r = [], a = 0; a < o.length; a++) r[a] = o[a];
                o = r;
              } else o = [];
            }
          }
        return new p.fn.init(e ? o : []);
      }
      var h =
          "object" ===
          ("undefined" == typeof HTMLElement ? "undefined" : r(HTMLElement))
            ? function (e) {
                return e instanceof HTMLElement;
              }
            : function (e) {
                return (
                  e &&
                  "object" === (void 0 === e ? "undefined" : r(e)) &&
                  1 === e.nodeType
                );
              },
        m = function m(e) {
          var t = e.length;
          return "number" == typeof t && 0 <= t && t <= Math.pow(2, 53) - 1;
        };
      (function s(e) {
        var t = (this.os = {}),
          n = e.match(/(Android);?[\s\/]+([\d.]+)?/);
        n && ((t.android = !0), (t.version = n[2]));
      }.call(c, navigator.userAgent),
        o(c.fn, {
          forEach: function (e) {
            for (var t = 0; t < this.length; t++)
              e.call(this, this[t], t, this);
          },
          append: function (t) {
            return (
              (window.HTMLElement
                ? t instanceof HTMLElement
                : 1 === t.nodeType) || (t = t[0]),
              this.forEach(function (e) {
                e.appendChild(t);
              }),
              this
            );
          },
          remove: function () {
            return (
              this.forEach(function (e) {
                e.parentNode.removeChild(e);
              }),
              this
            );
          },
          parent: function () {
            return c(this[0].parentNode);
          },
          find: function (e) {
            return c(e, this);
          },
          hasClass: function (e) {
            var t = new RegExp("(?:^|\\s+)" + e + "(?:\\s+|$)");
            return this[0] && t.test(this[0].className);
          },
          addClass: function (t) {
            return (
              this.forEach(function (e) {
                new RegExp("(^|\\s+)" + t).test(e.className) ||
                  (e.className += " " + t);
              }),
              this
            );
          },
          removeClass: function (t) {
            return (
              this.forEach(function (e) {
                e.className = e.className.replace(
                  new RegExp("(^|\\s+)" + t),
                  ""
                );
              }),
              this
            );
          },
          toggleClass: function (n) {
            return (
              this.forEach(function (e) {
                var t = $(e);
                t.hasClass(n) ? t.removeClass(n) : t.addClass(n);
              }),
              this
            );
          },
          click: function (e) {
            this.on("click", e);
          },
          eq: function (e) {
            return c(this[e]);
          },
          show: function () {
            return (
              this.forEach(function (e) {
                e.style.display = "block";
              }),
              this
            );
          },
          hide: function () {
            return (
              this.forEach(function (e) {
                e.style.display = "none";
              }),
              this
            );
          },
          html: function (t) {
            return t === undefined
              ? this[0].innerHTML
              : (this.forEach(function (e) {
                  e.innerHTML = t;
                }),
                this);
          },
          text: function (e) {
            this.html(a(e));
          },
          css: function (n) {
            var e = this;
            return (
              i(n).forEach(function (t) {
                e.forEach(function (e) {
                  e.style[t] = n[t];
                });
              }),
              this
            );
          },
          on: function (e, i, r) {
            var a = "string" == typeof i && "function" == typeof r;
            return (
              a || (r = i),
              this.forEach(function (o) {
                e.split(" ").forEach(function (e) {
                  var t = function t(e) {
                      a
                        ? this.contains(e.target.closest(i)) &&
                          r.call(e.target, e)
                        : r.call(this, e);
                    },
                    n = function n(e) {
                      ((e = e || window.event).target = e.srcElement),
                        (e.currentTarget = o),
                        t.call(e.target, e);
                    };
                  o.addEventListener
                    ? o.addEventListener(e, t, !1)
                    : o.attachEvent
                    ? o.attachEvent("on" + e, n)
                    : (o["on" + e] = n);
                });
              }),
              this
            );
          },
          off: function (t, n, o) {
            return (
              "function" == typeof n && ((o = n), (n = null)),
              this.forEach(function (e) {
                t.split(" ").forEach(function (t) {
                  "string" == typeof n
                    ? e.querySelectorAll(n).forEach(function (e) {
                        e.removeEventListener(t, o);
                      })
                    : e.removeEventListener(t, o);
                });
              }),
              this
            );
          },
          index: function () {
            var e = this[0],
              t = e.parentNode;
            return Array.prototype.indexOf.call(t.children, e);
          },
          offAll: function () {
            var o = this;
            return (
              this.forEach(function (e, t) {
                var n = e.cloneNode(!0);
                e.parentNode.replaceChild(n, e), (o[t] = n);
              }),
              this
            );
          },
          val: function () {
            var t = arguments;
            return arguments.length
              ? (this.forEach(function (e) {
                  e.value = t[0];
                }),
                this)
              : this[0].value;
          },
          attr: function () {
            var t = arguments,
              n =
                /MSIE\s7/.test(window.navigator.userAgent) &&
                document.documentMode === undefined;
            if ("object" != r(arguments[0]))
              return "string" == typeof arguments[0] && arguments.length < 2
                ? this[0].getAttribute(arguments[0])
                : (this.forEach(function (e) {
                    n ? (e[t[0]] = t[1]) : e.setAttribute(t[0], t[1]);
                  }),
                  this);
            var o = arguments[0],
              e = this;
            return (
              i(o).forEach(function (t) {
                e.forEach(function (e) {
                  n ? (e[t] = o[t]) : e.setAttribute(t, o[t]);
                });
              }),
              this
            );
          },
          width: function (e) {
            if (1 != arguments.length) {
              var t = this[0];
              if (t.document === window.document)
                return t.innerWidth || document.documentElement.clientWidth;
              if (9 === t.nodeType) return document.documentElement.clientWidth;
              var n = parseInt(getComputedStyle(t, null).width);
              if (isNaN(n)) {
                var o = t.getBoundingClientRect();
                n = o.right - o.left;
              }
              return n;
            }
            for (var i = 0; i < this.length; i++)
              this[i].style.width = e + "px";
          },
          height: function (e) {
            if (1 != arguments.length) {
              var t = this[0];
              if (t.document === window.document)
                return t.innerHeight || document.documentElement.clientHeight;
              if (9 === t.nodeType)
                return document.documentElement.clientHeight;
              var n = parseInt(getComputedStyle(t, null).height);
              if (isNaN(n)) {
                var o = t.getBoundingClientRect();
                n = o.bottom - o.top;
              }
              return n;
            }
            for (var i = 0; i < this.length; i++)
              this[i].style.height = e + "px";
          },
          trigger: function (n) {
            this.forEach(function (e) {
              var t = document.createEvent("Event");
              t.initEvent(n, !0, !0), e.dispatchEvent(t);
            });
          },
        }),
        o(c, {
          extend: o,
          noop: function () {},
          render: function (e, t) {
            var n =
              "var p=[];with(this){p.push('" +
              e
                .replace(/[\r\t\n]/g, " ")
                .split("<%")
                .join("\t")
                .replace(/((^|%>)[^\t]*)'/g, "$1\r")
                .replace(/\t=(.*?)%>/g, "',$1,'")
                .split("\t")
                .join("');")
                .split("%>")
                .join("p.push('")
                .split("\r")
                .join("\\'") +
              "');}return p.join('');";
            return new Function(n).apply(t);
          },
          getStyle: function (e, t) {
            var n,
              o,
              i,
              r,
              a = (e.ownerDocument || document).defaultView;
            return a && a.getComputedStyle
              ? ((t = t.replace(/([A-Z])/g, "-$1").toLowerCase()),
                a.getComputedStyle(e, null).getPropertyValue(t))
              : e.currentStyle
              ? ((t = t.replace(/\-(\w)/g, function (e, t) {
                  return t.toUpperCase();
                })),
                (n = e.currentStyle[t]),
                /^\d+(em|pt|%|ex)?$/i.test(n)
                  ? ((o = n),
                    (i = e.style.left),
                    (r = e.runtimeStyle.left),
                    (e.runtimeStyle.left = e.currentStyle.left),
                    (e.style.left = o || 0),
                    (o = e.style.pixelLeft + "px"),
                    (e.style.left = i),
                    (e.runtimeStyle.left = r),
                    o)
                  : n)
              : void 0;
          },
        }),
        (e.exports = c));
    },
    function (e, t, n) {
      var m = n(1),
        g = n(2),
        v = n(17),
        x = n(8),
        w = n(11),
        y = "prototype",
        b = function (e, t, n) {
          var o,
            i,
            r,
            a = e & b.F,
            c = e & b.G,
            s = e & b.S,
            l = e & b.P,
            u = e & b.B,
            d = e & b.W,
            f = c ? g : g[t] || (g[t] = {}),
            p = f[y],
            h = c ? m : s ? m[t] : (m[t] || {})[y];
          for (o in (c && (n = t), n))
            ((i = !a && h && h[o] !== undefined) && w(f, o)) ||
              ((r = i ? h[o] : n[o]),
              (f[o] =
                c && "function" != typeof h[o]
                  ? n[o]
                  : u && i
                  ? v(r, m)
                  : d && h[o] == r
                  ? (function (o) {
                      var e = function (e, t, n) {
                        if (this instanceof o) {
                          switch (arguments.length) {
                            case 0:
                              return new o();
                            case 1:
                              return new o(e);
                            case 2:
                              return new o(e, t);
                          }
                          return new o(e, t, n);
                        }
                        return o.apply(this, arguments);
                      };
                      return (e[y] = o[y]), e;
                    })(r)
                  : l && "function" == typeof r
                  ? v(Function.call, r)
                  : r),
              l &&
                (((f.virtual || (f.virtual = {}))[o] = r),
                e & b.R && p && !p[o] && x(p, o, r)));
        };
      (b.F = 1),
        (b.G = 2),
        (b.S = 4),
        (b.P = 8),
        (b.B = 16),
        (b.W = 32),
        (b.U = 64),
        (b.R = 128),
        (e.exports = b);
    },
    function (e, t, n) {
      var o = n(5),
        i = n(19);
      e.exports = n(10)
        ? function (e, t, n) {
            return o.f(e, t, i(1, n));
          }
        : function (e, t, n) {
            return (e[t] = n), e;
          };
    },
    function (e, t) {
      e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e;
      };
    },
    function (e, t, n) {
      e.exports = !n(18)(function () {
        return (
          7 !=
          Object.defineProperty({}, "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
    },
    function (e, t) {
      var n = {}.hasOwnProperty;
      e.exports = function (e, t) {
        return n.call(e, t);
      };
    },
    function (e, t, n) {
      var o = n(85),
        i = n(34);
      e.exports = function (e) {
        return o(i(e));
      };
    },
    function (e, t, n) {
      "use strict";
      (t.__esModule = !0),
        (t["default"] = function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        });
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        for (
          var t = (e = e.toString()).split("."),
            n = ["", "0", "00", "000", "0000"].reverse(),
            o = 0;
          o < t.length;
          o++
        ) {
          var i = t[o].length;
          t[o] = n[i] + t[o];
        }
        return t.join("");
      }
      (t.isMobile = function o() {
        return /iphone|ios|android|mini|mobile|mobi|Nokia|Symbian|iPod|iPad|Windows\s+Phone|MQQBrowser|wp7|wp8|UCBrowser7|UCWEB|360\s+Aphone\s+Browser|blackberry/i.test(
          navigator.userAgent
        );
      }),
        (t.isiPad = function i() {
          return (
            navigator.userAgent.match(/(iPad)/) ||
            ("MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints)
          );
        }),
        (t.isQQApp = function a() {
          var e = window.navigator.userAgent,
            t = new RegExp("(iPad|iPhone|iPod).*? (IPad)?QQ\\/([\\d\\.]+)"),
            n = new RegExp(
              "\\bV1_AND_SQI?_([\\d\\.]+)(.*? QQ\\/([\\d\\.]+))?",
              "ig"
            ),
            o = t.test(e),
            i = n.test(e);
          return !(!o && !i);
        }),
        (t.isWxApp = function c() {
          return /MicroMessenger/gi.test(navigator.userAgent);
        }),
        (t.isWxMini = function s(e) {
          if (/miniProgram/gi.test(navigator.userAgent)) e();
          else {
            var t = function t() {
              "miniprogram" === window.__wxjs_environment && e();
            };
            window.WeixinJSBridge && WeixinJSBridge.invoke
              ? t()
              : document.addEventListener("WeixinJSBridgeReady", t, !1);
          }
        }),
        (t.isMSDK = function l() {
          return -1 !== window.navigator.userAgent.indexOf("MSDK");
        }),
        (t.verToNum = r),
        (t.isHighMsdk = function u(e) {
          var t = window.navigator.userAgent,
            n = t.indexOf("MSDK"),
            o = t.substring(n, t.length).split(" ")[0],
            i = r(o.substring(5, o.length - 1));
          return (e = r(e)) < i;
        });
    },
    function (e, t, n) {
      "use strict";
      t.detect = function S() {
        var e = navigator.userAgent,
          t = navigator.platform,
          n = {},
          o = {},
          i = e.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
          r = e.match(/(Android);?[\s\/]+([\d.]+)?/),
          a = !!e.match(/\(Macintosh\; Intel /),
          c = e.match(/(iPad).*OS\s([\d_]+)/),
          s = e.match(/(iPod)(.*OS\s([\d_]+))?/),
          l = !c && e.match(/(iPhone\sOS)\s([\d_]+)/),
          u = e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
          d = /Win\d{2}|Windows/.test(t),
          f = e.match(/Windows Phone ([\d.]+)/),
          p = u && e.match(/TouchPad/),
          h = e.match(/Kindle\/([\d.]+)/),
          m = e.match(/Silk\/([\d._]+)/),
          g = e.match(/(BlackBerry).*Version\/([\d.]+)/),
          v = e.match(/(BB10).*Version\/([\d.]+)/),
          x = e.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
          w = e.match(/PlayBook/),
          y = e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/),
          b = e.match(/Firefox\/([\d.]+)/),
          _ = e.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
          k =
            e.match(/MSIE\s([\d.]+)/) ||
            e.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
          q = !y && e.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
          C =
            q ||
            e.match(
              /Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/
            );
        return (
          (o.webkit = !!i) && (o.version = i[1]),
          r && ((n.android = !0), (n.version = r[2])),
          l &&
            !s &&
            ((n.ios = n.iphone = !0), (n.version = l[2].replace(/_/g, "."))),
          c && ((n.ios = n.ipad = !0), (n.version = c[2].replace(/_/g, "."))),
          s &&
            ((n.ios = n.ipod = !0),
            (n.version = s[3] ? s[3].replace(/_/g, ".") : null)),
          f && ((n.wp = !0), (n.version = f[1])),
          u && ((n.webos = !0), (n.version = u[2])),
          p && (n.touchpad = !0),
          g && ((n.blackberry = !0), (n.version = g[2])),
          v && ((n.bb10 = !0), (n.version = v[2])),
          x && ((n.rimtabletos = !0), (n.version = x[2])),
          w && (o.playbook = !0),
          h && ((n.kindle = !0), (n.version = h[1])),
          m && ((o.silk = !0), (o.version = m[1])),
          !m && n.android && e.match(/Kindle Fire/) && (o.silk = !0),
          y && ((o.chrome = !0), (o.version = y[1])),
          b && ((o.firefox = !0), (o.version = b[1])),
          _ && ((n.firefoxos = !0), (n.version = _[1])),
          k && ((o.ie = !0), (o.version = k[1])),
          C &&
            (a || n.ios || d) &&
            ((o.safari = !0), n.ios || (o.version = C[1])),
          q && (o.webview = !0),
          (n.tablet = !!(
            c ||
            w ||
            (r && !e.match(/Mobile/)) ||
            (b && e.match(/Tablet/)) ||
            (k && !e.match(/Phone/) && e.match(/Touch/))
          )),
          (n.phone = !(
            n.tablet ||
            n.ipod ||
            !(
              r ||
              l ||
              u ||
              g ||
              v ||
              (y && e.match(/Android/)) ||
              (y && e.match(/CriOS\/([\d.]+)/)) ||
              (b && e.match(/Mobile/)) ||
              (k && e.match(/Touch/))
            )
          )),
          { os: n, browser: o }
        );
      };
    },
    function (e, t) {
      e.exports = !0;
    },
    function (e, t, n) {
      var r = n(27);
      e.exports = function (o, i, e) {
        if ((r(o), i === undefined)) return o;
        switch (e) {
          case 1:
            return function (e) {
              return o.call(i, e);
            };
          case 2:
            return function (e, t) {
              return o.call(i, e, t);
            };
          case 3:
            return function (e, t, n) {
              return o.call(i, e, t, n);
            };
        }
        return function () {
          return o.apply(i, arguments);
        };
      };
    },
    function (e, t) {
      e.exports = function (e) {
        try {
          return !!e();
        } catch (t) {
          return !0;
        }
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: t,
        };
      };
    },
    function (e, t) {
      e.exports = {};
    },
    function (e, t) {
      var n = {}.toString;
      e.exports = function (e) {
        return n.call(e).slice(8, -1);
      };
    },
    function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        var t,
          n = e.url,
          o = e.contextWindow,
          i = o === undefined ? window : o,
          r = e.charset,
          a = r === undefined ? "UTF-8" : r,
          c = e.cache,
          s = c !== undefined && c,
          l = e.timeout,
          u = l === undefined ? 3e4 : l,
          d = e.success,
          f = d === undefined ? function () {} : d,
          p = e.error,
          h = p === undefined ? function () {} : p,
          m = e.defer,
          g = m !== undefined && m,
          v = i.document,
          x = v.getElementsByTagName("body").item(0),
          w = v.createElement("script");
        s || (n += (0 < n.indexOf("?") ? "&" : "?") + "_=" + Math.random()),
          (w.type = "text/javascript"),
          (w.src = n),
          (w.charset = a),
          g && (w.defer = "true"),
          (t = setTimeout(function () {
            x.removeChild(w), h(Error("\u7f51\u7edc\u5f02\u5e38"));
          }, u));
        var y = function y() {
          (w.onload = w.onreadystatechange = null),
            x && w.parentNode && x.removeChild(w),
            clearTimeout(t),
            f();
        };
        (w.onreadystatechange = function () {
          var e = w.readyState;
          ("loaded" !== e && "complete" !== e) || y();
        }),
          (w.onload = y),
          (w.onerror = function (e) {
            h(e);
          }),
          x.appendChild(w);
      };
    },
    function (e, t, n) {
      "use strict";
      function o(e, t, n, o, i, r) {
        var a = [e + "=" + escape(t)],
          c = new Date();
        (n = n || 86400),
          c.setTime(c.getTime() + 1e3 * n),
          a.push("expires=" + c.toGMTString()),
          o != undefined && a.push("domain=" + o),
          i != undefined && a.push("path=" + i),
          r && a.push("secure"),
          (document.cookie = a.join("; "));
      }
      (t.getCookie = function i(e) {
        var t = document.cookie.match(
          new RegExp("(^| )" + e + "=([^;]*)(;|$)")
        );
        return null != t ? unescape(t[2]) : null;
      }),
        (t.setCookie = o),
        (t.delCookie = function r(e, t, n) {
          o(e, "", -1, t, n);
        });
    },
    function (e, t, n) {
      "use strict";
      (t.getQueryString = function o(e) {
        var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
          n = window.location.search.substr(1).match(t);
        return null != n ? decodeURIComponent(n[2]) : "";
      }),
        (t.updateQueryString = function r(e, t, n) {
          if (!n) return e;
          var o = new RegExp("([?&])" + t + "=.*?(&|$)", "i"),
            i = -1 !== e.indexOf("?") ? "&" : "?";
          return e.match(o)
            ? e.replace(o, "$1" + t + "=" + n + "$2")
            : e + i + t + "=" + n;
        });
    },
    function (e, t, n) {
      "use strict";
      var a = [];
      e.exports = function (e) {
        if (!(0 <= a.indexOf(e))) {
          a.push(e);
          var t = void 0;
          if (document.createStyleSheet) {
            t = document.createStyleSheet();
            for (
              var n = e
                  .replace(/\/\*[^\*]*\*\//g, "")
                  .replace(/@[^{]*\{/g, "")
                  .match(/[^\{\}]+\{[^\}]+\}/g),
                o = 0;
              o < n.length;
              o++
            ) {
              var i = n[o].match(/(.*)\s*\{\s*(.*)\}/);
              if (i)
                try {
                  t.addRule(i[1], i[2]);
                } catch (r) {
                  console.log(r);
                }
            }
          } else
            (t = document.createElement("style")).appendChild(
              document.createTextNode(e)
            ),
              document.head.appendChild(t);
          return t;
        }
      };
    },
    function (e, t, n) {
      "use strict";
      var o = n(82)(!0);
      n(53)(
        String,
        "String",
        function (e) {
          (this._t = String(e)), (this._i = 0);
        },
        function () {
          var e,
            t = this._t,
            n = this._i;
          return n >= t.length
            ? { value: undefined, done: !0 }
            : ((e = o(t, n)), (this._i += e.length), { value: e, done: !1 });
        }
      );
    },
    function (e, t) {
      e.exports = function (e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e;
      };
    },
    function (e, t, n) {
      var o = n(57),
        i = n(40);
      e.exports =
        Object.keys ||
        function (e) {
          return o(e, i);
        };
    },
    function (e, t) {
      var n = 0,
        o = Math.random();
      e.exports = function (e) {
        return "Symbol(".concat(
          e === undefined ? "" : e,
          ")_",
          (++n + o).toString(36)
        );
      };
    },
    function (e, t, n) {
      var o = n(5).f,
        i = n(11),
        r = n(3)("toStringTag");
      e.exports = function (e, t, n) {
        e &&
          !i((e = n ? e : e.prototype), r) &&
          o(e, r, { configurable: !0, value: t });
      };
    },
    function (e, t, n) {
      e.exports = { default: n(103), __esModule: !0 };
    },
    function (e, t, n) {
      "use strict";
      t.__esModule = !0;
      var o = a(n(109)),
        i = a(n(111)),
        r =
          "function" == typeof i["default"] && "symbol" == typeof o["default"]
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof i["default"] &&
                  e.constructor === i["default"] &&
                  e !== i["default"].prototype
                  ? "symbol"
                  : typeof e;
              };
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t["default"] =
        "function" == typeof i["default"] && "symbol" === r(o["default"])
          ? function (e) {
              return void 0 === e ? "undefined" : r(e);
            }
          : function (e) {
              return e &&
                "function" == typeof i["default"] &&
                e.constructor === i["default"] &&
                e !== i["default"].prototype
                ? "symbol"
                : void 0 === e
                ? "undefined"
                : r(e);
            };
    },
    function (e, t) {
      var n = Math.ceil,
        o = Math.floor;
      e.exports = function (e) {
        return isNaN((e = +e)) ? 0 : (0 < e ? o : n)(e);
      };
    },
    function (e, t) {
      e.exports = function (e) {
        if (e == undefined) throw TypeError("Can't call method on  " + e);
        return e;
      };
    },
    function (e, t, n) {
      var o = n(9),
        i = n(1).document,
        r = o(i) && o(i.createElement);
      e.exports = function (e) {
        return r ? i.createElement(e) : {};
      };
    },
    function (e, t, n) {
      var i = n(9);
      e.exports = function (e, t) {
        if (!i(e)) return e;
        var n, o;
        if (t && "function" == typeof (n = e.toString) && !i((o = n.call(e))))
          return o;
        if ("function" == typeof (n = e.valueOf) && !i((o = n.call(e))))
          return o;
        if (!t && "function" == typeof (n = e.toString) && !i((o = n.call(e))))
          return o;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    function (e, t, n) {
      var o = n(33),
        i = Math.min;
      e.exports = function (e) {
        return 0 < e ? i(o(e), 9007199254740991) : 0;
      };
    },
    function (e, t, n) {
      var o = n(39)("keys"),
        i = n(29);
      e.exports = function (e) {
        return o[e] || (o[e] = i(e));
      };
    },
    function (e, t, n) {
      var o = n(2),
        i = n(1),
        r = "__core-js_shared__",
        a = i[r] || (i[r] = {});
      (e.exports = function (e, t) {
        return a[e] || (a[e] = t !== undefined ? t : {});
      })("versions", []).push({
        version: o.version,
        mode: n(16) ? "pure" : "global",
        copyright: "\xa9 2018 Denis Pushkarev (zloirock.ru)",
      });
    },
    function (e, t) {
      e.exports =
        "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
          ","
        );
    },
    function (e, t, n) {
      var o = n(34);
      e.exports = function (e) {
        return Object(o(e));
      };
    },
    function (e, t, n) {
      n(89);
      for (
        var o = n(1),
          i = n(8),
          r = n(20),
          a = n(3)("toStringTag"),
          c =
            "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
              ","
            ),
          s = 0;
        s < c.length;
        s++
      ) {
        var l = c[s],
          u = o[l],
          d = u && u.prototype;
        d && !d[a] && i(d, a, l), (r[l] = r.Array);
      }
    },
    function (e, t, n) {
      var o = n(59),
        i = n(3)("iterator"),
        r = n(20);
      e.exports = n(2).getIteratorMethod = function (e) {
        if (e != undefined) return e[i] || e["@@iterator"] || r[o(e)];
      };
    },
    function (e, t, n) {
      "use strict";
      var i = n(27);
      function o(e) {
        var n, o;
        (this.promise = new e(function (e, t) {
          if (n !== undefined || o !== undefined)
            throw TypeError("Bad Promise constructor");
          (n = e), (o = t);
        })),
          (this.resolve = i(n)),
          (this.reject = i(o));
      }
      e.exports.f = function (e) {
        return new o(e);
      };
    },
    function (module, exports, __webpack_require__) {
      "use strict";
      var _JSON$stringify = __webpack_require__(50)["default"],
        _typeof = __webpack_require__(32)["default"],
        _utilCookie = __webpack_require__(23),
        getCookie = _utilCookie.getCookie,
        _utilUtil = __webpack_require__(0),
        isFunction = _utilUtil.isFunction,
        isLegalDomain = _utilUtil.isLegalDomain,
        loginStatus = (exports.loginStatus = {
          arrCallbacks: [],
          doCallback: function (e) {
            for (var t = 0; t < this.arrCallbacks.length; ) {
              var n = this.arrCallbacks[t];
              if (e == n.service) {
                var o =
                  document.getElementById("loginStatusSyncFrame_" + n.service)
                    .contentWindow || null;
                isFunction(n.cb) && n.cb(o), this.arrCallbacks.splice(t, 1);
              } else t++;
            }
          },
          waitingQueue: {},
          isInitMessage: !1,
          init: function init(service, url, callback) {
            var self = this;
            if (
              (self.arrCallbacks.push({ cb: callback, service: service }),
              2 != self.waitingQueue[service])
            ) {
              if (1 != self.waitingQueue[service]) {
                self.waitingQueue[service] = 1;
                var iframe = document.createElement("iframe");
                if (
                  ((iframe.src = url),
                  (iframe.id = "loginStatusSyncFrame_" + service),
                  (iframe.width = 0),
                  (iframe.height = 0),
                  (iframe.frameborder = 0),
                  (iframe.style.border = "0"),
                  (iframe.style.display = "none"),
                  document.body.appendChild(iframe),
                  iframe.attachEvent
                    ? iframe.attachEvent("onload", function () {
                        (self.waitingQueue[service] = 2),
                          self.doCallback(service);
                      })
                    : (iframe.onload = function () {
                        (self.waitingQueue[service] = 2),
                          self.doCallback(service);
                      }),
                  !self.isInitMessage)
                ) {
                  if (
                    "function" == typeof window.postMessage ||
                    "object" === _typeof(window.postMessage)
                  ) {
                    var onmessage = function onmessage(e) {
                      if (isLegalDomain(e.origin)) {
                        var eData = {};
                        e.data &&
                          ("string" == typeof e.data
                            ? 2 == e.data.indexOf("action") &&
                              eval("eData=" + e.data)
                            : (eData = e.data),
                          eData &&
                            eData.callbackName &&
                            "done" == eData.action &&
                            isFunction(window[eData.callbackName]) &&
                            window[eData.callbackName]());
                      }
                    };
                    window.addEventListener
                      ? window.addEventListener("message", onmessage, !1)
                      : window.attachEvent
                      ? window.attachEvent("onmessage", onmessage)
                      : (window.onmessage = onmessage);
                  }
                  self.isInitMessage = !0;
                }
              }
            } else self.doCallback(service);
          },
          syncToAME: function (t) {
            if ("qc" == getCookie("acctype")) {
              var o = "syncToAME_" + Math.ceil(1e5 * Math.random());
              window[o] = function () {
                isFunction(t) && t();
              };
              var i = {
                acctype: "qc",
                openid: getCookie("openid"),
                access_token: getCookie("access_token"),
                appid: getCookie("appid"),
              };
              if (
                "function" != typeof window.postMessage &&
                "object" !== _typeof(window.postMessage)
              ) {
                var n = {};
                for (var e in i) n[e] = [i[e], "/", 600];
                this.init(
                  "ams_ame",
                  location.protocol + "//apps.game.qq.com/ams/asyncCookie.html",
                  function (e) {
                    e.syncCookie({ action: "ame", cookieObj: n }, function () {
                      isFunction(t) && t();
                    });
                  }
                );
              } else
                this.init(
                  "ams_ame",
                  location.protocol + "//apps.game.qq.com/ams/asyncCookie.html",
                  function () {
                    var e = document.getElementById(
                        "loginStatusSyncFrame_ams_ame"
                      ),
                      t = {};
                    for (var n in i) t[n] = [i[n], "/", 600];
                    e.contentWindow.postMessage(
                      _JSON$stringify({
                        action: "ame",
                        cookieObj: t,
                        callbackName: o,
                      }),
                      "*"
                    );
                  }
                );
            } else isFunction(t) && t();
          },
          clearAME: function (t) {
            var o = "syncToAME_" + Math.ceil(1e5 * Math.random());
            window[o] = function () {
              isFunction(t) && t();
            };
            var i = { acctype: "", openid: "", access_token: "", appid: "" };
            if (
              "function" != typeof window.postMessage &&
              "object" !== _typeof(window.postMessage)
            ) {
              var n = {};
              for (var e in i) n[e] = [i[e], "/", -600];
              this.init(
                "ams_ame",
                location.protocol + "//apps.game.qq.com/ams/asyncCookie.html",
                function (e) {
                  e.syncCookie(
                    { action: "onlygame", cookieObj: n },
                    function () {
                      isFunction(t) && t();
                    }
                  );
                }
              );
            } else
              this.init(
                "ams_ame",
                location.protocol + "//apps.game.qq.com/ams/asyncCookie.html",
                function () {
                  var e = document.getElementById(
                      "loginStatusSyncFrame_ams_ame"
                    ),
                    t = {};
                  for (var n in i) t[n] = [i[n], "/", -600];
                  e.contentWindow.postMessage(
                    _JSON$stringify({
                      action: "onlygame",
                      cookieObj: t,
                      callbackName: o,
                    }),
                    "*"
                  );
                }
              );
          },
        });
    },
    function (e, t, n) {
      t.f = n(3);
    },
    function (e, t, n) {
      var o = n(1),
        i = n(2),
        r = n(16),
        a = n(46),
        c = n(5).f;
      e.exports = function (e) {
        var t = i.Symbol || (i.Symbol = r ? {} : o.Symbol || {});
        "_" == e.charAt(0) || e in t || c(t, e, { value: a.f(e) });
      };
    },
    function (e, t) {
      t.f = {}.propertyIsEnumerable;
    },
    function (e, t, n) {
      "use strict";
      var o = n(23),
        i = o.setCookie,
        r = o.getCookie,
        a = (o.delCookie, n(0)),
        c = a.randomWord,
        s = a.serialize,
        l = n(24).getQueryString,
        u = n(15).detect,
        d = null,
        f = null,
        p = "2.0.7",
        h = document.location,
        m = h.protocol + "//" + h.host + h.pathname;
      function g() {
        if (!d) {
          var e = r("ulink_pvid");
          e || ((e = c(48)), i("ulink_pvid", e, 63072e4)), (d = e);
        }
        return d;
      }
      function v() {
        if (!f) {
          var e = u().os;
          f = e.android ? "android" : e.ios ? "ios" : "pc";
        }
        return f;
      }
      function x() {
        return l("adtag") || l("ADTAG");
      }
      function w(e) {
        var t = new Image(),
          n = location.protocol + "//ulink.game.qq.com/report/",
          o = s(e);
        t.src = n + "?" + o;
      }
      (t.getCurrUserId = g),
        (t.getPlatId = v),
        (t.getADTAG = x),
        (t.sendPV = function y() {
          var e = g(),
            t = x(),
            n = {
              uid: e,
              type: "pv",
              platid: v(),
              url: encodeURIComponent(m),
              version: p,
            };
          t && (n.adtag = t), w(n);
        }),
        (t.sendEvent = function b(e, t) {
          var n = g(),
            o = v(),
            i = x(),
            r = {
              uid: n,
              type: "event",
              platid: o,
              url: encodeURIComponent(m),
              iActId: e,
              event: t,
              version: p,
            };
          i && (r.adtag = i), w(r);
        }),
        (t.reportEvent = function _(e, t) {
          w({
            uid: g(),
            type: "event",
            platid: v(),
            url: encodeURIComponent(m),
            iActId: e,
            event: "act." + t,
            version: p,
          });
        }),
        (t.sendReport = w);
    },
    function (e, t, n) {
      e.exports = { default: n(108), __esModule: !0 };
    },
    function (e, t, n) {
      "use strict";
      var i = n(50)["default"],
        r = n(32)["default"];
      (t.setCache = function a(e, t) {
        var n =
          2 < arguments.length && arguments[2] !== undefined
            ? arguments[2]
            : 3600;
        "object" == (void 0 === t ? "undefined" : r(t)) && (t = i(t)),
          localStorage.setItem(e, t);
        var o = new Date().getTime() + 1e3 * n;
        localStorage.setItem(e + "_expirs", o + "");
      }),
        (t.getCache = function c(e) {
          var t = localStorage.getItem(e + "_expirs");
          if (t) {
            if (t < new Date().getTime())
              return (
                localStorage.removeItem(e),
                localStorage.removeItem(e + "_expirs"),
                ""
              );
            var n = localStorage.getItem(e);
            if (null != n)
              try {
                n = JSON.parse(n);
              } catch (o) {}
            return n;
          }
          return "";
        }),
        (t.removeCache = function s(e) {
          var t = +new Date(),
            n = [];
          if (e) n.push(e), n.push(e + "_expirs");
          else
            for (var o = localStorage.length - 1; 0 <= o; o--) {
              var i = localStorage.key(o);
              if (-1 != i.indexOf("_expirs")) {
                var r = i.split("_expirs")[0];
                localStorage.getItem(localStorage.key(o)) < t &&
                  (n.push(i), n.push(r));
              }
            }
          for (var a = 0; a < n.length; a++) localStorage.removeItem(n[a]);
        });
    },
    function (e, t) {},
    function (e, t, n) {
      "use strict";
      var w = n(16),
        y = n(7),
        b = n(55),
        _ = n(8),
        k = n(20),
        q = n(83),
        C = n(30),
        S = n(88),
        E = n(3)("iterator"),
        T = !([].keys && "next" in [].keys()),
        O = "values",
        I = function () {
          return this;
        };
      e.exports = function (e, t, n, o, i, r, a) {
        q(n, t, o);
        var c,
          s,
          l,
          u = function (e) {
            if (!T && e in h) return h[e];
            switch (e) {
              case "keys":
              case O:
                return function () {
                  return new n(this, e);
                };
            }
            return function () {
              return new n(this, e);
            };
          },
          d = t + " Iterator",
          f = i == O,
          p = !1,
          h = e.prototype,
          m = h[E] || h["@@iterator"] || (i && h[i]),
          g = m || u(i),
          v = i ? (f ? u("entries") : g) : undefined,
          x = ("Array" == t && h.entries) || m;
        if (
          (x &&
            (l = S(x.call(new e()))) !== Object.prototype &&
            l.next &&
            (C(l, d, !0), w || "function" == typeof l[E] || _(l, E, I)),
          f &&
            m &&
            m.name !== O &&
            ((p = !0),
            (g = function () {
              return m.call(this);
            })),
          (w && !a) || (!T && !p && h[E]) || _(h, E, g),
          (k[t] = g),
          (k[d] = I),
          i)
        )
          if (
            ((c = {
              values: f ? g : u(O),
              keys: r ? g : u("keys"),
              entries: v,
            }),
            a)
          )
            for (s in c) s in h || b(h, s, c[s]);
          else y(y.P + y.F * (T || p), t, c);
        return c;
      };
    },
    function (e, t, n) {
      e.exports =
        !n(10) &&
        !n(18)(function () {
          return (
            7 !=
            Object.defineProperty(n(35)("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    function (e, t, n) {
      e.exports = n(8);
    },
    function (e, t, o) {
      var i = o(4),
        r = o(84),
        a = o(40),
        c = o(38)("IE_PROTO"),
        s = function () {},
        l = "prototype",
        u = function () {
          var e,
            t = o(35)("iframe"),
            n = a.length;
          for (
            t.style.display = "none",
              o(58).appendChild(t),
              t.src = "javascript:",
              (e = t.contentWindow.document).open(),
              e.write("<script>document.F=Object</script>"),
              e.close(),
              u = e.F;
            n--;

          )
            delete u[l][a[n]];
          return u();
        };
      e.exports =
        Object.create ||
        function (e, t) {
          var n;
          return (
            null !== e
              ? ((s[l] = i(e)), (n = new s()), (s[l] = null), (n[c] = e))
              : (n = u()),
            t === undefined ? n : r(n, t)
          );
        };
    },
    function (e, t, n) {
      var a = n(11),
        c = n(12),
        s = n(86)(!1),
        l = n(38)("IE_PROTO");
      e.exports = function (e, t) {
        var n,
          o = c(e),
          i = 0,
          r = [];
        for (n in o) n != l && a(o, n) && r.push(n);
        for (; t.length > i; ) a(o, (n = t[i++])) && (~s(r, n) || r.push(n));
        return r;
      };
    },
    function (e, t, n) {
      var o = n(1).document;
      e.exports = o && o.documentElement;
    },
    function (e, t, n) {
      var i = n(21),
        r = n(3)("toStringTag"),
        a =
          "Arguments" ==
          i(
            (function () {
              return arguments;
            })()
          );
      e.exports = function (e) {
        var t, n, o;
        return e === undefined
          ? "Undefined"
          : null === e
          ? "Null"
          : "string" ==
            typeof (n = (function (e, t) {
              try {
                return e[t];
              } catch (n) {}
            })((t = Object(e)), r))
          ? n
          : a
          ? i(t)
          : "Object" == (o = i(t)) && "function" == typeof t.callee
          ? "Arguments"
          : o;
      };
    },
    function (e, t, n) {
      var a = n(4);
      e.exports = function (e, t, n, o) {
        try {
          return o ? t(a(n)[0], n[1]) : t(n);
        } catch (r) {
          var i = e["return"];
          throw (i !== undefined && a(i.call(e)), r);
        }
      };
    },
    function (e, t, n) {
      var o = n(20),
        i = n(3)("iterator"),
        r = Array.prototype;
      e.exports = function (e) {
        return e !== undefined && (o.Array === e || r[i] === e);
      };
    },
    function (e, t, n) {
      var i = n(4),
        r = n(27),
        a = n(3)("species");
      e.exports = function (e, t) {
        var n,
          o = i(e).constructor;
        return o === undefined || (n = i(o)[a]) == undefined ? t : r(n);
      };
    },
    function (e, t, n) {
      var o,
        i,
        r,
        a = n(17),
        c = n(95),
        s = n(58),
        l = n(35),
        u = n(1),
        d = u.process,
        f = u.setImmediate,
        p = u.clearImmediate,
        h = u.MessageChannel,
        m = u.Dispatch,
        g = 0,
        v = {},
        x = "onreadystatechange",
        w = function () {
          var e = +this;
          if (v.hasOwnProperty(e)) {
            var t = v[e];
            delete v[e], t();
          }
        },
        y = function (e) {
          w.call(e.data);
        };
      (f && p) ||
        ((f = function (e) {
          for (var t = [], n = 1; n < arguments.length; )
            t.push(arguments[n++]);
          return (
            (v[++g] = function () {
              c("function" == typeof e ? e : Function(e), t);
            }),
            o(g),
            g
          );
        }),
        (p = function (e) {
          delete v[e];
        }),
        "process" == n(21)(d)
          ? (o = function (e) {
              d.nextTick(a(w, e, 1));
            })
          : m && m.now
          ? (o = function (e) {
              m.now(a(w, e, 1));
            })
          : h
          ? ((r = (i = new h()).port2),
            (i.port1.onmessage = y),
            (o = a(r.postMessage, r, 1)))
          : u.addEventListener &&
            "function" == typeof postMessage &&
            !u.importScripts
          ? ((o = function (e) {
              u.postMessage(e + "", "*");
            }),
            u.addEventListener("message", y, !1))
          : (o =
              x in l("script")
                ? function (e) {
                    s.appendChild(l("script"))[x] = function () {
                      s.removeChild(this), w.call(e);
                    };
                  }
                : function (e) {
                    setTimeout(a(w, e, 1), 0);
                  })),
        (e.exports = { set: f, clear: p });
    },
    function (e, t) {
      e.exports = function (e) {
        try {
          return { e: !1, v: e() };
        } catch (t) {
          return { e: !0, v: t };
        }
      };
    },
    function (e, t, n) {
      var o = n(4),
        i = n(9),
        r = n(44);
      e.exports = function (e, t) {
        if ((o(e), i(t) && t.constructor === e)) return t;
        var n = r.f(e);
        return (0, n.resolve)(t), n.promise;
      };
    },
    function (e, t, n) {
      var r = n(3)("iterator"),
        a = !1;
      try {
        var o = [7][r]();
        (o["return"] = function () {
          a = !0;
        }),
          Array.from(o, function () {
            throw 2;
          });
      } catch (c) {}
      e.exports = function (e, t) {
        if (!t && !a) return !1;
        var n = !1;
        try {
          var o = [7],
            i = o[r]();
          (i.next = function () {
            return { done: (n = !0) };
          }),
            (o[r] = function () {
              return i;
            }),
            e(o);
        } catch (c) {}
        return n;
      };
    },
    function (e, t) {
      t.f = Object.getOwnPropertySymbols;
    },
    function (e, t, n) {
      var o = n(57),
        i = n(40).concat("length", "prototype");
      t.f =
        Object.getOwnPropertyNames ||
        function (e) {
          return o(e, i);
        };
    },
    function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        var t = e.url,
          n = e.success,
          o = n === undefined ? function () {} : n,
          i = t.substr(t.lastIndexOf("/") + 1).split(".")[0];
        if (!document.getElementById("load_" + i)) {
          var r = document.getElementsByTagName("HEAD").item(0),
            a = document.createElement("link");
          (a.href = t),
            (a.rel = "stylesheet"),
            (a.type = "text/css"),
            (a.id = "load_" + i),
            r.appendChild(a);
        }
        o();
      };
    },
    function (e, t, n) {
      "use strict";
      var m = n(6),
        g = n(15).detect,
        i = n(14).isMobile,
        o = n(25),
        r = void 0,
        p = void 0,
        a = void 0,
        h = (t.getRatio = function h() {
          if (!r) {
            if (i()) {
              var e = document.documentElement.scrollWidth,
                t = screen.width,
                n = screen.height,
                o = e;
              return (
                (e !== t && e !== n) || (o = Math.min(t, n)),
                (r = (o / 375).toFixed(2))
              );
            }
            r = 1;
          }
          return r;
        });
      function v(e) {
        var t = document.documentElement.scrollHeight,
          n = document.documentElement.clientHeight,
          o = n < t ? t : n,
          i = o - 40,
          r = document.documentElement.scrollTop || document.body.scrollTop;
        if (e.height() > i) {
          var a = -i / 2 + r;
          if (g().os.ios)
            e.css({
              "margin-left": -e.width() / 2 + "px",
              "margin-top": a + "px",
              position: "absolute",
            });
          else {
            $mask.css({ position: "absolute" }),
              m(window).on("scroll", function () {
                var e = o + r;
                $mask.css({ height: e + "px" });
              });
            var c = document.documentElement.scrollWidth,
              s = document.documentElement.clientWidth,
              l = ((s < c ? c : s) - e.width()) / 2,
              u =
                "width:" +
                opt.width +
                ";z-index:" +
                parseInt(opt.zindex + 1) +
                ";position:absolute;top:" +
                (r + 20) +
                "px;left:" +
                l +
                "px;";
            e.attr("style", u);
          }
        } else {
          var d = e[0].getBoundingClientRect(),
            f = m(window),
            p = f.width(),
            h = (f.height() - d.bottom + d.top) / 2 + "px";
          l = (p - d.right + d.left) / 2 + "px";
          e.css({ left: l, top: h });
        }
      }
      function x() {
        if (!a) {
          var e =
            ".ulink_msgbox {color:#000;background-color:#fff; text-align:center;-moz-border-radius: 8px;-webkit-border-radius: 8px;border-radius:8px;font-family:Arial,Helvetica,sans-serif;font-weight:normal;font-size:" +
            14 * h() +
            "px;}.ulink_msgbox .header{font-weight:bold;margin-top:" +
            10 * h() +
            "px;line-height:" +
            20 * h() +
            "px;text-align:center;font-family:Arial,Helvetica,sans-serif;height:auto;width:auto;}.ulink_msgbox .footer{height:" +
            40 * h() +
            "px;padding:0;width:auto;}.ulink_msgbox .footer a{display:block;color:#007afe;float:left;text-align:center;height:" +
            40 * h() +
            "px;line-height:" +
            40 * h() +
            "px;font-weight:bold;text-decoration: none;font-family:Arial,Helvetica,sans-serif;font-size:" +
            16 * h() +
            "px;}.ulink_msgbox .footer a:hover{text-decoration:none;}.ulink_msgbox .footer button{border:none;background:none;}.ulink_msgbox .section{padding:" +
            20 * h() +
            "px;overflow-x:hidden;text-align:center;font-family:Arial,Helvetica,sans-serif;font-weight:normal;height:auto;width:auto;word-break:break-all}";
          a = o(e);
        }
      }
      (t.fixDialog = v),
        (t.loadDialogCss = x),
        (t.messagebox = function w(e) {
          p && p();
          var t = e;
          String(t.width).indexOf("%") < 0 && (t.width = t.width + "px"),
            1 == t.loadDefaultCss && x();
          var n = m('<div id="' + t.id + '_cover"  ></div>');
          n.css({
            "z-index": t.zindex,
            "background-color": t.bgcolor,
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            opacity: t.opacity,
            zoom: 1,
            filter: "alpha(opacity = " + 100 * t.opacity + ")",
          }),
            m("body").append(n);
          var o = m(
            '<div id="' +
              t.id +
              '" class="ulink_msgbox"  style="zoom:' +
              t.zoom +
              ";width:" +
              t.width +
              ";z-index:" +
              parseInt(t.zindex + 1) +
              ';top:50%;left:50%;position:fixed;"></div>'
          );
          if (
            (t.className &&
              (o = m(
                '<div id="' +
                  id +
                  '" class="ulink_msgbox ' +
                  t.className +
                  '"  ></div>'
              )),
            /MSIE/.test(window.navigator.userAgent) &&
              document.documentMode < 9)
          ) {
            var i = document.documentElement,
              r = i.scrollTop,
              a = i.clientHeight;
            o.css({
              _position: "absolute",
              _top:
                (document.compatMode && "CSS1Compat" == document.compatMode
                  ? r + (a - o[0].clientHeight) - 1
                  : document.body.scrollTop +
                    (document.body.clientHeight - o[0].clientHeight) -
                    1) + "px",
            });
          }
          var c = m("<div class='header'></div>");
          t.title && c.append(m("<h2>" + t.title + "</h2>")), o.append(c);
          var s = Math.ceil(h()),
            l = m(
              "<div class='section' style=\"box-shadow:inset 0 -" +
                s +
                "px " +
                s +
                "px  -" +
                s +
                "px #b2b2b2;border-bottom:" +
                s +
                'px solid #f1ecec"></div>'
            );
          (/MSIE/.test(window.navigator.userAgent) &&
            document.documentMode < 10) ||
            l.css({ "border-bottom": "none" }),
            t.content && l.html(t.content),
            o.append(l);
          var u = m("<div class='footer'></div>"),
            d = [];
          d.push({
            key: "confirm",
            text: t.confirmButtonText,
            callback: t.callback,
          }),
            t.cancelButtonText &&
              t.cancelCallback &&
              d.push({
                key: "cancel",
                text: t.cancelButtonText,
                callback: t.cancelCallback,
              });
          var f = parseFloat((100 - d.length) / d.length);
          d.forEach(function (t) {
            var e = m(
              '<a href="javascript:;"  style="display:block;color:#007afe;float:left;text-align:center;height:' +
                40 * h() +
                "px;line-height:" +
                40 * h() +
                "px;font-weight:bold;text-decoration: none;font-family:Arial,Helvetica,sans-serif;font-size:" +
                16 * h() +
                "px;outline:none;width:" +
                f +
                '%" data-key="' +
                t.key +
                '">' +
                t.text +
                "</a>"
            );
            1 < d.length &&
              "cancel" !== t.key &&
              e.css({ "box-shadow": "inset -1px 0px 1px -1px #b2b2b2" }),
              e.on("click", function (e) {
                e.stopPropagation && e.preventDefault
                  ? (e.stopPropagation(), e.preventDefault())
                  : window.event &&
                    ((window.event.cancelBubble = !0),
                    (window.event.returnValue = !1)),
                  p(),
                  t.callback();
              }),
              u.append(e);
          }),
            o.append(u),
            m("body").append(o),
            0 == t.className &&
              (v(o),
              m(window).on("resize", function () {
                v(o);
              }),
              m(window).on(
                "orientationchange",
                function () {
                  v(o);
                },
                !1
              )),
            (p = function () {
              (p = null),
                o.remove(),
                n.css({
                  transition: "opacity 400ms ease-out",
                  "-webkit-transition": "opacity 400ms ease-out",
                }),
                n.css({ opacity: "0", filter: "alpha(opacity = 0)" }),
                setTimeout(function () {
                  n.remove();
                }, 400);
            });
        });
    },
    function (e, t, n) {
      e.exports = { default: n(130), __esModule: !0 };
    },
    function (e, t, n) {
      "use strict";
      var x = n(6),
        p = n(0).extend,
        w = n(15).detect,
        i = n(14).isMobile,
        o = n(25),
        r = void 0,
        y = void 0,
        b = function b() {
          if (!r) {
            if (i()) {
              var e = document.documentElement.scrollWidth,
                t = screen.width,
                n = screen.height,
                o = e;
              return (
                (e !== t && e !== n) || (o = Math.min(t, n)),
                (r = (o / 375).toFixed(2))
              );
            }
            r = 1;
          }
          return r;
        },
        a = {
          alert: function (e, t) {
            var n = { title: "\u5173\u95ed", click: function () {} },
              o = {
                title: null,
                content: null,
                zindex: 4200,
                bgcolor: "#ccc",
                opacity: 0.5,
                zoom: 1,
                width: 280 * b(),
                loadDefaultCss: !0,
                buttons: {
                  close: { title: "\u5173\u95ed", click: function () {} },
                },
              };
            "string" == typeof e
              ? ((o.content = e),
                t && ((n.click = t), (o = p(o, { buttons: { close: n } }, !0))))
              : (o = p(o, e, !0)),
              this.dialog(o);
          },
          confirm: function (e, t, n) {
            var o = { title: "\u786e\u5b9a", click: function () {} },
              i = { title: "\u53d6\u6d88", click: function () {} },
              r = {
                title: null,
                content: null,
                zindex: 4200,
                bgcolor: "#ccc",
                opacity: 0.5,
                zoom: 1,
                width: 280 * b(),
                loadDefaultCss: !0,
                buttons: {
                  confirm: { title: "\u786e\u5b9a", click: function () {} },
                  close: { title: "\u53d6\u6d88", click: function () {} },
                },
              };
            "string" == typeof e
              ? ((r.content = e),
                t &&
                  ((o.click = t), (r = p(r, { buttons: { confirm: o } }, !0))),
                n && ((i.click = n), (r = p(r, { buttons: { close: i } }, !0))))
              : (r = p(r, e, !0)),
              this.dialog(r);
          },
          dialog: function (e) {
            y && y();
            var t = "dialog_" + new Date().getTime(),
              h = {
                title: null,
                content: null,
                zindex: 4200,
                bgcolor: "#ccc",
                opacity: 0.5,
                width: 280 * b(),
                zoom: 1,
                loadDefaultCss: !0,
                className: !1,
                onSuccess: function () {},
                buttons: {
                  close: { title: "\u5173\u95ed", click: function () {} },
                },
              };
            ((h = p(h, e, !0)).id = t),
              String(h.width).indexOf("%") < 0 && (h.width = h.width + "px"),
              1 == h.loadDefaultCss && this.loadDialogCss();
            var m = x('<div id="' + t + '_cover"  ></div>');
            m.css({
              "z-index": h.zindex,
              "background-color": h.bgcolor,
              position: "fixed",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              opacity: h.opacity,
              zoom: 1,
              filter: "alpha(opacity = " + 100 * h.opacity + ")",
            }),
              x("body").append(m);
            var g = x(
              '<div id="' +
                t +
                '" class="amsmobi_dialog"  style="zoom:' +
                h.zoom +
                ";width:" +
                h.width +
                ";z-index:" +
                parseInt(h.zindex + 1) +
                ';top:50%;left:50%;position:fixed;"></div>'
            );
            if (
              (h.className &&
                (g = x(
                  '<div id="' +
                    t +
                    '" class="amsmobi_dialog ' +
                    h.className +
                    '"  ></div>'
                )),
              /MSIE/.test(window.navigator.userAgent) &&
                document.documentMode < 9)
            ) {
              var n = document.documentElement,
                o = n.scrollTop,
                i = n.clientHeight;
              g.css({
                _position: "absolute",
                _top:
                  (document.compatMode && "CSS1Compat" == document.compatMode
                    ? o + (i - g[0].clientHeight) - 1
                    : document.body.scrollTop +
                      (document.body.clientHeight - g[0].clientHeight) -
                      1) + "px",
              });
            }
            var r = x("<div class='header'></div>"),
              a = Math.ceil(b()),
              c = x(
                "<div class='section' style=\"box-shadow:inset 0 -" +
                  a +
                  "px " +
                  a +
                  "px  -" +
                  a +
                  "px #b2b2b2;border-bottom:" +
                  a +
                  'px solid #f1ecec"></div>'
              );
            (/MSIE/.test(window.navigator.userAgent) &&
              document.documentMode < 10) ||
              c.css({ "border-bottom": "none" });
            var s = x("<div class='footer'></div>");
            (y = function () {
              (y = null),
                g.remove(),
                m.css({
                  transition: "opacity 400ms ease-out",
                  "-webkit-transition": "opacity 400ms ease-out",
                }),
                m.css({ opacity: "0", filter: "alpha(opacity = 0)" }),
                setTimeout(function () {
                  m.remove();
                }, 400);
            }),
              h.title && r.append(x("<h2>" + h.title + "</h2>")),
              g.append(r),
              h.content && c.html(h.content),
              g.append(c);
            var l = new Array(),
              u = "";
            for (u in h.buttons) {
              var d = h.buttons[u];
              "close" != u.toLowerCase() && ((d.key = u), l.push(d));
            }
            h.buttons["close"] &&
              (((d = h.buttons["close"]).key = "close"), l.push(d));
            var f = parseFloat((100 - l.length) / l.length);
            l.forEach(function (t, e) {
              var n = x(
                '<a href="javascript:;"  style="display:block;color:#007afe;float:left;text-align:center;height:' +
                  40 * b() +
                  "px;line-height:" +
                  40 * b() +
                  "px;font-weight:bold;text-decoration: none;font-family:Arial,Helvetica,sans-serif;font-size:" +
                  16 * b() +
                  "px;outline:none;width:" +
                  f +
                  '%" data-key="' +
                  e +
                  '">' +
                  t.title +
                  "</a>"
              );
              "close" != t.key &&
                n.css({ "box-shadow": "inset -1px 0px 1px -1px #b2b2b2" }),
                "function" == typeof t.click
                  ? n.on("click", function (e) {
                      e.stopPropagation && e.preventDefault
                        ? (e.stopPropagation(), e.preventDefault())
                        : window.event &&
                          ((window.event.cancelBubble = !0),
                          (window.event.returnValue = !1)),
                        t.click && (0 == t.click() || h.skipCloseModal || y());
                    })
                  : n.attr("href", t.click),
                s.append(n);
            }),
              g.append(s),
              x("body").append(g);
            var v = function v() {
              var e = document.documentElement.scrollHeight,
                t = document.documentElement.clientHeight,
                n = t < e ? e : t,
                o = n - 40,
                i =
                  document.documentElement.scrollTop || document.body.scrollTop;
              if (g.height() > o) {
                var r = -o / 2 + i;
                if (w().os.ios)
                  g.css({
                    "margin-left": -g.width() / 2 + "px",
                    "margin-top": r + "px",
                    position: "absolute",
                  });
                else {
                  m.css({ position: "absolute" }),
                    x(window).on("scroll", function () {
                      var e = n + i;
                      m.css({ height: e + "px" });
                    });
                  var a = document.documentElement.scrollWidth,
                    c = document.documentElement.clientWidth,
                    s = ((c < a ? a : c) - g.width()) / 2,
                    l =
                      "width:" +
                      h.width +
                      ";z-index:" +
                      parseInt(h.zindex + 1) +
                      ";position:absolute;top:" +
                      (i + 20) +
                      "px;left:" +
                      s +
                      "px;";
                  g.attr("style", l);
                }
              } else {
                var u = g[0].getBoundingClientRect(),
                  d = x(window),
                  f = d.width(),
                  p = (d.height() - u.bottom + u.top) / 2 + "px";
                s = (f - u.right + u.left) / 2 + "px";
                g.css({ left: s, top: p });
              }
            };
            return (
              0 == h.className &&
                (v(),
                x(window).on("resize", function () {
                  v();
                }),
                x(window).on(
                  "orientationchange",
                  function () {
                    v();
                  },
                  !1
                )),
              h.onSuccess && h.onSuccess(),
              g
            );
          },
          showLoading: function (e) {
            var t = { zindex: 4100, bgcolor: "#ccc", opacity: 0.5 };
            t = p(t, e, !0);
            var n = "amsmobi_loading";
            if (0 == x("#" + n).length) {
              var o = Math.min(b(), 1.5),
                i = x(
                  '<div id="' +
                    n +
                    '_cover"   style="zoom:1;z-index:' +
                    t.zindex +
                    ";background-color:" +
                    t.bgcolor +
                    ";position:fixed;left:0;top:0;width:100%;height:100%;filter:alpha(opacity=" +
                    100 * t.opacity +
                    ");opacity:" +
                    t.opacity +
                    ';_position:absolute;_top:expression(documentElement.scrollTop)"></div>'
                ),
                r = x(
                  '<div id="' +
                    n +
                    '" style="z-index:9999;width:' +
                    80 * o +
                    "px;height:" +
                    80 * o +
                    "px;background-color:rgba(0,0,0,0.8);border-radius:5px;position:fixed;left:50%;top:50%;margin-left:-" +
                    40 * o +
                    "px;margin-top:-" +
                    40 * o +
                    'px"><img src="https://game.gtimg.cn/images/ulink/ulinksdk/loading.gif" style="width:100%"></div>'
                );
              x("body").append(i).append(r),
                /MSIE/.test(window.navigator.userAgent) &&
                  document.documentMode < 9 &&
                  r.css({ background: "#3c3c3c" });
            } else x("#" + n + "_cover").show(), x("#" + n).show();
          },
          hideLoading: function () {
            x("#amsmobi_loading").hide(), x("#amsmobi_loading_cover").hide();
          },
          loadDialogCss: function () {
            if (!this.style) {
              var e =
                ".amsmobi_dialog {color:#000;background-color:#fff; text-align:center;-moz-border-radius: 8px;-webkit-border-radius: 8px;border-radius:8px;font-family:Arial,Helvetica,sans-serif;font-weight:normal;font-size:" +
                14 * b() +
                "px;}.amsmobi_dialog .header{font-weight:bold;margin-top:" +
                10 * b() +
                "px;line-height:" +
                20 * b() +
                "px;text-align:center;font-family:Arial,Helvetica,sans-serif;height:auto;width:auto;}.amsmobi_dialog .footer{height:" +
                40 * b() +
                "px;padding:0;width:auto;}.amsmobi_dialog .footer a{display:block;color:#007afe;float:left;text-align:center;height:" +
                40 * b() +
                "px;line-height:" +
                40 * b() +
                "px;font-weight:bold;text-decoration: none;font-family:Arial,Helvetica,sans-serif;font-size:" +
                16 * b() +
                "px;}.amsmobi_dialog .footer a:hover{text-decoration:none;}.amsmobi_dialog .footer button{border:none;background:none;}.amsmobi_dialog .section{padding:" +
                20 * b() +
                "px;overflow-x:hidden;text-align:center;font-family:Arial,Helvetica,sans-serif;font-weight:normal;height:auto;width:auto;word-break:break-all}";
              this.style = o(e);
            }
          },
          setWidth: function (e) {
            (r = e / 280),
              this.style && (x(this.style).remove(), (this.style = null)),
              y && y();
          },
          getRatio: b,
        };
      t.Dialog = a;
    },
    function (e, t, n) {
      "use strict";
      var c = n(133)["default"],
        o = n(13)["default"],
        i =
          ((r.prototype.addEventListener = function (e, t) {
            for (
              var n = this._listeners[e],
                o = 0,
                i = (n = n || (this._listeners[e] = [])).length;
              o < i;
              o++
            )
              if (n[o] == t) return;
            n.push(t);
          }),
          (r.prototype.removeEventListener = function (e, t) {
            var n = this._listeners[e];
            if (n)
              for (var o = 0, i = n.length; o < i; o++)
                if (n[o] == t) {
                  n.splice(o, 1);
                  break;
                }
          }),
          (r.prototype.fireEvent = function (e) {
            var t = this._listeners[e];
            if (t) {
              t = [].concat(c(t));
              for (
                var n = arguments.length, o = Array(1 < n ? n - 1 : 0), i = 1;
                i < n;
                i++
              )
                o[i - 1] = arguments[i];
              for (var r = 0, a = t.length; r < a; r++) t[r].apply(t, o);
            }
          }),
          r);
      function r() {
        o(this, r), (this._listeners = {});
      }
      e.exports = i;
    },
    function (e, t, n) {
      e.exports = { default: n(81), __esModule: !0 };
    },
    function (e, t, n) {
      "use strict";
      var l = Object.getOwnPropertySymbols,
        u = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable;
      e.exports = (function r() {
        try {
          if (!Object.assign) return !1;
          var e = new String("abc");
          if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var t = {}, n = 0; n < 10; n++)
            t["_" + String.fromCharCode(n)] = n;
          if (
            "0123456789" !==
            Object.getOwnPropertyNames(t)
              .map(function (e) {
                return t[e];
              })
              .join("")
          )
            return !1;
          var o = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
              o[e] = e;
            }),
            "abcdefghijklmnopqrst" ===
              Object.keys(Object.assign({}, o)).join("")
          );
        } catch (i) {
          return !1;
        }
      })()
        ? Object.assign
        : function (e, t) {
            for (
              var n,
                o,
                i = (function s(e) {
                  if (null === e || e === undefined)
                    throw new TypeError(
                      "Object.assign cannot be called with null or undefined"
                    );
                  return Object(e);
                })(e),
                r = 1;
              r < arguments.length;
              r++
            ) {
              for (var a in (n = Object(arguments[r])))
                u.call(n, a) && (i[a] = n[a]);
              if (l) {
                o = l(n);
                for (var c = 0; c < o.length; c++)
                  d.call(n, o[c]) && (i[o[c]] = n[o[c]]);
              }
            }
            return i;
          };
    },
    function (e, t, n) {
      "use strict";
      var k = n(71)["default"],
        q = n(31)["default"],
        C = n(132);
      e.exports = {
        get: function (e) {
          var t = e.url,
            n = e.timeout,
            o = e.params,
            i = o === undefined ? {} : o,
            r = e.success,
            a = r === undefined ? function () {} : r,
            c = e.error,
            s = c === undefined ? function () {} : c,
            l = e.isShowLoading,
            u = l === undefined || l,
            d = q(i),
            f = [],
            p = !0,
            h = !1,
            m = undefined;
          try {
            for (var g, v = k(d); !(p = (g = v.next()).done); p = !0) {
              var x = g.value;
              f.push(x + "=" + i[x]);
            }
          } catch (y) {
            (h = !0), (m = y);
          } finally {
            try {
              !p && v["return"] && v["return"]();
            } finally {
              if (h) throw m;
            }
          }
          var w = f.join("&");
          -1 < t.indexOf("?")
            ? "&" == t.substring(t.length - 1, t.length)
              ? (t += w)
              : w && (t = t + "&" + w)
            : w && (t = t + "?" + w),
            C({ url: t, timeout: n, success: a, error: s, isShowLoading: u });
        },
        post: function (e) {
          var t = e.url,
            n = e.timeout,
            o = e.params,
            i = o === undefined ? {} : o,
            r = e.formdata,
            a = r === undefined ? {} : r,
            c = e.success,
            s = c === undefined ? function () {} : c,
            l = e.error,
            u = l === undefined ? function () {} : l,
            d = e.isShowLoading,
            f = d === undefined || d,
            p = q(i),
            h = [],
            m = !0,
            g = !1,
            v = undefined;
          try {
            for (var x, w = k(p); !(m = (x = w.next()).done); m = !0) {
              var y = x.value;
              h.push(y + "=" + i[y]);
            }
          } catch (_) {
            (g = !0), (v = _);
          } finally {
            try {
              !m && w["return"] && w["return"]();
            } finally {
              if (g) throw v;
            }
          }
          var b = h.join("&");
          -1 < t.indexOf("?")
            ? "&" == t.substring(t.length - 1, t.length)
              ? (t += b)
              : b && (t = t + "&" + b)
            : b && (t = t + "?" + b),
            C({
              url: t,
              timeout: n,
              postData: a,
              success: s,
              error: u,
              isShowLoading: f,
            });
        },
      };
    },
    ,
    ,
    function (e, t, n) {
      e.exports = n(80);
    },
    function (e, t, n) {
      "use strict";
      var o = n(74)["default"],
        i = n(0).isLegalPartnerDomain,
        r = n(102),
        a = n(106),
        c = n(107),
        s = n(45),
        l = n(122),
        u = n(123),
        d = n(124),
        f = n(125),
        p = n(126),
        h = n(127),
        m = n(128),
        g = n(129),
        v = n(22),
        x = n(69),
        w = n(25),
        y = n(6),
        b = n(76),
        _ = n(14),
        k = n(0),
        q = n(23),
        C = n(51),
        S = n(73),
        E = n(15),
        T = n(24),
        O = n(138),
        I = n(49),
        L = n(49),
        M = L.sendPV,
        j = L.sendEvent,
        N = n(51).removeCache;
      for (var A in (window.Promise || (window.Promise = o),
      i(window.location.href) ||
        console.error(
          "\u975e\u670d\u52a1\u57df\u540d\uff0c\u4f7f\u7528ulinksdk\u53ef\u80fd\u5e26\u6765\u5b89\u5168\u98ce\u9669"
        ),
      r))
        "default" !== A && (t[A] = r[A]);
      for (var D in a) "default" !== D && (t[D] = a[D]);
      for (var P in c) "default" !== P && (t[P] = c[P]);
      for (var R in s) "default" !== R && (t[R] = s[R]);
      for (var z in l) "default" !== z && (t[z] = l[z]);
      for (var W in u) "default" !== W && (t[W] = u[W]);
      for (var F in d) "default" !== F && (t[F] = d[F]);
      for (var U in f) "default" !== U && (t[U] = f[U]);
      for (var B in p) "default" !== B && (t[B] = p[B]);
      for (var Q in h) "default" !== Q && (t[Q] = h[Q]);
      for (var $ in _) "default" !== $ && (t[$] = _[$]);
      for (var H in k) "default" !== H && (t[H] = k[H]);
      for (var G in q) "default" !== G && (t[G] = q[G]);
      for (var V in C) "default" !== V && (t[V] = C[V]);
      for (var J in S) "default" !== J && (t[J] = S[J]);
      for (var K in E) "default" !== K && (t[K] = E[K]);
      for (var Z in T) "default" !== Z && (t[Z] = T[Z]);
      for (var X in O) "default" !== X && (t[X] = O[X]);
      for (var Y in I) "default" !== Y && (t[Y] = I[Y]);
      (t.H5Pay = m),
        (t.share = g),
        (t.loadScript = v),
        (t.loadCSS = x),
        (t.loadStyle = w),
        (t.$ = y),
        (t.http = b),
        setTimeout(function () {
          N(),
            M(),
            j("ulink.loaded", "ulink.loaded"),
            v({
              url: "//ulink.qq.com/ulinksdk/dist/js/ulink.report.js",
              success: function () {
                console.log("report.js\u4e0a\u62a5");
              },
            });
        }, 1e3);
    },
    function (e, t, n) {
      n(52), n(26), n(42), n(92), n(100), n(101), (e.exports = n(2).Promise);
    },
    function (e, t, n) {
      var s = n(33),
        l = n(34);
      e.exports = function (c) {
        return function (e, t) {
          var n,
            o,
            i = String(l(e)),
            r = s(t),
            a = i.length;
          return r < 0 || a <= r
            ? c
              ? ""
              : undefined
            : (n = i.charCodeAt(r)) < 55296 ||
              56319 < n ||
              r + 1 === a ||
              (o = i.charCodeAt(r + 1)) < 56320 ||
              57343 < o
            ? c
              ? i.charAt(r)
              : n
            : c
            ? i.slice(r, r + 2)
            : o - 56320 + ((n - 55296) << 10) + 65536;
        };
      };
    },
    function (e, t, n) {
      "use strict";
      var o = n(56),
        i = n(19),
        r = n(30),
        a = {};
      n(8)(a, n(3)("iterator"), function () {
        return this;
      }),
        (e.exports = function (e, t, n) {
          (e.prototype = o(a, { next: i(1, n) })), r(e, t + " Iterator");
        });
    },
    function (e, t, n) {
      var a = n(5),
        c = n(4),
        s = n(28);
      e.exports = n(10)
        ? Object.defineProperties
        : function (e, t) {
            c(e);
            for (var n, o = s(t), i = o.length, r = 0; r < i; )
              a.f(e, (n = o[r++]), t[n]);
            return e;
          };
    },
    function (e, t, n) {
      var o = n(21);
      e.exports = Object("z").propertyIsEnumerable(0)
        ? Object
        : function (e) {
            return "String" == o(e) ? e.split("") : Object(e);
          };
    },
    function (e, t, n) {
      var s = n(12),
        l = n(37),
        u = n(87);
      e.exports = function (c) {
        return function (e, t, n) {
          var o,
            i = s(e),
            r = l(i.length),
            a = u(n, r);
          if (c && t != t) {
            for (; a < r; ) if ((o = i[a++]) != o) return !0;
          } else
            for (; a < r; a++)
              if ((c || a in i) && i[a] === t) return c || a || 0;
          return !c && -1;
        };
      };
    },
    function (e, t, n) {
      var o = n(33),
        i = Math.max,
        r = Math.min;
      e.exports = function (e, t) {
        return (e = o(e)) < 0 ? i(e + t, 0) : r(e, t);
      };
    },
    function (e, t, n) {
      var o = n(11),
        i = n(41),
        r = n(38)("IE_PROTO"),
        a = Object.prototype;
      e.exports =
        Object.getPrototypeOf ||
        function (e) {
          return (
            (e = i(e)),
            o(e, r)
              ? e[r]
              : "function" == typeof e.constructor && e instanceof e.constructor
              ? e.constructor.prototype
              : e instanceof Object
              ? a
              : null
          );
        };
    },
    function (e, t, n) {
      "use strict";
      var o = n(90),
        i = n(91),
        r = n(20),
        a = n(12);
      (e.exports = n(53)(
        Array,
        "Array",
        function (e, t) {
          (this._t = a(e)), (this._i = 0), (this._k = t);
        },
        function () {
          var e = this._t,
            t = this._k,
            n = this._i++;
          return !e || n >= e.length
            ? ((this._t = undefined), i(1))
            : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]);
        },
        "values"
      )),
        (r.Arguments = r.Array),
        o("keys"),
        o("values"),
        o("entries");
    },
    function (e, t) {
      e.exports = function () {};
    },
    function (e, t) {
      e.exports = function (e, t) {
        return { value: t, done: !!e };
      };
    },
    function (e, t, o) {
      "use strict";
      var n,
        i,
        r,
        a,
        c = o(16),
        s = o(1),
        l = o(17),
        u = o(59),
        d = o(7),
        f = o(9),
        p = o(27),
        h = o(93),
        m = o(94),
        g = o(62),
        v = o(63).set,
        x = o(96)(),
        w = o(44),
        y = o(64),
        b = o(97),
        _ = o(65),
        k = "Promise",
        q = s.TypeError,
        C = s.process,
        S = C && C.versions,
        E = (S && S.v8) || "",
        T = s[k],
        O = "process" == u(C),
        I = function () {},
        L = (i = w.f),
        M = !!(function () {
          try {
            var e = T.resolve(1),
              t = ((e.constructor = {})[o(3)("species")] = function (e) {
                e(I, I);
              });
            return (
              (O || "function" == typeof PromiseRejectionEvent) &&
              e.then(I) instanceof t &&
              0 !== E.indexOf("6.6") &&
              -1 === b.indexOf("Chrome/66")
            );
          } catch (n) {}
        })(),
        j = function (e) {
          var t;
          return !(!f(e) || "function" != typeof (t = e.then)) && t;
        },
        N = function (d, n) {
          if (!d._n) {
            d._n = !0;
            var o = d._c;
            x(function () {
              for (
                var l = d._v,
                  u = 1 == d._s,
                  e = 0,
                  t = function (e) {
                    var t,
                      n,
                      o,
                      i = u ? e.ok : e.fail,
                      r = e.resolve,
                      a = e.reject,
                      c = e.domain;
                    try {
                      i
                        ? (u || (2 == d._h && P(d), (d._h = 1)),
                          !0 === i
                            ? (t = l)
                            : (c && c.enter(),
                              (t = i(l)),
                              c && (c.exit(), (o = !0))),
                          t === e.promise
                            ? a(q("Promise-chain cycle"))
                            : (n = j(t))
                            ? n.call(t, r, a)
                            : r(t))
                        : a(l);
                    } catch (s) {
                      c && !o && c.exit(), a(s);
                    }
                  };
                o.length > e;

              )
                t(o[e++]);
              (d._c = []), (d._n = !1), n && !d._h && A(d);
            });
          }
        },
        A = function (r) {
          v.call(s, function () {
            var e,
              t,
              n,
              o = r._v,
              i = D(r);
            if (
              (i &&
                ((e = y(function () {
                  O
                    ? C.emit("unhandledRejection", o, r)
                    : (t = s.onunhandledrejection)
                    ? t({ promise: r, reason: o })
                    : (n = s.console) &&
                      n.error &&
                      n.error("Unhandled promise rejection", o);
                })),
                (r._h = O || D(r) ? 2 : 1)),
              (r._a = undefined),
              i && e.e)
            )
              throw e.v;
          });
        },
        D = function (e) {
          return 1 !== e._h && 0 === (e._a || e._c).length;
        },
        P = function (t) {
          v.call(s, function () {
            var e;
            O
              ? C.emit("rejectionHandled", t)
              : (e = s.onrejectionhandled) && e({ promise: t, reason: t._v });
          });
        },
        R = function (e) {
          var t = this;
          t._d ||
            ((t._d = !0),
            ((t = t._w || t)._v = e),
            (t._s = 2),
            t._a || (t._a = t._c.slice()),
            N(t, !0));
        },
        z = function (n) {
          var o,
            i = this;
          if (!i._d) {
            (i._d = !0), (i = i._w || i);
            try {
              if (i === n) throw q("Promise can't be resolved itself");
              (o = j(n))
                ? x(function () {
                    var e = { _w: i, _d: !1 };
                    try {
                      o.call(n, l(z, e, 1), l(R, e, 1));
                    } catch (t) {
                      R.call(e, t);
                    }
                  })
                : ((i._v = n), (i._s = 1), N(i, !1));
            } catch (e) {
              R.call({ _w: i, _d: !1 }, e);
            }
          }
        };
      M ||
        ((T = function (e) {
          h(this, T, k, "_h"), p(e), n.call(this);
          try {
            e(l(z, this, 1), l(R, this, 1));
          } catch (t) {
            R.call(this, t);
          }
        }),
        ((n = function (e) {
          (this._c = []),
            (this._a = undefined),
            (this._s = 0),
            (this._d = !1),
            (this._v = undefined),
            (this._h = 0),
            (this._n = !1);
        }).prototype = o(98)(T.prototype, {
          then: function (e, t) {
            var n = L(g(this, T));
            return (
              (n.ok = "function" != typeof e || e),
              (n.fail = "function" == typeof t && t),
              (n.domain = O ? C.domain : undefined),
              this._c.push(n),
              this._a && this._a.push(n),
              this._s && N(this, !1),
              n.promise
            );
          },
          catch: function (e) {
            return this.then(undefined, e);
          },
        })),
        (r = function () {
          var e = new n();
          (this.promise = e),
            (this.resolve = l(z, e, 1)),
            (this.reject = l(R, e, 1));
        }),
        (w.f = L =
          function (e) {
            return e === T || e === a ? new r(e) : i(e);
          })),
        d(d.G + d.W + d.F * !M, { Promise: T }),
        o(30)(T, k),
        o(99)(k),
        (a = o(2)[k]),
        d(d.S + d.F * !M, k, {
          reject: function (e) {
            var t = L(this);
            return (0, t.reject)(e), t.promise;
          },
        }),
        d(d.S + d.F * (c || !M), k, {
          resolve: function (e) {
            return _(c && this === a ? T : this, e);
          },
        }),
        d(
          d.S +
            d.F *
              !(
                M &&
                o(66)(function (e) {
                  T.all(e)["catch"](I);
                })
              ),
          k,
          {
            all: function (e) {
              var a = this,
                t = L(a),
                c = t.resolve,
                s = t.reject,
                n = y(function () {
                  var o = [],
                    i = 0,
                    r = 1;
                  m(e, !1, function (e) {
                    var t = i++,
                      n = !1;
                    o.push(undefined),
                      r++,
                      a.resolve(e).then(function (e) {
                        n || ((n = !0), (o[t] = e), --r || c(o));
                      }, s);
                  }),
                    --r || c(o);
                });
              return n.e && s(n.v), t.promise;
            },
            race: function (e) {
              var t = this,
                n = L(t),
                o = n.reject,
                i = y(function () {
                  m(e, !1, function (e) {
                    t.resolve(e).then(n.resolve, o);
                  });
                });
              return i.e && o(i.v), n.promise;
            },
          }
        );
    },
    function (e, t) {
      e.exports = function (e, t, n, o) {
        if (!(e instanceof t) || (o !== undefined && o in e))
          throw TypeError(n + ": incorrect invocation!");
        return e;
      };
    },
    function (e, t, n) {
      var f = n(17),
        p = n(60),
        h = n(61),
        m = n(4),
        g = n(37),
        v = n(43),
        x = {},
        w = {};
      ((t = e.exports =
        function (e, t, n, o, i) {
          var r,
            a,
            c,
            s,
            l = i
              ? function () {
                  return e;
                }
              : v(e),
            u = f(n, o, t ? 2 : 1),
            d = 0;
          if ("function" != typeof l) throw TypeError(e + " is not iterable!");
          if (h(l)) {
            for (r = g(e.length); d < r; d++)
              if (
                (s = t ? u(m((a = e[d]))[0], a[1]) : u(e[d])) === x ||
                s === w
              )
                return s;
          } else
            for (c = l.call(e); !(a = c.next()).done; )
              if ((s = p(c, u, a.value, t)) === x || s === w) return s;
        }).BREAK = x),
        (t.RETURN = w);
    },
    function (e, t) {
      e.exports = function (e, t, n) {
        var o = n === undefined;
        switch (t.length) {
          case 0:
            return o ? e() : e.call(n);
          case 1:
            return o ? e(t[0]) : e.call(n, t[0]);
          case 2:
            return o ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
          case 3:
            return o ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
          case 4:
            return o
              ? e(t[0], t[1], t[2], t[3])
              : e.call(n, t[0], t[1], t[2], t[3]);
        }
        return e.apply(n, t);
      };
    },
    function (e, t, n) {
      var c = n(1),
        s = n(63).set,
        l = c.MutationObserver || c.WebKitMutationObserver,
        u = c.process,
        d = c.Promise,
        f = "process" == n(21)(u);
      e.exports = function () {
        var o,
          i,
          r,
          e = function () {
            var e, t;
            for (f && (e = u.domain) && e.exit(); o; ) {
              (t = o.fn), (o = o.next);
              try {
                t();
              } catch (n) {
                throw (o ? r() : (i = undefined), n);
              }
            }
            (i = undefined), e && e.enter();
          };
        if (f)
          r = function () {
            u.nextTick(e);
          };
        else if (!l || (c.navigator && c.navigator.standalone))
          if (d && d.resolve) {
            var t = d.resolve(undefined);
            r = function () {
              t.then(e);
            };
          } else
            r = function () {
              s.call(c, e);
            };
        else {
          var n = !0,
            a = document.createTextNode("");
          new l(e).observe(a, { characterData: !0 }),
            (r = function () {
              a.data = n = !n;
            });
        }
        return function (e) {
          var t = { fn: e, next: undefined };
          i && (i.next = t), o || ((o = t), r()), (i = t);
        };
      };
    },
    function (e, t, n) {
      var o = n(1).navigator;
      e.exports = (o && o.userAgent) || "";
    },
    function (e, t, n) {
      var i = n(8);
      e.exports = function (e, t, n) {
        for (var o in t) n && e[o] ? (e[o] = t[o]) : i(e, o, t[o]);
        return e;
      };
    },
    function (e, t, n) {
      "use strict";
      var o = n(1),
        i = n(2),
        r = n(5),
        a = n(10),
        c = n(3)("species");
      e.exports = function (e) {
        var t = "function" == typeof i[e] ? i[e] : o[e];
        a &&
          t &&
          !t[c] &&
          r.f(t, c, {
            configurable: !0,
            get: function () {
              return this;
            },
          });
      };
    },
    function (e, t, n) {
      "use strict";
      var o = n(7),
        i = n(2),
        r = n(1),
        a = n(62),
        c = n(65);
      o(o.P + o.R, "Promise", {
        finally: function (t) {
          var n = a(this, i.Promise || r.Promise),
            e = "function" == typeof t;
          return this.then(
            e
              ? function (e) {
                  return c(n, t()).then(function () {
                    return e;
                  });
                }
              : t,
            e
              ? function (e) {
                  return c(n, t()).then(function () {
                    throw e;
                  });
                }
              : t
          );
        },
      });
    },
    function (e, t, n) {
      "use strict";
      var o = n(7),
        i = n(44),
        r = n(64);
      o(o.S, "Promise", {
        try: function (e) {
          var t = i.f(this),
            n = r(e);
          return (n.e ? t.reject : t.resolve)(n.v), t.promise;
        },
      });
    },
    function (e, t, o) {
      "use strict";
      var i = o(31)["default"],
        r = o(13)["default"];
      t.RoleSelector =
        ((a.prototype.show = function () {
          this.promise.then(function (e) {
            e.show();
          });
        }),
        (a.prototype.on = function (n, o) {
          var i = this;
          this.promise.then(function (e) {
            var t = i.listeners[n];
            t && e.off(n, t), e.on(n, o), (i.listeners[n] = o);
          });
        }),
        (a.prototype.channelSelectChange = function (t) {
          this.promise.then(function (e) {
            e.channelSelectChange(t);
          });
        }),
        (a.prototype.systemSelectChange = function (t) {
          this.promise.then(function (e) {
            e.systemSelectChange(t);
          });
        }),
        (a.prototype.areaSelectChange = function (t) {
          this.promise.then(function (e) {
            e.areaSelectChange(t);
          });
        }),
        (a.prototype.serverSelectChange = function (t) {
          this.promise.then(function (e) {
            e.serverSelectChange(t);
          });
        }),
        (a.prototype.roleSelectChange = function (t, n, o, i) {
          this.promise.then(function (e) {
            e.roleSelectChange(t, n, o, i);
          });
        }),
        a);
      function a(n) {
        r(this, a);
        var e = a.instance;
        if (!1 !== n.single && e)
          return (
            e.promise.then(function (e) {
              var t = e.options;
              i(n).forEach(function (e) {
                0 <= ["sSign", "timestamp", "sCode"].indexOf(e) &&
                  (t[e] = n[e]);
              });
            }),
            e
          );
        (this.promise = o
          .e(4)
          .then(o.t.bind(null, 139, 7))
          .then(function (e) {
            return new e.RoleSelector(n);
          })),
          (this.listeners = {}),
          (a.instance = this);
      }
    },
    function (e, t, n) {
      n(104), (e.exports = n(2).Object.keys);
    },
    function (e, t, n) {
      var o = n(41),
        i = n(28);
      n(105)("keys", function () {
        return function (e) {
          return i(o(e));
        };
      });
    },
    function (e, t, n) {
      var i = n(7),
        r = n(2),
        a = n(18);
      e.exports = function (e, t) {
        var n = (r.Object || {})[e] || Object[e],
          o = {};
        (o[e] = t(n)),
          i(
            i.S +
              i.F *
                a(function () {
                  n(1);
                }),
            "Object",
            o
          );
      };
    },
    function (e, t, n) {
      "use strict";
      var o = n(13)["default"];
      t.Captcha =
        ((i.prototype.on = function (n, o) {
          var i = this;
          this.promise.then(function (e) {
            var t = i.listeners[n];
            t && e.off(n, t), e.on(n, o), (i.listeners[n] = o);
          });
        }),
        i);
      function i(t) {
        o(this, i),
          (this.promise = n
            .e(0)
            .then(n.t.bind(null, 140, 7))
            .then(function (e) {
              return new e.Captcha(t);
            })),
          (this.listeners = {});
      }
    },
    function (e, t, n) {
      "use strict";
      var o = n(23),
        x = o.setCookie,
        w = o.getCookie,
        y = o.delCookie,
        b = n(24).getQueryString,
        i = n(14),
        _ = i.isMobile,
        k = i.isQQApp,
        q = i.isWxApp,
        C = i.isMSDK,
        r = n(0),
        a = r.unSerialize,
        S = r.serialize,
        E = r.isFunction,
        c = r.extend,
        s = n(45).loginStatus,
        l = n(6),
        u = n(69),
        d = n(22),
        f = n(0),
        p = f.xssFilter,
        h = f.isLegalDomain,
        m = f.xssFilterWxNickName,
        g = n(25);
      function T(e) {
        var t = a(e);
        return "wx" != w("acctype") && Q(t), t;
      }
      function v() {
        var e = 15;
        try {
          e = screen.width - document.body.scrollWidth;
        } catch (n) {}
        g(".ulink-overflow{overflow:hidden;padding-right:" + e + "px}");
        var t = document.body.scrollTop;
        return 0 == t && (t = document.documentElement.scrollTop), t;
      }
      function O() {
        l("body").addClass("ulink-overflow");
      }
      function I() {
        l("body").removeClass("ulink-overflow");
      }
      function L(e, t) {
        -1 < e.indexOf("game.qq.com")
          ? s.clearAME(function () {
              d({ url: e, success: t });
            })
          : d({ url: e, success: t });
      }
      function M(e, t) {
        var n = new Array();
        for (var o in e) n.push(o + "=" + e[o]);
        return n.join(t);
      }
      function j() {
        var e = b("acctype");
        return "weixin" == e && (e = "wx"), e;
      }
      location.href &&
        0 <= location.href.indexOf("qq.com") &&
        (document.domain = "qq.com");
      var N = location.protocol + "//ulink.qq.com/login/qq_redirect.html",
        A = location.protocol + "//ulink.qq.com/login/wx_redirect.html",
        D = {
          loginCallback: null,
          unloginCallback: null,
          logoutCallback: null,
          appConfig: {
            WxAppId: "wx36896ec6df7cd95e",
            scope: "snsapi_userinfo",
            redirect_uri: A,
            avoidConflict: !0,
          },
          oQQConnectParams: {
            appId: "101511284",
            scope: "get_user_info",
            state: "STATE",
            redirect_uri: N,
            avoidConflict: "",
          },
          pcWxConfig: {
            appId: "wxd0cb4119210d6137",
            gameDomain: "ulink.qq.com",
            serviceType: "ulink",
            redirect_uri: A,
            avoidConflict: !0,
          },
          openLinkUrl: "",
          sServiceType: "ulink",
          headImgSize: 132,
          sData: null,
          qqLoginType: "",
          loginType: "all",
        },
        P = {
          qqtang: 21000107,
          fo: 21000106,
          ffo: 21000106,
          pet: 21000109,
          sg: 21000103,
          r2: 21000105,
          xx: 21000104,
          x5: 21000125,
          speed: 21000118,
          cf: 21000124,
          dnf: 21000127,
          nana: 21000119,
          ava: 21000128,
          sl: 21000401,
          battle: 21000111,
          kaixuan: 21000112,
          tgame: 21000113,
          st: 21000114,
          game: 21000115,
          gcs: 21000108,
          pigpet: 21000117,
          fcm: 21000116,
          petbear: 21000101,
          gamesafe: 21000109,
          webgame: 21000118,
          "ied-gameinfo": 21000501,
          default: 21000501,
          gw: 536013304,
        },
        R = {
          getGameId: function (e) {
            var t = e || window.location.host,
              n = t.replace(/(\w+?)\.qq\.com/gi, "$1").split("."),
              o = n[n.length - 1];
            return o == t ? "" : o;
          },
          getAppId: function (e) {
            return P[e] ? P[e] : P["default"];
          },
          getS_URL: function (e) {
            return e
              ? window.location.href.replace(/#+.*$/, "")
              : location.protocol +
                  "//" +
                  window.location.host +
                  "/comm-htdocs/login/logincallback.htm";
          },
        };
      (b("msdkEncodeParam") || b("itopencodeparam")) &&
        (window["_msdkParam"] = {
          timestamp: b("timestamp"),
          appid: b("appid"),
          algorithm: b("algorithm"),
          msdkEncodeParam: b("msdkEncodeParam"),
          itopencodeparam: b("itopencodeparam"),
          version: b("version"),
          sig: b("sig"),
          encode: b("encode"),
          openid: b("openid"),
          area: b("area"),
          platId: b("platid"),
          partition: b("partition"),
          roleId: b("roleid"),
          channelid: b("channelid"),
          gameid: b("gameid"),
          os: b("os"),
          source: b("source"),
          ts: b("ts"),
        });
      var z = {
          isReady: !1,
          $frame: null,
          init: function B(e) {
            var t = this;
            if (t.isReady) E(e) && e();
            else {
              (t.$frame = l(
                '<div class="qConnectLogin">\t\t\t\t<div class="qConnectLoginCover"></div>\t\t\t\t<div class="qConnectLoginContent">\t\t\t\t\t<div>\t\t\t\t\t\t<a class="qConnectClose" href="javascript:void(0)">\xd7</a>\t\t\t\t\t</div>\t\t\t\t\t<iframe class="loginframe" frameborder="0" src="" crossorigin="anonymous"></iframe>\t\t\t\t</div>\t\t\t</div>'
              )),
                document.body.appendChild(t.$frame[0]);
              var n = document.createElement("style");
              n.type = "text/css";
              var o =
                ".loginframe{width:100%;height:400px;overflow:hidden;border:0px solid white}.qConnectLogin{position:fixed;width:100%;height:100%;left:0px;top:0px;z-index:10000;}.qConnectLoginCover{position:absolute;width:100%;height:100%;left:0px;top:0px;z-index:9999;background-color:white;opacity:0.7;filter:alpha(opacity=70)}.qConnectLoginContent{width:752px;height:400px;background-color:#fff;overflow:hidden;position:absolute;left:50%;top:50%;z-index:10000;margin-left:-375px;margin-top:-220px;border:1px solid #bfbfbf;box-shadow:0 0 10px rgba(0,0,0,.3)}.qConnectLoginContent>div{height:30px;width:100%;background-color:#4fb7ec;font-size:18px}.qConnectLoginContent>div span{color:white;display:inline-block;line-height:30px;padding:0px 5px}.qConnectLoginContent>div a{float:right;line-height:30px;text-decoration:none;color:white;font-weight:bold;font-size:25px;width:30px;text-align:center;cursor:pointer}.qConnectLoginContent>div a:hover{color:#f57272}.qConnectLoginContent>div{position:absolute;z-index:100001;right:0px;width:30px;top:0px;height:48px;text-align:center}.qConnectLoginContent>div a{line-height:40px;display:inline-block}";
              n.styleSheet
                ? (n.styleSheet.cssText = o)
                : n.appendChild(document.createTextNode(o)),
                document.getElementsByTagName("head")[0].appendChild(n),
                t.$frame.find("a.qConnectClose").on("click", function () {
                  t.close();
                }),
                (t.isReady = !0),
                E(e) && e();
            }
          },
          close: function () {
            this.$frame.hide(), I();
          },
          show: function (e) {
            var t = this;
            this.init(function () {
              t.$frame.find("iframe").attr("src", e), t.$frame.show(), v(), O();
            });
          },
        },
        W = {
          isReady: !1,
          $frame: null,
          init: function B(e, t) {
            var n = this;
            if (n.isReady) E(t) && t();
            else {
              var o =
                '<div class="qcwx-login" id="qcwx-login">\t\t\t<div class="qcwx-login-cover"></div>\t\t\t<div class="qcwx-login-frame qcwx-active-qc">\t\t\t\t<div class="qcwx-tabs">\t\t\t\t\t<a href="javascript:void(0)" class="qc-tab" data-tab="qc"><i class="ico-qc-logo"></i><span>QQ\u8d26\u53f7\u767b\u5f55</span></a>\t\t\t\t\t<a href="javascript:void(0)" class="wx-tab" data-tab="wx"><i class="ico-wx-logo"></i><span>\u5fae\u4fe1\u8d26\u53f7\u767b\u5f55</span></a>\t\t\t\t\t<a href="javascript:void(0)" class="qcwxtab-close">\xd7</a>\t\t\t\t</div>\t\t\t\t<div class="qcwx-tips">' +
                e.topTips +
                '</div>\t\t\t\t<div class="qcwx-frame">\t\t\t\t\t<div id="qcwx-frame-qc-div" class="qcwx-frame-qc-div"><iframe src="" frameborder="0" class="qcwx-frame-qc"></iframe></div>\t\t\t\t\t<div id="qcwx-frame-wx-div" class="qcwx-frame-wx-div"><iframe src="" frameborder="0" class="qcwx-frame-wx"></iframe></div>\t\t\t\t</div>\t\t\t</div>\t\t</div>';
              (n.$frame = l(o)), document.body.appendChild(n.$frame[0]);
              var i = document.createElement("style");
              i.type = "text/css";
              var r =
                ".qcwx-login{position:fixed;width:100%;height:100%;left:0px;top:0px;display:none;z-index:10000;}.qcwx-login-cover{osition:absolute;width:100%;height:100%;left:0px;top:0px;z-index:9999;background-color:white;opacity:0.7;filter:alpha(opacity=70)}.qcwx-login-frame{width:750px;height:420px;background-color:white;overflow:hidden;position:absolute;left:50%;top:50%;z-index:10000;margin-left:-375px;margin-top:-240px;border:1px solid #bfbfbf;box-shadow:0 0 10px rgba(0,0,0,.3);border-radius:5px 5px 0px 0px}.qcwx-tabs{line-height:40px;position:absolute;z-index:100001;width:100%}.qcwx-tabs .qc-tab,.qcwx-tabs .wx-tab{cursor:pointer;display:inline-block;width:50%;float:left;text-align:center;font-size:18px;background-color:#f1f1f1;color:#b1b1b1;text-decoration:none}.qcwx-active-qc a.qc-tab{color:#fff;background-color:#51b7ec}.qcwx-active-wx a.wx-tab{color:#fff;background-color:#4ab218}.qcwx-tabs .qcwxtab-close{position:absolute;right:0px;top:0px;text-decoration:none;color:grey;font-size:25px;line-height:25px;display:inline-block;padding:0px 5px;border-width:0px 0px 1px 1px;border-style:solid}.qcwx-active-qc .qcwx-tabs .qcwxtab-close{border-color:#e0dcdc}.qcwx-active-wx .qcwx-tabs .qcwxtab-close{border-color:#8BC34A;color:#d4d2d2}.qcwx-tabs .qcwxtab-close:hover{font-weight:bold}.qcwx-tips{line-height:30px;font-size:14px;text-align:center;color:#a2a2a2;position:absolute;width:100%;top:40px;z-index:10001;background-color:#fff}.qcwx-frame{width:750px;height:410px;position:absolute;overflow:hidden}.qcwx-frame div{width:100%;height:100%;position:absolute;left:0px;top:0px;text-align:center;display:none}.qcwx-frame div iframe{width:100%;height:100%}.qcwx-active-qc div.qcwx-frame-qc-div{display:block}.qcwx-active-wx div.qcwx-frame-wx-div{display:block}i.ico-qc-logo,i.ico-wx-logo{display:inline-block;height:23px;vertical-align:middle;margin:0px 5px;margin-top:-4px;background:url(https://vm.gtimg.cn/tencentvideo/vstyle/web/common/style/img/login/sprite_login.png?d=0210&max_age=31104000)  no-repeat}i.ico-qc-logo{width:20px}i.ico-wx-logo{width:24px}.qcwx-active-wx i.ico-qc-logo{background-position:-180px -90px}.qcwx-active-wx i.ico-wx-logo{background-position:-250px -90px}.qcwx-active-qc i.ico-qc-logo{background-position:-200px -90px}.qcwx-active-qc i.ico-wx-logo{background-position:-220px -90px}div#qcwx-frame-wx-div{top:20px}";
              i.styleSheet
                ? (i.styleSheet.cssText = r)
                : i.appendChild(document.createTextNode(r)),
                document.getElementsByTagName("head")[0].appendChild(i),
                n.$frame.find("a.qcwxtab-close").on("click", function () {
                  n.close();
                }),
                n.$frame.find(".qc-tab,.wx-tab").on("click", function (e) {
                  var t = l(e.currentTarget).attr("data-tab");
                  n.$frame
                    .find(".qcwx-login-frame")
                    .removeClass("qcwx-active-qc")
                    .removeClass("qcwx-active-wx")
                    .addClass("qcwx-active-" + t);
                }),
                (n.isReady = !0),
                E(t) && t();
            }
          },
          close: function () {
            this.$frame.hide(), I();
          },
          show: function (e, t, n) {
            var o = this;
            o.init(n, function () {
              o.$frame.find("iframe.qcwx-frame-qc").attr("src", e),
                (t.innerStyle = !0),
                (t.innerParentId = "qcwx-frame-wx-div"),
                ne.loginByWx(t),
                o.$frame.show(),
                v(),
                O();
            });
          },
        },
        F = {
          wxUserInfoCache: {},
          getWxUserInfo: function (e, t) {
            var n = e + "_" + t;
            return this.wxUserInfoCache[n] ? this.wxUserInfoCache[n] : null;
          },
          storeWxUserInfo: function (e, t, n) {
            var o = e + "_" + t;
            this.wxUserInfoCache[o] = n;
          },
          codeToOpenIdCache: {},
          codeToOpenIdLock: function (r, e) {
            var a = this,
              c = [r.appid, r.wxcode, r.sServiceType].join("-");
            if (a.codeToOpenIdCache[c]) {
              if (1 == (t = a.codeToOpenIdCache[c]).state) {
                var t = a.codeToOpenIdCache[c];
                x("openid", t.data.openid, 86400, "qq.com", "/"),
                  x("access_token", t.data.access_token, 86400, "qq.com", "/"),
                  x("acctype", "wx", 86400, "qq.com", "/"),
                  x("appid", D.appConfig.WxAppId, 86400, "qq.com", "/"),
                  e(!0);
              } else 0 == t.state ? t.callbacks.push(e) : 2 == t.state && e(!1);
            } else {
              a.codeToOpenIdCache[c] = { callbacks: [e], data: null, state: 0 };
              var n =
                  location.protocol +
                  "//apps.game.qq.com/ams/ame/codeToOpenId.php?appid=" +
                  r.appid +
                  "&wxcode=" +
                  r.wxcode +
                  "&sServiceType=" +
                  r.sServiceType +
                  "&wxcodedomain=" +
                  r.wxcodedomain +
                  "&acctype=wx",
                s = function s(e) {
                  try {
                    if (0 === e.iRet) {
                      var t = JSON.parse(e.sMsg);
                      x("openid", t.openid, 86400, "qq.com", "/"),
                        x("access_token", t.access_token, 86400, "qq.com", "/"),
                        x("acctype", "wx", 86400, "qq.com", "/"),
                        x("appid", r.appid, 86400, "qq.com", "/"),
                        (a.codeToOpenIdCache[c].state = 1),
                        (a.codeToOpenIdCache[c].data = t);
                      for (
                        var n = 0;
                        n < a.codeToOpenIdCache[c].callbacks.length;
                        n++
                      ) {
                        "function" ==
                          typeof (o = a.codeToOpenIdCache[c].callbacks[n]) &&
                          o(!0);
                      }
                    } else {
                      a.codeToOpenIdCache[c].state = 2;
                      for (
                        n = 0;
                        n < a.codeToOpenIdCache[c].callbacks.length;
                        n++
                      ) {
                        var o;
                        "function" ==
                          typeof (o = a.codeToOpenIdCache[c].callbacks[n]) &&
                          o(!1);
                      }
                    }
                  } catch (i) {
                    return (
                      console.log(i),
                      void alert(
                        "\u83b7\u53d6\u767b\u5f55\u6001\u5931\u8d25\uff0c\u8bf7\u91cd\u65b0\u70b9\u51fb\u5fae\u4fe1\u516c\u4f17\u53f7\u91cc\u7684\u94fe\u63a5\uff01\u8c22\u8c22!"
                      )
                    );
                  }
                };
              window.ulink.http.get({ url: n, success: s });
            }
          },
        },
        U = {
          isReady: !1,
          $frame: null,
          init: function B(e) {
            var t = this;
            if (t.isReady) E(e) && e();
            else {
              (t.$frame = l(
                '<div class="ptLogin">\t\t\t\t<div class="ptLoginCover"></div>\t\t\t\t<div class="ptLoginContent">\t\t\t\t\t<div>\t\t\t\t\t\t<a class="qtClose" href="javascript:void(0)">\xd7</a>\t\t\t\t\t</div>\t\t\t\t\t<iframe class="loginframe" frameborder="0" src="" crossorigin="anonymous"></iframe>\t\t\t\t</div>\t\t\t</div>'
              )),
                document.body.appendChild(t.$frame[0]);
              var n = document.createElement("style");
              n.type = "text/css";
              var o =
                ".loginframe{width:100%;height:400px;overflow:hidden;border:0px solid white}.ptLogin{position:fixed;width:100%;height:100%;left:0px;top:0px;z-index:10000;}.ptLoginCover{position:absolute;width:100%;height:100%;left:0px;top:0px;z-index:9999;background-color:white;opacity:0.7;filter:alpha(opacity=70)}.ptLoginContent{width:622px;height:400px;background-color:#fff;overflow:hidden;position:absolute;left:50%;top:50%;z-index:10000;margin-left:-311px;margin-top:-220px;border:1px solid #bfbfbf;box-shadow:0 0 10px rgba(0,0,0,.3)}.ptLoginContent>div{position:absolute;z-index:100001;right:1px;top:1px;text-align:center;height:30px;width:47px;background-color:#4fb7ec;font-size:18px}.ptLoginContent>div a{display:inline-block;float:right;line-height:25px;text-decoration:none;color:white;font-weight:bold;font-size:25px;width:47px;text-align:center;cursor:pointer}.ptLoginContent>div a:hover{color:#f57272}";
              n.styleSheet
                ? (n.styleSheet.cssText = o)
                : n.appendChild(document.createTextNode(o)),
                document.getElementsByTagName("head")[0].appendChild(n),
                t.$frame.find("a.qtClose").on("click", function () {
                  t.close();
                }),
                (t.isReady = !0),
                E(e) && e();
            }
          },
          close: function () {
            this.$frame.hide(), I();
          },
          show: function (e) {
            var t = this;
            this.init(function () {
              (window.domain = "qq.com"),
                t.$frame.find("iframe").attr("src", e),
                t.$frame.show(),
                v(),
                O();
            });
          },
        };
      function B(e) {
        return c(D, e, !0), this;
      }
      function Q(e) {
        var t = e.openid;
        if (t) {
          var n = w("appid");
          if (n)
            return (
              (e.headimgurl =
                "http://thirdqq.qlogo.cn/qqapp/" + n + "/" + t + "/100"),
              e
            );
        }
        return (
          !e.userUin ||
            ("pt" !== e.loginType && "qq" !== e.loginType) ||
            (e.headimgurl =
              "https://q1.qlogo.cn/g?b=qq&nk=" + e.userUin + "&s=100"),
          e
        );
      }
      function $(m, g) {
        var v = function v() {
            if (
              (function d() {
                if (
                  !b("msdkEncodeParam") &&
                  !b("itopencodeparam") &&
                  b("sig") &&
                  b("version") &&
                  b("algorithm")
                ) {
                  var e = "https://" + location.host + location.pathname;
                  return window.location.replace(e), !1;
                }
                if (b("msdkEncodeParam") || b("itopencodeparam")) return !0;
                var t = (b("openid") ? b : w)("openid"),
                  n = (b("appid") ? b : w)("appid"),
                  o = b("access_token");
                b("openkey") && (o = b("openkey"));
                !o && b("token") && (o = b("token"));
                !o && w("access_token") && (o = w("access_token"));
                !o && w("token") && (o = w("token"));
                var i = b("acctype");
                !i && w("acctype") && (i = w("acctype"));
                i && "weixin" == i && (i = "wx");
                if (t && o && "qc" != i) {
                  if (
                    (x(
                      "IED_LOG_INFO2",
                      S({ openid: t, loginType: i }),
                      86400,
                      "qq.com",
                      "/"
                    ),
                    i)
                  )
                    x("acctype", i, 86400, "qq.com", "/");
                  else {
                    (i = /^[0-9A-Z]{32}$/.test(t)
                      ? "qc"
                      : /^[\dA-Za-z-_]{28,64}$/.test(t)
                      ? "wx"
                      : ""),
                      x("acctype", i, 86400, "qq.com", "/");
                  }
                  x("openid", t, 86400, "qq.com", "/"),
                    x("access_token", o, 86400, "qq.com", "/"),
                    x("appid", n, 86400, "qq.com", "/");
                }
                var r = ee(),
                  a = null == r ? null : T(r);
                if (!(("qc" != i && "wx" != i) || (a && a.openid))) return !1;
                if (null == a) return !1;
                var c = a.userUin,
                  s =
                    86400 <
                    Math.floor(new Date().getTime() / 1e3) - a.userLoginTime;
                if (!isNaN(c) && "" != c && !s) return !0;
                if (t && o && !s) return !0;
                return !1;
              })()
            ) {
              if (E(m)) {
                var e = w("acctype"),
                  t = ee() ? T(ee()) : {};
                if (
                  (!C() && "wx" == D.loginType && "wx" != t.loginType) ||
                  ("qq" == D.loginType && "wx" == t.loginType)
                )
                  return void Y({
                    logoutCallback: function () {
                      E(g) && g();
                    },
                  });
                if (!t.loginType) {
                  var n = /^[0-9A-Z]{32}$/,
                    o = /^[\dA-Za-z-_]{28,64}$/;
                  if (b("msdkEncodeParam") || b("itopencodeparam")) {
                    if (b("openid")) {
                      var i = b("openid");
                      n.test(i)
                        ? (t.loginType = "qc")
                        : o.test(i)
                        ? (t.loginType = "wx")
                        : (t.loginType = ""),
                        (t.openid = i);
                    } else t.loginType = "";
                    x("IED_LOG_INFO2", S(t), 86400, "qq.com", "/");
                  } else
                    w("uin")
                      ? ((t.loginType = "qq"),
                        x("IED_LOG_INFO2", S(t), 86400, "qq.com", "/"))
                      : w("openid") &&
                        (n.test(w("openid"))
                          ? (t.loginType = "qc")
                          : o.test(w("openid"))
                          ? (t.loginType = "wx")
                          : (t.loginType = ""),
                        x("IED_LOG_INFO2", S(t), 86400, "qq.com", "/"));
                }
                if ((t.headimgurl || Q(t), "wx" == e)) {
                  if (
                    !(function f() {
                      {
                        if (_()) {
                          if (
                            ("" ===
                              (a = D.appConfig && D.appConfig.avoidConflict) &&
                              (a = q()),
                            !a)
                          )
                            return !0;
                          var e = b("appid"),
                            t = w("appid"),
                            n = b("access_token"),
                            o = w("access_token"),
                            i = b("openid"),
                            r = w("openid");
                          return n && i
                            ? (e &&
                                ((D.appConfig.appid = e),
                                x("appid", e, 86400, "qq.com", "/")),
                              !0)
                            : !o ||
                                !r ||
                                !D.appConfig ||
                                !D.appConfig.WxAppId ||
                                t == D.appConfig.WxAppId;
                        }
                        var a;
                        if (!(a = D.pcWxConfig && D.pcWxConfig.avoidConflict))
                          return !0;
                        (e = b("appid")),
                          (t = w("appid")),
                          (n = b("access_token")),
                          (o = w("access_token")),
                          (i = b("openid")),
                          (r = w("openid"));
                        return n && i
                          ? (e &&
                              ((D.pcWxConfig.appid = e),
                              x("appid", e, 86400, "qq.com", "/")),
                            !0)
                          : !o ||
                              !r ||
                              !D.pcWxConfig ||
                              !D.pcWxConfig.appId ||
                              t == D.pcWxConfig.appId;
                      }
                    })()
                  )
                    return void Y({
                      logoutCallback: function () {
                        E(g) && g();
                      },
                    });
                  G(m, g);
                } else {
                  if (w("IED_LOG_INFO2"))
                    try {
                      t.nickName = decodeURIComponent(t.nickName);
                    } catch (p) {
                      console.error(
                        "\u6635\u79f0\u518d\u6b21decode\u5f15\u8d77\u62a5\u9519"
                      ),
                        console.error(p.message);
                    }
                  if (
                    ("pt" == t.loginType && (t.loginType = "qq"),
                    "qq" != t.loginType ||
                      t.nickName ||
                      (t.nickName = t.userUin),
                    t.headimgurl || Q(t),
                    !k() &&
                      !C() &&
                      "wx" !== t.loginType &&
                      D.qqLoginType &&
                      D.qqLoginType !== t.loginType)
                  )
                    return void Y({
                      logoutCallback: function () {
                        E(g) && g();
                      },
                    });
                  if (
                    D.oQQConnectParams.avoidConflict &&
                    w("appid") &&
                    D.oQQConnectParams.appId !== w("appid")
                  )
                    return void Y({
                      logoutCallback: function () {
                        E(g) && g();
                      },
                    });
                  if (k()) {
                    var r = w("uin"),
                      a = (function h(e, t) {
                        return (Array(t).join(0) + e).slice(-t);
                      })(t.userUin, 10);
                    if (
                      (console.log("uin=>" + r),
                      console.log("userUin=>" + a),
                      r !== "o" + a)
                    )
                      return (
                        console.log(
                          "\u9891\u7e41\u5207\u6362\u8d26\u53f7\uff0c\u5f15\u8d77\u4e32\u53f7\uff01"
                        ),
                        void Y(function () {
                          te();
                        })
                      );
                  }
                  m(t);
                }
              }
            } else {
              var c = "jsonp" + Math.floor(100 * Math.random());
              if (
                j() &&
                !(
                  ("wx" != j() && "qq" != j() && "qc" != j()) ||
                  (b("openid") && (b("access_token") || b("openkey")))
                )
              )
                return (
                  y("acctype", "qq.com", "/"),
                  y("openid", "qq.com", "/"),
                  y("access_token", "qq.com", "/"),
                  void (g && g())
                );
              var s = b("access_token");
              b("openkey") && (s = b("openkey")),
                "weixin" == (e = b("acctype")) && (e = "wx");
              var l = b("appid");
              (i = b("openid")) && x("openid", i, 86400, "qq.com", "/"),
                l && x("appid", l, 86400, "qq.com", "/"),
                s && x("access_token", s, 86400, "qq.com", "/"),
                e && x("acctype", e, 86400, "qq.com", "/"),
                (window[c] = function (e) {
                  if (0 == e.errorCode || -1 == e.errorCode)
                    if (e.isLogin) {
                      var t = {},
                        n = b("openkey"),
                        o = b("access_token") ? b("access_token") : n,
                        i = "weixin" == b("acctype") ? "wx" : b("acctype");
                      t.userUin = e.userUin;
                      try {
                        t.nickName = decodeURIComponent(e.nickName);
                      } catch (p) {
                        (t.nickName = e.nickName),
                          console.error(
                            "\u6635\u79f0decode\u5f15\u8d77\u62a5\u9519"
                          ),
                          console.error(p.message);
                      }
                      if (
                        ((t.userLoginTime = e.userLoginTime),
                        (t.openid = e.openid),
                        (e.loginType = e.loginType ? e.loginType : i || "qq"),
                        (t.loginType = e.loginType),
                        "pt" == t.loginType && (t.loginType = "qq"),
                        "qq" != t.loginType ||
                          t.nickName ||
                          (t.nickName = t.userUin),
                        t.headimgurl || Q(t),
                        "qc" == t.loginType
                          ? x(
                              "IED_LOG_INFO2_QC",
                              S(t),
                              86400,
                              location.host,
                              "/"
                            )
                          : x("IED_LOG_INFO2", S(t), 86400, "qq.com", "/"),
                        (!C() && "wx" == D.loginType && "wx" != t.loginType) ||
                          ("qq" == D.loginType && "wx" == t.loginType))
                      )
                        return void Y({
                          logoutCallback: function () {
                            E(g) && g();
                          },
                        });
                      if (
                        !k() &&
                        !C() &&
                        "wx" !== t.loginType &&
                        D.qqLoginType &&
                        D.qqLoginType !== t.loginType
                      )
                        return void Y({
                          logoutCallback: function () {
                            E(g) && g();
                          },
                        });
                      "wx" == e.loginType || "qq" == e.loginType
                        ? (x(
                            "acctype",
                            e.loginType ? e.loginType : i,
                            86400,
                            "qq.com",
                            "/"
                          ),
                          x("openid", e.openid, 86400, "qq.com", "/"),
                          o && x("access_token", o, 86400, "qq.com", "/"),
                          x("appid", b("appid"), 86400, "qq.com", "/"),
                          "wx" == e.loginType
                            ? G(m, g)
                            : "function" == typeof m && m(t))
                        : "function" == typeof m && m(t);
                    } else
                      y("IED_LOG_INFO2", "qq.com", "/"),
                        y("acctype", "qq.com", "/"),
                        y("openid", "qq.com", "/"),
                        y("access_token", "qq.com", "/"),
                        "function" == typeof g && g(e);
                });
              var u =
                location.protocol +
                "//login.game.qq.com/comm-cgi-bin/login/LoginReturnInfo.cgi?callback=" +
                c;
              if (j() || k())
                (u =
                  (u =
                    location.protocol +
                    "//ams.game.qq.com/ams/userLoginSvr?callback=" +
                    c) +
                  "&acctype=" +
                  e +
                  "&openid=" +
                  i +
                  "&access_token=" +
                  s +
                  "&appid=" +
                  l),
                  console.log("loginUrl:" + u);
              else if ("qc" == w("acctype")) {
                u =
                  location.protocol +
                  "//ams.game.qq.com/ams/userLoginSvr?callback=" +
                  c;
                (l = w("appid")), (s = w("access_token"));
                u =
                  u +
                  "&acctype=qc&openid=" +
                  (i = w("openid")) +
                  "&access_token=" +
                  s +
                  "&appid=" +
                  l;
              }
              L(u, function (e, t) {});
            }
          },
          e = w("qclogin_code");
        if (e)
          return (
            y("qclogin_code", "qq.com", "/"),
            void J({ code: e, appid: D.oQQConnectParams.appId }, function () {
              v();
            })
          );
        var t = w("wxcode");
        t && (y("wxcode", "qq.com", "/"), _())
          ? F.codeToOpenIdLock(
              {
                wxcode: t,
                appid: D.appConfig.WxAppId,
                sServiceType: D.sServiceType,
                wxcodedomain: window.location.host,
              },
              function () {
                v();
              }
            )
          : v();
      }
      function H(e) {
        var t = e.headimgurl,
          n = D.headImgSize,
          o = new RegExp("/" + n + "$").test(t);
        t && !o && (e.headimgurl = t + "/" + n);
      }
      function G(n, e) {
        var t = w("openid"),
          o = w("access_token");
        ne.getUserInfoByWxOpenId(
          { openid: t, access_token: o },
          function (e) {
            if (E(n) && e) (e.loginType = "wx"), (ne.wxUserInfo = e), n(e);
            else {
              var t = ee() ? T(ee()) : {};
              H(t), n(t);
            }
          },
          e
        );
      }
      var V = {
        queueList: {},
        isWaiting: function (e, t) {
          var n = e + "-" + t;
          return this.queueList[n] && this.queueList[n].length;
        },
        add: function (e, t, n) {
          var o = e + "-" + t;
          this.queueList[o]
            ? this.queueList[o].push(n)
            : (this.queueList[o] = [n]);
        },
        run: function (e, t, n) {
          for (var o = this.queueList[e + "-" + t]; o && o.length; ) {
            var i = o.shift();
            "function" == typeof i && i(n);
          }
        },
      };
      function J(e, o) {
        var n = this,
          i = "doCallback_" + Math.ceil(1e4 * Math.random());
        window[i] = function (e) {
          if (0 == e.errorCode) {
            var t = {
                openid: w("openid"),
                userUin: "",
                nickName: e.nickName,
                userLoginTime: parseInt(new Date().getTime() / 1e3),
                loginType: "qc",
                expires: 86400,
              },
              n = S(t);
            x("IED_LOG_INFO2_QC", n, 86400, location.host, "/"),
              E(o) && o({ iRet: 0, sMsg: "\u767b\u5f55\u6210\u529f" });
          } else
            E(o) &&
              o({
                iRet: 3,
                sMsg:
                  e.errorStr ||
                  "\u83b7\u53d6\u767b\u5f55\u4fe1\u606f\u51fa\u9519\uff0c\u8bf7\u91cd\u8bd5~",
              });
        };
        var r = {
            a: "qcCodeToOpenId",
            qc_code: e.code,
            appid: e.appid,
            redirect_uri: encodeURIComponent(e.redirect_uri || N),
          },
          t = "doCallback2_" + Math.ceil(1e4 * Math.random());
        (window[t] = function (e) {
          if (0 == e.iRet) {
            var t = e;
            x("openid", t.openid, 86400, location.host, "/"),
              x("access_token", t.access_token, 86400, location.host, "/"),
              x("appid", r.appid, 86400, location.host, "/"),
              x("acctype", "qc", 86400, location.host, "/"),
              L(
                location.protocol +
                  "//ams.game.qq.com/ams/userLoginSvr?callback=" +
                  i +
                  "&acctype=qc&appid=" +
                  r.appid +
                  "&openid=" +
                  t.openid +
                  "&access_token=" +
                  t.access_token,
                function (e) {}
              );
          } else
            n.logout({
              logoutCallback: function () {
                E(o) && o({ iRet: 2, oriRet: e.iRet, sMsg: e.sMsg });
              },
            });
        }),
          d({
            url:
              location.protocol +
              "//ams.game.qq.com/ams/userLoginSvr?callback=" +
              t +
              "&" +
              S(r),
          });
      }
      function K(e, t) {
        var n = {
          gameId: "",
          appId: "",
          needMaskDiv: !0,
          needReloadPage: !0,
          loginDivOffset: { left: 0.5, top: 0.5 },
          msg: "\u6b63\u5728\u83b7\u53d6\u767b\u5f55\u4fe1\u606f\uff0c\u8bf7\u7a0d\u5019...",
          loginedCallback: null,
          type: "float",
          loginFrame: "loginHTMLFrame",
          css: "",
          s_url: "",
        };
        c(n, e), c(n, D);
        var o = D.oQQConnectParams || {
          appId: "101491592",
          scope: "get_user_info",
          redirect_uri: N,
          state: "STATE",
        };
        function i(e) {
          return e && e.code
            ? e.state != o.state
              ? (alert(
                  "\u62b1\u6b49\uff0c\u6765\u6e90\u6821\u9a8c\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55"
                ),
                void (t ? W.close() : z.close()))
              : void J(
                  {
                    code: e.code,
                    appid: o.appId,
                    redirect_uri: o.redirect_uri,
                  },
                  function (e) {
                    0 == e.iRet
                      ? n.needReloadPage
                        ? window.location.reload()
                        : (t ? W.close() : z.close(),
                          E(D.loginCallback) && E(D.unloginCallback)
                            ? $(D.loginCallback, D.unloginCallback)
                            : E(n.loginedCallback) &&
                              E(n.unlogincallback) &&
                              $(n.loginedCallback, n.unlogincallback))
                      : t
                      ? W.close()
                      : z.close();
                  }
                )
            : (alert(
                "\u62b1\u6b49\uff0c\u53c2\u6570\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55"
              ),
              void (t ? W.close() : z.close()));
        }
        if (
          (n.oQQConnectParams && c(o, n.oQQConnectParams, !0),
          "https:" === location.protocol && /\.qq\.com$/.test(location.host))
        )
          window.qqConnectCallback = i;
        else {
          var r = function r(e) {
            var t = e.data;
            if (
              /^https?:\/\/ulink\.qq\.com$/.test(e.origin) &&
              "[object String]" === Object.prototype.toString.call(t)
            )
              try {
                var n = JSON.parse(t);
                "qqLogin" === n.ulinkType && i(n);
              } catch (e) {}
          };
          window.addEventListener
            ? window.addEventListener("message", r, !1)
            : window.attachEvent
            ? window.attachEvent("onmessage", r)
            : (window.onmessage = r);
        }
        var a = "https://graph.qq.com/oauth2.0/authorize?response_type=code";
        if (
          ((a +=
            "&" +
            S({
              state: o.state,
              client_id: o.appId,
              redirect_uri: o.redirect_uri || N,
            })),
          t)
        )
          return a;
        z.show(a);
      }
      function Z(e) {
        F.codeToOpenIdLock(
          {
            wxcode: e,
            appid: D.pcWxConfig.appId,
            sServiceType: D.pcWxConfig.serviceType,
            wxcodedomain: D.pcWxConfig.gameDomain,
          },
          function () {
            "function" == typeof window.pcWxLoginCallback &&
              window.pcWxLoginCallback();
          }
        );
      }
      if ("https:" === location.protocol && /\.qq\.com$/.test(location.host))
        window.doWxCodeToOpenId = Z;
      else {
        var X = function X(e) {
          var t = e.data;
          if (
            /^https?:\/\/ulink\.qq\.com$/.test(e.origin) &&
            "[object String]" === Object.prototype.toString.call(t)
          )
            try {
              var n = JSON.parse(t);
              "wxLogin" === n.ulinkType && Z(n.code);
            } catch (e) {}
        };
        window.addEventListener
          ? window.addEventListener("message", X, !1)
          : window.attachEvent
          ? window.attachEvent("onmessage", X)
          : (window.onmessage = X);
      }
      function Y(e) {
        E(e) ? c(D, { logoutCallback: e }, !0) : c(D, e, !0),
          y("p_skey", "qq.com", "/"),
          y("p_uin", "qq.com", "/"),
          y("uin", "qq.com", "/"),
          y("skey", "qq.com", "/"),
          y("IED_LOG_INFO2"),
          y("IED_LOG_INFO2", "qq.com", "/"),
          y("openid", "qq.com", "/"),
          y("access_token", "qq.com", "/"),
          y("acctype", "qq.com", "/"),
          y("appid", "qq.com", "/"),
          y("lg_source", "qq.com", "/"),
          y("openid"),
          y("access_token"),
          y("acctype"),
          y("appid"),
          y("IED_LOG_INFO2_QC", location.host, "/"),
          y("openid", location.host, "/"),
          y("access_token", location.host, "/"),
          y("appid", location.host, "/"),
          y("acctype", location.host, "/");
        var t = 2;
        window["logoutWxCallback"] = function () {
          t--, E(D.logoutCallback) && 0 == t && D.logoutCallback();
        };
        var n = document.createElement("iframe");
        (n.id = "loginWxIframe"),
          (n.name = "loginWxIframe"),
          (n.scrolling = "no"),
          (n.frameBorder = "0"),
          (n.style.display = "none"),
          document.body.appendChild(n),
          (n.src = location.protocol + "//apps.game.qq.com/ams/logout_wx.html"),
          (window["logoutCallback"] = window["logoutWxCallback"]);
        var o = document.createElement("iframe");
        (o.id = "loginIframe"),
          (o.name = "loginIframe"),
          (o.scrolling = "no"),
          (o.frameBorder = "0"),
          (o.style.display = "none"),
          document.body.appendChild(o),
          (o.src = location.protocol + "//game.qq.com/act/logout.html?t=1");
      }
      function ee() {
        var e = w("IED_LOG_INFO2");
        return "qc" == w("acctype") && (e = w("IED_LOG_INFO2_QC")), e;
      }
      function te(e) {
        var t = e || window.location.href;
        q()
          ? (window.location.href =
              window.location.protocol +
              "//imgcache.qq.com/club/themes/mobile/middle_page/index.html?url=" +
              encodeURIComponent(t))
          : (window.location.href =
              "mqqapi://forward/url?url_prefix=" +
              window.btoa(t) +
              "&version=1&src_type=web");
      }
      var ne = (t.LoginManager = {
        init: B,
        checkLogin: $,
        logout: Y,
        login: function oe(e) {
          if (
            ((w("IED_LOG_INFO2") || w("IED_LOG_INFO2_QC")) &&
              (y("IED_LOG_INFO2"),
              y("IED_LOG_INFO2", "qq.com", "/"),
              y("IED_LOG_INFO2_QC", location.host, "/")),
            _())
          ) {
            var t = D.oQQConnectParams,
              n = "https://graph.qq.com/oauth2.0/authorize?response_type=code",
              o = {
                state: t.state,
                client_id: t.appId,
                redirect_uri:
                  t.redirect_uri +
                  "?s_url=" +
                  encodeURIComponent(location.href),
              };
            for (var i in o) o[i] = encodeURIComponent(o[i]);
            (n += "&" + M(o, "&")), (location.href = n);
          } else K(e, !1);
        },
        loginByPT: function ie(e) {
          if (_()) {
            c(D, e, !0);
            var t = D.s_url ? D.s_url : window.location.href,
              n =
                e == undefined || e.sData == undefined
                  ? ""
                  : encodeURIComponent(M(e.sData, "&")),
              o = { s_url: encodeURIComponent(t), sData: n };
            window.location =
              location.protocol +
              "//" +
              window.location.host +
              "/comm-htdocs/milo_mobile/login.html?" +
              M(o, "&");
          } else
            (function r(e) {
              var t = { appid: "", target: "top", s_url: "" },
                n = {
                  gameId: "",
                  appId: "",
                  needMaskDiv: !0,
                  needReloadPage: !0,
                  loginDivOffset: { left: 0.5, top: 0.5 },
                  msg: "\u6b63\u5728\u83b7\u53d6\u767b\u5f55\u4fe1\u606f\uff0c\u8bf7\u7a0d\u5019...",
                  loginedCallback: null,
                  unlogincallback: null,
                  type: "float",
                  loginFrame: "loginHTMLFrame",
                  css: "",
                  s_url: "",
                };
              c(n, e);
              var o = e == undefined || e.sData == undefined ? "" : e.sData;
              (n.gameId = n.gameId ? n.gameId : R.getGameId()),
                (t.appid = n.appId ? n.appId : R.getAppId(n.gameId)),
                (t.s_url = n.s_url
                  ? encodeURIComponent(n.s_url)
                  : encodeURIComponent(R.getS_URL(n.needReloadPage))),
                (t.target = n.needReloadPage ? "top" : "self"),
                (t.style = n.style ? n.style : "20"),
                (t.daid = 8);
              var i =
                "https://xui.ptlogin2.qq.com/cgi-bin/xlogin?proxy_url=" +
                location.protocol +
                "//game.qq.com/comm-htdocs/milo/proxy.html&" +
                S(t) +
                "&" +
                S(o);
              U.show(i),
                !1 === n.needReloadPage &&
                  ((window["ptlogin2_onClose"] = function () {
                    U.close();
                  }),
                  (window["LoginedCallback"] = function () {
                    E(D.loginCallback) && E(D.unloginCallback)
                      ? $(D.loginCallback, D.unloginCallback)
                      : E(n.loginedCallback) &&
                        E(n.unlogincallback) &&
                        $(n.loginedCallback, n.unlogincallback);
                  }));
            })(e);
        },
        loginByWx: function re(e) {
          // if ((void 0 === e && (e = {}), c(D, e, !0), _())) {
          if (true) {
            var t = D.appConfig.redirect_uri;
            console.log(q());
            if (q()) {
              var n = window.yourActUrl;
              (t += "?s_url=" + encodeURIComponent(n)),
                (window.location.href =
                  'https:' +
                  "//open.weixin.qq.com/connect/oauth2/authorize?appid=" +
                  D.appConfig.WxAppId +
                  "&redirect_uri=" +
                  encodeURIComponent(t) +
                  "&response_type=code&scope=" +
                  D.appConfig.scope +
                  "&state=STATE#wechat_redirect");
            } else
              !(function o() {
                if (D.openLinkUrl) {
                  if (!h(D.openLinkUrl))
                    return void console.error(
                      "\u8df3\u8f6c\u57df\u540d\u4e0d\u5408\u6cd5"
                    );
                  window.location.href = p(D.openLinkUrl);
                } else
                  console.error(
                    "\u8be5\u9875\u9762\u65e0\u6cd5\u62c9\u8d77\u5fae\u4fe1\uff0c\u8bf7\u8054\u7cfb\u5fae\u4fe1\u7533\u8bf7\u8be5\u9875\u9762\u7684openLink\u6743\u9650"
                  );
              })();
          } else
            (function r(e) {
              var t = D.pcWxConfig.redirect_uri,
                n = document.location.href;
              t =
                t +
                "?appid=" +
                D.pcWxConfig.appId +
                "&sServiceType=" +
                D.pcWxConfig.serviceType +
                "&originalUrl=" +
                encodeURIComponent(n);
              var o = {
                id: "ams_container_wxlogin",
                appid: D.pcWxConfig.appId,
                scope: "snsapi_login",
                redirect_uri: encodeURIComponent(t),
                state: "1",
                style: e.style || "black",
                href: "",
                self_redirect: !0,
                needReloadPage: !0,
              };
              c(o, e);
              var i = function i() {
                var r = function r() {
                  var e = l(
                      '<div id="_overlay_" style="background-color:#E6F5FF; border-top: 1px solid #E6F5FF; position: fixed; height:100%; z-index: 9998; width: 100%; left: 0px; top: 0px; opacity: 0.7;filter:alpha(opacity = 70);display:none;"></div>'
                    ),
                    t = l(
                      "<div id='ams_loginWxDiv' style='margin-left: -150px;background-color:#fff'></div>"
                    ),
                    n = v();
                  t.css({
                    width: "300px",
                    height: "460px",
                    border: "1px solid #ccc",
                    padding: "0px 20px",
                    position: "absolute",
                    zIndex: "100002",
                    top: n + 50 + "px",
                    left: "50%",
                    display: "none",
                  });
                  var o = l("<div id='ams_container_wxlogin'></div>"),
                    i = l(
                      "<span id='ams_btn_closebtn' style='height:40px;width:40px;line-height:36px;text-align:center;color:#666;font-family:Verdana,sans-serif;float:right;font-size:30px;margin-right:-20px;cursor:pointer'>\xd7</span>"
                    );
                  i
                    .on("mouseenter", function () {
                      i.css({ color: "#000" });
                    })
                    .on("mouseleave", function () {
                      i.css({ color: "#666", fontWeight: "" });
                    })
                    .on("click", function () {
                      l("#_overlay_").hide(),
                        l("#ams_loginWxDiv").hide(),
                        t.remove(),
                        e.remove(),
                        I();
                    }),
                    t.append(i).append(o),
                    l("body").append(t),
                    l("body").append(e);
                };
                e.innerStyle
                  ? d({
                      url:
                        location.protocol +
                        "//res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js",
                      success: function () {
                        o.id = e.innerParentId;
                        new WxLogin(o);
                      },
                    })
                  : (r(),
                    d({
                      url:
                        location.protocol +
                        "//res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js",
                      success: function () {
                        l("#_overlay_").show(),
                          l("#ams_loginWxDiv").show(),
                          O();
                        new WxLogin(o);
                      },
                    }));
              };
              i(),
                (window.pcWxLoginCallback = function () {
                  e.isQcWx
                    ? W.close()
                    : e.isQqWx
                    ? (l("#milo_login_win").remove(),
                      l("#milo_mask_layer").remove(),
                      l("#milo_login_css_win").remove())
                    : (l("#_overlay_").remove(),
                      l("#ams_loginWxDiv").remove(),
                      I()),
                    o.needReloadPage
                      ? window.location.reload()
                      : E(D.loginCallback) && E(D.unloginCallback)
                      ? $(D.loginCallback, D.unloginCallback)
                      : E(o.loginedCallback) &&
                        E(o.unlogincallback) &&
                        $(o.loginedCallback, o.unlogincallback);
                });
            })(e);
        },
        loginByWxAndQQ: function ae(e) {
          (e = e || {}),
            (w("IED_LOG_INFO2") || w("IED_LOG_INFO2_QC")) &&
              (y("IED_LOG_INFO2"),
              y("IED_LOG_INFO2", "qq.com", "/"),
              y("IED_LOG_INFO2_QC", location.host, "/"));
          var t = {
            topTips:
              "\u5fae\u4fe1\u548cQQ\u662f\u4e24\u4e2a\u72ec\u7acb\u8d26\u53f7\uff0c\u8d26\u53f7\u4fe1\u606f\u4e0d\u4e92\u901a",
          };
          c(t, e, !0);
          var n = K(t, !0);
          (e.isQcWx = !0), W.show(n, e, t);
        },
        getUserUin: function ce() {
          var e = ee(),
            t = null == e ? null : T(e);
          if (null == t) return "";
          var n = t.userUin;
          return "wx" == w("acctype") ? n || "" : isNaN(n) ? w("uin") : n;
        },
        getNickName: function se() {
          var e = ee(),
            t = null == e ? null : T(e);
          return null == t ? "" : decodeURIComponent(t.nickName);
        },
        getUserFace: function le() {
          var e = "";
          if (this.getUserUin())
            e = "https://q1.qlogo.cn/g?b=qq&nk=" + this.getUserUin() + "&s=100";
          return e;
        },
        openLink: te,
        getUserInfoByWxOpenId: function ue(n, t, o) {
          var i =
              location.protocol +
              "//apps.game.qq.com/ams/ame/getWXUser.php?access_token=" +
              n.access_token +
              "&openid=" +
              n.openid,
            r =
              location.protocol +
              "//ossweb-img.qq.com/images/js/milo/biz/widget/emoji/emoji.css",
            a = function a() {
              if (V.isWaiting(n.openid, n.access_token))
                V.add(n.openid, n.access_token, t);
              else {
                V.add(n.openid, n.access_token, t);
                var e = "jsonp" + Math.floor(100 * Math.random());
                (window[e] = function (e) {
                  if (0 === e.iRet) {
                    var t = e.data;
                    (t.nickName = m(t.nickname)),
                      H(t),
                      F.storeWxUserInfo(n.openid, n.access_token, t),
                      0 == l("head").find("link[href='" + r + "']").length
                        ? u({
                            url: r,
                            success: function () {
                              V.run(n.openid, n.access_token, t);
                            },
                          })
                        : V.run(n.openid, n.access_token, t);
                  } else
                    ne.logout({
                      logoutCallback: function () {
                        E(o) && o(e);
                      },
                    });
                }),
                  d({ url: i + "&callback=" + e });
              }
            };
          n.openid &&
          n.access_token &&
          F.getWxUserInfo(n.openid, n.access_token)
            ? t && t(F.getWxUserInfo(n.openid, n.access_token))
            : a();
        },
      });
    },
    function (e, t, n) {
      var o = n(2),
        i = o.JSON || (o.JSON = { stringify: JSON.stringify });
      e.exports = function (e) {
        return i.stringify.apply(i, arguments);
      };
    },
    function (e, t, n) {
      e.exports = { default: n(110), __esModule: !0 };
    },
    function (e, t, n) {
      n(26), n(42), (e.exports = n(46).f("iterator"));
    },
    function (e, t, n) {
      e.exports = { default: n(112), __esModule: !0 };
    },
    function (e, t, n) {
      n(113), n(52), n(119), n(120), (e.exports = n(2).Symbol);
    },
    function (e, t, n) {
      "use strict";
      var o = n(1),
        a = n(11),
        i = n(10),
        r = n(7),
        c = n(55),
        s = n(114).KEY,
        l = n(18),
        u = n(39),
        d = n(30),
        f = n(29),
        p = n(3),
        h = n(46),
        m = n(47),
        g = n(115),
        v = n(116),
        x = n(4),
        w = n(9),
        y = n(12),
        b = n(36),
        _ = n(19),
        k = n(56),
        q = n(117),
        C = n(118),
        S = n(5),
        E = n(28),
        T = C.f,
        O = S.f,
        I = q.f,
        L = o.Symbol,
        M = o.JSON,
        j = M && M.stringify,
        N = "prototype",
        A = p("_hidden"),
        D = p("toPrimitive"),
        P = {}.propertyIsEnumerable,
        R = u("symbol-registry"),
        z = u("symbols"),
        W = u("op-symbols"),
        F = Object[N],
        U = "function" == typeof L,
        B = o.QObject,
        Q = !B || !B[N] || !B[N].findChild,
        $ =
          i &&
          l(function () {
            return (
              7 !=
              k(
                O({}, "a", {
                  get: function () {
                    return O(this, "a", { value: 7 }).a;
                  },
                })
              ).a
            );
          })
            ? function (e, t, n) {
                var o = T(F, t);
                o && delete F[t], O(e, t, n), o && e !== F && O(F, t, o);
              }
            : O,
        H = function (e) {
          var t = (z[e] = k(L[N]));
          return (t._k = e), t;
        },
        G =
          U && "symbol" == typeof L.iterator
            ? function (e) {
                return "symbol" == typeof e;
              }
            : function (e) {
                return e instanceof L;
              },
        V = function (e, t, n) {
          return (
            e === F && V(W, t, n),
            x(e),
            (t = b(t, !0)),
            x(n),
            a(z, t)
              ? (n.enumerable
                  ? (a(e, A) && e[A][t] && (e[A][t] = !1),
                    (n = k(n, { enumerable: _(0, !1) })))
                  : (a(e, A) || O(e, A, _(1, {})), (e[A][t] = !0)),
                $(e, t, n))
              : O(e, t, n)
          );
        },
        J = function (e, t) {
          x(e);
          for (var n, o = g((t = y(t))), i = 0, r = o.length; i < r; )
            V(e, (n = o[i++]), t[n]);
          return e;
        },
        K = function (e) {
          var t = P.call(this, (e = b(e, !0)));
          return (
            !(this === F && a(z, e) && !a(W, e)) &&
            (!(t || !a(this, e) || !a(z, e) || (a(this, A) && this[A][e])) || t)
          );
        },
        Z = function (e, t) {
          if (((e = y(e)), (t = b(t, !0)), e !== F || !a(z, t) || a(W, t))) {
            var n = T(e, t);
            return (
              !n || !a(z, t) || (a(e, A) && e[A][t]) || (n.enumerable = !0), n
            );
          }
        },
        X = function (e) {
          for (var t, n = I(y(e)), o = [], i = 0; n.length > i; )
            a(z, (t = n[i++])) || t == A || t == s || o.push(t);
          return o;
        },
        Y = function (e) {
          for (
            var t, n = e === F, o = I(n ? W : y(e)), i = [], r = 0;
            o.length > r;

          )
            !a(z, (t = o[r++])) || (n && !a(F, t)) || i.push(z[t]);
          return i;
        };
      U ||
        (c(
          (L = function () {
            if (this instanceof L)
              throw TypeError("Symbol is not a constructor!");
            var t = f(0 < arguments.length ? arguments[0] : undefined),
              n = function (e) {
                this === F && n.call(W, e),
                  a(this, A) && a(this[A], t) && (this[A][t] = !1),
                  $(this, t, _(1, e));
              };
            return i && Q && $(F, t, { configurable: !0, set: n }), H(t);
          })[N],
          "toString",
          function () {
            return this._k;
          }
        ),
        (C.f = Z),
        (S.f = V),
        (n(68).f = q.f = X),
        (n(48).f = K),
        (n(67).f = Y),
        i && !n(16) && c(F, "propertyIsEnumerable", K, !0),
        (h.f = function (e) {
          return H(p(e));
        })),
        r(r.G + r.W + r.F * !U, { Symbol: L });
      for (
        var ee =
            "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
              ","
            ),
          te = 0;
        ee.length > te;

      )
        p(ee[te++]);
      for (var ne = E(p.store), oe = 0; ne.length > oe; ) m(ne[oe++]);
      r(r.S + r.F * !U, "Symbol", {
        for: function (e) {
          return a(R, (e += "")) ? R[e] : (R[e] = L(e));
        },
        keyFor: function (e) {
          if (!G(e)) throw TypeError(e + " is not a symbol!");
          for (var t in R) if (R[t] === e) return t;
        },
        useSetter: function () {
          Q = !0;
        },
        useSimple: function () {
          Q = !1;
        },
      }),
        r(r.S + r.F * !U, "Object", {
          create: function (e, t) {
            return t === undefined ? k(e) : J(k(e), t);
          },
          defineProperty: V,
          defineProperties: J,
          getOwnPropertyDescriptor: Z,
          getOwnPropertyNames: X,
          getOwnPropertySymbols: Y,
        }),
        M &&
          r(
            r.S +
              r.F *
                (!U ||
                  l(function () {
                    var e = L();
                    return (
                      "[null]" != j([e]) ||
                      "{}" != j({ a: e }) ||
                      "{}" != j(Object(e))
                    );
                  })),
            "JSON",
            {
              stringify: function (e) {
                for (var t, n, o = [e], i = 1; i < arguments.length; )
                  o.push(arguments[i++]);
                if (((n = t = o[1]), (w(t) || e !== undefined) && !G(e)))
                  return (
                    v(t) ||
                      (t = function (e, t) {
                        if (
                          ("function" == typeof n && (t = n.call(this, e, t)),
                          !G(t))
                        )
                          return t;
                      }),
                    (o[1] = t),
                    j.apply(M, o)
                  );
              },
            }
          ),
        L[N][D] || n(8)(L[N], D, L[N].valueOf),
        d(L, "Symbol"),
        d(Math, "Math", !0),
        d(o.JSON, "JSON", !0);
    },
    function (e, t, n) {
      var o = n(29)("meta"),
        i = n(9),
        r = n(11),
        a = n(5).f,
        c = 0,
        s =
          Object.isExtensible ||
          function () {
            return !0;
          },
        l = !n(18)(function () {
          return s(Object.preventExtensions({}));
        }),
        u = function (e) {
          a(e, o, { value: { i: "O" + ++c, w: {} } });
        },
        d = (e.exports = {
          KEY: o,
          NEED: !1,
          fastKey: function (e, t) {
            if (!i(e))
              return "symbol" == typeof e
                ? e
                : ("string" == typeof e ? "S" : "P") + e;
            if (!r(e, o)) {
              if (!s(e)) return "F";
              if (!t) return "E";
              u(e);
            }
            return e[o].i;
          },
          getWeak: function (e, t) {
            if (!r(e, o)) {
              if (!s(e)) return !0;
              if (!t) return !1;
              u(e);
            }
            return e[o].w;
          },
          onFreeze: function (e) {
            return l && d.NEED && s(e) && !r(e, o) && u(e), e;
          },
        });
    },
    function (e, t, n) {
      var c = n(28),
        s = n(67),
        l = n(48);
      e.exports = function (e) {
        var t = c(e),
          n = s.f;
        if (n)
          for (var o, i = n(e), r = l.f, a = 0; i.length > a; )
            r.call(e, (o = i[a++])) && t.push(o);
        return t;
      };
    },
    function (e, t, n) {
      var o = n(21);
      e.exports =
        Array.isArray ||
        function (e) {
          return "Array" == o(e);
        };
    },
    function (e, t, n) {
      var o = n(12),
        i = n(68).f,
        r = {}.toString,
        a =
          "object" == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [];
      e.exports.f = function (e) {
        return a && "[object Window]" == r.call(e)
          ? (function (e) {
              try {
                return i(e);
              } catch (t) {
                return a.slice();
              }
            })(e)
          : i(o(e));
      };
    },
    function (e, t, n) {
      var o = n(48),
        i = n(19),
        r = n(12),
        a = n(36),
        c = n(11),
        s = n(54),
        l = Object.getOwnPropertyDescriptor;
      t.f = n(10)
        ? l
        : function (e, t) {
            if (((e = r(e)), (t = a(t, !0)), s))
              try {
                return l(e, t);
              } catch (n) {}
            if (c(e, t)) return i(!o.f.call(e, t), e[t]);
          };
    },
    function (e, t, n) {
      n(47)("asyncIterator");
    },
    function (e, t, n) {
      n(47)("observable");
    },
    function (e, t) {
      var n;
      "function" != typeof (n = window.Element.prototype).matches &&
        (n.matches =
          n.msMatchesSelector ||
          n.mozMatchesSelector ||
          n.webkitMatchesSelector ||
          function (e) {
            for (
              var t = (this.document || this.ownerDocument).querySelectorAll(e),
                n = 0;
              t[n] && t[n] !== this;

            )
              ++n;
            return Boolean(t[n]);
          }),
        "function" != typeof n.closest &&
          (n.closest = function (e) {
            for (var t = this; t && 1 === t.nodeType; ) {
              if (t.matches(e)) return t;
              t = t.parentNode;
            }
            return null;
          });
    },
    function (e, t, n) {
      "use strict";
      var o = n(13)["default"];
      t.RelationSelector =
        ((i.prototype.getLabelByValue = function (n, o) {
          var i = this;
          this.promise.then(function (e) {
            var t = i.listeners["getLabelByValue"];
            t && e.off("getLabelByValue", t),
              e.on("getLabelByValue", o),
              (i.listeners["getLabelByValue"] = o),
              e.getLabelByValue(n);
          });
        }),
        i);
      function i(t) {
        o(this, i),
          (this.promise = n
            .e(3)
            .then(n.t.bind(null, 141, 7))
            .then(function (e) {
              return new e.RelationSelector(t);
            })),
          (this.listeners = {});
      }
    },
    function (e, t, n) {
      "use strict";
      var o = n(13)["default"];
      t.ChatRoom =
        ((i.prototype.connect = function () {
          this.promise.then(function (e) {
            e.connect();
          });
        }),
        (i.prototype.close = function () {
          this.promise.then(function (e) {
            e.close();
          });
        }),
        (i.prototype.on = function (n, o) {
          var i = this;
          this.promise.then(function (e) {
            var t = i.listeners[n];
            t && e.off(n, t), e.on(n, o), (i.listeners[n] = o);
          });
        }),
        i);
      function i(t) {
        o(this, i),
          (this.promise = n
            .e(1)
            .then(n.t.bind(null, 142, 7))
            .then(function (e) {
              return new e.ChatRoom(t);
            })),
          (this.listeners = {});
      }
    },
    function (e, t, n) {
      "use strict";
      var i = n(6),
        r = n(0).extend,
        a = void 0,
        c = void 0;
      t.toast = function s(e) {
        a && a();
        var t = "toast" + new Date().getTime(),
          n = { content: null, duration: 3e3, className: !1 };
        "string" == typeof e ? (n.content = e) : (n = r(n, e, !0)), (n.id = t);
        var o = i('<div id="' + t + '"></div>');
        o.html(n.content),
          o.css({
            "max-width": "70%",
            "word-wrap": "break-word",
            background: "#303131",
            "border-radius": "5px",
            color: "#DDDDDD",
            "font-size": "15px",
            position: "fixed",
            "z-index": "999",
            transform: "translate(-50%,-50%)",
            "-webkit-transform": "translate(-50%,-50%)",
            top: "50%",
            left: "50%",
            padding: "10px 20px",
            "text-align": "center",
          }),
          n.className &&
            (o = i(
              '<div id="' +
                t +
                '" class="' +
                n.className +
                '">' +
                n.content +
                "</div>"
            )),
          i("body").append(o),
          (c = setTimeout(function () {
            a();
          }, n.duration)),
          (a = function () {
            clearTimeout(c), (a = null), o.remove();
          });
      };
    },
    function (e, t, n) {
      "use strict";
      var i = n(0).extend,
        o = n(70),
        r = o.getRatio,
        a = o.messagebox;
      t.alert = function c(e, t) {
        var n = "dialog_" + new Date().getTime(),
          o = {
            title: null,
            content: null,
            zindex: 4200,
            bgcolor: "#ccc",
            opacity: 0.5,
            zoom: 1,
            width: 280 * r(),
            loadDefaultCss: !0,
            className: !1,
            confirmButtonText: "\u786e\u5b9a",
            callback: function t() {},
          };
        "string" == typeof e
          ? ((o.content = e), t && (o.callback = t))
          : (o = i(o, e, !0)),
          (o.id = n),
          a(o);
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(0).extend,
        o = n(70),
        a = o.getRatio,
        c = o.messagebox;
      t.confirm = function s(e, t, n) {
        var o = "dialog_" + new Date().getTime(),
          i = {
            title: null,
            content: null,
            zindex: 4200,
            bgcolor: "#ccc",
            opacity: 0.5,
            zoom: 1,
            width: 280 * a(),
            loadDefaultCss: !0,
            className: !1,
            confirmButtonText: "\u786e\u5b9a",
            cancelButtonText: "\u53d6\u6d88",
            callback: function t() {},
            cancelCallback: function n() {},
          };
        "string" == typeof e
          ? ((i.content = e),
            t && (i.callback = t),
            n && (i.cancelCallback = n))
          : (i = r(i, e, !0)),
          (i.id = o),
          c(i);
      };
    },
    function (e, t, n) {
      "use strict";
      var g = n(6),
        a = n(0).extend,
        v = n(15).detect,
        i = n(14).isMobile,
        r = void 0,
        c = void 0,
        s = void 0,
        x = void 0,
        w = void 0,
        l = void 0,
        u = function u() {
          if (!r) {
            if (i()) {
              var e = document.documentElement.scrollWidth,
                t = screen.width,
                n = screen.height,
                o = e;
              return (
                (e !== t && e !== n) || (o = Math.min(t, n)),
                (r = (o / 375).toFixed(2))
              );
            }
            r = 1;
          }
          return r;
        },
        o = {
          show: function (e) {
            s && c && c(), (s = !0);
            var t = "dialog_" + new Date().getTime(),
              h = {
                el: null,
                zindex: 4200,
                bgcolor: "#ccc",
                opacity: 0.5,
                zoom: 1,
                className: !1,
              };
            if (
              (((h = a(h, e, !0)).id = t),
              h.opacity,
              (w = g('<div id="' + t + '_cover"  ></div>')).css({
                "z-index": h.zindex,
                "background-color": h.bgcolor,
                position: "fixed",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                opacity: h.opacity,
                zoom: 1,
                filter: "alpha(opacity = " + 100 * h.opacity + ")",
              }),
              g("body").append(w),
              (x = g(
                '<div id="' +
                  t +
                  '" class="amsmobi_dialog"  style="zoom:' +
                  h.zoom +
                  ";z-index:" +
                  parseInt(h.zindex + 1) +
                  ';top:50%;left:50%;position:fixed;"></div>'
              )),
              h.className &&
                (x = g(
                  '<div id="' +
                    t +
                    '" class="amsmobi_dialog ' +
                    h.className +
                    '"  ></div>'
                )),
              (l = g("#" + h.el)),
              x.append(g("#" + h.el)),
              /MSIE/.test(window.navigator.userAgent) &&
                document.documentMode < 9)
            ) {
              var n = document.documentElement,
                o = n.scrollTop,
                i = n.clientHeight;
              x.css({
                _position: "absolute",
                _top:
                  (document.compatMode && "CSS1Compat" == document.compatMode
                    ? o + (i - x[0].clientHeight) - 1
                    : document.body.scrollTop +
                      (document.body.clientHeight - x[0].clientHeight) -
                      1) + "px",
              });
            }
            g("body").append(x), g("#" + h.el).show();
            var m = function m() {
              var e = document.documentElement.scrollHeight,
                t = document.documentElement.clientHeight,
                n = t < e ? e : t,
                o = n - 40,
                i =
                  document.documentElement.scrollTop || document.body.scrollTop;
              if (x.height() > o) {
                var r = -o / 2 + i;
                if (v().os.ios)
                  x.css({
                    "margin-left": -x.width() / 2 + "px",
                    "margin-top": r + "px",
                    position: "absolute",
                  });
                else {
                  w.css({ position: "absolute" }),
                    g(window).on("scroll", function () {
                      var e = n + i;
                      w.css({ height: e + "px" });
                    });
                  var a = document.documentElement.scrollWidth,
                    c = document.documentElement.clientWidth,
                    s = ((c < a ? a : c) - x.width()) / 2,
                    l =
                      "width:" +
                      h.width +
                      ";z-index:" +
                      parseInt(h.zindex + 1) +
                      ";position:absolute;top:" +
                      (i + 20) +
                      "px;left:" +
                      s +
                      "px;";
                  x.attr("style", l);
                }
              } else {
                var u = x[0].getBoundingClientRect(),
                  d = g(window),
                  f = d.width(),
                  p = (d.height() - u.bottom + u.top) / 2 + "px";
                s = (f - u.right + u.left) / 2 + "px";
                x.css({ left: s, top: p });
              }
            };
            0 == h.className &&
              (m(),
              g(window).on("resize", function () {
                m();
              }),
              g(window).on(
                "orientationchange",
                function () {
                  m();
                },
                !1
              )),
              (c = function () {
                (c = null),
                  (s = !1),
                  l.hide(),
                  g("body").append(l),
                  x.remove(),
                  w.remove();
              });
          },
          hide: function () {
            (c = null),
              s &&
                ((s = !1),
                l.hide(),
                g("body").append(l),
                x.remove(),
                w.css({
                  transition: "opacity 400ms ease-out",
                  "-webkit-transition": "opacity 400ms ease-out",
                }),
                w.css({ opacity: "0", filter: "alpha(opacity = 0)" }),
                setTimeout(function () {
                  w.remove();
                }, 400));
          },
          showLoading: function (e) {
            var t = { zindex: 4100, bgcolor: "#ccc", opacity: 0.5 };
            t = a(t, e, !0);
            var n = "amsmobi_loading";
            if (0 == g("#" + n).length) {
              var o = Math.min(u(), 1.5),
                i = g(
                  '<div id="' +
                    n +
                    '_cover"   style="zoom:1;z-index:' +
                    t.zindex +
                    ";background-color:" +
                    t.bgcolor +
                    ";position:fixed;left:0;top:0;width:100%;height:100%;filter:alpha(opacity=" +
                    100 * t.opacity +
                    ");opacity:" +
                    t.opacity +
                    ';_position:absolute;_top:expression(documentElement.scrollTop)"></div>'
                ),
                r = g(
                  '<div id="' +
                    n +
                    '" style="z-index:9999;width:' +
                    80 * o +
                    "px;height:" +
                    80 * o +
                    "px;background-color:rgba(0,0,0,0.8);border-radius:5px;position:fixed;left:50%;top:50%;margin-left:-" +
                    40 * o +
                    "px;margin-top:-" +
                    40 * o +
                    'px"><img src="https://game.gtimg.cn/images/ulink/ulinksdk/loading.gif" style="width:100%"></div>'
                );
              g("body").append(i).append(r),
                /MSIE/.test(window.navigator.userAgent) &&
                  document.documentMode < 9 &&
                  r.css({ background: "#3c3c3c" });
            } else g("#" + n + "_cover").show(), g("#" + n).show();
          },
          hideLoading: function () {
            g("#amsmobi_loading").hide(), g("#amsmobi_loading_cover").hide();
          },
        };
      t.Dialog = o;
    },
    function (e, t, n) {
      "use strict";
      e.exports = {
        pay: function (t) {
          n.e(2)
            .then(n.t.bind(null, 77, 7))
            .then(function (e) {
              return e.pay(t);
            });
        },
        report: function (t) {
          n.e(2)
            .then(n.t.bind(null, 77, 7))
            .then(function (e) {
              return e.report(t);
            });
        },
      };
    },
    function (e, t, n) {
      "use strict";
      e.exports = {
        init: function (t) {
          this.promise = n
            .e(6)
            .then(n.t.bind(null, 78, 7))
            .then(function (e) {
              return e.init(t);
            });
        },
        to: function (t) {
          this.promise
            ? this.promise.then(function (e) {
                return e.to(t);
              })
            : console.warn(
                "\u8bf7\u5148init\uff0c\u7136\u540e\u518d\u8c03\u7528to\u65b9\u6cd5."
              );
        },
        ban: function (t) {
          this.promise = n
            .e(6)
            .then(n.t.bind(null, 78, 7))
            .then(function (e) {
              return e.ban(t);
            });
        },
      };
    },
    function (e, t, n) {
      n(42), n(26), (e.exports = n(131));
    },
    function (e, t, n) {
      var o = n(4),
        i = n(43);
      e.exports = n(2).getIterator = function (e) {
        var t = i(e);
        if ("function" != typeof t) throw TypeError(e + " is not iterable!");
        return o(t.call(e));
      };
    },
    function (e, t, n) {
      "use strict";
      var b = n(71)["default"],
        _ = n(31)["default"],
        k = n(72).Dialog,
        q = n(45).loginStatus,
        C = n(24).getQueryString,
        S = n(0).serialize,
        s = n(22),
        l = n(6);
      e.exports = function (e) {
        var h = e.url,
          m = e.timeout,
          t = e.postData,
          n = t === undefined ? {} : t,
          o = e.success,
          g = o === undefined ? function () {} : o,
          i = e.error,
          v = i === undefined ? function () {} : i,
          r = e.isShowLoading,
          x = r === undefined || r,
          a = e.isHttps,
          w = a === undefined || a,
          y = function y(e) {
            w && (h = h.replace(/^http:/, "https:")), x && k.showLoading();
            var t = null;
            if (e) {
              t = new FormData();
              var n = _(e),
                o = !0,
                i = !1,
                r = undefined;
              try {
                for (var a, c = b(n); !(o = (a = c.next()).done); o = !0) {
                  var s = a.value,
                    l = e[s];
                  t.append(s, l === undefined ? "" : l);
                }
              } catch (p) {
                (i = !0), (r = p);
              } finally {
                try {
                  !o && c["return"] && c["return"]();
                } finally {
                  if (i) throw r;
                }
              }
            }
            if (window["_msdkParam"]) {
              var u = S(window["_msdkParam"], !0),
                d = h.indexOf("?");
              if (-1 < d) h = h.substr(0, d + 1) + u + "&" + h.substr(d + 1);
              else h = h + "?" + u;
            }
            ["ulenv", "ulkey", "adtag", "ADTAG"].forEach(function (e) {
              if ("" != C(e)) {
                var t = e.toLocaleLowerCase() + "=" + C(e);
                -1 < h.indexOf("?")
                  ? "&" == h.substring(h.length - 1, h.length)
                    ? (h += t)
                    : (h = h + "&" + t)
                  : (h = h + "?" + t);
              }
            }),
              console.log(h);
            var f = new XMLHttpRequest();
            f.open(e ? "POST" : "GET", h, !0),
              (f.timeout = m || 3e4),
              (f.withCredentials = !0),
              (f.onload = function () {
                if ((200 <= f.status && f.status < 300) || 304 == f.status) {
                  var e = f.responseText || "";
                  try {
                    var t = JSON.parse(e);
                  } catch (o) {
                    t = e;
                    console.error(o);
                  }
                  g(t), x && k.hideLoading();
                } else {
                  var n = Error();
                  (n.type = "ERROR_NETWORK"),
                    (n.message = "network error"),
                    (n.statusCode = f.status),
                    v(n),
                    x && k.hideLoading();
                }
              }),
              (f.onerror = function () {
                var e = Error();
                (e.type = "ERROR_SERVER"),
                  (e.message = "illegal request or server error"),
                  (e.statusCode = f.status),
                  v(e),
                  x && k.hideLoading();
              }),
              (f.ontimeout = function (e) {
                var t = Error();
                (t.type = "ERROR_TIMEOUT"),
                  (t.message = "timeout"),
                  (t.statusCode = f.status),
                  v(t),
                  x && k.hideLoading();
              }),
              q.syncToAME(function () {
                e ? f.send(t) : f.send();
              });
          };
        if (window.EAS) {
          var c = {
            e_code: window.EAS.GetECodeExt(),
            eas_url: window.EAS.GetLogUrlExt(),
            eas_refer: window.EAS.GetReferrerUrlExt(),
          };
          (n = l.extend(n, c)), y(n);
        } else
          s({
            url: "//ossweb-img.qq.com/images/js/eas/eas.js",
            cache: !0,
            success: function g() {
              var e = {
                e_code: window.EAS.GetECodeExt(),
                eas_url: window.EAS.GetLogUrlExt(),
                eas_refer: window.EAS.GetReferrerUrlExt(),
              };
              (n = l.extend(n, e)), y(n);
            },
          });
      };
    },
    function (e, t, n) {
      "use strict";
      t.__esModule = !0;
      var o = (function i(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(134));
      t["default"] = function (e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
          return n;
        }
        return (0, o["default"])(e);
      };
    },
    function (e, t, n) {
      e.exports = { default: n(135), __esModule: !0 };
    },
    function (e, t, n) {
      n(26), n(136), (e.exports = n(2).Array.from);
    },
    function (e, t, n) {
      "use strict";
      var f = n(17),
        o = n(7),
        p = n(41),
        h = n(60),
        m = n(61),
        g = n(37),
        v = n(137),
        x = n(43);
      o(
        o.S +
          o.F *
            !n(66)(function (e) {
              Array.from(e);
            }),
        "Array",
        {
          from: function (e) {
            var t,
              n,
              o,
              i,
              r = p(e),
              a = "function" == typeof this ? this : Array,
              c = arguments.length,
              s = 1 < c ? arguments[1] : undefined,
              l = s !== undefined,
              u = 0,
              d = x(r);
            if (
              (l && (s = f(s, 2 < c ? arguments[2] : undefined, 2)),
              d == undefined || (a == Array && m(d)))
            )
              for (n = new a((t = g(r.length))); u < t; u++)
                v(n, u, l ? s(r[u], u) : r[u]);
            else
              for (i = d.call(r), n = new a(); !(o = i.next()).done; u++)
                v(n, u, l ? h(i, s, [o.value, u], !0) : o.value);
            return (n.length = u), n;
          },
        }
      );
    },
    function (e, t, n) {
      "use strict";
      var o = n(5),
        i = n(19);
      e.exports = function (e, t, n) {
        t in e ? o.f(e, t, i(0, n)) : (e[t] = n);
      };
    },
    function (e, t, n) {
      "use strict";
      var l = n(22),
        o = n(0),
        u = o.isObject,
        d = o.isFunction;
      t.getPartitionName = function f(e, i, r) {
        var t =
            location.protocol +
            "//gameact.qq.com/comm-htdocs/js/game_area/utf8verson/" +
            e +
            "_server_select_utf8.js",
          a = e.toUpperCase() + "ServerSelect",
          n = window[a];
        if (u(n) && n.STD_DATA) {
          for (var o = n.STD_DATA, c = 0; c < o.length; c++)
            if (o[c].v == i) {
              var s = o[c].t;
              return d(r) && r(s), s;
            }
        } else
          l({
            url: t,
            cache: !0,
            success: function () {
              if (u(window[a])) {
                var e = window[a];
                if (e && e.STD_DATA)
                  for (var t = e.STD_DATA, n = 0; n < t.length; n++)
                    if (t[n].v == i) {
                      var o = t[n].t;
                      d(r) && r(o);
                    }
              }
            },
            error: function (e) {
              console.log(e);
            },
          });
      };
    },
  ]);
});
!(function (window, document, undefined) {
  var ulink = window.ulink,
    ua = window.navigator.userAgent;
  if (
    ((isIE8OR9 = document.documentMode < 10),
    (isIE7 = /MSIE\s7/.test(ua) && document.documentMode === undefined),
    ulink && /MSIE/.test(ua) && (isIE8OR9 || isIE7))
  ) {
    !(function () {
      var t = ulink.LoginManager.logout,
        o = document.domain;
      function e(e) {
        return ulink.getCookie(e) || "";
      }
      (ulink.LoginManager.logout = function (e) {
        (document.domain = "qq.com"),
          ulink.delCookie("openid", "qq.com", "/"),
          ulink.delCookie("access_token", "qq.com", "/"),
          ulink.delCookie("appid", "qq.com", "/"),
          ulink.delCookie("acctype", "qq.com", "/"),
          ulink.delCookie("IED_LOG_INFO2_QC", "qq.com", "/"),
          (document.domain = o),
          t(e);
      }),
        e("openid") &&
          ((document.domain = "qq.com"),
          ulink.setCookie("openid", e("openid"), 600, "qq.com", "/"),
          ulink.setCookie(
            "access_token",
            e("access_token"),
            600,
            "qq.com",
            "/"
          ),
          ulink.setCookie("appid", e("appid"), 600, "qq.com", "/"),
          ulink.setCookie("acctype", e("acctype"), 600, "qq.com", "/"),
          ulink.setCookie(
            "IED_LOG_INFO2_QC",
            e("IED_LOG_INFO2_QC"),
            600,
            "qq.com",
            "/"
          ),
          (document.domain = o));
    })(),
      (ulink.$.fn.html = function (e) {
        if (e === undefined) return this[0].innerHTML;
        for (var t = 0; t < this.length; t++) {
          var o = this[t];
          if ("SELECT" === o.nodeName) {
            var n = document.createElement("select");
            n.style.display = "none";
            var a =
              "ULINTEMPSELECT_" +
              new Date().getTime() +
              "_" +
              ~~(1e6 * Math.random(1));
            (n.id = a),
              document.body.appendChild(n),
              (n.outerHTML = n.outerHTML.replace(
                ">" + n.innerHTML + "<",
                ">" + e + "<"
              )),
              (n = document.getElementById(a)),
              (o.innerHTML = "");
            for (; 0 < n.options.length; ) o.options.appendChild(n.options[0]);
            document.body.removeChild(n),
              o.options.length && (o.options[0].selected = !0);
          } else o.innerHTML = e;
        }
        return this;
      });
    var FlashHelper = (function () {
        var a = new Object();
        function t() {
          for (var e = new Array(), t = 0; t < arguments.length; t++) {
            var o = arguments[t];
            if (
              ("string" == typeof o && (o = document.getElementById(o)),
              1 == arguments.length)
            )
              return o;
            e.push(o);
          }
          return e;
        }
        (a.height = 0),
          (a.width = 215),
          (a.shouldWaitForFlash = function () {}),
          (a.isFlashInstalled = function () {
            var e;
            if (void 0 !== this.isFlashInstalledMemo)
              return this.isFlashInstalledMemo;
            if ("undefined" != typeof ActiveXObject) {
              try {
                var t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
              } catch (e) {}
              e = null != t;
            } else {
              var o = navigator.mimeTypes["application/x-shockwave-flash"];
              e = null != o && null != o.enabledPlugin;
            }
            return (this.isFlashInstalledMemo = e);
          }),
          (a.getFlash = function (e) {
            return t(e || "storage");
          }),
          (a.checkFlash = function () {
            try {
              return "pong" == this.getFlash().ping();
            } catch (e) {
              return !1;
            }
          }),
          (a.flashArray = []),
          (a.loadedFlash = 0);
        var i = !1;
        return (
          (a.writeFlash = function (e) {
            if (!i) {
              i = !0;
              var t,
                o,
                n = "/comm-htdocs/js/milo/ajaxcdr.swf?" + Math.random();
              if (
                !(
                  ("object" == typeof (o = e = e || "storage")
                    ? o
                    : document.getElementById(o)) &&
                  (function (e, t) {
                    var o = !1;
                    if (
                      "[object Array]" === Object.prototype.toString.call(e) ||
                      "object" == typeof e
                    )
                      for (var n in e) e[n] == t && (o = !0);
                    return o;
                  })(this.flashArray, e)
                )
              )
                this.flashArray.push(e),
                  window.ActiveXObject && !a.isFlashInstalled()
                    ? ((t = document.createElement("div")).innerHTML =
                        '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,5,0,0" height="' +
                        this.height +
                        '" width="' +
                        this.width +
                        '" id="' +
                        e +
                        '"> <param name="movie" value="' +
                        n +
                        '"> <param name="quality" value="high"> <param name="swliveconnect" value="true"></object>')
                    : (((t = document.createElement("div")).style.height = "0"),
                      (t.innerHTML =
                        '<object id="' +
                        e +
                        '" data="' +
                        n +
                        '" type="application/x-shockwave-flash" height="' +
                        this.height +
                        '" width="' +
                        this.width +
                        '"><param name="movie" value="' +
                        n +
                        '"><param name="quality" value="high"><param name="swliveconnect" value="true"><param name="pluginurl" value="http://www.macromedia.com/go/getflashplayer"><param name="pluginspage" value="http://www.macromedia.com/go/getflashplayer"><p>You need Flash for this. Get the latest version from <a href="http://www.macromedia.com/software/flashplayer/">here</a>.</p></object>')),
                  document.body.appendChild(t);
            }
          }),
          (a.addLoadEvent = function (e) {
            var t = window.onload;
            "function" != typeof window.onload
              ? (window.onload = e)
              : (window.onload = function () {
                  t(), e();
                });
          }),
          (a.load = function () {
            if ("function" == typeof a.onload) {
              if (a.isFlashInstalled())
                if (!(this.flashLoaded && this.documentLoaded)) return;
              var e = this.getFlash(),
                t = this;
              (a.isFlashInstalled() && !this.flashLoaded) || !e
                ? o(null)
                : this.checkFlash()
                ? o(e)
                : o(null);
            }
            function o(e) {
              t.onloadCalled || ((t.onloadCalled = !0), t.onload(e));
            }
          }),
          (a.init = function () {
            (this.flashLoaded = !1),
              (this.documentLoaded = !0),
              (this.flashDomId = {}.flashDomId || "storage"),
              this.addLoadEvent(function () {
                (a.flashLoaded = !0), (a.documentLoaded = !0), a.load();
              });
          }),
          a.init(),
          a.isFlashInstalled() && a.writeFlash(),
          a
        );
      })(),
      list = [];
    FlashHelper.onload = function () {
      var e = FlashHelper.getFlash(),
        t = 600,
        o = function () {
          setTimeout(function () {
            if (e.XmlHttp)
              for (; 0 < list.length; ) e.XmlHttp.apply(e, list.shift());
            else 0 < --t && o();
          }, 500);
        };
      o();
    };
    var request = function (method) {
      return function (options) {
        var time = new Date().getTime();
        (options.params = options.params || {}), (options.params._t = time);
        var callbackName =
          "ULINKFLOWENGINECALLBACK_" + time + "_" + ~~(1e4 * Math.random(1));
        try {
          function post(e) {
            options.isHttps === undefined && (options.isHttps = !0),
              options.isShowLoading === undefined &&
                (options.isShowLoading = !0);
            var n = options.url;
            options.isHttps && (n = n.replace(/^http:/, "https:")),
              options.isShowLoading && ulink.Dialog.showLoading();
            ["ulenv", "ulkey"].forEach(function (e) {
              var t = ulink.getQueryString(e);
              if ("" != t) {
                var o = e + "=" + t;
                n = -1 < n.indexOf("?") ? n + "&" + o : n + "?" + o;
              }
            });
            var t = ulink.serialize(options.params);
            t && (t = ~n.indexOf("?") ? "&" + t : "?" + t);
            var o = [
              n + t,
              callbackName,
              method,
              options.formdata ? ulink.serialize(options.formdata) : "",
              "application/x-www-form-urlencoded",
            ];
            e && e.XmlHttp ? e.XmlHttp.apply(e, o) : list.push(o);
          }
          (window[callbackName] = function () {
            options.isShowLoading && ulink.Dialog.hideLoading();
            var sData = FlashHelper.getFlash().GetVariable("retText"),
              objData;
            eval("objData=" + sData + ";"),
              "object" == typeof objData &&
                "function" == typeof options.success &&
                options.success(objData);
          }),
            FlashHelper.isFlashInstalled()
              ? (FlashHelper.getFlash(), post(FlashHelper.getFlash()))
              : alert("è¯·ç¡®è®¤æ‚¨å®‰è£…äº†flashæ’ä»¶");
        } catch (e) {
          "function" == typeof options.error && options.error(e),
            window.console && console.log(e);
        }
      };
    };
    (ulink.http.get = request("GET")), (ulink.http.post = request("POST"));
  }
})(window, document);
