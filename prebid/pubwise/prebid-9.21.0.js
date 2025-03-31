/* prebid.js v9.21.0
Updated: 2025-03-31
Modules: pubwiseBidAdapter, schain, userId, pubwiseAnalyticsAdapter */
if (window.pbjs && window.pbjs.libLoaded)
  try {
    window.pbjs.getConfig("debug") &&
      console.warn(
        "Attempted to load a copy of Prebid.js that clashes with the existing 'pbjs' instance. Load aborted."
      );
  } catch (e) {}
else
  (function () {
    (() => {
      var r,
        t = {
          433: (r, t, e) => {
            function n(r, t, e, n, o) {
              for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
                r = r ? r[t[n]] : o;
              return r === o ? e : r;
            }
            e.d(t, { A: () => n });
          },
          128: (r) => {
            /*
             * @license MIT
             * Fun Hooks v0.9.10
             * (c) @snapwich
             */
            (u.SYNC = 1), (u.ASYNC = 2), (u.QUEUE = 4);
            var t = "fun-hooks";
            var e = Object.freeze({ useProxy: !0, ready: 0 }),
              n = new WeakMap(),
              o =
                "2,1,0" ===
                [1]
                  .reduce(function (r, t, e) {
                    return [r, t, e];
                  }, 2)
                  .toString()
                  ? Array.prototype.reduce
                  : function (r, t) {
                      var e,
                        n = Object(this),
                        o = n.length >>> 0,
                        i = 0;
                      if (t) e = t;
                      else {
                        for (; i < o && !(i in n); ) i++;
                        e = n[i++];
                      }
                      for (; i < o; ) i in n && (e = r(e, n[i], i, n)), i++;
                      return e;
                    };
            function i(r, t) {
              return Array.prototype.slice.call(r, t);
            }
            var f =
              Object.assign ||
              function (r) {
                return o.call(
                  i(arguments, 1),
                  function (r, t) {
                    return (
                      t &&
                        Object.keys(t).forEach(function (e) {
                          r[e] = t[e];
                        }),
                      r
                    );
                  },
                  r
                );
              };
            function u(r) {
              var a,
                c = {},
                l = [];
              function p(r, t) {
                return "function" == typeof r
                  ? h.call(null, "sync", r, t)
                  : "string" == typeof r && "function" == typeof t
                  ? h.apply(null, arguments)
                  : "object" == typeof r
                  ? y.apply(null, arguments)
                  : void 0;
              }
              function y(r, t, e) {
                var n = !0;
                void 0 === t && ((t = Object.getOwnPropertyNames(r)), (n = !1));
                var o = {},
                  i = ["constructor"];
                do {
                  (t = t.filter(function (t) {
                    return !(
                      "function" != typeof r[t] ||
                      -1 !== i.indexOf(t) ||
                      t.match(/^_/)
                    );
                  })).forEach(function (t) {
                    var n = t.split(":"),
                      i = n[0],
                      f = n[1] || "sync";
                    if (!o[i]) {
                      var u = r[i];
                      o[i] = r[i] = h(f, u, e ? [e, i] : void 0);
                    }
                  }),
                    (r = Object.getPrototypeOf(r));
                } while (n && r);
                return o;
              }
              function s(r) {
                var e = Array.isArray(r) ? r : r.split(".");
                return o.call(
                  e,
                  function (n, o, i) {
                    var f = n[o],
                      u = !1;
                    return (
                      f ||
                      (i === e.length - 1
                        ? (a ||
                            l.push(function () {
                              u ||
                                console.warn(
                                  t +
                                    ": referenced '" +
                                    r +
                                    "' but it was never created"
                                );
                            }),
                          (n[o] = v(function (r) {
                            (n[o] = r), (u = !0);
                          })))
                        : (n[o] = {}))
                    );
                  },
                  c
                );
              }
              function v(r) {
                var t = [],
                  e = [],
                  o = function () {},
                  i = {
                    before: function (r, e) {
                      return a.call(this, t, "before", r, e);
                    },
                    after: function (r, t) {
                      return a.call(this, e, "after", r, t);
                    },
                    getHooks: function (r) {
                      var n = t.concat(e);
                      "object" == typeof r &&
                        (n = n.filter(function (t) {
                          return Object.keys(r).every(function (e) {
                            return t[e] === r[e];
                          });
                        }));
                      try {
                        f(n, {
                          remove: function () {
                            return (
                              n.forEach(function (r) {
                                r.remove();
                              }),
                              this
                            );
                          },
                        });
                      } catch (r) {
                        console.error(
                          "error adding `remove` to array, did you modify Array.prototype?"
                        );
                      }
                      return n;
                    },
                    removeAll: function () {
                      return this.getHooks().remove();
                    },
                  },
                  u = {
                    install: function (n, i, f) {
                      (this.type = n), (o = f), f(t, e), r && r(i);
                    },
                  };
                return n.set(i.after, u), i;
                function a(r, n, i, f) {
                  var u = {
                    hook: i,
                    type: n,
                    priority: f || 10,
                    remove: function () {
                      var n = r.indexOf(u);
                      -1 !== n && (r.splice(n, 1), o(t, e));
                    },
                  };
                  return (
                    r.push(u),
                    r.sort(function (r, t) {
                      return t.priority - r.priority;
                    }),
                    o(t, e),
                    this
                  );
                }
              }
              function h(e, o, c) {
                var p = o.after && n.get(o.after);
                if (p) {
                  if (p.type !== e)
                    throw t + ": recreated hookable with different type";
                  return o;
                }
                var y,
                  h,
                  d = c ? s(c) : v(),
                  b = {
                    get: function (r, t) {
                      return d[t] || Reflect.get.apply(Reflect, arguments);
                    },
                  };
                return (
                  a || l.push(g),
                  r.useProxy && "function" == typeof Proxy && Proxy.revocable
                    ? (h = new Proxy(o, b))
                    : ((h = function () {
                        return b.apply
                          ? b.apply(o, this, i(arguments))
                          : o.apply(this, arguments);
                      }),
                      f(h, d)),
                  n.get(h.after).install(e, h, function (r, t) {
                    var n,
                      o = [];
                    r.length || t.length
                      ? (r.forEach(f),
                        (n = o.push(void 0) - 1),
                        t.forEach(f),
                        (y = function (r, t, f) {
                          var u,
                            a = 0,
                            c =
                              "async" === e &&
                              "function" == typeof f[f.length - 1] &&
                              f.pop();
                          function l(r) {
                            "sync" === e
                              ? (u = r)
                              : c && c.apply(null, arguments);
                          }
                          function p(r) {
                            if (o[a]) {
                              var n = i(arguments);
                              return (
                                (p.bail = l), n.unshift(p), o[a++].apply(t, n)
                              );
                            }
                            "sync" === e
                              ? (u = r)
                              : c && c.apply(null, arguments);
                          }
                          return (
                            (o[n] = function () {
                              var n = i(arguments, 1);
                              "async" === e && c && (delete p.bail, n.push(p));
                              var o = r.apply(t, n);
                              "sync" === e && p(o);
                            }),
                            p.apply(null, f),
                            u
                          );
                        }))
                      : (y = void 0);
                    function f(r) {
                      o.push(r.hook);
                    }
                    g();
                  }),
                  h
                );
                function g() {
                  !a &&
                  ("sync" !== e || r.ready & u.SYNC) &&
                  ("async" !== e || r.ready & u.ASYNC)
                    ? "sync" !== e && r.ready & u.QUEUE
                      ? (b.apply = function () {
                          var r = arguments;
                          l.push(function () {
                            h.apply(r[1], r[2]);
                          });
                        })
                      : (b.apply = function () {
                          throw t + ": hooked function not ready";
                        })
                    : (b.apply = y);
                }
              }
              return (
                (r = f({}, e, r)).ready
                  ? (p.ready = function () {
                      (a = !0),
                        (function (r) {
                          for (var t; (t = r.shift()); ) t();
                        })(l);
                    })
                  : (a = !0),
                (p.get = s),
                p
              );
            }
            r.exports = u;
          },
          172: (r, t, e) => {
            function n(r, t, e) {
              t.split && (t = t.split("."));
              for (
                var n, o, i = 0, f = t.length, u = r;
                i < f &&
                "__proto__" != (o = "" + t[i++]) &&
                "constructor" !== o &&
                "prototype" !== o;

              )
                u = u[o] =
                  i === f
                    ? e
                    : typeof (n = u[o]) == typeof t
                    ? n
                    : 0 * t[i] != 0 || ~("" + t[i]).indexOf(".")
                    ? {}
                    : [];
            }
            e.d(t, { J: () => n });
          },
          751: (r, t, e) => {
            function n(r) {
              var t, e, o;
              if (Array.isArray(r)) {
                for (e = Array((t = r.length)); t--; )
                  e[t] = (o = r[t]) && "object" == typeof o ? n(o) : o;
                return e;
              }
              if ("[object Object]" === Object.prototype.toString.call(r)) {
                for (t in ((e = {}), r))
                  "__proto__" === t
                    ? Object.defineProperty(e, t, {
                        value: n(r[t]),
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                      })
                    : (e[t] = (o = r[t]) && "object" == typeof o ? n(o) : o);
                return e;
              }
              return r;
            }
            e.d(t, { Q: () => n });
          },
        },
        e = {};
      function n(r) {
        var o = e[r];
        if (void 0 !== o) return o.exports;
        var i = (e[r] = { exports: {} });
        return t[r](i, i.exports, n), i.exports;
      }
      (n.m = t),
        (r = []),
        (n.O = (t, e, o, i) => {
          if (!e) {
            var f = 1 / 0;
            for (l = 0; l < r.length; l++) {
              (e = r[l][0]), (o = r[l][1]), (i = r[l][2]);
              for (var u = !0, a = 0; a < e.length; a++)
                (!1 & i || f >= i) &&
                Object.keys(n.O).every((r) => n.O[r](e[a]))
                  ? e.splice(a--, 1)
                  : ((u = !1), i < f && (f = i));
              if (u) {
                r.splice(l--, 1);
                var c = o();
                void 0 !== c && (t = c);
              }
            }
            return t;
          }
          i = i || 0;
          for (var l = r.length; l > 0 && r[l - 1][2] > i; l--) r[l] = r[l - 1];
          r[l] = [e, o, i];
        }),
        (n.n = (r) => {
          var t = r && r.__esModule ? () => r.default : () => r;
          return n.d(t, { a: t }), t;
        }),
        (n.d = (r, t) => {
          for (var e in t)
            n.o(t, e) &&
              !n.o(r, e) &&
              Object.defineProperty(r, e, { enumerable: !0, get: t[e] });
        }),
        (n.o = (r, t) => Object.prototype.hasOwnProperty.call(r, t)),
        (() => {
          var r = { 673: 0 };
          n.O.j = (t) => 0 === r[t];
          var t = (t, e) => {
              var o,
                i,
                f = e[0],
                u = e[1],
                a = e[2],
                c = 0;
              if (f.some((t) => 0 !== r[t])) {
                for (o in u) n.o(u, o) && (n.m[o] = u[o]);
                if (a) var l = a(n);
              }
              for (t && t(e); c < f.length; c++)
                (i = f[c]), n.o(r, i) && r[i] && r[i][0](), (r[i] = 0);
              return n.O(l);
            },
            e = (self.pbjsChunk = self.pbjsChunk || []);
          e.forEach(t.bind(null, 0)), (e.push = t.bind(null, e.push.bind(e)));
        })();
      var o = n.O(void 0, [802, 85], () => n(635));
      o = n.O(o);
    })();
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [802],
      {
        789: (e, t, n) => {
          n.d(t, { A4: () => l, J7: () => f, Pg: () => g });
          var i = n(580),
            r = n(69),
            o = n(433),
            s = n(901),
            a = n(873),
            d = n(569);
          const c = (0, a.m)(),
            u = "outstream";
          function l(e) {
            const {
              url: t,
              config: n,
              id: a,
              callback: l,
              loaded: f,
              adUnitCode: g,
              renderNow: p,
            } = e;
            (this.url = t),
              (this.config = n),
              (this.handlers = {}),
              (this.id = a),
              (this.renderNow = p),
              (this.loaded = f),
              (this.cmd = []),
              (this.push = (e) => {
                "function" == typeof e
                  ? this.loaded
                    ? e.call()
                    : this.cmd.push(e)
                  : (0, r.vV)(
                      "Commands given to Renderer.push must be wrapped in a function"
                    );
              }),
              (this.callback =
                l ||
                (() => {
                  (this.loaded = !0), this.process();
                })),
              (this.render = function () {
                const e = arguments,
                  n = () => {
                    this._render
                      ? this._render.apply(this, e)
                      : (0, r.JE)(
                          "No render function was provided, please use .setRender on the renderer"
                        );
                  };
                !(function (e) {
                  const t = c.adUnits,
                    n = (0, s.I6)(t, (t) => t.code === e);
                  if (!n) return !1;
                  const i = (0, o.A)(n, "renderer"),
                    r = !!(i && i.url && i.render),
                    a = (0, o.A)(n, "mediaTypes.video.renderer"),
                    d = !!(a && a.url && a.render);
                  return !!(
                    (r && !0 !== i.backupOnly) ||
                    (d && !0 !== a.backupOnly)
                  );
                })(g)
                  ? p
                    ? n()
                    : (this.cmd.unshift(n),
                      (0, i.R)(t, d.tp, u, this.callback, this.documentContext))
                  : ((0, r.JE)(
                      `External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ${g}`
                    ),
                    n());
              }.bind(this));
          }
          function f(e) {
            return !(!e || (!e.url && !e.renderNow));
          }
          function g(e, t, n) {
            let i = null;
            e.config &&
              e.config.documentResolver &&
              (i = e.config.documentResolver(t, document, n)),
              i || (i = document),
              (e.documentContext = i),
              e.render(t, e.documentContext);
          }
          (l.install = function (e) {
            let {
              url: t,
              config: n,
              id: i,
              callback: r,
              loaded: o,
              adUnitCode: s,
              renderNow: a,
            } = e;
            return new l({
              url: t,
              config: n,
              id: i,
              callback: r,
              loaded: o,
              adUnitCode: s,
              renderNow: a,
            });
          }),
            (l.prototype.getConfig = function () {
              return this.config;
            }),
            (l.prototype.setRender = function (e) {
              this._render = e;
            }),
            (l.prototype.setEventHandlers = function (e) {
              this.handlers = e;
            }),
            (l.prototype.handleVideoEvent = function (e) {
              let { id: t, eventName: n } = e;
              "function" == typeof this.handlers[n] && this.handlers[n](),
                (0, r.OG)(`Prebid Renderer event for id ${t} type ${n}`);
            }),
            (l.prototype.process = function () {
              for (; this.cmd.length > 0; )
                try {
                  this.cmd.shift().call();
                } catch (e) {
                  (0, r.vV)("Error processing Renderer command: ", e);
                }
            });
        },
        811: (e, t, n) => {
          n.d(t, {
            DL: () => c,
            Ml: () => r,
            Ue: () => i,
            VJ: () => l,
            hE: () => u,
            hq: () => d,
            mo: () => a,
            pY: () => f,
            uc: () => s,
            yl: () => o,
          });
          const i = "accessDevice",
            r = "syncUser",
            o = "enrichEids",
            s = "fetchBids",
            a = "reportAnalytics",
            d = "transmitEids",
            c = "transmitUfpd",
            u = "transmitPreciseGeo",
            l = "transmitTid",
            f = "loadExternalScript";
        },
        441: (e, t, n) => {
          n.d(t, { s: () => r });
          var i = n(46);
          const r = (0, n(604).ZI)((e) => i.Ay.resolveAlias(e));
        },
        569: (e, t, n) => {
          n.d(t, { Tn: () => s, fW: () => o, tW: () => r, tp: () => i });
          const i = "prebid",
            r = "bidder",
            o = "userId",
            s = "analytics";
        },
        604: (e, t, n) => {
          n.d(t, {
            Dk: () => s,
            Ii: () => o,
            TQ: () => g,
            XG: () => u,
            ZI: () => p,
            Zw: () => c,
            bt: () => l,
            e3: () => f,
            iK: () => a,
            q7: () => d,
          });
          var i = n(569),
            r = n(214);
          const o = "component",
            s = o + "Type",
            a = o + "Name",
            d = "adapterCode",
            c = "storageType",
            u = "configName",
            l = "syncType",
            f = "syncUrl",
            g = "_config";
          function p(e) {
            return function (t, n, r) {
              const c = { [s]: t, [a]: n, [o]: `${t}.${n}` };
              return t === i.tW && (c[d] = e(n)), h(Object.assign(c, r));
            };
          }
          const h = (0, r.A_)("sync", (e) => e);
        },
        139: (e, t, n) => {
          n.d(t, { io: () => s, qB: () => o });
          var i = n(69),
            r = n(604);
          const [o, s] = (function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : (0, i.h0)("Activity control:");
            const t = {};
            function n(e) {
              return (t[e] = t[e] || []);
            }
            function o(t, n, i, o) {
              let s;
              try {
                s = i(o);
              } catch (i) {
                e.logError(`Exception in rule ${n} for '${t}'`, i),
                  (s = { allow: !1, reason: i });
              }
              return (
                s &&
                Object.assign({ activity: t, name: n, component: o[r.Ii] }, s)
              );
            }
            const s = {};
            function a(t) {
              let {
                activity: n,
                name: i,
                allow: r,
                reason: o,
                component: a,
              } = t;
              const d = `${i} ${r ? "allowed" : "denied"} '${n}' for '${a}'${
                  o ? ":" : ""
                }`,
                c = s.hasOwnProperty(d);
              if (
                (c && clearTimeout(s[d]),
                (s[d] = setTimeout(() => delete s[d], 1e3)),
                !c)
              ) {
                const t = [d];
                o && t.push(o), (r ? e.logInfo : e.logWarn).apply(e, t);
              }
            }
            return [
              function (e, t, i) {
                let r =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : 10;
                const o = n(e),
                  s = o.findIndex((e) => {
                    let [t] = e;
                    return r < t;
                  }),
                  a = [r, t, i];
                return (
                  o.splice(s < 0 ? o.length : s, 0, a),
                  function () {
                    const e = o.indexOf(a);
                    e >= 0 && o.splice(e, 1);
                  }
                );
              },
              function (e, t) {
                let i, r;
                for (const [s, d, c] of n(e)) {
                  if (i !== s && r) break;
                  i = s;
                  const n = o(e, d, c, t);
                  if (n) {
                    if (!n.allow) return a(n), !1;
                    r = n;
                  }
                }
                return r && a(r), !0;
              },
            ];
          })();
        },
        75: (e, t, n) => {
          n.d(t, {
            $A: () => I,
            BS: () => N,
            Hh: () => $,
            Pk: () => q,
            Uc: () => B,
            XO: () => P,
            bw: () => D,
            n6: () => w,
            qn: () => U,
            vB: () => x,
            vW: () => O,
            vd: () => R,
          });
          var i = n(69),
            r = n(433),
            o = n(23),
            s = n(969),
            a = n(272),
            d = n(789),
            c = n(371),
            u = n(881),
            l = n(31),
            f = n(214),
            g = n(449),
            p = n(555),
            h = n(46),
            m = n(894);
          const {
              AD_RENDER_FAILED: b,
              AD_RENDER_SUCCEEDED: y,
              STALE_RENDER: v,
              BID_WON: E,
            } = s.qY,
            { EXCEPTION: A } = s.as,
            I = (0, f.A_)("sync", function (e) {
              return (
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : p.k.resolve()
              )
                .then((t) => t ?? u.n.findBidByAdId(e))
                .catch(() => {});
            }),
            w = (0, f.A_)("sync", function (e) {
              o.Ic(E, e), u.n.addWinningBid(e);
            });
          function T(e) {
            let { reason: t, message: n, bid: r, id: s } = e;
            const a = { reason: t, message: n };
            r && ((a.bid = r), (a.adId = r.adId)),
              s && (a.adId = s),
              (0, i.vV)(`Error rendering ad (id: ${s}): ${n}`),
              o.Ic(b, a);
          }
          function C(e) {
            let { doc: t, bid: n, id: i } = e;
            const r = { doc: t };
            n && (r.bid = n),
              i && (r.adId = i),
              h.Ay.callAdRenderSucceededBidder(n.adapterCode || n.bidder, n),
              o.Ic(y, r);
          }
          function B(e, t) {
            switch (e.event) {
              case s.qY.AD_RENDER_FAILED:
                T({
                  bid: t,
                  id: t.adId,
                  reason: e.info.reason,
                  message: e.info.message,
                });
                break;
              case s.qY.AD_RENDER_SUCCEEDED:
                C({ doc: null, bid: t, id: t.adId });
                break;
              default:
                (0, i.vV)(
                  `Received event request for unsupported event: '${e.event}' (adId: '${t.adId}')`
                );
            }
          }
          function O(e, t, n) {
            let { resizeFn: i, fireTrackers: r = g.vO } = n;
            if ("resizeNativeHeight" === e.action) i(e.width, e.height);
            else r(e, t);
          }
          const k = { [s.nl.EVENT]: B };
          k[s.nl.NATIVE] = O;
          const R = (0, f.A_)("sync", function (e, t) {
              const {
                  ad: n,
                  adUrl: r,
                  cpm: o,
                  originalCpm: s,
                  width: a,
                  height: d,
                } = e,
                c = { AUCTION_PRICE: s || o, CLICKTHROUGH: t?.clickUrl || "" };
              return {
                ad: (0, i.gM)(n, c),
                adUrl: (0, i.gM)(r, c),
                width: a,
                height: d,
              };
            }),
            S = (0, f.A_)("sync", function (e) {
              let {
                renderFn: t,
                resizeFn: n,
                bidResponse: r,
                options: o,
                doc: a,
                isMainDocument: d = a === document && !(0, i.al)(),
              } = e;
              const u = r.mediaType === c.G_;
              if (d || u)
                return void T({
                  reason: s.as.PREVENT_WRITING_ON_MAIN_DOCUMENT,
                  message: u
                    ? "Cannot render video ad without a renderer"
                    : "renderAd was prevented from writing to the main document.",
                  bid: r,
                  id: r.adId,
                });
              const l = R(r, o);
              t(Object.assign({ adId: r.adId }, l));
              const { width: f, height: g } = l;
              null != (f ?? g) && n(f, g);
            });
          function D(e) {
            let {
              renderFn: t,
              resizeFn: n,
              adId: d,
              options: c,
              bidResponse: u,
              doc: l,
            } = e;
            $(u, () => {
              if (null != u) {
                if (
                  u.status !== s.tl.RENDERED ||
                  ((0, i.JE)(`Ad id ${d} has been rendered before`),
                  o.Ic(v, u),
                  !(0, r.A)(
                    a.$W.getConfig("auctionOptions"),
                    "suppressStaleRender"
                  ))
                )
                  try {
                    S({
                      renderFn: t,
                      resizeFn: n,
                      bidResponse: u,
                      options: c,
                      doc: l,
                    });
                  } catch (e) {
                    T({
                      reason: s.as.EXCEPTION,
                      message: e.message,
                      id: d,
                      bid: u,
                    });
                  }
              } else
                T({
                  reason: s.as.CANNOT_FIND_AD,
                  message: `Cannot find ad '${d}'`,
                  id: d,
                });
            });
          }
          function U(e) {
            const t = (0, m.BO)(e.metrics);
            t.checkpoint("bidRender"),
              t.timeBetween("bidWon", "bidRender", "render.deferred"),
              t.timeBetween("auctionEnd", "bidRender", "render.pending"),
              t.timeBetween("requestBids", "bidRender", "render.e2e"),
              (e.status = s.tl.RENDERED);
          }
          S.before(function (e, t) {
            const { bidResponse: n, doc: i } = t;
            (0, d.J7)(n.renderer)
              ? ((0, d.Pg)(n.renderer, n, i),
                C({ doc: i, bid: n, id: n.adId }),
                e.bail())
              : e(t);
          }, 100);
          const _ = new WeakMap(),
            j = new WeakSet();
          function $(e, t) {
            null != e ? (_.set(e, t), e.deferRendering || x(e), q(e)) : t();
          }
          function q(e) {
            j.has(e) || (j.add(e), w(e));
          }
          function x(e) {
            const t = _.get(e);
            t && (t(), U(e), _.delete(e));
          }
          function N(e, t, n) {
            let r;
            function o(e, n) {
              T(Object.assign({ id: t, bid: r }, { reason: e, message: n }));
            }
            function a(t, n) {
              e.defaultView &&
                e.defaultView.frameElement &&
                (t && (e.defaultView.frameElement.width = t),
                n && (e.defaultView.frameElement.height = n));
            }
            const d =
              ((c = { resizeFn: a }),
              function (e, t, n) {
                k.hasOwnProperty(e) && k[e](t, n, c);
              });
            var c;
            function u(t) {
              t.ad
                ? (e.write(t.ad),
                  e.close(),
                  C({ doc: e, bid: r, adId: r.adId }))
                : (0, l.H)(r)
                    .then((n) =>
                      n(
                        t,
                        { sendMessage: (e, t) => d(e, t, r), mkFrame: i.hw },
                        e.defaultView
                      )
                    )
                    .then(
                      () => C({ doc: e, bid: r, adId: r.adId }),
                      (e) => {
                        o(e?.reason || s.as.EXCEPTION, e?.message),
                          e?.stack && (0, i.vV)(e);
                      }
                    );
              const n = document.createComment(
                `Creative ${r.creativeId} served by ${r.bidder} Prebid.js Header Bidding`
              );
              (0, i._s)(n, e, "html");
            }
            try {
              t && e
                ? I(t).then((i) => {
                    (r = i),
                      D({
                        renderFn: u,
                        resizeFn: a,
                        adId: t,
                        options: { clickUrl: n?.clickThrough },
                        bidResponse: i,
                        doc: e,
                      });
                  })
                : o(
                    s.as.MISSING_DOC_OR_ADID,
                    "missing " + (t ? "doc" : "adId")
                  );
            } catch (e) {
              o(A, e.message);
            }
          }
          function P() {
            if (!window.frames[s.IY])
              if (document.body) {
                const e = (0, i.CA)();
                (e.name = s.IY), document.body.appendChild(e);
              } else window.requestAnimationFrame(P);
          }
        },
        46: (e, t, n) => {
          n.d(t, { Ay: () => Z, pX: () => J });
          var i = n(69),
            r = n(433),
            o = n(449),
            s = n(115),
            a = n(44),
            d = n(272),
            c = n(214),
            u = n(901);
          let l = {};
          function f(e, t, n) {
            let i = (function (e, t) {
              let n = (l[e] = l[e] || { bidders: {} });
              return t ? (n.bidders[t] = n.bidders[t] || {}) : n;
            })(e, n);
            return (i[t] = (i[t] || 0) + 1), i[t];
          }
          function g(e) {
            return l?.[e]?.requestsCounter || 0;
          }
          function p(e, t) {
            return l?.[e]?.bidders?.[t]?.requestsCounter || 0;
          }
          function h(e, t) {
            return l?.[e]?.bidders?.[t]?.winsCounter || 0;
          }
          var m = n(934),
            b = n(916),
            y = n(23),
            v = n(969),
            E = n(894),
            A = n(881),
            I = n(569),
            w = n(139),
            T = n(811),
            C = n(604);
          const B = [
              "data",
              "ext.data",
              "yob",
              "gender",
              "keywords",
              "kwarray",
              "id",
              "buyeruid",
              "customdata",
            ]
              .map((e) => `user.${e}`)
              .concat("device.ext.cdep"),
            O = ["user.eids", "user.ext.eids"],
            k = [
              "user.geo.lat",
              "user.geo.lon",
              "device.geo.lat",
              "device.geo.lon",
            ],
            R = ["device.ip"],
            S = ["device.ipv6"];
          function D(e) {
            return Object.assign(
              {
                get() {},
                run(e, t, n, i, r) {
                  const o = n && n[i];
                  if (
                    (function (e) {
                      return (
                        null != e &&
                        ("object" != typeof e || Object.keys(e).length > 0)
                      );
                    })(o) &&
                    r()
                  ) {
                    const e = this.get(o);
                    void 0 === e ? delete n[i] : (n[i] = e);
                  }
                },
              },
              e
            );
          }
          function U(e) {
            return (
              e.forEach((e) => {
                e.paths = e.paths.map((e) => {
                  const t = e.split("."),
                    n = t.pop();
                  return [t.length > 0 ? t.join(".") : null, n];
                });
              }),
              function (t, n) {
                const i = [];
                for (
                  var o = arguments.length,
                    s = new Array(o > 2 ? o - 2 : 0),
                    a = 2;
                  a < o;
                  a++
                )
                  s[a - 2] = arguments[a];
                const d = (function (e) {
                  for (
                    var t = arguments.length,
                      n = new Array(t > 1 ? t - 1 : 0),
                      i = 1;
                    i < t;
                    i++
                  )
                    n[i - 1] = arguments[i];
                  return function (t) {
                    return (
                      e.hasOwnProperty(t.name) ||
                        (e[t.name] = !!t.applies(...n)),
                      e[t.name]
                    );
                  };
                })(t, ...s);
                return (
                  e.forEach((e) => {
                    if (!1 !== t[e.name])
                      for (const [o, s] of e.paths) {
                        const a = null == o ? n : (0, r.A)(n, o);
                        if (
                          (i.push(e.run(n, o, a, s, d.bind(null, e))),
                          !1 === t[e.name])
                        )
                          return;
                      }
                  }),
                  i.filter((e) => null != e)
                );
              }
            );
          }
          function _(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : w.io;
            return function (n) {
              return !t(e, n);
            };
          }
          function j() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : w.io;
            return [
              { name: T.DL, paths: B, applies: _(T.DL, e) },
              { name: T.hq, paths: O, applies: _(T.hq, e) },
              {
                name: T.hE,
                paths: k,
                applies: _(T.hE, e),
                get: (e) => Math.round(100 * (e + Number.EPSILON)) / 100,
              },
              {
                name: T.hE,
                paths: R,
                applies: _(T.hE, e),
                get: (e) =>
                  (function (e) {
                    if (!e) return null;
                    let t = e.split(".").map(Number);
                    if (4 != t.length) return null;
                    let n = [];
                    for (let e = 0; e < 4; e++) {
                      let t = Math.max(0, Math.min(8, 24 - 8 * e));
                      n.push((255 << (8 - t)) & 255);
                    }
                    return t.map((e, t) => e & n[t]).join(".");
                  })(e),
              },
              {
                name: T.hE,
                paths: S,
                applies: _(T.hE, e),
                get: (e) =>
                  (function (e) {
                    if (!e) return null;
                    let t = e.split(":").map((e) => parseInt(e, 16));
                    for (t = t.map((e) => (isNaN(e) ? 0 : e)); t.length < 8; )
                      t.push(0);
                    if (8 != t.length) return null;
                    let n = [];
                    for (let e = 0; e < 8; e++) {
                      let t = Math.max(0, Math.min(16, 64 - 16 * e));
                      n.push((65535 << (16 - t)) & 65535);
                    }
                    return t
                      .map((e, t) => e & n[t])
                      .map((e) => e.toString(16))
                      .join(":");
                  })(e),
              },
              { name: T.VJ, paths: ["source.tid"], applies: _(T.VJ, e) },
            ].map(D);
          }
          const $ = (function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : w.io;
            const t = U(j(e)),
              n = U(
                (function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : w.io;
                  return [
                    {
                      name: T.hq,
                      paths: ["userId", "userIdAsEids"],
                      applies: _(T.hq, e),
                    },
                    {
                      name: T.VJ,
                      paths: ["ortb2Imp.ext.tid"],
                      applies: _(T.VJ, e),
                    },
                  ].map(D);
                })(e)
              );
            return function (e) {
              const i = {};
              return {
                ortb2: (n) => (t(i, n, e), n),
                bidRequest: (t) => (n(i, t, e), t),
              };
            };
          })();
          (0, w.qB)(T.VJ, "enableTIDs config", () => {
            if (!d.$W.getConfig("enableTIDs"))
              return { allow: !1, reason: "TIDs are disabled" };
          });
          const q = "pbsBidAdapter",
            x = { CLIENT: "client", SERVER: "server" },
            N = { isAllowed: w.io, redact: $ };
          let P = {},
            W = (P.bidderRegistry = {}),
            V = (P.aliasRegistry = {}),
            M = [];
          d.$W.getConfig("s2sConfig", (e) => {
            e &&
              e.s2sConfig &&
              (M = (0, i.cy)(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig]);
          });
          var G = {};
          const F = (0, C.ZI)((e) => P.resolveAlias(e));
          const H = (0, c.A_)(
            "sync",
            function (e) {
              let {
                bidderCode: t,
                auctionId: n,
                bidderRequestId: o,
                adUnits: s,
                src: a,
                metrics: d,
              } = e;
              return s
                .reduce((e, s) => {
                  const c = s.bids.filter((e) => e.bidder === t);
                  return (
                    null == t &&
                      0 === c.length &&
                      null != s.s2sBid &&
                      c.push({ bidder: null }),
                    e.push(
                      c.reduce((e, c) => {
                        const u =
                          null ==
                          (c = Object.assign(
                            {},
                            c,
                            { ortb2Imp: (0, i.D9)({}, s.ortb2Imp, c.ortb2Imp) },
                            (0, i.SH)(s, [
                              "nativeParams",
                              "nativeOrtbRequest",
                              "mediaType",
                              "renderer",
                            ])
                          )).mediaTypes
                            ? s.mediaTypes
                            : c.mediaTypes;
                        return (
                          (0, i.wD)(u)
                            ? (c = Object.assign({}, c, { mediaTypes: u }))
                            : (0, i.vV)(
                                `mediaTypes is not correctly configured for adunit ${s.code}`
                              ),
                          "client" === a &&
                            (function (e, t) {
                              f(e, "requestsCounter", t);
                            })(s.code, t),
                          e.push(
                            Object.assign({}, c, {
                              adUnitCode: s.code,
                              transactionId: s.transactionId,
                              adUnitId: s.adUnitId,
                              sizes:
                                (0, r.A)(u, "banner.sizes") ||
                                (0, r.A)(u, "video.playerSize") ||
                                [],
                              bidId: c.bid_id || (0, i.s0)(),
                              bidderRequestId: o,
                              auctionId: n,
                              src: a,
                              metrics: d,
                              bidRequestsCount: g(s.code),
                              bidderRequestsCount: p(s.code, c.bidder),
                              bidderWinsCount: h(s.code, c.bidder),
                              deferBilling: !!s.deferBilling,
                            })
                          ),
                          e
                        );
                      }, [])
                    ),
                    e
                  );
                }, [])
                .reduce(i.Bq, [])
                .filter((e) => "" !== e);
            },
            "getBids"
          );
          const L = (0, c.A_)(
            "sync",
            function (e, t) {
              let { getS2SBidders: n = J } =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              if (null == t) return e;
              {
                const i = n(t);
                return e.filter((e) => i.has(e.bidder));
              }
            },
            "filterBidsForAdUnit"
          );
          const z = (0, c.A_)("sync", (e, t) => e, "setupAdUnitMediaTypes");
          function J(e) {
            (0, i.cy)(e) || (e = [e]);
            const t = new Set([null]);
            return (
              e
                .filter((e) => e && e.enabled)
                .flatMap((e) => e.bidders)
                .forEach((e) => t.add(e)),
              t
            );
          }
          const K = (0, c.A_)(
            "sync",
            function (e, t) {
              let { getS2SBidders: n = J } =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              const r = n(t);
              return (0, i.ZA)(e).reduce(
                (e, t) => (e[r.has(t) ? x.SERVER : x.CLIENT].push(t), e),
                { [x.CLIENT]: [], [x.SERVER]: [] }
              );
            },
            "partitionBidders"
          );
          function Q(e, t) {
            const n = W[e],
              i = n?.getSpec && n.getSpec();
            if (i && i[t] && "function" == typeof i[t]) return [i, i[t]];
          }
          function Y(e, t, n, r) {
            try {
              (0, i.fH)(`Invoking ${e}.${t}`);
              for (
                var o = arguments.length,
                  s = new Array(o > 4 ? o - 4 : 0),
                  a = 4;
                a < o;
                a++
              )
                s[a - 4] = arguments[a];
              d.$W.runWithBidder(e, r.bind(n, ...s));
            } catch (n) {
              (0, i.JE)(`Error calling ${t} of ${e}`);
            }
          }
          function X(e, t, n) {
            if (n?.source !== v.RW.SRC) {
              const i = Q(e, t);
              null != i && Y(e, t, ...i, n);
            }
          }
          (P.makeBidRequests = (0, c.A_)(
            "sync",
            function (e, t, n, r, s) {
              let a =
                  arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : {},
                c = arguments.length > 6 ? arguments[6] : void 0;
              (c = (0, E.BO)(c)),
                y.Ic(v.qY.BEFORE_REQUEST_BIDS, e),
                (0, o.nk)(e),
                e.forEach((e) => {
                  (0, i.Qd)(e.mediaTypes) || (e.mediaTypes = {}),
                    (e.bids = e.bids.filter(
                      (e) => !e.bidder || N.isAllowed(T.uc, F(I.tW, e.bidder))
                    )),
                    f(e.code, "requestsCounter");
                }),
                (e = z(e, s));
              let { [x.CLIENT]: l, [x.SERVER]: g } = K(e, M);
              d.$W.getConfig("bidderSequence") === d.Ov && (l = (0, i.k4)(l));
              const p = (0, m.EN)();
              let h = [];
              const A = a.global || {},
                w = a.bidder || {};
              function B(e, t) {
                const r = N.redact(null != t ? t : F(I.tW, e.bidderCode)),
                  o = Object.freeze(
                    r.ortb2(
                      (0, i.D9)({ source: { tid: n } }, A, w[e.bidderCode])
                    )
                  );
                return (
                  (e.ortb2 = o),
                  (e.bids = e.bids.map(
                    (e) => ((e.ortb2 = o), r.bidRequest(e))
                  )),
                  e
                );
              }
              M.forEach((r) => {
                const o = (function (e) {
                  return F(I.tp, q, { [C.XG]: e.configName });
                })(r);
                if (r && r.enabled && N.isAllowed(T.uc, o)) {
                  let { adUnits: s, hasModuleBids: a } = (function (e, t) {
                      let n = (0, i.Go)(e),
                        r = !1;
                      return (
                        n.forEach((e) => {
                          const n = e.bids.filter(
                            (e) =>
                              e.module === q &&
                              e.params?.configName === t.configName
                          );
                          1 === n.length
                            ? ((e.s2sBid = n[0]),
                              (r = !0),
                              (e.ortb2Imp = (0, i.D9)(
                                {},
                                e.s2sBid.ortb2Imp,
                                e.ortb2Imp
                              )))
                            : n.length > 1 &&
                              (0, i.JE)(
                                'Multiple "module" bids for the same s2s configuration; all will be ignored',
                                n
                              ),
                            (e.bids = L(e.bids, t).map(
                              (e) => ((e.bid_id = (0, i.s0)()), e)
                            ));
                        }),
                        (n = n.filter(
                          (e) => 0 !== e.bids.length || null != e.s2sBid
                        )),
                        { adUnits: n, hasModuleBids: r }
                      );
                    })(e, r),
                    d = (0, i.lk)();
                  (0 === g.length && a ? [null] : g).forEach((e) => {
                    const a = (0, i.s0)(),
                      u = c.fork(),
                      l = B(
                        {
                          bidderCode: e,
                          auctionId: n,
                          bidderRequestId: a,
                          uniquePbsTid: d,
                          bids: H({
                            bidderCode: e,
                            auctionId: n,
                            bidderRequestId: a,
                            adUnits: (0, i.Go)(s),
                            src: v.RW.SRC,
                            metrics: u,
                          }),
                          auctionStart: t,
                          timeout: r.timeout,
                          src: v.RW.SRC,
                          refererInfo: p,
                          metrics: u,
                        },
                        o
                      );
                    0 !== l.bids.length && h.push(l);
                  }),
                    s.forEach((e) => {
                      let t = e.bids.filter((e) =>
                        (0, u.I6)(h, (t) =>
                          (0, u.I6)(t.bids, (t) => t.bidId === e.bid_id)
                        )
                      );
                      e.bids = t;
                    }),
                    h.forEach((e) => {
                      void 0 === e.adUnitsS2SCopy &&
                        (e.adUnitsS2SCopy = s.filter(
                          (e) => e.bids.length > 0 || null != e.s2sBid
                        ));
                    });
                }
              });
              let O = (function (e) {
                let t = (0, i.Go)(e);
                return (
                  t.forEach((e) => {
                    e.bids = L(e.bids, null);
                  }),
                  (t = t.filter((e) => 0 !== e.bids.length)),
                  t
                );
              })(e);
              return (
                l.forEach((e) => {
                  const o = (0, i.s0)(),
                    a = c.fork(),
                    d = B({
                      bidderCode: e,
                      auctionId: n,
                      bidderRequestId: o,
                      bids: H({
                        bidderCode: e,
                        auctionId: n,
                        bidderRequestId: o,
                        adUnits: (0, i.Go)(O),
                        labels: s,
                        src: "client",
                        metrics: a,
                      }),
                      auctionStart: t,
                      timeout: r,
                      refererInfo: p,
                      metrics: a,
                    }),
                    u = W[e];
                  u ||
                    (0, i.vV)(
                      `Trying to make a request for bidder that does not exist: ${e}`
                    ),
                    u && d.bids && 0 !== d.bids.length && h.push(d);
                }),
                h.forEach((e) => {
                  b.mW.getConsentData() &&
                    (e.gdprConsent = b.mW.getConsentData()),
                    b.t6.getConsentData() &&
                      (e.uspConsent = b.t6.getConsentData()),
                    b.ad.getConsentData() &&
                      (e.gppConsent = b.ad.getConsentData());
                }),
                h
              );
            },
            "makeBidRequests"
          )),
            (P.callBids = function (e, t, n, r, o, s, c) {
              let u =
                arguments.length > 7 && void 0 !== arguments[7]
                  ? arguments[7]
                  : {};
              if (!t.length)
                return void (0, i.JE)(
                  "callBids executed with no bidRequests.  Were they filtered by labels or sizing?"
                );
              let [l, f] = t.reduce(
                (e, t) => (
                  e[Number(void 0 !== t.src && t.src === v.RW.SRC)].push(t), e
                ),
                [[], []]
              );
              var g = [];
              f.forEach((e) => {
                for (var t = -1, n = 0; n < g.length; ++n)
                  if (e.uniquePbsTid === g[n].uniquePbsTid) {
                    t = n;
                    break;
                  }
                t <= -1 && g.push(e);
              });
              let p = 0;
              M.forEach((e) => {
                if (e && g[p] && J(e).has(g[p].bidderCode)) {
                  const t = (0, a.g4)(
                    s,
                    o
                      ? { request: o.request.bind(null, "s2s"), done: o.done }
                      : void 0
                  );
                  let d = e.bidders;
                  const l = W[e.adapter];
                  let h = g[p].uniquePbsTid,
                    m = g[p].adUnitsS2SCopy,
                    b = f.filter((e) => e.uniquePbsTid === h);
                  if (l) {
                    let o = {
                      ad_units: m,
                      s2sConfig: e,
                      ortb2Fragments: u,
                      requestBidsTimeout: s,
                    };
                    if (o.ad_units.length) {
                      let e = b.map(
                        (e) => (
                          (e.start = (0, i.vE)()),
                          function (t) {
                            t || c(e.bidderRequestId), r.apply(e, arguments);
                          }
                        )
                      );
                      const s = (0, i.ZA)(o.ad_units).filter((e) =>
                        d.includes(e)
                      );
                      (0, i.OG)(
                        `CALLING S2S HEADER BIDDERS ==== ${
                          s.length > 0
                            ? s.join(", ")
                            : 'No bidder specified, using "ortb2Imp" definition(s) only'
                        }`
                      ),
                        b.forEach((e) => {
                          y.Ic(v.qY.BID_REQUESTED, { ...e, tid: e.auctionId });
                        }),
                        l.callBids(o, f, n, (t) => e.forEach((e) => e(t)), t);
                    }
                  } else (0, i.vV)("missing " + e.adapter);
                  p++;
                }
              }),
                l.forEach((e) => {
                  e.start = (0, i.vE)();
                  const t = W[e.bidderCode];
                  d.$W.runWithBidder(e.bidderCode, () => {
                    (0, i.OG)("CALLING BIDDER"), y.Ic(v.qY.BID_REQUESTED, e);
                  });
                  let u = (0, a.g4)(
                    s,
                    o
                      ? {
                          request: o.request.bind(null, e.bidderCode),
                          done: o.done,
                        }
                      : void 0
                  );
                  const l = r.bind(e);
                  try {
                    d.$W.runWithBidder(
                      e.bidderCode,
                      t.callBids.bind(
                        t,
                        e,
                        n,
                        l,
                        u,
                        () => c(e.bidderRequestId),
                        d.$W.callbackWithBidder(e.bidderCode)
                      )
                    );
                  } catch (t) {
                    (0, i.vV)(
                      `${e.bidderCode} Bid Adapter emitted an uncaught error when parsing their bidRequest`,
                      { e: t, bidRequest: e }
                    ),
                      l();
                  }
                });
            }),
            (P.videoAdapters = []),
            (P.registerBidAdapter = function (e, t) {
              let { supportedMediaTypes: n = [] } =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              e && t
                ? "function" == typeof e.callBids
                  ? ((W[t] = e),
                    b.o2.register(I.tW, t, e.getSpec?.().gvlid),
                    (0, u.mK)(n, "video") && P.videoAdapters.push(t),
                    (0, u.mK)(n, "native") && o.mT.push(t))
                  : (0, i.vV)(
                      "Bidder adaptor error for bidder code: " +
                        t +
                        "bidder must implement a callBids() function"
                    )
                : (0, i.vV)("bidAdapter or bidderCode not specified");
            }),
            (P.aliasBidAdapter = function (e, t, n) {
              if (void 0 === W[t]) {
                let r = W[e];
                if (void 0 === r) {
                  const n = [];
                  M.forEach((i) => {
                    if (i.bidders && i.bidders.length) {
                      const r = i && i.bidders;
                      i && (0, u.mK)(r, t) ? (V[t] = e) : n.push(e);
                    }
                  }),
                    n.forEach((e) => {
                      (0, i.vV)(
                        'bidderCode "' + e + '" is not an existing bidder.',
                        "adapterManager.aliasBidAdapter"
                      );
                    });
                } else
                  try {
                    let a,
                      d = (function (e) {
                        let t = [];
                        return (
                          (0, u.mK)(P.videoAdapters, e) && t.push("video"),
                          (0, u.mK)(o.mT, e) && t.push("native"),
                          t
                        );
                      })(e);
                    if (r.constructor.prototype != Object.prototype)
                      (a = new r.constructor()), a.setBidderCode(t);
                    else {
                      const { useBaseGvlid: o = !1 } = n || {};
                      let d = r.getSpec();
                      const c = o ? d.gvlid : n?.gvlid;
                      null == c &&
                        null != d.gvlid &&
                        (0, i.JE)(
                          `Alias '${t}' will NOT re-use the GVL ID of the original adapter ('${d.code}', gvlid: ${d.gvlid}). Functionality that requires TCF consent may not work as expected.`
                        );
                      let u = n && n.skipPbsAliasing;
                      (a = (0, s.xb)(
                        Object.assign({}, d, {
                          code: t,
                          gvlid: c,
                          skipPbsAliasing: u,
                        })
                      )),
                        (V[t] = e);
                    }
                    P.registerBidAdapter(a, t, { supportedMediaTypes: d });
                  } catch (t) {
                    (0, i.vV)(
                      e + " bidder does not currently support aliasing.",
                      "adapterManager.aliasBidAdapter"
                    );
                  }
              } else
                (0, i.OG)('alias name "' + t + '" has been already specified.');
            }),
            (P.resolveAlias = function (e) {
              let t,
                n = e;
              for (; V[n] && (!t || !t.has(n)); )
                (n = V[n]), (t = t || new Set()).add(n);
              return n;
            }),
            (P.registerAnalyticsAdapter = function (e) {
              let { adapter: t, code: n, gvlid: r } = e;
              t && n
                ? "function" == typeof t.enableAnalytics
                  ? ((t.code = n),
                    (G[n] = { adapter: t, gvlid: r }),
                    b.o2.register(I.Tn, n, r))
                  : (0, i.vV)(
                      `Prebid Error: Analytics adaptor error for analytics "${n}"\n        analytics adapter must implement an enableAnalytics() function`
                    )
                : (0, i.vV)(
                    "Prebid Error: analyticsAdapter or analyticsCode not specified"
                  );
            }),
            (P.enableAnalytics = function (e) {
              (0, i.cy)(e) || (e = [e]),
                e.forEach((e) => {
                  const t = G[e.provider];
                  t && t.adapter
                    ? N.isAllowed(T.mo, F(I.Tn, e.provider, { [C.TQ]: e })) &&
                      t.adapter.enableAnalytics(e)
                    : (0, i.vV)(
                        `Prebid Error: no analytics adapter found in registry for '${e.provider}'.`
                      );
                });
            }),
            (P.getBidAdapter = function (e) {
              return W[e];
            }),
            (P.getAnalyticsAdapter = function (e) {
              return G[e];
            }),
            (P.callTimedOutBidders = function (e, t, n) {
              (t = t.map(
                (t) => (
                  (t.params = (0, i.SB)(e, t.adUnitCode, t.bidder)),
                  (t.timeout = n),
                  t
                )
              )),
                (t = (0, i.$z)(t, "bidder")),
                Object.keys(t).forEach((e) => {
                  X(e, "onTimeout", t[e]);
                });
            }),
            (P.callBidWonBidder = function (e, t, n) {
              var r, o;
              (t.params = (0, i.SB)(n, t.adUnitCode, t.bidder)),
                (r = t.adUnitCode),
                (o = t.bidder),
                f(r, "winsCounter", o),
                X(e, "onBidWon", t);
            }),
            (P.triggerBilling = (() => {
              const e = new WeakSet();
              return (t) => {
                e.has(t) ||
                  (e.add(t),
                  t.source === v.RW.SRC && t.burl && i.mM.triggerPixel(t.burl),
                  X(t.bidder, "onBidBillable", t));
              };
            })()),
            (P.callSetTargetingBidder = function (e, t) {
              X(e, "onSetTargeting", t);
            }),
            (P.callBidViewableBidder = function (e, t) {
              X(e, "onBidViewable", t);
            }),
            (P.callBidderError = function (e, t, n) {
              X(e, "onBidderError", { error: t, bidderRequest: n });
            }),
            (P.callAdRenderSucceededBidder = function (e, t) {
              X(e, "onAdRenderSucceeded", t);
            }),
            (P.callDataDeletionRequest = (0, c.A_)("sync", function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              const r = "onDataDeletionRequest";
              Object.keys(W)
                .filter((e) => !V.hasOwnProperty(e))
                .forEach((e) => {
                  const n = Q(e, r);
                  if (null != n) {
                    const i = A.n.getBidsRequested().filter(
                      (t) =>
                        (function (e) {
                          const t = new Set();
                          for (; V.hasOwnProperty(e) && !t.has(e); )
                            t.add(e), (e = V[e]);
                          return e;
                        })(t.bidderCode) === e
                    );
                    Y(e, r, ...n, i, ...t);
                  }
                }),
                Object.entries(G).forEach((e) => {
                  let [n, o] = e;
                  const s = o?.adapter?.[r];
                  if ("function" == typeof s)
                    try {
                      s.apply(o.adapter, t);
                    } catch (e) {
                      (0, i.vV)(`error calling ${r} of ${n}`, e);
                    }
                });
            }));
          const Z = P;
        },
        115: (e, t, n) => {
          function i(e) {
            var t = e;
            return {
              callBids: function () {},
              setBidderCode: function (e) {
                t = e;
              },
              getBidderCode: function () {
                return t;
              },
            };
          }
          n.d(t, { xb: () => B, a$: () => T });
          var r = n(46),
            o = n(272),
            s = n(597),
            a = n(230),
            d = n(449),
            c = n(895),
            u = n(969),
            l = n(23),
            f = n(901),
            g = n(69),
            p = n(214),
            h = n(881),
            m = n(693),
            b = n(894),
            y = n(139),
            v = n(441),
            E = n(569),
            A = n(811);
          const I = ["cpm", "ttl", "creativeId", "netRevenue", "currency"],
            w = ["auctionId", "transactionId"];
          function T(e) {
            const t = Array.isArray(e.supportedMediaTypes)
              ? { supportedMediaTypes: e.supportedMediaTypes }
              : void 0;
            function n(e) {
              const n = B(e);
              r.Ay.registerBidAdapter(n, e.code, t);
            }
            n(e),
              Array.isArray(e.aliases) &&
                e.aliases.forEach((t) => {
                  let i,
                    o,
                    s = t;
                  (0, g.Qd)(t) &&
                    ((s = t.code), (i = t.gvlid), (o = t.skipPbsAliasing)),
                    (r.Ay.aliasRegistry[s] = e.code),
                    n(
                      Object.assign({}, e, {
                        code: s,
                        gvlid: i,
                        skipPbsAliasing: o,
                      })
                    );
                });
          }
          const C = (0, g.Bj)((e) => {
            let { bidderCode: t } = e;
            if ((0, y.io)(A.VJ, (0, v.s)(E.tW, t)))
              return { bidRequest: (e) => e, bidderRequest: (e) => e };
            function n(e, t, n) {
              return w.includes(t) ? null : Reflect.get(e, t, n);
            }
            function i(e, t) {
              const n = new Proxy(e, t);
              return (
                Object.entries(e)
                  .filter((e) => {
                    let [t, n] = e;
                    return "function" == typeof n;
                  })
                  .forEach((t) => {
                    let [i, r] = t;
                    return (n[i] = r.bind(e));
                  }),
                n
              );
            }
            const r = (0, g.Bj)(
              (e) => i(e, { get: n }),
              (e) => e.bidId
            );
            return {
              bidRequest: r,
              bidderRequest: (e) =>
                i(e, {
                  get: (t, i, o) => ("bids" === i ? e.bids.map(r) : n(t, i, o)),
                }),
            };
          });
          function B(e) {
            return Object.assign(new i(e.code), {
              getSpec: function () {
                return Object.freeze(Object.assign({}, e));
              },
              registerSyncs: t,
              callBids: function (n, i, a, p, y, v) {
                if (!Array.isArray(n.bids)) return;
                const E = C(n),
                  A = {};
                function T(e, t) {
                  const n = (0, b.BO)(t.metrics);
                  n.checkpoint("addBidResponse"),
                    (A[e] = !0),
                    n.measureTime("addBidResponse.validate", () =>
                      (function (e, t) {
                        let { index: n = h.n.index } =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {};
                        function i() {
                          let e = Object.keys(t);
                          return I.every(
                            (n) =>
                              (0, f.mK)(e, n) &&
                              !(0, f.mK)([void 0, null], t[n])
                          );
                        }
                        function r(e) {
                          return `Invalid bid from ${t.bidderCode}. Ignoring bid: ${e}`;
                        }
                        if (!e)
                          return (
                            (0, g.JE)(
                              "No adUnitCode was supplied to addBidResponse."
                            ),
                            !1
                          );
                        if (!t)
                          return (
                            (0, g.JE)(
                              `Some adapter tried to add an undefined bid for ${e}.`
                            ),
                            !1
                          );
                        if (!i())
                          return (
                            (0, g.vV)(
                              r(
                                `Bidder ${t.bidderCode} is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.`
                              )
                            ),
                            !1
                          );
                        if (
                          "native" === t.mediaType &&
                          !(0, d.Bm)(t, { index: n })
                        )
                          return (
                            (0, g.vV)(
                              r("Native bid missing some required properties.")
                            ),
                            !1
                          );
                        if (
                          "video" === t.mediaType &&
                          !(0, c.vk)(t, { index: n })
                        )
                          return (
                            (0, g.vV)(
                              r(
                                "Video bid does not have required vastUrl or renderer property"
                              )
                            ),
                            !1
                          );
                        if (
                          "banner" === t.mediaType &&
                          !(function (e, t) {
                            let { index: n = h.n.index } =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {};
                            if (
                              (t.width || 0 === parseInt(t.width, 10)) &&
                              (t.height || 0 === parseInt(t.height, 10))
                            )
                              return (
                                (t.width = parseInt(t.width, 10)),
                                (t.height = parseInt(t.height, 10)),
                                !0
                              );
                            const i = n.getBidRequest(t),
                              r = n.getMediaTypes(t),
                              o =
                                (i && i.sizes) ||
                                (r && r.banner && r.banner.sizes),
                              s = (0, g.kK)(o);
                            if (1 === s.length) {
                              const [e, n] = s[0].split("x");
                              return (
                                (t.width = parseInt(e, 10)),
                                (t.height = parseInt(n, 10)),
                                !0
                              );
                            }
                            return !1;
                          })(e, t, { index: n })
                        )
                          return (
                            (0, g.vV)(
                              r("Banner bids require a width and height")
                            ),
                            !1
                          );
                        return !0;
                      })(e, t)
                    )
                      ? i(e, t)
                      : i.reject(e, t, u.Tf.INVALID);
                }
                const B = [];
                function O() {
                  a(),
                    o.$W.runWithBidder(e.code, () => {
                      l.Ic(u.qY.BIDDER_DONE, n),
                        t(B, n.gdprConsent, n.uspConsent, n.gppConsent);
                    });
                }
                const R = D(n).measureTime("validate", () =>
                  n.bids.filter((t) =>
                    (function (t) {
                      if (!e.isBidRequestValid(t))
                        return (
                          (0, g.JE)(
                            `Invalid bid sent to bidder ${
                              e.code
                            }: ${JSON.stringify(t)}`
                          ),
                          !1
                        );
                      return !0;
                    })(E.bidRequest(t))
                  )
                );
                if (0 === R.length) return void O();
                const U = {};
                R.forEach((e) => {
                  (U[e.bidId] = e),
                    e.adUnitCode || (e.adUnitCode = e.placementCode);
                }),
                  k(e, R, n, p, v, {
                    onRequest: (e) => l.Ic(u.qY.BEFORE_BIDDER_HTTP, n, e),
                    onResponse: (t) => {
                      y(e.code), B.push(t);
                    },
                    onPaapi: (e) => {
                      const t = U[e.bidId];
                      t
                        ? S(t, e)
                        : (0, g.JE)(
                            "Received fledge auction configuration for an unknown bidId",
                            e
                          );
                    },
                    onError: (t, i) => {
                      i.timedOut || y(e.code),
                        r.Ay.callBidderError(e.code, i, n),
                        l.Ic(u.qY.BIDDER_ERROR, { error: i, bidderRequest: n }),
                        (0, g.vV)(
                          `Server call for ${e.code} failed: ${t} ${i.status}. Continuing without bids.`
                        );
                    },
                    onBid: (t) => {
                      const n = U[t.requestId];
                      if (n) {
                        if (
                          ((t.adapterCode = n.bidder),
                          (function (e, t) {
                            let n =
                                m.u.get(t, "allowAlternateBidderCodes") || !1,
                              i = m.u.get(t, "allowedAlternateBidderCodes");
                            if (
                              e &&
                              t &&
                              t !== e &&
                              ((i = (0, g.cy)(i)
                                ? i
                                    .map((e) => e.trim().toLowerCase())
                                    .filter((e) => !!e)
                                    .filter(g.hj)
                                : i),
                              !n ||
                                ((0, g.cy)(i) &&
                                  "*" !== i[0] &&
                                  !i.includes(e)))
                            )
                              return !0;
                            return !1;
                          })(t.bidderCode, n.bidder))
                        )
                          return (
                            (0, g.JE)(
                              `${t.bidderCode} is not a registered partner or known bidder of ${n.bidder}, hence continuing without bid. If you wish to support this bidder, please mark allowAlternateBidderCodes as true in bidderSettings.`
                            ),
                            void i.reject(
                              n.adUnitCode,
                              t,
                              u.Tf.BIDDER_DISALLOWED
                            )
                          );
                        (t.originalCpm = t.cpm),
                          (t.originalCurrency = t.currency),
                          (t.meta = t.meta || Object.assign({}, t[n.bidder])),
                          (t.deferBilling = n.deferBilling),
                          (t.deferRendering =
                            t.deferBilling &&
                            (t.deferRendering ??
                              "function" != typeof e.onBidBillable));
                        const r = Object.assign(
                          (0, s.O)(u.XQ.GOOD, n),
                          t,
                          (0, g.Up)(n, w)
                        );
                        T(n.adUnitCode, r);
                      } else
                        (0, g.JE)(
                          `Bidder ${e.code} made bid for unknown request ID: ${t.requestId}. Ignoring.`
                        ),
                          i.reject(null, t, u.Tf.INVALID_REQUEST_ID);
                    },
                    onCompletion: O,
                  });
              },
            });
            function t(t, n, i, r) {
              R(e, t, n, i, r);
            }
          }
          const O = ["bids", "paapi"],
            k = (0, p.A_)(
              "sync",
              function (e, t, n, i, r, o) {
                let {
                  onRequest: s,
                  onResponse: a,
                  onPaapi: d,
                  onError: c,
                  onBid: u,
                  onCompletion: l,
                } = o;
                const f = D(n);
                l = f.startTiming("total").stopBefore(l);
                const p = C(n);
                let h = f.measureTime("buildRequests", () =>
                  e.buildRequests(t.map(p.bidRequest), p.bidderRequest(n))
                );
                if (!h || 0 === h.length) return void l();
                Array.isArray(h) || (h = [h]);
                const b = (0, g.U6)(l, h.length);
                h.forEach((t) => {
                  const n = f.fork();
                  function o(e) {
                    null != e && (e.metrics = n.fork().renameWith()), u(e);
                  }
                  const l = r(function (i, r) {
                      h();
                      try {
                        i = JSON.parse(i);
                      } catch (e) {}
                      (i = {
                        body: i,
                        headers: { get: r.getResponseHeader.bind(r) },
                      }),
                        a(i);
                      try {
                        i = n.measureTime("interpretResponse", () =>
                          e.interpretResponse(i, t)
                        );
                      } catch (t) {
                        return (
                          (0, g.vV)(
                            `Bidder ${e.code} failed to interpret the server's response. Continuing without bids`,
                            null,
                            t
                          ),
                          void b()
                        );
                      }
                      let s, c;
                      i && !Object.keys(i).some((e) => !O.includes(e))
                        ? ((s = i.bids), (c = i.paapi))
                        : (s = i),
                        (0, g.cy)(c) && c.forEach(d),
                        s && ((0, g.cy)(s) ? s.forEach(o) : o(s)),
                        b();
                    }),
                    p = r(function (e, t) {
                      h(), c(e, t), b();
                    });
                  s(t);
                  const h = n.startTiming("net");
                  function I(n) {
                    const i = t.options;
                    return Object.assign(n, i, {
                      browsingTopics:
                        !(
                          i?.hasOwnProperty("browsingTopics") &&
                          !i.browsingTopics
                        ) &&
                        (m.u.get(e.code, "topicsHeader") ?? !0) &&
                        (0, y.io)(A.DL, (0, v.s)(E.tW, e.code)),
                    });
                  }
                  switch (t.method) {
                    case "GET":
                      i(
                        `${t.url}${(function (e) {
                          if (e)
                            return `?${
                              "object" == typeof e ? (0, g.bL)(e) : e
                            }`;
                          return "";
                        })(t.data)}`,
                        { success: l, error: p },
                        void 0,
                        I({ method: "GET", withCredentials: !0 })
                      );
                      break;
                    case "POST":
                      i(
                        t.url,
                        { success: l, error: p },
                        "string" == typeof t.data
                          ? t.data
                          : JSON.stringify(t.data),
                        I({
                          method: "POST",
                          contentType: "text/plain",
                          withCredentials: !0,
                        })
                      );
                      break;
                    default:
                      (0, g.JE)(
                        `Skipping invalid request from ${e.code}. Request type ${t.type} must be GET or POST`
                      ),
                        b();
                  }
                });
              },
              "processBidderRequests"
            ),
            R = (0, p.A_)(
              "async",
              function (e, t, n, i, s) {
                const d = o.$W.getConfig("userSync.aliasSyncEnabled");
                if (e.getUserSyncs && (d || !r.Ay.aliasRegistry[e.code])) {
                  let r = o.$W.getConfig("userSync.filterSettings"),
                    d = e.getUserSyncs(
                      {
                        iframeEnabled: !(!r || (!r.iframe && !r.all)),
                        pixelEnabled: !(!r || (!r.image && !r.all)),
                      },
                      t,
                      n,
                      i,
                      s
                    );
                  d &&
                    (Array.isArray(d) || (d = [d]),
                    d.forEach((t) => {
                      a.zt.registerSync(t.type, e.code, t.url);
                    }),
                    a.zt.bidderDone(e.code));
                }
              },
              "registerSyncs"
            ),
            S = (0, p.A_)("sync", (e, t) => {}, "addPaapiConfig");
          function D(e) {
            return (0, b.BO)(e.metrics).renameWith((t) => [
              `adapter.client.${t}`,
              `adapters.client.${e.bidderCode}.${t}`,
            ]);
          }
        },
        580: (e, t, n) => {
          n.d(t, { R: () => u });
          var i = n(811),
            r = n(441),
            o = n(139),
            s = n(901),
            a = n(69);
          const d = new WeakMap(),
            c = [
              "debugging",
              "outstream",
              "improvedigital",
              "showheroes-bs",
              "aaxBlockmeter",
              "adagio",
              "adloox",
              "akamaidap",
              "arcspan",
              "airgrid",
              "browsi",
              "brandmetrics",
              "clean.io",
              "humansecurity",
              "confiant",
              "contxtful",
              "hadron",
              "mediafilter",
              "medianet",
              "azerionedge",
              "a1Media",
              "geoedge",
              "qortex",
              "dynamicAdBoost",
              "51Degrees",
              "symitridap",
              "wurfl",
              "justtag",
              "tncId",
              "ftrackId",
              "id5",
            ];
          function u(e, t, n, u, l, f) {
            if (!(0, o.io)(i.pY, (0, r.s)(t, n))) return;
            if (!n || !e)
              return void (0, a.vV)(
                "cannot load external script without url and moduleCode"
              );
            if (!(0, s.mK)(c, n))
              return void (0, a.vV)(
                `${n} not whitelisted for loading external JavaScript`
              );
            l || (l = document);
            const g = m(l, e);
            if (g)
              return (
                u &&
                  "function" == typeof u &&
                  (g.loaded ? u() : g.callbacks.push(u)),
                g.tag
              );
            const p = d.get(l) || {},
              h = { loaded: !1, tag: null, callbacks: [] };
            return (
              (p[e] = h),
              d.set(l, p),
              u && "function" == typeof u && h.callbacks.push(u),
              (0, a.JE)(`module ${n} is loading external JavaScript`),
              (function (t, n, i, r) {
                i || (i = document);
                var o = i.createElement("script");
                (o.type = "text/javascript"), (o.async = !0);
                const s = m(i, e);
                s && (s.tag = o);
                o.readyState
                  ? (o.onreadystatechange = function () {
                      ("loaded" !== o.readyState &&
                        "complete" !== o.readyState) ||
                        ((o.onreadystatechange = null), n());
                    })
                  : (o.onload = function () {
                      n();
                    });
                (o.src = t), r && (0, a.Bg)(o, r);
                return (0, a._s)(o, i), o;
              })(
                e,
                function () {
                  h.loaded = !0;
                  try {
                    for (let e = 0; e < h.callbacks.length; e++)
                      h.callbacks[e]();
                  } catch (e) {
                    (0, a.vV)(
                      "Error executing callback",
                      "adloader.js:loadExternalScript",
                      e
                    );
                  }
                },
                l,
                f
              )
            );
            function m(e, t) {
              const n = d.get(e);
              return n && n[t] ? n[t] : null;
            }
          }
        },
        692: (e, t, n) => {
          n.d(t, { Q: () => i });
          const i = (0, n(214).A_)("sync", () => {});
        },
        44: (e, t, n) => {
          n.d(t, { RD: () => f, g4: () => l });
          var i = n(272),
            r = n(69);
          const o = {
              fetch: window.fetch.bind(window),
              makeRequest: (e, t) => new Request(e, t),
              timeout(e, t) {
                const n = new AbortController();
                let i = setTimeout(() => {
                  n.abort(),
                    (0, r.vV)(`Request timeout after ${e}ms`, t),
                    (i = null);
                }, e);
                return {
                  signal: n.signal,
                  done() {
                    i && clearTimeout(i);
                  },
                };
              },
            },
            s = "GET",
            a = "POST",
            d = "Content-Type";
          function c() {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 3e3,
              { request: t, done: n } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = (t, n) => {
                let r;
                null == e ||
                  null != n?.signal ||
                  i.$W.getConfig("disableAjaxTimeout") ||
                  ((r = o.timeout(e, t)),
                  (n = Object.assign({ signal: r.signal }, n)));
                let s = o.fetch(t, n);
                return null != r?.done && (s = s.finally(r.done)), s;
              };
            return (
              (null == t && null == n) ||
                (r = ((e) =>
                  function (i, r) {
                    const o = new URL(
                      null == i?.url ? i : i.url,
                      document.location
                    ).origin;
                    let s = e(i, r);
                    return t && t(o), n && (s = s.finally(() => n(o))), s;
                  })(r)),
              r
            );
          }
          function u(e, t) {
            let { status: n, statusText: i = "", headers: o, url: s } = e,
              a = 0;
            function c(e) {
              if (0 === a)
                try {
                  a = new DOMParser().parseFromString(
                    t,
                    o?.get(d)?.split(";")?.[0]
                  );
                } catch (t) {
                  (a = null), e && e(t);
                }
              return a;
            }
            return {
              readyState: XMLHttpRequest.DONE,
              status: n,
              statusText: i,
              responseText: t,
              response: t,
              responseType: "",
              responseURL: s,
              get responseXML() {
                return c(r.vV);
              },
              getResponseHeader: (e) => (o?.has(e) ? o.get(e) : null),
              toJSON() {
                return Object.assign({ responseXML: c() }, this);
              },
              timedOut: !1,
            };
          }
          function l() {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 3e3,
              { request: t, done: n } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            const i = c(e, { request: t, done: n });
            return function (e, t, n) {
              !(function (e, t) {
                const { success: n, error: i } =
                  "object" == typeof t && null != t
                    ? t
                    : {
                        success: "function" == typeof t ? t : () => null,
                        error: (e, t) => (0, r.vV)("Network error", e, t),
                      };
                e.then((e) => e.text().then((t) => [e, t])).then(
                  (e) => {
                    let [t, r] = e;
                    const o = u(t, r);
                    t.ok || 304 === t.status ? n(r, o) : i(t.statusText, o);
                  },
                  (e) =>
                    i(
                      "",
                      Object.assign(u({ status: 0 }, ""), {
                        reason: e,
                        timedOut: "AbortError" === e?.name,
                      })
                    )
                );
              })(
                i(
                  (function (e, t) {
                    let n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {};
                    const i = n.method || (t ? a : s);
                    if (i === s && t) {
                      const i = (0, r.Dl)(e, n);
                      Object.assign(i.search, t), (e = (0, r.c$)(i));
                    }
                    const c = new Headers(n.customHeaders);
                    c.set(d, n.contentType || "text/plain");
                    const u = { method: i, headers: c };
                    return (
                      i !== s && t && (u.body = t),
                      n.withCredentials && (u.credentials = "include"),
                      n.browsingTopics &&
                        isSecureContext &&
                        (u.browsingTopics = !0),
                      n.keepalive && (u.keepalive = !0),
                      o.makeRequest(e, u)
                    );
                  })(
                    e,
                    n,
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {}
                  )
                ),
                t
              );
            };
          }
          const f = l();
          c();
        },
        881: (e, t, n) => {
          n.d(t, { n: () => oe });
          var i = n(69),
            r = n(433),
            o = n(833),
            s = n(449),
            a = n(44),
            d = n(272);
          const c = 15;
          function u(e) {
            let { index: t = oe.index } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            const n = e.vastXml
              ? e.vastXml
              : ((i = e.vastUrl),
                (r = e.vastImpUrl),
                `<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA[${i}]]></VASTAdTagURI>\n        ${
                  (r = r && (Array.isArray(r) ? r : [r]))
                    ? r
                        .map((e) => `<Impression><![CDATA[${e}]]></Impression>`)
                        .join("")
                    : ""
                }\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>`);
            var i, r;
            const o = t.getAuction(e);
            let s = { type: "xml", value: n, ttlseconds: Number(e.ttl) + c };
            return (
              d.$W.getConfig("cache.vasttrack") &&
                ((s.bidder = e.bidder),
                (s.bidid = e.requestId),
                (s.aid = e.auctionId)),
              null != o && (s.timestamp = o.getAuctionStart()),
              "string" == typeof e.customCacheKey &&
                "" !== e.customCacheKey &&
                (s.key = e.customCacheKey),
              s
            );
          }
          const l = {
            store: function (e, t) {
              let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : a.g4;
              const i = { puts: e.map(u) };
              n(d.$W.getConfig("cache.timeout"))(
                d.$W.getConfig("cache.url"),
                (function (e) {
                  return {
                    success: function (t) {
                      let n;
                      try {
                        n = JSON.parse(t).responses;
                      } catch (t) {
                        return void e(t, []);
                      }
                      n
                        ? e(null, n)
                        : e(
                            new Error(
                              "The cache server didn't respond with a responses property."
                            ),
                            []
                          );
                    },
                    error: function (t, n) {
                      e(
                        new Error(
                          `Error storing video ad in the cache: ${t}: ${JSON.stringify(
                            n
                          )}`
                        ),
                        []
                      );
                    },
                  };
                })(t),
                JSON.stringify(i),
                { contentType: "text/plain", withCredentials: !0 }
              );
            },
          };
          function f(e) {
            const t = e.map((e) => e.bidResponse);
            l.store(t, function (n, r) {
              var o;
              n
                ? ((o = n),
                  (0, i.vV)(
                    `Failed to save to the video cache: ${o}. Video bids will be discarded:`,
                    t
                  ))
                : e.length !== r.length
                ? (0, i.vV)(
                    `expected ${e.length} cache IDs, got ${r.length} instead`
                  )
                : r.forEach((t, n) => {
                    const {
                      auctionInstance: r,
                      bidResponse: o,
                      afterBidAdded: s,
                    } = e[n];
                    var a;
                    "" === t.uuid
                      ? (0, i.JE)(
                          "Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."
                        )
                      : ((o.videoCacheKey = t.uuid),
                        o.vastUrl ||
                          (o.vastUrl =
                            ((a = o.videoCacheKey),
                            `${d.$W.getConfig("cache.url")}?uuid=${a}`)),
                        G(r, o),
                        s());
                  });
            });
          }
          let g, p;
          d.$W.getConfig("cache", (e) => {
            (g =
              "number" == typeof e.cache.batchSize && e.cache.batchSize > 0
                ? e.cache.batchSize
                : 1),
              (p =
                "number" == typeof e.cache.batchTimeout &&
                e.cache.batchTimeout > 0
                  ? e.cache.batchTimeout
                  : 0);
          });
          const h = (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : setTimeout,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : f,
              n = [[]],
              i = !1;
            const r = (e) => e();
            return function (o, s, a) {
              const d = p > 0 ? e : r;
              n[n.length - 1].length >= g && n.push([]),
                n[n.length - 1].push({
                  auctionInstance: o,
                  bidResponse: s,
                  afterBidAdded: a,
                }),
                i ||
                  ((i = !0),
                  d(() => {
                    n.forEach(t), (n = [[]]), (i = !1);
                  }, p));
            };
          })();
          var m = n(789),
            b = n(230),
            y = n(214),
            v = n(901),
            E = n(895),
            A = n(371),
            I = n(693),
            w = n(23),
            T = n(46),
            C = n(969),
            B = n(555),
            O = n(894);
          var k = n(873);
          const { syncUsers: R } = b.zt,
            S = "started",
            D = "inProgress",
            U = "completed";
          w.on(C.qY.BID_ADJUSTMENT, function (e) {
            !(function (e) {
              let t = (function (e, t, n) {
                let { index: r = oe.index, bs: o = I.u } =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {};
                n = n || r.getBidRequest(t);
                const s = t?.adapterCode,
                  a = t?.bidderCode || n?.bidder,
                  d = o.get(t?.adapterCode, "adjustAlternateBids"),
                  c =
                    o.getOwn(a, "bidCpmAdjustment") ||
                    o.get(d ? s : a, "bidCpmAdjustment");
                if (c && "function" == typeof c)
                  try {
                    return c(e, Object.assign({}, t), n);
                  } catch (e) {
                    (0, i.vV)("Error during bid adjustment", e);
                  }
                return e;
              })(e.cpm, e);
              t >= 0 && (e.cpm = t);
            })(e);
          });
          const _ = 4,
            j = {},
            $ = {},
            q = [],
            x = (0, k.m)();
          function N(e) {
            let {
              adUnits: t,
              adUnitCodes: n,
              callback: a,
              cbTimeout: c,
              labels: u,
              auctionId: l,
              ortb2Fragments: f,
              metrics: g,
            } = e;
            g = (0, O.BO)(g);
            const p = t,
              h = u,
              b = n,
              y = l || (0, i.lk)(),
              I = c,
              k = new Set(),
              N = (0, B.v)(),
              L = (0, B.v)();
            let z,
              J,
              K,
              Q,
              Y = [],
              X = a,
              Z = [],
              te = [],
              ne = [],
              ie = [],
              re = [];
            function se() {
              return {
                auctionId: y,
                timestamp: z,
                auctionEnd: J,
                auctionStatus: Q,
                adUnits: p,
                adUnitCodes: b,
                labels: h,
                bidderRequests: Z,
                noBids: ne,
                bidsReceived: te,
                bidsRejected: Y,
                winningBids: ie,
                timeout: I,
                metrics: g,
                seatNonBids: re,
              };
            }
            function ae(e) {
              if (
                (e ? w.Ic(C.qY.AUCTION_TIMEOUT, se()) : clearTimeout(K),
                void 0 === J)
              ) {
                let n = [];
                e &&
                  ((0, i.OG)(`Auction ${y} timedOut`),
                  (n = Z.filter((e) => !k.has(e.bidderRequestId)).flatMap(
                    (e) => e.bids
                  )),
                  n.length && w.Ic(C.qY.BID_TIMEOUT, n)),
                  (Q = U),
                  (J = Date.now()),
                  g.checkpoint("auctionEnd"),
                  g.timeBetween(
                    "requestBids",
                    "auctionEnd",
                    "requestBids.total"
                  ),
                  g.timeBetween(
                    "callBids",
                    "auctionEnd",
                    "requestBids.callBids"
                  ),
                  N.resolve(),
                  w.Ic(C.qY.AUCTION_END, se()),
                  M(p, function () {
                    try {
                      if (null != X) {
                        const t = te
                          .filter((e) => b.includes(e.adUnitCode))
                          .reduce(ee, {});
                        X.apply(x, [t, e, y]), (X = null);
                      }
                    } catch (e) {
                      (0, i.vV)("Error executing bidsBackHandler", null, e);
                    } finally {
                      n.length && T.Ay.callTimedOutBidders(t, n, I);
                      let e = d.$W.getConfig("userSync") || {};
                      e.enableOverride || R(e.syncDelay);
                    }
                  });
              }
            }
            function de() {
              d.$W.resetBidder(),
                (0, i.fH)(`Bids Received for Auction with id: ${y}`, te),
                (Q = U),
                ae(!1);
            }
            function ce(e) {
              k.add(e);
            }
            function ue(e) {
              e.forEach((e) => {
                var t;
                (t = e), (Z = Z.concat(t));
              });
              let t = {},
                n = {
                  bidRequests: e,
                  run: () => {
                    (K = setTimeout(() => ae(!0), I)),
                      (Q = D),
                      w.Ic(C.qY.AUCTION_INIT, se());
                    let n = (function (e, t) {
                      let { index: n = oe.index } =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {},
                        a = 0,
                        c = !1,
                        u = new Set(),
                        l = {};
                      function f() {
                        a--, c && 0 === a && e();
                      }
                      function g(e, t, n) {
                        return (
                          (l[t.requestId] = !0),
                          (function (e, t) {
                            let { index: n = oe.index } =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {};
                            const r = n.getBidderRequest(e),
                              o = n.getAdUnit(e),
                              s = (r && r.start) || e.requestTimestamp;
                            Object.assign(e, {
                              responseTimestamp:
                                e.responseTimestamp || (0, i.vE)(),
                              requestTimestamp: e.requestTimestamp || s,
                              cpm: parseFloat(e.cpm) || 0,
                              bidder: e.bidder || e.bidderCode,
                              adUnitCode: t,
                            }),
                              null != o?.ttlBuffer &&
                                (e.ttlBuffer = o.ttlBuffer);
                            e.timeToRespond =
                              e.responseTimestamp - e.requestTimestamp;
                          })(t, e),
                          a++,
                          n(f)
                        );
                      }
                      function p(e, a) {
                        g(e, a, (e) => {
                          let c = (function (e) {
                            let { index: t = oe.index } =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                            w.Ic(C.qY.BID_ADJUSTMENT, e);
                            const n =
                                t.getBidRequest(e)?.renderer ||
                                t.getAdUnit(e).renderer,
                              i = e.mediaType,
                              r = t.getMediaTypes(e),
                              s = r && r[i];
                            var a = s && s.renderer,
                              c = null;
                            !a ||
                            !a.render ||
                            (!0 === a.backupOnly && e.renderer)
                              ? !n ||
                                !n.render ||
                                (!0 === n.backupOnly && e.renderer) ||
                                (c = n)
                              : (c = a);
                            c &&
                              ((e.renderer = m.A4.install({
                                url: c.url,
                                config: c.options,
                                renderNow: null == c.url,
                              })),
                              e.renderer.setRender(c.render));
                            const u = H(
                                e.mediaType,
                                r,
                                d.$W.getConfig("mediaTypePriceGranularity")
                              ),
                              l = (0, o.j)(
                                e.cpm,
                                "object" == typeof u
                                  ? u
                                  : d.$W.getConfig("customPriceBucket"),
                                d.$W.getConfig("currency.granularityMultiplier")
                              );
                            return (
                              (e.pbLg = l.low),
                              (e.pbMg = l.med),
                              (e.pbHg = l.high),
                              (e.pbAg = l.auto),
                              (e.pbDg = l.dense),
                              (e.pbCg = l.custom),
                              e
                            );
                          })(a);
                          w.Ic(C.qY.BID_ACCEPTED, c),
                            c.mediaType === A.G_
                              ? (function (e, t, n) {
                                  let { index: o = oe.index } =
                                      arguments.length > 3 &&
                                      void 0 !== arguments[3]
                                        ? arguments[3]
                                        : {},
                                    s = !0;
                                  const a = (0, r.A)(
                                      o.getMediaTypes({
                                        requestId:
                                          t.originalRequestId || t.requestId,
                                        adUnitId: t.adUnitId,
                                      }),
                                      "video"
                                    ),
                                    c = a && (0, r.A)(a, "context"),
                                    u = a && (0, r.A)(a, "useCacheKey");
                                  d.$W.getConfig("cache.url") &&
                                    (u || c !== E.H6) &&
                                    (!t.videoCacheKey ||
                                    d.$W.getConfig("cache.ignoreBidderCacheKey")
                                      ? ((s = !1), F(e, t, n, a))
                                      : t.vastUrl ||
                                        ((0, i.vV)(
                                          "videoCacheKey specified but not required vastUrl for video bid"
                                        ),
                                        (s = !1)));
                                  s && (G(e, t), n());
                                })(t, c, e)
                              : ((0, s.l6)(c) && (0, s.gs)(c, n.getAdUnit(c)),
                                G(t, c),
                                e());
                        });
                      }
                      function h(e, n, r) {
                        return g(e, n, (e) => {
                          (n.rejectionReason = r),
                            (0, i.JE)(
                              `Bid from ${
                                n.bidder || "unknown bidder"
                              } was rejected: ${r}`,
                              n
                            ),
                            w.Ic(C.qY.BID_REJECTED, n),
                            t.addBidRejected(n),
                            e();
                        });
                      }
                      function b() {
                        let n = this,
                          r = t.getBidRequests();
                        const o = d.$W.getConfig("auctionOptions");
                        if ((u.add(n), o && !(0, i.Im)(o))) {
                          const e = o.secondaryBidders;
                          e &&
                            !r.every((t) => (0, v.mK)(e, t.bidderCode)) &&
                            (r = r.filter((t) => !(0, v.mK)(e, t.bidderCode)));
                        }
                        (c = r.every((e) => u.has(e))),
                          n.bids.forEach((e) => {
                            l[e.bidId] || (t.addNoBid(e), w.Ic(C.qY.NO_BID, e));
                          }),
                          c && 0 === a && e();
                      }
                      return {
                        addBidResponse: (function () {
                          function e(e, t) {
                            P.call(
                              { dispatch: p },
                              e,
                              t,
                              (() => {
                                let n = !1;
                                return (i) => {
                                  n || (h(e, t, i), (n = !0));
                                };
                              })()
                            );
                          }
                          return (e.reject = h), e;
                        })(),
                        adapterDone: function () {
                          W(B.k.resolve()).finally(() => b.call(this));
                        },
                      };
                    })(de, this);
                    T.Ay.callBids(
                      p,
                      e,
                      n.addBidResponse,
                      n.adapterDone,
                      {
                        request(e, n) {
                          c(j, n),
                            c(t, e),
                            $[e] || ($[e] = { SRA: !0, origin: n }),
                            t[e] > 1 && ($[e].SRA = !1);
                        },
                        done(e) {
                          j[e]--, q[0] && a(q[0]) && q.shift();
                        },
                      },
                      I,
                      ce,
                      f
                    ),
                      L.resolve();
                  },
                };
              function a(e) {
                let t = !0,
                  n = d.$W.getConfig("maxRequestsPerOrigin") || _;
                return (
                  e.bidRequests.some((e) => {
                    let i = 1,
                      r =
                        void 0 !== e.src && e.src === C.RW.SRC
                          ? "s2s"
                          : e.bidderCode;
                    return (
                      $[r] &&
                        (!1 === $[r].SRA && (i = Math.min(e.bids.length, n)),
                        j[$[r].origin] + i > n && (t = !1)),
                      !t
                    );
                  }),
                  t && e.run(),
                  t
                );
              }
              function c(e, t) {
                void 0 === e[t] ? (e[t] = 1) : e[t]++;
              }
              a(n) ||
                ((0, i.JE)("queueing auction due to limited endpoint capacity"),
                q.push(n));
            }
            return (
              w.on(C.qY.SEAT_NON_BID, (e) => {
                var t;
                e.auctionId === y && ((t = e.seatnonbid), (re = re.concat(t)));
              }),
              {
                addBidReceived: function (e) {
                  te = te.concat(e);
                },
                addBidRejected: function (e) {
                  Y = Y.concat(e);
                },
                addNoBid: function (e) {
                  ne = ne.concat(e);
                },
                callBids: function () {
                  (Q = S), (z = Date.now());
                  let e = g.measureTime("requestBids.makeRequests", () =>
                    T.Ay.makeBidRequests(p, z, y, I, h, f, g)
                  );
                  (0, i.fH)(`Bids Requested for Auction with id: ${y}`, e),
                    g.checkpoint("callBids"),
                    e.length < 1
                      ? ((0, i.JE)(
                          "No valid bid requests returned for auction"
                        ),
                        de())
                      : V.call({ dispatch: ue, context: this }, e);
                },
                addWinningBid: function (e) {
                  (ie = ie.concat(e)),
                    T.Ay.callBidWonBidder(e.adapterCode || e.bidder, e, t),
                    e.deferBilling || T.Ay.triggerBilling(e);
                },
                setBidTargeting: function (e) {
                  T.Ay.callSetTargetingBidder(e.adapterCode || e.bidder, e);
                },
                getWinningBids: () => ie,
                getAuctionStart: () => z,
                getAuctionEnd: () => J,
                getTimeout: () => I,
                getAuctionId: () => y,
                getAuctionStatus: () => Q,
                getAdUnits: () => p,
                getAdUnitCodes: () => b,
                getBidRequests: () => Z,
                getBidsReceived: () => te,
                getNoBids: () => ne,
                getNonBids: () => re,
                getFPD: () => f,
                getMetrics: () => g,
                end: N.promise,
                requestsDone: L.promise,
              }
            );
          }
          const P = (0, y.A_)(
              "sync",
              function (e, t, n) {
                !(function (e) {
                  const t = d.$W.getConfig("maxBid");
                  return !t || !e.cpm || t >= Number(e.cpm);
                })(t)
                  ? n(C.Tf.PRICE_TOO_HIGH)
                  : this.dispatch.call(null, e, t);
              },
              "addBidResponse"
            ),
            W = (0, y.A_)("sync", (e) => e, "responsesReady"),
            V = (0, y.A_)(
              "sync",
              function (e) {
                this.dispatch.call(this.context, e);
              },
              "addBidderRequests"
            ),
            M = (0, y.A_)(
              "async",
              function (e, t) {
                t && t();
              },
              "bidsBackCallback"
            );
          function G(e, t) {
            !(function (e) {
              let t;
              const n =
                !0 === I.u.get(e.bidderCode, "allowZeroCpmBids")
                  ? e.cpm >= 0
                  : e.cpm > 0;
              e.bidderCode &&
                (n || e.dealId) &&
                (t = (function (e, t) {
                  let { index: n = oe.index } =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  if (!t) return {};
                  const i = n.getBidRequest(t);
                  var r = {};
                  const o = X(t.mediaType, e);
                  Z(r, o, t, i),
                    e &&
                      I.u.getOwn(e, C.iD.ADSERVER_TARGETING) &&
                      (Z(r, I.u.ownSettingsFor(e), t, i),
                      (t.sendStandardTargeting = I.u.get(
                        e,
                        "sendStandardTargeting"
                      )));
                  t.native && (r = Object.assign({}, r, (0, s.Zj)(t)));
                  return r;
                })(e.bidderCode, e));
              e.adserverTargeting = Object.assign(e.adserverTargeting || {}, t);
            })(t),
              (0, O.BO)(t.metrics).timeSince(
                "addBidResponse",
                "addBidResponse.total"
              ),
              e.addBidReceived(t),
              w.Ic(C.qY.BID_RESPONSE, t);
          }
          const F = (0, y.A_)(
            "async",
            function (e, t, n, i) {
              h(e, t, n);
            },
            "callPrebidCache"
          );
          function H(e, t, n) {
            if (e && n) {
              if (e === A.G_) {
                const e = (0, r.A)(t, `${A.G_}.context`, "instream");
                if (n[`${A.G_}-${e}`]) return n[`${A.G_}-${e}`];
              }
              return n[e];
            }
          }
          const L = (e) => (t) => {
              const n =
                e ||
                (function (e) {
                  let { index: t = oe.index } =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  const n = H(
                    e.mediaType,
                    t.getMediaTypes(e),
                    d.$W.getConfig("mediaTypePriceGranularity")
                  );
                  return "string" == typeof e.mediaType && n
                    ? "string" == typeof n
                      ? n
                      : "custom"
                    : d.$W.getConfig("priceGranularity");
                })(t);
              return n === C.UE.AUTO
                ? t.pbAg
                : n === C.UE.DENSE
                ? t.pbDg
                : n === C.UE.LOW
                ? t.pbLg
                : n === C.UE.MEDIUM
                ? t.pbMg
                : n === C.UE.HIGH
                ? t.pbHg
                : n === C.UE.CUSTOM
                ? t.pbCg
                : void 0;
            },
            z = () => (e) => e.creativeId ? e.creativeId : "",
            J = () => (e) =>
              e.meta &&
              e.meta.advertiserDomains &&
              e.meta.advertiserDomains.length > 0
                ? [e.meta.advertiserDomains].flat()[0]
                : "",
            K = () => (e) =>
              e.meta && (e.meta.networkId || e.meta.networkName)
                ? (0, r.A)(e, "meta.networkName") ||
                  (0, r.A)(e, "meta.networkId")
                : "",
            Q = () => (e) =>
              e.meta && e.meta.primaryCatId ? e.meta.primaryCatId : "";
          function Y(e, t) {
            return {
              key: e,
              val:
                "function" == typeof t
                  ? function (e, n) {
                      return t(e, n);
                    }
                  : function (e) {
                      return (0, i._W)(e, t);
                    },
            };
          }
          function X(e, t) {
            const n = Object.assign({}, I.u.settingsFor(null));
            if (
              (n[C.iD.ADSERVER_TARGETING] ||
                (n[C.iD.ADSERVER_TARGETING] = [
                  Y(C.xS.BIDDER, "bidderCode"),
                  Y(C.xS.AD_ID, "adId"),
                  Y(C.xS.PRICE_BUCKET, L()),
                  Y(C.xS.SIZE, "size"),
                  Y(C.xS.DEAL, "dealId"),
                  Y(C.xS.SOURCE, "source"),
                  Y(C.xS.FORMAT, "mediaType"),
                  Y(C.xS.ADOMAIN, J()),
                  Y(C.xS.ACAT, Q()),
                  Y(C.xS.DSP, K()),
                  Y(C.xS.CRID, z()),
                ]),
              "video" === e)
            ) {
              const e = n[C.iD.ADSERVER_TARGETING].slice();
              if (
                ((n[C.iD.ADSERVER_TARGETING] = e),
                [C.xS.UUID, C.xS.CACHE_ID].forEach((t) => {
                  void 0 === (0, v.I6)(e, (e) => e.key === t) &&
                    e.push(Y(t, "videoCacheKey"));
                }),
                d.$W.getConfig("cache.url") &&
                  (!t || !1 !== I.u.get(t, "sendStandardTargeting")))
              ) {
                const t = (0, i.Dl)(d.$W.getConfig("cache.url"));
                void 0 === (0, v.I6)(e, (e) => e.key === C.xS.CACHE_HOST) &&
                  e.push(
                    Y(C.xS.CACHE_HOST, function (e) {
                      return (0, r.A)(e, `adserverTargeting.${C.xS.CACHE_HOST}`)
                        ? e.adserverTargeting[C.xS.CACHE_HOST]
                        : t.hostname;
                    })
                  );
              }
            }
            return n;
          }
          function Z(e, t, n, r) {
            var o = t[C.iD.ADSERVER_TARGETING];
            return (
              (n.size = n.getSize()),
              (o || []).forEach(function (o) {
                var s = o.key,
                  a = o.val;
                if (
                  (e[s] && (0, i.JE)("The key: " + s + " is being overwritten"),
                  (0, i.fp)(a))
                )
                  try {
                    a = a(n, r);
                  } catch (e) {
                    (0, i.vV)("bidmanager", "ERROR", e);
                  }
                ((void 0 === t.suppressEmptyKeys ||
                  !0 !== t.suppressEmptyKeys) &&
                  s !== C.xS.DEAL &&
                  s !== C.xS.ACAT &&
                  s !== C.xS.DSP &&
                  s !== C.xS.CRID) ||
                (!(0, i.xQ)(a) && null != a)
                  ? (e[s] = a)
                  : (0, i.fH)(
                      "suppressing empty key '" +
                        s +
                        "' from adserver targeting"
                    );
              }),
              e
            );
          }
          function ee(e, t) {
            return (
              e[t.adUnitCode] || (e[t.adUnitCode] = { bids: [] }),
              e[t.adUnitCode].bids.push(t),
              e
            );
          }
          function te(e) {
            Object.assign(this, {
              getAuction(t) {
                let { auctionId: n } = t;
                if (null != n) return e().find((e) => e.getAuctionId() === n);
              },
              getAdUnit(t) {
                let { adUnitId: n } = t;
                if (null != n)
                  return e()
                    .flatMap((e) => e.getAdUnits())
                    .find((e) => e.adUnitId === n);
              },
              getMediaTypes(e) {
                let { adUnitId: t, requestId: n } = e;
                if (null != n) {
                  const e = this.getBidRequest({ requestId: n });
                  if (null != e && (null == t || e.adUnitId === t))
                    return e.mediaTypes;
                } else if (null != t) {
                  const e = this.getAdUnit({ adUnitId: t });
                  if (null != e) return e.mediaTypes;
                }
              },
              getBidderRequest(t) {
                let { requestId: n, bidderRequestId: i } = t;
                if (null != n || null != i) {
                  let t = e().flatMap((e) => e.getBidRequests());
                  return (
                    null != i && (t = t.filter((e) => e.bidderRequestId === i)),
                    null == n
                      ? t[0]
                      : t.find(
                          (e) =>
                            e.bids && null != e.bids.find((e) => e.bidId === n)
                        )
                  );
                }
              },
              getBidRequest(t) {
                let { requestId: n } = t;
                if (null != n)
                  return e()
                    .flatMap((e) => e.getBidRequests())
                    .flatMap((e) => e.bids)
                    .find((e) => e && e.bidId === n);
              },
              getOrtb2(e) {
                return (
                  this.getBidderRequest(e)?.ortb2 ||
                  this.getAuction(e)?.getFPD()?.global?.ortb2
                );
              },
            });
          }
          var ne = n(853),
            ie = n(863);
          const re = "minBidCacheTTL";
          const oe = (function () {
            let e = null;
            const t = (0, ne.H)({
              startTime: (e) => e.end.then(() => e.getAuctionEnd()),
              ttl: (t) =>
                null == e
                  ? null
                  : t.end.then(
                      () => 1e3 * Math.max(e, ...t.getBidsReceived().map(ie.L))
                    ),
            });
            (0, ie.u)(() => {
              null != e && t.refresh();
            }),
              d.$W.getConfig(re, (n) => {
                const i = e;
                (e = n?.[re]),
                  (e = "number" == typeof e ? e : null),
                  i !== e && t.refresh();
              });
            const n = { onExpiry: t.onExpiry };
            function r(e) {
              for (const n of t) if (n.getAuctionId() === e) return n;
            }
            function o() {
              return t.toArray().flatMap((e) => e.getBidsReceived());
            }
            return (
              (n.addWinningBid = function (e) {
                const t = (0, O.BO)(e.metrics);
                t.checkpoint("bidWon"),
                  t.timeBetween("auctionEnd", "bidWon", "adserver.pending"),
                  t.timeBetween("requestBids", "bidWon", "adserver.e2e");
                const n = r(e.auctionId);
                n
                  ? n.addWinningBid(e)
                  : (0, i.JE)("Auction not found when adding winning bid");
              }),
              Object.entries({
                getAllWinningBids: { name: "getWinningBids" },
                getBidsRequested: { name: "getBidRequests" },
                getNoBids: {},
                getAdUnits: {},
                getBidsReceived: { pre: (e) => e.getAuctionStatus() === U },
                getAdUnitCodes: { post: i.hj },
              }).forEach((e) => {
                let [i, { name: r = i, pre: o, post: s }] = e;
                const a =
                    null == o ? (e) => e[r]() : (e) => (o(e) ? e[r]() : []),
                  d = null == s ? (e) => e : (e) => e.filter(s);
                n[i] = () => d(t.toArray().flatMap(a));
              }),
              (n.getAllBidsForAdUnitCode = function (e) {
                return o().filter((t) => t && t.adUnitCode === e);
              }),
              (n.createAuction = function (e) {
                const n = N(e);
                return (
                  (function (e) {
                    t.add(e);
                  })(n),
                  n
                );
              }),
              (n.findBidByAdId = function (e) {
                return o().find((t) => t.adId === e);
              }),
              (n.getStandardBidderAdServerTargeting = function () {
                return X()[C.iD.ADSERVER_TARGETING];
              }),
              (n.setStatusForBids = function (e, t) {
                let i = n.findBidByAdId(e);
                if ((i && (i.status = t), i && t === C.tl.BID_TARGETING_SET)) {
                  const e = r(i.auctionId);
                  e && e.setBidTargeting(i);
                }
              }),
              (n.getLastAuctionId = function () {
                const e = t.toArray();
                return e.length && e[e.length - 1].getAuctionId();
              }),
              (n.clearAllAuctions = function () {
                t.clear();
              }),
              (n.index = new te(() => t.toArray())),
              n
            );
          })();
        },
        863: (e, t, n) => {
          n.d(t, { L: () => a, u: () => d });
          var i = n(272),
            r = n(69);
          let o = 1;
          const s = [];
          function a(e) {
            return e.ttl - (e.hasOwnProperty("ttlBuffer") ? e.ttlBuffer : o);
          }
          function d(e) {
            s.push(e);
          }
          i.$W.getConfig("ttlBuffer", (e) => {
            if ("number" == typeof e.ttlBuffer) {
              const t = o;
              (o = e.ttlBuffer), t !== o && s.forEach((e) => e(o));
            } else (0, r.vV)("Invalid value for ttlBuffer", e.ttlBuffer);
          });
        },
        693: (e, t, n) => {
          n.d(t, { u: () => a });
          var i = n(433),
            r = n(69),
            o = n(873),
            s = n(969);
          const a = new (class {
            constructor(e, t) {
              (this.getSettings = e), (this.defaultScope = t);
            }
            get(e, t) {
              let n = this.getOwn(e, t);
              return void 0 === n && (n = this.getOwn(null, t)), n;
            }
            getOwn(e, t) {
              return (
                (e = this.#e(e)), (0, i.A)(this.getSettings(), `${e}.${t}`)
              );
            }
            getScopes() {
              return Object.keys(this.getSettings()).filter(
                (e) => e !== this.defaultScope
              );
            }
            settingsFor(e) {
              return (0, r.D9)(
                {},
                this.ownSettingsFor(null),
                this.ownSettingsFor(e)
              );
            }
            ownSettingsFor(e) {
              return (e = this.#e(e)), this.getSettings()[e] || {};
            }
            #e(e) {
              return null == e ? this.defaultScope : e;
            }
          })(() => (0, o.m)().bidderSettings || {}, s.iD.BD_SETTING_STANDARD);
        },
        597: (e, t, n) => {
          n.d(t, { O: () => o });
          var i = n(69);
          function r(e) {
            let {
              src: t = "client",
              bidder: n = "",
              bidId: r,
              transactionId: o,
              adUnitId: s,
              auctionId: a,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {};
            var d = t,
              c = e || 0;
            Object.assign(this, {
              bidderCode: n,
              width: 0,
              height: 0,
              statusMessage: (function () {
                switch (c) {
                  case 0:
                    return "Pending";
                  case 1:
                    return "Bid available";
                  case 2:
                    return "Bid returned empty or error response";
                  case 3:
                    return "Bid timed out";
                }
              })(),
              adId: (0, i.s0)(),
              requestId: r,
              transactionId: o,
              adUnitId: s,
              auctionId: a,
              mediaType: "banner",
              source: d,
            }),
              (this.getStatusCode = function () {
                return c;
              }),
              (this.getSize = function () {
                return this.width + "x" + this.height;
              }),
              (this.getIdentifiers = function () {
                return {
                  src: this.source,
                  bidder: this.bidderCode,
                  bidId: this.requestId,
                  transactionId: this.transactionId,
                  adUnitId: this.adUnitId,
                  auctionId: this.auctionId,
                };
              });
          }
          function o(e, t) {
            return new r(e, t);
          }
        },
        272: (e, t, n) => {
          n.d(t, { $W: () => h, Ov: () => u });
          var i = n(833),
            r = n(901),
            o = n(69),
            s = n(433),
            a = n(969);
          const d = "TRUE" === (0, o.Ez)(a.M).toUpperCase(),
            c = {},
            u = "random",
            l = {};
          (l[u] = !0), (l.fixed = !0);
          const f = u,
            g = {
              LOW: "low",
              MEDIUM: "medium",
              HIGH: "high",
              AUTO: "auto",
              DENSE: "dense",
              CUSTOM: "custom",
            };
          function p(e) {
            const t =
              !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                ? {
                    priceGranularity: g.MEDIUM,
                    customPriceBucket: {},
                    mediaTypePriceGranularity: {},
                    bidderSequence: f,
                    auctionOptions: {},
                  }
                : {};
            function n(e) {
              return t[e];
            }
            function s(n, i) {
              t.hasOwnProperty(n) ||
                Object.defineProperty(e, n, { enumerable: !0 }),
                (t[n] = i);
            }
            const a = {
              publisherDomain: {
                set(e) {
                  null != e &&
                    (0, o.JE)(
                      "publisherDomain is deprecated and has no effect since v7 - use pageUrl instead"
                    ),
                    s("publisherDomain", e);
                },
              },
              priceGranularity: {
                set(e) {
                  c(e) &&
                    ("string" == typeof e
                      ? s("priceGranularity", d(e) ? e : g.MEDIUM)
                      : (0, o.Qd)(e) &&
                        (s("customPriceBucket", e),
                        s("priceGranularity", g.CUSTOM),
                        (0, o.OG)("Using custom price granularity")));
                },
              },
              customPriceBucket: {},
              mediaTypePriceGranularity: {
                set(e) {
                  null != e &&
                    s(
                      "mediaTypePriceGranularity",
                      Object.keys(e).reduce(
                        (t, i) => (
                          c(e[i])
                            ? "string" == typeof e
                              ? (t[i] = d(e[i]) ? e[i] : n("priceGranularity"))
                              : (0, o.Qd)(e) &&
                                ((t[i] = e[i]),
                                (0, o.OG)(
                                  `Using custom price granularity for ${i}`
                                ))
                            : (0, o.JE)(
                                `Invalid price granularity for media type: ${i}`
                              ),
                          t
                        ),
                        {}
                      )
                    );
                },
              },
              bidderSequence: {
                set(e) {
                  l[e]
                    ? s("bidderSequence", e)
                    : (0, o.JE)(
                        `Invalid order: ${e}. Bidder Sequence was not set.`
                      );
                },
              },
              auctionOptions: {
                set(e) {
                  (function (e) {
                    if (!(0, o.Qd)(e))
                      return (0, o.JE)("Auction Options must be an object"), !1;
                    for (let t of Object.keys(e)) {
                      if (
                        "secondaryBidders" !== t &&
                        "suppressStaleRender" !== t
                      )
                        return (
                          (0, o.JE)(
                            `Auction Options given an incorrect param: ${t}`
                          ),
                          !1
                        );
                      if ("secondaryBidders" === t) {
                        if (!(0, o.cy)(e[t]))
                          return (
                            (0, o.JE)(
                              `Auction Options ${t} must be of type Array`
                            ),
                            !1
                          );
                        if (!e[t].every(o.O8))
                          return (
                            (0, o.JE)(
                              `Auction Options ${t} must be only string`
                            ),
                            !1
                          );
                      } else if (
                        "suppressStaleRender" === t &&
                        !(0, o.Lm)(e[t])
                      )
                        return (
                          (0, o.JE)(
                            `Auction Options ${t} must be of type boolean`
                          ),
                          !1
                        );
                    }
                    return !0;
                  })(e) && s("auctionOptions", e);
                },
              },
            };
            return (
              Object.defineProperties(
                e,
                Object.fromEntries(
                  Object.entries(a).map((e) => {
                    let [i, r] = e;
                    return [
                      i,
                      Object.assign(
                        {
                          get: n.bind(null, i),
                          set: s.bind(null, i),
                          enumerable: t.hasOwnProperty(i),
                          configurable: !t.hasOwnProperty(i),
                        },
                        r
                      ),
                    ];
                  })
                )
              ),
              e
            );
            function d(e) {
              return (0, r.I6)(Object.keys(g), (t) => e === g[t]);
            }
            function c(e) {
              if (!e)
                return (
                  (0, o.vV)(
                    "Prebid Error: no value passed to `setPriceGranularity()`"
                  ),
                  !1
                );
              if ("string" == typeof e)
                d(e) ||
                  (0, o.JE)(
                    "Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default."
                  );
              else if ((0, o.Qd)(e) && !(0, i.q)(e))
                return (
                  (0, o.vV)(
                    "Invalid custom price value passed to `setPriceGranularity()`"
                  ),
                  !1
                );
              return !0;
            }
          }
          const h = (function () {
            let e,
              t,
              n,
              i = [],
              a = null;
            function u() {
              e = {};
              let i = p({
                debug: d,
                bidderTimeout: 3e3,
                enableSendAllBids: true,
                useBidCache: false,
                deviceAccess: true,
                disableAjaxTimeout: false,
                maxNestedIframes: 10,
                maxBid: 5e3,
                userSync: { topics: c },
              });
              t &&
                v(
                  Object.keys(t).reduce(
                    (e, n) => (t[n] !== i[n] && (e[n] = i[n] || {}), e),
                    {}
                  )
                ),
                (t = i),
                (n = {});
            }
            function l() {
              if (a && n && (0, o.Qd)(n[a])) {
                let e = n[a];
                const i = new Set(Object.keys(t).concat(Object.keys(e)));
                return (0, r.A6)(i).reduce(
                  (n, i) => (
                    void 0 === e[i]
                      ? (n[i] = t[i])
                      : void 0 === t[i]
                      ? (n[i] = e[i])
                      : (0, o.Qd)(e[i])
                      ? (n[i] = (0, o.D9)({}, t[i], e[i]))
                      : (n[i] = e[i]),
                    n
                  ),
                  {}
                );
              }
              return Object.assign({}, t);
            }
            const [f, g] = [
                l,
                function () {
                  const e = l();
                  return (
                    Object.defineProperty(e, "ortb2", {
                      get: function () {
                        throw new Error(
                          "invalid access to 'orbt2' config - use request parameters instead"
                        );
                      },
                    }),
                    e
                  );
                },
              ].map(
                (e) =>
                  function () {
                    if (
                      arguments.length <= 1 &&
                      "function" !=
                        typeof (arguments.length <= 0 ? void 0 : arguments[0])
                    ) {
                      const t = arguments.length <= 0 ? void 0 : arguments[0];
                      return t ? (0, s.A)(e(), t) : l();
                    }
                    return y(...arguments);
                  }
              ),
              [h, m] = [g, f].map(
                (e) =>
                  function () {
                    let t = e(...arguments);
                    return t && "object" == typeof t && (t = (0, o.Go)(t)), t;
                  }
              );
            function b(n) {
              if (!(0, o.Qd)(n))
                return void (0, o.vV)("setConfig options must be an object");
              let i = Object.keys(n),
                r = {};
              i.forEach((i) => {
                let s = n[i];
                (0, o.Qd)(e[i]) &&
                  (0, o.Qd)(s) &&
                  (s = Object.assign({}, e[i], s));
                try {
                  r[i] = t[i] = s;
                } catch (e) {
                  (0, o.JE)(`Cannot set config for property ${i} : `, e);
                }
              }),
                v(r);
            }
            function y(e, t) {
              let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                r = t;
              if (
                ("string" != typeof e && ((r = e), (e = "*"), (n = t || {})),
                "function" != typeof r)
              )
                return void (0, o.vV)("listener must be a function");
              const s = { topic: e, callback: r };
              return (
                i.push(s),
                n.init && r("*" === e ? g() : { [e]: g(e) }),
                function () {
                  i.splice(i.indexOf(s), 1);
                }
              );
            }
            function v(e) {
              const t = Object.keys(e);
              i
                .filter((e) => (0, r.mK)(t, e.topic))
                .forEach((t) => {
                  t.callback({ [t.topic]: e[t.topic] });
                }),
                i.filter((e) => "*" === e.topic).forEach((t) => t.callback(e));
            }
            function E(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              try {
                !(function (e) {
                  if (!(0, o.Qd)(e))
                    throw "setBidderConfig bidder options must be an object";
                  if (!Array.isArray(e.bidders) || !e.bidders.length)
                    throw "setBidderConfig bidder options must contain a bidders list with at least 1 bidder";
                  if (!(0, o.Qd)(e.config))
                    throw "setBidderConfig bidder options must contain a config object";
                })(e),
                  e.bidders.forEach((i) => {
                    n[i] || (n[i] = p({}, !1)),
                      Object.keys(e.config).forEach((r) => {
                        let s = e.config[r];
                        const a = n[i][r];
                        if ((0, o.Qd)(s) && (null == a || (0, o.Qd)(a))) {
                          const e = t ? o.D9 : Object.assign;
                          n[i][r] = e({}, a || {}, s);
                        } else n[i][r] = s;
                      });
                  });
              } catch (e) {
                (0, o.vV)(e);
              }
            }
            function A(e, t) {
              a = e;
              try {
                return t();
              } finally {
                I();
              }
            }
            function I() {
              a = null;
            }
            return (
              u(),
              {
                getCurrentBidder: function () {
                  return a;
                },
                resetBidder: I,
                getConfig: g,
                getAnyConfig: f,
                readConfig: h,
                readAnyConfig: m,
                setConfig: b,
                mergeConfig: function (e) {
                  if (!(0, o.Qd)(e))
                    return void (0, o.vV)(
                      "mergeConfig input must be an object"
                    );
                  const t = (0, o.D9)(l(), e);
                  return b({ ...t }), t;
                },
                setDefaults: function (n) {
                  (0, o.Qd)(e)
                    ? (Object.assign(e, n), Object.assign(t, n))
                    : (0, o.vV)("defaults must be an object");
                },
                resetConfig: u,
                runWithBidder: A,
                callbackWithBidder: function (e) {
                  return function (t) {
                    return function () {
                      if ("function" == typeof t) {
                        for (
                          var n = arguments.length, i = new Array(n), r = 0;
                          r < n;
                          r++
                        )
                          i[r] = arguments[r];
                        return A(e, t.bind(this, ...i));
                      }
                      (0, o.JE)(
                        "config.callbackWithBidder callback is not a function"
                      );
                    };
                  };
                },
                setBidderConfig: E,
                getBidderConfig: function () {
                  return n;
                },
                mergeBidderConfig: function (e) {
                  return E(e, !0);
                },
              }
            );
          })();
        },
        916: (e, t, n) => {
          n.d(t, {
            SL: () => g,
            ad: () => c,
            mW: () => a,
            o2: () => l,
            t6: () => d,
          });
          var i = n(69),
            r = n(555),
            o = n(272);
          Object.freeze({});
          class s {
            #t;
            #n;
            #i;
            #r;
            #o = !0;
            #s;
            generatedTime;
            hashFields;
            constructor() {
              this.reset();
            }
            #a(e) {
              (this.#r = !0), (this.#n = e), this.#i.resolve(e);
            }
            reset() {
              (this.#i = (0, r.v)()),
                (this.#t = !1),
                (this.#n = null),
                (this.#r = !1),
                (this.generatedTime = null);
            }
            enable() {
              this.#t = !0;
            }
            get enabled() {
              return this.#t;
            }
            get ready() {
              return this.#r;
            }
            get promise() {
              return this.#r
                ? r.k.resolve(this.#n)
                : (this.#t || this.#a(null), this.#i.promise);
            }
            setConsentData(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : (0, i.vE)();
              (this.generatedTime = t), (this.#o = !0), this.#a(e);
            }
            getConsentData() {
              return this.#n;
            }
            get hash() {
              return (
                this.#o &&
                  ((this.#s = (0, i.PB)(
                    JSON.stringify(
                      this.#n && this.hashFields
                        ? this.hashFields.map((e) => this.#n[e])
                        : this.#n
                    )
                  )),
                  (this.#o = !1)),
                this.#s
              );
            }
          }
          const a = new (class extends s {
              hashFields = ["gdprApplies", "consentString"];
              getConsentMeta() {
                const e = this.getConsentData();
                if (e && e.vendorData && this.generatedTime)
                  return {
                    gdprApplies: e.gdprApplies,
                    consentStringSize: (0, i.O8)(e.vendorData.tcString)
                      ? e.vendorData.tcString.length
                      : 0,
                    generatedAt: this.generatedTime,
                    apiVersion: e.apiVersion,
                  };
              }
            })(),
            d = new (class extends s {
              getConsentMeta() {
                if (this.getConsentData() && this.generatedTime)
                  return { generatedAt: this.generatedTime };
              }
            })(),
            c = new (class extends s {
              hashFields = ["applicableSections", "gppString"];
              getConsentMeta() {
                if (this.getConsentData() && this.generatedTime)
                  return { generatedAt: this.generatedTime };
              }
            })(),
            u = (() => {
              function e() {
                return !!o.$W.getConfig("coppa");
              }
              return {
                getCoppa: e,
                getConsentData: e,
                getConsentMeta: e,
                reset() {},
                get promise() {
                  return r.k.resolve(e());
                },
                get hash() {
                  return e() ? "1" : "0";
                },
              };
            })(),
            l = (function () {
              const e = {},
                t = {},
                n = {};
              return {
                register(i, r, o) {
                  o &&
                    (((e[r] = e[r] || {})[i] = o),
                    t.hasOwnProperty(r)
                      ? t[r] !== o && (t[r] = n)
                      : (t[r] = o));
                },
                get(i) {
                  const r = { modules: e[i] || {} };
                  return (
                    t.hasOwnProperty(i) && t[i] !== n && (r.gvlid = t[i]), r
                  );
                },
              };
            })(),
            f = { gdpr: a, usp: d, gpp: c, coppa: u };
          const g = (function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : f;
            return (
              (e = Object.entries(e)),
              Object.assign(
                {
                  get promise() {
                    return r.k
                      .all(
                        e.map((e) => {
                          let [t, n] = e;
                          return n.promise.then((e) => [t, e]);
                        })
                      )
                      .then((e) => Object.fromEntries(e));
                  },
                  get hash() {
                    return (0, i.PB)(
                      e
                        .map((e) => {
                          let [t, n] = e;
                          return n.hash;
                        })
                        .join(":")
                    );
                  },
                },
                Object.fromEntries(
                  ["getConsentData", "getConsentMeta", "reset"].map((t) => {
                    return [
                      t,
                      ((n = t),
                      function () {
                        return Object.fromEntries(
                          e.map((e) => {
                            let [t, i] = e;
                            return [t, i[n]()];
                          })
                        );
                      }),
                    ];
                    var n;
                  })
                )
              )
            );
          })();
        },
        969: (e, t, n) => {
          n.d(t, {
            IY: () => A,
            M: () => r,
            RW: () => g,
            Tf: () => h,
            UE: () => c,
            XQ: () => o,
            Zh: () => l,
            _B: () => v,
            as: () => a,
            cA: () => d,
            h0: () => m,
            iD: () => i,
            jO: () => b,
            nl: () => E,
            oA: () => y,
            qY: () => s,
            tl: () => p,
            x5: () => f,
            xS: () => u,
          });
          const i = {
              PL_CODE: "code",
              PL_SIZE: "sizes",
              PL_BIDS: "bids",
              BD_BIDDER: "bidder",
              BD_ID: "paramsd",
              BD_PL_ID: "placementId",
              ADSERVER_TARGETING: "adserverTargeting",
              BD_SETTING_STANDARD: "standard",
            },
            r = "pbjs_debug",
            o = { GOOD: 1 },
            s = {
              AUCTION_INIT: "auctionInit",
              AUCTION_TIMEOUT: "auctionTimeout",
              AUCTION_END: "auctionEnd",
              BID_ADJUSTMENT: "bidAdjustment",
              BID_TIMEOUT: "bidTimeout",
              BID_REQUESTED: "bidRequested",
              BID_RESPONSE: "bidResponse",
              BID_REJECTED: "bidRejected",
              NO_BID: "noBid",
              SEAT_NON_BID: "seatNonBid",
              BID_WON: "bidWon",
              BIDDER_DONE: "bidderDone",
              BIDDER_ERROR: "bidderError",
              SET_TARGETING: "setTargeting",
              BEFORE_REQUEST_BIDS: "beforeRequestBids",
              BEFORE_BIDDER_HTTP: "beforeBidderHttp",
              REQUEST_BIDS: "requestBids",
              ADD_AD_UNITS: "addAdUnits",
              AD_RENDER_FAILED: "adRenderFailed",
              AD_RENDER_SUCCEEDED: "adRenderSucceeded",
              TCF2_ENFORCEMENT: "tcf2Enforcement",
              AUCTION_DEBUG: "auctionDebug",
              BID_VIEWABLE: "bidViewable",
              STALE_RENDER: "staleRender",
              BILLABLE_EVENT: "billableEvent",
              BID_ACCEPTED: "bidAccepted",
              RUN_PAAPI_AUCTION: "paapiRunAuction",
              PBS_ANALYTICS: "pbsAnalytics",
              PAAPI_BID: "paapiBid",
              PAAPI_NO_BID: "paapiNoBid",
              PAAPI_ERROR: "paapiError",
            },
            a = {
              PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocument",
              NO_AD: "noAd",
              EXCEPTION: "exception",
              CANNOT_FIND_AD: "cannotFindAd",
              MISSING_DOC_OR_ADID: "missingDocOrAdid",
            },
            d = { bidWon: "adUnitCode" },
            c = {
              LOW: "low",
              MEDIUM: "medium",
              HIGH: "high",
              AUTO: "auto",
              DENSE: "dense",
              CUSTOM: "custom",
            },
            u = {
              BIDDER: "hb_bidder",
              AD_ID: "hb_adid",
              PRICE_BUCKET: "hb_pb",
              SIZE: "hb_size",
              DEAL: "hb_deal",
              SOURCE: "hb_source",
              FORMAT: "hb_format",
              UUID: "hb_uuid",
              CACHE_ID: "hb_cache_id",
              CACHE_HOST: "hb_cache_host",
              ADOMAIN: "hb_adomain",
              ACAT: "hb_acat",
              CRID: "hb_crid",
              DSP: "hb_dsp",
            },
            l = {
              BIDDER: "hb_bidder",
              AD_ID: "hb_adid",
              PRICE_BUCKET: "hb_pb",
              SIZE: "hb_size",
              DEAL: "hb_deal",
              FORMAT: "hb_format",
              UUID: "hb_uuid",
              CACHE_HOST: "hb_cache_host",
            },
            f = {
              title: "hb_native_title",
              body: "hb_native_body",
              body2: "hb_native_body2",
              privacyLink: "hb_native_privacy",
              privacyIcon: "hb_native_privicon",
              sponsoredBy: "hb_native_brand",
              image: "hb_native_image",
              icon: "hb_native_icon",
              clickUrl: "hb_native_linkurl",
              displayUrl: "hb_native_displayurl",
              cta: "hb_native_cta",
              rating: "hb_native_rating",
              address: "hb_native_address",
              downloads: "hb_native_downloads",
              likes: "hb_native_likes",
              phone: "hb_native_phone",
              price: "hb_native_price",
              salePrice: "hb_native_saleprice",
              rendererUrl: "hb_renderer_url",
              adTemplate: "hb_adTemplate",
            },
            g = {
              SRC: "s2s",
              DEFAULT_ENDPOINT:
                "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
              SYNCED_BIDDERS_KEY: "pbjsSyncs",
            },
            p = {
              BID_TARGETING_SET: "targetingSet",
              RENDERED: "rendered",
              BID_REJECTED: "bidRejected",
            },
            h = {
              INVALID: "Bid has missing or invalid properties",
              INVALID_REQUEST_ID: "Invalid request ID",
              BIDDER_DISALLOWED:
                "Bidder code is not allowed by allowedAlternateBidderCodes / allowUnknownBidderCodes",
              FLOOR_NOT_MET: "Bid does not meet price floor",
              CANNOT_CONVERT_CURRENCY: "Unable to convert currency",
              DSA_REQUIRED:
                "Bid does not provide required DSA transparency info",
              DSA_MISMATCH: "Bid indicates inappropriate DSA rendering method",
              PRICE_TOO_HIGH: "Bid price exceeds maximum value",
            },
            m = {
              body: "desc",
              body2: "desc2",
              sponsoredBy: "sponsored",
              cta: "ctatext",
              rating: "rating",
              address: "address",
              downloads: "downloads",
              likes: "likes",
              phone: "phone",
              price: "price",
              salePrice: "saleprice",
              displayUrl: "displayurl",
            },
            b = {
              sponsored: 1,
              desc: 2,
              rating: 3,
              likes: 4,
              downloads: 5,
              price: 6,
              saleprice: 7,
              phone: 8,
              address: 9,
              desc2: 10,
              displayurl: 11,
              ctatext: 12,
            },
            y = { ICON: 1, MAIN: 3 },
            v = [
              "privacyIcon",
              "clickUrl",
              "sendTargetingKeys",
              "adTemplate",
              "rendererUrl",
              "type",
            ],
            E = {
              REQUEST: "Prebid Request",
              RESPONSE: "Prebid Response",
              NATIVE: "Prebid Native",
              EVENT: "Prebid Event",
            },
            A = "__pb_locator__";
        },
        833: (e, t, n) => {
          n.d(t, { j: () => f, q: () => p });
          var i = n(901),
            r = n(69),
            o = n(272);
          const s = 2,
            a = { buckets: [{ max: 5, increment: 0.5 }] },
            d = { buckets: [{ max: 20, increment: 0.1 }] },
            c = { buckets: [{ max: 20, increment: 0.01 }] },
            u = {
              buckets: [
                { max: 3, increment: 0.01 },
                { max: 8, increment: 0.05 },
                { max: 20, increment: 0.5 },
              ],
            },
            l = {
              buckets: [
                { max: 5, increment: 0.05 },
                { max: 10, increment: 0.1 },
                { max: 20, increment: 0.5 },
              ],
            };
          function f(e, t) {
            let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 1,
              i = parseFloat(e);
            return (
              isNaN(i) && (i = ""),
              {
                low: "" === i ? "" : g(e, a, n),
                med: "" === i ? "" : g(e, d, n),
                high: "" === i ? "" : g(e, c, n),
                auto: "" === i ? "" : g(e, l, n),
                dense: "" === i ? "" : g(e, u, n),
                custom: "" === i ? "" : g(e, t, n),
              }
            );
          }
          function g(e, t, n) {
            let a = "";
            if (!p(t)) return a;
            const d = t.buckets.reduce((e, t) => (e.max > t.max ? e : t), {
              max: 0,
            });
            let c = 0,
              u = (0, i.I6)(t.buckets, (t) => {
                if (e > d.max * n) {
                  let e = t.precision;
                  void 0 === e && (e = s), (a = (t.max * n).toFixed(e));
                } else {
                  if (e <= t.max * n && e >= c * n) return (t.min = c), t;
                  c = t.max;
                }
              });
            return (
              u &&
                (a = (function (e, t, n) {
                  const i = void 0 !== t.precision ? t.precision : s,
                    a = t.increment * n,
                    d = t.min * n;
                  let c = Math.floor,
                    u = o.$W.getConfig("cpmRoundingFunction");
                  "function" == typeof u && (c = u);
                  let l,
                    f,
                    g = Math.pow(10, i + 2),
                    p = (e * g - d * g) / (a * g);
                  try {
                    l = c(p) * a + d;
                  } catch (e) {
                    f = !0;
                  }
                  (f || "number" != typeof l) &&
                    ((0, r.JE)("Invalid rounding function passed in config"),
                    (l = Math.floor(p) * a + d));
                  return (l = Number(l.toFixed(10))), l.toFixed(i);
                })(e, u, n)),
              a
            );
          }
          function p(e) {
            if ((0, r.Im)(e) || !e.buckets || !Array.isArray(e.buckets))
              return !1;
            let t = !0;
            return (
              e.buckets.forEach((e) => {
                (e.max && e.increment) || (t = !1);
              }),
              t
            );
          }
        },
        31: (e, t, n) => {
          n.d(t, { H: () => a, k: () => s });
          var i = n(555),
            r = n(69),
            o = n(595);
          const s = (0, n(214).A_)("sync", function (e) {
              return o.G;
            }),
            a = (function () {
              const e = {};
              return function (t) {
                const n = s(t);
                return (
                  e.hasOwnProperty(n) ||
                    (e[n] = new i.k((e) => {
                      const t = (0, r.CA)();
                      (t.srcdoc = `<script>${n}<\/script>`),
                        (t.onload = () => e(t.contentWindow.render)),
                        document.body.appendChild(t);
                    })),
                  e[n]
                );
              };
            })();
        },
        23: (e, t, n) => {
          n.d(t, { AU: () => m, Ic: () => v, kQ: () => y, on: () => h });
          var i = n(69),
            r = n(969),
            o = n(853),
            s = n(272);
          const a = "eventHistoryTTL";
          let d = null;
          const c = (0, o.H)({ monotonic: !0, ttl: () => d });
          s.$W.getConfig(a, (e) => {
            const t = d;
            (e = e?.[a]),
              (d = "number" == typeof e ? 1e3 * e : null),
              t !== d && c.refresh();
          });
          let u = Array.prototype.slice,
            l = Array.prototype.push,
            f = Object.values(r.qY);
          const g = r.cA,
            p = (function () {
              let e = {},
                t = {};
              function n(e) {
                return f.includes(e);
              }
              return (
                (t.has = n),
                (t.on = function (t, r, o) {
                  if (n(t)) {
                    let n = e[t] || { que: [] };
                    o
                      ? ((n[o] = n[o] || { que: [] }), n[o].que.push(r))
                      : n.que.push(r),
                      (e[t] = n);
                  } else
                    i.vV(
                      "Wrong event name : " + t + " Valid event names :" + f
                    );
                }),
                (t.emit = function (t) {
                  !(function (t, n) {
                    i.OG("Emitting event for: " + t);
                    let r = n[0] || {},
                      o = r[g[t]],
                      s = e[t] || { que: [] };
                    var a = Object.keys(s);
                    let d = [];
                    c.add({ eventType: t, args: r, id: o, elapsedTime: i.V() }),
                      o && a.includes(o) && l.apply(d, s[o].que),
                      l.apply(d, s.que),
                      (d || []).forEach(function (e) {
                        if (e)
                          try {
                            e.apply(null, n);
                          } catch (e) {
                            i.vV("Error executing handler:", "events.js", e, t);
                          }
                      });
                  })(t, u.call(arguments, 1));
                }),
                (t.off = function (t, n, r) {
                  let o = e[t];
                  i.Im(o) ||
                    (i.Im(o.que) && i.Im(o[r])) ||
                    (r && (i.Im(o[r]) || i.Im(o[r].que))) ||
                    (r
                      ? (o[r].que || []).forEach(function (e) {
                          let t = o[r].que;
                          e === n && t.splice(t.indexOf(e), 1);
                        })
                      : (o.que || []).forEach(function (e) {
                          let t = o.que;
                          e === n && t.splice(t.indexOf(e), 1);
                        }),
                    (e[t] = o));
                }),
                (t.get = function () {
                  return e;
                }),
                (t.addEvents = function (e) {
                  f = f.concat(e);
                }),
                (t.getEvents = function () {
                  return c.toArray().map((e) => Object.assign({}, e));
                }),
                t
              );
            })();
          i.cD(p.emit.bind(p));
          const {
            on: h,
            off: m,
            get: b,
            getEvents: y,
            emit: v,
            addEvents: E,
            has: A,
          } = p;
        },
        973: (e, t, n) => {
          n.d(t, { S: () => o });
          var i = n(69);
          const r = (0, n(938).CK)("fpdEnrichment"),
            o = (0, i.Bj)(function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : window.location.host;
              if (!r.cookiesAreEnabled()) return e;
              const t = e.split(".");
              if (2 === t.length) return e;
              let n,
                o,
                s = -2;
              const a = `_rdc${Date.now()}`,
                d = "writeable";
              do {
                n = t.slice(s).join(".");
                let e = new Date((0, i.vE)() + 1e4).toUTCString();
                r.setCookie(a, d, e, "Lax", n, void 0);
                r.getCookie(a, void 0) === d
                  ? ((o = !1),
                    r.setCookie(
                      a,
                      "",
                      "Thu, 01 Jan 1970 00:00:01 GMT",
                      void 0,
                      n,
                      void 0
                    ))
                  : ((s += -1), (o = Math.abs(s) <= t.length));
              } while (o);
              return n;
            });
        },
        214: (e, t, n) => {
          n.d(t, {
            A_: () => s,
            Gc: () => d,
            Y6: () => f,
            Yn: () => c,
            xG: () => l,
          });
          var i = n(128),
            r = n.n(i),
            o = n(555);
          let s = r()({ ready: r().SYNC | r().ASYNC | r().QUEUE });
          const a = (0, o.v)();
          s.ready = (() => {
            const e = s.ready;
            return function () {
              try {
                return e.apply(s, arguments);
              } finally {
                a.resolve();
              }
            };
          })();
          const d = a.promise,
            c = s.get;
          const u = {};
          function l(e, t) {
            let { postInstallAllowed: n = !1 } =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            s(
              "async",
              function (i) {
                i.forEach((e) => t(...e)), n && (u[e] = t);
              },
              e
            )([]);
          }
          function f(e, t) {
            return (
              Object.defineProperties(
                t,
                Object.fromEntries(
                  ["before", "after", "getHooks", "removeAll"].map((t) => [
                    t,
                    { get: () => e[t] },
                  ])
                )
              ),
              t
            );
          }
        },
        371: (e, t, n) => {
          n.d(t, { D4: () => o, G_: () => r, LM: () => s, s6: () => i });
          const i = "native",
            r = "video",
            o = "banner",
            s = "adpod";
        },
        449: (e, t, n) => {
          n.d(t, {
            Bm: () => I,
            IX: () => R,
            Nh: () => f,
            Xj: () => j,
            Zj: () => C,
            gs: () => T,
            l6: () => y,
            mT: () => l,
            nk: () => E,
            vO: () => w,
            yl: () => S,
          });
          var i = n(433),
            r = n(69),
            o = n(901),
            s = n(881),
            a = n(969),
            d = n(371),
            c = n(75),
            u = n(31);
          const l = [],
            f = Object.keys(a.x5).map((e) => a.x5[e]),
            g = {
              image: {
                ortb: {
                  ver: "1.2",
                  assets: [
                    {
                      required: 1,
                      id: 1,
                      img: { type: 3, wmin: 100, hmin: 100 },
                    },
                    { required: 1, id: 2, title: { len: 140 } },
                    { required: 1, id: 3, data: { type: 1 } },
                    { required: 0, id: 4, data: { type: 2 } },
                    {
                      required: 0,
                      id: 5,
                      img: { type: 1, wmin: 20, hmin: 20 },
                    },
                  ],
                },
                image: { required: !0 },
                title: { required: !0 },
                sponsoredBy: { required: !0 },
                clickUrl: { required: !0 },
                body: { required: !1 },
                icon: { required: !1 },
              },
            },
            p = x(a.h0),
            h = x(a.jO),
            m = { img: 1, js: 2, 1: "img", 2: "js" },
            b = {
              impression: 1,
              "viewable-mrc50": 2,
              "viewable-mrc100": 3,
              "viewable-video50": 4,
            };
          function y(e) {
            return e.native && "object" == typeof e.native;
          }
          function v(e) {
            if (
              (e &&
                e.type &&
                (function (e) {
                  if (!e || !(0, o.mK)(Object.keys(g), e))
                    return (0, r.vV)(`${e} nativeParam is not supported`), !1;
                  return !0;
                })(e.type) &&
                (e = g[e.type]),
              !e || !e.ortb || A(e.ortb))
            )
              return e;
          }
          function E(e) {
            e.forEach((e) => {
              const t = e.nativeParams || (0, i.A)(e, "mediaTypes.native");
              t && (e.nativeParams = v(t)),
                e.nativeParams &&
                  (e.nativeOrtbRequest =
                    e.nativeParams.ortb ||
                    (function (e) {
                      if (!e && !(0, r.Qd)(e))
                        return void (0, r.vV)(
                          "Native assets object is empty or not an object: ",
                          e
                        );
                      const t = { ver: "1.2", assets: [] };
                      for (let n in e) {
                        if (a._B.includes(n)) continue;
                        if (!a.x5.hasOwnProperty(n)) {
                          (0, r.vV)(
                            `Unrecognized native asset code: ${n}. Asset will be ignored.`
                          );
                          continue;
                        }
                        if ("privacyLink" === n) {
                          t.privacy = 1;
                          continue;
                        }
                        const i = e[n];
                        let o = 0;
                        i.required &&
                          (0, r.Lm)(i.required) &&
                          (o = Number(i.required));
                        const s = { id: t.assets.length, required: o };
                        if (n in a.h0)
                          (s.data = { type: a.jO[a.h0[n]] }),
                            i.len && (s.data.len = i.len);
                        else if ("icon" === n || "image" === n) {
                          if (
                            ((s.img = {
                              type: "icon" === n ? a.oA.ICON : a.oA.MAIN,
                            }),
                            i.aspect_ratios)
                          )
                            if ((0, r.cy)(i.aspect_ratios))
                              if (i.aspect_ratios.length) {
                                const { min_width: e, min_height: t } =
                                  i.aspect_ratios[0];
                                (0, r.Fq)(e) && (0, r.Fq)(t)
                                  ? ((s.img.wmin = e), (s.img.hmin = t))
                                  : (0, r.vV)(
                                      "image.aspect_ratios min_width or min_height are invalid: ",
                                      e,
                                      t
                                    );
                                const n = i.aspect_ratios
                                  .filter(
                                    (e) => e.ratio_width && e.ratio_height
                                  )
                                  .map(
                                    (e) => `${e.ratio_width}:${e.ratio_height}`
                                  );
                                n.length > 0 &&
                                  (s.img.ext = { aspectratios: n });
                              } else
                                (0, r.vV)(
                                  "image.aspect_ratios was passed, but it's empty:",
                                  i.aspect_ratios
                                );
                            else
                              (0, r.vV)(
                                "image.aspect_ratios was passed, but it's not a an array:",
                                i.aspect_ratios
                              );
                          i.sizes &&
                            (2 === i.sizes.length &&
                            (0, r.Fq)(i.sizes[0]) &&
                            (0, r.Fq)(i.sizes[1])
                              ? ((s.img.w = i.sizes[0]),
                                (s.img.h = i.sizes[1]),
                                delete s.img.hmin,
                                delete s.img.wmin)
                              : (0, r.vV)(
                                  "image.sizes was passed, but its value is not an array of integers:",
                                  i.sizes
                                ));
                        } else
                          "title" === n
                            ? (s.title = { len: i.len || 140 })
                            : "ext" === n && ((s.ext = i), delete s.required);
                        t.assets.push(s);
                      }
                      return t;
                    })(e.nativeParams));
            });
          }
          function A(e) {
            const t = e.assets;
            if (!Array.isArray(t) || 0 === t.length)
              return (
                (0, r.vV)(
                  "assets in mediaTypes.native.ortb is not an array, or it's empty. Assets: ",
                  t
                ),
                !1
              );
            const n = t.map((e) => e.id);
            return t.length !== new Set(n).size ||
              n.some((e) => e !== parseInt(e, 10))
              ? ((0, r.vV)(
                  "each asset object must have 'id' property, it must be unique and it must be an integer"
                ),
                !1)
              : e.hasOwnProperty("eventtrackers") &&
                !Array.isArray(e.eventtrackers)
              ? ((0, r.vV)(
                  "ortb.eventtrackers is not an array. Eventtrackers: ",
                  e.eventtrackers
                ),
                !1)
              : t.every((e) =>
                  (function (e) {
                    if (!(0, r.Qd)(e))
                      return (
                        (0, r.vV)(
                          "asset must be an object. Provided asset: ",
                          e
                        ),
                        !1
                      );
                    if (e.img) {
                      if (!(0, r.Et)(e.img.w) && !(0, r.Et)(e.img.wmin))
                        return (
                          (0, r.vV)(
                            "for img asset there must be 'w' or 'wmin' property"
                          ),
                          !1
                        );
                      if (!(0, r.Et)(e.img.h) && !(0, r.Et)(e.img.hmin))
                        return (
                          (0, r.vV)(
                            "for img asset there must be 'h' or 'hmin' property"
                          ),
                          !1
                        );
                    } else if (e.title) {
                      if (!(0, r.Et)(e.title.len))
                        return (
                          (0, r.vV)(
                            "for title asset there must be 'len' property defined"
                          ),
                          !1
                        );
                    } else if (e.data) {
                      if (!(0, r.Et)(e.data.type))
                        return (
                          (0, r.vV)(
                            "for data asset 'type' property must be a number"
                          ),
                          !1
                        );
                    } else if (
                      e.video &&
                      !(
                        Array.isArray(e.video.mimes) &&
                        Array.isArray(e.video.protocols) &&
                        (0, r.Et)(e.video.minduration) &&
                        (0, r.Et)(e.video.maxduration)
                      )
                    )
                      return (
                        (0, r.vV)("video asset is not properly configured"), !1
                      );
                    return !0;
                  })(e)
                );
          }
          function I(e) {
            let { index: t = s.n.index } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            const n = t.getAdUnit(e);
            if (!n) return !1;
            let a = n.nativeOrtbRequest;
            return (function (e, t) {
              if (!(0, i.A)(e, "link.url"))
                return (
                  (0, r.vV)(
                    "native response doesn't have 'link' property. Ortb response: ",
                    e
                  ),
                  !1
                );
              let n = t.assets.filter((e) => 1 === e.required).map((e) => e.id),
                s = e.assets.map((e) => e.id);
              const a = n.every((e) => (0, o.mK)(s, e));
              a ||
                (0, r.vV)(
                  `didn't receive a bid with all required assets. Required ids: ${n}, but received ids in response: ${s}`
                );
              return a;
            })(e.native?.ortb || q(e.native, a), a);
          }
          function w(e, t) {
            const n = t.native.ortb || $(t.native);
            return (
              "click" === e.action
                ? (function (e) {
                    let t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null,
                      { fetchURL: n = r.z$ } =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : {};
                    if (t) {
                      const i = (e.assets || [])
                          .filter((e) => e.link)
                          .reduce((e, t) => ((e[t.id] = t.link), e), {}),
                        r = e.link?.clicktrackers || [];
                      let o = i[t],
                        s = r;
                      o && (s = o.clicktrackers || []), s.forEach((e) => n(e));
                    } else (e.link?.clicktrackers || []).forEach((e) => n(e));
                  })(n, e?.assetId)
                : (function (e) {
                    let {
                      runMarkup: t = (e) => (0, r.ro)(e),
                      fetchURL: n = r.z$,
                    } =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    const i = (e.eventtrackers || []).filter(
                      (e) => e.event === b.impression
                    );
                    let { img: o, js: s } = i.reduce(
                      (e, t) => (
                        m.hasOwnProperty(t.method) &&
                          e[m[t.method]].push(t.url),
                        e
                      ),
                      { img: [], js: [] }
                    );
                    e.imptrackers && (o = o.concat(e.imptrackers));
                    o.forEach((e) => n(e)),
                      (s = s.map((e) => `<script async src="${e}"><\/script>`)),
                      e.jstracker && (s = s.concat([e.jstracker]));
                    s.length && t(s.join("\n"));
                  })(n),
              e.action
            );
          }
          function T(e, t) {
            const n = t?.nativeOrtbRequest,
              i = e.native?.ortb;
            if (n && i) {
              const t = (function (e, t) {
                const n = {},
                  i = t?.assets || [];
                (n.clickUrl = e.link?.url), (n.privacyLink = e.privacy);
                for (const t of e?.assets || []) {
                  const e = i.find((e) => t.id === e.id);
                  t.title
                    ? (n.title = t.title.text)
                    : t.img
                    ? (n[e?.img?.type === a.oA.MAIN ? "image" : "icon"] = {
                        url: t.img.url,
                        width: t.img.w,
                        height: t.img.h,
                      })
                    : t.data && (n[p[h[e?.data?.type]]] = t.data.value);
                }
                n.impressionTrackers = [];
                let r = [];
                e.imptrackers && n.impressionTrackers.push(...e.imptrackers);
                for (const t of e?.eventtrackers || [])
                  t.event === b.impression &&
                    t.method === m.img &&
                    n.impressionTrackers.push(t.url),
                    t.event === b.impression &&
                      t.method === m.js &&
                      r.push(t.url);
                (r = r.map((e) => `<script async src="${e}"><\/script>`)),
                  e?.jstracker && r.push(e.jstracker);
                r.length && (n.javascriptTrackers = r.join("\n"));
                return n;
              })(i, n);
              Object.assign(e.native, t);
            }
            ["rendererUrl", "adTemplate"].forEach((n) => {
              const i = t?.nativeParams?.[n];
              i && (e.native[n] = D(i));
            });
          }
          function C(e) {
            let { index: t = s.n.index } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = {};
            const r = t.getAdUnit(e),
              o =
                null == r?.nativeParams?.ortb &&
                !1 !== (0, i.A)(r, "nativeParams.sendTargetingKeys"),
              d = (function (e) {
                const t = {};
                (0, i.A)(e, "nativeParams.ext") &&
                  Object.keys(e.nativeParams.ext).forEach((e) => {
                    t[e] = `hb_native_${e}`;
                  });
                return { ...a.x5, ...t };
              })(r),
              c = { ...e.native, ...e.native.ext };
            return (
              delete c.ext,
              Object.keys(c).forEach((t) => {
                const s = d[t];
                let a = D(e.native[t]) || D((0, i.A)(e, `native.ext.${t}`));
                if ("adTemplate" === t || !s || !a) return;
                let c = (0, i.A)(r, `nativeParams.${t}.sendId`);
                if (
                  ("boolean" != typeof c &&
                    (c = (0, i.A)(r, `nativeParams.ext.${t}.sendId`)),
                  c)
                ) {
                  a = `${s}:${e.adId}`;
                }
                let u = (0, i.A)(r, `nativeParams.${t}.sendTargetingKeys`);
                "boolean" != typeof u &&
                  (u = (0, i.A)(r, `nativeParams.ext.${t}.sendTargetingKeys`));
                ("boolean" == typeof u ? u : o) && (n[s] = a);
              }),
              n
            );
          }
          function B(e, t) {
            let n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              i = [];
            return (
              Object.entries(e)
                .filter((e) => {
                  let [i, r] = e;
                  return (
                    r &&
                    ((!1 === n && "ext" === i) || null == t || t.includes(i))
                  );
                })
                .forEach((e) => {
                  let [r, o] = e;
                  !1 === n && "ext" === r
                    ? i.push(...B(o, t, !0))
                    : (n || a.x5.hasOwnProperty(r)) &&
                      i.push({ key: r, value: D(o) });
                }),
              i
            );
          }
          function O(e, t, n) {
            let { index: i = s.n.index } =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
            const o = { message: "assetResponse", adId: e.adId };
            let d = (0, c.vd)(t).native;
            return (
              d
                ? ((o.native = Object.assign({}, d)),
                  (o.renderer = (0, u.k)(t)),
                  null != n &&
                    (d.assets = d.assets.filter((e) => {
                      let { key: t } = e;
                      return n.includes(t);
                    })))
                : (d = (function (e, t, n) {
                    const i = {
                      ...(0, r.SH)(e.native, ["rendererUrl", "adTemplate"]),
                      assets: B(e.native, n),
                      nativeKeys: a.x5,
                    };
                    return (
                      e.native.ortb
                        ? (i.ortb = e.native.ortb)
                        : t.mediaTypes?.native?.ortb &&
                          (i.ortb = q(e.native, t.nativeOrtbRequest)),
                      i
                    );
                  })(t, i.getAdUnit(t), n)),
              Object.assign(o, d)
            );
          }
          const k = Object.fromEntries(
            Object.entries(a.x5).map((e) => {
              let [t, n] = e;
              return [n, t];
            })
          );
          function R(e, t) {
            const n = e.assets.map((e) => k[e]);
            return O(e, t, n);
          }
          function S(e, t) {
            return O(e, t, null);
          }
          function D(e) {
            return e?.url || e;
          }
          function U(e, t) {
            for (; e && t && e !== t; ) e > t ? (e -= t) : (t -= e);
            return e || t;
          }
          function _(e) {
            if (!A(e)) return;
            const t = {};
            for (const n of e.assets) {
              if (n.title) {
                const e = {
                  required: !!n.required && Boolean(n.required),
                  len: n.title.len,
                };
                t.title = e;
              } else if (n.img) {
                const e = { required: !!n.required && Boolean(n.required) };
                if (n.img.w && n.img.h) e.sizes = [n.img.w, n.img.h];
                else if (n.img.wmin && n.img.hmin) {
                  const t = U(n.img.wmin, n.img.hmin);
                  e.aspect_ratios = [
                    {
                      min_width: n.img.wmin,
                      min_height: n.img.hmin,
                      ratio_width: n.img.wmin / t,
                      ratio_height: n.img.hmin / t,
                    },
                  ];
                }
                n.img.type === a.oA.MAIN ? (t.image = e) : (t.icon = e);
              } else if (n.data) {
                let e = Object.keys(a.jO).find((e) => a.jO[e] === n.data.type),
                  i = Object.keys(a.h0).find((t) => a.h0[t] === e);
                (t[i] = { required: !!n.required && Boolean(n.required) }),
                  n.data.len && (t[i].len = n.data.len);
              }
              e.privacy && (t.privacyLink = { required: !1 });
            }
            return t;
          }
          function j(e) {
            {
              if (!e || !(0, r.cy)(e)) return e;
              if (!e.some((e) => (e?.mediaTypes || {})[d.s6]?.ortb)) return e;
              let t = (0, r.Go)(e);
              for (const e of t)
                e.mediaTypes &&
                  e.mediaTypes[d.s6] &&
                  e.mediaTypes[d.s6].ortb &&
                  ((e.mediaTypes[d.s6] = Object.assign(
                    (0, r.Up)(e.mediaTypes[d.s6], a._B),
                    _(e.mediaTypes[d.s6].ortb)
                  )),
                  (e.nativeParams = v(e.mediaTypes[d.s6])));
              return t;
            }
          }
          function $(e) {
            const t = { link: {}, eventtrackers: [] };
            return (
              Object.entries(e).forEach((e) => {
                let [n, i] = e;
                switch (n) {
                  case "clickUrl":
                    t.link.url = i;
                    break;
                  case "clickTrackers":
                    t.link.clicktrackers = Array.isArray(i) ? i : [i];
                    break;
                  case "impressionTrackers":
                    (Array.isArray(i) ? i : [i]).forEach((e) => {
                      t.eventtrackers.push({
                        event: b.impression,
                        method: m.img,
                        url: e,
                      });
                    });
                    break;
                  case "javascriptTrackers":
                    t.jstracker = Array.isArray(i) ? i.join("") : i;
                    break;
                  case "privacyLink":
                    t.privacy = i;
                }
              }),
              t
            );
          }
          function q(e, t) {
            const n = { ...$(e), assets: [] };
            function i(e, i) {
              let o = t.assets.find(e);
              null != o && ((o = (0, r.Go)(o)), i(o), n.assets.push(o));
            }
            return (
              Object.keys(e)
                .filter((t) => !!e[t])
                .forEach((t) => {
                  const n = D(e[t]);
                  switch (t) {
                    case "title":
                      i(
                        (e) => null != e.title,
                        (e) => {
                          e.title = { text: n };
                        }
                      );
                      break;
                    case "image":
                    case "icon":
                      const e = "image" === t ? a.oA.MAIN : a.oA.ICON;
                      i(
                        (t) => null != t.img && t.img.type === e,
                        (e) => {
                          e.img = { url: n };
                        }
                      );
                      break;
                    default:
                      t in a.h0 &&
                        i(
                          (e) =>
                            null != e.data && e.data.type === a.jO[a.h0[t]],
                          (e) => {
                            e.data = { value: n };
                          }
                        );
                  }
                }),
              n
            );
          }
          function x(e) {
            var t = {};
            for (var n in e) t[e[n]] = n;
            return t;
          }
        },
        0: (e, t, n) => {
          n.d(t, { S3: () => r, pS: () => l });
          const i = ["request", "imp", "bidResponse", "response"],
            [r, o, s, a] = i,
            [d, c] = ["default", "pbs"],
            u = new Set(i);
          const { registerOrtbProcessor: l, getProcessors: f } = (function () {
            const e = {};
            return {
              registerOrtbProcessor(t) {
                let {
                  type: n,
                  name: r,
                  fn: o,
                  priority: s = 0,
                  dialects: a = [d],
                } = t;
                if (!u.has(n))
                  throw new Error(
                    `ORTB processor type must be one of: ${i.join(", ")}`
                  );
                a.forEach((t) => {
                  e.hasOwnProperty(t) || (e[t] = {}),
                    e[t].hasOwnProperty(n) || (e[t][n] = {}),
                    (e[t][n][r] = { priority: s, fn: o });
                });
              },
              getProcessors: (t) => e[t] || {},
            };
          })();
        },
        901: (e, t, n) => {
          function i(e, t, n) {
            return (e && e.includes(t, n)) || !1;
          }
          function r() {
            return Array.from.apply(Array, arguments);
          }
          function o(e, t, n) {
            return e && e.find(t, n);
          }
          n.d(t, { A6: () => r, I6: () => o, mK: () => i });
        },
        635: (e, t, n) => {
          n.d(t, { gH: () => He });
          var i = n(873),
            r = n(69),
            o = n(172),
            s = n(433),
            a = n(449),
            d = n(969),
            c = n(901),
            u = n(75),
            l = n(31);
          const { REQUEST: f, RESPONSE: g, NATIVE: p, EVENT: h } = d.nl,
            m = {
              [f]: function (e, t, n) {
                (0, u.bw)({
                  renderFn(t) {
                    e(Object.assign({ message: g, renderer: (0, l.k)(n) }, t));
                  },
                  resizeFn: y(t.adId, n),
                  options: t.options,
                  adId: t.adId,
                  bidResponse: n,
                });
              },
              [h]: function (e, t, n) {
                if (null == n)
                  return void (0, r.vV)(
                    `Cannot find ad '${t.adId}' for x-origin event request`
                  );
                if (n.status !== d.tl.RENDERED)
                  return void (0, r.JE)(
                    `Received x-origin event request without corresponding render request for ad '${n.adId}'`
                  );
                return (0, u.Uc)(t, n);
              },
            };
          function b() {
            window.addEventListener(
              "message",
              function (e) {
                !(function (e) {
                  var t = e.message ? "message" : "data",
                    n = {};
                  try {
                    n = JSON.parse(e[t]);
                  } catch (e) {
                    return;
                  }
                  if (n && n.adId && n.message && m.hasOwnProperty(n.message))
                    (0, u.$A)(n.adId, n.message === d.nl.REQUEST).then((t) => {
                      var i, o;
                      m[n.message](
                        ((i = n.adId),
                        (o = (function (e) {
                          return null == e.origin && 0 === e.ports.length
                            ? function () {
                                const e =
                                  "Cannot post message to a frame with null origin. Please update creatives to use MessageChannel, see https://github.com/prebid/Prebid.js/issues/7870";
                                throw ((0, r.vV)(e), new Error(e));
                              }
                            : e.ports.length > 0
                            ? function (t) {
                                e.ports[0].postMessage(JSON.stringify(t));
                              }
                            : function (t) {
                                e.source.postMessage(
                                  JSON.stringify(t),
                                  e.origin
                                );
                              };
                        })(e)),
                        function (e) {
                          for (
                            var t = arguments.length,
                              n = new Array(t > 1 ? t - 1 : 0),
                              r = 1;
                            r < t;
                            r++
                          )
                            n[r - 1] = arguments[r];
                          return o(Object.assign({}, e, { adId: i }), ...n);
                        }),
                        n,
                        t
                      );
                    });
                })(e);
              },
              !1
            );
          }
          function y(e, t) {
            return function (n, i) {
              !(function (e) {
                let { adId: t, adUnitCode: n, width: i, height: o } = e;
                function s(e) {
                  return e ? e + "px" : "100%";
                }
                function a(e) {
                  let i = d(t, n),
                    r = document.getElementById(i);
                  return r && r.querySelector(e);
                }
                function d(e, t) {
                  return (0, r.II)() ? u(e) : (0, r.t1)() ? l(t) : t;
                }
                function u(e) {
                  const t = (0, c.I6)(
                    window.googletag.pubads().getSlots(),
                    (t) =>
                      (0, c.I6)(t.getTargetingKeys(), (n) =>
                        (0, c.mK)(t.getTargeting(n), e)
                      )
                  );
                  return t ? t.getSlotElementId() : null;
                }
                function l(e) {
                  let t = window.apntag.getTag(e);
                  return t && t.targetId;
                }
                ["div", "iframe"].forEach((e) => {
                  let t = a(e + ':not([style*="display: none"])');
                  if (t) {
                    let e = t.style;
                    (e.width = s(i)), (e.height = s(o));
                  } else
                    (0, r.vV)(
                      `Unable to locate matching page element for adUnitCode ${n}.  Can't resize it to ad's dimensions.  Please review setup.`
                    );
                });
              })({ ...t, width: n, height: i, adId: e });
            };
          }
          Object.assign(m, {
            [p]: function (e, t, n) {
              if (null == n)
                return void (0, r.vV)(
                  `Cannot find ad for x-origin event request: '${t.adId}'`
                );
              switch (t.action) {
                case "assetRequest":
                  (0, u.Hh)(n, () => e((0, a.IX)(t, n)));
                  break;
                case "allAssetRequest":
                  (0, u.Hh)(n, () => e((0, a.yl)(t, n)));
                  break;
                default:
                  (0, u.vW)(t, n, { resizeFn: y(t.adId, n) }), (0, u.Pk)(n);
              }
            },
          });
          var v = n(230),
            E = n(272),
            A = n(881),
            I = n(863),
            w = n(693),
            T = n(23),
            C = n(214),
            B = n(371);
          function O(e, t) {
            return e === t ? 0 : e < t ? -1 : 1;
          }
          function k() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : (e) => e;
            return (t, n) => O(e(t), e(n));
          }
          function R() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : O;
            return (t, n) => -e(t, n) || 0;
          }
          function S() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return function (e, n) {
              for (const i of t) {
                const t = i(e, n);
                if (0 !== t) return t;
              }
              return 0;
            };
          }
          function D() {
            return (function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : O;
              return (t, n) => (e(n, t) < 0 ? n : t);
            })(
              R(
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : O
              )
            );
          }
          const U = k((e) => e.cpm),
            _ = k((e) => e.responseTimestamp),
            j = D(S(U, R(k((e) => e.timeToRespond)))),
            $ = D(S(U, R(_)));
          D(S(U, _));
          var q = [];
          const x = 20,
            N = "targetingControls.allowTargetingKeys",
            P = "targetingControls.addTargetingKeys",
            W = `Only one of "${N}" or "${P}" can be set`,
            V = Object.keys(d.xS).map((e) => d.xS[e]);
          let M = {
            isActualBid: (e) => e.getStatusCode() === d.XQ.GOOD,
            isBidNotExpired: (e) =>
              e.responseTimestamp + 1e3 * (0, I.L)(e) > (0, r.vE)(),
            isUnusedBid: (e) =>
              e &&
              ((e.status && !(0, c.mK)([d.tl.RENDERED], e.status)) ||
                !e.status),
          };
          function G(e) {
            return !Object.values(M).some((t) => !t(e));
          }
          const F = (0, C.A_)("sync", function (e, t) {
            let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              i =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              o =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : r.Q0;
            if (!i) {
              const i = [],
                s = E.$W.getConfig("sendBidsControl.dealPrioritization");
              let a = (0, r.$z)(e, "adUnitCode");
              return (
                Object.keys(a).forEach((e) => {
                  let d = [],
                    c = (0, r.$z)(a[e], "bidderCode");
                  Object.keys(c).forEach((e) => {
                    d.push(c[e].reduce(t));
                  }),
                    n
                      ? ((d = s
                          ? d.sort(H(!0))
                          : d.sort((e, t) => t.cpm - e.cpm)),
                        i.push(...d.slice(0, n)))
                      : ((d = d.sort(o)), i.push(...d));
                }),
                i
              );
            }
            return e;
          });
          function H() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return function (t, n) {
              return void 0 !== t.adserverTargeting.hb_deal &&
                void 0 === n.adserverTargeting.hb_deal
                ? -1
                : void 0 === t.adserverTargeting.hb_deal &&
                  void 0 !== n.adserverTargeting.hb_deal
                ? 1
                : e
                ? n.cpm - t.cpm
                : n.adserverTargeting.hb_pb - t.adserverTargeting.hb_pb;
            };
          }
          function L(e, t) {
            return (
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : () => window.googletag.pubads().getSlots()
            )().reduce((e, n) => {
              const i = (0, r.fp)(t) && t(n);
              return (
                Object.keys(e)
                  .filter((0, r.fp)(i) ? i : (0, r.iC)(n))
                  .forEach((t) => e[t].push(n)),
                e
              );
            }, Object.fromEntries(e.map((e) => [e, []])));
          }
          const z = (function (e) {
            let t = {},
              n = {};
            function i(e) {
              let t =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              if (
                !(
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1]
                )
              )
                return [];
              const n = V.concat(a.Nh),
                i = E.$W.getConfig(
                  "targetingControls.allowSendAllBidsTargetingKeys"
                ),
                r = i ? i.map((e) => d.xS[e]) : n;
              return e.reduce((e, i) => {
                if (!t || i.dealId) {
                  const o = (function (e, t) {
                    return t.reduce(
                      (t, n) => (
                        e.adserverTargeting[n] &&
                          t.push({
                            [`${n}_${e.bidderCode}`.substring(0, 20)]: [
                              e.adserverTargeting[n],
                            ],
                          }),
                        t
                      ),
                      []
                    );
                  })(
                    i,
                    n.filter(
                      (e) =>
                        void 0 !== i.adserverTargeting[e] &&
                        (t || -1 !== r.indexOf(e))
                    )
                  );
                  o && e.push({ [i.adUnitCode]: o });
                }
                return e;
              }, []);
            }
            function o(t) {
              return "string" == typeof t
                ? [t]
                : (0, r.cy)(t)
                ? t
                : e.getAdUnitCodes() || [];
            }
            function u() {
              let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : $,
                i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : void 0,
                r = e.getBidsReceived().reduce((e, t) => {
                  const i = E.$W.getConfig("useBidCache"),
                    r = E.$W.getConfig("bidCacheFilterFunction"),
                    o = n[t.adUnitCode] === t.auctionId,
                    a = !(i && !o && "function" == typeof r) || !!r(t);
                  return (
                    (i || o) &&
                      a &&
                      (0, s.A)(t, "video.context") !== B.LM &&
                      G(t) &&
                      ((t.latestTargetedAuctionId = n[t.adUnitCode]),
                      e.push(t)),
                    e
                  );
                }, []);
              return F(r, t, void 0, void 0, void 0, i);
            }
            function l() {
              return e
                .getStandardBidderAdServerTargeting()
                .map((e) => e.key)
                .concat(V)
                .filter(r.hj);
            }
            return (
              (t.setLatestAuctionForAdUnit = function (e, t) {
                n[e] = t;
              }),
              (t.resetPresetTargeting = function (e, t) {
                if ((0, r.II)()) {
                  const n = o(e);
                  Object.values(L(n, t)).forEach((e) => {
                    e.forEach((e) => {
                      !(function (e) {
                        q.forEach((t) => {
                          e.getTargeting(t) && e.clearTargeting(t);
                        });
                      })(e);
                    });
                  });
                }
              }),
              (t.resetPresetTargetingAST = function (e) {
                o(e).forEach(function (e) {
                  const t = window.apntag.getTag(e);
                  if (t && t.keywords) {
                    const n = Object.keys(t.keywords),
                      i = {};
                    n.forEach((e) => {
                      (0, c.mK)(q, e.toLowerCase()) || (i[e] = t.keywords[e]);
                    }),
                      window.apntag.modifyTag(e, { keywords: i });
                  }
                });
              }),
              (t.getAllTargeting = function (t, n, f) {
                let g =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : j,
                  p =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : r.Q0;
                f ||= u(g, p);
                const h = o(t),
                  m = E.$W.getConfig("enableSendAllBids"),
                  b = E.$W.getConfig("sendBidsControl.bidLimit"),
                  y = (m && (n || b)) || 0,
                  { customKeysByUnit: v, filteredBids: A } = (function (e, t) {
                    const n = [],
                      i = {},
                      o = E.$W.getConfig(
                        "targetingControls.alwaysIncludeDeals"
                      );
                    return (
                      t.forEach((t) => {
                        const s = (0, c.mK)(e, t.adUnitCode),
                          d =
                            !0 === w.u.get(t.bidderCode, "allowZeroCpmBids")
                              ? t.cpm >= 0
                              : t.cpm > 0,
                          u = o && t.dealId;
                        s &&
                          (u || d) &&
                          (n.push(t),
                          Object.keys(t.adserverTargeting)
                            .filter(
                              (function () {
                                let e = l();
                                e = e.concat(a.Nh);
                                return function (t) {
                                  return -1 === e.indexOf(t);
                                };
                              })()
                            )
                            .forEach((e) => {
                              const n = e.substring(0, x),
                                o = i[t.adUnitCode] || {},
                                s = [t.adserverTargeting[e]];
                              o[n]
                                ? (o[n] = o[n].concat(s).filter(r.hj))
                                : (o[n] = s),
                                (i[t.adUnitCode] = o);
                            }));
                      }),
                      { filteredBids: n, customKeysByUnit: i }
                    );
                  })(h, f);
                let I = (function (t, n) {
                  const o = (function (e) {
                    let t = [],
                      n = e.reduce(
                        (e, n) => (
                          (0, c.mK)(t, n.adUnitCode) ||
                            (e.push(n), t.push(n.adUnitCode)),
                          e
                        ),
                        []
                      ),
                      i = l();
                    return (
                      (n = n.map((e) => ({
                        [e.adUnitCode]: Object.keys(e.adserverTargeting)
                          .filter(
                            (t) =>
                              void 0 === e.sendStandardTargeting ||
                              e.sendStandardTargeting ||
                              -1 === i.indexOf(t)
                          )
                          .reduce((t, n) => {
                            const i = [e.adserverTargeting[n]],
                              r = { [n.substring(0, x)]: i };
                            if (n === d.xS.DEAL) {
                              const o = `${n}_${e.bidderCode}`.substring(0, x),
                                s = { [o]: i };
                              return [...t, r, s];
                            }
                            return [...t, r];
                          }, []),
                      }))),
                      n
                    );
                  })(t)
                    .concat(
                      (function (e, t) {
                        return e.reduce((e, n) => {
                          const i = Object.assign({}, n),
                            r = t[i.adUnitCode],
                            o = [];
                          return (
                            r &&
                              Object.keys(r).forEach((e) => {
                                e && r[e] && o.push({ [e]: r[e] });
                              }),
                            e.push({ [i.adUnitCode]: o }),
                            e
                          );
                        }, []);
                      })(t, n)
                    )
                    .concat(
                      (function (e) {
                        const t = E.$W.getConfig(
                          "targetingControls.alwaysIncludeDeals"
                        );
                        return i(
                          e,
                          E.$W.getConfig("enableSendAllBids") || t,
                          t
                        );
                      })(t)
                    )
                    .concat(
                      (function () {
                        function t(e) {
                          return (0, s.A)(e, d.iD.ADSERVER_TARGETING);
                        }
                        function n(e) {
                          const n = t(e);
                          return Object.keys(n).map(function (e) {
                            return (
                              (0, r.O8)(n[e]) &&
                                (n[e] = n[e].split(",").map((e) => e.trim())),
                              (0, r.cy)(n[e]) || (n[e] = [n[e]]),
                              { [e]: n[e] }
                            );
                          });
                        }
                        return e
                          .getAdUnits()
                          .filter((e) => t(e))
                          .reduce((e, t) => {
                            const i = n(t);
                            return i && e.push({ [t.code]: i }), e;
                          }, []);
                      })()
                    );
                  return (
                    o.forEach((e) => {
                      !(function (e) {
                        Object.keys(e).forEach((t) => {
                          e[t].forEach((e) => {
                            const t = Object.keys(e);
                            -1 === q.indexOf(t[0]) && (q = t.concat(q));
                          });
                        });
                      })(e);
                    }),
                    o
                  );
                })(F(A, g, y, void 0, p), v);
                const T = Object.keys(Object.assign({}, d.Zh, d.x5));
                let C = E.$W.getConfig(N);
                const B = E.$W.getConfig(P);
                if (null != B && null != C) throw new Error(W);
                (C = null != B ? T.concat(B) : C || T),
                  Array.isArray(C) &&
                    C.length > 0 &&
                    (I = (function (e, t) {
                      const n = Object.assign({}, d.xS, d.x5),
                        i = Object.keys(n),
                        o = {};
                      (0, r.fH)(
                        `allowTargetingKeys - allowed keys [ ${t
                          .map((e) => n[e])
                          .join(", ")} ]`
                      ),
                        e.map((e) => {
                          const r = Object.keys(e)[0],
                            s = e[r].filter((e) => {
                              const r = Object.keys(e)[0],
                                s =
                                  0 ===
                                    i.filter((e) => 0 === r.indexOf(n[e]))
                                      .length ||
                                  (0, c.I6)(t, (e) => {
                                    const t = n[e];
                                    return 0 === r.indexOf(t);
                                  });
                              return (o[r] = !s), s;
                            });
                          e[r] = s;
                        });
                      const s = Object.keys(o).filter((e) => o[e]);
                      return (
                        (0, r.fH)(
                          `allowTargetingKeys - removed keys [ ${s.join(
                            ", "
                          )} ]`
                        ),
                        e.filter((e) => e[Object.keys(e)[0]].length > 0)
                      );
                    })(I, C)),
                  (I = (function (e) {
                    let t = e.map((e) => ({
                      [Object.keys(e)[0]]: e[Object.keys(e)[0]]
                        .map((e) => ({
                          [Object.keys(e)[0]]: e[Object.keys(e)[0]].join(","),
                        }))
                        .reduce((e, t) => Object.assign(t, e), {}),
                    }));
                    return (
                      (t = t.reduce(function (e, t) {
                        var n = Object.keys(t)[0];
                        return (e[n] = Object.assign({}, e[n], t[n])), e;
                      }, {})),
                      t
                    );
                  })(I));
                const O = E.$W.getConfig(
                  "targetingControls.auctionKeyMaxChars"
                );
                return (
                  O &&
                    ((0, r.fH)(
                      `Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ${O} characters.  Running checks on auction keys...`
                    ),
                    (I = (function (e, t) {
                      let n = (0, r.Go)(e),
                        i = Object.keys(n)
                          .map((e) => ({
                            adUnitCode: e,
                            adserverTargeting: n[e],
                          }))
                          .sort(H());
                      return i.reduce(function (e, i, o, s) {
                        let a =
                          ((d = i.adserverTargeting),
                          Object.keys(d).reduce(function (e, t) {
                            return e + `${t}%3d${encodeURIComponent(d[t])}%26`;
                          }, ""));
                        var d;
                        o + 1 === s.length && (a = a.slice(0, -3));
                        let c = i.adUnitCode,
                          u = a.length;
                        return (
                          u <= t
                            ? ((t -= u),
                              (0, r.fH)(
                                `AdUnit '${c}' auction keys comprised of ${u} characters.  Deducted from running threshold; new limit is ${t}`,
                                n[c]
                              ),
                              (e[c] = n[c]))
                            : (0, r.JE)(
                                `The following keys for adUnitCode '${c}' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ${u}, the current allotted amount was ${t}.\n`,
                                n[c]
                              ),
                          o + 1 === s.length &&
                            0 === Object.keys(e).length &&
                            (0, r.vV)(
                              "No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."
                            ),
                          e
                        );
                      }, {});
                    })(I, O))),
                  h.forEach((e) => {
                    I[e] || (I[e] = {});
                  }),
                  I
                );
              }),
              E.$W.getConfig("targetingControls", function (e) {
                null != (0, s.A)(e, N) &&
                  null != (0, s.A)(e, P) &&
                  (0, r.vV)(W);
              }),
              (t.setTargetingForGPT = (0, C.A_)(
                "sync",
                function (n, i) {
                  let o = t.getAllTargeting(n),
                    s = Object.fromEntries(q.map((e) => [e, null]));
                  Object.entries(L(Object.keys(o), i)).forEach((e) => {
                    let [t, n] = e;
                    n.forEach((e) => {
                      Object.keys(o[t]).forEach((e) => {
                        let n = o[t][e];
                        "string" == typeof n &&
                          -1 !== n.indexOf(",") &&
                          (n = n.split(",")),
                          (o[t][e] = n);
                      }),
                        (0, r.OG)(
                          `Attempting to set targeting-map for slot: ${e.getSlotElementId()} with targeting-map:`,
                          o[t]
                        ),
                        e.updateTargetingFromMap(Object.assign({}, s, o[t]));
                    });
                  }),
                    Object.keys(o).forEach((t) => {
                      Object.keys(o[t]).forEach((n) => {
                        "hb_adid" === n &&
                          e.setStatusForBids(o[t][n], d.tl.BID_TARGETING_SET);
                      });
                    }),
                    t.targetingDone(o),
                    T.Ic(d.qY.SET_TARGETING, o);
                },
                "setTargetingForGPT"
              )),
              (t.targetingDone = (0, C.A_)(
                "sync",
                function (e) {
                  return e;
                },
                "targetingDone"
              )),
              (t.getWinningBids = function (e, t) {
                let n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : j,
                  i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : r.Q0;
                const s = [],
                  a = t || u(n, i),
                  d = o(e);
                return a.reduce((e, t) => {
                  const n = t.adUnitCode,
                    i =
                      !0 === w.u.get(n, "allowZeroCpmBids")
                        ? t.cpm >= 0
                        : t.cpm > 0,
                    r =
                      E.$W.getConfig("targetingControls.alwaysIncludeDeals") &&
                      t.dealId;
                  return (
                    (0, c.mK)(d, n) &&
                      !(0, c.mK)(s, n) &&
                      (r || i) &&
                      (e.push(t), s.push(n)),
                    e
                  );
                }, []);
              }),
              (t.setTargetingForAst = function (e) {
                let n = t.getAllTargeting(e);
                try {
                  t.resetPresetTargetingAST(e);
                } catch (e) {
                  (0, r.vV)("unable to reset targeting for AST" + e);
                }
                Object.keys(n).forEach((e) =>
                  Object.keys(n[e]).forEach((t) => {
                    if (
                      ((0, r.OG)(
                        `Attempting to set targeting for targetId: ${e} key: ${t} value: ${n[e][t]}`
                      ),
                      (0, r.O8)(n[e][t]) || (0, r.cy)(n[e][t]))
                    ) {
                      let i = {},
                        r = /pt[0-9]/;
                      t.search(r) < 0
                        ? (i[t.toUpperCase()] = n[e][t])
                        : (i[t] = n[e][t]),
                        window.apntag.setKeywords(e, i, {
                          overrideKeyValue: !0,
                        });
                    }
                  })
                );
              }),
              (t.isApntagDefined = function () {
                if (window.apntag && (0, r.fp)(window.apntag.setKeywords))
                  return !0;
              }),
              t
            );
          })(A.n);
          var J = n(597),
            K = n(580),
            Q = n(555),
            Y = n(569);
          const X = "__pbjs_debugging__";
          function Z() {
            return (0, i.m)().installedModules.includes("debugging");
          }
          function ee(e) {
            return new Q.k((t) => {
              (0, K.R)(e, Y.tp, "debugging", t);
            });
          }
          function te() {
            let { alreadyInstalled: e = Z, script: t = ee } =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = null;
            return function () {
              return (
                null == n &&
                  (n = new Q.k((n, o) => {
                    setTimeout(() => {
                      if (e()) n();
                      else {
                        const e =
                          "https://cdn.jsdelivr.net/npm/prebid.js@9.21.0/dist/debugging-standalone.js";
                        (0, r.OG)(
                          `Debugging module not installed, loading it from "${e}"...`
                        ),
                          ((0, i.m)()._installDebugging = !0),
                          t(e)
                            .then(() => {
                              (0, i.m)()._installDebugging({
                                DEBUG_KEY: X,
                                hook: C.A_,
                                config: E.$W,
                                createBid: J.O,
                                logger: (0, r.h0)("DEBUG:"),
                              });
                            })
                            .then(n, o);
                      }
                    });
                  })),
                n
              );
            };
          }
          const ne = (function () {
            let { load: e = te(), hook: t = (0, C.Yn)("requestBids") } =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = null,
              i = !1;
            function r(e) {
              for (
                var t = arguments.length,
                  i = new Array(t > 1 ? t - 1 : 0),
                  r = 1;
                r < t;
                r++
              )
                i[r - 1] = arguments[r];
              return (n || Q.k.resolve()).then(() => e.apply(this, i));
            }
            function o() {
              t.getHooks({ hook: r }).remove(), (i = !1);
            }
            return {
              enable: function () {
                i || ((n = e()), t.before(r, 99), (i = !0));
              },
              disable: o,
              reset: function () {
                (n = null), o();
              },
            };
          })();
          ne.reset;
          E.$W.getConfig("debugging", function (e) {
            let { debugging: t } = e;
            t?.enabled ? ne.enable() : ne.disable();
          });
          var ie = n(938),
            re = n(46),
            oe = n(894),
            se = n(934),
            ae = n(973);
          const de = [
              "architecture",
              "bitness",
              "model",
              "platformVersion",
              "fullVersionList",
            ],
            ce = ["brands", "mobile", "platform"],
            ue = (function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : window.navigator?.userAgentData;
              const t =
                e && ce.some((t) => void 0 !== e[t])
                  ? Object.freeze(fe(1, e))
                  : null;
              return function () {
                return t;
              };
            })(),
            le = (function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : window.navigator?.userAgentData;
              const t = {},
                n = new WeakMap();
              return function () {
                let i =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : de;
                if (!n.has(i)) {
                  const e = Array.from(i);
                  e.sort(), n.set(i, e.join("|"));
                }
                const o = n.get(i);
                if (!t.hasOwnProperty(o))
                  try {
                    t[o] = e
                      .getHighEntropyValues(i)
                      .then((e) =>
                        (0, r.Im)(e) ? null : Object.freeze(fe(2, e))
                      )
                      .catch(() => null);
                  } catch (e) {
                    t[o] = Q.k.resolve(null);
                  }
                return t[o];
              };
            })();
          function fe(e, t) {
            function n(e, t) {
              const n = { brand: e };
              return (
                (0, r.O8)(t) && !(0, r.xQ)(t) && (n.version = t.split(".")), n
              );
            }
            const i = { source: e };
            return (
              t.platform && (i.platform = n(t.platform, t.platformVersion)),
              (t.fullVersionList || t.brands) &&
                (i.browsers = (t.fullVersionList || t.brands).map((e) => {
                  let { brand: t, version: i } = e;
                  return n(t, i);
                })),
              void 0 !== t.mobile && (i.mobile = t.mobile ? 1 : 0),
              ["model", "bitness", "architecture"].forEach((e) => {
                const n = t[e];
                (0, r.O8)(n) && (i[e] = n);
              }),
              i
            );
          }
          const ge = ["dooh", "app", "site"];
          function pe(e, t) {
            return null != e[t] && Object.keys(e[t]).length > 0;
          }
          var he = n(139),
            me = n(441),
            be = n(811);
          const ye = {
              getRefererInfo: se.EN,
              findRootDomain: ae.S,
              getWindowTop: r.mb,
              getWindowSelf: r.l4,
              getHighEntropySUA: le,
              getLowEntropySUA: ue,
            },
            ve =
              ((Ee = "FPD"),
              function (e) {
                return (
                  ge.reduce(
                    (t, n) => (
                      pe(e, n) &&
                        (null != t
                          ? ((0, r.JE)(
                              `${Ee} specifies both '${t}' and '${n}'; dropping the latter.`
                            ),
                            delete e[n])
                          : (t = n)),
                      t
                    ),
                    null
                  ),
                  e
                );
              });
          var Ee;
          const Ae = (0, C.A_)("sync", (e) => {
            const t = [
              e,
              we().catch(() => null),
              Q.k
                .resolve(
                  "cookieDeprecationLabel" in navigator &&
                    (0, he.io)(be.Ue, (0, me.s)(Y.tp, "cdep")) &&
                    navigator.cookieDeprecationLabel.getValue()
                )
                .catch(() => null),
            ];
            return Q.k.all(t).then((e) => {
              let [t, n, i] = e;
              const s = ye.getRefererInfo();
              if (
                (Object.entries(Ce).forEach((e) => {
                  let [n, i] = e;
                  const o = i(t, s);
                  o &&
                    Object.keys(o).length > 0 &&
                    (t[n] = (0, r.D9)({}, o, t[n]));
                }),
                n &&
                  (0, o.J)(t, "device.sua", Object.assign({}, n, t.device.sua)),
                i)
              ) {
                const e = { cdep: i };
                (0, o.J)(t, "device.ext", Object.assign({}, e, t.device.ext));
              }
              t = ve(t);
              for (let e of ge)
                if (pe(t, e)) {
                  t[e] = (0, r.D9)({}, Be(t, s), t[e]);
                  break;
                }
              return t;
            });
          });
          function Ie(e) {
            try {
              return e(ye.getWindowTop());
            } catch (t) {
              return e(ye.getWindowSelf());
            }
          }
          function we() {
            const e = E.$W.getConfig("firstPartyData.uaHints");
            return Array.isArray(e) && 0 !== e.length
              ? ye.getHighEntropySUA(e)
              : Q.k.resolve(ye.getLowEntropySUA());
          }
          function Te(e) {
            return (0, r.SH)(e, Object.keys(e));
          }
          const Ce = {
            site(e, t) {
              if (!ge.filter((e) => "site" !== e).some(pe.bind(null, e)))
                return Te({ page: t.page, ref: t.ref });
            },
            device: () =>
              Ie((e) => {
                const t = e.screen.width,
                  n = e.screen.height,
                  i =
                    e.innerWidth ||
                    e.document.documentElement.clientWidth ||
                    e.document.body.clientWidth,
                  s =
                    e.innerHeight ||
                    e.document.documentElement.clientHeight ||
                    e.document.body.clientHeight,
                  a = {
                    w: t,
                    h: n,
                    dnt: (0, r.l9)() ? 1 : 0,
                    ua: e.navigator.userAgent,
                    language: e.navigator.language.split("-").shift(),
                    ext: { vpw: i, vph: s },
                  };
                return (
                  e.navigator?.webdriver && (0, o.J)(a, "ext.webdriver", !0), a
                );
              }),
            regs() {
              const e = {};
              Ie((e) => e.navigator.globalPrivacyControl) &&
                (0, o.J)(e, "ext.gpc", "1");
              const t = E.$W.getConfig("coppa");
              return "boolean" == typeof t && (e.coppa = t ? 1 : 0), e;
            },
          };
          function Be(e, t) {
            const n = (0, se.gR)(t.page, { noLeadingWww: !0 }),
              i = Ie((e) =>
                e.document.querySelector("meta[name='keywords']")
              )?.content?.replace?.(/\s/g, "");
            return Te({
              domain: n,
              keywords: i,
              publisher: Te({ domain: ye.findRootDomain(n) }),
            });
          }
          var Oe = n(916),
            ke = n(895);
          const Re = (0, i.m)(),
            { triggerUserSyncs: Se } = v.zt,
            { ADD_AD_UNITS: De, REQUEST_BIDS: Ue, SET_TARGETING: _e } = d.qY,
            je = {
              bidWon: function (e) {
                if (
                  !A.n
                    .getBidsRequested()
                    .map((e) => e.bids.map((e) => e.adUnitCode))
                    .reduce(r.Bq)
                    .filter(r.hj)
                    .includes(e)
                )
                  return void (0, r.vV)(
                    'The "' + e + '" placement is not defined.'
                  );
                return !0;
              },
            };
          function $e(e, t) {
            let n = [];
            return (
              (0, r.cy)(e) &&
                (t ? e.length === t : e.length > 0) &&
                (e.every((e) => (0, r.Uu)(e, 2))
                  ? (n = e)
                  : (0, r.Uu)(e, 2) && n.push(e)),
              n
            );
          }
          function qe(e, t) {
            const n = e.ortb2Imp || {},
              i = e.mediaTypes || {};
            n[t]?.battr &&
              i[t]?.battr &&
              n[t]?.battr !== i[t]?.battr &&
              (0, r.JE)(
                `Ad unit ${e.code} specifies conflicting ortb2Imp.${t}.battr and mediaTypes.${t}.battr, the latter will be ignored`,
                e
              );
            const s = n[t]?.battr || i[t]?.battr;
            null != s &&
              ((0, o.J)(e, `ortb2Imp.${t}.battr`, s),
              (0, o.J)(e, `mediaTypes.${t}.battr`, s));
          }
          function xe(e) {
            const t = (0, r.Go)(e),
              n = t.mediaTypes.banner,
              i = $e(n.sizes);
            return (
              i.length > 0
                ? ((n.sizes = i), (t.sizes = i))
                : ((0, r.vV)(
                    "Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."
                  ),
                  delete t.mediaTypes.banner),
              qe(t, "banner"),
              t
            );
          }
          function Ne(e) {
            const t = (0, r.Go)(e),
              n = t.mediaTypes.video;
            if (n.playerSize) {
              let e = "number" == typeof n.playerSize[0] ? 2 : 1;
              const i = $e(n.playerSize, e);
              i.length > 0
                ? (2 === e &&
                    (0, r.fH)(
                      "Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."
                    ),
                  (n.playerSize = i),
                  (t.sizes = i))
                : ((0, r.vV)(
                    "Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."
                  ),
                  delete t.mediaTypes.video.playerSize);
            }
            return (0, ke.aP)(t), qe(t, "video"), t;
          }
          function Pe(e) {
            function t(t) {
              return (
                (0, r.vV)(
                  `Error in adUnit "${e.code}": ${t}. Removing native request from ad unit`,
                  e
                ),
                delete i.mediaTypes.native,
                i
              );
            }
            function n(e) {
              for (const t of ["sendTargetingKeys", "types"])
                if (o.hasOwnProperty(t)) {
                  const n = e(t);
                  if (n) return n;
                }
            }
            const i = (0, r.Go)(e),
              o = i.mediaTypes.native;
            if (o.ortb) {
              if (
                o.ortb.assets?.some(
                  (e) => !(0, r.Et)(e.id) || e.id < 0 || e.id % 1 != 0
                )
              )
                return t("native asset ID must be a nonnegative integer");
              if (n((e) => t(`ORTB native requests cannot specify "${e}"`)))
                return i;
              const e = Object.keys(d.x5).filter((e) =>
                  d.x5[e].includes("hb_native_")
                ),
                s = Object.keys(o).filter((t) => e.includes(t));
              s.length > 0 &&
                ((0, r.vV)(
                  `when using native OpenRTB format, you cannot use legacy native properties. Deleting ${s} keys from request.`
                ),
                s.forEach((e) => delete i.mediaTypes.native[e]));
            } else
              n(
                (e) =>
                  `mediaTypes.native.${e} is deprecated, consider using native ORTB instead`
              );
            return (
              o.image &&
                o.image.sizes &&
                !Array.isArray(o.image.sizes) &&
                ((0, r.vV)(
                  "Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."
                ),
                delete i.mediaTypes.native.image.sizes),
              o.image &&
                o.image.aspect_ratios &&
                !Array.isArray(o.image.aspect_ratios) &&
                ((0, r.vV)(
                  "Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."
                ),
                delete i.mediaTypes.native.image.aspect_ratios),
              o.icon &&
                o.icon.sizes &&
                !Array.isArray(o.icon.sizes) &&
                ((0, r.vV)(
                  "Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."
                ),
                delete i.mediaTypes.native.icon.sizes),
              qe(i, "native"),
              i
            );
          }
          function We(e, t) {
            let n = (0, s.A)(e, `mediaTypes.${t}.pos`);
            if (!(0, r.Et)(n) || isNaN(n) || !isFinite(n)) {
              let n = `Value of property 'pos' on ad unit ${e.code} should be of type: Number`;
              (0, r.JE)(n), delete e.mediaTypes[t].pos;
            }
            return e;
          }
          function Ve(e) {
            const t = (t) => `adUnit.code '${e.code}' ${t}`,
              n = e.mediaTypes,
              i = e.bids;
            return null == i || (0, r.cy)(i)
              ? null == i && null == e.ortb2Imp
                ? ((0, r.vV)(
                    t(
                      "has no 'adUnit.bids' and no 'adUnit.ortb2Imp'. Removing adUnit from auction"
                    )
                  ),
                  null)
                : n && 0 !== Object.keys(n).length
                ? (null == e.ortb2Imp ||
                    (null != i && 0 !== i.length) ||
                    ((e.bids = [{ bidder: null }]),
                    (0, r.OG)(
                      t(
                        "defines 'adUnit.ortb2Imp' with no 'adUnit.bids'; it will be seen only by S2S adapters"
                      )
                    )),
                  e)
                : ((0, r.vV)(
                    t(
                      "does not define a 'mediaTypes' object.  This is a required field for the auction, so this adUnit has been removed."
                    )
                  ),
                  null)
              : ((0, r.vV)(
                  t(
                    "defines 'adUnit.bids' that is not an array. Removing adUnit from auction"
                  )
                ),
                null);
          }
          !(function () {
            let e = null;
            try {
              e = window.sessionStorage;
            } catch (e) {}
            if (null !== e) {
              let t = ne,
                n = null;
              try {
                n = e.getItem(X);
              } catch (e) {}
              null !== n && t.enable();
            }
          })(),
            (Re.bidderSettings = Re.bidderSettings || {}),
            (Re.libLoaded = !0),
            (Re.version = "v9.21.0"),
            (0, r.fH)("Prebid.js v9.21.0 loaded"),
            (Re.installedModules = Re.installedModules || []),
            (Re.adUnits = Re.adUnits || []),
            (Re.triggerUserSyncs = Se);
          const Me = {
            validateAdUnit: Ve,
            validateBannerMediaType: xe,
            validateSizes: $e,
          };
          Object.assign(Me, { validateNativeMediaType: Pe }),
            Object.assign(Me, { validateVideoMediaType: Ne });
          const Ge = (0, C.A_)(
            "sync",
            function (e) {
              const t = [];
              return (
                e.forEach((e) => {
                  if (null == (e = Ve(e))) return;
                  const n = e.mediaTypes;
                  let i, r, o;
                  n.banner &&
                    ((i = xe(e)),
                    n.banner.hasOwnProperty("pos") && (i = We(i, "banner"))),
                    n.video &&
                      ((r = Ne(i || e)),
                      n.video.hasOwnProperty("pos") && (r = We(r, "video"))),
                    n.native && (o = Pe(r || i || e));
                  const s = Object.assign({}, i, r, o);
                  t.push(s);
                }),
                t
              );
            },
            "checkAdUnitSetup"
          );
          function Fe(e) {
            const t = A.n[e]().filter((e) =>
                A.n.getAdUnitCodes().includes(e.adUnitCode)
              ),
              n = A.n.getLastAuctionId();
            return t
              .map((e) => e.adUnitCode)
              .filter(r.hj)
              .map((e) =>
                t.filter((t) => t.auctionId === n && t.adUnitCode === e)
              )
              .filter((e) => e && e[0] && e[0].adUnitCode)
              .map((e) => ({ [e[0].adUnitCode]: { bids: e } }))
              .reduce((e, t) => Object.assign(e, t), {});
          }
          (Re.getAdserverTargetingForAdUnitCodeStr = function (e) {
            if (
              ((0, r.fH)(
                "Invoking pbjs.getAdserverTargetingForAdUnitCodeStr",
                arguments
              ),
              e)
            ) {
              var t = Re.getAdserverTargetingForAdUnitCode(e);
              return (0, r.$D)(t);
            }
            (0, r.OG)(
              "Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode"
            );
          }),
            (Re.getHighestUnusedBidResponseForAdUnitCode = function (e) {
              if (e) {
                const t = A.n.getAllBidsForAdUnitCode(e).filter(G);
                return t.length ? t.reduce(j) : {};
              }
              (0, r.OG)(
                "Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode"
              );
            }),
            (Re.getAdserverTargetingForAdUnitCode = function (e) {
              return Re.getAdserverTargeting(e)[e];
            }),
            (Re.getAdserverTargeting = function (e) {
              return (
                (0, r.fH)("Invoking pbjs.getAdserverTargeting", arguments),
                z.getAllTargeting(e)
              );
            }),
            (Re.getConsentMetadata = function () {
              return (
                (0, r.fH)("Invoking pbjs.getConsentMetadata"),
                Oe.SL.getConsentMeta()
              );
            }),
            (Re.getNoBids = function () {
              return (
                (0, r.fH)("Invoking pbjs.getNoBids", arguments), Fe("getNoBids")
              );
            }),
            (Re.getNoBidsForAdUnitCode = function (e) {
              return {
                bids: A.n.getNoBids().filter((t) => t.adUnitCode === e),
              };
            }),
            (Re.getBidResponses = function () {
              return (
                (0, r.fH)("Invoking pbjs.getBidResponses", arguments),
                Fe("getBidsReceived")
              );
            }),
            (Re.getBidResponsesForAdUnitCode = function (e) {
              return {
                bids: A.n.getBidsReceived().filter((t) => t.adUnitCode === e),
              };
            }),
            (Re.setTargetingForGPTAsync = function (e, t) {
              (0, r.fH)("Invoking pbjs.setTargetingForGPTAsync", arguments),
                (0, r.II)()
                  ? z.setTargetingForGPT(e, t)
                  : (0, r.vV)("window.googletag is not defined on the page");
            }),
            (Re.setTargetingForAst = function (e) {
              (0, r.fH)("Invoking pbjs.setTargetingForAn", arguments),
                z.isApntagDefined()
                  ? (z.setTargetingForAst(e), T.Ic(_e, z.getAllTargeting()))
                  : (0, r.vV)("window.apntag is not defined on the page");
            }),
            (Re.renderAd = (0, C.A_)("async", function (e, t, n) {
              (0, r.fH)("Invoking pbjs.renderAd", arguments),
                (0, r.OG)("Calling renderAd with adId :" + t),
                (0, u.BS)(e, t, n);
            })),
            (Re.removeAdUnit = function (e) {
              if (((0, r.fH)("Invoking pbjs.removeAdUnit", arguments), !e))
                return void (Re.adUnits = []);
              let t;
              (t = (0, r.cy)(e) ? e : [e]),
                t.forEach((e) => {
                  for (let t = Re.adUnits.length - 1; t >= 0; t--)
                    Re.adUnits[t].code === e && Re.adUnits.splice(t, 1);
                });
            }),
            (Re.requestBids = (function () {
              const e = (0, C.A_)(
                "async",
                function () {
                  let {
                    bidsBackHandler: e,
                    timeout: t,
                    adUnits: n,
                    adUnitCodes: i,
                    labels: o,
                    auctionId: s,
                    ttlBuffer: a,
                    ortb2: d,
                    metrics: u,
                    defer: l,
                  } = arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                  T.Ic(Ue);
                  const f = t || E.$W.getConfig("bidderTimeout");
                  (0, r.fH)("Invoking pbjs.requestBids", arguments),
                    null == i || Array.isArray(i) || (i = [i]),
                    i && i.length
                      ? (n = n.filter((e) => (0, c.mK)(i, e.code)))
                      : (i = n && n.map((e) => e.code)),
                    (i = i.filter(r.hj));
                  const g = {
                    global: (0, r.D9)(
                      {},
                      E.$W.getAnyConfig("ortb2") || {},
                      d || {}
                    ),
                    bidder: Object.fromEntries(
                      Object.entries(E.$W.getBidderConfig())
                        .map((e) => {
                          let [t, n] = e;
                          return [t, n.ortb2];
                        })
                        .filter((e) => {
                          let [t, n] = e;
                          return null != n;
                        })
                    ),
                  };
                  return Ae(Q.k.resolve(g.global)).then(
                    (t) => (
                      (g.global = t),
                      He({
                        bidsBackHandler: e,
                        timeout: f,
                        adUnits: n,
                        adUnitCodes: i,
                        labels: o,
                        auctionId: s,
                        ttlBuffer: a,
                        ortb2Fragments: g,
                        metrics: u,
                        defer: l,
                      })
                    )
                  );
                },
                "requestBids"
              );
              return (0, C.Y6)(e, function () {
                let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n = t.adUnits || Re.adUnits;
                return (
                  (t.adUnits = (0, r.cy)(n) ? n.slice() : [n]),
                  (t.metrics = (0, oe.K7)()),
                  t.metrics.checkpoint("requestBids"),
                  (t.defer = (0, Q.v)({
                    promiseFactory: (e) => new Promise(e),
                  })),
                  e.call(this, t),
                  t.defer.promise
                );
              });
            })());
          const He = (0, C.A_)(
            "async",
            function () {
              let {
                bidsBackHandler: e,
                timeout: t,
                adUnits: n,
                ttlBuffer: i,
                adUnitCodes: s,
                labels: a,
                auctionId: d,
                ortb2Fragments: u,
                metrics: l,
                defer: f,
              } = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
              const g = (0, re.pX)(E.$W.getConfig("s2sConfig") || []);
              function p(t, n, i) {
                if ("function" == typeof e)
                  try {
                    e(t, n, i);
                  } catch (e) {
                    (0, r.vV)("Error executing bidsBackHandler", null, e);
                  }
                f.resolve({ bids: t, timedOut: n, auctionId: i });
              }
              !(function (e) {
                e.forEach((e) => (0, ke.V0)(e));
              })(n),
                (n = (0, oe.BO)(l).measureTime("requestBids.validate", () =>
                  Ge(n)
                ));
              const h = {};
              if (
                (n.forEach((e) => {
                  const t = Object.keys(e.mediaTypes || { banner: "banner" }),
                    n = e.bids.map((e) => e.bidder),
                    o = re.Ay.bidderRegistry,
                    s = n.filter((e) => !g.has(e));
                  e.adUnitId = (0, r.lk)();
                  const a = e.ortb2Imp?.ext?.tid;
                  a &&
                    (h.hasOwnProperty(e.code)
                      ? (0, r.JE)(
                          `Multiple distinct ortb2Imp.ext.tid were provided for twin ad units '${e.code}'`
                        )
                      : (h[e.code] = a)),
                    null == i ||
                      e.hasOwnProperty("ttlBuffer") ||
                      (e.ttlBuffer = i),
                    s.forEach((n) => {
                      const i = o[n],
                        s = i && i.getSpec && i.getSpec(),
                        a = (s && s.supportedMediaTypes) || ["banner"];
                      t.some((e) => (0, c.mK)(a, e)) ||
                        ((0, r.JE)((0, r.bz)(e, n)),
                        (e.bids = e.bids.filter((e) => e.bidder !== n)));
                    });
                }),
                n && 0 !== n.length)
              ) {
                n.forEach((e) => {
                  const t = e.ortb2Imp?.ext?.tid || h[e.code] || (0, r.lk)();
                  h.hasOwnProperty(e.code) || (h[e.code] = t),
                    (e.transactionId = t),
                    (0, o.J)(e, "ortb2Imp.ext.tid", t);
                });
                const e = A.n.createAuction({
                  adUnits: n,
                  adUnitCodes: s,
                  callback: p,
                  cbTimeout: t,
                  labels: a,
                  auctionId: d,
                  ortb2Fragments: u,
                  metrics: l,
                });
                let i = n.length;
                i > 15 &&
                  (0, r.fH)(
                    `Current auction ${e.getAuctionId()} contains ${i} adUnits.`,
                    n
                  ),
                  s.forEach((t) =>
                    z.setLatestAuctionForAdUnit(t, e.getAuctionId())
                  ),
                  e.callBids();
              } else
                (0, r.OG)("No adUnits configured. No bids requested."), p();
            },
            "startAuction"
          );
          Re.requestBids.before(function (e, t) {
            function n(e) {
              for (var t; (t = e.shift()); ) t();
            }
            n(ie.s0), n(Le), e.call(this, t);
          }, 49),
            (Re.addAdUnits = function (e) {
              (0, r.fH)("Invoking pbjs.addAdUnits", arguments),
                Re.adUnits.push.apply(Re.adUnits, (0, r.cy)(e) ? e : [e]),
                T.Ic(De);
            }),
            (Re.onEvent = function (e, t, n) {
              (0, r.fH)("Invoking pbjs.onEvent", arguments),
                (0, r.fp)(t)
                  ? !n || je[e].call(null, n)
                    ? T.on(e, t, n)
                    : (0, r.vV)(
                        'The id provided is not valid for event "' +
                          e +
                          '" and no handler was set.'
                      )
                  : (0, r.vV)(
                      'The event handler provided is not a function and was not set on event "' +
                        e +
                        '".'
                    );
            }),
            (Re.offEvent = function (e, t, n) {
              (0, r.fH)("Invoking pbjs.offEvent", arguments),
                (n && !je[e].call(null, n)) || T.AU(e, t, n);
            }),
            (Re.getEvents = function () {
              return (0, r.fH)("Invoking pbjs.getEvents"), T.kQ();
            }),
            (Re.registerBidAdapter = function (e, t) {
              (0, r.fH)("Invoking pbjs.registerBidAdapter", arguments);
              try {
                re.Ay.registerBidAdapter(e(), t);
              } catch (e) {
                (0, r.vV)("Error registering bidder adapter : " + e.message);
              }
            }),
            (Re.registerAnalyticsAdapter = function (e) {
              (0, r.fH)("Invoking pbjs.registerAnalyticsAdapter", arguments);
              try {
                re.Ay.registerAnalyticsAdapter(e);
              } catch (e) {
                (0, r.vV)("Error registering analytics adapter : " + e.message);
              }
            }),
            (Re.createBid = function (e) {
              return (
                (0, r.fH)("Invoking pbjs.createBid", arguments), (0, J.O)(e)
              );
            });
          const Le = [],
            ze = (0, C.A_)(
              "async",
              function (e) {
                e && !(0, r.Im)(e)
                  ? ((0, r.fH)("Invoking pbjs.enableAnalytics for: ", e),
                    re.Ay.enableAnalytics(e))
                  : (0, r.vV)(
                      "pbjs.enableAnalytics should be called with option {}"
                    );
              },
              "enableAnalyticsCb"
            );
          function Je(e) {
            e.forEach(function (e) {
              if (void 0 === e.called)
                try {
                  e.call(), (e.called = !0);
                } catch (e) {
                  (0, r.vV)("Error processing command :", "prebid.js", e);
                }
            });
          }
          (Re.enableAnalytics = function (e) {
            Le.push(ze.bind(this, e));
          }),
            (Re.aliasBidder = function (e, t, n) {
              (0, r.fH)("Invoking pbjs.aliasBidder", arguments),
                e && t
                  ? re.Ay.aliasBidAdapter(e, t, n)
                  : (0, r.vV)(
                      "bidderCode and alias must be passed as arguments",
                      "pbjs.aliasBidder"
                    );
            }),
            (Re.aliasRegistry = re.Ay.aliasRegistry),
            E.$W.getConfig("aliasRegistry", (e) => {
              "private" === e.aliasRegistry && delete Re.aliasRegistry;
            }),
            (Re.getAllWinningBids = function () {
              return A.n.getAllWinningBids();
            }),
            (Re.getAllPrebidWinningBids = function () {
              return A.n
                .getBidsReceived()
                .filter((e) => e.status === d.tl.BID_TARGETING_SET);
            }),
            (Re.getHighestCpmBids = function (e) {
              return z.getWinningBids(e);
            }),
            (Re.clearAllAuctions = function () {
              A.n.clearAllAuctions();
            }),
            (Re.markWinningBidAsUsed = function (e) {
              let t,
                { adId: n, adUnitCode: i, analytics: o = !1 } = e;
              i && null == n
                ? (t = z.getWinningBids(i))
                : n
                ? (t = A.n.getBidsReceived().filter((e) => e.adId === n))
                : (0, r.JE)(
                    "Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function."
                  ),
                t.length > 0 &&
                  (o ? (0, u.n6)(t[0]) : A.n.addWinningBid(t[0]),
                  (0, u.qn)(t[0]));
            }),
            (Re.getConfig = E.$W.getAnyConfig),
            (Re.readConfig = E.$W.readAnyConfig),
            (Re.mergeConfig = E.$W.mergeConfig),
            (Re.mergeBidderConfig = E.$W.mergeBidderConfig),
            (Re.setConfig = E.$W.setConfig),
            (Re.setBidderConfig = E.$W.setBidderConfig),
            Re.que.push(() => b()),
            (Re.cmd.push = function (e) {
              if ("function" == typeof e)
                try {
                  e.call();
                } catch (e) {
                  (0, r.vV)("Error processing command :", e.message, e.stack);
                }
              else
                (0, r.vV)(
                  "Commands written into pbjs.cmd.push must be wrapped in a function"
                );
            }),
            (Re.que.push = Re.cmd.push),
            (Re.processQueue = function () {
              (0, u.XO)(), C.A_.ready(), Je(Re.que), Je(Re.cmd);
            }),
            (Re.triggerBilling = (e) => {
              let { adId: t, adUnitCode: n } = e;
              A.n
                .getAllWinningBids()
                .filter(
                  (e) => e.adId === t || (null == t && e.adUnitCode === n)
                )
                .forEach((e) => {
                  re.Ay.triggerBilling(e), (0, u.vB)(e);
                });
            });
        },
        873: (e, t, n) => {
          n.d(t, { E: () => s, m: () => o });
          const i = window,
            r = (i.pbjs = i.pbjs || {});
          function o() {
            return r;
          }
          function s(e) {
            r.installedModules.push(e);
          }
          (r.cmd = r.cmd || []),
            (r.que = r.que || []),
            i === window &&
              ((i._pbjsGlobals = i._pbjsGlobals || []),
              i._pbjsGlobals.push("pbjs"));
        },
        934: (e, t, n) => {
          n.d(t, { EN: () => d, gR: () => s });
          var i = n(272),
            r = n(69);
          function o(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : window;
            if (!e) return e;
            if (/\w+:\/\//.exec(e)) return e;
            let n = t.location.protocol;
            try {
              n = t.top.location.protocol;
            } catch (e) {}
            return /^\/\//.exec(e) ? n + e : `${n}//${e}`;
          }
          function s(e) {
            let { noLeadingWww: t = !1, noPort: n = !1 } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            try {
              e = new URL(o(e));
            } catch (e) {
              return;
            }
            return (
              (e = n ? e.hostname : e.host),
              t && e.startsWith("www.") && (e = e.substring(4)),
              e
            );
          }
          function a(e) {
            try {
              const t = e.querySelector("link[rel='canonical']");
              if (null !== t) return t.href;
            } catch (e) {}
            return null;
          }
          const d = (function (e) {
            let t,
              n,
              i,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : window;
            return r.top !== r
              ? e
              : function () {
                  const o = a(r.document),
                    s = r.location.href;
                  return (
                    (t === o && s === n) || ((t = o), (n = s), (i = e())), i
                  );
                };
          })(
            ((c = window),
            function () {
              const e = [],
                t = (function (e) {
                  try {
                    if (!e.location.ancestorOrigins) return;
                    return e.location.ancestorOrigins;
                  } catch (e) {}
                })(c),
                n = i.$W.getConfig("maxNestedIframes");
              let d,
                u,
                l,
                f,
                g = !1,
                p = 0,
                h = !1,
                m = !1,
                b = !1;
              do {
                const n = d,
                  i = m;
                let o,
                  s = !1,
                  f = null;
                (m = !1), (d = d ? d.parent : c);
                try {
                  o = d.location.href || null;
                } catch (e) {
                  s = !0;
                }
                if (s)
                  if (i) {
                    const e = n.context;
                    try {
                      (f = e.sourceUrl),
                        (u = f),
                        (b = !0),
                        (h = !0),
                        d === c.top && (g = !0),
                        e.canonicalUrl && (l = e.canonicalUrl);
                    } catch (e) {}
                  } else {
                    (0, r.JE)(
                      "Trying to access cross domain iframe. Continuing without referrer and location"
                    );
                    try {
                      const e = n.document.referrer;
                      e && ((f = e), d === c.top && (g = !0));
                    } catch (e) {}
                    !f &&
                      t &&
                      t[p - 1] &&
                      ((f = t[p - 1]), d === c.top && (b = !0)),
                      f && !h && (u = f);
                  }
                else {
                  if (o && ((f = o), (u = f), (h = !1), d === c.top)) {
                    g = !0;
                    const e = a(d.document);
                    e && (l = e);
                  }
                  d.context && d.context.sourceUrl && (m = !0);
                }
                e.push(f), p++;
              } while (d !== c.top && p < n);
              e.reverse();
              try {
                f = c.top.document.referrer;
              } catch (e) {}
              const y = g || b ? u : null,
                v = i.$W.getConfig("pageUrl") || l || null;
              let E = i.$W.getConfig("pageUrl") || y || o(v, c);
              return (
                y &&
                  y.indexOf("?") > -1 &&
                  -1 === E.indexOf("?") &&
                  (E = `${E}${y.substring(y.indexOf("?"))}`),
                {
                  reachedTop: g,
                  isAmp: h,
                  numIframes: p - 1,
                  stack: e,
                  topmostLocation: u || null,
                  location: y,
                  canonicalUrl: v,
                  page: E,
                  domain: s(E) || null,
                  ref: f || null,
                  legacy: {
                    reachedTop: g,
                    isAmp: h,
                    numIframes: p - 1,
                    stack: e,
                    referer: u || null,
                    canonicalUrl: v,
                  },
                }
              );
            })
          );
          var c;
        },
        938: (e, t, n) => {
          n.d(t, {
            CK: () => b,
            X0: () => g,
            qk: () => f,
            s0: () => p,
            vM: () => m,
          });
          var i = n(69),
            r = n(693),
            o = n(569),
            s = n(139),
            a = n(604),
            d = n(811),
            c = n(272),
            u = n(46),
            l = n(441);
          const f = "html5",
            g = "cookie";
          let p = [];
          function h() {
            let { moduleName: e, moduleType: t } =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              { isAllowed: n = s.io } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            function r(i, r) {
              let s = e;
              const f = c.$W.getCurrentBidder();
              f && t === o.tW && u.Ay.aliasRegistry[f] === e && (s = f);
              return i({ valid: n(d.Ue, (0, l.s)(t, s, { [a.Zw]: r })) });
            }
            function h(e, t, n) {
              if (!n || "function" != typeof n) return r(e, t);
              p.push(function () {
                let i = r(e, t);
                n(i);
              });
            }
            function m(e) {
              const t = e.charAt(0).toUpperCase() + e.substring(1),
                n = () => window[e],
                r = function (t) {
                  return h(
                    function (t) {
                      if (t && t.valid)
                        try {
                          return !!n();
                        } catch (t) {
                          (0, i.vV)(`${e} api disabled`);
                        }
                      return !1;
                    },
                    f,
                    t
                  );
                };
              return {
                [`has${t}`]: r,
                [`${e}IsEnabled`]: (e) =>
                  h(
                    function (e) {
                      if (e && e.valid)
                        try {
                          return (
                            n().setItem("prebid.cookieTest", "1"),
                            "1" === n().getItem("prebid.cookieTest")
                          );
                        } catch (e) {
                        } finally {
                          try {
                            n().removeItem("prebid.cookieTest");
                          } catch (e) {}
                        }
                      return !1;
                    },
                    f,
                    e
                  ),
                [`setDataIn${t}`]: (e, t, i) =>
                  h(
                    function (i) {
                      i && i.valid && r() && n().setItem(e, t);
                    },
                    f,
                    i
                  ),
                [`getDataFrom${t}`]: (e, t) =>
                  h(
                    function (t) {
                      return t && t.valid && r() ? n().getItem(e) : null;
                    },
                    f,
                    t
                  ),
                [`removeDataFrom${t}`]: (e, t) =>
                  h(
                    function (t) {
                      t && t.valid && r() && n().removeItem(e);
                    },
                    f,
                    t
                  ),
              };
            }
            return {
              setCookie: function (e, t, n, i, r, o) {
                return h(
                  function (o) {
                    if (o && o.valid) {
                      const o =
                          r && "" !== r
                            ? ` ;domain=${encodeURIComponent(r)}`
                            : "",
                        s = n && "" !== n ? ` ;expires=${n}` : "",
                        a =
                          null != i && "none" == i.toLowerCase()
                            ? "; Secure"
                            : "";
                      document.cookie = `${e}=${encodeURIComponent(
                        t
                      )}${s}; path=/${o}${i ? `; SameSite=${i}` : ""}${a}`;
                    }
                  },
                  g,
                  o
                );
              },
              getCookie: function (e, t) {
                return h(
                  function (t) {
                    if (t && t.valid) {
                      let t = window.document.cookie.match(
                        "(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)"
                      );
                      return t ? decodeURIComponent(t[2]) : null;
                    }
                    return null;
                  },
                  g,
                  t
                );
              },
              cookiesAreEnabled: function (e) {
                return h(
                  function (e) {
                    return !(!e || !e.valid) && (0, i.GE)();
                  },
                  g,
                  e
                );
              },
              ...m("localStorage"),
              ...m("sessionStorage"),
              findSimilarCookies: function (e, t) {
                return h(
                  function (t) {
                    if (t && t.valid) {
                      const t = [];
                      if ((0, i.N9)()) {
                        const n = document.cookie.split(";");
                        for (; n.length; ) {
                          const i = n.pop();
                          let r = i.indexOf("=");
                          r = r < 0 ? i.length : r;
                          decodeURIComponent(
                            i.slice(0, r).replace(/^\s+/, "")
                          ).indexOf(e) >= 0 &&
                            t.push(decodeURIComponent(i.slice(r + 1)));
                        }
                      }
                      return t;
                    }
                  },
                  g,
                  t
                );
              },
            };
          }
          function m() {
            let {
              moduleType: e,
              moduleName: t,
              bidderCode: n,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {};
            function i() {
              throw new Error(
                "Invalid invocation for getStorageManager: must set either bidderCode, or moduleType + moduleName"
              );
            }
            return (
              n
                ? (((e && e !== o.tW) || t) && i(), (e = o.tW), (t = n))
                : (t && e) || i(),
              h({ moduleType: e, moduleName: t })
            );
          }
          function b(e) {
            return h({ moduleName: e, moduleType: o.tp });
          }
          (0, s.qB)(d.Ue, "deviceAccess config", function () {
            if (!(0, i.N9)()) return { allow: !1 };
          }),
            (0, s.qB)(d.Ue, "bidderSettings.*.storageAllowed", function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : r.u;
              if (e[a.Dk] !== o.tW) return;
              let n = t.get(e[a.q7], "storageAllowed");
              if (n && !0 !== n) {
                const t = e[a.Zw];
                n = Array.isArray(n) ? n.some((e) => e === t) : n === t;
              } else n = !!n;
              return n ? void 0 : { allow: n };
            });
        },
        230: (e, t, n) => {
          n.d(t, { qh: () => f, zt: () => p });
          var i = n(69),
            r = n(272),
            o = n(901),
            s = n(938),
            a = n(139),
            d = n(811),
            c = n(604),
            u = n(569),
            l = n(441);
          const f = {
            syncEnabled: !0,
            filterSettings: { image: { bidders: "*", filter: "include" } },
            syncsPerBidder: 5,
            syncDelay: 3e3,
            auctionDelay: 500,
          };
          r.$W.setDefaults({ userSync: (0, i.Go)(f) });
          const g = (0, s.CK)("usersync");
          const p = (function (e) {
            let t = {},
              n = { image: [], iframe: [] },
              s = new Set(),
              a = {},
              f = { image: !0, iframe: !1 },
              g = e.config;
            function p() {
              if (g.syncEnabled && e.browserSupportsCookies) {
                try {
                  !(function () {
                    if (!f.iframe) return;
                    h(n.iframe, (e) => {
                      let [t, r] = e;
                      (0, i.OG)(`Invoking iframe user sync for bidder: ${t}`),
                        (0, i.SG)(r),
                        (function (e, t) {
                          e.image = e.image.filter((e) => e[0] !== t);
                        })(n, t);
                    });
                  })(),
                    (function () {
                      if (!f.image) return;
                      h(n.image, (e) => {
                        let [t, n] = e;
                        (0, i.OG)(
                          `Invoking image pixel user sync for bidder: ${t}`
                        ),
                          (0, i.z$)(n);
                      });
                    })();
                } catch (e) {
                  return (0, i.vV)("Error firing user syncs", e);
                }
                n = { image: [], iframe: [] };
              }
            }
            function h(e, t) {
              (0, i.k4)(e).forEach(t);
            }
            function m(e, t) {
              let n = g.filterSettings;
              if (
                (function (e, t) {
                  if (e.all && e[t])
                    return (
                      (0, i.JE)(
                        `Detected presence of the "filterSettings.all" and "filterSettings.${t}" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.`
                      ),
                      !1
                    );
                  let n = e.all ? e.all : e[t],
                    r = e.all ? "all" : t;
                  if (!n) return !1;
                  let o = n.filter,
                    s = n.bidders;
                  if (o && "include" !== o && "exclude" !== o)
                    return (
                      (0, i.JE)(
                        `UserSync "filterSettings.${r}.filter" setting '${o}' is not a valid option; use either 'include' or 'exclude'.`
                      ),
                      !1
                    );
                  if (
                    "*" !== s &&
                    !(
                      Array.isArray(s) &&
                      s.length > 0 &&
                      s.every((e) => (0, i.O8)(e) && "*" !== e)
                    )
                  )
                    return (
                      (0, i.JE)(
                        `Detected an invalid setup in userSync "filterSettings.${r}.bidders"; use either '*' (to represent all bidders) or an array of bidders.`
                      ),
                      !1
                    );
                  return !0;
                })(n, e)
              ) {
                f[e] = !0;
                let i = n.all ? n.all : n[e],
                  r = "*" === i.bidders ? [t] : i.bidders;
                const s = {
                  include: (e, t) => !(0, o.mK)(e, t),
                  exclude: (e, t) => (0, o.mK)(e, t),
                };
                return s[i.filter || "include"](r, t);
              }
              return !f[e];
            }
            return (
              r.$W.getConfig("userSync", (e) => {
                if (e.userSync) {
                  let t = e.userSync.filterSettings;
                  (0, i.Qd)(t) &&
                    (t.image ||
                      t.all ||
                      (e.userSync.filterSettings.image = {
                        bidders: "*",
                        filter: "include",
                      }));
                }
                g = Object.assign(g, e.userSync);
              }),
              e.regRule(d.Ml, "userSync config", (e) => {
                if (!g.syncEnabled)
                  return { allow: !1, reason: "syncs are disabled" };
                if (e[c.Dk] === u.tW) {
                  const n = e[c.bt],
                    i = e[c.iK];
                  if (!t.canBidderRegisterSync(n, i))
                    return {
                      allow: !1,
                      reason: `${n} syncs are not enabled for ${i}`,
                    };
                }
              }),
              (t.registerSync = (t, r, o) =>
                s.has(r)
                  ? (0, i.OG)(
                      `already fired syncs for "${r}", ignoring registerSync call`
                    )
                  : g.syncEnabled && (0, i.cy)(n[t])
                  ? r
                    ? 0 !== g.syncsPerBidder && Number(a[r]) >= g.syncsPerBidder
                      ? (0, i.JE)(`Number of user syncs exceeded for "${r}"`)
                      : void (
                          e.isAllowed(
                            d.Ml,
                            (0, l.s)(u.tW, r, { [c.bt]: t, [c.e3]: o })
                          ) &&
                          (n[t].push([r, o]),
                          (a = (function (e, t) {
                            return e[t] ? (e[t] += 1) : (e[t] = 1), e;
                          })(a, r)))
                        )
                    : (0, i.JE)("Bidder is required for registering sync")
                  : (0, i.JE)(`User sync type "${t}" not supported`)),
              (t.bidderDone = s.add.bind(s)),
              (t.syncUsers = function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0;
                if (e) return setTimeout(p, Number(e));
                p();
              }),
              (t.triggerUserSyncs = () => {
                g.enableOverride && t.syncUsers();
              }),
              (t.canBidderRegisterSync = (e, t) =>
                !g.filterSettings || !m(e, t)),
              t
            );
          })(
            Object.defineProperties(
              {
                config: r.$W.getConfig("userSync"),
                isAllowed: a.io,
                regRule: a.qB,
              },
              {
                browserSupportsCookies: {
                  get: function () {
                    return !(0, i.Vt)() && g.cookiesAreEnabled();
                  },
                },
              }
            )
          );
        },
        69: (e, t, n) => {
          n.d(t, {
            $D: () => S,
            $z: () => Ce,
            Bg: () => Ge,
            Bj: () => Me,
            Bq: () => ce,
            CA: () => H,
            D9: () => We,
            Dl: () => xe,
            El: () => Fe,
            Et: () => Y,
            Ez: () => L,
            Fq: () => _e,
            GE: () => we,
            Go: () => me,
            II: () => fe,
            Im: () => ee,
            JE: () => P,
            Lm: () => Z,
            N9: () => Ie,
            O8: () => K,
            OG: () => x,
            PB: () => Ve,
            Q0: () => pe,
            Qd: () => X,
            SB: () => ke,
            SG: () => ae,
            SH: () => Be,
            U6: () => Te,
            Up: () => je,
            Uu: () => $e,
            V: () => Ae,
            Vt: () => ye,
            ZA: () => le,
            _W: () => ue,
            _s: () => ie,
            al: () => be,
            bL: () => R,
            bu: () => ne,
            bz: () => Ue,
            c$: () => Ne,
            cD: () => I,
            cy: () => Q,
            dp: () => G,
            fH: () => N,
            fp: () => J,
            gM: () => ve,
            h0: () => V,
            hj: () => de,
            hw: () => F,
            iC: () => De,
            k4: () => he,
            kK: () => D,
            l4: () => $,
            l9: () => Re,
            lk: () => k,
            mM: () => T,
            mb: () => j,
            ro: () => se,
            s0: () => O,
            t1: () => ge,
            vE: () => Ee,
            vV: () => W,
            wD: () => Oe,
            xQ: () => te,
            z$: () => oe,
          });
          var i = n(272),
            r = n(751),
            o = n(901),
            s = n(969),
            a = n(555),
            d = n(873),
            c = "String",
            u = "Function",
            l = "Number",
            f = "Object",
            g = "Boolean",
            p = Object.prototype.toString;
          let h,
            m = Boolean(window.console),
            b = Boolean(m && window.console.log),
            y = Boolean(m && window.console.info),
            v = Boolean(m && window.console.warn),
            E = Boolean(m && window.console.error);
          const A = (0, d.m)();
          function I(e) {
            h = e;
          }
          function w() {
            null != h && h(...arguments);
          }
          const T = {
            checkCookieSupport: we,
            createTrackPixelIframeHtml: function (e) {
              let t =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "";
              if (!e) return "";
              t && (e = encodeURI(e));
              n && (n = `sandbox="${n}"`);
              return `<iframe ${n} id="${O()}"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="${e}">\n    </iframe>`;
            },
            getWindowSelf: $,
            getWindowTop: j,
            canAccessWindowTop: function () {
              try {
                if (T.getWindowTop().location.href) return !0;
              } catch (e) {
                return !1;
              }
            },
            getWindowLocation: q,
            insertUserSyncIframe: ae,
            insertElement: ie,
            isFn: J,
            triggerPixel: oe,
            logError: W,
            logWarn: P,
            logMessage: x,
            logInfo: N,
            parseQS: qe,
            formatQS: function (e) {
              return Object.keys(e)
                .map((t) =>
                  Array.isArray(e[t])
                    ? e[t].map((e) => `${t}[]=${e}`).join("&")
                    : `${t}=${e[t]}`
                )
                .join("&");
            },
            deepEqual: Pe,
          };
          var C,
            B =
              ((C = 0),
              function () {
                return ++C;
              });
          function O() {
            return B() + Math.random().toString(16).substr(2);
          }
          function k(e) {
            return e
              ? (
                  e ^
                  ((window && window.crypto && window.crypto.getRandomValues
                    ? crypto.getRandomValues(new Uint8Array(1))[0] % 16
                    : 16 * Math.random()) >>
                    (e / 4))
                ).toString(16)
              : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, k);
          }
          function R(e) {
            let t = "";
            for (var n in e)
              e.hasOwnProperty(n) &&
                (t += n + "=" + encodeURIComponent(e[n]) + "&");
            return (t = t.replace(/&$/, "")), t;
          }
          function S(e) {
            return e && Object.getOwnPropertyNames(e).length > 0
              ? Object.keys(e)
                  .map((t) => `${t}=${encodeURIComponent(e[t])}`)
                  .join("&")
              : "";
          }
          function D(e) {
            return ((t = e),
            "string" == typeof t
              ? t
                  .split(/\s*,\s*/)
                  .map((e) => e.match(/^(\d+)x(\d+)$/i))
                  .filter((e) => e)
                  .map((e) => {
                    let [t, n, i] = e;
                    return [parseInt(n, 10), parseInt(i, 10)];
                  })
              : Array.isArray(t)
              ? _(t)
                ? [t]
                : t.filter(_)
              : []).map(U);
            var t;
          }
          function U(e) {
            return e[0] + "x" + e[1];
          }
          function _(e) {
            return Q(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1]);
          }
          function j() {
            return window.top;
          }
          function $() {
            return window.self;
          }
          function q() {
            return window.location;
          }
          function x() {
            G() && b && console.log.apply(console, M(arguments, "MESSAGE:"));
          }
          function N() {
            G() && y && console.info.apply(console, M(arguments, "INFO:"));
          }
          function P() {
            G() && v && console.warn.apply(console, M(arguments, "WARNING:")),
              w(s.qY.AUCTION_DEBUG, { type: "WARNING", arguments });
          }
          function W() {
            G() && E && console.error.apply(console, M(arguments, "ERROR:")),
              w(s.qY.AUCTION_DEBUG, { type: "ERROR", arguments });
          }
          function V(e) {
            function t(t) {
              return function () {
                for (
                  var n = arguments.length, i = new Array(n), r = 0;
                  r < n;
                  r++
                )
                  i[r] = arguments[r];
                t(e, ...i);
              };
            }
            return {
              logError: t(W),
              logWarn: t(P),
              logMessage: t(x),
              logInfo: t(N),
            };
          }
          function M(e, t) {
            e = [].slice.call(e);
            let n = i.$W.getCurrentBidder();
            return (
              t && e.unshift(t),
              n && e.unshift(r("#aaa")),
              e.unshift(r("#3b88c3")),
              e.unshift("%cPrebid" + (n ? `%c${n}` : "")),
              e
            );
            function r(e) {
              return `display: inline-block; color: #fff; background: ${e}; padding: 1px 4px; border-radius: 3px;`;
            }
          }
          function G() {
            return !!i.$W.getConfig("debug");
          }
          const F = (() => {
            const e = {
              border: "0px",
              hspace: "0",
              vspace: "0",
              marginWidth: "0",
              marginHeight: "0",
              scrolling: "no",
              frameBorder: "0",
              allowtransparency: "true",
            };
            return function (t, n) {
              let i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              const r = t.createElement("iframe");
              return (
                Object.assign(r, Object.assign({}, e, n)),
                Object.assign(r.style, i),
                r
              );
            };
          })();
          function H() {
            return F(
              document,
              { id: O(), width: 0, height: 0, src: "about:blank" },
              { display: "none", height: "0px", width: "0px", border: "0px" }
            );
          }
          function L(e) {
            return qe(q().search)[e] || "";
          }
          function z(e, t) {
            return p.call(e) === "[object " + t + "]";
          }
          function J(e) {
            return z(e, u);
          }
          function K(e) {
            return z(e, c);
          }
          const Q = Array.isArray.bind(Array);
          function Y(e) {
            return z(e, l);
          }
          function X(e) {
            return z(e, f);
          }
          function Z(e) {
            return z(e, g);
          }
          function ee(e) {
            return (
              !e ||
              (Q(e) || K(e) ? !(e.length > 0) : Object.keys(e).length <= 0)
            );
          }
          function te(e) {
            return K(e) && (!e || 0 === e.length);
          }
          function ne(e, t) {
            if (J(e?.forEach)) return e.forEach(t, this);
            Object.entries(e || {}).forEach((e) => {
              let [n, i] = e;
              return t.call(this, i, n);
            });
          }
          function ie(e, t, n, i) {
            let r;
            (t = t || document),
              (r = n
                ? t.getElementsByTagName(n)
                : t.getElementsByTagName("head"));
            try {
              if (
                ((r = r.length ? r : t.getElementsByTagName("body")), r.length)
              ) {
                r = r[0];
                let t = i ? null : r.firstChild;
                return r.insertBefore(e, t);
              }
            } catch (e) {}
          }
          function re(e, t) {
            let n = null;
            return new a.k((i) => {
              const r = function () {
                e.removeEventListener("load", r),
                  e.removeEventListener("error", r),
                  null != n && window.clearTimeout(n),
                  i();
              };
              e.addEventListener("load", r),
                e.addEventListener("error", r),
                null != t && (n = window.setTimeout(r, t));
            });
          }
          function oe(e, t, n) {
            const i = new Image();
            t && T.isFn(t) && re(i, n).then(t), (i.src = e);
          }
          function se(e) {
            if (!e) return;
            const t = H();
            var n;
            T.insertElement(t, document, "body"),
              (n = t.contentWindow.document).open(),
              n.write(e),
              n.close();
          }
          function ae(e, t, n) {
            let i = T.createTrackPixelIframeHtml(
                e,
                !1,
                "allow-scripts allow-same-origin"
              ),
              r = document.createElement("div");
            r.innerHTML = i;
            let o = r.firstChild;
            t && T.isFn(t) && re(o, n).then(t),
              T.insertElement(o, document, "html", !0);
          }
          function de(e, t, n) {
            return n.indexOf(e) === t;
          }
          function ce(e, t) {
            return e.concat(t);
          }
          function ue(e, t) {
            return e[t];
          }
          function le() {
            return (
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : A.adUnits
            )
              .map((e) => e.bids.map((e) => e.bidder).reduce(ce, []))
              .reduce(ce, [])
              .filter((e) => void 0 !== e)
              .filter(de);
          }
          function fe() {
            if (
              window.googletag &&
              J(window.googletag.pubads) &&
              J(window.googletag.pubads().getSlots)
            )
              return !0;
          }
          function ge() {
            if (window.apntag && J(window.apntag.getTag)) return !0;
          }
          const pe = (e, t) => t.cpm - e.cpm;
          function he(e) {
            let t = e.length;
            for (; t > 0; ) {
              let n = Math.floor(Math.random() * t);
              t--;
              let i = e[t];
              (e[t] = e[n]), (e[n] = i);
            }
            return e;
          }
          function me(e) {
            return (0, r.Q)(e) || {};
          }
          function be() {
            try {
              return T.getWindowSelf() !== T.getWindowTop();
            } catch (e) {
              return !0;
            }
          }
          function ye() {
            return /^((?!chrome|android|crios|fxios).)*safari/i.test(
              navigator.userAgent
            );
          }
          function ve(e, t) {
            if (e)
              return Object.entries(t).reduce((e, t) => {
                let [n, i] = t;
                return e.replace(
                  new RegExp("\\$\\{" + n + "\\}", "g"),
                  i || ""
                );
              }, e);
          }
          function Ee() {
            return new Date().getTime();
          }
          function Ae() {
            return (
              (window.performance &&
                window.performance.now &&
                window.performance.now()) ||
              0
            );
          }
          function Ie() {
            return !1 !== i.$W.getConfig("deviceAccess");
          }
          function we() {
            if (window.navigator.cookieEnabled || document.cookie.length)
              return !0;
          }
          function Te(e, t) {
            if (t < 1)
              throw new Error(
                `numRequiredCalls must be a positive number. Got ${t}`
              );
            let n = 0;
            return function () {
              n++, n === t && e.apply(this, arguments);
            };
          }
          function Ce(e, t) {
            return e.reduce(function (e, n) {
              return (e[n[t]] = e[n[t]] || []).push(n), e;
            }, {});
          }
          function Be(e, t) {
            return t
              .filter((t) => e[t])
              .reduce((t, n) => Object.assign(t, { [n]: e[n] }), {});
          }
          function Oe(e) {
            const t = ["banner", "native", "video"],
              n = ["instream", "outstream", "adpod"];
            return (
              !!Object.keys(e).every((e) => (0, o.mK)(t, e)) &&
              (!e.video || !e.video.context || (0, o.mK)(n, e.video.context))
            );
          }
          function ke(e, t, n) {
            return e
              .filter((e) => e.code === t)
              .flatMap((e) => e.bids)
              .filter((e) => e.bidder === n)
              .map((e) => e.params || {});
          }
          function Re() {
            return (
              "1" === navigator.doNotTrack ||
              "1" === window.doNotTrack ||
              "1" === navigator.msDoNotTrack ||
              "yes" === navigator.doNotTrack
            );
          }
          const Se = (e, t) =>
            e.getAdUnitPath() === t || e.getSlotElementId() === t;
          function De(e) {
            return (t) => Se(e, t);
          }
          function Ue(e, t) {
            const n = Object.keys(e.mediaTypes || { banner: "banner" }).join(
              ", "
            );
            return `\n    ${e.code} is a ${n} ad unit\n    containing bidders that don't support ${n}: ${t}.\n    This bidder won't fetch demand.\n  `;
          }
          const _e = Number.isInteger.bind(Number);
          function je(e, t) {
            return "object" != typeof e
              ? {}
              : t.reduce((n, i, r) => {
                  if ("function" == typeof i) return n;
                  let o = i,
                    s = i.match(/^(.+?)\sas\s(.+?)$/i);
                  s && ((i = s[1]), (o = s[2]));
                  let a = e[i];
                  return (
                    "function" == typeof t[r + 1] && (a = t[r + 1](a, n)),
                    void 0 !== a && (n[o] = a),
                    n
                  );
                }, {});
          }
          function $e(e, t) {
            return Q(e) && (!t || e.length === t) && e.every((e) => _e(e));
          }
          function qe(e) {
            return e
              ? e
                  .replace(/^\?/, "")
                  .split("&")
                  .reduce((e, t) => {
                    let [n, i] = t.split("=");
                    return (
                      /\[\]$/.test(n)
                        ? ((n = n.replace("[]", "")),
                          (e[n] = e[n] || []),
                          e[n].push(i))
                        : (e[n] = i || ""),
                      e
                    );
                  }, {})
              : {};
          }
          function xe(e, t) {
            let n = document.createElement("a");
            t && "noDecodeWholeURL" in t && t.noDecodeWholeURL
              ? (n.href = e)
              : (n.href = decodeURIComponent(e));
            let i = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
            return {
              href: n.href,
              protocol: (n.protocol || "").replace(/:$/, ""),
              hostname: n.hostname,
              port: +n.port,
              pathname: n.pathname.replace(/^(?!\/)/, "/"),
              search: i ? n.search : T.parseQS(n.search || ""),
              hash: (n.hash || "").replace(/^#/, ""),
              host: n.host || window.location.host,
            };
          }
          function Ne(e) {
            return (
              (e.protocol || "http") +
              "://" +
              (e.host || e.hostname + (e.port ? `:${e.port}` : "")) +
              (e.pathname || "") +
              (e.search ? `?${T.formatQS(e.search || "")}` : "") +
              (e.hash ? `#${e.hash}` : "")
            );
          }
          function Pe(e, t) {
            let { checkTypes: n = !1 } =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            if (e === t) return !0;
            if (
              "object" != typeof e ||
              null === e ||
              "object" != typeof t ||
              null === t ||
              (n && e.constructor !== t.constructor)
            )
              return !1;
            {
              const i = Object.keys(e);
              if (i.length !== Object.keys(t).length) return !1;
              for (let r of i) {
                if (!t.hasOwnProperty(r)) return !1;
                if (!Pe(e[r], t[r], { checkTypes: n })) return !1;
              }
              return !0;
            }
          }
          function We(e) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1;
              i < t;
              i++
            )
              n[i - 1] = arguments[i];
            if (!n.length) return e;
            const r = n.shift();
            if (X(e) && X(r))
              for (const t in r)
                X(r[t])
                  ? (e[t] || Object.assign(e, { [t]: {} }), We(e[t], r[t]))
                  : Q(r[t])
                  ? e[t]
                    ? Q(e[t]) &&
                      r[t].forEach((n) => {
                        let i = 1;
                        for (let r = 0; r < e[t].length; r++)
                          if (Pe(e[t][r], n)) {
                            i = 0;
                            break;
                          }
                        i && e[t].push(n);
                      })
                    : Object.assign(e, { [t]: [...r[t]] })
                  : Object.assign(e, { [t]: r[t] });
            return We(e, ...n);
          }
          function Ve(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              n = function (e, t) {
                if (J(Math.imul)) return Math.imul(e, t);
                var n = (4194303 & e) * (t |= 0);
                return (
                  4290772992 & e && (n += ((4290772992 & e) * t) | 0), 0 | n
                );
              },
              i = 3735928559 ^ t,
              r = 1103547991 ^ t;
            for (let t, o = 0; o < e.length; o++)
              (t = e.charCodeAt(o)),
                (i = n(i ^ t, 2654435761)),
                (r = n(r ^ t, 1597334677));
            return (
              (i =
                n(i ^ (i >>> 16), 2246822507) ^ n(r ^ (r >>> 13), 3266489909)),
              (r =
                n(r ^ (r >>> 16), 2246822507) ^ n(i ^ (i >>> 13), 3266489909)),
              (4294967296 * (2097151 & r) + (i >>> 0)).toString()
            );
          }
          function Me(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : function (e) {
                    return e;
                  };
            const n = new Map(),
              i = function () {
                const i = t.apply(this, arguments);
                return n.has(i) || n.set(i, e.apply(this, arguments)), n.get(i);
              };
            return (i.clear = n.clear.bind(n)), i;
          }
          function Ge(e, t) {
            Object.entries(t).forEach((t) => {
              let [n, i] = t;
              return e.setAttribute(n, i);
            });
          }
          function Fe(e, t) {
            let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : (e) => e,
              i = 0,
              r = e.length && e.length - 1;
            const o = n(t);
            for (; r - i > 1; ) {
              const t = i + Math.round((r - i) / 2);
              o > n(e[t]) ? (i = t) : (r = t);
            }
            for (; e.length > i && o > n(e[i]); ) i++;
            return i;
          }
        },
        894: (e, t, n) => {
          n.d(t, { Ak: () => m, BO: () => g, K7: () => p });
          var i = n(272);
          const r = "performanceMetrics",
            o =
              window.performance && window.performance.now
                ? () => window.performance.now()
                : () => Date.now(),
            s = new WeakMap();
          function a() {
            let {
              now: e = o,
              mkNode: t = u,
              mkTimer: n = c,
              mkRenamer: i = (e) => e,
              nodes: r = s,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {};
            return function () {
              return (function o(s) {
                let a =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : (e) => ({
                        forEach(t) {
                          t(e);
                        },
                      });
                a = i(a);
                const d =
                  ((c = "timestamps"),
                  function (e) {
                    return s.dfWalk({
                      visit(t, n) {
                        const i = n[c];
                        if (i.hasOwnProperty(e)) return i[e];
                      },
                    });
                  });
                var c;
                function u(e, t) {
                  const n = a(e);
                  s.dfWalk({
                    follow: (e, t) => t.propagate && (!e || !e.stopPropagation),
                    visit(e, i) {
                      n.forEach((n) => {
                        null == e
                          ? (i.metrics[n] = t)
                          : (i.groups.hasOwnProperty(n) || (i.groups[n] = []),
                            i.groups[n].push(t));
                      });
                    },
                  });
                }
                function l(t) {
                  return n(e, (e) => u(t, e));
                }
                function f() {
                  let e = {};
                  return (
                    s.dfWalk({
                      visit(t, n) {
                        e = Object.assign(
                          {},
                          !t || t.includeGroups ? n.groups : null,
                          n.metrics,
                          e
                        );
                      },
                    }),
                    e
                  );
                }
                const g = {
                  startTiming: l,
                  measureTime: function (e, t) {
                    return l(e).stopAfter(t)();
                  },
                  measureHookTime: function (e, t, n) {
                    const i = l(e);
                    return n(
                      (function (e) {
                        const t = i.stopBefore(e);
                        return (
                          (t.bail = e.bail && i.stopBefore(e.bail)),
                          (t.stopTiming = i),
                          (t.untimed = e),
                          t
                        );
                      })(t)
                    );
                  },
                  checkpoint: function (t) {
                    s.timestamps[t] = e();
                  },
                  timeSince: function (t, n) {
                    const i = d(t),
                      r = null != i ? e() - i : null;
                    return null != n && u(n, r), r;
                  },
                  timeBetween: function (e, t, n) {
                    const i = d(e),
                      r = d(t),
                      o = null != i && null != r ? r - i : null;
                    return null != n && u(n, o), o;
                  },
                  setMetric: u,
                  getMetrics: f,
                  fork: function () {
                    let {
                      propagate: e = !0,
                      stopPropagation: n = !1,
                      includeGroups: i = !1,
                    } = arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                    return o(
                      t([
                        [
                          s,
                          {
                            propagate: e,
                            stopPropagation: n,
                            includeGroups: i,
                          },
                        ],
                      ]),
                      a
                    );
                  },
                  join: function (e) {
                    let {
                      propagate: t = !0,
                      stopPropagation: n = !1,
                      includeGroups: i = !1,
                    } = arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                    const o = r.get(e);
                    null != o &&
                      o.addParent(s, {
                        propagate: t,
                        stopPropagation: n,
                        includeGroups: i,
                      });
                  },
                  newMetrics: function () {
                    return o(s.newSibling(), a);
                  },
                  renameWith: function (e) {
                    return o(s, e);
                  },
                  toJSON: () => f(),
                };
                return r.set(g, s), g;
              })(t([]));
            };
          }
          function d(e, t, n) {
            return function () {
              t && t();
              try {
                return e.apply(this, arguments);
              } finally {
                n && n();
              }
            };
          }
          function c(e, t) {
            const n = e();
            let i = !1;
            function r() {
              i || (t(e() - n), (i = !0));
            }
            return (
              (r.stopBefore = (e) => d(e, r)),
              (r.stopAfter = (e) => d(e, null, r)),
              r
            );
          }
          function u(e) {
            return {
              metrics: {},
              timestamps: {},
              groups: {},
              addParent(t, n) {
                e.push([t, n]);
              },
              newSibling: () => u(e.slice()),
              dfWalk() {
                let t,
                  {
                    visit: n,
                    follow: i = () => !0,
                    visited: r = new Set(),
                    inEdge: o,
                  } = arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                if (!r.has(this)) {
                  if ((r.add(this), (t = n(o, this)), null != t)) return t;
                  for (const [s, a] of e)
                    if (
                      i(o, a) &&
                      ((t = s.dfWalk({
                        visit: n,
                        follow: i,
                        visited: r,
                        inEdge: a,
                      })),
                      null != t)
                    )
                      return t;
                }
              },
            };
          }
          const l = (() => {
            const e = function () {},
              t = () => ({}),
              n = { forEach: e },
              i = () => null;
            (i.stopBefore = (e) => e), (i.stopAfter = (e) => e);
            const r = Object.defineProperties(
              { dfWalk: e, newSibling: () => r, addParent: e },
              Object.fromEntries(
                ["metrics", "timestamps", "groups"].map((e) => [e, { get: t }])
              )
            );
            return a({
              now: () => 0,
              mkNode: () => r,
              mkRenamer: () => () => n,
              mkTimer: () => i,
              nodes: { get: e, set: e },
            })();
          })();
          let f = !0;
          function g(e) {
            return (f && e) || l;
          }
          i.$W.getConfig(r, (e) => {
            f = !!e[r];
          });
          const p = (() => {
            const e = a();
            return function () {
              return f ? e() : l;
            };
          })();
          function h(e, t) {
            return function (n, i) {
              return function (r) {
                for (
                  var o = arguments.length,
                    s = new Array(o > 1 ? o - 1 : 0),
                    a = 1;
                  a < o;
                  a++
                )
                  s[a - 1] = arguments[a];
                const d = this;
                return g(t.apply(d, s)).measureHookTime(e + n, r, function (e) {
                  return i.call(d, e, ...s);
                });
              };
            };
          }
          const m = h("requestBids.", (e) => e.metrics);
          h("addBidResponse.", (e, t) => t.metrics);
        },
        555: (e, t, n) => {
          n.d(t, { k: () => o, v: () => s });
          const i = 0,
            r = 1;
          class o {
            #d;
            #c;
            static timeout() {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0;
              return new o((t) => {
                0 === e ? t() : setTimeout(t, e);
              });
            }
            constructor(e) {
              if ("function" != typeof e)
                throw new Error("resolver not a function");
              const t = [],
                n = [];
              let [o, s] = [i, r].map(
                (e) =>
                  function (r) {
                    if (e === i && "function" == typeof r?.then) r.then(o, s);
                    else if (!t.length)
                      for (t.push(e, r); n.length; ) n.shift()();
                  }
              );
              try {
                e(o, s);
              } catch (e) {
                s(e);
              }
              (this.#d = t), (this.#c = n);
            }
            then(e, t) {
              const n = this.#d;
              return new this.constructor((r, o) => {
                const s = () => {
                  let s = n[1],
                    [a, d] = n[0] === i ? [e, r] : [t, o];
                  if ("function" == typeof a) {
                    try {
                      s = a(s);
                    } catch (e) {
                      return void o(e);
                    }
                    d = r;
                  }
                  d(s);
                };
                n.length ? s() : this.#c.push(s);
              });
            }
            catch(e) {
              return this.then(null, e);
            }
            finally(e) {
              let t;
              return this.then(
                (n) => ((t = n), e()),
                (n) => ((t = this.constructor.reject(n)), e())
              ).then(() => t);
            }
            static #u(e, t, n) {
              let i = e.length;
              function r() {
                t.apply(this, arguments), --i <= 0 && n && n();
              }
              0 === e.length && n
                ? n()
                : e.forEach((e, t) =>
                    this.resolve(e).then(
                      (e) => r(!0, e, t),
                      (e) => r(!1, e, t)
                    )
                  );
            }
            static race(e) {
              return new this((t, n) => {
                this.#u(e, (e, i) => (e ? t(i) : n(i)));
              });
            }
            static all(e) {
              return new this((t, n) => {
                let i = [];
                this.#u(
                  e,
                  (e, t, r) => (e ? (i[r] = t) : n(t)),
                  () => t(i)
                );
              });
            }
            static allSettled(e) {
              return new this((t) => {
                let n = [];
                this.#u(
                  e,
                  (e, t, i) =>
                    (n[i] = e
                      ? { status: "fulfilled", value: t }
                      : { status: "rejected", reason: t }),
                  () => t(n)
                );
              });
            }
            static resolve(e) {
              return new this((t) => t(e));
            }
            static reject(e) {
              return new this((t, n) => n(e));
            }
          }
          function s() {
            let e,
              t,
              { promiseFactory: n = (e) => new o(e) } =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            function i(e) {
              return (t) => e(t);
            }
            return {
              promise: n((n, i) => {
                (e = n), (t = i);
              }),
              resolve: i(e),
              reject: i(t),
            };
          }
        },
        853: (e, t, n) => {
          n.d(t, { H: () => u });
          var i = n(555),
            r = n(69);
          let o = null,
            s = 0,
            a = [];
          function d() {
            document.hidden
              ? (o = Date.now())
              : ((s += Date.now() - (o ?? 0)),
                (o = null),
                a.forEach((e) => {
                  let { callback: t, startTime: n, setTimerId: i } = e;
                  return i(c(t, s - n)());
                }),
                (a = []));
          }
          function c(e, t) {
            const n = s;
            let i = setTimeout(() => {
              s === n && null == o
                ? e()
                : null != o
                ? a.push({
                    callback: e,
                    startTime: n,
                    setTimerId(e) {
                      i = e;
                    },
                  })
                : (i = c(e, s - n)());
            }, t);
            return () => i;
          }
          function u() {
            let {
              startTime: e = r.vE,
              ttl: t = () => null,
              monotonic: n = !1,
              slack: o = 5e3,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {};
            const s = new Map(),
              a = [],
              d = [],
              u = n
                ? (e) => d.push(e)
                : (e) =>
                    d.splice(
                      (0, r.El)(d, e, (e) => e.expiry),
                      0,
                      e
                    );
            let l, f;
            function g() {
              if ((f && clearTimeout(f), d.length > 0)) {
                const e = (0, r.vE)();
                (l = Math.max(e, d[0].expiry + o)),
                  (f = c(() => {
                    const e = (0, r.vE)();
                    let t = 0;
                    for (const n of d) {
                      if (n.expiry > e) break;
                      a.forEach((e) => {
                        try {
                          e(n.item);
                        } catch (e) {
                          (0, r.vV)(e);
                        }
                      }),
                        s.delete(n.item),
                        t++;
                    }
                    d.splice(0, t), (f = null), g();
                  }, l - e));
              } else f = null;
            }
            function p(n) {
              const r = {},
                s = h;
              let a;
              const [d, c] = Object.entries({ start: e, delta: t }).map((e) => {
                  let t,
                    [d, c] = e;
                  return function () {
                    const e = (t = {});
                    i.k.resolve(c(n)).then((n) => {
                      e === t &&
                        ((r[d] = n),
                        s === h &&
                          null != r.start &&
                          null != r.delta &&
                          ((a = r.start + r.delta),
                          u(p),
                          (null == f || l > a + o) && g()));
                    });
                  };
                }),
                p = {
                  item: n,
                  refresh: c,
                  get expiry() {
                    return a;
                  },
                };
              return d(), c(), p;
            }
            let h = {};
            return {
              [Symbol.iterator]: () => s.keys(),
              add(e) {
                !s.has(e) && s.set(e, p(e));
              },
              clear() {
                (d.length = 0), g(), s.clear(), (h = {});
              },
              toArray: () => Array.from(s.keys()),
              refresh() {
                (d.length = 0), g();
                for (const e of s.values()) e.refresh();
              },
              onExpiry: (e) => (
                a.push(e),
                () => {
                  const t = a.indexOf(e);
                  t >= 0 && a.splice(t, 1);
                }
              ),
            };
          }
          document.addEventListener("visibilitychange", d);
        },
        895: (e, t, n) => {
          n.d(t, {
            H6: () => d,
            V0: () => l,
            aP: () => f,
            mn: () => c,
            vk: () => g,
          });
          var i = n(69),
            r = n(433),
            o = n(272),
            s = n(214),
            a = n(881);
          const d = "outstream",
            c = "instream",
            u = new Map([
              [
                "mimes",
                (e) =>
                  Array.isArray(e) &&
                  e.length > 0 &&
                  e.every((e) => "string" == typeof e),
              ],
              ["minduration", i.Fq],
              ["maxduration", i.Fq],
              ["startdelay", i.Fq],
              ["maxseq", i.Fq],
              ["poddur", i.Fq],
              ["protocols", i.Uu],
              ["w", i.Fq],
              ["h", i.Fq],
              ["podid", i.O8],
              ["podseq", i.Fq],
              ["rqddurs", i.Uu],
              ["placement", i.Fq],
              ["plcmt", i.Fq],
              ["linearity", i.Fq],
              ["skip", (e) => [1, 0].includes(e)],
              ["skipmin", i.Fq],
              ["skipafter", i.Fq],
              ["sequence", i.Fq],
              ["slotinpod", i.Fq],
              ["mincpmpersec", i.Et],
              ["battr", i.Uu],
              ["maxextended", i.Fq],
              ["minbitrate", i.Fq],
              ["maxbitrate", i.Fq],
              ["boxingallowed", i.Fq],
              ["playbackmethod", i.Uu],
              ["playbackend", i.Fq],
              ["delivery", i.Uu],
              ["pos", i.Fq],
              ["api", i.Uu],
              ["companiontype", i.Uu],
              ["poddedupe", i.Uu],
            ]);
          function l(e) {
            const t = e?.mediaTypes?.video;
            null != t &&
              null == t.plcmt &&
              (t.context === d || [2, 3, 4].includes(t.placement)
                ? (t.plcmt = 4)
                : t.context !== d &&
                  [2, 6].includes(t.playbackmethod) &&
                  (t.plcmt = 2));
          }
          function f(e, t) {
            const n = e?.mediaTypes?.video;
            (0, i.Qd)(n)
              ? null != n &&
                Object.entries(n).forEach((r) => {
                  let [o, s] = r;
                  if (!u.has(o)) return;
                  u.get(o)(s) ||
                    ("function" == typeof t
                      ? t(o, s, e)
                      : (delete n[o],
                        (0, i.JE)(
                          `Invalid prop in adUnit "${e.code}": Invalid value for mediaTypes.video.${o} ORTB property. The property has been removed.`
                        )));
                })
              : (0, i.JE)(
                  "validateOrtbVideoFields: videoParams must be an object."
                );
          }
          function g(e) {
            let { index: t = a.n.index } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            const n = (0, r.A)(t.getMediaTypes(e), "video"),
              i = n && (0, r.A)(n, "context"),
              o = n && (0, r.A)(n, "useCacheKey"),
              s = t.getAdUnit(e);
            return p(e, s, n, i, o);
          }
          const p = (0, s.A_)(
            "sync",
            function (e, t, n, r, s) {
              return n && (s || r !== d)
                ? o.$W.getConfig("cache.url") || !e.vastXml || e.vastUrl
                  ? !(!e.vastUrl && !e.vastXml)
                  : ((0, i.vV)(
                      '\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '
                    ),
                    !1)
                : !(r === d && !s) ||
                    !!(e.renderer || (t && t.renderer) || n.renderer);
            },
            "checkVideoBidSetup"
          );
        },
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [85],
      {
        595: (s, d, e) => {
          e.d(d, { G: () => n });
          const n =
            '(()=>{"use strict";window.render=function({ad:d,adUrl:e,width:i,height:r},{mkFrame:n},o){if(!d&&!e)throw{reason:"noAd",message:"Missing ad markup or URL"};{const s=o.document,t={width:i,height:r};e&&!d?t.src=e:t.srcdoc=d,s.body.appendChild(n(s,t))}}})();';
        },
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [630],
      {
        910: (e, t, n) => {
          n.d(t, { Ay: () => d });
          var l = n(969),
            a = n(44),
            s = n(69),
            i = n(23);
          const r = { ajax: a.RD },
            o = "endpoint",
            c = "bundle",
            p = Object.values(l.qY).filter((e) => e !== l.qY.AUCTION_DEBUG);
          let u = 100;
          function d(e) {
            let { url: t, analyticsType: n, global: a, handler: d } = e;
            const y = [];
            let f,
              b,
              g = !1,
              h = !0;
            const v = (() => {
              let e,
                t = !1;
              const n = () => {
                if (!t) {
                  t = !0;
                  try {
                    let e = 0,
                      t = 0;
                    for (; y.length > 0; ) {
                      e++;
                      const n = y.length;
                      if ((y.shift()(), y.length >= n ? t++ : (t = 0), t >= 10))
                        return (
                          (0, s.vV)(
                            "Detected probable infinite loop, discarding events",
                            y
                          ),
                          void (y.length = 0)
                        );
                    }
                    (0, s.OG)(`${b} analytics: processed ${e} events`);
                  } finally {
                    t = !1;
                  }
                }
              };
              return function () {
                null != e && (clearTimeout(e), (e = null)),
                  0 === u ? n() : (e = setTimeout(n, u));
              };
            })();
            return Object.defineProperties(
              {
                track: function (e) {
                  let { eventType: n, args: l } = e;
                  this.getAdapterType() === c && window[a](d, n, l);
                  this.getAdapterType() === o &&
                    (function (e) {
                      let { eventType: n, args: l, callback: a } = e;
                      r.ajax(t, a, JSON.stringify({ eventType: n, args: l }));
                    })(...arguments);
                },
                enqueue: T,
                enableAnalytics: A,
                disableAnalytics: function () {
                  Object.entries(f || {}).forEach((e) => {
                    let [t, n] = e;
                    i.AU(t, n);
                  }),
                    (this.enableAnalytics = this._oldEnable
                      ? this._oldEnable
                      : A),
                    (g = !1);
                },
                getAdapterType: () => n,
                getGlobal: () => a,
                getHandler: () => d,
                getUrl: () => t,
              },
              { enabled: { get: () => g } }
            );
            function T(e) {
              let { eventType: t, args: n } = e;
              y.push(() => {
                this.track({ eventType: t, args: n });
              }),
                v();
            }
            function A(e) {
              b = e?.provider;
              var t = this;
              if (
                ((h =
                  "object" != typeof e ||
                  "object" != typeof e.options ||
                  void 0 === e.options.sampling ||
                  Math.random() < parseFloat(e.options.sampling)),
                h)
              ) {
                const n = (() => {
                  const { includeEvents: t = p, excludeEvents: n = [] } =
                    e || {};
                  return new Set(
                    Object.values(l.qY)
                      .filter((e) => t.includes(e))
                      .filter((e) => !n.includes(e))
                  );
                })();
                i.kQ().forEach((e) => {
                  if (!e || !n.has(e.eventType)) return;
                  const { eventType: l, args: a } = e;
                  T.call(t, { eventType: l, args: a });
                }),
                  (f = Object.fromEntries(
                    Array.from(n).map((e) => {
                      const t = (t) => this.enqueue({ eventType: e, args: t });
                      return i.on(e, t), [e, t];
                    })
                  ));
              } else
                (0, s.OG)(`Analytics adapter for "${a}" disabled by sampling`);
              (this._oldEnable = this.enableAnalytics),
                (this.enableAnalytics = function () {
                  return (0, s.OG)(
                    `Analytics adapter for "${a}" already enabled, unnecessary call to \`enableAnalytics\`.`
                  );
                }),
                (g = !0);
            }
          }
        },
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [497],
      {
        695: (e, t, s) => {
          var n = s(873),
            i = s(69),
            o = s(44),
            r = s(910),
            a = s(46),
            d = s(969),
            c = s(938),
            u = s(569);
          const l = "pubwise",
            _ = (0, c.vM)({ moduleType: u.Tn, moduleName: l }),
            g = "PubWise:";
          let p = {
              site: "",
              endpoint: "https://api.pubwise.io/api/v5/event/add/",
              debug: null,
            },
            v = !1,
            f = {
              utm_source: "",
              utm_medium: "",
              utm_campaign: "",
              utm_term: "",
              utm_content: "",
            },
            m = { sessionId: "", activationId: "" },
            I = "pubwise",
            b = [],
            E = {},
            D = "sess_id",
            y = "sess_timeout";
          function T(e) {
            return I.concat("_" + e);
          }
          function S() {
            return T(y);
          }
          function O() {
            return T(D);
          }
          function h() {
            if (b.length > 0) {
              let e = { metaData: E, eventList: b.splice(0) };
              (0, o.RD)(p.endpoint, (e) => R("Result", e), JSON.stringify(e));
            }
          }
          function R(e, t) {
            (0, i.fH)(`${g} ` + e, t);
          }
          let q = Object.assign((0, r.Ay)({ analyticsType: "endpoint" }), {
            track(e) {
              let { eventType: t, args: s } = e;
              this.handleEvent(t, s);
            },
          });
          (q.handleEvent = function (e, t) {
            var s;
            !(function (e) {
              return (
                -1 !==
                [
                  d.qY.AUCTION_INIT,
                  d.qY.BID_REQUESTED,
                  d.qY.BID_RESPONSE,
                  d.qY.BID_WON,
                  d.qY.BID_TIMEOUT,
                  d.qY.AD_RENDER_FAILED,
                  d.qY.TCF2_ENFORCEMENT,
                ].indexOf(e)
              );
            })(e)
              ? R(`Skipping Event ${e} ${v}`, t)
              : (R(`Emitting Event ${e} ${v}`, t),
                (E = { target_site: p.site, debug: p.debug ? 1 : 0 }),
                (E = (function (e) {
                  try {
                    (e.session_id = m.sessionId),
                      (e.activation_id = m.activationId);
                  } catch (t) {
                    e.error_sess = 1;
                  }
                  return e;
                })(E)),
                (E = (function (e) {
                  try {
                    window.PREBID_TIMEOUT
                      ? (e.target_timeout = window.PREBID_TIMEOUT)
                      : (e.target_timeout = "NA"),
                      (e.pw_version = "4.0.1"),
                      (e.pbjs_version = "9.21.0"),
                      (e.debug = p.debug);
                  } catch (t) {
                    e.error_metric = 1;
                  }
                  return e;
                })(E)),
                (E = (function (e) {
                  let t = !1;
                  try {
                    for (let s in f)
                      (f[s] = (0, i.Ez)(s)), f[s] && ((t = !0), (e[s] = f[s]));
                    if (!1 === t)
                      for (let t in f) {
                        let s = _.getDataFromLocalStorage(T(t));
                        null != s && 0 !== s.length && (e[t] = s);
                      }
                    else for (let e in f) _.setDataInLocalStorage(T(e), f[e]);
                  } catch (t) {
                    R("Error", t), (e.error_utm = 1);
                  }
                  return e;
                })(E)),
                (s = E),
                p.custom &&
                  (p.custom.c_script_type &&
                    (s.c_script_type = p.custom.c_script_type),
                  p.custom.c_host && (s.c_host = p.custom.c_host),
                  p.custom.c_slot1 && (s.c_slot1 = p.custom.c_slot1),
                  p.custom.c_slot2 && (s.c_slot2 = p.custom.c_slot2),
                  p.custom.c_slot3 && (s.c_slot3 = p.custom.c_slot3),
                  p.custom.c_slot4 && (s.c_slot4 = p.custom.c_slot4)),
                (E = s),
                e === d.qY.AUCTION_INIT
                  ? (t = (function (e) {
                      let t = Object.assign({}, e);
                      return (
                        (t.refererInfo = {}),
                        void 0 !== t.bidderRequests &&
                          void 0 !== t.bidderRequests[0] &&
                          void 0 !== t.bidderRequests[0].refererInfo &&
                          (t.refererInfo =
                            t.bidderRequests[0].refererInfo.legacy),
                        void 0 !== t.adUnitCodes && delete t.adUnitCodes,
                        void 0 !== t.adUnits && delete t.adUnits,
                        void 0 !== t.bidderRequests && delete t.bidderRequests,
                        void 0 !== t.bidsReceived && delete t.bidsReceived,
                        void 0 !== t.config && delete t.config,
                        void 0 !== t.noBids && delete t.noBids,
                        void 0 !== t.winningBids && delete t.winningBids,
                        t
                      );
                    })(t))
                  : e === d.qY.BID_RESPONSE &&
                    (t = (function (e) {
                      let t = Object.assign({}, e);
                      return (
                        void 0 !== t.ad && (t.ad = ""),
                        void 0 !== t.adUrl && (t.adUrl = ""),
                        void 0 !== t.adserverTargeting &&
                          (t.adserverTargeting = ""),
                        void 0 !== t.ts && (t.ts = ""),
                        void 0 !== t.statusMessage &&
                          "Bid returned empty or error response" ===
                            t.statusMessage &&
                          (t.statusMessage = "eoe"),
                        (t.auctionEnded = !1),
                        t
                      );
                    })(t)),
                b.push({ eventType: e, args: t })),
              (e !== d.qY.AUCTION_END && e !== d.qY.BID_WON) || h();
          }),
            (q.storeSessionID = function (e) {
              _.setDataInLocalStorage(O(), e), R("New Session Generated", e);
            }),
            (q.ensureSession = function () {
              let e = _.getDataFromLocalStorage(O()) || "";
              if (
                !0 ===
                  (function () {
                    let e = _.getDataFromLocalStorage(S());
                    return Date.now() - parseInt(e) > 18e5;
                  })() ||
                null === e ||
                "" === e
              ) {
                let e = (0, i.lk)();
                !(function () {
                  R("Session Expiring UTM Data");
                  for (let e in f) _.removeDataFromLocalStorage(T(e));
                })(),
                  this.storeSessionID(e),
                  (m.sessionId = e);
              } else null != e && (m.sessionId = e);
              _.setDataInLocalStorage(S(), Date.now().toString());
            }),
            (q.adapterEnableAnalytics = q.enableAnalytics),
            (q.enableAnalytics = function (e) {
              (p = Object.assign(p, e.options)),
                null === p.debug && (p.debug = (0, i.dp)()),
                R("Enabled", p),
                (v = !0),
                setInterval(h, 100),
                (m.activationId = (0, i.lk)()),
                this.ensureSession(),
                q.adapterEnableAnalytics(e);
            }),
            a.Ay.registerAnalyticsAdapter({ adapter: q, code: l, gvlid: 842 });
          (0, n.E)("pubwiseAnalyticsAdapter");
        },
      },
      (e) => {
        e.O(0, [630, 802, 85], () => {
          return (t = 695), e((e.s = t));
          var t;
        });
        e.O();
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [362],
      {
        665: (e, i, s) => {
          var a = s(873),
            r = s(69),
            t = s(433),
            n = s(172),
            o = s(115),
            d = s(371),
            p = s(272),
            c = s(449),
            m = s(895);
          const u = "0.3.0",
            l = void 0,
            g = "USD",
            h = "PubWise: ",
            E = "https://prebid.org/dev-docs/show-native-ads.html",
            y = "Video.Placement param missing",
            f = [d.D4, d.G_, d.s6],
            b = { gender: "", yob: "", lat: "", lon: "" },
            I = {
              NUMBER: "number",
              STRING: "string",
              BOOLEAN: "boolean",
              ARRAY: "array",
              OBJECT: "object",
            },
            v = {
              mimes: I.ARRAY,
              minduration: I.NUMBER,
              maxduration: I.NUMBER,
              startdelay: I.NUMBER,
              playbackmethod: I.ARRAY,
              api: I.ARRAY,
              protocols: I.ARRAY,
              w: I.NUMBER,
              h: I.NUMBER,
              battr: I.ARRAY,
              linearity: I.NUMBER,
              placement: I.NUMBER,
              plcmt: I.NUMBER,
              minbitrate: I.NUMBER,
              maxbitrate: I.NUMBER,
              skip: I.NUMBER,
            },
            T = {
              TITLE: { ID: 1, KEY: "title", TYPE: 0 },
              IMAGE: { ID: 2, KEY: "image", TYPE: 0 },
              ICON: { ID: 3, KEY: "icon", TYPE: 0 },
              SPONSOREDBY: { ID: 4, KEY: "sponsoredBy", TYPE: 1 },
              BODY: { ID: 5, KEY: "body", TYPE: 2 },
              CLICKURL: { ID: 6, KEY: "clickUrl", TYPE: 0 },
              VIDEO: { ID: 7, KEY: "video", TYPE: 0 },
              EXT: { ID: 8, KEY: "ext", TYPE: 0 },
              DATA: { ID: 9, KEY: "data", TYPE: 0 },
              LOGO: { ID: 10, KEY: "logo", TYPE: 0 },
              SPONSORED: { ID: 11, KEY: "sponsored", TYPE: 1 },
              DESC: { ID: 12, KEY: "data", TYPE: 2 },
              RATING: { ID: 13, KEY: "rating", TYPE: 3 },
              LIKES: { ID: 14, KEY: "likes", TYPE: 4 },
              DOWNLOADS: { ID: 15, KEY: "downloads", TYPE: 5 },
              PRICE: { ID: 16, KEY: "price", TYPE: 6 },
              SALEPRICE: { ID: 17, KEY: "saleprice", TYPE: 7 },
              PHONE: { ID: 18, KEY: "phone", TYPE: 8 },
              ADDRESS: { ID: 19, KEY: "address", TYPE: 9 },
              DESC2: { ID: 20, KEY: "desc2", TYPE: 10 },
              DISPLAYURL: { ID: 21, KEY: "displayurl", TYPE: 11 },
              CTA: { ID: 22, KEY: "cta", TYPE: 12 },
            },
            D = { ICON: 1, LOGO: 2, IMAGE: 3 },
            O = [
              { id: T.SPONSOREDBY.ID, required: !0, data: { type: 1 } },
              { id: T.TITLE.ID, required: !0 },
              { id: T.IMAGE.ID, required: !0 },
            ];
          let Y = !1,
            w = {},
            R = {};
          (0, r.bu)(T, (e) => {
            w[e.ID] = e.KEY;
          }),
            (0, r.bu)(T, (e) => {
              R[e.KEY] = e;
            });
          const P = {
            code: "pwbid",
            gvlid: 842,
            supportedMediaTypes: [d.D4, d.G_, d.s6],
            isBidRequestValid: function (e) {
              if (e.params && e.params.siteId) {
                if (!(0, r.O8)(e.params.siteId))
                  return K("siteId is required for bid", e), !1;
                if (
                  e.hasOwnProperty("mediaTypes") &&
                  e.mediaTypes.hasOwnProperty(d.G_)
                ) {
                  let a = (0, t.A)(e.mediaTypes, "video.mimes"),
                    n = (0, t.A)(e, "params.video.mimes");
                  if (!1 === z(a) && !1 === z(n))
                    return (
                      K(
                        "Error: For video ads, bid.mediaTypes.video.mimes OR bid.params.video.mimes should be present and must be a non-empty array. Call suppressed:",
                        JSON.stringify(e)
                      ),
                      !1
                    );
                  if (!e.mediaTypes[d.G_].hasOwnProperty("context"))
                    return (
                      (i = "no context specified in bid. Rejecting bid: "),
                      (s = (s = JSON.stringify(e)) || ""),
                      (0, r.vV)(h + i, s),
                      !1
                    );
                  if ("outstream" === e.mediaTypes[d.G_].context)
                    return (
                      delete e.mediaTypes[d.G_],
                      K(
                        "outstream not currently supported ",
                        JSON.stringify(e)
                      ),
                      !1
                    );
                }
                return !0;
              }
              var i, s;
              return !1;
            },
            buildRequests: function (e, i) {
              var s;
              (e = (0, c.Xj)(e)), i && i.refererInfo && (s = i.refererInfo);
              var a,
                t = (function (e) {
                  return { pageURL: e?.page, refURL: e?.ref };
                })(s),
                o = (function (e) {
                  return {
                    id: "" + new Date().getTime(),
                    at: 1,
                    cur: [g],
                    imp: [],
                    site: { page: e.pageURL, ref: e.refURL, publisher: {} },
                    device: {
                      ua: navigator.userAgent,
                      js: 1,
                      dnt:
                        "yes" == navigator.doNotTrack ||
                        "1" == navigator.doNotTrack ||
                        "1" == navigator.msDoNotTrack
                          ? 1
                          : 0,
                      h: screen.height,
                      w: screen.width,
                      language: navigator.language,
                      devicetype: q(),
                    },
                    user: {},
                    ext: { version: u },
                  };
                })(t),
                m = "",
                h = [];
              if (
                (e.forEach((e) => {
                  ((a = (0, r.Go)(e)).params.adSlot = a.params.adSlot || ""),
                    (function (e) {
                      k("parseAdSlot bid", e),
                        e.adUnitCode
                          ? (e.params.adUnit = e.adUnitCode)
                          : (e.params.adUnit = "");
                      if (
                        ((e.params.width = 0),
                        (e.params.height = 0),
                        (e.params.adSlot = (function (e) {
                          if ((0, r.O8)(e))
                            return e.replace(/^\s+/g, "").replace(/\s+$/g, "");
                          return "";
                        })(e.params.adSlot)),
                        e.hasOwnProperty("mediaTypes"))
                      ) {
                        if (
                          e.mediaTypes.hasOwnProperty(d.D4) &&
                          e.mediaTypes.banner.hasOwnProperty("sizes")
                        ) {
                          for (
                            var i = 0, s = [];
                            i < e.mediaTypes.banner.sizes.length;
                            i++
                          )
                            2 === e.mediaTypes.banner.sizes[i].length &&
                              s.push(e.mediaTypes.banner.sizes[i]);
                          (e.mediaTypes.banner.sizes = s),
                            e.mediaTypes.banner.sizes.length >= 1 &&
                              ((e.params.width =
                                e.mediaTypes.banner.sizes[0][0]),
                              (e.params.height =
                                e.mediaTypes.banner.sizes[0][1]),
                              (e.mediaTypes.banner.sizes =
                                e.mediaTypes.banner.sizes.splice(
                                  1,
                                  e.mediaTypes.banner.sizes.length - 1
                                )));
                        }
                      } else
                        K("MediaTypes are Required for all Adunit Configs", e);
                    })(a),
                    ((t = (function (e, i) {
                      var s, a, t;
                      for (s in b)
                        b.hasOwnProperty(s) &&
                          (a = e[s]) &&
                          ("object" == typeof (t = b[s]) && (a = t.f(a, i)),
                          (0, r.O8)(a)
                            ? (i[s] = a)
                            : K(
                                "Ignoring param : " +
                                  s +
                                  " with value : " +
                                  b[s] +
                                  ", expects string-value, found " +
                                  typeof a
                              ));
                      return i;
                    })(a.params, t)).transactionId = a.ortb2Imp?.ext?.tid),
                    (m = a.params.currency || l),
                    (a.params.currency = m),
                    a.params.hasOwnProperty("bcat") &&
                      (0, r.cy)(a.params.bcat) &&
                      (h = h.concat(a.params.bcat));
                  var i = (function (e, i) {
                    var s,
                      a,
                      r = {},
                      t = {},
                      n = "";
                    if (
                      ((r = {
                        id: e.bidId,
                        tagid: e.params.adUnit || void 0,
                        bidfloor: A("bidFloor", e.params.bidFloor),
                        secure: 1,
                        bidfloorcur: e.params.currency
                          ? A("currency", e.params.currency)
                          : g,
                        ext: { tid: e.ortb2Imp?.ext?.tid || "" },
                      }),
                      e.hasOwnProperty("mediaTypes"))
                    )
                      for (n in e.mediaTypes)
                        switch (n) {
                          case d.D4:
                            (s = x(e)) !== l && (r.banner = s);
                            break;
                          case d.s6:
                            (t.request = JSON.stringify(N(e.nativeParams))),
                              Y
                                ? K(
                                    "Error: Error in Native adunit " +
                                      e.params.adUnit +
                                      ". Ignoring the adunit. Refer to " +
                                      E +
                                      " for more details."
                                  )
                                : (r.native = t);
                            break;
                          case d.G_:
                            (a = C(e)) !== l && (r.video = a);
                        }
                    else K("MediaTypes are Required for all Adunit Configs", e);
                    return (
                      (function (e, i) {
                        let s = -1;
                        "function" != typeof i.getFloor ||
                          p.$W.getConfig("pubwise.disableFloors") ||
                          [d.D4, d.G_, d.s6].forEach((a) => {
                            if (e.hasOwnProperty(a)) {
                              let r = i.getFloor({
                                currency: e.bidFloorCur,
                                mediaType: a,
                                size: "*",
                              });
                              if (
                                "object" == typeof r &&
                                r.currency === e.bidFloorCur &&
                                !isNaN(parseInt(r.floor))
                              ) {
                                let e = parseFloat(r.floor);
                                s = -1 == s ? e : Math.min(e, s);
                              }
                            }
                          });
                        e.bidfloor && (s = Math.max(s, e.bidfloor));
                        e.bidfloor = !isNaN(s) && s > 0 ? s : l;
                      })(r, e),
                      r.hasOwnProperty(d.D4) ||
                      r.hasOwnProperty(d.s6) ||
                      r.hasOwnProperty(d.G_)
                        ? r
                        : l
                    );
                  })(a);
                  i && o.imp.push(i);
                }),
                0 != o.imp.length)
              ) {
                -1 !== window.location.href.indexOf("pubwiseTestBid=true") &&
                  (o.test = 1),
                  a.params.isTest && (o.test = Number(a.params.isTest)),
                  (o.site.publisher.id = a.params.siteId.trim()),
                  (o.user.gender = t.gender ? t.gender.trim() : l),
                  (o.user.geo = {}),
                  (o.user.geo.lat = A("lat", 0)),
                  (o.user.geo.lon = A("lon", 0)),
                  (o.user.yob = A("yob", t.yob)),
                  (o.device.geo = o.user.geo),
                  (o.site.page = o.site?.page?.trim()),
                  (o.site.domain = (function (e) {
                    let i = document.createElement("a");
                    return (i.href = e), i.hostname;
                  })(o.site.page)),
                  "object" == typeof p.$W.getConfig("content") &&
                    (o.site.content = p.$W.getConfig("content")),
                  "object" == typeof p.$W.getConfig("device") &&
                    (o.device = Object.assign(
                      o.device,
                      p.$W.getConfig("device")
                    )),
                  (0, n.J)(o, "source.tid", i?.ortb2?.source?.tid),
                  e[0].schain && (0, n.J)(o, "source.ext.schain", e[0].schain),
                  i &&
                    i.gdprConsent &&
                    ((0, n.J)(
                      o,
                      "user.ext.consent",
                      i.gdprConsent.consentString
                    ),
                    (0, n.J)(
                      o,
                      "regs.ext.gdpr",
                      i.gdprConsent.gdprApplies ? 1 : 0
                    )),
                  i &&
                    i.uspConsent &&
                    (0, n.J)(o, "regs.ext.us_privacy", i.uspConsent),
                  !0 === p.$W.getConfig("coppa") &&
                    (0, n.J)(o, "regs.coppa", 1);
                return (
                  k("buildRequests payload", o),
                  k("buildRequests bidderRequest", i),
                  {
                    method: "POST",
                    url: U(a),
                    data: o,
                    options: { contentType: "text/plain" },
                    bidderRequest: i,
                  }
                );
              }
            },
            interpretResponse: function (e, i) {
              const s = [];
              var a = g;
              k("interpretResponse request", i);
              let n = i.data;
              return (
                e.body &&
                  e.body.seatbid &&
                  (0, r.cy)(e.body.seatbid) &&
                  (k("interpretResponse response body", e.body),
                  (a = e.body.cur || a),
                  e.body.seatbid.forEach((e) => {
                    e.bid &&
                      (0, r.cy)(e.bid) &&
                      e.bid.forEach((r) => {
                        let o = {
                          requestId: r.impid,
                          cpm: (parseFloat(r.price) || 0).toFixed(2),
                          width: r.w,
                          height: r.h,
                          creativeId: r.crid || r.id,
                          currency: a,
                          netRevenue: true,
                          ttl: 300,
                          ad: r.adm,
                          pw_seat: e.seat || null,
                          pw_dspid: r.ext && r.ext.dspid ? r.ext.dspid : null,
                          partnerImpId: r.id || "",
                        };
                        n.imp &&
                          n.imp.length > 0 &&
                          n.imp.forEach((e) => {
                            if (r.impid === e.id)
                              switch (
                                ((function (e, i) {
                                  if (e.ext && null != e.ext.bidtype)
                                    i.mediaType = f[e.ext.bidtype];
                                  else {
                                    k(
                                      "bid.ext.bidtype does not exist, checking alternatively for mediaType"
                                    );
                                    var s = e.adm,
                                      a = new RegExp(/VAST\s+version/);
                                    if (s.indexOf('"ver":') >= 0)
                                      try {
                                        var r = "";
                                        (r = JSON.parse(
                                          s.replace(/\\/g, "")
                                        )) &&
                                          r.assets &&
                                          (i.mediaType = d.s6);
                                      } catch (e) {
                                        K(
                                          "Error: Cannot parse native reponse for ad response: ",
                                          s
                                        );
                                      }
                                    else
                                      a.test(s)
                                        ? (i.mediaType = d.G_)
                                        : (i.mediaType = d.D4);
                                  }
                                })(r, o),
                                o.mediaType)
                              ) {
                                case d.D4:
                                  break;
                                case d.G_:
                                  switch (
                                    (0, t.A)(i, "mediaTypes.video.context")
                                  ) {
                                    case m.H6:
                                    case m.mn:
                                  }
                                  (o.width = r.hasOwnProperty("w")
                                    ? r.w
                                    : e.video.w),
                                    (o.height = r.hasOwnProperty("h")
                                      ? r.h
                                      : e.video.h),
                                    (o.vastXml = r.adm),
                                    (o.vastUrl = r.vastUrl);
                                  break;
                                case d.s6:
                                  !(function (e, i) {
                                    if (
                                      ((i.native = {}), e.hasOwnProperty("adm"))
                                    ) {
                                      var s = "";
                                      try {
                                        s = JSON.parse(
                                          e.adm.replace(/\\/g, "")
                                        );
                                      } catch (e) {
                                        return void K(
                                          "Error: Cannot parse native reponse for ad response: " +
                                            i.adm
                                        );
                                      }
                                      if (
                                        s &&
                                        s.assets &&
                                        s.assets.length > 0
                                      ) {
                                        i.mediaType = d.s6;
                                        for (
                                          let e = 0, a = s.assets.length;
                                          e < a;
                                          e++
                                        )
                                          switch (s.assets[e].id) {
                                            case T.TITLE.ID:
                                              i.native.title =
                                                s.assets[e].title &&
                                                s.assets[e].title.text;
                                              break;
                                            case T.IMAGE.ID:
                                              i.native.image = {
                                                url:
                                                  s.assets[e].img &&
                                                  s.assets[e].img.url,
                                                height:
                                                  s.assets[e].img &&
                                                  s.assets[e].img.h,
                                                width:
                                                  s.assets[e].img &&
                                                  s.assets[e].img.w,
                                              };
                                              break;
                                            case T.ICON.ID:
                                              i.native.icon = {
                                                url:
                                                  s.assets[e].img &&
                                                  s.assets[e].img.url,
                                                height:
                                                  s.assets[e].img &&
                                                  s.assets[e].img.h,
                                                width:
                                                  s.assets[e].img &&
                                                  s.assets[e].img.w,
                                              };
                                              break;
                                            case T.SPONSOREDBY.ID:
                                            case T.BODY.ID:
                                            case T.LIKES.ID:
                                            case T.DOWNLOADS.ID:
                                            case T.PRICE:
                                            case T.SALEPRICE.ID:
                                            case T.PHONE.ID:
                                            case T.ADDRESS.ID:
                                            case T.DESC2.ID:
                                            case T.CTA.ID:
                                            case T.RATING.ID:
                                            case T.DISPLAYURL.ID:
                                              i.native[w[s.assets[e].id]] =
                                                s.assets[e].data &&
                                                s.assets[e].data.value;
                                          }
                                        (i.clickUrl = s.link && s.link.url),
                                          (i.clickTrackers =
                                            (s.link && s.link.clicktrackers) ||
                                            []),
                                          (i.impressionTrackers =
                                            s.imptrackers || []),
                                          (i.jstracker = s.jstracker || []),
                                          i.width || (i.width = 0),
                                          i.height || (i.height = 0);
                                      }
                                    }
                                  })(r, o);
                              }
                          }),
                          (o.meta = {}),
                          r.ext &&
                            r.ext.dspid &&
                            (o.meta.networkId = r.ext.dspid),
                          r.ext &&
                            r.ext.advid &&
                            (o.meta.buyerId = r.ext.advid),
                          r.adomain &&
                            r.adomain.length > 0 &&
                            ((o.meta.advertiserDomains = r.adomain),
                            (o.meta.clickUrl = r.adomain[0])),
                          s.push(o);
                      });
                  })),
                s
              );
            },
          };
          function A(e, i) {
            if (!(0, r.O8)(i))
              return (
                i &&
                  K(
                    "Ignoring param key: " +
                      e +
                      ", expects string-value, found " +
                      typeof i
                  ),
                l
              );
            switch (e) {
              case "bidFloor":
              case "lat":
              case "lon":
                return parseFloat(i) || l;
              case "yob":
                return parseInt(i) || l;
              default:
                return i;
            }
          }
          function S(e, i) {
            var s = e.KEY;
            return {
              id: e.ID,
              required: i[s].required ? 1 : 0,
              data: { type: e.TYPE, len: i[s].len, ext: i[s].ext },
            };
          }
          function N(e) {
            var i = { assets: [] };
            for (var s in e) {
              if (e.hasOwnProperty(s)) {
                var a = {};
                if (
                  !(
                    i.assets &&
                    i.assets.length > 0 &&
                    i.assets.hasOwnProperty(s)
                  )
                )
                  switch (s) {
                    case T.TITLE.KEY:
                      e[s].len || e[s].length
                        ? (a = {
                            id: T.TITLE.ID,
                            required: e[s].required ? 1 : 0,
                            title: {
                              len: e[s].len || e[s].length,
                              ext: e[s].ext,
                            },
                          })
                        : K(
                            "Error: Title Length is required for native ad: " +
                              JSON.stringify(e)
                          );
                      break;
                    case T.IMAGE.KEY:
                      e[s].sizes && e[s].sizes.length > 0
                        ? (a = {
                            id: T.IMAGE.ID,
                            required: e[s].required ? 1 : 0,
                            img: {
                              type: D.IMAGE,
                              w:
                                e[s].w ||
                                e[s].width ||
                                (e[s].sizes ? e[s].sizes[0] : l),
                              h:
                                e[s].h ||
                                e[s].height ||
                                (e[s].sizes ? e[s].sizes[1] : l),
                              wmin:
                                e[s].wmin ||
                                e[s].minimumWidth ||
                                (e[s].minsizes ? e[s].minsizes[0] : l),
                              hmin:
                                e[s].hmin ||
                                e[s].minimumHeight ||
                                (e[s].minsizes ? e[s].minsizes[1] : l),
                              mimes: e[s].mimes,
                              ext: e[s].ext,
                            },
                          })
                        : K(
                            "Error: Image sizes is required for native ad: " +
                              JSON.stringify(e)
                          );
                      break;
                    case T.ICON.KEY:
                      e[s].sizes && e[s].sizes.length > 0
                        ? (a = {
                            id: T.ICON.ID,
                            required: e[s].required ? 1 : 0,
                            img: {
                              type: D.ICON,
                              w:
                                e[s].w ||
                                e[s].width ||
                                (e[s].sizes ? e[s].sizes[0] : l),
                              h:
                                e[s].h ||
                                e[s].height ||
                                (e[s].sizes ? e[s].sizes[1] : l),
                            },
                          })
                        : K(
                            "Error: Icon sizes is required for native ad: " +
                              JSON.stringify(e)
                          );
                      break;
                    case T.VIDEO.KEY:
                      a = {
                        id: T.VIDEO.ID,
                        required: e[s].required ? 1 : 0,
                        video: {
                          minduration: e[s].minduration,
                          maxduration: e[s].maxduration,
                          protocols: e[s].protocols,
                          mimes: e[s].mimes,
                          ext: e[s].ext,
                        },
                      };
                      break;
                    case T.EXT.KEY:
                      a = { id: T.EXT.ID, required: e[s].required ? 1 : 0 };
                      break;
                    case T.LOGO.KEY:
                      a = {
                        id: T.LOGO.ID,
                        required: e[s].required ? 1 : 0,
                        img: {
                          type: D.LOGO,
                          w:
                            e[s].w ||
                            e[s].width ||
                            (e[s].sizes ? e[s].sizes[0] : l),
                          h:
                            e[s].h ||
                            e[s].height ||
                            (e[s].sizes ? e[s].sizes[1] : l),
                        },
                      };
                      break;
                    case T.SPONSOREDBY.KEY:
                    case T.BODY.KEY:
                    case T.RATING.KEY:
                    case T.LIKES.KEY:
                    case T.DOWNLOADS.KEY:
                    case T.PRICE.KEY:
                    case T.SALEPRICE.KEY:
                    case T.PHONE.KEY:
                    case T.ADDRESS.KEY:
                    case T.DESC2.KEY:
                    case T.DISPLAYURL.KEY:
                    case T.CTA.KEY:
                      a = S(R[s], e);
                  }
              }
              a && a.id && (i.assets[i.assets.length] = a);
            }
            var r = O.length,
              t = 0;
            return (
              O.forEach((e) => {
                for (var s = i.assets.length, a = 0; a < s; a++)
                  if (e.id == i.assets[a].id) {
                    t++;
                    break;
                  }
              }),
              (Y = r != t),
              i
            );
          }
          function x(e) {
            var i,
              s = e.mediaTypes.banner.sizes,
              a = [];
            if (s !== l && (0, r.cy)(s)) {
              if (((i = {}), e.params.width || e.params.height))
                (i.w = e.params.width), (i.h = e.params.height);
              else {
                if (0 === s.length)
                  return (
                    (i = l),
                    K(
                      "Error: mediaTypes.banner.size missing for adunit: " +
                        e.params.adUnit +
                        ". Ignoring the banner impression in the adunit."
                    ),
                    i
                  );
                (i.w = parseInt(s[0][0], 10)),
                  (i.h = parseInt(s[0][1], 10)),
                  (s = s.splice(1, s.length - 1));
              }
              s.length > 0 &&
                ((a = []),
                s.forEach(function (e) {
                  e.length > 1 && a.push({ w: e[0], h: e[1] });
                }),
                a.length > 0 && (i.format = a)),
                (i.pos = 0),
                (i.topframe = (0, r.al)() ? 0 : 1);
            } else
              K(
                "Error: mediaTypes.banner.size missing for adunit: " +
                  e.params.adUnit +
                  ". Ignoring the banner impression in the adunit."
              ),
                (i = l);
            return i;
          }
          function k(e, i) {
            (i = i || ""), (0, r.fH)(h + e, i);
          }
          function K(e, i) {
            (i = i || ""), (0, r.JE)(h + e, i);
          }
          function C(e) {
            var i,
              s = (0, r.D9)((0, t.A)(e.mediaTypes, "video"), e.params.video);
            if (s !== l) {
              for (var a in ((i = {}),
              (function (e, i) {
                (0, t.A)(e, "placement") || K(`${y} for ${i}`, i);
              })(s, e.adUnitCode),
              v))
                s.hasOwnProperty(a) && (i[a] = L(a, s[a], v[a]));
              (0, r.cy)(e.mediaTypes.video.playerSize[0])
                ? ((i.w = parseInt(e.mediaTypes.video.playerSize[0][0], 10)),
                  (i.h = parseInt(e.mediaTypes.video.playerSize[0][1], 10)))
                : (0, r.Et)(e.mediaTypes.video.playerSize[0]) &&
                  ((i.w = parseInt(e.mediaTypes.video.playerSize[0], 10)),
                  (i.h = parseInt(e.mediaTypes.video.playerSize[1], 10)));
            } else
              (i = l),
                K(
                  "Error: Video config params missing for adunit: " +
                    e.params.adUnit +
                    " with mediaType set as video. Ignoring video impression in the adunit.",
                  e.params
                );
            return i;
          }
          function z(e) {
            return !0 === (0, r.cy)(e) && e.length > 0;
          }
          function U(e) {
            return (0, r.xQ)(e?.params?.endpoint_url) ||
              e?.params?.endpoint_url == l
              ? "https://bid.pubwise.io/prebid"
              : e.params.endpoint_url;
          }
          function L(e, i, s) {
            var a,
              t =
                "Ignoring param key: " +
                e +
                ", expects " +
                s +
                ", found " +
                typeof i;
            switch (s) {
              case I.BOOLEAN:
                a = r.Lm;
                break;
              case I.NUMBER:
                a = r.Et;
                break;
              case I.STRING:
                a = r.O8;
                break;
              case I.ARRAY:
                a = r.cy;
            }
            return a(i) ? i : (K(t, e), l);
          }
          function q() {
            return /ipad|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(
              navigator.userAgent.toLowerCase()
            )
              ? 5
              : (navigator.userAgentData && navigator.userAgentData.mobile) ||
                /(mobi)/i.test(navigator.userAgent)
              ? 4
              : /(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(
                  navigator.userAgent
                )
              ? 3
              : 2;
          }
          (0, o.a$)(P), (0, a.E)("pubwiseBidAdapter");
        },
      },
      (e) => {
        e.O(0, [802, 85], () => {
          return (i = 665), e((e.s = i));
          var i;
        });
        e.O();
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [613],
      {
        473: (n, i, e) => {
          var o = e(873),
            s = e(272),
            t = e(46),
            c = e(69),
            a = e(433),
            r = e(172),
            d = e(0);
          const h = "Invalid schain object found: ",
            f = " should be a string",
            u = " should be an Integer",
            l = " should be an object",
            g = " should be an Array",
            p = { STRICT: "strict", RELAXED: "relaxed", OFF: "off" },
            b = [];
          function O(n, i) {
            let e = p.STRICT;
            if (
              (function (n) {
                return !(
                  void 0 === n ||
                  (!(0, c.Qd)(n) &&
                    ((0, c.vV)(
                      h +
                        "the following schain config will not be used as schain is not an object.",
                      n
                    ),
                    1))
                );
              })(n)
            ) {
              if (
                ((0, c.O8)(n.validation) &&
                  -1 != b.indexOf(n.validation) &&
                  (e = n.validation),
                e === p.OFF)
              )
                return n.config;
              if (
                (function (n, i) {
                  let e = "Detected something wrong within an schain config:",
                    o = "";
                  function s(n) {
                    o += "\n" + n;
                  }
                  function t() {
                    !0 === i ? (0, c.vV)(e, n, o) : (0, c.JE)(e, n, o);
                  }
                  if (!(0, c.Qd)(n) && (s("schain.config" + l), t(), i))
                    return !1;
                  if (
                    (((0, c.Et)(n.complete) && (0, c.Fq)(n.complete)) ||
                      s("schain.config.complete" + u),
                    (0, c.O8)(n.ver) || s("schain.config.ver" + f),
                    n.hasOwnProperty("ext") &&
                      ((0, c.Qd)(n.ext) || s("schain.config.ext" + l)),
                    (0, c.cy)(n.nodes))
                  )
                    n.nodes.forEach((n, i) => {
                      (0, c.O8)(n.asi) ||
                        s(`schain.config.nodes[${i}].asi` + f),
                        (0, c.O8)(n.sid) ||
                          s(`schain.config.nodes[${i}].sid` + f),
                        ((0, c.Et)(n.hp) && (0, c.Fq)(n.hp)) ||
                          s(`schain.config.nodes[${i}].hp` + u),
                        n.hasOwnProperty("rid") &&
                          ((0, c.O8)(n.rid) ||
                            s(`schain.config.nodes[${i}].rid` + f)),
                        n.hasOwnProperty("name") &&
                          ((0, c.O8)(n.name) ||
                            s(`schain.config.nodes[${i}].name` + f)),
                        n.hasOwnProperty("domain") &&
                          ((0, c.O8)(n.domain) ||
                            s(`schain.config.nodes[${i}].domain` + f)),
                        n.hasOwnProperty("ext") &&
                          ((0, c.Qd)(n.ext) ||
                            s(`schain.config.nodes[${i}].ext` + l));
                    });
                  else if ((s("schain.config.nodes" + g), t(), i)) return !1;
                  return !(o.length > 0 && (t(), i));
                })(n.config, !(e !== p.STRICT))
              )
                return n.config;
              (0, c.vV)(
                h +
                  `due to the 'strict' validation setting, this schain config will not be passed to bidder '${i}'.  See above error for details.`
              );
            }
            return null;
          }
          function v(n, i) {
            const e = s.$W.getConfig("schain"),
              o = s.$W.getBidderConfig();
            i.forEach((n) => {
              let i = n.bidderCode,
                s = (function (n) {
                  return (o[n] && o[n].schain) || e;
                })(i);
              n.bids.forEach((n) => {
                let e = O(s, i);
                e && (n.schain = (0, c.Go)(e));
              });
            }),
              n(i);
          }
          (0, c.bu)(p, (n) => b.push(n)),
            t.Ay.makeBidRequests.after(v),
            (0, d.pS)({
              type: d.S3,
              name: "sourceExtSchain",
              fn: function (n, i, e) {
                if (!(0, a.A)(n, "source.ext.schain")) {
                  const i = (0, a.A)(e, "bidRequests.0.schain");
                  i && (0, r.J)(n, "source.ext.schain", i);
                }
              },
            }),
            (0, o.E)("schain");
        },
      },
      (n) => {
        n.O(0, [802, 85], () => {
          return (i = 473), n((n.s = i));
          var i;
        });
        n.O();
      },
    ]);
    (self.pbjsChunk = self.pbjsChunk || []).push([
      [469],
      {
        836: (e, t, n) => {
          var o = n(873),
            r = n(901),
            s = n(272),
            i = n(23),
            a = n(916),
            c = n(46),
            u = n(969),
            l = n(214),
            d = n(69);
          const f = new Map();
          function g(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : f;
            const n = {};
            function o(e) {
              const t = JSON.stringify([e.source?.toLowerCase(), e.ext]);
              n.hasOwnProperty(t) ? n[t].uids.push(...e.uids) : (n[t] = e);
            }
            return (
              Object.entries(e).forEach((e) => {
                let [n, r] = e;
                r = Array.isArray(r) ? r : [r];
                ("pubProvidedId" === n
                  ? (0, d.Go)(r)
                  : r.map((e) =>
                      (function (e, t, n) {
                        if (n && e) {
                          let t = {};
                          t.source = (0, d.fp)(n.getSource)
                            ? n.getSource(e)
                            : n.source;
                          const o = (0, d.fp)(n.getValue) ? n.getValue(e) : e;
                          if ((0, d.O8)(o)) {
                            const r = { id: o, atype: n.atype };
                            if ((0, d.fp)(n.getUidExt)) {
                              const t = n.getUidExt(e);
                              t && (r.ext = t);
                            }
                            if (((t.uids = [r]), (0, d.fp)(n.getEidExt))) {
                              const o = n.getEidExt(e);
                              o && (t.ext = o);
                            }
                            return t;
                          }
                        }
                        return null;
                      })(e, 0, t.get(n))
                    )
                )
                  .filter((e) => null != e)
                  .forEach(o);
              }),
              Object.values(n)
            );
          }
          function m(e) {
            const t = new Map(),
              n = {};
            return (
              Object.entries(e).forEach((e) => {
                let [o, r] = e;
                const s = r.find((e) => null != e.idObj?.[o]);
                s && ((n[o] = s.idObj[o]), t.set(o, s.submodule.eids?.[o]));
              }),
              g(n, t)
            );
          }
          var b = n(938),
            h = n(172),
            p = n(433),
            y = n(692),
            I = n(555),
            v = n(894),
            w = n(973),
            S = n(569),
            E = n(139),
            D = n(811),
            k = n(441),
            O = n(230),
            j = n(635);
          const $ = "User ID",
            A = b.X0,
            T = b.qk,
            x = "_pbjs_id_optout",
            C = (0, b.CK)("userId"),
            N = { isAllowed: E.io };
          let U,
            _,
            L,
            P,
            H,
            J,
            q = [],
            M = [],
            F = {},
            V = [];
          const W = (() => {
            let e;
            return () => (null == e && (e = (0, v.K7)()), e);
          })();
          function G(e) {
            return W()
              .fork()
              .renameWith((t) => [`userId.mod.${t}`, `userId.mods.${e}.${t}`]);
          }
          function R(e, t) {
            t = t || e.storageMgr;
            const n =
                "function" == typeof e.submodule.domainOverride
                  ? e.submodule.domainOverride()
                  : null,
              o = e.config.storage.name;
            return function (e, r, s) {
              t.setCookie(o + (e || ""), r, s, "Lax", n);
            };
          }
          function B(e, t) {
            const n = e.config.storage;
            try {
              const o = new Date(Date.now() + 864e5 * n.expires).toUTCString(),
                r = (0, d.Qd)(t) ? JSON.stringify(t) : t;
              e.enabledStorageTypes.forEach((t) => {
                switch (t) {
                  case A:
                    !(function (e, t, n) {
                      const o = e.config.storage,
                        r = R(e);
                      r(null, t, n),
                        r("_cst", he(), n),
                        "number" == typeof o.refreshInSeconds &&
                          r("_last", new Date().toUTCString(), n);
                    })(e, r, o);
                    break;
                  case T:
                    !(function (e, t, n) {
                      const o = e.config.storage,
                        r = e.storageMgr;
                      r.setDataInLocalStorage(`${o.name}_exp`, n),
                        r.setDataInLocalStorage(`${o.name}_cst`, he()),
                        r.setDataInLocalStorage(o.name, encodeURIComponent(t)),
                        "number" == typeof o.refreshInSeconds &&
                          r.setDataInLocalStorage(
                            `${o.name}_last`,
                            new Date().toUTCString()
                          );
                    })(e, r, o);
                }
              });
            } catch (e) {
              (0, d.vV)(e);
            }
          }
          function Q(e) {
            Ee(e),
              e.enabledStorageTypes.forEach((t) => {
                switch (t) {
                  case A:
                    !(function (e) {
                      const t = R(e, C),
                        n = new Date(Date.now() - 864e5).toUTCString();
                      ["", "_last", "_cst"].forEach((e) => {
                        try {
                          t(e, "", n);
                        } catch (e) {
                          (0, d.vV)(e);
                        }
                      });
                    })(e);
                    break;
                  case T:
                    !(function (e) {
                      ["", "_last", "_exp", "_cst"].forEach((t) => {
                        try {
                          C.removeDataFromLocalStorage(
                            e.config.storage.name + t
                          );
                        } catch (e) {
                          (0, d.vV)(e);
                        }
                      });
                    })(e);
                }
              });
          }
          function z(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : void 0;
            const n = e.config.storage,
              o = t ? `${n.name}_${t}` : n.name;
            let r;
            try {
              e.enabledStorageTypes.find((t) => {
                switch (t) {
                  case A:
                    r = (function (e, t) {
                      return e.storageMgr.getCookie(t);
                    })(e, o);
                    break;
                  case T:
                    r = (function (e, t) {
                      const n = e.storageMgr,
                        o = e.config.storage,
                        r = n.getDataFromLocalStorage(`${o.name}_exp`);
                      return "" === r
                        ? n.getDataFromLocalStorage(t)
                        : r && new Date(r).getTime() - Date.now() > 0
                        ? decodeURIComponent(n.getDataFromLocalStorage(t))
                        : void 0;
                    })(e, o);
                }
                return !!r;
              }),
                "string" == typeof r &&
                  "{" === r.trim().charAt(0) &&
                  (r = JSON.parse(r));
            } catch (e) {
              (0, d.vV)(e);
            }
            return r;
          }
          function K(e, t, n) {
            t = W().fork().startTiming("userId.callbacks.total").stopBefore(t);
            const o = (0, d.U6)(() => {
              clearTimeout(_), t();
            }, e.length);
            e.forEach(function (e) {
              const t = G(e.submodule.name)
                .startTiming("callback")
                .stopBefore(o);
              try {
                e.callback(function (o) {
                  o
                    ? (e.config.storage && B(e, o),
                      (e.idObj = e.submodule.decode(o, e.config)),
                      n.refresh(),
                      ye(n))
                    : (0, d.fH)(
                        `${$}: ${e.submodule.name} - request id responded with an empty value`
                      ),
                    t();
                }, z.bind(null, e));
              } catch (n) {
                (0, d.vV)(`Error in userID module '${e.submodule.name}':`, n),
                  t();
              }
              e.callback = void 0;
            });
          }
          function Y(e) {
            return Object.fromEntries(
              Object.entries(e)
                .map((e) => {
                  let [t, n] = e;
                  return [t, n.find((e) => null != e.idObj?.[t])?.idObj?.[t]];
                })
                .filter((e) => {
                  let [t, n] = e;
                  return null != n;
                })
            );
          }
          function X(e, t, n) {
            const o = {};
            return (
              e.forEach((e) => {
                const r = n(e),
                  s = (function (e) {
                    if (e.primaryIds) return e.primaryIds;
                    const t = Object.keys(e.eids ?? {});
                    if (t.length > 1)
                      throw new Error(
                        `ID submodule ${e.name} can provide multiple IDs, but does not specify 'primaryIds'`
                      );
                    return t;
                  })(r);
                t(e).forEach((t) => {
                  const n = (o[t] = o[t] ?? []),
                    i = F[t]?.indexOf(r.name) ?? (s.includes(t) ? 0 : -1),
                    a = n.findIndex((e) => {
                      let [t] = e;
                      return t < i;
                    });
                  n.splice(-1 === a ? n.length : a, 0, [i, e]);
                });
              }),
              Object.fromEntries(
                Object.entries(o).map((e) => {
                  let [t, n] = e;
                  return [
                    t,
                    n.map((e) => {
                      let [t, n] = e;
                      return n;
                    }),
                  ];
                })
              )
            );
          }
          function Z() {
            const e = {
              submodules: [],
              global: {},
              bidder: {},
              combined: {},
              refresh() {
                let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [];
                const n = new Set(t.map((e) => e.submodule));
                (e.submodules = e.submodules
                  .filter((e) => !n.has(e.submodule))
                  .concat(t)),
                  (function () {
                    const t = X(
                        e.submodules,
                        (e) => Object.keys(e.idObj ?? {}),
                        (e) => e.submodule
                      ),
                      n = {},
                      o = {};
                    Object.entries(t).forEach((e) => {
                      let [t, r] = e,
                        s = !0;
                      const i = new Set();
                      r
                        .map((e) => e.config.bidders)
                        .forEach((e) => {
                          Array.isArray(e) && e.length > 0
                            ? e.forEach((e) => i.add(e))
                            : (s = !1);
                        }),
                        i.size > 0 && !s
                          ? (0, d.JE)(
                              `userID modules ${r
                                .map((e) => e.submodule.name)
                                .join(
                                  ", "
                                )} provide the same ID ('${t}'), but are configured for different bidders. ID will be skipped.`
                            )
                          : 0 === i.size
                          ? (n[t] = r)
                          : i.forEach((e) => {
                              (o[e] = o[e] ?? {}), (o[e][t] = r);
                            });
                    });
                    const r = Object.values(o)
                      .concat([n])
                      .reduce((e, t) => Object.assign(e, t), {});
                    Object.assign(e, { global: n, bidder: o, combined: r });
                  })();
              },
            };
            return e;
          }
          function ee(e) {
            let { adUnits: t, ortb2Fragments: n } = e;
            if (
              ((n = n ?? { global: {}, bidder: {} }),
              (function (e) {
                const { global: t, bidder: n } = e,
                  { global: o, bidder: r } = U,
                  s = m(o);
                s.length > 0 &&
                  (0, h.J)(
                    t,
                    "user.ext.eids",
                    (t.user?.ext?.eids ?? []).concat(s)
                  ),
                  Object.entries(r).forEach((e) => {
                    let [t, o] = e;
                    const r = m(o);
                    r.length > 0 &&
                      (0, h.J)(
                        n,
                        `${t}.user.ext.eids`,
                        (n[t]?.user?.ext?.eids ?? []).concat(r)
                      );
                  });
              })(n),
              [t].some((e) => !Array.isArray(e) || !e.length))
            )
              return;
            const o = Y(U.global),
              r = n.global.user?.ext?.eids || [];
            t.forEach((e) => {
              e.bids &&
                (0, d.cy)(e.bids) &&
                e.bids.forEach((e) => {
                  const t = Object.assign({}, o, Y(U.bidder[e.bidder] ?? {})),
                    s = r.concat(n.bidder[e.bidder]?.user?.ext?.eids || []);
                  Object.keys(t).length > 0 && (e.userId = t),
                    s.length > 0 && (e.userIdAsEids = s);
                });
            });
          }
          const te = {};
          let ne;
          function oe() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : ce() || [];
            const t = H && e.find((e) => e.source === H);
            if (t && "string" == typeof (0, p.A)(t, "uids.0.id")) {
              const e = t.uids[0].id.replace(/[\W_]/g, "");
              if (e.length >= 32 && e.length <= 150) return e;
              (0, d.JE)(
                `User ID - Googletag Publisher Provided ID for ${H} is not between 32 and 150 characters - ${e}`
              );
            }
          }
          const re = (0, v.Ak)("userId", function (e, t) {
              let { delay: n = I.k.timeout, getIds: o = be } =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              I.k.race([o().catch(() => null), n(P)]).then(() => {
                ee(t),
                  W().join((0, v.BO)(t.metrics), {
                    propagate: !1,
                    includeGroups: !0,
                  }),
                  e.call(this, t);
              });
            }),
            se = (0, v.Ak)("userId", function (e, t) {
              ee(t), e.call(this, t);
            });
          function ie() {
            return !!j.gH.getHooks({ hook: re }).length;
          }
          function ae() {
            return Y(U.combined);
          }
          function ce() {
            return m(U.combined);
          }
          function ue(e) {
            return ce().filter((t) => t.source === e)[0];
          }
          function le(e, t, n) {
            return ge().then(() => {
              let o = {};
              if ((0, d.fp)(n)) {
                (0, d.fH)(
                  `${$} - Getting encrypted signal from custom function : ${n.name} & source : ${e} `
                );
                const t = n(e);
                o[e] = t ? de(t) : null;
              } else {
                const n = ue(e);
                (0, d.fH)(
                  `${$} - Getting encrypted signal for eids :${JSON.stringify(
                    n
                  )}`
                ),
                  (0, d.Im)(n) ||
                    (o[n.source] = !0 === t ? de(n) : n.uids[0].id);
              }
              return (0, d.fH)(`${$} - Fetching encrypted eids: ${o[e]}`), o[e];
            });
          }
          function de(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 1,
              n = "";
            if (1 === t)
              n =
                "object" == typeof e
                  ? window.btoa(JSON.stringify(e))
                  : window.btoa(e);
            return `${t}||${n}`;
          }
          function fe() {
            if (!(0, d.II)()) return;
            window.googletag.secureSignalProviders =
              window.googletag.secureSignalProviders || [];
            const e = s.$W.getConfig("userSync.encryptedSignalSources");
            if (e) {
              const t = e.registerDelay || 0;
              setTimeout(() => {
                e.sources &&
                  e.sources.forEach((e) => {
                    let { source: t, encrypt: n, customFunc: o } = e;
                    t.forEach((e) => {
                      window.googletag.secureSignalProviders.push({
                        id: e,
                        collectorFunction: () => le(e, n, o),
                      });
                    });
                  });
              }, t);
            } else
              (0, d.JE)(
                `${$} - ESP : encryptedSignalSources config not defined under userSync Object`
              );
          }
          function ge(e) {
            return ne(e).then(
              () => ae(),
              (e) =>
                e === te
                  ? Promise.resolve().then(be)
                  : ((0, d.vV)("Error initializing userId", e), I.k.reject(e))
            );
          }
          function me() {
            let { submoduleNames: e } =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            return ge({ refresh: !0, submoduleNames: e }).then(
              (e) => (t && (0, d.fp)(t) && t(), e)
            );
          }
          function be() {
            return ge();
          }
          function he() {
            let e = Number(a.SL.hash);
            const t = [];
            for (; e > 0; ) t.push(String.fromCharCode(255 & e)), (e >>>= 8);
            return btoa(t.join());
          }
          function pe(e, t) {
            const n = a.mW.getConsentData();
            if (e.config.storage) {
              let o,
                r = z(e),
                s = !1;
              if ("number" == typeof e.config.storage.refreshInSeconds) {
                const t = new Date(z(e, "last"));
                s =
                  t &&
                  Date.now() - t.getTime() >
                    1e3 * e.config.storage.refreshInSeconds;
              }
              if (
                !r ||
                s ||
                t ||
                (function (e) {
                  const t = z(e, "cst");
                  return !t || t !== he();
                })(e)
              ) {
                const t = Object.assign(
                  { enabledStorageTypes: e.enabledStorageTypes },
                  e.config
                );
                o = e.submodule.getId(t, n, r);
              } else
                "function" == typeof e.submodule.extendId &&
                  (o = e.submodule.extendId(e.config, n, r));
              (0, d.Qd)(o) &&
                (o.id && (B(e, o.id), (r = o.id)),
                "function" == typeof o.callback && (e.callback = o.callback)),
                r && (e.idObj = e.submodule.decode(r, e.config));
            } else if (e.config.value) e.idObj = e.config.value;
            else {
              const t = e.submodule.getId(e.config, n, void 0);
              (0, d.Qd)(t) &&
                ("function" == typeof t.callback && (e.callback = t.callback),
                t.id && (e.idObj = e.submodule.decode(t.id, e.config)));
            }
          }
          function ye(e) {
            const t = m(e.combined);
            if (t.length && H) {
              const e = oe(t);
              e &&
                ((0, d.II)()
                  ? window.googletag.pubads().setPublisherProvidedId(e)
                  : ((window.googletag = window.googletag || {}),
                    (window.googletag.cmd = window.googletag.cmd || []),
                    window.googletag.cmd.push(function () {
                      window.googletag.pubads().setPublisherProvidedId(e);
                    })));
            }
          }
          function Ie(e, t) {
            let n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return W()
              .fork()
              .measureTime("userId.init.modules", function () {
                if (!t.length) return [];
                if (
                  (t.forEach((e) => Ee(e)),
                  !(t = t.filter(
                    (e) =>
                      (!e.config.storage || !!e.enabledStorageTypes.length) &&
                      N.isAllowed(D.yl, (0, k.s)(S.fW, e.config.name))
                  )).length)
                )
                  return (0, d.JE)(`${$} - no ID module configured`), [];
                const o = t.reduce(
                  (e, t) =>
                    G(t.submodule.name).measureTime("init", () => {
                      try {
                        pe(t, n), e.push(t);
                      } catch (e) {
                        (0, d.vV)(
                          `Error in userID module '${t.submodule.name}':`,
                          e
                        );
                      }
                      return e;
                    }),
                  []
                );
                return e.refresh(o), ye(e), o;
              });
          }
          function ve(e) {
            return e?.storage?.type?.trim().split(/\s*&\s*/) || [];
          }
          function we(e) {
            function t(e) {
              for (
                var t = arguments.length,
                  n = new Array(t > 1 ? t - 1 : 0),
                  o = 1;
                o < t;
                o++
              )
                n[o - 1] = arguments[o];
              (0, d.JE)(`Invalid userSync.userId config: ${e}`, ...n);
            }
            return Array.isArray(e)
              ? e.filter((e) => {
                  if (!e?.name) return t('must specify "name"', e);
                  if (e.storage) {
                    if (!e.storage.name || !e.storage.type)
                      return t(
                        'must specify "storage.name" and "storage.type"',
                        e
                      );
                    if (
                      !(function (e) {
                        return ve(e).every((e) => Se.has(e));
                      })(e)
                    )
                      return t('invalid "storage.type"', e);
                    ["expires", "refreshInSeconds"].forEach((n) => {
                      let o = e.storage[n];
                      null != o &&
                        "number" != typeof o &&
                        ((o = Number(o)),
                        isNaN(o)
                          ? (t(
                              `storage.${n} must be a number and will be ignored`,
                              e
                            ),
                            delete e.storage[n])
                          : (e.storage[n] = o));
                    });
                  }
                  return !0;
                })
              : (null != e && t("must be an array", e), []);
          }
          const Se = new Set([T, A]);
          function Ee(e) {
            if (e.enabledStorageTypes) return;
            const t = ve(e.config);
            e.enabledStorageTypes = t.filter((t) => {
              switch (t) {
                case T:
                  return (function (e) {
                    return !(
                      !e.storageMgr.localStorageIsEnabled() ||
                      (C.getDataFromLocalStorage(x) &&
                        ((0, d.fH)(
                          `${$} - opt-out localStorage found, storage disabled`
                        ),
                        1))
                    );
                  })(e);
                case A:
                  return (function (e) {
                    return !(
                      !e.storageMgr.cookiesAreEnabled() ||
                      (C.getCookie(x) &&
                        ((0, d.fH)(
                          `${$} - opt-out cookie found, storage disabled`
                        ),
                        1))
                    );
                  })(e);
              }
              return !1;
            });
          }
          function De(e) {
            f.clear(),
              Object.entries(
                X(
                  e,
                  (e) => Object.keys(e.eids || {}),
                  (e) => e
                )
              ).forEach((e) => {
                let [t, n] = e;
                return f.set(t, n[0].eids[t]);
              });
          }
          function ke() {
            De(V);
            const e = we(M);
            if (!e.length) return;
            const t = V.filter((e) => !(0, r.I6)(q, (t) => t.name === e.name));
            q.splice(0, q.length),
              t
                .map((t) => {
                  const n = (0, r.I6)(
                    e,
                    (e) =>
                      e.name &&
                      (e.name.toLowerCase() === t.name.toLowerCase() ||
                        (t.aliasName &&
                          e.name.toLowerCase() === t.aliasName.toLowerCase()))
                  );
                  return (
                    n && t.name !== n.name && (n.name = t.name),
                    n
                      ? {
                          submodule: t,
                          config: n,
                          callback: void 0,
                          idObj: void 0,
                          storageMgr: (0, b.vM)({
                            moduleType: S.fW,
                            moduleName: n.name,
                          }),
                        }
                      : null
                  );
                })
                .filter((e) => null !== e)
                .forEach((e) => q.push(e)),
              q.length &&
                (ie() ||
                  (j.gH.getHooks({ hook: se }).remove(),
                  j.gH.before(re, 100),
                  c.Ay.callDataDeletionRequest.before(Oe),
                  y.Q.after((e) => e(oe()))),
                (0, d.fH)(
                  `${$} - usersync config updated for ${q.length} submodules: `,
                  q.map((e) => e.submodule.name)
                ));
          }
          function Oe(e) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;
              o < t;
              o++
            )
              n[o - 1] = arguments[o];
            (0, d.fH)(
              "UserID: received data deletion request; deleting all stored IDs..."
            ),
              q.forEach((e) => {
                if ("function" == typeof e.submodule.onDataDeletionRequest)
                  try {
                    e.submodule.onDataDeletionRequest(e.config, e.idObj, ...n);
                  } catch (t) {
                    (0, d.vV)(
                      `Error calling onDataDeletionRequest for ID submodule ${e.submodule.name}`,
                      t
                    );
                  }
                Q(e);
              }),
              e.apply(this, n);
          }
          function je(e) {
            return function () {
              return Promise.resolve(e.apply(this, arguments));
            };
          }
          !(function (e) {
            let { delay: t = I.k.timeout } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            (H = void 0),
              (q = []),
              (M = []),
              (U = Z()),
              (ne = (function () {
                let { delay: e = I.k.timeout } =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                const t = (0, I.v)(),
                  n = (0, I.v)();
                let o,
                  r,
                  s = !1;
                function c(e) {
                  return (
                    (r = W().fork()),
                    null != o && o.reject(te),
                    (o = (0, I.v)()),
                    I.k
                      .race([e, o.promise])
                      .finally(r.startTiming("userId.total"))
                  );
                }
                let f = U,
                  g = q;
                function m(e) {
                  return function () {
                    if (f === U && g === q) return e(...arguments);
                  };
                }
                function b() {
                  return a.SL.promise.finally(
                    r.startTiming("userId.init.consent")
                  );
                }
                let h = c(
                  I.k
                    .all([l.Gc, t.promise])
                    .then(b)
                    .then(
                      m(() => {
                        Ie(f, g);
                      })
                    )
                    .then(() =>
                      n.promise.finally(
                        r.startTiming("userId.callbacks.pending")
                      )
                    )
                    .then(
                      m(() => {
                        const e = f.submodules.filter((e) =>
                          (0, d.fp)(e.callback)
                        );
                        if (e.length) return new I.k((t) => K(e, t, f));
                      })
                    )
                );
                return function () {
                  let {
                    refresh: o = !1,
                    submoduleNames: r = null,
                    ready: a = !1,
                  } = arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                  return (
                    a &&
                      !s &&
                      ((s = !0),
                      t.resolve(),
                      P > 0
                        ? n.resolve()
                        : i.on(u.qY.AUCTION_END, function t() {
                            i.AU(u.qY.AUCTION_END, t), e(L).then(n.resolve);
                          })),
                    o &&
                      s &&
                      (h = c(
                        h
                          .catch(() => null)
                          .then(b)
                          .then(
                            m(() => {
                              const e = Ie(
                                f,
                                g.filter(
                                  (e) =>
                                    null == r || r.includes(e.submodule.name)
                                ),
                                !0
                              ).filter((e) => null != e.callback);
                              if (e.length) return new I.k((t) => K(e, t, f));
                            })
                          )
                      )),
                    h
                  );
                };
              })({ delay: t })),
              null != J && J(),
              (V = []),
              (J = e.getConfig("userSync", (e) => {
                const t = e.userSync;
                t &&
                  ((H = t.ppid),
                  t.userIds &&
                    ((M = t.userIds),
                    (L = (0, d.Et)(t.syncDelay) ? t.syncDelay : O.qh.syncDelay),
                    (P = (0, d.Et)(t.auctionDelay)
                      ? t.auctionDelay
                      : O.qh.auctionDelay),
                    ke(),
                    (function (e, t) {
                      if (e) {
                        const n = {},
                          o = new Map(
                            t.map((e) =>
                              e.aliasName ? [e.aliasName, e.name] : []
                            )
                          );
                        Object.keys(e).forEach((t) => {
                          const r = (0, d.cy)(e[t]) ? [...e[t]].reverse() : [];
                          n[t] = r.map((e) => (o.has(e) ? o.get(e) : e));
                        }),
                          (F = n);
                      } else F = {};
                      U.refresh(), De(t);
                    })(t.idPriority, V),
                    ne({ ready: !0 })));
              })),
              ((0, o.m)().getUserIds = ae),
              ((0, o.m)().getUserIdsAsEids = ce),
              ((0, o.m)().getEncryptedEidsForSource = je(le)),
              ((0, o.m)().registerSignalSources = fe),
              ((0, o.m)().refreshUserIds = je(me)),
              ((0, o.m)().getUserIdsAsync = je(be)),
              ((0, o.m)().getUserIdsAsEidBySource = ue),
              ie() || j.gH.before(se, 100);
          })(s.$W),
            (0, l.xG)(
              "userId",
              function (e) {
                (e.findRootDomain = w.S),
                  (0, r.I6)(V, (t) => t.name === e.name) ||
                    (V.push(e),
                    a.o2.register(S.fW, e.name, e.gvlid),
                    ke(),
                    ne({ refresh: !0, submoduleNames: [e.name] }));
              },
              { postInstallAllowed: !0 }
            ),
            (0, o.E)("userId");
        },
      },
      (e) => {
        e.O(0, [802, 85], () => {
          return (t = 836), e((e.s = t));
          var t;
        });
        e.O();
      },
    ]);
  })(),
    pbjs.processQueue();
