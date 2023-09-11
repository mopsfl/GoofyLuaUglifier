var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// bower_components/jquery/dist/jquery.min.js
var require_jquery_min = __commonJS({
  "bower_components/jquery/dist/jquery.min.js"(exports, module) {
    !function(e, t) {
      "use strict";
      "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, true) : function(e2) {
        if (!e2.document)
          throw new Error("jQuery requires a window with a document");
        return t(e2);
      } : t(e);
    }("undefined" != typeof window ? window : exports, function(ie, e) {
      "use strict";
      var oe = [], r = Object.getPrototypeOf, ae = oe.slice, g = oe.flat ? function(e2) {
        return oe.flat.call(e2);
      } : function(e2) {
        return oe.concat.apply([], e2);
      }, s = oe.push, se = oe.indexOf, n = {}, i = n.toString, ue = n.hasOwnProperty, o = ue.toString, a = o.call(Object), le = {}, v = function(e2) {
        return "function" == typeof e2 && "number" != typeof e2.nodeType && "function" != typeof e2.item;
      }, y = function(e2) {
        return null != e2 && e2 === e2.window;
      }, C = ie.document, u = { type: true, src: true, nonce: true, noModule: true };
      function m(e2, t2, n2) {
        var r2, i2, o2 = (n2 = n2 || C).createElement("script");
        if (o2.text = e2, t2)
          for (r2 in u)
            (i2 = t2[r2] || t2.getAttribute && t2.getAttribute(r2)) && o2.setAttribute(r2, i2);
        n2.head.appendChild(o2).parentNode.removeChild(o2);
      }
      function x(e2) {
        return null == e2 ? e2 + "" : "object" == typeof e2 || "function" == typeof e2 ? n[i.call(e2)] || "object" : typeof e2;
      }
      var t = "3.7.1", l = /HTML$/i, ce = function(e2, t2) {
        return new ce.fn.init(e2, t2);
      };
      function c(e2) {
        var t2 = !!e2 && "length" in e2 && e2.length, n2 = x(e2);
        return !v(e2) && !y(e2) && ("array" === n2 || 0 === t2 || "number" == typeof t2 && 0 < t2 && t2 - 1 in e2);
      }
      function fe(e2, t2) {
        return e2.nodeName && e2.nodeName.toLowerCase() === t2.toLowerCase();
      }
      ce.fn = ce.prototype = { jquery: t, constructor: ce, length: 0, toArray: function() {
        return ae.call(this);
      }, get: function(e2) {
        return null == e2 ? ae.call(this) : e2 < 0 ? this[e2 + this.length] : this[e2];
      }, pushStack: function(e2) {
        var t2 = ce.merge(this.constructor(), e2);
        return t2.prevObject = this, t2;
      }, each: function(e2) {
        return ce.each(this, e2);
      }, map: function(n2) {
        return this.pushStack(ce.map(this, function(e2, t2) {
          return n2.call(e2, t2, e2);
        }));
      }, slice: function() {
        return this.pushStack(ae.apply(this, arguments));
      }, first: function() {
        return this.eq(0);
      }, last: function() {
        return this.eq(-1);
      }, even: function() {
        return this.pushStack(ce.grep(this, function(e2, t2) {
          return (t2 + 1) % 2;
        }));
      }, odd: function() {
        return this.pushStack(ce.grep(this, function(e2, t2) {
          return t2 % 2;
        }));
      }, eq: function(e2) {
        var t2 = this.length, n2 = +e2 + (e2 < 0 ? t2 : 0);
        return this.pushStack(0 <= n2 && n2 < t2 ? [this[n2]] : []);
      }, end: function() {
        return this.prevObject || this.constructor();
      }, push: s, sort: oe.sort, splice: oe.splice }, ce.extend = ce.fn.extend = function() {
        var e2, t2, n2, r2, i2, o2, a2 = arguments[0] || {}, s2 = 1, u2 = arguments.length, l2 = false;
        for ("boolean" == typeof a2 && (l2 = a2, a2 = arguments[s2] || {}, s2++), "object" == typeof a2 || v(a2) || (a2 = {}), s2 === u2 && (a2 = this, s2--); s2 < u2; s2++)
          if (null != (e2 = arguments[s2]))
            for (t2 in e2)
              r2 = e2[t2], "__proto__" !== t2 && a2 !== r2 && (l2 && r2 && (ce.isPlainObject(r2) || (i2 = Array.isArray(r2))) ? (n2 = a2[t2], o2 = i2 && !Array.isArray(n2) ? [] : i2 || ce.isPlainObject(n2) ? n2 : {}, i2 = false, a2[t2] = ce.extend(l2, o2, r2)) : void 0 !== r2 && (a2[t2] = r2));
        return a2;
      }, ce.extend({ expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""), isReady: true, error: function(e2) {
        throw new Error(e2);
      }, noop: function() {
      }, isPlainObject: function(e2) {
        var t2, n2;
        return !(!e2 || "[object Object]" !== i.call(e2)) && (!(t2 = r(e2)) || "function" == typeof (n2 = ue.call(t2, "constructor") && t2.constructor) && o.call(n2) === a);
      }, isEmptyObject: function(e2) {
        var t2;
        for (t2 in e2)
          return false;
        return true;
      }, globalEval: function(e2, t2, n2) {
        m(e2, { nonce: t2 && t2.nonce }, n2);
      }, each: function(e2, t2) {
        var n2, r2 = 0;
        if (c(e2)) {
          for (n2 = e2.length; r2 < n2; r2++)
            if (false === t2.call(e2[r2], r2, e2[r2]))
              break;
        } else
          for (r2 in e2)
            if (false === t2.call(e2[r2], r2, e2[r2]))
              break;
        return e2;
      }, text: function(e2) {
        var t2, n2 = "", r2 = 0, i2 = e2.nodeType;
        if (!i2)
          while (t2 = e2[r2++])
            n2 += ce.text(t2);
        return 1 === i2 || 11 === i2 ? e2.textContent : 9 === i2 ? e2.documentElement.textContent : 3 === i2 || 4 === i2 ? e2.nodeValue : n2;
      }, makeArray: function(e2, t2) {
        var n2 = t2 || [];
        return null != e2 && (c(Object(e2)) ? ce.merge(n2, "string" == typeof e2 ? [e2] : e2) : s.call(n2, e2)), n2;
      }, inArray: function(e2, t2, n2) {
        return null == t2 ? -1 : se.call(t2, e2, n2);
      }, isXMLDoc: function(e2) {
        var t2 = e2 && e2.namespaceURI, n2 = e2 && (e2.ownerDocument || e2).documentElement;
        return !l.test(t2 || n2 && n2.nodeName || "HTML");
      }, merge: function(e2, t2) {
        for (var n2 = +t2.length, r2 = 0, i2 = e2.length; r2 < n2; r2++)
          e2[i2++] = t2[r2];
        return e2.length = i2, e2;
      }, grep: function(e2, t2, n2) {
        for (var r2 = [], i2 = 0, o2 = e2.length, a2 = !n2; i2 < o2; i2++)
          !t2(e2[i2], i2) !== a2 && r2.push(e2[i2]);
        return r2;
      }, map: function(e2, t2, n2) {
        var r2, i2, o2 = 0, a2 = [];
        if (c(e2))
          for (r2 = e2.length; o2 < r2; o2++)
            null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
        else
          for (o2 in e2)
            null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
        return g(a2);
      }, guid: 1, support: le }), "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]), ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e2, t2) {
        n["[object " + t2 + "]"] = t2.toLowerCase();
      });
      var pe = oe.pop, de = oe.sort, he = oe.splice, ge = "[\\x20\\t\\r\\n\\f]", ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
      ce.contains = function(e2, t2) {
        var n2 = t2 && t2.parentNode;
        return e2 === n2 || !(!n2 || 1 !== n2.nodeType || !(e2.contains ? e2.contains(n2) : e2.compareDocumentPosition && 16 & e2.compareDocumentPosition(n2)));
      };
      var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      function p(e2, t2) {
        return t2 ? "\0" === e2 ? "\uFFFD" : e2.slice(0, -1) + "\\" + e2.charCodeAt(e2.length - 1).toString(16) + " " : "\\" + e2;
      }
      ce.escapeSelector = function(e2) {
        return (e2 + "").replace(f, p);
      };
      var ye = C, me = s;
      !function() {
        var e2, b2, w2, o2, a2, T2, r2, C2, d2, i2, k2 = me, S2 = ce.expando, E2 = 0, n2 = 0, s2 = W2(), c2 = W2(), u2 = W2(), h2 = W2(), l2 = function(e3, t3) {
          return e3 === t3 && (a2 = true), 0;
        }, f2 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", t2 = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", p2 = "\\[" + ge + "*(" + t2 + ")(?:" + ge + "*([*^$|!~]?=)" + ge + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + t2 + "))|)" + ge + "*\\]", g2 = ":(" + t2 + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + p2 + ")*)|.*)\\)|)", v2 = new RegExp(ge + "+", "g"), y2 = new RegExp("^" + ge + "*," + ge + "*"), m2 = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"), x2 = new RegExp(ge + "|>"), j2 = new RegExp(g2), A2 = new RegExp("^" + t2 + "$"), D2 = { ID: new RegExp("^#(" + t2 + ")"), CLASS: new RegExp("^\\.(" + t2 + ")"), TAG: new RegExp("^(" + t2 + "|[*])"), ATTR: new RegExp("^" + p2), PSEUDO: new RegExp("^" + g2), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)", "i"), bool: new RegExp("^(?:" + f2 + ")$", "i"), needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)", "i") }, N2 = /^(?:input|select|textarea|button)$/i, q2 = /^h\d$/i, L2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, H2 = /[+~]/, O2 = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"), P2 = function(e3, t3) {
          var n3 = "0x" + e3.slice(1) - 65536;
          return t3 || (n3 < 0 ? String.fromCharCode(n3 + 65536) : String.fromCharCode(n3 >> 10 | 55296, 1023 & n3 | 56320));
        }, M3 = function() {
          V2();
        }, R2 = J2(function(e3) {
          return true === e3.disabled && fe(e3, "fieldset");
        }, { dir: "parentNode", next: "legend" });
        try {
          k2.apply(oe = ae.call(ye.childNodes), ye.childNodes), oe[ye.childNodes.length].nodeType;
        } catch (e3) {
          k2 = { apply: function(e4, t3) {
            me.apply(e4, ae.call(t3));
          }, call: function(e4) {
            me.apply(e4, ae.call(arguments, 1));
          } };
        }
        function I2(t3, e3, n3, r3) {
          var i3, o3, a3, s3, u3, l3, c3, f3 = e3 && e3.ownerDocument, p3 = e3 ? e3.nodeType : 9;
          if (n3 = n3 || [], "string" != typeof t3 || !t3 || 1 !== p3 && 9 !== p3 && 11 !== p3)
            return n3;
          if (!r3 && (V2(e3), e3 = e3 || T2, C2)) {
            if (11 !== p3 && (u3 = L2.exec(t3)))
              if (i3 = u3[1]) {
                if (9 === p3) {
                  if (!(a3 = e3.getElementById(i3)))
                    return n3;
                  if (a3.id === i3)
                    return k2.call(n3, a3), n3;
                } else if (f3 && (a3 = f3.getElementById(i3)) && I2.contains(e3, a3) && a3.id === i3)
                  return k2.call(n3, a3), n3;
              } else {
                if (u3[2])
                  return k2.apply(n3, e3.getElementsByTagName(t3)), n3;
                if ((i3 = u3[3]) && e3.getElementsByClassName)
                  return k2.apply(n3, e3.getElementsByClassName(i3)), n3;
              }
            if (!(h2[t3 + " "] || d2 && d2.test(t3))) {
              if (c3 = t3, f3 = e3, 1 === p3 && (x2.test(t3) || m2.test(t3))) {
                (f3 = H2.test(t3) && U2(e3.parentNode) || e3) == e3 && le.scope || ((s3 = e3.getAttribute("id")) ? s3 = ce.escapeSelector(s3) : e3.setAttribute("id", s3 = S2)), o3 = (l3 = Y2(t3)).length;
                while (o3--)
                  l3[o3] = (s3 ? "#" + s3 : ":scope") + " " + Q2(l3[o3]);
                c3 = l3.join(",");
              }
              try {
                return k2.apply(n3, f3.querySelectorAll(c3)), n3;
              } catch (e4) {
                h2(t3, true);
              } finally {
                s3 === S2 && e3.removeAttribute("id");
              }
            }
          }
          return re2(t3.replace(ve, "$1"), e3, n3, r3);
        }
        function W2() {
          var r3 = [];
          return function e3(t3, n3) {
            return r3.push(t3 + " ") > b2.cacheLength && delete e3[r3.shift()], e3[t3 + " "] = n3;
          };
        }
        function F2(e3) {
          return e3[S2] = true, e3;
        }
        function $3(e3) {
          var t3 = T2.createElement("fieldset");
          try {
            return !!e3(t3);
          } catch (e4) {
            return false;
          } finally {
            t3.parentNode && t3.parentNode.removeChild(t3), t3 = null;
          }
        }
        function B2(t3) {
          return function(e3) {
            return fe(e3, "input") && e3.type === t3;
          };
        }
        function _2(t3) {
          return function(e3) {
            return (fe(e3, "input") || fe(e3, "button")) && e3.type === t3;
          };
        }
        function z2(t3) {
          return function(e3) {
            return "form" in e3 ? e3.parentNode && false === e3.disabled ? "label" in e3 ? "label" in e3.parentNode ? e3.parentNode.disabled === t3 : e3.disabled === t3 : e3.isDisabled === t3 || e3.isDisabled !== !t3 && R2(e3) === t3 : e3.disabled === t3 : "label" in e3 && e3.disabled === t3;
          };
        }
        function X2(a3) {
          return F2(function(o3) {
            return o3 = +o3, F2(function(e3, t3) {
              var n3, r3 = a3([], e3.length, o3), i3 = r3.length;
              while (i3--)
                e3[n3 = r3[i3]] && (e3[n3] = !(t3[n3] = e3[n3]));
            });
          });
        }
        function U2(e3) {
          return e3 && "undefined" != typeof e3.getElementsByTagName && e3;
        }
        function V2(e3) {
          var t3, n3 = e3 ? e3.ownerDocument || e3 : ye;
          return n3 != T2 && 9 === n3.nodeType && n3.documentElement && (r2 = (T2 = n3).documentElement, C2 = !ce.isXMLDoc(T2), i2 = r2.matches || r2.webkitMatchesSelector || r2.msMatchesSelector, r2.msMatchesSelector && ye != T2 && (t3 = T2.defaultView) && t3.top !== t3 && t3.addEventListener("unload", M3), le.getById = $3(function(e4) {
            return r2.appendChild(e4).id = ce.expando, !T2.getElementsByName || !T2.getElementsByName(ce.expando).length;
          }), le.disconnectedMatch = $3(function(e4) {
            return i2.call(e4, "*");
          }), le.scope = $3(function() {
            return T2.querySelectorAll(":scope");
          }), le.cssHas = $3(function() {
            try {
              return T2.querySelector(":has(*,:jqfake)"), false;
            } catch (e4) {
              return true;
            }
          }), le.getById ? (b2.filter.ID = function(e4) {
            var t4 = e4.replace(O2, P2);
            return function(e5) {
              return e5.getAttribute("id") === t4;
            };
          }, b2.find.ID = function(e4, t4) {
            if ("undefined" != typeof t4.getElementById && C2) {
              var n4 = t4.getElementById(e4);
              return n4 ? [n4] : [];
            }
          }) : (b2.filter.ID = function(e4) {
            var n4 = e4.replace(O2, P2);
            return function(e5) {
              var t4 = "undefined" != typeof e5.getAttributeNode && e5.getAttributeNode("id");
              return t4 && t4.value === n4;
            };
          }, b2.find.ID = function(e4, t4) {
            if ("undefined" != typeof t4.getElementById && C2) {
              var n4, r3, i3, o3 = t4.getElementById(e4);
              if (o3) {
                if ((n4 = o3.getAttributeNode("id")) && n4.value === e4)
                  return [o3];
                i3 = t4.getElementsByName(e4), r3 = 0;
                while (o3 = i3[r3++])
                  if ((n4 = o3.getAttributeNode("id")) && n4.value === e4)
                    return [o3];
              }
              return [];
            }
          }), b2.find.TAG = function(e4, t4) {
            return "undefined" != typeof t4.getElementsByTagName ? t4.getElementsByTagName(e4) : t4.querySelectorAll(e4);
          }, b2.find.CLASS = function(e4, t4) {
            if ("undefined" != typeof t4.getElementsByClassName && C2)
              return t4.getElementsByClassName(e4);
          }, d2 = [], $3(function(e4) {
            var t4;
            r2.appendChild(e4).innerHTML = "<a id='" + S2 + "' href='' disabled='disabled'></a><select id='" + S2 + "-\r\\' disabled='disabled'><option selected=''></option></select>", e4.querySelectorAll("[selected]").length || d2.push("\\[" + ge + "*(?:value|" + f2 + ")"), e4.querySelectorAll("[id~=" + S2 + "-]").length || d2.push("~="), e4.querySelectorAll("a#" + S2 + "+*").length || d2.push(".#.+[+~]"), e4.querySelectorAll(":checked").length || d2.push(":checked"), (t4 = T2.createElement("input")).setAttribute("type", "hidden"), e4.appendChild(t4).setAttribute("name", "D"), r2.appendChild(e4).disabled = true, 2 !== e4.querySelectorAll(":disabled").length && d2.push(":enabled", ":disabled"), (t4 = T2.createElement("input")).setAttribute("name", ""), e4.appendChild(t4), e4.querySelectorAll("[name='']").length || d2.push("\\[" + ge + "*name" + ge + "*=" + ge + `*(?:''|"")`);
          }), le.cssHas || d2.push(":has"), d2 = d2.length && new RegExp(d2.join("|")), l2 = function(e4, t4) {
            if (e4 === t4)
              return a2 = true, 0;
            var n4 = !e4.compareDocumentPosition - !t4.compareDocumentPosition;
            return n4 || (1 & (n4 = (e4.ownerDocument || e4) == (t4.ownerDocument || t4) ? e4.compareDocumentPosition(t4) : 1) || !le.sortDetached && t4.compareDocumentPosition(e4) === n4 ? e4 === T2 || e4.ownerDocument == ye && I2.contains(ye, e4) ? -1 : t4 === T2 || t4.ownerDocument == ye && I2.contains(ye, t4) ? 1 : o2 ? se.call(o2, e4) - se.call(o2, t4) : 0 : 4 & n4 ? -1 : 1);
          }), T2;
        }
        for (e2 in I2.matches = function(e3, t3) {
          return I2(e3, null, null, t3);
        }, I2.matchesSelector = function(e3, t3) {
          if (V2(e3), C2 && !h2[t3 + " "] && (!d2 || !d2.test(t3)))
            try {
              var n3 = i2.call(e3, t3);
              if (n3 || le.disconnectedMatch || e3.document && 11 !== e3.document.nodeType)
                return n3;
            } catch (e4) {
              h2(t3, true);
            }
          return 0 < I2(t3, T2, null, [e3]).length;
        }, I2.contains = function(e3, t3) {
          return (e3.ownerDocument || e3) != T2 && V2(e3), ce.contains(e3, t3);
        }, I2.attr = function(e3, t3) {
          (e3.ownerDocument || e3) != T2 && V2(e3);
          var n3 = b2.attrHandle[t3.toLowerCase()], r3 = n3 && ue.call(b2.attrHandle, t3.toLowerCase()) ? n3(e3, t3, !C2) : void 0;
          return void 0 !== r3 ? r3 : e3.getAttribute(t3);
        }, I2.error = function(e3) {
          throw new Error("Syntax error, unrecognized expression: " + e3);
        }, ce.uniqueSort = function(e3) {
          var t3, n3 = [], r3 = 0, i3 = 0;
          if (a2 = !le.sortStable, o2 = !le.sortStable && ae.call(e3, 0), de.call(e3, l2), a2) {
            while (t3 = e3[i3++])
              t3 === e3[i3] && (r3 = n3.push(i3));
            while (r3--)
              he.call(e3, n3[r3], 1);
          }
          return o2 = null, e3;
        }, ce.fn.uniqueSort = function() {
          return this.pushStack(ce.uniqueSort(ae.apply(this)));
        }, (b2 = ce.expr = { cacheLength: 50, createPseudo: F2, match: D2, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e3) {
          return e3[1] = e3[1].replace(O2, P2), e3[3] = (e3[3] || e3[4] || e3[5] || "").replace(O2, P2), "~=" === e3[2] && (e3[3] = " " + e3[3] + " "), e3.slice(0, 4);
        }, CHILD: function(e3) {
          return e3[1] = e3[1].toLowerCase(), "nth" === e3[1].slice(0, 3) ? (e3[3] || I2.error(e3[0]), e3[4] = +(e3[4] ? e3[5] + (e3[6] || 1) : 2 * ("even" === e3[3] || "odd" === e3[3])), e3[5] = +(e3[7] + e3[8] || "odd" === e3[3])) : e3[3] && I2.error(e3[0]), e3;
        }, PSEUDO: function(e3) {
          var t3, n3 = !e3[6] && e3[2];
          return D2.CHILD.test(e3[0]) ? null : (e3[3] ? e3[2] = e3[4] || e3[5] || "" : n3 && j2.test(n3) && (t3 = Y2(n3, true)) && (t3 = n3.indexOf(")", n3.length - t3) - n3.length) && (e3[0] = e3[0].slice(0, t3), e3[2] = n3.slice(0, t3)), e3.slice(0, 3));
        } }, filter: { TAG: function(e3) {
          var t3 = e3.replace(O2, P2).toLowerCase();
          return "*" === e3 ? function() {
            return true;
          } : function(e4) {
            return fe(e4, t3);
          };
        }, CLASS: function(e3) {
          var t3 = s2[e3 + " "];
          return t3 || (t3 = new RegExp("(^|" + ge + ")" + e3 + "(" + ge + "|$)")) && s2(e3, function(e4) {
            return t3.test("string" == typeof e4.className && e4.className || "undefined" != typeof e4.getAttribute && e4.getAttribute("class") || "");
          });
        }, ATTR: function(n3, r3, i3) {
          return function(e3) {
            var t3 = I2.attr(e3, n3);
            return null == t3 ? "!=" === r3 : !r3 || (t3 += "", "=" === r3 ? t3 === i3 : "!=" === r3 ? t3 !== i3 : "^=" === r3 ? i3 && 0 === t3.indexOf(i3) : "*=" === r3 ? i3 && -1 < t3.indexOf(i3) : "$=" === r3 ? i3 && t3.slice(-i3.length) === i3 : "~=" === r3 ? -1 < (" " + t3.replace(v2, " ") + " ").indexOf(i3) : "|=" === r3 && (t3 === i3 || t3.slice(0, i3.length + 1) === i3 + "-"));
          };
        }, CHILD: function(d3, e3, t3, h3, g3) {
          var v3 = "nth" !== d3.slice(0, 3), y3 = "last" !== d3.slice(-4), m3 = "of-type" === e3;
          return 1 === h3 && 0 === g3 ? function(e4) {
            return !!e4.parentNode;
          } : function(e4, t4, n3) {
            var r3, i3, o3, a3, s3, u3 = v3 !== y3 ? "nextSibling" : "previousSibling", l3 = e4.parentNode, c3 = m3 && e4.nodeName.toLowerCase(), f3 = !n3 && !m3, p3 = false;
            if (l3) {
              if (v3) {
                while (u3) {
                  o3 = e4;
                  while (o3 = o3[u3])
                    if (m3 ? fe(o3, c3) : 1 === o3.nodeType)
                      return false;
                  s3 = u3 = "only" === d3 && !s3 && "nextSibling";
                }
                return true;
              }
              if (s3 = [y3 ? l3.firstChild : l3.lastChild], y3 && f3) {
                p3 = (a3 = (r3 = (i3 = l3[S2] || (l3[S2] = {}))[d3] || [])[0] === E2 && r3[1]) && r3[2], o3 = a3 && l3.childNodes[a3];
                while (o3 = ++a3 && o3 && o3[u3] || (p3 = a3 = 0) || s3.pop())
                  if (1 === o3.nodeType && ++p3 && o3 === e4) {
                    i3[d3] = [E2, a3, p3];
                    break;
                  }
              } else if (f3 && (p3 = a3 = (r3 = (i3 = e4[S2] || (e4[S2] = {}))[d3] || [])[0] === E2 && r3[1]), false === p3) {
                while (o3 = ++a3 && o3 && o3[u3] || (p3 = a3 = 0) || s3.pop())
                  if ((m3 ? fe(o3, c3) : 1 === o3.nodeType) && ++p3 && (f3 && ((i3 = o3[S2] || (o3[S2] = {}))[d3] = [E2, p3]), o3 === e4))
                    break;
              }
              return (p3 -= g3) === h3 || p3 % h3 == 0 && 0 <= p3 / h3;
            }
          };
        }, PSEUDO: function(e3, o3) {
          var t3, a3 = b2.pseudos[e3] || b2.setFilters[e3.toLowerCase()] || I2.error("unsupported pseudo: " + e3);
          return a3[S2] ? a3(o3) : 1 < a3.length ? (t3 = [e3, e3, "", o3], b2.setFilters.hasOwnProperty(e3.toLowerCase()) ? F2(function(e4, t4) {
            var n3, r3 = a3(e4, o3), i3 = r3.length;
            while (i3--)
              e4[n3 = se.call(e4, r3[i3])] = !(t4[n3] = r3[i3]);
          }) : function(e4) {
            return a3(e4, 0, t3);
          }) : a3;
        } }, pseudos: { not: F2(function(e3) {
          var r3 = [], i3 = [], s3 = ne2(e3.replace(ve, "$1"));
          return s3[S2] ? F2(function(e4, t3, n3, r4) {
            var i4, o3 = s3(e4, null, r4, []), a3 = e4.length;
            while (a3--)
              (i4 = o3[a3]) && (e4[a3] = !(t3[a3] = i4));
          }) : function(e4, t3, n3) {
            return r3[0] = e4, s3(r3, null, n3, i3), r3[0] = null, !i3.pop();
          };
        }), has: F2(function(t3) {
          return function(e3) {
            return 0 < I2(t3, e3).length;
          };
        }), contains: F2(function(t3) {
          return t3 = t3.replace(O2, P2), function(e3) {
            return -1 < (e3.textContent || ce.text(e3)).indexOf(t3);
          };
        }), lang: F2(function(n3) {
          return A2.test(n3 || "") || I2.error("unsupported lang: " + n3), n3 = n3.replace(O2, P2).toLowerCase(), function(e3) {
            var t3;
            do {
              if (t3 = C2 ? e3.lang : e3.getAttribute("xml:lang") || e3.getAttribute("lang"))
                return (t3 = t3.toLowerCase()) === n3 || 0 === t3.indexOf(n3 + "-");
            } while ((e3 = e3.parentNode) && 1 === e3.nodeType);
            return false;
          };
        }), target: function(e3) {
          var t3 = ie.location && ie.location.hash;
          return t3 && t3.slice(1) === e3.id;
        }, root: function(e3) {
          return e3 === r2;
        }, focus: function(e3) {
          return e3 === function() {
            try {
              return T2.activeElement;
            } catch (e4) {
            }
          }() && T2.hasFocus() && !!(e3.type || e3.href || ~e3.tabIndex);
        }, enabled: z2(false), disabled: z2(true), checked: function(e3) {
          return fe(e3, "input") && !!e3.checked || fe(e3, "option") && !!e3.selected;
        }, selected: function(e3) {
          return e3.parentNode && e3.parentNode.selectedIndex, true === e3.selected;
        }, empty: function(e3) {
          for (e3 = e3.firstChild; e3; e3 = e3.nextSibling)
            if (e3.nodeType < 6)
              return false;
          return true;
        }, parent: function(e3) {
          return !b2.pseudos.empty(e3);
        }, header: function(e3) {
          return q2.test(e3.nodeName);
        }, input: function(e3) {
          return N2.test(e3.nodeName);
        }, button: function(e3) {
          return fe(e3, "input") && "button" === e3.type || fe(e3, "button");
        }, text: function(e3) {
          var t3;
          return fe(e3, "input") && "text" === e3.type && (null == (t3 = e3.getAttribute("type")) || "text" === t3.toLowerCase());
        }, first: X2(function() {
          return [0];
        }), last: X2(function(e3, t3) {
          return [t3 - 1];
        }), eq: X2(function(e3, t3, n3) {
          return [n3 < 0 ? n3 + t3 : n3];
        }), even: X2(function(e3, t3) {
          for (var n3 = 0; n3 < t3; n3 += 2)
            e3.push(n3);
          return e3;
        }), odd: X2(function(e3, t3) {
          for (var n3 = 1; n3 < t3; n3 += 2)
            e3.push(n3);
          return e3;
        }), lt: X2(function(e3, t3, n3) {
          var r3;
          for (r3 = n3 < 0 ? n3 + t3 : t3 < n3 ? t3 : n3; 0 <= --r3; )
            e3.push(r3);
          return e3;
        }), gt: X2(function(e3, t3, n3) {
          for (var r3 = n3 < 0 ? n3 + t3 : n3; ++r3 < t3; )
            e3.push(r3);
          return e3;
        }) } }).pseudos.nth = b2.pseudos.eq, { radio: true, checkbox: true, file: true, password: true, image: true })
          b2.pseudos[e2] = B2(e2);
        for (e2 in { submit: true, reset: true })
          b2.pseudos[e2] = _2(e2);
        function G2() {
        }
        function Y2(e3, t3) {
          var n3, r3, i3, o3, a3, s3, u3, l3 = c2[e3 + " "];
          if (l3)
            return t3 ? 0 : l3.slice(0);
          a3 = e3, s3 = [], u3 = b2.preFilter;
          while (a3) {
            for (o3 in n3 && !(r3 = y2.exec(a3)) || (r3 && (a3 = a3.slice(r3[0].length) || a3), s3.push(i3 = [])), n3 = false, (r3 = m2.exec(a3)) && (n3 = r3.shift(), i3.push({ value: n3, type: r3[0].replace(ve, " ") }), a3 = a3.slice(n3.length)), b2.filter)
              !(r3 = D2[o3].exec(a3)) || u3[o3] && !(r3 = u3[o3](r3)) || (n3 = r3.shift(), i3.push({ value: n3, type: o3, matches: r3 }), a3 = a3.slice(n3.length));
            if (!n3)
              break;
          }
          return t3 ? a3.length : a3 ? I2.error(e3) : c2(e3, s3).slice(0);
        }
        function Q2(e3) {
          for (var t3 = 0, n3 = e3.length, r3 = ""; t3 < n3; t3++)
            r3 += e3[t3].value;
          return r3;
        }
        function J2(a3, e3, t3) {
          var s3 = e3.dir, u3 = e3.next, l3 = u3 || s3, c3 = t3 && "parentNode" === l3, f3 = n2++;
          return e3.first ? function(e4, t4, n3) {
            while (e4 = e4[s3])
              if (1 === e4.nodeType || c3)
                return a3(e4, t4, n3);
            return false;
          } : function(e4, t4, n3) {
            var r3, i3, o3 = [E2, f3];
            if (n3) {
              while (e4 = e4[s3])
                if ((1 === e4.nodeType || c3) && a3(e4, t4, n3))
                  return true;
            } else
              while (e4 = e4[s3])
                if (1 === e4.nodeType || c3)
                  if (i3 = e4[S2] || (e4[S2] = {}), u3 && fe(e4, u3))
                    e4 = e4[s3] || e4;
                  else {
                    if ((r3 = i3[l3]) && r3[0] === E2 && r3[1] === f3)
                      return o3[2] = r3[2];
                    if ((i3[l3] = o3)[2] = a3(e4, t4, n3))
                      return true;
                  }
            return false;
          };
        }
        function K2(i3) {
          return 1 < i3.length ? function(e3, t3, n3) {
            var r3 = i3.length;
            while (r3--)
              if (!i3[r3](e3, t3, n3))
                return false;
            return true;
          } : i3[0];
        }
        function Z2(e3, t3, n3, r3, i3) {
          for (var o3, a3 = [], s3 = 0, u3 = e3.length, l3 = null != t3; s3 < u3; s3++)
            (o3 = e3[s3]) && (n3 && !n3(o3, r3, i3) || (a3.push(o3), l3 && t3.push(s3)));
          return a3;
        }
        function ee2(d3, h3, g3, v3, y3, e3) {
          return v3 && !v3[S2] && (v3 = ee2(v3)), y3 && !y3[S2] && (y3 = ee2(y3, e3)), F2(function(e4, t3, n3, r3) {
            var i3, o3, a3, s3, u3 = [], l3 = [], c3 = t3.length, f3 = e4 || function(e5, t4, n4) {
              for (var r4 = 0, i4 = t4.length; r4 < i4; r4++)
                I2(e5, t4[r4], n4);
              return n4;
            }(h3 || "*", n3.nodeType ? [n3] : n3, []), p3 = !d3 || !e4 && h3 ? f3 : Z2(f3, u3, d3, n3, r3);
            if (g3 ? g3(p3, s3 = y3 || (e4 ? d3 : c3 || v3) ? [] : t3, n3, r3) : s3 = p3, v3) {
              i3 = Z2(s3, l3), v3(i3, [], n3, r3), o3 = i3.length;
              while (o3--)
                (a3 = i3[o3]) && (s3[l3[o3]] = !(p3[l3[o3]] = a3));
            }
            if (e4) {
              if (y3 || d3) {
                if (y3) {
                  i3 = [], o3 = s3.length;
                  while (o3--)
                    (a3 = s3[o3]) && i3.push(p3[o3] = a3);
                  y3(null, s3 = [], i3, r3);
                }
                o3 = s3.length;
                while (o3--)
                  (a3 = s3[o3]) && -1 < (i3 = y3 ? se.call(e4, a3) : u3[o3]) && (e4[i3] = !(t3[i3] = a3));
              }
            } else
              s3 = Z2(s3 === t3 ? s3.splice(c3, s3.length) : s3), y3 ? y3(null, t3, s3, r3) : k2.apply(t3, s3);
          });
        }
        function te2(e3) {
          for (var i3, t3, n3, r3 = e3.length, o3 = b2.relative[e3[0].type], a3 = o3 || b2.relative[" "], s3 = o3 ? 1 : 0, u3 = J2(function(e4) {
            return e4 === i3;
          }, a3, true), l3 = J2(function(e4) {
            return -1 < se.call(i3, e4);
          }, a3, true), c3 = [function(e4, t4, n4) {
            var r4 = !o3 && (n4 || t4 != w2) || ((i3 = t4).nodeType ? u3(e4, t4, n4) : l3(e4, t4, n4));
            return i3 = null, r4;
          }]; s3 < r3; s3++)
            if (t3 = b2.relative[e3[s3].type])
              c3 = [J2(K2(c3), t3)];
            else {
              if ((t3 = b2.filter[e3[s3].type].apply(null, e3[s3].matches))[S2]) {
                for (n3 = ++s3; n3 < r3; n3++)
                  if (b2.relative[e3[n3].type])
                    break;
                return ee2(1 < s3 && K2(c3), 1 < s3 && Q2(e3.slice(0, s3 - 1).concat({ value: " " === e3[s3 - 2].type ? "*" : "" })).replace(ve, "$1"), t3, s3 < n3 && te2(e3.slice(s3, n3)), n3 < r3 && te2(e3 = e3.slice(n3)), n3 < r3 && Q2(e3));
              }
              c3.push(t3);
            }
          return K2(c3);
        }
        function ne2(e3, t3) {
          var n3, v3, y3, m3, x3, r3, i3 = [], o3 = [], a3 = u2[e3 + " "];
          if (!a3) {
            t3 || (t3 = Y2(e3)), n3 = t3.length;
            while (n3--)
              (a3 = te2(t3[n3]))[S2] ? i3.push(a3) : o3.push(a3);
            (a3 = u2(e3, (v3 = o3, m3 = 0 < (y3 = i3).length, x3 = 0 < v3.length, r3 = function(e4, t4, n4, r4, i4) {
              var o4, a4, s3, u3 = 0, l3 = "0", c3 = e4 && [], f3 = [], p3 = w2, d3 = e4 || x3 && b2.find.TAG("*", i4), h3 = E2 += null == p3 ? 1 : Math.random() || 0.1, g3 = d3.length;
              for (i4 && (w2 = t4 == T2 || t4 || i4); l3 !== g3 && null != (o4 = d3[l3]); l3++) {
                if (x3 && o4) {
                  a4 = 0, t4 || o4.ownerDocument == T2 || (V2(o4), n4 = !C2);
                  while (s3 = v3[a4++])
                    if (s3(o4, t4 || T2, n4)) {
                      k2.call(r4, o4);
                      break;
                    }
                  i4 && (E2 = h3);
                }
                m3 && ((o4 = !s3 && o4) && u3--, e4 && c3.push(o4));
              }
              if (u3 += l3, m3 && l3 !== u3) {
                a4 = 0;
                while (s3 = y3[a4++])
                  s3(c3, f3, t4, n4);
                if (e4) {
                  if (0 < u3)
                    while (l3--)
                      c3[l3] || f3[l3] || (f3[l3] = pe.call(r4));
                  f3 = Z2(f3);
                }
                k2.apply(r4, f3), i4 && !e4 && 0 < f3.length && 1 < u3 + y3.length && ce.uniqueSort(r4);
              }
              return i4 && (E2 = h3, w2 = p3), c3;
            }, m3 ? F2(r3) : r3))).selector = e3;
          }
          return a3;
        }
        function re2(e3, t3, n3, r3) {
          var i3, o3, a3, s3, u3, l3 = "function" == typeof e3 && e3, c3 = !r3 && Y2(e3 = l3.selector || e3);
          if (n3 = n3 || [], 1 === c3.length) {
            if (2 < (o3 = c3[0] = c3[0].slice(0)).length && "ID" === (a3 = o3[0]).type && 9 === t3.nodeType && C2 && b2.relative[o3[1].type]) {
              if (!(t3 = (b2.find.ID(a3.matches[0].replace(O2, P2), t3) || [])[0]))
                return n3;
              l3 && (t3 = t3.parentNode), e3 = e3.slice(o3.shift().value.length);
            }
            i3 = D2.needsContext.test(e3) ? 0 : o3.length;
            while (i3--) {
              if (a3 = o3[i3], b2.relative[s3 = a3.type])
                break;
              if ((u3 = b2.find[s3]) && (r3 = u3(a3.matches[0].replace(O2, P2), H2.test(o3[0].type) && U2(t3.parentNode) || t3))) {
                if (o3.splice(i3, 1), !(e3 = r3.length && Q2(o3)))
                  return k2.apply(n3, r3), n3;
                break;
              }
            }
          }
          return (l3 || ne2(e3, c3))(r3, t3, !C2, n3, !t3 || H2.test(e3) && U2(t3.parentNode) || t3), n3;
        }
        G2.prototype = b2.filters = b2.pseudos, b2.setFilters = new G2(), le.sortStable = S2.split("").sort(l2).join("") === S2, V2(), le.sortDetached = $3(function(e3) {
          return 1 & e3.compareDocumentPosition(T2.createElement("fieldset"));
        }), ce.find = I2, ce.expr[":"] = ce.expr.pseudos, ce.unique = ce.uniqueSort, I2.compile = ne2, I2.select = re2, I2.setDocument = V2, I2.tokenize = Y2, I2.escape = ce.escapeSelector, I2.getText = ce.text, I2.isXML = ce.isXMLDoc, I2.selectors = ce.expr, I2.support = ce.support, I2.uniqueSort = ce.uniqueSort;
      }();
      var d = function(e2, t2, n2) {
        var r2 = [], i2 = void 0 !== n2;
        while ((e2 = e2[t2]) && 9 !== e2.nodeType)
          if (1 === e2.nodeType) {
            if (i2 && ce(e2).is(n2))
              break;
            r2.push(e2);
          }
        return r2;
      }, h = function(e2, t2) {
        for (var n2 = []; e2; e2 = e2.nextSibling)
          1 === e2.nodeType && e2 !== t2 && n2.push(e2);
        return n2;
      }, b = ce.expr.match.needsContext, w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function T(e2, n2, r2) {
        return v(n2) ? ce.grep(e2, function(e3, t2) {
          return !!n2.call(e3, t2, e3) !== r2;
        }) : n2.nodeType ? ce.grep(e2, function(e3) {
          return e3 === n2 !== r2;
        }) : "string" != typeof n2 ? ce.grep(e2, function(e3) {
          return -1 < se.call(n2, e3) !== r2;
        }) : ce.filter(n2, e2, r2);
      }
      ce.filter = function(e2, t2, n2) {
        var r2 = t2[0];
        return n2 && (e2 = ":not(" + e2 + ")"), 1 === t2.length && 1 === r2.nodeType ? ce.find.matchesSelector(r2, e2) ? [r2] : [] : ce.find.matches(e2, ce.grep(t2, function(e3) {
          return 1 === e3.nodeType;
        }));
      }, ce.fn.extend({ find: function(e2) {
        var t2, n2, r2 = this.length, i2 = this;
        if ("string" != typeof e2)
          return this.pushStack(ce(e2).filter(function() {
            for (t2 = 0; t2 < r2; t2++)
              if (ce.contains(i2[t2], this))
                return true;
          }));
        for (n2 = this.pushStack([]), t2 = 0; t2 < r2; t2++)
          ce.find(e2, i2[t2], n2);
        return 1 < r2 ? ce.uniqueSort(n2) : n2;
      }, filter: function(e2) {
        return this.pushStack(T(this, e2 || [], false));
      }, not: function(e2) {
        return this.pushStack(T(this, e2 || [], true));
      }, is: function(e2) {
        return !!T(this, "string" == typeof e2 && b.test(e2) ? ce(e2) : e2 || [], false).length;
      } });
      var k, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      (ce.fn.init = function(e2, t2, n2) {
        var r2, i2;
        if (!e2)
          return this;
        if (n2 = n2 || k, "string" == typeof e2) {
          if (!(r2 = "<" === e2[0] && ">" === e2[e2.length - 1] && 3 <= e2.length ? [null, e2, null] : S.exec(e2)) || !r2[1] && t2)
            return !t2 || t2.jquery ? (t2 || n2).find(e2) : this.constructor(t2).find(e2);
          if (r2[1]) {
            if (t2 = t2 instanceof ce ? t2[0] : t2, ce.merge(this, ce.parseHTML(r2[1], t2 && t2.nodeType ? t2.ownerDocument || t2 : C, true)), w.test(r2[1]) && ce.isPlainObject(t2))
              for (r2 in t2)
                v(this[r2]) ? this[r2](t2[r2]) : this.attr(r2, t2[r2]);
            return this;
          }
          return (i2 = C.getElementById(r2[2])) && (this[0] = i2, this.length = 1), this;
        }
        return e2.nodeType ? (this[0] = e2, this.length = 1, this) : v(e2) ? void 0 !== n2.ready ? n2.ready(e2) : e2(ce) : ce.makeArray(e2, this);
      }).prototype = ce.fn, k = ce(C);
      var E = /^(?:parents|prev(?:Until|All))/, j = { children: true, contents: true, next: true, prev: true };
      function A(e2, t2) {
        while ((e2 = e2[t2]) && 1 !== e2.nodeType)
          ;
        return e2;
      }
      ce.fn.extend({ has: function(e2) {
        var t2 = ce(e2, this), n2 = t2.length;
        return this.filter(function() {
          for (var e3 = 0; e3 < n2; e3++)
            if (ce.contains(this, t2[e3]))
              return true;
        });
      }, closest: function(e2, t2) {
        var n2, r2 = 0, i2 = this.length, o2 = [], a2 = "string" != typeof e2 && ce(e2);
        if (!b.test(e2)) {
          for (; r2 < i2; r2++)
            for (n2 = this[r2]; n2 && n2 !== t2; n2 = n2.parentNode)
              if (n2.nodeType < 11 && (a2 ? -1 < a2.index(n2) : 1 === n2.nodeType && ce.find.matchesSelector(n2, e2))) {
                o2.push(n2);
                break;
              }
        }
        return this.pushStack(1 < o2.length ? ce.uniqueSort(o2) : o2);
      }, index: function(e2) {
        return e2 ? "string" == typeof e2 ? se.call(ce(e2), this[0]) : se.call(this, e2.jquery ? e2[0] : e2) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      }, add: function(e2, t2) {
        return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e2, t2))));
      }, addBack: function(e2) {
        return this.add(null == e2 ? this.prevObject : this.prevObject.filter(e2));
      } }), ce.each({ parent: function(e2) {
        var t2 = e2.parentNode;
        return t2 && 11 !== t2.nodeType ? t2 : null;
      }, parents: function(e2) {
        return d(e2, "parentNode");
      }, parentsUntil: function(e2, t2, n2) {
        return d(e2, "parentNode", n2);
      }, next: function(e2) {
        return A(e2, "nextSibling");
      }, prev: function(e2) {
        return A(e2, "previousSibling");
      }, nextAll: function(e2) {
        return d(e2, "nextSibling");
      }, prevAll: function(e2) {
        return d(e2, "previousSibling");
      }, nextUntil: function(e2, t2, n2) {
        return d(e2, "nextSibling", n2);
      }, prevUntil: function(e2, t2, n2) {
        return d(e2, "previousSibling", n2);
      }, siblings: function(e2) {
        return h((e2.parentNode || {}).firstChild, e2);
      }, children: function(e2) {
        return h(e2.firstChild);
      }, contents: function(e2) {
        return null != e2.contentDocument && r(e2.contentDocument) ? e2.contentDocument : (fe(e2, "template") && (e2 = e2.content || e2), ce.merge([], e2.childNodes));
      } }, function(r2, i2) {
        ce.fn[r2] = function(e2, t2) {
          var n2 = ce.map(this, i2, e2);
          return "Until" !== r2.slice(-5) && (t2 = e2), t2 && "string" == typeof t2 && (n2 = ce.filter(t2, n2)), 1 < this.length && (j[r2] || ce.uniqueSort(n2), E.test(r2) && n2.reverse()), this.pushStack(n2);
        };
      });
      var D = /[^\x20\t\r\n\f]+/g;
      function N(e2) {
        return e2;
      }
      function q(e2) {
        throw e2;
      }
      function L(e2, t2, n2, r2) {
        var i2;
        try {
          e2 && v(i2 = e2.promise) ? i2.call(e2).done(t2).fail(n2) : e2 && v(i2 = e2.then) ? i2.call(e2, t2, n2) : t2.apply(void 0, [e2].slice(r2));
        } catch (e3) {
          n2.apply(void 0, [e3]);
        }
      }
      ce.Callbacks = function(r2) {
        var e2, n2;
        r2 = "string" == typeof r2 ? (e2 = r2, n2 = {}, ce.each(e2.match(D) || [], function(e3, t3) {
          n2[t3] = true;
        }), n2) : ce.extend({}, r2);
        var i2, t2, o2, a2, s2 = [], u2 = [], l2 = -1, c2 = function() {
          for (a2 = a2 || r2.once, o2 = i2 = true; u2.length; l2 = -1) {
            t2 = u2.shift();
            while (++l2 < s2.length)
              false === s2[l2].apply(t2[0], t2[1]) && r2.stopOnFalse && (l2 = s2.length, t2 = false);
          }
          r2.memory || (t2 = false), i2 = false, a2 && (s2 = t2 ? [] : "");
        }, f2 = { add: function() {
          return s2 && (t2 && !i2 && (l2 = s2.length - 1, u2.push(t2)), function n3(e3) {
            ce.each(e3, function(e4, t3) {
              v(t3) ? r2.unique && f2.has(t3) || s2.push(t3) : t3 && t3.length && "string" !== x(t3) && n3(t3);
            });
          }(arguments), t2 && !i2 && c2()), this;
        }, remove: function() {
          return ce.each(arguments, function(e3, t3) {
            var n3;
            while (-1 < (n3 = ce.inArray(t3, s2, n3)))
              s2.splice(n3, 1), n3 <= l2 && l2--;
          }), this;
        }, has: function(e3) {
          return e3 ? -1 < ce.inArray(e3, s2) : 0 < s2.length;
        }, empty: function() {
          return s2 && (s2 = []), this;
        }, disable: function() {
          return a2 = u2 = [], s2 = t2 = "", this;
        }, disabled: function() {
          return !s2;
        }, lock: function() {
          return a2 = u2 = [], t2 || i2 || (s2 = t2 = ""), this;
        }, locked: function() {
          return !!a2;
        }, fireWith: function(e3, t3) {
          return a2 || (t3 = [e3, (t3 = t3 || []).slice ? t3.slice() : t3], u2.push(t3), i2 || c2()), this;
        }, fire: function() {
          return f2.fireWith(this, arguments), this;
        }, fired: function() {
          return !!o2;
        } };
        return f2;
      }, ce.extend({ Deferred: function(e2) {
        var o2 = [["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2], ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"]], i2 = "pending", a2 = { state: function() {
          return i2;
        }, always: function() {
          return s2.done(arguments).fail(arguments), this;
        }, "catch": function(e3) {
          return a2.then(null, e3);
        }, pipe: function() {
          var i3 = arguments;
          return ce.Deferred(function(r2) {
            ce.each(o2, function(e3, t2) {
              var n2 = v(i3[t2[4]]) && i3[t2[4]];
              s2[t2[1]](function() {
                var e4 = n2 && n2.apply(this, arguments);
                e4 && v(e4.promise) ? e4.promise().progress(r2.notify).done(r2.resolve).fail(r2.reject) : r2[t2[0] + "With"](this, n2 ? [e4] : arguments);
              });
            }), i3 = null;
          }).promise();
        }, then: function(t2, n2, r2) {
          var u2 = 0;
          function l2(i3, o3, a3, s3) {
            return function() {
              var n3 = this, r3 = arguments, e3 = function() {
                var e4, t4;
                if (!(i3 < u2)) {
                  if ((e4 = a3.apply(n3, r3)) === o3.promise())
                    throw new TypeError("Thenable self-resolution");
                  t4 = e4 && ("object" == typeof e4 || "function" == typeof e4) && e4.then, v(t4) ? s3 ? t4.call(e4, l2(u2, o3, N, s3), l2(u2, o3, q, s3)) : (u2++, t4.call(e4, l2(u2, o3, N, s3), l2(u2, o3, q, s3), l2(u2, o3, N, o3.notifyWith))) : (a3 !== N && (n3 = void 0, r3 = [e4]), (s3 || o3.resolveWith)(n3, r3));
                }
              }, t3 = s3 ? e3 : function() {
                try {
                  e3();
                } catch (e4) {
                  ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e4, t3.error), u2 <= i3 + 1 && (a3 !== q && (n3 = void 0, r3 = [e4]), o3.rejectWith(n3, r3));
                }
              };
              i3 ? t3() : (ce.Deferred.getErrorHook ? t3.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (t3.error = ce.Deferred.getStackHook()), ie.setTimeout(t3));
            };
          }
          return ce.Deferred(function(e3) {
            o2[0][3].add(l2(0, e3, v(r2) ? r2 : N, e3.notifyWith)), o2[1][3].add(l2(0, e3, v(t2) ? t2 : N)), o2[2][3].add(l2(0, e3, v(n2) ? n2 : q));
          }).promise();
        }, promise: function(e3) {
          return null != e3 ? ce.extend(e3, a2) : a2;
        } }, s2 = {};
        return ce.each(o2, function(e3, t2) {
          var n2 = t2[2], r2 = t2[5];
          a2[t2[1]] = n2.add, r2 && n2.add(function() {
            i2 = r2;
          }, o2[3 - e3][2].disable, o2[3 - e3][3].disable, o2[0][2].lock, o2[0][3].lock), n2.add(t2[3].fire), s2[t2[0]] = function() {
            return s2[t2[0] + "With"](this === s2 ? void 0 : this, arguments), this;
          }, s2[t2[0] + "With"] = n2.fireWith;
        }), a2.promise(s2), e2 && e2.call(s2, s2), s2;
      }, when: function(e2) {
        var n2 = arguments.length, t2 = n2, r2 = Array(t2), i2 = ae.call(arguments), o2 = ce.Deferred(), a2 = function(t3) {
          return function(e3) {
            r2[t3] = this, i2[t3] = 1 < arguments.length ? ae.call(arguments) : e3, --n2 || o2.resolveWith(r2, i2);
          };
        };
        if (n2 <= 1 && (L(e2, o2.done(a2(t2)).resolve, o2.reject, !n2), "pending" === o2.state() || v(i2[t2] && i2[t2].then)))
          return o2.then();
        while (t2--)
          L(i2[t2], a2(t2), o2.reject);
        return o2.promise();
      } });
      var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      ce.Deferred.exceptionHook = function(e2, t2) {
        ie.console && ie.console.warn && e2 && H.test(e2.name) && ie.console.warn("jQuery.Deferred exception: " + e2.message, e2.stack, t2);
      }, ce.readyException = function(e2) {
        ie.setTimeout(function() {
          throw e2;
        });
      };
      var O = ce.Deferred();
      function P() {
        C.removeEventListener("DOMContentLoaded", P), ie.removeEventListener("load", P), ce.ready();
      }
      ce.fn.ready = function(e2) {
        return O.then(e2)["catch"](function(e3) {
          ce.readyException(e3);
        }), this;
      }, ce.extend({ isReady: false, readyWait: 1, ready: function(e2) {
        (true === e2 ? --ce.readyWait : ce.isReady) || (ce.isReady = true) !== e2 && 0 < --ce.readyWait || O.resolveWith(C, [ce]);
      } }), ce.ready.then = O.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? ie.setTimeout(ce.ready) : (C.addEventListener("DOMContentLoaded", P), ie.addEventListener("load", P));
      var M2 = function(e2, t2, n2, r2, i2, o2, a2) {
        var s2 = 0, u2 = e2.length, l2 = null == n2;
        if ("object" === x(n2))
          for (s2 in i2 = true, n2)
            M2(e2, t2, s2, n2[s2], true, o2, a2);
        else if (void 0 !== r2 && (i2 = true, v(r2) || (a2 = true), l2 && (a2 ? (t2.call(e2, r2), t2 = null) : (l2 = t2, t2 = function(e3, t3, n3) {
          return l2.call(ce(e3), n3);
        })), t2))
          for (; s2 < u2; s2++)
            t2(e2[s2], n2, a2 ? r2 : r2.call(e2[s2], s2, t2(e2[s2], n2)));
        return i2 ? e2 : l2 ? t2.call(e2) : u2 ? t2(e2[0], n2) : o2;
      }, R = /^-ms-/, I = /-([a-z])/g;
      function W(e2, t2) {
        return t2.toUpperCase();
      }
      function F(e2) {
        return e2.replace(R, "ms-").replace(I, W);
      }
      var $2 = function(e2) {
        return 1 === e2.nodeType || 9 === e2.nodeType || !+e2.nodeType;
      };
      function B() {
        this.expando = ce.expando + B.uid++;
      }
      B.uid = 1, B.prototype = { cache: function(e2) {
        var t2 = e2[this.expando];
        return t2 || (t2 = {}, $2(e2) && (e2.nodeType ? e2[this.expando] = t2 : Object.defineProperty(e2, this.expando, { value: t2, configurable: true }))), t2;
      }, set: function(e2, t2, n2) {
        var r2, i2 = this.cache(e2);
        if ("string" == typeof t2)
          i2[F(t2)] = n2;
        else
          for (r2 in t2)
            i2[F(r2)] = t2[r2];
        return i2;
      }, get: function(e2, t2) {
        return void 0 === t2 ? this.cache(e2) : e2[this.expando] && e2[this.expando][F(t2)];
      }, access: function(e2, t2, n2) {
        return void 0 === t2 || t2 && "string" == typeof t2 && void 0 === n2 ? this.get(e2, t2) : (this.set(e2, t2, n2), void 0 !== n2 ? n2 : t2);
      }, remove: function(e2, t2) {
        var n2, r2 = e2[this.expando];
        if (void 0 !== r2) {
          if (void 0 !== t2) {
            n2 = (t2 = Array.isArray(t2) ? t2.map(F) : (t2 = F(t2)) in r2 ? [t2] : t2.match(D) || []).length;
            while (n2--)
              delete r2[t2[n2]];
          }
          (void 0 === t2 || ce.isEmptyObject(r2)) && (e2.nodeType ? e2[this.expando] = void 0 : delete e2[this.expando]);
        }
      }, hasData: function(e2) {
        var t2 = e2[this.expando];
        return void 0 !== t2 && !ce.isEmptyObject(t2);
      } };
      var _ = new B(), z = new B(), X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, U = /[A-Z]/g;
      function V(e2, t2, n2) {
        var r2, i2;
        if (void 0 === n2 && 1 === e2.nodeType)
          if (r2 = "data-" + t2.replace(U, "-$&").toLowerCase(), "string" == typeof (n2 = e2.getAttribute(r2))) {
            try {
              n2 = "true" === (i2 = n2) || "false" !== i2 && ("null" === i2 ? null : i2 === +i2 + "" ? +i2 : X.test(i2) ? JSON.parse(i2) : i2);
            } catch (e3) {
            }
            z.set(e2, t2, n2);
          } else
            n2 = void 0;
        return n2;
      }
      ce.extend({ hasData: function(e2) {
        return z.hasData(e2) || _.hasData(e2);
      }, data: function(e2, t2, n2) {
        return z.access(e2, t2, n2);
      }, removeData: function(e2, t2) {
        z.remove(e2, t2);
      }, _data: function(e2, t2, n2) {
        return _.access(e2, t2, n2);
      }, _removeData: function(e2, t2) {
        _.remove(e2, t2);
      } }), ce.fn.extend({ data: function(n2, e2) {
        var t2, r2, i2, o2 = this[0], a2 = o2 && o2.attributes;
        if (void 0 === n2) {
          if (this.length && (i2 = z.get(o2), 1 === o2.nodeType && !_.get(o2, "hasDataAttrs"))) {
            t2 = a2.length;
            while (t2--)
              a2[t2] && 0 === (r2 = a2[t2].name).indexOf("data-") && (r2 = F(r2.slice(5)), V(o2, r2, i2[r2]));
            _.set(o2, "hasDataAttrs", true);
          }
          return i2;
        }
        return "object" == typeof n2 ? this.each(function() {
          z.set(this, n2);
        }) : M2(this, function(e3) {
          var t3;
          if (o2 && void 0 === e3)
            return void 0 !== (t3 = z.get(o2, n2)) ? t3 : void 0 !== (t3 = V(o2, n2)) ? t3 : void 0;
          this.each(function() {
            z.set(this, n2, e3);
          });
        }, null, e2, 1 < arguments.length, null, true);
      }, removeData: function(e2) {
        return this.each(function() {
          z.remove(this, e2);
        });
      } }), ce.extend({ queue: function(e2, t2, n2) {
        var r2;
        if (e2)
          return t2 = (t2 || "fx") + "queue", r2 = _.get(e2, t2), n2 && (!r2 || Array.isArray(n2) ? r2 = _.access(e2, t2, ce.makeArray(n2)) : r2.push(n2)), r2 || [];
      }, dequeue: function(e2, t2) {
        t2 = t2 || "fx";
        var n2 = ce.queue(e2, t2), r2 = n2.length, i2 = n2.shift(), o2 = ce._queueHooks(e2, t2);
        "inprogress" === i2 && (i2 = n2.shift(), r2--), i2 && ("fx" === t2 && n2.unshift("inprogress"), delete o2.stop, i2.call(e2, function() {
          ce.dequeue(e2, t2);
        }, o2)), !r2 && o2 && o2.empty.fire();
      }, _queueHooks: function(e2, t2) {
        var n2 = t2 + "queueHooks";
        return _.get(e2, n2) || _.access(e2, n2, { empty: ce.Callbacks("once memory").add(function() {
          _.remove(e2, [t2 + "queue", n2]);
        }) });
      } }), ce.fn.extend({ queue: function(t2, n2) {
        var e2 = 2;
        return "string" != typeof t2 && (n2 = t2, t2 = "fx", e2--), arguments.length < e2 ? ce.queue(this[0], t2) : void 0 === n2 ? this : this.each(function() {
          var e3 = ce.queue(this, t2, n2);
          ce._queueHooks(this, t2), "fx" === t2 && "inprogress" !== e3[0] && ce.dequeue(this, t2);
        });
      }, dequeue: function(e2) {
        return this.each(function() {
          ce.dequeue(this, e2);
        });
      }, clearQueue: function(e2) {
        return this.queue(e2 || "fx", []);
      }, promise: function(e2, t2) {
        var n2, r2 = 1, i2 = ce.Deferred(), o2 = this, a2 = this.length, s2 = function() {
          --r2 || i2.resolveWith(o2, [o2]);
        };
        "string" != typeof e2 && (t2 = e2, e2 = void 0), e2 = e2 || "fx";
        while (a2--)
          (n2 = _.get(o2[a2], e2 + "queueHooks")) && n2.empty && (r2++, n2.empty.add(s2));
        return s2(), i2.promise(t2);
      } });
      var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"), Q = ["Top", "Right", "Bottom", "Left"], J = C.documentElement, K = function(e2) {
        return ce.contains(e2.ownerDocument, e2);
      }, Z = { composed: true };
      J.getRootNode && (K = function(e2) {
        return ce.contains(e2.ownerDocument, e2) || e2.getRootNode(Z) === e2.ownerDocument;
      });
      var ee = function(e2, t2) {
        return "none" === (e2 = t2 || e2).style.display || "" === e2.style.display && K(e2) && "none" === ce.css(e2, "display");
      };
      function te(e2, t2, n2, r2) {
        var i2, o2, a2 = 20, s2 = r2 ? function() {
          return r2.cur();
        } : function() {
          return ce.css(e2, t2, "");
        }, u2 = s2(), l2 = n2 && n2[3] || (ce.cssNumber[t2] ? "" : "px"), c2 = e2.nodeType && (ce.cssNumber[t2] || "px" !== l2 && +u2) && Y.exec(ce.css(e2, t2));
        if (c2 && c2[3] !== l2) {
          u2 /= 2, l2 = l2 || c2[3], c2 = +u2 || 1;
          while (a2--)
            ce.style(e2, t2, c2 + l2), (1 - o2) * (1 - (o2 = s2() / u2 || 0.5)) <= 0 && (a2 = 0), c2 /= o2;
          c2 *= 2, ce.style(e2, t2, c2 + l2), n2 = n2 || [];
        }
        return n2 && (c2 = +c2 || +u2 || 0, i2 = n2[1] ? c2 + (n2[1] + 1) * n2[2] : +n2[2], r2 && (r2.unit = l2, r2.start = c2, r2.end = i2)), i2;
      }
      var ne = {};
      function re(e2, t2) {
        for (var n2, r2, i2, o2, a2, s2, u2, l2 = [], c2 = 0, f2 = e2.length; c2 < f2; c2++)
          (r2 = e2[c2]).style && (n2 = r2.style.display, t2 ? ("none" === n2 && (l2[c2] = _.get(r2, "display") || null, l2[c2] || (r2.style.display = "")), "" === r2.style.display && ee(r2) && (l2[c2] = (u2 = a2 = o2 = void 0, a2 = (i2 = r2).ownerDocument, s2 = i2.nodeName, (u2 = ne[s2]) || (o2 = a2.body.appendChild(a2.createElement(s2)), u2 = ce.css(o2, "display"), o2.parentNode.removeChild(o2), "none" === u2 && (u2 = "block"), ne[s2] = u2)))) : "none" !== n2 && (l2[c2] = "none", _.set(r2, "display", n2)));
        for (c2 = 0; c2 < f2; c2++)
          null != l2[c2] && (e2[c2].style.display = l2[c2]);
        return e2;
      }
      ce.fn.extend({ show: function() {
        return re(this, true);
      }, hide: function() {
        return re(this);
      }, toggle: function(e2) {
        return "boolean" == typeof e2 ? e2 ? this.show() : this.hide() : this.each(function() {
          ee(this) ? ce(this).show() : ce(this).hide();
        });
      } });
      var xe, be, we = /^(?:checkbox|radio)$/i, Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Ce = /^$|^module$|\/(?:java|ecma)script/i;
      xe = C.createDocumentFragment().appendChild(C.createElement("div")), (be = C.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), xe.appendChild(be), le.checkClone = xe.cloneNode(true).cloneNode(true).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", le.noCloneChecked = !!xe.cloneNode(true).lastChild.defaultValue, xe.innerHTML = "<option></option>", le.option = !!xe.lastChild;
      var ke = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
      function Se(e2, t2) {
        var n2;
        return n2 = "undefined" != typeof e2.getElementsByTagName ? e2.getElementsByTagName(t2 || "*") : "undefined" != typeof e2.querySelectorAll ? e2.querySelectorAll(t2 || "*") : [], void 0 === t2 || t2 && fe(e2, t2) ? ce.merge([e2], n2) : n2;
      }
      function Ee(e2, t2) {
        for (var n2 = 0, r2 = e2.length; n2 < r2; n2++)
          _.set(e2[n2], "globalEval", !t2 || _.get(t2[n2], "globalEval"));
      }
      ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead, ke.th = ke.td, le.option || (ke.optgroup = ke.option = [1, "<select multiple='multiple'>", "</select>"]);
      var je = /<|&#?\w+;/;
      function Ae(e2, t2, n2, r2, i2) {
        for (var o2, a2, s2, u2, l2, c2, f2 = t2.createDocumentFragment(), p2 = [], d2 = 0, h2 = e2.length; d2 < h2; d2++)
          if ((o2 = e2[d2]) || 0 === o2)
            if ("object" === x(o2))
              ce.merge(p2, o2.nodeType ? [o2] : o2);
            else if (je.test(o2)) {
              a2 = a2 || f2.appendChild(t2.createElement("div")), s2 = (Te.exec(o2) || ["", ""])[1].toLowerCase(), u2 = ke[s2] || ke._default, a2.innerHTML = u2[1] + ce.htmlPrefilter(o2) + u2[2], c2 = u2[0];
              while (c2--)
                a2 = a2.lastChild;
              ce.merge(p2, a2.childNodes), (a2 = f2.firstChild).textContent = "";
            } else
              p2.push(t2.createTextNode(o2));
        f2.textContent = "", d2 = 0;
        while (o2 = p2[d2++])
          if (r2 && -1 < ce.inArray(o2, r2))
            i2 && i2.push(o2);
          else if (l2 = K(o2), a2 = Se(f2.appendChild(o2), "script"), l2 && Ee(a2), n2) {
            c2 = 0;
            while (o2 = a2[c2++])
              Ce.test(o2.type || "") && n2.push(o2);
          }
        return f2;
      }
      var De = /^([^.]*)(?:\.(.+)|)/;
      function Ne() {
        return true;
      }
      function qe() {
        return false;
      }
      function Le(e2, t2, n2, r2, i2, o2) {
        var a2, s2;
        if ("object" == typeof t2) {
          for (s2 in "string" != typeof n2 && (r2 = r2 || n2, n2 = void 0), t2)
            Le(e2, s2, n2, r2, t2[s2], o2);
          return e2;
        }
        if (null == r2 && null == i2 ? (i2 = n2, r2 = n2 = void 0) : null == i2 && ("string" == typeof n2 ? (i2 = r2, r2 = void 0) : (i2 = r2, r2 = n2, n2 = void 0)), false === i2)
          i2 = qe;
        else if (!i2)
          return e2;
        return 1 === o2 && (a2 = i2, (i2 = function(e3) {
          return ce().off(e3), a2.apply(this, arguments);
        }).guid = a2.guid || (a2.guid = ce.guid++)), e2.each(function() {
          ce.event.add(this, t2, i2, r2, n2);
        });
      }
      function He(e2, r2, t2) {
        t2 ? (_.set(e2, r2, false), ce.event.add(e2, r2, { namespace: false, handler: function(e3) {
          var t3, n2 = _.get(this, r2);
          if (1 & e3.isTrigger && this[r2]) {
            if (n2)
              (ce.event.special[r2] || {}).delegateType && e3.stopPropagation();
            else if (n2 = ae.call(arguments), _.set(this, r2, n2), this[r2](), t3 = _.get(this, r2), _.set(this, r2, false), n2 !== t3)
              return e3.stopImmediatePropagation(), e3.preventDefault(), t3;
          } else
            n2 && (_.set(this, r2, ce.event.trigger(n2[0], n2.slice(1), this)), e3.stopPropagation(), e3.isImmediatePropagationStopped = Ne);
        } })) : void 0 === _.get(e2, r2) && ce.event.add(e2, r2, Ne);
      }
      ce.event = { global: {}, add: function(t2, e2, n2, r2, i2) {
        var o2, a2, s2, u2, l2, c2, f2, p2, d2, h2, g2, v2 = _.get(t2);
        if ($2(t2)) {
          n2.handler && (n2 = (o2 = n2).handler, i2 = o2.selector), i2 && ce.find.matchesSelector(J, i2), n2.guid || (n2.guid = ce.guid++), (u2 = v2.events) || (u2 = v2.events = /* @__PURE__ */ Object.create(null)), (a2 = v2.handle) || (a2 = v2.handle = function(e3) {
            return "undefined" != typeof ce && ce.event.triggered !== e3.type ? ce.event.dispatch.apply(t2, arguments) : void 0;
          }), l2 = (e2 = (e2 || "").match(D) || [""]).length;
          while (l2--)
            d2 = g2 = (s2 = De.exec(e2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), d2 && (f2 = ce.event.special[d2] || {}, d2 = (i2 ? f2.delegateType : f2.bindType) || d2, f2 = ce.event.special[d2] || {}, c2 = ce.extend({ type: d2, origType: g2, data: r2, handler: n2, guid: n2.guid, selector: i2, needsContext: i2 && ce.expr.match.needsContext.test(i2), namespace: h2.join(".") }, o2), (p2 = u2[d2]) || ((p2 = u2[d2] = []).delegateCount = 0, f2.setup && false !== f2.setup.call(t2, r2, h2, a2) || t2.addEventListener && t2.addEventListener(d2, a2)), f2.add && (f2.add.call(t2, c2), c2.handler.guid || (c2.handler.guid = n2.guid)), i2 ? p2.splice(p2.delegateCount++, 0, c2) : p2.push(c2), ce.event.global[d2] = true);
        }
      }, remove: function(e2, t2, n2, r2, i2) {
        var o2, a2, s2, u2, l2, c2, f2, p2, d2, h2, g2, v2 = _.hasData(e2) && _.get(e2);
        if (v2 && (u2 = v2.events)) {
          l2 = (t2 = (t2 || "").match(D) || [""]).length;
          while (l2--)
            if (d2 = g2 = (s2 = De.exec(t2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), d2) {
              f2 = ce.event.special[d2] || {}, p2 = u2[d2 = (r2 ? f2.delegateType : f2.bindType) || d2] || [], s2 = s2[2] && new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)"), a2 = o2 = p2.length;
              while (o2--)
                c2 = p2[o2], !i2 && g2 !== c2.origType || n2 && n2.guid !== c2.guid || s2 && !s2.test(c2.namespace) || r2 && r2 !== c2.selector && ("**" !== r2 || !c2.selector) || (p2.splice(o2, 1), c2.selector && p2.delegateCount--, f2.remove && f2.remove.call(e2, c2));
              a2 && !p2.length && (f2.teardown && false !== f2.teardown.call(e2, h2, v2.handle) || ce.removeEvent(e2, d2, v2.handle), delete u2[d2]);
            } else
              for (d2 in u2)
                ce.event.remove(e2, d2 + t2[l2], n2, r2, true);
          ce.isEmptyObject(u2) && _.remove(e2, "handle events");
        }
      }, dispatch: function(e2) {
        var t2, n2, r2, i2, o2, a2, s2 = new Array(arguments.length), u2 = ce.event.fix(e2), l2 = (_.get(this, "events") || /* @__PURE__ */ Object.create(null))[u2.type] || [], c2 = ce.event.special[u2.type] || {};
        for (s2[0] = u2, t2 = 1; t2 < arguments.length; t2++)
          s2[t2] = arguments[t2];
        if (u2.delegateTarget = this, !c2.preDispatch || false !== c2.preDispatch.call(this, u2)) {
          a2 = ce.event.handlers.call(this, u2, l2), t2 = 0;
          while ((i2 = a2[t2++]) && !u2.isPropagationStopped()) {
            u2.currentTarget = i2.elem, n2 = 0;
            while ((o2 = i2.handlers[n2++]) && !u2.isImmediatePropagationStopped())
              u2.rnamespace && false !== o2.namespace && !u2.rnamespace.test(o2.namespace) || (u2.handleObj = o2, u2.data = o2.data, void 0 !== (r2 = ((ce.event.special[o2.origType] || {}).handle || o2.handler).apply(i2.elem, s2)) && false === (u2.result = r2) && (u2.preventDefault(), u2.stopPropagation()));
          }
          return c2.postDispatch && c2.postDispatch.call(this, u2), u2.result;
        }
      }, handlers: function(e2, t2) {
        var n2, r2, i2, o2, a2, s2 = [], u2 = t2.delegateCount, l2 = e2.target;
        if (u2 && l2.nodeType && !("click" === e2.type && 1 <= e2.button)) {
          for (; l2 !== this; l2 = l2.parentNode || this)
            if (1 === l2.nodeType && ("click" !== e2.type || true !== l2.disabled)) {
              for (o2 = [], a2 = {}, n2 = 0; n2 < u2; n2++)
                void 0 === a2[i2 = (r2 = t2[n2]).selector + " "] && (a2[i2] = r2.needsContext ? -1 < ce(i2, this).index(l2) : ce.find(i2, this, null, [l2]).length), a2[i2] && o2.push(r2);
              o2.length && s2.push({ elem: l2, handlers: o2 });
            }
        }
        return l2 = this, u2 < t2.length && s2.push({ elem: l2, handlers: t2.slice(u2) }), s2;
      }, addProp: function(t2, e2) {
        Object.defineProperty(ce.Event.prototype, t2, { enumerable: true, configurable: true, get: v(e2) ? function() {
          if (this.originalEvent)
            return e2(this.originalEvent);
        } : function() {
          if (this.originalEvent)
            return this.originalEvent[t2];
        }, set: function(e3) {
          Object.defineProperty(this, t2, { enumerable: true, configurable: true, writable: true, value: e3 });
        } });
      }, fix: function(e2) {
        return e2[ce.expando] ? e2 : new ce.Event(e2);
      }, special: { load: { noBubble: true }, click: { setup: function(e2) {
        var t2 = this || e2;
        return we.test(t2.type) && t2.click && fe(t2, "input") && He(t2, "click", true), false;
      }, trigger: function(e2) {
        var t2 = this || e2;
        return we.test(t2.type) && t2.click && fe(t2, "input") && He(t2, "click"), true;
      }, _default: function(e2) {
        var t2 = e2.target;
        return we.test(t2.type) && t2.click && fe(t2, "input") && _.get(t2, "click") || fe(t2, "a");
      } }, beforeunload: { postDispatch: function(e2) {
        void 0 !== e2.result && e2.originalEvent && (e2.originalEvent.returnValue = e2.result);
      } } } }, ce.removeEvent = function(e2, t2, n2) {
        e2.removeEventListener && e2.removeEventListener(t2, n2);
      }, ce.Event = function(e2, t2) {
        if (!(this instanceof ce.Event))
          return new ce.Event(e2, t2);
        e2 && e2.type ? (this.originalEvent = e2, this.type = e2.type, this.isDefaultPrevented = e2.defaultPrevented || void 0 === e2.defaultPrevented && false === e2.returnValue ? Ne : qe, this.target = e2.target && 3 === e2.target.nodeType ? e2.target.parentNode : e2.target, this.currentTarget = e2.currentTarget, this.relatedTarget = e2.relatedTarget) : this.type = e2, t2 && ce.extend(this, t2), this.timeStamp = e2 && e2.timeStamp || Date.now(), this[ce.expando] = true;
      }, ce.Event.prototype = { constructor: ce.Event, isDefaultPrevented: qe, isPropagationStopped: qe, isImmediatePropagationStopped: qe, isSimulated: false, preventDefault: function() {
        var e2 = this.originalEvent;
        this.isDefaultPrevented = Ne, e2 && !this.isSimulated && e2.preventDefault();
      }, stopPropagation: function() {
        var e2 = this.originalEvent;
        this.isPropagationStopped = Ne, e2 && !this.isSimulated && e2.stopPropagation();
      }, stopImmediatePropagation: function() {
        var e2 = this.originalEvent;
        this.isImmediatePropagationStopped = Ne, e2 && !this.isSimulated && e2.stopImmediatePropagation(), this.stopPropagation();
      } }, ce.each({ altKey: true, bubbles: true, cancelable: true, changedTouches: true, ctrlKey: true, detail: true, eventPhase: true, metaKey: true, pageX: true, pageY: true, shiftKey: true, view: true, "char": true, code: true, charCode: true, key: true, keyCode: true, button: true, buttons: true, clientX: true, clientY: true, offsetX: true, offsetY: true, pointerId: true, pointerType: true, screenX: true, screenY: true, targetTouches: true, toElement: true, touches: true, which: true }, ce.event.addProp), ce.each({ focus: "focusin", blur: "focusout" }, function(r2, i2) {
        function o2(e2) {
          if (C.documentMode) {
            var t2 = _.get(this, "handle"), n2 = ce.event.fix(e2);
            n2.type = "focusin" === e2.type ? "focus" : "blur", n2.isSimulated = true, t2(e2), n2.target === n2.currentTarget && t2(n2);
          } else
            ce.event.simulate(i2, e2.target, ce.event.fix(e2));
        }
        ce.event.special[r2] = { setup: function() {
          var e2;
          if (He(this, r2, true), !C.documentMode)
            return false;
          (e2 = _.get(this, i2)) || this.addEventListener(i2, o2), _.set(this, i2, (e2 || 0) + 1);
        }, trigger: function() {
          return He(this, r2), true;
        }, teardown: function() {
          var e2;
          if (!C.documentMode)
            return false;
          (e2 = _.get(this, i2) - 1) ? _.set(this, i2, e2) : (this.removeEventListener(i2, o2), _.remove(this, i2));
        }, _default: function(e2) {
          return _.get(e2.target, r2);
        }, delegateType: i2 }, ce.event.special[i2] = { setup: function() {
          var e2 = this.ownerDocument || this.document || this, t2 = C.documentMode ? this : e2, n2 = _.get(t2, i2);
          n2 || (C.documentMode ? this.addEventListener(i2, o2) : e2.addEventListener(r2, o2, true)), _.set(t2, i2, (n2 || 0) + 1);
        }, teardown: function() {
          var e2 = this.ownerDocument || this.document || this, t2 = C.documentMode ? this : e2, n2 = _.get(t2, i2) - 1;
          n2 ? _.set(t2, i2, n2) : (C.documentMode ? this.removeEventListener(i2, o2) : e2.removeEventListener(r2, o2, true), _.remove(t2, i2));
        } };
      }), ce.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e2, i2) {
        ce.event.special[e2] = { delegateType: i2, bindType: i2, handle: function(e3) {
          var t2, n2 = e3.relatedTarget, r2 = e3.handleObj;
          return n2 && (n2 === this || ce.contains(this, n2)) || (e3.type = r2.origType, t2 = r2.handler.apply(this, arguments), e3.type = i2), t2;
        } };
      }), ce.fn.extend({ on: function(e2, t2, n2, r2) {
        return Le(this, e2, t2, n2, r2);
      }, one: function(e2, t2, n2, r2) {
        return Le(this, e2, t2, n2, r2, 1);
      }, off: function(e2, t2, n2) {
        var r2, i2;
        if (e2 && e2.preventDefault && e2.handleObj)
          return r2 = e2.handleObj, ce(e2.delegateTarget).off(r2.namespace ? r2.origType + "." + r2.namespace : r2.origType, r2.selector, r2.handler), this;
        if ("object" == typeof e2) {
          for (i2 in e2)
            this.off(i2, t2, e2[i2]);
          return this;
        }
        return false !== t2 && "function" != typeof t2 || (n2 = t2, t2 = void 0), false === n2 && (n2 = qe), this.each(function() {
          ce.event.remove(this, e2, n2, t2);
        });
      } });
      var Oe = /<script|<style|<link/i, Pe = /checked\s*(?:[^=]|=\s*.checked.)/i, Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function Re(e2, t2) {
        return fe(e2, "table") && fe(11 !== t2.nodeType ? t2 : t2.firstChild, "tr") && ce(e2).children("tbody")[0] || e2;
      }
      function Ie(e2) {
        return e2.type = (null !== e2.getAttribute("type")) + "/" + e2.type, e2;
      }
      function We(e2) {
        return "true/" === (e2.type || "").slice(0, 5) ? e2.type = e2.type.slice(5) : e2.removeAttribute("type"), e2;
      }
      function Fe(e2, t2) {
        var n2, r2, i2, o2, a2, s2;
        if (1 === t2.nodeType) {
          if (_.hasData(e2) && (s2 = _.get(e2).events))
            for (i2 in _.remove(t2, "handle events"), s2)
              for (n2 = 0, r2 = s2[i2].length; n2 < r2; n2++)
                ce.event.add(t2, i2, s2[i2][n2]);
          z.hasData(e2) && (o2 = z.access(e2), a2 = ce.extend({}, o2), z.set(t2, a2));
        }
      }
      function $e(n2, r2, i2, o2) {
        r2 = g(r2);
        var e2, t2, a2, s2, u2, l2, c2 = 0, f2 = n2.length, p2 = f2 - 1, d2 = r2[0], h2 = v(d2);
        if (h2 || 1 < f2 && "string" == typeof d2 && !le.checkClone && Pe.test(d2))
          return n2.each(function(e3) {
            var t3 = n2.eq(e3);
            h2 && (r2[0] = d2.call(this, e3, t3.html())), $e(t3, r2, i2, o2);
          });
        if (f2 && (t2 = (e2 = Ae(r2, n2[0].ownerDocument, false, n2, o2)).firstChild, 1 === e2.childNodes.length && (e2 = t2), t2 || o2)) {
          for (s2 = (a2 = ce.map(Se(e2, "script"), Ie)).length; c2 < f2; c2++)
            u2 = e2, c2 !== p2 && (u2 = ce.clone(u2, true, true), s2 && ce.merge(a2, Se(u2, "script"))), i2.call(n2[c2], u2, c2);
          if (s2)
            for (l2 = a2[a2.length - 1].ownerDocument, ce.map(a2, We), c2 = 0; c2 < s2; c2++)
              u2 = a2[c2], Ce.test(u2.type || "") && !_.access(u2, "globalEval") && ce.contains(l2, u2) && (u2.src && "module" !== (u2.type || "").toLowerCase() ? ce._evalUrl && !u2.noModule && ce._evalUrl(u2.src, { nonce: u2.nonce || u2.getAttribute("nonce") }, l2) : m(u2.textContent.replace(Me, ""), u2, l2));
        }
        return n2;
      }
      function Be(e2, t2, n2) {
        for (var r2, i2 = t2 ? ce.filter(t2, e2) : e2, o2 = 0; null != (r2 = i2[o2]); o2++)
          n2 || 1 !== r2.nodeType || ce.cleanData(Se(r2)), r2.parentNode && (n2 && K(r2) && Ee(Se(r2, "script")), r2.parentNode.removeChild(r2));
        return e2;
      }
      ce.extend({ htmlPrefilter: function(e2) {
        return e2;
      }, clone: function(e2, t2, n2) {
        var r2, i2, o2, a2, s2, u2, l2, c2 = e2.cloneNode(true), f2 = K(e2);
        if (!(le.noCloneChecked || 1 !== e2.nodeType && 11 !== e2.nodeType || ce.isXMLDoc(e2)))
          for (a2 = Se(c2), r2 = 0, i2 = (o2 = Se(e2)).length; r2 < i2; r2++)
            s2 = o2[r2], u2 = a2[r2], void 0, "input" === (l2 = u2.nodeName.toLowerCase()) && we.test(s2.type) ? u2.checked = s2.checked : "input" !== l2 && "textarea" !== l2 || (u2.defaultValue = s2.defaultValue);
        if (t2)
          if (n2)
            for (o2 = o2 || Se(e2), a2 = a2 || Se(c2), r2 = 0, i2 = o2.length; r2 < i2; r2++)
              Fe(o2[r2], a2[r2]);
          else
            Fe(e2, c2);
        return 0 < (a2 = Se(c2, "script")).length && Ee(a2, !f2 && Se(e2, "script")), c2;
      }, cleanData: function(e2) {
        for (var t2, n2, r2, i2 = ce.event.special, o2 = 0; void 0 !== (n2 = e2[o2]); o2++)
          if ($2(n2)) {
            if (t2 = n2[_.expando]) {
              if (t2.events)
                for (r2 in t2.events)
                  i2[r2] ? ce.event.remove(n2, r2) : ce.removeEvent(n2, r2, t2.handle);
              n2[_.expando] = void 0;
            }
            n2[z.expando] && (n2[z.expando] = void 0);
          }
      } }), ce.fn.extend({ detach: function(e2) {
        return Be(this, e2, true);
      }, remove: function(e2) {
        return Be(this, e2);
      }, text: function(e2) {
        return M2(this, function(e3) {
          return void 0 === e3 ? ce.text(this) : this.empty().each(function() {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e3);
          });
        }, null, e2, arguments.length);
      }, append: function() {
        return $e(this, arguments, function(e2) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Re(this, e2).appendChild(e2);
        });
      }, prepend: function() {
        return $e(this, arguments, function(e2) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t2 = Re(this, e2);
            t2.insertBefore(e2, t2.firstChild);
          }
        });
      }, before: function() {
        return $e(this, arguments, function(e2) {
          this.parentNode && this.parentNode.insertBefore(e2, this);
        });
      }, after: function() {
        return $e(this, arguments, function(e2) {
          this.parentNode && this.parentNode.insertBefore(e2, this.nextSibling);
        });
      }, empty: function() {
        for (var e2, t2 = 0; null != (e2 = this[t2]); t2++)
          1 === e2.nodeType && (ce.cleanData(Se(e2, false)), e2.textContent = "");
        return this;
      }, clone: function(e2, t2) {
        return e2 = null != e2 && e2, t2 = null == t2 ? e2 : t2, this.map(function() {
          return ce.clone(this, e2, t2);
        });
      }, html: function(e2) {
        return M2(this, function(e3) {
          var t2 = this[0] || {}, n2 = 0, r2 = this.length;
          if (void 0 === e3 && 1 === t2.nodeType)
            return t2.innerHTML;
          if ("string" == typeof e3 && !Oe.test(e3) && !ke[(Te.exec(e3) || ["", ""])[1].toLowerCase()]) {
            e3 = ce.htmlPrefilter(e3);
            try {
              for (; n2 < r2; n2++)
                1 === (t2 = this[n2] || {}).nodeType && (ce.cleanData(Se(t2, false)), t2.innerHTML = e3);
              t2 = 0;
            } catch (e4) {
            }
          }
          t2 && this.empty().append(e3);
        }, null, e2, arguments.length);
      }, replaceWith: function() {
        var n2 = [];
        return $e(this, arguments, function(e2) {
          var t2 = this.parentNode;
          ce.inArray(this, n2) < 0 && (ce.cleanData(Se(this)), t2 && t2.replaceChild(e2, this));
        }, n2);
      } }), ce.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e2, a2) {
        ce.fn[e2] = function(e3) {
          for (var t2, n2 = [], r2 = ce(e3), i2 = r2.length - 1, o2 = 0; o2 <= i2; o2++)
            t2 = o2 === i2 ? this : this.clone(true), ce(r2[o2])[a2](t2), s.apply(n2, t2.get());
          return this.pushStack(n2);
        };
      });
      var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"), ze = /^--/, Xe = function(e2) {
        var t2 = e2.ownerDocument.defaultView;
        return t2 && t2.opener || (t2 = ie), t2.getComputedStyle(e2);
      }, Ue = function(e2, t2, n2) {
        var r2, i2, o2 = {};
        for (i2 in t2)
          o2[i2] = e2.style[i2], e2.style[i2] = t2[i2];
        for (i2 in r2 = n2.call(e2), t2)
          e2.style[i2] = o2[i2];
        return r2;
      }, Ve = new RegExp(Q.join("|"), "i");
      function Ge(e2, t2, n2) {
        var r2, i2, o2, a2, s2 = ze.test(t2), u2 = e2.style;
        return (n2 = n2 || Xe(e2)) && (a2 = n2.getPropertyValue(t2) || n2[t2], s2 && a2 && (a2 = a2.replace(ve, "$1") || void 0), "" !== a2 || K(e2) || (a2 = ce.style(e2, t2)), !le.pixelBoxStyles() && _e.test(a2) && Ve.test(t2) && (r2 = u2.width, i2 = u2.minWidth, o2 = u2.maxWidth, u2.minWidth = u2.maxWidth = u2.width = a2, a2 = n2.width, u2.width = r2, u2.minWidth = i2, u2.maxWidth = o2)), void 0 !== a2 ? a2 + "" : a2;
      }
      function Ye(e2, t2) {
        return { get: function() {
          if (!e2())
            return (this.get = t2).apply(this, arguments);
          delete this.get;
        } };
      }
      !function() {
        function e2() {
          if (l2) {
            u2.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l2.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", J.appendChild(u2).appendChild(l2);
            var e3 = ie.getComputedStyle(l2);
            n2 = "1%" !== e3.top, s2 = 12 === t2(e3.marginLeft), l2.style.right = "60%", o2 = 36 === t2(e3.right), r2 = 36 === t2(e3.width), l2.style.position = "absolute", i2 = 12 === t2(l2.offsetWidth / 3), J.removeChild(u2), l2 = null;
          }
        }
        function t2(e3) {
          return Math.round(parseFloat(e3));
        }
        var n2, r2, i2, o2, a2, s2, u2 = C.createElement("div"), l2 = C.createElement("div");
        l2.style && (l2.style.backgroundClip = "content-box", l2.cloneNode(true).style.backgroundClip = "", le.clearCloneStyle = "content-box" === l2.style.backgroundClip, ce.extend(le, { boxSizingReliable: function() {
          return e2(), r2;
        }, pixelBoxStyles: function() {
          return e2(), o2;
        }, pixelPosition: function() {
          return e2(), n2;
        }, reliableMarginLeft: function() {
          return e2(), s2;
        }, scrollboxSize: function() {
          return e2(), i2;
        }, reliableTrDimensions: function() {
          var e3, t3, n3, r3;
          return null == a2 && (e3 = C.createElement("table"), t3 = C.createElement("tr"), n3 = C.createElement("div"), e3.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t3.style.cssText = "box-sizing:content-box;border:1px solid", t3.style.height = "1px", n3.style.height = "9px", n3.style.display = "block", J.appendChild(e3).appendChild(t3).appendChild(n3), r3 = ie.getComputedStyle(t3), a2 = parseInt(r3.height, 10) + parseInt(r3.borderTopWidth, 10) + parseInt(r3.borderBottomWidth, 10) === t3.offsetHeight, J.removeChild(e3)), a2;
        } }));
      }();
      var Qe = ["Webkit", "Moz", "ms"], Je = C.createElement("div").style, Ke = {};
      function Ze(e2) {
        var t2 = ce.cssProps[e2] || Ke[e2];
        return t2 || (e2 in Je ? e2 : Ke[e2] = function(e3) {
          var t3 = e3[0].toUpperCase() + e3.slice(1), n2 = Qe.length;
          while (n2--)
            if ((e3 = Qe[n2] + t3) in Je)
              return e3;
        }(e2) || e2);
      }
      var et = /^(none|table(?!-c[ea]).+)/, tt = { position: "absolute", visibility: "hidden", display: "block" }, nt = { letterSpacing: "0", fontWeight: "400" };
      function rt(e2, t2, n2) {
        var r2 = Y.exec(t2);
        return r2 ? Math.max(0, r2[2] - (n2 || 0)) + (r2[3] || "px") : t2;
      }
      function it(e2, t2, n2, r2, i2, o2) {
        var a2 = "width" === t2 ? 1 : 0, s2 = 0, u2 = 0, l2 = 0;
        if (n2 === (r2 ? "border" : "content"))
          return 0;
        for (; a2 < 4; a2 += 2)
          "margin" === n2 && (l2 += ce.css(e2, n2 + Q[a2], true, i2)), r2 ? ("content" === n2 && (u2 -= ce.css(e2, "padding" + Q[a2], true, i2)), "margin" !== n2 && (u2 -= ce.css(e2, "border" + Q[a2] + "Width", true, i2))) : (u2 += ce.css(e2, "padding" + Q[a2], true, i2), "padding" !== n2 ? u2 += ce.css(e2, "border" + Q[a2] + "Width", true, i2) : s2 += ce.css(e2, "border" + Q[a2] + "Width", true, i2));
        return !r2 && 0 <= o2 && (u2 += Math.max(0, Math.ceil(e2["offset" + t2[0].toUpperCase() + t2.slice(1)] - o2 - u2 - s2 - 0.5)) || 0), u2 + l2;
      }
      function ot(e2, t2, n2) {
        var r2 = Xe(e2), i2 = (!le.boxSizingReliable() || n2) && "border-box" === ce.css(e2, "boxSizing", false, r2), o2 = i2, a2 = Ge(e2, t2, r2), s2 = "offset" + t2[0].toUpperCase() + t2.slice(1);
        if (_e.test(a2)) {
          if (!n2)
            return a2;
          a2 = "auto";
        }
        return (!le.boxSizingReliable() && i2 || !le.reliableTrDimensions() && fe(e2, "tr") || "auto" === a2 || !parseFloat(a2) && "inline" === ce.css(e2, "display", false, r2)) && e2.getClientRects().length && (i2 = "border-box" === ce.css(e2, "boxSizing", false, r2), (o2 = s2 in e2) && (a2 = e2[s2])), (a2 = parseFloat(a2) || 0) + it(e2, t2, n2 || (i2 ? "border" : "content"), o2, r2, a2) + "px";
      }
      function at(e2, t2, n2, r2, i2) {
        return new at.prototype.init(e2, t2, n2, r2, i2);
      }
      ce.extend({ cssHooks: { opacity: { get: function(e2, t2) {
        if (t2) {
          var n2 = Ge(e2, "opacity");
          return "" === n2 ? "1" : n2;
        }
      } } }, cssNumber: { animationIterationCount: true, aspectRatio: true, borderImageSlice: true, columnCount: true, flexGrow: true, flexShrink: true, fontWeight: true, gridArea: true, gridColumn: true, gridColumnEnd: true, gridColumnStart: true, gridRow: true, gridRowEnd: true, gridRowStart: true, lineHeight: true, opacity: true, order: true, orphans: true, scale: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeMiterlimit: true, strokeOpacity: true }, cssProps: {}, style: function(e2, t2, n2, r2) {
        if (e2 && 3 !== e2.nodeType && 8 !== e2.nodeType && e2.style) {
          var i2, o2, a2, s2 = F(t2), u2 = ze.test(t2), l2 = e2.style;
          if (u2 || (t2 = Ze(s2)), a2 = ce.cssHooks[t2] || ce.cssHooks[s2], void 0 === n2)
            return a2 && "get" in a2 && void 0 !== (i2 = a2.get(e2, false, r2)) ? i2 : l2[t2];
          "string" === (o2 = typeof n2) && (i2 = Y.exec(n2)) && i2[1] && (n2 = te(e2, t2, i2), o2 = "number"), null != n2 && n2 == n2 && ("number" !== o2 || u2 || (n2 += i2 && i2[3] || (ce.cssNumber[s2] ? "" : "px")), le.clearCloneStyle || "" !== n2 || 0 !== t2.indexOf("background") || (l2[t2] = "inherit"), a2 && "set" in a2 && void 0 === (n2 = a2.set(e2, n2, r2)) || (u2 ? l2.setProperty(t2, n2) : l2[t2] = n2));
        }
      }, css: function(e2, t2, n2, r2) {
        var i2, o2, a2, s2 = F(t2);
        return ze.test(t2) || (t2 = Ze(s2)), (a2 = ce.cssHooks[t2] || ce.cssHooks[s2]) && "get" in a2 && (i2 = a2.get(e2, true, n2)), void 0 === i2 && (i2 = Ge(e2, t2, r2)), "normal" === i2 && t2 in nt && (i2 = nt[t2]), "" === n2 || n2 ? (o2 = parseFloat(i2), true === n2 || isFinite(o2) ? o2 || 0 : i2) : i2;
      } }), ce.each(["height", "width"], function(e2, u2) {
        ce.cssHooks[u2] = { get: function(e3, t2, n2) {
          if (t2)
            return !et.test(ce.css(e3, "display")) || e3.getClientRects().length && e3.getBoundingClientRect().width ? ot(e3, u2, n2) : Ue(e3, tt, function() {
              return ot(e3, u2, n2);
            });
        }, set: function(e3, t2, n2) {
          var r2, i2 = Xe(e3), o2 = !le.scrollboxSize() && "absolute" === i2.position, a2 = (o2 || n2) && "border-box" === ce.css(e3, "boxSizing", false, i2), s2 = n2 ? it(e3, u2, n2, a2, i2) : 0;
          return a2 && o2 && (s2 -= Math.ceil(e3["offset" + u2[0].toUpperCase() + u2.slice(1)] - parseFloat(i2[u2]) - it(e3, u2, "border", false, i2) - 0.5)), s2 && (r2 = Y.exec(t2)) && "px" !== (r2[3] || "px") && (e3.style[u2] = t2, t2 = ce.css(e3, u2)), rt(0, t2, s2);
        } };
      }), ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function(e2, t2) {
        if (t2)
          return (parseFloat(Ge(e2, "marginLeft")) || e2.getBoundingClientRect().left - Ue(e2, { marginLeft: 0 }, function() {
            return e2.getBoundingClientRect().left;
          })) + "px";
      }), ce.each({ margin: "", padding: "", border: "Width" }, function(i2, o2) {
        ce.cssHooks[i2 + o2] = { expand: function(e2) {
          for (var t2 = 0, n2 = {}, r2 = "string" == typeof e2 ? e2.split(" ") : [e2]; t2 < 4; t2++)
            n2[i2 + Q[t2] + o2] = r2[t2] || r2[t2 - 2] || r2[0];
          return n2;
        } }, "margin" !== i2 && (ce.cssHooks[i2 + o2].set = rt);
      }), ce.fn.extend({ css: function(e2, t2) {
        return M2(this, function(e3, t3, n2) {
          var r2, i2, o2 = {}, a2 = 0;
          if (Array.isArray(t3)) {
            for (r2 = Xe(e3), i2 = t3.length; a2 < i2; a2++)
              o2[t3[a2]] = ce.css(e3, t3[a2], false, r2);
            return o2;
          }
          return void 0 !== n2 ? ce.style(e3, t3, n2) : ce.css(e3, t3);
        }, e2, t2, 1 < arguments.length);
      } }), ((ce.Tween = at).prototype = { constructor: at, init: function(e2, t2, n2, r2, i2, o2) {
        this.elem = e2, this.prop = n2, this.easing = i2 || ce.easing._default, this.options = t2, this.start = this.now = this.cur(), this.end = r2, this.unit = o2 || (ce.cssNumber[n2] ? "" : "px");
      }, cur: function() {
        var e2 = at.propHooks[this.prop];
        return e2 && e2.get ? e2.get(this) : at.propHooks._default.get(this);
      }, run: function(e2) {
        var t2, n2 = at.propHooks[this.prop];
        return this.options.duration ? this.pos = t2 = ce.easing[this.easing](e2, this.options.duration * e2, 0, 1, this.options.duration) : this.pos = t2 = e2, this.now = (this.end - this.start) * t2 + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n2 && n2.set ? n2.set(this) : at.propHooks._default.set(this), this;
      } }).init.prototype = at.prototype, (at.propHooks = { _default: { get: function(e2) {
        var t2;
        return 1 !== e2.elem.nodeType || null != e2.elem[e2.prop] && null == e2.elem.style[e2.prop] ? e2.elem[e2.prop] : (t2 = ce.css(e2.elem, e2.prop, "")) && "auto" !== t2 ? t2 : 0;
      }, set: function(e2) {
        ce.fx.step[e2.prop] ? ce.fx.step[e2.prop](e2) : 1 !== e2.elem.nodeType || !ce.cssHooks[e2.prop] && null == e2.elem.style[Ze(e2.prop)] ? e2.elem[e2.prop] = e2.now : ce.style(e2.elem, e2.prop, e2.now + e2.unit);
      } } }).scrollTop = at.propHooks.scrollLeft = { set: function(e2) {
        e2.elem.nodeType && e2.elem.parentNode && (e2.elem[e2.prop] = e2.now);
      } }, ce.easing = { linear: function(e2) {
        return e2;
      }, swing: function(e2) {
        return 0.5 - Math.cos(e2 * Math.PI) / 2;
      }, _default: "swing" }, ce.fx = at.prototype.init, ce.fx.step = {};
      var st, ut, lt, ct, ft = /^(?:toggle|show|hide)$/, pt = /queueHooks$/;
      function dt() {
        ut && (false === C.hidden && ie.requestAnimationFrame ? ie.requestAnimationFrame(dt) : ie.setTimeout(dt, ce.fx.interval), ce.fx.tick());
      }
      function ht() {
        return ie.setTimeout(function() {
          st = void 0;
        }), st = Date.now();
      }
      function gt(e2, t2) {
        var n2, r2 = 0, i2 = { height: e2 };
        for (t2 = t2 ? 1 : 0; r2 < 4; r2 += 2 - t2)
          i2["margin" + (n2 = Q[r2])] = i2["padding" + n2] = e2;
        return t2 && (i2.opacity = i2.width = e2), i2;
      }
      function vt(e2, t2, n2) {
        for (var r2, i2 = (yt.tweeners[t2] || []).concat(yt.tweeners["*"]), o2 = 0, a2 = i2.length; o2 < a2; o2++)
          if (r2 = i2[o2].call(n2, t2, e2))
            return r2;
      }
      function yt(o2, e2, t2) {
        var n2, a2, r2 = 0, i2 = yt.prefilters.length, s2 = ce.Deferred().always(function() {
          delete u2.elem;
        }), u2 = function() {
          if (a2)
            return false;
          for (var e3 = st || ht(), t3 = Math.max(0, l2.startTime + l2.duration - e3), n3 = 1 - (t3 / l2.duration || 0), r3 = 0, i3 = l2.tweens.length; r3 < i3; r3++)
            l2.tweens[r3].run(n3);
          return s2.notifyWith(o2, [l2, n3, t3]), n3 < 1 && i3 ? t3 : (i3 || s2.notifyWith(o2, [l2, 1, 0]), s2.resolveWith(o2, [l2]), false);
        }, l2 = s2.promise({ elem: o2, props: ce.extend({}, e2), opts: ce.extend(true, { specialEasing: {}, easing: ce.easing._default }, t2), originalProperties: e2, originalOptions: t2, startTime: st || ht(), duration: t2.duration, tweens: [], createTween: function(e3, t3) {
          var n3 = ce.Tween(o2, l2.opts, e3, t3, l2.opts.specialEasing[e3] || l2.opts.easing);
          return l2.tweens.push(n3), n3;
        }, stop: function(e3) {
          var t3 = 0, n3 = e3 ? l2.tweens.length : 0;
          if (a2)
            return this;
          for (a2 = true; t3 < n3; t3++)
            l2.tweens[t3].run(1);
          return e3 ? (s2.notifyWith(o2, [l2, 1, 0]), s2.resolveWith(o2, [l2, e3])) : s2.rejectWith(o2, [l2, e3]), this;
        } }), c2 = l2.props;
        for (!function(e3, t3) {
          var n3, r3, i3, o3, a3;
          for (n3 in e3)
            if (i3 = t3[r3 = F(n3)], o3 = e3[n3], Array.isArray(o3) && (i3 = o3[1], o3 = e3[n3] = o3[0]), n3 !== r3 && (e3[r3] = o3, delete e3[n3]), (a3 = ce.cssHooks[r3]) && "expand" in a3)
              for (n3 in o3 = a3.expand(o3), delete e3[r3], o3)
                n3 in e3 || (e3[n3] = o3[n3], t3[n3] = i3);
            else
              t3[r3] = i3;
        }(c2, l2.opts.specialEasing); r2 < i2; r2++)
          if (n2 = yt.prefilters[r2].call(l2, o2, c2, l2.opts))
            return v(n2.stop) && (ce._queueHooks(l2.elem, l2.opts.queue).stop = n2.stop.bind(n2)), n2;
        return ce.map(c2, vt, l2), v(l2.opts.start) && l2.opts.start.call(o2, l2), l2.progress(l2.opts.progress).done(l2.opts.done, l2.opts.complete).fail(l2.opts.fail).always(l2.opts.always), ce.fx.timer(ce.extend(u2, { elem: o2, anim: l2, queue: l2.opts.queue })), l2;
      }
      ce.Animation = ce.extend(yt, { tweeners: { "*": [function(e2, t2) {
        var n2 = this.createTween(e2, t2);
        return te(n2.elem, e2, Y.exec(t2), n2), n2;
      }] }, tweener: function(e2, t2) {
        v(e2) ? (t2 = e2, e2 = ["*"]) : e2 = e2.match(D);
        for (var n2, r2 = 0, i2 = e2.length; r2 < i2; r2++)
          n2 = e2[r2], yt.tweeners[n2] = yt.tweeners[n2] || [], yt.tweeners[n2].unshift(t2);
      }, prefilters: [function(e2, t2, n2) {
        var r2, i2, o2, a2, s2, u2, l2, c2, f2 = "width" in t2 || "height" in t2, p2 = this, d2 = {}, h2 = e2.style, g2 = e2.nodeType && ee(e2), v2 = _.get(e2, "fxshow");
        for (r2 in n2.queue || (null == (a2 = ce._queueHooks(e2, "fx")).unqueued && (a2.unqueued = 0, s2 = a2.empty.fire, a2.empty.fire = function() {
          a2.unqueued || s2();
        }), a2.unqueued++, p2.always(function() {
          p2.always(function() {
            a2.unqueued--, ce.queue(e2, "fx").length || a2.empty.fire();
          });
        })), t2)
          if (i2 = t2[r2], ft.test(i2)) {
            if (delete t2[r2], o2 = o2 || "toggle" === i2, i2 === (g2 ? "hide" : "show")) {
              if ("show" !== i2 || !v2 || void 0 === v2[r2])
                continue;
              g2 = true;
            }
            d2[r2] = v2 && v2[r2] || ce.style(e2, r2);
          }
        if ((u2 = !ce.isEmptyObject(t2)) || !ce.isEmptyObject(d2))
          for (r2 in f2 && 1 === e2.nodeType && (n2.overflow = [h2.overflow, h2.overflowX, h2.overflowY], null == (l2 = v2 && v2.display) && (l2 = _.get(e2, "display")), "none" === (c2 = ce.css(e2, "display")) && (l2 ? c2 = l2 : (re([e2], true), l2 = e2.style.display || l2, c2 = ce.css(e2, "display"), re([e2]))), ("inline" === c2 || "inline-block" === c2 && null != l2) && "none" === ce.css(e2, "float") && (u2 || (p2.done(function() {
            h2.display = l2;
          }), null == l2 && (c2 = h2.display, l2 = "none" === c2 ? "" : c2)), h2.display = "inline-block")), n2.overflow && (h2.overflow = "hidden", p2.always(function() {
            h2.overflow = n2.overflow[0], h2.overflowX = n2.overflow[1], h2.overflowY = n2.overflow[2];
          })), u2 = false, d2)
            u2 || (v2 ? "hidden" in v2 && (g2 = v2.hidden) : v2 = _.access(e2, "fxshow", { display: l2 }), o2 && (v2.hidden = !g2), g2 && re([e2], true), p2.done(function() {
              for (r2 in g2 || re([e2]), _.remove(e2, "fxshow"), d2)
                ce.style(e2, r2, d2[r2]);
            })), u2 = vt(g2 ? v2[r2] : 0, r2, p2), r2 in v2 || (v2[r2] = u2.start, g2 && (u2.end = u2.start, u2.start = 0));
      }], prefilter: function(e2, t2) {
        t2 ? yt.prefilters.unshift(e2) : yt.prefilters.push(e2);
      } }), ce.speed = function(e2, t2, n2) {
        var r2 = e2 && "object" == typeof e2 ? ce.extend({}, e2) : { complete: n2 || !n2 && t2 || v(e2) && e2, duration: e2, easing: n2 && t2 || t2 && !v(t2) && t2 };
        return ce.fx.off ? r2.duration = 0 : "number" != typeof r2.duration && (r2.duration in ce.fx.speeds ? r2.duration = ce.fx.speeds[r2.duration] : r2.duration = ce.fx.speeds._default), null != r2.queue && true !== r2.queue || (r2.queue = "fx"), r2.old = r2.complete, r2.complete = function() {
          v(r2.old) && r2.old.call(this), r2.queue && ce.dequeue(this, r2.queue);
        }, r2;
      }, ce.fn.extend({ fadeTo: function(e2, t2, n2, r2) {
        return this.filter(ee).css("opacity", 0).show().end().animate({ opacity: t2 }, e2, n2, r2);
      }, animate: function(t2, e2, n2, r2) {
        var i2 = ce.isEmptyObject(t2), o2 = ce.speed(e2, n2, r2), a2 = function() {
          var e3 = yt(this, ce.extend({}, t2), o2);
          (i2 || _.get(this, "finish")) && e3.stop(true);
        };
        return a2.finish = a2, i2 || false === o2.queue ? this.each(a2) : this.queue(o2.queue, a2);
      }, stop: function(i2, e2, o2) {
        var a2 = function(e3) {
          var t2 = e3.stop;
          delete e3.stop, t2(o2);
        };
        return "string" != typeof i2 && (o2 = e2, e2 = i2, i2 = void 0), e2 && this.queue(i2 || "fx", []), this.each(function() {
          var e3 = true, t2 = null != i2 && i2 + "queueHooks", n2 = ce.timers, r2 = _.get(this);
          if (t2)
            r2[t2] && r2[t2].stop && a2(r2[t2]);
          else
            for (t2 in r2)
              r2[t2] && r2[t2].stop && pt.test(t2) && a2(r2[t2]);
          for (t2 = n2.length; t2--; )
            n2[t2].elem !== this || null != i2 && n2[t2].queue !== i2 || (n2[t2].anim.stop(o2), e3 = false, n2.splice(t2, 1));
          !e3 && o2 || ce.dequeue(this, i2);
        });
      }, finish: function(a2) {
        return false !== a2 && (a2 = a2 || "fx"), this.each(function() {
          var e2, t2 = _.get(this), n2 = t2[a2 + "queue"], r2 = t2[a2 + "queueHooks"], i2 = ce.timers, o2 = n2 ? n2.length : 0;
          for (t2.finish = true, ce.queue(this, a2, []), r2 && r2.stop && r2.stop.call(this, true), e2 = i2.length; e2--; )
            i2[e2].elem === this && i2[e2].queue === a2 && (i2[e2].anim.stop(true), i2.splice(e2, 1));
          for (e2 = 0; e2 < o2; e2++)
            n2[e2] && n2[e2].finish && n2[e2].finish.call(this);
          delete t2.finish;
        });
      } }), ce.each(["toggle", "show", "hide"], function(e2, r2) {
        var i2 = ce.fn[r2];
        ce.fn[r2] = function(e3, t2, n2) {
          return null == e3 || "boolean" == typeof e3 ? i2.apply(this, arguments) : this.animate(gt(r2, true), e3, t2, n2);
        };
      }), ce.each({ slideDown: gt("show"), slideUp: gt("hide"), slideToggle: gt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e2, r2) {
        ce.fn[e2] = function(e3, t2, n2) {
          return this.animate(r2, e3, t2, n2);
        };
      }), ce.timers = [], ce.fx.tick = function() {
        var e2, t2 = 0, n2 = ce.timers;
        for (st = Date.now(); t2 < n2.length; t2++)
          (e2 = n2[t2])() || n2[t2] !== e2 || n2.splice(t2--, 1);
        n2.length || ce.fx.stop(), st = void 0;
      }, ce.fx.timer = function(e2) {
        ce.timers.push(e2), ce.fx.start();
      }, ce.fx.interval = 13, ce.fx.start = function() {
        ut || (ut = true, dt());
      }, ce.fx.stop = function() {
        ut = null;
      }, ce.fx.speeds = { slow: 600, fast: 200, _default: 400 }, ce.fn.delay = function(r2, e2) {
        return r2 = ce.fx && ce.fx.speeds[r2] || r2, e2 = e2 || "fx", this.queue(e2, function(e3, t2) {
          var n2 = ie.setTimeout(e3, r2);
          t2.stop = function() {
            ie.clearTimeout(n2);
          };
        });
      }, lt = C.createElement("input"), ct = C.createElement("select").appendChild(C.createElement("option")), lt.type = "checkbox", le.checkOn = "" !== lt.value, le.optSelected = ct.selected, (lt = C.createElement("input")).value = "t", lt.type = "radio", le.radioValue = "t" === lt.value;
      var mt, xt = ce.expr.attrHandle;
      ce.fn.extend({ attr: function(e2, t2) {
        return M2(this, ce.attr, e2, t2, 1 < arguments.length);
      }, removeAttr: function(e2) {
        return this.each(function() {
          ce.removeAttr(this, e2);
        });
      } }), ce.extend({ attr: function(e2, t2, n2) {
        var r2, i2, o2 = e2.nodeType;
        if (3 !== o2 && 8 !== o2 && 2 !== o2)
          return "undefined" == typeof e2.getAttribute ? ce.prop(e2, t2, n2) : (1 === o2 && ce.isXMLDoc(e2) || (i2 = ce.attrHooks[t2.toLowerCase()] || (ce.expr.match.bool.test(t2) ? mt : void 0)), void 0 !== n2 ? null === n2 ? void ce.removeAttr(e2, t2) : i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : (e2.setAttribute(t2, n2 + ""), n2) : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : null == (r2 = ce.find.attr(e2, t2)) ? void 0 : r2);
      }, attrHooks: { type: { set: function(e2, t2) {
        if (!le.radioValue && "radio" === t2 && fe(e2, "input")) {
          var n2 = e2.value;
          return e2.setAttribute("type", t2), n2 && (e2.value = n2), t2;
        }
      } } }, removeAttr: function(e2, t2) {
        var n2, r2 = 0, i2 = t2 && t2.match(D);
        if (i2 && 1 === e2.nodeType)
          while (n2 = i2[r2++])
            e2.removeAttribute(n2);
      } }), mt = { set: function(e2, t2, n2) {
        return false === t2 ? ce.removeAttr(e2, n2) : e2.setAttribute(n2, n2), n2;
      } }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function(e2, t2) {
        var a2 = xt[t2] || ce.find.attr;
        xt[t2] = function(e3, t3, n2) {
          var r2, i2, o2 = t3.toLowerCase();
          return n2 || (i2 = xt[o2], xt[o2] = r2, r2 = null != a2(e3, t3, n2) ? o2 : null, xt[o2] = i2), r2;
        };
      });
      var bt = /^(?:input|select|textarea|button)$/i, wt = /^(?:a|area)$/i;
      function Tt(e2) {
        return (e2.match(D) || []).join(" ");
      }
      function Ct(e2) {
        return e2.getAttribute && e2.getAttribute("class") || "";
      }
      function kt(e2) {
        return Array.isArray(e2) ? e2 : "string" == typeof e2 && e2.match(D) || [];
      }
      ce.fn.extend({ prop: function(e2, t2) {
        return M2(this, ce.prop, e2, t2, 1 < arguments.length);
      }, removeProp: function(e2) {
        return this.each(function() {
          delete this[ce.propFix[e2] || e2];
        });
      } }), ce.extend({ prop: function(e2, t2, n2) {
        var r2, i2, o2 = e2.nodeType;
        if (3 !== o2 && 8 !== o2 && 2 !== o2)
          return 1 === o2 && ce.isXMLDoc(e2) || (t2 = ce.propFix[t2] || t2, i2 = ce.propHooks[t2]), void 0 !== n2 ? i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : e2[t2] = n2 : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : e2[t2];
      }, propHooks: { tabIndex: { get: function(e2) {
        var t2 = ce.find.attr(e2, "tabindex");
        return t2 ? parseInt(t2, 10) : bt.test(e2.nodeName) || wt.test(e2.nodeName) && e2.href ? 0 : -1;
      } } }, propFix: { "for": "htmlFor", "class": "className" } }), le.optSelected || (ce.propHooks.selected = { get: function(e2) {
        var t2 = e2.parentNode;
        return t2 && t2.parentNode && t2.parentNode.selectedIndex, null;
      }, set: function(e2) {
        var t2 = e2.parentNode;
        t2 && (t2.selectedIndex, t2.parentNode && t2.parentNode.selectedIndex);
      } }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ce.propFix[this.toLowerCase()] = this;
      }), ce.fn.extend({ addClass: function(t2) {
        var e2, n2, r2, i2, o2, a2;
        return v(t2) ? this.each(function(e3) {
          ce(this).addClass(t2.call(this, e3, Ct(this)));
        }) : (e2 = kt(t2)).length ? this.each(function() {
          if (r2 = Ct(this), n2 = 1 === this.nodeType && " " + Tt(r2) + " ") {
            for (o2 = 0; o2 < e2.length; o2++)
              i2 = e2[o2], n2.indexOf(" " + i2 + " ") < 0 && (n2 += i2 + " ");
            a2 = Tt(n2), r2 !== a2 && this.setAttribute("class", a2);
          }
        }) : this;
      }, removeClass: function(t2) {
        var e2, n2, r2, i2, o2, a2;
        return v(t2) ? this.each(function(e3) {
          ce(this).removeClass(t2.call(this, e3, Ct(this)));
        }) : arguments.length ? (e2 = kt(t2)).length ? this.each(function() {
          if (r2 = Ct(this), n2 = 1 === this.nodeType && " " + Tt(r2) + " ") {
            for (o2 = 0; o2 < e2.length; o2++) {
              i2 = e2[o2];
              while (-1 < n2.indexOf(" " + i2 + " "))
                n2 = n2.replace(" " + i2 + " ", " ");
            }
            a2 = Tt(n2), r2 !== a2 && this.setAttribute("class", a2);
          }
        }) : this : this.attr("class", "");
      }, toggleClass: function(t2, n2) {
        var e2, r2, i2, o2, a2 = typeof t2, s2 = "string" === a2 || Array.isArray(t2);
        return v(t2) ? this.each(function(e3) {
          ce(this).toggleClass(t2.call(this, e3, Ct(this), n2), n2);
        }) : "boolean" == typeof n2 && s2 ? n2 ? this.addClass(t2) : this.removeClass(t2) : (e2 = kt(t2), this.each(function() {
          if (s2)
            for (o2 = ce(this), i2 = 0; i2 < e2.length; i2++)
              r2 = e2[i2], o2.hasClass(r2) ? o2.removeClass(r2) : o2.addClass(r2);
          else
            void 0 !== t2 && "boolean" !== a2 || ((r2 = Ct(this)) && _.set(this, "__className__", r2), this.setAttribute && this.setAttribute("class", r2 || false === t2 ? "" : _.get(this, "__className__") || ""));
        }));
      }, hasClass: function(e2) {
        var t2, n2, r2 = 0;
        t2 = " " + e2 + " ";
        while (n2 = this[r2++])
          if (1 === n2.nodeType && -1 < (" " + Tt(Ct(n2)) + " ").indexOf(t2))
            return true;
        return false;
      } });
      var St = /\r/g;
      ce.fn.extend({ val: function(n2) {
        var r2, e2, i2, t2 = this[0];
        return arguments.length ? (i2 = v(n2), this.each(function(e3) {
          var t3;
          1 === this.nodeType && (null == (t3 = i2 ? n2.call(this, e3, ce(this).val()) : n2) ? t3 = "" : "number" == typeof t3 ? t3 += "" : Array.isArray(t3) && (t3 = ce.map(t3, function(e4) {
            return null == e4 ? "" : e4 + "";
          })), (r2 = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r2 && void 0 !== r2.set(this, t3, "value") || (this.value = t3));
        })) : t2 ? (r2 = ce.valHooks[t2.type] || ce.valHooks[t2.nodeName.toLowerCase()]) && "get" in r2 && void 0 !== (e2 = r2.get(t2, "value")) ? e2 : "string" == typeof (e2 = t2.value) ? e2.replace(St, "") : null == e2 ? "" : e2 : void 0;
      } }), ce.extend({ valHooks: { option: { get: function(e2) {
        var t2 = ce.find.attr(e2, "value");
        return null != t2 ? t2 : Tt(ce.text(e2));
      } }, select: { get: function(e2) {
        var t2, n2, r2, i2 = e2.options, o2 = e2.selectedIndex, a2 = "select-one" === e2.type, s2 = a2 ? null : [], u2 = a2 ? o2 + 1 : i2.length;
        for (r2 = o2 < 0 ? u2 : a2 ? o2 : 0; r2 < u2; r2++)
          if (((n2 = i2[r2]).selected || r2 === o2) && !n2.disabled && (!n2.parentNode.disabled || !fe(n2.parentNode, "optgroup"))) {
            if (t2 = ce(n2).val(), a2)
              return t2;
            s2.push(t2);
          }
        return s2;
      }, set: function(e2, t2) {
        var n2, r2, i2 = e2.options, o2 = ce.makeArray(t2), a2 = i2.length;
        while (a2--)
          ((r2 = i2[a2]).selected = -1 < ce.inArray(ce.valHooks.option.get(r2), o2)) && (n2 = true);
        return n2 || (e2.selectedIndex = -1), o2;
      } } } }), ce.each(["radio", "checkbox"], function() {
        ce.valHooks[this] = { set: function(e2, t2) {
          if (Array.isArray(t2))
            return e2.checked = -1 < ce.inArray(ce(e2).val(), t2);
        } }, le.checkOn || (ce.valHooks[this].get = function(e2) {
          return null === e2.getAttribute("value") ? "on" : e2.value;
        });
      });
      var Et = ie.location, jt = { guid: Date.now() }, At = /\?/;
      ce.parseXML = function(e2) {
        var t2, n2;
        if (!e2 || "string" != typeof e2)
          return null;
        try {
          t2 = new ie.DOMParser().parseFromString(e2, "text/xml");
        } catch (e3) {
        }
        return n2 = t2 && t2.getElementsByTagName("parsererror")[0], t2 && !n2 || ce.error("Invalid XML: " + (n2 ? ce.map(n2.childNodes, function(e3) {
          return e3.textContent;
        }).join("\n") : e2)), t2;
      };
      var Dt = /^(?:focusinfocus|focusoutblur)$/, Nt = function(e2) {
        e2.stopPropagation();
      };
      ce.extend(ce.event, { trigger: function(e2, t2, n2, r2) {
        var i2, o2, a2, s2, u2, l2, c2, f2, p2 = [n2 || C], d2 = ue.call(e2, "type") ? e2.type : e2, h2 = ue.call(e2, "namespace") ? e2.namespace.split(".") : [];
        if (o2 = f2 = a2 = n2 = n2 || C, 3 !== n2.nodeType && 8 !== n2.nodeType && !Dt.test(d2 + ce.event.triggered) && (-1 < d2.indexOf(".") && (d2 = (h2 = d2.split(".")).shift(), h2.sort()), u2 = d2.indexOf(":") < 0 && "on" + d2, (e2 = e2[ce.expando] ? e2 : new ce.Event(d2, "object" == typeof e2 && e2)).isTrigger = r2 ? 2 : 3, e2.namespace = h2.join("."), e2.rnamespace = e2.namespace ? new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e2.result = void 0, e2.target || (e2.target = n2), t2 = null == t2 ? [e2] : ce.makeArray(t2, [e2]), c2 = ce.event.special[d2] || {}, r2 || !c2.trigger || false !== c2.trigger.apply(n2, t2))) {
          if (!r2 && !c2.noBubble && !y(n2)) {
            for (s2 = c2.delegateType || d2, Dt.test(s2 + d2) || (o2 = o2.parentNode); o2; o2 = o2.parentNode)
              p2.push(o2), a2 = o2;
            a2 === (n2.ownerDocument || C) && p2.push(a2.defaultView || a2.parentWindow || ie);
          }
          i2 = 0;
          while ((o2 = p2[i2++]) && !e2.isPropagationStopped())
            f2 = o2, e2.type = 1 < i2 ? s2 : c2.bindType || d2, (l2 = (_.get(o2, "events") || /* @__PURE__ */ Object.create(null))[e2.type] && _.get(o2, "handle")) && l2.apply(o2, t2), (l2 = u2 && o2[u2]) && l2.apply && $2(o2) && (e2.result = l2.apply(o2, t2), false === e2.result && e2.preventDefault());
          return e2.type = d2, r2 || e2.isDefaultPrevented() || c2._default && false !== c2._default.apply(p2.pop(), t2) || !$2(n2) || u2 && v(n2[d2]) && !y(n2) && ((a2 = n2[u2]) && (n2[u2] = null), ce.event.triggered = d2, e2.isPropagationStopped() && f2.addEventListener(d2, Nt), n2[d2](), e2.isPropagationStopped() && f2.removeEventListener(d2, Nt), ce.event.triggered = void 0, a2 && (n2[u2] = a2)), e2.result;
        }
      }, simulate: function(e2, t2, n2) {
        var r2 = ce.extend(new ce.Event(), n2, { type: e2, isSimulated: true });
        ce.event.trigger(r2, null, t2);
      } }), ce.fn.extend({ trigger: function(e2, t2) {
        return this.each(function() {
          ce.event.trigger(e2, t2, this);
        });
      }, triggerHandler: function(e2, t2) {
        var n2 = this[0];
        if (n2)
          return ce.event.trigger(e2, t2, n2, true);
      } });
      var qt = /\[\]$/, Lt = /\r?\n/g, Ht = /^(?:submit|button|image|reset|file)$/i, Ot = /^(?:input|select|textarea|keygen)/i;
      function Pt(n2, e2, r2, i2) {
        var t2;
        if (Array.isArray(e2))
          ce.each(e2, function(e3, t3) {
            r2 || qt.test(n2) ? i2(n2, t3) : Pt(n2 + "[" + ("object" == typeof t3 && null != t3 ? e3 : "") + "]", t3, r2, i2);
          });
        else if (r2 || "object" !== x(e2))
          i2(n2, e2);
        else
          for (t2 in e2)
            Pt(n2 + "[" + t2 + "]", e2[t2], r2, i2);
      }
      ce.param = function(e2, t2) {
        var n2, r2 = [], i2 = function(e3, t3) {
          var n3 = v(t3) ? t3() : t3;
          r2[r2.length] = encodeURIComponent(e3) + "=" + encodeURIComponent(null == n3 ? "" : n3);
        };
        if (null == e2)
          return "";
        if (Array.isArray(e2) || e2.jquery && !ce.isPlainObject(e2))
          ce.each(e2, function() {
            i2(this.name, this.value);
          });
        else
          for (n2 in e2)
            Pt(n2, e2[n2], t2, i2);
        return r2.join("&");
      }, ce.fn.extend({ serialize: function() {
        return ce.param(this.serializeArray());
      }, serializeArray: function() {
        return this.map(function() {
          var e2 = ce.prop(this, "elements");
          return e2 ? ce.makeArray(e2) : this;
        }).filter(function() {
          var e2 = this.type;
          return this.name && !ce(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e2) && (this.checked || !we.test(e2));
        }).map(function(e2, t2) {
          var n2 = ce(this).val();
          return null == n2 ? null : Array.isArray(n2) ? ce.map(n2, function(e3) {
            return { name: t2.name, value: e3.replace(Lt, "\r\n") };
          }) : { name: t2.name, value: n2.replace(Lt, "\r\n") };
        }).get();
      } });
      var Mt = /%20/g, Rt = /#.*$/, It = /([?&])_=[^&]*/, Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ft = /^(?:GET|HEAD)$/, $t = /^\/\//, Bt = {}, _t = {}, zt = "*/".concat("*"), Xt = C.createElement("a");
      function Ut(o2) {
        return function(e2, t2) {
          "string" != typeof e2 && (t2 = e2, e2 = "*");
          var n2, r2 = 0, i2 = e2.toLowerCase().match(D) || [];
          if (v(t2))
            while (n2 = i2[r2++])
              "+" === n2[0] ? (n2 = n2.slice(1) || "*", (o2[n2] = o2[n2] || []).unshift(t2)) : (o2[n2] = o2[n2] || []).push(t2);
        };
      }
      function Vt(t2, i2, o2, a2) {
        var s2 = {}, u2 = t2 === _t;
        function l2(e2) {
          var r2;
          return s2[e2] = true, ce.each(t2[e2] || [], function(e3, t3) {
            var n2 = t3(i2, o2, a2);
            return "string" != typeof n2 || u2 || s2[n2] ? u2 ? !(r2 = n2) : void 0 : (i2.dataTypes.unshift(n2), l2(n2), false);
          }), r2;
        }
        return l2(i2.dataTypes[0]) || !s2["*"] && l2("*");
      }
      function Gt(e2, t2) {
        var n2, r2, i2 = ce.ajaxSettings.flatOptions || {};
        for (n2 in t2)
          void 0 !== t2[n2] && ((i2[n2] ? e2 : r2 || (r2 = {}))[n2] = t2[n2]);
        return r2 && ce.extend(true, e2, r2), e2;
      }
      Xt.href = Et.href, ce.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Et.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": zt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": true, "text json": JSON.parse, "text xml": ce.parseXML }, flatOptions: { url: true, context: true } }, ajaxSetup: function(e2, t2) {
        return t2 ? Gt(Gt(e2, ce.ajaxSettings), t2) : Gt(ce.ajaxSettings, e2);
      }, ajaxPrefilter: Ut(Bt), ajaxTransport: Ut(_t), ajax: function(e2, t2) {
        "object" == typeof e2 && (t2 = e2, e2 = void 0), t2 = t2 || {};
        var c2, f2, p2, n2, d2, r2, h2, g2, i2, o2, v2 = ce.ajaxSetup({}, t2), y2 = v2.context || v2, m2 = v2.context && (y2.nodeType || y2.jquery) ? ce(y2) : ce.event, x2 = ce.Deferred(), b2 = ce.Callbacks("once memory"), w2 = v2.statusCode || {}, a2 = {}, s2 = {}, u2 = "canceled", T2 = { readyState: 0, getResponseHeader: function(e3) {
          var t3;
          if (h2) {
            if (!n2) {
              n2 = {};
              while (t3 = Wt.exec(p2))
                n2[t3[1].toLowerCase() + " "] = (n2[t3[1].toLowerCase() + " "] || []).concat(t3[2]);
            }
            t3 = n2[e3.toLowerCase() + " "];
          }
          return null == t3 ? null : t3.join(", ");
        }, getAllResponseHeaders: function() {
          return h2 ? p2 : null;
        }, setRequestHeader: function(e3, t3) {
          return null == h2 && (e3 = s2[e3.toLowerCase()] = s2[e3.toLowerCase()] || e3, a2[e3] = t3), this;
        }, overrideMimeType: function(e3) {
          return null == h2 && (v2.mimeType = e3), this;
        }, statusCode: function(e3) {
          var t3;
          if (e3)
            if (h2)
              T2.always(e3[T2.status]);
            else
              for (t3 in e3)
                w2[t3] = [w2[t3], e3[t3]];
          return this;
        }, abort: function(e3) {
          var t3 = e3 || u2;
          return c2 && c2.abort(t3), l2(0, t3), this;
        } };
        if (x2.promise(T2), v2.url = ((e2 || v2.url || Et.href) + "").replace($t, Et.protocol + "//"), v2.type = t2.method || t2.type || v2.method || v2.type, v2.dataTypes = (v2.dataType || "*").toLowerCase().match(D) || [""], null == v2.crossDomain) {
          r2 = C.createElement("a");
          try {
            r2.href = v2.url, r2.href = r2.href, v2.crossDomain = Xt.protocol + "//" + Xt.host != r2.protocol + "//" + r2.host;
          } catch (e3) {
            v2.crossDomain = true;
          }
        }
        if (v2.data && v2.processData && "string" != typeof v2.data && (v2.data = ce.param(v2.data, v2.traditional)), Vt(Bt, v2, t2, T2), h2)
          return T2;
        for (i2 in (g2 = ce.event && v2.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"), v2.type = v2.type.toUpperCase(), v2.hasContent = !Ft.test(v2.type), f2 = v2.url.replace(Rt, ""), v2.hasContent ? v2.data && v2.processData && 0 === (v2.contentType || "").indexOf("application/x-www-form-urlencoded") && (v2.data = v2.data.replace(Mt, "+")) : (o2 = v2.url.slice(f2.length), v2.data && (v2.processData || "string" == typeof v2.data) && (f2 += (At.test(f2) ? "&" : "?") + v2.data, delete v2.data), false === v2.cache && (f2 = f2.replace(It, "$1"), o2 = (At.test(f2) ? "&" : "?") + "_=" + jt.guid++ + o2), v2.url = f2 + o2), v2.ifModified && (ce.lastModified[f2] && T2.setRequestHeader("If-Modified-Since", ce.lastModified[f2]), ce.etag[f2] && T2.setRequestHeader("If-None-Match", ce.etag[f2])), (v2.data && v2.hasContent && false !== v2.contentType || t2.contentType) && T2.setRequestHeader("Content-Type", v2.contentType), T2.setRequestHeader("Accept", v2.dataTypes[0] && v2.accepts[v2.dataTypes[0]] ? v2.accepts[v2.dataTypes[0]] + ("*" !== v2.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : v2.accepts["*"]), v2.headers)
          T2.setRequestHeader(i2, v2.headers[i2]);
        if (v2.beforeSend && (false === v2.beforeSend.call(y2, T2, v2) || h2))
          return T2.abort();
        if (u2 = "abort", b2.add(v2.complete), T2.done(v2.success), T2.fail(v2.error), c2 = Vt(_t, v2, t2, T2)) {
          if (T2.readyState = 1, g2 && m2.trigger("ajaxSend", [T2, v2]), h2)
            return T2;
          v2.async && 0 < v2.timeout && (d2 = ie.setTimeout(function() {
            T2.abort("timeout");
          }, v2.timeout));
          try {
            h2 = false, c2.send(a2, l2);
          } catch (e3) {
            if (h2)
              throw e3;
            l2(-1, e3);
          }
        } else
          l2(-1, "No Transport");
        function l2(e3, t3, n3, r3) {
          var i3, o3, a3, s3, u3, l3 = t3;
          h2 || (h2 = true, d2 && ie.clearTimeout(d2), c2 = void 0, p2 = r3 || "", T2.readyState = 0 < e3 ? 4 : 0, i3 = 200 <= e3 && e3 < 300 || 304 === e3, n3 && (s3 = function(e4, t4, n4) {
            var r4, i4, o4, a4, s4 = e4.contents, u4 = e4.dataTypes;
            while ("*" === u4[0])
              u4.shift(), void 0 === r4 && (r4 = e4.mimeType || t4.getResponseHeader("Content-Type"));
            if (r4) {
              for (i4 in s4)
                if (s4[i4] && s4[i4].test(r4)) {
                  u4.unshift(i4);
                  break;
                }
            }
            if (u4[0] in n4)
              o4 = u4[0];
            else {
              for (i4 in n4) {
                if (!u4[0] || e4.converters[i4 + " " + u4[0]]) {
                  o4 = i4;
                  break;
                }
                a4 || (a4 = i4);
              }
              o4 = o4 || a4;
            }
            if (o4)
              return o4 !== u4[0] && u4.unshift(o4), n4[o4];
          }(v2, T2, n3)), !i3 && -1 < ce.inArray("script", v2.dataTypes) && ce.inArray("json", v2.dataTypes) < 0 && (v2.converters["text script"] = function() {
          }), s3 = function(e4, t4, n4, r4) {
            var i4, o4, a4, s4, u4, l4 = {}, c3 = e4.dataTypes.slice();
            if (c3[1])
              for (a4 in e4.converters)
                l4[a4.toLowerCase()] = e4.converters[a4];
            o4 = c3.shift();
            while (o4)
              if (e4.responseFields[o4] && (n4[e4.responseFields[o4]] = t4), !u4 && r4 && e4.dataFilter && (t4 = e4.dataFilter(t4, e4.dataType)), u4 = o4, o4 = c3.shift()) {
                if ("*" === o4)
                  o4 = u4;
                else if ("*" !== u4 && u4 !== o4) {
                  if (!(a4 = l4[u4 + " " + o4] || l4["* " + o4])) {
                    for (i4 in l4)
                      if ((s4 = i4.split(" "))[1] === o4 && (a4 = l4[u4 + " " + s4[0]] || l4["* " + s4[0]])) {
                        true === a4 ? a4 = l4[i4] : true !== l4[i4] && (o4 = s4[0], c3.unshift(s4[1]));
                        break;
                      }
                  }
                  if (true !== a4)
                    if (a4 && e4["throws"])
                      t4 = a4(t4);
                    else
                      try {
                        t4 = a4(t4);
                      } catch (e5) {
                        return { state: "parsererror", error: a4 ? e5 : "No conversion from " + u4 + " to " + o4 };
                      }
                }
              }
            return { state: "success", data: t4 };
          }(v2, s3, T2, i3), i3 ? (v2.ifModified && ((u3 = T2.getResponseHeader("Last-Modified")) && (ce.lastModified[f2] = u3), (u3 = T2.getResponseHeader("etag")) && (ce.etag[f2] = u3)), 204 === e3 || "HEAD" === v2.type ? l3 = "nocontent" : 304 === e3 ? l3 = "notmodified" : (l3 = s3.state, o3 = s3.data, i3 = !(a3 = s3.error))) : (a3 = l3, !e3 && l3 || (l3 = "error", e3 < 0 && (e3 = 0))), T2.status = e3, T2.statusText = (t3 || l3) + "", i3 ? x2.resolveWith(y2, [o3, l3, T2]) : x2.rejectWith(y2, [T2, l3, a3]), T2.statusCode(w2), w2 = void 0, g2 && m2.trigger(i3 ? "ajaxSuccess" : "ajaxError", [T2, v2, i3 ? o3 : a3]), b2.fireWith(y2, [T2, l3]), g2 && (m2.trigger("ajaxComplete", [T2, v2]), --ce.active || ce.event.trigger("ajaxStop")));
        }
        return T2;
      }, getJSON: function(e2, t2, n2) {
        return ce.get(e2, t2, n2, "json");
      }, getScript: function(e2, t2) {
        return ce.get(e2, void 0, t2, "script");
      } }), ce.each(["get", "post"], function(e2, i2) {
        ce[i2] = function(e3, t2, n2, r2) {
          return v(t2) && (r2 = r2 || n2, n2 = t2, t2 = void 0), ce.ajax(ce.extend({ url: e3, type: i2, dataType: r2, data: t2, success: n2 }, ce.isPlainObject(e3) && e3));
        };
      }), ce.ajaxPrefilter(function(e2) {
        var t2;
        for (t2 in e2.headers)
          "content-type" === t2.toLowerCase() && (e2.contentType = e2.headers[t2] || "");
      }), ce._evalUrl = function(e2, t2, n2) {
        return ce.ajax({ url: e2, type: "GET", dataType: "script", cache: true, async: false, global: false, converters: { "text script": function() {
        } }, dataFilter: function(e3) {
          ce.globalEval(e3, t2, n2);
        } });
      }, ce.fn.extend({ wrapAll: function(e2) {
        var t2;
        return this[0] && (v(e2) && (e2 = e2.call(this[0])), t2 = ce(e2, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t2.insertBefore(this[0]), t2.map(function() {
          var e3 = this;
          while (e3.firstElementChild)
            e3 = e3.firstElementChild;
          return e3;
        }).append(this)), this;
      }, wrapInner: function(n2) {
        return v(n2) ? this.each(function(e2) {
          ce(this).wrapInner(n2.call(this, e2));
        }) : this.each(function() {
          var e2 = ce(this), t2 = e2.contents();
          t2.length ? t2.wrapAll(n2) : e2.append(n2);
        });
      }, wrap: function(t2) {
        var n2 = v(t2);
        return this.each(function(e2) {
          ce(this).wrapAll(n2 ? t2.call(this, e2) : t2);
        });
      }, unwrap: function(e2) {
        return this.parent(e2).not("body").each(function() {
          ce(this).replaceWith(this.childNodes);
        }), this;
      } }), ce.expr.pseudos.hidden = function(e2) {
        return !ce.expr.pseudos.visible(e2);
      }, ce.expr.pseudos.visible = function(e2) {
        return !!(e2.offsetWidth || e2.offsetHeight || e2.getClientRects().length);
      }, ce.ajaxSettings.xhr = function() {
        try {
          return new ie.XMLHttpRequest();
        } catch (e2) {
        }
      };
      var Yt = { 0: 200, 1223: 204 }, Qt = ce.ajaxSettings.xhr();
      le.cors = !!Qt && "withCredentials" in Qt, le.ajax = Qt = !!Qt, ce.ajaxTransport(function(i2) {
        var o2, a2;
        if (le.cors || Qt && !i2.crossDomain)
          return { send: function(e2, t2) {
            var n2, r2 = i2.xhr();
            if (r2.open(i2.type, i2.url, i2.async, i2.username, i2.password), i2.xhrFields)
              for (n2 in i2.xhrFields)
                r2[n2] = i2.xhrFields[n2];
            for (n2 in i2.mimeType && r2.overrideMimeType && r2.overrideMimeType(i2.mimeType), i2.crossDomain || e2["X-Requested-With"] || (e2["X-Requested-With"] = "XMLHttpRequest"), e2)
              r2.setRequestHeader(n2, e2[n2]);
            o2 = function(e3) {
              return function() {
                o2 && (o2 = a2 = r2.onload = r2.onerror = r2.onabort = r2.ontimeout = r2.onreadystatechange = null, "abort" === e3 ? r2.abort() : "error" === e3 ? "number" != typeof r2.status ? t2(0, "error") : t2(r2.status, r2.statusText) : t2(Yt[r2.status] || r2.status, r2.statusText, "text" !== (r2.responseType || "text") || "string" != typeof r2.responseText ? { binary: r2.response } : { text: r2.responseText }, r2.getAllResponseHeaders()));
              };
            }, r2.onload = o2(), a2 = r2.onerror = r2.ontimeout = o2("error"), void 0 !== r2.onabort ? r2.onabort = a2 : r2.onreadystatechange = function() {
              4 === r2.readyState && ie.setTimeout(function() {
                o2 && a2();
              });
            }, o2 = o2("abort");
            try {
              r2.send(i2.hasContent && i2.data || null);
            } catch (e3) {
              if (o2)
                throw e3;
            }
          }, abort: function() {
            o2 && o2();
          } };
      }), ce.ajaxPrefilter(function(e2) {
        e2.crossDomain && (e2.contents.script = false);
      }), ce.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e2) {
        return ce.globalEval(e2), e2;
      } } }), ce.ajaxPrefilter("script", function(e2) {
        void 0 === e2.cache && (e2.cache = false), e2.crossDomain && (e2.type = "GET");
      }), ce.ajaxTransport("script", function(n2) {
        var r2, i2;
        if (n2.crossDomain || n2.scriptAttrs)
          return { send: function(e2, t2) {
            r2 = ce("<script>").attr(n2.scriptAttrs || {}).prop({ charset: n2.scriptCharset, src: n2.url }).on("load error", i2 = function(e3) {
              r2.remove(), i2 = null, e3 && t2("error" === e3.type ? 404 : 200, e3.type);
            }), C.head.appendChild(r2[0]);
          }, abort: function() {
            i2 && i2();
          } };
      });
      var Jt, Kt = [], Zt = /(=)\?(?=&|$)|\?\?/;
      ce.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
        var e2 = Kt.pop() || ce.expando + "_" + jt.guid++;
        return this[e2] = true, e2;
      } }), ce.ajaxPrefilter("json jsonp", function(e2, t2, n2) {
        var r2, i2, o2, a2 = false !== e2.jsonp && (Zt.test(e2.url) ? "url" : "string" == typeof e2.data && 0 === (e2.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e2.data) && "data");
        if (a2 || "jsonp" === e2.dataTypes[0])
          return r2 = e2.jsonpCallback = v(e2.jsonpCallback) ? e2.jsonpCallback() : e2.jsonpCallback, a2 ? e2[a2] = e2[a2].replace(Zt, "$1" + r2) : false !== e2.jsonp && (e2.url += (At.test(e2.url) ? "&" : "?") + e2.jsonp + "=" + r2), e2.converters["script json"] = function() {
            return o2 || ce.error(r2 + " was not called"), o2[0];
          }, e2.dataTypes[0] = "json", i2 = ie[r2], ie[r2] = function() {
            o2 = arguments;
          }, n2.always(function() {
            void 0 === i2 ? ce(ie).removeProp(r2) : ie[r2] = i2, e2[r2] && (e2.jsonpCallback = t2.jsonpCallback, Kt.push(r2)), o2 && v(i2) && i2(o2[0]), o2 = i2 = void 0;
          }), "script";
      }), le.createHTMLDocument = ((Jt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), ce.parseHTML = function(e2, t2, n2) {
        return "string" != typeof e2 ? [] : ("boolean" == typeof t2 && (n2 = t2, t2 = false), t2 || (le.createHTMLDocument ? ((r2 = (t2 = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t2.head.appendChild(r2)) : t2 = C), o2 = !n2 && [], (i2 = w.exec(e2)) ? [t2.createElement(i2[1])] : (i2 = Ae([e2], t2, o2), o2 && o2.length && ce(o2).remove(), ce.merge([], i2.childNodes)));
        var r2, i2, o2;
      }, ce.fn.load = function(e2, t2, n2) {
        var r2, i2, o2, a2 = this, s2 = e2.indexOf(" ");
        return -1 < s2 && (r2 = Tt(e2.slice(s2)), e2 = e2.slice(0, s2)), v(t2) ? (n2 = t2, t2 = void 0) : t2 && "object" == typeof t2 && (i2 = "POST"), 0 < a2.length && ce.ajax({ url: e2, type: i2 || "GET", dataType: "html", data: t2 }).done(function(e3) {
          o2 = arguments, a2.html(r2 ? ce("<div>").append(ce.parseHTML(e3)).find(r2) : e3);
        }).always(n2 && function(e3, t3) {
          a2.each(function() {
            n2.apply(this, o2 || [e3.responseText, t3, e3]);
          });
        }), this;
      }, ce.expr.pseudos.animated = function(t2) {
        return ce.grep(ce.timers, function(e2) {
          return t2 === e2.elem;
        }).length;
      }, ce.offset = { setOffset: function(e2, t2, n2) {
        var r2, i2, o2, a2, s2, u2, l2 = ce.css(e2, "position"), c2 = ce(e2), f2 = {};
        "static" === l2 && (e2.style.position = "relative"), s2 = c2.offset(), o2 = ce.css(e2, "top"), u2 = ce.css(e2, "left"), ("absolute" === l2 || "fixed" === l2) && -1 < (o2 + u2).indexOf("auto") ? (a2 = (r2 = c2.position()).top, i2 = r2.left) : (a2 = parseFloat(o2) || 0, i2 = parseFloat(u2) || 0), v(t2) && (t2 = t2.call(e2, n2, ce.extend({}, s2))), null != t2.top && (f2.top = t2.top - s2.top + a2), null != t2.left && (f2.left = t2.left - s2.left + i2), "using" in t2 ? t2.using.call(e2, f2) : c2.css(f2);
      } }, ce.fn.extend({ offset: function(t2) {
        if (arguments.length)
          return void 0 === t2 ? this : this.each(function(e3) {
            ce.offset.setOffset(this, t2, e3);
          });
        var e2, n2, r2 = this[0];
        return r2 ? r2.getClientRects().length ? (e2 = r2.getBoundingClientRect(), n2 = r2.ownerDocument.defaultView, { top: e2.top + n2.pageYOffset, left: e2.left + n2.pageXOffset }) : { top: 0, left: 0 } : void 0;
      }, position: function() {
        if (this[0]) {
          var e2, t2, n2, r2 = this[0], i2 = { top: 0, left: 0 };
          if ("fixed" === ce.css(r2, "position"))
            t2 = r2.getBoundingClientRect();
          else {
            t2 = this.offset(), n2 = r2.ownerDocument, e2 = r2.offsetParent || n2.documentElement;
            while (e2 && (e2 === n2.body || e2 === n2.documentElement) && "static" === ce.css(e2, "position"))
              e2 = e2.parentNode;
            e2 && e2 !== r2 && 1 === e2.nodeType && ((i2 = ce(e2).offset()).top += ce.css(e2, "borderTopWidth", true), i2.left += ce.css(e2, "borderLeftWidth", true));
          }
          return { top: t2.top - i2.top - ce.css(r2, "marginTop", true), left: t2.left - i2.left - ce.css(r2, "marginLeft", true) };
        }
      }, offsetParent: function() {
        return this.map(function() {
          var e2 = this.offsetParent;
          while (e2 && "static" === ce.css(e2, "position"))
            e2 = e2.offsetParent;
          return e2 || J;
        });
      } }), ce.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t2, i2) {
        var o2 = "pageYOffset" === i2;
        ce.fn[t2] = function(e2) {
          return M2(this, function(e3, t3, n2) {
            var r2;
            if (y(e3) ? r2 = e3 : 9 === e3.nodeType && (r2 = e3.defaultView), void 0 === n2)
              return r2 ? r2[i2] : e3[t3];
            r2 ? r2.scrollTo(o2 ? r2.pageXOffset : n2, o2 ? n2 : r2.pageYOffset) : e3[t3] = n2;
          }, t2, e2, arguments.length);
        };
      }), ce.each(["top", "left"], function(e2, n2) {
        ce.cssHooks[n2] = Ye(le.pixelPosition, function(e3, t2) {
          if (t2)
            return t2 = Ge(e3, n2), _e.test(t2) ? ce(e3).position()[n2] + "px" : t2;
        });
      }), ce.each({ Height: "height", Width: "width" }, function(a2, s2) {
        ce.each({ padding: "inner" + a2, content: s2, "": "outer" + a2 }, function(r2, o2) {
          ce.fn[o2] = function(e2, t2) {
            var n2 = arguments.length && (r2 || "boolean" != typeof e2), i2 = r2 || (true === e2 || true === t2 ? "margin" : "border");
            return M2(this, function(e3, t3, n3) {
              var r3;
              return y(e3) ? 0 === o2.indexOf("outer") ? e3["inner" + a2] : e3.document.documentElement["client" + a2] : 9 === e3.nodeType ? (r3 = e3.documentElement, Math.max(e3.body["scroll" + a2], r3["scroll" + a2], e3.body["offset" + a2], r3["offset" + a2], r3["client" + a2])) : void 0 === n3 ? ce.css(e3, t3, i2) : ce.style(e3, t3, n3, i2);
            }, s2, n2 ? e2 : void 0, n2);
          };
        });
      }), ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e2, t2) {
        ce.fn[t2] = function(e3) {
          return this.on(t2, e3);
        };
      }), ce.fn.extend({ bind: function(e2, t2, n2) {
        return this.on(e2, null, t2, n2);
      }, unbind: function(e2, t2) {
        return this.off(e2, null, t2);
      }, delegate: function(e2, t2, n2, r2) {
        return this.on(t2, e2, n2, r2);
      }, undelegate: function(e2, t2, n2) {
        return 1 === arguments.length ? this.off(e2, "**") : this.off(t2, e2 || "**", n2);
      }, hover: function(e2, t2) {
        return this.on("mouseenter", e2).on("mouseleave", t2 || e2);
      } }), ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e2, n2) {
        ce.fn[n2] = function(e3, t2) {
          return 0 < arguments.length ? this.on(n2, null, e3, t2) : this.trigger(n2);
        };
      });
      var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      ce.proxy = function(e2, t2) {
        var n2, r2, i2;
        if ("string" == typeof t2 && (n2 = e2[t2], t2 = e2, e2 = n2), v(e2))
          return r2 = ae.call(arguments, 2), (i2 = function() {
            return e2.apply(t2 || this, r2.concat(ae.call(arguments)));
          }).guid = e2.guid = e2.guid || ce.guid++, i2;
      }, ce.holdReady = function(e2) {
        e2 ? ce.readyWait++ : ce.ready(true);
      }, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = F, ce.type = x, ce.now = Date.now, ce.isNumeric = function(e2) {
        var t2 = ce.type(e2);
        return ("number" === t2 || "string" === t2) && !isNaN(e2 - parseFloat(e2));
      }, ce.trim = function(e2) {
        return null == e2 ? "" : (e2 + "").replace(en, "$1");
      }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ce;
      });
      var tn = ie.jQuery, nn = ie.$;
      return ce.noConflict = function(e2) {
        return ie.$ === ce && (ie.$ = nn), e2 && ie.jQuery === ce && (ie.jQuery = tn), ce;
      }, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce;
    });
  }
});

