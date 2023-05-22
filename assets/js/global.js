var p
!(function (t, e) {
  'use strict'
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = t.document
        ? e(t, !0)
        : function (t) {
            if (!t.document) throw new Error('jQuery requires a window with a document')
            return e(t)
          })
    : e(t)
})('undefined' != typeof window ? window : this, function (t, e) {
  'use strict'
  var n = [],
    i = Object.getPrototypeOf,
    r = n.slice,
    o = n.flat
      ? function (t) {
          return n.flat.call(t)
        }
      : function (t) {
          return n.concat.apply([], t)
        },
    s = n.push,
    a = n.indexOf,
    u = {},
    l = u.toString,
    c = u.hasOwnProperty,
    f = c.toString,
    d = f.call(Object),
    h = {},
    p = function (t) {
      return 'function' == typeof t && 'number' != typeof t.nodeType
    },
    m = function (t) {
      return null != t && t === t.window
    },
    g = t.document,
    v = { type: !0, src: !0, nonce: !0, noModule: !0 }
  function y(t, e, n) {
    var i,
      r,
      o = (n = n || g).createElement('script')
    if (((o.text = t), e)) for (i in v) (r = e[i] || (e.getAttribute && e.getAttribute(i))) && o.setAttribute(i, r)
    n.head.appendChild(o).parentNode.removeChild(o)
  }
  function b(t) {
    return null == t ? t + '' : 'object' == typeof t || 'function' == typeof t ? u[l.call(t)] || 'object' : typeof t
  }
  var w = '3.5.1',
    _ = function (t, e) {
      return new _.fn.init(t, e)
    }
  function x(t) {
    var e = !!t && 'length' in t && t.length,
      n = b(t)
    return !p(t) && !m(t) && ('array' === n || 0 === e || ('number' == typeof e && e > 0 && e - 1 in t))
  }
  ;(_.fn = _.prototype =
    {
      jquery: w,
      constructor: _,
      length: 0,
      toArray: function () {
        return r.call(this)
      },
      get: function (t) {
        return null == t ? r.call(this) : t < 0 ? this[t + this.length] : this[t]
      },
      pushStack: function (t) {
        var e = _.merge(this.constructor(), t)
        return (e.prevObject = this), e
      },
      each: function (t) {
        return _.each(this, t)
      },
      map: function (t) {
        return this.pushStack(
          _.map(this, function (e, n) {
            return t.call(e, n, e)
          }),
        )
      },
      slice: function () {
        return this.pushStack(r.apply(this, arguments))
      },
      first: function () {
        return this.eq(0)
      },
      last: function () {
        return this.eq(-1)
      },
      even: function () {
        return this.pushStack(
          _.grep(this, function (t, e) {
            return (e + 1) % 2
          }),
        )
      },
      odd: function () {
        return this.pushStack(
          _.grep(this, function (t, e) {
            return e % 2
          }),
        )
      },
      eq: function (t) {
        var e = this.length,
          n = +t + (t < 0 ? e : 0)
        return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
      },
      end: function () {
        return this.prevObject || this.constructor()
      },
      push: s,
      sort: n.sort,
      splice: n.splice,
    }),
    (_.extend = _.fn.extend =
      function () {
        var t,
          e,
          n,
          i,
          r,
          o,
          s = arguments[0] || {},
          a = 1,
          u = arguments.length,
          l = !1
        for ('boolean' == typeof s && ((l = s), (s = arguments[a] || {}), a++), 'object' == typeof s || p(s) || (s = {}), a === u && ((s = this), a--); a < u; a++)
          if (null != (t = arguments[a]))
            for (e in t) (i = t[e]), '__proto__' !== e && s !== i && (l && i && (_.isPlainObject(i) || (r = Array.isArray(i))) ? ((n = s[e]), (o = r && !Array.isArray(n) ? [] : r || _.isPlainObject(n) ? n : {}), (r = !1), (s[e] = _.extend(l, o, i))) : void 0 !== i && (s[e] = i))
        return s
      }),
    _.extend({
      expando: 'jQuery' + (w + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (t) {
        throw new Error(t)
      },
      noop: function () {},
      isPlainObject: function (t) {
        var e, n
        return !(!t || '[object Object]' !== l.call(t)) && (!(e = i(t)) || ('function' == typeof (n = c.call(e, 'constructor') && e.constructor) && f.call(n) === d))
      },
      isEmptyObject: function (t) {
        var e
        for (e in t) return !1
        return !0
      },
      globalEval: function (t, e, n) {
        y(t, { nonce: e && e.nonce }, n)
      },
      each: function (t, e) {
        var n,
          i = 0
        if (x(t)) for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
        else for (i in t) if (!1 === e.call(t[i], i, t[i])) break
        return t
      },
      makeArray: function (t, e) {
        var n = e || []
        return null != t && (x(Object(t)) ? _.merge(n, 'string' == typeof t ? [t] : t) : s.call(n, t)), n
      },
      inArray: function (t, e, n) {
        return null == e ? -1 : a.call(e, t, n)
      },
      merge: function (t, e) {
        for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i]
        return (t.length = r), t
      },
      grep: function (t, e, n) {
        for (var i = [], r = 0, o = t.length, s = !n; r < o; r++) !e(t[r], r) !== s && i.push(t[r])
        return i
      },
      map: function (t, e, n) {
        var i,
          r,
          s = 0,
          a = []
        if (x(t)) for (i = t.length; s < i; s++) null != (r = e(t[s], s, n)) && a.push(r)
        else for (s in t) null != (r = e(t[s], s, n)) && a.push(r)
        return o(a)
      },
      guid: 1,
      support: h,
    }),
    'function' == typeof Symbol && (_.fn[Symbol.iterator] = n[Symbol.iterator]),
    _.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function (t, e) {
      u['[object ' + e + ']'] = e.toLowerCase()
    })
  var E = (function (t) {
    var e,
      n,
      i,
      r,
      o,
      s,
      a,
      u,
      l,
      c,
      f,
      d,
      h,
      p,
      m,
      g,
      v,
      y,
      b,
      w = 'sizzle' + 1 * new Date(),
      _ = t.document,
      x = 0,
      E = 0,
      T = ut(),
      S = ut(),
      C = ut(),
      A = ut(),
      k = function (t, e) {
        return t === e && (f = !0), 0
      },
      O = {}.hasOwnProperty,
      D = [],
      N = D.pop,
      j = D.push,
      I = D.push,
      P = D.slice,
      L = function (t, e) {
        for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n
        return -1
      },
      H = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      M = '[\\x20\\t\\r\\n\\f]',
      q = '(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
      R = '\\[[\\x20\\t\\r\\n\\f]*(' + q + ')(?:' + M + '*([*^$|!~]?=)' + M + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + q + '))|)' + M + '*\\]',
      W = ':(' + q + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + R + ')*)|.*)\\)|)',
      F = new RegExp(M + '+', 'g'),
      z = new RegExp('^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$', 'g'),
      B = new RegExp('^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*'),
      U = new RegExp('^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*'),
      $ = new RegExp(M + '|>'),
      Q = new RegExp(W),
      V = new RegExp('^' + q + '$'),
      K = {
        ID: new RegExp('^#(' + q + ')'),
        CLASS: new RegExp('^\\.(' + q + ')'),
        TAG: new RegExp('^(' + q + '|[*])'),
        ATTR: new RegExp('^' + R),
        PSEUDO: new RegExp('^' + W),
        CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)', 'i'),
        bool: new RegExp('^(?:' + H + ')$', 'i'),
        needsContext: new RegExp('^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)', 'i'),
      },
      Y = /HTML$/i,
      X = /^(?:input|select|textarea|button)$/i,
      G = /^h\d$/i,
      J = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      tt = /[+~]/,
      et = new RegExp('\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])', 'g'),
      nt = function (t, e) {
        var n = '0x' + t.slice(1) - 65536
        return e || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
      },
      it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      rt = function (t, e) {
        return e ? ('\0' === t ? 'ï¿½' : t.slice(0, -1) + '\\' + t.charCodeAt(t.length - 1).toString(16) + ' ') : '\\' + t
      },
      ot = function () {
        d()
      },
      st = wt(
        function (t) {
          return !0 === t.disabled && 'fieldset' === t.nodeName.toLowerCase()
        },
        { dir: 'parentNode', next: 'legend' },
      )
    try {
      I.apply((D = P.call(_.childNodes)), _.childNodes), D[_.childNodes.length].nodeType
    } catch (t) {
      I = {
        apply: D.length
          ? function (t, e) {
              j.apply(t, P.call(e))
            }
          : function (t, e) {
              for (var n = t.length, i = 0; (t[n++] = e[i++]); );
              t.length = n - 1
            },
      }
    }
    function at(t, e, i, r) {
      var o,
        a,
        l,
        c,
        f,
        p,
        v,
        y = e && e.ownerDocument,
        _ = e ? e.nodeType : 9
      if (((i = i || []), 'string' != typeof t || !t || (1 !== _ && 9 !== _ && 11 !== _))) return i
      if (!r && (d(e), (e = e || h), m)) {
        if (11 !== _ && (f = Z.exec(t)))
          if ((o = f[1])) {
            if (9 === _) {
              if (!(l = e.getElementById(o))) return i
              if (l.id === o) return i.push(l), i
            } else if (y && (l = y.getElementById(o)) && b(e, l) && l.id === o) return i.push(l), i
          } else {
            if (f[2]) return I.apply(i, e.getElementsByTagName(t)), i
            if ((o = f[3]) && n.getElementsByClassName && e.getElementsByClassName) return I.apply(i, e.getElementsByClassName(o)), i
          }
        if (n.qsa && !A[t + ' '] && (!g || !g.test(t)) && (1 !== _ || 'object' !== e.nodeName.toLowerCase())) {
          if (((v = t), (y = e), 1 === _ && ($.test(t) || U.test(t)))) {
            for (((y = (tt.test(t) && vt(e.parentNode)) || e) === e && n.scope) || ((c = e.getAttribute('id')) ? (c = c.replace(it, rt)) : e.setAttribute('id', (c = w))), a = (p = s(t)).length; a--; ) p[a] = (c ? '#' + c : ':scope') + ' ' + bt(p[a])
            v = p.join(',')
          }
          try {
            return I.apply(i, y.querySelectorAll(v)), i
          } catch (e) {
            A(t, !0)
          } finally {
            c === w && e.removeAttribute('id')
          }
        }
      }
      return u(t.replace(z, '$1'), e, i, r)
    }
    function ut() {
      var t = []
      return function e(n, r) {
        return t.push(n + ' ') > i.cacheLength && delete e[t.shift()], (e[n + ' '] = r)
      }
    }
    function lt(t) {
      return (t[w] = !0), t
    }
    function ct(t) {
      var e = h.createElement('fieldset')
      try {
        return !!t(e)
      } catch (t) {
        return !1
      } finally {
        e.parentNode && e.parentNode.removeChild(e), (e = null)
      }
    }
    function ft(t, e) {
      for (var n = t.split('|'), r = n.length; r--; ) i.attrHandle[n[r]] = e
    }
    function dt(t, e) {
      var n = e && t,
        i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex
      if (i) return i
      if (n) for (; (n = n.nextSibling); ) if (n === e) return -1
      return t ? 1 : -1
    }
    function ht(t) {
      return function (e) {
        return 'input' === e.nodeName.toLowerCase() && e.type === t
      }
    }
    function pt(t) {
      return function (e) {
        var n = e.nodeName.toLowerCase()
        return ('input' === n || 'button' === n) && e.type === t
      }
    }
    function mt(t) {
      return function (e) {
        return 'form' in e ? (e.parentNode && !1 === e.disabled ? ('label' in e ? ('label' in e.parentNode ? e.parentNode.disabled === t : e.disabled === t) : e.isDisabled === t || (e.isDisabled !== !t && st(e) === t)) : e.disabled === t) : 'label' in e && e.disabled === t
      }
    }
    function gt(t) {
      return lt(function (e) {
        return (
          (e = +e),
          lt(function (n, i) {
            for (var r, o = t([], n.length, e), s = o.length; s--; ) n[(r = o[s])] && (n[r] = !(i[r] = n[r]))
          })
        )
      })
    }
    function vt(t) {
      return t && void 0 !== t.getElementsByTagName && t
    }
    for (e in ((n = at.support = {}),
    (o = at.isXML =
      function (t) {
        var e = t.namespaceURI,
          n = (t.ownerDocument || t).documentElement
        return !Y.test(e || (n && n.nodeName) || 'HTML')
      }),
    (d = at.setDocument =
      function (t) {
        var e,
          r,
          s = t ? t.ownerDocument || t : _
        return s != h && 9 === s.nodeType && s.documentElement
          ? ((p = (h = s).documentElement),
            (m = !o(h)),
            _ != h && (r = h.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener('unload', ot, !1) : r.attachEvent && r.attachEvent('onunload', ot)),
            (n.scope = ct(function (t) {
              return p.appendChild(t).appendChild(h.createElement('div')), void 0 !== t.querySelectorAll && !t.querySelectorAll(':scope fieldset div').length
            })),
            (n.attributes = ct(function (t) {
              return (t.className = 'i'), !t.getAttribute('className')
            })),
            (n.getElementsByTagName = ct(function (t) {
              return t.appendChild(h.createComment('')), !t.getElementsByTagName('*').length
            })),
            (n.getElementsByClassName = J.test(h.getElementsByClassName)),
            (n.getById = ct(function (t) {
              return (p.appendChild(t).id = w), !h.getElementsByName || !h.getElementsByName(w).length
            })),
            n.getById
              ? ((i.filter.ID = function (t) {
                  var e = t.replace(et, nt)
                  return function (t) {
                    return t.getAttribute('id') === e
                  }
                }),
                (i.find.ID = function (t, e) {
                  if (void 0 !== e.getElementById && m) {
                    var n = e.getElementById(t)
                    return n ? [n] : []
                  }
                }))
              : ((i.filter.ID = function (t) {
                  var e = t.replace(et, nt)
                  return function (t) {
                    var n = void 0 !== t.getAttributeNode && t.getAttributeNode('id')
                    return n && n.value === e
                  }
                }),
                (i.find.ID = function (t, e) {
                  if (void 0 !== e.getElementById && m) {
                    var n,
                      i,
                      r,
                      o = e.getElementById(t)
                    if (o) {
                      if ((n = o.getAttributeNode('id')) && n.value === t) return [o]
                      for (r = e.getElementsByName(t), i = 0; (o = r[i++]); ) if ((n = o.getAttributeNode('id')) && n.value === t) return [o]
                    }
                    return []
                  }
                })),
            (i.find.TAG = n.getElementsByTagName
              ? function (t, e) {
                  return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
                }
              : function (t, e) {
                  var n,
                    i = [],
                    r = 0,
                    o = e.getElementsByTagName(t)
                  if ('*' === t) {
                    for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n)
                    return i
                  }
                  return o
                }),
            (i.find.CLASS =
              n.getElementsByClassName &&
              function (t, e) {
                if (void 0 !== e.getElementsByClassName && m) return e.getElementsByClassName(t)
              }),
            (v = []),
            (g = []),
            (n.qsa = J.test(h.querySelectorAll)) &&
              (ct(function (t) {
                var e
                ;(p.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  t.querySelectorAll("[msallowcapture^='']").length && g.push('[*^$]=[\\x20\\t\\r\\n\\f]*(?:\'\'|"")'),
                  t.querySelectorAll('[selected]').length || g.push('\\[[\\x20\\t\\r\\n\\f]*(?:value|' + H + ')'),
                  t.querySelectorAll('[id~=' + w + '-]').length || g.push('~='),
                  (e = h.createElement('input')).setAttribute('name', ''),
                  t.appendChild(e),
                  t.querySelectorAll("[name='']").length || g.push('\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:\'\'|"")'),
                  t.querySelectorAll(':checked').length || g.push(':checked'),
                  t.querySelectorAll('a#' + w + '+*').length || g.push('.#.+[+~]'),
                  t.querySelectorAll('\\\f'),
                  g.push('[\\r\\n\\f]')
              }),
              ct(function (t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"
                var e = h.createElement('input')
                e.setAttribute('type', 'hidden'),
                  t.appendChild(e).setAttribute('name', 'D'),
                  t.querySelectorAll('[name=d]').length && g.push('name[\\x20\\t\\r\\n\\f]*[*^$|!~]?='),
                  2 !== t.querySelectorAll(':enabled').length && g.push(':enabled', ':disabled'),
                  (p.appendChild(t).disabled = !0),
                  2 !== t.querySelectorAll(':disabled').length && g.push(':enabled', ':disabled'),
                  t.querySelectorAll('*,:x'),
                  g.push(',.*:')
              })),
            (n.matchesSelector = J.test((y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector))) &&
              ct(function (t) {
                ;(n.disconnectedMatch = y.call(t, '*')), y.call(t, "[s!='']:x"), v.push('!=', W)
              }),
            (g = g.length && new RegExp(g.join('|'))),
            (v = v.length && new RegExp(v.join('|'))),
            (e = J.test(p.compareDocumentPosition)),
            (b =
              e || J.test(p.contains)
                ? function (t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                      i = e && e.parentNode
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                  }
                : function (t, e) {
                    if (e) for (; (e = e.parentNode); ) if (e === t) return !0
                    return !1
                  }),
            (k = e
              ? function (t, e) {
                  if (t === e) return (f = !0), 0
                  var i = !t.compareDocumentPosition - !e.compareDocumentPosition
                  return (
                    i ||
                    (1 & (i = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || (!n.sortDetached && e.compareDocumentPosition(t) === i)
                      ? t == h || (t.ownerDocument == _ && b(_, t))
                        ? -1
                        : e == h || (e.ownerDocument == _ && b(_, e))
                        ? 1
                        : c
                        ? L(c, t) - L(c, e)
                        : 0
                      : 4 & i
                      ? -1
                      : 1)
                  )
                }
              : function (t, e) {
                  if (t === e) return (f = !0), 0
                  var n,
                    i = 0,
                    r = t.parentNode,
                    o = e.parentNode,
                    s = [t],
                    a = [e]
                  if (!r || !o) return t == h ? -1 : e == h ? 1 : r ? -1 : o ? 1 : c ? L(c, t) - L(c, e) : 0
                  if (r === o) return dt(t, e)
                  for (n = t; (n = n.parentNode); ) s.unshift(n)
                  for (n = e; (n = n.parentNode); ) a.unshift(n)
                  for (; s[i] === a[i]; ) i++
                  return i ? dt(s[i], a[i]) : s[i] == _ ? -1 : a[i] == _ ? 1 : 0
                }),
            h)
          : h
      }),
    (at.matches = function (t, e) {
      return at(t, null, null, e)
    }),
    (at.matchesSelector = function (t, e) {
      if ((d(t), n.matchesSelector && m && !A[e + ' '] && (!v || !v.test(e)) && (!g || !g.test(e))))
        try {
          var i = y.call(t, e)
          if (i || n.disconnectedMatch || (t.document && 11 !== t.document.nodeType)) return i
        } catch (t) {
          A(e, !0)
        }
      return at(e, h, null, [t]).length > 0
    }),
    (at.contains = function (t, e) {
      return (t.ownerDocument || t) != h && d(t), b(t, e)
    }),
    (at.attr = function (t, e) {
      ;(t.ownerDocument || t) != h && d(t)
      var r = i.attrHandle[e.toLowerCase()],
        o = r && O.call(i.attrHandle, e.toLowerCase()) ? r(t, e, !m) : void 0
      return void 0 !== o ? o : n.attributes || !m ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
    }),
    (at.escape = function (t) {
      return (t + '').replace(it, rt)
    }),
    (at.error = function (t) {
      throw new Error('Syntax error, unrecognized expression: ' + t)
    }),
    (at.uniqueSort = function (t) {
      var e,
        i = [],
        r = 0,
        o = 0
      if (((f = !n.detectDuplicates), (c = !n.sortStable && t.slice(0)), t.sort(k), f)) {
        for (; (e = t[o++]); ) e === t[o] && (r = i.push(o))
        for (; r--; ) t.splice(i[r], 1)
      }
      return (c = null), t
    }),
    (r = at.getText =
      function (t) {
        var e,
          n = '',
          i = 0,
          o = t.nodeType
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ('string' == typeof t.textContent) return t.textContent
            for (t = t.firstChild; t; t = t.nextSibling) n += r(t)
          } else if (3 === o || 4 === o) return t.nodeValue
        } else for (; (e = t[i++]); ) n += r(e)
        return n
      }),
    ((i = at.selectors =
      {
        cacheLength: 50,
        createPseudo: lt,
        match: K,
        attrHandle: {},
        find: {},
        relative: { '>': { dir: 'parentNode', first: !0 }, ' ': { dir: 'parentNode' }, '+': { dir: 'previousSibling', first: !0 }, '~': { dir: 'previousSibling' } },
        preFilter: {
          ATTR: function (t) {
            return (t[1] = t[1].replace(et, nt)), (t[3] = (t[3] || t[4] || t[5] || '').replace(et, nt)), '~=' === t[2] && (t[3] = ' ' + t[3] + ' '), t.slice(0, 4)
          },
          CHILD: function (t) {
            return (t[1] = t[1].toLowerCase()), 'nth' === t[1].slice(0, 3) ? (t[3] || at.error(t[0]), (t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ('even' === t[3] || 'odd' === t[3]))), (t[5] = +(t[7] + t[8] || 'odd' === t[3]))) : t[3] && at.error(t[0]), t
          },
          PSEUDO: function (t) {
            var e,
              n = !t[6] && t[2]
            return K.CHILD.test(t[0]) ? null : (t[3] ? (t[2] = t[4] || t[5] || '') : n && Q.test(n) && (e = s(n, !0)) && (e = n.indexOf(')', n.length - e) - n.length) && ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))), t.slice(0, 3))
          },
        },
        filter: {
          TAG: function (t) {
            var e = t.replace(et, nt).toLowerCase()
            return '*' === t
              ? function () {
                  return !0
                }
              : function (t) {
                  return t.nodeName && t.nodeName.toLowerCase() === e
                }
          },
          CLASS: function (t) {
            var e = T[t + ' ']
            return (
              e ||
              ((e = new RegExp('(^|[\\x20\\t\\r\\n\\f])' + t + '(' + M + '|$)')) &&
                T(t, function (t) {
                  return e.test(('string' == typeof t.className && t.className) || (void 0 !== t.getAttribute && t.getAttribute('class')) || '')
                }))
            )
          },
          ATTR: function (t, e, n) {
            return function (i) {
              var r = at.attr(i, t)
              return null == r
                ? '!=' === e
                : !e ||
                    ((r += ''),
                    '=' === e
                      ? r === n
                      : '!=' === e
                      ? r !== n
                      : '^=' === e
                      ? n && 0 === r.indexOf(n)
                      : '*=' === e
                      ? n && r.indexOf(n) > -1
                      : '$=' === e
                      ? n && r.slice(-n.length) === n
                      : '~=' === e
                      ? (' ' + r.replace(F, ' ') + ' ').indexOf(n) > -1
                      : '|=' === e && (r === n || r.slice(0, n.length + 1) === n + '-'))
            }
          },
          CHILD: function (t, e, n, i, r) {
            var o = 'nth' !== t.slice(0, 3),
              s = 'last' !== t.slice(-4),
              a = 'of-type' === e
            return 1 === i && 0 === r
              ? function (t) {
                  return !!t.parentNode
                }
              : function (e, n, u) {
                  var l,
                    c,
                    f,
                    d,
                    h,
                    p,
                    m = o !== s ? 'nextSibling' : 'previousSibling',
                    g = e.parentNode,
                    v = a && e.nodeName.toLowerCase(),
                    y = !u && !a,
                    b = !1
                  if (g) {
                    if (o) {
                      for (; m; ) {
                        for (d = e; (d = d[m]); ) if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1
                        p = m = 'only' === t && !p && 'nextSibling'
                      }
                      return !0
                    }
                    if (((p = [s ? g.firstChild : g.lastChild]), s && y)) {
                      for (b = (h = (l = (c = (f = (d = g)[w] || (d[w] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] || [])[0] === x && l[1]) && l[2], d = h && g.childNodes[h]; (d = (++h && d && d[m]) || (b = h = 0) || p.pop()); )
                        if (1 === d.nodeType && ++b && d === e) {
                          c[t] = [x, h, b]
                          break
                        }
                    } else if ((y && (b = h = (l = (c = (f = (d = e)[w] || (d[w] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] || [])[0] === x && l[1]), !1 === b))
                      for (; (d = (++h && d && d[m]) || (b = h = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((c = (f = d[w] || (d[w] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[t] = [x, b]), d !== e)); );
                    return (b -= r) === i || (b % i == 0 && b / i >= 0)
                  }
                }
          },
          PSEUDO: function (t, e) {
            var n,
              r = i.pseudos[t] || i.setFilters[t.toLowerCase()] || at.error('unsupported pseudo: ' + t)
            return r[w]
              ? r(e)
              : r.length > 1
              ? ((n = [t, t, '', e]),
                i.setFilters.hasOwnProperty(t.toLowerCase())
                  ? lt(function (t, n) {
                      for (var i, o = r(t, e), s = o.length; s--; ) t[(i = L(t, o[s]))] = !(n[i] = o[s])
                    })
                  : function (t) {
                      return r(t, 0, n)
                    })
              : r
          },
        },
        pseudos: {
          not: lt(function (t) {
            var e = [],
              n = [],
              i = a(t.replace(z, '$1'))
            return i[w]
              ? lt(function (t, e, n, r) {
                  for (var o, s = i(t, null, r, []), a = t.length; a--; ) (o = s[a]) && (t[a] = !(e[a] = o))
                })
              : function (t, r, o) {
                  return (e[0] = t), i(e, null, o, n), (e[0] = null), !n.pop()
                }
          }),
          has: lt(function (t) {
            return function (e) {
              return at(t, e).length > 0
            }
          }),
          contains: lt(function (t) {
            return (
              (t = t.replace(et, nt)),
              function (e) {
                return (e.textContent || r(e)).indexOf(t) > -1
              }
            )
          }),
          lang: lt(function (t) {
            return (
              V.test(t || '') || at.error('unsupported lang: ' + t),
              (t = t.replace(et, nt).toLowerCase()),
              function (e) {
                var n
                do {
                  if ((n = m ? e.lang : e.getAttribute('xml:lang') || e.getAttribute('lang'))) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + '-')
                } while ((e = e.parentNode) && 1 === e.nodeType)
                return !1
              }
            )
          }),
          target: function (e) {
            var n = t.location && t.location.hash
            return n && n.slice(1) === e.id
          },
          root: function (t) {
            return t === p
          },
          focus: function (t) {
            return t === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
          },
          enabled: mt(!1),
          disabled: mt(!0),
          checked: function (t) {
            var e = t.nodeName.toLowerCase()
            return ('input' === e && !!t.checked) || ('option' === e && !!t.selected)
          },
          selected: function (t) {
            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
          },
          empty: function (t) {
            for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1
            return !0
          },
          parent: function (t) {
            return !i.pseudos.empty(t)
          },
          header: function (t) {
            return G.test(t.nodeName)
          },
          input: function (t) {
            return X.test(t.nodeName)
          },
          button: function (t) {
            var e = t.nodeName.toLowerCase()
            return ('input' === e && 'button' === t.type) || 'button' === e
          },
          text: function (t) {
            var e
            return 'input' === t.nodeName.toLowerCase() && 'text' === t.type && (null == (e = t.getAttribute('type')) || 'text' === e.toLowerCase())
          },
          first: gt(function () {
            return [0]
          }),
          last: gt(function (t, e) {
            return [e - 1]
          }),
          eq: gt(function (t, e, n) {
            return [n < 0 ? n + e : n]
          }),
          even: gt(function (t, e) {
            for (var n = 0; n < e; n += 2) t.push(n)
            return t
          }),
          odd: gt(function (t, e) {
            for (var n = 1; n < e; n += 2) t.push(n)
            return t
          }),
          lt: gt(function (t, e, n) {
            for (var i = n < 0 ? n + e : n > e ? e : n; --i >= 0; ) t.push(i)
            return t
          }),
          gt: gt(function (t, e, n) {
            for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i)
            return t
          }),
        },
      }).pseudos.nth = i.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      i.pseudos[e] = ht(e)
    for (e in { submit: !0, reset: !0 }) i.pseudos[e] = pt(e)
    function yt() {}
    function bt(t) {
      for (var e = 0, n = t.length, i = ''; e < n; e++) i += t[e].value
      return i
    }
    function wt(t, e, n) {
      var i = e.dir,
        r = e.next,
        o = r || i,
        s = n && 'parentNode' === o,
        a = E++
      return e.first
        ? function (e, n, r) {
            for (; (e = e[i]); ) if (1 === e.nodeType || s) return t(e, n, r)
            return !1
          }
        : function (e, n, u) {
            var l,
              c,
              f,
              d = [x, a]
            if (u) {
              for (; (e = e[i]); ) if ((1 === e.nodeType || s) && t(e, n, u)) return !0
            } else
              for (; (e = e[i]); )
                if (1 === e.nodeType || s)
                  if (((c = (f = e[w] || (e[w] = {}))[e.uniqueID] || (f[e.uniqueID] = {})), r && r === e.nodeName.toLowerCase())) e = e[i] || e
                  else {
                    if ((l = c[o]) && l[0] === x && l[1] === a) return (d[2] = l[2])
                    if (((c[o] = d), (d[2] = t(e, n, u)))) return !0
                  }
            return !1
          }
    }
    function _t(t) {
      return t.length > 1
        ? function (e, n, i) {
            for (var r = t.length; r--; ) if (!t[r](e, n, i)) return !1
            return !0
          }
        : t[0]
    }
    function xt(t, e, n, i, r) {
      for (var o, s = [], a = 0, u = t.length, l = null != e; a < u; a++) (o = t[a]) && ((n && !n(o, i, r)) || (s.push(o), l && e.push(a)))
      return s
    }
    function Et(t, e, n, i, r, o) {
      return (
        i && !i[w] && (i = Et(i)),
        r && !r[w] && (r = Et(r, o)),
        lt(function (o, s, a, u) {
          var l,
            c,
            f,
            d = [],
            h = [],
            p = s.length,
            m =
              o ||
              (function (t, e, n) {
                for (var i = 0, r = e.length; i < r; i++) at(t, e[i], n)
                return n
              })(e || '*', a.nodeType ? [a] : a, []),
            g = !t || (!o && e) ? m : xt(m, d, t, a, u),
            v = n ? (r || (o ? t : p || i) ? [] : s) : g
          if ((n && n(g, v, a, u), i)) for (l = xt(v, h), i(l, [], a, u), c = l.length; c--; ) (f = l[c]) && (v[h[c]] = !(g[h[c]] = f))
          if (o) {
            if (r || t) {
              if (r) {
                for (l = [], c = v.length; c--; ) (f = v[c]) && l.push((g[c] = f))
                r(null, (v = []), l, u)
              }
              for (c = v.length; c--; ) (f = v[c]) && (l = r ? L(o, f) : d[c]) > -1 && (o[l] = !(s[l] = f))
            }
          } else (v = xt(v === s ? v.splice(p, v.length) : v)), r ? r(null, s, v, u) : I.apply(s, v)
        })
      )
    }
    function Tt(t) {
      for (
        var e,
          n,
          r,
          o = t.length,
          s = i.relative[t[0].type],
          a = s || i.relative[' '],
          u = s ? 1 : 0,
          c = wt(
            function (t) {
              return t === e
            },
            a,
            !0,
          ),
          f = wt(
            function (t) {
              return L(e, t) > -1
            },
            a,
            !0,
          ),
          d = [
            function (t, n, i) {
              var r = (!s && (i || n !== l)) || ((e = n).nodeType ? c(t, n, i) : f(t, n, i))
              return (e = null), r
            },
          ];
        u < o;
        u++
      )
        if ((n = i.relative[t[u].type])) d = [wt(_t(d), n)]
        else {
          if ((n = i.filter[t[u].type].apply(null, t[u].matches))[w]) {
            for (r = ++u; r < o && !i.relative[t[r].type]; r++);
            return Et(u > 1 && _t(d), u > 1 && bt(t.slice(0, u - 1).concat({ value: ' ' === t[u - 2].type ? '*' : '' })).replace(z, '$1'), n, u < r && Tt(t.slice(u, r)), r < o && Tt((t = t.slice(r))), r < o && bt(t))
          }
          d.push(n)
        }
      return _t(d)
    }
    return (
      (yt.prototype = i.filters = i.pseudos),
      (i.setFilters = new yt()),
      (s = at.tokenize =
        function (t, e) {
          var n,
            r,
            o,
            s,
            a,
            u,
            l,
            c = S[t + ' ']
          if (c) return e ? 0 : c.slice(0)
          for (a = t, u = [], l = i.preFilter; a; ) {
            for (s in ((n && !(r = B.exec(a))) || (r && (a = a.slice(r[0].length) || a), u.push((o = []))), (n = !1), (r = U.exec(a)) && ((n = r.shift()), o.push({ value: n, type: r[0].replace(z, ' ') }), (a = a.slice(n.length))), i.filter))
              !(r = K[s].exec(a)) || (l[s] && !(r = l[s](r))) || ((n = r.shift()), o.push({ value: n, type: s, matches: r }), (a = a.slice(n.length)))
            if (!n) break
          }
          return e ? a.length : a ? at.error(t) : S(t, u).slice(0)
        }),
      (a = at.compile =
        function (t, e) {
          var n,
            r = [],
            o = [],
            a = C[t + ' ']
          if (!a) {
            for (e || (e = s(t)), n = e.length; n--; ) (a = Tt(e[n]))[w] ? r.push(a) : o.push(a)
            ;(a = C(
              t,
              (function (t, e) {
                var n = e.length > 0,
                  r = t.length > 0,
                  o = function (o, s, a, u, c) {
                    var f,
                      p,
                      g,
                      v = 0,
                      y = '0',
                      b = o && [],
                      w = [],
                      _ = l,
                      E = o || (r && i.find.TAG('*', c)),
                      T = (x += null == _ ? 1 : Math.random() || 0.1),
                      S = E.length
                    for (c && (l = s == h || s || c); y !== S && null != (f = E[y]); y++) {
                      if (r && f) {
                        for (p = 0, s || f.ownerDocument == h || (d(f), (a = !m)); (g = t[p++]); )
                          if (g(f, s || h, a)) {
                            u.push(f)
                            break
                          }
                        c && (x = T)
                      }
                      n && ((f = !g && f) && v--, o && b.push(f))
                    }
                    if (((v += y), n && y !== v)) {
                      for (p = 0; (g = e[p++]); ) g(b, w, s, a)
                      if (o) {
                        if (v > 0) for (; y--; ) b[y] || w[y] || (w[y] = N.call(u))
                        w = xt(w)
                      }
                      I.apply(u, w), c && !o && w.length > 0 && v + e.length > 1 && at.uniqueSort(u)
                    }
                    return c && ((x = T), (l = _)), b
                  }
                return n ? lt(o) : o
              })(o, r),
            )).selector = t
          }
          return a
        }),
      (u = at.select =
        function (t, e, n, r) {
          var o,
            u,
            l,
            c,
            f,
            d = 'function' == typeof t && t,
            h = !r && s((t = d.selector || t))
          if (((n = n || []), 1 === h.length)) {
            if ((u = h[0] = h[0].slice(0)).length > 2 && 'ID' === (l = u[0]).type && 9 === e.nodeType && m && i.relative[u[1].type]) {
              if (!(e = (i.find.ID(l.matches[0].replace(et, nt), e) || [])[0])) return n
              d && (e = e.parentNode), (t = t.slice(u.shift().value.length))
            }
            for (o = K.needsContext.test(t) ? 0 : u.length; o-- && ((l = u[o]), !i.relative[(c = l.type)]); )
              if ((f = i.find[c]) && (r = f(l.matches[0].replace(et, nt), (tt.test(u[0].type) && vt(e.parentNode)) || e))) {
                if ((u.splice(o, 1), !(t = r.length && bt(u)))) return I.apply(n, r), n
                break
              }
          }
          return (d || a(t, h))(r, e, !m, n, !e || (tt.test(t) && vt(e.parentNode)) || e), n
        }),
      (n.sortStable = w.split('').sort(k).join('') === w),
      (n.detectDuplicates = !!f),
      d(),
      (n.sortDetached = ct(function (t) {
        return 1 & t.compareDocumentPosition(h.createElement('fieldset'))
      })),
      ct(function (t) {
        return (t.innerHTML = "<a href='#'></a>"), '#' === t.firstChild.getAttribute('href')
      }) ||
        ft('type|href|height|width', function (t, e, n) {
          if (!n) return t.getAttribute(e, 'type' === e.toLowerCase() ? 1 : 2)
        }),
      (n.attributes &&
        ct(function (t) {
          return (t.innerHTML = '<input/>'), t.firstChild.setAttribute('value', ''), '' === t.firstChild.getAttribute('value')
        })) ||
        ft('value', function (t, e, n) {
          if (!n && 'input' === t.nodeName.toLowerCase()) return t.defaultValue
        }),
      ct(function (t) {
        return null == t.getAttribute('disabled')
      }) ||
        ft(H, function (t, e, n) {
          var i
          if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }),
      at
    )
  })(t)
  ;(_.find = E), (_.expr = E.selectors), (_.expr[':'] = _.expr.pseudos), (_.uniqueSort = _.unique = E.uniqueSort), (_.text = E.getText), (_.isXMLDoc = E.isXML), (_.contains = E.contains), (_.escapeSelector = E.escape)
  var T = function (t, e, n) {
      for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
        if (1 === t.nodeType) {
          if (r && _(t).is(n)) break
          i.push(t)
        }
      return i
    },
    S = function (t, e) {
      for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t)
      return n
    },
    C = _.expr.match.needsContext
  function A(t, e) {
    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
  }
  var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
  function O(t, e, n) {
    return p(e)
      ? _.grep(t, function (t, i) {
          return !!e.call(t, i, t) !== n
        })
      : e.nodeType
      ? _.grep(t, function (t) {
          return (t === e) !== n
        })
      : 'string' != typeof e
      ? _.grep(t, function (t) {
          return a.call(e, t) > -1 !== n
        })
      : _.filter(e, t, n)
  }
  ;(_.filter = function (t, e, n) {
    var i = e[0]
    return (
      n && (t = ':not(' + t + ')'),
      1 === e.length && 1 === i.nodeType
        ? _.find.matchesSelector(i, t)
          ? [i]
          : []
        : _.find.matches(
            t,
            _.grep(e, function (t) {
              return 1 === t.nodeType
            }),
          )
    )
  }),
    _.fn.extend({
      find: function (t) {
        var e,
          n,
          i = this.length,
          r = this
        if ('string' != typeof t)
          return this.pushStack(
            _(t).filter(function () {
              for (e = 0; e < i; e++) if (_.contains(r[e], this)) return !0
            }),
          )
        for (n = this.pushStack([]), e = 0; e < i; e++) _.find(t, r[e], n)
        return i > 1 ? _.uniqueSort(n) : n
      },
      filter: function (t) {
        return this.pushStack(O(this, t || [], !1))
      },
      not: function (t) {
        return this.pushStack(O(this, t || [], !0))
      },
      is: function (t) {
        return !!O(this, 'string' == typeof t && C.test(t) ? _(t) : t || [], !1).length
      },
    })
  var D,
    N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/
  ;((_.fn.init = function (t, e, n) {
    var i, r
    if (!t) return this
    if (((n = n || D), 'string' == typeof t)) {
      if (!(i = '<' === t[0] && '>' === t[t.length - 1] && t.length >= 3 ? [null, t, null] : N.exec(t)) || (!i[1] && e)) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t)
      if (i[1]) {
        if (((e = e instanceof _ ? e[0] : e), _.merge(this, _.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : g, !0)), k.test(i[1]) && _.isPlainObject(e))) for (i in e) p(this[i]) ? this[i](e[i]) : this.attr(i, e[i])
        return this
      }
      return (r = g.getElementById(i[2])) && ((this[0] = r), (this.length = 1)), this
    }
    return t.nodeType ? ((this[0] = t), (this.length = 1), this) : p(t) ? (void 0 !== n.ready ? n.ready(t) : t(_)) : _.makeArray(t, this)
  }).prototype = _.fn),
    (D = _(g))
  var j = /^(?:parents|prev(?:Until|All))/,
    I = { children: !0, contents: !0, next: !0, prev: !0 }
  function P(t, e) {
    for (; (t = t[e]) && 1 !== t.nodeType; );
    return t
  }
  _.fn.extend({
    has: function (t) {
      var e = _(t, this),
        n = e.length
      return this.filter(function () {
        for (var t = 0; t < n; t++) if (_.contains(this, e[t])) return !0
      })
    },
    closest: function (t, e) {
      var n,
        i = 0,
        r = this.length,
        o = [],
        s = 'string' != typeof t && _(t)
      if (!C.test(t))
        for (; i < r; i++)
          for (n = this[i]; n && n !== e; n = n.parentNode)
            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && _.find.matchesSelector(n, t))) {
              o.push(n)
              break
            }
      return this.pushStack(o.length > 1 ? _.uniqueSort(o) : o)
    },
    index: function (t) {
      return t ? ('string' == typeof t ? a.call(_(t), this[0]) : a.call(this, t.jquery ? t[0] : t)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function (t, e) {
      return this.pushStack(_.uniqueSort(_.merge(this.get(), _(t, e))))
    },
    addBack: function (t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    },
  }),
    _.each(
      {
        parent: function (t) {
          var e = t.parentNode
          return e && 11 !== e.nodeType ? e : null
        },
        parents: function (t) {
          return T(t, 'parentNode')
        },
        parentsUntil: function (t, e, n) {
          return T(t, 'parentNode', n)
        },
        next: function (t) {
          return P(t, 'nextSibling')
        },
        prev: function (t) {
          return P(t, 'previousSibling')
        },
        nextAll: function (t) {
          return T(t, 'nextSibling')
        },
        prevAll: function (t) {
          return T(t, 'previousSibling')
        },
        nextUntil: function (t, e, n) {
          return T(t, 'nextSibling', n)
        },
        prevUntil: function (t, e, n) {
          return T(t, 'previousSibling', n)
        },
        siblings: function (t) {
          return S((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
          return S(t.firstChild)
        },
        contents: function (t) {
          return null != t.contentDocument && i(t.contentDocument) ? t.contentDocument : (A(t, 'template') && (t = t.content || t), _.merge([], t.childNodes))
        },
      },
      function (t, e) {
        _.fn[t] = function (n, i) {
          var r = _.map(this, e, n)
          return 'Until' !== t.slice(-5) && (i = n), i && 'string' == typeof i && (r = _.filter(i, r)), this.length > 1 && (I[t] || _.uniqueSort(r), j.test(t) && r.reverse()), this.pushStack(r)
        }
      },
    )
  var L = /[^\x20\t\r\n\f]+/g
  function H(t) {
    return t
  }
  function M(t) {
    throw t
  }
  function q(t, e, n, i) {
    var r
    try {
      t && p((r = t.promise)) ? r.call(t).done(e).fail(n) : t && p((r = t.then)) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
    } catch (t) {
      n.apply(void 0, [t])
    }
  }
  ;(_.Callbacks = function (t) {
    t =
      'string' == typeof t
        ? (function (t) {
            var e = {}
            return (
              _.each(t.match(L) || [], function (t, n) {
                e[n] = !0
              }),
              e
            )
          })(t)
        : _.extend({}, t)
    var e,
      n,
      i,
      r,
      o = [],
      s = [],
      a = -1,
      u = function () {
        for (r = r || t.once, i = e = !0; s.length; a = -1) for (n = s.shift(); ++a < o.length; ) !1 === o[a].apply(n[0], n[1]) && t.stopOnFalse && ((a = o.length), (n = !1))
        t.memory || (n = !1), (e = !1), r && (o = n ? [] : '')
      },
      l = {
        add: function () {
          return (
            o &&
              (n && !e && ((a = o.length - 1), s.push(n)),
              (function e(n) {
                _.each(n, function (n, i) {
                  p(i) ? (t.unique && l.has(i)) || o.push(i) : i && i.length && 'string' !== b(i) && e(i)
                })
              })(arguments),
              n && !e && u()),
            this
          )
        },
        remove: function () {
          return (
            _.each(arguments, function (t, e) {
              for (var n; (n = _.inArray(e, o, n)) > -1; ) o.splice(n, 1), n <= a && a--
            }),
            this
          )
        },
        has: function (t) {
          return t ? _.inArray(t, o) > -1 : o.length > 0
        },
        empty: function () {
          return o && (o = []), this
        },
        disable: function () {
          return (r = s = []), (o = n = ''), this
        },
        disabled: function () {
          return !o
        },
        lock: function () {
          return (r = s = []), n || e || (o = n = ''), this
        },
        locked: function () {
          return !!r
        },
        fireWith: function (t, n) {
          return r || ((n = [t, (n = n || []).slice ? n.slice() : n]), s.push(n), e || u()), this
        },
        fire: function () {
          return l.fireWith(this, arguments), this
        },
        fired: function () {
          return !!i
        },
      }
    return l
  }),
    _.extend({
      Deferred: function (e) {
        var n = [
            ['notify', 'progress', _.Callbacks('memory'), _.Callbacks('memory'), 2],
            ['resolve', 'done', _.Callbacks('once memory'), _.Callbacks('once memory'), 0, 'resolved'],
            ['reject', 'fail', _.Callbacks('once memory'), _.Callbacks('once memory'), 1, 'rejected'],
          ],
          i = 'pending',
          r = {
            state: function () {
              return i
            },
            always: function () {
              return o.done(arguments).fail(arguments), this
            },
            catch: function (t) {
              return r.then(null, t)
            },
            pipe: function () {
              var t = arguments
              return _.Deferred(function (e) {
                _.each(n, function (n, i) {
                  var r = p(t[i[4]]) && t[i[4]]
                  o[i[1]](function () {
                    var t = r && r.apply(this, arguments)
                    t && p(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + 'With'](this, r ? [t] : arguments)
                  })
                }),
                  (t = null)
              }).promise()
            },
            then: function (e, i, r) {
              var o = 0
              function s(e, n, i, r) {
                return function () {
                  var a = this,
                    u = arguments,
                    l = function () {
                      var t, l
                      if (!(e < o)) {
                        if ((t = i.apply(a, u)) === n.promise()) throw new TypeError('Thenable self-resolution')
                        ;(l = t && ('object' == typeof t || 'function' == typeof t) && t.then), p(l) ? (r ? l.call(t, s(o, n, H, r), s(o, n, M, r)) : (o++, l.call(t, s(o, n, H, r), s(o, n, M, r), s(o, n, H, n.notifyWith)))) : (i !== H && ((a = void 0), (u = [t])), (r || n.resolveWith)(a, u))
                      }
                    },
                    c = r
                      ? l
                      : function () {
                          try {
                            l()
                          } catch (t) {
                            _.Deferred.exceptionHook && _.Deferred.exceptionHook(t, c.stackTrace), e + 1 >= o && (i !== M && ((a = void 0), (u = [t])), n.rejectWith(a, u))
                          }
                        }
                  e ? c() : (_.Deferred.getStackHook && (c.stackTrace = _.Deferred.getStackHook()), t.setTimeout(c))
                }
              }
              return _.Deferred(function (t) {
                n[0][3].add(s(0, t, p(r) ? r : H, t.notifyWith)), n[1][3].add(s(0, t, p(e) ? e : H)), n[2][3].add(s(0, t, p(i) ? i : M))
              }).promise()
            },
            promise: function (t) {
              return null != t ? _.extend(t, r) : r
            },
          },
          o = {}
        return (
          _.each(n, function (t, e) {
            var s = e[2],
              a = e[5]
            ;(r[e[1]] = s.add),
              a &&
                s.add(
                  function () {
                    i = a
                  },
                  n[3 - t][2].disable,
                  n[3 - t][3].disable,
                  n[0][2].lock,
                  n[0][3].lock,
                ),
              s.add(e[3].fire),
              (o[e[0]] = function () {
                return o[e[0] + 'With'](this === o ? void 0 : this, arguments), this
              }),
              (o[e[0] + 'With'] = s.fireWith)
          }),
          r.promise(o),
          e && e.call(o, o),
          o
        )
      },
      when: function (t) {
        var e = arguments.length,
          n = e,
          i = Array(n),
          o = r.call(arguments),
          s = _.Deferred(),
          a = function (t) {
            return function (n) {
              ;(i[t] = this), (o[t] = arguments.length > 1 ? r.call(arguments) : n), --e || s.resolveWith(i, o)
            }
          }
        if (e <= 1 && (q(t, s.done(a(n)).resolve, s.reject, !e), 'pending' === s.state() || p(o[n] && o[n].then))) return s.then()
        for (; n--; ) q(o[n], a(n), s.reject)
        return s.promise()
      },
    })
  var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
  ;(_.Deferred.exceptionHook = function (e, n) {
    t.console && t.console.warn && e && R.test(e.name) && t.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, n)
  }),
    (_.readyException = function (e) {
      t.setTimeout(function () {
        throw e
      })
    })
  var W = _.Deferred()
  function F() {
    g.removeEventListener('DOMContentLoaded', F), t.removeEventListener('load', F), _.ready()
  }
  ;(_.fn.ready = function (t) {
    return (
      W.then(t).catch(function (t) {
        _.readyException(t)
      }),
      this
    )
  }),
    _.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (t) {
        ;(!0 === t ? --_.readyWait : _.isReady) || ((_.isReady = !0), (!0 !== t && --_.readyWait > 0) || W.resolveWith(g, [_]))
      },
    }),
    (_.ready.then = W.then),
    'complete' === g.readyState || ('loading' !== g.readyState && !g.documentElement.doScroll) ? t.setTimeout(_.ready) : (g.addEventListener('DOMContentLoaded', F), t.addEventListener('load', F))
  var z = function (t, e, n, i, r, o, s) {
      var a = 0,
        u = t.length,
        l = null == n
      if ('object' === b(n)) for (a in ((r = !0), n)) z(t, e, a, n[a], !0, o, s)
      else if (
        void 0 !== i &&
        ((r = !0),
        p(i) || (s = !0),
        l &&
          (s
            ? (e.call(t, i), (e = null))
            : ((l = e),
              (e = function (t, e, n) {
                return l.call(_(t), n)
              }))),
        e)
      )
        for (; a < u; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)))
      return r ? t : l ? e.call(t) : u ? e(t[0], n) : o
    },
    B = /^-ms-/,
    U = /-([a-z])/g
  function $(t, e) {
    return e.toUpperCase()
  }
  function Q(t) {
    return t.replace(B, 'ms-').replace(U, $)
  }
  var V = function (t) {
    return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
  }
  function K() {
    this.expando = _.expando + K.uid++
  }
  ;(K.uid = 1),
    (K.prototype = {
      cache: function (t) {
        var e = t[this.expando]
        return e || ((e = {}), V(t) && (t.nodeType ? (t[this.expando] = e) : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))), e
      },
      set: function (t, e, n) {
        var i,
          r = this.cache(t)
        if ('string' == typeof e) r[Q(e)] = n
        else for (i in e) r[Q(i)] = e[i]
        return r
      },
      get: function (t, e) {
        return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Q(e)]
      },
      access: function (t, e, n) {
        return void 0 === e || (e && 'string' == typeof e && void 0 === n) ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
      },
      remove: function (t, e) {
        var n,
          i = t[this.expando]
        if (void 0 !== i) {
          if (void 0 !== e) {
            n = (e = Array.isArray(e) ? e.map(Q) : (e = Q(e)) in i ? [e] : e.match(L) || []).length
            for (; n--; ) delete i[e[n]]
          }
          ;(void 0 === e || _.isEmptyObject(i)) && (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando])
        }
      },
      hasData: function (t) {
        var e = t[this.expando]
        return void 0 !== e && !_.isEmptyObject(e)
      },
    })
  var Y = new K(),
    X = new K(),
    G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    J = /[A-Z]/g
  function Z(t, e, n) {
    var i
    if (void 0 === n && 1 === t.nodeType)
      if (((i = 'data-' + e.replace(J, '-$&').toLowerCase()), 'string' == typeof (n = t.getAttribute(i)))) {
        try {
          n = (function (t) {
            return 'true' === t || ('false' !== t && ('null' === t ? null : t === +t + '' ? +t : G.test(t) ? JSON.parse(t) : t))
          })(n)
        } catch (t) {}
        X.set(t, e, n)
      } else n = void 0
    return n
  }
  _.extend({
    hasData: function (t) {
      return X.hasData(t) || Y.hasData(t)
    },
    data: function (t, e, n) {
      return X.access(t, e, n)
    },
    removeData: function (t, e) {
      X.remove(t, e)
    },
    _data: function (t, e, n) {
      return Y.access(t, e, n)
    },
    _removeData: function (t, e) {
      Y.remove(t, e)
    },
  }),
    _.fn.extend({
      data: function (t, e) {
        var n,
          i,
          r,
          o = this[0],
          s = o && o.attributes
        if (void 0 === t) {
          if (this.length && ((r = X.get(o)), 1 === o.nodeType && !Y.get(o, 'hasDataAttrs'))) {
            for (n = s.length; n--; ) s[n] && 0 === (i = s[n].name).indexOf('data-') && ((i = Q(i.slice(5))), Z(o, i, r[i]))
            Y.set(o, 'hasDataAttrs', !0)
          }
          return r
        }
        return 'object' == typeof t
          ? this.each(function () {
              X.set(this, t)
            })
          : z(
              this,
              function (e) {
                var n
                if (o && void 0 === e) return void 0 !== (n = X.get(o, t)) || void 0 !== (n = Z(o, t)) ? n : void 0
                this.each(function () {
                  X.set(this, t, e)
                })
              },
              null,
              e,
              arguments.length > 1,
              null,
              !0,
            )
      },
      removeData: function (t) {
        return this.each(function () {
          X.remove(this, t)
        })
      },
    }),
    _.extend({
      queue: function (t, e, n) {
        var i
        if (t) return (e = (e || 'fx') + 'queue'), (i = Y.get(t, e)), n && (!i || Array.isArray(n) ? (i = Y.access(t, e, _.makeArray(n))) : i.push(n)), i || []
      },
      dequeue: function (t, e) {
        e = e || 'fx'
        var n = _.queue(t, e),
          i = n.length,
          r = n.shift(),
          o = _._queueHooks(t, e)
        'inprogress' === r && ((r = n.shift()), i--),
          r &&
            ('fx' === e && n.unshift('inprogress'),
            delete o.stop,
            r.call(
              t,
              function () {
                _.dequeue(t, e)
              },
              o,
            )),
          !i && o && o.empty.fire()
      },
      _queueHooks: function (t, e) {
        var n = e + 'queueHooks'
        return (
          Y.get(t, n) ||
          Y.access(t, n, {
            empty: _.Callbacks('once memory').add(function () {
              Y.remove(t, [e + 'queue', n])
            }),
          })
        )
      },
    }),
    _.fn.extend({
      queue: function (t, e) {
        var n = 2
        return (
          'string' != typeof t && ((e = t), (t = 'fx'), n--),
          arguments.length < n
            ? _.queue(this[0], t)
            : void 0 === e
            ? this
            : this.each(function () {
                var n = _.queue(this, t, e)
                _._queueHooks(this, t), 'fx' === t && 'inprogress' !== n[0] && _.dequeue(this, t)
              })
        )
      },
      dequeue: function (t) {
        return this.each(function () {
          _.dequeue(this, t)
        })
      },
      clearQueue: function (t) {
        return this.queue(t || 'fx', [])
      },
      promise: function (t, e) {
        var n,
          i = 1,
          r = _.Deferred(),
          o = this,
          s = this.length,
          a = function () {
            --i || r.resolveWith(o, [o])
          }
        for ('string' != typeof t && ((e = t), (t = void 0)), t = t || 'fx'; s--; ) (n = Y.get(o[s], t + 'queueHooks')) && n.empty && (i++, n.empty.add(a))
        return a(), r.promise(e)
      },
    })
  var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    et = new RegExp('^(?:([+-])=|)(' + tt + ')([a-z%]*)$', 'i'),
    nt = ['Top', 'Right', 'Bottom', 'Left'],
    it = g.documentElement,
    rt = function (t) {
      return _.contains(t.ownerDocument, t)
    },
    ot = { composed: !0 }
  it.getRootNode &&
    (rt = function (t) {
      return _.contains(t.ownerDocument, t) || t.getRootNode(ot) === t.ownerDocument
    })
  var st = function (t, e) {
    return 'none' === (t = e || t).style.display || ('' === t.style.display && rt(t) && 'none' === _.css(t, 'display'))
  }
  function at(t, e, n, i) {
    var r,
      o,
      s = 20,
      a = i
        ? function () {
            return i.cur()
          }
        : function () {
            return _.css(t, e, '')
          },
      u = a(),
      l = (n && n[3]) || (_.cssNumber[e] ? '' : 'px'),
      c = t.nodeType && (_.cssNumber[e] || ('px' !== l && +u)) && et.exec(_.css(t, e))
    if (c && c[3] !== l) {
      for (u /= 2, l = l || c[3], c = +u || 1; s--; ) _.style(t, e, c + l), (1 - o) * (1 - (o = a() / u || 0.5)) <= 0 && (s = 0), (c /= o)
      ;(c *= 2), _.style(t, e, c + l), (n = n || [])
    }
    return n && ((c = +c || +u || 0), (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = l), (i.start = c), (i.end = r))), r
  }
  var ut = {}
  function lt(t) {
    var e,
      n = t.ownerDocument,
      i = t.nodeName,
      r = ut[i]
    return r || ((e = n.body.appendChild(n.createElement(i))), (r = _.css(e, 'display')), e.parentNode.removeChild(e), 'none' === r && (r = 'block'), (ut[i] = r), r)
  }
  function ct(t, e) {
    for (var n, i, r = [], o = 0, s = t.length; o < s; o++)
      (i = t[o]).style && ((n = i.style.display), e ? ('none' === n && ((r[o] = Y.get(i, 'display') || null), r[o] || (i.style.display = '')), '' === i.style.display && st(i) && (r[o] = lt(i))) : 'none' !== n && ((r[o] = 'none'), Y.set(i, 'display', n)))
    for (o = 0; o < s; o++) null != r[o] && (t[o].style.display = r[o])
    return t
  }
  _.fn.extend({
    show: function () {
      return ct(this, !0)
    },
    hide: function () {
      return ct(this)
    },
    toggle: function (t) {
      return 'boolean' == typeof t
        ? t
          ? this.show()
          : this.hide()
        : this.each(function () {
            st(this) ? _(this).show() : _(this).hide()
          })
    },
  })
  var ft,
    dt,
    ht = /^(?:checkbox|radio)$/i,
    pt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    mt = /^$|^module$|\/(?:java|ecma)script/i
  ;(ft = g.createDocumentFragment().appendChild(g.createElement('div'))),
    (dt = g.createElement('input')).setAttribute('type', 'radio'),
    dt.setAttribute('checked', 'checked'),
    dt.setAttribute('name', 't'),
    ft.appendChild(dt),
    (h.checkClone = ft.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ft.innerHTML = '<textarea>x</textarea>'),
    (h.noCloneChecked = !!ft.cloneNode(!0).lastChild.defaultValue),
    (ft.innerHTML = '<option></option>'),
    (h.option = !!ft.lastChild)
  var gt = { thead: [1, '<table>', '</table>'], col: [2, '<table><colgroup>', '</colgroup></table>'], tr: [2, '<table><tbody>', '</tbody></table>'], td: [3, '<table><tbody><tr>', '</tr></tbody></table>'], _default: [0, '', ''] }
  function vt(t, e) {
    var n
    return (n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || '*') : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || '*') : []), void 0 === e || (e && A(t, e)) ? _.merge([t], n) : n
  }
  function yt(t, e) {
    for (var n = 0, i = t.length; n < i; n++) Y.set(t[n], 'globalEval', !e || Y.get(e[n], 'globalEval'))
  }
  ;(gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead), (gt.th = gt.td), h.option || (gt.optgroup = gt.option = [1, "<select multiple='multiple'>", '</select>'])
  var bt = /<|&#?\w+;/
  function wt(t, e, n, i, r) {
    for (var o, s, a, u, l, c, f = e.createDocumentFragment(), d = [], h = 0, p = t.length; h < p; h++)
      if ((o = t[h]) || 0 === o)
        if ('object' === b(o)) _.merge(d, o.nodeType ? [o] : o)
        else if (bt.test(o)) {
          for (s = s || f.appendChild(e.createElement('div')), a = (pt.exec(o) || ['', ''])[1].toLowerCase(), u = gt[a] || gt._default, s.innerHTML = u[1] + _.htmlPrefilter(o) + u[2], c = u[0]; c--; ) s = s.lastChild
          _.merge(d, s.childNodes), ((s = f.firstChild).textContent = '')
        } else d.push(e.createTextNode(o))
    for (f.textContent = '', h = 0; (o = d[h++]); )
      if (i && _.inArray(o, i) > -1) r && r.push(o)
      else if (((l = rt(o)), (s = vt(f.appendChild(o), 'script')), l && yt(s), n)) for (c = 0; (o = s[c++]); ) mt.test(o.type || '') && n.push(o)
    return f
  }
  var _t = /^key/,
    xt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Et = /^([^.]*)(?:\.(.+)|)/
  function Tt() {
    return !0
  }
  function St() {
    return !1
  }
  function Ct(t, e) {
    return (
      (t ===
        (function () {
          try {
            return g.activeElement
          } catch (t) {}
        })()) ==
      ('focus' === e)
    )
  }
  function At(t, e, n, i, r, o) {
    var s, a
    if ('object' == typeof e) {
      for (a in ('string' != typeof n && ((i = i || n), (n = void 0)), e)) At(t, a, n, i, e[a], o)
      return t
    }
    if ((null == i && null == r ? ((r = n), (i = n = void 0)) : null == r && ('string' == typeof n ? ((r = i), (i = void 0)) : ((r = i), (i = n), (n = void 0))), !1 === r)) r = St
    else if (!r) return t
    return (
      1 === o &&
        ((s = r),
        ((r = function (t) {
          return _().off(t), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = _.guid++))),
      t.each(function () {
        _.event.add(this, e, r, i, n)
      })
    )
  }
  function kt(t, e, n) {
    n
      ? (Y.set(t, e, !1),
        _.event.add(t, e, {
          namespace: !1,
          handler: function (t) {
            var i,
              o,
              s = Y.get(this, e)
            if (1 & t.isTrigger && this[e]) {
              if (s.length) (_.event.special[e] || {}).delegateType && t.stopPropagation()
              else if (((s = r.call(arguments)), Y.set(this, e, s), (i = n(this, e)), this[e](), s !== (o = Y.get(this, e)) || i ? Y.set(this, e, !1) : (o = {}), s !== o)) return t.stopImmediatePropagation(), t.preventDefault(), o.value
            } else s.length && (Y.set(this, e, { value: _.event.trigger(_.extend(s[0], _.Event.prototype), s.slice(1), this) }), t.stopImmediatePropagation())
          },
        }))
      : void 0 === Y.get(t, e) && _.event.add(t, e, Tt)
  }
  ;(_.event = {
    global: {},
    add: function (t, e, n, i, r) {
      var o,
        s,
        a,
        u,
        l,
        c,
        f,
        d,
        h,
        p,
        m,
        g = Y.get(t)
      if (V(t))
        for (
          n.handler && ((n = (o = n).handler), (r = o.selector)),
            r && _.find.matchesSelector(it, r),
            n.guid || (n.guid = _.guid++),
            (u = g.events) || (u = g.events = Object.create(null)),
            (s = g.handle) ||
              (s = g.handle =
                function (e) {
                  return void 0 !== _ && _.event.triggered !== e.type ? _.event.dispatch.apply(t, arguments) : void 0
                }),
            l = (e = (e || '').match(L) || ['']).length;
          l--;

        )
          (h = m = (a = Et.exec(e[l]) || [])[1]),
            (p = (a[2] || '').split('.').sort()),
            h &&
              ((f = _.event.special[h] || {}),
              (h = (r ? f.delegateType : f.bindType) || h),
              (f = _.event.special[h] || {}),
              (c = _.extend({ type: h, origType: m, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && _.expr.match.needsContext.test(r), namespace: p.join('.') }, o)),
              (d = u[h]) || (((d = u[h] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(t, i, p, s)) || (t.addEventListener && t.addEventListener(h, s))),
              f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              r ? d.splice(d.delegateCount++, 0, c) : d.push(c),
              (_.event.global[h] = !0))
    },
    remove: function (t, e, n, i, r) {
      var o,
        s,
        a,
        u,
        l,
        c,
        f,
        d,
        h,
        p,
        m,
        g = Y.hasData(t) && Y.get(t)
      if (g && (u = g.events)) {
        for (l = (e = (e || '').match(L) || ['']).length; l--; )
          if (((h = m = (a = Et.exec(e[l]) || [])[1]), (p = (a[2] || '').split('.').sort()), h)) {
            for (f = _.event.special[h] || {}, d = u[(h = (i ? f.delegateType : f.bindType) || h)] || [], a = a[2] && new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)'), s = o = d.length; o--; )
              (c = d[o]), (!r && m !== c.origType) || (n && n.guid !== c.guid) || (a && !a.test(c.namespace)) || (i && i !== c.selector && ('**' !== i || !c.selector)) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(t, c))
            s && !d.length && ((f.teardown && !1 !== f.teardown.call(t, p, g.handle)) || _.removeEvent(t, h, g.handle), delete u[h])
          } else for (h in u) _.event.remove(t, h + e[l], n, i, !0)
        _.isEmptyObject(u) && Y.remove(t, 'handle events')
      }
    },
    dispatch: function (t) {
      var e,
        n,
        i,
        r,
        o,
        s,
        a = new Array(arguments.length),
        u = _.event.fix(t),
        l = (Y.get(this, 'events') || Object.create(null))[u.type] || [],
        c = _.event.special[u.type] || {}
      for (a[0] = u, e = 1; e < arguments.length; e++) a[e] = arguments[e]
      if (((u.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, u))) {
        for (s = _.event.handlers.call(this, u, l), e = 0; (r = s[e++]) && !u.isPropagationStopped(); )
          for (u.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !u.isImmediatePropagationStopped(); )
            (u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace)) || ((u.handleObj = o), (u.data = o.data), void 0 !== (i = ((_.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (u.result = i) && (u.preventDefault(), u.stopPropagation()))
        return c.postDispatch && c.postDispatch.call(this, u), u.result
      }
    },
    handlers: function (t, e) {
      var n,
        i,
        r,
        o,
        s,
        a = [],
        u = e.delegateCount,
        l = t.target
      if (u && l.nodeType && !('click' === t.type && t.button >= 1))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ('click' !== t.type || !0 !== l.disabled)) {
            for (o = [], s = {}, n = 0; n < u; n++) void 0 === s[(r = (i = e[n]).selector + ' ')] && (s[r] = i.needsContext ? _(r, this).index(l) > -1 : _.find(r, this, null, [l]).length), s[r] && o.push(i)
            o.length && a.push({ elem: l, handlers: o })
          }
      return (l = this), u < e.length && a.push({ elem: l, handlers: e.slice(u) }), a
    },
    addProp: function (t, e) {
      Object.defineProperty(_.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: p(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent)
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t]
            },
        set: function (e) {
          Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
        },
      })
    },
    fix: function (t) {
      return t[_.expando] ? t : new _.Event(t)
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (t) {
          var e = this || t
          return ht.test(e.type) && e.click && A(e, 'input') && kt(e, 'click', Tt), !1
        },
        trigger: function (t) {
          var e = this || t
          return ht.test(e.type) && e.click && A(e, 'input') && kt(e, 'click'), !0
        },
        _default: function (t) {
          var e = t.target
          return (ht.test(e.type) && e.click && A(e, 'input') && Y.get(e, 'click')) || A(e, 'a')
        },
      },
      beforeunload: {
        postDispatch: function (t) {
          void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
        },
      },
    },
  }),
    (_.removeEvent = function (t, e, n) {
      t.removeEventListener && t.removeEventListener(e, n)
    }),
    (_.Event = function (t, e) {
      if (!(this instanceof _.Event)) return new _.Event(t, e)
      t && t.type
        ? ((this.originalEvent = t),
          (this.type = t.type),
          (this.isDefaultPrevented = t.defaultPrevented || (void 0 === t.defaultPrevented && !1 === t.returnValue) ? Tt : St),
          (this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target),
          (this.currentTarget = t.currentTarget),
          (this.relatedTarget = t.relatedTarget))
        : (this.type = t),
        e && _.extend(this, e),
        (this.timeStamp = (t && t.timeStamp) || Date.now()),
        (this[_.expando] = !0)
    }),
    (_.Event.prototype = {
      constructor: _.Event,
      isDefaultPrevented: St,
      isPropagationStopped: St,
      isImmediatePropagationStopped: St,
      isSimulated: !1,
      preventDefault: function () {
        var t = this.originalEvent
        ;(this.isDefaultPrevented = Tt), t && !this.isSimulated && t.preventDefault()
      },
      stopPropagation: function () {
        var t = this.originalEvent
        ;(this.isPropagationStopped = Tt), t && !this.isSimulated && t.stopPropagation()
      },
      stopImmediatePropagation: function () {
        var t = this.originalEvent
        ;(this.isImmediatePropagationStopped = Tt), t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
      },
    }),
    _.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (t) {
          var e = t.button
          return null == t.which && _t.test(t.type) ? (null != t.charCode ? t.charCode : t.keyCode) : !t.which && void 0 !== e && xt.test(t.type) ? (1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0) : t.which
        },
      },
      _.event.addProp,
    ),
    _.each({ focus: 'focusin', blur: 'focusout' }, function (t, e) {
      _.event.special[t] = {
        setup: function () {
          return kt(this, t, Ct), !1
        },
        trigger: function () {
          return kt(this, t), !0
        },
        delegateType: e,
      }
    }),
    _.each({ mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout' }, function (t, e) {
      _.event.special[t] = {
        delegateType: e,
        bindType: e,
        handle: function (t) {
          var n,
            i = this,
            r = t.relatedTarget,
            o = t.handleObj
          return (r && (r === i || _.contains(i, r))) || ((t.type = o.origType), (n = o.handler.apply(this, arguments)), (t.type = e)), n
        },
      }
    }),
    _.fn.extend({
      on: function (t, e, n, i) {
        return At(this, t, e, n, i)
      },
      one: function (t, e, n, i) {
        return At(this, t, e, n, i, 1)
      },
      off: function (t, e, n) {
        var i, r
        if (t && t.preventDefault && t.handleObj) return (i = t.handleObj), _(t.delegateTarget).off(i.namespace ? i.origType + '.' + i.namespace : i.origType, i.selector, i.handler), this
        if ('object' == typeof t) {
          for (r in t) this.off(r, e, t[r])
          return this
        }
        return (
          (!1 !== e && 'function' != typeof e) || ((n = e), (e = void 0)),
          !1 === n && (n = St),
          this.each(function () {
            _.event.remove(this, t, n, e)
          })
        )
      },
    })
  var Ot = /<script|<style|<link/i,
    Dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
  function jt(t, e) {
    return (A(t, 'table') && A(11 !== e.nodeType ? e : e.firstChild, 'tr') && _(t).children('tbody')[0]) || t
  }
  function It(t) {
    return (t.type = (null !== t.getAttribute('type')) + '/' + t.type), t
  }
  function Pt(t) {
    return 'true/' === (t.type || '').slice(0, 5) ? (t.type = t.type.slice(5)) : t.removeAttribute('type'), t
  }
  function Lt(t, e) {
    var n, i, r, o, s, a
    if (1 === e.nodeType) {
      if (Y.hasData(t) && (a = Y.get(t).events)) for (r in (Y.remove(e, 'handle events'), a)) for (n = 0, i = a[r].length; n < i; n++) _.event.add(e, r, a[r][n])
      X.hasData(t) && ((o = X.access(t)), (s = _.extend({}, o)), X.set(e, s))
    }
  }
  function Ht(t, e) {
    var n = e.nodeName.toLowerCase()
    'input' === n && ht.test(t.type) ? (e.checked = t.checked) : ('input' !== n && 'textarea' !== n) || (e.defaultValue = t.defaultValue)
  }
  function Mt(t, e, n, i) {
    e = o(e)
    var r,
      s,
      a,
      u,
      l,
      c,
      f = 0,
      d = t.length,
      m = d - 1,
      g = e[0],
      v = p(g)
    if (v || (d > 1 && 'string' == typeof g && !h.checkClone && Dt.test(g)))
      return t.each(function (r) {
        var o = t.eq(r)
        v && (e[0] = g.call(this, r, o.html())), Mt(o, e, n, i)
      })
    if (d && ((s = (r = wt(e, t[0].ownerDocument, !1, t, i)).firstChild), 1 === r.childNodes.length && (r = s), s || i)) {
      for (u = (a = _.map(vt(r, 'script'), It)).length; f < d; f++) (l = r), f !== m && ((l = _.clone(l, !0, !0)), u && _.merge(a, vt(l, 'script'))), n.call(t[f], l, f)
      if (u)
        for (c = a[a.length - 1].ownerDocument, _.map(a, Pt), f = 0; f < u; f++)
          (l = a[f]), mt.test(l.type || '') && !Y.access(l, 'globalEval') && _.contains(c, l) && (l.src && 'module' !== (l.type || '').toLowerCase() ? _._evalUrl && !l.noModule && _._evalUrl(l.src, { nonce: l.nonce || l.getAttribute('nonce') }, c) : y(l.textContent.replace(Nt, ''), l, c))
    }
    return t
  }
  function qt(t, e, n) {
    for (var i, r = e ? _.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || _.cleanData(vt(i)), i.parentNode && (n && rt(i) && yt(vt(i, 'script')), i.parentNode.removeChild(i))
    return t
  }
  _.extend({
    htmlPrefilter: function (t) {
      return t
    },
    clone: function (t, e, n) {
      var i,
        r,
        o,
        s,
        a = t.cloneNode(!0),
        u = rt(t)
      if (!(h.noCloneChecked || (1 !== t.nodeType && 11 !== t.nodeType) || _.isXMLDoc(t))) for (s = vt(a), i = 0, r = (o = vt(t)).length; i < r; i++) Ht(o[i], s[i])
      if (e)
        if (n) for (o = o || vt(t), s = s || vt(a), i = 0, r = o.length; i < r; i++) Lt(o[i], s[i])
        else Lt(t, a)
      return (s = vt(a, 'script')).length > 0 && yt(s, !u && vt(t, 'script')), a
    },
    cleanData: function (t) {
      for (var e, n, i, r = _.event.special, o = 0; void 0 !== (n = t[o]); o++)
        if (V(n)) {
          if ((e = n[Y.expando])) {
            if (e.events) for (i in e.events) r[i] ? _.event.remove(n, i) : _.removeEvent(n, i, e.handle)
            n[Y.expando] = void 0
          }
          n[X.expando] && (n[X.expando] = void 0)
        }
    },
  }),
    _.fn.extend({
      detach: function (t) {
        return qt(this, t, !0)
      },
      remove: function (t) {
        return qt(this, t)
      },
      text: function (t) {
        return z(
          this,
          function (t) {
            return void 0 === t
              ? _.text(this)
              : this.empty().each(function () {
                  ;(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = t)
                })
          },
          null,
          t,
          arguments.length,
        )
      },
      append: function () {
        return Mt(this, arguments, function (t) {
          ;(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || jt(this, t).appendChild(t)
        })
      },
      prepend: function () {
        return Mt(this, arguments, function (t) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var e = jt(this, t)
            e.insertBefore(t, e.firstChild)
          }
        })
      },
      before: function () {
        return Mt(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this)
        })
      },
      after: function () {
        return Mt(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
        })
      },
      empty: function () {
        for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (_.cleanData(vt(t, !1)), (t.textContent = ''))
        return this
      },
      clone: function (t, e) {
        return (
          (t = null != t && t),
          (e = null == e ? t : e),
          this.map(function () {
            return _.clone(this, t, e)
          })
        )
      },
      html: function (t) {
        return z(
          this,
          function (t) {
            var e = this[0] || {},
              n = 0,
              i = this.length
            if (void 0 === t && 1 === e.nodeType) return e.innerHTML
            if ('string' == typeof t && !Ot.test(t) && !gt[(pt.exec(t) || ['', ''])[1].toLowerCase()]) {
              t = _.htmlPrefilter(t)
              try {
                for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (_.cleanData(vt(e, !1)), (e.innerHTML = t))
                e = 0
              } catch (t) {}
            }
            e && this.empty().append(t)
          },
          null,
          t,
          arguments.length,
        )
      },
      replaceWith: function () {
        var t = []
        return Mt(
          this,
          arguments,
          function (e) {
            var n = this.parentNode
            _.inArray(this, t) < 0 && (_.cleanData(vt(this)), n && n.replaceChild(e, this))
          },
          t,
        )
      },
    }),
    _.each({ appendTo: 'append', prependTo: 'prepend', insertBefore: 'before', insertAfter: 'after', replaceAll: 'replaceWith' }, function (t, e) {
      _.fn[t] = function (t) {
        for (var n, i = [], r = _(t), o = r.length - 1, a = 0; a <= o; a++) (n = a === o ? this : this.clone(!0)), _(r[a])[e](n), s.apply(i, n.get())
        return this.pushStack(i)
      }
    })
  var Rt = new RegExp('^(' + tt + ')(?!px)[a-z%]+$', 'i'),
    Wt = function (e) {
      var n = e.ownerDocument.defaultView
      return (n && n.opener) || (n = t), n.getComputedStyle(e)
    },
    Ft = function (t, e, n) {
      var i,
        r,
        o = {}
      for (r in e) (o[r] = t.style[r]), (t.style[r] = e[r])
      for (r in ((i = n.call(t)), e)) t.style[r] = o[r]
      return i
    },
    zt = new RegExp(nt.join('|'), 'i')
  function Bt(t, e, n) {
    var i,
      r,
      o,
      s,
      a = t.style
    return (
      (n = n || Wt(t)) &&
        ('' !== (s = n.getPropertyValue(e) || n[e]) || rt(t) || (s = _.style(t, e)), !h.pixelBoxStyles() && Rt.test(s) && zt.test(e) && ((i = a.width), (r = a.minWidth), (o = a.maxWidth), (a.minWidth = a.maxWidth = a.width = s), (s = n.width), (a.width = i), (a.minWidth = r), (a.maxWidth = o))),
      void 0 !== s ? s + '' : s
    )
  }
  function Ut(t, e) {
    return {
      get: function () {
        if (!t()) return (this.get = e).apply(this, arguments)
        delete this.get
      },
    }
  }
  !(function () {
    function e() {
      if (c) {
        ;(l.style.cssText = 'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'), (c.style.cssText = 'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'), it.appendChild(l).appendChild(c)
        var e = t.getComputedStyle(c)
        ;(i = '1%' !== e.top), (u = 12 === n(e.marginLeft)), (c.style.right = '60%'), (s = 36 === n(e.right)), (r = 36 === n(e.width)), (c.style.position = 'absolute'), (o = 12 === n(c.offsetWidth / 3)), it.removeChild(l), (c = null)
      }
    }
    function n(t) {
      return Math.round(parseFloat(t))
    }
    var i,
      r,
      o,
      s,
      a,
      u,
      l = g.createElement('div'),
      c = g.createElement('div')
    c.style &&
      ((c.style.backgroundClip = 'content-box'),
      (c.cloneNode(!0).style.backgroundClip = ''),
      (h.clearCloneStyle = 'content-box' === c.style.backgroundClip),
      _.extend(h, {
        boxSizingReliable: function () {
          return e(), r
        },
        pixelBoxStyles: function () {
          return e(), s
        },
        pixelPosition: function () {
          return e(), i
        },
        reliableMarginLeft: function () {
          return e(), u
        },
        scrollboxSize: function () {
          return e(), o
        },
        reliableTrDimensions: function () {
          var e, n, i, r
          return (
            null == a &&
              ((e = g.createElement('table')),
              (n = g.createElement('tr')),
              (i = g.createElement('div')),
              (e.style.cssText = 'position:absolute;left:-11111px'),
              (n.style.height = '1px'),
              (i.style.height = '9px'),
              it.appendChild(e).appendChild(n).appendChild(i),
              (r = t.getComputedStyle(n)),
              (a = parseInt(r.height) > 3),
              it.removeChild(e)),
            a
          )
        },
      }))
  })()
  var $t = ['Webkit', 'Moz', 'ms'],
    Qt = g.createElement('div').style,
    Vt = {}
  function Kt(t) {
    var e = _.cssProps[t] || Vt[t]
    return (
      e ||
      (t in Qt
        ? t
        : (Vt[t] =
            (function (t) {
              for (var e = t[0].toUpperCase() + t.slice(1), n = $t.length; n--; ) if ((t = $t[n] + e) in Qt) return t
            })(t) || t))
    )
  }
  var Yt = /^(none|table(?!-c[ea]).+)/,
    Xt = /^--/,
    Gt = { position: 'absolute', visibility: 'hidden', display: 'block' },
    Jt = { letterSpacing: '0', fontWeight: '400' }
  function Zt(t, e, n) {
    var i = et.exec(e)
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || 'px') : e
  }
  function te(t, e, n, i, r, o) {
    var s = 'width' === e ? 1 : 0,
      a = 0,
      u = 0
    if (n === (i ? 'border' : 'content')) return 0
    for (; s < 4; s += 2)
      'margin' === n && (u += _.css(t, n + nt[s], !0, r)),
        i
          ? ('content' === n && (u -= _.css(t, 'padding' + nt[s], !0, r)), 'margin' !== n && (u -= _.css(t, 'border' + nt[s] + 'Width', !0, r)))
          : ((u += _.css(t, 'padding' + nt[s], !0, r)), 'padding' !== n ? (u += _.css(t, 'border' + nt[s] + 'Width', !0, r)) : (a += _.css(t, 'border' + nt[s] + 'Width', !0, r)))
    return !i && o >= 0 && (u += Math.max(0, Math.ceil(t['offset' + e[0].toUpperCase() + e.slice(1)] - o - u - a - 0.5)) || 0), u
  }
  function ee(t, e, n) {
    var i = Wt(t),
      r = (!h.boxSizingReliable() || n) && 'border-box' === _.css(t, 'boxSizing', !1, i),
      o = r,
      s = Bt(t, e, i),
      a = 'offset' + e[0].toUpperCase() + e.slice(1)
    if (Rt.test(s)) {
      if (!n) return s
      s = 'auto'
    }
    return (
      ((!h.boxSizingReliable() && r) || (!h.reliableTrDimensions() && A(t, 'tr')) || 'auto' === s || (!parseFloat(s) && 'inline' === _.css(t, 'display', !1, i))) && t.getClientRects().length && ((r = 'border-box' === _.css(t, 'boxSizing', !1, i)), (o = a in t) && (s = t[a])),
      (s = parseFloat(s) || 0) + te(t, e, n || (r ? 'border' : 'content'), o, i, s) + 'px'
    )
  }
  function ne(t, e, n, i, r) {
    return new ne.prototype.init(t, e, n, i, r)
  }
  _.extend({
    cssHooks: {
      opacity: {
        get: function (t, e) {
          if (e) {
            var n = Bt(t, 'opacity')
            return '' === n ? '1' : n
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (t, e, n, i) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var r,
          o,
          s,
          a = Q(e),
          u = Xt.test(e),
          l = t.style
        if ((u || (e = Kt(a)), (s = _.cssHooks[e] || _.cssHooks[a]), void 0 === n)) return s && 'get' in s && void 0 !== (r = s.get(t, !1, i)) ? r : l[e]
        'string' === (o = typeof n) && (r = et.exec(n)) && r[1] && ((n = at(t, e, r)), (o = 'number')),
          null != n && n == n && ('number' !== o || u || (n += (r && r[3]) || (_.cssNumber[a] ? '' : 'px')), h.clearCloneStyle || '' !== n || 0 !== e.indexOf('background') || (l[e] = 'inherit'), (s && 'set' in s && void 0 === (n = s.set(t, n, i))) || (u ? l.setProperty(e, n) : (l[e] = n)))
      }
    },
    css: function (t, e, n, i) {
      var r,
        o,
        s,
        a = Q(e)
      return Xt.test(e) || (e = Kt(a)), (s = _.cssHooks[e] || _.cssHooks[a]) && 'get' in s && (r = s.get(t, !0, n)), void 0 === r && (r = Bt(t, e, i)), 'normal' === r && e in Jt && (r = Jt[e]), '' === n || n ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r) : r
    },
  }),
    _.each(['height', 'width'], function (t, e) {
      _.cssHooks[e] = {
        get: function (t, n, i) {
          if (n)
            return !Yt.test(_.css(t, 'display')) || (t.getClientRects().length && t.getBoundingClientRect().width)
              ? ee(t, e, i)
              : Ft(t, Gt, function () {
                  return ee(t, e, i)
                })
        },
        set: function (t, n, i) {
          var r,
            o = Wt(t),
            s = !h.scrollboxSize() && 'absolute' === o.position,
            a = (s || i) && 'border-box' === _.css(t, 'boxSizing', !1, o),
            u = i ? te(t, e, i, a, o) : 0
          return a && s && (u -= Math.ceil(t['offset' + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - te(t, e, 'border', !1, o) - 0.5)), u && (r = et.exec(n)) && 'px' !== (r[3] || 'px') && ((t.style[e] = n), (n = _.css(t, e))), Zt(0, n, u)
        },
      }
    }),
    (_.cssHooks.marginLeft = Ut(h.reliableMarginLeft, function (t, e) {
      if (e)
        return (
          (parseFloat(Bt(t, 'marginLeft')) ||
            t.getBoundingClientRect().left -
              Ft(t, { marginLeft: 0 }, function () {
                return t.getBoundingClientRect().left
              })) + 'px'
        )
    })),
    _.each({ margin: '', padding: '', border: 'Width' }, function (t, e) {
      ;(_.cssHooks[t + e] = {
        expand: function (n) {
          for (var i = 0, r = {}, o = 'string' == typeof n ? n.split(' ') : [n]; i < 4; i++) r[t + nt[i] + e] = o[i] || o[i - 2] || o[0]
          return r
        },
      }),
        'margin' !== t && (_.cssHooks[t + e].set = Zt)
    }),
    _.fn.extend({
      css: function (t, e) {
        return z(
          this,
          function (t, e, n) {
            var i,
              r,
              o = {},
              s = 0
            if (Array.isArray(e)) {
              for (i = Wt(t), r = e.length; s < r; s++) o[e[s]] = _.css(t, e[s], !1, i)
              return o
            }
            return void 0 !== n ? _.style(t, e, n) : _.css(t, e)
          },
          t,
          e,
          arguments.length > 1,
        )
      },
    }),
    (_.Tween = ne),
    (ne.prototype = {
      constructor: ne,
      init: function (t, e, n, i, r, o) {
        ;(this.elem = t), (this.prop = n), (this.easing = r || _.easing._default), (this.options = e), (this.start = this.now = this.cur()), (this.end = i), (this.unit = o || (_.cssNumber[n] ? '' : 'px'))
      },
      cur: function () {
        var t = ne.propHooks[this.prop]
        return t && t.get ? t.get(this) : ne.propHooks._default.get(this)
      },
      run: function (t) {
        var e,
          n = ne.propHooks[this.prop]
        return (
          this.options.duration ? (this.pos = e = _.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration)) : (this.pos = e = t),
          (this.now = (this.end - this.start) * e + this.start),
          this.options.step && this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : ne.propHooks._default.set(this),
          this
        )
      },
    }),
    (ne.prototype.init.prototype = ne.prototype),
    (ne.propHooks = {
      _default: {
        get: function (t) {
          var e
          return 1 !== t.elem.nodeType || (null != t.elem[t.prop] && null == t.elem.style[t.prop]) ? t.elem[t.prop] : (e = _.css(t.elem, t.prop, '')) && 'auto' !== e ? e : 0
        },
        set: function (t) {
          _.fx.step[t.prop] ? _.fx.step[t.prop](t) : 1 !== t.elem.nodeType || (!_.cssHooks[t.prop] && null == t.elem.style[Kt(t.prop)]) ? (t.elem[t.prop] = t.now) : _.style(t.elem, t.prop, t.now + t.unit)
        },
      },
    }),
    (ne.propHooks.scrollTop = ne.propHooks.scrollLeft =
      {
        set: function (t) {
          t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        },
      }),
    (_.easing = {
      linear: function (t) {
        return t
      },
      swing: function (t) {
        return 0.5 - Math.cos(t * Math.PI) / 2
      },
      _default: 'swing',
    }),
    (_.fx = ne.prototype.init),
    (_.fx.step = {})
  var ie,
    re,
    oe = /^(?:toggle|show|hide)$/,
    se = /queueHooks$/
  function ae() {
    re && (!1 === g.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(ae) : t.setTimeout(ae, _.fx.interval), _.fx.tick())
  }
  function ue() {
    return (
      t.setTimeout(function () {
        ie = void 0
      }),
      (ie = Date.now())
    )
  }
  function le(t, e) {
    var n,
      i = 0,
      r = { height: t }
    for (e = e ? 1 : 0; i < 4; i += 2 - e) r['margin' + (n = nt[i])] = r['padding' + n] = t
    return e && (r.opacity = r.width = t), r
  }
  function ce(t, e, n) {
    for (var i, r = (fe.tweeners[e] || []).concat(fe.tweeners['*']), o = 0, s = r.length; o < s; o++) if ((i = r[o].call(n, e, t))) return i
  }
  function fe(t, e, n) {
    var i,
      r,
      o = 0,
      s = fe.prefilters.length,
      a = _.Deferred().always(function () {
        delete u.elem
      }),
      u = function () {
        if (r) return !1
        for (var e = ie || ue(), n = Math.max(0, l.startTime + l.duration - e), i = 1 - (n / l.duration || 0), o = 0, s = l.tweens.length; o < s; o++) l.tweens[o].run(i)
        return a.notifyWith(t, [l, i, n]), i < 1 && s ? n : (s || a.notifyWith(t, [l, 1, 0]), a.resolveWith(t, [l]), !1)
      },
      l = a.promise({
        elem: t,
        props: _.extend({}, e),
        opts: _.extend(!0, { specialEasing: {}, easing: _.easing._default }, n),
        originalProperties: e,
        originalOptions: n,
        startTime: ie || ue(),
        duration: n.duration,
        tweens: [],
        createTween: function (e, n) {
          var i = _.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing)
          return l.tweens.push(i), i
        },
        stop: function (e) {
          var n = 0,
            i = e ? l.tweens.length : 0
          if (r) return this
          for (r = !0; n < i; n++) l.tweens[n].run(1)
          return e ? (a.notifyWith(t, [l, 1, 0]), a.resolveWith(t, [l, e])) : a.rejectWith(t, [l, e]), this
        },
      }),
      c = l.props
    for (
      !(function (t, e) {
        var n, i, r, o, s
        for (n in t)
          if (((r = e[(i = Q(n))]), (o = t[n]), Array.isArray(o) && ((r = o[1]), (o = t[n] = o[0])), n !== i && ((t[i] = o), delete t[n]), (s = _.cssHooks[i]) && ('expand' in s))) for (n in ((o = s.expand(o)), delete t[i], o)) (n in t) || ((t[n] = o[n]), (e[n] = r))
          else e[i] = r
      })(c, l.opts.specialEasing);
      o < s;
      o++
    )
      if ((i = fe.prefilters[o].call(l, t, c, l.opts))) return p(i.stop) && (_._queueHooks(l.elem, l.opts.queue).stop = i.stop.bind(i)), i
    return _.map(c, ce, l), p(l.opts.start) && l.opts.start.call(t, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), _.fx.timer(_.extend(u, { elem: t, anim: l, queue: l.opts.queue })), l
  }
  ;(_.Animation = _.extend(fe, {
    tweeners: {
      '*': [
        function (t, e) {
          var n = this.createTween(t, e)
          return at(n.elem, t, et.exec(e), n), n
        },
      ],
    },
    tweener: function (t, e) {
      p(t) ? ((e = t), (t = ['*'])) : (t = t.match(L))
      for (var n, i = 0, r = t.length; i < r; i++) (n = t[i]), (fe.tweeners[n] = fe.tweeners[n] || []), fe.tweeners[n].unshift(e)
    },
    prefilters: [
      function (t, e, n) {
        var i,
          r,
          o,
          s,
          a,
          u,
          l,
          c,
          f = 'width' in e || 'height' in e,
          d = this,
          h = {},
          p = t.style,
          m = t.nodeType && st(t),
          g = Y.get(t, 'fxshow')
        for (i in (n.queue ||
          (null == (s = _._queueHooks(t, 'fx')).unqueued &&
            ((s.unqueued = 0),
            (a = s.empty.fire),
            (s.empty.fire = function () {
              s.unqueued || a()
            })),
          s.unqueued++,
          d.always(function () {
            d.always(function () {
              s.unqueued--, _.queue(t, 'fx').length || s.empty.fire()
            })
          })),
        e))
          if (((r = e[i]), oe.test(r))) {
            if ((delete e[i], (o = o || 'toggle' === r), r === (m ? 'hide' : 'show'))) {
              if ('show' !== r || !g || void 0 === g[i]) continue
              m = !0
            }
            h[i] = (g && g[i]) || _.style(t, i)
          }
        if ((u = !_.isEmptyObject(e)) || !_.isEmptyObject(h))
          for (i in (f &&
            1 === t.nodeType &&
            ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
            null == (l = g && g.display) && (l = Y.get(t, 'display')),
            'none' === (c = _.css(t, 'display')) && (l ? (c = l) : (ct([t], !0), (l = t.style.display || l), (c = _.css(t, 'display')), ct([t]))),
            ('inline' === c || ('inline-block' === c && null != l)) &&
              'none' === _.css(t, 'float') &&
              (u ||
                (d.done(function () {
                  p.display = l
                }),
                null == l && ((c = p.display), (l = 'none' === c ? '' : c))),
              (p.display = 'inline-block'))),
          n.overflow &&
            ((p.overflow = 'hidden'),
            d.always(function () {
              ;(p.overflow = n.overflow[0]), (p.overflowX = n.overflow[1]), (p.overflowY = n.overflow[2])
            })),
          (u = !1),
          h))
            u ||
              (g ? 'hidden' in g && (m = g.hidden) : (g = Y.access(t, 'fxshow', { display: l })),
              o && (g.hidden = !m),
              m && ct([t], !0),
              d.done(function () {
                for (i in (m || ct([t]), Y.remove(t, 'fxshow'), h)) _.style(t, i, h[i])
              })),
              (u = ce(m ? g[i] : 0, i, d)),
              i in g || ((g[i] = u.start), m && ((u.end = u.start), (u.start = 0)))
      },
    ],
    prefilter: function (t, e) {
      e ? fe.prefilters.unshift(t) : fe.prefilters.push(t)
    },
  })),
    (_.speed = function (t, e, n) {
      var i = t && 'object' == typeof t ? _.extend({}, t) : { complete: n || (!n && e) || (p(t) && t), duration: t, easing: (n && e) || (e && !p(e) && e) }
      return (
        _.fx.off ? (i.duration = 0) : 'number' != typeof i.duration && (i.duration in _.fx.speeds ? (i.duration = _.fx.speeds[i.duration]) : (i.duration = _.fx.speeds._default)),
        (null != i.queue && !0 !== i.queue) || (i.queue = 'fx'),
        (i.old = i.complete),
        (i.complete = function () {
          p(i.old) && i.old.call(this), i.queue && _.dequeue(this, i.queue)
        }),
        i
      )
    }),
    _.fn.extend({
      fadeTo: function (t, e, n, i) {
        return this.filter(st).css('opacity', 0).show().end().animate({ opacity: e }, t, n, i)
      },
      animate: function (t, e, n, i) {
        var r = _.isEmptyObject(t),
          o = _.speed(e, n, i),
          s = function () {
            var e = fe(this, _.extend({}, t), o)
            ;(r || Y.get(this, 'finish')) && e.stop(!0)
          }
        return (s.finish = s), r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
      },
      stop: function (t, e, n) {
        var i = function (t) {
          var e = t.stop
          delete t.stop, e(n)
        }
        return (
          'string' != typeof t && ((n = e), (e = t), (t = void 0)),
          e && this.queue(t || 'fx', []),
          this.each(function () {
            var e = !0,
              r = null != t && t + 'queueHooks',
              o = _.timers,
              s = Y.get(this)
            if (r) s[r] && s[r].stop && i(s[r])
            else for (r in s) s[r] && s[r].stop && se.test(r) && i(s[r])
            for (r = o.length; r--; ) o[r].elem !== this || (null != t && o[r].queue !== t) || (o[r].anim.stop(n), (e = !1), o.splice(r, 1))
            ;(!e && n) || _.dequeue(this, t)
          })
        )
      },
      finish: function (t) {
        return (
          !1 !== t && (t = t || 'fx'),
          this.each(function () {
            var e,
              n = Y.get(this),
              i = n[t + 'queue'],
              r = n[t + 'queueHooks'],
              o = _.timers,
              s = i ? i.length : 0
            for (n.finish = !0, _.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--; ) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1))
            for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this)
            delete n.finish
          })
        )
      },
    }),
    _.each(['toggle', 'show', 'hide'], function (t, e) {
      var n = _.fn[e]
      _.fn[e] = function (t, i, r) {
        return null == t || 'boolean' == typeof t ? n.apply(this, arguments) : this.animate(le(e, !0), t, i, r)
      }
    }),
    _.each({ slideDown: le('show'), slideUp: le('hide'), slideToggle: le('toggle'), fadeIn: { opacity: 'show' }, fadeOut: { opacity: 'hide' }, fadeToggle: { opacity: 'toggle' } }, function (t, e) {
      _.fn[t] = function (t, n, i) {
        return this.animate(e, t, n, i)
      }
    }),
    (_.timers = []),
    (_.fx.tick = function () {
      var t,
        e = 0,
        n = _.timers
      for (ie = Date.now(); e < n.length; e++) (t = n[e])() || n[e] !== t || n.splice(e--, 1)
      n.length || _.fx.stop(), (ie = void 0)
    }),
    (_.fx.timer = function (t) {
      _.timers.push(t), _.fx.start()
    }),
    (_.fx.interval = 13),
    (_.fx.start = function () {
      re || ((re = !0), ae())
    }),
    (_.fx.stop = function () {
      re = null
    }),
    (_.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (_.fn.delay = function (e, n) {
      return (
        (e = (_.fx && _.fx.speeds[e]) || e),
        (n = n || 'fx'),
        this.queue(n, function (n, i) {
          var r = t.setTimeout(n, e)
          i.stop = function () {
            t.clearTimeout(r)
          }
        })
      )
    }),
    (function () {
      var t = g.createElement('input'),
        e = g.createElement('select').appendChild(g.createElement('option'))
      ;(t.type = 'checkbox'), (h.checkOn = '' !== t.value), (h.optSelected = e.selected), ((t = g.createElement('input')).value = 't'), (t.type = 'radio'), (h.radioValue = 't' === t.value)
    })()
  var de,
    he = _.expr.attrHandle
  _.fn.extend({
    attr: function (t, e) {
      return z(this, _.attr, t, e, arguments.length > 1)
    },
    removeAttr: function (t) {
      return this.each(function () {
        _.removeAttr(this, t)
      })
    },
  }),
    _.extend({
      attr: function (t, e, n) {
        var i,
          r,
          o = t.nodeType
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === t.getAttribute
            ? _.prop(t, e, n)
            : ((1 === o && _.isXMLDoc(t)) || (r = _.attrHooks[e.toLowerCase()] || (_.expr.match.bool.test(e) ? de : void 0)),
              void 0 !== n ? (null === n ? void _.removeAttr(t, e) : r && 'set' in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ''), n)) : r && 'get' in r && null !== (i = r.get(t, e)) ? i : null == (i = _.find.attr(t, e)) ? void 0 : i)
      },
      attrHooks: {
        type: {
          set: function (t, e) {
            if (!h.radioValue && 'radio' === e && A(t, 'input')) {
              var n = t.value
              return t.setAttribute('type', e), n && (t.value = n), e
            }
          },
        },
      },
      removeAttr: function (t, e) {
        var n,
          i = 0,
          r = e && e.match(L)
        if (r && 1 === t.nodeType) for (; (n = r[i++]); ) t.removeAttribute(n)
      },
    }),
    (de = {
      set: function (t, e, n) {
        return !1 === e ? _.removeAttr(t, n) : t.setAttribute(n, n), n
      },
    }),
    _.each(_.expr.match.bool.source.match(/\w+/g), function (t, e) {
      var n = he[e] || _.find.attr
      he[e] = function (t, e, i) {
        var r,
          o,
          s = e.toLowerCase()
        return i || ((o = he[s]), (he[s] = r), (r = null != n(t, e, i) ? s : null), (he[s] = o)), r
      }
    })
  var pe = /^(?:input|select|textarea|button)$/i,
    me = /^(?:a|area)$/i
  function ge(t) {
    return (t.match(L) || []).join(' ')
  }
  function ve(t) {
    return (t.getAttribute && t.getAttribute('class')) || ''
  }
  function ye(t) {
    return Array.isArray(t) ? t : ('string' == typeof t && t.match(L)) || []
  }
  _.fn.extend({
    prop: function (t, e) {
      return z(this, _.prop, t, e, arguments.length > 1)
    },
    removeProp: function (t) {
      return this.each(function () {
        delete this[_.propFix[t] || t]
      })
    },
  }),
    _.extend({
      prop: function (t, e, n) {
        var i,
          r,
          o = t.nodeType
        if (3 !== o && 8 !== o && 2 !== o) return (1 === o && _.isXMLDoc(t)) || ((e = _.propFix[e] || e), (r = _.propHooks[e])), void 0 !== n ? (r && 'set' in r && void 0 !== (i = r.set(t, n, e)) ? i : (t[e] = n)) : r && 'get' in r && null !== (i = r.get(t, e)) ? i : t[e]
      },
      propHooks: {
        tabIndex: {
          get: function (t) {
            var e = _.find.attr(t, 'tabindex')
            return e ? parseInt(e, 10) : pe.test(t.nodeName) || (me.test(t.nodeName) && t.href) ? 0 : -1
          },
        },
      },
      propFix: { for: 'htmlFor', class: 'className' },
    }),
    h.optSelected ||
      (_.propHooks.selected = {
        get: function (t) {
          var e = t.parentNode
          return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function (t) {
          var e = t.parentNode
          e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        },
      }),
    _.each(['tabIndex', 'readOnly', 'maxLength', 'cellSpacing', 'cellPadding', 'rowSpan', 'colSpan', 'useMap', 'frameBorder', 'contentEditable'], function () {
      _.propFix[this.toLowerCase()] = this
    }),
    _.fn.extend({
      addClass: function (t) {
        var e,
          n,
          i,
          r,
          o,
          s,
          a,
          u = 0
        if (p(t))
          return this.each(function (e) {
            _(this).addClass(t.call(this, e, ve(this)))
          })
        if ((e = ye(t)).length)
          for (; (n = this[u++]); )
            if (((r = ve(n)), (i = 1 === n.nodeType && ' ' + ge(r) + ' '))) {
              for (s = 0; (o = e[s++]); ) i.indexOf(' ' + o + ' ') < 0 && (i += o + ' ')
              r !== (a = ge(i)) && n.setAttribute('class', a)
            }
        return this
      },
      removeClass: function (t) {
        var e,
          n,
          i,
          r,
          o,
          s,
          a,
          u = 0
        if (p(t))
          return this.each(function (e) {
            _(this).removeClass(t.call(this, e, ve(this)))
          })
        if (!arguments.length) return this.attr('class', '')
        if ((e = ye(t)).length)
          for (; (n = this[u++]); )
            if (((r = ve(n)), (i = 1 === n.nodeType && ' ' + ge(r) + ' '))) {
              for (s = 0; (o = e[s++]); ) for (; i.indexOf(' ' + o + ' ') > -1; ) i = i.replace(' ' + o + ' ', ' ')
              r !== (a = ge(i)) && n.setAttribute('class', a)
            }
        return this
      },
      toggleClass: function (t, e) {
        var n = typeof t,
          i = 'string' === n || Array.isArray(t)
        return 'boolean' == typeof e && i
          ? e
            ? this.addClass(t)
            : this.removeClass(t)
          : p(t)
          ? this.each(function (n) {
              _(this).toggleClass(t.call(this, n, ve(this), e), e)
            })
          : this.each(function () {
              var e, r, o, s
              if (i) for (r = 0, o = _(this), s = ye(t); (e = s[r++]); ) o.hasClass(e) ? o.removeClass(e) : o.addClass(e)
              else (void 0 !== t && 'boolean' !== n) || ((e = ve(this)) && Y.set(this, '__className__', e), this.setAttribute && this.setAttribute('class', e || !1 === t ? '' : Y.get(this, '__className__') || ''))
            })
      },
      hasClass: function (t) {
        var e,
          n,
          i = 0
        for (e = ' ' + t + ' '; (n = this[i++]); ) if (1 === n.nodeType && (' ' + ge(ve(n)) + ' ').indexOf(e) > -1) return !0
        return !1
      },
    })
  var be = /\r/g
  _.fn.extend({
    val: function (t) {
      var e,
        n,
        i,
        r = this[0]
      return arguments.length
        ? ((i = p(t)),
          this.each(function (n) {
            var r
            1 === this.nodeType &&
              (null == (r = i ? t.call(this, n, _(this).val()) : t)
                ? (r = '')
                : 'number' == typeof r
                ? (r += '')
                : Array.isArray(r) &&
                  (r = _.map(r, function (t) {
                    return null == t ? '' : t + ''
                  })),
              ((e = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && 'set' in e && void 0 !== e.set(this, r, 'value')) || (this.value = r))
          }))
        : r
        ? (e = _.valHooks[r.type] || _.valHooks[r.nodeName.toLowerCase()]) && 'get' in e && void 0 !== (n = e.get(r, 'value'))
          ? n
          : 'string' == typeof (n = r.value)
          ? n.replace(be, '')
          : null == n
          ? ''
          : n
        : void 0
    },
  }),
    _.extend({
      valHooks: {
        option: {
          get: function (t) {
            var e = _.find.attr(t, 'value')
            return null != e ? e : ge(_.text(t))
          },
        },
        select: {
          get: function (t) {
            var e,
              n,
              i,
              r = t.options,
              o = t.selectedIndex,
              s = 'select-one' === t.type,
              a = s ? null : [],
              u = s ? o + 1 : r.length
            for (i = o < 0 ? u : s ? o : 0; i < u; i++)
              if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, 'optgroup'))) {
                if (((e = _(n).val()), s)) return e
                a.push(e)
              }
            return a
          },
          set: function (t, e) {
            for (var n, i, r = t.options, o = _.makeArray(e), s = r.length; s--; ) ((i = r[s]).selected = _.inArray(_.valHooks.option.get(i), o) > -1) && (n = !0)
            return n || (t.selectedIndex = -1), o
          },
        },
      },
    }),
    _.each(['radio', 'checkbox'], function () {
      ;(_.valHooks[this] = {
        set: function (t, e) {
          if (Array.isArray(e)) return (t.checked = _.inArray(_(t).val(), e) > -1)
        },
      }),
        h.checkOn ||
          (_.valHooks[this].get = function (t) {
            return null === t.getAttribute('value') ? 'on' : t.value
          })
    }),
    (h.focusin = 'onfocusin' in t)
  var we = /^(?:focusinfocus|focusoutblur)$/,
    _e = function (t) {
      t.stopPropagation()
    }
  _.extend(_.event, {
    trigger: function (e, n, i, r) {
      var o,
        s,
        a,
        u,
        l,
        f,
        d,
        h,
        v = [i || g],
        y = c.call(e, 'type') ? e.type : e,
        b = c.call(e, 'namespace') ? e.namespace.split('.') : []
      if (
        ((s = h = a = i = i || g),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !we.test(y + _.event.triggered) &&
          (y.indexOf('.') > -1 && ((b = y.split('.')), (y = b.shift()), b.sort()),
          (l = y.indexOf(':') < 0 && 'on' + y),
          ((e = e[_.expando] ? e : new _.Event(y, 'object' == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = b.join('.')),
          (e.rnamespace = e.namespace ? new RegExp('(^|\\.)' + b.join('\\.(?:.*\\.|)') + '(\\.|$)') : null),
          (e.result = void 0),
          e.target || (e.target = i),
          (n = null == n ? [e] : _.makeArray(n, [e])),
          (d = _.event.special[y] || {}),
          r || !d.trigger || !1 !== d.trigger.apply(i, n)))
      ) {
        if (!r && !d.noBubble && !m(i)) {
          for (u = d.delegateType || y, we.test(u + y) || (s = s.parentNode); s; s = s.parentNode) v.push(s), (a = s)
          a === (i.ownerDocument || g) && v.push(a.defaultView || a.parentWindow || t)
        }
        for (o = 0; (s = v[o++]) && !e.isPropagationStopped(); )
          (h = s), (e.type = o > 1 ? u : d.bindType || y), (f = (Y.get(s, 'events') || Object.create(null))[e.type] && Y.get(s, 'handle')) && f.apply(s, n), (f = l && s[l]) && f.apply && V(s) && ((e.result = f.apply(s, n)), !1 === e.result && e.preventDefault())
        return (
          (e.type = y),
          r ||
            e.isDefaultPrevented() ||
            (d._default && !1 !== d._default.apply(v.pop(), n)) ||
            !V(i) ||
            (l && p(i[y]) && !m(i) && ((a = i[l]) && (i[l] = null), (_.event.triggered = y), e.isPropagationStopped() && h.addEventListener(y, _e), i[y](), e.isPropagationStopped() && h.removeEventListener(y, _e), (_.event.triggered = void 0), a && (i[l] = a))),
          e.result
        )
      }
    },
    simulate: function (t, e, n) {
      var i = _.extend(new _.Event(), n, { type: t, isSimulated: !0 })
      _.event.trigger(i, null, e)
    },
  }),
    _.fn.extend({
      trigger: function (t, e) {
        return this.each(function () {
          _.event.trigger(t, e, this)
        })
      },
      triggerHandler: function (t, e) {
        var n = this[0]
        if (n) return _.event.trigger(t, e, n, !0)
      },
    }),
    h.focusin ||
      _.each({ focus: 'focusin', blur: 'focusout' }, function (t, e) {
        var n = function (t) {
          _.event.simulate(e, t.target, _.event.fix(t))
        }
        _.event.special[e] = {
          setup: function () {
            var i = this.ownerDocument || this.document || this,
              r = Y.access(i, e)
            r || i.addEventListener(t, n, !0), Y.access(i, e, (r || 0) + 1)
          },
          teardown: function () {
            var i = this.ownerDocument || this.document || this,
              r = Y.access(i, e) - 1
            r ? Y.access(i, e, r) : (i.removeEventListener(t, n, !0), Y.remove(i, e))
          },
        }
      })
  var xe = t.location,
    Ee = { guid: Date.now() },
    Te = /\?/
  _.parseXML = function (e) {
    var n
    if (!e || 'string' != typeof e) return null
    try {
      n = new t.DOMParser().parseFromString(e, 'text/xml')
    } catch (t) {
      n = void 0
    }
    return (n && !n.getElementsByTagName('parsererror').length) || _.error('Invalid XML: ' + e), n
  }
  var Se = /\[\]$/,
    Ce = /\r?\n/g,
    Ae = /^(?:submit|button|image|reset|file)$/i,
    ke = /^(?:input|select|textarea|keygen)/i
  function Oe(t, e, n, i) {
    var r
    if (Array.isArray(e))
      _.each(e, function (e, r) {
        n || Se.test(t) ? i(t, r) : Oe(t + '[' + ('object' == typeof r && null != r ? e : '') + ']', r, n, i)
      })
    else if (n || 'object' !== b(e)) i(t, e)
    else for (r in e) Oe(t + '[' + r + ']', e[r], n, i)
  }
  ;(_.param = function (t, e) {
    var n,
      i = [],
      r = function (t, e) {
        var n = p(e) ? e() : e
        i[i.length] = encodeURIComponent(t) + '=' + encodeURIComponent(null == n ? '' : n)
      }
    if (null == t) return ''
    if (Array.isArray(t) || (t.jquery && !_.isPlainObject(t)))
      _.each(t, function () {
        r(this.name, this.value)
      })
    else for (n in t) Oe(n, t[n], e, r)
    return i.join('&')
  }),
    _.fn.extend({
      serialize: function () {
        return _.param(this.serializeArray())
      },
      serializeArray: function () {
        return this.map(function () {
          var t = _.prop(this, 'elements')
          return t ? _.makeArray(t) : this
        })
          .filter(function () {
            var t = this.type
            return this.name && !_(this).is(':disabled') && ke.test(this.nodeName) && !Ae.test(t) && (this.checked || !ht.test(t))
          })
          .map(function (t, e) {
            var n = _(this).val()
            return null == n
              ? null
              : Array.isArray(n)
              ? _.map(n, function (t) {
                  return { name: e.name, value: t.replace(Ce, '\r\n') }
                })
              : { name: e.name, value: n.replace(Ce, '\r\n') }
          })
          .get()
      },
    })
  var De = /%20/g,
    Ne = /#.*$/,
    je = /([?&])_=[^&]*/,
    Ie = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Pe = /^(?:GET|HEAD)$/,
    Le = /^\/\//,
    He = {},
    Me = {},
    qe = '*/'.concat('*'),
    Re = g.createElement('a')
  function We(t) {
    return function (e, n) {
      'string' != typeof e && ((n = e), (e = '*'))
      var i,
        r = 0,
        o = e.toLowerCase().match(L) || []
      if (p(n)) for (; (i = o[r++]); ) '+' === i[0] ? ((i = i.slice(1) || '*'), (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
    }
  }
  function Fe(t, e, n, i) {
    var r = {},
      o = t === Me
    function s(a) {
      var u
      return (
        (r[a] = !0),
        _.each(t[a] || [], function (t, a) {
          var l = a(e, n, i)
          return 'string' != typeof l || o || r[l] ? (o ? !(u = l) : void 0) : (e.dataTypes.unshift(l), s(l), !1)
        }),
        u
      )
    }
    return s(e.dataTypes[0]) || (!r['*'] && s('*'))
  }
  function ze(t, e) {
    var n,
      i,
      r = _.ajaxSettings.flatOptions || {}
    for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n])
    return i && _.extend(!0, t, i), t
  }
  ;(Re.href = xe.href),
    _.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: xe.href,
        type: 'GET',
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xe.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: { '*': qe, text: 'text/plain', html: 'text/html', xml: 'application/xml, text/xml', json: 'application/json, text/javascript' },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
        converters: { '* text': String, 'text html': !0, 'text json': JSON.parse, 'text xml': _.parseXML },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (t, e) {
        return e ? ze(ze(t, _.ajaxSettings), e) : ze(_.ajaxSettings, t)
      },
      ajaxPrefilter: We(He),
      ajaxTransport: We(Me),
      ajax: function (e, n) {
        'object' == typeof e && ((n = e), (e = void 0)), (n = n || {})
        var i,
          r,
          o,
          s,
          a,
          u,
          l,
          c,
          f,
          d,
          h = _.ajaxSetup({}, n),
          p = h.context || h,
          m = h.context && (p.nodeType || p.jquery) ? _(p) : _.event,
          v = _.Deferred(),
          y = _.Callbacks('once memory'),
          b = h.statusCode || {},
          w = {},
          x = {},
          E = 'canceled',
          T = {
            readyState: 0,
            getResponseHeader: function (t) {
              var e
              if (l) {
                if (!s) for (s = {}; (e = Ie.exec(o)); ) s[e[1].toLowerCase() + ' '] = (s[e[1].toLowerCase() + ' '] || []).concat(e[2])
                e = s[t.toLowerCase() + ' ']
              }
              return null == e ? null : e.join(', ')
            },
            getAllResponseHeaders: function () {
              return l ? o : null
            },
            setRequestHeader: function (t, e) {
              return null == l && ((t = x[t.toLowerCase()] = x[t.toLowerCase()] || t), (w[t] = e)), this
            },
            overrideMimeType: function (t) {
              return null == l && (h.mimeType = t), this
            },
            statusCode: function (t) {
              var e
              if (t)
                if (l) T.always(t[T.status])
                else for (e in t) b[e] = [b[e], t[e]]
              return this
            },
            abort: function (t) {
              var e = t || E
              return i && i.abort(e), S(0, e), this
            },
          }
        if ((v.promise(T), (h.url = ((e || h.url || xe.href) + '').replace(Le, xe.protocol + '//')), (h.type = n.method || n.type || h.method || h.type), (h.dataTypes = (h.dataType || '*').toLowerCase().match(L) || ['']), null == h.crossDomain)) {
          u = g.createElement('a')
          try {
            ;(u.href = h.url), (u.href = u.href), (h.crossDomain = Re.protocol + '//' + Re.host != u.protocol + '//' + u.host)
          } catch (t) {
            h.crossDomain = !0
          }
        }
        if ((h.data && h.processData && 'string' != typeof h.data && (h.data = _.param(h.data, h.traditional)), Fe(He, h, n, T), l)) return T
        for (f in ((c = _.event && h.global) && 0 == _.active++ && _.event.trigger('ajaxStart'),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !Pe.test(h.type)),
        (r = h.url.replace(Ne, '')),
        h.hasContent
          ? h.data && h.processData && 0 === (h.contentType || '').indexOf('application/x-www-form-urlencoded') && (h.data = h.data.replace(De, '+'))
          : ((d = h.url.slice(r.length)), h.data && (h.processData || 'string' == typeof h.data) && ((r += (Te.test(r) ? '&' : '?') + h.data), delete h.data), !1 === h.cache && ((r = r.replace(je, '$1')), (d = (Te.test(r) ? '&' : '?') + '_=' + Ee.guid++ + d)), (h.url = r + d)),
        h.ifModified && (_.lastModified[r] && T.setRequestHeader('If-Modified-Since', _.lastModified[r]), _.etag[r] && T.setRequestHeader('If-None-Match', _.etag[r])),
        ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) && T.setRequestHeader('Content-Type', h.contentType),
        T.setRequestHeader('Accept', h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ('*' !== h.dataTypes[0] ? ', ' + qe + '; q=0.01' : '') : h.accepts['*']),
        h.headers))
          T.setRequestHeader(f, h.headers[f])
        if (h.beforeSend && (!1 === h.beforeSend.call(p, T, h) || l)) return T.abort()
        if (((E = 'abort'), y.add(h.complete), T.done(h.success), T.fail(h.error), (i = Fe(Me, h, n, T)))) {
          if (((T.readyState = 1), c && m.trigger('ajaxSend', [T, h]), l)) return T
          h.async &&
            h.timeout > 0 &&
            (a = t.setTimeout(function () {
              T.abort('timeout')
            }, h.timeout))
          try {
            ;(l = !1), i.send(w, S)
          } catch (t) {
            if (l) throw t
            S(-1, t)
          }
        } else S(-1, 'No Transport')
        function S(e, n, s, u) {
          var f,
            d,
            g,
            w,
            x,
            E = n
          l ||
            ((l = !0),
            a && t.clearTimeout(a),
            (i = void 0),
            (o = u || ''),
            (T.readyState = e > 0 ? 4 : 0),
            (f = (e >= 200 && e < 300) || 304 === e),
            s &&
              (w = (function (t, e, n) {
                for (var i, r, o, s, a = t.contents, u = t.dataTypes; '*' === u[0]; ) u.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader('Content-Type'))
                if (i)
                  for (r in a)
                    if (a[r] && a[r].test(i)) {
                      u.unshift(r)
                      break
                    }
                if (u[0] in n) o = u[0]
                else {
                  for (r in n) {
                    if (!u[0] || t.converters[r + ' ' + u[0]]) {
                      o = r
                      break
                    }
                    s || (s = r)
                  }
                  o = o || s
                }
                if (o) return o !== u[0] && u.unshift(o), n[o]
              })(h, T, s)),
            !f && _.inArray('script', h.dataTypes) > -1 && (h.converters['text script'] = function () {}),
            (w = (function (t, e, n, i) {
              var r,
                o,
                s,
                a,
                u,
                l = {},
                c = t.dataTypes.slice()
              if (c[1]) for (s in t.converters) l[s.toLowerCase()] = t.converters[s]
              for (o = c.shift(); o; )
                if ((t.responseFields[o] && (n[t.responseFields[o]] = e), !u && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), (u = o), (o = c.shift())))
                  if ('*' === o) o = u
                  else if ('*' !== u && u !== o) {
                    if (!(s = l[u + ' ' + o] || l['* ' + o]))
                      for (r in l)
                        if ((a = r.split(' '))[1] === o && (s = l[u + ' ' + a[0]] || l['* ' + a[0]])) {
                          !0 === s ? (s = l[r]) : !0 !== l[r] && ((o = a[0]), c.unshift(a[1]))
                          break
                        }
                    if (!0 !== s)
                      if (s && t.throws) e = s(e)
                      else
                        try {
                          e = s(e)
                        } catch (t) {
                          return { state: 'parsererror', error: s ? t : 'No conversion from ' + u + ' to ' + o }
                        }
                  }
              return { state: 'success', data: e }
            })(h, w, T, f)),
            f
              ? (h.ifModified && ((x = T.getResponseHeader('Last-Modified')) && (_.lastModified[r] = x), (x = T.getResponseHeader('etag')) && (_.etag[r] = x)), 204 === e || 'HEAD' === h.type ? (E = 'nocontent') : 304 === e ? (E = 'notmodified') : ((E = w.state), (d = w.data), (f = !(g = w.error))))
              : ((g = E), (!e && E) || ((E = 'error'), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (n || E) + ''),
            f ? v.resolveWith(p, [d, E, T]) : v.rejectWith(p, [T, E, g]),
            T.statusCode(b),
            (b = void 0),
            c && m.trigger(f ? 'ajaxSuccess' : 'ajaxError', [T, h, f ? d : g]),
            y.fireWith(p, [T, E]),
            c && (m.trigger('ajaxComplete', [T, h]), --_.active || _.event.trigger('ajaxStop')))
        }
        return T
      },
      getJSON: function (t, e, n) {
        return _.get(t, e, n, 'json')
      },
      getScript: function (t, e) {
        return _.get(t, void 0, e, 'script')
      },
    }),
    _.each(['get', 'post'], function (t, e) {
      _[e] = function (t, n, i, r) {
        return p(n) && ((r = r || i), (i = n), (n = void 0)), _.ajax(_.extend({ url: t, type: e, dataType: r, data: n, success: i }, _.isPlainObject(t) && t))
      }
    }),
    _.ajaxPrefilter(function (t) {
      var e
      for (e in t.headers) 'content-type' === e.toLowerCase() && (t.contentType = t.headers[e] || '')
    }),
    (_._evalUrl = function (t, e, n) {
      return _.ajax({
        url: t,
        type: 'GET',
        dataType: 'script',
        cache: !0,
        async: !1,
        global: !1,
        converters: { 'text script': function () {} },
        dataFilter: function (t) {
          _.globalEval(t, e, n)
        },
      })
    }),
    _.fn.extend({
      wrapAll: function (t) {
        var e
        return (
          this[0] &&
            (p(t) && (t = t.call(this[0])),
            (e = _(t, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && e.insertBefore(this[0]),
            e
              .map(function () {
                for (var t = this; t.firstElementChild; ) t = t.firstElementChild
                return t
              })
              .append(this)),
          this
        )
      },
      wrapInner: function (t) {
        return p(t)
          ? this.each(function (e) {
              _(this).wrapInner(t.call(this, e))
            })
          : this.each(function () {
              var e = _(this),
                n = e.contents()
              n.length ? n.wrapAll(t) : e.append(t)
            })
      },
      wrap: function (t) {
        var e = p(t)
        return this.each(function (n) {
          _(this).wrapAll(e ? t.call(this, n) : t)
        })
      },
      unwrap: function (t) {
        return (
          this.parent(t)
            .not('body')
            .each(function () {
              _(this).replaceWith(this.childNodes)
            }),
          this
        )
      },
    }),
    (_.expr.pseudos.hidden = function (t) {
      return !_.expr.pseudos.visible(t)
    }),
    (_.expr.pseudos.visible = function (t) {
      return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }),
    (_.ajaxSettings.xhr = function () {
      try {
        return new t.XMLHttpRequest()
      } catch (t) {}
    })
  var Be = { 0: 200, 1223: 204 },
    Ue = _.ajaxSettings.xhr()
  ;(h.cors = !!Ue && 'withCredentials' in Ue),
    (h.ajax = Ue = !!Ue),
    _.ajaxTransport(function (e) {
      var n, i
      if (h.cors || (Ue && !e.crossDomain))
        return {
          send: function (r, o) {
            var s,
              a = e.xhr()
            if ((a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (s in e.xhrFields) a[s] = e.xhrFields[s]
            for (s in (e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r['X-Requested-With'] || (r['X-Requested-With'] = 'XMLHttpRequest'), r)) a.setRequestHeader(s, r[s])
            ;(n = function (t) {
              return function () {
                n &&
                  ((n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                  'abort' === t
                    ? a.abort()
                    : 'error' === t
                    ? 'number' != typeof a.status
                      ? o(0, 'error')
                      : o(a.status, a.statusText)
                    : o(Be[a.status] || a.status, a.statusText, 'text' !== (a.responseType || 'text') || 'string' != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()))
              }
            }),
              (a.onload = n()),
              (i = a.onerror = a.ontimeout = n('error')),
              void 0 !== a.onabort
                ? (a.onabort = i)
                : (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      t.setTimeout(function () {
                        n && i()
                      })
                  }),
              (n = n('abort'))
            try {
              a.send((e.hasContent && e.data) || null)
            } catch (t) {
              if (n) throw t
            }
          },
          abort: function () {
            n && n()
          },
        }
    }),
    _.ajaxPrefilter(function (t) {
      t.crossDomain && (t.contents.script = !1)
    }),
    _.ajaxSetup({
      accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function (t) {
          return _.globalEval(t), t
        },
      },
    }),
    _.ajaxPrefilter('script', function (t) {
      void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = 'GET')
    }),
    _.ajaxTransport('script', function (t) {
      var e, n
      if (t.crossDomain || t.scriptAttrs)
        return {
          send: function (i, r) {
            ;(e = _('<script>')
              .attr(t.scriptAttrs || {})
              .prop({ charset: t.scriptCharset, src: t.url })
              .on(
                'load error',
                (n = function (t) {
                  e.remove(), (n = null), t && r('error' === t.type ? 404 : 200, t.type)
                }),
              )),
              g.head.appendChild(e[0])
          },
          abort: function () {
            n && n()
          },
        }
    })
  var $e,
    Qe = [],
    Ve = /(=)\?(?=&|$)|\?\?/
  _.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var t = Qe.pop() || _.expando + '_' + Ee.guid++
      return (this[t] = !0), t
    },
  }),
    _.ajaxPrefilter('json jsonp', function (e, n, i) {
      var r,
        o,
        s,
        a = !1 !== e.jsonp && (Ve.test(e.url) ? 'url' : 'string' == typeof e.data && 0 === (e.contentType || '').indexOf('application/x-www-form-urlencoded') && Ve.test(e.data) && 'data')
      if (a || 'jsonp' === e.dataTypes[0])
        return (
          (r = e.jsonpCallback = p(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a ? (e[a] = e[a].replace(Ve, '$1' + r)) : !1 !== e.jsonp && (e.url += (Te.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
          (e.converters['script json'] = function () {
            return s || _.error(r + ' was not called'), s[0]
          }),
          (e.dataTypes[0] = 'json'),
          (o = t[r]),
          (t[r] = function () {
            s = arguments
          }),
          i.always(function () {
            void 0 === o ? _(t).removeProp(r) : (t[r] = o), e[r] && ((e.jsonpCallback = n.jsonpCallback), Qe.push(r)), s && p(o) && o(s[0]), (s = o = void 0)
          }),
          'script'
        )
    }),
    (h.createHTMLDocument = ((($e = g.implementation.createHTMLDocument('').body).innerHTML = '<form></form><form></form>'), 2 === $e.childNodes.length)),
    (_.parseHTML = function (t, e, n) {
      return 'string' != typeof t
        ? []
        : ('boolean' == typeof e && ((n = e), (e = !1)),
          e || (h.createHTMLDocument ? (((i = (e = g.implementation.createHTMLDocument('')).createElement('base')).href = g.location.href), e.head.appendChild(i)) : (e = g)),
          (o = !n && []),
          (r = k.exec(t)) ? [e.createElement(r[1])] : ((r = wt([t], e, o)), o && o.length && _(o).remove(), _.merge([], r.childNodes)))
      var i, r, o
    }),
    (_.fn.load = function (t, e, n) {
      var i,
        r,
        o,
        s = this,
        a = t.indexOf(' ')
      return (
        a > -1 && ((i = ge(t.slice(a))), (t = t.slice(0, a))),
        p(e) ? ((n = e), (e = void 0)) : e && 'object' == typeof e && (r = 'POST'),
        s.length > 0 &&
          _.ajax({ url: t, type: r || 'GET', dataType: 'html', data: e })
            .done(function (t) {
              ;(o = arguments), s.html(i ? _('<div>').append(_.parseHTML(t)).find(i) : t)
            })
            .always(
              n &&
                function (t, e) {
                  s.each(function () {
                    n.apply(this, o || [t.responseText, e, t])
                  })
                },
            ),
        this
      )
    }),
    (_.expr.pseudos.animated = function (t) {
      return _.grep(_.timers, function (e) {
        return t === e.elem
      }).length
    }),
    (_.offset = {
      setOffset: function (t, e, n) {
        var i,
          r,
          o,
          s,
          a,
          u,
          l = _.css(t, 'position'),
          c = _(t),
          f = {}
        'static' === l && (t.style.position = 'relative'),
          (a = c.offset()),
          (o = _.css(t, 'top')),
          (u = _.css(t, 'left')),
          ('absolute' === l || 'fixed' === l) && (o + u).indexOf('auto') > -1 ? ((s = (i = c.position()).top), (r = i.left)) : ((s = parseFloat(o) || 0), (r = parseFloat(u) || 0)),
          p(e) && (e = e.call(t, n, _.extend({}, a))),
          null != e.top && (f.top = e.top - a.top + s),
          null != e.left && (f.left = e.left - a.left + r),
          'using' in e ? e.using.call(t, f) : ('number' == typeof f.top && (f.top += 'px'), 'number' == typeof f.left && (f.left += 'px'), c.css(f))
      },
    }),
    _.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                _.offset.setOffset(this, t, e)
              })
        var e,
          n,
          i = this[0]
        return i ? (i.getClientRects().length ? ((e = i.getBoundingClientRect()), (n = i.ownerDocument.defaultView), { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0
      },
      position: function () {
        if (this[0]) {
          var t,
            e,
            n,
            i = this[0],
            r = { top: 0, left: 0 }
          if ('fixed' === _.css(i, 'position')) e = i.getBoundingClientRect()
          else {
            for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && 'static' === _.css(t, 'position'); ) t = t.parentNode
            t && t !== i && 1 === t.nodeType && (((r = _(t).offset()).top += _.css(t, 'borderTopWidth', !0)), (r.left += _.css(t, 'borderLeftWidth', !0)))
          }
          return { top: e.top - r.top - _.css(i, 'marginTop', !0), left: e.left - r.left - _.css(i, 'marginLeft', !0) }
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var t = this.offsetParent; t && 'static' === _.css(t, 'position'); ) t = t.offsetParent
          return t || it
        })
      },
    }),
    _.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (t, e) {
      var n = 'pageYOffset' === e
      _.fn[t] = function (i) {
        return z(
          this,
          function (t, i, r) {
            var o
            if ((m(t) ? (o = t) : 9 === t.nodeType && (o = t.defaultView), void 0 === r)) return o ? o[e] : t[i]
            o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : (t[i] = r)
          },
          t,
          i,
          arguments.length,
        )
      }
    }),
    _.each(['top', 'left'], function (t, e) {
      _.cssHooks[e] = Ut(h.pixelPosition, function (t, n) {
        if (n) return (n = Bt(t, e)), Rt.test(n) ? _(t).position()[e] + 'px' : n
      })
    }),
    _.each({ Height: 'height', Width: 'width' }, function (t, e) {
      _.each({ padding: 'inner' + t, content: e, '': 'outer' + t }, function (n, i) {
        _.fn[i] = function (r, o) {
          var s = arguments.length && (n || 'boolean' != typeof r),
            a = n || (!0 === r || !0 === o ? 'margin' : 'border')
          return z(
            this,
            function (e, n, r) {
              var o
              return m(e)
                ? 0 === i.indexOf('outer')
                  ? e['inner' + t]
                  : e.document.documentElement['client' + t]
                : 9 === e.nodeType
                ? ((o = e.documentElement), Math.max(e.body['scroll' + t], o['scroll' + t], e.body['offset' + t], o['offset' + t], o['client' + t]))
                : void 0 === r
                ? _.css(e, n, a)
                : _.style(e, n, r, a)
            },
            e,
            s ? r : void 0,
            s,
          )
        }
      })
    }),
    _.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function (t, e) {
      _.fn[e] = function (t) {
        return this.on(e, t)
      }
    }),
    _.fn.extend({
      bind: function (t, e, n) {
        return this.on(t, null, e, n)
      },
      unbind: function (t, e) {
        return this.off(t, null, e)
      },
      delegate: function (t, e, n, i) {
        return this.on(e, t, n, i)
      },
      undelegate: function (t, e, n) {
        return 1 === arguments.length ? this.off(t, '**') : this.off(e, t || '**', n)
      },
      hover: function (t, e) {
        return this.mouseenter(t).mouseleave(e || t)
      },
    }),
    _.each('blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(' '), function (t, e) {
      _.fn[e] = function (t, n) {
        return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
      }
    })
  var Ke = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
  ;(_.proxy = function (t, e) {
    var n, i, o
    if (('string' == typeof e && ((n = t[e]), (e = t), (t = n)), p(t)))
      return (
        (i = r.call(arguments, 2)),
        ((o = function () {
          return t.apply(e || this, i.concat(r.call(arguments)))
        }).guid = t.guid =
          t.guid || _.guid++),
        o
      )
  }),
    (_.holdReady = function (t) {
      t ? _.readyWait++ : _.ready(!0)
    }),
    (_.isArray = Array.isArray),
    (_.parseJSON = JSON.parse),
    (_.nodeName = A),
    (_.isFunction = p),
    (_.isWindow = m),
    (_.camelCase = Q),
    (_.type = b),
    (_.now = Date.now),
    (_.isNumeric = function (t) {
      var e = _.type(t)
      return ('number' === e || 'string' === e) && !isNaN(t - parseFloat(t))
    }),
    (_.trim = function (t) {
      return null == t ? '' : (t + '').replace(Ke, '')
    }),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return _
      })
  var Ye = t.jQuery,
    Xe = t.$
  return (
    (_.noConflict = function (e) {
      return t.$ === _ && (t.$ = Xe), e && t.jQuery === _ && (t.jQuery = Ye), _
    }),
    void 0 === e && (t.jQuery = t.$ = _),
    _
  )
}),
  (function (t, e) {
    'object' == typeof exports && 'undefined' != typeof module ? (module.exports = e()) : 'function' == typeof define && define.amd ? define(e) : (t.Popper = e())
  })(this, function () {
    'use strict'
    function t(t) {
      return t && '[object Function]' === {}.toString.call(t)
    }
    function e(t, e) {
      if (1 !== t.nodeType) return []
      var n = window.getComputedStyle(t, null)
      return e ? n[e] : n
    }
    function n(t) {
      return 'HTML' === t.nodeName ? t : t.parentNode || t.host
    }
    function i(t) {
      if (!t || -1 !== ['HTML', 'BODY', '#document'].indexOf(t.nodeName)) return window.document.body
      var r = e(t),
        o = r.overflow,
        s = r.overflowX,
        a = r.overflowY
      return /(auto|scroll)/.test(o + a + s) ? t : i(n(t))
    }
    function r(t) {
      var n = t && t.offsetParent,
        i = n && n.nodeName
      return i && 'BODY' !== i && 'HTML' !== i ? (-1 !== ['TD', 'TABLE'].indexOf(n.nodeName) && 'static' === e(n, 'position') ? r(n) : n) : window.document.documentElement
    }
    function o(t) {
      return null === t.parentNode ? t : o(t.parentNode)
    }
    function s(t, e) {
      if (!(t && t.nodeType && e && e.nodeType)) return window.document.documentElement
      var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? t : e,
        a = n ? e : t,
        u = document.createRange()
      u.setStart(i, 0), u.setEnd(a, 0)
      var l = u.commonAncestorContainer
      if ((t !== l && e !== l) || i.contains(a))
        return (function (t) {
          var e = t.nodeName
          return 'BODY' !== e && ('HTML' === e || r(t.firstElementChild) === t)
        })(l)
          ? l
          : r(l)
      var c = o(t)
      return c.host ? s(c.host, e) : s(t, o(e).host)
    }
    function a(t) {
      var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
        n = 'top' === e ? 'scrollTop' : 'scrollLeft',
        i = t.nodeName
      if ('BODY' === i || 'HTML' === i) {
        var r = window.document.documentElement,
          o = window.document.scrollingElement || r
        return o[n]
      }
      return t[n]
    }
    function u(t, e) {
      var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        i = a(e, 'top'),
        r = a(e, 'left'),
        o = n ? -1 : 1
      return (t.top += i * o), (t.bottom += i * o), (t.left += r * o), (t.right += r * o), t
    }
    function l(t, e) {
      var n = 'x' === e ? 'Left' : 'Top',
        i = 'Left' == n ? 'Right' : 'Bottom'
      return +t['border' + n + 'Width'].split('px')[0] + +t['border' + i + 'Width'].split('px')[0]
    }
    function c(t, e, n, i) {
      return F(e['offset' + t], e['scroll' + t], n['client' + t], n['offset' + t], n['scroll' + t], Y() ? n['offset' + t] + i['margin' + ('Height' === t ? 'Top' : 'Left')] + i['margin' + ('Height' === t ? 'Bottom' : 'Right')] : 0)
    }
    function f() {
      var t = window.document.body,
        e = window.document.documentElement,
        n = Y() && window.getComputedStyle(e)
      return { height: c('Height', t, e, n), width: c('Width', t, e, n) }
    }
    function d(t) {
      return Z({}, t, { right: t.left + t.width, bottom: t.top + t.height })
    }
    function h(t) {
      var n = {}
      if (Y())
        try {
          n = t.getBoundingClientRect()
          var i = a(t, 'top'),
            r = a(t, 'left')
          ;(n.top += i), (n.left += r), (n.bottom += i), (n.right += r)
        } catch (t) {}
      else n = t.getBoundingClientRect()
      var o = { left: n.left, top: n.top, width: n.right - n.left, height: n.bottom - n.top },
        s = 'HTML' === t.nodeName ? f() : {},
        u = s.width || t.clientWidth || o.right - o.left,
        c = s.height || t.clientHeight || o.bottom - o.top,
        h = t.offsetWidth - u,
        p = t.offsetHeight - c
      if (h || p) {
        var m = e(t)
        ;(h -= l(m, 'x')), (p -= l(m, 'y')), (o.width -= h), (o.height -= p)
      }
      return d(o)
    }
    function p(t, n) {
      var r = Y(),
        o = 'HTML' === n.nodeName,
        s = h(t),
        a = h(n),
        l = i(t),
        c = e(n),
        f = +c.borderTopWidth.split('px')[0],
        p = +c.borderLeftWidth.split('px')[0],
        m = d({ top: s.top - a.top - f, left: s.left - a.left - p, width: s.width, height: s.height })
      if (((m.marginTop = 0), (m.marginLeft = 0), !r && o)) {
        var g = +c.marginTop.split('px')[0],
          v = +c.marginLeft.split('px')[0]
        ;(m.top -= f - g), (m.bottom -= f - g), (m.left -= p - v), (m.right -= p - v), (m.marginTop = g), (m.marginLeft = v)
      }
      return (r ? n.contains(l) : n === l && 'BODY' !== l.nodeName) && (m = u(m, n)), m
    }
    function m(t) {
      var e = window.document.documentElement,
        n = p(t, e),
        i = F(e.clientWidth, window.innerWidth || 0),
        r = F(e.clientHeight, window.innerHeight || 0),
        o = a(e),
        s = a(e, 'left')
      return d({ top: o - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: i, height: r })
    }
    function g(t) {
      var i = t.nodeName
      return 'BODY' !== i && 'HTML' !== i && ('fixed' === e(t, 'position') || g(n(t)))
    }
    function v(t, e, r, o) {
      var a = { top: 0, left: 0 },
        u = s(t, e)
      if ('viewport' === o) a = m(u)
      else {
        var l
        'scrollParent' === o ? 'BODY' === (l = i(n(t))).nodeName && (l = window.document.documentElement) : (l = 'window' === o ? window.document.documentElement : o)
        var c = p(l, u)
        if ('HTML' !== l.nodeName || g(u)) a = c
        else {
          var d = f(),
            h = d.height,
            v = d.width
          ;(a.top += c.top - c.marginTop), (a.bottom = h + c.top), (a.left += c.left - c.marginLeft), (a.right = v + c.left)
        }
      }
      return (a.left += r), (a.top += r), (a.right -= r), (a.bottom -= r), a
    }
    function y(t) {
      return t.width * t.height
    }
    function b(t, e, n, i, r) {
      var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0
      if (-1 === t.indexOf('auto')) return t
      var s = v(n, i, o, r),
        a = { top: { width: s.width, height: e.top - s.top }, right: { width: s.right - e.right, height: s.height }, bottom: { width: s.width, height: s.bottom - e.bottom }, left: { width: e.left - s.left, height: s.height } },
        u = Object.keys(a)
          .map(function (t) {
            return Z({ key: t }, a[t], { area: y(a[t]) })
          })
          .sort(function (t, e) {
            return e.area - t.area
          }),
        l = u.filter(function (t) {
          var e = t.width,
            i = t.height
          return e >= n.clientWidth && i >= n.clientHeight
        }),
        c = 0 < l.length ? l[0].key : u[0].key,
        f = t.split('-')[1]
      return c + (f ? '-' + f : '')
    }
    function w(t, e, n) {
      return p(n, s(e, n))
    }
    function _(t) {
      var e = window.getComputedStyle(t),
        n = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
        i = parseFloat(e.marginLeft) + parseFloat(e.marginRight)
      return { width: t.offsetWidth + i, height: t.offsetHeight + n }
    }
    function x(t) {
      var e = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
      return t.replace(/left|right|bottom|top/g, function (t) {
        return e[t]
      })
    }
    function E(t, e, n) {
      n = n.split('-')[0]
      var i = _(t),
        r = { width: i.width, height: i.height },
        o = -1 !== ['right', 'left'].indexOf(n),
        s = o ? 'top' : 'left',
        a = o ? 'left' : 'top',
        u = o ? 'height' : 'width',
        l = o ? 'width' : 'height'
      return (r[s] = e[s] + e[u] / 2 - i[u] / 2), (r[a] = n === a ? e[a] - i[l] : e[x(a)]), r
    }
    function T(t, e) {
      return Array.prototype.find ? t.find(e) : t.filter(e)[0]
    }
    function S(e, n, i) {
      return (
        (void 0 === i
          ? e
          : e.slice(
              0,
              (function (t, e, n) {
                if (Array.prototype.findIndex)
                  return t.findIndex(function (t) {
                    return t[e] === n
                  })
                var i = T(t, function (t) {
                  return t[e] === n
                })
                return t.indexOf(i)
              })(e, 'name', i),
            )
        ).forEach(function (e) {
          e.function && console.warn('`modifier.function` is deprecated, use `modifier.fn`!')
          var i = e.function || e.fn
          e.enabled && t(i) && ((n.offsets.popper = d(n.offsets.popper)), (n.offsets.reference = d(n.offsets.reference)), (n = i(n, e)))
        }),
        n
      )
    }
    function C() {
      if (!this.state.isDestroyed) {
        var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} }
        ;(t.offsets.reference = w(this.state, this.popper, this.reference)),
          (t.placement = b(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding)),
          (t.originalPlacement = t.placement),
          (t.offsets.popper = E(this.popper, t.offsets.reference, t.placement)),
          (t.offsets.popper.position = 'absolute'),
          (t = S(this.modifiers, t)),
          this.state.isCreated ? this.options.onUpdate(t) : ((this.state.isCreated = !0), this.options.onCreate(t))
      }
    }
    function A(t, e) {
      return t.some(function (t) {
        var n = t.name
        return t.enabled && n === e
      })
    }
    function k(t) {
      for (var e = [!1, 'ms', 'Webkit', 'Moz', 'O'], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length - 1; i++) {
        var r = e[i],
          o = r ? '' + r + n : t
        if (void 0 !== window.document.body.style[o]) return o
      }
      return null
    }
    function O() {
      return (
        (this.state.isDestroyed = !0),
        A(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), (this.popper.style.left = ''), (this.popper.style.position = ''), (this.popper.style.top = ''), (this.popper.style[k('transform')] = '')),
        this.disableEventListeners(),
        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
        this
      )
    }
    function D(t, e, n, r) {
      var o = 'BODY' === t.nodeName,
        s = o ? window : t
      s.addEventListener(e, n, { passive: !0 }), o || D(i(s.parentNode), e, n, r), r.push(s)
    }
    function N(t, e, n, r) {
      ;(n.updateBound = r), window.addEventListener('resize', n.updateBound, { passive: !0 })
      var o = i(t)
      return D(o, 'scroll', n.updateBound, n.scrollParents), (n.scrollElement = o), (n.eventsEnabled = !0), n
    }
    function j() {
      this.state.eventsEnabled || (this.state = N(this.reference, this.options, this.state, this.scheduleUpdate))
    }
    function I() {
      this.state.eventsEnabled &&
        (window.cancelAnimationFrame(this.scheduleUpdate),
        (this.state = (function (t, e) {
          return (
            window.removeEventListener('resize', e.updateBound),
            e.scrollParents.forEach(function (t) {
              t.removeEventListener('scroll', e.updateBound)
            }),
            (e.updateBound = null),
            (e.scrollParents = []),
            (e.scrollElement = null),
            (e.eventsEnabled = !1),
            e
          )
        })(this.reference, this.state)))
    }
    function P(t) {
      return '' !== t && !isNaN(parseFloat(t)) && isFinite(t)
    }
    function L(t, e) {
      Object.keys(e).forEach(function (n) {
        var i = ''
        ;-1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(n) && P(e[n]) && (i = 'px'), (t.style[n] = e[n] + i)
      })
    }
    function H(t, e, n) {
      var i = T(t, function (t) {
          return t.name === e
        }),
        r =
          !!i &&
          t.some(function (t) {
            return t.name === n && t.enabled && t.order < i.order
          })
      if (!r) {
        var o = '`' + e + '`'
        console.warn('`' + n + '` modifier is required by ' + o + ' modifier in order to work, be sure to include it before ' + o + '!')
      }
      return r
    }
    function M(t) {
      var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        n = et.indexOf(t),
        i = et.slice(n + 1).concat(et.slice(0, n))
      return e ? i.reverse() : i
    }
    function q(t, e, n, i) {
      var r = [0, 0],
        o = -1 !== ['right', 'left'].indexOf(i),
        s = t.split(/(\+|\-)/).map(function (t) {
          return t.trim()
        }),
        a = s.indexOf(
          T(s, function (t) {
            return -1 !== t.search(/,|\s/)
          }),
        )
      s[a] && -1 === s[a].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.')
      var u = /\s*,\s*|\s+/,
        l = -1 === a ? [s] : [s.slice(0, a).concat([s[a].split(u)[0]]), [s[a].split(u)[1]].concat(s.slice(a + 1))]
      return (
        (l = l.map(function (t, i) {
          var r = (1 === i ? !o : o) ? 'height' : 'width',
            s = !1
          return t
            .reduce(function (t, e) {
              return '' === t[t.length - 1] && -1 !== ['+', '-'].indexOf(e) ? ((t[t.length - 1] = e), (s = !0), t) : s ? ((t[t.length - 1] += e), (s = !1), t) : t.concat(e)
            }, [])
            .map(function (t) {
              return (function (t, e, n, i) {
                var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                  o = +r[1],
                  s = r[2]
                if (!o) return t
                if (0 === s.indexOf('%')) {
                  var a
                  switch (s) {
                    case '%p':
                      a = n
                      break
                    case '%':
                    case '%r':
                    default:
                      a = i
                  }
                  return (d(a)[e] / 100) * o
                }
                return 'vh' === s || 'vw' === s ? (('vh' === s ? F(document.documentElement.clientHeight, window.innerHeight || 0) : F(document.documentElement.clientWidth, window.innerWidth || 0)) / 100) * o : o
              })(t, r, e, n)
            })
        })).forEach(function (t, e) {
          t.forEach(function (n, i) {
            P(n) && (r[e] += n * ('-' === t[i - 1] ? -1 : 1))
          })
        }),
        r
      )
    }
    for (var R = Math.min, W = Math.floor, F = Math.max, z = ['native code', '[object MutationObserverConstructor]'], B = 'undefined' != typeof window, U = ['Edge', 'Trident', 'Firefox'], $ = 0, Q = 0; Q < U.length; Q += 1)
      if (B && 0 <= navigator.userAgent.indexOf(U[Q])) {
        $ = 1
        break
      }
    var V,
      K =
        B &&
        (function (t) {
          return z.some(function (e) {
            return -1 < (t || '').toString().indexOf(e)
          })
        })(window.MutationObserver)
          ? function (t) {
              var e = !1,
                n = 0,
                i = document.createElement('span')
              return (
                new MutationObserver(function () {
                  t(), (e = !1)
                }).observe(i, { attributes: !0 }),
                function () {
                  e || ((e = !0), i.setAttribute('x-index', n), ++n)
                }
              )
            }
          : function (t) {
              var e = !1
              return function () {
                e ||
                  ((e = !0),
                  setTimeout(function () {
                    ;(e = !1), t()
                  }, $))
              }
            },
      Y = function () {
        return null == V && (V = -1 !== navigator.appVersion.indexOf('MSIE 10')), V
      },
      X = function (t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
      },
      G = (function () {
        function t(t, e) {
          for (var n, i = 0; i < e.length; i++) ((n = e[i]).enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
        return function (e, n, i) {
          return n && t(e.prototype, n), i && t(e, i), e
        }
      })(),
      J = function (t, e, n) {
        return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t
      },
      Z =
        Object.assign ||
        function (t) {
          for (var e, n = 1; n < arguments.length; n++) for (var i in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
          return t
        },
      tt = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
      et = tt.slice(3),
      nt = 'flip',
      it = 'clockwise',
      rt = 'counterclockwise',
      ot = (function () {
        function e(n, i) {
          var r = this,
            o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}
          X(this, e),
            (this.scheduleUpdate = function () {
              return requestAnimationFrame(r.update)
            }),
            (this.update = K(this.update.bind(this))),
            (this.options = Z({}, e.Defaults, o)),
            (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
            (this.reference = n.jquery ? n[0] : n),
            (this.popper = i.jquery ? i[0] : i),
            (this.options.modifiers = {}),
            Object.keys(Z({}, e.Defaults.modifiers, o.modifiers)).forEach(function (t) {
              r.options.modifiers[t] = Z({}, e.Defaults.modifiers[t] || {}, o.modifiers ? o.modifiers[t] : {})
            }),
            (this.modifiers = Object.keys(this.options.modifiers)
              .map(function (t) {
                return Z({ name: t }, r.options.modifiers[t])
              })
              .sort(function (t, e) {
                return t.order - e.order
              })),
            this.modifiers.forEach(function (e) {
              e.enabled && t(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state)
            }),
            this.update()
          var s = this.options.eventsEnabled
          s && this.enableEventListeners(), (this.state.eventsEnabled = s)
        }
        return (
          G(e, [
            {
              key: 'update',
              value: function () {
                return C.call(this)
              },
            },
            {
              key: 'destroy',
              value: function () {
                return O.call(this)
              },
            },
            {
              key: 'enableEventListeners',
              value: function () {
                return j.call(this)
              },
            },
            {
              key: 'disableEventListeners',
              value: function () {
                return I.call(this)
              },
            },
          ]),
          e
        )
      })()
    return (
      (ot.Utils = ('undefined' == typeof window ? global : window).PopperUtils),
      (ot.placements = tt),
      (ot.Defaults = {
        placement: 'bottom',
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () {},
        onUpdate: function () {},
        modifiers: {
          shift: {
            order: 100,
            enabled: !0,
            fn: function (t) {
              var e = t.placement,
                n = e.split('-')[0],
                i = e.split('-')[1]
              if (i) {
                var r = t.offsets,
                  o = r.reference,
                  s = r.popper,
                  a = -1 !== ['bottom', 'top'].indexOf(n),
                  u = a ? 'left' : 'top',
                  l = a ? 'width' : 'height',
                  c = { start: J({}, u, o[u]), end: J({}, u, o[u] + o[l] - s[l]) }
                t.offsets.popper = Z({}, s, c[i])
              }
              return t
            },
          },
          offset: {
            order: 200,
            enabled: !0,
            fn: function (t, e) {
              var n,
                i = e.offset,
                r = t.placement,
                o = t.offsets,
                s = o.popper,
                a = o.reference,
                u = r.split('-')[0]
              return (n = P(+i) ? [+i, 0] : q(i, s, a, u)), 'left' === u ? ((s.top += n[0]), (s.left -= n[1])) : 'right' === u ? ((s.top += n[0]), (s.left += n[1])) : 'top' === u ? ((s.left += n[0]), (s.top -= n[1])) : 'bottom' === u && ((s.left += n[0]), (s.top += n[1])), (t.popper = s), t
            },
            offset: 0,
          },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: function (t, e) {
              var n = e.boundariesElement || r(t.instance.popper)
              t.instance.reference === n && (n = r(n))
              var i = v(t.instance.popper, t.instance.reference, e.padding, n)
              e.boundaries = i
              var o = e.priority,
                s = t.offsets.popper,
                a = {
                  primary: function (t) {
                    var n = s[t]
                    return s[t] < i[t] && !e.escapeWithReference && (n = F(s[t], i[t])), J({}, t, n)
                  },
                  secondary: function (t) {
                    var n = 'right' === t ? 'left' : 'top',
                      r = s[n]
                    return s[t] > i[t] && !e.escapeWithReference && (r = R(s[n], i[t] - ('right' === t ? s.width : s.height))), J({}, n, r)
                  },
                }
              return (
                o.forEach(function (t) {
                  var e = -1 === ['left', 'top'].indexOf(t) ? 'secondary' : 'primary'
                  s = Z({}, s, a[e](t))
                }),
                (t.offsets.popper = s),
                t
              )
            },
            priority: ['left', 'right', 'top', 'bottom'],
            padding: 5,
            boundariesElement: 'scrollParent',
          },
          keepTogether: {
            order: 400,
            enabled: !0,
            fn: function (t) {
              var e = t.offsets,
                n = e.popper,
                i = e.reference,
                r = t.placement.split('-')[0],
                o = W,
                s = -1 !== ['top', 'bottom'].indexOf(r),
                a = s ? 'right' : 'bottom',
                u = s ? 'left' : 'top',
                l = s ? 'width' : 'height'
              return n[a] < o(i[u]) && (t.offsets.popper[u] = o(i[u]) - n[l]), n[u] > o(i[a]) && (t.offsets.popper[u] = o(i[a])), t
            },
          },
          arrow: {
            order: 500,
            enabled: !0,
            fn: function (t, n) {
              if (!H(t.instance.modifiers, 'arrow', 'keepTogether')) return t
              var i = n.element
              if ('string' == typeof i) {
                if (!(i = t.instance.popper.querySelector(i))) return t
              } else if (!t.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), t
              var r = t.placement.split('-')[0],
                o = t.offsets,
                s = o.popper,
                a = o.reference,
                u = -1 !== ['left', 'right'].indexOf(r),
                l = u ? 'height' : 'width',
                c = u ? 'Top' : 'Left',
                f = c.toLowerCase(),
                h = u ? 'left' : 'top',
                p = u ? 'bottom' : 'right',
                m = _(i)[l]
              a[p] - m < s[f] && (t.offsets.popper[f] -= s[f] - (a[p] - m)), a[f] + m > s[p] && (t.offsets.popper[f] += a[f] + m - s[p])
              var g = a[f] + a[l] / 2 - m / 2,
                v = e(t.instance.popper, 'margin' + c).replace('px', ''),
                y = g - d(t.offsets.popper)[f] - v
              return (y = F(R(s[l] - m, y), 0)), (t.arrowElement = i), (t.offsets.arrow = {}), (t.offsets.arrow[f] = Math.round(y)), (t.offsets.arrow[h] = ''), t
            },
            element: '[x-arrow]',
          },
          flip: {
            order: 600,
            enabled: !0,
            fn: function (t, e) {
              if (A(t.instance.modifiers, 'inner')) return t
              if (t.flipped && t.placement === t.originalPlacement) return t
              var n = v(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement),
                i = t.placement.split('-')[0],
                r = x(i),
                o = t.placement.split('-')[1] || '',
                s = []
              switch (e.behavior) {
                case nt:
                  s = [i, r]
                  break
                case it:
                  s = M(i)
                  break
                case rt:
                  s = M(i, !0)
                  break
                default:
                  s = e.behavior
              }
              return (
                s.forEach(function (a, u) {
                  if (i !== a || s.length === u + 1) return t
                  ;(i = t.placement.split('-')[0]), (r = x(i))
                  var l = t.offsets.popper,
                    c = t.offsets.reference,
                    f = W,
                    d = ('left' === i && f(l.right) > f(c.left)) || ('right' === i && f(l.left) < f(c.right)) || ('top' === i && f(l.bottom) > f(c.top)) || ('bottom' === i && f(l.top) < f(c.bottom)),
                    h = f(l.left) < f(n.left),
                    p = f(l.right) > f(n.right),
                    m = f(l.top) < f(n.top),
                    g = f(l.bottom) > f(n.bottom),
                    v = ('left' === i && h) || ('right' === i && p) || ('top' === i && m) || ('bottom' === i && g),
                    y = -1 !== ['top', 'bottom'].indexOf(i),
                    b = !!e.flipVariations && ((y && 'start' === o && h) || (y && 'end' === o && p) || (!y && 'start' === o && m) || (!y && 'end' === o && g))
                  ;(d || v || b) &&
                    ((t.flipped = !0),
                    (d || v) && (i = s[u + 1]),
                    b &&
                      (o = (function (t) {
                        return 'end' === t ? 'start' : 'start' === t ? 'end' : t
                      })(o)),
                    (t.placement = i + (o ? '-' + o : '')),
                    (t.offsets.popper = Z({}, t.offsets.popper, E(t.instance.popper, t.offsets.reference, t.placement))),
                    (t = S(t.instance.modifiers, t, 'flip')))
                }),
                t
              )
            },
            behavior: 'flip',
            padding: 5,
            boundariesElement: 'viewport',
          },
          inner: {
            order: 700,
            enabled: !1,
            fn: function (t) {
              var e = t.placement,
                n = e.split('-')[0],
                i = t.offsets,
                r = i.popper,
                o = i.reference,
                s = -1 !== ['left', 'right'].indexOf(n),
                a = -1 === ['top', 'left'].indexOf(n)
              return (r[s ? 'left' : 'top'] = o[n] - (a ? r[s ? 'width' : 'height'] : 0)), (t.placement = x(e)), (t.offsets.popper = d(r)), t
            },
          },
          hide: {
            order: 800,
            enabled: !0,
            fn: function (t) {
              if (!H(t.instance.modifiers, 'hide', 'preventOverflow')) return t
              var e = t.offsets.reference,
                n = T(t.instance.modifiers, function (t) {
                  return 'preventOverflow' === t.name
                }).boundaries
              if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                if (!0 === t.hide) return t
                ;(t.hide = !0), (t.attributes['x-out-of-boundaries'] = '')
              } else {
                if (!1 === t.hide) return t
                ;(t.hide = !1), (t.attributes['x-out-of-boundaries'] = !1)
              }
              return t
            },
          },
          computeStyle: {
            order: 850,
            enabled: !0,
            fn: function (t, e) {
              var n = e.x,
                i = e.y,
                o = t.offsets.popper,
                s = T(t.instance.modifiers, function (t) {
                  return 'applyStyle' === t.name
                }).gpuAcceleration
              void 0 !== s && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!')
              var a,
                u,
                l = void 0 === s ? e.gpuAcceleration : s,
                c = h(r(t.instance.popper)),
                f = { position: o.position },
                d = { left: W(o.left), top: W(o.top), bottom: W(o.bottom), right: W(o.right) },
                p = 'bottom' === n ? 'top' : 'bottom',
                m = 'right' === i ? 'left' : 'right',
                g = k('transform')
              if (((u = 'bottom' == p ? -c.height + d.bottom : d.top), (a = 'right' == m ? -c.width + d.right : d.left), l && g)) (f[g] = 'translate3d(' + a + 'px, ' + u + 'px, 0)'), (f[p] = 0), (f[m] = 0), (f.willChange = 'transform')
              else {
                var v = 'bottom' == p ? -1 : 1,
                  y = 'right' == m ? -1 : 1
                ;(f[p] = u * v), (f[m] = a * y), (f.willChange = p + ', ' + m)
              }
              var b = { 'x-placement': t.placement }
              return (t.attributes = Z({}, b, t.attributes)), (t.styles = Z({}, f, t.styles)), (t.arrowStyles = Z({}, t.offsets.arrow, t.arrowStyles)), t
            },
            gpuAcceleration: !0,
            x: 'bottom',
            y: 'right',
          },
          applyStyle: {
            order: 900,
            enabled: !0,
            fn: function (t) {
              return (
                L(t.instance.popper, t.styles),
                (function (t, e) {
                  Object.keys(e).forEach(function (n) {
                    !1 === e[n] ? t.removeAttribute(n) : t.setAttribute(n, e[n])
                  })
                })(t.instance.popper, t.attributes),
                t.arrowElement && Object.keys(t.arrowStyles).length && L(t.arrowElement, t.arrowStyles),
                t
              )
            },
            onLoad: function (t, e, n, i, r) {
              var o = w(0, e, t),
                s = b(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding)
              return e.setAttribute('x-placement', s), L(e, { position: 'absolute' }), n
            },
            gpuAcceleration: void 0,
          },
        },
      }),
      ot
    )
  }),
  (function (t, e) {
    'object' == typeof exports && 'undefined' != typeof module ? e(exports, require('jquery'), require('popper.js')) : 'function' == typeof define && define.amd ? define(['exports', 'jquery', 'popper.js'], e) : e(((t = t || self).bootstrap = {}), t.jQuery, t.Popper)
  })(this, function (t, e, n) {
    'use strict'
    function i(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n]
        ;(i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }
    function r(t, e, n) {
      return e && i(t.prototype, e), n && i(t, n), t
    }
    function o(t, e) {
      var n = Object.keys(t)
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t)
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          })),
          n.push.apply(n, i)
      }
      return n
    }
    function s(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {}
        e % 2
          ? o(Object(n), !0).forEach(function (e) {
              var i, r, o
              ;(i = t), (o = n[(r = e)]), r in i ? Object.defineProperty(i, r, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : (i[r] = o)
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : o(Object(n)).forEach(function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            })
      }
      return t
    }
    ;(e = e && e.hasOwnProperty('default') ? e.default : e), (n = n && n.hasOwnProperty('default') ? n.default : n)
    var a = 'transitionend'
    var u = {
      TRANSITION_END: 'bsTransitionEnd',
      getUID: function (t) {
        for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
        return t
      },
      getSelectorFromElement: function (t) {
        var e = t.getAttribute('data-target')
        if (!e || '#' === e) {
          var n = t.getAttribute('href')
          e = n && '#' !== n ? n.trim() : ''
        }
        try {
          return document.querySelector(e) ? e : null
        } catch (t) {
          return null
        }
      },
      getTransitionDurationFromElement: function (t) {
        if (!t) return 0
        var n = e(t).css('transition-duration'),
          i = e(t).css('transition-delay'),
          r = parseFloat(n),
          o = parseFloat(i)
        return r || o ? ((n = n.split(',')[0]), (i = i.split(',')[0]), 1e3 * (parseFloat(n) + parseFloat(i))) : 0
      },
      reflow: function (t) {
        return t.offsetHeight
      },
      triggerTransitionEnd: function (t) {
        e(t).trigger(a)
      },
      supportsTransitionEnd: function () {
        return Boolean(a)
      },
      isElement: function (t) {
        return (t[0] || t).nodeType
      },
      typeCheckConfig: function (t, e, n) {
        for (var i in n)
          if (Object.prototype.hasOwnProperty.call(n, i)) {
            var r = n[i],
              o = e[i],
              s =
                o && u.isElement(o)
                  ? 'element'
                  : ((a = o),
                    {}.toString
                      .call(a)
                      .match(/\s([a-z]+)/i)[1]
                      .toLowerCase())
            if (!new RegExp(r).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
          }
        var a
      },
      findShadowRoot: function (t) {
        if (!document.documentElement.attachShadow) return null
        if ('function' != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? u.findShadowRoot(t.parentNode) : null
        var e = t.getRootNode()
        return e instanceof ShadowRoot ? e : null
      },
      jQueryDetection: function () {
        if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.")
        var t = e.fn.jquery.split(' ')[0].split('.')
        if ((t[0] < 2 && t[1] < 9) || (1 === t[0] && 9 === t[1] && t[2] < 1) || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
      },
    }
    u.jQueryDetection(),
      (e.fn.emulateTransitionEnd = function (t) {
        var n = this,
          i = !1
        return (
          e(this).one(u.TRANSITION_END, function () {
            i = !0
          }),
          setTimeout(function () {
            i || u.triggerTransitionEnd(n)
          }, t),
          this
        )
      }),
      (e.event.special[u.TRANSITION_END] = {
        bindType: a,
        delegateType: a,
        handle: function (t) {
          if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
        },
      })
    var l = 'alert',
      c = 'bs.alert',
      f = '.' + c,
      d = e.fn[l],
      h = { CLOSE: 'close' + f, CLOSED: 'closed' + f, CLICK_DATA_API: 'click' + f + '.data-api' },
      p = (function () {
        function t(t) {
          this._element = t
        }
        var n = t.prototype
        return (
          (n.close = function (t) {
            var e = this._element
            t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
          }),
          (n.dispose = function () {
            e.removeData(this._element, c), (this._element = null)
          }),
          (n._getRootElement = function (t) {
            var n = u.getSelectorFromElement(t),
              i = !1
            return n && (i = document.querySelector(n)), i || e(t).closest('.alert')[0]
          }),
          (n._triggerCloseEvent = function (t) {
            var n = e.Event(h.CLOSE)
            return e(t).trigger(n), n
          }),
          (n._removeElement = function (t) {
            var n = this
            if ((e(t).removeClass('show'), e(t).hasClass('fade'))) {
              var i = u.getTransitionDurationFromElement(t)
              e(t)
                .one(u.TRANSITION_END, function (e) {
                  return n._destroyElement(t, e)
                })
                .emulateTransitionEnd(i)
            } else this._destroyElement(t)
          }),
          (n._destroyElement = function (t) {
            e(t).detach().trigger(h.CLOSED).remove()
          }),
          (t._jQueryInterface = function (n) {
            return this.each(function () {
              var i = e(this),
                r = i.data(c)
              r || ((r = new t(this)), i.data(c, r)), 'close' === n && r[n](this)
            })
          }),
          (t._handleDismiss = function (t) {
            return function (e) {
              e && e.preventDefault(), t.close(this)
            }
          }),
          r(t, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.4.1'
              },
            },
          ]),
          t
        )
      })()
    e(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p())),
      (e.fn[l] = p._jQueryInterface),
      (e.fn[l].Constructor = p),
      (e.fn[l].noConflict = function () {
        return (e.fn[l] = d), p._jQueryInterface
      })
    var m = 'button',
      g = 'bs.button',
      v = '.' + g,
      y = '.data-api',
      b = e.fn[m],
      w = 'active',
      _ = '[data-toggle^="button"]',
      x = 'input:not([type="hidden"])',
      E = '.btn',
      T = { CLICK_DATA_API: 'click' + v + y, FOCUS_BLUR_DATA_API: 'focus' + v + y + ' blur' + v + y, LOAD_DATA_API: 'load' + v + y },
      S = (function () {
        function t(t) {
          this._element = t
        }
        var n = t.prototype
        return (
          (n.toggle = function () {
            var t = !0,
              n = !0,
              i = e(this._element).closest('[data-toggle="buttons"]')[0]
            if (i) {
              var r = this._element.querySelector(x)
              if (r) {
                if ('radio' === r.type)
                  if (r.checked && this._element.classList.contains(w)) t = !1
                  else {
                    var o = i.querySelector('.active')
                    o && e(o).removeClass(w)
                  }
                else 'checkbox' === r.type ? 'LABEL' === this._element.tagName && r.checked === this._element.classList.contains(w) && (t = !1) : (t = !1)
                t && ((r.checked = !this._element.classList.contains(w)), e(r).trigger('change')), r.focus(), (n = !1)
              }
            }
            this._element.hasAttribute('disabled') || this._element.classList.contains('disabled') || (n && this._element.setAttribute('aria-pressed', !this._element.classList.contains(w)), t && e(this._element).toggleClass(w))
          }),
          (n.dispose = function () {
            e.removeData(this._element, g), (this._element = null)
          }),
          (t._jQueryInterface = function (n) {
            return this.each(function () {
              var i = e(this).data(g)
              i || ((i = new t(this)), e(this).data(g, i)), 'toggle' === n && i[n]()
            })
          }),
          r(t, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.4.1'
              },
            },
          ]),
          t
        )
      })()
    e(document)
      .on(T.CLICK_DATA_API, _, function (t) {
        var n = t.target
        if ((e(n).hasClass('btn') || (n = e(n).closest(E)[0]), !n || n.hasAttribute('disabled') || n.classList.contains('disabled'))) t.preventDefault()
        else {
          var i = n.querySelector(x)
          if (i && (i.hasAttribute('disabled') || i.classList.contains('disabled'))) return void t.preventDefault()
          S._jQueryInterface.call(e(n), 'toggle')
        }
      })
      .on(T.FOCUS_BLUR_DATA_API, _, function (t) {
        var n = e(t.target).closest(E)[0]
        e(n).toggleClass('focus', /^focus(in)?$/.test(t.type))
      }),
      e(window).on(T.LOAD_DATA_API, function () {
        for (var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e = 0, n = t.length; e < n; e++) {
          var i = t[e],
            r = i.querySelector(x)
          r.checked || r.hasAttribute('checked') ? i.classList.add(w) : i.classList.remove(w)
        }
        for (var o = 0, s = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; o < s; o++) {
          var a = t[o]
          'true' === a.getAttribute('aria-pressed') ? a.classList.add(w) : a.classList.remove(w)
        }
      }),
      (e.fn[m] = S._jQueryInterface),
      (e.fn[m].Constructor = S),
      (e.fn[m].noConflict = function () {
        return (e.fn[m] = b), S._jQueryInterface
      })
    var C = 'carousel',
      A = 'bs.carousel',
      k = '.' + A,
      O = '.data-api',
      D = e.fn[C],
      N = { interval: 5e3, keyboard: !0, slide: !1, pause: 'hover', wrap: !0, touch: !0 },
      j = { interval: '(number|boolean)', keyboard: 'boolean', slide: '(boolean|string)', pause: '(string|boolean)', wrap: 'boolean', touch: 'boolean' },
      I = 'next',
      P = 'prev',
      L = {
        SLIDE: 'slide' + k,
        SLID: 'slid' + k,
        KEYDOWN: 'keydown' + k,
        MOUSEENTER: 'mouseenter' + k,
        MOUSELEAVE: 'mouseleave' + k,
        TOUCHSTART: 'touchstart' + k,
        TOUCHMOVE: 'touchmove' + k,
        TOUCHEND: 'touchend' + k,
        POINTERDOWN: 'pointerdown' + k,
        POINTERUP: 'pointerup' + k,
        DRAG_START: 'dragstart' + k,
        LOAD_DATA_API: 'load' + k + O,
        CLICK_DATA_API: 'click' + k + O,
      },
      H = 'active',
      M = '.active.carousel-item',
      q = { TOUCH: 'touch', PEN: 'pen' },
      R = (function () {
        function t(t, e) {
          ;(this._items = null),
            (this._interval = null),
            (this._activeElement = null),
            (this._isPaused = !1),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this.touchStartX = 0),
            (this.touchDeltaX = 0),
            (this._config = this._getConfig(e)),
            (this._element = t),
            (this._indicatorsElement = this._element.querySelector('.carousel-indicators')),
            (this._touchSupported = 'ontouchstart' in document.documentElement || 0 < navigator.maxTouchPoints),
            (this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent)),
            this._addEventListeners()
        }
        var n = t.prototype
        return (
          (n.next = function () {
            this._isSliding || this._slide(I)
          }),
          (n.nextWhenVisible = function () {
            !document.hidden && e(this._element).is(':visible') && 'hidden' !== e(this._element).css('visibility') && this.next()
          }),
          (n.prev = function () {
            this._isSliding || this._slide(P)
          }),
          (n.pause = function (t) {
            t || (this._isPaused = !0), this._element.querySelector('.carousel-item-next, .carousel-item-prev') && (u.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), (this._interval = null)
          }),
          (n.cycle = function (t) {
            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), (this._interval = null)), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
          }),
          (n.to = function (t) {
            var n = this
            this._activeElement = this._element.querySelector(M)
            var i = this._getItemIndex(this._activeElement)
            if (!(t > this._items.length - 1 || t < 0))
              if (this._isSliding)
                e(this._element).one(L.SLID, function () {
                  return n.to(t)
                })
              else {
                if (i === t) return this.pause(), void this.cycle()
                var r = i < t ? I : P
                this._slide(r, this._items[t])
              }
          }),
          (n.dispose = function () {
            e(this._element).off(k), e.removeData(this._element, A), (this._items = null), (this._config = null), (this._element = null), (this._interval = null), (this._isPaused = null), (this._isSliding = null), (this._activeElement = null), (this._indicatorsElement = null)
          }),
          (n._getConfig = function (t) {
            return (t = s({}, N, {}, t)), u.typeCheckConfig(C, t, j), t
          }),
          (n._handleSwipe = function () {
            var t = Math.abs(this.touchDeltaX)
            if (!(t <= 40)) {
              var e = t / this.touchDeltaX
              ;(this.touchDeltaX = 0) < e && this.prev(), e < 0 && this.next()
            }
          }),
          (n._addEventListeners = function () {
            var t = this
            this._config.keyboard &&
              e(this._element).on(L.KEYDOWN, function (e) {
                return t._keydown(e)
              }),
              'hover' === this._config.pause &&
                e(this._element)
                  .on(L.MOUSEENTER, function (e) {
                    return t.pause(e)
                  })
                  .on(L.MOUSELEAVE, function (e) {
                    return t.cycle(e)
                  }),
              this._config.touch && this._addTouchEventListeners()
          }),
          (n._addTouchEventListeners = function () {
            var t = this
            if (this._touchSupported) {
              var n = function (e) {
                  t._pointerEvent && q[e.originalEvent.pointerType.toUpperCase()] ? (t.touchStartX = e.originalEvent.clientX) : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX)
                },
                i = function (e) {
                  t._pointerEvent && q[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                    t._handleSwipe(),
                    'hover' === t._config.pause &&
                      (t.pause(),
                      t.touchTimeout && clearTimeout(t.touchTimeout),
                      (t.touchTimeout = setTimeout(function (e) {
                        return t.cycle(e)
                      }, 500 + t._config.interval)))
                }
              e(this._element.querySelectorAll('.carousel-item img')).on(L.DRAG_START, function (t) {
                return t.preventDefault()
              }),
                this._pointerEvent
                  ? (e(this._element).on(L.POINTERDOWN, function (t) {
                      return n(t)
                    }),
                    e(this._element).on(L.POINTERUP, function (t) {
                      return i(t)
                    }),
                    this._element.classList.add('pointer-event'))
                  : (e(this._element).on(L.TOUCHSTART, function (t) {
                      return n(t)
                    }),
                    e(this._element).on(L.TOUCHMOVE, function (e) {
                      return (function (e) {
                        e.originalEvent.touches && 1 < e.originalEvent.touches.length ? (t.touchDeltaX = 0) : (t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX)
                      })(e)
                    }),
                    e(this._element).on(L.TOUCHEND, function (t) {
                      return i(t)
                    }))
            }
          }),
          (n._keydown = function (t) {
            if (!/input|textarea/i.test(t.target.tagName))
              switch (t.which) {
                case 37:
                  t.preventDefault(), this.prev()
                  break
                case 39:
                  t.preventDefault(), this.next()
              }
          }),
          (n._getItemIndex = function (t) {
            return (this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll('.carousel-item')) : []), this._items.indexOf(t)
          }),
          (n._getItemByDirection = function (t, e) {
            var n = t === I,
              i = t === P,
              r = this._getItemIndex(e),
              o = this._items.length - 1
            if (((i && 0 === r) || (n && r === o)) && !this._config.wrap) return e
            var s = (r + (t === P ? -1 : 1)) % this._items.length
            return -1 == s ? this._items[this._items.length - 1] : this._items[s]
          }),
          (n._triggerSlideEvent = function (t, n) {
            var i = this._getItemIndex(t),
              r = this._getItemIndex(this._element.querySelector(M)),
              o = e.Event(L.SLIDE, { relatedTarget: t, direction: n, from: r, to: i })
            return e(this._element).trigger(o), o
          }),
          (n._setActiveIndicatorElement = function (t) {
            if (this._indicatorsElement) {
              var n = [].slice.call(this._indicatorsElement.querySelectorAll('.active'))
              e(n).removeClass(H)
              var i = this._indicatorsElement.children[this._getItemIndex(t)]
              i && e(i).addClass(H)
            }
          }),
          (n._slide = function (t, n) {
            var i,
              r,
              o,
              s = this,
              a = this._element.querySelector(M),
              l = this._getItemIndex(a),
              c = n || (a && this._getItemByDirection(t, a)),
              f = this._getItemIndex(c),
              d = Boolean(this._interval)
            if (((o = t === I ? ((i = 'carousel-item-left'), (r = 'carousel-item-next'), 'left') : ((i = 'carousel-item-right'), (r = 'carousel-item-prev'), 'right')), c && e(c).hasClass(H))) this._isSliding = !1
            else if (!this._triggerSlideEvent(c, o).isDefaultPrevented() && a && c) {
              ;(this._isSliding = !0), d && this.pause(), this._setActiveIndicatorElement(c)
              var h = e.Event(L.SLID, { relatedTarget: c, direction: o, from: l, to: f })
              if (e(this._element).hasClass('slide')) {
                e(c).addClass(r), u.reflow(c), e(a).addClass(i), e(c).addClass(i)
                var p = parseInt(c.getAttribute('data-interval'), 10)
                p ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval), (this._config.interval = p)) : (this._config.interval = this._config.defaultInterval || this._config.interval)
                var m = u.getTransitionDurationFromElement(a)
                e(a)
                  .one(u.TRANSITION_END, function () {
                    e(c)
                      .removeClass(i + ' ' + r)
                      .addClass(H),
                      e(a).removeClass(H + ' ' + r + ' ' + i),
                      (s._isSliding = !1),
                      setTimeout(function () {
                        return e(s._element).trigger(h)
                      }, 0)
                  })
                  .emulateTransitionEnd(m)
              } else e(a).removeClass(H), e(c).addClass(H), (this._isSliding = !1), e(this._element).trigger(h)
              d && this.cycle()
            }
          }),
          (t._jQueryInterface = function (n) {
            return this.each(function () {
              var i = e(this).data(A),
                r = s({}, N, {}, e(this).data())
              'object' == typeof n && (r = s({}, r, {}, n))
              var o = 'string' == typeof n ? n : r.slide
              if ((i || ((i = new t(this, r)), e(this).data(A, i)), 'number' == typeof n)) i.to(n)
              else if ('string' == typeof o) {
                if (void 0 === i[o]) throw new TypeError('No method named "' + o + '"')
                i[o]()
              } else r.interval && r.ride && (i.pause(), i.cycle())
            })
          }),
          (t._dataApiClickHandler = function (n) {
            var i = u.getSelectorFromElement(this)
            if (i) {
              var r = e(i)[0]
              if (r && e(r).hasClass('carousel')) {
                var o = s({}, e(r).data(), {}, e(this).data()),
                  a = this.getAttribute('data-slide-to')
                a && (o.interval = !1), t._jQueryInterface.call(e(r), o), a && e(r).data(A).to(a), n.preventDefault()
              }
            }
          }),
          r(t, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.4.1'
              },
            },
            {
              key: 'Default',
              get: function () {
                return N
              },
            },
          ]),
          t
        )
      })()
    e(document).on(L.CLICK_DATA_API, '[data-slide], [data-slide-to]', R._dataApiClickHandler),
      e(window).on(L.LOAD_DATA_API, function () {
        for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = t.length; n < i; n++) {
          var r = e(t[n])
          R._jQueryInterface.call(r, r.data())
        }
      }),
      (e.fn[C] = R._jQueryInterface),
      (e.fn[C].Constructor = R),
      (e.fn[C].noConflict = function () {
        return (e.fn[C] = D), R._jQueryInterface
      })
    var W = 'collapse',
      F = 'bs.collapse',
      z = '.' + F,
      B = e.fn[W],
      U = { toggle: !0, parent: '' },
      $ = { toggle: 'boolean', parent: '(string|element)' },
      Q = { SHOW: 'show' + z, SHOWN: 'shown' + z, HIDE: 'hide' + z, HIDDEN: 'hidden' + z, CLICK_DATA_API: 'click' + z + '.data-api' },
      V = 'show',
      K = 'collapse',
      Y = 'collapsing',
      X = 'collapsed',
      G = 'width',
      J = '[data-toggle="collapse"]',
      Z = (function () {
        function t(t, e) {
          ;(this._isTransitioning = !1), (this._element = t), (this._config = this._getConfig(e)), (this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')))
          for (var n = [].slice.call(document.querySelectorAll(J)), i = 0, r = n.length; i < r; i++) {
            var o = n[i],
              s = u.getSelectorFromElement(o),
              a = [].slice.call(document.querySelectorAll(s)).filter(function (e) {
                return e === t
              })
            null !== s && 0 < a.length && ((this._selector = s), this._triggerArray.push(o))
          }
          ;(this._parent = this._config.parent ? this._getParent() : null), this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
        }
        var n = t.prototype
        return (
          (n.toggle = function () {
            e(this._element).hasClass(V) ? this.hide() : this.show()
          }),
          (n.show = function () {
            var n,
              i,
              r = this
            if (
              !(
                this._isTransitioning ||
                e(this._element).hasClass(V) ||
                (this._parent &&
                  0 ===
                    (n = [].slice.call(this._parent.querySelectorAll('.show, .collapsing')).filter(function (t) {
                      return 'string' == typeof r._config.parent ? t.getAttribute('data-parent') === r._config.parent : t.classList.contains(K)
                    })).length &&
                  (n = null),
                n && (i = e(n).not(this._selector).data(F)) && i._isTransitioning)
              )
            ) {
              var o = e.Event(Q.SHOW)
              if ((e(this._element).trigger(o), !o.isDefaultPrevented())) {
                n && (t._jQueryInterface.call(e(n).not(this._selector), 'hide'), i || e(n).data(F, null))
                var s = this._getDimension()
                e(this._element).removeClass(K).addClass(Y), (this._element.style[s] = 0), this._triggerArray.length && e(this._triggerArray).removeClass(X).attr('aria-expanded', !0), this.setTransitioning(!0)
                var a = 'scroll' + (s[0].toUpperCase() + s.slice(1)),
                  l = u.getTransitionDurationFromElement(this._element)
                e(this._element)
                  .one(u.TRANSITION_END, function () {
                    e(r._element).removeClass(Y).addClass(K).addClass(V), (r._element.style[s] = ''), r.setTransitioning(!1), e(r._element).trigger(Q.SHOWN)
                  })
                  .emulateTransitionEnd(l),
                  (this._element.style[s] = this._element[a] + 'px')
              }
            }
          }),
          (n.hide = function () {
            var t = this
            if (!this._isTransitioning && e(this._element).hasClass(V)) {
              var n = e.Event(Q.HIDE)
              if ((e(this._element).trigger(n), !n.isDefaultPrevented())) {
                var i = this._getDimension()
                ;(this._element.style[i] = this._element.getBoundingClientRect()[i] + 'px'), u.reflow(this._element), e(this._element).addClass(Y).removeClass(K).removeClass(V)
                var r = this._triggerArray.length
                if (0 < r)
                  for (var o = 0; o < r; o++) {
                    var s = this._triggerArray[o],
                      a = u.getSelectorFromElement(s)
                    null !== a && (e([].slice.call(document.querySelectorAll(a))).hasClass(V) || e(s).addClass(X).attr('aria-expanded', !1))
                  }
                this.setTransitioning(!0), (this._element.style[i] = '')
                var l = u.getTransitionDurationFromElement(this._element)
                e(this._element)
                  .one(u.TRANSITION_END, function () {
                    t.setTransitioning(!1), e(t._element).removeClass(Y).addClass(K).trigger(Q.HIDDEN)
                  })
                  .emulateTransitionEnd(l)
              }
            }
          }),
          (n.setTransitioning = function (t) {
            this._isTransitioning = t
          }),
          (n.dispose = function () {
            e.removeData(this._element, F), (this._config = null), (this._parent = null), (this._element = null), (this._triggerArray = null), (this._isTransitioning = null)
          }),
          (n._getConfig = function (t) {
            return ((t = s({}, U, {}, t)).toggle = Boolean(t.toggle)), u.typeCheckConfig(W, t, $), t
          }),
          (n._getDimension = function () {
            return e(this._element).hasClass(G) ? G : 'height'
          }),
          (n._getParent = function () {
            var n,
              i = this
            u.isElement(this._config.parent) ? ((n = this._config.parent), void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : (n = document.querySelector(this._config.parent))
            var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
              o = [].slice.call(n.querySelectorAll(r))
            return (
              e(o).each(function (e, n) {
                i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n])
              }),
              n
            )
          }),
          (n._addAriaAndCollapsedClass = function (t, n) {
            var i = e(t).hasClass(V)
            n.length && e(n).toggleClass(X, !i).attr('aria-expanded', i)
          }),
          (t._getTargetFromElement = function (t) {
            var e = u.getSelectorFromElement(t)
            return e ? document.querySelector(e) : null
          }),
          (t._jQueryInterface = function (n) {
            return this.each(function () {
              var i = e(this),
                r = i.data(F),
                o = s({}, U, {}, i.data(), {}, 'object' == typeof n && n ? n : {})
              if ((!r && o.toggle && /show|hide/.test(n) && (o.toggle = !1), r || ((r = new t(this, o)), i.data(F, r)), 'string' == typeof n)) {
                if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"')
                r[n]()
              }
            })
          }),
          r(t, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.4.1'
              },
            },
            {
              key: 'Default',
              get: function () {
                return U
              },
            },
          ]),
          t
        )
      })()
    e(document).on(Q.CLICK_DATA_API, J, function (t) {
      'A' === t.currentTarget.tagName && t.preventDefault()
      var n = e(this),
        i = u.getSelectorFromElement(this),
        r = [].slice.call(document.querySelectorAll(i))
      e(r).each(function () {
        var t = e(this),
          i = t.data(F) ? 'toggle' : n.data()
        Z._jQueryInterface.call(t, i)
      })
    }),
      (e.fn[W] = Z._jQueryInterface),
      (e.fn[W].Constructor = Z),
      (e.fn[W].noConflict = function () {
        return (e.fn[W] = B), Z._jQueryInterface
      })
    var tt = 'dropdown',
      et = 'bs.dropdown',
      nt = '.' + et,
      it = '.data-api',
      rt = e.fn[tt],
      ot = new RegExp('38|40|27'),
      st = { HIDE: 'hide' + nt, HIDDEN: 'hidden' + nt, SHOW: 'show' + nt, SHOWN: 'shown' + nt, CLICK: 'click' + nt, CLICK_DATA_API: 'click' + nt + it, KEYDOWN_DATA_API: 'keydown' + nt + it, KEYUP_DATA_API: 'keyup' + nt + it },
      at = 'disabled',
      ut = 'show',
      lt = 'dropdown-menu-right',
      ct = '[data-toggle="dropdown"]',
      ft = '.dropdown-menu',
      dt = { offset: 0, flip: !0, boundary: 'scrollParent', reference: 'toggle', display: 'dynamic', popperConfig: null },
      ht = { offset: '(number|string|function)', flip: 'boolean', boundary: '(string|element)', reference: '(string|element)', display: 'string', popperConfig: '(null|object)' },
      pt = (function () {
        function t(t, e) {
          ;(this._element = t), (this._popper = null), (this._config = this._getConfig(e)), (this._menu = this._getMenuElement()), (this._inNavbar = this._detectNavbar()), this._addEventListeners()
        }
        var i = t.prototype
        return (
          (i.toggle = function () {
            if (!this._element.disabled && !e(this._element).hasClass(at)) {
              var n = e(this._menu).hasClass(ut)
              t._clearMenus(), n || this.show(!0)
            }
          }),
          (i.show = function (i) {
            if ((void 0 === i && (i = !1), !(this._element.disabled || e(this._element).hasClass(at) || e(this._menu).hasClass(ut)))) {
              var r = { relatedTarget: this._element },
                o = e.Event(st.SHOW, r),
                s = t._getParentFromElement(this._element)
              if ((e(s).trigger(o), !o.isDefaultPrevented())) {
                if (!this._inNavbar && i) {
                  if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)")
                  var a = this._element
                  'parent' === this._config.reference ? (a = s) : u.isElement(this._config.reference) && ((a = this._config.reference), void 0 !== this._config.reference.jquery && (a = this._config.reference[0])),
                    'scrollParent' !== this._config.boundary && e(s).addClass('position-static'),
                    (this._popper = new n(a, this._menu, this._getPopperConfig()))
                }
                'ontouchstart' in document.documentElement && 0 === e(s).closest('.navbar-nav').length && e(document.body).children().on('mouseover', null, e.noop),
                  this._element.focus(),
                  this._element.setAttribute('aria-expanded', !0),
                  e(this._menu).toggleClass(ut),
                  e(s).toggleClass(ut).trigger(e.Event(st.SHOWN, r))
              }
            }
          }),
          (i.hide = function () {
            if (!this._element.disabled && !e(this._element).hasClass(at) && e(this._menu).hasClass(ut)) {
              var n = { relatedTarget: this._element },
                i = e.Event(st.HIDE, n),
                r = t._getParentFromElement(this._element)
              e(r).trigger(i), i.isDefaultPrevented() || (this._popper && this._popper.destroy(), e(this._menu).toggleClass(ut), e(r).toggleClass(ut).trigger(e.Event(st.HIDDEN, n)))
            }
          }),
          (i.dispose = function () {
            e.removeData(this._element, et), e(this._element).off(nt), (this._element = null), (this._menu = null) !== this._popper && (this._popper.destroy(), (this._popper = null))
          }),
          (i.update = function () {
            ;(this._inNavbar = this._detectNavbar()), null !== this._popper && this._popper.scheduleUpdate()
          }),
          (i._addEventListeners = function () {
            var t = this
            e(this._element).on(st.CLICK, function (e) {
              e.preventDefault(), e.stopPropagation(), t.toggle()
            })
          }),
          (i._getConfig = function (t) {
            return (t = s({}, this.constructor.Default, {}, e(this._element).data(), {}, t)), u.typeCheckConfig(tt, t, this.constructor.DefaultType), t
          }),
          (i._getMenuElement = function () {
            if (!this._menu) {
              var e = t._getParentFromElement(this._element)
              e && (this._menu = e.querySelector(ft))
            }
            return this._menu
          }),
          (i._getPlacement = function () {
            var t = e(this._element.parentNode),
              n = 'bottom-start'
            return t.hasClass('dropup') ? ((n = 'top-start'), e(this._menu).hasClass(lt) && (n = 'top-end')) : t.hasClass('dropright') ? (n = 'right-start') : t.hasClass('dropleft') ? (n = 'left-start') : e(this._menu).hasClass(lt) && (n = 'bottom-end'), n
          }),
          (i._detectNavbar = function () {
            return 0 < e(this._element).closest('.navbar').length
          }),
          (i._getOffset = function () {
            var t = this,
              e = {}
            return (
              'function' == typeof this._config.offset
                ? (e.fn = function (e) {
                    return (e.offsets = s({}, e.offsets, {}, t._config.offset(e.offsets, t._element) || {})), e
                  })
                : (e.offset = this._config.offset),
              e
            )
          }),
          (i._getPopperConfig = function () {
            var t = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }
            return 'static' === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), s({}, t, {}, this._config.popperConfig)
          }),
          (t._jQueryInterface = function (n) {
            return this.each(function () {
              var i = e(this).data(et)
              if ((i || ((i = new t(this, 'object' == typeof n ? n : null)), e(this).data(et, i)), 'string' == typeof n)) {
                if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"')
                i[n]()
              }
            })
          }),
          (t._clearMenus = function (n) {
            if (!n || (3 !== n.which && ('keyup' !== n.type || 9 === n.which)))
              for (var i = [].slice.call(document.querySelectorAll(ct)), r = 0, o = i.length; r < o; r++) {
                var s = t._getParentFromElement(i[r]),
                  a = e(i[r]).data(et),
                  u = { relatedTarget: i[r] }
                if ((n && 'click' === n.type && (u.clickEvent = n), a)) {
                  var l = a._menu
                  if (e(s).hasClass(ut) && !(n && (('click' === n.type && /input|textarea/i.test(n.target.tagName)) || ('keyup' === n.type && 9 === n.which)) && e.contains(s, n.target))) {
                    var c = e.Event(st.HIDE, u)
                    e(s).trigger(c),
                      c.isDefaultPrevented() ||
                        ('ontouchstart' in document.documentElement && e(document.body).children().off('mouseover', null, e.noop), i[r].setAttribute('aria-expanded', 'false'), a._popper && a._popper.destroy(), e(l).removeClass(ut), e(s).removeClass(ut).trigger(e.Event(st.HIDDEN, u)))
                  }
                }
              }
          }),
          (t._getParentFromElement = function (t) {
            var e,
              n = u.getSelectorFromElement(t)
            return n && (e = document.querySelector(n)), e || t.parentNode
          }),
          (t._dataApiKeydownHandler = function (n) {
            if ((/input|textarea/i.test(n.target.tagName) ? !(32 === n.which || (27 !== n.which && ((40 !== n.which && 38 !== n.which) || e(n.target).closest(ft).length))) : ot.test(n.which)) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !e(this).hasClass(at))) {
              var i = t._getParentFromElement(this),
                r = e(i).hasClass(ut)
              if (r || 27 !== n.which)
                if (r && (!r || (27 !== n.which && 32 !== n.which))) {
                  var o = [].slice.call(i.querySelectorAll('.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)')).filter(function (t) {
                    return e(t).is(':visible')
                  })
                  if (0 !== o.length) {
                    var s = o.indexOf(n.target)
                    38 === n.which && 0 < s && s--, 40 === n.which && s < o.length - 1 && s++, s < 0 && (s = 0), o[s].focus()
                  }
                } else {
                  if (27 === n.which) {
                    var a = i.querySelector(ct)
                    e(a).trigger('focus')
                  }
                  e(this).trigger('click')
                }
            }
          }),
          r(t, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.4.1'
              },
            },
            {
              key: 'Default',
              get: function () {
                return dt
              },
            },
            {
              key: 'DefaultType',
              get: function () {
                return ht
              },
            },
          ]),
          t
        )
      })()
    e(document)
      .on(st.KEYDOWN_DATA_API, ct, pt._dataApiKeydownHandler)
      .on(st.KEYDOWN_DATA_API, ft, pt._dataApiKeydownHandler)
      .on(st.CLICK_DATA_API + ' ' + st.KEYUP_DATA_API, pt._clearMenus)
      .on(st.CLICK_DATA_API, ct, function (t) {
        t.preventDefault(), t.stopPropagation(), pt._jQueryInterface.call(e(this), 'toggle')
      })
      .on(st.CLICK_DATA_API, '.dropdown form', function (t) {
        t.stopPropagation()
      }),
      (e.fn[tt] = pt._jQueryInterface),
      (e.fn[tt].Constructor = pt),
      (e.fn[tt].noConflict = function () {
        return (e.fn[tt] = rt), pt._jQueryInterface
      })
    var mt = 'modal',
      gt = 'bs.modal',
      vt = '.' + gt,
      yt = e.fn[mt],
      bt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
      wt = { backdrop: '(boolean|string)', keyboard: 'boolean', focus: 'boolean', show: 'boolean' },
      _t = {
        HIDE: 'hide' + vt,
        HIDE_PREVENTED: 'hidePrevented' + vt,
        HIDDEN: 'hidden' + vt,
        SHOW: 'show' + vt,
        SHOWN: 'shown' + vt,
        FOCUSIN: 'focusin' + vt,
        RESIZE: 'resize' + vt,
        CLICK_DISMISS: 'click.dismiss' + vt,
        KEYDOWN_DISMISS: 'keydown.dismiss' + vt,
        MOUSEUP_DISMISS: 'mouseup.dismiss' + vt,
        MOUSEDOWN_DISMISS: 'mousedown.dismiss' + vt,
        CLICK_DATA_API: 'click' + vt + '.data-api',
      },
      xt = 'modal-open',
      Et = 'fade',
      Tt = 'show',
      St = 'modal-static',
      Ct = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
      At = '.sticky-top',
      kt = (function () {
        function t(t, e) {
          ;(this._config = this._getConfig(e)), (this._element = t), (this._dialog = t.querySelector('.modal-dialog')), (this._backdrop = null), (this._isShown = !1), (this._isBodyOverflowing = !1), (this._ignoreBackdropClick = !1), (this._isTransitioning = !1), (this._scrollbarWidth = 0)
        }
        var n = t.prototype
        return (
          (n.toggle = function (t) {
            return this._isShown ? this.hide() : this.show(t)
          }),
          (n.show = function (t) {
            var n = this
            if (!this._isShown && !this._isTransitioning) {
              e(this._element).hasClass(Et) && (this._isTransitioning = !0)
              var i = e.Event(_t.SHOW, { relatedTarget: t })
              e(this._element).trigger(i),
                this._isShown ||
                  i.isDefaultPrevented() ||
                  ((this._isShown = !0),
                  this._checkScrollbar(),
                  this._setScrollbar(),
                  this._adjustDialog(),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  e(this._element).on(_t.CLICK_DISMISS, '[data-dismiss="modal"]', function (t) {
                    return n.hide(t)
                  }),
                  e(this._dialog).on(_t.MOUSEDOWN_DISMISS, function () {
                    e(n._element).one(_t.MOUSEUP_DISMISS, function (t) {
                      e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                    })
                  }),
                  this._showBackdrop(function () {
                    return n._showElement(t)
                  }))
            }
          }),
          (n.hide = function (t) {
            var n = this
            if ((t && t.preventDefault(), this._isShown && !this._isTransitioning)) {
              var i = e.Event(_t.HIDE)
              if ((e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented())) {
                this._isShown = !1
                var r = e(this._element).hasClass(Et)
                if ((r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(_t.FOCUSIN), e(this._element).removeClass(Tt), e(this._element).off(_t.CLICK_DISMISS), e(this._dialog).off(_t.MOUSEDOWN_DISMISS), r)) {
                  var o = u.getTransitionDurationFromElement(this._element)
                  e(this._element)
                    .one(u.TRANSITION_END, function (t) {
                      return n._hideModal(t)
                    })
                    .emulateTransitionEnd(o)
                } else this._hideModal()
              }
            }
          }),
          (n.dispose = function () {
            ;[window, this._element, this._dialog].forEach(function (t) {
              return e(t).off(vt)
            }),
              e(document).off(_t.FOCUSIN),
              e.removeData(this._element, gt),
              (this._config = null),
              (this._element = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._isTransitioning = null),
              (this._scrollbarWidth = null)
          }),
          (n.handleUpdate = function () {
            this._adjustDialog()
          }),
          (n._getConfig = function (t) {
            return (t = s({}, bt, {}, t)), u.typeCheckConfig(mt, t, wt), t
          }),
          (n._triggerBackdropTransition = function () {
            var t = this
            if ('static' === this._config.backdrop) {
              var n = e.Event(_t.HIDE_PREVENTED)
              if ((e(this._element).trigger(n), n.defaultPrevented)) return
              this._element.classList.add(St)
              var i = u.getTransitionDurationFromElement(this._element)
              e(this._element)
                .one(u.TRANSITION_END, function () {
                  t._element.classList.remove(St)
                })
                .emulateTransitionEnd(i),
                this._element.focus()
            } else this.hide()
          }),
          (n._showElement = function (t) {
            var n = this,
              i = e(this._element).hasClass(Et),
              r = this._dialog ? this._dialog.querySelector('.modal-body') : null
            function o() {
              n._config.focus && n._element.focus(), (n._isTransitioning = !1), e(n._element).trigger(s)
            }
            ;(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.appendChild(this._element),
              (this._element.style.display = 'block'),
              this._element.removeAttribute('aria-hidden'),
              this._element.setAttribute('aria-modal', !0),
              e(this._dialog).hasClass('modal-dialog-scrollable') && r ? (r.scrollTop = 0) : (this._element.scrollTop = 0),
              i && u.reflow(this._element),
              e(this._element).addClass(Tt),
              this._config.focus && this._enforceFocus()
            var s = e.Event(_t.SHOWN, { relatedTarget: t })
            if (i) {
              var a = u.getTransitionDurationFromElement(this._dialog)
              e(this._dialog).one(u.TRANSITION_END, o).emulateTransitionEnd(a)
            } else o()
          }),
          (n._enforceFocus = function () {
            var t = this
            e(document)
              .off(_t.FOCUSIN)
              .on(_t.FOCUSIN, function (n) {
                document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus()
              })
          }),
          (n._setEscapeEvent = function () {
            var t = this
            this._isShown && this._config.keyboard
              ? e(this._element).on(_t.KEYDOWN_DISMISS, function (e) {
                  27 === e.which && t._triggerBackdropTransition()
                })
              : this._isShown || e(this._element).off(_t.KEYDOWN_DISMISS)
          }),
          (n._setResizeEvent = function () {
            var t = this
            this._isShown
              ? e(window).on(_t.RESIZE, function (e) {
                  return t.handleUpdate(e)
                })
              : e(window).off(_t.RESIZE)
          }),
          (n._hideModal = function () {
            var t = this
            ;(this._element.style.display = 'none'),
              this._element.setAttribute('aria-hidden', !0),
              this._element.removeAttribute('aria-modal'),
              (this._isTransitioning = !1),
              this._showBackdrop(function () {
                e(document.body).removeClass(xt), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(_t.HIDDEN)
              })
          }),
          (n._removeBackdrop = function () {
            this._backdrop && (e(this._backdrop).remove(), (this._backdrop = null))
          }),
          (n._showBackdrop = function (t) {
            var n = this,
              i = e(this._element).hasClass(Et) ? Et : ''
            if (this._isShown && this._config.backdrop) {
              if (
                ((this._backdrop = document.createElement('div')),
                (this._backdrop.className = 'modal-backdrop'),
                i && this._backdrop.classList.add(i),
                e(this._backdrop).appendTo(document.body),
                e(this._element).on(_t.CLICK_DISMISS, function (t) {
                  n._ignoreBackdropClick ? (n._ignoreBackdropClick = !1) : t.target === t.currentTarget && n._triggerBackdropTransition()
                }),
                i && u.reflow(this._backdrop),
                e(this._backdrop).addClass(Tt),
                !t)
              )
                return
              if (!i) return void t()
              var r = u.getTransitionDurationFromElement(this._backdrop)
              e(this._backdrop).one(u.TRANSITION_END, t).emulateTransitionEnd(r)
            } else if (!this._isShown && this._backdrop) {
              e(this._backdrop).removeClass(Tt)
              var o = function () {
                n._removeBackdrop(), t && t()
              }
              if (e(this._element).hasClass(Et)) {
                var s = u.getTransitionDurationFromElement(this._backdrop)
                e(this._backdrop).one(u.TRANSITION_END, o).emulateTransitionEnd(s)
              } else o()
            } else t && t()
          }),
          (n._adjustDialog = function () {
            var t = this._element.scrollHeight > document.documentElement.clientHeight
            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + 'px'), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + 'px')
          }),
          (n._resetAdjustments = function () {
            ;(this._element.style.paddingLeft = ''), (this._element.style.paddingRight = '')
          }),
          (n._checkScrollbar = function () {
            var t = document.body.getBoundingClientRect()
            ;(this._isBodyOverflowing = t.left + t.right < window.innerWidth), (this._scrollbarWidth = this._getScrollbarWidth())
          }),
          (n._setScrollbar = function () {
            var t = this
            if (this._isBodyOverflowing) {
              var n = [].slice.call(document.querySelectorAll(Ct)),
                i = [].slice.call(document.querySelectorAll(At))
              e(n).each(function (n, i) {
                var r = i.style.paddingRight,
                  o = e(i).css('padding-right')
                e(i)
                  .data('padding-right', r)
                  .css('padding-right', parseFloat(o) + t._scrollbarWidth + 'px')
              }),
                e(i).each(function (n, i) {
                  var r = i.style.marginRight,
                    o = e(i).css('margin-right')
                  e(i)
                    .data('margin-right', r)
                    .css('margin-right', parseFloat(o) - t._scrollbarWidth + 'px')
                })
              var r = document.body.style.paddingRight,
                o = e(document.body).css('padding-right')
              e(document.body)
                .data('padding-right', r)
                .css('padding-right', parseFloat(o) + this._scrollbarWidth + 'px')
            }
            e(document.body).addClass(xt)
          }),
          (n._resetScrollbar = function () {
            var t = [].slice.call(document.querySelectorAll(Ct))
            e(t).each(function (t, n) {
              var i = e(n).data('padding-right')
              e(n).removeData('padding-right'), (n.style.paddingRight = i || '')
            })
            var n = [].slice.call(document.querySelectorAll('' + At))
            e(n).each(function (t, n) {
              var i = e(n).data('margin-right')
              void 0 !== i && e(n).css('margin-right', i).removeData('margin-right')
            })
            var i = e(document.body).data('padding-right')
            e(document.body).removeData('padding-right'), (document.body.style.paddingRight = i || '')
          }),
          (n._getScrollbarWidth = function () {
            var t = document.createElement('div')
            ;(t.className = 'modal-scrollbar-measure'), document.body.appendChild(t)
            var e = t.getBoundingClientRect().width - t.clientWidth
            return document.body.removeChild(t), e
          }),
          (t._jQueryInterface = function (n, i) {
            return this.each(function () {
              var r = e(this).data(gt),
                o = s({}, bt, {}, e(this).data(), {}, 'object' == typeof n && n ? n : {})
              if ((r || ((r = new t(this, o)), e(this).data(gt, r)), 'string' == typeof n)) {
                if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"')
                r[n](i)
              } else o.show && r.show(i)
            })
          }),
          r(t, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.4.1'
              },
            },
            {
              key: 'Default',
              get: function () {
                return bt
              },
            },
          ]),
          t
        )
      })()
    e(document).on(_t.CLICK_DATA_API, '[data-toggle="modal"]', function (t) {
      var n,
        i = this,
        r = u.getSelectorFromElement(this)
      r && (n = document.querySelector(r))
      var o = e(n).data(gt) ? 'toggle' : s({}, e(n).data(), {}, e(this).data())
      ;('A' !== this.tagName && 'AREA' !== this.tagName) || t.preventDefault()
      var a = e(n).one(_t.SHOW, function (t) {
        t.isDefaultPrevented() ||
          a.one(_t.HIDDEN, function () {
            e(i).is(':visible') && i.focus()
          })
      })
      kt._jQueryInterface.call(e(n), o, this)
    }),
      (e.fn[mt] = kt._jQueryInterface),
      (e.fn[mt].Constructor = kt),
      (e.fn[mt].noConflict = function () {
        return (e.fn[mt] = yt), kt._jQueryInterface
      })
    var Ot = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'],
      Dt = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      Nt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i
    function jt(t, e, n) {
      if (0 === t.length) return t
      if (n && 'function' == typeof n) return n(t)
      for (
        var i = new window.DOMParser().parseFromString(t, 'text/html'),
          r = Object.keys(e),
          o = [].slice.call(i.body.querySelectorAll('*')),
          s = function (t) {
            var n = o[t],
              i = n.nodeName.toLowerCase()
            if (-1 === r.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), 'continue'
            var s = [].slice.call(n.attributes),
              a = [].concat(e['*'] || [], e[i] || [])
            s.forEach(function (t) {
              !(function (t, e) {
                var n = t.nodeName.toLowerCase()
                if (-1 !== e.indexOf(n)) return -1 === Ot.indexOf(n) || Boolean(t.nodeValue.match(Dt) || t.nodeValue.match(Nt))
                for (
                  var i = e.filter(function (t) {
                      return t instanceof RegExp
                    }),
                    r = 0,
                    o = i.length;
                  r < o;
                  r++
                )
                  if (n.match(i[r])) return !0
                return !1
              })(t, a) && n.removeAttribute(t.nodeName)
            })
          },
          a = 0,
          u = o.length;
        a < u;
        a++
      )
        s(a)
      return i.body.innerHTML
    }
    var It = 'tooltip',
      Pt = 'bs.tooltip',
      Lt = '.' + Pt,
      Ht = e.fn[It],
      Mt = 'bs-tooltip',
      qt = new RegExp('(^|\\s)' + Mt + '\\S+', 'g'),
      Rt = ['sanitize', 'whiteList', 'sanitizeFn'],
      Wt = {
        animation: 'boolean',
        template: 'string',
        title: '(string|element|function)',
        trigger: 'string',
        delay: '(number|object)',
        html: 'boolean',
        selector: '(string|boolean)',
        placement: '(string|function)',
        offset: '(number|string|function)',
        container: '(string|element|boolean)',
        fallbackPlacement: '(string|array)',
        boundary: '(string|element)',
        sanitize: 'boolean',
        sanitizeFn: '(null|function)',
        whiteList: 'object',
        popperConfig: '(null|object)',
      },
      Ft = { AUTO: 'auto', TOP: 'top', RIGHT: 'right', BOTTOM: 'bottom', LEFT: 'left' },
      zt = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: !1,
        selector: !1,
        placement: 'top',
        offset: 0,
        container: !1,
        fallbackPlacement: 'flip',
        boundary: 'scrollParent',
        sanitize: !0,
        sanitizeFn: null,
        whiteList: {
          '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
          a: ['target', 'href', 'title', 'rel'],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ['src', 'alt', 'title', 'width', 'height'],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        },
        popperConfig: null,
      },
      Bt = 'show',
      Ut = 'out',
      $t = { HIDE: 'hide' + Lt, HIDDEN: 'hidden' + Lt, SHOW: 'show' + Lt, SHOWN: 'shown' + Lt, INSERTED: 'inserted' + Lt, CLICK: 'click' + Lt, FOCUSIN: 'focusin' + Lt, FOCUSOUT: 'focusout' + Lt, MOUSEENTER: 'mouseenter' + Lt, MOUSELEAVE: 'mouseleave' + Lt },
      Qt = 'fade',
      Vt = 'show',
      Kt = 'hover',
      Yt = 'focus',
      Xt = (function () {
        function t(t, e) {
          if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)")
          ;(this._isEnabled = !0), (this._timeout = 0), (this._hoverState = ''), (this._activeTrigger = {}), (this._popper = null), (this.element = t), (this.config = this._getConfig(e)), (this.tip = null), this._setListeners()
        }
        var i = t.prototype
        return (
          (i.enable = function () {
            this._isEnabled = !0
          }),
          (i.disable = function () {
            this._isEnabled = !1
          }),
          (i.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled
          }),
          (i.toggle = function (t) {
            if (this._isEnabled)
              if (t) {
                var n = this.constructor.DATA_KEY,
                  i = e(t.currentTarget).data(n)
                i || ((i = new this.constructor(t.currentTarget, this._getDelegateConfig())), e(t.currentTarget).data(n, i)), (i._activeTrigger.click = !i._activeTrigger.click), i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
              } else {
                if (e(this.getTipElement()).hasClass(Vt)) return void this._leave(null, this)
                this._enter(null, this)
              }
          }),
          (i.dispose = function () {
            clearTimeout(this._timeout),
              e.removeData(this.element, this.constructor.DATA_KEY),
              e(this.element).off(this.constructor.EVENT_KEY),
              e(this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler),
              this.tip && e(this.tip).remove(),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null),
              this._popper && this._popper.destroy(),
              (this._popper = null),
              (this.element = null),
              (this.config = null),
              (this.tip = null)
          }),
          (i.show = function () {
            var t = this
            if ('none' === e(this.element).css('display')) throw new Error('Please use show on visible elements')
            var i = e.Event(this.constructor.Event.SHOW)
            if (this.isWithContent() && this._isEnabled) {
              e(this.element).trigger(i)
              var r = u.findShadowRoot(this.element),
                o = e.contains(null !== r ? r : this.element.ownerDocument.documentElement, this.element)
              if (i.isDefaultPrevented() || !o) return
              var s = this.getTipElement(),
                a = u.getUID(this.constructor.NAME)
              s.setAttribute('id', a), this.element.setAttribute('aria-describedby', a), this.setContent(), this.config.animation && e(s).addClass(Qt)
              var l = 'function' == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
                c = this._getAttachment(l)
              this.addAttachmentClass(c)
              var f = this._getContainer()
              e(s).data(this.constructor.DATA_KEY, this),
                e.contains(this.element.ownerDocument.documentElement, this.tip) || e(s).appendTo(f),
                e(this.element).trigger(this.constructor.Event.INSERTED),
                (this._popper = new n(this.element, s, this._getPopperConfig(c))),
                e(s).addClass(Vt),
                'ontouchstart' in document.documentElement && e(document.body).children().on('mouseover', null, e.noop)
              var d = function () {
                t.config.animation && t._fixTransition()
                var n = t._hoverState
                ;(t._hoverState = null), e(t.element).trigger(t.constructor.Event.SHOWN), n === Ut && t._leave(null, t)
              }
              if (e(this.tip).hasClass(Qt)) {
                var h = u.getTransitionDurationFromElement(this.tip)
                e(this.tip).one(u.TRANSITION_END, d).emulateTransitionEnd(h)
              } else d()
            }
          }),
          (i.hide = function (t) {
            function n() {
              i._hoverState !== Bt && r.parentNode && r.parentNode.removeChild(r), i._cleanTipClass(), i.element.removeAttribute('aria-describedby'), e(i.element).trigger(i.constructor.Event.HIDDEN), null !== i._popper && i._popper.destroy(), t && t()
            }
            var i = this,
              r = this.getTipElement(),
              o = e.Event(this.constructor.Event.HIDE)
            if ((e(this.element).trigger(o), !o.isDefaultPrevented())) {
              if ((e(r).removeClass(Vt), 'ontouchstart' in document.documentElement && e(document.body).children().off('mouseover', null, e.noop), (this._activeTrigger.click = !1), (this._activeTrigger[Yt] = !1), (this._activeTrigger[Kt] = !1), e(this.tip).hasClass(Qt))) {
                var s = u.getTransitionDurationFromElement(r)
                e(r).one(u.TRANSITION_END, n).emulateTransitionEnd(s)
              } else n()
              this._hoverState = ''
            }
          }),
          (i.update = function () {
            null !== this._popper && this._popper.scheduleUpdate()
          }),
          (i.isWithContent = function () {
            return Boolean(this.getTitle())
          }),
          (i.addAttachmentClass = function (t) {
            e(this.getTipElement()).addClass(Mt + '-' + t)
          }),
          (i.getTipElement = function () {
            return (this.tip = this.tip || e(this.config.template)[0]), this.tip
          }),
          (i.setContent = function () {
            var t = this.getTipElement()
            this.setElementContent(e(t.querySelectorAll('.tooltip-inner')), this.getTitle()), e(t).removeClass(Qt + ' ' + Vt)
          }),
          (i.setElementContent = function (t, n) {
            'object' != typeof n || (!n.nodeType && !n.jquery) ? (this.config.html ? (this.config.sanitize && (n = jt(n, this.config.whiteList, this.config.sanitizeFn)), t.html(n)) : t.text(n)) : this.config.html ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text())
          }),
          (i.getTitle = function () {
            var t = this.element.getAttribute('data-original-title')
            return t || ('function' == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
          }),
          (i._getPopperConfig = function (t) {
            var e = this
            return s(
              {},
              {
                placement: t,
                modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: '.arrow' }, preventOverflow: { boundariesElement: this.config.boundary } },
                onCreate: function (t) {
                  t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                },
                onUpdate: function (t) {
                  return e._handlePopperPlacementChange(t)
                },
              },
              {},
              this.config.popperConfig,
            )
          }),
          (i._getOffset = function () {
            var t = this,
              e = {}
            return (
              'function' == typeof this.config.offset
                ? (e.fn = function (e) {
                    return (e.offsets = s({}, e.offsets, {}, t.config.offset(e.offsets, t.element) || {})), e
                  })
                : (e.offset = this.config.offset),
              e
            )
          }),
          (i._getContainer = function () {
            return !1 === this.config.container ? document.body : u.isElement(this.config.container) ? e(this.config.container) : e(document).find(this.config.container)
          }),
          (i._getAttachment = function (t) {
            return Ft[t.toUpperCase()]
          }),
          (i._setListeners = function () {
            var t = this
            this.config.trigger.split(' ').forEach(function (n) {
              if ('click' === n)
                e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
                  return t.toggle(e)
                })
              else if ('manual' !== n) {
                var i = n === Kt ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                  r = n === Kt ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT
                e(t.element)
                  .on(i, t.config.selector, function (e) {
                    return t._enter(e)
                  })
                  .on(r, t.config.selector, function (e) {
                    return t._leave(e)
                  })
              }
            }),
              (this._hideModalHandler = function () {
                t.element && t.hide()
              }),
              e(this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler),
              this.config.selector ? (this.config = s({}, this.config, { trigger: 'manual', selector: '' })) : this._fixTitle()
          }),
          (i._fixTitle = function () {
            var t = typeof this.element.getAttribute('data-original-title')
            ;(!this.element.getAttribute('title') && 'string' == t) || (this.element.setAttribute('data-original-title', this.element.getAttribute('title') || ''), this.element.setAttribute('title', ''))
          }),
          (i._enter = function (t, n) {
            var i = this.constructor.DATA_KEY
            ;(n = n || e(t.currentTarget).data(i)) || ((n = new this.constructor(t.currentTarget, this._getDelegateConfig())), e(t.currentTarget).data(i, n)),
              t && (n._activeTrigger['focusin' === t.type ? Yt : Kt] = !0),
              e(n.getTipElement()).hasClass(Vt) || n._hoverState === Bt
                ? (n._hoverState = Bt)
                : (clearTimeout(n._timeout),
                  (n._hoverState = Bt),
                  n.config.delay && n.config.delay.show
                    ? (n._timeout = setTimeout(function () {
                        n._hoverState === Bt && n.show()
                      }, n.config.delay.show))
                    : n.show())
          }),
          (i._leave = function (t, n) {
            var i = this.constructor.DATA_KEY
            ;(n = n || e(t.currentTarget).data(i)) || ((n = new this.constructor(t.currentTarget, this._getDelegateConfig())), e(t.currentTarget).data(i, n)),
              t && (n._activeTrigger['focusout' === t.type ? Yt : Kt] = !1),
              n._isWithActiveTrigger() ||
                (clearTimeout(n._timeout),
                (n._hoverState = Ut),
                n.config.delay && n.config.delay.hide
                  ? (n._timeout = setTimeout(function () {
                      n._hoverState === Ut && n.hide()
                    }, n.config.delay.hide))
                  : n.hide())
          }),
          (i._isWithActiveTrigger = function () {
            for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0
            return !1
          }),
          (i._getConfig = function (t) {
            var n = e(this.element).data()
            return (
              Object.keys(n).forEach(function (t) {
                ;-1 !== Rt.indexOf(t) && delete n[t]
              }),
              'number' == typeof (t = s({}, this.constructor.Default, {}, n, {}, 'object' == typeof t && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }),
              'number' == typeof t.title && (t.title = t.title.toString()),
              'number' == typeof t.content && (t.content = t.content.toString()),
              u.typeCheckConfig(It, t, this.constructor.DefaultType),
              t.sanitize && (t.template = jt(t.template, t.whiteList, t.sanitizeFn)),
              t
            )
          }),
          (i._getDelegateConfig = function () {
            var t = {}
            if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e])
            return t
          }),
          (i._cleanTipClass = function () {
            var t = e(this.getTipElement()),
              n = t.attr('class').match(qt)
            null !== n && n.length && t.removeClass(n.join(''))
          }),
          (i._handlePopperPlacementChange = function (t) {
            var e = t.instance
            ;(this.tip = e.popper), this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
          }),
          (i._fixTransition = function () {
            var t = this.getTipElement(),
              n = this.config.animation
            null === t.getAttribute('x-placement') && (e(t).removeClass(Qt), (this.config.animation = !1), this.hide(), this.show(), (this.config.animation = n))
          }),
          (t._jQueryInterface = function (n) {
            return this.each(function () {
              var i = e(this).data(Pt),
                r = 'object' == typeof n && n
              if ((i || !/dispose|hide/.test(n)) && (i || ((i = new t(this, r)), e(this).data(Pt, i)), 'string' == typeof n)) {
                if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"')
                i[n]()
              }
            })
          }),
          r(t, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.4.1'
              },
            },
            {
              key: 'Default',
              get: function () {
                return zt
              },
            },
            {
              key: 'NAME',
              get: function () {
                return It
              },
            },
            {
              key: 'DATA_KEY',
              get: function () {
                return Pt
              },
            },
            {
              key: 'Event',
              get: function () {
                return $t
              },
            },
            {
              key: 'EVENT_KEY',
              get: function () {
                return Lt
              },
            },
            {
              key: 'DefaultType',
              get: function () {
                return Wt
              },
            },
          ]),
          t
        )
      })()
    ;(e.fn[It] = Xt._jQueryInterface),
      (e.fn[It].Constructor = Xt),
      (e.fn[It].noConflict = function () {
        return (e.fn[It] = Ht), Xt._jQueryInterface
      })
    var Gt = 'popover',
      Jt = 'bs.popover',
      Zt = '.' + Jt,
      te = e.fn[Gt],
      ee = 'bs-popover',
      ne = new RegExp('(^|\\s)' + ee + '\\S+', 'g'),
      ie = s({}, Xt.Default, { placement: 'right', trigger: 'click', content: '', template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
      re = s({}, Xt.DefaultType, { content: '(string|element|function)' }),
      oe = { HIDE: 'hide' + Zt, HIDDEN: 'hidden' + Zt, SHOW: 'show' + Zt, SHOWN: 'shown' + Zt, INSERTED: 'inserted' + Zt, CLICK: 'click' + Zt, FOCUSIN: 'focusin' + Zt, FOCUSOUT: 'focusout' + Zt, MOUSEENTER: 'mouseenter' + Zt, MOUSELEAVE: 'mouseleave' + Zt },
      se = (function (t) {
        function n() {
          return t.apply(this, arguments) || this
        }
        !(function (t, e) {
          ;(t.prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e)
        })(n, t)
        var i = n.prototype
        return (
          (i.isWithContent = function () {
            return this.getTitle() || this._getContent()
          }),
          (i.addAttachmentClass = function (t) {
            e(this.getTipElement()).addClass(ee + '-' + t)
          }),
          (i.getTipElement = function () {
            return (this.tip = this.tip || e(this.config.template)[0]), this.tip
          }),
          (i.setContent = function () {
            var t = e(this.getTipElement())
            this.setElementContent(t.find('.popover-header'), this.getTitle())
            var n = this._getContent()
            'function' == typeof n && (n = n.call(this.element)), this.setElementContent(t.find('.popover-body'), n), t.removeClass('fade show')
          }),
          (i._getContent = function () {
            return this.element.getAttribute('data-content') || this.config.content
          }),
          (i._cleanTipClass = function () {
            var t = e(this.getTipElement()),
              n = t.attr('class').match(ne)
            null !== n && 0 < n.length && t.removeClass(n.join(''))
          }),
          (n._jQueryInterface = function (t) {
            return this.each(function () {
              var i = e(this).data(Jt),
                r = 'object' == typeof t ? t : null
              if ((i || !/dispose|hide/.test(t)) && (i || ((i = new n(this, r)), e(this).data(Jt, i)), 'string' == typeof t)) {
                if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"')
                i[t]()
              }
            })
          }),
          r(n, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.4.1'
              },
            },
            {
              key: 'Default',
              get: function () {
                return ie
              },
            },
            {
              key: 'NAME',
              get: function () {
                return Gt
              },
            },
            {
              key: 'DATA_KEY',
              get: function () {
                return Jt
              },
            },
            {
              key: 'Event',
              get: function () {
                return oe
              },
            },
            {
              key: 'EVENT_KEY',
              get: function () {
                return Zt
              },
            },
            {
              key: 'DefaultType',
              get: function () {
                return re
              },
            },
          ]),
          n
        )
      })(Xt)
    ;(e.fn[Gt] = se._jQueryInterface),
      (e.fn[Gt].Constructor = se),
      (e.fn[Gt].noConflict = function () {
        return (e.fn[Gt] = te), se._jQueryInterface
      })
    var ae = 'scrollspy',
      ue = 'bs.scrollspy',
      le = '.' + ue,
      ce = e.fn[ae],
      fe = { offset: 10, method: 'auto', target: '' },
      de = { offset: 'number', method: 'string', target: '(string|element)' },
      he = { ACTIVATE: 'activate' + le, SCROLL: 'scroll' + le, LOAD_DATA_API: 'load' + le + '.data-api' },
      pe = 'active',
      me = '.nav, .list-group',
      ge = '.nav-link',
      ve = '.list-group-item',
      ye = 'position',
      be = (function () {
        function t(t, n) {
          var i = this
          ;(this._element = t),
            (this._scrollElement = 'BODY' === t.tagName ? window : t),
            (this._config = this._getConfig(n)),
            (this._selector = this._config.target + ' ' + ge + ',' + this._config.target + ' ' + ve + ',' + this._config.target + ' .dropdown-item'),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            e(this._scrollElement).on(he.SCROLL, function (t) {
              return i._process(t)
            }),
            this.refresh(),
            this._process()
        }
        var n = t.prototype
        return (
          (n.refresh = function () {
            var t = this,
              n = this._scrollElement === this._scrollElement.window ? 'offset' : ye,
              i = 'auto' === this._config.method ? n : this._config.method,
              r = i === ye ? this._getScrollTop() : 0
            ;(this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              [].slice
                .call(document.querySelectorAll(this._selector))
                .map(function (t) {
                  var n,
                    o = u.getSelectorFromElement(t)
                  if ((o && (n = document.querySelector(o)), n)) {
                    var s = n.getBoundingClientRect()
                    if (s.width || s.height) return [e(n)[i]().top + r, o]
                  }
                  return null
                })
                .filter(function (t) {
                  return t
                })
                .sort(function (t, e) {
                  return t[0] - e[0]
                })
                .forEach(function (e) {
                  t._offsets.push(e[0]), t._targets.push(e[1])
                })
          }),
          (n.dispose = function () {
            e.removeData(this._element, ue), e(this._scrollElement).off(le), (this._element = null), (this._scrollElement = null), (this._config = null), (this._selector = null), (this._offsets = null), (this._targets = null), (this._activeTarget = null), (this._scrollHeight = null)
          }),
          (n._getConfig = function (t) {
            if ('string' != typeof (t = s({}, fe, {}, 'object' == typeof t && t ? t : {})).target) {
              var n = e(t.target).attr('id')
              n || ((n = u.getUID(ae)), e(t.target).attr('id', n)), (t.target = '#' + n)
            }
            return u.typeCheckConfig(ae, t, de), t
          }),
          (n._getScrollTop = function () {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
          }),
          (n._getScrollHeight = function () {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
          }),
          (n._getOffsetHeight = function () {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
          }),
          (n._process = function () {
            var t = this._getScrollTop() + this._config.offset,
              e = this._getScrollHeight(),
              n = this._config.offset + e - this._getOffsetHeight()
            if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
              var i = this._targets[this._targets.length - 1]
              this._activeTarget !== i && this._activate(i)
            } else {
              if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return (this._activeTarget = null), void this._clear()
              for (var r = this._offsets.length; r--; ) this._activeTarget !== this._targets[r] && t >= this._offsets[r] && (void 0 === this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r])
            }
          }),
          (n._activate = function (t) {
            ;(this._activeTarget = t), this._clear()
            var n = this._selector.split(',').map(function (e) {
                return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
              }),
              i = e([].slice.call(document.querySelectorAll(n.join(','))))
            i.hasClass('dropdown-item')
              ? (i.closest('.dropdown').find('.dropdown-toggle').addClass(pe), i.addClass(pe))
              : (i.addClass(pe),
                i
                  .parents(me)
                  .prev(ge + ', ' + ve)
                  .addClass(pe),
                i.parents(me).prev('.nav-item').children(ge).addClass(pe)),
              e(this._scrollElement).trigger(he.ACTIVATE, { relatedTarget: t })
          }),
          (n._clear = function () {
            ;[].slice
              .call(document.querySelectorAll(this._selector))
              .filter(function (t) {
                return t.classList.contains(pe)
              })
              .forEach(function (t) {
                return t.classList.remove(pe)
              })
          }),
          (t._jQueryInterface = function (n) {
            return this.each(function () {
              var i = e(this).data(ue)
              if ((i || ((i = new t(this, 'object' == typeof n && n)), e(this).data(ue, i)), 'string' == typeof n)) {
                if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"')
                i[n]()
              }
            })
          }),
          r(t, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.4.1'
              },
            },
            {
              key: 'Default',
              get: function () {
                return fe
              },
            },
          ]),
          t
        )
      })()
    e(window).on(he.LOAD_DATA_API, function () {
      for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = t.length; n--; ) {
        var i = e(t[n])
        be._jQueryInterface.call(i, i.data())
      }
    }),
      (e.fn[ae] = be._jQueryInterface),
      (e.fn[ae].Constructor = be),
      (e.fn[ae].noConflict = function () {
        return (e.fn[ae] = ce), be._jQueryInterface
      })
    var we = 'bs.tab',
      _e = '.' + we,
      xe = e.fn.tab,
      Ee = { HIDE: 'hide' + _e, HIDDEN: 'hidden' + _e, SHOW: 'show' + _e, SHOWN: 'shown' + _e, CLICK_DATA_API: 'click' + _e + '.data-api' },
      Te = 'active',
      Se = 'fade',
      Ce = 'show',
      Ae = '.active',
      ke = '> li > .active',
      Oe = (function () {
        function t(t) {
          this._element = t
        }
        var n = t.prototype
        return (
          (n.show = function () {
            var t = this
            if (!((this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(Te)) || e(this._element).hasClass('disabled'))) {
              var n,
                i,
                r = e(this._element).closest('.nav, .list-group')[0],
                o = u.getSelectorFromElement(this._element)
              if (r) {
                var s = 'UL' === r.nodeName || 'OL' === r.nodeName ? ke : Ae
                i = (i = e.makeArray(e(r).find(s)))[i.length - 1]
              }
              var a = e.Event(Ee.HIDE, { relatedTarget: this._element }),
                l = e.Event(Ee.SHOW, { relatedTarget: i })
              if ((i && e(i).trigger(a), e(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented())) {
                o && (n = document.querySelector(o)), this._activate(this._element, r)
                var c = function () {
                  var n = e.Event(Ee.HIDDEN, { relatedTarget: t._element }),
                    r = e.Event(Ee.SHOWN, { relatedTarget: i })
                  e(i).trigger(n), e(t._element).trigger(r)
                }
                n ? this._activate(n, n.parentNode, c) : c()
              }
            }
          }),
          (n.dispose = function () {
            e.removeData(this._element, we), (this._element = null)
          }),
          (n._activate = function (t, n, i) {
            function r() {
              return o._transitionComplete(t, s, i)
            }
            var o = this,
              s = (!n || ('UL' !== n.nodeName && 'OL' !== n.nodeName) ? e(n).children(Ae) : e(n).find(ke))[0],
              a = i && s && e(s).hasClass(Se)
            if (s && a) {
              var l = u.getTransitionDurationFromElement(s)
              e(s).removeClass(Ce).one(u.TRANSITION_END, r).emulateTransitionEnd(l)
            } else r()
          }),
          (n._transitionComplete = function (t, n, i) {
            if (n) {
              e(n).removeClass(Te)
              var r = e(n.parentNode).find('> .dropdown-menu .active')[0]
              r && e(r).removeClass(Te), 'tab' === n.getAttribute('role') && n.setAttribute('aria-selected', !1)
            }
            if ((e(t).addClass(Te), 'tab' === t.getAttribute('role') && t.setAttribute('aria-selected', !0), u.reflow(t), t.classList.contains(Se) && t.classList.add(Ce), t.parentNode && e(t.parentNode).hasClass('dropdown-menu'))) {
              var o = e(t).closest('.dropdown')[0]
              if (o) {
                var s = [].slice.call(o.querySelectorAll('.dropdown-toggle'))
                e(s).addClass(Te)
              }
              t.setAttribute('aria-expanded', !0)
            }
            i && i()
          }),
          (t._jQueryInterface = function (n) {
            return this.each(function () {
              var i = e(this),
                r = i.data(we)
              if ((r || ((r = new t(this)), i.data(we, r)), 'string' == typeof n)) {
                if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"')
                r[n]()
              }
            })
          }),
          r(t, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.4.1'
              },
            },
          ]),
          t
        )
      })()
    e(document).on(Ee.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (t) {
      t.preventDefault(), Oe._jQueryInterface.call(e(this), 'show')
    }),
      (e.fn.tab = Oe._jQueryInterface),
      (e.fn.tab.Constructor = Oe),
      (e.fn.tab.noConflict = function () {
        return (e.fn.tab = xe), Oe._jQueryInterface
      })
    var De = 'toast',
      Ne = 'bs.toast',
      je = '.' + Ne,
      Ie = e.fn[De],
      Pe = { CLICK_DISMISS: 'click.dismiss' + je, HIDE: 'hide' + je, HIDDEN: 'hidden' + je, SHOW: 'show' + je, SHOWN: 'shown' + je },
      Le = 'hide',
      He = 'show',
      Me = 'showing',
      qe = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
      Re = { animation: !0, autohide: !0, delay: 500 },
      We = (function () {
        function t(t, e) {
          ;(this._element = t), (this._config = this._getConfig(e)), (this._timeout = null), this._setListeners()
        }
        var n = t.prototype
        return (
          (n.show = function () {
            var t = this,
              n = e.Event(Pe.SHOW)
            if ((e(this._element).trigger(n), !n.isDefaultPrevented())) {
              this._config.animation && this._element.classList.add('fade')
              var i = function () {
                t._element.classList.remove(Me),
                  t._element.classList.add(He),
                  e(t._element).trigger(Pe.SHOWN),
                  t._config.autohide &&
                    (t._timeout = setTimeout(function () {
                      t.hide()
                    }, t._config.delay))
              }
              if ((this._element.classList.remove(Le), u.reflow(this._element), this._element.classList.add(Me), this._config.animation)) {
                var r = u.getTransitionDurationFromElement(this._element)
                e(this._element).one(u.TRANSITION_END, i).emulateTransitionEnd(r)
              } else i()
            }
          }),
          (n.hide = function () {
            if (this._element.classList.contains(He)) {
              var t = e.Event(Pe.HIDE)
              e(this._element).trigger(t), t.isDefaultPrevented() || this._close()
            }
          }),
          (n.dispose = function () {
            clearTimeout(this._timeout), (this._timeout = null), this._element.classList.contains(He) && this._element.classList.remove(He), e(this._element).off(Pe.CLICK_DISMISS), e.removeData(this._element, Ne), (this._element = null), (this._config = null)
          }),
          (n._getConfig = function (t) {
            return (t = s({}, Re, {}, e(this._element).data(), {}, 'object' == typeof t && t ? t : {})), u.typeCheckConfig(De, t, this.constructor.DefaultType), t
          }),
          (n._setListeners = function () {
            var t = this
            e(this._element).on(Pe.CLICK_DISMISS, '[data-dismiss="toast"]', function () {
              return t.hide()
            })
          }),
          (n._close = function () {
            function t() {
              n._element.classList.add(Le), e(n._element).trigger(Pe.HIDDEN)
            }
            var n = this
            if ((this._element.classList.remove(He), this._config.animation)) {
              var i = u.getTransitionDurationFromElement(this._element)
              e(this._element).one(u.TRANSITION_END, t).emulateTransitionEnd(i)
            } else t()
          }),
          (t._jQueryInterface = function (n) {
            return this.each(function () {
              var i = e(this),
                r = i.data(Ne)
              if ((r || ((r = new t(this, 'object' == typeof n && n)), i.data(Ne, r)), 'string' == typeof n)) {
                if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"')
                r[n](this)
              }
            })
          }),
          r(t, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.4.1'
              },
            },
            {
              key: 'DefaultType',
              get: function () {
                return qe
              },
            },
            {
              key: 'Default',
              get: function () {
                return Re
              },
            },
          ]),
          t
        )
      })()
    ;(e.fn[De] = We._jQueryInterface),
      (e.fn[De].Constructor = We),
      (e.fn[De].noConflict = function () {
        return (e.fn[De] = Ie), We._jQueryInterface
      }),
      (t.Alert = p),
      (t.Button = S),
      (t.Carousel = R),
      (t.Collapse = Z),
      (t.Dropdown = pt),
      (t.Modal = kt),
      (t.Popover = se),
      (t.Scrollspy = be),
      (t.Tab = Oe),
      (t.Toast = We),
      (t.Tooltip = Xt),
      (t.Util = u),
      Object.defineProperty(t, '__esModule', { value: !0 })
  }),
  (function (t, e) {
    'object' == typeof exports && 'object' == typeof module ? (module.exports = e()) : 'function' == typeof define && define.amd ? define([], e) : 'object' == typeof exports ? (exports.AOS = e()) : (t.AOS = e())
  })(this, function () {
    return (function (t) {
      function e(i) {
        if (n[i]) return n[i].exports
        var r = (n[i] = { exports: {}, id: i, loaded: !1 })
        return t[i].call(r.exports, r, r.exports, e), (r.loaded = !0), r.exports
      }
      var n = {}
      return (e.m = t), (e.c = n), (e.p = 'dist/'), e(0)
    })([
      function (t, e, n) {
        'use strict'
        function i(t) {
          return t && t.__esModule ? t : { default: t }
        }
        var r =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e]
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
              }
              return t
            },
          o = (i(n(1)), n(6)),
          s = i(o),
          a = i(n(7)),
          u = i(n(8)),
          l = i(n(9)),
          c = i(n(10)),
          f = i(n(11)),
          d = i(n(14)),
          h = [],
          p = !1,
          m = { offset: 120, delay: 0, easing: 'ease', duration: 400, disable: !1, once: !1, startEvent: 'DOMContentLoaded', throttleDelay: 99, debounceDelay: 50, disableMutationObserver: !1 },
          g = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            if ((t && (p = !0), p)) return (h = (0, f.default)(h, m)), (0, c.default)(h, m.once), h
          },
          v = function () {
            ;(h = (0, d.default)()), g()
          }
        t.exports = {
          init: function (t) {
            ;(m = r(m, t)), (h = (0, d.default)())
            var e = document.all && !window.atob
            return (function (t) {
              return !0 === t || ('mobile' === t && l.default.mobile()) || ('phone' === t && l.default.phone()) || ('tablet' === t && l.default.tablet()) || ('function' == typeof t && !0 === t())
            })(m.disable) || e
              ? void h.forEach(function (t, e) {
                  t.node.removeAttribute('data-aos'), t.node.removeAttribute('data-aos-easing'), t.node.removeAttribute('data-aos-duration'), t.node.removeAttribute('data-aos-delay')
                })
              : (document.querySelector('body').setAttribute('data-aos-easing', m.easing),
                document.querySelector('body').setAttribute('data-aos-duration', m.duration),
                document.querySelector('body').setAttribute('data-aos-delay', m.delay),
                'DOMContentLoaded' === m.startEvent && ['complete', 'interactive'].indexOf(document.readyState) > -1
                  ? g(!0)
                  : 'load' === m.startEvent
                  ? window.addEventListener(m.startEvent, function () {
                      g(!0)
                    })
                  : document.addEventListener(m.startEvent, function () {
                      g(!0)
                    }),
                window.addEventListener('resize', (0, a.default)(g, m.debounceDelay, !0)),
                window.addEventListener('orientationchange', (0, a.default)(g, m.debounceDelay, !0)),
                window.addEventListener(
                  'scroll',
                  (0, s.default)(function () {
                    ;(0, c.default)(h, m.once)
                  }, m.throttleDelay),
                ),
                m.disableMutationObserver || (0, u.default)('[data-aos]', v),
                h)
          },
          refresh: g,
          refreshHard: v,
        }
      },
      function (t, e) {},
      ,
      ,
      ,
      ,
      function (t, e) {
        ;(function (e) {
          'use strict'
          function n(t, e, n) {
            function r(e) {
              var n = d,
                i = h
              return (d = h = void 0), (y = e), (m = t.apply(i, n))
            }
            function s(t) {
              return (y = t), (g = setTimeout(l, e)), x ? r(t) : m
            }
            function u(t) {
              var n = t - v
              return void 0 === v || n >= e || n < 0 || (E && t - y >= p)
            }
            function l() {
              var t = _()
              return u(t)
                ? c(t)
                : void (g = setTimeout(
                    l,
                    (function (t) {
                      var n = e - (t - v)
                      return E ? w(n, p - (t - y)) : n
                    })(t),
                  ))
            }
            function c(t) {
              return (g = void 0), T && d ? r(t) : ((d = h = void 0), m)
            }
            function f() {
              var t = _(),
                n = u(t)
              if (((d = arguments), (h = this), (v = t), n)) {
                if (void 0 === g) return s(v)
                if (E) return (g = setTimeout(l, e)), r(v)
              }
              return void 0 === g && (g = setTimeout(l, e)), m
            }
            var d,
              h,
              p,
              m,
              g,
              v,
              y = 0,
              x = !1,
              E = !1,
              T = !0
            if ('function' != typeof t) throw new TypeError(a)
            return (
              (e = o(e) || 0),
              i(n) && ((x = !!n.leading), (p = (E = 'maxWait' in n) ? b(o(n.maxWait) || 0, e) : p), (T = 'trailing' in n ? !!n.trailing : T)),
              (f.cancel = function () {
                void 0 !== g && clearTimeout(g), (y = 0), (d = v = h = g = void 0)
              }),
              (f.flush = function () {
                return void 0 === g ? m : c(_())
              }),
              f
            )
          }
          function i(t) {
            var e = void 0 === t ? 'undefined' : s(t)
            return !!t && ('object' == e || 'function' == e)
          }
          function r(t) {
            return (
              'symbol' == (void 0 === t ? 'undefined' : s(t)) ||
              ((function (t) {
                return !!t && 'object' == (void 0 === t ? 'undefined' : s(t))
              })(t) &&
                y.call(t) == l)
            )
          }
          function o(t) {
            if ('number' == typeof t) return t
            if (r(t)) return u
            if (i(t)) {
              var e = 'function' == typeof t.valueOf ? t.valueOf() : t
              t = i(e) ? e + '' : e
            }
            if ('string' != typeof t) return 0 === t ? t : +t
            t = t.replace(c, '')
            var n = d.test(t)
            return n || h.test(t) ? p(t.slice(2), n ? 2 : 8) : f.test(t) ? u : +t
          }
          var s =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t
                  }
                : function (t) {
                    return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
                  },
            a = 'Expected a function',
            u = NaN,
            l = '[object Symbol]',
            c = /^\s+|\s+$/g,
            f = /^[-+]0x[0-9a-f]+$/i,
            d = /^0b[01]+$/i,
            h = /^0o[0-7]+$/i,
            p = parseInt,
            m = 'object' == (void 0 === e ? 'undefined' : s(e)) && e && e.Object === Object && e,
            g = 'object' == ('undefined' == typeof self ? 'undefined' : s(self)) && self && self.Object === Object && self,
            v = m || g || Function('return this')(),
            y = Object.prototype.toString,
            b = Math.max,
            w = Math.min,
            _ = function () {
              return v.Date.now()
            }
          t.exports = function (t, e, r) {
            var o = !0,
              s = !0
            if ('function' != typeof t) throw new TypeError(a)
            return i(r) && ((o = 'leading' in r ? !!r.leading : o), (s = 'trailing' in r ? !!r.trailing : s)), n(t, e, { leading: o, maxWait: e, trailing: s })
          }
        }).call(
          e,
          (function () {
            return this
          })(),
        )
      },
      function (t, e) {
        ;(function (e) {
          'use strict'
          function n(t) {
            var e = void 0 === t ? 'undefined' : o(t)
            return !!t && ('object' == e || 'function' == e)
          }
          function i(t) {
            return (
              'symbol' == (void 0 === t ? 'undefined' : o(t)) ||
              ((function (t) {
                return !!t && 'object' == (void 0 === t ? 'undefined' : o(t))
              })(t) &&
                v.call(t) == u)
            )
          }
          function r(t) {
            if ('number' == typeof t) return t
            if (i(t)) return a
            if (n(t)) {
              var e = 'function' == typeof t.valueOf ? t.valueOf() : t
              t = n(e) ? e + '' : e
            }
            if ('string' != typeof t) return 0 === t ? t : +t
            t = t.replace(l, '')
            var r = f.test(t)
            return r || d.test(t) ? h(t.slice(2), r ? 2 : 8) : c.test(t) ? a : +t
          }
          var o =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t
                  }
                : function (t) {
                    return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
                  },
            s = 'Expected a function',
            a = NaN,
            u = '[object Symbol]',
            l = /^\s+|\s+$/g,
            c = /^[-+]0x[0-9a-f]+$/i,
            f = /^0b[01]+$/i,
            d = /^0o[0-7]+$/i,
            h = parseInt,
            p = 'object' == (void 0 === e ? 'undefined' : o(e)) && e && e.Object === Object && e,
            m = 'object' == ('undefined' == typeof self ? 'undefined' : o(self)) && self && self.Object === Object && self,
            g = p || m || Function('return this')(),
            v = Object.prototype.toString,
            y = Math.max,
            b = Math.min,
            w = function () {
              return g.Date.now()
            }
          t.exports = function (t, e, i) {
            function o(e) {
              var n = d,
                i = h
              return (d = h = void 0), (_ = e), (m = t.apply(i, n))
            }
            function a(t) {
              return (_ = t), (g = setTimeout(l, e)), x ? o(t) : m
            }
            function u(t) {
              var n = t - v
              return void 0 === v || n >= e || n < 0 || (E && t - _ >= p)
            }
            function l() {
              var t = w()
              return u(t)
                ? c(t)
                : void (g = setTimeout(
                    l,
                    (function (t) {
                      var n = e - (t - v)
                      return E ? b(n, p - (t - _)) : n
                    })(t),
                  ))
            }
            function c(t) {
              return (g = void 0), T && d ? o(t) : ((d = h = void 0), m)
            }
            function f() {
              var t = w(),
                n = u(t)
              if (((d = arguments), (h = this), (v = t), n)) {
                if (void 0 === g) return a(v)
                if (E) return (g = setTimeout(l, e)), o(v)
              }
              return void 0 === g && (g = setTimeout(l, e)), m
            }
            var d,
              h,
              p,
              m,
              g,
              v,
              _ = 0,
              x = !1,
              E = !1,
              T = !0
            if ('function' != typeof t) throw new TypeError(s)
            return (
              (e = r(e) || 0),
              n(i) && ((x = !!i.leading), (p = (E = 'maxWait' in i) ? y(r(i.maxWait) || 0, e) : p), (T = 'trailing' in i ? !!i.trailing : T)),
              (f.cancel = function () {
                void 0 !== g && clearTimeout(g), (_ = 0), (d = v = h = g = void 0)
              }),
              (f.flush = function () {
                return void 0 === g ? m : c(w())
              }),
              f
            )
          }
        }).call(
          e,
          (function () {
            return this
          })(),
        )
      },
      function (t, e) {
        'use strict'
        function n(t) {
          t &&
            t.forEach(function (t) {
              var e = Array.prototype.slice.call(t.addedNodes),
                n = Array.prototype.slice.call(t.removedNodes)
              e.concat(n).filter(function (t) {
                return t.hasAttribute && t.hasAttribute('data-aos')
              }).length && i()
            })
        }
        Object.defineProperty(e, '__esModule', { value: !0 })
        var i = function () {}
        e.default = function (t, e) {
          var r = window.document,
            o = new (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver)(n)
          ;(i = e), o.observe(r.documentElement, { childList: !0, subtree: !0, removedNodes: !0 })
        }
      },
      function (t, e) {
        'use strict'
        function n() {
          return navigator.userAgent || navigator.vendor || window.opera || ''
        }
        Object.defineProperty(e, '__esModule', { value: !0 })
        var i = (function () {
            function t(t, e) {
              for (var n = 0; n < e.length; n++) {
                var i = e[n]
                ;(i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
              }
            }
            return function (e, n, i) {
              return n && t(e.prototype, n), i && t(e, i), e
            }
          })(),
          r =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
          o =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          s =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
          a =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          u = (function () {
            function t() {
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
              })(this, t)
            }
            return (
              i(t, [
                {
                  key: 'phone',
                  value: function () {
                    var t = n()
                    return !(!r.test(t) && !o.test(t.substr(0, 4)))
                  },
                },
                {
                  key: 'mobile',
                  value: function () {
                    var t = n()
                    return !(!s.test(t) && !a.test(t.substr(0, 4)))
                  },
                },
                {
                  key: 'tablet',
                  value: function () {
                    return this.mobile() && !this.phone()
                  },
                },
              ]),
              t
            )
          })()
        e.default = new u()
      },
      function (t, e) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.default = function (t, e) {
          var n = window.pageYOffset,
            i = window.innerHeight
          t.forEach(function (t, r) {
            !(function (t, e, n) {
              var i = t.node.getAttribute('data-aos-once')
              e > t.position ? t.node.classList.add('aos-animate') : void 0 !== i && ('false' === i || (!n && 'true' !== i)) && t.node.classList.remove('aos-animate')
            })(t, i + n, e)
          })
        }
      },
      function (t, e, n) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 })
        var i = (function (t) {
          return t && t.__esModule ? t : { default: t }
        })(n(12))
        e.default = function (t, e) {
          return (
            t.forEach(function (t, n) {
              t.node.classList.add('aos-init'), (t.position = (0, i.default)(t.node, e.offset))
            }),
            t
          )
        }
      },
      function (t, e, n) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 })
        var i = (function (t) {
          return t && t.__esModule ? t : { default: t }
        })(n(13))
        e.default = function (t, e) {
          var n = 0,
            r = 0,
            o = window.innerHeight,
            s = { offset: t.getAttribute('data-aos-offset'), anchor: t.getAttribute('data-aos-anchor'), anchorPlacement: t.getAttribute('data-aos-anchor-placement') }
          switch ((s.offset && !isNaN(s.offset) && (r = parseInt(s.offset)), s.anchor && document.querySelectorAll(s.anchor) && (t = document.querySelectorAll(s.anchor)[0]), (n = (0, i.default)(t).top), s.anchorPlacement)) {
            case 'top-bottom':
              break
            case 'center-bottom':
              n += t.offsetHeight / 2
              break
            case 'bottom-bottom':
              n += t.offsetHeight
              break
            case 'top-center':
              n += o / 2
              break
            case 'bottom-center':
              n += o / 2 + t.offsetHeight
              break
            case 'center-center':
              n += o / 2 + t.offsetHeight / 2
              break
            case 'top-top':
              n += o
              break
            case 'bottom-top':
              n += t.offsetHeight + o
              break
            case 'center-top':
              n += t.offsetHeight / 2 + o
          }
          return s.anchorPlacement || s.offset || isNaN(e) || (r = e), n + r
        }
      },
      function (t, e) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.default = function (t) {
          for (var e = 0, n = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop); ) (e += t.offsetLeft - ('BODY' != t.tagName ? t.scrollLeft : 0)), (n += t.offsetTop - ('BODY' != t.tagName ? t.scrollTop : 0)), (t = t.offsetParent)
          return { top: n, left: e }
        }
      },
      function (t, e) {
        'use strict'
        Object.defineProperty(e, '__esModule', { value: !0 })
        e.default = function (t) {
          return (
            (t = t || document.querySelectorAll('[data-aos]')),
            Array.prototype.map.call(t, function (t) {
              return { node: t }
            })
          )
        }
      },
    ])
  }),
  (function (t, e) {
    'object' == typeof exports && 'object' == typeof module ? (module.exports = e()) : 'function' == typeof define && define.amd ? define([], e) : 'object' == typeof exports ? (exports.Scrollbar = e()) : (t.Scrollbar = e())
  })(this, function () {
    return (function (t) {
      var e = {}
      function n(i) {
        if (e[i]) return e[i].exports
        var r = (e[i] = { i: i, l: !1, exports: {} })
        return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
      }
      return (
        (n.m = t),
        (n.c = e),
        (n.d = function (t, e, i) {
          n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i })
        }),
        (n.r = function (t) {
          'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 })
        }),
        (n.t = function (t, e) {
          if ((1 & e && (t = n(t)), 8 & e)) return t
          if (4 & e && 'object' == typeof t && t && t.__esModule) return t
          var i = Object.create(null)
          if ((n.r(i), Object.defineProperty(i, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
            for (var r in t)
              n.d(
                i,
                r,
                function (e) {
                  return t[e]
                }.bind(null, r),
              )
          return i
        }),
        (n.n = function (t) {
          var e =
            t && t.__esModule
              ? function () {
                  return t.default
                }
              : function () {
                  return t
                }
          return n.d(e, 'a', e), e
        }),
        (n.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e)
        }),
        (n.p = ''),
        n((n.s = 58))
      )
    })([
      function (t, e, n) {
        var i = n(25)('wks'),
          r = n(16),
          o = n(2).Symbol,
          s = 'function' == typeof o
        ;(t.exports = function (t) {
          return i[t] || (i[t] = (s && o[t]) || (s ? o : r)('Symbol.' + t))
        }).store = i
      },
      function (t, e) {
        t.exports = function (t) {
          return 'object' == typeof t ? null !== t : 'function' == typeof t
        }
      },
      function (t, e) {
        var n = (t.exports = 'undefined' != typeof window && window.Math == Math ? window : 'undefined' != typeof self && self.Math == Math ? self : Function('return this')())
        'number' == typeof __g && (__g = n)
      },
      function (t, e) {
        var n = (t.exports = { version: '2.6.9' })
        'number' == typeof __e && (__e = n)
      },
      function (t, e, n) {
        t.exports = !n(13)(function () {
          return (
            7 !=
            Object.defineProperty({}, 'a', {
              get: function () {
                return 7
              },
            }).a
          )
        })
      },
      function (t, e, n) {
        var i = n(2),
          r = n(3),
          o = n(11),
          s = n(6),
          a = n(10),
          u = function (t, e, n) {
            var l,
              c,
              f,
              d,
              h = t & u.F,
              p = t & u.G,
              m = t & u.S,
              g = t & u.P,
              v = t & u.B,
              y = p ? i : m ? i[e] || (i[e] = {}) : (i[e] || {}).prototype,
              b = p ? r : r[e] || (r[e] = {}),
              w = b.prototype || (b.prototype = {})
            for (l in (p && (n = e), n)) (f = ((c = !h && y && void 0 !== y[l]) ? y : n)[l]), (d = v && c ? a(f, i) : g && 'function' == typeof f ? a(Function.call, f) : f), y && s(y, l, f, t & u.U), b[l] != f && o(b, l, d), g && w[l] != f && (w[l] = f)
          }
        ;(i.core = r), (u.F = 1), (u.G = 2), (u.S = 4), (u.P = 8), (u.B = 16), (u.W = 32), (u.U = 64), (u.R = 128), (t.exports = u)
      },
      function (t, e, n) {
        var i = n(2),
          r = n(11),
          o = n(9),
          s = n(16)('src'),
          a = n(60),
          u = ('' + a).split('toString')
        ;(n(3).inspectSource = function (t) {
          return a.call(t)
        }),
          (t.exports = function (t, e, n, a) {
            var l = 'function' == typeof n
            l && (o(n, 'name') || r(n, 'name', e)), t[e] !== n && (l && (o(n, s) || r(n, s, t[e] ? '' + t[e] : u.join(String(e)))), t === i ? (t[e] = n) : a ? (t[e] ? (t[e] = n) : r(t, e, n)) : (delete t[e], r(t, e, n)))
          })(Function.prototype, 'toString', function () {
            return ('function' == typeof this && this[s]) || a.call(this)
          })
      },
      function (t, e, n) {
        var i = n(8),
          r = n(41),
          o = n(43),
          s = Object.defineProperty
        e.f = n(4)
          ? Object.defineProperty
          : function (t, e, n) {
              if ((i(t), (e = o(e, !0)), i(n), r))
                try {
                  return s(t, e, n)
                } catch (t) {}
              if ('get' in n || 'set' in n) throw TypeError('Accessors not supported!')
              return 'value' in n && (t[e] = n.value), t
            }
      },
      function (t, e, n) {
        var i = n(1)
        t.exports = function (t) {
          if (!i(t)) throw TypeError(t + ' is not an object!')
          return t
        }
      },
      function (t, e) {
        var n = {}.hasOwnProperty
        t.exports = function (t, e) {
          return n.call(t, e)
        }
      },
      function (t, e, n) {
        var i = n(44)
        t.exports = function (t, e, n) {
          if ((i(t), void 0 === e)) return t
          switch (n) {
            case 1:
              return function (n) {
                return t.call(e, n)
              }
            case 2:
              return function (n, i) {
                return t.call(e, n, i)
              }
            case 3:
              return function (n, i, r) {
                return t.call(e, n, i, r)
              }
          }
          return function () {
            return t.apply(e, arguments)
          }
        }
      },
      function (t, e, n) {
        var i = n(7),
          r = n(17)
        t.exports = n(4)
          ? function (t, e, n) {
              return i.f(t, e, r(1, n))
            }
          : function (t, e, n) {
              return (t[e] = n), t
            }
      },
      function (t, e, n) {
        var i = n(1)
        t.exports = function (t, e) {
          if (!i(t) || t._t !== e) throw TypeError('Incompatible receiver, ' + e + ' required!')
          return t
        }
      },
      function (t, e) {
        t.exports = function (t) {
          try {
            return !!t()
          } catch (t) {
            return !0
          }
        }
      },
      function (t, e) {
        t.exports = {}
      },
      function (t, e, n) {
        var i = n(10),
          r = n(49),
          o = n(50),
          s = n(8),
          a = n(19),
          u = n(51),
          l = {},
          c = {}
        ;((e = t.exports =
          function (t, e, n, f, d) {
            var h,
              p,
              m,
              g,
              v = d
                ? function () {
                    return t
                  }
                : u(t),
              y = i(n, f, e ? 2 : 1),
              b = 0
            if ('function' != typeof v) throw TypeError(t + ' is not iterable!')
            if (o(v)) {
              for (h = a(t.length); h > b; b++) if ((g = e ? y(s((p = t[b]))[0], p[1]) : y(t[b])) === l || g === c) return g
            } else for (m = v.call(t); !(p = m.next()).done; ) if ((g = r(m, y, p.value, e)) === l || g === c) return g
          }).BREAK = l),
          (e.RETURN = c)
      },
      function (t, e) {
        var n = 0,
          i = Math.random()
        t.exports = function (t) {
          return 'Symbol('.concat(void 0 === t ? '' : t, ')_', (++n + i).toString(36))
        }
      },
      function (t, e) {
        t.exports = function (t, e) {
          return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e }
        }
      },
      function (t, e, n) {
        var i = n(31),
          r = n(28)
        t.exports = function (t) {
          return i(r(t))
        }
      },
      function (t, e, n) {
        var i = n(27),
          r = Math.min
        t.exports = function (t) {
          return t > 0 ? r(i(t), 9007199254740991) : 0
        }
      },
      function (t, e, n) {
        var i = n(28)
        t.exports = function (t) {
          return Object(i(t))
        }
      },
      function (t, e, n) {
        var i = n(16)('meta'),
          r = n(1),
          o = n(9),
          s = n(7).f,
          a = 0,
          u =
            Object.isExtensible ||
            function () {
              return !0
            },
          l = !n(13)(function () {
            return u(Object.preventExtensions({}))
          }),
          c = function (t) {
            s(t, i, { value: { i: 'O' + ++a, w: {} } })
          },
          f = (t.exports = {
            KEY: i,
            NEED: !1,
            fastKey: function (t, e) {
              if (!r(t)) return 'symbol' == typeof t ? t : ('string' == typeof t ? 'S' : 'P') + t
              if (!o(t, i)) {
                if (!u(t)) return 'F'
                if (!e) return 'E'
                c(t)
              }
              return t[i].i
            },
            getWeak: function (t, e) {
              if (!o(t, i)) {
                if (!u(t)) return !0
                if (!e) return !1
                c(t)
              }
              return t[i].w
            },
            onFreeze: function (t) {
              return l && f.NEED && u(t) && !o(t, i) && c(t), t
            },
          })
      },
      function (t, e, n) {
        'use strict'
        var i = n(23),
          r = {}
        ;(r[n(0)('toStringTag')] = 'z'),
          r + '' != '[object z]' &&
            n(6)(
              Object.prototype,
              'toString',
              function () {
                return '[object ' + i(this) + ']'
              },
              !0,
            )
      },
      function (t, e, n) {
        var i = n(24),
          r = n(0)('toStringTag'),
          o =
            'Arguments' ==
            i(
              (function () {
                return arguments
              })(),
            )
        t.exports = function (t) {
          var e, n, s
          return void 0 === t
            ? 'Undefined'
            : null === t
            ? 'Null'
            : 'string' ==
              typeof (n = (function (t, e) {
                try {
                  return t[e]
                } catch (t) {}
              })((e = Object(t)), r))
            ? n
            : o
            ? i(e)
            : 'Object' == (s = i(e)) && 'function' == typeof e.callee
            ? 'Arguments'
            : s
        }
      },
      function (t, e) {
        var n = {}.toString
        t.exports = function (t) {
          return n.call(t).slice(8, -1)
        }
      },
      function (t, e, n) {
        var i = n(3),
          r = n(2),
          o = r['__core-js_shared__'] || (r['__core-js_shared__'] = {})
        ;(t.exports = function (t, e) {
          return o[t] || (o[t] = void 0 !== e ? e : {})
        })('versions', []).push({ version: i.version, mode: n(40) ? 'pure' : 'global', copyright: 'Â© 2019 Denis Pushkarev (zloirock.ru)' })
      },
      function (t, e, n) {
        'use strict'
        var i = n(61)(!0)
        n(29)(
          String,
          'String',
          function (t) {
            ;(this._t = String(t)), (this._i = 0)
          },
          function () {
            var t,
              e = this._t,
              n = this._i
            return n >= e.length ? { value: void 0, done: !0 } : ((t = i(e, n)), (this._i += t.length), { value: t, done: !1 })
          },
        )
      },
      function (t, e) {
        var n = Math.ceil,
          i = Math.floor
        t.exports = function (t) {
          return isNaN((t = +t)) ? 0 : (t > 0 ? i : n)(t)
        }
      },
      function (t, e) {
        t.exports = function (t) {
          if (null == t) throw TypeError("Can't call method on  " + t)
          return t
        }
      },
      function (t, e, n) {
        'use strict'
        var i = n(40),
          r = n(5),
          o = n(6),
          s = n(11),
          a = n(14),
          u = n(62),
          l = n(33),
          c = n(68),
          f = n(0)('iterator'),
          d = !([].keys && 'next' in [].keys()),
          h = function () {
            return this
          }
        t.exports = function (t, e, n, p, m, g, v) {
          u(n, e, p)
          var y,
            b,
            w,
            _ = function (t) {
              if (!d && t in S) return S[t]
              switch (t) {
                case 'keys':
                case 'values':
                  return function () {
                    return new n(this, t)
                  }
              }
              return function () {
                return new n(this, t)
              }
            },
            x = e + ' Iterator',
            E = 'values' == m,
            T = !1,
            S = t.prototype,
            C = S[f] || S['@@iterator'] || (m && S[m]),
            A = C || _(m),
            k = m ? (E ? _('entries') : A) : void 0,
            O = ('Array' == e && S.entries) || C
          if (
            (O && (w = c(O.call(new t()))) !== Object.prototype && w.next && (l(w, x, !0), i || 'function' == typeof w[f] || s(w, f, h)),
            E &&
              C &&
              'values' !== C.name &&
              ((T = !0),
              (A = function () {
                return C.call(this)
              })),
            (i && !v) || (!d && !T && S[f]) || s(S, f, A),
            (a[e] = A),
            (a[x] = h),
            m)
          )
            if (((y = { values: E ? A : _('values'), keys: g ? A : _('keys'), entries: k }), v)) for (b in y) b in S || o(S, b, y[b])
            else r(r.P + r.F * (d || T), e, y)
          return y
        }
      },
      function (t, e, n) {
        var i = n(64),
          r = n(46)
        t.exports =
          Object.keys ||
          function (t) {
            return i(t, r)
          }
      },
      function (t, e, n) {
        var i = n(24)
        t.exports = Object('z').propertyIsEnumerable(0)
          ? Object
          : function (t) {
              return 'String' == i(t) ? t.split('') : Object(t)
            }
      },
      function (t, e, n) {
        var i = n(25)('keys'),
          r = n(16)
        t.exports = function (t) {
          return i[t] || (i[t] = r(t))
        }
      },
      function (t, e, n) {
        var i = n(7).f,
          r = n(9),
          o = n(0)('toStringTag')
        t.exports = function (t, e, n) {
          t && !r((t = n ? t : t.prototype), o) && i(t, o, { configurable: !0, value: e })
        }
      },
      function (t, e, n) {
        for (
          var i = n(69),
            r = n(30),
            o = n(6),
            s = n(2),
            a = n(11),
            u = n(14),
            l = n(0),
            c = l('iterator'),
            f = l('toStringTag'),
            d = u.Array,
            h = {
              CSSRuleList: !0,
              CSSStyleDeclaration: !1,
              CSSValueList: !1,
              ClientRectList: !1,
              DOMRectList: !1,
              DOMStringList: !1,
              DOMTokenList: !0,
              DataTransferItemList: !1,
              FileList: !1,
              HTMLAllCollection: !1,
              HTMLCollection: !1,
              HTMLFormElement: !1,
              HTMLSelectElement: !1,
              MediaList: !0,
              MimeTypeArray: !1,
              NamedNodeMap: !1,
              NodeList: !0,
              PaintRequestList: !1,
              Plugin: !1,
              PluginArray: !1,
              SVGLengthList: !1,
              SVGNumberList: !1,
              SVGPathSegList: !1,
              SVGPointList: !1,
              SVGStringList: !1,
              SVGTransformList: !1,
              SourceBufferList: !1,
              StyleSheetList: !0,
              TextTrackCueList: !1,
              TextTrackList: !1,
              TouchList: !1,
            },
            p = r(h),
            m = 0;
          m < p.length;
          m++
        ) {
          var g,
            v = p[m],
            y = h[v],
            b = s[v],
            w = b && b.prototype
          if (w && (w[c] || a(w, c, d), w[f] || a(w, f, v), (u[v] = d), y)) for (g in i) w[g] || o(w, g, i[g], !0)
        }
      },
      function (t, e, n) {
        var i = n(6)
        t.exports = function (t, e, n) {
          for (var r in e) i(t, r, e[r], n)
          return t
        }
      },
      function (t, e) {
        t.exports = function (t, e, n, i) {
          if (!(t instanceof e) || (void 0 !== i && i in t)) throw TypeError(n + ': incorrect invocation!')
          return t
        }
      },
      function (t, e, n) {
        'use strict'
        var i = n(2),
          r = n(5),
          o = n(6),
          s = n(35),
          a = n(21),
          u = n(15),
          l = n(36),
          c = n(1),
          f = n(13),
          d = n(52),
          h = n(33),
          p = n(73)
        t.exports = function (t, e, n, m, g, v) {
          var y = i[t],
            b = y,
            w = g ? 'set' : 'add',
            _ = b && b.prototype,
            x = {},
            E = function (t) {
              var e = _[t]
              o(
                _,
                t,
                'delete' == t || 'has' == t
                  ? function (t) {
                      return !(v && !c(t)) && e.call(this, 0 === t ? 0 : t)
                    }
                  : 'get' == t
                  ? function (t) {
                      return v && !c(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                    }
                  : 'add' == t
                  ? function (t) {
                      return e.call(this, 0 === t ? 0 : t), this
                    }
                  : function (t, n) {
                      return e.call(this, 0 === t ? 0 : t, n), this
                    },
              )
            }
          if (
            'function' == typeof b &&
            (v ||
              (_.forEach &&
                !f(function () {
                  new b().entries().next()
                })))
          ) {
            var T = new b(),
              S = T[w](v ? {} : -0, 1) != T,
              C = f(function () {
                T.has(1)
              }),
              A = d(function (t) {
                new b(t)
              }),
              k =
                !v &&
                f(function () {
                  for (var t = new b(), e = 5; e--; ) t[w](e, e)
                  return !t.has(-0)
                })
            A ||
              (((b = e(function (e, n) {
                l(e, b, t)
                var i = p(new y(), e, b)
                return null != n && u(n, g, i[w], i), i
              })).prototype = _),
              (_.constructor = b)),
              (C || k) && (E('delete'), E('has'), g && E('get')),
              (k || S) && E(w),
              v && _.clear && delete _.clear
          } else (b = m.getConstructor(e, t, g, w)), s(b.prototype, n), (a.NEED = !0)
          return h(b, t), (x[t] = b), r(r.G + r.W + r.F * (b != y), x), v || m.setStrong(b, t, g), b
        }
      },
      function (t, e, n) {
        'use strict'
        var i = n(5)
        t.exports = function (t) {
          i(i.S, t, {
            of: function () {
              for (var t = arguments.length, e = new Array(t); t--; ) e[t] = arguments[t]
              return new this(e)
            },
          })
        }
      },
      function (t, e, n) {
        'use strict'
        var i = n(5),
          r = n(44),
          o = n(10),
          s = n(15)
        t.exports = function (t) {
          i(i.S, t, {
            from: function (t) {
              var e,
                n,
                i,
                a,
                u = arguments[1]
              return (
                r(this),
                (e = void 0 !== u) && r(u),
                null == t
                  ? new this()
                  : ((n = []),
                    e
                      ? ((i = 0),
                        (a = o(u, arguments[2], 2)),
                        s(t, !1, function (t) {
                          n.push(a(t, i++))
                        }))
                      : s(t, !1, n.push, n),
                    new this(n))
              )
            },
          })
        }
      },
      function (t, e) {
        t.exports = !1
      },
      function (t, e, n) {
        t.exports =
          !n(4) &&
          !n(13)(function () {
            return (
              7 !=
              Object.defineProperty(n(42)('div'), 'a', {
                get: function () {
                  return 7
                },
              }).a
            )
          })
      },
      function (t, e, n) {
        var i = n(1),
          r = n(2).document,
          o = i(r) && i(r.createElement)
        t.exports = function (t) {
          return o ? r.createElement(t) : {}
        }
      },
      function (t, e, n) {
        var i = n(1)
        t.exports = function (t, e) {
          if (!i(t)) return t
          var n, r
          if (e && 'function' == typeof (n = t.toString) && !i((r = n.call(t)))) return r
          if ('function' == typeof (n = t.valueOf) && !i((r = n.call(t)))) return r
          if (!e && 'function' == typeof (n = t.toString) && !i((r = n.call(t)))) return r
          throw TypeError("Can't convert object to primitive value")
        }
      },
      function (t, e) {
        t.exports = function (t) {
          if ('function' != typeof t) throw TypeError(t + ' is not a function!')
          return t
        }
      },
      function (t, e, n) {
        var i = n(8),
          r = n(63),
          o = n(46),
          s = n(32)('IE_PROTO'),
          a = function () {},
          u = function () {
            var t,
              e = n(42)('iframe'),
              i = o.length
            for (e.style.display = 'none', n(67).appendChild(e), e.src = 'javascript:', (t = e.contentWindow.document).open(), t.write('<script>document.F=Object</script>'), t.close(), u = t.F; i--; ) delete u.prototype[o[i]]
            return u()
          }
        t.exports =
          Object.create ||
          function (t, e) {
            var n
            return null !== t ? ((a.prototype = i(t)), (n = new a()), (a.prototype = null), (n[s] = t)) : (n = u()), void 0 === e ? n : r(n, e)
          }
      },
      function (t, e) {
        t.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',')
      },
      function (t, e) {
        t.exports = function (t, e) {
          return { value: e, done: !!t }
        }
      },
      function (t, e, n) {
        'use strict'
        var i = n(7).f,
          r = n(45),
          o = n(35),
          s = n(10),
          a = n(36),
          u = n(15),
          l = n(29),
          c = n(47),
          f = n(72),
          d = n(4),
          h = n(21).fastKey,
          p = n(12),
          m = d ? '_s' : 'size',
          g = function (t, e) {
            var n,
              i = h(e)
            if ('F' !== i) return t._i[i]
            for (n = t._f; n; n = n.n) if (n.k == e) return n
          }
        t.exports = {
          getConstructor: function (t, e, n, l) {
            var c = t(function (t, i) {
              a(t, c, e, '_i'), (t._t = e), (t._i = r(null)), (t._f = void 0), (t._l = void 0), (t[m] = 0), null != i && u(i, n, t[l], t)
            })
            return (
              o(c.prototype, {
                clear: function () {
                  for (var t = p(this, e), n = t._i, i = t._f; i; i = i.n) (i.r = !0), i.p && (i.p = i.p.n = void 0), delete n[i.i]
                  ;(t._f = t._l = void 0), (t[m] = 0)
                },
                delete: function (t) {
                  var n = p(this, e),
                    i = g(n, t)
                  if (i) {
                    var r = i.n,
                      o = i.p
                    delete n._i[i.i], (i.r = !0), o && (o.n = r), r && (r.p = o), n._f == i && (n._f = r), n._l == i && (n._l = o), n[m]--
                  }
                  return !!i
                },
                forEach: function (t) {
                  p(this, e)
                  for (var n, i = s(t, arguments.length > 1 ? arguments[1] : void 0, 3); (n = n ? n.n : this._f); ) for (i(n.v, n.k, this); n && n.r; ) n = n.p
                },
                has: function (t) {
                  return !!g(p(this, e), t)
                },
              }),
              d &&
                i(c.prototype, 'size', {
                  get: function () {
                    return p(this, e)[m]
                  },
                }),
              c
            )
          },
          def: function (t, e, n) {
            var i,
              r,
              o = g(t, e)
            return o ? (o.v = n) : ((t._l = o = { i: (r = h(e, !0)), k: e, v: n, p: (i = t._l), n: void 0, r: !1 }), t._f || (t._f = o), i && (i.n = o), t[m]++, 'F' !== r && (t._i[r] = o)), t
          },
          getEntry: g,
          setStrong: function (t, e, n) {
            l(
              t,
              e,
              function (t, n) {
                ;(this._t = p(t, e)), (this._k = n), (this._l = void 0)
              },
              function () {
                for (var t = this._k, e = this._l; e && e.r; ) e = e.p
                return this._t && (this._l = e = e ? e.n : this._t._f) ? c(0, 'keys' == t ? e.k : 'values' == t ? e.v : [e.k, e.v]) : ((this._t = void 0), c(1))
              },
              n ? 'entries' : 'values',
              !n,
              !0,
            ),
              f(e)
          },
        }
      },
      function (t, e, n) {
        var i = n(8)
        t.exports = function (t, e, n, r) {
          try {
            return r ? e(i(n)[0], n[1]) : e(n)
          } catch (e) {
            var o = t.return
            throw (void 0 !== o && i(o.call(t)), e)
          }
        }
      },
      function (t, e, n) {
        var i = n(14),
          r = n(0)('iterator'),
          o = Array.prototype
        t.exports = function (t) {
          return void 0 !== t && (i.Array === t || o[r] === t)
        }
      },
      function (t, e, n) {
        var i = n(23),
          r = n(0)('iterator'),
          o = n(14)
        t.exports = n(3).getIteratorMethod = function (t) {
          if (null != t) return t[r] || t['@@iterator'] || o[i(t)]
        }
      },
      function (t, e, n) {
        var i = n(0)('iterator'),
          r = !1
        try {
          var o = [7][i]()
          ;(o.return = function () {
            r = !0
          }),
            Array.from(o, function () {
              throw 2
            })
        } catch (t) {}
        t.exports = function (t, e) {
          if (!e && !r) return !1
          var n = !1
          try {
            var o = [7],
              s = o[i]()
            ;(s.next = function () {
              return { done: (n = !0) }
            }),
              (o[i] = function () {
                return s
              }),
              t(o)
          } catch (t) {}
          return n
        }
      },
      function (t, e) {
        e.f = {}.propertyIsEnumerable
      },
      function (t, e, n) {
        var i = n(23),
          r = n(77)
        t.exports = function (t) {
          return function () {
            if (i(this) != t) throw TypeError(t + "#toJSON isn't generic")
            return r(this)
          }
        }
      },
      function (t, e, n) {
        var i = n(10),
          r = n(31),
          o = n(20),
          s = n(19),
          a = n(87)
        t.exports = function (t, e) {
          var n = 1 == t,
            u = 2 == t,
            l = 3 == t,
            c = 4 == t,
            f = 6 == t,
            d = 5 == t || f,
            h = e || a
          return function (e, a, p) {
            for (var m, g, v = o(e), y = r(v), b = i(a, p, 3), w = s(y.length), _ = 0, x = n ? h(e, w) : u ? h(e, 0) : void 0; w > _; _++)
              if ((d || _ in y) && ((g = b((m = y[_]), _, v)), t))
                if (n) x[_] = g
                else if (g)
                  switch (t) {
                    case 3:
                      return !0
                    case 5:
                      return m
                    case 6:
                      return _
                    case 2:
                      x.push(m)
                  }
                else if (c) return !1
            return f ? -1 : l || c ? c : x
          }
        }
      },
      function (t, e, n) {
        'use strict'
        var i = n(4),
          r = n(30),
          o = n(90),
          s = n(53),
          a = n(20),
          u = n(31),
          l = Object.assign
        t.exports =
          !l ||
          n(13)(function () {
            var t = {},
              e = {},
              n = Symbol(),
              i = 'abcdefghijklmnopqrst'
            return (
              (t[n] = 7),
              i.split('').forEach(function (t) {
                e[t] = t
              }),
              7 != l({}, t)[n] || Object.keys(l({}, e)).join('') != i
            )
          })
            ? function (t, e) {
                for (var n = a(t), l = arguments.length, c = 1, f = o.f, d = s.f; l > c; ) for (var h, p = u(arguments[c++]), m = f ? r(p).concat(f(p)) : r(p), g = m.length, v = 0; g > v; ) (h = m[v++]), (i && !d.call(p, h)) || (n[h] = p[h])
                return n
              }
            : l
      },
      function (t, e, n) {
        'use strict'
        ;(function (t) {
          var n = 'object' == typeof t && t && t.Object === Object && t
          e.a = n
        }).call(this, n(99))
      },
      function (t, e, n) {
        t.exports = n(100)
      },
      function (t, e, n) {
        n(22), n(26), n(34), n(71), n(76), n(78), n(79), (t.exports = n(3).Map)
      },
      function (t, e, n) {
        t.exports = n(25)('native-function-to-string', Function.toString)
      },
      function (t, e, n) {
        var i = n(27),
          r = n(28)
        t.exports = function (t) {
          return function (e, n) {
            var o,
              s,
              a = String(r(e)),
              u = i(n),
              l = a.length
            return u < 0 || u >= l ? (t ? '' : void 0) : (o = a.charCodeAt(u)) < 55296 || o > 56319 || u + 1 === l || (s = a.charCodeAt(u + 1)) < 56320 || s > 57343 ? (t ? a.charAt(u) : o) : t ? a.slice(u, u + 2) : s - 56320 + ((o - 55296) << 10) + 65536
          }
        }
      },
      function (t, e, n) {
        'use strict'
        var i = n(45),
          r = n(17),
          o = n(33),
          s = {}
        n(11)(s, n(0)('iterator'), function () {
          return this
        }),
          (t.exports = function (t, e, n) {
            ;(t.prototype = i(s, { next: r(1, n) })), o(t, e + ' Iterator')
          })
      },
      function (t, e, n) {
        var i = n(7),
          r = n(8),
          o = n(30)
        t.exports = n(4)
          ? Object.defineProperties
          : function (t, e) {
              r(t)
              for (var n, s = o(e), a = s.length, u = 0; a > u; ) i.f(t, (n = s[u++]), e[n])
              return t
            }
      },
      function (t, e, n) {
        var i = n(9),
          r = n(18),
          o = n(65)(!1),
          s = n(32)('IE_PROTO')
        t.exports = function (t, e) {
          var n,
            a = r(t),
            u = 0,
            l = []
          for (n in a) n != s && i(a, n) && l.push(n)
          for (; e.length > u; ) i(a, (n = e[u++])) && (~o(l, n) || l.push(n))
          return l
        }
      },
      function (t, e, n) {
        var i = n(18),
          r = n(19),
          o = n(66)
        t.exports = function (t) {
          return function (e, n, s) {
            var a,
              u = i(e),
              l = r(u.length),
              c = o(s, l)
            if (t && n != n) {
              for (; l > c; ) if ((a = u[c++]) != a) return !0
            } else for (; l > c; c++) if ((t || c in u) && u[c] === n) return t || c || 0
            return !t && -1
          }
        }
      },
      function (t, e, n) {
        var i = n(27),
          r = Math.max,
          o = Math.min
        t.exports = function (t, e) {
          return (t = i(t)) < 0 ? r(t + e, 0) : o(t, e)
        }
      },
      function (t, e, n) {
        var i = n(2).document
        t.exports = i && i.documentElement
      },
      function (t, e, n) {
        var i = n(9),
          r = n(20),
          o = n(32)('IE_PROTO'),
          s = Object.prototype
        t.exports =
          Object.getPrototypeOf ||
          function (t) {
            return (t = r(t)), i(t, o) ? t[o] : 'function' == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
          }
      },
      function (t, e, n) {
        'use strict'
        var i = n(70),
          r = n(47),
          o = n(14),
          s = n(18)
        ;(t.exports = n(29)(
          Array,
          'Array',
          function (t, e) {
            ;(this._t = s(t)), (this._i = 0), (this._k = e)
          },
          function () {
            var t = this._t,
              e = this._k,
              n = this._i++
            return !t || n >= t.length ? ((this._t = void 0), r(1)) : r(0, 'keys' == e ? n : 'values' == e ? t[n] : [n, t[n]])
          },
          'values',
        )),
          (o.Arguments = o.Array),
          i('keys'),
          i('values'),
          i('entries')
      },
      function (t, e, n) {
        var i = n(0)('unscopables'),
          r = Array.prototype
        null == r[i] && n(11)(r, i, {}),
          (t.exports = function (t) {
            r[i][t] = !0
          })
      },
      function (t, e, n) {
        'use strict'
        var i = n(48),
          r = n(12)
        t.exports = n(37)(
          'Map',
          function (t) {
            return function () {
              return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
          },
          {
            get: function (t) {
              var e = i.getEntry(r(this, 'Map'), t)
              return e && e.v
            },
            set: function (t, e) {
              return i.def(r(this, 'Map'), 0 === t ? 0 : t, e)
            },
          },
          i,
          !0,
        )
      },
      function (t, e, n) {
        'use strict'
        var i = n(2),
          r = n(7),
          o = n(4),
          s = n(0)('species')
        t.exports = function (t) {
          var e = i[t]
          o &&
            e &&
            !e[s] &&
            r.f(e, s, {
              configurable: !0,
              get: function () {
                return this
              },
            })
        }
      },
      function (t, e, n) {
        var i = n(1),
          r = n(74).set
        t.exports = function (t, e, n) {
          var o,
            s = e.constructor
          return s !== n && 'function' == typeof s && (o = s.prototype) !== n.prototype && i(o) && r && r(t, o), t
        }
      },
      function (t, e, n) {
        var i = n(1),
          r = n(8),
          o = function (t, e) {
            if ((r(t), !i(e) && null !== e)) throw TypeError(e + ": can't set as prototype!")
          }
        t.exports = {
          set:
            Object.setPrototypeOf ||
            ('__proto__' in {}
              ? (function (t, e, i) {
                  try {
                    ;(i = n(10)(Function.call, n(75).f(Object.prototype, '__proto__').set, 2))(t, []), (e = !(t instanceof Array))
                  } catch (t) {
                    e = !0
                  }
                  return function (t, n) {
                    return o(t, n), e ? (t.__proto__ = n) : i(t, n), t
                  }
                })({}, !1)
              : void 0),
          check: o,
        }
      },
      function (t, e, n) {
        var i = n(53),
          r = n(17),
          o = n(18),
          s = n(43),
          a = n(9),
          u = n(41),
          l = Object.getOwnPropertyDescriptor
        e.f = n(4)
          ? l
          : function (t, e) {
              if (((t = o(t)), (e = s(e, !0)), u))
                try {
                  return l(t, e)
                } catch (t) {}
              if (a(t, e)) return r(!i.f.call(t, e), t[e])
            }
      },
      function (t, e, n) {
        var i = n(5)
        i(i.P + i.R, 'Map', { toJSON: n(54)('Map') })
      },
      function (t, e, n) {
        var i = n(15)
        t.exports = function (t, e) {
          var n = []
          return i(t, !1, n.push, n, e), n
        }
      },
      function (t, e, n) {
        n(38)('Map')
      },
      function (t, e, n) {
        n(39)('Map')
      },
      function (t, e, n) {
        n(22), n(26), n(34), n(81), n(82), n(83), n(84), (t.exports = n(3).Set)
      },
      function (t, e, n) {
        'use strict'
        var i = n(48),
          r = n(12)
        t.exports = n(37)(
          'Set',
          function (t) {
            return function () {
              return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
          },
          {
            add: function (t) {
              return i.def(r(this, 'Set'), (t = 0 === t ? 0 : t), t)
            },
          },
          i,
        )
      },
      function (t, e, n) {
        var i = n(5)
        i(i.P + i.R, 'Set', { toJSON: n(54)('Set') })
      },
      function (t, e, n) {
        n(38)('Set')
      },
      function (t, e, n) {
        n(39)('Set')
      },
      function (t, e, n) {
        n(22), n(34), n(86), n(92), n(93), (t.exports = n(3).WeakMap)
      },
      function (t, e, n) {
        'use strict'
        var i,
          r = n(2),
          o = n(55)(0),
          s = n(6),
          a = n(21),
          u = n(56),
          l = n(91),
          c = n(1),
          f = n(12),
          d = n(12),
          h = !r.ActiveXObject && 'ActiveXObject' in r,
          p = a.getWeak,
          m = Object.isExtensible,
          g = l.ufstore,
          v = function (t) {
            return function () {
              return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
          },
          y = {
            get: function (t) {
              if (c(t)) {
                var e = p(t)
                return !0 === e ? g(f(this, 'WeakMap')).get(t) : e ? e[this._i] : void 0
              }
            },
            set: function (t, e) {
              return l.def(f(this, 'WeakMap'), t, e)
            },
          },
          b = (t.exports = n(37)('WeakMap', v, y, l, !0, !0))
        d &&
          h &&
          (u((i = l.getConstructor(v, 'WeakMap')).prototype, y),
          (a.NEED = !0),
          o(['delete', 'has', 'get', 'set'], function (t) {
            var e = b.prototype,
              n = e[t]
            s(e, t, function (e, r) {
              if (c(e) && !m(e)) {
                this._f || (this._f = new i())
                var o = this._f[t](e, r)
                return 'set' == t ? this : o
              }
              return n.call(this, e, r)
            })
          }))
      },
      function (t, e, n) {
        var i = n(88)
        t.exports = function (t, e) {
          return new (i(t))(e)
        }
      },
      function (t, e, n) {
        var i = n(1),
          r = n(89),
          o = n(0)('species')
        t.exports = function (t) {
          var e
          return r(t) && ('function' != typeof (e = t.constructor) || (e !== Array && !r(e.prototype)) || (e = void 0), i(e) && null === (e = e[o]) && (e = void 0)), void 0 === e ? Array : e
        }
      },
      function (t, e, n) {
        var i = n(24)
        t.exports =
          Array.isArray ||
          function (t) {
            return 'Array' == i(t)
          }
      },
      function (t, e) {
        e.f = Object.getOwnPropertySymbols
      },
      function (t, e, n) {
        'use strict'
        var i = n(35),
          r = n(21).getWeak,
          o = n(8),
          s = n(1),
          a = n(36),
          u = n(15),
          l = n(55),
          c = n(9),
          f = n(12),
          d = l(5),
          h = l(6),
          p = 0,
          m = function (t) {
            return t._l || (t._l = new g())
          },
          g = function () {
            this.a = []
          },
          v = function (t, e) {
            return d(t.a, function (t) {
              return t[0] === e
            })
          }
        ;(g.prototype = {
          get: function (t) {
            var e = v(this, t)
            if (e) return e[1]
          },
          has: function (t) {
            return !!v(this, t)
          },
          set: function (t, e) {
            var n = v(this, t)
            n ? (n[1] = e) : this.a.push([t, e])
          },
          delete: function (t) {
            var e = h(this.a, function (e) {
              return e[0] === t
            })
            return ~e && this.a.splice(e, 1), !!~e
          },
        }),
          (t.exports = {
            getConstructor: function (t, e, n, o) {
              var l = t(function (t, i) {
                a(t, l, e, '_i'), (t._t = e), (t._i = p++), (t._l = void 0), null != i && u(i, n, t[o], t)
              })
              return (
                i(l.prototype, {
                  delete: function (t) {
                    if (!s(t)) return !1
                    var n = r(t)
                    return !0 === n ? m(f(this, e)).delete(t) : n && c(n, this._i) && delete n[this._i]
                  },
                  has: function (t) {
                    if (!s(t)) return !1
                    var n = r(t)
                    return !0 === n ? m(f(this, e)).has(t) : n && c(n, this._i)
                  },
                }),
                l
              )
            },
            def: function (t, e, n) {
              var i = r(o(e), !0)
              return !0 === i ? m(t).set(e, n) : (i[t._i] = n), t
            },
            ufstore: m,
          })
      },
      function (t, e, n) {
        n(38)('WeakMap')
      },
      function (t, e, n) {
        n(39)('WeakMap')
      },
      function (t, e, n) {
        n(26), n(95), (t.exports = n(3).Array.from)
      },
      function (t, e, n) {
        'use strict'
        var i = n(10),
          r = n(5),
          o = n(20),
          s = n(49),
          a = n(50),
          u = n(19),
          l = n(96),
          c = n(51)
        r(
          r.S +
            r.F *
              !n(52)(function (t) {
                Array.from(t)
              }),
          'Array',
          {
            from: function (t) {
              var e,
                n,
                r,
                f,
                d = o(t),
                h = 'function' == typeof this ? this : Array,
                p = arguments.length,
                m = p > 1 ? arguments[1] : void 0,
                g = void 0 !== m,
                v = 0,
                y = c(d)
              if ((g && (m = i(m, p > 2 ? arguments[2] : void 0, 2)), null == y || (h == Array && a(y)))) for (n = new h((e = u(d.length))); e > v; v++) l(n, v, g ? m(d[v], v) : d[v])
              else for (f = y.call(d), n = new h(); !(r = f.next()).done; v++) l(n, v, g ? s(f, m, [r.value, v], !0) : r.value)
              return (n.length = v), n
            },
          },
        )
      },
      function (t, e, n) {
        'use strict'
        var i = n(7),
          r = n(17)
        t.exports = function (t, e, n) {
          e in t ? i.f(t, e, r(0, n)) : (t[e] = n)
        }
      },
      function (t, e, n) {
        n(98), (t.exports = n(3).Object.assign)
      },
      function (t, e, n) {
        var i = n(5)
        i(i.S + i.F, 'Object', { assign: n(56) })
      },
      function (t, e) {
        var n
        n = (function () {
          return this
        })()
        try {
          n = n || new Function('return this')()
        } catch (t) {
          'object' == typeof window && (n = window)
        }
        t.exports = n
      },
      function (t, e, n) {
        'use strict'
        n.r(e)
        var i = {}
        n.r(i),
          n.d(i, 'keyboardHandler', function () {
            return et
          }),
          n.d(i, 'mouseHandler', function () {
            return nt
          }),
          n.d(i, 'resizeHandler', function () {
            return it
          }),
          n.d(i, 'selectHandler', function () {
            return rt
          }),
          n.d(i, 'touchHandler', function () {
            return ot
          }),
          n.d(i, 'wheelHandler', function () {
            return st
          })
        var r = function (t, e) {
            return (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              })(t, e)
          },
          o = function () {
            return (o =
              Object.assign ||
              function (t) {
                for (var e, n = 1, i = arguments.length; n < i; n++) for (var r in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                return t
              }).apply(this, arguments)
          }
        function s(t, e, n, i) {
          var r,
            o = arguments.length,
            s = o < 3 ? e : null === i ? (i = Object.getOwnPropertyDescriptor(e, n)) : i
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, i)
          else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(e, n, s) : r(e, n)) || s)
          return o > 3 && s && Object.defineProperty(e, n, s), s
        }
        n(59), n(80), n(85), n(94), n(97)
        var a = function (t) {
            var e = typeof t
            return null != t && ('object' == e || 'function' == e)
          },
          u = n(57),
          l = 'object' == typeof self && self && self.Object === Object && self,
          c = u.a || l || Function('return this')(),
          f = c.Symbol,
          d = Object.prototype,
          h = d.hasOwnProperty,
          p = d.toString,
          m = f ? f.toStringTag : void 0,
          g = Object.prototype.toString,
          v = f ? f.toStringTag : void 0,
          y = /^\s+|\s+$/g,
          b = /^[-+]0x[0-9a-f]+$/i,
          w = /^0b[01]+$/i,
          _ = /^0o[0-7]+$/i,
          x = parseInt,
          E = function (t) {
            if ('number' == typeof t) return t
            if (
              (function (t) {
                return (
                  'symbol' == typeof t ||
                  ((function (t) {
                    return null != t && 'object' == typeof t
                  })(t) &&
                    '[object Symbol]' ==
                      (function (t) {
                        return null == t
                          ? void 0 === t
                            ? '[object Undefined]'
                            : '[object Null]'
                          : v && v in Object(t)
                          ? (function (t) {
                              var e = h.call(t, m),
                                n = t[m]
                              try {
                                t[m] = void 0
                                var i = !0
                              } catch (t) {}
                              var r = p.call(t)
                              return i && (e ? (t[m] = n) : delete t[m]), r
                            })(t)
                          : (function (t) {
                              return g.call(t)
                            })(t)
                      })(t))
                )
              })(t)
            )
              return NaN
            if (a(t)) {
              var e = 'function' == typeof t.valueOf ? t.valueOf() : t
              t = a(e) ? e + '' : e
            }
            if ('string' != typeof t) return 0 === t ? t : +t
            t = t.replace(y, '')
            var n = w.test(t)
            return n || _.test(t) ? x(t.slice(2), n ? 2 : 8) : b.test(t) ? NaN : +t
          },
          T = function (t, e, n) {
            return (
              void 0 === n && ((n = e), (e = void 0)),
              void 0 !== n && (n = (n = E(n)) == n ? n : 0),
              void 0 !== e && (e = (e = E(e)) == e ? e : 0),
              (function (t, e, n) {
                return t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)), t
              })(E(t), e, n)
            )
          }
        function S(t, e) {
          return (
            void 0 === t && (t = -1 / 0),
            void 0 === e && (e = 1 / 0),
            function (n, i) {
              var r = '_' + i
              Object.defineProperty(n, i, {
                get: function () {
                  return this[r]
                },
                set: function (n) {
                  Object.defineProperty(this, r, { value: T(n, t, e), enumerable: !1, writable: !0, configurable: !0 })
                },
                enumerable: !0,
                configurable: !0,
              })
            }
          )
        }
        function C(t, e) {
          var n = '_' + e
          Object.defineProperty(t, e, {
            get: function () {
              return this[n]
            },
            set: function (t) {
              Object.defineProperty(this, n, { value: !!t, enumerable: !1, writable: !0, configurable: !0 })
            },
            enumerable: !0,
            configurable: !0,
          })
        }
        var A = function () {
            return c.Date.now()
          },
          k = Math.max,
          O = Math.min,
          D = function (t, e, n) {
            var i,
              r,
              o,
              s,
              u,
              l,
              c = 0,
              f = !1,
              d = !1,
              h = !0
            if ('function' != typeof t) throw new TypeError('Expected a function')
            function p(e) {
              var n = i,
                o = r
              return (i = r = void 0), (c = e), (s = t.apply(o, n))
            }
            function m(t) {
              var n = t - l
              return void 0 === l || n >= e || n < 0 || (d && t - c >= o)
            }
            function g() {
              var t = A()
              if (m(t)) return v(t)
              u = setTimeout(
                g,
                (function (t) {
                  var n = e - (t - l)
                  return d ? O(n, o - (t - c)) : n
                })(t),
              )
            }
            function v(t) {
              return (u = void 0), h && i ? p(t) : ((i = r = void 0), s)
            }
            function y() {
              var t = A(),
                n = m(t)
              if (((i = arguments), (r = this), (l = t), n)) {
                if (void 0 === u)
                  return (function (t) {
                    return (c = t), (u = setTimeout(g, e)), f ? p(t) : s
                  })(l)
                if (d) return clearTimeout(u), (u = setTimeout(g, e)), p(l)
              }
              return void 0 === u && (u = setTimeout(g, e)), s
            }
            return (
              (e = E(e) || 0),
              a(n) && ((f = !!n.leading), (o = (d = 'maxWait' in n) ? k(E(n.maxWait) || 0, e) : o), (h = 'trailing' in n ? !!n.trailing : h)),
              (y.cancel = function () {
                void 0 !== u && clearTimeout(u), (c = 0), (i = l = r = u = void 0)
              }),
              (y.flush = function () {
                return void 0 === u ? s : v(A())
              }),
              y
            )
          }
        function N() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          return function (e, n, i) {
            var r = i.value
            return {
              get: function () {
                return (
                  this.hasOwnProperty(n) ||
                    Object.defineProperty(this, n, {
                      value: D.apply(
                        void 0,
                        (function () {
                          for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length
                          var i = Array(t),
                            r = 0
                          for (e = 0; e < n; e++) for (var o = arguments[e], s = 0, a = o.length; s < a; s++, r++) i[r] = o[s]
                          return i
                        })([r], t),
                      ),
                    }),
                  this[n]
                )
              },
            }
          }
        }
        var j,
          I = (function () {
            function t(t) {
              var e = this
              void 0 === t && (t = {}),
                (this.damping = 0.1),
                (this.thumbMinSize = 20),
                (this.renderByPixels = !0),
                (this.alwaysShowTracks = !1),
                (this.continuousScrolling = !0),
                (this.delegateTo = null),
                (this.plugins = {}),
                Object.keys(t).forEach(function (n) {
                  e[n] = t[n]
                })
            }
            return (
              Object.defineProperty(t.prototype, 'wheelEventTarget', {
                get: function () {
                  return this.delegateTo
                },
                set: function (t) {
                  console.warn('[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead.'), (this.delegateTo = t)
                },
                enumerable: !0,
                configurable: !0,
              }),
              s([S(0, 1)], t.prototype, 'damping', void 0),
              s([S(0, 1 / 0)], t.prototype, 'thumbMinSize', void 0),
              s([C], t.prototype, 'renderByPixels', void 0),
              s([C], t.prototype, 'alwaysShowTracks', void 0),
              s([C], t.prototype, 'continuousScrolling', void 0),
              t
            )
          })(),
          P = new WeakMap()
        function L() {
          if (void 0 !== j) return j
          var t = !1
          try {
            var e = function () {},
              n = Object.defineProperty({}, 'passive', {
                get: function () {
                  t = !0
                },
              })
            window.addEventListener('testPassive', e, n), window.removeEventListener('testPassive', e, n)
          } catch (t) {}
          return (j = !!t && { passive: !1 })
        }
        function H(t) {
          var e = P.get(t) || []
          return (
            P.set(t, e),
            function (t, n, i) {
              function r(t) {
                t.defaultPrevented || i(t)
              }
              n.split(/\s+/g).forEach(function (n) {
                e.push({ elem: t, eventName: n, handler: r }), t.addEventListener(n, r, L())
              })
            }
          )
        }
        function M(t) {
          var e = (function (t) {
            return t.touches ? t.touches[t.touches.length - 1] : t
          })(t)
          return { x: e.clientX, y: e.clientY }
        }
        function q(t, e) {
          return (
            void 0 === e && (e = []),
            e.some(function (e) {
              return t === e
            })
          )
        }
        var R = ['webkit', 'moz', 'ms', 'o'],
          W = new RegExp('^-(?!(?:' + R.join('|') + ')-)')
        function F(t, e) {
          ;(e = (function (t) {
            var e = {}
            return (
              Object.keys(t).forEach(function (n) {
                if (W.test(n)) {
                  var i = t[n]
                  ;(n = n.replace(/^-/, '')),
                    (e[n] = i),
                    R.forEach(function (t) {
                      e['-' + t + '-' + n] = i
                    })
                } else e[n] = t[n]
              }),
              e
            )
          })(e)),
            Object.keys(e).forEach(function (n) {
              var i = n.replace(/^-/, '').replace(/-([a-z])/g, function (t, e) {
                return e.toUpperCase()
              })
              t.style[i] = e[n]
            })
        }
        var z,
          B = (function () {
            function t(t) {
              ;(this.updateTime = Date.now()), (this.delta = { x: 0, y: 0 }), (this.velocity = { x: 0, y: 0 }), (this.lastPosition = { x: 0, y: 0 }), (this.lastPosition = M(t))
            }
            return (
              (t.prototype.update = function (t) {
                var e = this.velocity,
                  n = this.updateTime,
                  i = this.lastPosition,
                  r = Date.now(),
                  o = M(t),
                  s = { x: -(o.x - i.x), y: -(o.y - i.y) },
                  a = r - n || 16,
                  u = (s.x / a) * 16,
                  l = (s.y / a) * 16
                ;(e.x = 0.9 * u + 0.1 * e.x), (e.y = 0.9 * l + 0.1 * e.y), (this.delta = s), (this.updateTime = r), (this.lastPosition = o)
              }),
              t
            )
          })(),
          U = (function () {
            function t() {
              this._touchList = {}
            }
            return (
              Object.defineProperty(t.prototype, '_primitiveValue', {
                get: function () {
                  return { x: 0, y: 0 }
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.isActive = function () {
                return void 0 !== this._activeTouchID
              }),
              (t.prototype.getDelta = function () {
                var t = this._getActiveTracker()
                return t ? o({}, t.delta) : this._primitiveValue
              }),
              (t.prototype.getVelocity = function () {
                var t = this._getActiveTracker()
                return t ? o({}, t.velocity) : this._primitiveValue
              }),
              (t.prototype.track = function (t) {
                var e = this,
                  n = t.targetTouches
                return (
                  Array.from(n).forEach(function (t) {
                    e._add(t)
                  }),
                  this._touchList
                )
              }),
              (t.prototype.update = function (t) {
                var e = this,
                  n = t.touches,
                  i = t.changedTouches
                return (
                  Array.from(n).forEach(function (t) {
                    e._renew(t)
                  }),
                  this._setActiveID(i),
                  this._touchList
                )
              }),
              (t.prototype.release = function (t) {
                var e = this
                delete this._activeTouchID,
                  Array.from(t.changedTouches).forEach(function (t) {
                    e._delete(t)
                  })
              }),
              (t.prototype._add = function (t) {
                if (!this._has(t)) {
                  var e = new B(t)
                  this._touchList[t.identifier] = e
                }
              }),
              (t.prototype._renew = function (t) {
                this._has(t) && this._touchList[t.identifier].update(t)
              }),
              (t.prototype._delete = function (t) {
                delete this._touchList[t.identifier]
              }),
              (t.prototype._has = function (t) {
                return this._touchList.hasOwnProperty(t.identifier)
              }),
              (t.prototype._setActiveID = function (t) {
                this._activeTouchID = t[t.length - 1].identifier
              }),
              (t.prototype._getActiveTracker = function () {
                return this._touchList[this._activeTouchID]
              }),
              t
            )
          })()
        !(function (t) {
          ;(t.X = 'x'), (t.Y = 'y')
        })(z || (z = {}))
        var $ = (function () {
            function t(t, e) {
              void 0 === e && (e = 0), (this._direction = t), (this._minSize = e), (this.element = document.createElement('div')), (this.displaySize = 0), (this.realSize = 0), (this.offset = 0), (this.element.className = 'scrollbar-thumb scrollbar-thumb-' + t)
            }
            return (
              (t.prototype.attachTo = function (t) {
                t.appendChild(this.element)
              }),
              (t.prototype.update = function (t, e, n) {
                ;(this.realSize = Math.min(e / n, 1) * e), (this.displaySize = Math.max(this.realSize, this._minSize)), (this.offset = (t / n) * (e + (this.realSize - this.displaySize))), F(this.element, this._getStyle())
              }),
              (t.prototype._getStyle = function () {
                switch (this._direction) {
                  case z.X:
                    return { width: this.displaySize + 'px', '-transform': 'translate3d(' + this.offset + 'px, 0, 0)' }
                  case z.Y:
                    return { height: this.displaySize + 'px', '-transform': 'translate3d(0, ' + this.offset + 'px, 0)' }
                  default:
                    return null
                }
              }),
              t
            )
          })(),
          Q = (function () {
            function t(t, e) {
              void 0 === e && (e = 0), (this.element = document.createElement('div')), (this._isShown = !1), (this.element.className = 'scrollbar-track scrollbar-track-' + t), (this.thumb = new $(t, e)), this.thumb.attachTo(this.element)
            }
            return (
              (t.prototype.attachTo = function (t) {
                t.appendChild(this.element)
              }),
              (t.prototype.show = function () {
                this._isShown || ((this._isShown = !0), this.element.classList.add('show'))
              }),
              (t.prototype.hide = function () {
                this._isShown && ((this._isShown = !1), this.element.classList.remove('show'))
              }),
              (t.prototype.update = function (t, e, n) {
                F(this.element, { display: n <= e ? 'none' : 'block' }), this.thumb.update(t, e, n)
              }),
              t
            )
          })(),
          V = (function () {
            function t(t) {
              this._scrollbar = t
              var e = t.options.thumbMinSize
              ;(this.xAxis = new Q(z.X, e)), (this.yAxis = new Q(z.Y, e)), this.xAxis.attachTo(t.containerEl), this.yAxis.attachTo(t.containerEl), t.options.alwaysShowTracks && (this.xAxis.show(), this.yAxis.show())
            }
            return (
              (t.prototype.update = function () {
                var t = this._scrollbar,
                  e = t.size,
                  n = t.offset
                this.xAxis.update(n.x, e.container.width, e.content.width), this.yAxis.update(n.y, e.container.height, e.content.height)
              }),
              (t.prototype.autoHideOnIdle = function () {
                this._scrollbar.options.alwaysShowTracks || (this.xAxis.hide(), this.yAxis.hide())
              }),
              s([N(300)], t.prototype, 'autoHideOnIdle', null),
              t
            )
          })(),
          K = new WeakMap()
        function Y(t) {
          return Math.pow(t - 1, 3) + 1
        }
        var X,
          G,
          J,
          Z = (function () {
            function t(t, e) {
              var n = this.constructor
              ;(this.scrollbar = t), (this.name = n.pluginName), (this.options = o(o({}, n.defaultOptions), e))
            }
            return (
              (t.prototype.onInit = function () {}),
              (t.prototype.onDestroy = function () {}),
              (t.prototype.onUpdate = function () {}),
              (t.prototype.onRender = function (t) {}),
              (t.prototype.transformDelta = function (t, e) {
                return o({}, t)
              }),
              (t.pluginName = ''),
              (t.defaultOptions = {}),
              t
            )
          })(),
          tt = { order: new Set(), constructors: {} }
        function et(t) {
          var e = H(t),
            n = t.containerEl
          e(n, 'keydown', function (e) {
            var i = document.activeElement
            if (
              (i === n || n.contains(i)) &&
              !(function (t) {
                return !(('INPUT' !== t.tagName && 'SELECT' !== t.tagName && 'TEXTAREA' !== t.tagName && !t.isContentEditable) || t.disabled)
              })(i)
            ) {
              var r = (function (t, e) {
                var n = t.size,
                  i = t.limit,
                  r = t.offset
                switch (e) {
                  case X.TAB:
                    return (function (t) {
                      requestAnimationFrame(function () {
                        t.scrollIntoView(document.activeElement, { offsetTop: t.size.container.height / 2, onlyScrollIfNeeded: !0 })
                      })
                    })(t)
                  case X.SPACE:
                    return [0, 200]
                  case X.PAGE_UP:
                    return [0, 40 - n.container.height]
                  case X.PAGE_DOWN:
                    return [0, n.container.height - 40]
                  case X.END:
                    return [0, i.y - r.y]
                  case X.HOME:
                    return [0, -r.y]
                  case X.LEFT:
                    return [-40, 0]
                  case X.UP:
                    return [0, -40]
                  case X.RIGHT:
                    return [40, 0]
                  case X.DOWN:
                    return [0, 40]
                  default:
                    return null
                }
              })(t, e.keyCode || e.which)
              if (r) {
                var o = r[0],
                  s = r[1]
                t.addTransformableMomentum(o, s, e, function (n) {
                  n ? e.preventDefault() : (t.containerEl.blur(), t.parent && t.parent.containerEl.focus())
                })
              }
            }
          })
        }
        function nt(t) {
          var e,
            n,
            i,
            r,
            o,
            s = H(t),
            a = t.containerEl,
            u = t.track,
            l = u.xAxis,
            c = u.yAxis
          function f(e, n) {
            var i = t.size
            return e === G.X ? (n / (i.container.width + (l.thumb.realSize - l.thumb.displaySize))) * i.content.width : e === G.Y ? (n / (i.container.height + (c.thumb.realSize - c.thumb.displaySize))) * i.content.height : 0
          }
          function d(t) {
            return q(t, [l.element, l.thumb.element]) ? G.X : q(t, [c.element, c.thumb.element]) ? G.Y : void 0
          }
          s(a, 'click', function (e) {
            if (!n && q(e.target, [l.element, c.element])) {
              var i = e.target,
                r = d(i),
                o = i.getBoundingClientRect(),
                s = M(e),
                a = t.offset,
                u = t.limit
              if (r === G.X) {
                var h = s.x - o.left - l.thumb.displaySize / 2
                t.setMomentum(T(f(r, h) - a.x, -a.x, u.x - a.x), 0)
              }
              r === G.Y && ((h = s.y - o.top - c.thumb.displaySize / 2), t.setMomentum(0, T(f(r, h) - a.y, -a.y, u.y - a.y)))
            }
          }),
            s(a, 'mousedown', function (n) {
              if (q(n.target, [l.thumb.element, c.thumb.element])) {
                e = !0
                var s = n.target,
                  u = M(n),
                  f = s.getBoundingClientRect()
                ;(r = d(s)), (i = { x: u.x - f.left, y: u.y - f.top }), (o = a.getBoundingClientRect()), F(t.containerEl, { '-user-select': 'none' })
              }
            }),
            s(window, 'mousemove', function (s) {
              if (e) {
                n = !0
                var a = t.offset,
                  u = M(s)
                if (r === G.X) {
                  var l = u.x - i.x - o.left
                  t.setPosition(f(r, l), a.y)
                }
                r === G.Y && ((l = u.y - i.y - o.top), t.setPosition(a.x, f(r, l)))
              }
            }),
            s(window, 'mouseup blur', function () {
              ;(e = n = !1), F(t.containerEl, { '-user-select': '' })
            })
        }
        function it(t) {
          H(t)(window, 'resize', D(t.update.bind(t), 300))
        }
        function rt(t) {
          var e,
            n = H(t),
            i = t.containerEl,
            r = t.contentEl,
            o = t.offset,
            s = t.limit,
            a = !1
          n(window, 'mousemove', function (n) {
            a &&
              (cancelAnimationFrame(e),
              (function n(i) {
                var r = i.x,
                  a = i.y
                ;(r || a) &&
                  (t.setMomentum(T(o.x + r, 0, s.x) - o.x, T(o.y + a, 0, s.y) - o.y),
                  (e = requestAnimationFrame(function () {
                    n({ x: r, y: a })
                  })))
              })(
                (function (t, e) {
                  var n = t.bounding,
                    i = n.top,
                    r = n.right,
                    o = n.bottom,
                    s = n.left,
                    a = M(e),
                    u = a.x,
                    l = a.y,
                    c = { x: 0, y: 0 }
                  return (0 === u && 0 === l) || (u > r - 20 ? (c.x = u - r + 20) : u < s + 20 && (c.x = u - s - 20), l > o - 20 ? (c.y = l - o + 20) : l < i + 20 && (c.y = l - i - 20), (c.x *= 2), (c.y *= 2)), c
                })(t, n),
              ))
          }),
            n(r, 'selectstart', function (t) {
              t.stopPropagation(), cancelAnimationFrame(e), (a = !0)
            }),
            n(window, 'mouseup blur', function () {
              cancelAnimationFrame(e), (a = !1)
            }),
            n(i, 'scroll', function (t) {
              t.preventDefault(), (i.scrollTop = i.scrollLeft = 0)
            })
        }
        function ot(t) {
          var e,
            n = /Android/.test(navigator.userAgent) ? 3 : 2,
            i = t.options.delegateTo || t.containerEl,
            r = new U(),
            o = H(t),
            s = 0
          o(i, 'touchstart', function (n) {
            r.track(n), t.setMomentum(0, 0), 0 === s && ((e = t.options.damping), (t.options.damping = Math.max(e, 0.5))), s++
          }),
            o(i, 'touchmove', function (e) {
              if (!J || J === t) {
                r.update(e)
                var n = r.getDelta(),
                  i = n.x,
                  o = n.y
                t.addTransformableMomentum(i, o, e, function (n) {
                  n && (e.preventDefault(), (J = t))
                })
              }
            }),
            o(i, 'touchcancel touchend', function (i) {
              var o = r.getVelocity(),
                a = { x: 0, y: 0 }
              Object.keys(o).forEach(function (t) {
                var i = o[t] / e
                a[t] = Math.abs(i) < 50 ? 0 : i * n
              }),
                t.addTransformableMomentum(a.x, a.y, i),
                0 == --s && (t.options.damping = e),
                r.release(i),
                (J = null)
            })
        }
        function st(t) {
          H(t)(t.options.delegateTo || t.containerEl, 'onwheel' in window || document.implementation.hasFeature('Events.wheel', '3.0') ? 'wheel' : 'mousewheel', function (e) {
            var n = (function (t) {
                if ('deltaX' in t) {
                  var e = lt(t.deltaMode)
                  return { x: (t.deltaX / at.STANDARD) * e, y: (t.deltaY / at.STANDARD) * e }
                }
                return 'wheelDeltaX' in t ? { x: t.wheelDeltaX / at.OTHERS, y: t.wheelDeltaY / at.OTHERS } : { x: 0, y: t.wheelDelta / at.OTHERS }
              })(e),
              i = n.x,
              r = n.y
            t.addTransformableMomentum(i, r, e, function (t) {
              t && e.preventDefault()
            })
          })
        }
        !(function (t) {
          ;(t[(t.TAB = 9)] = 'TAB'),
            (t[(t.SPACE = 32)] = 'SPACE'),
            (t[(t.PAGE_UP = 33)] = 'PAGE_UP'),
            (t[(t.PAGE_DOWN = 34)] = 'PAGE_DOWN'),
            (t[(t.END = 35)] = 'END'),
            (t[(t.HOME = 36)] = 'HOME'),
            (t[(t.LEFT = 37)] = 'LEFT'),
            (t[(t.UP = 38)] = 'UP'),
            (t[(t.RIGHT = 39)] = 'RIGHT'),
            (t[(t.DOWN = 40)] = 'DOWN')
        })(X || (X = {})),
          (function (t) {
            ;(t[(t.X = 0)] = 'X'), (t[(t.Y = 1)] = 'Y')
          })(G || (G = {}))
        var at = { STANDARD: 1, OTHERS: -3 },
          ut = [1, 28, 500],
          lt = function (t) {
            return ut[t] || ut[0]
          },
          ct = new Map(),
          ft = (function () {
            function t(t, e) {
              var n = this
              ;(this.offset = { x: 0, y: 0 }), (this.limit = { x: 1 / 0, y: 1 / 0 }), (this.bounding = { top: 0, right: 0, bottom: 0, left: 0 }), (this._plugins = []), (this._momentum = { x: 0, y: 0 }), (this._listeners = new Set()), (this.containerEl = t)
              var i = (this.contentEl = document.createElement('div'))
              ;(this.options = new I(e)),
                t.setAttribute('data-scrollbar', 'true'),
                t.setAttribute('tabindex', '-1'),
                F(t, { overflow: 'hidden', outline: 'none' }),
                window.navigator.msPointerEnabled && (t.style.msTouchAction = 'none'),
                (i.className = 'scroll-content'),
                Array.from(t.childNodes).forEach(function (t) {
                  i.appendChild(t)
                }),
                t.appendChild(i),
                (this.track = new V(this)),
                (this.size = this.getSize()),
                (this._plugins = (function (t, e) {
                  return Array.from(tt.order)
                    .filter(function (t) {
                      return !1 !== e[t]
                    })
                    .map(function (n) {
                      var i = new (0, tt.constructors[n])(t, e[n])
                      return (e[n] = i.options), i
                    })
                })(this, this.options.plugins))
              var r = t.scrollLeft,
                o = t.scrollTop
              ;(t.scrollLeft = t.scrollTop = 0), this.setPosition(r, o, { withoutCallbacks: !0 })
              var s = window,
                a = s.MutationObserver || s.WebKitMutationObserver || s.MozMutationObserver
              'function' == typeof a &&
                ((this._observer = new a(function () {
                  n.update()
                })),
                this._observer.observe(i, { subtree: !0, childList: !0 })),
                ct.set(t, this),
                requestAnimationFrame(function () {
                  n._init()
                })
            }
            return (
              Object.defineProperty(t.prototype, 'parent', {
                get: function () {
                  for (var t = this.containerEl.parentElement; t; ) {
                    var e = ct.get(t)
                    if (e) return e
                    t = t.parentElement
                  }
                  return null
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, 'scrollTop', {
                get: function () {
                  return this.offset.y
                },
                set: function (t) {
                  this.setPosition(this.scrollLeft, t)
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, 'scrollLeft', {
                get: function () {
                  return this.offset.x
                },
                set: function (t) {
                  this.setPosition(t, this.scrollTop)
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.getSize = function () {
                return (function (t) {
                  var e = t.containerEl,
                    n = t.contentEl
                  return { container: { width: e.clientWidth, height: e.clientHeight }, content: { width: n.offsetWidth - n.clientWidth + n.scrollWidth, height: n.offsetHeight - n.clientHeight + n.scrollHeight } }
                })(this)
              }),
              (t.prototype.update = function () {
                !(function (t) {
                  var e = t.getSize(),
                    n = { x: Math.max(e.content.width - e.container.width, 0), y: Math.max(e.content.height - e.container.height, 0) },
                    i = t.containerEl.getBoundingClientRect(),
                    r = { top: Math.max(i.top, 0), right: Math.min(i.right, window.innerWidth), bottom: Math.min(i.bottom, window.innerHeight), left: Math.max(i.left, 0) }
                  ;(t.size = e), (t.limit = n), (t.bounding = r), t.track.update(), t.setPosition()
                })(this),
                  this._plugins.forEach(function (t) {
                    t.onUpdate()
                  })
              }),
              (t.prototype.isVisible = function (t) {
                return (function (t, e) {
                  var n = t.bounding,
                    i = e.getBoundingClientRect(),
                    r = Math.max(n.top, i.top),
                    o = Math.max(n.left, i.left),
                    s = Math.min(n.right, i.right)
                  return r < Math.min(n.bottom, i.bottom) && o < s
                })(this, t)
              }),
              (t.prototype.setPosition = function (t, e, n) {
                var i = this
                void 0 === t && (t = this.offset.x), void 0 === e && (e = this.offset.y), void 0 === n && (n = {})
                var r = (function (t, e, n) {
                  var i = t.options,
                    r = t.offset,
                    s = t.limit,
                    a = t.track,
                    u = t.contentEl
                  return (
                    i.renderByPixels && ((e = Math.round(e)), (n = Math.round(n))),
                    (e = T(e, 0, s.x)),
                    (n = T(n, 0, s.y)),
                    e !== r.x && a.xAxis.show(),
                    n !== r.y && a.yAxis.show(),
                    i.alwaysShowTracks || a.autoHideOnIdle(),
                    e === r.x && n === r.y ? null : ((r.x = e), (r.y = n), F(u, { '-transform': 'translate3d(' + -e + 'px, ' + -n + 'px, 0)' }), a.update(), { offset: o({}, r), limit: o({}, s) })
                  )
                })(this, t, e)
                r &&
                  !n.withoutCallbacks &&
                  this._listeners.forEach(function (t) {
                    t.call(i, r)
                  })
              }),
              (t.prototype.scrollTo = function (t, e, n, i) {
                void 0 === t && (t = this.offset.x),
                  void 0 === e && (e = this.offset.y),
                  void 0 === n && (n = 0),
                  void 0 === i && (i = {}),
                  (function (t, e, n, i, r) {
                    void 0 === i && (i = 0)
                    var o = void 0 === r ? {} : r,
                      s = o.easing,
                      a = void 0 === s ? Y : s,
                      u = o.callback,
                      l = t.options,
                      c = t.offset,
                      f = t.limit
                    l.renderByPixels && ((e = Math.round(e)), (n = Math.round(n)))
                    var d = c.x,
                      h = c.y,
                      p = T(e, 0, f.x) - d,
                      m = T(n, 0, f.y) - h,
                      g = Date.now()
                    cancelAnimationFrame(K.get(t)),
                      (function e() {
                        var n = Date.now() - g,
                          r = i ? a(Math.min(n / i, 1)) : 1
                        if ((t.setPosition(d + p * r, h + m * r), n >= i)) 'function' == typeof u && u.call(t)
                        else {
                          var o = requestAnimationFrame(e)
                          K.set(t, o)
                        }
                      })()
                  })(this, t, e, n, i)
              }),
              (t.prototype.scrollIntoView = function (t, e) {
                void 0 === e && (e = {}),
                  (function (t, e, n) {
                    var i = void 0 === n ? {} : n,
                      r = i.alignToTop,
                      o = void 0 === r || r,
                      s = i.onlyScrollIfNeeded,
                      a = void 0 !== s && s,
                      u = i.offsetTop,
                      l = void 0 === u ? 0 : u,
                      c = i.offsetLeft,
                      f = void 0 === c ? 0 : c,
                      d = i.offsetBottom,
                      h = void 0 === d ? 0 : d,
                      p = t.containerEl,
                      m = t.bounding,
                      g = t.offset,
                      v = t.limit
                    if (e && p.contains(e)) {
                      var y = e.getBoundingClientRect()
                      if (!a || !t.isVisible(e)) {
                        var b = o ? y.top - m.top - l : y.bottom - m.bottom + h
                        t.setMomentum(y.left - m.left - f, T(b, -g.y, v.y - g.y))
                      }
                    }
                  })(this, t, e)
              }),
              (t.prototype.addListener = function (t) {
                if ('function' != typeof t) throw new TypeError('[smooth-scrollbar] scrolling listener should be a function')
                this._listeners.add(t)
              }),
              (t.prototype.removeListener = function (t) {
                this._listeners.delete(t)
              }),
              (t.prototype.addTransformableMomentum = function (t, e, n, i) {
                this._updateDebounced()
                var r = this._plugins.reduce(
                    function (t, e) {
                      return e.transformDelta(t, n) || t
                    },
                    { x: t, y: e },
                  ),
                  o = !this._shouldPropagateMomentum(r.x, r.y)
                o && this.addMomentum(r.x, r.y), i && i.call(this, o)
              }),
              (t.prototype.addMomentum = function (t, e) {
                this.setMomentum(this._momentum.x + t, this._momentum.y + e)
              }),
              (t.prototype.setMomentum = function (t, e) {
                0 === this.limit.x && (t = 0), 0 === this.limit.y && (e = 0), this.options.renderByPixels && ((t = Math.round(t)), (e = Math.round(e))), (this._momentum.x = t), (this._momentum.y = e)
              }),
              (t.prototype.updatePluginOptions = function (t, e) {
                this._plugins.forEach(function (n) {
                  n.name === t && Object.assign(n.options, e)
                })
              }),
              (t.prototype.destroy = function () {
                var t = this.containerEl,
                  e = this.contentEl
                !(function (t) {
                  var e = P.get(t)
                  e &&
                    (e.forEach(function (t) {
                      var e = t.elem,
                        n = t.eventName,
                        i = t.handler
                      e.removeEventListener(n, i, L())
                    }),
                    P.delete(t))
                })(this),
                  this._listeners.clear(),
                  this.setMomentum(0, 0),
                  cancelAnimationFrame(this._renderID),
                  this._observer && this._observer.disconnect(),
                  ct.delete(this.containerEl)
                for (var n = Array.from(e.childNodes); t.firstChild; ) t.removeChild(t.firstChild)
                n.forEach(function (e) {
                  t.appendChild(e)
                }),
                  F(t, { overflow: '' }),
                  (t.scrollTop = this.scrollTop),
                  (t.scrollLeft = this.scrollLeft),
                  this._plugins.forEach(function (t) {
                    t.onDestroy()
                  }),
                  (this._plugins.length = 0)
              }),
              (t.prototype._init = function () {
                var t = this
                this.update(),
                  Object.keys(i).forEach(function (e) {
                    i[e](t)
                  }),
                  this._plugins.forEach(function (t) {
                    t.onInit()
                  }),
                  this._render()
              }),
              (t.prototype._updateDebounced = function () {
                this.update()
              }),
              (t.prototype._shouldPropagateMomentum = function (t, e) {
                void 0 === t && (t = 0), void 0 === e && (e = 0)
                var n = this.options,
                  i = this.offset,
                  r = this.limit
                if (!n.continuousScrolling) return !1
                0 === r.x && 0 === r.y && this._updateDebounced()
                var o = T(t + i.x, 0, r.x),
                  s = T(e + i.y, 0, r.y),
                  a = !0
                return (a = (a = a && o === i.x) && s === i.y) && (i.x === r.x || 0 === i.x || i.y === r.y || 0 === i.y)
              }),
              (t.prototype._render = function () {
                var t = this._momentum
                if (t.x || t.y) {
                  var e = this._nextTick('x'),
                    n = this._nextTick('y')
                  ;(t.x = e.momentum), (t.y = n.momentum), this.setPosition(e.position, n.position)
                }
                var i = o({}, this._momentum)
                this._plugins.forEach(function (t) {
                  t.onRender(i)
                }),
                  (this._renderID = requestAnimationFrame(this._render.bind(this)))
              }),
              (t.prototype._nextTick = function (t) {
                var e = this.options,
                  n = this.offset,
                  i = this._momentum,
                  r = n[t],
                  o = i[t]
                if (Math.abs(o) <= 0.1) return { momentum: 0, position: r + o }
                var s = o * (1 - e.damping)
                return e.renderByPixels && (s |= 0), { momentum: s, position: r + o - s }
              }),
              s([N(100, { leading: !0 })], t.prototype, '_updateDebounced', null),
              t
            )
          })(),
          dt = 'smooth-scrollbar-style',
          ht = !1
        function pt() {
          if (!ht && 'undefined' != typeof window) {
            var t = document.createElement('style')
            ;(t.id = dt),
              (t.textContent =
                '\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: rgba(222, 222, 222, .75);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: rgba(0, 0, 0, .5);\n  border-radius: 4px;\n}\n'),
              document.head && document.head.appendChild(t),
              (ht = !0)
          }
        }
        n.d(e, 'ScrollbarPlugin', function () {
          return Z
        })
        var mt = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this
          }
          return (
            (function (t, e) {
              function n() {
                this.constructor = t
              }
              r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
            })(e, t),
            (e.init = function (t, e) {
              if (!t || 1 !== t.nodeType) throw new TypeError('expect element to be DOM Element, but got ' + t)
              return pt(), ct.has(t) ? ct.get(t) : new ft(t, e)
            }),
            (e.initAll = function (t) {
              return Array.from(document.querySelectorAll('[data-scrollbar]'), function (n) {
                return e.init(n, t)
              })
            }),
            (e.has = function (t) {
              return ct.has(t)
            }),
            (e.get = function (t) {
              return ct.get(t)
            }),
            (e.getAll = function () {
              return Array.from(ct.values())
            }),
            (e.destroy = function (t) {
              var e = ct.get(t)
              e && e.destroy()
            }),
            (e.destroyAll = function () {
              ct.forEach(function (t) {
                t.destroy()
              })
            }),
            (e.use = function () {
              for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
              return function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
                t.forEach(function (t) {
                  var e = t.pluginName
                  if (!e) throw new TypeError('plugin name is required')
                  tt.order.add(e), (tt.constructors[e] = t)
                })
              }.apply(void 0, t)
            }),
            (e.attachStyle = function () {
              return pt()
            }),
            (e.detachStyle = function () {
              return (function () {
                if (ht && 'undefined' != typeof window) {
                  var t = document.getElementById(dt)
                  t && t.parentNode && (t.parentNode.removeChild(t), (ht = !1))
                }
              })()
            }),
            (e.version = '8.5.2'),
            (e.ScrollbarPlugin = Z),
            e
          )
        })(ft)
        e.default = mt
      },
    ]).default
  }),
  (function (t, e) {
    'object' == typeof exports && 'undefined' != typeof module ? (module.exports = e()) : 'function' == typeof define && define.amd ? define(e) : (t.Glide = e())
  })(this, function () {
    'use strict'
    var t = {
      type: 'slider',
      startAt: 0,
      perView: 1,
      focusAt: 0,
      gap: 10,
      autoplay: !1,
      hoverpause: !0,
      keyboard: !0,
      bound: !1,
      swipeThreshold: 80,
      dragThreshold: 120,
      perTouch: !1,
      touchRatio: 0.5,
      touchAngle: 45,
      animationDuration: 400,
      rewind: !0,
      rewindDuration: 800,
      animationTimingFunc: 'cubic-bezier(.165, .840, .440, 1)',
      throttle: 10,
      direction: 'ltr',
      peek: 0,
      breakpoints: {},
      classes: {
        direction: { ltr: 'glide--ltr', rtl: 'glide--rtl' },
        slider: 'glide--slider',
        carousel: 'glide--carousel',
        swipeable: 'glide--swipeable',
        dragging: 'glide--dragging',
        cloneSlide: 'glide__slide--clone',
        activeNav: 'glide__bullet--active',
        activeSlide: 'glide__slide--active',
        disabledArrow: 'glide__arrow--disabled',
      },
    }
    function e(t) {
      console.error('[Glide warn]: ' + t)
    }
    var n =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t
            }
          : function (t) {
              return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
            },
      i = function (t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
      },
      r = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n]
            ;(i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
          }
        }
        return function (e, n, i) {
          return n && t(e.prototype, n), i && t(e, i), e
        }
      })(),
      o =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e]
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
          }
          return t
        },
      s = function t(e, n, i) {
        null === e && (e = Function.prototype)
        var r = Object.getOwnPropertyDescriptor(e, n)
        if (void 0 === r) {
          var o = Object.getPrototypeOf(e)
          return null === o ? void 0 : t(o, n, i)
        }
        if ('value' in r) return r.value
        var s = r.get
        return void 0 !== s ? s.call(i) : void 0
      },
      a = function (t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !e || ('object' != typeof e && 'function' != typeof e) ? t : e
      }
    function u(t) {
      return parseInt(t)
    }
    function l(t) {
      return 'string' == typeof t
    }
    function c(t) {
      var e = void 0 === t ? 'undefined' : n(t)
      return 'function' === e || ('object' === e && !!t)
    }
    function f(t) {
      return 'function' == typeof t
    }
    function d(t) {
      return void 0 === t
    }
    function h(t) {
      return t.constructor === Array
    }
    function p(t, n, i) {
      var r = {}
      for (var o in n) f(n[o]) ? (r[o] = n[o](t, r, i)) : e('Extension must be a function')
      for (var s in r) f(r[s].mount) && r[s].mount()
      return r
    }
    function m(t, e, n) {
      Object.defineProperty(t, e, n)
    }
    function g(t, e) {
      var n = o({}, t, e)
      return e.hasOwnProperty('classes') && ((n.classes = o({}, t.classes, e.classes)), e.classes.hasOwnProperty('direction') && (n.classes.direction = o({}, t.classes.direction, e.classes.direction))), e.hasOwnProperty('breakpoints') && (n.breakpoints = o({}, t.breakpoints, e.breakpoints)), n
    }
    var v = (function () {
        function t() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          i(this, t), (this.events = e), (this.hop = e.hasOwnProperty)
        }
        return (
          r(t, [
            {
              key: 'on',
              value: function (t, e) {
                if (h(t)) for (var n = 0; n < t.length; n++) this.on(t[n], e)
                this.hop.call(this.events, t) || (this.events[t] = [])
                var i = this.events[t].push(e) - 1
                return {
                  remove: function () {
                    delete this.events[t][i]
                  },
                }
              },
            },
            {
              key: 'emit',
              value: function (t, e) {
                if (h(t)) for (var n = 0; n < t.length; n++) this.emit(t[n], e)
                this.hop.call(this.events, t) &&
                  this.events[t].forEach(function (t) {
                    t(e || {})
                  })
              },
            },
          ]),
          t
        )
      })(),
      y = (function () {
        function n(e) {
          var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          i(this, n), (this._c = {}), (this._t = []), (this._e = new v()), (this.disabled = !1), (this.selector = e), (this.settings = g(t, r)), (this.index = this.settings.startAt)
        }
        return (
          r(n, [
            {
              key: 'mount',
              value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                return this._e.emit('mount.before'), c(t) ? (this._c = p(this, t, this._e)) : e('You need to provide a object on `mount()`'), this._e.emit('mount.after'), this
              },
            },
            {
              key: 'mutate',
              value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                return h(t) ? (this._t = t) : e('You need to provide a array on `mutate()`'), this
              },
            },
            {
              key: 'update',
              value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                return (this.settings = g(this.settings, t)), t.hasOwnProperty('startAt') && (this.index = t.startAt), this._e.emit('update'), this
              },
            },
            {
              key: 'go',
              value: function (t) {
                return this._c.Run.make(t), this
              },
            },
            {
              key: 'move',
              value: function (t) {
                return this._c.Transition.disable(), this._c.Move.make(t), this
              },
            },
            {
              key: 'destroy',
              value: function () {
                return this._e.emit('destroy'), this
              },
            },
            {
              key: 'play',
              value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                return t && (this.settings.autoplay = t), this._e.emit('play'), this
              },
            },
            {
              key: 'pause',
              value: function () {
                return this._e.emit('pause'), this
              },
            },
            {
              key: 'disable',
              value: function () {
                return (this.disabled = !0), this
              },
            },
            {
              key: 'enable',
              value: function () {
                return (this.disabled = !1), this
              },
            },
            {
              key: 'on',
              value: function (t, e) {
                return this._e.on(t, e), this
              },
            },
            {
              key: 'isType',
              value: function (t) {
                return this.settings.type === t
              },
            },
            {
              key: 'settings',
              get: function () {
                return this._o
              },
              set: function (t) {
                c(t) ? (this._o = t) : e('Options must be an `object` instance.')
              },
            },
            {
              key: 'index',
              get: function () {
                return this._i
              },
              set: function (t) {
                this._i = u(t)
              },
            },
            {
              key: 'type',
              get: function () {
                return this.settings.type
              },
            },
            {
              key: 'disabled',
              get: function () {
                return this._d
              },
              set: function (t) {
                this._d = !!t
              },
            },
          ]),
          n
        )
      })()
    function b() {
      return new Date().getTime()
    }
    function w(t, e, n) {
      var i = void 0,
        r = void 0,
        o = void 0,
        s = void 0,
        a = 0
      n || (n = {})
      var u = function () {
          ;(a = !1 === n.leading ? 0 : b()), (i = null), (s = t.apply(r, o)), i || (r = o = null)
        },
        l = function () {
          var l = b()
          a || !1 !== n.leading || (a = l)
          var c = e - (l - a)
          return (r = this), (o = arguments), c <= 0 || c > e ? (i && (clearTimeout(i), (i = null)), (a = l), (s = t.apply(r, o)), i || (r = o = null)) : i || !1 === n.trailing || (i = setTimeout(u, c)), s
        }
      return (
        (l.cancel = function () {
          clearTimeout(i), (a = 0), (i = r = o = null)
        }),
        l
      )
    }
    var _ = { ltr: ['marginLeft', 'marginRight'], rtl: ['marginRight', 'marginLeft'] }
    function x(t) {
      if (t && t.parentNode) {
        for (var e = t.parentNode.firstChild, n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e)
        return n
      }
      return []
    }
    function E(t) {
      return !!(t && t instanceof window.HTMLElement)
    }
    var T = '[data-glide-el="track"]'
    var S = (function () {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        i(this, t), (this.listeners = e)
      }
      return (
        r(t, [
          {
            key: 'on',
            value: function (t, e, n) {
              var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
              l(t) && (t = [t])
              for (var r = 0; r < t.length; r++) (this.listeners[t[r]] = n), e.addEventListener(t[r], this.listeners[t[r]], i)
            },
          },
          {
            key: 'off',
            value: function (t, e) {
              var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
              l(t) && (t = [t])
              for (var i = 0; i < t.length; i++) e.removeEventListener(t[i], this.listeners[t[i]], n)
            },
          },
          {
            key: 'destroy',
            value: function () {
              delete this.listeners
            },
          },
        ]),
        t
      )
    })()
    var C = ['ltr', 'rtl'],
      A = { '>': '<', '<': '>', '=': '=' }
    function k(t, e) {
      return {
        modify: function (t) {
          return e.Direction.is('rtl') ? -t : t
        },
      }
    }
    function O(t, e) {
      return {
        modify: function (n) {
          return n + e.Gaps.value * t.index
        },
      }
    }
    function D(t, e) {
      return {
        modify: function (t) {
          return t + e.Clones.grow / 2
        },
      }
    }
    function N(t, e) {
      return {
        modify: function (n) {
          if (t.settings.focusAt >= 0) {
            var i = e.Peek.value
            return c(i) ? n - i.before : n - i
          }
          return n
        },
      }
    }
    function j(t, e) {
      return {
        modify: function (n) {
          var i = e.Gaps.value,
            r = e.Sizes.width,
            o = t.settings.focusAt,
            s = e.Sizes.slideWidth
          return 'center' === o ? n - (r / 2 - s / 2) : n - s * o - i * o
        },
      }
    }
    var I = !1
    try {
      var P = Object.defineProperty({}, 'passive', {
        get: function () {
          I = !0
        },
      })
      window.addEventListener('testPassive', null, P), window.removeEventListener('testPassive', null, P)
    } catch (t) {}
    var L = I,
      H = ['touchstart', 'mousedown'],
      M = ['touchmove', 'mousemove'],
      q = ['touchend', 'touchcancel', 'mouseup', 'mouseleave'],
      R = ['mousedown', 'mousemove', 'mouseup', 'mouseleave']
    function W(t) {
      return c(t)
        ? ((n = t),
          Object.keys(n)
            .sort()
            .reduce(function (t, e) {
              return (t[e] = n[e]), t[e], t
            }, {}))
        : (e('Breakpoints option must be an object'), {})
      var n
    }
    var F = {
      Html: function (t, n) {
        var i = {
          mount: function () {
            ;(this.root = t.selector),
              (this.track = this.root.querySelector(T)),
              (this.slides = Array.prototype.slice.call(this.wrapper.children).filter(function (e) {
                return !e.classList.contains(t.settings.classes.cloneSlide)
              }))
          },
        }
        return (
          m(i, 'root', {
            get: function () {
              return i._r
            },
            set: function (t) {
              l(t) && (t = document.querySelector(t)), E(t) ? (i._r = t) : e('Root element must be a existing Html node')
            },
          }),
          m(i, 'track', {
            get: function () {
              return i._t
            },
            set: function (t) {
              E(t) ? (i._t = t) : e('Could not find track element. Please use ' + T + ' attribute.')
            },
          }),
          m(i, 'wrapper', {
            get: function () {
              return i.track.children[0]
            },
          }),
          i
        )
      },
      Translate: function (t, n, i) {
        var r = {
          set: function (i) {
            var r = (function (t, n, i) {
              var r = [O, D, N, j].concat(t._t, [k])
              return {
                mutate: function (o) {
                  for (var s = 0; s < r.length; s++) {
                    var a = r[s]
                    f(a) && f(a().modify) ? (o = a(t, n, i).modify(o)) : e('Transformer should be a function that returns an object with `modify()` method')
                  }
                  return o
                },
              }
            })(t, n).mutate(i)
            n.Html.wrapper.style.transform = 'translate3d(' + -1 * r + 'px, 0px, 0px)'
          },
          remove: function () {
            n.Html.wrapper.style.transform = ''
          },
        }
        return (
          i.on('move', function (e) {
            var o = n.Gaps.value,
              s = n.Sizes.length,
              a = n.Sizes.slideWidth
            return t.isType('carousel') && n.Run.isOffset('<')
              ? (n.Transition.after(function () {
                  i.emit('translate.jump'), r.set(a * (s - 1))
                }),
                r.set(-a - o * s))
              : t.isType('carousel') && n.Run.isOffset('>')
              ? (n.Transition.after(function () {
                  i.emit('translate.jump'), r.set(0)
                }),
                r.set(a * s + o * s))
              : r.set(e.movement)
          }),
          i.on('destroy', function () {
            r.remove()
          }),
          r
        )
      },
      Transition: function (t, e, n) {
        var i = !1,
          r = {
            compose: function (e) {
              var n = t.settings
              return i ? e + ' 0ms ' + n.animationTimingFunc : e + ' ' + this.duration + 'ms ' + n.animationTimingFunc
            },
            set: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'transform'
              e.Html.wrapper.style.transition = this.compose(t)
            },
            remove: function () {
              e.Html.wrapper.style.transition = ''
            },
            after: function (t) {
              setTimeout(function () {
                t()
              }, this.duration)
            },
            enable: function () {
              ;(i = !1), this.set()
            },
            disable: function () {
              ;(i = !0), this.set()
            },
          }
        return (
          m(r, 'duration', {
            get: function () {
              var n = t.settings
              return t.isType('slider') && e.Run.offset ? n.rewindDuration : n.animationDuration
            },
          }),
          n.on('move', function () {
            r.set()
          }),
          n.on(['build.before', 'resize', 'translate.jump'], function () {
            r.disable()
          }),
          n.on('run', function () {
            r.enable()
          }),
          n.on('destroy', function () {
            r.remove()
          }),
          r
        )
      },
      Direction: function (t, n, i) {
        var r = {
          mount: function () {
            this.value = t.settings.direction
          },
          resolve: function (t) {
            var e = t.slice(0, 1)
            return this.is('rtl') ? t.split(e).join(A[e]) : t
          },
          is: function (t) {
            return this.value === t
          },
          addClass: function () {
            n.Html.root.classList.add(t.settings.classes.direction[this.value])
          },
          removeClass: function () {
            n.Html.root.classList.remove(t.settings.classes.direction[this.value])
          },
        }
        return (
          m(r, 'value', {
            get: function () {
              return r._v
            },
            set: function (t) {
              C.indexOf(t) > -1 ? (r._v = t) : e('Direction value must be `ltr` or `rtl`')
            },
          }),
          i.on(['destroy', 'update'], function () {
            r.removeClass()
          }),
          i.on('update', function () {
            r.mount()
          }),
          i.on(['build.before', 'update'], function () {
            r.addClass()
          }),
          r
        )
      },
      Peek: function (t, e, n) {
        var i = {
          mount: function () {
            this.value = t.settings.peek
          },
        }
        return (
          m(i, 'value', {
            get: function () {
              return i._v
            },
            set: function (t) {
              c(t) ? ((t.before = u(t.before)), (t.after = u(t.after))) : (t = u(t)), (i._v = t)
            },
          }),
          m(i, 'reductor', {
            get: function () {
              var e = i.value,
                n = t.settings.perView
              return c(e) ? e.before / n + e.after / n : (2 * e) / n
            },
          }),
          n.on(['resize', 'update'], function () {
            i.mount()
          }),
          i
        )
      },
      Sizes: function (t, e, n) {
        var i = {
          setupSlides: function () {
            for (var t = this.slideWidth + 'px', n = e.Html.slides, i = 0; i < n.length; i++) n[i].style.width = t
          },
          setupWrapper: function (t) {
            e.Html.wrapper.style.width = this.wrapperSize + 'px'
          },
          remove: function () {
            for (var t = e.Html.slides, n = 0; n < t.length; n++) t[n].style.width = ''
            e.Html.wrapper.style.width = ''
          },
        }
        return (
          m(i, 'length', {
            get: function () {
              return e.Html.slides.length
            },
          }),
          m(i, 'width', {
            get: function () {
              return e.Html.root.offsetWidth
            },
          }),
          m(i, 'wrapperSize', {
            get: function () {
              return i.slideWidth * i.length + e.Gaps.grow + e.Clones.grow
            },
          }),
          m(i, 'slideWidth', {
            get: function () {
              return i.width / t.settings.perView - e.Peek.reductor - e.Gaps.reductor
            },
          }),
          n.on(['build.before', 'resize', 'update'], function () {
            i.setupSlides(), i.setupWrapper()
          }),
          n.on('destroy', function () {
            i.remove()
          }),
          i
        )
      },
      Gaps: function (t, e, n) {
        var i = {
          apply: function (t) {
            for (var n = 0, i = t.length; n < i; n++) {
              var r = t[n].style,
                o = e.Direction.value
              ;(r[_[o][0]] = 0 !== n ? this.value / 2 + 'px' : ''), n !== t.length - 1 ? (r[_[o][1]] = this.value / 2 + 'px') : (r[_[o][1]] = '')
            }
          },
          remove: function (t) {
            for (var e = 0, n = t.length; e < n; e++) {
              var i = t[e].style
              ;(i.marginLeft = ''), (i.marginRight = '')
            }
          },
        }
        return (
          m(i, 'value', {
            get: function () {
              return u(t.settings.gap)
            },
          }),
          m(i, 'grow', {
            get: function () {
              return i.value * (e.Sizes.length - 1)
            },
          }),
          m(i, 'reductor', {
            get: function () {
              var e = t.settings.perView
              return (i.value * (e - 1)) / e
            },
          }),
          n.on(
            ['build.after', 'update'],
            w(function () {
              i.apply(e.Html.wrapper.children)
            }, 30),
          ),
          n.on('destroy', function () {
            i.remove(e.Html.wrapper.children)
          }),
          i
        )
      },
      Move: function (t, e, n) {
        var i = {
          mount: function () {
            this._o = 0
          },
          make: function () {
            var t = this,
              i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
            ;(this.offset = i),
              n.emit('move', { movement: this.value }),
              e.Transition.after(function () {
                n.emit('move.after', { movement: t.value })
              })
          },
        }
        return (
          m(i, 'offset', {
            get: function () {
              return i._o
            },
            set: function (t) {
              i._o = d(t) ? 0 : u(t)
            },
          }),
          m(i, 'translate', {
            get: function () {
              return e.Sizes.slideWidth * t.index
            },
          }),
          m(i, 'value', {
            get: function () {
              var t = this.offset,
                n = this.translate
              return e.Direction.is('rtl') ? n + t : n - t
            },
          }),
          n.on(['build.before', 'run'], function () {
            i.make()
          }),
          i
        )
      },
      Clones: function (t, e, n) {
        var i = {
          mount: function () {
            ;(this.items = []), t.isType('carousel') && (this.items = this.collect())
          },
          collect: function () {
            for (var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], i = e.Html.slides, r = t.settings, o = r.perView, s = r.classes, a = +!!t.settings.peek, u = o + a, l = i.slice(0, u), c = i.slice(-u), f = 0; f < Math.max(1, Math.floor(o / i.length)); f++) {
              for (var d = 0; d < l.length; d++) {
                var h = l[d].cloneNode(!0)
                h.classList.add(s.cloneSlide), n.push(h)
              }
              for (var p = 0; p < c.length; p++) {
                var m = c[p].cloneNode(!0)
                m.classList.add(s.cloneSlide), n.unshift(m)
              }
            }
            return n
          },
          append: function () {
            for (var t = this.items, n = e.Html, i = n.wrapper, r = n.slides, o = Math.floor(t.length / 2), s = t.slice(0, o).reverse(), a = t.slice(o, t.length), u = e.Sizes.slideWidth + 'px', l = 0; l < a.length; l++) i.appendChild(a[l])
            for (var c = 0; c < s.length; c++) i.insertBefore(s[c], r[0])
            for (var f = 0; f < t.length; f++) t[f].style.width = u
          },
          remove: function () {
            for (var t = this.items, n = 0; n < t.length; n++) e.Html.wrapper.removeChild(t[n])
          },
        }
        return (
          m(i, 'grow', {
            get: function () {
              return (e.Sizes.slideWidth + e.Gaps.value) * i.items.length
            },
          }),
          n.on('update', function () {
            i.remove(), i.mount(), i.append()
          }),
          n.on('build.before', function () {
            t.isType('carousel') && i.append()
          }),
          n.on('destroy', function () {
            i.remove()
          }),
          i
        )
      },
      Resize: function (t, e, n) {
        var i = new S(),
          r = {
            mount: function () {
              this.bind()
            },
            bind: function () {
              i.on(
                'resize',
                window,
                w(function () {
                  n.emit('resize')
                }, t.settings.throttle),
              )
            },
            unbind: function () {
              i.off('resize', window)
            },
          }
        return (
          n.on('destroy', function () {
            r.unbind(), i.destroy()
          }),
          r
        )
      },
      Build: function (t, e, n) {
        var i = {
          mount: function () {
            n.emit('build.before'), this.typeClass(), this.activeClass(), n.emit('build.after')
          },
          typeClass: function () {
            e.Html.root.classList.add(t.settings.classes[t.settings.type])
          },
          activeClass: function () {
            var n = t.settings.classes,
              i = e.Html.slides[t.index]
            i &&
              (i.classList.add(n.activeSlide),
              x(i).forEach(function (t) {
                t.classList.remove(n.activeSlide)
              }))
          },
          removeClasses: function () {
            var n = t.settings.classes
            e.Html.root.classList.remove(n[t.settings.type]),
              e.Html.slides.forEach(function (t) {
                t.classList.remove(n.activeSlide)
              })
          },
        }
        return (
          n.on(['destroy', 'update'], function () {
            i.removeClasses()
          }),
          n.on(['resize', 'update'], function () {
            i.mount()
          }),
          n.on('move.after', function () {
            i.activeClass()
          }),
          i
        )
      },
      Run: function (t, n, i) {
        var r = {
          mount: function () {
            this._o = !1
          },
          make: function (e) {
            var r = this
            t.disabled ||
              (t.disable(),
              (this.move = e),
              i.emit('run.before', this.move),
              this.calculate(),
              i.emit('run', this.move),
              n.Transition.after(function () {
                r.isStart() && i.emit('run.start', r.move), r.isEnd() && i.emit('run.end', r.move), (r.isOffset('<') || r.isOffset('>')) && ((r._o = !1), i.emit('run.offset', r.move)), i.emit('run.after', r.move), t.enable()
              }))
          },
          calculate: function () {
            var n = this.move,
              i = this.length,
              r = n.steps,
              o = n.direction,
              s = 'number' == typeof u(r) && 0 !== u(r)
            switch (o) {
              case '>':
                '>' === r ? (t.index = i) : this.isEnd() ? (t.isType('slider') && !t.settings.rewind) || ((this._o = !0), (t.index = 0)) : s ? (t.index += Math.min(i - t.index, -u(r))) : t.index++
                break
              case '<':
                '<' === r ? (t.index = 0) : this.isStart() ? (t.isType('slider') && !t.settings.rewind) || ((this._o = !0), (t.index = i)) : s ? (t.index -= Math.min(t.index, u(r))) : t.index--
                break
              case '=':
                t.index = r
                break
              default:
                e('Invalid direction pattern [' + o + r + '] has been used')
            }
          },
          isStart: function () {
            return 0 === t.index
          },
          isEnd: function () {
            return t.index === this.length
          },
          isOffset: function (t) {
            return this._o && this.move.direction === t
          },
        }
        return (
          m(r, 'move', {
            get: function () {
              return this._m
            },
            set: function (t) {
              var e = t.substr(1)
              this._m = { direction: t.substr(0, 1), steps: e ? (u(e) ? u(e) : e) : 0 }
            },
          }),
          m(r, 'length', {
            get: function () {
              var e = t.settings,
                i = n.Html.slides.length
              return t.isType('slider') && 'center' !== e.focusAt && e.bound ? i - 1 - (u(e.perView) - 1) + u(e.focusAt) : i - 1
            },
          }),
          m(r, 'offset', {
            get: function () {
              return this._o
            },
          }),
          r
        )
      },
      Swipe: function (t, e, n) {
        var i = new S(),
          r = 0,
          o = 0,
          s = 0,
          a = !1,
          l = !!L && { passive: !0 },
          c = {
            mount: function () {
              this.bindSwipeStart()
            },
            start: function (e) {
              if (!a && !t.disabled) {
                this.disable()
                var i = this.touches(e)
                ;(r = null), (o = u(i.pageX)), (s = u(i.pageY)), this.bindSwipeMove(), this.bindSwipeEnd(), n.emit('swipe.start')
              }
            },
            move: function (i) {
              if (!t.disabled) {
                var a = t.settings,
                  l = a.touchAngle,
                  c = a.touchRatio,
                  f = a.classes,
                  d = this.touches(i),
                  h = u(d.pageX) - o,
                  p = u(d.pageY) - s,
                  m = Math.abs(h << 2),
                  g = Math.abs(p << 2),
                  v = Math.sqrt(m + g),
                  y = Math.sqrt(g)
                if (!((180 * (r = Math.asin(y / v))) / Math.PI < l)) return !1
                i.stopPropagation(), e.Move.make(h * parseFloat(c)), e.Html.root.classList.add(f.dragging), n.emit('swipe.move')
              }
            },
            end: function (i) {
              if (!t.disabled) {
                var s = t.settings,
                  a = this.touches(i),
                  l = this.threshold(i),
                  c = a.pageX - o,
                  f = (180 * r) / Math.PI,
                  d = Math.round(c / e.Sizes.slideWidth)
                this.enable(),
                  c > l && f < s.touchAngle
                    ? (s.perTouch && (d = Math.min(d, u(s.perTouch))), e.Direction.is('rtl') && (d = -d), e.Run.make(e.Direction.resolve('<' + d)))
                    : c < -l && f < s.touchAngle
                    ? (s.perTouch && (d = Math.max(d, -u(s.perTouch))), e.Direction.is('rtl') && (d = -d), e.Run.make(e.Direction.resolve('>' + d)))
                    : e.Move.make(),
                  e.Html.root.classList.remove(s.classes.dragging),
                  this.unbindSwipeMove(),
                  this.unbindSwipeEnd(),
                  n.emit('swipe.end')
              }
            },
            bindSwipeStart: function () {
              var n = this,
                r = t.settings
              r.swipeThreshold &&
                i.on(
                  H[0],
                  e.Html.wrapper,
                  function (t) {
                    n.start(t)
                  },
                  l,
                ),
                r.dragThreshold &&
                  i.on(
                    H[1],
                    e.Html.wrapper,
                    function (t) {
                      n.start(t)
                    },
                    l,
                  )
            },
            unbindSwipeStart: function () {
              i.off(H[0], e.Html.wrapper, l), i.off(H[1], e.Html.wrapper, l)
            },
            bindSwipeMove: function () {
              var n = this
              i.on(
                M,
                e.Html.wrapper,
                w(function (t) {
                  n.move(t)
                }, t.settings.throttle),
                l,
              )
            },
            unbindSwipeMove: function () {
              i.off(M, e.Html.wrapper, l)
            },
            bindSwipeEnd: function () {
              var t = this
              i.on(q, e.Html.wrapper, function (e) {
                t.end(e)
              })
            },
            unbindSwipeEnd: function () {
              i.off(q, e.Html.wrapper)
            },
            touches: function (t) {
              return R.indexOf(t.type) > -1 ? t : t.touches[0] || t.changedTouches[0]
            },
            threshold: function (e) {
              var n = t.settings
              return R.indexOf(e.type) > -1 ? n.dragThreshold : n.swipeThreshold
            },
            enable: function () {
              return (a = !1), e.Transition.enable(), this
            },
            disable: function () {
              return (a = !0), e.Transition.disable(), this
            },
          }
        return (
          n.on('build.after', function () {
            e.Html.root.classList.add(t.settings.classes.swipeable)
          }),
          n.on('destroy', function () {
            c.unbindSwipeStart(), c.unbindSwipeMove(), c.unbindSwipeEnd(), i.destroy()
          }),
          c
        )
      },
      Images: function (t, e, n) {
        var i = new S(),
          r = {
            mount: function () {
              this.bind()
            },
            bind: function () {
              i.on('dragstart', e.Html.wrapper, this.dragstart)
            },
            unbind: function () {
              i.off('dragstart', e.Html.wrapper)
            },
            dragstart: function (t) {
              t.preventDefault()
            },
          }
        return (
          n.on('destroy', function () {
            r.unbind(), i.destroy()
          }),
          r
        )
      },
      Anchors: function (t, e, n) {
        var i = new S(),
          r = !1,
          o = !1,
          s = {
            mount: function () {
              ;(this._a = e.Html.wrapper.querySelectorAll('a')), this.bind()
            },
            bind: function () {
              i.on('click', e.Html.wrapper, this.click)
            },
            unbind: function () {
              i.off('click', e.Html.wrapper)
            },
            click: function (t) {
              o && (t.stopPropagation(), t.preventDefault())
            },
            detach: function () {
              if (((o = !0), !r)) {
                for (var t = 0; t < this.items.length; t++) (this.items[t].draggable = !1), this.items[t].setAttribute('data-href', this.items[t].getAttribute('href')), this.items[t].removeAttribute('href')
                r = !0
              }
              return this
            },
            attach: function () {
              if (((o = !1), r)) {
                for (var t = 0; t < this.items.length; t++) (this.items[t].draggable = !0), this.items[t].setAttribute('href', this.items[t].getAttribute('data-href'))
                r = !1
              }
              return this
            },
          }
        return (
          m(s, 'items', {
            get: function () {
              return s._a
            },
          }),
          n.on('swipe.move', function () {
            s.detach()
          }),
          n.on('swipe.end', function () {
            e.Transition.after(function () {
              s.attach()
            })
          }),
          n.on('destroy', function () {
            s.attach(), s.unbind(), i.destroy()
          }),
          s
        )
      },
      Controls: function (t, e, n) {
        var i = new S(),
          r = !!L && { passive: !0 },
          o = {
            mount: function () {
              ;(this._n = e.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]')), (this._c = e.Html.root.querySelectorAll('[data-glide-el^="controls"]')), this.addBindings()
            },
            setActive: function () {
              for (var t = 0; t < this._n.length; t++) this.addClass(this._n[t].children)
            },
            removeActive: function () {
              for (var t = 0; t < this._n.length; t++) this.removeClass(this._n[t].children)
            },
            addClass: function (e) {
              var n = t.settings,
                i = e[t.index]
              i &&
                (i.classList.add(n.classes.activeNav),
                x(i).forEach(function (t) {
                  t.classList.remove(n.classes.activeNav)
                }))
            },
            removeClass: function (e) {
              var n = e[t.index]
              n && n.classList.remove(t.settings.classes.activeNav)
            },
            addBindings: function () {
              for (var t = 0; t < this._c.length; t++) this.bind(this._c[t].children)
            },
            removeBindings: function () {
              for (var t = 0; t < this._c.length; t++) this.unbind(this._c[t].children)
            },
            bind: function (t) {
              for (var e = 0; e < t.length; e++) i.on('click', t[e], this.click), i.on('touchstart', t[e], this.click, r)
            },
            unbind: function (t) {
              for (var e = 0; e < t.length; e++) i.off(['click', 'touchstart'], t[e])
            },
            click: function (t) {
              t.preventDefault(), e.Run.make(e.Direction.resolve(t.currentTarget.getAttribute('data-glide-dir')))
            },
          }
        return (
          m(o, 'items', {
            get: function () {
              return o._c
            },
          }),
          n.on(['mount.after', 'move.after'], function () {
            o.setActive()
          }),
          n.on('destroy', function () {
            o.removeBindings(), o.removeActive(), i.destroy()
          }),
          o
        )
      },
      Keyboard: function (t, e, n) {
        var i = new S(),
          r = {
            mount: function () {
              t.settings.keyboard && this.bind()
            },
            bind: function () {
              i.on('keyup', document, this.press)
            },
            unbind: function () {
              i.off('keyup', document)
            },
            press: function (t) {
              39 === t.keyCode && e.Run.make(e.Direction.resolve('>')), 37 === t.keyCode && e.Run.make(e.Direction.resolve('<'))
            },
          }
        return (
          n.on(['destroy', 'update'], function () {
            r.unbind()
          }),
          n.on('update', function () {
            r.mount()
          }),
          n.on('destroy', function () {
            i.destroy()
          }),
          r
        )
      },
      Autoplay: function (t, e, n) {
        var i = new S(),
          r = {
            mount: function () {
              this.start(), t.settings.hoverpause && this.bind()
            },
            start: function () {
              var n = this
              t.settings.autoplay &&
                d(this._i) &&
                (this._i = setInterval(function () {
                  n.stop(), e.Run.make('>'), n.start()
                }, this.time))
            },
            stop: function () {
              this._i = clearInterval(this._i)
            },
            bind: function () {
              var t = this
              i.on('mouseover', e.Html.root, function () {
                t.stop()
              }),
                i.on('mouseout', e.Html.root, function () {
                  t.start()
                })
            },
            unbind: function () {
              i.off(['mouseover', 'mouseout'], e.Html.root)
            },
          }
        return (
          m(r, 'time', {
            get: function () {
              var n = e.Html.slides[t.index].getAttribute('data-glide-autoplay')
              return u(n || t.settings.autoplay)
            },
          }),
          n.on(['destroy', 'update'], function () {
            r.unbind()
          }),
          n.on(['run.before', 'pause', 'destroy', 'swipe.start', 'update'], function () {
            r.stop()
          }),
          n.on(['run.after', 'play', 'swipe.end'], function () {
            r.start()
          }),
          n.on('update', function () {
            r.mount()
          }),
          n.on('destroy', function () {
            i.destroy()
          }),
          r
        )
      },
      Breakpoints: function (t, e, n) {
        var i = new S(),
          r = t.settings,
          s = W(r.breakpoints),
          a = o({}, r),
          u = {
            match: function (t) {
              if (void 0 !== window.matchMedia) for (var e in t) if (t.hasOwnProperty(e) && window.matchMedia('(max-width: ' + e + 'px)').matches) return t[e]
              return a
            },
          }
        return (
          o(r, u.match(s)),
          i.on(
            'resize',
            window,
            w(function () {
              t.settings = g(r, u.match(s))
            }, t.settings.throttle),
          ),
          n.on('update', function () {
            ;(s = W(s)), (a = o({}, r))
          }),
          n.on('destroy', function () {
            i.off('resize', window)
          }),
          u
        )
      },
    }
    return (function (t) {
      function e() {
        return i(this, e), a(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
      }
      return (
        (function (t, e) {
          if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function, not ' + typeof e)
          ;(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e))
        })(e, t),
        r(e, [
          {
            key: 'mount',
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              return s(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), 'mount', this).call(this, o({}, F, t))
            },
          },
        ]),
        e
      )
    })(y)
  }),
  (function () {
    'use strict'
    function t(i) {
      if (!i) throw new Error('No options passed to Waypoint constructor')
      if (!i.element) throw new Error('No element option passed to Waypoint constructor')
      if (!i.handler) throw new Error('No handler option passed to Waypoint constructor')
      ;(this.key = 'waypoint-' + e),
        (this.options = t.Adapter.extend({}, t.defaults, i)),
        (this.element = this.options.element),
        (this.adapter = new t.Adapter(this.element)),
        (this.callback = i.handler),
        (this.axis = this.options.horizontal ? 'horizontal' : 'vertical'),
        (this.enabled = this.options.enabled),
        (this.triggerPoint = null),
        (this.group = t.Group.findOrCreate({ name: this.options.group, axis: this.axis })),
        (this.context = t.Context.findOrCreateByElement(this.options.context)),
        t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]),
        this.group.add(this),
        this.context.add(this),
        (n[this.key] = this),
        (e += 1)
    }
    var e = 0,
      n = {}
    ;(t.prototype.queueTrigger = function (t) {
      this.group.queueTrigger(this, t)
    }),
      (t.prototype.trigger = function (t) {
        this.enabled && this.callback && this.callback.apply(this, t)
      }),
      (t.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete n[this.key]
      }),
      (t.prototype.disable = function () {
        return (this.enabled = !1), this
      }),
      (t.prototype.enable = function () {
        return this.context.refresh(), (this.enabled = !0), this
      }),
      (t.prototype.next = function () {
        return this.group.next(this)
      }),
      (t.prototype.previous = function () {
        return this.group.previous(this)
      }),
      (t.invokeAll = function (t) {
        var e = []
        for (var i in n) e.push(n[i])
        for (var r = 0, o = e.length; o > r; r++) e[r][t]()
      }),
      (t.destroyAll = function () {
        t.invokeAll('destroy')
      }),
      (t.disableAll = function () {
        t.invokeAll('disable')
      }),
      (t.enableAll = function () {
        for (var e in (t.Context.refreshAll(), n)) n[e].enabled = !0
        return this
      }),
      (t.refreshAll = function () {
        t.Context.refreshAll()
      }),
      (t.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight
      }),
      (t.viewportWidth = function () {
        return document.documentElement.clientWidth
      }),
      (t.adapters = []),
      (t.defaults = { context: window, continuous: !0, enabled: !0, group: 'default', horizontal: !1, offset: 0 }),
      (t.offsetAliases = {
        'bottom-in-view': function () {
          return this.context.innerHeight() - this.adapter.outerHeight()
        },
        'right-in-view': function () {
          return this.context.innerWidth() - this.adapter.outerWidth()
        },
      }),
      (window.Waypoint = t)
  })(),
  (function () {
    'use strict'
    function t(t) {
      window.setTimeout(t, 1e3 / 60)
    }
    function e(t) {
      ;(this.element = t),
        (this.Adapter = r.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = 'waypoint-context-' + n),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (i[t.waypointContextKey] = this),
        (n += 1),
        r.windowContext || ((r.windowContext = !0), (r.windowContext = new e(window))),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler()
    }
    var n = 0,
      i = {},
      r = window.Waypoint,
      o = window.onload
    ;(e.prototype.add = function (t) {
      var e = t.options.horizontal ? 'horizontal' : 'vertical'
      ;(this.waypoints[e][t.key] = t), this.refresh()
    }),
      (e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical),
          n = this.element == this.element.window
        t && e && !n && (this.adapter.off('.waypoints'), delete i[this.key])
      }),
      (e.prototype.createThrottledResizeHandler = function () {
        function t() {
          e.handleResize(), (e.didResize = !1)
        }
        var e = this
        this.adapter.on('resize.waypoints', function () {
          e.didResize || ((e.didResize = !0), r.requestAnimationFrame(t))
        })
      }),
      (e.prototype.createThrottledScrollHandler = function () {
        function t() {
          e.handleScroll(), (e.didScroll = !1)
        }
        var e = this
        this.adapter.on('scroll.waypoints', function () {
          ;(!e.didScroll || r.isTouch) && ((e.didScroll = !0), r.requestAnimationFrame(t))
        })
      }),
      (e.prototype.handleResize = function () {
        r.Context.refreshAll()
      }),
      (e.prototype.handleScroll = function () {
        var t = {},
          e = { horizontal: { newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: 'right', backward: 'left' }, vertical: { newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: 'down', backward: 'up' } }
        for (var n in e) {
          var i = e[n],
            r = i.newScroll > i.oldScroll ? i.forward : i.backward
          for (var o in this.waypoints[n]) {
            var s = this.waypoints[n][o]
            if (null !== s.triggerPoint) {
              var a = i.oldScroll < s.triggerPoint,
                u = i.newScroll >= s.triggerPoint
              ;((a && u) || (!a && !u)) && (s.queueTrigger(r), (t[s.group.id] = s.group))
            }
          }
        }
        for (var l in t) t[l].flushTriggers()
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll }
      }),
      (e.prototype.innerHeight = function () {
        return this.element == this.element.window ? r.viewportHeight() : this.adapter.innerHeight()
      }),
      (e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
      }),
      (e.prototype.innerWidth = function () {
        return this.element == this.element.window ? r.viewportWidth() : this.adapter.innerWidth()
      }),
      (e.prototype.destroy = function () {
        var t = []
        for (var e in this.waypoints) for (var n in this.waypoints[e]) t.push(this.waypoints[e][n])
        for (var i = 0, r = t.length; r > i; i++) t[i].destroy()
      }),
      (e.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          n = e ? void 0 : this.adapter.offset(),
          i = {}
        for (var o in (this.handleScroll(),
        (t = {
          horizontal: { contextOffset: e ? 0 : n.left, contextScroll: e ? 0 : this.oldScroll.x, contextDimension: this.innerWidth(), oldScroll: this.oldScroll.x, forward: 'right', backward: 'left', offsetProp: 'left' },
          vertical: { contextOffset: e ? 0 : n.top, contextScroll: e ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: 'down', backward: 'up', offsetProp: 'top' },
        }))) {
          var s = t[o]
          for (var a in this.waypoints[o]) {
            var u,
              l,
              c,
              f,
              d = this.waypoints[o][a],
              h = d.options.offset,
              p = d.triggerPoint,
              m = 0,
              g = null == p
            d.element !== d.element.window && (m = d.adapter.offset()[s.offsetProp]),
              'function' == typeof h ? (h = h.apply(d)) : 'string' == typeof h && ((h = parseFloat(h)), d.options.offset.indexOf('%') > -1 && (h = Math.ceil((s.contextDimension * h) / 100))),
              (u = s.contextScroll - s.contextOffset),
              (d.triggerPoint = Math.floor(m + u - h)),
              (l = p < s.oldScroll),
              (c = d.triggerPoint >= s.oldScroll),
              (f = !l && !c),
              !g && l && c ? (d.queueTrigger(s.backward), (i[d.group.id] = d.group)) : ((!g && f) || (g && s.oldScroll >= d.triggerPoint)) && (d.queueTrigger(s.forward), (i[d.group.id] = d.group))
          }
        }
        return (
          r.requestAnimationFrame(function () {
            for (var t in i) i[t].flushTriggers()
          }),
          this
        )
      }),
      (e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t)
      }),
      (e.refreshAll = function () {
        for (var t in i) i[t].refresh()
      }),
      (e.findByElement = function (t) {
        return i[t.waypointContextKey]
      }),
      (window.onload = function () {
        o && o(), e.refreshAll()
      }),
      (r.requestAnimationFrame = function (e) {
        ;(window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
      }),
      (r.Context = e)
  })(),
  (function () {
    'use strict'
    function t(t, e) {
      return t.triggerPoint - e.triggerPoint
    }
    function e(t, e) {
      return e.triggerPoint - t.triggerPoint
    }
    function n(t) {
      ;(this.name = t.name), (this.axis = t.axis), (this.id = this.name + '-' + this.axis), (this.waypoints = []), this.clearTriggerQueues(), (i[this.axis][this.name] = this)
    }
    var i = { vertical: {}, horizontal: {} },
      r = window.Waypoint
    ;(n.prototype.add = function (t) {
      this.waypoints.push(t)
    }),
      (n.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] }
      }),
      (n.prototype.flushTriggers = function () {
        for (var n in this.triggerQueues) {
          var i = this.triggerQueues[n],
            r = 'up' === n || 'left' === n
          i.sort(r ? e : t)
          for (var o = 0, s = i.length; s > o; o += 1) {
            var a = i[o]
            ;(a.options.continuous || o === i.length - 1) && a.trigger([n])
          }
        }
        this.clearTriggerQueues()
      }),
      (n.prototype.next = function (e) {
        this.waypoints.sort(t)
        var n = r.Adapter.inArray(e, this.waypoints)
        return n === this.waypoints.length - 1 ? null : this.waypoints[n + 1]
      }),
      (n.prototype.previous = function (e) {
        this.waypoints.sort(t)
        var n = r.Adapter.inArray(e, this.waypoints)
        return n ? this.waypoints[n - 1] : null
      }),
      (n.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t)
      }),
      (n.prototype.remove = function (t) {
        var e = r.Adapter.inArray(t, this.waypoints)
        e > -1 && this.waypoints.splice(e, 1)
      }),
      (n.prototype.first = function () {
        return this.waypoints[0]
      }),
      (n.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1]
      }),
      (n.findOrCreate = function (t) {
        return i[t.axis][t.name] || new n(t)
      }),
      (r.Group = n)
  })(),
  (function () {
    'use strict'
    function t(t) {
      this.$element = e(t)
    }
    var e = window.jQuery,
      n = window.Waypoint
    e.each(['innerHeight', 'innerWidth', 'off', 'offset', 'on', 'outerHeight', 'outerWidth', 'scrollLeft', 'scrollTop'], function (e, n) {
      t.prototype[n] = function () {
        var t = Array.prototype.slice.call(arguments)
        return this.$element[n].apply(this.$element, t)
      }
    }),
      e.each(['extend', 'inArray', 'isEmptyObject'], function (n, i) {
        t[i] = e[i]
      }),
      n.adapters.push({ name: 'jquery', Adapter: t }),
      (n.Adapter = t)
  })(),
  (function () {
    'use strict'
    function t(t) {
      return function () {
        var n = [],
          i = arguments[0]
        return (
          t.isFunction(arguments[0]) && ((i = t.extend({}, arguments[1])).handler = arguments[0]),
          this.each(function () {
            var r = t.extend({}, i, { element: this })
            'string' == typeof r.context && (r.context = t(this).closest(r.context)[0]), n.push(new e(r))
          }),
          n
        )
      }
    }
    var e = window.Waypoint
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
  })(),
  (function (t) {
    'use strict'
    t.fn.countUp = function (e) {
      var n = t.extend({ time: 2e3, delay: 10 }, e)
      return this.each(function () {
        var e = t(this),
          i = n,
          r = e.text()
        e.waypoint(
          function () {
            e.data('counterupTo') || e.data('counterupTo', e.text())
            parseInt(e.data('counter-time')) > 0 ? parseInt(e.data('counter-time')) : i.time
            var t = parseInt(e.data('counter-delay')) > 0 ? parseInt(e.data('counter-delay')) : i.delay,
              n = i.time / i.delay,
              o = r,
              s = [o],
              a = /[0-9]+,[0-9]+/.test(o)
            o = o.replace(/,/g, '')
            ;/^[0-9]+$/.test(o)
            for (var u = /^[0-9]+\.[0-9]+$/.test(o), l = u ? (o.split('.')[1] || []).length : 0, c = n; c >= 1; c--) {
              var f = parseInt(Math.round((o / n) * c))
              if ((u && (f = parseFloat((o / n) * c).toFixed(l)), a)) for (; /(\d+)(\d{3})/.test(f.toString()); ) f = f.toString().replace(/(\d+)(\d{3})/, '$1,$2')
              s.unshift(f)
            }
            e.data('counterup-nums', s), e.text('0')
            e.data('counterup-func', function () {
              e.data('counterup-nums') && (e.text(e.data('counterup-nums').shift()), e.data('counterup-nums').length ? setTimeout(e.data('counterup-func'), t) : (e.data('counterup-nums'), e.data('counterup-nums', null), e.data('counterup-func', null)))
            }),
              setTimeout(e.data('counterup-func'), t)
          },
          { offset: '100%', triggerOnce: !1 },
        )
      })
    }
  })(jQuery),
  (function (t, e) {
    'function' == typeof define && define.amd ? define(e) : 'object' == typeof exports ? (module.exports = e()) : (t.NProgress = e())
  })(this, function () {
    var t,
      e,
      n = { version: '0.2.0' },
      i = (n.settings = {
        minimum: 0.08,
        easing: 'linear',
        positionUsing: '',
        speed: 200,
        trickle: !0,
        trickleSpeed: 200,
        showSpinner: !0,
        barSelector: '[role="bar"]',
        spinnerSelector: '[role="spinner"]',
        parent: 'body',
        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
      })
    function r(t) {
      return 'object' == typeof HTMLElement ? t instanceof HTMLElement : t && 'object' == typeof t && 1 === t.nodeType && 'string' == typeof t.nodeName
    }
    function o(t, e, n) {
      return t < e ? e : t > n ? n : t
    }
    function s(t) {
      return 100 * (-1 + t)
    }
    ;(n.configure = function (t) {
      var e, n
      for (e in t) void 0 !== (n = t[e]) && t.hasOwnProperty(e) && (i[e] = n)
      return this
    }),
      (n.status = null),
      (n.set = function (t) {
        var e = n.isStarted()
        ;(t = o(t, i.minimum, 1)), (n.status = 1 === t ? null : t)
        var r = n.render(!e),
          l = r.querySelector(i.barSelector),
          c = i.speed,
          f = i.easing
        return (
          r.offsetWidth,
          a(function (e) {
            '' === i.positionUsing && (i.positionUsing = n.getPositioningCSS()),
              u(
                l,
                (function (t, e, n) {
                  var r
                  r = 'translate3d' === i.positionUsing ? { transform: 'translate3d(' + s(t) + '%,0,0)' } : 'translate' === i.positionUsing ? { transform: 'translate(' + s(t) + '%,0)' } : { 'margin-left': s(t) + '%' }
                  return (r.transition = 'all ' + e + 'ms ' + n), r
                })(t, c, f),
              ),
              1 === t
                ? (u(r, { transition: 'none', opacity: 1 }),
                  r.offsetWidth,
                  setTimeout(function () {
                    u(r, { transition: 'all ' + c + 'ms linear', opacity: 0 }),
                      setTimeout(function () {
                        n.remove(), e()
                      }, c)
                  }, c))
                : setTimeout(e, c)
          }),
          this
        )
      }),
      (n.isStarted = function () {
        return 'number' == typeof n.status
      }),
      (n.start = function () {
        n.status || n.set(0)
        var t = function () {
          setTimeout(function () {
            n.status && (n.trickle(), t())
          }, i.trickleSpeed)
        }
        return i.trickle && t(), this
      }),
      (n.done = function (t) {
        return t || n.status ? n.inc(0.3 + 0.5 * Math.random()).set(1) : this
      }),
      (n.inc = function (t) {
        var e = n.status
        return e ? (e > 1 ? void 0 : ('number' != typeof t && (t = e >= 0 && e < 0.2 ? 0.1 : e >= 0.2 && e < 0.5 ? 0.04 : e >= 0.5 && e < 0.8 ? 0.02 : e >= 0.8 && e < 0.99 ? 0.005 : 0), (e = o(e + t, 0, 0.994)), n.set(e))) : n.start()
      }),
      (n.trickle = function () {
        return n.inc()
      }),
      (t = 0),
      (e = 0),
      (n.promise = function (i) {
        return i && 'resolved' !== i.state()
          ? (0 === e && n.start(),
            t++,
            e++,
            i.always(function () {
              0 == --e ? ((t = 0), n.done()) : n.set((t - e) / t)
            }),
            this)
          : this
      }),
      (n.render = function (t) {
        if (n.isRendered()) return document.getElementById('nprogress')
        c(document.documentElement, 'nprogress-busy')
        var e = document.createElement('div')
        ;(e.id = 'nprogress'), (e.innerHTML = i.template)
        var o,
          a = e.querySelector(i.barSelector),
          l = t ? '-100' : s(n.status || 0),
          f = r(i.parent) ? i.parent : document.querySelector(i.parent)
        return u(a, { transition: 'all 0 linear', transform: 'translate3d(' + l + '%,0,0)' }), i.showSpinner || ((o = e.querySelector(i.spinnerSelector)) && h(o)), f != document.body && c(f, 'nprogress-custom-parent'), f.appendChild(e), e
      }),
      (n.remove = function () {
        f(document.documentElement, 'nprogress-busy'), f(r(i.parent) ? i.parent : document.querySelector(i.parent), 'nprogress-custom-parent')
        var t = document.getElementById('nprogress')
        t && h(t)
      }),
      (n.isRendered = function () {
        return !!document.getElementById('nprogress')
      }),
      (n.getPositioningCSS = function () {
        var t = document.body.style,
          e = 'WebkitTransform' in t ? 'Webkit' : 'MozTransform' in t ? 'Moz' : 'msTransform' in t ? 'ms' : 'OTransform' in t ? 'O' : ''
        return e + 'Perspective' in t ? 'translate3d' : e + 'Transform' in t ? 'translate' : 'margin'
      })
    var a = (function () {
        var t = []
        function e() {
          var n = t.shift()
          n && n(e)
        }
        return function (n) {
          t.push(n), 1 == t.length && e()
        }
      })(),
      u = (function () {
        var t = ['Webkit', 'O', 'Moz', 'ms'],
          e = {}
        function n(n) {
          return (
            (n = n.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function (t, e) {
              return e.toUpperCase()
            })),
            e[n] ||
              (e[n] = (function (e) {
                var n = document.body.style
                if (e in n) return e
                for (var i, r = t.length, o = e.charAt(0).toUpperCase() + e.slice(1); r--; ) if ((i = t[r] + o) in n) return i
                return e
              })(n))
          )
        }
        function i(t, e, i) {
          ;(e = n(e)), (t.style[e] = i)
        }
        return function (t, e) {
          var n,
            r,
            o = arguments
          if (2 == o.length) for (n in e) void 0 !== (r = e[n]) && e.hasOwnProperty(n) && i(t, n, r)
          else i(t, o[1], o[2])
        }
      })()
    function l(t, e) {
      return ('string' == typeof t ? t : d(t)).indexOf(' ' + e + ' ') >= 0
    }
    function c(t, e) {
      var n = d(t),
        i = n + e
      l(n, e) || (t.className = i.substring(1))
    }
    function f(t, e) {
      var n,
        i = d(t)
      l(t, e) && ((n = i.replace(' ' + e + ' ', ' ')), (t.className = n.substring(1, n.length - 1)))
    }
    function d(t) {
      return (' ' + ((t && t.className) || '') + ' ').replace(/\s+/gi, ' ')
    }
    function h(t) {
      t && t.parentNode && t.parentNode.removeChild(t)
    }
    return n
  })
var solNav = document.getElementsByClassName('solution-nav'),
  solSection = document.getElementsByClassName('section-solt'),
  cardCase = document.getElementsByClassName('card-case'),
  menu = document.getElementById('menu'),
  popUpCountry = document.getElementsByClassName('country-list'),
  popUpContent = document.getElementsByClassName('popup-content'),
  closeBtnModal = document.getElementsByClassName('close-btn'),
  sections = document.querySelectorAll('section')
NProgress.start()
var interval = setInterval(function () {
  NProgress.inc()
}, 1e3)
for (
  $(window).on('unload', function () {
    NProgress.start()
  }),
    (function (t) {
      t(window).scroll(function (e) {
        t('.navbar-main')[t(window).scrollTop() >= 100 ? 'addClass' : 'removeClass']('active')
      })
    })(jQuery),
    (function ($) {
      $(window).scroll(function (e) {
        $('.project-sneakpeak')[$(window).scrollTop() >= 100 ? 'addClass' : 'removeClass']('inactive')
      })
    })(jQuery),
    $('.ham-container').on('click', function () {
      0 == $(menu).css('opacity') ? $('html').addClass('open') : $('html').removeClass('open')
    }),
    $('.search-blog').click(function () {
      $('.search-bar').is(':hidden') ? ($('.search-bar').addClass('active'), $('.search-blog').addClass('active'), $('.icon-search').addClass('active')) : ($('.search-bar').removeClass('active'), $('.search-blog').removeClass('active'), $('.icon-search').removeClass('active'))
    }),
    $('.title').fadeOut(),
    $(window).on('load', function () {
      $('body').show(), AOS.init(), clearInterval(interval), NProgress.done(), $('.title').fadeIn(), $('.counter').countUp({ time: 2e3, delay: 10 })
    }),
    Scrollbar.initAll(),
    $('.indicator').on('click', function () {
      AOS.refresh()
    }),
    $('#sharearticle').on('click', function () {
      $('#scomed-achor-inner').is(':hidden') ? $('#scomed-achor-inner').slideDown(100) : $('#scomed-achor-inner').slideUp(100)
    }),
    p = 0;
  p < solNav.length;
  p++
)
  solNav[p].onclick = function (t) {
    this.classList.add('na-active'), $(this).siblings().removeClass('na-active'), t <= solNav.length - 1 && (solSection[t].classList.add('section-active'), $(solSection[t]).siblings('.section-solt').removeClass('section-active'))
  }.bind(solNav[p], p)
if (
  ($(document).ready(function () {
    'use strict'
    $('form.form-cust').submit(function (t) {
      var e = $("input[name='name']").val()
      $("input[name='email']").val(), $("textarea[name='question']").val()
      $('#name-form').text(e), AOS.refresh()
    })
    const t = document.querySelectorAll('.see-more a')
    var e = 0,
      n = $(window).height(),
      i = 2 * n,
      r = 3 * n,
      o = 4 * n
    for (const e of t) e.addEventListener('click', a)
    for (var s = 0; s < sections.length; s++) sections[s]
    function a(t) {
      ;(e += 1) > sections.length ? (e = 0) : e > sections.length - 2 && $('.see-more').fadeOut(300), t.preventDefault()
      const n = sections[e].offsetTop
      scroll({ top: n, behavior: 'smooth' }),
        $(window).scroll(function () {
          0 === $(window).scrollTop() ? ($('.see-more').fadeIn(300), (e = 0)) : $(window).scrollTop() > i ? (e = 2) : $(window).scrollTop() > r ? (e = 3) : $(window).scrollTop() > o && (e = 4)
        })
      if (window.matchMedia('(min-width: 2000px)').matches) {
        const t = sections[e].offsetTop - 100
        scroll({ top: t - 100, behavior: 'smooth' })
      }
    }
    $(window).scroll(function () {
      $(window).scrollTop() > o ? $('.see-more').fadeOut(300) : 0 === $(window).scrollTop() && $('.see-more').fadeIn(300)
    })
  }),
  navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i))
)
  for (var i = cardCase.length - 1; i >= 0; i--) {
    var cardContent = $(this).children('.card-content')
    $(cardCase[i]).on('tapHold', function () {
      'none' == cardContent.display ? $(cardCase[i]).addClass('active') : $(cardCase[i]).removeClass('active')
    })
  }

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (t) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var e = $(this.hash)
      ;(e = e.length ? e : $('[name=' + this.hash.slice(1) + ']')).length &&
        (t.preventDefault(),
        $('html, body').animate({ scrollTop: e.offset().top }, 1e3, function () {
          var t = $(e)
          if ((t.focus(), t.is(':focus'))) return !1
          t.attr('tabindex', '-1'), t.focus()
        }))
    }
  })

$('#ctaButton').on('click', function () {
  $('#ctaForm').toggleClass('active')
})

$('#close').on('click', function () {
  $('#ctaForm').removeClass('active')
})

for (let c = 0; c < popUpCountry.length; c++) {
  popUpCountry[c].onclick = function (t) {
    this.classList.add('active'), $(this).siblings().removeClass('active'), $('#modals').addClass('active'), t <= popUpCountry.length - 1 && (popUpContent[t].classList.add('active'), $(popUpContent[t]).siblings('modals').removeClass('active'))
  }.bind(popUpCountry[c], c)
}
const closeModal = () => {
  $('#modals').removeClass('active')
  $('.popup-content').removeClass('active')
  $('.country-list').removeClass('active')
}
if (closeBtnModal) {
  for (let c = 0; c < closeBtnModal.length; c++) {
    closeBtnModal[c].addEventListener('click', closeModal, false)
  }
}