// index.ts
var client_exports = {};
__export(client_exports, {
  default: () => client_default
});
var import_jquery = __toESM(require_jquery_min());

// modules/Editor.ts
var Editor_default = {
  GetValue() {
    return window.monaco_editor?.getEditors()[0].getValue();
  },
  SetValue(value) {
    return window.monaco_editor?.getEditors()[0].setValue(value);
  },
  Clear() {
    return window.monaco_editor?.getEditors()[0].setValue("");
  },
  GetDomElement() {
    return window.monaco_editor?.getEditors()[0].getDomNode();
  },
  ToggleLoading(loadingText = "Loading") {
    const loadingTextElement = document.querySelector(".loadingtext");
    document.querySelector(".main").classList.toggle("blur");
    loadingTextElement.innerText = `${loadingText}...`;
    loadingTextElement.classList.toggle("hide");
  }
};

// modules/Request.ts
var Request_default = {
  async new(func, code, options, uglifier_options) {
    if (!(func instanceof Attr))
      return Promise.reject("invalid arguments");
    const start_tick = (/* @__PURE__ */ new Date()).getTime();
    console.log(`new function request`, func);
    const function_name = func.value;
    return await fetch(`${options.api_url()}${function_name}`, { method: "POST", body: code, headers: { "uglifier-options": JSON.stringify(uglifier_options) } }).catch((error) => {
      const _error = error;
      Editor_default.SetValue(Request_default.CreateResponseError("lua", _error.message, Editor_default.GetValue()));
      throw error;
    }).finally(() => {
      console.log(`function request finished. (took ${(/* @__PURE__ */ new Date()).getTime() - start_tick}ms)`);
    });
  },
  CreateResponseError(format, error, code) {
    let message = error;
    if (code)
      code = code.replace(/--\[\[(.|\n)*]]/gm, "");
    switch (format) {
      case "lua": {
        message = `--[[
                  \u250C GoofyLuaUglifier - Error (${crypto.randomUUID()})
                  \u2502
                  \u2514 ${error}
                ]]${code ? `


${code}` : ""}`.replace(/^\s+/gm, "");
        break;
      }
    }
    return message;
  }
};

// modules/LocalStorage.ts
var LocalStorage_default = {
  Create(key, value) {
    return localStorage.setItem(key, btoa(JSON.stringify(value || {})));
  },
  Set(key, name, value) {
    const _data = LocalStorage_default.Exists(key) && JSON.parse(atob(localStorage.getItem(key)));
    if (!_data)
      return console.warn(`invalid localstorage key '${key}'`);
    _data[name] = value;
    localStorage.setItem(key, btoa(JSON.stringify(_data)));
  },
  Edit(key, index, name, value) {
    const _data = LocalStorage_default.Exists(key) && JSON.parse(atob(localStorage.getItem(key)));
    if (!_data)
      return console.warn(`invalid localstorage key '${key}'`);
    _data[index][name] = value;
    localStorage.setItem(key, btoa(JSON.stringify(_data)));
  },
  GetKey(key, index) {
    const _data = LocalStorage_default.Exists(key) && JSON.parse(atob(localStorage.getItem(key)));
    if (!_data)
      return console.warn(`invalid localstorage key '${key}'`);
    return _data[index];
  },
  Exists(key) {
    return localStorage.getItem(key);
  }
};

// modules/Settings.ts
var Settings = class {
  constructor(config = {
    storage_key: "_goofyuglifier",
    default_settings: {
      ["settings"]: {
        ["test_checkbox"]: false,
        ["test_slider"]: "50",
        ["watermark"]: "",
        ["protect_watermark"]: false,
        ["tester_access_key"]: "",
        ["beautify_output"]: false
      }
    }
  }) {
    this.config = config;
    if (!LocalStorage_default.Exists(this.config.storage_key)) {
      LocalStorage_default.Create(this.config.storage_key, this.config.default_settings);
    }
  }
  init() {
    const _settings = LocalStorage_default.GetKey(this.config.storage_key, "settings");
    document.querySelectorAll(".setting").forEach((setting) => {
      const input = setting.querySelector("input"), setting_id = $(input).attr("id");
      input.addEventListener("input", (e) => {
        const [setting_name, setting_id2, value] = this.HandleInput(e, setting);
        this.UpdateSetting(setting_name, setting_id2, value);
      });
      if (_settings[setting_id]) {
        const value = _settings[setting_id];
        switch (input.type) {
          case "checkbox":
            input.checked = value;
            break;
          case "range":
            const range_text = setting.querySelector(".slider-value"), range_text_value = range_text.attributes.getNamedItem("value-type").value || "";
            range_text.innerText = `${value}${range_text_value}`;
            input.value = value;
            break;
          case "text":
            input.value = value;
            break;
          case "password":
            input.value = value;
            break;
          default:
            console.warn(`Invalid input type <${input.type}>`);
            break;
        }
      }
    });
  }
  HandleInput(e, setting) {
    const name = setting.querySelector(".setting-name"), setting_id = $(setting.querySelector("input")).attr("id"), input = setting.querySelector("input");
    let new_value;
    if (e.target instanceof HTMLInputElement && e.target.type === "range") {
      const range_text = setting.querySelector(".slider-value"), range_text_value = range_text.attributes.getNamedItem("value-type").value || "";
      new_value = input.value;
      range_text.innerText = `${input.value}${range_text_value}`;
    } else if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
      new_value = input.checked;
    } else if (e.target instanceof HTMLInputElement && e.target.type === "text" || "password") {
      new_value = input.value;
    }
    return [name.innerText, setting_id, new_value];
  }
  UpdateSetting(name, id, value) {
    LocalStorage_default.Edit(this.config.storage_key, "settings", id, value);
  }
};

// index.ts
(0, import_jquery.default)(() => {
  const settings = new Settings();
  M.AutoInit();
  settings.init();
  const sidebar_buttons = document.querySelectorAll(".function-btn");
  sidebar_buttons.forEach((btn) => {
    $(btn).on("click", async (e) => {
      if (client_default.block_requests)
        return;
      client_default.block_requests = true;
      Editor_default.ToggleLoading("Processing");
      const func = e.target.attributes.getNamedItem("data-function"), _response = await Request_default.new(func, Editor_default.GetValue(), client_default.options, LocalStorage_default.GetKey(settings.config.storage_key, "settings"));
      if (_response instanceof Response) {
        let _response_body = "";
        if (_response.ok) {
          _response_body = await _response.text();
          Editor_default.SetValue(_response_body);
        } else {
          Editor_default.SetValue(Request_default.CreateResponseError("lua", `${_response.statusText} - ${_response.status}`, Editor_default.GetValue()));
        }
      }
      Editor_default.ToggleLoading();
      client_default.block_requests = false;
    });
  });
  window.modules = {
    jQuery: import_jquery.default,
    Request: Request_default,
    Editor: Editor_default,
    self: client_exports,
    settings,
    LocalStorage: LocalStorage_default
  };
});
var client_default = {
  block_requests: false,
  options: {
    api_url: () => location.hostname == "localhost" && !window.forceProduction ? "http://localhost:6969/api/goofyuglifier/" : "https://mopsflgithubio.mopsfl.repl.co/api/goofyuglifier/"
  }
};
export {
  client_default as default
};
/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
