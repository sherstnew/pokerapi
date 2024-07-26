function jx(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const i in r)
        if (i !== 'default' && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === 'childList')
        for (const s of o.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Dx(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
function Fn(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == 'function') {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, '__esModule', { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var Vg = { exports: {} },
  Bl = {},
  Hg = { exports: {} },
  Z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Es = Symbol.for('react.element'),
  Fx = Symbol.for('react.portal'),
  zx = Symbol.for('react.fragment'),
  Ux = Symbol.for('react.strict_mode'),
  Vx = Symbol.for('react.profiler'),
  Hx = Symbol.for('react.provider'),
  Bx = Symbol.for('react.context'),
  Wx = Symbol.for('react.forward_ref'),
  Yx = Symbol.for('react.suspense'),
  Gx = Symbol.for('react.memo'),
  Qx = Symbol.for('react.lazy'),
  Th = Symbol.iterator;
function Kx(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Th && e[Th]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Bg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Wg = Object.assign,
  Yg = {};
function Gi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Yg),
    (this.updater = n || Bg);
}
Gi.prototype.isReactComponent = {};
Gi.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Gi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Gg() {}
Gg.prototype = Gi.prototype;
function Sd(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Yg),
    (this.updater = n || Bg);
}
var kd = (Sd.prototype = new Gg());
kd.constructor = Sd;
Wg(kd, Gi.prototype);
kd.isPureReactComponent = !0;
var Ah = Array.isArray,
  Qg = Object.prototype.hasOwnProperty,
  Cd = { current: null },
  Kg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xg(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      Qg.call(t, r) && !Kg.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Es,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Cd.current,
  };
}
function Xx(e, t) {
  return {
    $$typeof: Es,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function bd(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Es;
}
function qx(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Rh = /\/+/g;
function nc(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? qx('' + e.key)
    : t.toString(36);
}
function Pa(e, t, n, r, i) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        s = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Es:
          case Fx:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === '' ? '.' + nc(s, 0) : r),
      Ah(i)
        ? ((n = ''),
          e != null && (n = e.replace(Rh, '$&/') + '/'),
          Pa(i, t, n, '', function (u) {
            return u;
          }))
        : i != null &&
          (bd(i) &&
            (i = Xx(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ''
                  : ('' + i.key).replace(Rh, '$&/') + '/') +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === '' ? '.' : r + ':'), Ah(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + nc(o, a);
      s += Pa(o, t, n, l, i);
    }
  else if (((l = Kx(e)), typeof l == 'function'))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + nc(o, a++)), (s += Pa(o, t, n, l, i));
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return s;
}
function Ks(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Pa(e, r, '', '', function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Zx(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var tt = { current: null },
  Ma = { transition: null },
  Jx = {
    ReactCurrentDispatcher: tt,
    ReactCurrentBatchConfig: Ma,
    ReactCurrentOwner: Cd,
  };
function qg() {
  throw Error('act(...) is not supported in production builds of React.');
}
Z.Children = {
  map: Ks,
  forEach: function (e, t, n) {
    Ks(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ks(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ks(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!bd(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
Z.Component = Gi;
Z.Fragment = zx;
Z.Profiler = Vx;
Z.PureComponent = Sd;
Z.StrictMode = Ux;
Z.Suspense = Yx;
Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jx;
Z.act = qg;
Z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Wg({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Cd.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Qg.call(t, l) &&
        !Kg.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Es, type: e.type, key: i, ref: o, props: r, _owner: s };
};
Z.createContext = function (e) {
  return (
    (e = {
      $$typeof: Bx,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Hx, _context: e }),
    (e.Consumer = e)
  );
};
Z.createElement = Xg;
Z.createFactory = function (e) {
  var t = Xg.bind(null, e);
  return (t.type = e), t;
};
Z.createRef = function () {
  return { current: null };
};
Z.forwardRef = function (e) {
  return { $$typeof: Wx, render: e };
};
Z.isValidElement = bd;
Z.lazy = function (e) {
  return { $$typeof: Qx, _payload: { _status: -1, _result: e }, _init: Zx };
};
Z.memo = function (e, t) {
  return { $$typeof: Gx, type: e, compare: t === void 0 ? null : t };
};
Z.startTransition = function (e) {
  var t = Ma.transition;
  Ma.transition = {};
  try {
    e();
  } finally {
    Ma.transition = t;
  }
};
Z.unstable_act = qg;
Z.useCallback = function (e, t) {
  return tt.current.useCallback(e, t);
};
Z.useContext = function (e) {
  return tt.current.useContext(e);
};
Z.useDebugValue = function () {};
Z.useDeferredValue = function (e) {
  return tt.current.useDeferredValue(e);
};
Z.useEffect = function (e, t) {
  return tt.current.useEffect(e, t);
};
Z.useId = function () {
  return tt.current.useId();
};
Z.useImperativeHandle = function (e, t, n) {
  return tt.current.useImperativeHandle(e, t, n);
};
Z.useInsertionEffect = function (e, t) {
  return tt.current.useInsertionEffect(e, t);
};
Z.useLayoutEffect = function (e, t) {
  return tt.current.useLayoutEffect(e, t);
};
Z.useMemo = function (e, t) {
  return tt.current.useMemo(e, t);
};
Z.useReducer = function (e, t, n) {
  return tt.current.useReducer(e, t, n);
};
Z.useRef = function (e) {
  return tt.current.useRef(e);
};
Z.useState = function (e) {
  return tt.current.useState(e);
};
Z.useSyncExternalStore = function (e, t, n) {
  return tt.current.useSyncExternalStore(e, t, n);
};
Z.useTransition = function () {
  return tt.current.useTransition();
};
Z.version = '18.3.1';
Hg.exports = Z;
var P = Hg.exports;
const ew = Dx(P),
  qc = jx({ __proto__: null, default: ew }, [P]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tw = P,
  nw = Symbol.for('react.element'),
  rw = Symbol.for('react.fragment'),
  iw = Object.prototype.hasOwnProperty,
  ow = tw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  sw = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zg(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) iw.call(t, r) && !sw.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: nw,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: ow.current,
  };
}
Bl.Fragment = rw;
Bl.jsx = Zg;
Bl.jsxs = Zg;
Vg.exports = Bl;
var b = Vg.exports,
  Zc = {},
  Jg = { exports: {} },
  _t = {},
  ey = { exports: {} },
  ty = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t($, F) {
    var H = $.length;
    $.push(F);
    e: for (; 0 < H; ) {
      var q = (H - 1) >>> 1,
        Y = $[q];
      if (0 < i(Y, F)) ($[q] = F), ($[H] = Y), (H = q);
      else break e;
    }
  }
  function n($) {
    return $.length === 0 ? null : $[0];
  }
  function r($) {
    if ($.length === 0) return null;
    var F = $[0],
      H = $.pop();
    if (H !== F) {
      $[0] = H;
      e: for (var q = 0, Y = $.length, ye = Y >>> 1; q < ye; ) {
        var ce = 2 * (q + 1) - 1,
          X = $[ce],
          oe = ce + 1,
          ue = $[oe];
        if (0 > i(X, H))
          oe < Y && 0 > i(ue, X)
            ? (($[q] = ue), ($[oe] = H), (q = oe))
            : (($[q] = X), ($[ce] = H), (q = ce));
        else if (oe < Y && 0 > i(ue, H)) ($[q] = ue), ($[oe] = H), (q = oe);
        else break e;
      }
    }
    return F;
  }
  function i($, F) {
    var H = $.sortIndex - F.sortIndex;
    return H !== 0 ? H : $.id - F.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    m = !1,
    y = !1,
    h = !1,
    x = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    g = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v($) {
    for (var F = n(u); F !== null; ) {
      if (F.callback === null) r(u);
      else if (F.startTime <= $)
        r(u), (F.sortIndex = F.expirationTime), t(l, F);
      else break;
      F = n(u);
    }
  }
  function w($) {
    if (((h = !1), v($), !y))
      if (n(l) !== null) (y = !0), U(k);
      else {
        var F = n(u);
        F !== null && B(w, F.startTime - $);
      }
  }
  function k($, F) {
    (y = !1), h && ((h = !1), p(M), (M = -1)), (m = !0);
    var H = d;
    try {
      for (
        v(F), f = n(l);
        f !== null && (!(f.expirationTime > F) || ($ && !E()));

      ) {
        var q = f.callback;
        if (typeof q == 'function') {
          (f.callback = null), (d = f.priorityLevel);
          var Y = q(f.expirationTime <= F);
          (F = e.unstable_now()),
            typeof Y == 'function' ? (f.callback = Y) : f === n(l) && r(l),
            v(F);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var ye = !0;
      else {
        var ce = n(u);
        ce !== null && B(w, ce.startTime - F), (ye = !1);
      }
      return ye;
    } finally {
      (f = null), (d = H), (m = !1);
    }
  }
  var S = !1,
    C = null,
    M = -1,
    A = 5,
    T = -1;
  function E() {
    return !(e.unstable_now() - T < A);
  }
  function I() {
    if (C !== null) {
      var $ = e.unstable_now();
      T = $;
      var F = !0;
      try {
        F = C(!0, $);
      } finally {
        F ? R() : ((S = !1), (C = null));
      }
    } else S = !1;
  }
  var R;
  if (typeof g == 'function')
    R = function () {
      g(I);
    };
  else if (typeof MessageChannel < 'u') {
    var O = new MessageChannel(),
      D = O.port2;
    (O.port1.onmessage = I),
      (R = function () {
        D.postMessage(null);
      });
  } else
    R = function () {
      x(I, 0);
    };
  function U($) {
    (C = $), S || ((S = !0), R());
  }
  function B($, F) {
    M = x(function () {
      $(e.unstable_now());
    }, F);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function ($) {
      $.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || m || ((y = !0), U(k));
    }),
    (e.unstable_forceFrameRate = function ($) {
      0 > $ || 125 < $
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (A = 0 < $ ? Math.floor(1e3 / $) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function ($) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = d;
      }
      var H = d;
      d = F;
      try {
        return $();
      } finally {
        d = H;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function ($, F) {
      switch ($) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          $ = 3;
      }
      var H = d;
      d = $;
      try {
        return F();
      } finally {
        d = H;
      }
    }),
    (e.unstable_scheduleCallback = function ($, F, H) {
      var q = e.unstable_now();
      switch (
        (typeof H == 'object' && H !== null
          ? ((H = H.delay), (H = typeof H == 'number' && 0 < H ? q + H : q))
          : (H = q),
        $)
      ) {
        case 1:
          var Y = -1;
          break;
        case 2:
          Y = 250;
          break;
        case 5:
          Y = 1073741823;
          break;
        case 4:
          Y = 1e4;
          break;
        default:
          Y = 5e3;
      }
      return (
        (Y = H + Y),
        ($ = {
          id: c++,
          callback: F,
          priorityLevel: $,
          startTime: H,
          expirationTime: Y,
          sortIndex: -1,
        }),
        H > q
          ? (($.sortIndex = H),
            t(u, $),
            n(l) === null &&
              $ === n(u) &&
              (h ? (p(M), (M = -1)) : (h = !0), B(w, H - q)))
          : (($.sortIndex = Y), t(l, $), y || m || ((y = !0), U(k))),
        $
      );
    }),
    (e.unstable_shouldYield = E),
    (e.unstable_wrapCallback = function ($) {
      var F = d;
      return function () {
        var H = d;
        d = F;
        try {
          return $.apply(this, arguments);
        } finally {
          d = H;
        }
      };
    });
})(ty);
ey.exports = ty;
var aw = ey.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lw = P,
  kt = aw;
function N(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var ny = new Set(),
  Uo = {};
function Br(e, t) {
  Ti(e, t), Ti(e + 'Capture', t);
}
function Ti(e, t) {
  for (Uo[e] = t, e = 0; e < t.length; e++) ny.add(t[e]);
}
var An = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Jc = Object.prototype.hasOwnProperty,
  uw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Oh = {},
  $h = {};
function cw(e) {
  return Jc.call($h, e)
    ? !0
    : Jc.call(Oh, e)
    ? !1
    : uw.test(e)
    ? ($h[e] = !0)
    : ((Oh[e] = !0), !1);
}
function fw(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function dw(e, t, n, r) {
  if (t === null || typeof t > 'u' || fw(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function nt(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var Be = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Be[e] = new nt(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Be[t] = new nt(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Be[e] = new nt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Be[e] = new nt(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Be[e] = new nt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Be[e] = new nt(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Be[e] = new nt(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Be[e] = new nt(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Be[e] = new nt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var _d = /[\-:]([a-z])/g;
function Pd(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(_d, Pd);
    Be[t] = new nt(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(_d, Pd);
    Be[t] = new nt(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(_d, Pd);
  Be[t] = new nt(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Be[e] = new nt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Be.xlinkHref = new nt(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Be[e] = new nt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Md(e, t, n, r) {
  var i = Be.hasOwnProperty(t) ? Be[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (dw(t, n, i, r) && (n = null),
    r || i === null
      ? cw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var zn = lw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Xs = Symbol.for('react.element'),
  oi = Symbol.for('react.portal'),
  si = Symbol.for('react.fragment'),
  Ed = Symbol.for('react.strict_mode'),
  ef = Symbol.for('react.profiler'),
  ry = Symbol.for('react.provider'),
  iy = Symbol.for('react.context'),
  Td = Symbol.for('react.forward_ref'),
  tf = Symbol.for('react.suspense'),
  nf = Symbol.for('react.suspense_list'),
  Ad = Symbol.for('react.memo'),
  Wn = Symbol.for('react.lazy'),
  oy = Symbol.for('react.offscreen'),
  Ih = Symbol.iterator;
function to(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ih && e[Ih]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var we = Object.assign,
  rc;
function wo(e) {
  if (rc === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      rc = (t && t[1]) || '';
    }
  return (
    `
` +
    rc +
    e
  );
}
var ic = !1;
function oc(e, t) {
  if (!e || ic) return '';
  ic = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (ic = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? wo(e) : '';
}
function pw(e) {
  switch (e.tag) {
    case 5:
      return wo(e.type);
    case 16:
      return wo('Lazy');
    case 13:
      return wo('Suspense');
    case 19:
      return wo('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = oc(e.type, !1)), e;
    case 11:
      return (e = oc(e.type.render, !1)), e;
    case 1:
      return (e = oc(e.type, !0)), e;
    default:
      return '';
  }
}
function rf(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case si:
      return 'Fragment';
    case oi:
      return 'Portal';
    case ef:
      return 'Profiler';
    case Ed:
      return 'StrictMode';
    case tf:
      return 'Suspense';
    case nf:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case iy:
        return (e.displayName || 'Context') + '.Consumer';
      case ry:
        return (e._context.displayName || 'Context') + '.Provider';
      case Td:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Ad:
        return (
          (t = e.displayName || null), t !== null ? t : rf(e.type) || 'Memo'
        );
      case Wn:
        (t = e._payload), (e = e._init);
        try {
          return rf(e(t));
        } catch {}
    }
  return null;
}
function hw(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return rf(t);
    case 8:
      return t === Ed ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function ur(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function sy(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function mw(e) {
  var t = sy(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = '' + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = '' + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function qs(e) {
  e._valueTracker || (e._valueTracker = mw(e));
}
function ay(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = sy(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ka(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function of(e, t) {
  var n = t.checked;
  return we({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Lh(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ur(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function ly(e, t) {
  (t = t.checked), t != null && Md(e, 'checked', t, !1);
}
function sf(e, t) {
  ly(e, t);
  var n = ur(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? af(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && af(e, t.type, ur(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Nh(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function af(e, t, n) {
  (t !== 'number' || Ka(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var So = Array.isArray;
function vi(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + ur(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function lf(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return we({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function jh(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (So(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: ur(n) };
}
function uy(e, t) {
  var n = ur(t.value),
    r = ur(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Dh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function cy(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function uf(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? cy(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var Zs,
  fy = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        Zs = Zs || document.createElement('div'),
          Zs.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Zs.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Vo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var _o = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  gw = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(_o).forEach(function (e) {
  gw.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (_o[t] = _o[e]);
  });
});
function dy(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (_o.hasOwnProperty(e) && _o[e])
    ? ('' + t).trim()
    : t + 'px';
}
function py(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = dy(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var yw = we(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function cf(e, t) {
  if (t) {
    if (yw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(N(62));
  }
}
function ff(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var df = null;
function Rd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var pf = null,
  xi = null,
  wi = null;
function Fh(e) {
  if ((e = Rs(e))) {
    if (typeof pf != 'function') throw Error(N(280));
    var t = e.stateNode;
    t && ((t = Kl(t)), pf(e.stateNode, e.type, t));
  }
}
function hy(e) {
  xi ? (wi ? wi.push(e) : (wi = [e])) : (xi = e);
}
function my() {
  if (xi) {
    var e = xi,
      t = wi;
    if (((wi = xi = null), Fh(e), t)) for (e = 0; e < t.length; e++) Fh(t[e]);
  }
}
function gy(e, t) {
  return e(t);
}
function yy() {}
var sc = !1;
function vy(e, t, n) {
  if (sc) return e(t, n);
  sc = !0;
  try {
    return gy(e, t, n);
  } finally {
    (sc = !1), (xi !== null || wi !== null) && (yy(), my());
  }
}
function Ho(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Kl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(N(231, t, typeof n));
  return n;
}
var hf = !1;
if (An)
  try {
    var no = {};
    Object.defineProperty(no, 'passive', {
      get: function () {
        hf = !0;
      },
    }),
      window.addEventListener('test', no, no),
      window.removeEventListener('test', no, no);
  } catch {
    hf = !1;
  }
function vw(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Po = !1,
  Xa = null,
  qa = !1,
  mf = null,
  xw = {
    onError: function (e) {
      (Po = !0), (Xa = e);
    },
  };
function ww(e, t, n, r, i, o, s, a, l) {
  (Po = !1), (Xa = null), vw.apply(xw, arguments);
}
function Sw(e, t, n, r, i, o, s, a, l) {
  if ((ww.apply(this, arguments), Po)) {
    if (Po) {
      var u = Xa;
      (Po = !1), (Xa = null);
    } else throw Error(N(198));
    qa || ((qa = !0), (mf = u));
  }
}
function Wr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function xy(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function zh(e) {
  if (Wr(e) !== e) throw Error(N(188));
}
function kw(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Wr(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return zh(i), e;
        if (o === r) return zh(i), t;
        o = o.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function wy(e) {
  return (e = kw(e)), e !== null ? Sy(e) : null;
}
function Sy(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Sy(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ky = kt.unstable_scheduleCallback,
  Uh = kt.unstable_cancelCallback,
  Cw = kt.unstable_shouldYield,
  bw = kt.unstable_requestPaint,
  _e = kt.unstable_now,
  _w = kt.unstable_getCurrentPriorityLevel,
  Od = kt.unstable_ImmediatePriority,
  Cy = kt.unstable_UserBlockingPriority,
  Za = kt.unstable_NormalPriority,
  Pw = kt.unstable_LowPriority,
  by = kt.unstable_IdlePriority,
  Wl = null,
  dn = null;
function Mw(e) {
  if (dn && typeof dn.onCommitFiberRoot == 'function')
    try {
      dn.onCommitFiberRoot(Wl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var en = Math.clz32 ? Math.clz32 : Aw,
  Ew = Math.log,
  Tw = Math.LN2;
function Aw(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ew(e) / Tw) | 0)) | 0;
}
var Js = 64,
  ea = 4194304;
function ko(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ja(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = ko(a)) : ((o &= s), o !== 0 && (r = ko(o)));
  } else (s = n & ~i), s !== 0 ? (r = ko(s)) : o !== 0 && (r = ko(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - en(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Rw(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Ow(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - en(o),
      a = 1 << s,
      l = i[s];
    l === -1
      ? (!(a & n) || a & r) && (i[s] = Rw(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function gf(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function _y() {
  var e = Js;
  return (Js <<= 1), !(Js & 4194240) && (Js = 64), e;
}
function ac(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ts(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - en(t)),
    (e[t] = n);
}
function $w(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - en(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function $d(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - en(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var se = 0;
function Py(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var My,
  Id,
  Ey,
  Ty,
  Ay,
  yf = !1,
  ta = [],
  er = null,
  tr = null,
  nr = null,
  Bo = new Map(),
  Wo = new Map(),
  Gn = [],
  Iw =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Vh(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      er = null;
      break;
    case 'dragenter':
    case 'dragleave':
      tr = null;
      break;
    case 'mouseover':
    case 'mouseout':
      nr = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Bo.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Wo.delete(t.pointerId);
  }
}
function ro(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Rs(t)), t !== null && Id(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Lw(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (er = ro(er, e, t, n, r, i)), !0;
    case 'dragenter':
      return (tr = ro(tr, e, t, n, r, i)), !0;
    case 'mouseover':
      return (nr = ro(nr, e, t, n, r, i)), !0;
    case 'pointerover':
      var o = i.pointerId;
      return Bo.set(o, ro(Bo.get(o) || null, e, t, n, r, i)), !0;
    case 'gotpointercapture':
      return (
        (o = i.pointerId), Wo.set(o, ro(Wo.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Ry(e) {
  var t = _r(e.target);
  if (t !== null) {
    var n = Wr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = xy(n)), t !== null)) {
          (e.blockedOn = t),
            Ay(e.priority, function () {
              Ey(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ea(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = vf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (df = r), n.target.dispatchEvent(r), (df = null);
    } else return (t = Rs(n)), t !== null && Id(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Hh(e, t, n) {
  Ea(e) && n.delete(t);
}
function Nw() {
  (yf = !1),
    er !== null && Ea(er) && (er = null),
    tr !== null && Ea(tr) && (tr = null),
    nr !== null && Ea(nr) && (nr = null),
    Bo.forEach(Hh),
    Wo.forEach(Hh);
}
function io(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    yf ||
      ((yf = !0),
      kt.unstable_scheduleCallback(kt.unstable_NormalPriority, Nw)));
}
function Yo(e) {
  function t(i) {
    return io(i, e);
  }
  if (0 < ta.length) {
    io(ta[0], e);
    for (var n = 1; n < ta.length; n++) {
      var r = ta[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    er !== null && io(er, e),
      tr !== null && io(tr, e),
      nr !== null && io(nr, e),
      Bo.forEach(t),
      Wo.forEach(t),
      n = 0;
    n < Gn.length;
    n++
  )
    (r = Gn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Gn.length && ((n = Gn[0]), n.blockedOn === null); )
    Ry(n), n.blockedOn === null && Gn.shift();
}
var Si = zn.ReactCurrentBatchConfig,
  el = !0;
function jw(e, t, n, r) {
  var i = se,
    o = Si.transition;
  Si.transition = null;
  try {
    (se = 1), Ld(e, t, n, r);
  } finally {
    (se = i), (Si.transition = o);
  }
}
function Dw(e, t, n, r) {
  var i = se,
    o = Si.transition;
  Si.transition = null;
  try {
    (se = 4), Ld(e, t, n, r);
  } finally {
    (se = i), (Si.transition = o);
  }
}
function Ld(e, t, n, r) {
  if (el) {
    var i = vf(e, t, n, r);
    if (i === null) yc(e, t, r, tl, n), Vh(e, r);
    else if (Lw(i, e, t, n, r)) r.stopPropagation();
    else if ((Vh(e, r), t & 4 && -1 < Iw.indexOf(e))) {
      for (; i !== null; ) {
        var o = Rs(i);
        if (
          (o !== null && My(o),
          (o = vf(e, t, n, r)),
          o === null && yc(e, t, r, tl, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else yc(e, t, r, null, n);
  }
}
var tl = null;
function vf(e, t, n, r) {
  if (((tl = null), (e = Rd(r)), (e = _r(e)), e !== null))
    if (((t = Wr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = xy(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (tl = e), null;
}
function Oy(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (_w()) {
        case Od:
          return 1;
        case Cy:
          return 4;
        case Za:
        case Pw:
          return 16;
        case by:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Xn = null,
  Nd = null,
  Ta = null;
function $y() {
  if (Ta) return Ta;
  var e,
    t = Nd,
    n = t.length,
    r,
    i = 'value' in Xn ? Xn.value : Xn.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Ta = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Aa(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function na() {
  return !0;
}
function Bh() {
  return !1;
}
function Pt(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? na
        : Bh),
      (this.isPropagationStopped = Bh),
      this
    );
  }
  return (
    we(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = na));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = na));
      },
      persist: function () {},
      isPersistent: na,
    }),
    t
  );
}
var Qi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  jd = Pt(Qi),
  As = we({}, Qi, { view: 0, detail: 0 }),
  Fw = Pt(As),
  lc,
  uc,
  oo,
  Yl = we({}, As, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Dd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== oo &&
            (oo && e.type === 'mousemove'
              ? ((lc = e.screenX - oo.screenX), (uc = e.screenY - oo.screenY))
              : (uc = lc = 0),
            (oo = e)),
          lc);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : uc;
    },
  }),
  Wh = Pt(Yl),
  zw = we({}, Yl, { dataTransfer: 0 }),
  Uw = Pt(zw),
  Vw = we({}, As, { relatedTarget: 0 }),
  cc = Pt(Vw),
  Hw = we({}, Qi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Bw = Pt(Hw),
  Ww = we({}, Qi, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Yw = Pt(Ww),
  Gw = we({}, Qi, { data: 0 }),
  Yh = Pt(Gw),
  Qw = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Kw = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Xw = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function qw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Xw[e]) ? !!t[e] : !1;
}
function Dd() {
  return qw;
}
var Zw = we({}, As, {
    key: function (e) {
      if (e.key) {
        var t = Qw[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Aa(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Kw[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Dd,
    charCode: function (e) {
      return e.type === 'keypress' ? Aa(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Aa(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  Jw = Pt(Zw),
  e3 = we({}, Yl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Gh = Pt(e3),
  t3 = we({}, As, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Dd,
  }),
  n3 = Pt(t3),
  r3 = we({}, Qi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  i3 = Pt(r3),
  o3 = we({}, Yl, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  s3 = Pt(o3),
  a3 = [9, 13, 27, 32],
  Fd = An && 'CompositionEvent' in window,
  Mo = null;
An && 'documentMode' in document && (Mo = document.documentMode);
var l3 = An && 'TextEvent' in window && !Mo,
  Iy = An && (!Fd || (Mo && 8 < Mo && 11 >= Mo)),
  Qh = ' ',
  Kh = !1;
function Ly(e, t) {
  switch (e) {
    case 'keyup':
      return a3.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Ny(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var ai = !1;
function u3(e, t) {
  switch (e) {
    case 'compositionend':
      return Ny(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Kh = !0), Qh);
    case 'textInput':
      return (e = t.data), e === Qh && Kh ? null : e;
    default:
      return null;
  }
}
function c3(e, t) {
  if (ai)
    return e === 'compositionend' || (!Fd && Ly(e, t))
      ? ((e = $y()), (Ta = Nd = Xn = null), (ai = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Iy && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var f3 = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Xh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!f3[e.type] : t === 'textarea';
}
function jy(e, t, n, r) {
  hy(r),
    (t = nl(t, 'onChange')),
    0 < t.length &&
      ((n = new jd('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Eo = null,
  Go = null;
function d3(e) {
  Qy(e, 0);
}
function Gl(e) {
  var t = ci(e);
  if (ay(t)) return e;
}
function p3(e, t) {
  if (e === 'change') return t;
}
var Dy = !1;
if (An) {
  var fc;
  if (An) {
    var dc = 'oninput' in document;
    if (!dc) {
      var qh = document.createElement('div');
      qh.setAttribute('oninput', 'return;'),
        (dc = typeof qh.oninput == 'function');
    }
    fc = dc;
  } else fc = !1;
  Dy = fc && (!document.documentMode || 9 < document.documentMode);
}
function Zh() {
  Eo && (Eo.detachEvent('onpropertychange', Fy), (Go = Eo = null));
}
function Fy(e) {
  if (e.propertyName === 'value' && Gl(Go)) {
    var t = [];
    jy(t, Go, e, Rd(e)), vy(d3, t);
  }
}
function h3(e, t, n) {
  e === 'focusin'
    ? (Zh(), (Eo = t), (Go = n), Eo.attachEvent('onpropertychange', Fy))
    : e === 'focusout' && Zh();
}
function m3(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Gl(Go);
}
function g3(e, t) {
  if (e === 'click') return Gl(t);
}
function y3(e, t) {
  if (e === 'input' || e === 'change') return Gl(t);
}
function v3(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var rn = typeof Object.is == 'function' ? Object.is : v3;
function Qo(e, t) {
  if (rn(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Jc.call(t, i) || !rn(e[i], t[i])) return !1;
  }
  return !0;
}
function Jh(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function e0(e, t) {
  var n = Jh(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Jh(n);
  }
}
function zy(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? zy(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Uy() {
  for (var e = window, t = Ka(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ka(e.document);
  }
  return t;
}
function zd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function x3(e) {
  var t = Uy(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    zy(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && zd(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = e0(n, o));
        var s = e0(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var w3 = An && 'documentMode' in document && 11 >= document.documentMode,
  li = null,
  xf = null,
  To = null,
  wf = !1;
function t0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  wf ||
    li == null ||
    li !== Ka(r) ||
    ((r = li),
    'selectionStart' in r && zd(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (To && Qo(To, r)) ||
      ((To = r),
      (r = nl(xf, 'onSelect')),
      0 < r.length &&
        ((t = new jd('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = li))));
}
function ra(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var ui = {
    animationend: ra('Animation', 'AnimationEnd'),
    animationiteration: ra('Animation', 'AnimationIteration'),
    animationstart: ra('Animation', 'AnimationStart'),
    transitionend: ra('Transition', 'TransitionEnd'),
  },
  pc = {},
  Vy = {};
An &&
  ((Vy = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete ui.animationend.animation,
    delete ui.animationiteration.animation,
    delete ui.animationstart.animation),
  'TransitionEvent' in window || delete ui.transitionend.transition);
function Ql(e) {
  if (pc[e]) return pc[e];
  if (!ui[e]) return e;
  var t = ui[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Vy) return (pc[e] = t[n]);
  return e;
}
var Hy = Ql('animationend'),
  By = Ql('animationiteration'),
  Wy = Ql('animationstart'),
  Yy = Ql('transitionend'),
  Gy = new Map(),
  n0 =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function fr(e, t) {
  Gy.set(e, t), Br(t, [e]);
}
for (var hc = 0; hc < n0.length; hc++) {
  var mc = n0[hc],
    S3 = mc.toLowerCase(),
    k3 = mc[0].toUpperCase() + mc.slice(1);
  fr(S3, 'on' + k3);
}
fr(Hy, 'onAnimationEnd');
fr(By, 'onAnimationIteration');
fr(Wy, 'onAnimationStart');
fr('dblclick', 'onDoubleClick');
fr('focusin', 'onFocus');
fr('focusout', 'onBlur');
fr(Yy, 'onTransitionEnd');
Ti('onMouseEnter', ['mouseout', 'mouseover']);
Ti('onMouseLeave', ['mouseout', 'mouseover']);
Ti('onPointerEnter', ['pointerout', 'pointerover']);
Ti('onPointerLeave', ['pointerout', 'pointerover']);
Br(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Br(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
Br('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Br(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Br(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Br(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Co =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  C3 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Co));
function r0(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Sw(r, t, void 0, e), (e.currentTarget = null);
}
function Qy(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          r0(i, a, u), (o = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          r0(i, a, u), (o = l);
        }
    }
  }
  if (qa) throw ((e = mf), (qa = !1), (mf = null), e);
}
function pe(e, t) {
  var n = t[_f];
  n === void 0 && (n = t[_f] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Ky(t, e, 2, !1), n.add(r));
}
function gc(e, t, n) {
  var r = 0;
  t && (r |= 4), Ky(n, e, r, t);
}
var ia = '_reactListening' + Math.random().toString(36).slice(2);
function Ko(e) {
  if (!e[ia]) {
    (e[ia] = !0),
      ny.forEach(function (n) {
        n !== 'selectionchange' && (C3.has(n) || gc(n, !1, e), gc(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ia] || ((t[ia] = !0), gc('selectionchange', !1, t));
  }
}
function Ky(e, t, n, r) {
  switch (Oy(t)) {
    case 1:
      var i = jw;
      break;
    case 4:
      i = Dw;
      break;
    default:
      i = Ld;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !hf ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function yc(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = _r(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  vy(function () {
    var u = o,
      c = Rd(n),
      f = [];
    e: {
      var d = Gy.get(e);
      if (d !== void 0) {
        var m = jd,
          y = e;
        switch (e) {
          case 'keypress':
            if (Aa(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            m = Jw;
            break;
          case 'focusin':
            (y = 'focus'), (m = cc);
            break;
          case 'focusout':
            (y = 'blur'), (m = cc);
            break;
          case 'beforeblur':
          case 'afterblur':
            m = cc;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            m = Wh;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            m = Uw;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            m = n3;
            break;
          case Hy:
          case By:
          case Wy:
            m = Bw;
            break;
          case Yy:
            m = i3;
            break;
          case 'scroll':
            m = Fw;
            break;
          case 'wheel':
            m = s3;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            m = Yw;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            m = Gh;
        }
        var h = (t & 4) !== 0,
          x = !h && e === 'scroll',
          p = h ? (d !== null ? d + 'Capture' : null) : d;
        h = [];
        for (var g = u, v; g !== null; ) {
          v = g;
          var w = v.stateNode;
          if (
            (v.tag === 5 &&
              w !== null &&
              ((v = w),
              p !== null && ((w = Ho(g, p)), w != null && h.push(Xo(g, w, v)))),
            x)
          )
            break;
          g = g.return;
        }
        0 < h.length &&
          ((d = new m(d, y, null, n, c)), f.push({ event: d, listeners: h }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (m = e === 'mouseout' || e === 'pointerout'),
          d &&
            n !== df &&
            (y = n.relatedTarget || n.fromElement) &&
            (_r(y) || y[Rn]))
        )
          break e;
        if (
          (m || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          m
            ? ((y = n.relatedTarget || n.toElement),
              (m = u),
              (y = y ? _r(y) : null),
              y !== null &&
                ((x = Wr(y)), y !== x || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((m = null), (y = u)),
          m !== y)
        ) {
          if (
            ((h = Wh),
            (w = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (g = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((h = Gh),
              (w = 'onPointerLeave'),
              (p = 'onPointerEnter'),
              (g = 'pointer')),
            (x = m == null ? d : ci(m)),
            (v = y == null ? d : ci(y)),
            (d = new h(w, g + 'leave', m, n, c)),
            (d.target = x),
            (d.relatedTarget = v),
            (w = null),
            _r(c) === u &&
              ((h = new h(p, g + 'enter', y, n, c)),
              (h.target = v),
              (h.relatedTarget = x),
              (w = h)),
            (x = w),
            m && y)
          )
            t: {
              for (h = m, p = y, g = 0, v = h; v; v = Xr(v)) g++;
              for (v = 0, w = p; w; w = Xr(w)) v++;
              for (; 0 < g - v; ) (h = Xr(h)), g--;
              for (; 0 < v - g; ) (p = Xr(p)), v--;
              for (; g--; ) {
                if (h === p || (p !== null && h === p.alternate)) break t;
                (h = Xr(h)), (p = Xr(p));
              }
              h = null;
            }
          else h = null;
          m !== null && i0(f, d, m, h, !1),
            y !== null && x !== null && i0(f, x, y, h, !0);
        }
      }
      e: {
        if (
          ((d = u ? ci(u) : window),
          (m = d.nodeName && d.nodeName.toLowerCase()),
          m === 'select' || (m === 'input' && d.type === 'file'))
        )
          var k = p3;
        else if (Xh(d))
          if (Dy) k = y3;
          else {
            k = m3;
            var S = h3;
          }
        else
          (m = d.nodeName) &&
            m.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (k = g3);
        if (k && (k = k(e, u))) {
          jy(f, k, n, c);
          break e;
        }
        S && S(e, d, u),
          e === 'focusout' &&
            (S = d._wrapperState) &&
            S.controlled &&
            d.type === 'number' &&
            af(d, 'number', d.value);
      }
      switch (((S = u ? ci(u) : window), e)) {
        case 'focusin':
          (Xh(S) || S.contentEditable === 'true') &&
            ((li = S), (xf = u), (To = null));
          break;
        case 'focusout':
          To = xf = li = null;
          break;
        case 'mousedown':
          wf = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (wf = !1), t0(f, n, c);
          break;
        case 'selectionchange':
          if (w3) break;
        case 'keydown':
        case 'keyup':
          t0(f, n, c);
      }
      var C;
      if (Fd)
        e: {
          switch (e) {
            case 'compositionstart':
              var M = 'onCompositionStart';
              break e;
            case 'compositionend':
              M = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              M = 'onCompositionUpdate';
              break e;
          }
          M = void 0;
        }
      else
        ai
          ? Ly(e, n) && (M = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (M = 'onCompositionStart');
      M &&
        (Iy &&
          n.locale !== 'ko' &&
          (ai || M !== 'onCompositionStart'
            ? M === 'onCompositionEnd' && ai && (C = $y())
            : ((Xn = c),
              (Nd = 'value' in Xn ? Xn.value : Xn.textContent),
              (ai = !0))),
        (S = nl(u, M)),
        0 < S.length &&
          ((M = new Yh(M, e, null, n, c)),
          f.push({ event: M, listeners: S }),
          C ? (M.data = C) : ((C = Ny(n)), C !== null && (M.data = C)))),
        (C = l3 ? u3(e, n) : c3(e, n)) &&
          ((u = nl(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new Yh('onBeforeInput', 'beforeinput', null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = C)));
    }
    Qy(f, t);
  });
}
function Xo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function nl(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Ho(e, n)),
      o != null && r.unshift(Xo(e, o, i)),
      (o = Ho(e, t)),
      o != null && r.push(Xo(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Xr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function i0(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = Ho(n, o)), l != null && s.unshift(Xo(n, l, a)))
        : i || ((l = Ho(n, o)), l != null && s.push(Xo(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var b3 = /\r\n?/g,
  _3 = /\u0000|\uFFFD/g;
function o0(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      b3,
      `
`
    )
    .replace(_3, '');
}
function oa(e, t, n) {
  if (((t = o0(t)), o0(e) !== t && n)) throw Error(N(425));
}
function rl() {}
var Sf = null,
  kf = null;
function Cf(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var bf = typeof setTimeout == 'function' ? setTimeout : void 0,
  P3 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  s0 = typeof Promise == 'function' ? Promise : void 0,
  M3 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof s0 < 'u'
      ? function (e) {
          return s0.resolve(null).then(e).catch(E3);
        }
      : bf;
function E3(e) {
  setTimeout(function () {
    throw e;
  });
}
function vc(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), Yo(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = i;
  } while (n);
  Yo(t);
}
function rr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function a0(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ki = Math.random().toString(36).slice(2),
  fn = '__reactFiber$' + Ki,
  qo = '__reactProps$' + Ki,
  Rn = '__reactContainer$' + Ki,
  _f = '__reactEvents$' + Ki,
  T3 = '__reactListeners$' + Ki,
  A3 = '__reactHandles$' + Ki;
function _r(e) {
  var t = e[fn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Rn] || n[fn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = a0(e); e !== null; ) {
          if ((n = e[fn])) return n;
          e = a0(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Rs(e) {
  return (
    (e = e[fn] || e[Rn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ci(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function Kl(e) {
  return e[qo] || null;
}
var Pf = [],
  fi = -1;
function dr(e) {
  return { current: e };
}
function he(e) {
  0 > fi || ((e.current = Pf[fi]), (Pf[fi] = null), fi--);
}
function de(e, t) {
  fi++, (Pf[fi] = e.current), (e.current = t);
}
var cr = {},
  Xe = dr(cr),
  ct = dr(!1),
  Nr = cr;
function Ai(e, t) {
  var n = e.type.contextTypes;
  if (!n) return cr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function ft(e) {
  return (e = e.childContextTypes), e != null;
}
function il() {
  he(ct), he(Xe);
}
function l0(e, t, n) {
  if (Xe.current !== cr) throw Error(N(168));
  de(Xe, t), de(ct, n);
}
function Xy(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(N(108, hw(e) || 'Unknown', i));
  return we({}, n, r);
}
function ol(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || cr),
    (Nr = Xe.current),
    de(Xe, e),
    de(ct, ct.current),
    !0
  );
}
function u0(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = Xy(e, t, Nr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      he(ct),
      he(Xe),
      de(Xe, e))
    : he(ct),
    de(ct, n);
}
var Cn = null,
  Xl = !1,
  xc = !1;
function qy(e) {
  Cn === null ? (Cn = [e]) : Cn.push(e);
}
function R3(e) {
  (Xl = !0), qy(e);
}
function pr() {
  if (!xc && Cn !== null) {
    xc = !0;
    var e = 0,
      t = se;
    try {
      var n = Cn;
      for (se = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Cn = null), (Xl = !1);
    } catch (i) {
      throw (Cn !== null && (Cn = Cn.slice(e + 1)), ky(Od, pr), i);
    } finally {
      (se = t), (xc = !1);
    }
  }
  return null;
}
var di = [],
  pi = 0,
  sl = null,
  al = 0,
  Tt = [],
  At = 0,
  jr = null,
  bn = 1,
  _n = '';
function Sr(e, t) {
  (di[pi++] = al), (di[pi++] = sl), (sl = e), (al = t);
}
function Zy(e, t, n) {
  (Tt[At++] = bn), (Tt[At++] = _n), (Tt[At++] = jr), (jr = e);
  var r = bn;
  e = _n;
  var i = 32 - en(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - en(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (bn = (1 << (32 - en(t) + i)) | (n << i) | r),
      (_n = o + e);
  } else (bn = (1 << o) | (n << i) | r), (_n = e);
}
function Ud(e) {
  e.return !== null && (Sr(e, 1), Zy(e, 1, 0));
}
function Vd(e) {
  for (; e === sl; )
    (sl = di[--pi]), (di[pi] = null), (al = di[--pi]), (di[pi] = null);
  for (; e === jr; )
    (jr = Tt[--At]),
      (Tt[At] = null),
      (_n = Tt[--At]),
      (Tt[At] = null),
      (bn = Tt[--At]),
      (Tt[At] = null);
}
var wt = null,
  xt = null,
  ge = !1,
  Xt = null;
function Jy(e, t) {
  var n = It(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function c0(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (wt = e), (xt = rr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (wt = e), (xt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = jr !== null ? { id: bn, overflow: _n } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = It(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (wt = e),
            (xt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Mf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ef(e) {
  if (ge) {
    var t = xt;
    if (t) {
      var n = t;
      if (!c0(e, t)) {
        if (Mf(e)) throw Error(N(418));
        t = rr(n.nextSibling);
        var r = wt;
        t && c0(e, t)
          ? Jy(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ge = !1), (wt = e));
      }
    } else {
      if (Mf(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (ge = !1), (wt = e);
    }
  }
}
function f0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  wt = e;
}
function sa(e) {
  if (e !== wt) return !1;
  if (!ge) return f0(e), (ge = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Cf(e.type, e.memoizedProps))),
    t && (t = xt))
  ) {
    if (Mf(e)) throw (e1(), Error(N(418)));
    for (; t; ) Jy(e, t), (t = rr(t.nextSibling));
  }
  if ((f0(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              xt = rr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      xt = null;
    }
  } else xt = wt ? rr(e.stateNode.nextSibling) : null;
  return !0;
}
function e1() {
  for (var e = xt; e; ) e = rr(e.nextSibling);
}
function Ri() {
  (xt = wt = null), (ge = !1);
}
function Hd(e) {
  Xt === null ? (Xt = [e]) : Xt.push(e);
}
var O3 = zn.ReactCurrentBatchConfig;
function so(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var i = r,
        o = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function aa(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function d0(e) {
  var t = e._init;
  return t(e._payload);
}
function t1(e) {
  function t(p, g) {
    if (e) {
      var v = p.deletions;
      v === null ? ((p.deletions = [g]), (p.flags |= 16)) : v.push(g);
    }
  }
  function n(p, g) {
    if (!e) return null;
    for (; g !== null; ) t(p, g), (g = g.sibling);
    return null;
  }
  function r(p, g) {
    for (p = new Map(); g !== null; )
      g.key !== null ? p.set(g.key, g) : p.set(g.index, g), (g = g.sibling);
    return p;
  }
  function i(p, g) {
    return (p = ar(p, g)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, g, v) {
    return (
      (p.index = v),
      e
        ? ((v = p.alternate),
          v !== null
            ? ((v = v.index), v < g ? ((p.flags |= 2), g) : v)
            : ((p.flags |= 2), g))
        : ((p.flags |= 1048576), g)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, g, v, w) {
    return g === null || g.tag !== 6
      ? ((g = Pc(v, p.mode, w)), (g.return = p), g)
      : ((g = i(g, v)), (g.return = p), g);
  }
  function l(p, g, v, w) {
    var k = v.type;
    return k === si
      ? c(p, g, v.props.children, w, v.key)
      : g !== null &&
        (g.elementType === k ||
          (typeof k == 'object' &&
            k !== null &&
            k.$$typeof === Wn &&
            d0(k) === g.type))
      ? ((w = i(g, v.props)), (w.ref = so(p, g, v)), (w.return = p), w)
      : ((w = ja(v.type, v.key, v.props, null, p.mode, w)),
        (w.ref = so(p, g, v)),
        (w.return = p),
        w);
  }
  function u(p, g, v, w) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== v.containerInfo ||
      g.stateNode.implementation !== v.implementation
      ? ((g = Mc(v, p.mode, w)), (g.return = p), g)
      : ((g = i(g, v.children || [])), (g.return = p), g);
  }
  function c(p, g, v, w, k) {
    return g === null || g.tag !== 7
      ? ((g = $r(v, p.mode, w, k)), (g.return = p), g)
      : ((g = i(g, v)), (g.return = p), g);
  }
  function f(p, g, v) {
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return (g = Pc('' + g, p.mode, v)), (g.return = p), g;
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case Xs:
          return (
            (v = ja(g.type, g.key, g.props, null, p.mode, v)),
            (v.ref = so(p, null, g)),
            (v.return = p),
            v
          );
        case oi:
          return (g = Mc(g, p.mode, v)), (g.return = p), g;
        case Wn:
          var w = g._init;
          return f(p, w(g._payload), v);
      }
      if (So(g) || to(g))
        return (g = $r(g, p.mode, v, null)), (g.return = p), g;
      aa(p, g);
    }
    return null;
  }
  function d(p, g, v, w) {
    var k = g !== null ? g.key : null;
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return k !== null ? null : a(p, g, '' + v, w);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case Xs:
          return v.key === k ? l(p, g, v, w) : null;
        case oi:
          return v.key === k ? u(p, g, v, w) : null;
        case Wn:
          return (k = v._init), d(p, g, k(v._payload), w);
      }
      if (So(v) || to(v)) return k !== null ? null : c(p, g, v, w, null);
      aa(p, v);
    }
    return null;
  }
  function m(p, g, v, w, k) {
    if ((typeof w == 'string' && w !== '') || typeof w == 'number')
      return (p = p.get(v) || null), a(g, p, '' + w, k);
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case Xs:
          return (p = p.get(w.key === null ? v : w.key) || null), l(g, p, w, k);
        case oi:
          return (p = p.get(w.key === null ? v : w.key) || null), u(g, p, w, k);
        case Wn:
          var S = w._init;
          return m(p, g, v, S(w._payload), k);
      }
      if (So(w) || to(w)) return (p = p.get(v) || null), c(g, p, w, k, null);
      aa(g, w);
    }
    return null;
  }
  function y(p, g, v, w) {
    for (
      var k = null, S = null, C = g, M = (g = 0), A = null;
      C !== null && M < v.length;
      M++
    ) {
      C.index > M ? ((A = C), (C = null)) : (A = C.sibling);
      var T = d(p, C, v[M], w);
      if (T === null) {
        C === null && (C = A);
        break;
      }
      e && C && T.alternate === null && t(p, C),
        (g = o(T, g, M)),
        S === null ? (k = T) : (S.sibling = T),
        (S = T),
        (C = A);
    }
    if (M === v.length) return n(p, C), ge && Sr(p, M), k;
    if (C === null) {
      for (; M < v.length; M++)
        (C = f(p, v[M], w)),
          C !== null &&
            ((g = o(C, g, M)), S === null ? (k = C) : (S.sibling = C), (S = C));
      return ge && Sr(p, M), k;
    }
    for (C = r(p, C); M < v.length; M++)
      (A = m(C, p, M, v[M], w)),
        A !== null &&
          (e && A.alternate !== null && C.delete(A.key === null ? M : A.key),
          (g = o(A, g, M)),
          S === null ? (k = A) : (S.sibling = A),
          (S = A));
    return (
      e &&
        C.forEach(function (E) {
          return t(p, E);
        }),
      ge && Sr(p, M),
      k
    );
  }
  function h(p, g, v, w) {
    var k = to(v);
    if (typeof k != 'function') throw Error(N(150));
    if (((v = k.call(v)), v == null)) throw Error(N(151));
    for (
      var S = (k = null), C = g, M = (g = 0), A = null, T = v.next();
      C !== null && !T.done;
      M++, T = v.next()
    ) {
      C.index > M ? ((A = C), (C = null)) : (A = C.sibling);
      var E = d(p, C, T.value, w);
      if (E === null) {
        C === null && (C = A);
        break;
      }
      e && C && E.alternate === null && t(p, C),
        (g = o(E, g, M)),
        S === null ? (k = E) : (S.sibling = E),
        (S = E),
        (C = A);
    }
    if (T.done) return n(p, C), ge && Sr(p, M), k;
    if (C === null) {
      for (; !T.done; M++, T = v.next())
        (T = f(p, T.value, w)),
          T !== null &&
            ((g = o(T, g, M)), S === null ? (k = T) : (S.sibling = T), (S = T));
      return ge && Sr(p, M), k;
    }
    for (C = r(p, C); !T.done; M++, T = v.next())
      (T = m(C, p, M, T.value, w)),
        T !== null &&
          (e && T.alternate !== null && C.delete(T.key === null ? M : T.key),
          (g = o(T, g, M)),
          S === null ? (k = T) : (S.sibling = T),
          (S = T));
    return (
      e &&
        C.forEach(function (I) {
          return t(p, I);
        }),
      ge && Sr(p, M),
      k
    );
  }
  function x(p, g, v, w) {
    if (
      (typeof v == 'object' &&
        v !== null &&
        v.type === si &&
        v.key === null &&
        (v = v.props.children),
      typeof v == 'object' && v !== null)
    ) {
      switch (v.$$typeof) {
        case Xs:
          e: {
            for (var k = v.key, S = g; S !== null; ) {
              if (S.key === k) {
                if (((k = v.type), k === si)) {
                  if (S.tag === 7) {
                    n(p, S.sibling),
                      (g = i(S, v.props.children)),
                      (g.return = p),
                      (p = g);
                    break e;
                  }
                } else if (
                  S.elementType === k ||
                  (typeof k == 'object' &&
                    k !== null &&
                    k.$$typeof === Wn &&
                    d0(k) === S.type)
                ) {
                  n(p, S.sibling),
                    (g = i(S, v.props)),
                    (g.ref = so(p, S, v)),
                    (g.return = p),
                    (p = g);
                  break e;
                }
                n(p, S);
                break;
              } else t(p, S);
              S = S.sibling;
            }
            v.type === si
              ? ((g = $r(v.props.children, p.mode, w, v.key)),
                (g.return = p),
                (p = g))
              : ((w = ja(v.type, v.key, v.props, null, p.mode, w)),
                (w.ref = so(p, g, v)),
                (w.return = p),
                (p = w));
          }
          return s(p);
        case oi:
          e: {
            for (S = v.key; g !== null; ) {
              if (g.key === S)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === v.containerInfo &&
                  g.stateNode.implementation === v.implementation
                ) {
                  n(p, g.sibling),
                    (g = i(g, v.children || [])),
                    (g.return = p),
                    (p = g);
                  break e;
                } else {
                  n(p, g);
                  break;
                }
              else t(p, g);
              g = g.sibling;
            }
            (g = Mc(v, p.mode, w)), (g.return = p), (p = g);
          }
          return s(p);
        case Wn:
          return (S = v._init), x(p, g, S(v._payload), w);
      }
      if (So(v)) return y(p, g, v, w);
      if (to(v)) return h(p, g, v, w);
      aa(p, v);
    }
    return (typeof v == 'string' && v !== '') || typeof v == 'number'
      ? ((v = '' + v),
        g !== null && g.tag === 6
          ? (n(p, g.sibling), (g = i(g, v)), (g.return = p), (p = g))
          : (n(p, g), (g = Pc(v, p.mode, w)), (g.return = p), (p = g)),
        s(p))
      : n(p, g);
  }
  return x;
}
var Oi = t1(!0),
  n1 = t1(!1),
  ll = dr(null),
  ul = null,
  hi = null,
  Bd = null;
function Wd() {
  Bd = hi = ul = null;
}
function Yd(e) {
  var t = ll.current;
  he(ll), (e._currentValue = t);
}
function Tf(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ki(e, t) {
  (ul = e),
    (Bd = hi = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (lt = !0), (e.firstContext = null));
}
function Ft(e) {
  var t = e._currentValue;
  if (Bd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), hi === null)) {
      if (ul === null) throw Error(N(308));
      (hi = e), (ul.dependencies = { lanes: 0, firstContext: e });
    } else hi = hi.next = e;
  return t;
}
var Pr = null;
function Gd(e) {
  Pr === null ? (Pr = [e]) : Pr.push(e);
}
function r1(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Gd(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    On(e, r)
  );
}
function On(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Yn = !1;
function Qd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function i1(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function En(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ir(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ee & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      On(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Gd(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    On(e, n)
  );
}
function Ra(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), $d(e, n);
  }
}
function p0(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function cl(e, t, n, r) {
  var i = e.updateQueue;
  Yn = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (o = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = u = l = null), (a = o);
    do {
      var d = a.lane,
        m = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            h = a;
          switch (((d = t), (m = n), h.tag)) {
            case 1:
              if (((y = h.payload), typeof y == 'function')) {
                f = y.call(m, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = h.payload),
                (d = typeof y == 'function' ? y.call(m, f, d) : y),
                d == null)
              )
                break e;
              f = we({}, f, d);
              break e;
            case 2:
              Yn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        (m = {
          eventTime: m,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = m), (l = f)) : (c = c.next = m),
          (s |= d);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Fr |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function h0(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function'))
          throw Error(N(191, i));
        i.call(r);
      }
    }
}
var Os = {},
  pn = dr(Os),
  Zo = dr(Os),
  Jo = dr(Os);
function Mr(e) {
  if (e === Os) throw Error(N(174));
  return e;
}
function Kd(e, t) {
  switch ((de(Jo, t), de(Zo, e), de(pn, Os), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : uf(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = uf(t, e));
  }
  he(pn), de(pn, t);
}
function $i() {
  he(pn), he(Zo), he(Jo);
}
function o1(e) {
  Mr(Jo.current);
  var t = Mr(pn.current),
    n = uf(t, e.type);
  t !== n && (de(Zo, e), de(pn, n));
}
function Xd(e) {
  Zo.current === e && (he(pn), he(Zo));
}
var ve = dr(0);
function fl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var wc = [];
function qd() {
  for (var e = 0; e < wc.length; e++)
    wc[e]._workInProgressVersionPrimary = null;
  wc.length = 0;
}
var Oa = zn.ReactCurrentDispatcher,
  Sc = zn.ReactCurrentBatchConfig,
  Dr = 0,
  xe = null,
  Oe = null,
  Ne = null,
  dl = !1,
  Ao = !1,
  es = 0,
  $3 = 0;
function We() {
  throw Error(N(321));
}
function Zd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!rn(e[n], t[n])) return !1;
  return !0;
}
function Jd(e, t, n, r, i, o) {
  if (
    ((Dr = o),
    (xe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Oa.current = e === null || e.memoizedState === null ? j3 : D3),
    (e = n(r, i)),
    Ao)
  ) {
    o = 0;
    do {
      if (((Ao = !1), (es = 0), 25 <= o)) throw Error(N(301));
      (o += 1),
        (Ne = Oe = null),
        (t.updateQueue = null),
        (Oa.current = F3),
        (e = n(r, i));
    } while (Ao);
  }
  if (
    ((Oa.current = pl),
    (t = Oe !== null && Oe.next !== null),
    (Dr = 0),
    (Ne = Oe = xe = null),
    (dl = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function ep() {
  var e = es !== 0;
  return (es = 0), e;
}
function an() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ne === null ? (xe.memoizedState = Ne = e) : (Ne = Ne.next = e), Ne;
}
function zt() {
  if (Oe === null) {
    var e = xe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Oe.next;
  var t = Ne === null ? xe.memoizedState : Ne.next;
  if (t !== null) (Ne = t), (Oe = e);
  else {
    if (e === null) throw Error(N(310));
    (Oe = e),
      (e = {
        memoizedState: Oe.memoizedState,
        baseState: Oe.baseState,
        baseQueue: Oe.baseQueue,
        queue: Oe.queue,
        next: null,
      }),
      Ne === null ? (xe.memoizedState = Ne = e) : (Ne = Ne.next = e);
  }
  return Ne;
}
function ts(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function kc(e) {
  var t = zt(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = Oe,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = o;
    do {
      var c = u.lane;
      if ((Dr & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (xe.lanes |= c),
          (Fr |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? (s = r) : (l.next = a),
      rn(r, t.memoizedState) || (lt = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (xe.lanes |= o), (Fr |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Cc(e) {
  var t = zt(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    rn(o, t.memoizedState) || (lt = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function s1() {}
function a1(e, t) {
  var n = xe,
    r = zt(),
    i = t(),
    o = !rn(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (lt = !0)),
    (r = r.queue),
    tp(c1.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Ne !== null && Ne.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ns(9, u1.bind(null, n, r, i, t), void 0, null),
      De === null)
    )
      throw Error(N(349));
    Dr & 30 || l1(n, t, i);
  }
  return i;
}
function l1(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = xe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (xe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function u1(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), f1(t) && d1(e);
}
function c1(e, t, n) {
  return n(function () {
    f1(t) && d1(e);
  });
}
function f1(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !rn(e, n);
  } catch {
    return !0;
  }
}
function d1(e) {
  var t = On(e, 1);
  t !== null && tn(t, e, 1, -1);
}
function m0(e) {
  var t = an();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ts,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = N3.bind(null, xe, e)),
    [t.memoizedState, e]
  );
}
function ns(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = xe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (xe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function p1() {
  return zt().memoizedState;
}
function $a(e, t, n, r) {
  var i = an();
  (xe.flags |= e),
    (i.memoizedState = ns(1 | t, n, void 0, r === void 0 ? null : r));
}
function ql(e, t, n, r) {
  var i = zt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Oe !== null) {
    var s = Oe.memoizedState;
    if (((o = s.destroy), r !== null && Zd(r, s.deps))) {
      i.memoizedState = ns(t, n, o, r);
      return;
    }
  }
  (xe.flags |= e), (i.memoizedState = ns(1 | t, n, o, r));
}
function g0(e, t) {
  return $a(8390656, 8, e, t);
}
function tp(e, t) {
  return ql(2048, 8, e, t);
}
function h1(e, t) {
  return ql(4, 2, e, t);
}
function m1(e, t) {
  return ql(4, 4, e, t);
}
function g1(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function y1(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ql(4, 4, g1.bind(null, t, e), n)
  );
}
function np() {}
function v1(e, t) {
  var n = zt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function x1(e, t) {
  var n = zt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function w1(e, t, n) {
  return Dr & 21
    ? (rn(n, t) || ((n = _y()), (xe.lanes |= n), (Fr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (lt = !0)), (e.memoizedState = n));
}
function I3(e, t) {
  var n = se;
  (se = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Sc.transition;
  Sc.transition = {};
  try {
    e(!1), t();
  } finally {
    (se = n), (Sc.transition = r);
  }
}
function S1() {
  return zt().memoizedState;
}
function L3(e, t, n) {
  var r = sr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    k1(e))
  )
    C1(t, n);
  else if (((n = r1(e, t, n, r)), n !== null)) {
    var i = et();
    tn(n, e, r, i), b1(n, t, r);
  }
}
function N3(e, t, n) {
  var r = sr(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (k1(e)) C1(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), rn(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), Gd(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = r1(e, t, i, r)),
      n !== null && ((i = et()), tn(n, e, r, i), b1(n, t, r));
  }
}
function k1(e) {
  var t = e.alternate;
  return e === xe || (t !== null && t === xe);
}
function C1(e, t) {
  Ao = dl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function b1(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), $d(e, n);
  }
}
var pl = {
    readContext: Ft,
    useCallback: We,
    useContext: We,
    useEffect: We,
    useImperativeHandle: We,
    useInsertionEffect: We,
    useLayoutEffect: We,
    useMemo: We,
    useReducer: We,
    useRef: We,
    useState: We,
    useDebugValue: We,
    useDeferredValue: We,
    useTransition: We,
    useMutableSource: We,
    useSyncExternalStore: We,
    useId: We,
    unstable_isNewReconciler: !1,
  },
  j3 = {
    readContext: Ft,
    useCallback: function (e, t) {
      return (an().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ft,
    useEffect: g0,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        $a(4194308, 4, g1.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return $a(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return $a(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = an();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = an();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = L3.bind(null, xe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = an();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: m0,
    useDebugValue: np,
    useDeferredValue: function (e) {
      return (an().memoizedState = e);
    },
    useTransition: function () {
      var e = m0(!1),
        t = e[0];
      return (e = I3.bind(null, e[1])), (an().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = xe,
        i = an();
      if (ge) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), De === null)) throw Error(N(349));
        Dr & 30 || l1(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        g0(c1.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ns(9, u1.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = an(),
        t = De.identifierPrefix;
      if (ge) {
        var n = _n,
          r = bn;
        (n = (r & ~(1 << (32 - en(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = es++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = $3++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  D3 = {
    readContext: Ft,
    useCallback: v1,
    useContext: Ft,
    useEffect: tp,
    useImperativeHandle: y1,
    useInsertionEffect: h1,
    useLayoutEffect: m1,
    useMemo: x1,
    useReducer: kc,
    useRef: p1,
    useState: function () {
      return kc(ts);
    },
    useDebugValue: np,
    useDeferredValue: function (e) {
      var t = zt();
      return w1(t, Oe.memoizedState, e);
    },
    useTransition: function () {
      var e = kc(ts)[0],
        t = zt().memoizedState;
      return [e, t];
    },
    useMutableSource: s1,
    useSyncExternalStore: a1,
    useId: S1,
    unstable_isNewReconciler: !1,
  },
  F3 = {
    readContext: Ft,
    useCallback: v1,
    useContext: Ft,
    useEffect: tp,
    useImperativeHandle: y1,
    useInsertionEffect: h1,
    useLayoutEffect: m1,
    useMemo: x1,
    useReducer: Cc,
    useRef: p1,
    useState: function () {
      return Cc(ts);
    },
    useDebugValue: np,
    useDeferredValue: function (e) {
      var t = zt();
      return Oe === null ? (t.memoizedState = e) : w1(t, Oe.memoizedState, e);
    },
    useTransition: function () {
      var e = Cc(ts)[0],
        t = zt().memoizedState;
      return [e, t];
    },
    useMutableSource: s1,
    useSyncExternalStore: a1,
    useId: S1,
    unstable_isNewReconciler: !1,
  };
function Gt(e, t) {
  if (e && e.defaultProps) {
    (t = we({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Af(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : we({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Zl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Wr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = et(),
      i = sr(e),
      o = En(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = ir(e, o, i)),
      t !== null && (tn(t, e, i, r), Ra(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = et(),
      i = sr(e),
      o = En(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = ir(e, o, i)),
      t !== null && (tn(t, e, i, r), Ra(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = et(),
      r = sr(e),
      i = En(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = ir(e, i, r)),
      t !== null && (tn(t, e, r, n), Ra(t, e, r));
  },
};
function y0(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Qo(n, r) || !Qo(i, o)
      : !0
  );
}
function _1(e, t, n) {
  var r = !1,
    i = cr,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = Ft(o))
      : ((i = ft(t) ? Nr : Xe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Ai(e, i) : cr)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Zl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function v0(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Zl.enqueueReplaceState(t, t.state, null);
}
function Rf(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Qd(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (i.context = Ft(o))
    : ((o = ft(t) ? Nr : Xe.current), (i.context = Ai(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (Af(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Zl.enqueueReplaceState(i, i.state, null),
      cl(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Ii(e, t) {
  try {
    var n = '',
      r = t;
    do (n += pw(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function bc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Of(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var z3 = typeof WeakMap == 'function' ? WeakMap : Map;
function P1(e, t, n) {
  (n = En(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ml || ((ml = !0), (Vf = r)), Of(e, t);
    }),
    n
  );
}
function M1(e, t, n) {
  (n = En(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Of(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        Of(e, t),
          typeof r != 'function' &&
            (or === null ? (or = new Set([this])) : or.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : '',
        });
      }),
    n
  );
}
function x0(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new z3();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = eS.bind(null, e, t, n)), t.then(e, e));
}
function w0(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function S0(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = En(-1, 1)), (t.tag = 2), ir(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var U3 = zn.ReactCurrentOwner,
  lt = !1;
function Ze(e, t, n, r) {
  t.child = e === null ? n1(t, null, n, r) : Oi(t, e.child, n, r);
}
function k0(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    ki(t, i),
    (r = Jd(e, t, n, r, o, i)),
    (n = ep()),
    e !== null && !lt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        $n(e, t, i))
      : (ge && n && Ud(t), (t.flags |= 1), Ze(e, t, r, i), t.child)
  );
}
function C0(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !cp(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), E1(e, t, o, r, i))
      : ((e = ja(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Qo), n(s, r) && e.ref === t.ref)
    )
      return $n(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = ar(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function E1(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Qo(o, r) && e.ref === t.ref)
      if (((lt = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (lt = !0);
      else return (t.lanes = e.lanes), $n(e, t, i);
  }
  return $f(e, t, n, r, i);
}
function T1(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        de(gi, yt),
        (yt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          de(gi, yt),
          (yt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        de(gi, yt),
        (yt |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      de(gi, yt),
      (yt |= r);
  return Ze(e, t, i, n), t.child;
}
function A1(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function $f(e, t, n, r, i) {
  var o = ft(n) ? Nr : Xe.current;
  return (
    (o = Ai(t, o)),
    ki(t, i),
    (n = Jd(e, t, n, r, o, i)),
    (r = ep()),
    e !== null && !lt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        $n(e, t, i))
      : (ge && r && Ud(t), (t.flags |= 1), Ze(e, t, n, i), t.child)
  );
}
function b0(e, t, n, r, i) {
  if (ft(n)) {
    var o = !0;
    ol(t);
  } else o = !1;
  if ((ki(t, i), t.stateNode === null))
    Ia(e, t), _1(t, n, r), Rf(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = Ft(u))
      : ((u = ft(n) ? Nr : Xe.current), (u = Ai(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == 'function' ||
        typeof s.getSnapshotBeforeUpdate == 'function';
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((a !== r || l !== u) && v0(t, s, r, u)),
      (Yn = !1);
    var d = t.memoizedState;
    (s.state = d),
      cl(t, r, s, i),
      (l = t.memoizedState),
      a !== r || d !== l || ct.current || Yn
        ? (typeof c == 'function' && (Af(t, n, c, r), (l = t.memoizedState)),
          (a = Yn || y0(t, n, a, r, d, l, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != 'function' &&
                  typeof s.componentWillMount != 'function') ||
                (typeof s.componentWillMount == 'function' &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == 'function' &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      i1(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Gt(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = Ft(l))
        : ((l = ft(n) ? Nr : Xe.current), (l = Ai(t, l)));
    var m = n.getDerivedStateFromProps;
    (c =
      typeof m == 'function' ||
      typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((a !== f || d !== l) && v0(t, s, r, l)),
      (Yn = !1),
      (d = t.memoizedState),
      (s.state = d),
      cl(t, r, s, i);
    var y = t.memoizedState;
    a !== f || d !== y || ct.current || Yn
      ? (typeof m == 'function' && (Af(t, n, m, r), (y = t.memoizedState)),
        (u = Yn || y0(t, n, u, r, d, y, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != 'function' &&
                typeof s.componentWillUpdate != 'function') ||
              (typeof s.componentWillUpdate == 'function' &&
                s.componentWillUpdate(r, y, l),
              typeof s.UNSAFE_componentWillUpdate == 'function' &&
                s.UNSAFE_componentWillUpdate(r, y, l)),
            typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return If(e, t, n, r, o, i);
}
function If(e, t, n, r, i, o) {
  A1(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && u0(t, n, !1), $n(e, t, o);
  (r = t.stateNode), (U3.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Oi(t, e.child, null, o)), (t.child = Oi(t, null, a, o)))
      : Ze(e, t, a, o),
    (t.memoizedState = r.state),
    i && u0(t, n, !0),
    t.child
  );
}
function R1(e) {
  var t = e.stateNode;
  t.pendingContext
    ? l0(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && l0(e, t.context, !1),
    Kd(e, t.containerInfo);
}
function _0(e, t, n, r, i) {
  return Ri(), Hd(i), (t.flags |= 256), Ze(e, t, n, r), t.child;
}
var Lf = { dehydrated: null, treeContext: null, retryLane: 0 };
function Nf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function O1(e, t, n) {
  var r = t.pendingProps,
    i = ve.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    de(ve, i & 1),
    e === null)
  )
    return (
      Ef(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: 'hidden', children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = tu(s, r, 0, null)),
              (e = $r(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Nf(n)),
              (t.memoizedState = Lf),
              e)
            : rp(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return V3(e, t, s, r, a, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: 'hidden', children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = ar(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = ar(a, o)) : ((o = $r(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Nf(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Lf),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = ar(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function rp(e, t) {
  return (
    (t = tu({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function la(e, t, n, r) {
  return (
    r !== null && Hd(r),
    Oi(t, e.child, null, n),
    (e = rp(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function V3(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = bc(Error(N(422)))), la(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = tu({ mode: 'visible', children: r.children }, i, 0, null)),
        (o = $r(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Oi(t, e.child, null, s),
        (t.child.memoizedState = Nf(s)),
        (t.memoizedState = Lf),
        o);
  if (!(t.mode & 1)) return la(e, t, s, null);
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(N(419))), (r = bc(o, r, void 0)), la(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), lt || a)) {
    if (((r = De), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), On(e, i), tn(r, e, i, -1));
    }
    return up(), (r = bc(Error(N(421)))), la(e, t, s, r);
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = tS.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (xt = rr(i.nextSibling)),
      (wt = t),
      (ge = !0),
      (Xt = null),
      e !== null &&
        ((Tt[At++] = bn),
        (Tt[At++] = _n),
        (Tt[At++] = jr),
        (bn = e.id),
        (_n = e.overflow),
        (jr = t)),
      (t = rp(t, r.children)),
      (t.flags |= 4096),
      t);
}
function P0(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Tf(e.return, t, n);
}
function _c(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function $1(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Ze(e, t, r.children, n), (r = ve.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && P0(e, n, t);
        else if (e.tag === 19) P0(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((de(ve, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && fl(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          _c(t, !1, i, n, o);
        break;
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && fl(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        _c(t, !0, n, null, o);
        break;
      case 'together':
        _c(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ia(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function $n(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Fr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ar(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ar(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function H3(e, t, n) {
  switch (t.tag) {
    case 3:
      R1(t), Ri();
      break;
    case 5:
      o1(t);
      break;
    case 1:
      ft(t.type) && ol(t);
      break;
    case 4:
      Kd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      de(ll, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (de(ve, ve.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? O1(e, t, n)
          : (de(ve, ve.current & 1),
            (e = $n(e, t, n)),
            e !== null ? e.sibling : null);
      de(ve, ve.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return $1(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        de(ve, ve.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), T1(e, t, n);
  }
  return $n(e, t, n);
}
var I1, jf, L1, N1;
I1 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
jf = function () {};
L1 = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Mr(pn.current);
    var o = null;
    switch (n) {
      case 'input':
        (i = of(e, i)), (r = of(e, r)), (o = []);
        break;
      case 'select':
        (i = we({}, i, { value: void 0 })),
          (r = we({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (i = lf(e, i)), (r = lf(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = rl);
    }
    cf(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === 'style') {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Uo.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === 'style')
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ''));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = l);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(u, l))
            : u === 'children'
            ? (typeof l != 'string' && typeof l != 'number') ||
              (o = o || []).push(u, '' + l)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (Uo.hasOwnProperty(u)
                ? (l != null && u === 'onScroll' && pe('scroll', e),
                  o || a === l || (o = []))
                : (o = o || []).push(u, l));
    }
    n && (o = o || []).push('style', n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
N1 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ao(e, t) {
  if (!ge)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ye(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function B3(e, t, n) {
  var r = t.pendingProps;
  switch ((Vd(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ye(t), null;
    case 1:
      return ft(t.type) && il(), Ye(t), null;
    case 3:
      return (
        (r = t.stateNode),
        $i(),
        he(ct),
        he(Xe),
        qd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (sa(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Xt !== null && (Wf(Xt), (Xt = null)))),
        jf(e, t),
        Ye(t),
        null
      );
    case 5:
      Xd(t);
      var i = Mr(Jo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        L1(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return Ye(t), null;
        }
        if (((e = Mr(pn.current)), sa(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[fn] = t), (r[qo] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              pe('cancel', r), pe('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              pe('load', r);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < Co.length; i++) pe(Co[i], r);
              break;
            case 'source':
              pe('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              pe('error', r), pe('load', r);
              break;
            case 'details':
              pe('toggle', r);
              break;
            case 'input':
              Lh(r, o), pe('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                pe('invalid', r);
              break;
            case 'textarea':
              jh(r, o), pe('invalid', r);
          }
          cf(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      oa(r.textContent, a, e),
                    (i = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      oa(r.textContent, a, e),
                    (i = ['children', '' + a]))
                : Uo.hasOwnProperty(s) &&
                  a != null &&
                  s === 'onScroll' &&
                  pe('scroll', r);
            }
          switch (n) {
            case 'input':
              qs(r), Nh(r, o, !0);
              break;
            case 'textarea':
              qs(r), Dh(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = rl);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = cy(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = s.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === 'select' &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[fn] = t),
            (e[qo] = r),
            I1(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = ff(n, r)), n)) {
              case 'dialog':
                pe('cancel', e), pe('close', e), (i = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                pe('load', e), (i = r);
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < Co.length; i++) pe(Co[i], e);
                i = r;
                break;
              case 'source':
                pe('error', e), (i = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                pe('error', e), pe('load', e), (i = r);
                break;
              case 'details':
                pe('toggle', e), (i = r);
                break;
              case 'input':
                Lh(e, r), (i = of(e, r)), pe('invalid', e);
                break;
              case 'option':
                i = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = we({}, r, { value: void 0 })),
                  pe('invalid', e);
                break;
              case 'textarea':
                jh(e, r), (i = lf(e, r)), pe('invalid', e);
                break;
              default:
                i = r;
            }
            cf(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === 'style'
                  ? py(e, l)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((l = l ? l.__html : void 0), l != null && fy(e, l))
                  : o === 'children'
                  ? typeof l == 'string'
                    ? (n !== 'textarea' || l !== '') && Vo(e, l)
                    : typeof l == 'number' && Vo(e, '' + l)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (Uo.hasOwnProperty(o)
                      ? l != null && o === 'onScroll' && pe('scroll', e)
                      : l != null && Md(e, o, l, s));
              }
            switch (n) {
              case 'input':
                qs(e), Nh(e, r, !1);
                break;
              case 'textarea':
                qs(e), Dh(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + ur(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? vi(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      vi(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == 'function' && (e.onclick = rl);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ye(t), null;
    case 6:
      if (e && t.stateNode != null) N1(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(N(166));
        if (((n = Mr(Jo.current)), Mr(pn.current), sa(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[fn] = t),
            (o = r.nodeValue !== n) && ((e = wt), e !== null))
          )
            switch (e.tag) {
              case 3:
                oa(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  oa(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[fn] = t),
            (t.stateNode = r);
      }
      return Ye(t), null;
    case 13:
      if (
        (he(ve),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ge && xt !== null && t.mode & 1 && !(t.flags & 128))
          e1(), Ri(), (t.flags |= 98560), (o = !1);
        else if (((o = sa(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(N(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(N(317));
            o[fn] = t;
          } else
            Ri(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ye(t), (o = !1);
        } else Xt !== null && (Wf(Xt), (Xt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ve.current & 1 ? Ie === 0 && (Ie = 3) : up())),
          t.updateQueue !== null && (t.flags |= 4),
          Ye(t),
          null);
    case 4:
      return (
        $i(), jf(e, t), e === null && Ko(t.stateNode.containerInfo), Ye(t), null
      );
    case 10:
      return Yd(t.type._context), Ye(t), null;
    case 17:
      return ft(t.type) && il(), Ye(t), null;
    case 19:
      if ((he(ve), (o = t.memoizedState), o === null)) return Ye(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) ao(o, !1);
        else {
          if (Ie !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = fl(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ao(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return de(ve, (ve.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            _e() > Li &&
            ((t.flags |= 128), (r = !0), ao(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = fl(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ao(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !s.alternate && !ge)
            )
              return Ye(t), null;
          } else
            2 * _e() - o.renderingStartTime > Li &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ao(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = _e()),
          (t.sibling = null),
          (n = ve.current),
          de(ve, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ye(t), null);
    case 22:
    case 23:
      return (
        lp(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? yt & 1073741824 && (Ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ye(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function W3(e, t) {
  switch ((Vd(t), t.tag)) {
    case 1:
      return (
        ft(t.type) && il(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        $i(),
        he(ct),
        he(Xe),
        qd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Xd(t), null;
    case 13:
      if (
        (he(ve), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(N(340));
        Ri();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return he(ve), null;
    case 4:
      return $i(), null;
    case 10:
      return Yd(t.type._context), null;
    case 22:
    case 23:
      return lp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ua = !1,
  Ke = !1,
  Y3 = typeof WeakSet == 'function' ? WeakSet : Set,
  V = null;
function mi(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        be(e, t, r);
      }
    else n.current = null;
}
function Df(e, t, n) {
  try {
    n();
  } catch (r) {
    be(e, t, r);
  }
}
var M0 = !1;
function G3(e, t) {
  if (((Sf = el), (e = Uy()), zd(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var m;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (m = f.firstChild) !== null;

            )
              (d = f), (f = m);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (a = s),
                d === o && ++c === r && (l = s),
                (m = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = m;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (kf = { focusedElem: e, selectionRange: n }, el = !1, V = t; V !== null; )
    if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (V = e);
    else
      for (; V !== null; ) {
        t = V;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var h = y.memoizedProps,
                    x = y.memoizedState,
                    p = t.stateNode,
                    g = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? h : Gt(t.type, h),
                      x
                    );
                  p.__reactInternalSnapshotBeforeUpdate = g;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = '')
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (w) {
          be(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (V = e);
          break;
        }
        V = t.return;
      }
  return (y = M0), (M0 = !1), y;
}
function Ro(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Df(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Jl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ff(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function j1(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), j1(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[fn], delete t[qo], delete t[_f], delete t[T3], delete t[A3])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function D1(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function E0(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || D1(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function zf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = rl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (zf(e, t, n), e = e.sibling; e !== null; ) zf(e, t, n), (e = e.sibling);
}
function Uf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Uf(e, t, n), e = e.sibling; e !== null; ) Uf(e, t, n), (e = e.sibling);
}
var Ue = null,
  Kt = !1;
function Hn(e, t, n) {
  for (n = n.child; n !== null; ) F1(e, t, n), (n = n.sibling);
}
function F1(e, t, n) {
  if (dn && typeof dn.onCommitFiberUnmount == 'function')
    try {
      dn.onCommitFiberUnmount(Wl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ke || mi(n, t);
    case 6:
      var r = Ue,
        i = Kt;
      (Ue = null),
        Hn(e, t, n),
        (Ue = r),
        (Kt = i),
        Ue !== null &&
          (Kt
            ? ((e = Ue),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ue.removeChild(n.stateNode));
      break;
    case 18:
      Ue !== null &&
        (Kt
          ? ((e = Ue),
            (n = n.stateNode),
            e.nodeType === 8
              ? vc(e.parentNode, n)
              : e.nodeType === 1 && vc(e, n),
            Yo(e))
          : vc(Ue, n.stateNode));
      break;
    case 4:
      (r = Ue),
        (i = Kt),
        (Ue = n.stateNode.containerInfo),
        (Kt = !0),
        Hn(e, t, n),
        (Ue = r),
        (Kt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ke &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && Df(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      Hn(e, t, n);
      break;
    case 1:
      if (
        !Ke &&
        (mi(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          be(n, t, a);
        }
      Hn(e, t, n);
      break;
    case 21:
      Hn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ke = (r = Ke) || n.memoizedState !== null), Hn(e, t, n), (Ke = r))
        : Hn(e, t, n);
      break;
    default:
      Hn(e, t, n);
  }
}
function T0(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Y3()),
      t.forEach(function (r) {
        var i = nS.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Yt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ue = a.stateNode), (Kt = !1);
              break e;
            case 3:
              (Ue = a.stateNode.containerInfo), (Kt = !0);
              break e;
            case 4:
              (Ue = a.stateNode.containerInfo), (Kt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ue === null) throw Error(N(160));
        F1(o, s, i), (Ue = null), (Kt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        be(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) z1(t, e), (t = t.sibling);
}
function z1(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Yt(t, e), on(e), r & 4)) {
        try {
          Ro(3, e, e.return), Jl(3, e);
        } catch (h) {
          be(e, e.return, h);
        }
        try {
          Ro(5, e, e.return);
        } catch (h) {
          be(e, e.return, h);
        }
      }
      break;
    case 1:
      Yt(t, e), on(e), r & 512 && n !== null && mi(n, n.return);
      break;
    case 5:
      if (
        (Yt(t, e),
        on(e),
        r & 512 && n !== null && mi(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Vo(i, '');
        } catch (h) {
          be(e, e.return, h);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === 'input' && o.type === 'radio' && o.name != null && ly(i, o),
              ff(a, s);
            var u = ff(a, o);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                f = l[s + 1];
              c === 'style'
                ? py(i, f)
                : c === 'dangerouslySetInnerHTML'
                ? fy(i, f)
                : c === 'children'
                ? Vo(i, f)
                : Md(i, c, f, u);
            }
            switch (a) {
              case 'input':
                sf(i, o);
                break;
              case 'textarea':
                uy(i, o);
                break;
              case 'select':
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var m = o.value;
                m != null
                  ? vi(i, !!o.multiple, m, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? vi(i, !!o.multiple, o.defaultValue, !0)
                      : vi(i, !!o.multiple, o.multiple ? [] : '', !1));
            }
            i[qo] = o;
          } catch (h) {
            be(e, e.return, h);
          }
      }
      break;
    case 6:
      if ((Yt(t, e), on(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (h) {
          be(e, e.return, h);
        }
      }
      break;
    case 3:
      if (
        (Yt(t, e), on(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Yo(t.containerInfo);
        } catch (h) {
          be(e, e.return, h);
        }
      break;
    case 4:
      Yt(t, e), on(e);
      break;
    case 13:
      Yt(t, e),
        on(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (sp = _e())),
        r & 4 && T0(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ke = (u = Ke) || c), Yt(t, e), (Ke = u)) : Yt(t, e),
        on(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (V = e, c = e.child; c !== null; ) {
            for (f = V = c; V !== null; ) {
              switch (((d = V), (m = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ro(4, d, d.return);
                  break;
                case 1:
                  mi(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == 'function') {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (h) {
                      be(r, n, h);
                    }
                  }
                  break;
                case 5:
                  mi(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    R0(f);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), (V = m)) : R0(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty('display')
                          ? l.display
                          : null),
                      (a.style.display = dy('display', s)));
              } catch (h) {
                be(e, e.return, h);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? '' : f.memoizedProps;
              } catch (h) {
                be(e, e.return, h);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Yt(t, e), on(e), r & 4 && T0(e);
      break;
    case 21:
      break;
    default:
      Yt(t, e), on(e);
  }
}
function on(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (D1(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Vo(i, ''), (r.flags &= -33));
          var o = E0(e);
          Uf(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = E0(e);
          zf(e, a, s);
          break;
        default:
          throw Error(N(161));
      }
    } catch (l) {
      be(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Q3(e, t, n) {
  (V = e), U1(e);
}
function U1(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var i = V,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || ua;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || Ke;
        a = ua;
        var u = Ke;
        if (((ua = s), (Ke = l) && !u))
          for (V = i; V !== null; )
            (s = V),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? O0(i)
                : l !== null
                ? ((l.return = s), (V = l))
                : O0(i);
        for (; o !== null; ) (V = o), U1(o), (o = o.sibling);
        (V = i), (ua = a), (Ke = u);
      }
      A0(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (V = o)) : A0(e);
  }
}
function A0(e) {
  for (; V !== null; ) {
    var t = V;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ke || Jl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ke)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Gt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && h0(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                h0(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && n.focus();
                    break;
                  case 'img':
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Yo(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        Ke || (t.flags & 512 && Ff(t));
      } catch (d) {
        be(t, t.return, d);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function R0(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function O0(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Jl(4, t);
          } catch (l) {
            be(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              be(t, i, l);
            }
          }
          var o = t.return;
          try {
            Ff(t);
          } catch (l) {
            be(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ff(t);
          } catch (l) {
            be(t, s, l);
          }
      }
    } catch (l) {
      be(t, t.return, l);
    }
    if (t === e) {
      V = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (V = a);
      break;
    }
    V = t.return;
  }
}
var K3 = Math.ceil,
  hl = zn.ReactCurrentDispatcher,
  ip = zn.ReactCurrentOwner,
  jt = zn.ReactCurrentBatchConfig,
  ee = 0,
  De = null,
  Ae = null,
  He = 0,
  yt = 0,
  gi = dr(0),
  Ie = 0,
  rs = null,
  Fr = 0,
  eu = 0,
  op = 0,
  Oo = null,
  at = null,
  sp = 0,
  Li = 1 / 0,
  Sn = null,
  ml = !1,
  Vf = null,
  or = null,
  ca = !1,
  qn = null,
  gl = 0,
  $o = 0,
  Hf = null,
  La = -1,
  Na = 0;
function et() {
  return ee & 6 ? _e() : La !== -1 ? La : (La = _e());
}
function sr(e) {
  return e.mode & 1
    ? ee & 2 && He !== 0
      ? He & -He
      : O3.transition !== null
      ? (Na === 0 && (Na = _y()), Na)
      : ((e = se),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Oy(e.type))),
        e)
    : 1;
}
function tn(e, t, n, r) {
  if (50 < $o) throw (($o = 0), (Hf = null), Error(N(185)));
  Ts(e, n, r),
    (!(ee & 2) || e !== De) &&
      (e === De && (!(ee & 2) && (eu |= n), Ie === 4 && Qn(e, He)),
      dt(e, r),
      n === 1 && ee === 0 && !(t.mode & 1) && ((Li = _e() + 500), Xl && pr()));
}
function dt(e, t) {
  var n = e.callbackNode;
  Ow(e, t);
  var r = Ja(e, e === De ? He : 0);
  if (r === 0)
    n !== null && Uh(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Uh(n), t === 1))
      e.tag === 0 ? R3($0.bind(null, e)) : qy($0.bind(null, e)),
        M3(function () {
          !(ee & 6) && pr();
        }),
        (n = null);
    else {
      switch (Py(r)) {
        case 1:
          n = Od;
          break;
        case 4:
          n = Cy;
          break;
        case 16:
          n = Za;
          break;
        case 536870912:
          n = by;
          break;
        default:
          n = Za;
      }
      n = K1(n, V1.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function V1(e, t) {
  if (((La = -1), (Na = 0), ee & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (Ci() && e.callbackNode !== n) return null;
  var r = Ja(e, e === De ? He : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = yl(e, r);
  else {
    t = r;
    var i = ee;
    ee |= 2;
    var o = B1();
    (De !== e || He !== t) && ((Sn = null), (Li = _e() + 500), Or(e, t));
    do
      try {
        Z3();
        break;
      } catch (a) {
        H1(e, a);
      }
    while (!0);
    Wd(),
      (hl.current = o),
      (ee = i),
      Ae !== null ? (t = 0) : ((De = null), (He = 0), (t = Ie));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = gf(e)), i !== 0 && ((r = i), (t = Bf(e, i)))), t === 1)
    )
      throw ((n = rs), Or(e, 0), Qn(e, r), dt(e, _e()), n);
    if (t === 6) Qn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !X3(i) &&
          ((t = yl(e, r)),
          t === 2 && ((o = gf(e)), o !== 0 && ((r = o), (t = Bf(e, o)))),
          t === 1))
      )
        throw ((n = rs), Or(e, 0), Qn(e, r), dt(e, _e()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          kr(e, at, Sn);
          break;
        case 3:
          if (
            (Qn(e, r), (r & 130023424) === r && ((t = sp + 500 - _e()), 10 < t))
          ) {
            if (Ja(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              et(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = bf(kr.bind(null, e, at, Sn), t);
            break;
          }
          kr(e, at, Sn);
          break;
        case 4:
          if ((Qn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - en(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = _e() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * K3(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = bf(kr.bind(null, e, at, Sn), r);
            break;
          }
          kr(e, at, Sn);
          break;
        case 5:
          kr(e, at, Sn);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return dt(e, _e()), e.callbackNode === n ? V1.bind(null, e) : null;
}
function Bf(e, t) {
  var n = Oo;
  return (
    e.current.memoizedState.isDehydrated && (Or(e, t).flags |= 256),
    (e = yl(e, t)),
    e !== 2 && ((t = at), (at = n), t !== null && Wf(t)),
    e
  );
}
function Wf(e) {
  at === null ? (at = e) : at.push.apply(at, e);
}
function X3(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!rn(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Qn(e, t) {
  for (
    t &= ~op,
      t &= ~eu,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - en(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function $0(e) {
  if (ee & 6) throw Error(N(327));
  Ci();
  var t = Ja(e, 0);
  if (!(t & 1)) return dt(e, _e()), null;
  var n = yl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = gf(e);
    r !== 0 && ((t = r), (n = Bf(e, r)));
  }
  if (n === 1) throw ((n = rs), Or(e, 0), Qn(e, t), dt(e, _e()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    kr(e, at, Sn),
    dt(e, _e()),
    null
  );
}
function ap(e, t) {
  var n = ee;
  ee |= 1;
  try {
    return e(t);
  } finally {
    (ee = n), ee === 0 && ((Li = _e() + 500), Xl && pr());
  }
}
function zr(e) {
  qn !== null && qn.tag === 0 && !(ee & 6) && Ci();
  var t = ee;
  ee |= 1;
  var n = jt.transition,
    r = se;
  try {
    if (((jt.transition = null), (se = 1), e)) return e();
  } finally {
    (se = r), (jt.transition = n), (ee = t), !(ee & 6) && pr();
  }
}
function lp() {
  (yt = gi.current), he(gi);
}
function Or(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), P3(n)), Ae !== null))
    for (n = Ae.return; n !== null; ) {
      var r = n;
      switch ((Vd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && il();
          break;
        case 3:
          $i(), he(ct), he(Xe), qd();
          break;
        case 5:
          Xd(r);
          break;
        case 4:
          $i();
          break;
        case 13:
          he(ve);
          break;
        case 19:
          he(ve);
          break;
        case 10:
          Yd(r.type._context);
          break;
        case 22:
        case 23:
          lp();
      }
      n = n.return;
    }
  if (
    ((De = e),
    (Ae = e = ar(e.current, null)),
    (He = yt = t),
    (Ie = 0),
    (rs = null),
    (op = eu = Fr = 0),
    (at = Oo = null),
    Pr !== null)
  ) {
    for (t = 0; t < Pr.length; t++)
      if (((n = Pr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Pr = null;
  }
  return e;
}
function H1(e, t) {
  do {
    var n = Ae;
    try {
      if ((Wd(), (Oa.current = pl), dl)) {
        for (var r = xe.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        dl = !1;
      }
      if (
        ((Dr = 0),
        (Ne = Oe = xe = null),
        (Ao = !1),
        (es = 0),
        (ip.current = null),
        n === null || n.return === null)
      ) {
        (Ie = 1), (rs = t), (Ae = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = He),
          (a.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var m = w0(s);
          if (m !== null) {
            (m.flags &= -257),
              S0(m, s, a, o, t),
              m.mode & 1 && x0(o, u, t),
              (t = m),
              (l = u);
            var y = t.updateQueue;
            if (y === null) {
              var h = new Set();
              h.add(l), (t.updateQueue = h);
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              x0(o, u, t), up();
              break e;
            }
            l = Error(N(426));
          }
        } else if (ge && a.mode & 1) {
          var x = w0(s);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              S0(x, s, a, o, t),
              Hd(Ii(l, a));
            break e;
          }
        }
        (o = l = Ii(l, a)),
          Ie !== 4 && (Ie = 2),
          Oo === null ? (Oo = [o]) : Oo.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = P1(o, l, t);
              p0(o, p);
              break e;
            case 1:
              a = l;
              var g = o.type,
                v = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof g.getDerivedStateFromError == 'function' ||
                  (v !== null &&
                    typeof v.componentDidCatch == 'function' &&
                    (or === null || !or.has(v))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = M1(o, a, t);
                p0(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Y1(n);
    } catch (k) {
      (t = k), Ae === n && n !== null && (Ae = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function B1() {
  var e = hl.current;
  return (hl.current = pl), e === null ? pl : e;
}
function up() {
  (Ie === 0 || Ie === 3 || Ie === 2) && (Ie = 4),
    De === null || (!(Fr & 268435455) && !(eu & 268435455)) || Qn(De, He);
}
function yl(e, t) {
  var n = ee;
  ee |= 2;
  var r = B1();
  (De !== e || He !== t) && ((Sn = null), Or(e, t));
  do
    try {
      q3();
      break;
    } catch (i) {
      H1(e, i);
    }
  while (!0);
  if ((Wd(), (ee = n), (hl.current = r), Ae !== null)) throw Error(N(261));
  return (De = null), (He = 0), Ie;
}
function q3() {
  for (; Ae !== null; ) W1(Ae);
}
function Z3() {
  for (; Ae !== null && !Cw(); ) W1(Ae);
}
function W1(e) {
  var t = Q1(e.alternate, e, yt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Y1(e) : (Ae = t),
    (ip.current = null);
}
function Y1(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = W3(n, t)), n !== null)) {
        (n.flags &= 32767), (Ae = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ie = 6), (Ae = null);
        return;
      }
    } else if (((n = B3(n, t, yt)), n !== null)) {
      Ae = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ae = t;
      return;
    }
    Ae = t = e;
  } while (t !== null);
  Ie === 0 && (Ie = 5);
}
function kr(e, t, n) {
  var r = se,
    i = jt.transition;
  try {
    (jt.transition = null), (se = 1), J3(e, t, n, r);
  } finally {
    (jt.transition = i), (se = r);
  }
  return null;
}
function J3(e, t, n, r) {
  do Ci();
  while (qn !== null);
  if (ee & 6) throw Error(N(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    ($w(e, o),
    e === De && ((Ae = De = null), (He = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ca ||
      ((ca = !0),
      K1(Za, function () {
        return Ci(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = jt.transition), (jt.transition = null);
    var s = se;
    se = 1;
    var a = ee;
    (ee |= 4),
      (ip.current = null),
      G3(e, n),
      z1(n, e),
      x3(kf),
      (el = !!Sf),
      (kf = Sf = null),
      (e.current = n),
      Q3(n),
      bw(),
      (ee = a),
      (se = s),
      (jt.transition = o);
  } else e.current = n;
  if (
    (ca && ((ca = !1), (qn = e), (gl = i)),
    (o = e.pendingLanes),
    o === 0 && (or = null),
    Mw(n.stateNode),
    dt(e, _e()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ml) throw ((ml = !1), (e = Vf), (Vf = null), e);
  return (
    gl & 1 && e.tag !== 0 && Ci(),
    (o = e.pendingLanes),
    o & 1 ? (e === Hf ? $o++ : (($o = 0), (Hf = e))) : ($o = 0),
    pr(),
    null
  );
}
function Ci() {
  if (qn !== null) {
    var e = Py(gl),
      t = jt.transition,
      n = se;
    try {
      if (((jt.transition = null), (se = 16 > e ? 16 : e), qn === null))
        var r = !1;
      else {
        if (((e = qn), (qn = null), (gl = 0), ee & 6)) throw Error(N(331));
        var i = ee;
        for (ee |= 4, V = e.current; V !== null; ) {
          var o = V,
            s = o.child;
          if (V.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (V = u; V !== null; ) {
                  var c = V;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ro(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (V = f);
                  else
                    for (; V !== null; ) {
                      c = V;
                      var d = c.sibling,
                        m = c.return;
                      if ((j1(c), c === u)) {
                        V = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = m), (V = d);
                        break;
                      }
                      V = m;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var h = y.child;
                if (h !== null) {
                  y.child = null;
                  do {
                    var x = h.sibling;
                    (h.sibling = null), (h = x);
                  } while (h !== null);
                }
              }
              V = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (V = s);
          else
            e: for (; V !== null; ) {
              if (((o = V), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ro(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (V = p);
                break e;
              }
              V = o.return;
            }
        }
        var g = e.current;
        for (V = g; V !== null; ) {
          s = V;
          var v = s.child;
          if (s.subtreeFlags & 2064 && v !== null) (v.return = s), (V = v);
          else
            e: for (s = g; V !== null; ) {
              if (((a = V), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jl(9, a);
                  }
                } catch (k) {
                  be(a, a.return, k);
                }
              if (a === s) {
                V = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (V = w);
                break e;
              }
              V = a.return;
            }
        }
        if (
          ((ee = i), pr(), dn && typeof dn.onPostCommitFiberRoot == 'function')
        )
          try {
            dn.onPostCommitFiberRoot(Wl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (se = n), (jt.transition = t);
    }
  }
  return !1;
}
function I0(e, t, n) {
  (t = Ii(n, t)),
    (t = P1(e, t, 1)),
    (e = ir(e, t, 1)),
    (t = et()),
    e !== null && (Ts(e, 1, t), dt(e, t));
}
function be(e, t, n) {
  if (e.tag === 3) I0(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        I0(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (or === null || !or.has(r)))
        ) {
          (e = Ii(n, e)),
            (e = M1(t, e, 1)),
            (t = ir(t, e, 1)),
            (e = et()),
            t !== null && (Ts(t, 1, e), dt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function eS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = et()),
    (e.pingedLanes |= e.suspendedLanes & n),
    De === e &&
      (He & n) === n &&
      (Ie === 4 || (Ie === 3 && (He & 130023424) === He && 500 > _e() - sp)
        ? Or(e, 0)
        : (op |= n)),
    dt(e, t);
}
function G1(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ea), (ea <<= 1), !(ea & 130023424) && (ea = 4194304))
      : (t = 1));
  var n = et();
  (e = On(e, t)), e !== null && (Ts(e, t, n), dt(e, n));
}
function tS(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), G1(e, n);
}
function nS(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), G1(e, n);
}
var Q1;
Q1 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ct.current) lt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (lt = !1), H3(e, t, n);
      lt = !!(e.flags & 131072);
    }
  else (lt = !1), ge && t.flags & 1048576 && Zy(t, al, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ia(e, t), (e = t.pendingProps);
      var i = Ai(t, Xe.current);
      ki(t, n), (i = Jd(null, t, r, e, i, n));
      var o = ep();
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ft(r) ? ((o = !0), ol(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Qd(t),
            (i.updater = Zl),
            (t.stateNode = i),
            (i._reactInternals = t),
            Rf(t, r, e, n),
            (t = If(null, t, r, !0, o, n)))
          : ((t.tag = 0), ge && o && Ud(t), Ze(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ia(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = iS(r)),
          (e = Gt(r, e)),
          i)
        ) {
          case 0:
            t = $f(null, t, r, e, n);
            break e;
          case 1:
            t = b0(null, t, r, e, n);
            break e;
          case 11:
            t = k0(null, t, r, e, n);
            break e;
          case 14:
            t = C0(null, t, r, Gt(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Gt(r, i)),
        $f(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Gt(r, i)),
        b0(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((R1(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          i1(e, t),
          cl(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Ii(Error(N(423)), t)), (t = _0(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Ii(Error(N(424)), t)), (t = _0(e, t, r, n, i));
            break e;
          } else
            for (
              xt = rr(t.stateNode.containerInfo.firstChild),
                wt = t,
                ge = !0,
                Xt = null,
                n = n1(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ri(), r === i)) {
            t = $n(e, t, n);
            break e;
          }
          Ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        o1(t),
        e === null && Ef(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Cf(r, i) ? (s = null) : o !== null && Cf(r, o) && (t.flags |= 32),
        A1(e, t),
        Ze(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Ef(t), null;
    case 13:
      return O1(e, t, n);
    case 4:
      return (
        Kd(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Oi(t, null, r, n)) : Ze(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Gt(r, i)),
        k0(e, t, r, i, n)
      );
    case 7:
      return Ze(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          de(ll, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (rn(o.value, s)) {
            if (o.children === i.children && !ct.current) {
              t = $n(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = En(-1, n & -n)), (l.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      Tf(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(N(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Tf(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        Ze(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        ki(t, n),
        (i = Ft(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ze(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Gt(r, t.pendingProps)),
        (i = Gt(r.type, i)),
        C0(e, t, r, i, n)
      );
    case 15:
      return E1(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Gt(r, i)),
        Ia(e, t),
        (t.tag = 1),
        ft(r) ? ((e = !0), ol(t)) : (e = !1),
        ki(t, n),
        _1(t, r, i),
        Rf(t, r, i, n),
        If(null, t, r, !0, e, n)
      );
    case 19:
      return $1(e, t, n);
    case 22:
      return T1(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function K1(e, t) {
  return ky(e, t);
}
function rS(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function It(e, t, n, r) {
  return new rS(e, t, n, r);
}
function cp(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function iS(e) {
  if (typeof e == 'function') return cp(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Td)) return 11;
    if (e === Ad) return 14;
  }
  return 2;
}
function ar(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = It(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ja(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == 'function')) cp(e) && (s = 1);
  else if (typeof e == 'string') s = 5;
  else
    e: switch (e) {
      case si:
        return $r(n.children, i, o, t);
      case Ed:
        (s = 8), (i |= 8);
        break;
      case ef:
        return (
          (e = It(12, n, t, i | 2)), (e.elementType = ef), (e.lanes = o), e
        );
      case tf:
        return (e = It(13, n, t, i)), (e.elementType = tf), (e.lanes = o), e;
      case nf:
        return (e = It(19, n, t, i)), (e.elementType = nf), (e.lanes = o), e;
      case oy:
        return tu(n, i, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case ry:
              s = 10;
              break e;
            case iy:
              s = 9;
              break e;
            case Td:
              s = 11;
              break e;
            case Ad:
              s = 14;
              break e;
            case Wn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = It(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function $r(e, t, n, r) {
  return (e = It(7, e, r, t)), (e.lanes = n), e;
}
function tu(e, t, n, r) {
  return (
    (e = It(22, e, r, t)),
    (e.elementType = oy),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Pc(e, t, n) {
  return (e = It(6, e, null, t)), (e.lanes = n), e;
}
function Mc(e, t, n) {
  return (
    (t = It(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function oS(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ac(0)),
    (this.expirationTimes = ac(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ac(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function fp(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new oS(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = It(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Qd(o),
    e
  );
}
function sS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: oi,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function X1(e) {
  if (!e) return cr;
  e = e._reactInternals;
  e: {
    if (Wr(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ft(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ft(n)) return Xy(e, n, t);
  }
  return t;
}
function q1(e, t, n, r, i, o, s, a, l) {
  return (
    (e = fp(n, r, !0, e, i, o, s, a, l)),
    (e.context = X1(null)),
    (n = e.current),
    (r = et()),
    (i = sr(n)),
    (o = En(r, i)),
    (o.callback = t ?? null),
    ir(n, o, i),
    (e.current.lanes = i),
    Ts(e, i, r),
    dt(e, r),
    e
  );
}
function nu(e, t, n, r) {
  var i = t.current,
    o = et(),
    s = sr(i);
  return (
    (n = X1(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = En(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ir(i, t, s)),
    e !== null && (tn(e, i, s, o), Ra(e, i, s)),
    s
  );
}
function vl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function L0(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function dp(e, t) {
  L0(e, t), (e = e.alternate) && L0(e, t);
}
function aS() {
  return null;
}
var Z1 =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function pp(e) {
  this._internalRoot = e;
}
ru.prototype.render = pp.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  nu(e, t, null, null);
};
ru.prototype.unmount = pp.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    zr(function () {
      nu(null, e, null, null);
    }),
      (t[Rn] = null);
  }
};
function ru(e) {
  this._internalRoot = e;
}
ru.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ty();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Gn.length && t !== 0 && t < Gn[n].priority; n++);
    Gn.splice(n, 0, e), n === 0 && Ry(e);
  }
};
function hp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function iu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function N0() {}
function lS(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var u = vl(s);
        o.call(u);
      };
    }
    var s = q1(t, r, e, 0, null, !1, !1, '', N0);
    return (
      (e._reactRootContainer = s),
      (e[Rn] = s.current),
      Ko(e.nodeType === 8 ? e.parentNode : e),
      zr(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var u = vl(l);
      a.call(u);
    };
  }
  var l = fp(e, 0, !1, null, null, !1, !1, '', N0);
  return (
    (e._reactRootContainer = l),
    (e[Rn] = l.current),
    Ko(e.nodeType === 8 ? e.parentNode : e),
    zr(function () {
      nu(t, l, n, r);
    }),
    l
  );
}
function ou(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == 'function') {
      var a = i;
      i = function () {
        var l = vl(s);
        a.call(l);
      };
    }
    nu(t, s, e, i);
  } else s = lS(n, t, e, i, r);
  return vl(s);
}
My = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ko(t.pendingLanes);
        n !== 0 &&
          ($d(t, n | 1), dt(t, _e()), !(ee & 6) && ((Li = _e() + 500), pr()));
      }
      break;
    case 13:
      zr(function () {
        var r = On(e, 1);
        if (r !== null) {
          var i = et();
          tn(r, e, 1, i);
        }
      }),
        dp(e, 1);
  }
};
Id = function (e) {
  if (e.tag === 13) {
    var t = On(e, 134217728);
    if (t !== null) {
      var n = et();
      tn(t, e, 134217728, n);
    }
    dp(e, 134217728);
  }
};
Ey = function (e) {
  if (e.tag === 13) {
    var t = sr(e),
      n = On(e, t);
    if (n !== null) {
      var r = et();
      tn(n, e, t, r);
    }
    dp(e, t);
  }
};
Ty = function () {
  return se;
};
Ay = function (e, t) {
  var n = se;
  try {
    return (se = e), t();
  } finally {
    se = n;
  }
};
pf = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((sf(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Kl(r);
            if (!i) throw Error(N(90));
            ay(r), sf(r, i);
          }
        }
      }
      break;
    case 'textarea':
      uy(e, n);
      break;
    case 'select':
      (t = n.value), t != null && vi(e, !!n.multiple, t, !1);
  }
};
gy = ap;
yy = zr;
var uS = { usingClientEntryPoint: !1, Events: [Rs, ci, Kl, hy, my, ap] },
  lo = {
    findFiberByHostInstance: _r,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  cS = {
    bundleType: lo.bundleType,
    version: lo.version,
    rendererPackageName: lo.rendererPackageName,
    rendererConfig: lo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: zn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = wy(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: lo.findFiberByHostInstance || aS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var fa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!fa.isDisabled && fa.supportsFiber)
    try {
      (Wl = fa.inject(cS)), (dn = fa);
    } catch {}
}
_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uS;
_t.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!hp(t)) throw Error(N(200));
  return sS(e, t, null, n);
};
_t.createRoot = function (e, t) {
  if (!hp(e)) throw Error(N(299));
  var n = !1,
    r = '',
    i = Z1;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = fp(e, 1, !1, null, null, n, !1, r, i)),
    (e[Rn] = t.current),
    Ko(e.nodeType === 8 ? e.parentNode : e),
    new pp(t)
  );
};
_t.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(N(188))
      : ((e = Object.keys(e).join(',')), Error(N(268, e)));
  return (e = wy(t)), (e = e === null ? null : e.stateNode), e;
};
_t.flushSync = function (e) {
  return zr(e);
};
_t.hydrate = function (e, t, n) {
  if (!iu(t)) throw Error(N(200));
  return ou(null, e, t, !0, n);
};
_t.hydrateRoot = function (e, t, n) {
  if (!hp(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = '',
    s = Z1;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = q1(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[Rn] = t.current),
    Ko(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new ru(t);
};
_t.render = function (e, t, n) {
  if (!iu(t)) throw Error(N(200));
  return ou(null, e, t, !1, n);
};
_t.unmountComponentAtNode = function (e) {
  if (!iu(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (zr(function () {
        ou(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Rn] = null);
        });
      }),
      !0)
    : !1;
};
_t.unstable_batchedUpdates = ap;
_t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!iu(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return ou(e, t, n, !1, r);
};
_t.version = '18.3.1-next-f1338f8080-20240426';
function J1() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(J1);
    } catch (e) {
      console.error(e);
    }
}
J1(), (Jg.exports = _t);
var mp = Jg.exports,
  j0 = mp;
(Zc.createRoot = j0.createRoot), (Zc.hydrateRoot = j0.hydrateRoot);
const fS = '_container_1snv6_1',
  dS = '_landing_1snv6_19',
  pS = '_header_1snv6_36',
  hS = '_subheader_1snv6_48',
  mS = '_buttons_1snv6_65',
  gS = '_button_1snv6_65',
  yS = '_stats_1snv6_110',
  vS = '_stats_header_1snv6_126',
  xS = '_accent_number_1snv6_132',
  wS = '_chart_1snv6_141',
  SS = '_chart_header_1snv6_152',
  rt = {
    container: fS,
    landing: dS,
    header: pS,
    subheader: hS,
    buttons: mS,
    button: gS,
    stats: yS,
    stats_header: vS,
    accent_number: xS,
    chart: wS,
    chart_header: SS,
  },
  kS = './static/assets/cool-Bo-Drqd6.png',
  CS =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%209.00005L10.2%2013.65C11.2667%2014.45%2012.7333%2014.45%2013.8%2013.65L20%209'%20stroke='%23fafafa'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M3%209.17681C3%208.45047%203.39378%207.78123%204.02871%207.42849L11.0287%203.5396C11.6328%203.20402%2012.3672%203.20402%2012.9713%203.5396L19.9713%207.42849C20.6062%207.78123%2021%208.45047%2021%209.17681V17C21%2018.1046%2020.1046%2019%2019%2019H5C3.89543%2019%203%2018.1046%203%2017V9.17681Z'%20stroke='%23fafafa'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e";
var gp = {},
  xl = function () {
    return (
      (xl =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }),
      xl.apply(this, arguments)
    );
  },
  bS = (function () {
    function e(t, n, r) {
      var i = this;
      (this.endVal = n),
        (this.options = r),
        (this.version = '2.8.0'),
        (this.defaults = {
          startVal: 0,
          decimalPlaces: 0,
          duration: 2,
          useEasing: !0,
          useGrouping: !0,
          useIndianSeparators: !1,
          smartEasingThreshold: 999,
          smartEasingAmount: 333,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: '',
          enableScrollSpy: !1,
          scrollSpyDelay: 200,
          scrollSpyOnce: !1,
        }),
        (this.finalEndVal = null),
        (this.useEasing = !0),
        (this.countDown = !1),
        (this.error = ''),
        (this.startVal = 0),
        (this.paused = !0),
        (this.once = !1),
        (this.count = function (o) {
          i.startTime || (i.startTime = o);
          var s = o - i.startTime;
          (i.remaining = i.duration - s),
            i.useEasing
              ? i.countDown
                ? (i.frameVal =
                    i.startVal -
                    i.easingFn(s, 0, i.startVal - i.endVal, i.duration))
                : (i.frameVal = i.easingFn(
                    s,
                    i.startVal,
                    i.endVal - i.startVal,
                    i.duration
                  ))
              : (i.frameVal =
                  i.startVal + (i.endVal - i.startVal) * (s / i.duration));
          var a = i.countDown ? i.frameVal < i.endVal : i.frameVal > i.endVal;
          (i.frameVal = a ? i.endVal : i.frameVal),
            (i.frameVal = Number(i.frameVal.toFixed(i.options.decimalPlaces))),
            i.printValue(i.frameVal),
            s < i.duration
              ? (i.rAF = requestAnimationFrame(i.count))
              : i.finalEndVal !== null
              ? i.update(i.finalEndVal)
              : i.options.onCompleteCallback && i.options.onCompleteCallback();
        }),
        (this.formatNumber = function (o) {
          var s,
            a,
            l,
            u,
            c = o < 0 ? '-' : '';
          s = Math.abs(o).toFixed(i.options.decimalPlaces);
          var f = (s += '').split('.');
          if (
            ((a = f[0]),
            (l = f.length > 1 ? i.options.decimal + f[1] : ''),
            i.options.useGrouping)
          ) {
            u = '';
            for (var d = 3, m = 0, y = 0, h = a.length; y < h; ++y)
              i.options.useIndianSeparators && y === 4 && ((d = 2), (m = 1)),
                y !== 0 && m % d == 0 && (u = i.options.separator + u),
                m++,
                (u = a[h - y - 1] + u);
            a = u;
          }
          return (
            i.options.numerals &&
              i.options.numerals.length &&
              ((a = a.replace(/[0-9]/g, function (x) {
                return i.options.numerals[+x];
              })),
              (l = l.replace(/[0-9]/g, function (x) {
                return i.options.numerals[+x];
              }))),
            c + i.options.prefix + a + l + i.options.suffix
          );
        }),
        (this.easeOutExpo = function (o, s, a, l) {
          return (a * (1 - Math.pow(2, (-10 * o) / l)) * 1024) / 1023 + s;
        }),
        (this.options = xl(xl({}, this.defaults), r)),
        (this.formattingFn = this.options.formattingFn
          ? this.options.formattingFn
          : this.formatNumber),
        (this.easingFn = this.options.easingFn
          ? this.options.easingFn
          : this.easeOutExpo),
        (this.startVal = this.validateValue(this.options.startVal)),
        (this.frameVal = this.startVal),
        (this.endVal = this.validateValue(n)),
        (this.options.decimalPlaces = Math.max(this.options.decimalPlaces)),
        this.resetDuration(),
        (this.options.separator = String(this.options.separator)),
        (this.useEasing = this.options.useEasing),
        this.options.separator === '' && (this.options.useGrouping = !1),
        (this.el = typeof t == 'string' ? document.getElementById(t) : t),
        this.el
          ? this.printValue(this.startVal)
          : (this.error = '[CountUp] target is null or undefined'),
        typeof window < 'u' &&
          this.options.enableScrollSpy &&
          (this.error
            ? console.error(this.error, t)
            : ((window.onScrollFns = window.onScrollFns || []),
              window.onScrollFns.push(function () {
                return i.handleScroll(i);
              }),
              (window.onscroll = function () {
                window.onScrollFns.forEach(function (o) {
                  return o();
                });
              }),
              this.handleScroll(this)));
    }
    return (
      (e.prototype.handleScroll = function (t) {
        if (t && window && !t.once) {
          var n = window.innerHeight + window.scrollY,
            r = t.el.getBoundingClientRect(),
            i = r.top + window.pageYOffset,
            o = r.top + r.height + window.pageYOffset;
          o < n && o > window.scrollY && t.paused
            ? ((t.paused = !1),
              setTimeout(function () {
                return t.start();
              }, t.options.scrollSpyDelay),
              t.options.scrollSpyOnce && (t.once = !0))
            : (window.scrollY > o || i > n) && !t.paused && t.reset();
        }
      }),
      (e.prototype.determineDirectionAndSmartEasing = function () {
        var t = this.finalEndVal ? this.finalEndVal : this.endVal;
        this.countDown = this.startVal > t;
        var n = t - this.startVal;
        if (
          Math.abs(n) > this.options.smartEasingThreshold &&
          this.options.useEasing
        ) {
          this.finalEndVal = t;
          var r = this.countDown ? 1 : -1;
          (this.endVal = t + r * this.options.smartEasingAmount),
            (this.duration = this.duration / 2);
        } else (this.endVal = t), (this.finalEndVal = null);
        this.finalEndVal !== null
          ? (this.useEasing = !1)
          : (this.useEasing = this.options.useEasing);
      }),
      (e.prototype.start = function (t) {
        this.error ||
          (this.options.onStartCallback && this.options.onStartCallback(),
          t && (this.options.onCompleteCallback = t),
          this.duration > 0
            ? (this.determineDirectionAndSmartEasing(),
              (this.paused = !1),
              (this.rAF = requestAnimationFrame(this.count)))
            : this.printValue(this.endVal));
      }),
      (e.prototype.pauseResume = function () {
        this.paused
          ? ((this.startTime = null),
            (this.duration = this.remaining),
            (this.startVal = this.frameVal),
            this.determineDirectionAndSmartEasing(),
            (this.rAF = requestAnimationFrame(this.count)))
          : cancelAnimationFrame(this.rAF),
          (this.paused = !this.paused);
      }),
      (e.prototype.reset = function () {
        cancelAnimationFrame(this.rAF),
          (this.paused = !0),
          this.resetDuration(),
          (this.startVal = this.validateValue(this.options.startVal)),
          (this.frameVal = this.startVal),
          this.printValue(this.startVal);
      }),
      (e.prototype.update = function (t) {
        cancelAnimationFrame(this.rAF),
          (this.startTime = null),
          (this.endVal = this.validateValue(t)),
          this.endVal !== this.frameVal &&
            ((this.startVal = this.frameVal),
            this.finalEndVal == null && this.resetDuration(),
            (this.finalEndVal = null),
            this.determineDirectionAndSmartEasing(),
            (this.rAF = requestAnimationFrame(this.count)));
      }),
      (e.prototype.printValue = function (t) {
        var n;
        if (this.el) {
          var r = this.formattingFn(t);
          !((n = this.options.plugin) === null || n === void 0) && n.render
            ? this.options.plugin.render(this.el, r)
            : this.el.tagName === 'INPUT'
            ? (this.el.value = r)
            : this.el.tagName === 'text' || this.el.tagName === 'tspan'
            ? (this.el.textContent = r)
            : (this.el.innerHTML = r);
        }
      }),
      (e.prototype.ensureNumber = function (t) {
        return typeof t == 'number' && !isNaN(t);
      }),
      (e.prototype.validateValue = function (t) {
        var n = Number(t);
        return this.ensureNumber(n)
          ? n
          : ((this.error = '[CountUp] invalid start or end value: '.concat(t)),
            null);
      }),
      (e.prototype.resetDuration = function () {
        (this.startTime = null),
          (this.duration = 1e3 * Number(this.options.duration)),
          (this.remaining = this.duration);
      }),
      e
    );
  })();
const _S = Object.freeze(
    Object.defineProperty(
      { __proto__: null, CountUp: bS },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  PS = Fn(_S);
Object.defineProperty(gp, '__esModule', { value: !0 });
var je = P,
  MS = PS;
function ES(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (n != null) {
    var r,
      i,
      o,
      s,
      a = [],
      l = !0,
      u = !1;
    try {
      if (((o = (n = n.call(e)).next), t !== 0))
        for (
          ;
          !(l = (r = o.call(n)).done) && (a.push(r.value), a.length !== t);
          l = !0
        );
    } catch (c) {
      (u = !0), (i = c);
    } finally {
      try {
        if (!l && n.return != null && ((s = n.return()), Object(s) !== s))
          return;
      } finally {
        if (u) throw i;
      }
    }
    return a;
  }
}
function D0(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function wl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? D0(Object(n), !0).forEach(function (r) {
          RS(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : D0(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function TS(e, t) {
  if (typeof e != 'object' || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || 'default');
    if (typeof r != 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function AS(e) {
  var t = TS(e, 'string');
  return typeof t == 'symbol' ? t : String(t);
}
function RS(e, t, n) {
  return (
    (t = AS(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Yf() {
  return (
    (Yf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Yf.apply(this, arguments)
  );
}
function OS(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function ev(e, t) {
  if (e == null) return {};
  var n = OS(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function $S(e, t) {
  return IS(e) || ES(e, t) || LS(e, t) || NS();
}
function IS(e) {
  if (Array.isArray(e)) return e;
}
function LS(e, t) {
  if (e) {
    if (typeof e == 'string') return F0(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return F0(e, t);
  }
}
function F0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function NS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var jS =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u'
    ? je.useLayoutEffect
    : je.useEffect;
function Qt(e) {
  var t = je.useRef(e);
  return (
    jS(function () {
      t.current = e;
    }),
    je.useCallback(function () {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return t.current.apply(void 0, r);
    }, [])
  );
}
var DS = function (t, n) {
    var r = n.decimal,
      i = n.decimals,
      o = n.duration,
      s = n.easingFn,
      a = n.end,
      l = n.formattingFn,
      u = n.numerals,
      c = n.prefix,
      f = n.separator,
      d = n.start,
      m = n.suffix,
      y = n.useEasing,
      h = n.useGrouping,
      x = n.useIndianSeparators,
      p = n.enableScrollSpy,
      g = n.scrollSpyDelay,
      v = n.scrollSpyOnce,
      w = n.plugin;
    return new MS.CountUp(t, a, {
      startVal: d,
      duration: o,
      decimal: r,
      decimalPlaces: i,
      easingFn: s,
      formattingFn: l,
      numerals: u,
      separator: f,
      prefix: c,
      suffix: m,
      plugin: w,
      useEasing: y,
      useIndianSeparators: x,
      useGrouping: h,
      enableScrollSpy: p,
      scrollSpyDelay: g,
      scrollSpyOnce: v,
    });
  },
  FS = [
    'ref',
    'startOnMount',
    'enableReinitialize',
    'delay',
    'onEnd',
    'onStart',
    'onPauseResume',
    'onReset',
    'onUpdate',
  ],
  zS = {
    decimal: '.',
    separator: ',',
    delay: null,
    prefix: '',
    suffix: '',
    duration: 2,
    start: 0,
    decimals: 0,
    startOnMount: !0,
    enableReinitialize: !0,
    useEasing: !0,
    useGrouping: !0,
    useIndianSeparators: !1,
  },
  tv = function (t) {
    var n = Object.fromEntries(
        Object.entries(t).filter(function (A) {
          var T = $S(A, 2),
            E = T[1];
          return E !== void 0;
        })
      ),
      r = je.useMemo(
        function () {
          return wl(wl({}, zS), n);
        },
        [t]
      ),
      i = r.ref,
      o = r.startOnMount,
      s = r.enableReinitialize,
      a = r.delay,
      l = r.onEnd,
      u = r.onStart,
      c = r.onPauseResume,
      f = r.onReset,
      d = r.onUpdate,
      m = ev(r, FS),
      y = je.useRef(),
      h = je.useRef(),
      x = je.useRef(!1),
      p = Qt(function () {
        return DS(typeof i == 'string' ? i : i.current, m);
      }),
      g = Qt(function (A) {
        var T = y.current;
        if (T && !A) return T;
        var E = p();
        return (y.current = E), E;
      }),
      v = Qt(function () {
        var A = function () {
          return g(!0).start(function () {
            l == null || l({ pauseResume: w, reset: k, start: C, update: S });
          });
        };
        a && a > 0 ? (h.current = setTimeout(A, a * 1e3)) : A(),
          u == null || u({ pauseResume: w, reset: k, update: S });
      }),
      w = Qt(function () {
        g().pauseResume(), c == null || c({ reset: k, start: C, update: S });
      }),
      k = Qt(function () {
        g().el &&
          (h.current && clearTimeout(h.current),
          g().reset(),
          f == null || f({ pauseResume: w, start: C, update: S }));
      }),
      S = Qt(function (A) {
        g().update(A), d == null || d({ pauseResume: w, reset: k, start: C });
      }),
      C = Qt(function () {
        k(), v();
      }),
      M = Qt(function (A) {
        o && (A && k(), v());
      });
    return (
      je.useEffect(
        function () {
          x.current ? s && M(!0) : ((x.current = !0), M());
        },
        [
          s,
          x,
          M,
          a,
          t.start,
          t.suffix,
          t.prefix,
          t.duration,
          t.separator,
          t.decimals,
          t.decimal,
          t.formattingFn,
        ]
      ),
      je.useEffect(
        function () {
          return function () {
            k();
          };
        },
        [k]
      ),
      { start: C, pauseResume: w, reset: k, update: S, getCountUp: g }
    );
  },
  US = ['className', 'redraw', 'containerProps', 'children', 'style'],
  VS = function (t) {
    var n = t.className,
      r = t.redraw,
      i = t.containerProps,
      o = t.children,
      s = t.style,
      a = ev(t, US),
      l = je.useRef(null),
      u = je.useRef(!1),
      c = tv(
        wl(
          wl({}, a),
          {},
          {
            ref: l,
            startOnMount: typeof o != 'function' || t.delay === 0,
            enableReinitialize: !1,
          }
        )
      ),
      f = c.start,
      d = c.reset,
      m = c.update,
      y = c.pauseResume,
      h = c.getCountUp,
      x = Qt(function () {
        f();
      }),
      p = Qt(function (w) {
        t.preserveValue || d(), m(w);
      }),
      g = Qt(function () {
        if (
          typeof t.children == 'function' &&
          !(l.current instanceof Element)
        ) {
          console.error(
            `Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`
          );
          return;
        }
        h();
      });
    je.useEffect(
      function () {
        g();
      },
      [g]
    ),
      je.useEffect(
        function () {
          u.current && p(t.end);
        },
        [t.end, p]
      );
    var v = r && t;
    return (
      je.useEffect(
        function () {
          r && u.current && x();
        },
        [x, r, v]
      ),
      je.useEffect(
        function () {
          !r && u.current && x();
        },
        [
          x,
          r,
          t.start,
          t.suffix,
          t.prefix,
          t.duration,
          t.separator,
          t.decimals,
          t.decimal,
          t.className,
          t.formattingFn,
        ]
      ),
      je.useEffect(function () {
        u.current = !0;
      }, []),
      typeof o == 'function'
        ? o({
            countUpRef: l,
            start: f,
            reset: d,
            update: m,
            pauseResume: y,
            getCountUp: h,
          })
        : je.createElement(
            'span',
            Yf({ className: n, ref: l, style: s }, i),
            typeof t.start < 'u' ? h().formattingFn(t.start) : ''
          )
    );
  },
  z0 = (gp.default = VS);
gp.useCountUp = tv;
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    _.apply(null, arguments)
  );
}
function ie(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue;
      n[r] = e[r];
    }
  return n;
}
let U0 = 0;
function HS(e) {
  const [t, n] = P.useState(e),
    r = t;
  return (
    P.useEffect(() => {
      t == null && ((U0 += 1), n(`mui-${U0}`));
    }, [t]),
    r
  );
}
const V0 = qc.useId;
function BS(e) {
  return V0 !== void 0 ? V0() : HS(e);
}
const nv = 'DEFAULT_X_AXIS_KEY',
  WS = 'DEFAULT_Y_AXIS_KEY',
  YS = { top: 50, bottom: 50, left: 50, right: 50 },
  GS = (e, t, n) => {
    const r = _({}, YS, n);
    return P.useMemo(
      () => ({
        left: r.left,
        top: r.top,
        right: r.right,
        bottom: r.bottom,
        width: Math.max(0, e - r.left - r.right),
        height: Math.max(0, t - r.top - r.bottom),
      }),
      [e, t, r.top, r.bottom, r.left, r.right]
    );
  },
  su = P.createContext({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 300,
    width: 400,
    chartId: '',
    isPointInside: () => !1,
  }),
  rv = P.createContext({ isInitialized: !1, data: { current: null } });
function QS(e) {
  const { width: t, height: n, margin: r, svgRef: i, children: o } = e,
    s = GS(t, n, r),
    a = BS(),
    l = P.useCallback(
      ({ x: f, y: d }, m) =>
        m && m.closest('[data-drawing-container]')
          ? !0
          : f >= s.left &&
            f <= s.left + s.width &&
            d >= s.top &&
            d <= s.top + s.height,
      [s]
    ),
    u = P.useMemo(
      () => _({ chartId: a ?? '' }, s, { isPointInside: l }),
      [a, s, l]
    ),
    c = P.useMemo(() => ({ isInitialized: !0, data: i }), [i]);
  return b.jsx(rv.Provider, {
    value: c,
    children: b.jsx(su.Provider, { value: u, children: o }),
  });
}
function is(e) {
  let t = 'https://mui.com/production-error/?code=' + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return 'Minified MUI error #' + e + '; visit ' + t + ' for the full message.';
}
const KS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: is },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  yp = '$$material';
function iv(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var XS =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  qS = iv(function (e) {
    return (
      XS.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  ZS = !1;
function JS(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function ek(e) {
  var t = document.createElement('style');
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  );
}
var tk = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (i) {
        var o;
        r.tags.length === 0
          ? r.insertionPoint
            ? (o = r.insertionPoint.nextSibling)
            : r.prepend
            ? (o = r.container.firstChild)
            : (o = r.before)
          : (o = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(i, o),
          r.tags.push(i);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !ZS : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(ek(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = JS(i);
          try {
            o.insertRule(r, o.cssRules.length);
          } catch {}
        } else i.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          var i;
          return (i = r.parentNode) == null ? void 0 : i.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Qe = '-ms-',
  Sl = '-moz-',
  ne = '-webkit-',
  ov = 'comm',
  vp = 'rule',
  xp = 'decl',
  nk = '@import',
  sv = '@keyframes',
  rk = '@layer',
  ik = Math.abs,
  au = String.fromCharCode,
  ok = Object.assign;
function sk(e, t) {
  return Ve(e, 0) ^ 45
    ? (((((((t << 2) ^ Ve(e, 0)) << 2) ^ Ve(e, 1)) << 2) ^ Ve(e, 2)) << 2) ^
        Ve(e, 3)
    : 0;
}
function av(e) {
  return e.trim();
}
function ak(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function re(e, t, n) {
  return e.replace(t, n);
}
function Gf(e, t) {
  return e.indexOf(t);
}
function Ve(e, t) {
  return e.charCodeAt(t) | 0;
}
function os(e, t, n) {
  return e.slice(t, n);
}
function un(e) {
  return e.length;
}
function wp(e) {
  return e.length;
}
function da(e, t) {
  return t.push(e), e;
}
function lk(e, t) {
  return e.map(t).join('');
}
var lu = 1,
  Ni = 1,
  lv = 0,
  mt = 0,
  Te = 0,
  Xi = '';
function uu(e, t, n, r, i, o, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: o,
    line: lu,
    column: Ni,
    length: s,
    return: '',
  };
}
function uo(e, t) {
  return ok(uu('', null, null, '', null, null, 0), e, { length: -e.length }, t);
}
function uk() {
  return Te;
}
function ck() {
  return (
    (Te = mt > 0 ? Ve(Xi, --mt) : 0), Ni--, Te === 10 && ((Ni = 1), lu--), Te
  );
}
function St() {
  return (
    (Te = mt < lv ? Ve(Xi, mt++) : 0), Ni++, Te === 10 && ((Ni = 1), lu++), Te
  );
}
function hn() {
  return Ve(Xi, mt);
}
function Da() {
  return mt;
}
function $s(e, t) {
  return os(Xi, e, t);
}
function ss(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function uv(e) {
  return (lu = Ni = 1), (lv = un((Xi = e))), (mt = 0), [];
}
function cv(e) {
  return (Xi = ''), e;
}
function Fa(e) {
  return av($s(mt - 1, Qf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function fk(e) {
  for (; (Te = hn()) && Te < 33; ) St();
  return ss(e) > 2 || ss(Te) > 3 ? '' : ' ';
}
function dk(e, t) {
  for (
    ;
    --t &&
    St() &&
    !(Te < 48 || Te > 102 || (Te > 57 && Te < 65) || (Te > 70 && Te < 97));

  );
  return $s(e, Da() + (t < 6 && hn() == 32 && St() == 32));
}
function Qf(e) {
  for (; St(); )
    switch (Te) {
      case e:
        return mt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Qf(Te);
        break;
      case 40:
        e === 41 && Qf(e);
        break;
      case 92:
        St();
        break;
    }
  return mt;
}
function pk(e, t) {
  for (; St() && e + Te !== 57; ) if (e + Te === 84 && hn() === 47) break;
  return '/*' + $s(t, mt - 1) + '*' + au(e === 47 ? e : St());
}
function hk(e) {
  for (; !ss(hn()); ) St();
  return $s(e, mt);
}
function mk(e) {
  return cv(za('', null, null, null, [''], (e = uv(e)), 0, [0], e));
}
function za(e, t, n, r, i, o, s, a, l) {
  for (
    var u = 0,
      c = 0,
      f = s,
      d = 0,
      m = 0,
      y = 0,
      h = 1,
      x = 1,
      p = 1,
      g = 0,
      v = '',
      w = i,
      k = o,
      S = r,
      C = v;
    x;

  )
    switch (((y = g), (g = St()))) {
      case 40:
        if (y != 108 && Ve(C, f - 1) == 58) {
          Gf((C += re(Fa(g), '&', '&\f')), '&\f') != -1 && (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += Fa(g);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += fk(y);
        break;
      case 92:
        C += dk(Da() - 1, 7);
        continue;
      case 47:
        switch (hn()) {
          case 42:
          case 47:
            da(gk(pk(St(), Da()), t, n), l);
            break;
          default:
            C += '/';
        }
        break;
      case 123 * h:
        a[u++] = un(C) * p;
      case 125 * h:
      case 59:
      case 0:
        switch (g) {
          case 0:
          case 125:
            x = 0;
          case 59 + c:
            p == -1 && (C = re(C, /\f/g, '')),
              m > 0 &&
                un(C) - f &&
                da(
                  m > 32
                    ? B0(C + ';', r, n, f - 1)
                    : B0(re(C, ' ', '') + ';', r, n, f - 2),
                  l
                );
            break;
          case 59:
            C += ';';
          default:
            if (
              (da((S = H0(C, t, n, u, c, i, a, v, (w = []), (k = []), f)), o),
              g === 123)
            )
              if (c === 0) za(C, t, S, S, w, o, f, a, k);
              else
                switch (d === 99 && Ve(C, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    za(
                      e,
                      S,
                      S,
                      r && da(H0(e, S, S, 0, 0, i, a, v, i, (w = []), f), k),
                      i,
                      k,
                      f,
                      a,
                      r ? w : k
                    );
                    break;
                  default:
                    za(C, S, S, S, [''], k, 0, a, k);
                }
        }
        (u = c = m = 0), (h = p = 1), (v = C = ''), (f = s);
        break;
      case 58:
        (f = 1 + un(C)), (m = y);
      default:
        if (h < 1) {
          if (g == 123) --h;
          else if (g == 125 && h++ == 0 && ck() == 125) continue;
        }
        switch (((C += au(g)), g * h)) {
          case 38:
            p = c > 0 ? 1 : ((C += '\f'), -1);
            break;
          case 44:
            (a[u++] = (un(C) - 1) * p), (p = 1);
            break;
          case 64:
            hn() === 45 && (C += Fa(St())),
              (d = hn()),
              (c = f = un((v = C += hk(Da())))),
              g++;
            break;
          case 45:
            y === 45 && un(C) == 2 && (h = 0);
        }
    }
  return o;
}
function H0(e, t, n, r, i, o, s, a, l, u, c) {
  for (
    var f = i - 1, d = i === 0 ? o : [''], m = wp(d), y = 0, h = 0, x = 0;
    y < r;
    ++y
  )
    for (var p = 0, g = os(e, f + 1, (f = ik((h = s[y])))), v = e; p < m; ++p)
      (v = av(h > 0 ? d[p] + ' ' + g : re(g, /&\f/g, d[p]))) && (l[x++] = v);
  return uu(e, t, n, i === 0 ? vp : a, l, u, c);
}
function gk(e, t, n) {
  return uu(e, t, n, ov, au(uk()), os(e, 2, -2), 0);
}
function B0(e, t, n, r) {
  return uu(e, t, n, xp, os(e, 0, r), os(e, r + 1, -1), r);
}
function bi(e, t) {
  for (var n = '', r = wp(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || '';
  return n;
}
function yk(e, t, n, r) {
  switch (e.type) {
    case rk:
      if (e.children.length) break;
    case nk:
    case xp:
      return (e.return = e.return || e.value);
    case ov:
      return '';
    case sv:
      return (e.return = e.value + '{' + bi(e.children, r) + '}');
    case vp:
      e.value = e.props.join(',');
  }
  return un((n = bi(e.children, r)))
    ? (e.return = e.value + '{' + n + '}')
    : '';
}
function vk(e) {
  var t = wp(e);
  return function (n, r, i, o) {
    for (var s = '', a = 0; a < t; a++) s += e[a](n, r, i, o) || '';
    return s;
  };
}
function xk(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var wk = function (t, n, r) {
    for (
      var i = 0, o = 0;
      (i = o), (o = hn()), i === 38 && o === 12 && (n[r] = 1), !ss(o);

    )
      St();
    return $s(t, mt);
  },
  Sk = function (t, n) {
    var r = -1,
      i = 44;
    do
      switch (ss(i)) {
        case 0:
          i === 38 && hn() === 12 && (n[r] = 1), (t[r] += wk(mt - 1, n, r));
          break;
        case 2:
          t[r] += Fa(i);
          break;
        case 4:
          if (i === 44) {
            (t[++r] = hn() === 58 ? '&\f' : ''), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += au(i);
      }
    while ((i = St()));
    return t;
  },
  kk = function (t, n) {
    return cv(Sk(uv(t), n));
  },
  W0 = new WeakMap(),
  Ck = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          i = t.column === r.column && t.line === r.line;
        r.type !== 'rule';

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !W0.get(r)) &&
        !i
      ) {
        W0.set(t, !0);
        for (
          var o = [], s = kk(n, o), a = r.props, l = 0, u = 0;
          l < s.length;
          l++
        )
          for (var c = 0; c < a.length; c++, u++)
            t.props[u] = o[l] ? s[l].replace(/&\f/g, a[c]) : a[c] + ' ' + s[l];
      }
    }
  },
  bk = function (t) {
    if (t.type === 'decl') {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ''), (t.value = ''));
    }
  };
function fv(e, t) {
  switch (sk(e, t)) {
    case 5103:
      return ne + 'print-' + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ne + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ne + e + Sl + e + Qe + e + e;
    case 6828:
    case 4268:
      return ne + e + Qe + e + e;
    case 6165:
      return ne + e + Qe + 'flex-' + e + e;
    case 5187:
      return (
        ne + e + re(e, /(\w+).+(:[^]+)/, ne + 'box-$1$2' + Qe + 'flex-$1$2') + e
      );
    case 5443:
      return ne + e + Qe + 'flex-item-' + re(e, /flex-|-self/, '') + e;
    case 4675:
      return (
        ne +
        e +
        Qe +
        'flex-line-pack' +
        re(e, /align-content|flex-|-self/, '') +
        e
      );
    case 5548:
      return ne + e + Qe + re(e, 'shrink', 'negative') + e;
    case 5292:
      return ne + e + Qe + re(e, 'basis', 'preferred-size') + e;
    case 6060:
      return (
        ne +
        'box-' +
        re(e, '-grow', '') +
        ne +
        e +
        Qe +
        re(e, 'grow', 'positive') +
        e
      );
    case 4554:
      return ne + re(e, /([^-])(transform)/g, '$1' + ne + '$2') + e;
    case 6187:
      return (
        re(
          re(re(e, /(zoom-|grab)/, ne + '$1'), /(image-set)/, ne + '$1'),
          e,
          ''
        ) + e
      );
    case 5495:
    case 3959:
      return re(e, /(image-set\([^]*)/, ne + '$1$`$1');
    case 4968:
      return (
        re(
          re(e, /(.+:)(flex-)?(.*)/, ne + 'box-pack:$3' + Qe + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        ne +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return re(e, /(.+)-inline(.+)/, ne + '$1$2') + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (un(e) - 1 - t > 6)
        switch (Ve(e, t + 1)) {
          case 109:
            if (Ve(e, t + 4) !== 45) break;
          case 102:
            return (
              re(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  ne +
                  '$2-$3$1' +
                  Sl +
                  (Ve(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            );
          case 115:
            return ~Gf(e, 'stretch')
              ? fv(re(e, 'stretch', 'fill-available'), t) + e
              : e;
        }
      break;
    case 4949:
      if (Ve(e, t + 1) !== 115) break;
    case 6444:
      switch (Ve(e, un(e) - 3 - (~Gf(e, '!important') && 10))) {
        case 107:
          return re(e, ':', ':' + ne) + e;
        case 101:
          return (
            re(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                ne +
                (Ve(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                ne +
                '$2$3$1' +
                Qe +
                '$2box$3'
            ) + e
          );
      }
      break;
    case 5936:
      switch (Ve(e, t + 11)) {
        case 114:
          return ne + e + Qe + re(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return ne + e + Qe + re(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return ne + e + Qe + re(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
      return ne + e + Qe + e + e;
  }
  return e;
}
var _k = function (t, n, r, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case xp:
          t.return = fv(t.value, t.length);
          break;
        case sv:
          return bi([uo(t, { value: re(t.value, '@', '@' + ne) })], i);
        case vp:
          if (t.length)
            return lk(t.props, function (o) {
              switch (ak(o, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return bi(
                    [uo(t, { props: [re(o, /:(read-\w+)/, ':' + Sl + '$1')] })],
                    i
                  );
                case '::placeholder':
                  return bi(
                    [
                      uo(t, {
                        props: [re(o, /:(plac\w+)/, ':' + ne + 'input-$1')],
                      }),
                      uo(t, { props: [re(o, /:(plac\w+)/, ':' + Sl + '$1')] }),
                      uo(t, { props: [re(o, /:(plac\w+)/, Qe + 'input-$1')] }),
                    ],
                    i
                  );
              }
              return '';
            });
      }
  },
  Pk = [_k],
  dv = function (t) {
    var n = t.key;
    if (n === 'css') {
      var r = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(r, function (h) {
        var x = h.getAttribute('data-emotion');
        x.indexOf(' ') !== -1 &&
          (document.head.appendChild(h), h.setAttribute('data-s', ''));
      });
    }
    var i = t.stylisPlugins || Pk,
      o = {},
      s,
      a = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (h) {
          for (
            var x = h.getAttribute('data-emotion').split(' '), p = 1;
            p < x.length;
            p++
          )
            o[x[p]] = !0;
          a.push(h);
        }
      );
    var l,
      u = [Ck, bk];
    {
      var c,
        f = [
          yk,
          xk(function (h) {
            c.insert(h);
          }),
        ],
        d = vk(u.concat(i, f)),
        m = function (x) {
          return bi(mk(x), d);
        };
      l = function (x, p, g, v) {
        (c = g),
          m(x ? x + '{' + p.styles + '}' : p.styles),
          v && (y.inserted[p.name] = !0);
      };
    }
    var y = {
      key: n,
      sheet: new tk({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: o,
      registered: {},
      insert: l,
    };
    return y.sheet.hydrate(a), y;
  },
  pv = { exports: {} },
  ae = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fe = typeof Symbol == 'function' && Symbol.for,
  Sp = Fe ? Symbol.for('react.element') : 60103,
  kp = Fe ? Symbol.for('react.portal') : 60106,
  cu = Fe ? Symbol.for('react.fragment') : 60107,
  fu = Fe ? Symbol.for('react.strict_mode') : 60108,
  du = Fe ? Symbol.for('react.profiler') : 60114,
  pu = Fe ? Symbol.for('react.provider') : 60109,
  hu = Fe ? Symbol.for('react.context') : 60110,
  Cp = Fe ? Symbol.for('react.async_mode') : 60111,
  mu = Fe ? Symbol.for('react.concurrent_mode') : 60111,
  gu = Fe ? Symbol.for('react.forward_ref') : 60112,
  yu = Fe ? Symbol.for('react.suspense') : 60113,
  Mk = Fe ? Symbol.for('react.suspense_list') : 60120,
  vu = Fe ? Symbol.for('react.memo') : 60115,
  xu = Fe ? Symbol.for('react.lazy') : 60116,
  Ek = Fe ? Symbol.for('react.block') : 60121,
  Tk = Fe ? Symbol.for('react.fundamental') : 60117,
  Ak = Fe ? Symbol.for('react.responder') : 60118,
  Rk = Fe ? Symbol.for('react.scope') : 60119;
function Mt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Sp:
        switch (((e = e.type), e)) {
          case Cp:
          case mu:
          case cu:
          case du:
          case fu:
          case yu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case hu:
              case gu:
              case xu:
              case vu:
              case pu:
                return e;
              default:
                return t;
            }
        }
      case kp:
        return t;
    }
  }
}
function hv(e) {
  return Mt(e) === mu;
}
ae.AsyncMode = Cp;
ae.ConcurrentMode = mu;
ae.ContextConsumer = hu;
ae.ContextProvider = pu;
ae.Element = Sp;
ae.ForwardRef = gu;
ae.Fragment = cu;
ae.Lazy = xu;
ae.Memo = vu;
ae.Portal = kp;
ae.Profiler = du;
ae.StrictMode = fu;
ae.Suspense = yu;
ae.isAsyncMode = function (e) {
  return hv(e) || Mt(e) === Cp;
};
ae.isConcurrentMode = hv;
ae.isContextConsumer = function (e) {
  return Mt(e) === hu;
};
ae.isContextProvider = function (e) {
  return Mt(e) === pu;
};
ae.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Sp;
};
ae.isForwardRef = function (e) {
  return Mt(e) === gu;
};
ae.isFragment = function (e) {
  return Mt(e) === cu;
};
ae.isLazy = function (e) {
  return Mt(e) === xu;
};
ae.isMemo = function (e) {
  return Mt(e) === vu;
};
ae.isPortal = function (e) {
  return Mt(e) === kp;
};
ae.isProfiler = function (e) {
  return Mt(e) === du;
};
ae.isStrictMode = function (e) {
  return Mt(e) === fu;
};
ae.isSuspense = function (e) {
  return Mt(e) === yu;
};
ae.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === cu ||
    e === mu ||
    e === du ||
    e === fu ||
    e === yu ||
    e === Mk ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === xu ||
        e.$$typeof === vu ||
        e.$$typeof === pu ||
        e.$$typeof === hu ||
        e.$$typeof === gu ||
        e.$$typeof === Tk ||
        e.$$typeof === Ak ||
        e.$$typeof === Rk ||
        e.$$typeof === Ek))
  );
};
ae.typeOf = Mt;
pv.exports = ae;
var Ok = pv.exports,
  mv = Ok,
  $k = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Ik = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  gv = {};
gv[mv.ForwardRef] = $k;
gv[mv.Memo] = Ik;
var Lk = !0;
function Nk(e, t, n) {
  var r = '';
  return (
    n.split(' ').forEach(function (i) {
      e[i] !== void 0 ? t.push(e[i] + ';') : (r += i + ' ');
    }),
    r
  );
}
var yv = function (t, n, r) {
    var i = t.key + '-' + n.name;
    (r === !1 || Lk === !1) &&
      t.registered[i] === void 0 &&
      (t.registered[i] = n.styles);
  },
  vv = function (t, n, r) {
    yv(t, n, r);
    var i = t.key + '-' + n.name;
    if (t.inserted[n.name] === void 0) {
      var o = n;
      do t.insert(n === o ? '.' + i : '', o, t.sheet, !0), (o = o.next);
      while (o !== void 0);
    }
  };
function jk(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var Dk = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Fk = !1,
  zk = /[A-Z]|^ms/g,
  Uk = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  xv = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Y0 = function (t) {
    return t != null && typeof t != 'boolean';
  },
  Ec = iv(function (e) {
    return xv(e) ? e : e.replace(zk, '-$&').toLowerCase();
  }),
  G0 = function (t, n) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof n == 'string')
          return n.replace(Uk, function (r, i, o) {
            return (cn = { name: i, styles: o, next: cn }), i;
          });
    }
    return Dk[t] !== 1 && !xv(t) && typeof n == 'number' && n !== 0
      ? n + 'px'
      : n;
  },
  Vk =
    'Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.';
function as(e, t, n) {
  if (n == null) return '';
  var r = n;
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof n) {
    case 'boolean':
      return '';
    case 'object': {
      var i = n;
      if (i.anim === 1)
        return (cn = { name: i.name, styles: i.styles, next: cn }), i.name;
      var o = n;
      if (o.styles !== void 0) {
        var s = o.next;
        if (s !== void 0)
          for (; s !== void 0; )
            (cn = { name: s.name, styles: s.styles, next: cn }), (s = s.next);
        var a = o.styles + ';';
        return a;
      }
      return Hk(e, t, n);
    }
    case 'function': {
      if (e !== void 0) {
        var l = cn,
          u = n(e);
        return (cn = l), as(e, t, u);
      }
      break;
    }
  }
  var c = n;
  if (t == null) return c;
  var f = t[c];
  return f !== void 0 ? f : c;
}
function Hk(e, t, n) {
  var r = '';
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++) r += as(e, t, n[i]) + ';';
  else
    for (var o in n) {
      var s = n[o];
      if (typeof s != 'object') {
        var a = s;
        t != null && t[a] !== void 0
          ? (r += o + '{' + t[a] + '}')
          : Y0(a) && (r += Ec(o) + ':' + G0(o, a) + ';');
      } else {
        if (o === 'NO_COMPONENT_SELECTOR' && Fk) throw new Error(Vk);
        if (
          Array.isArray(s) &&
          typeof s[0] == 'string' &&
          (t == null || t[s[0]] === void 0)
        )
          for (var l = 0; l < s.length; l++)
            Y0(s[l]) && (r += Ec(o) + ':' + G0(o, s[l]) + ';');
        else {
          var u = as(e, t, s);
          switch (o) {
            case 'animation':
            case 'animationName': {
              r += Ec(o) + ':' + u + ';';
              break;
            }
            default:
              r += o + '{' + u + '}';
          }
        }
      }
    }
  return r;
}
var Q0 = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  cn;
function bp(e, t, n) {
  if (
    e.length === 1 &&
    typeof e[0] == 'object' &&
    e[0] !== null &&
    e[0].styles !== void 0
  )
    return e[0];
  var r = !0,
    i = '';
  cn = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0) (r = !1), (i += as(n, t, o));
  else {
    var s = o;
    i += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (((i += as(n, t, e[a])), r)) {
      var l = o;
      i += l[a];
    }
  Q0.lastIndex = 0;
  for (var u = '', c; (c = Q0.exec(i)) !== null; ) u += '-' + c[1];
  var f = jk(i) + u;
  return { name: f, styles: i, next: cn };
}
var Bk = function (t) {
    return t();
  },
  wv = qc.useInsertionEffect ? qc.useInsertionEffect : !1,
  Wk = wv || Bk,
  K0 = wv || P.useLayoutEffect,
  Sv = P.createContext(typeof HTMLElement < 'u' ? dv({ key: 'css' }) : null),
  Yk = Sv.Provider,
  kv = function (t) {
    return P.forwardRef(function (n, r) {
      var i = P.useContext(Sv);
      return t(n, i, r);
    });
  },
  wu = P.createContext({}),
  Tc = { exports: {} },
  X0;
function Cv() {
  return (
    X0 ||
      ((X0 = 1),
      (function (e) {
        function t() {
          return (
            (e.exports = t =
              Object.assign
                ? Object.assign.bind()
                : function (n) {
                    for (var r = 1; r < arguments.length; r++) {
                      var i = arguments[r];
                      for (var o in i)
                        ({}).hasOwnProperty.call(i, o) && (n[o] = i[o]);
                    }
                    return n;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t.apply(null, arguments)
          );
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(Tc)),
    Tc.exports
  );
}
Cv();
var Gk = kv(function (e, t) {
  var n = e.styles,
    r = bp([n], void 0, P.useContext(wu)),
    i = P.useRef();
  return (
    K0(
      function () {
        var o = t.key + '-global',
          s = new t.sheet.constructor({
            key: o,
            nonce: t.sheet.nonce,
            container: t.sheet.container,
            speedy: t.sheet.isSpeedy,
          }),
          a = !1,
          l = document.querySelector(
            'style[data-emotion="' + o + ' ' + r.name + '"]'
          );
        return (
          t.sheet.tags.length && (s.before = t.sheet.tags[0]),
          l !== null &&
            ((a = !0), l.setAttribute('data-emotion', o), s.hydrate([l])),
          (i.current = [s, a]),
          function () {
            s.flush();
          }
        );
      },
      [t]
    ),
    K0(
      function () {
        var o = i.current,
          s = o[0],
          a = o[1];
        if (a) {
          o[1] = !1;
          return;
        }
        if ((r.next !== void 0 && vv(t, r.next, !0), s.tags.length)) {
          var l = s.tags[s.tags.length - 1].nextElementSibling;
          (s.before = l), s.flush();
        }
        t.insert('', r, s, !1);
      },
      [t, r.name]
    ),
    null
  );
});
function bv() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return bp(t);
}
var Qk = function () {
    var t = bv.apply(void 0, arguments),
      n = 'animation-' + t.name;
    return {
      name: n,
      styles: '@keyframes ' + n + '{' + t.styles + '}',
      anim: 1,
      toString: function () {
        return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
      },
    };
  },
  Kk = qS,
  Xk = function (t) {
    return t !== 'theme';
  },
  q0 = function (t) {
    return typeof t == 'string' && t.charCodeAt(0) > 96 ? Kk : Xk;
  },
  Z0 = function (t, n, r) {
    var i;
    if (n) {
      var o = n.shouldForwardProp;
      i =
        t.__emotion_forwardProp && o
          ? function (s) {
              return t.__emotion_forwardProp(s) && o(s);
            }
          : o;
    }
    return typeof i != 'function' && r && (i = t.__emotion_forwardProp), i;
  },
  qk = !1,
  Zk = function (t) {
    var n = t.cache,
      r = t.serialized,
      i = t.isStringTag;
    return (
      yv(n, r, i),
      Wk(function () {
        return vv(n, r, i);
      }),
      null
    );
  },
  Jk = function e(t, n) {
    var r = t.__emotion_real === t,
      i = (r && t.__emotion_base) || t,
      o,
      s;
    n !== void 0 && ((o = n.label), (s = n.target));
    var a = Z0(t, n, r),
      l = a || q0(i),
      u = !l('as');
    return function () {
      var c = arguments,
        f =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (o !== void 0 && f.push('label:' + o + ';'),
        c[0] == null || c[0].raw === void 0)
      )
        f.push.apply(f, c);
      else {
        f.push(c[0][0]);
        for (var d = c.length, m = 1; m < d; m++) f.push(c[m], c[0][m]);
      }
      var y = kv(function (h, x, p) {
        var g = (u && h.as) || i,
          v = '',
          w = [],
          k = h;
        if (h.theme == null) {
          k = {};
          for (var S in h) k[S] = h[S];
          k.theme = P.useContext(wu);
        }
        typeof h.className == 'string'
          ? (v = Nk(x.registered, w, h.className))
          : h.className != null && (v = h.className + ' ');
        var C = bp(f.concat(w), x.registered, k);
        (v += x.key + '-' + C.name), s !== void 0 && (v += ' ' + s);
        var M = u && a === void 0 ? q0(g) : l,
          A = {};
        for (var T in h) (u && T === 'as') || (M(T) && (A[T] = h[T]));
        return (
          (A.className = v),
          p && (A.ref = p),
          P.createElement(
            P.Fragment,
            null,
            P.createElement(Zk, {
              cache: x,
              serialized: C,
              isStringTag: typeof g == 'string',
            }),
            P.createElement(g, A)
          )
        );
      });
      return (
        (y.displayName =
          o !== void 0
            ? o
            : 'Styled(' +
              (typeof i == 'string'
                ? i
                : i.displayName || i.name || 'Component') +
              ')'),
        (y.defaultProps = t.defaultProps),
        (y.__emotion_real = y),
        (y.__emotion_base = i),
        (y.__emotion_styles = f),
        (y.__emotion_forwardProp = a),
        Object.defineProperty(y, 'toString', {
          value: function () {
            return s === void 0 && qk ? 'NO_COMPONENT_SELECTOR' : '.' + s;
          },
        }),
        (y.withComponent = function (h, x) {
          return e(h, _({}, n, x, { shouldForwardProp: Z0(y, x, !0) })).apply(
            void 0,
            f
          );
        }),
        y
      );
    };
  },
  eC = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ],
  Kf = Jk.bind();
eC.forEach(function (e) {
  Kf[e] = Kf(e);
});
let Xf;
typeof document == 'object' && (Xf = dv({ key: 'css', prepend: !0 }));
function tC(e) {
  const { injectFirst: t, children: n } = e;
  return t && Xf ? b.jsx(Yk, { value: Xf, children: n }) : n;
}
function nC(e) {
  return e == null || Object.keys(e).length === 0;
}
function rC(e) {
  const { styles: t, defaultTheme: n = {} } = e,
    r = typeof t == 'function' ? (i) => t(nC(i) ? n : i) : t;
  return b.jsx(Gk, { styles: r });
}
function iC(e, t) {
  return Kf(e, t);
}
const oC = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  sC = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        GlobalStyles: rC,
        StyledEngineProvider: tC,
        ThemeContext: wu,
        css: bv,
        default: iC,
        internal_processStyles: oC,
        keyframes: Qk,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
function Kn(e) {
  if (typeof e != 'object' || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function _v(e) {
  if (!Kn(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = _v(e[n]);
    }),
    t
  );
}
function mn(e, t, n = { clone: !0 }) {
  const r = n.clone ? _({}, e) : e;
  return (
    Kn(e) &&
      Kn(t) &&
      Object.keys(t).forEach((i) => {
        Kn(t[i]) && Object.prototype.hasOwnProperty.call(e, i) && Kn(e[i])
          ? (r[i] = mn(e[i], t[i], n))
          : n.clone
          ? (r[i] = Kn(t[i]) ? _v(t[i]) : t[i])
          : (r[i] = t[i]);
      }),
    r
  );
}
const aC = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: mn, isPlainObject: Kn },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  lC = ['values', 'unit', 'step'],
  uC = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => _({}, n, { [r.key]: r.val }), {})
    );
  };
function Pv(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = 'px',
      step: r = 5,
    } = e,
    i = ie(e, lC),
    o = uC(t),
    s = Object.keys(o);
  function a(d) {
    return `@media (min-width:${typeof t[d] == 'number' ? t[d] : d}${n})`;
  }
  function l(d) {
    return `@media (max-width:${
      (typeof t[d] == 'number' ? t[d] : d) - r / 100
    }${n})`;
  }
  function u(d, m) {
    const y = s.indexOf(m);
    return `@media (min-width:${
      typeof t[d] == 'number' ? t[d] : d
    }${n}) and (max-width:${
      (y !== -1 && typeof t[s[y]] == 'number' ? t[s[y]] : m) - r / 100
    }${n})`;
  }
  function c(d) {
    return s.indexOf(d) + 1 < s.length ? u(d, s[s.indexOf(d) + 1]) : a(d);
  }
  function f(d) {
    const m = s.indexOf(d);
    return m === 0
      ? a(s[1])
      : m === s.length - 1
      ? l(s[m])
      : u(d, s[s.indexOf(d) + 1]).replace('@media', '@media not all and');
  }
  return _(
    {
      keys: s,
      values: o,
      up: a,
      down: l,
      between: u,
      only: c,
      not: f,
      unit: n,
    },
    i
  );
}
const cC = { borderRadius: 4 };
function Io(e, t) {
  return t ? mn(e, t, { clone: !1 }) : e;
}
const _p = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  J0 = {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: (e) => `@media (min-width:${_p[e]}px)`,
  };
function In(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const o = r.breakpoints || J0;
    return t.reduce((s, a, l) => ((s[o.up(o.keys[l])] = n(t[l])), s), {});
  }
  if (typeof t == 'object') {
    const o = r.breakpoints || J0;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(o.values || _p).indexOf(a) !== -1) {
        const l = o.up(a);
        s[l] = n(t[a], a);
      } else {
        const l = a;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return n(t);
}
function fC(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, i) => {
          const o = e.up(i);
          return (r[o] = {}), r;
        }, {})) || {}
  );
}
function dC(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function Is(e) {
  if (typeof e != 'string') throw new Error(is(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const pC = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Is }, Symbol.toStringTag, {
    value: 'Module',
  })
);
function Su(e, t, n = !0) {
  if (!t || typeof t != 'string') return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split('.')
      .reduce((i, o) => (i && i[o] ? i[o] : null), e);
    if (r != null) return r;
  }
  return t.split('.').reduce((r, i) => (r && r[i] != null ? r[i] : null), e);
}
function kl(e, t, n, r = n) {
  let i;
  return (
    typeof e == 'function'
      ? (i = e(n))
      : Array.isArray(e)
      ? (i = e[n] || r)
      : (i = Su(e, n) || r),
    t && (i = t(i, r, e)),
    i
  );
}
function Pe(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: i } = e,
    o = (s) => {
      if (s[t] == null) return null;
      const a = s[t],
        l = s.theme,
        u = Su(l, r) || {};
      return In(s, a, (f) => {
        let d = kl(u, i, f);
        return (
          f === d &&
            typeof f == 'string' &&
            (d = kl(u, i, `${t}${f === 'default' ? '' : Is(f)}`, f)),
          n === !1 ? d : { [n]: d }
        );
      });
    };
  return (o.propTypes = {}), (o.filterProps = [t]), o;
}
function hC(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const mC = { m: 'margin', p: 'padding' },
  gC = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom'],
  },
  em = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  yC = hC((e) => {
    if (e.length > 2)
      if (em[e]) e = em[e];
      else return [e];
    const [t, n] = e.split(''),
      r = mC[t],
      i = gC[n] || '';
    return Array.isArray(i) ? i.map((o) => r + o) : [r + i];
  }),
  Pp = [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'marginInline',
    'marginInlineStart',
    'marginInlineEnd',
    'marginBlock',
    'marginBlockStart',
    'marginBlockEnd',
  ],
  Mp = [
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
    'paddingInline',
    'paddingInlineStart',
    'paddingInlineEnd',
    'paddingBlock',
    'paddingBlockStart',
    'paddingBlockEnd',
  ];
[...Pp, ...Mp];
function Ls(e, t, n, r) {
  var i;
  const o = (i = Su(e, t, !1)) != null ? i : n;
  return typeof o == 'number'
    ? (s) => (typeof s == 'string' ? s : o * s)
    : Array.isArray(o)
    ? (s) => (typeof s == 'string' ? s : o[s])
    : typeof o == 'function'
    ? o
    : () => {};
}
function Mv(e) {
  return Ls(e, 'spacing', 8);
}
function Ns(e, t) {
  if (typeof t == 'string' || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == 'number' ? -r : `-${r}`;
}
function vC(e, t) {
  return (n) => e.reduce((r, i) => ((r[i] = Ns(t, n)), r), {});
}
function xC(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const i = yC(n),
    o = vC(i, r),
    s = e[n];
  return In(e, s, o);
}
function Ev(e, t) {
  const n = Mv(e.theme);
  return Object.keys(e)
    .map((r) => xC(e, t, r, n))
    .reduce(Io, {});
}
function ke(e) {
  return Ev(e, Pp);
}
ke.propTypes = {};
ke.filterProps = Pp;
function Ce(e) {
  return Ev(e, Mp);
}
Ce.propTypes = {};
Ce.filterProps = Mp;
function wC(e = 8) {
  if (e.mui) return e;
  const t = Mv({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((o) => {
          const s = t(o);
          return typeof s == 'number' ? `${s}px` : s;
        })
        .join(' ');
  return (n.mui = !0), n;
}
function ku(...e) {
  const t = e.reduce(
      (r, i) => (
        i.filterProps.forEach((o) => {
          r[o] = i;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((i, o) => (t[o] ? Io(i, t[o](r)) : i), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), [])),
    n
  );
}
function Rt(e) {
  return typeof e != 'number' ? e : `${e}px solid`;
}
function Bt(e, t) {
  return Pe({ prop: e, themeKey: 'borders', transform: t });
}
const SC = Bt('border', Rt),
  kC = Bt('borderTop', Rt),
  CC = Bt('borderRight', Rt),
  bC = Bt('borderBottom', Rt),
  _C = Bt('borderLeft', Rt),
  PC = Bt('borderColor'),
  MC = Bt('borderTopColor'),
  EC = Bt('borderRightColor'),
  TC = Bt('borderBottomColor'),
  AC = Bt('borderLeftColor'),
  RC = Bt('outline', Rt),
  OC = Bt('outlineColor'),
  Cu = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = Ls(e.theme, 'shape.borderRadius', 4),
        n = (r) => ({ borderRadius: Ns(t, r) });
      return In(e, e.borderRadius, n);
    }
    return null;
  };
Cu.propTypes = {};
Cu.filterProps = ['borderRadius'];
ku(SC, kC, CC, bC, _C, PC, MC, EC, TC, AC, Cu, RC, OC);
const bu = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ls(e.theme, 'spacing', 8),
      n = (r) => ({ gap: Ns(t, r) });
    return In(e, e.gap, n);
  }
  return null;
};
bu.propTypes = {};
bu.filterProps = ['gap'];
const _u = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ls(e.theme, 'spacing', 8),
      n = (r) => ({ columnGap: Ns(t, r) });
    return In(e, e.columnGap, n);
  }
  return null;
};
_u.propTypes = {};
_u.filterProps = ['columnGap'];
const Pu = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ls(e.theme, 'spacing', 8),
      n = (r) => ({ rowGap: Ns(t, r) });
    return In(e, e.rowGap, n);
  }
  return null;
};
Pu.propTypes = {};
Pu.filterProps = ['rowGap'];
const $C = Pe({ prop: 'gridColumn' }),
  IC = Pe({ prop: 'gridRow' }),
  LC = Pe({ prop: 'gridAutoFlow' }),
  NC = Pe({ prop: 'gridAutoColumns' }),
  jC = Pe({ prop: 'gridAutoRows' }),
  DC = Pe({ prop: 'gridTemplateColumns' }),
  FC = Pe({ prop: 'gridTemplateRows' }),
  zC = Pe({ prop: 'gridTemplateAreas' }),
  UC = Pe({ prop: 'gridArea' });
ku(bu, _u, Pu, $C, IC, LC, NC, jC, DC, FC, zC, UC);
function _i(e, t) {
  return t === 'grey' ? t : e;
}
const VC = Pe({ prop: 'color', themeKey: 'palette', transform: _i }),
  HC = Pe({
    prop: 'bgcolor',
    cssProperty: 'backgroundColor',
    themeKey: 'palette',
    transform: _i,
  }),
  BC = Pe({ prop: 'backgroundColor', themeKey: 'palette', transform: _i });
ku(VC, HC, BC);
function vt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const WC = Pe({ prop: 'width', transform: vt }),
  Ep = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, i;
        const o =
          ((r = e.theme) == null ||
          (r = r.breakpoints) == null ||
          (r = r.values) == null
            ? void 0
            : r[n]) || _p[n];
        return o
          ? ((i = e.theme) == null || (i = i.breakpoints) == null
              ? void 0
              : i.unit) !== 'px'
            ? { maxWidth: `${o}${e.theme.breakpoints.unit}` }
            : { maxWidth: o }
          : { maxWidth: vt(n) };
      };
      return In(e, e.maxWidth, t);
    }
    return null;
  };
Ep.filterProps = ['maxWidth'];
const YC = Pe({ prop: 'minWidth', transform: vt }),
  GC = Pe({ prop: 'height', transform: vt }),
  QC = Pe({ prop: 'maxHeight', transform: vt }),
  KC = Pe({ prop: 'minHeight', transform: vt });
Pe({ prop: 'size', cssProperty: 'width', transform: vt });
Pe({ prop: 'size', cssProperty: 'height', transform: vt });
const XC = Pe({ prop: 'boxSizing' });
ku(WC, Ep, YC, GC, QC, KC, XC);
const js = {
  border: { themeKey: 'borders', transform: Rt },
  borderTop: { themeKey: 'borders', transform: Rt },
  borderRight: { themeKey: 'borders', transform: Rt },
  borderBottom: { themeKey: 'borders', transform: Rt },
  borderLeft: { themeKey: 'borders', transform: Rt },
  borderColor: { themeKey: 'palette' },
  borderTopColor: { themeKey: 'palette' },
  borderRightColor: { themeKey: 'palette' },
  borderBottomColor: { themeKey: 'palette' },
  borderLeftColor: { themeKey: 'palette' },
  outline: { themeKey: 'borders', transform: Rt },
  outlineColor: { themeKey: 'palette' },
  borderRadius: { themeKey: 'shape.borderRadius', style: Cu },
  color: { themeKey: 'palette', transform: _i },
  bgcolor: {
    themeKey: 'palette',
    cssProperty: 'backgroundColor',
    transform: _i,
  },
  backgroundColor: { themeKey: 'palette', transform: _i },
  p: { style: Ce },
  pt: { style: Ce },
  pr: { style: Ce },
  pb: { style: Ce },
  pl: { style: Ce },
  px: { style: Ce },
  py: { style: Ce },
  padding: { style: Ce },
  paddingTop: { style: Ce },
  paddingRight: { style: Ce },
  paddingBottom: { style: Ce },
  paddingLeft: { style: Ce },
  paddingX: { style: Ce },
  paddingY: { style: Ce },
  paddingInline: { style: Ce },
  paddingInlineStart: { style: Ce },
  paddingInlineEnd: { style: Ce },
  paddingBlock: { style: Ce },
  paddingBlockStart: { style: Ce },
  paddingBlockEnd: { style: Ce },
  m: { style: ke },
  mt: { style: ke },
  mr: { style: ke },
  mb: { style: ke },
  ml: { style: ke },
  mx: { style: ke },
  my: { style: ke },
  margin: { style: ke },
  marginTop: { style: ke },
  marginRight: { style: ke },
  marginBottom: { style: ke },
  marginLeft: { style: ke },
  marginX: { style: ke },
  marginY: { style: ke },
  marginInline: { style: ke },
  marginInlineStart: { style: ke },
  marginInlineEnd: { style: ke },
  marginBlock: { style: ke },
  marginBlockStart: { style: ke },
  marginBlockEnd: { style: ke },
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({ '@media print': { display: e } }),
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: bu },
  rowGap: { style: Pu },
  columnGap: { style: _u },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: 'zIndex' },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: 'shadows' },
  width: { transform: vt },
  maxWidth: { style: Ep },
  minWidth: { transform: vt },
  height: { transform: vt },
  maxHeight: { transform: vt },
  minHeight: { transform: vt },
  boxSizing: {},
  fontFamily: { themeKey: 'typography' },
  fontSize: { themeKey: 'typography' },
  fontStyle: { themeKey: 'typography' },
  fontWeight: { themeKey: 'typography' },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: 'typography' },
};
function qC(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function ZC(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function Tv() {
  function e(n, r, i, o) {
    const s = { [n]: r, theme: i },
      a = o[n];
    if (!a) return { [n]: r };
    const { cssProperty: l = n, themeKey: u, transform: c, style: f } = a;
    if (r == null) return null;
    if (u === 'typography' && r === 'inherit') return { [n]: r };
    const d = Su(i, u) || {};
    return f
      ? f(s)
      : In(s, r, (y) => {
          let h = kl(d, c, y);
          return (
            y === h &&
              typeof y == 'string' &&
              (h = kl(d, c, `${n}${y === 'default' ? '' : Is(y)}`, y)),
            l === !1 ? h : { [l]: h }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: i, theme: o = {} } = n || {};
    if (!i) return null;
    const s = (r = o.unstable_sxConfig) != null ? r : js;
    function a(l) {
      let u = l;
      if (typeof l == 'function') u = l(o);
      else if (typeof l != 'object') return l;
      if (!u) return null;
      const c = fC(o.breakpoints),
        f = Object.keys(c);
      let d = c;
      return (
        Object.keys(u).forEach((m) => {
          const y = ZC(u[m], o);
          if (y != null)
            if (typeof y == 'object')
              if (s[m]) d = Io(d, e(m, y, o, s));
              else {
                const h = In({ theme: o }, y, (x) => ({ [m]: x }));
                qC(h, y) ? (d[m] = t({ sx: y, theme: o })) : (d = Io(d, h));
              }
            else d = Io(d, e(m, y, o, s));
        }),
        dC(f, d)
      );
    }
    return Array.isArray(i) ? i.map(a) : a(i);
  }
  return t;
}
const Mu = Tv();
Mu.filterProps = ['sx'];
function Av(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == 'function'
    ? {
        [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, '*:where($1)')]: t,
      }
    : n.palette.mode === e
    ? t
    : {};
}
const JC = ['breakpoints', 'palette', 'spacing', 'shape'];
function Eu(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: i, shape: o = {} } = e,
    s = ie(e, JC),
    a = Pv(n),
    l = wC(i);
  let u = mn(
    {
      breakpoints: a,
      direction: 'ltr',
      components: {},
      palette: _({ mode: 'light' }, r),
      spacing: l,
      shape: _({}, cC, o),
    },
    s
  );
  return (
    (u.applyStyles = Av),
    (u = t.reduce((c, f) => mn(c, f), u)),
    (u.unstable_sxConfig = _({}, js, s == null ? void 0 : s.unstable_sxConfig)),
    (u.unstable_sx = function (f) {
      return Mu({ sx: f, theme: this });
    }),
    u
  );
}
const e5 = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      default: Eu,
      private_createBreakpoints: Pv,
      unstable_applyStyles: Av,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function t5(e) {
  return Object.keys(e).length === 0;
}
function n5(e = null) {
  const t = P.useContext(wu);
  return !t || t5(t) ? e : t;
}
const r5 = Eu();
function Rv(e = r5) {
  return n5(e);
}
const i5 = ['sx'],
  o5 = (e) => {
    var t, n;
    const r = { systemProps: {}, otherProps: {} },
      i =
        (t =
          e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) !=
        null
          ? t
          : js;
    return (
      Object.keys(e).forEach((o) => {
        i[o] ? (r.systemProps[o] = e[o]) : (r.otherProps[o] = e[o]);
      }),
      r
    );
  };
function Ov(e) {
  const { sx: t } = e,
    n = ie(e, i5),
    { systemProps: r, otherProps: i } = o5(n);
  let o;
  return (
    Array.isArray(t)
      ? (o = [r, ...t])
      : typeof t == 'function'
      ? (o = (...s) => {
          const a = t(...s);
          return Kn(a) ? _({}, r, a) : r;
        })
      : (o = _({}, r, t)),
    _({}, i, { sx: o })
  );
}
const s5 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: Mu,
        extendSxProp: Ov,
        unstable_createStyleFunctionSx: Tv,
        unstable_defaultSxConfig: js,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  tm = (e) => e,
  a5 = () => {
    let e = tm;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = tm;
      },
    };
  },
  l5 = a5();
function $v(e) {
  var t,
    n,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = $v(e[t])) && (r && (r += ' '), (r += n));
    } else for (n in e) e[n] && (r && (r += ' '), (r += n));
  return r;
}
function Tn() {
  for (var e, t, n = 0, r = '', i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = $v(e)) && (r && (r += ' '), (r += t));
  return r;
}
const Iv = {
  active: 'active',
  checked: 'checked',
  completed: 'completed',
  disabled: 'disabled',
  error: 'error',
  expanded: 'expanded',
  focused: 'focused',
  focusVisible: 'focusVisible',
  open: 'open',
  readOnly: 'readOnly',
  required: 'required',
  selected: 'selected',
};
function hr(e, t, n = 'Mui') {
  const r = Iv[t];
  return r ? `${n}-${r}` : `${l5.generate(e)}-${t}`;
}
function Yr(e, t, n = 'Mui') {
  const r = {};
  return (
    t.forEach((i) => {
      r[i] = hr(e, i, n);
    }),
    r
  );
}
var Lv = { exports: {} },
  le = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tp = Symbol.for('react.element'),
  Ap = Symbol.for('react.portal'),
  Tu = Symbol.for('react.fragment'),
  Au = Symbol.for('react.strict_mode'),
  Ru = Symbol.for('react.profiler'),
  Ou = Symbol.for('react.provider'),
  $u = Symbol.for('react.context'),
  u5 = Symbol.for('react.server_context'),
  Iu = Symbol.for('react.forward_ref'),
  Lu = Symbol.for('react.suspense'),
  Nu = Symbol.for('react.suspense_list'),
  ju = Symbol.for('react.memo'),
  Du = Symbol.for('react.lazy'),
  c5 = Symbol.for('react.offscreen'),
  Nv;
Nv = Symbol.for('react.module.reference');
function Wt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Tp:
        switch (((e = e.type), e)) {
          case Tu:
          case Ru:
          case Au:
          case Lu:
          case Nu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case u5:
              case $u:
              case Iu:
              case Du:
              case ju:
              case Ou:
                return e;
              default:
                return t;
            }
        }
      case Ap:
        return t;
    }
  }
}
le.ContextConsumer = $u;
le.ContextProvider = Ou;
le.Element = Tp;
le.ForwardRef = Iu;
le.Fragment = Tu;
le.Lazy = Du;
le.Memo = ju;
le.Portal = Ap;
le.Profiler = Ru;
le.StrictMode = Au;
le.Suspense = Lu;
le.SuspenseList = Nu;
le.isAsyncMode = function () {
  return !1;
};
le.isConcurrentMode = function () {
  return !1;
};
le.isContextConsumer = function (e) {
  return Wt(e) === $u;
};
le.isContextProvider = function (e) {
  return Wt(e) === Ou;
};
le.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Tp;
};
le.isForwardRef = function (e) {
  return Wt(e) === Iu;
};
le.isFragment = function (e) {
  return Wt(e) === Tu;
};
le.isLazy = function (e) {
  return Wt(e) === Du;
};
le.isMemo = function (e) {
  return Wt(e) === ju;
};
le.isPortal = function (e) {
  return Wt(e) === Ap;
};
le.isProfiler = function (e) {
  return Wt(e) === Ru;
};
le.isStrictMode = function (e) {
  return Wt(e) === Au;
};
le.isSuspense = function (e) {
  return Wt(e) === Lu;
};
le.isSuspenseList = function (e) {
  return Wt(e) === Nu;
};
le.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Tu ||
    e === Ru ||
    e === Au ||
    e === Lu ||
    e === Nu ||
    e === c5 ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Du ||
        e.$$typeof === ju ||
        e.$$typeof === Ou ||
        e.$$typeof === $u ||
        e.$$typeof === Iu ||
        e.$$typeof === Nv ||
        e.getModuleId !== void 0))
  );
};
le.typeOf = Wt;
Lv.exports = le;
var nm = Lv.exports;
const f5 = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function jv(e) {
  const t = `${e}`.match(f5);
  return (t && t[1]) || '';
}
function Dv(e, t = '') {
  return e.displayName || e.name || jv(e) || t;
}
function rm(e, t, n) {
  const r = Dv(t);
  return e.displayName || (r !== '' ? `${n}(${r})` : n);
}
function d5(e) {
  if (e != null) {
    if (typeof e == 'string') return e;
    if (typeof e == 'function') return Dv(e, 'Component');
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case nm.ForwardRef:
          return rm(e, e.render, 'ForwardRef');
        case nm.Memo:
          return rm(e, e.type, 'memo');
        default:
          return;
      }
  }
}
const p5 = Object.freeze(
  Object.defineProperty(
    { __proto__: null, default: d5, getFunctionName: jv },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function h5(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
Eu();
function Cl(e, t) {
  const n = _({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = _({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const i = e[r] || {},
          o = t[r];
        (n[r] = {}),
          !o || !Object.keys(o)
            ? (n[r] = i)
            : !i || !Object.keys(i)
            ? (n[r] = o)
            : ((n[r] = _({}, o)),
              Object.keys(i).forEach((s) => {
                n[r][s] = Cl(i[s], o[s]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function m5(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : Cl(t.components[n].defaultProps, r);
}
function g5({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let i = Rv(n);
  return r && (i = i[r] || i), m5({ theme: i, name: t, props: e });
}
const Ur = typeof window < 'u' ? P.useLayoutEffect : P.useEffect;
function y5(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const v5 = Object.freeze(
  Object.defineProperty({ __proto__: null, default: y5 }, Symbol.toStringTag, {
    value: 'Module',
  })
);
function qf(e) {
  return (e && e.ownerDocument) || document;
}
function x5(e) {
  return qf(e).defaultView || window;
}
function Zf(e, t) {
  typeof e == 'function' ? e(t) : e && (e.current = t);
}
function w5({ controlled: e, default: t, name: n, state: r = 'value' }) {
  const { current: i } = P.useRef(e !== void 0),
    [o, s] = P.useState(t),
    a = i ? e : o,
    l = P.useCallback((u) => {
      i || s(u);
    }, []);
  return [a, l];
}
function ls(...e) {
  return P.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              Zf(n, t);
            });
          },
    e
  );
}
function Un(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((i) => {
      r[i] = e[i]
        .reduce((o, s) => {
          if (s) {
            const a = t(s);
            a !== '' && o.push(a), n && n[s] && o.push(n[s]);
          }
          return o;
        }, [])
        .join(' ');
    }),
    r
  );
}
const S5 = P.createContext(void 0);
function k5(e) {
  const { theme: t, name: n, props: r } = e;
  if (!t || !t.components || !t.components[n]) return r;
  const i = t.components[n];
  return i.defaultProps
    ? Cl(i.defaultProps, r)
    : !i.styleOverrides && !i.variants
    ? Cl(i, r)
    : r;
}
function C5({ props: e, name: t }) {
  const n = P.useContext(S5);
  return k5({ props: e, name: t, theme: { components: n } });
}
function b5(e, t) {
  return _(
    {
      toolbar: {
        minHeight: 56,
        [e.up('xs')]: { '@media (orientation: landscape)': { minHeight: 48 } },
        [e.up('sm')]: { minHeight: 64 },
      },
    },
    t
  );
}
var Me = {},
  Fv = { exports: {} };
(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(Fv);
var zv = Fv.exports;
const _5 = Fn(KS),
  P5 = Fn(v5);
var Uv = zv;
Object.defineProperty(Me, '__esModule', { value: !0 });
Me.alpha = Wv;
Me.blend = F5;
Me.colorChannel = void 0;
var M5 = (Me.darken = Op);
Me.decomposeColor = Ut;
Me.emphasize = Yv;
var E5 = (Me.getContrastRatio = I5);
Me.getLuminance = bl;
Me.hexToRgb = Vv;
Me.hslToRgb = Bv;
var T5 = (Me.lighten = $p);
Me.private_safeAlpha = L5;
Me.private_safeColorChannel = void 0;
Me.private_safeDarken = N5;
Me.private_safeEmphasize = D5;
Me.private_safeLighten = j5;
Me.recomposeColor = qi;
Me.rgbToHex = $5;
var im = Uv(_5),
  A5 = Uv(P5);
function Rp(e, t = 0, n = 1) {
  return (0, A5.default)(e, t, n);
}
function Vv(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, 'g');
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? 'a' : ''}(${n
          .map((r, i) =>
            i < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(', ')})`
      : ''
  );
}
function R5(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function Ut(e) {
  if (e.type) return e;
  if (e.charAt(0) === '#') return Ut(Vv(e));
  const t = e.indexOf('('),
    n = e.substring(0, t);
  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(n) === -1)
    throw new Error((0, im.default)(9, e));
  let r = e.substring(t + 1, e.length - 1),
    i;
  if (n === 'color') {
    if (
      ((r = r.split(' ')),
      (i = r.shift()),
      r.length === 4 && r[3].charAt(0) === '/' && (r[3] = r[3].slice(1)),
      ['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(
        i
      ) === -1)
    )
      throw new Error((0, im.default)(10, i));
  } else r = r.split(',');
  return (
    (r = r.map((o) => parseFloat(o))), { type: n, values: r, colorSpace: i }
  );
}
const Hv = (e) => {
  const t = Ut(e);
  return t.values
    .slice(0, 3)
    .map((n, r) => (t.type.indexOf('hsl') !== -1 && r !== 0 ? `${n}%` : n))
    .join(' ');
};
Me.colorChannel = Hv;
const O5 = (e, t) => {
  try {
    return Hv(e);
  } catch {
    return e;
  }
};
Me.private_safeColorChannel = O5;
function qi(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf('rgb') !== -1
      ? (r = r.map((i, o) => (o < 3 ? parseInt(i, 10) : i)))
      : t.indexOf('hsl') !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf('color') !== -1
      ? (r = `${n} ${r.join(' ')}`)
      : (r = `${r.join(', ')}`),
    `${t}(${r})`
  );
}
function $5(e) {
  if (e.indexOf('#') === 0) return e;
  const { values: t } = Ut(e);
  return `#${t.map((n, r) => R5(r === 3 ? Math.round(255 * n) : n)).join('')}`;
}
function Bv(e) {
  e = Ut(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    i = t[2] / 100,
    o = r * Math.min(i, 1 - i),
    s = (u, c = (u + n / 30) % 12) =>
      i - o * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let a = 'rgb';
  const l = [
    Math.round(s(0) * 255),
    Math.round(s(8) * 255),
    Math.round(s(4) * 255),
  ];
  return (
    e.type === 'hsla' && ((a += 'a'), l.push(t[3])), qi({ type: a, values: l })
  );
}
function bl(e) {
  e = Ut(e);
  let t = e.type === 'hsl' || e.type === 'hsla' ? Ut(Bv(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== 'color' && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function I5(e, t) {
  const n = bl(e),
    r = bl(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Wv(e, t) {
  return (
    (e = Ut(e)),
    (t = Rp(t)),
    (e.type === 'rgb' || e.type === 'hsl') && (e.type += 'a'),
    e.type === 'color' ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    qi(e)
  );
}
function L5(e, t, n) {
  try {
    return Wv(e, t);
  } catch {
    return e;
  }
}
function Op(e, t) {
  if (((e = Ut(e)), (t = Rp(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf('rgb') !== -1 || e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return qi(e);
}
function N5(e, t, n) {
  try {
    return Op(e, t);
  } catch {
    return e;
  }
}
function $p(e, t) {
  if (((e = Ut(e)), (t = Rp(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf('rgb') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return qi(e);
}
function j5(e, t, n) {
  try {
    return $p(e, t);
  } catch {
    return e;
  }
}
function Yv(e, t = 0.15) {
  return bl(e) > 0.5 ? Op(e, t) : $p(e, t);
}
function D5(e, t, n) {
  try {
    return Yv(e, t);
  } catch {
    return e;
  }
}
function F5(e, t, n, r = 1) {
  const i = (l, u) =>
      Math.round((l ** (1 / r) * (1 - n) + u ** (1 / r) * n) ** r),
    o = Ut(e),
    s = Ut(t),
    a = [
      i(o.values[0], s.values[0]),
      i(o.values[1], s.values[1]),
      i(o.values[2], s.values[2]),
    ];
  return qi({ type: 'rgb', values: a });
}
const us = { black: '#000', white: '#fff' },
  z5 = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  },
  qr = {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff',
  },
  Zr = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000',
  },
  co = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00',
  },
  Jr = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff',
  },
  ei = {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea',
  },
  ti = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853',
  },
  U5 = ['mode', 'contrastThreshold', 'tonalOffset'],
  om = {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { paper: us.white, default: us.white },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  Ac = {
    text: {
      primary: us.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: { paper: '#121212', default: '#121212' },
    action: {
      active: us.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function sm(e, t, n, r) {
  const i = r.light || r,
    o = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === 'light'
      ? (e.light = T5(e.main, i))
      : t === 'dark' && (e.dark = M5(e.main, o)));
}
function V5(e = 'light') {
  return e === 'dark'
    ? { main: Jr[200], light: Jr[50], dark: Jr[400] }
    : { main: Jr[700], light: Jr[400], dark: Jr[800] };
}
function H5(e = 'light') {
  return e === 'dark'
    ? { main: qr[200], light: qr[50], dark: qr[400] }
    : { main: qr[500], light: qr[300], dark: qr[700] };
}
function B5(e = 'light') {
  return e === 'dark'
    ? { main: Zr[500], light: Zr[300], dark: Zr[700] }
    : { main: Zr[700], light: Zr[400], dark: Zr[800] };
}
function W5(e = 'light') {
  return e === 'dark'
    ? { main: ei[400], light: ei[300], dark: ei[700] }
    : { main: ei[700], light: ei[500], dark: ei[900] };
}
function Y5(e = 'light') {
  return e === 'dark'
    ? { main: ti[400], light: ti[300], dark: ti[700] }
    : { main: ti[800], light: ti[500], dark: ti[900] };
}
function G5(e = 'light') {
  return e === 'dark'
    ? { main: co[400], light: co[300], dark: co[700] }
    : { main: '#ed6c02', light: co[500], dark: co[900] };
}
function Q5(e) {
  const {
      mode: t = 'light',
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    i = ie(e, U5),
    o = e.primary || V5(t),
    s = e.secondary || H5(t),
    a = e.error || B5(t),
    l = e.info || W5(t),
    u = e.success || Y5(t),
    c = e.warning || G5(t);
  function f(h) {
    return E5(h, Ac.text.primary) >= n ? Ac.text.primary : om.text.primary;
  }
  const d = ({
      color: h,
      name: x,
      mainShade: p = 500,
      lightShade: g = 300,
      darkShade: v = 700,
    }) => {
      if (
        ((h = _({}, h)),
        !h.main && h[p] && (h.main = h[p]),
        !h.hasOwnProperty('main'))
      )
        throw new Error(is(11, x ? ` (${x})` : '', p));
      if (typeof h.main != 'string')
        throw new Error(is(12, x ? ` (${x})` : '', JSON.stringify(h.main)));
      return (
        sm(h, 'light', g, r),
        sm(h, 'dark', v, r),
        h.contrastText || (h.contrastText = f(h.main)),
        h
      );
    },
    m = { dark: Ac, light: om };
  return mn(
    _(
      {
        common: _({}, us),
        mode: t,
        primary: d({ color: o, name: 'primary' }),
        secondary: d({
          color: s,
          name: 'secondary',
          mainShade: 'A400',
          lightShade: 'A200',
          darkShade: 'A700',
        }),
        error: d({ color: a, name: 'error' }),
        warning: d({ color: c, name: 'warning' }),
        info: d({ color: l, name: 'info' }),
        success: d({ color: u, name: 'success' }),
        grey: z5,
        contrastThreshold: n,
        getContrastText: f,
        augmentColor: d,
        tonalOffset: r,
      },
      m[t]
    ),
    i
  );
}
const K5 = [
  'fontFamily',
  'fontSize',
  'fontWeightLight',
  'fontWeightRegular',
  'fontWeightMedium',
  'fontWeightBold',
  'htmlFontSize',
  'allVariants',
  'pxToRem',
];
function X5(e) {
  return Math.round(e * 1e5) / 1e5;
}
const am = { textTransform: 'uppercase' },
  lm = '"Roboto", "Helvetica", "Arial", sans-serif';
function q5(e, t) {
  const n = typeof t == 'function' ? t(e) : t,
    {
      fontFamily: r = lm,
      fontSize: i = 14,
      fontWeightLight: o = 300,
      fontWeightRegular: s = 400,
      fontWeightMedium: a = 500,
      fontWeightBold: l = 700,
      htmlFontSize: u = 16,
      allVariants: c,
      pxToRem: f,
    } = n,
    d = ie(n, K5),
    m = i / 14,
    y = f || ((p) => `${(p / u) * m}rem`),
    h = (p, g, v, w, k) =>
      _(
        { fontFamily: r, fontWeight: p, fontSize: y(g), lineHeight: v },
        r === lm ? { letterSpacing: `${X5(w / g)}em` } : {},
        k,
        c
      ),
    x = {
      h1: h(o, 96, 1.167, -1.5),
      h2: h(o, 60, 1.2, -0.5),
      h3: h(s, 48, 1.167, 0),
      h4: h(s, 34, 1.235, 0.25),
      h5: h(s, 24, 1.334, 0),
      h6: h(a, 20, 1.6, 0.15),
      subtitle1: h(s, 16, 1.75, 0.15),
      subtitle2: h(a, 14, 1.57, 0.1),
      body1: h(s, 16, 1.5, 0.15),
      body2: h(s, 14, 1.43, 0.15),
      button: h(a, 14, 1.75, 0.4, am),
      caption: h(s, 12, 1.66, 0.4),
      overline: h(s, 12, 2.66, 1, am),
      inherit: {
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit',
      },
    };
  return mn(
    _(
      {
        htmlFontSize: u,
        pxToRem: y,
        fontFamily: r,
        fontSize: i,
        fontWeightLight: o,
        fontWeightRegular: s,
        fontWeightMedium: a,
        fontWeightBold: l,
      },
      x
    ),
    d,
    { clone: !1 }
  );
}
const Z5 = 0.2,
  J5 = 0.14,
  e4 = 0.12;
function me(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Z5})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${J5})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${e4})`,
  ].join(',');
}
const t4 = [
    'none',
    me(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    me(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    me(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    me(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    me(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    me(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    me(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    me(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    me(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    me(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    me(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    me(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    me(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    me(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    me(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    me(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    me(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    me(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    me(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    me(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    me(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    me(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    me(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    me(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  n4 = ['duration', 'easing', 'delay'],
  r4 = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  i4 = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function um(e) {
  return `${Math.round(e)}ms`;
}
function o4(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function s4(e) {
  const t = _({}, r4, e.easing),
    n = _({}, i4, e.duration);
  return _(
    {
      getAutoHeightDuration: o4,
      create: (i = ['all'], o = {}) => {
        const {
          duration: s = n.standard,
          easing: a = t.easeInOut,
          delay: l = 0,
        } = o;
        return (
          ie(o, n4),
          (Array.isArray(i) ? i : [i])
            .map(
              (u) =>
                `${u} ${typeof s == 'string' ? s : um(s)} ${a} ${
                  typeof l == 'string' ? l : um(l)
                }`
            )
            .join(',')
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const a4 = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  l4 = [
    'breakpoints',
    'mixins',
    'spacing',
    'palette',
    'transitions',
    'typography',
    'shape',
  ];
function u4(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: i = {},
      typography: o = {},
    } = e,
    s = ie(e, l4);
  if (e.vars) throw new Error(is(18));
  const a = Q5(r),
    l = Eu(e);
  let u = mn(l, {
    mixins: b5(l.breakpoints, n),
    palette: a,
    shadows: t4.slice(),
    typography: q5(a, o),
    transitions: s4(i),
    zIndex: _({}, a4),
  });
  return (
    (u = mn(u, s)),
    (u = t.reduce((c, f) => mn(c, f), u)),
    (u.unstable_sxConfig = _({}, js, s == null ? void 0 : s.unstable_sxConfig)),
    (u.unstable_sx = function (f) {
      return Mu({ sx: f, theme: this });
    }),
    u
  );
}
const Ip = u4();
function Zi() {
  const e = Rv(Ip);
  return e[yp] || e;
}
function Fu({ props: e, name: t }) {
  return g5({ props: e, name: t, defaultTheme: Ip, themeId: yp });
}
var Ds = {},
  Rc = { exports: {} },
  cm;
function c4() {
  return (
    cm ||
      ((cm = 1),
      (function (e) {
        function t(n, r) {
          if (n == null) return {};
          var i = {};
          for (var o in n)
            if ({}.hasOwnProperty.call(n, o)) {
              if (r.includes(o)) continue;
              i[o] = n[o];
            }
          return i;
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      })(Rc)),
    Rc.exports
  );
}
const f4 = Fn(sC),
  d4 = Fn(aC),
  p4 = Fn(pC),
  h4 = Fn(p5),
  m4 = Fn(e5),
  g4 = Fn(s5);
var Ji = zv;
Object.defineProperty(Ds, '__esModule', { value: !0 });
var y4 = (Ds.default = A4);
Ds.shouldForwardProp = Ua;
Ds.systemDefaultTheme = void 0;
var Et = Ji(Cv()),
  Jf = Ji(c4()),
  fm = b4(f4),
  v4 = d4;
Ji(p4);
Ji(h4);
var x4 = Ji(m4),
  w4 = Ji(g4);
const S4 = ['ownerState'],
  k4 = ['variants'],
  C4 = ['name', 'slot', 'skipVariantsResolver', 'skipSx', 'overridesResolver'];
function Gv(e) {
  if (typeof WeakMap != 'function') return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (Gv = function (r) {
    return r ? n : t;
  })(e);
}
function b4(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != 'object' && typeof e != 'function'))
    return { default: e };
  var n = Gv(t);
  if (n && n.has(e)) return n.get(e);
  var r = { __proto__: null },
    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== 'default' && Object.prototype.hasOwnProperty.call(e, o)) {
      var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, o, s) : (r[o] = e[o]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function _4(e) {
  return Object.keys(e).length === 0;
}
function P4(e) {
  return typeof e == 'string' && e.charCodeAt(0) > 96;
}
function Ua(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const M4 = (Ds.systemDefaultTheme = (0, x4.default)()),
  E4 = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function pa({ defaultTheme: e, theme: t, themeId: n }) {
  return _4(t) ? e : t[n] || t;
}
function T4(e) {
  return e ? (t, n) => n[e] : null;
}
function Va(e, t) {
  let { ownerState: n } = t,
    r = (0, Jf.default)(t, S4);
  const i =
    typeof e == 'function' ? e((0, Et.default)({ ownerState: n }, r)) : e;
  if (Array.isArray(i))
    return i.flatMap((o) => Va(o, (0, Et.default)({ ownerState: n }, r)));
  if (i && typeof i == 'object' && Array.isArray(i.variants)) {
    const { variants: o = [] } = i;
    let a = (0, Jf.default)(i, k4);
    return (
      o.forEach((l) => {
        let u = !0;
        typeof l.props == 'function'
          ? (u = l.props((0, Et.default)({ ownerState: n }, r, n)))
          : Object.keys(l.props).forEach((c) => {
              (n == null ? void 0 : n[c]) !== l.props[c] &&
                r[c] !== l.props[c] &&
                (u = !1);
            }),
          u &&
            (Array.isArray(a) || (a = [a]),
            a.push(
              typeof l.style == 'function'
                ? l.style((0, Et.default)({ ownerState: n }, r, n))
                : l.style
            ));
      }),
      a
    );
  }
  return i;
}
function A4(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = M4,
      rootShouldForwardProp: r = Ua,
      slotShouldForwardProp: i = Ua,
    } = e,
    o = (s) =>
      (0, w4.default)(
        (0, Et.default)({}, s, {
          theme: pa((0, Et.default)({}, s, { defaultTheme: n, themeId: t })),
        })
      );
  return (
    (o.__mui_systemSx = !0),
    (s, a = {}) => {
      (0, fm.internal_processStyles)(s, (k) =>
        k.filter((S) => !(S != null && S.__mui_systemSx))
      );
      const {
          name: l,
          slot: u,
          skipVariantsResolver: c,
          skipSx: f,
          overridesResolver: d = T4(E4(u)),
        } = a,
        m = (0, Jf.default)(a, C4),
        y = c !== void 0 ? c : (u && u !== 'Root' && u !== 'root') || !1,
        h = f || !1;
      let x,
        p = Ua;
      u === 'Root' || u === 'root'
        ? (p = r)
        : u
        ? (p = i)
        : P4(s) && (p = void 0);
      const g = (0, fm.default)(
          s,
          (0, Et.default)({ shouldForwardProp: p, label: x }, m)
        ),
        v = (k) =>
          (typeof k == 'function' && k.__emotion_real !== k) ||
          (0, v4.isPlainObject)(k)
            ? (S) =>
                Va(
                  k,
                  (0, Et.default)({}, S, {
                    theme: pa({ theme: S.theme, defaultTheme: n, themeId: t }),
                  })
                )
            : k,
        w = (k, ...S) => {
          let C = v(k);
          const M = S ? S.map(v) : [];
          l &&
            d &&
            M.push((E) => {
              const I = pa(
                (0, Et.default)({}, E, { defaultTheme: n, themeId: t })
              );
              if (
                !I.components ||
                !I.components[l] ||
                !I.components[l].styleOverrides
              )
                return null;
              const R = I.components[l].styleOverrides,
                O = {};
              return (
                Object.entries(R).forEach(([D, U]) => {
                  O[D] = Va(U, (0, Et.default)({}, E, { theme: I }));
                }),
                d(E, O)
              );
            }),
            l &&
              !y &&
              M.push((E) => {
                var I;
                const R = pa(
                    (0, Et.default)({}, E, { defaultTheme: n, themeId: t })
                  ),
                  O =
                    R == null ||
                    (I = R.components) == null ||
                    (I = I[l]) == null
                      ? void 0
                      : I.variants;
                return Va(
                  { variants: O },
                  (0, Et.default)({}, E, { theme: R })
                );
              }),
            h || M.push(o);
          const A = M.length - S.length;
          if (Array.isArray(k) && A > 0) {
            const E = new Array(A).fill('');
            (C = [...k, ...E]), (C.raw = [...k.raw, ...E]);
          }
          const T = g(C, ...M);
          return s.muiName && (T.muiName = s.muiName), T;
        };
      return g.withConfig && (w.withConfig = g.withConfig), w;
    }
  );
}
function R4(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const O4 = (e) => R4(e) && e !== 'classes',
  qe = y4({ themeId: yp, defaultTheme: Ip, rootShouldForwardProp: O4 }),
  $4 = [
    '#1f77b4',
    '#ff7f0e',
    '#2ca02c',
    '#d62728',
    '#9467bd',
    '#8c564b',
    '#e377c2',
    '#7f7f7f',
    '#bcbd22',
    '#17becf',
  ];
function I4(e, t, n = $4) {
  return e.type === 'pie'
    ? _({}, e, { data: e.data.map((r, i) => _({ color: n[i % n.length] }, r)) })
    : _({ color: n[t % n.length] }, e);
}
const L4 = ['#02B2AF', '#2E96FF', '#B800D8', '#60009B', '#2731C8', '#03008D'],
  N4 = ['#02B2AF', '#72CCFF', '#DA00FF', '#9001CB', '#2E96FF', '#3B48E0'],
  j4 = (e) => (e === 'dark' ? N4 : L4),
  Qv = P.createContext({ isInitialized: !1, data: {} }),
  D4 = (e, t, n, r) => {
    const i = {};
    e.forEach((s, a) => {
      var c;
      const { id: l = `auto-generated-id-${a}`, type: u } = s;
      if (
        (i[u] === void 0 && (i[u] = { series: {}, seriesOrder: [] }),
        ((c = i[u]) == null ? void 0 : c.series[l]) !== void 0)
      )
        throw new Error(`MUI X: series' id "${l}" is not unique.`);
      (i[u].series[l] = _({ id: l }, I4(s, a, t))), i[u].seriesOrder.push(l);
    });
    const o = {};
    return (
      Object.keys(n).forEach((s) => {
        var l;
        const a = i[s];
        a !== void 0 &&
          (o[s] = ((l = n[s]) == null ? void 0 : l.call(n, a, r)) ?? i[s]);
      }),
      o
    );
  };
function F4(e) {
  const {
      series: t,
      dataset: n,
      colors: r = j4,
      seriesFormatters: i,
      children: o,
    } = e,
    s = Zi(),
    a = P.useMemo(
      () => ({
        isInitialized: !0,
        data: D4(t, typeof r == 'function' ? r(s.palette.mode) : r, i, n),
      }),
      [t, r, s.palette.mode, i, n]
    );
  return b.jsx(Qv.Provider, { value: a, children: o });
}
const Fs = P.createContext({
    item: null,
    axis: { x: null, y: null },
    useVoronoiInteraction: !1,
    dispatch: () => null,
  }),
  z4 = (e, t) => {
    switch (t.type) {
      case 'enterItem':
        return _({}, e, { item: t.data });
      case 'exitChart':
        return e.item === null && e.axis.x === null && e.axis.y === null
          ? e
          : _({}, e, { axis: { x: null, y: null }, item: null });
      case 'updateVoronoiUsage':
        return _({}, e, { useVoronoiInteraction: t.useVoronoiInteraction });
      case 'leaveItem':
        return e.item === null ||
          Object.keys(t.data).some((n) => t.data[n] !== e.item[n])
          ? e
          : _({}, e, { item: null });
      case 'updateAxis':
        return t.data.x === e.axis.x && t.data.y === e.axis.y
          ? e
          : _({}, e, { axis: t.data });
      default:
        return e;
    }
  };
function U4(e) {
  const { children: t } = e,
    [n, r] = P.useReducer(z4, {
      item: null,
      axis: { x: null, y: null },
      useVoronoiInteraction: !1,
    }),
    i = P.useMemo(() => _({}, n, { dispatch: r }), [n]);
  return b.jsx(Fs.Provider, { value: i, children: t });
}
const Kv = P.createContext({});
function V4(e) {
  const { colorProcessors: t, children: n } = e;
  return b.jsx(Kv.Provider, { value: t, children: n });
}
function Ha(e, t) {
  return e == null || t == null
    ? NaN
    : e < t
    ? -1
    : e > t
    ? 1
    : e >= t
    ? 0
    : NaN;
}
function H4(e, t) {
  return e == null || t == null
    ? NaN
    : t < e
    ? -1
    : t > e
    ? 1
    : t >= e
    ? 0
    : NaN;
}
function Lp(e) {
  let t, n, r;
  e.length !== 2
    ? ((t = Ha), (n = (a, l) => Ha(e(a), l)), (r = (a, l) => e(a) - l))
    : ((t = e === Ha || e === H4 ? e : B4), (n = e), (r = e));
  function i(a, l, u = 0, c = a.length) {
    if (u < c) {
      if (t(l, l) !== 0) return c;
      do {
        const f = (u + c) >>> 1;
        n(a[f], l) < 0 ? (u = f + 1) : (c = f);
      } while (u < c);
    }
    return u;
  }
  function o(a, l, u = 0, c = a.length) {
    if (u < c) {
      if (t(l, l) !== 0) return c;
      do {
        const f = (u + c) >>> 1;
        n(a[f], l) <= 0 ? (u = f + 1) : (c = f);
      } while (u < c);
    }
    return u;
  }
  function s(a, l, u = 0, c = a.length) {
    const f = i(a, l, u, c - 1);
    return f > u && r(a[f - 1], l) > -r(a[f], l) ? f - 1 : f;
  }
  return { left: i, center: s, right: o };
}
function B4() {
  return 0;
}
function W4(e) {
  return e === null ? NaN : +e;
}
const Y4 = Lp(Ha),
  Xv = Y4.right;
Lp(W4).center;
class dm extends Map {
  constructor(t, n = K4) {
    if (
      (super(),
      Object.defineProperties(this, {
        _intern: { value: new Map() },
        _key: { value: n },
      }),
      t != null)
    )
      for (const [r, i] of t) this.set(r, i);
  }
  get(t) {
    return super.get(pm(this, t));
  }
  has(t) {
    return super.has(pm(this, t));
  }
  set(t, n) {
    return super.set(G4(this, t), n);
  }
  delete(t) {
    return super.delete(Q4(this, t));
  }
}
function pm({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) ? e.get(r) : n;
}
function G4({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function Q4({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) && ((n = e.get(r)), e.delete(r)), n;
}
function K4(e) {
  return e !== null && typeof e == 'object' ? e.valueOf() : e;
}
const X4 = Math.sqrt(50),
  q4 = Math.sqrt(10),
  Z4 = Math.sqrt(2);
function _l(e, t, n) {
  const r = (t - e) / Math.max(0, n),
    i = Math.floor(Math.log10(r)),
    o = r / Math.pow(10, i),
    s = o >= X4 ? 10 : o >= q4 ? 5 : o >= Z4 ? 2 : 1;
  let a, l, u;
  return (
    i < 0
      ? ((u = Math.pow(10, -i) / s),
        (a = Math.round(e * u)),
        (l = Math.round(t * u)),
        a / u < e && ++a,
        l / u > t && --l,
        (u = -u))
      : ((u = Math.pow(10, i) * s),
        (a = Math.round(e / u)),
        (l = Math.round(t / u)),
        a * u < e && ++a,
        l * u > t && --l),
    l < a && 0.5 <= n && n < 2 ? _l(e, t, n * 2) : [a, l, u]
  );
}
function ed(e, t, n) {
  if (((t = +t), (e = +e), (n = +n), !(n > 0))) return [];
  if (e === t) return [e];
  const r = t < e,
    [i, o, s] = r ? _l(t, e, n) : _l(e, t, n);
  if (!(o >= i)) return [];
  const a = o - i + 1,
    l = new Array(a);
  if (r)
    if (s < 0) for (let u = 0; u < a; ++u) l[u] = (o - u) / -s;
    else for (let u = 0; u < a; ++u) l[u] = (o - u) * s;
  else if (s < 0) for (let u = 0; u < a; ++u) l[u] = (i + u) / -s;
  else for (let u = 0; u < a; ++u) l[u] = (i + u) * s;
  return l;
}
function td(e, t, n) {
  return (t = +t), (e = +e), (n = +n), _l(e, t, n)[2];
}
function nd(e, t, n) {
  (t = +t), (e = +e), (n = +n);
  const r = t < e,
    i = r ? td(t, e, n) : td(e, t, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function J4(e, t, n) {
  (e = +e),
    (t = +t),
    (n = (i = arguments.length) < 2 ? ((t = e), (e = 0), 1) : i < 3 ? 1 : +n);
  for (
    var r = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, o = new Array(i);
    ++r < i;

  )
    o[r] = e + r * n;
  return o;
}
function mr(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function eb(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == 'function' ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e),
        typeof t == 'function' ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const hm = Symbol('implicit');
function Pl() {
  var e = new dm(),
    t = [],
    n = [],
    r = hm;
  function i(o) {
    let s = e.get(o);
    if (s === void 0) {
      if (r !== hm) return r;
      e.set(o, (s = t.push(o) - 1));
    }
    return n[s % n.length];
  }
  return (
    (i.domain = function (o) {
      if (!arguments.length) return t.slice();
      (t = []), (e = new dm());
      for (const s of o) e.has(s) || e.set(s, t.push(s) - 1);
      return i;
    }),
    (i.range = function (o) {
      return arguments.length ? ((n = Array.from(o)), i) : n.slice();
    }),
    (i.unknown = function (o) {
      return arguments.length ? ((r = o), i) : r;
    }),
    (i.copy = function () {
      return Pl(t, n).unknown(r);
    }),
    mr.apply(i, arguments),
    i
  );
}
function Np() {
  var e = Pl().unknown(void 0),
    t = e.domain,
    n = e.range,
    r = 0,
    i = 1,
    o,
    s,
    a = !1,
    l = 0,
    u = 0,
    c = 0.5;
  delete e.unknown;
  function f() {
    var d = t().length,
      m = i < r,
      y = m ? i : r,
      h = m ? r : i;
    (o = (h - y) / Math.max(1, d - l + u * 2)),
      a && (o = Math.floor(o)),
      (y += (h - y - o * (d - l)) * c),
      (s = o * (1 - l)),
      a && ((y = Math.round(y)), (s = Math.round(s)));
    var x = J4(d).map(function (p) {
      return y + o * p;
    });
    return n(m ? x.reverse() : x);
  }
  return (
    (e.domain = function (d) {
      return arguments.length ? (t(d), f()) : t();
    }),
    (e.range = function (d) {
      return arguments.length
        ? (([r, i] = d), (r = +r), (i = +i), f())
        : [r, i];
    }),
    (e.rangeRound = function (d) {
      return ([r, i] = d), (r = +r), (i = +i), (a = !0), f();
    }),
    (e.bandwidth = function () {
      return s;
    }),
    (e.step = function () {
      return o;
    }),
    (e.round = function (d) {
      return arguments.length ? ((a = !!d), f()) : a;
    }),
    (e.padding = function (d) {
      return arguments.length ? ((l = Math.min(1, (u = +d))), f()) : l;
    }),
    (e.paddingInner = function (d) {
      return arguments.length ? ((l = Math.min(1, d)), f()) : l;
    }),
    (e.paddingOuter = function (d) {
      return arguments.length ? ((u = +d), f()) : u;
    }),
    (e.align = function (d) {
      return arguments.length ? ((c = Math.max(0, Math.min(1, d))), f()) : c;
    }),
    (e.copy = function () {
      return Np(t(), [r, i]).round(a).paddingInner(l).paddingOuter(u).align(c);
    }),
    mr.apply(f(), arguments)
  );
}
function qv(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return qv(t());
    }),
    e
  );
}
function tb() {
  return qv(Np.apply(null, arguments).paddingInner(1));
}
function jp(e, t, n) {
  (e.prototype = t.prototype = n), (n.constructor = e);
}
function Zv(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function zs() {}
var cs = 0.7,
  Ml = 1 / cs,
  Pi = '\\s*([+-]?\\d+)\\s*',
  fs = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
  gn = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
  nb = /^#([0-9a-f]{3,8})$/,
  rb = new RegExp(`^rgb\\(${Pi},${Pi},${Pi}\\)$`),
  ib = new RegExp(`^rgb\\(${gn},${gn},${gn}\\)$`),
  ob = new RegExp(`^rgba\\(${Pi},${Pi},${Pi},${fs}\\)$`),
  sb = new RegExp(`^rgba\\(${gn},${gn},${gn},${fs}\\)$`),
  ab = new RegExp(`^hsl\\(${fs},${gn},${gn}\\)$`),
  lb = new RegExp(`^hsla\\(${fs},${gn},${gn},${fs}\\)$`),
  mm = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
jp(zs, ds, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: gm,
  formatHex: gm,
  formatHex8: ub,
  formatHsl: cb,
  formatRgb: ym,
  toString: ym,
});
function gm() {
  return this.rgb().formatHex();
}
function ub() {
  return this.rgb().formatHex8();
}
function cb() {
  return Jv(this).formatHsl();
}
function ym() {
  return this.rgb().formatRgb();
}
function ds(e) {
  var t, n;
  return (
    (e = (e + '').trim().toLowerCase()),
    (t = nb.exec(e))
      ? ((n = t[1].length),
        (t = parseInt(t[1], 16)),
        n === 6
          ? vm(t)
          : n === 3
          ? new ut(
              ((t >> 8) & 15) | ((t >> 4) & 240),
              ((t >> 4) & 15) | (t & 240),
              ((t & 15) << 4) | (t & 15),
              1
            )
          : n === 8
          ? ha(
              (t >> 24) & 255,
              (t >> 16) & 255,
              (t >> 8) & 255,
              (t & 255) / 255
            )
          : n === 4
          ? ha(
              ((t >> 12) & 15) | ((t >> 8) & 240),
              ((t >> 8) & 15) | ((t >> 4) & 240),
              ((t >> 4) & 15) | (t & 240),
              (((t & 15) << 4) | (t & 15)) / 255
            )
          : null)
      : (t = rb.exec(e))
      ? new ut(t[1], t[2], t[3], 1)
      : (t = ib.exec(e))
      ? new ut((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, 1)
      : (t = ob.exec(e))
      ? ha(t[1], t[2], t[3], t[4])
      : (t = sb.exec(e))
      ? ha((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4])
      : (t = ab.exec(e))
      ? Sm(t[1], t[2] / 100, t[3] / 100, 1)
      : (t = lb.exec(e))
      ? Sm(t[1], t[2] / 100, t[3] / 100, t[4])
      : mm.hasOwnProperty(e)
      ? vm(mm[e])
      : e === 'transparent'
      ? new ut(NaN, NaN, NaN, 0)
      : null
  );
}
function vm(e) {
  return new ut((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function ha(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new ut(e, t, n, r);
}
function fb(e) {
  return (
    e instanceof zs || (e = ds(e)),
    e ? ((e = e.rgb()), new ut(e.r, e.g, e.b, e.opacity)) : new ut()
  );
}
function rd(e, t, n, r) {
  return arguments.length === 1 ? fb(e) : new ut(e, t, n, r ?? 1);
}
function ut(e, t, n, r) {
  (this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r);
}
jp(
  ut,
  rd,
  Zv(zs, {
    brighter(e) {
      return (
        (e = e == null ? Ml : Math.pow(Ml, e)),
        new ut(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? cs : Math.pow(cs, e)),
        new ut(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new ut(Ir(this.r), Ir(this.g), Ir(this.b), El(this.opacity));
    },
    displayable() {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: xm,
    formatHex: xm,
    formatHex8: db,
    formatRgb: wm,
    toString: wm,
  })
);
function xm() {
  return `#${Er(this.r)}${Er(this.g)}${Er(this.b)}`;
}
function db() {
  return `#${Er(this.r)}${Er(this.g)}${Er(this.b)}${Er(
    (isNaN(this.opacity) ? 1 : this.opacity) * 255
  )}`;
}
function wm() {
  const e = El(this.opacity);
  return `${e === 1 ? 'rgb(' : 'rgba('}${Ir(this.r)}, ${Ir(this.g)}, ${Ir(
    this.b
  )}${e === 1 ? ')' : `, ${e})`}`;
}
function El(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Ir(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Er(e) {
  return (e = Ir(e)), (e < 16 ? '0' : '') + e.toString(16);
}
function Sm(e, t, n, r) {
  return (
    r <= 0
      ? (e = t = n = NaN)
      : n <= 0 || n >= 1
      ? (e = t = NaN)
      : t <= 0 && (e = NaN),
    new Zt(e, t, n, r)
  );
}
function Jv(e) {
  if (e instanceof Zt) return new Zt(e.h, e.s, e.l, e.opacity);
  if ((e instanceof zs || (e = ds(e)), !e)) return new Zt();
  if (e instanceof Zt) return e;
  e = e.rgb();
  var t = e.r / 255,
    n = e.g / 255,
    r = e.b / 255,
    i = Math.min(t, n, r),
    o = Math.max(t, n, r),
    s = NaN,
    a = o - i,
    l = (o + i) / 2;
  return (
    a
      ? (t === o
          ? (s = (n - r) / a + (n < r) * 6)
          : n === o
          ? (s = (r - t) / a + 2)
          : (s = (t - n) / a + 4),
        (a /= l < 0.5 ? o + i : 2 - o - i),
        (s *= 60))
      : (a = l > 0 && l < 1 ? 0 : s),
    new Zt(s, a, l, e.opacity)
  );
}
function pb(e, t, n, r) {
  return arguments.length === 1 ? Jv(e) : new Zt(e, t, n, r ?? 1);
}
function Zt(e, t, n, r) {
  (this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r);
}
jp(
  Zt,
  pb,
  Zv(zs, {
    brighter(e) {
      return (
        (e = e == null ? Ml : Math.pow(Ml, e)),
        new Zt(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? cs : Math.pow(cs, e)),
        new Zt(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb() {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        n = this.l,
        r = n + (n < 0.5 ? n : 1 - n) * t,
        i = 2 * n - r;
      return new ut(
        Oc(e >= 240 ? e - 240 : e + 120, i, r),
        Oc(e, i, r),
        Oc(e < 120 ? e + 240 : e - 120, i, r),
        this.opacity
      );
    },
    clamp() {
      return new Zt(km(this.h), ma(this.s), ma(this.l), El(this.opacity));
    },
    displayable() {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl() {
      const e = El(this.opacity);
      return `${e === 1 ? 'hsl(' : 'hsla('}${km(this.h)}, ${
        ma(this.s) * 100
      }%, ${ma(this.l) * 100}%${e === 1 ? ')' : `, ${e})`}`;
    },
  })
);
function km(e) {
  return (e = (e || 0) % 360), e < 0 ? e + 360 : e;
}
function ma(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Oc(e, t, n) {
  return (
    (e < 60
      ? t + ((n - t) * e) / 60
      : e < 180
      ? n
      : e < 240
      ? t + ((n - t) * (240 - e)) / 60
      : t) * 255
  );
}
const Dp = (e) => () => e;
function hb(e, t) {
  return function (n) {
    return e + n * t;
  };
}
function mb(e, t, n) {
  return (
    (e = Math.pow(e, n)),
    (t = Math.pow(t, n) - e),
    (n = 1 / n),
    function (r) {
      return Math.pow(e + r * t, n);
    }
  );
}
function gb(e) {
  return (e = +e) == 1
    ? e2
    : function (t, n) {
        return n - t ? mb(t, n, e) : Dp(isNaN(t) ? n : t);
      };
}
function e2(e, t) {
  var n = t - e;
  return n ? hb(e, n) : Dp(isNaN(e) ? t : e);
}
const Cm = (function e(t) {
  var n = gb(t);
  function r(i, o) {
    var s = n((i = rd(i)).r, (o = rd(o)).r),
      a = n(i.g, o.g),
      l = n(i.b, o.b),
      u = e2(i.opacity, o.opacity);
    return function (c) {
      return (
        (i.r = s(c)), (i.g = a(c)), (i.b = l(c)), (i.opacity = u(c)), i + ''
      );
    };
  }
  return (r.gamma = e), r;
})(1);
function yb(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0,
    r = t.slice(),
    i;
  return function (o) {
    for (i = 0; i < n; ++i) r[i] = e[i] * (1 - o) + t[i] * o;
    return r;
  };
}
function vb(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function xb(e, t) {
  var n = t ? t.length : 0,
    r = e ? Math.min(n, e.length) : 0,
    i = new Array(r),
    o = new Array(n),
    s;
  for (s = 0; s < r; ++s) i[s] = zu(e[s], t[s]);
  for (; s < n; ++s) o[s] = t[s];
  return function (a) {
    for (s = 0; s < r; ++s) o[s] = i[s](a);
    return o;
  };
}
function t2(e, t) {
  var n = new Date();
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return n.setTime(e * (1 - r) + t * r), n;
    }
  );
}
function ps(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return e * (1 - n) + t * n;
    }
  );
}
function wb(e, t) {
  var n = {},
    r = {},
    i;
  (e === null || typeof e != 'object') && (e = {}),
    (t === null || typeof t != 'object') && (t = {});
  for (i in t) i in e ? (n[i] = zu(e[i], t[i])) : (r[i] = t[i]);
  return function (o) {
    for (i in n) r[i] = n[i](o);
    return r;
  };
}
var id = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  $c = new RegExp(id.source, 'g');
function Sb(e) {
  return function () {
    return e;
  };
}
function kb(e) {
  return function (t) {
    return e(t) + '';
  };
}
function Cb(e, t) {
  var n = (id.lastIndex = $c.lastIndex = 0),
    r,
    i,
    o,
    s = -1,
    a = [],
    l = [];
  for (e = e + '', t = t + ''; (r = id.exec(e)) && (i = $c.exec(t)); )
    (o = i.index) > n &&
      ((o = t.slice(n, o)), a[s] ? (a[s] += o) : (a[++s] = o)),
      (r = r[0]) === (i = i[0])
        ? a[s]
          ? (a[s] += i)
          : (a[++s] = i)
        : ((a[++s] = null), l.push({ i: s, x: ps(r, i) })),
      (n = $c.lastIndex);
  return (
    n < t.length && ((o = t.slice(n)), a[s] ? (a[s] += o) : (a[++s] = o)),
    a.length < 2
      ? l[0]
        ? kb(l[0].x)
        : Sb(t)
      : ((t = l.length),
        function (u) {
          for (var c = 0, f; c < t; ++c) a[(f = l[c]).i] = f.x(u);
          return a.join('');
        })
  );
}
function zu(e, t) {
  var n = typeof t,
    r;
  return t == null || n === 'boolean'
    ? Dp(t)
    : (n === 'number'
        ? ps
        : n === 'string'
        ? (r = ds(t))
          ? ((t = r), Cm)
          : Cb
        : t instanceof ds
        ? Cm
        : t instanceof Date
        ? t2
        : vb(t)
        ? yb
        : Array.isArray(t)
        ? xb
        : (typeof t.valueOf != 'function' && typeof t.toString != 'function') ||
          isNaN(t)
        ? wb
        : ps)(e, t);
}
function n2(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return Math.round(e * (1 - n) + t * n);
    }
  );
}
function bb(e) {
  return function () {
    return e;
  };
}
function _b(e) {
  return +e;
}
var bm = [0, 1];
function Lt(e) {
  return e;
}
function od(e, t) {
  return (t -= e = +e)
    ? function (n) {
        return (n - e) / t;
      }
    : bb(isNaN(t) ? NaN : 0.5);
}
function Pb(e, t) {
  var n;
  return (
    e > t && ((n = e), (e = t), (t = n)),
    function (r) {
      return Math.max(e, Math.min(t, r));
    }
  );
}
function Mb(e, t, n) {
  var r = e[0],
    i = e[1],
    o = t[0],
    s = t[1];
  return (
    i < r ? ((r = od(i, r)), (o = n(s, o))) : ((r = od(r, i)), (o = n(o, s))),
    function (a) {
      return o(r(a));
    }
  );
}
function Eb(e, t, n) {
  var r = Math.min(e.length, t.length) - 1,
    i = new Array(r),
    o = new Array(r),
    s = -1;
  for (
    e[r] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
    ++s < r;

  )
    (i[s] = od(e[s], e[s + 1])), (o[s] = n(t[s], t[s + 1]));
  return function (a) {
    var l = Xv(e, a, 1, r) - 1;
    return o[l](i[l](a));
  };
}
function Uu(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function Fp() {
  var e = bm,
    t = bm,
    n = zu,
    r,
    i,
    o,
    s = Lt,
    a,
    l,
    u;
  function c() {
    var d = Math.min(e.length, t.length);
    return (
      s !== Lt && (s = Pb(e[0], e[d - 1])),
      (a = d > 2 ? Eb : Mb),
      (l = u = null),
      f
    );
  }
  function f(d) {
    return d == null || isNaN((d = +d))
      ? o
      : (l || (l = a(e.map(r), t, n)))(r(s(d)));
  }
  return (
    (f.invert = function (d) {
      return s(i((u || (u = a(t, e.map(r), ps)))(d)));
    }),
    (f.domain = function (d) {
      return arguments.length ? ((e = Array.from(d, _b)), c()) : e.slice();
    }),
    (f.range = function (d) {
      return arguments.length ? ((t = Array.from(d)), c()) : t.slice();
    }),
    (f.rangeRound = function (d) {
      return (t = Array.from(d)), (n = n2), c();
    }),
    (f.clamp = function (d) {
      return arguments.length ? ((s = d ? !0 : Lt), c()) : s !== Lt;
    }),
    (f.interpolate = function (d) {
      return arguments.length ? ((n = d), c()) : n;
    }),
    (f.unknown = function (d) {
      return arguments.length ? ((o = d), f) : o;
    }),
    function (d, m) {
      return (r = d), (i = m), c();
    }
  );
}
function r2() {
  return Fp()(Lt, Lt);
}
function Tb(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString('en').replace(/,/g, '')
    : e.toString(10);
}
function Tl(e, t) {
  if (
    (n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf('e')) < 0
  )
    return null;
  var n,
    r = e.slice(0, n);
  return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
function ji(e) {
  return (e = Tl(Math.abs(e))), e ? e[1] : NaN;
}
function Ab(e, t) {
  return function (n, r) {
    for (
      var i = n.length, o = [], s = 0, a = e[0], l = 0;
      i > 0 &&
      a > 0 &&
      (l + a + 1 > r && (a = Math.max(1, r - l)),
      o.push(n.substring((i -= a), i + a)),
      !((l += a + 1) > r));

    )
      a = e[(s = (s + 1) % e.length)];
    return o.reverse().join(t);
  };
}
function Rb(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (n) {
      return e[+n];
    });
  };
}
var Ob =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function hs(e) {
  if (!(t = Ob.exec(e))) throw new Error('invalid format: ' + e);
  var t;
  return new zp({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10],
  });
}
hs.prototype = zp.prototype;
function zp(e) {
  (this.fill = e.fill === void 0 ? ' ' : e.fill + ''),
    (this.align = e.align === void 0 ? '>' : e.align + ''),
    (this.sign = e.sign === void 0 ? '-' : e.sign + ''),
    (this.symbol = e.symbol === void 0 ? '' : e.symbol + ''),
    (this.zero = !!e.zero),
    (this.width = e.width === void 0 ? void 0 : +e.width),
    (this.comma = !!e.comma),
    (this.precision = e.precision === void 0 ? void 0 : +e.precision),
    (this.trim = !!e.trim),
    (this.type = e.type === void 0 ? '' : e.type + '');
}
zp.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? '0' : '') +
    (this.width === void 0 ? '' : Math.max(1, this.width | 0)) +
    (this.comma ? ',' : '') +
    (this.precision === void 0 ? '' : '.' + Math.max(0, this.precision | 0)) +
    (this.trim ? '~' : '') +
    this.type
  );
};
function $b(e) {
  e: for (var t = e.length, n = 1, r = -1, i; n < t; ++n)
    switch (e[n]) {
      case '.':
        r = i = n;
        break;
      case '0':
        r === 0 && (r = n), (i = n);
        break;
      default:
        if (!+e[n]) break e;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? e.slice(0, r) + e.slice(i + 1) : e;
}
var i2;
function Ib(e, t) {
  var n = Tl(e, t);
  if (!n) return e + '';
  var r = n[0],
    i = n[1],
    o = i - (i2 = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    s = r.length;
  return o === s
    ? r
    : o > s
    ? r + new Array(o - s + 1).join('0')
    : o > 0
    ? r.slice(0, o) + '.' + r.slice(o)
    : '0.' + new Array(1 - o).join('0') + Tl(e, Math.max(0, t + o - 1))[0];
}
function _m(e, t) {
  var n = Tl(e, t);
  if (!n) return e + '';
  var r = n[0],
    i = n[1];
  return i < 0
    ? '0.' + new Array(-i).join('0') + r
    : r.length > i + 1
    ? r.slice(0, i + 1) + '.' + r.slice(i + 1)
    : r + new Array(i - r.length + 2).join('0');
}
const Pm = {
  '%': (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + '',
  d: Tb,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => _m(e * 100, t),
  r: _m,
  s: Ib,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function Mm(e) {
  return e;
}
var Em = Array.prototype.map,
  Tm = [
    'y',
    'z',
    'a',
    'f',
    'p',
    'n',
    'µ',
    'm',
    '',
    'k',
    'M',
    'G',
    'T',
    'P',
    'E',
    'Z',
    'Y',
  ];
function Lb(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? Mm
        : Ab(Em.call(e.grouping, Number), e.thousands + ''),
    n = e.currency === void 0 ? '' : e.currency[0] + '',
    r = e.currency === void 0 ? '' : e.currency[1] + '',
    i = e.decimal === void 0 ? '.' : e.decimal + '',
    o = e.numerals === void 0 ? Mm : Rb(Em.call(e.numerals, String)),
    s = e.percent === void 0 ? '%' : e.percent + '',
    a = e.minus === void 0 ? '−' : e.minus + '',
    l = e.nan === void 0 ? 'NaN' : e.nan + '';
  function u(f) {
    f = hs(f);
    var d = f.fill,
      m = f.align,
      y = f.sign,
      h = f.symbol,
      x = f.zero,
      p = f.width,
      g = f.comma,
      v = f.precision,
      w = f.trim,
      k = f.type;
    k === 'n'
      ? ((g = !0), (k = 'g'))
      : Pm[k] || (v === void 0 && (v = 12), (w = !0), (k = 'g')),
      (x || (d === '0' && m === '=')) && ((x = !0), (d = '0'), (m = '='));
    var S =
        h === '$'
          ? n
          : h === '#' && /[boxX]/.test(k)
          ? '0' + k.toLowerCase()
          : '',
      C = h === '$' ? r : /[%p]/.test(k) ? s : '',
      M = Pm[k],
      A = /[defgprs%]/.test(k);
    v =
      v === void 0
        ? 6
        : /[gprs]/.test(k)
        ? Math.max(1, Math.min(21, v))
        : Math.max(0, Math.min(20, v));
    function T(E) {
      var I = S,
        R = C,
        O,
        D,
        U;
      if (k === 'c') (R = M(E) + R), (E = '');
      else {
        E = +E;
        var B = E < 0 || 1 / E < 0;
        if (
          ((E = isNaN(E) ? l : M(Math.abs(E), v)),
          w && (E = $b(E)),
          B && +E == 0 && y !== '+' && (B = !1),
          (I = (B ? (y === '(' ? y : a) : y === '-' || y === '(' ? '' : y) + I),
          (R =
            (k === 's' ? Tm[8 + i2 / 3] : '') +
            R +
            (B && y === '(' ? ')' : '')),
          A)
        ) {
          for (O = -1, D = E.length; ++O < D; )
            if (((U = E.charCodeAt(O)), 48 > U || U > 57)) {
              (R = (U === 46 ? i + E.slice(O + 1) : E.slice(O)) + R),
                (E = E.slice(0, O));
              break;
            }
        }
      }
      g && !x && (E = t(E, 1 / 0));
      var $ = I.length + E.length + R.length,
        F = $ < p ? new Array(p - $ + 1).join(d) : '';
      switch (
        (g && x && ((E = t(F + E, F.length ? p - R.length : 1 / 0)), (F = '')),
        m)
      ) {
        case '<':
          E = I + E + R + F;
          break;
        case '=':
          E = I + F + E + R;
          break;
        case '^':
          E = F.slice(0, ($ = F.length >> 1)) + I + E + R + F.slice($);
          break;
        default:
          E = F + I + E + R;
          break;
      }
      return o(E);
    }
    return (
      (T.toString = function () {
        return f + '';
      }),
      T
    );
  }
  function c(f, d) {
    var m = u(((f = hs(f)), (f.type = 'f'), f)),
      y = Math.max(-8, Math.min(8, Math.floor(ji(d) / 3))) * 3,
      h = Math.pow(10, -y),
      x = Tm[8 + y / 3];
    return function (p) {
      return m(h * p) + x;
    };
  }
  return { format: u, formatPrefix: c };
}
var ga, Up, o2;
Nb({ thousands: ',', grouping: [3], currency: ['$', ''] });
function Nb(e) {
  return (ga = Lb(e)), (Up = ga.format), (o2 = ga.formatPrefix), ga;
}
function jb(e) {
  return Math.max(0, -ji(Math.abs(e)));
}
function Db(e, t) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(ji(t) / 3))) * 3 - ji(Math.abs(e))
  );
}
function Fb(e, t) {
  return (
    (e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, ji(t) - ji(e)) + 1
  );
}
function zb(e, t, n, r) {
  var i = nd(e, t, n),
    o;
  switch (((r = hs(r ?? ',f')), r.type)) {
    case 's': {
      var s = Math.max(Math.abs(e), Math.abs(t));
      return (
        r.precision == null && !isNaN((o = Db(i, s))) && (r.precision = o),
        o2(r, s)
      );
    }
    case '':
    case 'e':
    case 'g':
    case 'p':
    case 'r': {
      r.precision == null &&
        !isNaN((o = Fb(i, Math.max(Math.abs(e), Math.abs(t))))) &&
        (r.precision = o - (r.type === 'e'));
      break;
    }
    case 'f':
    case '%': {
      r.precision == null &&
        !isNaN((o = jb(i))) &&
        (r.precision = o - (r.type === '%') * 2);
      break;
    }
  }
  return Up(r);
}
function Vp(e) {
  var t = e.domain;
  return (
    (e.ticks = function (n) {
      var r = t();
      return ed(r[0], r[r.length - 1], n ?? 10);
    }),
    (e.tickFormat = function (n, r) {
      var i = t();
      return zb(i[0], i[i.length - 1], n ?? 10, r);
    }),
    (e.nice = function (n) {
      n == null && (n = 10);
      var r = t(),
        i = 0,
        o = r.length - 1,
        s = r[i],
        a = r[o],
        l,
        u,
        c = 10;
      for (
        a < s && ((u = s), (s = a), (a = u), (u = i), (i = o), (o = u));
        c-- > 0;

      ) {
        if (((u = td(s, a, n)), u === l)) return (r[i] = s), (r[o] = a), t(r);
        if (u > 0) (s = Math.floor(s / u) * u), (a = Math.ceil(a / u) * u);
        else if (u < 0) (s = Math.ceil(s * u) / u), (a = Math.floor(a * u) / u);
        else break;
        l = u;
      }
      return e;
    }),
    e
  );
}
function s2() {
  var e = r2();
  return (
    (e.copy = function () {
      return Uu(e, s2());
    }),
    mr.apply(e, arguments),
    Vp(e)
  );
}
function a2(e, t) {
  e = e.slice();
  var n = 0,
    r = e.length - 1,
    i = e[n],
    o = e[r],
    s;
  return (
    o < i && ((s = n), (n = r), (r = s), (s = i), (i = o), (o = s)),
    (e[n] = t.floor(i)),
    (e[r] = t.ceil(o)),
    e
  );
}
function Am(e) {
  return Math.log(e);
}
function Rm(e) {
  return Math.exp(e);
}
function Ub(e) {
  return -Math.log(-e);
}
function Vb(e) {
  return -Math.exp(-e);
}
function Hb(e) {
  return isFinite(e) ? +('1e' + e) : e < 0 ? 0 : e;
}
function Bb(e) {
  return e === 10 ? Hb : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function Wb(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)), (t) => Math.log(t) / e);
}
function Om(e) {
  return (t, n) => -e(-t, n);
}
function Yb(e) {
  const t = e(Am, Rm),
    n = t.domain;
  let r = 10,
    i,
    o;
  function s() {
    return (
      (i = Wb(r)),
      (o = Bb(r)),
      n()[0] < 0 ? ((i = Om(i)), (o = Om(o)), e(Ub, Vb)) : e(Am, Rm),
      t
    );
  }
  return (
    (t.base = function (a) {
      return arguments.length ? ((r = +a), s()) : r;
    }),
    (t.domain = function (a) {
      return arguments.length ? (n(a), s()) : n();
    }),
    (t.ticks = (a) => {
      const l = n();
      let u = l[0],
        c = l[l.length - 1];
      const f = c < u;
      f && ([u, c] = [c, u]);
      let d = i(u),
        m = i(c),
        y,
        h;
      const x = a == null ? 10 : +a;
      let p = [];
      if (!(r % 1) && m - d < x) {
        if (((d = Math.floor(d)), (m = Math.ceil(m)), u > 0)) {
          for (; d <= m; ++d)
            for (y = 1; y < r; ++y)
              if (((h = d < 0 ? y / o(-d) : y * o(d)), !(h < u))) {
                if (h > c) break;
                p.push(h);
              }
        } else
          for (; d <= m; ++d)
            for (y = r - 1; y >= 1; --y)
              if (((h = d > 0 ? y / o(-d) : y * o(d)), !(h < u))) {
                if (h > c) break;
                p.push(h);
              }
        p.length * 2 < x && (p = ed(u, c, x));
      } else p = ed(d, m, Math.min(m - d, x)).map(o);
      return f ? p.reverse() : p;
    }),
    (t.tickFormat = (a, l) => {
      if (
        (a == null && (a = 10),
        l == null && (l = r === 10 ? 's' : ','),
        typeof l != 'function' &&
          (!(r % 1) && (l = hs(l)).precision == null && (l.trim = !0),
          (l = Up(l))),
        a === 1 / 0)
      )
        return l;
      const u = Math.max(1, (r * a) / t.ticks().length);
      return (c) => {
        let f = c / o(Math.round(i(c)));
        return f * r < r - 0.5 && (f *= r), f <= u ? l(c) : '';
      };
    }),
    (t.nice = () =>
      n(
        a2(n(), {
          floor: (a) => o(Math.floor(i(a))),
          ceil: (a) => o(Math.ceil(i(a))),
        })
      )),
    t
  );
}
function l2() {
  const e = Yb(Fp()).domain([1, 10]);
  return (e.copy = () => Uu(e, l2()).base(e.base())), mr.apply(e, arguments), e;
}
function $m(e) {
  return function (t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function Gb(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function Qb(e) {
  return e < 0 ? -e * e : e * e;
}
function Kb(e) {
  var t = e(Lt, Lt),
    n = 1;
  function r() {
    return n === 1 ? e(Lt, Lt) : n === 0.5 ? e(Gb, Qb) : e($m(n), $m(1 / n));
  }
  return (
    (t.exponent = function (i) {
      return arguments.length ? ((n = +i), r()) : n;
    }),
    Vp(t)
  );
}
function Hp() {
  var e = Kb(Fp());
  return (
    (e.copy = function () {
      return Uu(e, Hp()).exponent(e.exponent());
    }),
    mr.apply(e, arguments),
    e
  );
}
function Xb() {
  return Hp.apply(null, arguments).exponent(0.5);
}
function u2() {
  var e = [0.5],
    t = [0, 1],
    n,
    r = 1;
  function i(o) {
    return o != null && o <= o ? t[Xv(e, o, 0, r)] : n;
  }
  return (
    (i.domain = function (o) {
      return arguments.length
        ? ((e = Array.from(o)), (r = Math.min(e.length, t.length - 1)), i)
        : e.slice();
    }),
    (i.range = function (o) {
      return arguments.length
        ? ((t = Array.from(o)), (r = Math.min(e.length, t.length - 1)), i)
        : t.slice();
    }),
    (i.invertExtent = function (o) {
      var s = t.indexOf(o);
      return [e[s - 1], e[s]];
    }),
    (i.unknown = function (o) {
      return arguments.length ? ((n = o), i) : n;
    }),
    (i.copy = function () {
      return u2().domain(e).range(t).unknown(n);
    }),
    mr.apply(i, arguments)
  );
}
const Ic = new Date(),
  Lc = new Date();
function Le(e, t, n, r) {
  function i(o) {
    return e((o = arguments.length === 0 ? new Date() : new Date(+o))), o;
  }
  return (
    (i.floor = (o) => (e((o = new Date(+o))), o)),
    (i.ceil = (o) => (e((o = new Date(o - 1))), t(o, 1), e(o), o)),
    (i.round = (o) => {
      const s = i(o),
        a = i.ceil(o);
      return o - s < a - o ? s : a;
    }),
    (i.offset = (o, s) => (
      t((o = new Date(+o)), s == null ? 1 : Math.floor(s)), o
    )),
    (i.range = (o, s, a) => {
      const l = [];
      if (
        ((o = i.ceil(o)),
        (a = a == null ? 1 : Math.floor(a)),
        !(o < s) || !(a > 0))
      )
        return l;
      let u;
      do l.push((u = new Date(+o))), t(o, a), e(o);
      while (u < o && o < s);
      return l;
    }),
    (i.filter = (o) =>
      Le(
        (s) => {
          if (s >= s) for (; e(s), !o(s); ) s.setTime(s - 1);
        },
        (s, a) => {
          if (s >= s)
            if (a < 0) for (; ++a <= 0; ) for (; t(s, -1), !o(s); );
            else for (; --a >= 0; ) for (; t(s, 1), !o(s); );
        }
      )),
    n &&
      ((i.count = (o, s) => (
        Ic.setTime(+o), Lc.setTime(+s), e(Ic), e(Lc), Math.floor(n(Ic, Lc))
      )),
      (i.every = (o) => (
        (o = Math.floor(o)),
        !isFinite(o) || !(o > 0)
          ? null
          : o > 1
          ? i.filter(r ? (s) => r(s) % o === 0 : (s) => i.count(0, s) % o === 0)
          : i
      ))),
    i
  );
}
const Al = Le(
  () => {},
  (e, t) => {
    e.setTime(+e + t);
  },
  (e, t) => t - e
);
Al.every = (e) => (
  (e = Math.floor(e)),
  !isFinite(e) || !(e > 0)
    ? null
    : e > 1
    ? Le(
        (t) => {
          t.setTime(Math.floor(t / e) * e);
        },
        (t, n) => {
          t.setTime(+t + n * e);
        },
        (t, n) => (n - t) / e
      )
    : Al
);
Al.range;
const Pn = 1e3,
  Nt = Pn * 60,
  Mn = Nt * 60,
  Ln = Mn * 24,
  Bp = Ln * 7,
  Im = Ln * 30,
  Nc = Ln * 365,
  Tr = Le(
    (e) => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, t) => {
      e.setTime(+e + t * Pn);
    },
    (e, t) => (t - e) / Pn,
    (e) => e.getUTCSeconds()
  );
Tr.range;
const Wp = Le(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * Pn);
  },
  (e, t) => {
    e.setTime(+e + t * Nt);
  },
  (e, t) => (t - e) / Nt,
  (e) => e.getMinutes()
);
Wp.range;
const Yp = Le(
  (e) => {
    e.setUTCSeconds(0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * Nt);
  },
  (e, t) => (t - e) / Nt,
  (e) => e.getUTCMinutes()
);
Yp.range;
const Gp = Le(
  (e) => {
    e.setTime(
      e - e.getMilliseconds() - e.getSeconds() * Pn - e.getMinutes() * Nt
    );
  },
  (e, t) => {
    e.setTime(+e + t * Mn);
  },
  (e, t) => (t - e) / Mn,
  (e) => e.getHours()
);
Gp.range;
const Qp = Le(
  (e) => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * Mn);
  },
  (e, t) => (t - e) / Mn,
  (e) => e.getUTCHours()
);
Qp.range;
const Us = Le(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Nt) / Ln,
  (e) => e.getDate() - 1
);
Us.range;
const Vu = Le(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / Ln,
  (e) => e.getUTCDate() - 1
);
Vu.range;
const c2 = Le(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / Ln,
  (e) => Math.floor(e / Ln)
);
c2.range;
function Gr(e) {
  return Le(
    (t) => {
      t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
        t.setHours(0, 0, 0, 0);
    },
    (t, n) => {
      t.setDate(t.getDate() + n * 7);
    },
    (t, n) =>
      (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Nt) / Bp
  );
}
const Hu = Gr(0),
  Rl = Gr(1),
  qb = Gr(2),
  Zb = Gr(3),
  Di = Gr(4),
  Jb = Gr(5),
  e_ = Gr(6);
Hu.range;
Rl.range;
qb.range;
Zb.range;
Di.range;
Jb.range;
e_.range;
function Qr(e) {
  return Le(
    (t) => {
      t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
        t.setUTCHours(0, 0, 0, 0);
    },
    (t, n) => {
      t.setUTCDate(t.getUTCDate() + n * 7);
    },
    (t, n) => (n - t) / Bp
  );
}
const Bu = Qr(0),
  Ol = Qr(1),
  t_ = Qr(2),
  n_ = Qr(3),
  Fi = Qr(4),
  r_ = Qr(5),
  i_ = Qr(6);
Bu.range;
Ol.range;
t_.range;
n_.range;
Fi.range;
r_.range;
i_.range;
const Kp = Le(
  (e) => {
    e.setDate(1), e.setHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setMonth(e.getMonth() + t);
  },
  (e, t) =>
    t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
  (e) => e.getMonth()
);
Kp.range;
const Xp = Le(
  (e) => {
    e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCMonth(e.getUTCMonth() + t);
  },
  (e, t) =>
    t.getUTCMonth() -
    e.getUTCMonth() +
    (t.getUTCFullYear() - e.getUTCFullYear()) * 12,
  (e) => e.getUTCMonth()
);
Xp.range;
const Nn = Le(
  (e) => {
    e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear()
);
Nn.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : Le(
        (t) => {
          t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0);
        },
        (t, n) => {
          t.setFullYear(t.getFullYear() + n * e);
        }
      );
Nn.range;
const jn = Le(
  (e) => {
    e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear()
);
jn.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : Le(
        (t) => {
          t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0);
        },
        (t, n) => {
          t.setUTCFullYear(t.getUTCFullYear() + n * e);
        }
      );
jn.range;
function f2(e, t, n, r, i, o) {
  const s = [
    [Tr, 1, Pn],
    [Tr, 5, 5 * Pn],
    [Tr, 15, 15 * Pn],
    [Tr, 30, 30 * Pn],
    [o, 1, Nt],
    [o, 5, 5 * Nt],
    [o, 15, 15 * Nt],
    [o, 30, 30 * Nt],
    [i, 1, Mn],
    [i, 3, 3 * Mn],
    [i, 6, 6 * Mn],
    [i, 12, 12 * Mn],
    [r, 1, Ln],
    [r, 2, 2 * Ln],
    [n, 1, Bp],
    [t, 1, Im],
    [t, 3, 3 * Im],
    [e, 1, Nc],
  ];
  function a(u, c, f) {
    const d = c < u;
    d && ([u, c] = [c, u]);
    const m = f && typeof f.range == 'function' ? f : l(u, c, f),
      y = m ? m.range(u, +c + 1) : [];
    return d ? y.reverse() : y;
  }
  function l(u, c, f) {
    const d = Math.abs(c - u) / f,
      m = Lp(([, , x]) => x).right(s, d);
    if (m === s.length) return e.every(nd(u / Nc, c / Nc, f));
    if (m === 0) return Al.every(Math.max(nd(u, c, f), 1));
    const [y, h] = s[d / s[m - 1][2] < s[m][2] / d ? m - 1 : m];
    return y.every(h);
  }
  return [a, l];
}
const [o_, s_] = f2(jn, Xp, Bu, c2, Qp, Yp),
  [a_, l_] = f2(Nn, Kp, Hu, Us, Gp, Wp);
function jc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Dc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function fo(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function u_(e) {
  var t = e.dateTime,
    n = e.date,
    r = e.time,
    i = e.periods,
    o = e.days,
    s = e.shortDays,
    a = e.months,
    l = e.shortMonths,
    u = po(i),
    c = ho(i),
    f = po(o),
    d = ho(o),
    m = po(s),
    y = ho(s),
    h = po(a),
    x = ho(a),
    p = po(l),
    g = ho(l),
    v = {
      a: B,
      A: $,
      b: F,
      B: H,
      c: null,
      d: zm,
      e: zm,
      f: O_,
      g: V_,
      G: B_,
      H: T_,
      I: A_,
      j: R_,
      L: d2,
      m: $_,
      M: I_,
      p: q,
      q: Y,
      Q: Hm,
      s: Bm,
      S: L_,
      u: N_,
      U: j_,
      V: D_,
      w: F_,
      W: z_,
      x: null,
      X: null,
      y: U_,
      Y: H_,
      Z: W_,
      '%': Vm,
    },
    w = {
      a: ye,
      A: ce,
      b: X,
      B: oe,
      c: null,
      d: Um,
      e: Um,
      f: K_,
      g: o6,
      G: a6,
      H: Y_,
      I: G_,
      j: Q_,
      L: h2,
      m: X_,
      M: q_,
      p: ue,
      q: fe,
      Q: Hm,
      s: Bm,
      S: Z_,
      u: J_,
      U: e6,
      V: t6,
      w: n6,
      W: r6,
      x: null,
      X: null,
      y: i6,
      Y: s6,
      Z: l6,
      '%': Vm,
    },
    k = {
      a: T,
      A: E,
      b: I,
      B: R,
      c: O,
      d: Dm,
      e: Dm,
      f: __,
      g: jm,
      G: Nm,
      H: Fm,
      I: Fm,
      j: S_,
      L: b_,
      m: w_,
      M: k_,
      p: A,
      q: x_,
      Q: M_,
      s: E_,
      S: C_,
      u: h_,
      U: m_,
      V: g_,
      w: p_,
      W: y_,
      x: D,
      X: U,
      y: jm,
      Y: Nm,
      Z: v_,
      '%': P_,
    };
  (v.x = S(n, v)),
    (v.X = S(r, v)),
    (v.c = S(t, v)),
    (w.x = S(n, w)),
    (w.X = S(r, w)),
    (w.c = S(t, w));
  function S(z, W) {
    return function (G) {
      var L = [],
        Se = -1,
        J = 0,
        Re = z.length,
        Ee,
        gt,
        Gs;
      for (G instanceof Date || (G = new Date(+G)); ++Se < Re; )
        z.charCodeAt(Se) === 37 &&
          (L.push(z.slice(J, Se)),
          (gt = Lm[(Ee = z.charAt(++Se))]) != null
            ? (Ee = z.charAt(++Se))
            : (gt = Ee === 'e' ? ' ' : '0'),
          (Gs = W[Ee]) && (Ee = Gs(G, gt)),
          L.push(Ee),
          (J = Se + 1));
      return L.push(z.slice(J, Se)), L.join('');
    };
  }
  function C(z, W) {
    return function (G) {
      var L = fo(1900, void 0, 1),
        Se = M(L, z, (G += ''), 0),
        J,
        Re;
      if (Se != G.length) return null;
      if ('Q' in L) return new Date(L.Q);
      if ('s' in L) return new Date(L.s * 1e3 + ('L' in L ? L.L : 0));
      if (
        (W && !('Z' in L) && (L.Z = 0),
        'p' in L && (L.H = (L.H % 12) + L.p * 12),
        L.m === void 0 && (L.m = 'q' in L ? L.q : 0),
        'V' in L)
      ) {
        if (L.V < 1 || L.V > 53) return null;
        'w' in L || (L.w = 1),
          'Z' in L
            ? ((J = Dc(fo(L.y, 0, 1))),
              (Re = J.getUTCDay()),
              (J = Re > 4 || Re === 0 ? Ol.ceil(J) : Ol(J)),
              (J = Vu.offset(J, (L.V - 1) * 7)),
              (L.y = J.getUTCFullYear()),
              (L.m = J.getUTCMonth()),
              (L.d = J.getUTCDate() + ((L.w + 6) % 7)))
            : ((J = jc(fo(L.y, 0, 1))),
              (Re = J.getDay()),
              (J = Re > 4 || Re === 0 ? Rl.ceil(J) : Rl(J)),
              (J = Us.offset(J, (L.V - 1) * 7)),
              (L.y = J.getFullYear()),
              (L.m = J.getMonth()),
              (L.d = J.getDate() + ((L.w + 6) % 7)));
      } else
        ('W' in L || 'U' in L) &&
          ('w' in L || (L.w = 'u' in L ? L.u % 7 : 'W' in L ? 1 : 0),
          (Re =
            'Z' in L
              ? Dc(fo(L.y, 0, 1)).getUTCDay()
              : jc(fo(L.y, 0, 1)).getDay()),
          (L.m = 0),
          (L.d =
            'W' in L
              ? ((L.w + 6) % 7) + L.W * 7 - ((Re + 5) % 7)
              : L.w + L.U * 7 - ((Re + 6) % 7)));
      return 'Z' in L
        ? ((L.H += (L.Z / 100) | 0), (L.M += L.Z % 100), Dc(L))
        : jc(L);
    };
  }
  function M(z, W, G, L) {
    for (var Se = 0, J = W.length, Re = G.length, Ee, gt; Se < J; ) {
      if (L >= Re) return -1;
      if (((Ee = W.charCodeAt(Se++)), Ee === 37)) {
        if (
          ((Ee = W.charAt(Se++)),
          (gt = k[Ee in Lm ? W.charAt(Se++) : Ee]),
          !gt || (L = gt(z, G, L)) < 0)
        )
          return -1;
      } else if (Ee != G.charCodeAt(L++)) return -1;
    }
    return L;
  }
  function A(z, W, G) {
    var L = u.exec(W.slice(G));
    return L ? ((z.p = c.get(L[0].toLowerCase())), G + L[0].length) : -1;
  }
  function T(z, W, G) {
    var L = m.exec(W.slice(G));
    return L ? ((z.w = y.get(L[0].toLowerCase())), G + L[0].length) : -1;
  }
  function E(z, W, G) {
    var L = f.exec(W.slice(G));
    return L ? ((z.w = d.get(L[0].toLowerCase())), G + L[0].length) : -1;
  }
  function I(z, W, G) {
    var L = p.exec(W.slice(G));
    return L ? ((z.m = g.get(L[0].toLowerCase())), G + L[0].length) : -1;
  }
  function R(z, W, G) {
    var L = h.exec(W.slice(G));
    return L ? ((z.m = x.get(L[0].toLowerCase())), G + L[0].length) : -1;
  }
  function O(z, W, G) {
    return M(z, t, W, G);
  }
  function D(z, W, G) {
    return M(z, n, W, G);
  }
  function U(z, W, G) {
    return M(z, r, W, G);
  }
  function B(z) {
    return s[z.getDay()];
  }
  function $(z) {
    return o[z.getDay()];
  }
  function F(z) {
    return l[z.getMonth()];
  }
  function H(z) {
    return a[z.getMonth()];
  }
  function q(z) {
    return i[+(z.getHours() >= 12)];
  }
  function Y(z) {
    return 1 + ~~(z.getMonth() / 3);
  }
  function ye(z) {
    return s[z.getUTCDay()];
  }
  function ce(z) {
    return o[z.getUTCDay()];
  }
  function X(z) {
    return l[z.getUTCMonth()];
  }
  function oe(z) {
    return a[z.getUTCMonth()];
  }
  function ue(z) {
    return i[+(z.getUTCHours() >= 12)];
  }
  function fe(z) {
    return 1 + ~~(z.getUTCMonth() / 3);
  }
  return {
    format: function (z) {
      var W = S((z += ''), v);
      return (
        (W.toString = function () {
          return z;
        }),
        W
      );
    },
    parse: function (z) {
      var W = C((z += ''), !1);
      return (
        (W.toString = function () {
          return z;
        }),
        W
      );
    },
    utcFormat: function (z) {
      var W = S((z += ''), w);
      return (
        (W.toString = function () {
          return z;
        }),
        W
      );
    },
    utcParse: function (z) {
      var W = C((z += ''), !0);
      return (
        (W.toString = function () {
          return z;
        }),
        W
      );
    },
  };
}
var Lm = { '-': '', _: ' ', 0: '0' },
  ze = /^\s*\d+/,
  c_ = /^%/,
  f_ = /[\\^$*+?|[\]().{}]/g;
function te(e, t, n) {
  var r = e < 0 ? '-' : '',
    i = (r ? -e : e) + '',
    o = i.length;
  return r + (o < n ? new Array(n - o + 1).join(t) + i : i);
}
function d_(e) {
  return e.replace(f_, '\\$&');
}
function po(e) {
  return new RegExp('^(?:' + e.map(d_).join('|') + ')', 'i');
}
function ho(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function p_(e, t, n) {
  var r = ze.exec(t.slice(n, n + 1));
  return r ? ((e.w = +r[0]), n + r[0].length) : -1;
}
function h_(e, t, n) {
  var r = ze.exec(t.slice(n, n + 1));
  return r ? ((e.u = +r[0]), n + r[0].length) : -1;
}
function m_(e, t, n) {
  var r = ze.exec(t.slice(n, n + 2));
  return r ? ((e.U = +r[0]), n + r[0].length) : -1;
}
function g_(e, t, n) {
  var r = ze.exec(t.slice(n, n + 2));
  return r ? ((e.V = +r[0]), n + r[0].length) : -1;
}
function y_(e, t, n) {
  var r = ze.exec(t.slice(n, n + 2));
  return r ? ((e.W = +r[0]), n + r[0].length) : -1;
}
function Nm(e, t, n) {
  var r = ze.exec(t.slice(n, n + 4));
  return r ? ((e.y = +r[0]), n + r[0].length) : -1;
}
function jm(e, t, n) {
  var r = ze.exec(t.slice(n, n + 2));
  return r ? ((e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length) : -1;
}
function v_(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r
    ? ((e.Z = r[1] ? 0 : -(r[2] + (r[3] || '00'))), n + r[0].length)
    : -1;
}
function x_(e, t, n) {
  var r = ze.exec(t.slice(n, n + 1));
  return r ? ((e.q = r[0] * 3 - 3), n + r[0].length) : -1;
}
function w_(e, t, n) {
  var r = ze.exec(t.slice(n, n + 2));
  return r ? ((e.m = r[0] - 1), n + r[0].length) : -1;
}
function Dm(e, t, n) {
  var r = ze.exec(t.slice(n, n + 2));
  return r ? ((e.d = +r[0]), n + r[0].length) : -1;
}
function S_(e, t, n) {
  var r = ze.exec(t.slice(n, n + 3));
  return r ? ((e.m = 0), (e.d = +r[0]), n + r[0].length) : -1;
}
function Fm(e, t, n) {
  var r = ze.exec(t.slice(n, n + 2));
  return r ? ((e.H = +r[0]), n + r[0].length) : -1;
}
function k_(e, t, n) {
  var r = ze.exec(t.slice(n, n + 2));
  return r ? ((e.M = +r[0]), n + r[0].length) : -1;
}
function C_(e, t, n) {
  var r = ze.exec(t.slice(n, n + 2));
  return r ? ((e.S = +r[0]), n + r[0].length) : -1;
}
function b_(e, t, n) {
  var r = ze.exec(t.slice(n, n + 3));
  return r ? ((e.L = +r[0]), n + r[0].length) : -1;
}
function __(e, t, n) {
  var r = ze.exec(t.slice(n, n + 6));
  return r ? ((e.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
}
function P_(e, t, n) {
  var r = c_.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function M_(e, t, n) {
  var r = ze.exec(t.slice(n));
  return r ? ((e.Q = +r[0]), n + r[0].length) : -1;
}
function E_(e, t, n) {
  var r = ze.exec(t.slice(n));
  return r ? ((e.s = +r[0]), n + r[0].length) : -1;
}
function zm(e, t) {
  return te(e.getDate(), t, 2);
}
function T_(e, t) {
  return te(e.getHours(), t, 2);
}
function A_(e, t) {
  return te(e.getHours() % 12 || 12, t, 2);
}
function R_(e, t) {
  return te(1 + Us.count(Nn(e), e), t, 3);
}
function d2(e, t) {
  return te(e.getMilliseconds(), t, 3);
}
function O_(e, t) {
  return d2(e, t) + '000';
}
function $_(e, t) {
  return te(e.getMonth() + 1, t, 2);
}
function I_(e, t) {
  return te(e.getMinutes(), t, 2);
}
function L_(e, t) {
  return te(e.getSeconds(), t, 2);
}
function N_(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function j_(e, t) {
  return te(Hu.count(Nn(e) - 1, e), t, 2);
}
function p2(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Di(e) : Di.ceil(e);
}
function D_(e, t) {
  return (e = p2(e)), te(Di.count(Nn(e), e) + (Nn(e).getDay() === 4), t, 2);
}
function F_(e) {
  return e.getDay();
}
function z_(e, t) {
  return te(Rl.count(Nn(e) - 1, e), t, 2);
}
function U_(e, t) {
  return te(e.getFullYear() % 100, t, 2);
}
function V_(e, t) {
  return (e = p2(e)), te(e.getFullYear() % 100, t, 2);
}
function H_(e, t) {
  return te(e.getFullYear() % 1e4, t, 4);
}
function B_(e, t) {
  var n = e.getDay();
  return (
    (e = n >= 4 || n === 0 ? Di(e) : Di.ceil(e)),
    te(e.getFullYear() % 1e4, t, 4)
  );
}
function W_(e) {
  var t = e.getTimezoneOffset();
  return (
    (t > 0 ? '-' : ((t *= -1), '+')) +
    te((t / 60) | 0, '0', 2) +
    te(t % 60, '0', 2)
  );
}
function Um(e, t) {
  return te(e.getUTCDate(), t, 2);
}
function Y_(e, t) {
  return te(e.getUTCHours(), t, 2);
}
function G_(e, t) {
  return te(e.getUTCHours() % 12 || 12, t, 2);
}
function Q_(e, t) {
  return te(1 + Vu.count(jn(e), e), t, 3);
}
function h2(e, t) {
  return te(e.getUTCMilliseconds(), t, 3);
}
function K_(e, t) {
  return h2(e, t) + '000';
}
function X_(e, t) {
  return te(e.getUTCMonth() + 1, t, 2);
}
function q_(e, t) {
  return te(e.getUTCMinutes(), t, 2);
}
function Z_(e, t) {
  return te(e.getUTCSeconds(), t, 2);
}
function J_(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function e6(e, t) {
  return te(Bu.count(jn(e) - 1, e), t, 2);
}
function m2(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Fi(e) : Fi.ceil(e);
}
function t6(e, t) {
  return (e = m2(e)), te(Fi.count(jn(e), e) + (jn(e).getUTCDay() === 4), t, 2);
}
function n6(e) {
  return e.getUTCDay();
}
function r6(e, t) {
  return te(Ol.count(jn(e) - 1, e), t, 2);
}
function i6(e, t) {
  return te(e.getUTCFullYear() % 100, t, 2);
}
function o6(e, t) {
  return (e = m2(e)), te(e.getUTCFullYear() % 100, t, 2);
}
function s6(e, t) {
  return te(e.getUTCFullYear() % 1e4, t, 4);
}
function a6(e, t) {
  var n = e.getUTCDay();
  return (
    (e = n >= 4 || n === 0 ? Fi(e) : Fi.ceil(e)),
    te(e.getUTCFullYear() % 1e4, t, 4)
  );
}
function l6() {
  return '+0000';
}
function Vm() {
  return '%';
}
function Hm(e) {
  return +e;
}
function Bm(e) {
  return Math.floor(+e / 1e3);
}
var ni, g2, y2;
u6({
  dateTime: '%x, %X',
  date: '%-m/%-d/%Y',
  time: '%-I:%M:%S %p',
  periods: ['AM', 'PM'],
  days: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  shortMonths: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
});
function u6(e) {
  return (
    (ni = u_(e)),
    (g2 = ni.format),
    ni.parse,
    (y2 = ni.utcFormat),
    ni.utcParse,
    ni
  );
}
function c6(e) {
  return new Date(e);
}
function f6(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function qp(e, t, n, r, i, o, s, a, l, u) {
  var c = r2(),
    f = c.invert,
    d = c.domain,
    m = u('.%L'),
    y = u(':%S'),
    h = u('%I:%M'),
    x = u('%I %p'),
    p = u('%a %d'),
    g = u('%b %d'),
    v = u('%B'),
    w = u('%Y');
  function k(S) {
    return (
      l(S) < S
        ? m
        : a(S) < S
        ? y
        : s(S) < S
        ? h
        : o(S) < S
        ? x
        : r(S) < S
        ? i(S) < S
          ? p
          : g
        : n(S) < S
        ? v
        : w
    )(S);
  }
  return (
    (c.invert = function (S) {
      return new Date(f(S));
    }),
    (c.domain = function (S) {
      return arguments.length ? d(Array.from(S, f6)) : d().map(c6);
    }),
    (c.ticks = function (S) {
      var C = d();
      return e(C[0], C[C.length - 1], S ?? 10);
    }),
    (c.tickFormat = function (S, C) {
      return C == null ? k : u(C);
    }),
    (c.nice = function (S) {
      var C = d();
      return (
        (!S || typeof S.range != 'function') &&
          (S = t(C[0], C[C.length - 1], S ?? 10)),
        S ? d(a2(C, S)) : c
      );
    }),
    (c.copy = function () {
      return Uu(c, qp(e, t, n, r, i, o, s, a, l, u));
    }),
    c
  );
}
function v2() {
  return mr.apply(
    qp(a_, l_, Nn, Kp, Hu, Us, Gp, Wp, Tr, g2).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments
  );
}
function d6() {
  return mr.apply(
    qp(o_, s_, jn, Xp, Bu, Vu, Qp, Yp, Tr, y2).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments
  );
}
function p6() {
  var e = 0,
    t = 1,
    n,
    r,
    i,
    o,
    s = Lt,
    a = !1,
    l;
  function u(f) {
    return f == null || isNaN((f = +f))
      ? l
      : s(
          i === 0
            ? 0.5
            : ((f = (o(f) - n) * i), a ? Math.max(0, Math.min(1, f)) : f)
        );
  }
  (u.domain = function (f) {
    return arguments.length
      ? (([e, t] = f),
        (n = o((e = +e))),
        (r = o((t = +t))),
        (i = n === r ? 0 : 1 / (r - n)),
        u)
      : [e, t];
  }),
    (u.clamp = function (f) {
      return arguments.length ? ((a = !!f), u) : a;
    }),
    (u.interpolator = function (f) {
      return arguments.length ? ((s = f), u) : s;
    });
  function c(f) {
    return function (d) {
      var m, y;
      return arguments.length ? (([m, y] = d), (s = f(m, y)), u) : [s(0), s(1)];
    };
  }
  return (
    (u.range = c(zu)),
    (u.rangeRound = c(n2)),
    (u.unknown = function (f) {
      return arguments.length ? ((l = f), u) : l;
    }),
    function (f) {
      return (
        (o = f), (n = f(e)), (r = f(t)), (i = n === r ? 0 : 1 / (r - n)), u
      );
    }
  );
}
function h6(e, t) {
  return t
    .domain(e.domain())
    .interpolator(e.interpolator())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function x2() {
  var e = Vp(p6()(Lt));
  return (
    (e.copy = function () {
      return h6(e, x2());
    }),
    eb.apply(e, arguments)
  );
}
function m6(e) {
  return e.scaleType === 'band';
}
function g6(e) {
  return e.scaleType === 'point';
}
function y6(e) {
  return e.type === 'piecewise'
    ? u2(e.thresholds, e.colors)
    : x2([e.min ?? 0, e.max ?? 100], e.color);
}
function $l(e) {
  return e.values
    ? Pl(e.values, e.colors).unknown(e.unknownColor ?? null)
    : Pl(
        e.colors.map((t, n) => n),
        e.colors
      ).unknown(e.unknownColor ?? null);
}
function Ba(e) {
  return e.type === 'ordinal' ? $l(e) : y6(e);
}
function ms(e) {
  return e.bandwidth !== void 0;
}
function v6(e) {
  const {
      tickMaxStep: t,
      tickMinStep: n,
      tickNumber: r,
      range: i,
      domain: o,
    } = e,
    s = n === void 0 ? 999 : Math.floor(Math.abs(o[1] - o[0]) / n),
    a = t === void 0 ? 2 : Math.ceil(Math.abs(o[1] - o[0]) / t),
    l = r ?? Math.floor(Math.abs(i[1] - i[0]) / 50);
  return Math.min(s, Math.max(a, l));
}
const Fc = { start: 0, extremities: 0, end: 1, middle: 0.5 };
function w2(e) {
  const {
    scale: t,
    tickNumber: n,
    valueFormatter: r,
    tickInterval: i,
    tickPlacement: o = 'extremities',
    tickLabelPlacement: s = 'middle',
  } = e;
  return P.useMemo(() => {
    if (ms(t)) {
      const l = t.domain();
      return t.bandwidth() > 0
        ? [
            ...(
              (typeof i == 'function' && l.filter(i)) ||
              (typeof i == 'object' && i) ||
              l
            ).map((f) => ({
              value: f,
              formattedValue:
                (r == null ? void 0 : r(f, { location: 'tick' })) ?? `${f}`,
              offset: t(f) - (t.step() - t.bandwidth()) / 2 + Fc[o] * t.step(),
              labelOffset: s === 'tick' ? 0 : t.step() * (Fc[s] - Fc[o]),
            })),
            ...(o === 'extremities'
              ? [
                  {
                    formattedValue: void 0,
                    offset: t.range()[1],
                    labelOffset: 0,
                  },
                ]
              : []),
          ]
        : (
            (typeof i == 'function' && l.filter(i)) ||
            (typeof i == 'object' && i) ||
            l
          ).map((c) => ({
            value: c,
            formattedValue:
              (r == null ? void 0 : r(c, { location: 'tick' })) ?? `${c}`,
            offset: t(c),
            labelOffset: 0,
          }));
    }
    return t.domain().length === 0 || t.domain()[0] === t.domain()[1]
      ? []
      : (typeof i == 'object' ? i : t.ticks(n)).map((l) => ({
          value: l,
          formattedValue:
            (r == null ? void 0 : r(l, { location: 'tick' })) ??
            t.tickFormat(n)(l),
          offset: t(l),
          labelOffset: 0,
        }));
  }, [t, i, n, r, o, s]);
}
function x6(e, t, n) {
  switch (e) {
    case 'log':
      return l2(t, n);
    case 'pow':
      return Hp(t, n);
    case 'sqrt':
      return Xb(t, n);
    case 'time':
      return v2(t, n);
    case 'utc':
      return d6(t, n);
    default:
      return s2(t, n);
  }
}
const w6 = (e, t, n, r, i, o) => {
    var d;
    const s = r[t],
      a = ((d = o[t]) == null ? void 0 : d.series) ?? {},
      [l, u] = (s == null
        ? void 0
        : s({ series: a, axis: n, isDefaultAxis: i })) ?? [null, null],
      [c, f] = e;
    return c === null || f === null
      ? [l, u]
      : l === null || u === null
      ? [c, f]
      : [Math.min(l, c), Math.max(u, f)];
  },
  S6 = (e, t, n, r) =>
    Object.keys(t).reduce((o, s) => w6(o, s, e, t, n, r), [null, null]),
  k6 = (e, t, n) =>
    (e == null
      ? void 0
      : e.map((r) => {
          const i = r.dataKey;
          if (i === void 0 || r.data !== void 0) return r;
          if (t === void 0)
            throw Error(
              `MUI X: ${n}-axis uses \`dataKey\` but no \`dataset\` is provided.`
            );
          return _({}, r, { data: t.map((o) => o[i]) });
        })) ?? [],
  C6 = (e, t, n) => {
    const r =
      t === 'x' ? [e.left, e.left + e.width] : [e.top + e.height, e.top];
    return n ? r.reverse() : r;
  },
  zc = (e, t) => {
    const n = e[1] - e[0],
      r = t[1] - t[0],
      i = e[0] - (t[0] * n) / r,
      o = e[1] + ((100 - t[1]) * n) / r;
    return [i, o];
  },
  Wm = (e) => (e == null ? void 0 : e[0]) instanceof Date;
function Ym(e, t) {
  const n = v2(e.data, t);
  return (r, { location: i }) =>
    i === 'tick' ? n.tickFormat(e.tickNumber)(r) : `${r.toLocaleString()}`;
}
const b6 = 0.2,
  _6 = 0.1;
function Gm({
  drawingArea: e,
  formattedSeries: t,
  axis: n,
  extremumGetters: r,
  dataset: i,
  axisDirection: o,
  zoomData: s,
}) {
  const a = k6(n, i, o),
    l = {};
  return (
    a.forEach((u, c) => {
      const f = c === 0,
        [d, m] = S6(u, r, f, t),
        y = s == null ? void 0 : s.find(({ axisId: T }) => T === u.id),
        h = y ? [y.start, y.end] : [0, 100],
        x = C6(e, o, u.reverse);
      if (m6(u)) {
        const T = u.categoryGapRatio ?? b6,
          E = u.barGapRatio ?? _6,
          I = o === 'x' ? x : [x[1], x[0]],
          R = zc(I, h);
        if (
          ((l[u.id] = _({ categoryGapRatio: T, barGapRatio: E }, u, {
            scale: Np(u.data, R)
              .paddingInner(T)
              .paddingOuter(T / 2),
            tickNumber: u.data.length,
            colorScale:
              u.colorMap &&
              (u.colorMap.type === 'ordinal'
                ? $l(_({ values: u.data }, u.colorMap))
                : Ba(u.colorMap)),
          })),
          Wm(u.data))
        ) {
          const O = Ym(u, I);
          l[u.id].valueFormatter = u.valueFormatter ?? O;
        }
      }
      if (g6(u)) {
        const T = o === 'x' ? x : [...x].reverse(),
          E = zc(T, h);
        if (
          ((l[u.id] = _({}, u, {
            scale: tb(u.data, E),
            tickNumber: u.data.length,
            colorScale:
              u.colorMap &&
              (u.colorMap.type === 'ordinal'
                ? $l(_({ values: u.data }, u.colorMap))
                : Ba(u.colorMap)),
          })),
          Wm(u.data))
        ) {
          const I = Ym(u, T);
          l[u.id].valueFormatter = u.valueFormatter ?? I;
        }
      }
      if (u.scaleType === 'band' || u.scaleType === 'point') return;
      const p = u.scaleType ?? 'linear',
        g = [u.min ?? d, u.max ?? m],
        v = v6(_({}, u, { range: x, domain: g })),
        w = v / ((h[1] - h[0]) / 100),
        k = zc(x, h),
        S = x6(p, g, k).nice(v),
        [C, M] = S.domain(),
        A = [u.min ?? C, u.max ?? M];
      l[u.id] = _({}, u, {
        scaleType: p,
        scale: S.domain(A),
        tickNumber: w,
        colorScale: u.colorMap && Ba(u.colorMap),
      });
    }),
    { axis: l, axisIds: a.map(({ id: u }) => u) }
  );
}
function Vn() {
  const {
    left: e,
    top: t,
    width: n,
    height: r,
    bottom: i,
    right: o,
    isPointInside: s,
  } = P.useContext(su);
  return P.useMemo(
    () => ({
      left: e,
      top: t,
      width: n,
      height: r,
      bottom: i,
      right: o,
      isPointInside: s,
    }),
    [r, e, t, n, i, o, s]
  );
}
function Kr() {
  const { isInitialized: e, data: t } = P.useContext(Qv);
  if (!e)
    throw new Error(
      [
        'MUI X: Could not find the series ref context.',
        'It looks like you rendered your component outside of a ChartsContainer parent component.',
      ].join(`
`)
    );
  return t;
}
function P6() {
  const e = Kr();
  return P.useMemo(() => e.pie, [e.pie]);
}
const S2 = P.createContext({
  isInitialized: !1,
  data: { xAxis: {}, yAxis: {}, xAxisIds: [], yAxisIds: [] },
});
function M6(e) {
  const {
      xAxis: t,
      yAxis: n,
      dataset: r,
      xExtremumGetters: i,
      yExtremumGetters: o,
      children: s,
    } = e,
    a = Kr(),
    l = Vn(),
    u = P.useMemo(
      () =>
        Gm({
          drawingArea: l,
          formattedSeries: a,
          axis: t,
          extremumGetters: i,
          dataset: r,
          axisDirection: 'x',
        }),
      [l, a, t, i, r]
    ),
    c = P.useMemo(
      () =>
        Gm({
          drawingArea: l,
          formattedSeries: a,
          axis: n,
          extremumGetters: o,
          dataset: r,
          axisDirection: 'y',
        }),
      [l, a, n, o, r]
    ),
    f = P.useMemo(
      () => ({
        isInitialized: !0,
        data: {
          xAxis: u.axis,
          yAxis: c.axis,
          xAxisIds: u.axisIds,
          yAxisIds: c.axisIds,
        },
      }),
      [u, c]
    );
  return b.jsx(S2.Provider, { value: f, children: s });
}
const gr = () => {
  const { data: e } = P.useContext(S2);
  return e;
};
function E6(e, t) {
  const n = e.createSVGPoint();
  return (
    (n.x = t.clientX),
    (n.y = t.clientY),
    n.matrixTransform(e.getScreenCTM().inverse())
  );
}
function k2() {
  const { isInitialized: e, data: t } = P.useContext(rv);
  if (!e)
    throw new Error(
      [
        'MUI X: Could not find the svg ref context.',
        'It looks like you rendered your component outside of a ChartsContainer parent component.',
      ].join(`
`)
    );
  return t;
}
function ri(e) {
  return e instanceof Date ? e.getTime() : e;
}
const T6 = (e) => {
    const t = k2(),
      n = Vn(),
      { xAxis: r, yAxis: i, xAxisIds: o, yAxisIds: s } = gr(),
      { dispatch: a } = P.useContext(Fs),
      l = o[0],
      u = s[0],
      c = P.useRef({ isInChart: !1, x: -1, y: -1 });
    P.useEffect(() => {
      const f = t.current;
      if (f === null || e) return () => {};
      function d(x, p) {
        const { scale: g, data: v, reverse: w } = x;
        if (!ms(g)) {
          const S = g.invert(p);
          if (v === void 0) return { value: S };
          const C = ri(S),
            M =
              v == null
                ? void 0
                : v.findIndex((A, T) => {
                    const E = ri(A);
                    return (
                      (E > C &&
                        (T === 0 ||
                          Math.abs(C - E) <= Math.abs(C - ri(v[T - 1])))) ||
                      (E <= C &&
                        (T === v.length - 1 ||
                          Math.abs(ri(S) - E) < Math.abs(ri(S) - ri(v[T + 1]))))
                    );
                  });
          return { value: M !== void 0 && M >= 0 ? v[M] : S, index: M };
        }
        const k =
          g.bandwidth() === 0
            ? Math.floor((p - Math.min(...g.range()) + g.step() / 2) / g.step())
            : Math.floor((p - Math.min(...g.range())) / g.step());
        if (k < 0 || k >= v.length) return null;
        if (w) {
          const S = v.length - 1 - k;
          return { index: S, value: v[S] };
        }
        return { index: k, value: v[k] };
      }
      const m = () => {
          (c.current = { isInChart: !1, x: -1, y: -1 }),
            a({ type: 'exitChart' });
        },
        y = (x) => {
          const p = 'targetTouches' in x ? x.targetTouches[0] : x,
            g = E6(f, p);
          if (
            ((c.current.x = g.x),
            (c.current.y = g.y),
            !n.isPointInside(g, x.target))
          ) {
            c.current.isInChart &&
              (a({ type: 'exitChart' }), (c.current.isInChart = !1));
            return;
          }
          c.current.isInChart = !0;
          const v = d(r[l], g.x),
            w = d(i[u], g.y);
          a({ type: 'updateAxis', data: { x: v, y: w } });
        },
        h = (x) => {
          const p = x.currentTarget;
          p &&
            p.hasPointerCapture(x.pointerId) &&
            p.releasePointerCapture(x.pointerId);
        };
      return (
        f.addEventListener('pointerdown', h),
        f.addEventListener('pointermove', y),
        f.addEventListener('pointerout', m),
        f.addEventListener('pointercancel', m),
        f.addEventListener('pointerleave', m),
        () => {
          f.removeEventListener('pointerdown', h),
            f.removeEventListener('pointermove', y),
            f.removeEventListener('pointerout', m),
            f.removeEventListener('pointercancel', m),
            f.removeEventListener('pointerleave', m);
        }
      );
    }, [t, a, u, i, l, r, e, n]);
  },
  A6 = [
    'children',
    'width',
    'height',
    'viewBox',
    'disableAxisListener',
    'className',
    'title',
    'desc',
  ],
  R6 = qe('svg', { name: 'MuiChartsSurface', slot: 'Root' })(() => ({
    touchAction: 'none',
  })),
  O6 = P.forwardRef(function (t, n) {
    const {
        children: r,
        width: i,
        height: o,
        viewBox: s,
        disableAxisListener: a = !1,
        className: l,
        title: u,
        desc: c,
      } = t,
      f = ie(t, A6),
      d = _({ width: i, height: o, x: 0, y: 0 }, s);
    return (
      T6(a),
      b.jsxs(
        R6,
        _(
          {
            width: i,
            height: o,
            viewBox: `${d.x} ${d.y} ${d.width} ${d.height}`,
            ref: n,
            className: l,
          },
          f,
          {
            children: [
              b.jsx('title', { children: u }),
              b.jsx('desc', { children: c }),
              r,
            ],
          }
        )
      )
    );
  });
function Qm(e) {
  return ms(e) ? (t) => (e(t) ?? 0) + e.bandwidth() / 2 : (t) => e(t);
}
const Zp = P.createContext({ zAxis: {}, zAxisIds: [] });
function $6(e) {
  const { zAxis: t, dataset: n, children: r } = e,
    i = P.useMemo(
      () =>
        t == null
          ? void 0
          : t.map((s) => {
              const a = s.dataKey;
              if (a === void 0 || s.data !== void 0) return s;
              if (n === void 0)
                throw Error(
                  'MUI X: z-axis uses `dataKey` but no `dataset` is provided.'
                );
              return _({}, s, { data: n.map((l) => l[a]) });
            }),
      [t, n]
    ),
    o = P.useMemo(() => {
      const s =
          (i == null
            ? void 0
            : i.map((l, u) => _({ id: `defaultized-z-axis-${u}` }, l))) ?? [],
        a = {};
      return (
        s.forEach((l) => {
          a[l.id] = _({}, l, {
            colorScale:
              l.colorMap &&
              (l.colorMap.type === 'ordinal' && l.data
                ? $l(_({ values: l.data }, l.colorMap))
                : Ba(
                    l.colorMap.type === 'continuous'
                      ? _({ min: l.min, max: l.max }, l.colorMap)
                      : l.colorMap
                  )),
          });
        }),
        { zAxis: a, zAxisIds: s.map(({ id: l }) => l) }
      );
    }, [i]);
  return b.jsx(Zp.Provider, { value: o, children: r });
}
function Km(e) {
  const {
    isReversed: t,
    gradientId: n,
    size: r,
    direction: i,
    scale: o,
    colorMap: s,
  } = e;
  return b.jsx('linearGradient', {
    id: n,
    x1: '0',
    x2: '0',
    y1: '0',
    y2: '0',
    [`${i}${t ? 1 : 2}`]: `${r}px`,
    gradientUnits: 'userSpaceOnUse',
    children: s.thresholds.map((a, l) => {
      const u = o(a);
      if (u === void 0) return null;
      const c = t ? 1 - u / r : u / r;
      return b.jsxs(
        P.Fragment,
        {
          children: [
            b.jsx('stop', {
              offset: c,
              stopColor: s.colors[l],
              stopOpacity: 1,
            }),
            b.jsx('stop', {
              offset: c,
              stopColor: s.colors[l + 1],
              stopOpacity: 1,
            }),
          ],
        },
        a.toString() + l
      );
    }),
  });
}
const I6 = 10;
function Xm(e) {
  const {
      gradientUnits: t,
      isReversed: n,
      gradientId: r,
      size: i,
      direction: o,
      scale: s,
      colorScale: a,
      colorMap: l,
    } = e,
    u = [l.min ?? 0, l.max ?? 100],
    c = u.map(s).filter((y) => y !== void 0);
  if (c.length !== 2) return null;
  const f = typeof u[0] == 'number' ? ps(u[0], u[1]) : t2(u[0], u[1]),
    d = Math.round((Math.max(...c) - Math.min(...c)) / I6),
    m = `${u[0]}-${u[1]}-`;
  return b.jsx('linearGradient', {
    id: r,
    x1: '0',
    x2: '0',
    y1: '0',
    y2: '0',
    [`${o}${n ? 1 : 2}`]: t === 'objectBoundingBox' ? 1 : `${i}px`,
    gradientUnits: t ?? 'userSpaceOnUse',
    children: Array.from({ length: d + 1 }, (y, h) => {
      const x = f(h / d);
      if (x === void 0) return null;
      const p = s(x);
      if (p === void 0) return null;
      const g = n ? 1 - p / i : p / i,
        v = a(x);
      return v === null
        ? null
        : b.jsx('stop', { offset: g, stopColor: v, stopOpacity: 1 }, m + h);
    }),
  });
}
function L6() {
  const { chartId: e } = P.useContext(su);
  return P.useCallback((t, n) => `${e}-gradient-${n}-${t}`, [e]);
}
function N6() {
  const { top: e, height: t, bottom: n, left: r, width: i, right: o } = Vn(),
    s = e + t + n,
    a = r + i + o,
    l = L6(),
    { xAxisIds: u, xAxis: c, yAxisIds: f, yAxis: d } = gr();
  return b.jsxs('defs', {
    children: [
      f
        .filter((m) => d[m].colorMap !== void 0)
        .map((m) => {
          const y = l(m, 'y'),
            { colorMap: h, scale: x, colorScale: p, reverse: g } = d[m];
          return (h == null ? void 0 : h.type) === 'piecewise'
            ? b.jsx(
                Km,
                {
                  isReversed: !g,
                  scale: x,
                  colorMap: h,
                  size: s,
                  gradientId: y,
                  direction: 'y',
                },
                y
              )
            : (h == null ? void 0 : h.type) === 'continuous'
            ? b.jsx(
                Xm,
                {
                  isReversed: !g,
                  scale: x,
                  colorScale: p,
                  colorMap: h,
                  size: s,
                  gradientId: y,
                  direction: 'y',
                },
                y
              )
            : null;
        }),
      u
        .filter((m) => c[m].colorMap !== void 0)
        .map((m) => {
          const y = l(m, 'x'),
            { colorMap: h, scale: x, reverse: p, colorScale: g } = c[m];
          return (h == null ? void 0 : h.type) === 'piecewise'
            ? b.jsx(
                Km,
                {
                  isReversed: p,
                  scale: x,
                  colorMap: h,
                  size: a,
                  gradientId: y,
                  direction: 'x',
                },
                y
              )
            : (h == null ? void 0 : h.type) === 'continuous'
            ? b.jsx(
                Xm,
                {
                  isReversed: p,
                  scale: x,
                  colorScale: g,
                  colorMap: h,
                  size: a,
                  gradientId: y,
                  direction: 'x',
                },
                y
              )
            : null;
        }),
    ],
  });
}
const C2 = P.createContext({
    isInitialized: !1,
    data: {
      highlightedItem: null,
      setHighlighted: () => {},
      clearHighlighted: () => {},
      isHighlighted: () => !1,
      isFaded: () => !1,
    },
  }),
  j6 = (e, t) => (n) =>
    e
      ? e.fade === 'series'
        ? n.seriesId === (t == null ? void 0 : t.seriesId) &&
          n.dataIndex !== (t == null ? void 0 : t.dataIndex)
        : e.fade === 'global'
        ? n.seriesId !== (t == null ? void 0 : t.seriesId) ||
          n.dataIndex !== (t == null ? void 0 : t.dataIndex)
        : !1
      : !1,
  D6 = (e, t) => (n) =>
    e
      ? e.highlight === 'series'
        ? n.seriesId === (t == null ? void 0 : t.seriesId)
        : e.highlight === 'item'
        ? n.dataIndex === (t == null ? void 0 : t.dataIndex) &&
          n.seriesId === (t == null ? void 0 : t.seriesId)
        : !1
      : !1,
  F6 = ['highlighted', 'faded'],
  z6 = (e) => {
    const t = e ?? {},
      { highlighted: n, faded: r } = t,
      i = ie(t, F6);
    return _({ highlight: n, fade: r }, i);
  };
function U6({ children: e, highlightedItem: t, onHighlightChange: n }) {
  const [r, i] = w5({
      controlled: t,
      default: null,
      name: 'HighlightedProvider',
      state: 'highlightedItem',
    }),
    o = Kr(),
    s = P.useMemo(() => {
      const u = new Map();
      return (
        Object.keys(o).forEach((c) => {
          const f = o[c];
          Object.keys((f == null ? void 0 : f.series) ?? {}).forEach((d) => {
            const m = f == null ? void 0 : f.series[d];
            u.set(d, z6(m == null ? void 0 : m.highlightScope));
          });
        }),
        u
      );
    }, [o]),
    a = r && r.seriesId ? s.get(r.seriesId) ?? void 0 : void 0,
    l = P.useMemo(
      () => ({
        isInitialized: !0,
        data: {
          highlightScope: a,
          highlightedItem: r,
          setHighlighted: (u) => {
            i(u), n == null || n(u);
          },
          clearHighlighted: () => {
            i(null), n == null || n(null);
          },
          isHighlighted: D6(a, r),
          isFaded: j6(a, r),
        },
      }),
      [r, a, i, n]
    );
  return b.jsx(C2.Provider, { value: l, children: e });
}
function Jp() {
  const { isInitialized: e, data: t } = P.useContext(C2);
  if (!e)
    throw new Error(
      [
        'MUI X: Could not find the highlighted ref context.',
        'It looks like you rendered your component outside of a ChartsContainer parent component.',
      ].join(`
`)
    );
  return t;
}
const b2 = (e) => {
    const { axis: t } = e,
      n = Math.min(...(t.data ?? [])),
      r = Math.max(...(t.data ?? []));
    return [n, r];
  },
  _2 = (e) => {
    const { series: t, axis: n, isDefaultAxis: r } = e;
    return Object.keys(t)
      .filter((i) => {
        const o = t[i].yAxisId ?? t[i].yAxisKey;
        return o === n.id || (r && o === void 0);
      })
      .reduce(
        (i, o) => {
          var l;
          const [s, a] = ((l = t[o].stackedData) == null
            ? void 0
            : l.reduce(
                (u, c) => [
                  Math.min(...c, ...(u[0] === null ? [] : [u[0]])),
                  Math.max(...c, ...(u[1] === null ? [] : [u[1]])),
                ],
                t[o].stackedData[0]
              )) ?? [null, null];
          return [
            i[0] === null ? s : Math.min(s, i[0]),
            i[1] === null ? a : Math.max(a, i[1]),
          ];
        },
        [null, null]
      );
  },
  V6 = (e) =>
    Object.keys(e.series).some((n) => e.series[n].layout === 'horizontal')
      ? _2(e)
      : b2(e),
  H6 = (e) =>
    Object.keys(e.series).some((n) => e.series[n].layout === 'horizontal')
      ? b2(e)
      : _2(e);
function $e(e) {
  return function () {
    return e;
  };
}
const qm = Math.abs,
  Ge = Math.atan2,
  xr = Math.cos,
  B6 = Math.max,
  Uc = Math.min,
  sn = Math.sin,
  yi = Math.sqrt,
  it = 1e-12,
  gs = Math.PI,
  Il = gs / 2,
  Wa = 2 * gs;
function W6(e) {
  return e > 1 ? 0 : e < -1 ? gs : Math.acos(e);
}
function Zm(e) {
  return e >= 1 ? Il : e <= -1 ? -Il : Math.asin(e);
}
const sd = Math.PI,
  ad = 2 * sd,
  Cr = 1e-6,
  Y6 = ad - Cr;
function P2(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function G6(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return P2;
  const n = 10 ** t;
  return function (r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class Q6 {
  constructor(t) {
    (this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ''),
      (this._append = t == null ? P2 : G6(t));
  }
  moveTo(t, n) {
    this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +n)}`;
  }
  closePath() {
    this._x1 !== null &&
      ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
  }
  lineTo(t, n) {
    this._append`L${(this._x1 = +t)},${(this._y1 = +n)}`;
  }
  quadraticCurveTo(t, n, r, i) {
    this._append`Q${+t},${+n},${(this._x1 = +r)},${(this._y1 = +i)}`;
  }
  bezierCurveTo(t, n, r, i, o, s) {
    this._append`C${+t},${+n},${+r},${+i},${(this._x1 = +o)},${(this._y1 =
      +s)}`;
  }
  arcTo(t, n, r, i, o) {
    if (((t = +t), (n = +n), (r = +r), (i = +i), (o = +o), o < 0))
      throw new Error(`negative radius: ${o}`);
    let s = this._x1,
      a = this._y1,
      l = r - t,
      u = i - n,
      c = s - t,
      f = a - n,
      d = c * c + f * f;
    if (this._x1 === null) this._append`M${(this._x1 = t)},${(this._y1 = n)}`;
    else if (d > Cr)
      if (!(Math.abs(f * l - u * c) > Cr) || !o)
        this._append`L${(this._x1 = t)},${(this._y1 = n)}`;
      else {
        let m = r - s,
          y = i - a,
          h = l * l + u * u,
          x = m * m + y * y,
          p = Math.sqrt(h),
          g = Math.sqrt(d),
          v = o * Math.tan((sd - Math.acos((h + d - x) / (2 * p * g))) / 2),
          w = v / g,
          k = v / p;
        Math.abs(w - 1) > Cr && this._append`L${t + w * c},${n + w * f}`,
          this._append`A${o},${o},0,0,${+(f * m > c * y)},${(this._x1 =
            t + k * l)},${(this._y1 = n + k * u)}`;
      }
  }
  arc(t, n, r, i, o, s) {
    if (((t = +t), (n = +n), (r = +r), (s = !!s), r < 0))
      throw new Error(`negative radius: ${r}`);
    let a = r * Math.cos(i),
      l = r * Math.sin(i),
      u = t + a,
      c = n + l,
      f = 1 ^ s,
      d = s ? i - o : o - i;
    this._x1 === null
      ? this._append`M${u},${c}`
      : (Math.abs(this._x1 - u) > Cr || Math.abs(this._y1 - c) > Cr) &&
        this._append`L${u},${c}`,
      r &&
        (d < 0 && (d = (d % ad) + ad),
        d > Y6
          ? this._append`A${r},${r},0,1,${f},${t - a},${
              n - l
            }A${r},${r},0,1,${f},${(this._x1 = u)},${(this._y1 = c)}`
          : d > Cr &&
            this._append`A${r},${r},0,${+(d >= sd)},${f},${(this._x1 =
              t + r * Math.cos(o))},${(this._y1 = n + r * Math.sin(o))}`);
  }
  rect(t, n, r, i) {
    this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
      +n)}h${(r = +r)}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function K6(e) {
  let t = 3;
  return (
    (e.digits = function (n) {
      if (!arguments.length) return t;
      if (n == null) t = null;
      else {
        const r = Math.floor(n);
        if (!(r >= 0)) throw new RangeError(`invalid digits: ${n}`);
        t = r;
      }
      return e;
    }),
    () => new Q6(t)
  );
}
function X6(e) {
  return e.innerRadius;
}
function q6(e) {
  return e.outerRadius;
}
function Z6(e) {
  return e.startAngle;
}
function J6(e) {
  return e.endAngle;
}
function eP(e) {
  return e && e.padAngle;
}
function tP(e, t, n, r, i, o, s, a) {
  var l = n - e,
    u = r - t,
    c = s - i,
    f = a - o,
    d = f * l - c * u;
  if (!(d * d < it))
    return (d = (c * (t - o) - f * (e - i)) / d), [e + d * l, t + d * u];
}
function ya(e, t, n, r, i, o, s) {
  var a = e - n,
    l = t - r,
    u = (s ? o : -o) / yi(a * a + l * l),
    c = u * l,
    f = -u * a,
    d = e + c,
    m = t + f,
    y = n + c,
    h = r + f,
    x = (d + y) / 2,
    p = (m + h) / 2,
    g = y - d,
    v = h - m,
    w = g * g + v * v,
    k = i - o,
    S = d * h - y * m,
    C = (v < 0 ? -1 : 1) * yi(B6(0, k * k * w - S * S)),
    M = (S * v - g * C) / w,
    A = (-S * g - v * C) / w,
    T = (S * v + g * C) / w,
    E = (-S * g + v * C) / w,
    I = M - x,
    R = A - p,
    O = T - x,
    D = E - p;
  return (
    I * I + R * R > O * O + D * D && ((M = T), (A = E)),
    {
      cx: M,
      cy: A,
      x01: -c,
      y01: -f,
      x11: M * (i / k - 1),
      y11: A * (i / k - 1),
    }
  );
}
function M2() {
  var e = X6,
    t = q6,
    n = $e(0),
    r = null,
    i = Z6,
    o = J6,
    s = eP,
    a = null,
    l = K6(u);
  function u() {
    var c,
      f,
      d = +e.apply(this, arguments),
      m = +t.apply(this, arguments),
      y = i.apply(this, arguments) - Il,
      h = o.apply(this, arguments) - Il,
      x = qm(h - y),
      p = h > y;
    if ((a || (a = c = l()), m < d && ((f = m), (m = d), (d = f)), !(m > it)))
      a.moveTo(0, 0);
    else if (x > Wa - it)
      a.moveTo(m * xr(y), m * sn(y)),
        a.arc(0, 0, m, y, h, !p),
        d > it && (a.moveTo(d * xr(h), d * sn(h)), a.arc(0, 0, d, h, y, p));
    else {
      var g = y,
        v = h,
        w = y,
        k = h,
        S = x,
        C = x,
        M = s.apply(this, arguments) / 2,
        A = M > it && (r ? +r.apply(this, arguments) : yi(d * d + m * m)),
        T = Uc(qm(m - d) / 2, +n.apply(this, arguments)),
        E = T,
        I = T,
        R,
        O;
      if (A > it) {
        var D = Zm((A / d) * sn(M)),
          U = Zm((A / m) * sn(M));
        (S -= D * 2) > it
          ? ((D *= p ? 1 : -1), (w += D), (k -= D))
          : ((S = 0), (w = k = (y + h) / 2)),
          (C -= U * 2) > it
            ? ((U *= p ? 1 : -1), (g += U), (v -= U))
            : ((C = 0), (g = v = (y + h) / 2));
      }
      var B = m * xr(g),
        $ = m * sn(g),
        F = d * xr(k),
        H = d * sn(k);
      if (T > it) {
        var q = m * xr(v),
          Y = m * sn(v),
          ye = d * xr(w),
          ce = d * sn(w),
          X;
        if (x < gs)
          if ((X = tP(B, $, ye, ce, q, Y, F, H))) {
            var oe = B - X[0],
              ue = $ - X[1],
              fe = q - X[0],
              z = Y - X[1],
              W =
                1 /
                sn(
                  W6(
                    (oe * fe + ue * z) /
                      (yi(oe * oe + ue * ue) * yi(fe * fe + z * z))
                  ) / 2
                ),
              G = yi(X[0] * X[0] + X[1] * X[1]);
            (E = Uc(T, (d - G) / (W - 1))), (I = Uc(T, (m - G) / (W + 1)));
          } else E = I = 0;
      }
      C > it
        ? I > it
          ? ((R = ya(ye, ce, B, $, m, I, p)),
            (O = ya(q, Y, F, H, m, I, p)),
            a.moveTo(R.cx + R.x01, R.cy + R.y01),
            I < T
              ? a.arc(R.cx, R.cy, I, Ge(R.y01, R.x01), Ge(O.y01, O.x01), !p)
              : (a.arc(R.cx, R.cy, I, Ge(R.y01, R.x01), Ge(R.y11, R.x11), !p),
                a.arc(
                  0,
                  0,
                  m,
                  Ge(R.cy + R.y11, R.cx + R.x11),
                  Ge(O.cy + O.y11, O.cx + O.x11),
                  !p
                ),
                a.arc(O.cx, O.cy, I, Ge(O.y11, O.x11), Ge(O.y01, O.x01), !p)))
          : (a.moveTo(B, $), a.arc(0, 0, m, g, v, !p))
        : a.moveTo(B, $),
        !(d > it) || !(S > it)
          ? a.lineTo(F, H)
          : E > it
          ? ((R = ya(F, H, q, Y, d, -E, p)),
            (O = ya(B, $, ye, ce, d, -E, p)),
            a.lineTo(R.cx + R.x01, R.cy + R.y01),
            E < T
              ? a.arc(R.cx, R.cy, E, Ge(R.y01, R.x01), Ge(O.y01, O.x01), !p)
              : (a.arc(R.cx, R.cy, E, Ge(R.y01, R.x01), Ge(R.y11, R.x11), !p),
                a.arc(
                  0,
                  0,
                  d,
                  Ge(R.cy + R.y11, R.cx + R.x11),
                  Ge(O.cy + O.y11, O.cx + O.x11),
                  p
                ),
                a.arc(O.cx, O.cy, E, Ge(O.y11, O.x11), Ge(O.y01, O.x01), !p)))
          : a.arc(0, 0, d, k, w, p);
    }
    if ((a.closePath(), c)) return (a = null), c + '' || null;
  }
  return (
    (u.centroid = function () {
      var c = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2,
        f =
          (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 - gs / 2;
      return [xr(f) * c, sn(f) * c];
    }),
    (u.innerRadius = function (c) {
      return arguments.length
        ? ((e = typeof c == 'function' ? c : $e(+c)), u)
        : e;
    }),
    (u.outerRadius = function (c) {
      return arguments.length
        ? ((t = typeof c == 'function' ? c : $e(+c)), u)
        : t;
    }),
    (u.cornerRadius = function (c) {
      return arguments.length
        ? ((n = typeof c == 'function' ? c : $e(+c)), u)
        : n;
    }),
    (u.padRadius = function (c) {
      return arguments.length
        ? ((r = c == null ? null : typeof c == 'function' ? c : $e(+c)), u)
        : r;
    }),
    (u.startAngle = function (c) {
      return arguments.length
        ? ((i = typeof c == 'function' ? c : $e(+c)), u)
        : i;
    }),
    (u.endAngle = function (c) {
      return arguments.length
        ? ((o = typeof c == 'function' ? c : $e(+c)), u)
        : o;
    }),
    (u.padAngle = function (c) {
      return arguments.length
        ? ((s = typeof c == 'function' ? c : $e(+c)), u)
        : s;
    }),
    (u.context = function (c) {
      return arguments.length ? ((a = c ?? null), u) : a;
    }),
    u
  );
}
function E2(e) {
  return typeof e == 'object' && 'length' in e ? e : Array.from(e);
}
function nP(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function rP(e) {
  return e;
}
function iP() {
  var e = rP,
    t = nP,
    n = null,
    r = $e(0),
    i = $e(Wa),
    o = $e(0);
  function s(a) {
    var l,
      u = (a = E2(a)).length,
      c,
      f,
      d = 0,
      m = new Array(u),
      y = new Array(u),
      h = +r.apply(this, arguments),
      x = Math.min(Wa, Math.max(-Wa, i.apply(this, arguments) - h)),
      p,
      g = Math.min(Math.abs(x) / u, o.apply(this, arguments)),
      v = g * (x < 0 ? -1 : 1),
      w;
    for (l = 0; l < u; ++l)
      (w = y[(m[l] = l)] = +e(a[l], l, a)) > 0 && (d += w);
    for (
      t != null
        ? m.sort(function (k, S) {
            return t(y[k], y[S]);
          })
        : n != null &&
          m.sort(function (k, S) {
            return n(a[k], a[S]);
          }),
        l = 0,
        f = d ? (x - u * v) / d : 0;
      l < u;
      ++l, h = p
    )
      (c = m[l]),
        (w = y[c]),
        (p = h + (w > 0 ? w * f : 0) + v),
        (y[c] = {
          data: a[c],
          index: l,
          value: w,
          startAngle: h,
          endAngle: p,
          padAngle: g,
        });
    return y;
  }
  return (
    (s.value = function (a) {
      return arguments.length
        ? ((e = typeof a == 'function' ? a : $e(+a)), s)
        : e;
    }),
    (s.sortValues = function (a) {
      return arguments.length ? ((t = a), (n = null), s) : t;
    }),
    (s.sort = function (a) {
      return arguments.length ? ((n = a), (t = null), s) : n;
    }),
    (s.startAngle = function (a) {
      return arguments.length
        ? ((r = typeof a == 'function' ? a : $e(+a)), s)
        : r;
    }),
    (s.endAngle = function (a) {
      return arguments.length
        ? ((i = typeof a == 'function' ? a : $e(+a)), s)
        : i;
    }),
    (s.padAngle = function (a) {
      return arguments.length
        ? ((o = typeof a == 'function' ? a : $e(+a)), s)
        : o;
    }),
    s
  );
}
function zi(e, t) {
  if ((s = e.length) > 1)
    for (var n = 1, r, i, o = e[t[0]], s, a = o.length; n < s; ++n)
      for (i = o, o = e[t[n]], r = 0; r < a; ++r)
        o[r][1] += o[r][0] = isNaN(i[r][1]) ? i[r][0] : i[r][1];
}
function Ui(e) {
  for (var t = e.length, n = new Array(t); --t >= 0; ) n[t] = t;
  return n;
}
function oP(e, t) {
  return e[t];
}
function sP(e) {
  const t = [];
  return (t.key = e), t;
}
function T2() {
  var e = $e([]),
    t = Ui,
    n = zi,
    r = oP;
  function i(o) {
    var s = Array.from(e.apply(this, arguments), sP),
      a,
      l = s.length,
      u = -1,
      c;
    for (const f of o)
      for (a = 0, ++u; a < l; ++a)
        (s[a][u] = [0, +r(f, s[a].key, u, o)]).data = f;
    for (a = 0, c = E2(t(s)); a < l; ++a) s[c[a]].index = a;
    return n(s, c), s;
  }
  return (
    (i.keys = function (o) {
      return arguments.length
        ? ((e = typeof o == 'function' ? o : $e(Array.from(o))), i)
        : e;
    }),
    (i.value = function (o) {
      return arguments.length
        ? ((r = typeof o == 'function' ? o : $e(+o)), i)
        : r;
    }),
    (i.order = function (o) {
      return arguments.length
        ? ((t =
            o == null ? Ui : typeof o == 'function' ? o : $e(Array.from(o))),
          i)
        : t;
    }),
    (i.offset = function (o) {
      return arguments.length ? ((n = o ?? zi), i) : n;
    }),
    i
  );
}
function aP(e, t) {
  if ((r = e.length) > 0) {
    for (var n, r, i = 0, o = e[0].length, s; i < o; ++i) {
      for (s = n = 0; n < r; ++n) s += e[n][i][1] || 0;
      if (s) for (n = 0; n < r; ++n) e[n][i][1] /= s;
    }
    zi(e, t);
  }
}
function lP(e, t) {
  if ((l = e.length) > 0)
    for (var n, r = 0, i, o, s, a, l, u = e[t[0]].length; r < u; ++r)
      for (s = a = 0, n = 0; n < l; ++n)
        (o = (i = e[t[n]][r])[1] - i[0]) > 0
          ? ((i[0] = s), (i[1] = s += o))
          : o < 0
          ? ((i[1] = a), (i[0] = a += o))
          : ((i[0] = 0), (i[1] = o));
}
function uP(e, t) {
  if ((i = e.length) > 0) {
    for (var n = 0, r = e[t[0]], i, o = r.length; n < o; ++n) {
      for (var s = 0, a = 0; s < i; ++s) a += e[s][n][1] || 0;
      r[n][1] += r[n][0] = -a / 2;
    }
    zi(e, t);
  }
}
function cP(e, t) {
  if (!(!((s = e.length) > 0) || !((o = (i = e[t[0]]).length) > 0))) {
    for (var n = 0, r = 1, i, o, s; r < o; ++r) {
      for (var a = 0, l = 0, u = 0; a < s; ++a) {
        for (
          var c = e[t[a]],
            f = c[r][1] || 0,
            d = c[r - 1][1] || 0,
            m = (f - d) / 2,
            y = 0;
          y < a;
          ++y
        ) {
          var h = e[t[y]],
            x = h[r][1] || 0,
            p = h[r - 1][1] || 0;
          m += x - p;
        }
        (l += f), (u += m * f);
      }
      (i[r - 1][1] += i[r - 1][0] = n), l && (n -= u / l);
    }
    (i[r - 1][1] += i[r - 1][0] = n), zi(e, t);
  }
}
function A2(e) {
  var t = e.map(fP);
  return Ui(e).sort(function (n, r) {
    return t[n] - t[r];
  });
}
function fP(e) {
  for (var t = -1, n = 0, r = e.length, i, o = -1 / 0; ++t < r; )
    (i = +e[t][1]) > o && ((o = i), (n = t));
  return n;
}
function R2(e) {
  var t = e.map(O2);
  return Ui(e).sort(function (n, r) {
    return t[n] - t[r];
  });
}
function O2(e) {
  for (var t = 0, n = -1, r = e.length, i; ++n < r; )
    (i = +e[n][1]) && (t += i);
  return t;
}
function dP(e) {
  return R2(e).reverse();
}
function pP(e) {
  var t = e.length,
    n,
    r,
    i = e.map(O2),
    o = A2(e),
    s = 0,
    a = 0,
    l = [],
    u = [];
  for (n = 0; n < t; ++n)
    (r = o[n]), s < a ? ((s += i[r]), l.push(r)) : ((a += i[r]), u.push(r));
  return u.reverse().concat(l);
}
function hP(e) {
  return Ui(e).reverse();
}
const Vc = {
    appearance: A2,
    ascending: R2,
    descending: dP,
    insideOut: pP,
    none: Ui,
    reverse: hP,
  },
  Hc = { expand: aP, diverging: lP, none: zi, silhouette: uP, wiggle: cP },
  $2 = (e) => {
    const { series: t, seriesOrder: n, defaultStrategy: r } = e,
      i = [],
      o = {};
    return (
      n.forEach((s) => {
        const { stack: a, stackOrder: l, stackOffset: u } = t[s];
        a === void 0
          ? i.push({
              ids: [s],
              stackingOrder: Vc.none,
              stackingOffset: Hc.none,
            })
          : o[a] === void 0
          ? ((o[a] = i.length),
            i.push({
              ids: [s],
              stackingOrder:
                Vc[l ?? (r == null ? void 0 : r.stackOrder) ?? 'none'],
              stackingOffset:
                Hc[u ?? (r == null ? void 0 : r.stackOffset) ?? 'diverging'],
            }))
          : (i[o[a]].ids.push(s),
            l !== void 0 && (i[o[a]].stackingOrder = Vc[l]),
            u !== void 0 && (i[o[a]].stackingOffset = Hc[u]));
      }),
      i
    );
  };
function eh(e, t) {
  const n = {};
  return (
    Object.keys(e).forEach((r) => {
      n[r] = _({}, e[r], { valueFormatter: e[r].valueFormatter ?? t });
    }),
    n
  );
}
const mP = (e, t) => {
  const { seriesOrder: n, series: r } = e,
    i = $2(e),
    o = t ?? [];
  n.forEach((a) => {
    const l = r[a].data;
    if (l !== void 0)
      l.forEach((u, c) => {
        o.length <= c ? o.push({ [a]: u }) : (o[c][a] = u);
      });
    else if (t === void 0)
      throw new Error(
        [
          `MUI X: bar series with id='${a}' has no data.`,
          'Either provide a data property to the series or use the dataset prop.',
        ].join(`
`)
      );
  });
  const s = {};
  return (
    i.forEach((a) => {
      const { ids: l, stackingOffset: u, stackingOrder: c } = a,
        f = T2()
          .keys(
            l.map((d) => {
              const m = r[d].dataKey;
              return r[d].data === void 0 && m !== void 0 ? m : d;
            })
          )
          .value((d, m) => d[m] ?? 0)
          .order(c)
          .offset(u)(o);
      l.forEach((d, m) => {
        const y = r[d].dataKey;
        s[d] = _({ layout: 'vertical' }, r[d], {
          data: y
            ? t.map((h) => {
                const x = h[y];
                return typeof x != 'number' ? 0 : x;
              })
            : r[d].data,
          stackedData: f[m].map(([h, x]) => [h, x]),
        });
      });
    }),
    {
      seriesOrder: n,
      stackingGroups: i,
      series: eh(s, (a) => (a == null ? '' : a.toLocaleString())),
    }
  );
};
function gP(e, t, n) {
  const r = e.layout === 'vertical',
    i = r
      ? t == null
        ? void 0
        : t.colorScale
      : n == null
      ? void 0
      : n.colorScale,
    o = r
      ? n == null
        ? void 0
        : n.colorScale
      : t == null
      ? void 0
      : t.colorScale,
    s = r ? (t == null ? void 0 : t.data) : n == null ? void 0 : n.data;
  return o
    ? (a) => {
        const l = e.data[a],
          u = l === null ? e.color : o(l);
        return u === null ? e.color : u;
      }
    : i && s
    ? (a) => {
        const l = s[a],
          u = l === null ? e.color : i(l);
        return u === null ? e.color : u;
      }
    : () => e.color;
}
const yP = {
    seriesType: 'bar',
    seriesFormatter: mP,
    colorProcessor: gP,
    xExtremumGetter: V6,
    yExtremumGetter: H6,
  },
  Ll = (e, t) =>
    e[0] === null || e[1] === null
      ? t
      : t[0] === null || t[1] === null
      ? e
      : [Math.min(e[0], t[0]), Math.max(e[1], t[1])],
  vP = (e) => {
    const { series: t, axis: n, isDefaultAxis: r } = e;
    return Object.keys(t)
      .filter((i) => {
        const o = t[i].xAxisId ?? t[i].xAxisKey;
        return o === n.id || (o === void 0 && r);
      })
      .reduce(
        (i, o) => {
          const s = t[o].data.reduce(
            (a, { x: l }) => Ll(a, [l, l]),
            [null, null]
          );
          return Ll(i, s);
        },
        [null, null]
      );
  },
  xP = (e) => {
    const { series: t, axis: n, isDefaultAxis: r } = e;
    return Object.keys(t)
      .filter((i) => {
        const o = t[i].yAxisId ?? t[i].yAxisKey;
        return o === n.id || (o === void 0 && r);
      })
      .reduce(
        (i, o) => {
          const s = t[o].data.reduce(
            (a, { y: l }) => Ll(a, [l, l]),
            [null, null]
          );
          return Ll(i, s);
        },
        [null, null]
      );
  },
  wP = ({ series: e, seriesOrder: t }) => ({
    series: eh(e, (n) => `(${n.x}, ${n.y})`),
    seriesOrder: t,
  });
function SP(e, t, n, r) {
  const i = r == null ? void 0 : r.colorScale,
    o = n == null ? void 0 : n.colorScale,
    s = t == null ? void 0 : t.colorScale;
  return i
    ? (a) => {
        var c, f;
        if (
          ((c = r == null ? void 0 : r.data) == null ? void 0 : c[a]) !== void 0
        ) {
          const d = i(
            (f = r == null ? void 0 : r.data) == null ? void 0 : f[a]
          );
          if (d !== null) return d;
        }
        const l = e.data[a],
          u = l === null ? e.color : i(l.z);
        return u === null ? e.color : u;
      }
    : o
    ? (a) => {
        const l = e.data[a],
          u = l === null ? e.color : o(l.y);
        return u === null ? e.color : u;
      }
    : s
    ? (a) => {
        const l = e.data[a],
          u = l === null ? e.color : s(l.x);
        return u === null ? e.color : u;
      }
    : () => e.color;
}
const kP = {
    seriesType: 'scatter',
    seriesFormatter: wP,
    colorProcessor: SP,
    xExtremumGetter: vP,
    yExtremumGetter: xP,
  },
  CP = (e) => {
    const { axis: t } = e,
      n = Math.min(...(t.data ?? [])),
      r = Math.max(...(t.data ?? []));
    return [n, r];
  };
function bP(e, t) {
  return t.length === 0
    ? [null, null]
    : t.reduce((n, r) => {
        const [i, o] = e(r);
        return n[0] === null
          ? [Math.min(i, o), Math.max(i, o)]
          : [Math.min(i, o, n[0]), Math.max(i, o, n[1])];
      }, e(t[0]));
}
const _P = (e) => {
    const { series: t, axis: n, isDefaultAxis: r } = e;
    return Object.keys(t)
      .filter((i) => {
        const o = t[i].yAxisId ?? t[i].yAxisKey;
        return o === n.id || (r && o === void 0);
      })
      .reduce(
        (i, o) => {
          const { area: s, stackedData: a } = t[o],
            u =
              s !== void 0 && n.scaleType !== 'log'
                ? (m) => m
                : (m) => [m[1], m[1]],
            c = bP(u, a);
          if (i[0] === null) return c;
          if (c[0] === null) return i;
          const [f, d] = c;
          return [Math.min(f, i[0]), Math.max(d, i[1])];
        },
        [null, null]
      );
  },
  PP = (e, t) => {
    const { seriesOrder: n, series: r } = e,
      i = $2(_({}, e, { defaultStrategy: { stackOffset: 'none' } })),
      o = t ?? [];
    n.forEach((a) => {
      const l = r[a].data;
      l !== void 0 &&
        l.forEach((u, c) => {
          o.length <= c ? o.push({ [a]: u }) : (o[c][a] = u);
        });
    });
    const s = {};
    return (
      i.forEach((a) => {
        const { ids: l, stackingOrder: u, stackingOffset: c } = a,
          f = T2()
            .keys(
              l.map((d) => {
                const m = r[d].dataKey;
                return r[d].data === void 0 && m !== void 0 ? m : d;
              })
            )
            .value((d, m) => d[m] ?? 0)
            .order(u)
            .offset(c)(o);
        l.forEach((d, m) => {
          const y = r[d].dataKey;
          s[d] = _({}, r[d], {
            data: y
              ? t.map((h) => {
                  const x = h[y];
                  return typeof x != 'number' ? null : x;
                })
              : r[d].data,
            stackedData: f[m].map(([h, x]) => [h, x]),
          });
        });
      }),
      {
        seriesOrder: n,
        stackingGroups: i,
        series: eh(s, (a) => (a == null ? '' : a.toLocaleString())),
      }
    );
  };
function MP(e, t, n) {
  const r = n == null ? void 0 : n.colorScale,
    i = t == null ? void 0 : t.colorScale;
  return r
    ? (o) => {
        const s = e.data[o],
          a = s === null ? e.color : r(s);
        return a === null ? e.color : a;
      }
    : i
    ? (o) => {
        var l;
        const s = (l = t.data) == null ? void 0 : l[o],
          a = s === null ? e.color : i(s);
        return a === null ? e.color : a;
      }
    : () => e.color;
}
const EP = {
  seriesType: 'line',
  colorProcessor: MP,
  seriesFormatter: PP,
  xExtremumGetter: CP,
  yExtremumGetter: _P,
};
function nn(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
const TP = (e = 'none') => {
    if (typeof e == 'function') return e;
    switch (e) {
      case 'none':
        return null;
      case 'desc':
        return (t, n) => n - t;
      case 'asc':
        return (t, n) => t - n;
      default:
        return null;
    }
  },
  AP = (e) => {
    const { seriesOrder: t, series: n } = e,
      r = {};
    return (
      t.forEach((i) => {
        const o = iP()
          .startAngle((2 * Math.PI * (n[i].startAngle ?? 0)) / 360)
          .endAngle((2 * Math.PI * (n[i].endAngle ?? 360)) / 360)
          .padAngle((2 * Math.PI * (n[i].paddingAngle ?? 0)) / 360)
          .sortValues(TP(n[i].sortingValues ?? 'none'))(
          n[i].data.map((s) => s.value)
        );
        r[i] = _({ valueFormatter: (s) => s.value.toLocaleString() }, n[i], {
          data: n[i].data
            .map((s, a) =>
              _({}, s, { id: s.id ?? `auto-generated-pie-id-${i}-${a}` }, o[a])
            )
            .map((s, a) => {
              var l, u;
              return _({}, s, {
                formattedValue:
                  ((u = (l = n[i]).valueFormatter) == null
                    ? void 0
                    : u.call(l, _({}, s, { label: nn(s.label, 'arc') }), {
                        dataIndex: a,
                      })) ?? s.value.toLocaleString(),
              });
            }),
        });
      }),
      { seriesOrder: t, series: r }
    );
  };
function RP(e) {
  return (t) => e.data[t].color;
}
const OP = { seriesType: 'pie', colorProcessor: RP, seriesFormatter: AP },
  $P = [yP, kP, EP, OP];
function IP(e) {
  const t = e ?? $P;
  return P.useMemo(() => {
    const n = {},
      r = {},
      i = {},
      o = {};
    for (let s = 0; s < t.length; s += 1) {
      const a = t[s];
      (n[a.seriesType] = a.seriesFormatter),
        (r[a.seriesType] = a.colorProcessor),
        a.xExtremumGetter && (i[a.seriesType] = a.xExtremumGetter),
        a.yExtremumGetter && (o[a.seriesType] = a.yExtremumGetter);
    }
    return {
      seriesFormatters: n,
      colorProcessors: r,
      xExtremumGetters: i,
      yExtremumGetters: o,
    };
  }, [t]);
}
var th = Hs(),
  Q = (e) => Vs(e, th),
  nh = Hs();
Q.write = (e) => Vs(e, nh);
var Wu = Hs();
Q.onStart = (e) => Vs(e, Wu);
var rh = Hs();
Q.onFrame = (e) => Vs(e, rh);
var ih = Hs();
Q.onFinish = (e) => Vs(e, ih);
var Mi = [];
Q.setTimeout = (e, t) => {
  const n = Q.now() + t,
    r = () => {
      const o = Mi.findIndex((s) => s.cancel == r);
      ~o && Mi.splice(o, 1), (Jn -= ~o ? 1 : 0);
    },
    i = { time: n, handler: e, cancel: r };
  return Mi.splice(I2(n), 0, i), (Jn += 1), L2(), i;
};
var I2 = (e) => ~(~Mi.findIndex((t) => t.time > e) || ~Mi.length);
Q.cancel = (e) => {
  Wu.delete(e), rh.delete(e), ih.delete(e), th.delete(e), nh.delete(e);
};
Q.sync = (e) => {
  (ld = !0), Q.batchedUpdates(e), (ld = !1);
};
Q.throttle = (e) => {
  let t;
  function n() {
    try {
      e(...t);
    } finally {
      t = null;
    }
  }
  function r(...i) {
    (t = i), Q.onStart(n);
  }
  return (
    (r.handler = e),
    (r.cancel = () => {
      Wu.delete(n), (t = null);
    }),
    r
  );
};
var oh = typeof window < 'u' ? window.requestAnimationFrame : () => {};
Q.use = (e) => (oh = e);
Q.now = typeof performance < 'u' ? () => performance.now() : Date.now;
Q.batchedUpdates = (e) => e();
Q.catch = console.error;
Q.frameLoop = 'always';
Q.advance = () => {
  Q.frameLoop !== 'demand'
    ? console.warn(
        'Cannot call the manual advancement of rafz whilst frameLoop is not set as demand'
      )
    : j2();
};
var Zn = -1,
  Jn = 0,
  ld = !1;
function Vs(e, t) {
  ld ? (t.delete(e), e(0)) : (t.add(e), L2());
}
function L2() {
  Zn < 0 && ((Zn = 0), Q.frameLoop !== 'demand' && oh(N2));
}
function LP() {
  Zn = -1;
}
function N2() {
  ~Zn && (oh(N2), Q.batchedUpdates(j2));
}
function j2() {
  const e = Zn;
  Zn = Q.now();
  const t = I2(Zn);
  if ((t && (D2(Mi.splice(0, t), (n) => n.handler()), (Jn -= t)), !Jn)) {
    LP();
    return;
  }
  Wu.flush(),
    th.flush(e ? Math.min(64, Zn - e) : 16.667),
    rh.flush(),
    nh.flush(),
    ih.flush();
}
function Hs() {
  let e = new Set(),
    t = e;
  return {
    add(n) {
      (Jn += t == e && !e.has(n) ? 1 : 0), e.add(n);
    },
    delete(n) {
      return (Jn -= t == e && e.has(n) ? 1 : 0), e.delete(n);
    },
    flush(n) {
      t.size &&
        ((e = new Set()),
        (Jn -= t.size),
        D2(t, (r) => r(n) && e.add(r)),
        (Jn += e.size),
        (t = e));
    },
  };
}
function D2(e, t) {
  e.forEach((n) => {
    try {
      t(n);
    } catch (r) {
      Q.catch(r);
    }
  });
}
var NP = Object.defineProperty,
  jP = (e, t) => {
    for (var n in t) NP(e, n, { get: t[n], enumerable: !0 });
  },
  Ct = {};
jP(Ct, {
  assign: () => FP,
  colors: () => lr,
  createStringInterpolator: () => ah,
  skipAnimation: () => z2,
  to: () => F2,
  willAdvance: () => lh,
});
function ud() {}
var DP = (e, t, n) =>
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
  j = {
    arr: Array.isArray,
    obj: (e) => !!e && e.constructor.name === 'Object',
    fun: (e) => typeof e == 'function',
    str: (e) => typeof e == 'string',
    num: (e) => typeof e == 'number',
    und: (e) => e === void 0,
  };
function kn(e, t) {
  if (j.arr(e)) {
    if (!j.arr(t) || e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
    return !0;
  }
  return e === t;
}
var K = (e, t) => e.forEach(t);
function xn(e, t, n) {
  if (j.arr(e)) {
    for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    return;
  }
  for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var Je = (e) => (j.und(e) ? [] : j.arr(e) ? e : [e]);
function Lo(e, t) {
  if (e.size) {
    const n = Array.from(e);
    e.clear(), K(n, t);
  }
}
var bo = (e, ...t) => Lo(e, (n) => n(...t)),
  sh = () =>
    typeof window > 'u' ||
    !window.navigator ||
    /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
  ah,
  F2,
  lr = null,
  z2 = !1,
  lh = ud,
  FP = (e) => {
    e.to && (F2 = e.to),
      e.now && (Q.now = e.now),
      e.colors !== void 0 && (lr = e.colors),
      e.skipAnimation != null && (z2 = e.skipAnimation),
      e.createStringInterpolator && (ah = e.createStringInterpolator),
      e.requestAnimationFrame && Q.use(e.requestAnimationFrame),
      e.batchedUpdates && (Q.batchedUpdates = e.batchedUpdates),
      e.willAdvance && (lh = e.willAdvance),
      e.frameLoop && (Q.frameLoop = e.frameLoop);
  },
  No = new Set(),
  $t = [],
  Bc = [],
  Nl = 0,
  Yu = {
    get idle() {
      return !No.size && !$t.length;
    },
    start(e) {
      Nl > e.priority ? (No.add(e), Q.onStart(zP)) : (U2(e), Q(cd));
    },
    advance: cd,
    sort(e) {
      if (Nl) Q.onFrame(() => Yu.sort(e));
      else {
        const t = $t.indexOf(e);
        ~t && ($t.splice(t, 1), V2(e));
      }
    },
    clear() {
      ($t = []), No.clear();
    },
  };
function zP() {
  No.forEach(U2), No.clear(), Q(cd);
}
function U2(e) {
  $t.includes(e) || V2(e);
}
function V2(e) {
  $t.splice(
    UP($t, (t) => t.priority > e.priority),
    0,
    e
  );
}
function cd(e) {
  const t = Bc;
  for (let n = 0; n < $t.length; n++) {
    const r = $t[n];
    (Nl = r.priority), r.idle || (lh(r), r.advance(e), r.idle || t.push(r));
  }
  return (Nl = 0), (Bc = $t), (Bc.length = 0), ($t = t), $t.length > 0;
}
function UP(e, t) {
  const n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
var VP = (e, t, n) => Math.min(Math.max(n, e), t),
  HP = {
    transparent: 0,
    aliceblue: 4042850303,
    antiquewhite: 4209760255,
    aqua: 16777215,
    aquamarine: 2147472639,
    azure: 4043309055,
    beige: 4126530815,
    bisque: 4293182719,
    black: 255,
    blanchedalmond: 4293643775,
    blue: 65535,
    blueviolet: 2318131967,
    brown: 2771004159,
    burlywood: 3736635391,
    burntsienna: 3934150143,
    cadetblue: 1604231423,
    chartreuse: 2147418367,
    chocolate: 3530104575,
    coral: 4286533887,
    cornflowerblue: 1687547391,
    cornsilk: 4294499583,
    crimson: 3692313855,
    cyan: 16777215,
    darkblue: 35839,
    darkcyan: 9145343,
    darkgoldenrod: 3095792639,
    darkgray: 2846468607,
    darkgreen: 6553855,
    darkgrey: 2846468607,
    darkkhaki: 3182914559,
    darkmagenta: 2332068863,
    darkolivegreen: 1433087999,
    darkorange: 4287365375,
    darkorchid: 2570243327,
    darkred: 2332033279,
    darksalmon: 3918953215,
    darkseagreen: 2411499519,
    darkslateblue: 1211993087,
    darkslategray: 793726975,
    darkslategrey: 793726975,
    darkturquoise: 13554175,
    darkviolet: 2483082239,
    deeppink: 4279538687,
    deepskyblue: 12582911,
    dimgray: 1768516095,
    dimgrey: 1768516095,
    dodgerblue: 512819199,
    firebrick: 2988581631,
    floralwhite: 4294635775,
    forestgreen: 579543807,
    fuchsia: 4278255615,
    gainsboro: 3705462015,
    ghostwhite: 4177068031,
    gold: 4292280575,
    goldenrod: 3668254975,
    gray: 2155905279,
    green: 8388863,
    greenyellow: 2919182335,
    grey: 2155905279,
    honeydew: 4043305215,
    hotpink: 4285117695,
    indianred: 3445382399,
    indigo: 1258324735,
    ivory: 4294963455,
    khaki: 4041641215,
    lavender: 3873897215,
    lavenderblush: 4293981695,
    lawngreen: 2096890111,
    lemonchiffon: 4294626815,
    lightblue: 2916673279,
    lightcoral: 4034953471,
    lightcyan: 3774873599,
    lightgoldenrodyellow: 4210742015,
    lightgray: 3553874943,
    lightgreen: 2431553791,
    lightgrey: 3553874943,
    lightpink: 4290167295,
    lightsalmon: 4288707327,
    lightseagreen: 548580095,
    lightskyblue: 2278488831,
    lightslategray: 2005441023,
    lightslategrey: 2005441023,
    lightsteelblue: 2965692159,
    lightyellow: 4294959359,
    lime: 16711935,
    limegreen: 852308735,
    linen: 4210091775,
    magenta: 4278255615,
    maroon: 2147483903,
    mediumaquamarine: 1724754687,
    mediumblue: 52735,
    mediumorchid: 3126187007,
    mediumpurple: 2473647103,
    mediumseagreen: 1018393087,
    mediumslateblue: 2070474495,
    mediumspringgreen: 16423679,
    mediumturquoise: 1221709055,
    mediumvioletred: 3340076543,
    midnightblue: 421097727,
    mintcream: 4127193855,
    mistyrose: 4293190143,
    moccasin: 4293178879,
    navajowhite: 4292783615,
    navy: 33023,
    oldlace: 4260751103,
    olive: 2155872511,
    olivedrab: 1804477439,
    orange: 4289003775,
    orangered: 4282712319,
    orchid: 3664828159,
    palegoldenrod: 4008225535,
    palegreen: 2566625535,
    paleturquoise: 2951671551,
    palevioletred: 3681588223,
    papayawhip: 4293907967,
    peachpuff: 4292524543,
    peru: 3448061951,
    pink: 4290825215,
    plum: 3718307327,
    powderblue: 2967529215,
    purple: 2147516671,
    rebeccapurple: 1714657791,
    red: 4278190335,
    rosybrown: 3163525119,
    royalblue: 1097458175,
    saddlebrown: 2336560127,
    salmon: 4202722047,
    sandybrown: 4104413439,
    seagreen: 780883967,
    seashell: 4294307583,
    sienna: 2689740287,
    silver: 3233857791,
    skyblue: 2278484991,
    slateblue: 1784335871,
    slategray: 1887473919,
    slategrey: 1887473919,
    snow: 4294638335,
    springgreen: 16744447,
    steelblue: 1182971135,
    tan: 3535047935,
    teal: 8421631,
    thistle: 3636451583,
    tomato: 4284696575,
    turquoise: 1088475391,
    violet: 4001558271,
    wheat: 4125012991,
    white: 4294967295,
    whitesmoke: 4126537215,
    yellow: 4294902015,
    yellowgreen: 2597139199,
  },
  Jt = '[-+]?\\d*\\.?\\d+',
  jl = Jt + '%';
function Gu(...e) {
  return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
var BP = new RegExp('rgb' + Gu(Jt, Jt, Jt)),
  WP = new RegExp('rgba' + Gu(Jt, Jt, Jt, Jt)),
  YP = new RegExp('hsl' + Gu(Jt, jl, jl)),
  GP = new RegExp('hsla' + Gu(Jt, jl, jl, Jt)),
  QP = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  KP = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  XP = /^#([0-9a-fA-F]{6})$/,
  qP = /^#([0-9a-fA-F]{8})$/;
function ZP(e) {
  let t;
  return typeof e == 'number'
    ? e >>> 0 === e && e >= 0 && e <= 4294967295
      ? e
      : null
    : (t = XP.exec(e))
    ? parseInt(t[1] + 'ff', 16) >>> 0
    : lr && lr[e] !== void 0
    ? lr[e]
    : (t = BP.exec(e))
    ? ((ii(t[1]) << 24) | (ii(t[2]) << 16) | (ii(t[3]) << 8) | 255) >>> 0
    : (t = WP.exec(e))
    ? ((ii(t[1]) << 24) | (ii(t[2]) << 16) | (ii(t[3]) << 8) | tg(t[4])) >>> 0
    : (t = QP.exec(e))
    ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
    : (t = qP.exec(e))
    ? parseInt(t[1], 16) >>> 0
    : (t = KP.exec(e))
    ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
    : (t = YP.exec(e))
    ? (Jm(eg(t[1]), va(t[2]), va(t[3])) | 255) >>> 0
    : (t = GP.exec(e))
    ? (Jm(eg(t[1]), va(t[2]), va(t[3])) | tg(t[4])) >>> 0
    : null;
}
function Wc(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function Jm(e, t, n) {
  const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
    i = 2 * n - r,
    o = Wc(i, r, e + 1 / 3),
    s = Wc(i, r, e),
    a = Wc(i, r, e - 1 / 3);
  return (
    (Math.round(o * 255) << 24) |
    (Math.round(s * 255) << 16) |
    (Math.round(a * 255) << 8)
  );
}
function ii(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function eg(e) {
  return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function tg(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function va(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function ng(e) {
  let t = ZP(e);
  if (t === null) return e;
  t = t || 0;
  const n = (t & 4278190080) >>> 24,
    r = (t & 16711680) >>> 16,
    i = (t & 65280) >>> 8,
    o = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${i}, ${o})`;
}
var ys = (e, t, n) => {
  if (j.fun(e)) return e;
  if (j.arr(e)) return ys({ range: e, output: t, extrapolate: n });
  if (j.str(e.output[0])) return ah(e);
  const r = e,
    i = r.output,
    o = r.range || [0, 1],
    s = r.extrapolateLeft || r.extrapolate || 'extend',
    a = r.extrapolateRight || r.extrapolate || 'extend',
    l = r.easing || ((u) => u);
  return (u) => {
    const c = eM(u, o);
    return JP(u, o[c], o[c + 1], i[c], i[c + 1], l, s, a, r.map);
  };
};
function JP(e, t, n, r, i, o, s, a, l) {
  let u = l ? l(e) : e;
  if (u < t) {
    if (s === 'identity') return u;
    s === 'clamp' && (u = t);
  }
  if (u > n) {
    if (a === 'identity') return u;
    a === 'clamp' && (u = n);
  }
  return r === i
    ? r
    : t === n
    ? e <= t
      ? r
      : i
    : (t === -1 / 0
        ? (u = -u)
        : n === 1 / 0
        ? (u = u - t)
        : (u = (u - t) / (n - t)),
      (u = o(u)),
      r === -1 / 0
        ? (u = -u)
        : i === 1 / 0
        ? (u = u + r)
        : (u = u * (i - r) + r),
      u);
}
function eM(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
  return n - 1;
}
var tM =
    (e, t = 'end') =>
    (n) => {
      n = t === 'end' ? Math.min(n, 0.999) : Math.max(n, 0.001);
      const r = n * e,
        i = t === 'end' ? Math.floor(r) : Math.ceil(r);
      return VP(0, 1, i / e);
    },
  Dl = 1.70158,
  xa = Dl * 1.525,
  rg = Dl + 1,
  ig = (2 * Math.PI) / 3,
  og = (2 * Math.PI) / 4.5,
  wa = (e) =>
    e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375,
  nM = {
    linear: (e) => e,
    easeInQuad: (e) => e * e,
    easeOutQuad: (e) => 1 - (1 - e) * (1 - e),
    easeInOutQuad: (e) =>
      e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
    easeInCubic: (e) => e * e * e,
    easeOutCubic: (e) => 1 - Math.pow(1 - e, 3),
    easeInOutCubic: (e) =>
      e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
    easeInQuart: (e) => e * e * e * e,
    easeOutQuart: (e) => 1 - Math.pow(1 - e, 4),
    easeInOutQuart: (e) =>
      e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
    easeInQuint: (e) => e * e * e * e * e,
    easeOutQuint: (e) => 1 - Math.pow(1 - e, 5),
    easeInOutQuint: (e) =>
      e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
    easeInSine: (e) => 1 - Math.cos((e * Math.PI) / 2),
    easeOutSine: (e) => Math.sin((e * Math.PI) / 2),
    easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2,
    easeInExpo: (e) => (e === 0 ? 0 : Math.pow(2, 10 * e - 10)),
    easeOutExpo: (e) => (e === 1 ? 1 : 1 - Math.pow(2, -10 * e)),
    easeInOutExpo: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : e < 0.5
        ? Math.pow(2, 20 * e - 10) / 2
        : (2 - Math.pow(2, -20 * e + 10)) / 2,
    easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
    easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
    easeInOutCirc: (e) =>
      e < 0.5
        ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2
        : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
    easeInBack: (e) => rg * e * e * e - Dl * e * e,
    easeOutBack: (e) => 1 + rg * Math.pow(e - 1, 3) + Dl * Math.pow(e - 1, 2),
    easeInOutBack: (e) =>
      e < 0.5
        ? (Math.pow(2 * e, 2) * ((xa + 1) * 2 * e - xa)) / 2
        : (Math.pow(2 * e - 2, 2) * ((xa + 1) * (e * 2 - 2) + xa) + 2) / 2,
    easeInElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * ig),
    easeOutElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * ig) + 1,
    easeInOutElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : e < 0.5
        ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * og)) / 2
        : (Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * og)) / 2 +
          1,
    easeInBounce: (e) => 1 - wa(1 - e),
    easeOutBounce: wa,
    easeInOutBounce: (e) =>
      e < 0.5 ? (1 - wa(1 - 2 * e)) / 2 : (1 + wa(2 * e - 1)) / 2,
    steps: tM,
  },
  vs = Symbol.for('FluidValue.get'),
  Vi = Symbol.for('FluidValue.observers'),
  Ot = (e) => !!(e && e[vs]),
  ot = (e) => (e && e[vs] ? e[vs]() : e),
  sg = (e) => e[Vi] || null;
function rM(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function xs(e, t) {
  const n = e[Vi];
  n &&
    n.forEach((r) => {
      rM(r, t);
    });
}
var H2 = class {
    constructor(e) {
      if (!e && !(e = this.get)) throw Error('Unknown getter');
      iM(this, e);
    }
  },
  iM = (e, t) => B2(e, vs, t);
function eo(e, t) {
  if (e[vs]) {
    let n = e[Vi];
    n || B2(e, Vi, (n = new Set())),
      n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function ws(e, t) {
  const n = e[Vi];
  if (n && n.has(t)) {
    const r = n.size - 1;
    r ? n.delete(t) : (e[Vi] = null),
      e.observerRemoved && e.observerRemoved(r, t);
  }
}
var B2 = (e, t, n) =>
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
  Ya = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
  oM =
    /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
  ag = new RegExp(`(${Ya.source})(%|[a-z]+)`, 'i'),
  sM = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
  Qu = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
  W2 = (e) => {
    const [t, n] = aM(e);
    if (!t || sh()) return e;
    const r = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(t);
    if (r) return r.trim();
    if (n && n.startsWith('--')) {
      const i = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue(n);
      return i || e;
    } else {
      if (n && Qu.test(n)) return W2(n);
      if (n) return n;
    }
    return e;
  },
  aM = (e) => {
    const t = Qu.exec(e);
    if (!t) return [,];
    const [, n, r] = t;
    return [n, r];
  },
  Yc,
  lM = (e, t, n, r, i) =>
    `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
  Y2 = (e) => {
    Yc ||
      (Yc = lr
        ? new RegExp(`(${Object.keys(lr).join('|')})(?!\\w)`, 'g')
        : /^\b$/);
    const t = e.output.map((o) =>
        ot(o).replace(Qu, W2).replace(oM, ng).replace(Yc, ng)
      ),
      n = t.map((o) => o.match(Ya).map(Number)),
      i = n[0]
        .map((o, s) =>
          n.map((a) => {
            if (!(s in a))
              throw Error('The arity of each "output" value must be equal');
            return a[s];
          })
        )
        .map((o) => ys({ ...e, output: o }));
    return (o) => {
      var l;
      const s =
        !ag.test(t[0]) &&
        ((l = t.find((u) => ag.test(u))) == null ? void 0 : l.replace(Ya, ''));
      let a = 0;
      return t[0].replace(Ya, () => `${i[a++](o)}${s || ''}`).replace(sM, lM);
    };
  },
  uh = 'react-spring: ',
  G2 = (e) => {
    const t = e;
    let n = !1;
    if (typeof t != 'function')
      throw new TypeError(`${uh}once requires a function parameter`);
    return (...r) => {
      n || (t(...r), (n = !0));
    };
  },
  uM = G2(console.warn);
function cM() {
  uM(`${uh}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var fM = G2(console.warn);
function dM() {
  fM(
    `${uh}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function Ku(e) {
  return (
    j.str(e) &&
    (e[0] == '#' || /\d/.test(e) || (!sh() && Qu.test(e)) || e in (lr || {}))
  );
}
var Ar = sh() ? P.useEffect : P.useLayoutEffect,
  pM = () => {
    const e = P.useRef(!1);
    return (
      Ar(
        () => (
          (e.current = !0),
          () => {
            e.current = !1;
          }
        ),
        []
      ),
      e
    );
  };
function Q2() {
  const e = P.useState()[1],
    t = pM();
  return () => {
    t.current && e(Math.random());
  };
}
function hM(e, t) {
  const [n] = P.useState(() => ({ inputs: t, result: e() })),
    r = P.useRef(),
    i = r.current;
  let o = i;
  return (
    o
      ? (t && o.inputs && mM(t, o.inputs)) || (o = { inputs: t, result: e() })
      : (o = n),
    P.useEffect(() => {
      (r.current = o), i == n && (n.inputs = n.result = void 0);
    }, [o]),
    o.result
  );
}
function mM(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
var K2 = (e) => P.useEffect(e, gM),
  gM = [];
function yM(e) {
  const t = P.useRef();
  return (
    P.useEffect(() => {
      t.current = e;
    }),
    t.current
  );
}
var Ss = Symbol.for('Animated:node'),
  vM = (e) => !!e && e[Ss] === e,
  ln = (e) => e && e[Ss],
  ch = (e, t) => DP(e, Ss, t),
  Xu = (e) => e && e[Ss] && e[Ss].getPayload(),
  X2 = class {
    constructor() {
      ch(this, this);
    }
    getPayload() {
      return this.payload || [];
    }
  },
  Bs = class extends X2 {
    constructor(e) {
      super(),
        (this._value = e),
        (this.done = !0),
        (this.durationProgress = 0),
        j.num(this._value) && (this.lastPosition = this._value);
    }
    static create(e) {
      return new Bs(e);
    }
    getPayload() {
      return [this];
    }
    getValue() {
      return this._value;
    }
    setValue(e, t) {
      return (
        j.num(e) &&
          ((this.lastPosition = e),
          t &&
            ((e = Math.round(e / t) * t),
            this.done && (this.lastPosition = e))),
        this._value === e ? !1 : ((this._value = e), !0)
      );
    }
    reset() {
      const { done: e } = this;
      (this.done = !1),
        j.num(this._value) &&
          ((this.elapsedTime = 0),
          (this.durationProgress = 0),
          (this.lastPosition = this._value),
          e && (this.lastVelocity = null),
          (this.v0 = null));
    }
  },
  ks = class extends Bs {
    constructor(e) {
      super(0),
        (this._string = null),
        (this._toString = ys({ output: [e, e] }));
    }
    static create(e) {
      return new ks(e);
    }
    getValue() {
      const e = this._string;
      return e ?? (this._string = this._toString(this._value));
    }
    setValue(e) {
      if (j.str(e)) {
        if (e == this._string) return !1;
        (this._string = e), (this._value = 1);
      } else if (super.setValue(e)) this._string = null;
      else return !1;
      return !0;
    }
    reset(e) {
      e && (this._toString = ys({ output: [this.getValue(), e] })),
        (this._value = 0),
        super.reset();
    }
  },
  Fl = { dependencies: null },
  qu = class extends X2 {
    constructor(e) {
      super(), (this.source = e), this.setValue(e);
    }
    getValue(e) {
      const t = {};
      return (
        xn(this.source, (n, r) => {
          vM(n)
            ? (t[r] = n.getValue(e))
            : Ot(n)
            ? (t[r] = ot(n))
            : e || (t[r] = n);
        }),
        t
      );
    }
    setValue(e) {
      (this.source = e), (this.payload = this._makePayload(e));
    }
    reset() {
      this.payload && K(this.payload, (e) => e.reset());
    }
    _makePayload(e) {
      if (e) {
        const t = new Set();
        return xn(e, this._addToPayload, t), Array.from(t);
      }
    }
    _addToPayload(e) {
      Fl.dependencies && Ot(e) && Fl.dependencies.add(e);
      const t = Xu(e);
      t && K(t, (n) => this.add(n));
    }
  },
  q2 = class extends qu {
    constructor(e) {
      super(e);
    }
    static create(e) {
      return new q2(e);
    }
    getValue() {
      return this.source.map((e) => e.getValue());
    }
    setValue(e) {
      const t = this.getPayload();
      return e.length == t.length
        ? t.map((n, r) => n.setValue(e[r])).some(Boolean)
        : (super.setValue(e.map(xM)), !0);
    }
  };
function xM(e) {
  return (Ku(e) ? ks : Bs).create(e);
}
function fd(e) {
  const t = ln(e);
  return t ? t.constructor : j.arr(e) ? q2 : Ku(e) ? ks : Bs;
}
var lg = (e, t) => {
    const n = !j.fun(e) || (e.prototype && e.prototype.isReactComponent);
    return P.forwardRef((r, i) => {
      const o = P.useRef(null),
        s =
          n &&
          P.useCallback(
            (y) => {
              o.current = kM(i, y);
            },
            [i]
          ),
        [a, l] = SM(r, t),
        u = Q2(),
        c = () => {
          const y = o.current;
          if (n && !y) return;
          (y ? t.applyAnimatedValues(y, a.getValue(!0)) : !1) === !1 && u();
        },
        f = new wM(c, l),
        d = P.useRef();
      Ar(
        () => (
          (d.current = f),
          K(l, (y) => eo(y, f)),
          () => {
            d.current &&
              (K(d.current.deps, (y) => ws(y, d.current)),
              Q.cancel(d.current.update));
          }
        )
      ),
        P.useEffect(c, []),
        K2(() => () => {
          const y = d.current;
          K(y.deps, (h) => ws(h, y));
        });
      const m = t.getComponentProps(a.getValue());
      return P.createElement(e, { ...m, ref: s });
    });
  },
  wM = class {
    constructor(e, t) {
      (this.update = e), (this.deps = t);
    }
    eventObserved(e) {
      e.type == 'change' && Q.write(this.update);
    }
  };
function SM(e, t) {
  const n = new Set();
  return (
    (Fl.dependencies = n),
    e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }),
    (e = new qu(e)),
    (Fl.dependencies = null),
    [e, n]
  );
}
function kM(e, t) {
  return e && (j.fun(e) ? e(t) : (e.current = t)), t;
}
var ug = Symbol.for('AnimatedComponent'),
  CM = (
    e,
    {
      applyAnimatedValues: t = () => !1,
      createAnimatedStyle: n = (i) => new qu(i),
      getComponentProps: r = (i) => i,
    } = {}
  ) => {
    const i = {
        applyAnimatedValues: t,
        createAnimatedStyle: n,
        getComponentProps: r,
      },
      o = (s) => {
        const a = cg(s) || 'Anonymous';
        return (
          j.str(s)
            ? (s = o[s] || (o[s] = lg(s, i)))
            : (s = s[ug] || (s[ug] = lg(s, i))),
          (s.displayName = `Animated(${a})`),
          s
        );
      };
    return (
      xn(e, (s, a) => {
        j.arr(e) && (a = cg(s)), (o[a] = o(s));
      }),
      { animated: o }
    );
  },
  cg = (e) =>
    j.str(e)
      ? e
      : e && j.str(e.displayName)
      ? e.displayName
      : (j.fun(e) && e.name) || null;
function st(e, ...t) {
  return j.fun(e) ? e(...t) : e;
}
var jo = (e, t) =>
    e === !0 || !!(t && e && (j.fun(e) ? e(t) : Je(e).includes(t))),
  Z2 = (e, t) => (j.obj(e) ? t && e[t] : e),
  J2 = (e, t) => (e.default === !0 ? e[t] : e.default ? e.default[t] : void 0),
  bM = (e) => e,
  fh = (e, t = bM) => {
    let n = _M;
    e.default && e.default !== !0 && ((e = e.default), (n = Object.keys(e)));
    const r = {};
    for (const i of n) {
      const o = t(e[i], i);
      j.und(o) || (r[i] = o);
    }
    return r;
  },
  _M = [
    'config',
    'onProps',
    'onStart',
    'onChange',
    'onPause',
    'onResume',
    'onRest',
  ],
  PM = {
    config: 1,
    from: 1,
    to: 1,
    ref: 1,
    loop: 1,
    reset: 1,
    pause: 1,
    cancel: 1,
    reverse: 1,
    immediate: 1,
    default: 1,
    delay: 1,
    onProps: 1,
    onStart: 1,
    onChange: 1,
    onPause: 1,
    onResume: 1,
    onRest: 1,
    onResolve: 1,
    items: 1,
    trail: 1,
    sort: 1,
    expires: 1,
    initial: 1,
    enter: 1,
    update: 1,
    leave: 1,
    children: 1,
    onDestroyed: 1,
    keys: 1,
    callId: 1,
    parentId: 1,
  };
function MM(e) {
  const t = {};
  let n = 0;
  if (
    (xn(e, (r, i) => {
      PM[i] || ((t[i] = r), n++);
    }),
    n)
  )
    return t;
}
function dh(e) {
  const t = MM(e);
  if (t) {
    const n = { to: t };
    return xn(e, (r, i) => i in t || (n[i] = r)), n;
  }
  return { ...e };
}
function Cs(e) {
  return (
    (e = ot(e)),
    j.arr(e)
      ? e.map(Cs)
      : Ku(e)
      ? Ct.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
      : e
  );
}
function EM(e) {
  for (const t in e) return !0;
  return !1;
}
function dd(e) {
  return j.fun(e) || (j.arr(e) && j.obj(e[0]));
}
function fg(e, t) {
  var n;
  (n = e.ref) == null || n.delete(e), t == null || t.delete(e);
}
function TM(e, t) {
  var n;
  t &&
    e.ref !== t &&
    ((n = e.ref) == null || n.delete(e), t.add(e), (e.ref = t));
}
var AM = {
    default: { tension: 170, friction: 26 },
    gentle: { tension: 120, friction: 14 },
    wobbly: { tension: 180, friction: 12 },
    stiff: { tension: 210, friction: 20 },
    slow: { tension: 280, friction: 60 },
    molasses: { tension: 280, friction: 120 },
  },
  pd = { ...AM.default, mass: 1, damping: 1, easing: nM.linear, clamp: !1 },
  RM = class {
    constructor() {
      (this.velocity = 0), Object.assign(this, pd);
    }
  };
function OM(e, t, n) {
  n && ((n = { ...n }), dg(n, t), (t = { ...n, ...t })),
    dg(e, t),
    Object.assign(e, t);
  for (const s in pd) e[s] == null && (e[s] = pd[s]);
  let { frequency: r, damping: i } = e;
  const { mass: o } = e;
  return (
    j.und(r) ||
      (r < 0.01 && (r = 0.01),
      i < 0 && (i = 0),
      (e.tension = Math.pow((2 * Math.PI) / r, 2) * o),
      (e.friction = (4 * Math.PI * i * o) / r)),
    e
  );
}
function dg(e, t) {
  if (!j.und(t.decay)) e.duration = void 0;
  else {
    const n = !j.und(t.tension) || !j.und(t.friction);
    (n || !j.und(t.frequency) || !j.und(t.damping) || !j.und(t.mass)) &&
      ((e.duration = void 0), (e.decay = void 0)),
      n && (e.frequency = void 0);
  }
}
var pg = [],
  $M = class {
    constructor() {
      (this.changed = !1),
        (this.values = pg),
        (this.toValues = null),
        (this.fromValues = pg),
        (this.config = new RM()),
        (this.immediate = !1);
    }
  };
function ex(e, { key: t, props: n, defaultProps: r, state: i, actions: o }) {
  return new Promise((s, a) => {
    let l,
      u,
      c = jo(n.cancel ?? (r == null ? void 0 : r.cancel), t);
    if (c) m();
    else {
      j.und(n.pause) || (i.paused = jo(n.pause, t));
      let y = r == null ? void 0 : r.pause;
      y !== !0 && (y = i.paused || jo(y, t)),
        (l = st(n.delay || 0, t)),
        y ? (i.resumeQueue.add(d), o.pause()) : (o.resume(), d());
    }
    function f() {
      i.resumeQueue.add(d),
        i.timeouts.delete(u),
        u.cancel(),
        (l = u.time - Q.now());
    }
    function d() {
      l > 0 && !Ct.skipAnimation
        ? ((i.delayed = !0),
          (u = Q.setTimeout(m, l)),
          i.pauseQueue.add(f),
          i.timeouts.add(u))
        : m();
    }
    function m() {
      i.delayed && (i.delayed = !1),
        i.pauseQueue.delete(f),
        i.timeouts.delete(u),
        e <= (i.cancelId || 0) && (c = !0);
      try {
        o.start({ ...n, callId: e, cancel: c }, s);
      } catch (y) {
        a(y);
      }
    }
  });
}
var ph = (e, t) =>
    t.length == 1
      ? t[0]
      : t.some((n) => n.cancelled)
      ? Ei(e.get())
      : t.every((n) => n.noop)
      ? tx(e.get())
      : qt(
          e.get(),
          t.every((n) => n.finished)
        ),
  tx = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
  qt = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
  Ei = (e) => ({ value: e, cancelled: !0, finished: !1 });
function nx(e, t, n, r) {
  const { callId: i, parentId: o, onRest: s } = t,
    { asyncTo: a, promise: l } = n;
  return !o && e === a && !t.reset
    ? l
    : (n.promise = (async () => {
        (n.asyncId = i), (n.asyncTo = e);
        const u = fh(t, (x, p) => (p === 'onRest' ? void 0 : x));
        let c, f;
        const d = new Promise((x, p) => ((c = x), (f = p))),
          m = (x) => {
            const p =
              (i <= (n.cancelId || 0) && Ei(r)) ||
              (i !== n.asyncId && qt(r, !1));
            if (p) throw ((x.result = p), f(x), x);
          },
          y = (x, p) => {
            const g = new hg(),
              v = new mg();
            return (async () => {
              if (Ct.skipAnimation)
                throw (bs(n), (v.result = qt(r, !1)), f(v), v);
              m(g);
              const w = j.obj(x) ? { ...x } : { ...p, to: x };
              (w.parentId = i),
                xn(u, (S, C) => {
                  j.und(w[C]) && (w[C] = S);
                });
              const k = await r.start(w);
              return (
                m(g),
                n.paused &&
                  (await new Promise((S) => {
                    n.resumeQueue.add(S);
                  })),
                k
              );
            })();
          };
        let h;
        if (Ct.skipAnimation) return bs(n), qt(r, !1);
        try {
          let x;
          j.arr(e)
            ? (x = (async (p) => {
                for (const g of p) await y(g);
              })(e))
            : (x = Promise.resolve(e(y, r.stop.bind(r)))),
            await Promise.all([x.then(c), d]),
            (h = qt(r.get(), !0, !1));
        } catch (x) {
          if (x instanceof hg) h = x.result;
          else if (x instanceof mg) h = x.result;
          else throw x;
        } finally {
          i == n.asyncId &&
            ((n.asyncId = o),
            (n.asyncTo = o ? a : void 0),
            (n.promise = o ? l : void 0));
        }
        return (
          j.fun(s) &&
            Q.batchedUpdates(() => {
              s(h, r, r.item);
            }),
          h
        );
      })());
}
function bs(e, t) {
  Lo(e.timeouts, (n) => n.cancel()),
    e.pauseQueue.clear(),
    e.resumeQueue.clear(),
    (e.asyncId = e.asyncTo = e.promise = void 0),
    t && (e.cancelId = t);
}
var hg = class extends Error {
    constructor() {
      super(
        'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.'
      );
    }
  },
  mg = class extends Error {
    constructor() {
      super('SkipAnimationSignal');
    }
  },
  hd = (e) => e instanceof hh,
  IM = 1,
  hh = class extends H2 {
    constructor() {
      super(...arguments), (this.id = IM++), (this._priority = 0);
    }
    get priority() {
      return this._priority;
    }
    set priority(e) {
      this._priority != e && ((this._priority = e), this._onPriorityChange(e));
    }
    get() {
      const e = ln(this);
      return e && e.getValue();
    }
    to(...e) {
      return Ct.to(this, e);
    }
    interpolate(...e) {
      return cM(), Ct.to(this, e);
    }
    toJSON() {
      return this.get();
    }
    observerAdded(e) {
      e == 1 && this._attach();
    }
    observerRemoved(e) {
      e == 0 && this._detach();
    }
    _attach() {}
    _detach() {}
    _onChange(e, t = !1) {
      xs(this, { type: 'change', parent: this, value: e, idle: t });
    }
    _onPriorityChange(e) {
      this.idle || Yu.sort(this),
        xs(this, { type: 'priority', parent: this, priority: e });
    }
  },
  Vr = Symbol.for('SpringPhase'),
  rx = 1,
  md = 2,
  gd = 4,
  Gc = (e) => (e[Vr] & rx) > 0,
  Bn = (e) => (e[Vr] & md) > 0,
  mo = (e) => (e[Vr] & gd) > 0,
  gg = (e, t) => (t ? (e[Vr] |= md | rx) : (e[Vr] &= ~md)),
  yg = (e, t) => (t ? (e[Vr] |= gd) : (e[Vr] &= ~gd)),
  LM = class extends hh {
    constructor(e, t) {
      if (
        (super(),
        (this.animation = new $M()),
        (this.defaultProps = {}),
        (this._state = {
          paused: !1,
          delayed: !1,
          pauseQueue: new Set(),
          resumeQueue: new Set(),
          timeouts: new Set(),
        }),
        (this._pendingCalls = new Set()),
        (this._lastCallId = 0),
        (this._lastToId = 0),
        (this._memoizedDuration = 0),
        !j.und(e) || !j.und(t))
      ) {
        const n = j.obj(e) ? { ...e } : { ...t, from: e };
        j.und(n.default) && (n.default = !0), this.start(n);
      }
    }
    get idle() {
      return !(Bn(this) || this._state.asyncTo) || mo(this);
    }
    get goal() {
      return ot(this.animation.to);
    }
    get velocity() {
      const e = ln(this);
      return e instanceof Bs
        ? e.lastVelocity || 0
        : e.getPayload().map((t) => t.lastVelocity || 0);
    }
    get hasAnimated() {
      return Gc(this);
    }
    get isAnimating() {
      return Bn(this);
    }
    get isPaused() {
      return mo(this);
    }
    get isDelayed() {
      return this._state.delayed;
    }
    advance(e) {
      let t = !0,
        n = !1;
      const r = this.animation;
      let { toValues: i } = r;
      const { config: o } = r,
        s = Xu(r.to);
      !s && Ot(r.to) && (i = Je(ot(r.to))),
        r.values.forEach((u, c) => {
          if (u.done) return;
          const f = u.constructor == ks ? 1 : s ? s[c].lastPosition : i[c];
          let d = r.immediate,
            m = f;
          if (!d) {
            if (((m = u.lastPosition), o.tension <= 0)) {
              u.done = !0;
              return;
            }
            let y = (u.elapsedTime += e);
            const h = r.fromValues[c],
              x =
                u.v0 != null
                  ? u.v0
                  : (u.v0 = j.arr(o.velocity) ? o.velocity[c] : o.velocity);
            let p;
            const g =
              o.precision ||
              (h == f ? 0.005 : Math.min(1, Math.abs(f - h) * 0.001));
            if (j.und(o.duration))
              if (o.decay) {
                const v = o.decay === !0 ? 0.998 : o.decay,
                  w = Math.exp(-(1 - v) * y);
                (m = h + (x / (1 - v)) * (1 - w)),
                  (d = Math.abs(u.lastPosition - m) <= g),
                  (p = x * w);
              } else {
                p = u.lastVelocity == null ? x : u.lastVelocity;
                const v = o.restVelocity || g / 10,
                  w = o.clamp ? 0 : o.bounce,
                  k = !j.und(w),
                  S = h == f ? u.v0 > 0 : h < f;
                let C,
                  M = !1;
                const A = 1,
                  T = Math.ceil(e / A);
                for (
                  let E = 0;
                  E < T &&
                  ((C = Math.abs(p) > v),
                  !(!C && ((d = Math.abs(f - m) <= g), d)));
                  ++E
                ) {
                  k &&
                    ((M = m == f || m > f == S), M && ((p = -p * w), (m = f)));
                  const I = -o.tension * 1e-6 * (m - f),
                    R = -o.friction * 0.001 * p,
                    O = (I + R) / o.mass;
                  (p = p + O * A), (m = m + p * A);
                }
              }
            else {
              let v = 1;
              o.duration > 0 &&
                (this._memoizedDuration !== o.duration &&
                  ((this._memoizedDuration = o.duration),
                  u.durationProgress > 0 &&
                    ((u.elapsedTime = o.duration * u.durationProgress),
                    (y = u.elapsedTime += e))),
                (v = (o.progress || 0) + y / this._memoizedDuration),
                (v = v > 1 ? 1 : v < 0 ? 0 : v),
                (u.durationProgress = v)),
                (m = h + o.easing(v) * (f - h)),
                (p = (m - u.lastPosition) / e),
                (d = v == 1);
            }
            (u.lastVelocity = p),
              Number.isNaN(m) &&
                (console.warn('Got NaN while animating:', this), (d = !0));
          }
          s && !s[c].done && (d = !1),
            d ? (u.done = !0) : (t = !1),
            u.setValue(m, o.round) && (n = !0);
        });
      const a = ln(this),
        l = a.getValue();
      if (t) {
        const u = ot(r.to);
        (l !== u || n) && !o.decay
          ? (a.setValue(u), this._onChange(u))
          : n && o.decay && this._onChange(l),
          this._stop();
      } else n && this._onChange(l);
    }
    set(e) {
      return (
        Q.batchedUpdates(() => {
          this._stop(), this._focus(e), this._set(e);
        }),
        this
      );
    }
    pause() {
      this._update({ pause: !0 });
    }
    resume() {
      this._update({ pause: !1 });
    }
    finish() {
      if (Bn(this)) {
        const { to: e, config: t } = this.animation;
        Q.batchedUpdates(() => {
          this._onStart(), t.decay || this._set(e, !1), this._stop();
        });
      }
      return this;
    }
    update(e) {
      return (this.queue || (this.queue = [])).push(e), this;
    }
    start(e, t) {
      let n;
      return (
        j.und(e)
          ? ((n = this.queue || []), (this.queue = []))
          : (n = [j.obj(e) ? e : { ...t, to: e }]),
        Promise.all(n.map((r) => this._update(r))).then((r) => ph(this, r))
      );
    }
    stop(e) {
      const { to: t } = this.animation;
      return (
        this._focus(this.get()),
        bs(this._state, e && this._lastCallId),
        Q.batchedUpdates(() => this._stop(t, e)),
        this
      );
    }
    reset() {
      this._update({ reset: !0 });
    }
    eventObserved(e) {
      e.type == 'change'
        ? this._start()
        : e.type == 'priority' && (this.priority = e.priority + 1);
    }
    _prepareNode(e) {
      const t = this.key || '';
      let { to: n, from: r } = e;
      (n = j.obj(n) ? n[t] : n),
        (n == null || dd(n)) && (n = void 0),
        (r = j.obj(r) ? r[t] : r),
        r == null && (r = void 0);
      const i = { to: n, from: r };
      return (
        Gc(this) ||
          (e.reverse && ([n, r] = [r, n]),
          (r = ot(r)),
          j.und(r) ? ln(this) || this._set(n) : this._set(r)),
        i
      );
    }
    _update({ ...e }, t) {
      const { key: n, defaultProps: r } = this;
      e.default &&
        Object.assign(
          r,
          fh(e, (s, a) => (/^on/.test(a) ? Z2(s, n) : s))
        ),
        xg(this, e, 'onProps'),
        yo(this, 'onProps', e, this);
      const i = this._prepareNode(e);
      if (Object.isFrozen(this))
        throw Error(
          'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?'
        );
      const o = this._state;
      return ex(++this._lastCallId, {
        key: n,
        props: e,
        defaultProps: r,
        state: o,
        actions: {
          pause: () => {
            mo(this) ||
              (yg(this, !0),
              bo(o.pauseQueue),
              yo(this, 'onPause', qt(this, go(this, this.animation.to)), this));
          },
          resume: () => {
            mo(this) &&
              (yg(this, !1),
              Bn(this) && this._resume(),
              bo(o.resumeQueue),
              yo(
                this,
                'onResume',
                qt(this, go(this, this.animation.to)),
                this
              ));
          },
          start: this._merge.bind(this, i),
        },
      }).then((s) => {
        if (e.loop && s.finished && !(t && s.noop)) {
          const a = ix(e);
          if (a) return this._update(a, !0);
        }
        return s;
      });
    }
    _merge(e, t, n) {
      if (t.cancel) return this.stop(!0), n(Ei(this));
      const r = !j.und(e.to),
        i = !j.und(e.from);
      if (r || i)
        if (t.callId > this._lastToId) this._lastToId = t.callId;
        else return n(Ei(this));
      const { key: o, defaultProps: s, animation: a } = this,
        { to: l, from: u } = a;
      let { to: c = l, from: f = u } = e;
      i && !r && (!t.default || j.und(c)) && (c = f),
        t.reverse && ([c, f] = [f, c]);
      const d = !kn(f, u);
      d && (a.from = f), (f = ot(f));
      const m = !kn(c, l);
      m && this._focus(c);
      const y = dd(t.to),
        { config: h } = a,
        { decay: x, velocity: p } = h;
      (r || i) && (h.velocity = 0),
        t.config &&
          !y &&
          OM(
            h,
            st(t.config, o),
            t.config !== s.config ? st(s.config, o) : void 0
          );
      let g = ln(this);
      if (!g || j.und(c)) return n(qt(this, !0));
      const v = j.und(t.reset) ? i && !t.default : !j.und(f) && jo(t.reset, o),
        w = v ? f : this.get(),
        k = Cs(c),
        S = j.num(k) || j.arr(k) || Ku(k),
        C = !y && (!S || jo(s.immediate || t.immediate, o));
      if (m) {
        const E = fd(c);
        if (E !== g.constructor)
          if (C) g = this._set(k);
          else
            throw Error(
              `Cannot animate between ${g.constructor.name} and ${E.name}, as the "to" prop suggests`
            );
      }
      const M = g.constructor;
      let A = Ot(c),
        T = !1;
      if (!A) {
        const E = v || (!Gc(this) && d);
        (m || E) && ((T = kn(Cs(w), k)), (A = !T)),
          ((!kn(a.immediate, C) && !C) ||
            !kn(h.decay, x) ||
            !kn(h.velocity, p)) &&
            (A = !0);
      }
      if (
        (T && Bn(this) && (a.changed && !v ? (A = !0) : A || this._stop(l)),
        !y &&
          ((A || Ot(l)) &&
            ((a.values = g.getPayload()),
            (a.toValues = Ot(c) ? null : M == ks ? [1] : Je(k))),
          a.immediate != C && ((a.immediate = C), !C && !v && this._set(l)),
          A))
      ) {
        const { onRest: E } = a;
        K(NM, (R) => xg(this, t, R));
        const I = qt(this, go(this, l));
        bo(this._pendingCalls, I),
          this._pendingCalls.add(n),
          a.changed &&
            Q.batchedUpdates(() => {
              var R;
              (a.changed = !v),
                E == null || E(I, this),
                v
                  ? st(s.onRest, I)
                  : (R = a.onStart) == null || R.call(a, I, this);
            });
      }
      v && this._set(w),
        y
          ? n(nx(t.to, t, this._state, this))
          : A
          ? this._start()
          : Bn(this) && !m
          ? this._pendingCalls.add(n)
          : n(tx(w));
    }
    _focus(e) {
      const t = this.animation;
      e !== t.to &&
        (sg(this) && this._detach(), (t.to = e), sg(this) && this._attach());
    }
    _attach() {
      let e = 0;
      const { to: t } = this.animation;
      Ot(t) && (eo(t, this), hd(t) && (e = t.priority + 1)),
        (this.priority = e);
    }
    _detach() {
      const { to: e } = this.animation;
      Ot(e) && ws(e, this);
    }
    _set(e, t = !0) {
      const n = ot(e);
      if (!j.und(n)) {
        const r = ln(this);
        if (!r || !kn(n, r.getValue())) {
          const i = fd(n);
          !r || r.constructor != i ? ch(this, i.create(n)) : r.setValue(n),
            r &&
              Q.batchedUpdates(() => {
                this._onChange(n, t);
              });
        }
      }
      return ln(this);
    }
    _onStart() {
      const e = this.animation;
      e.changed ||
        ((e.changed = !0), yo(this, 'onStart', qt(this, go(this, e.to)), this));
    }
    _onChange(e, t) {
      t || (this._onStart(), st(this.animation.onChange, e, this)),
        st(this.defaultProps.onChange, e, this),
        super._onChange(e, t);
    }
    _start() {
      const e = this.animation;
      ln(this).reset(ot(e.to)),
        e.immediate || (e.fromValues = e.values.map((t) => t.lastPosition)),
        Bn(this) || (gg(this, !0), mo(this) || this._resume());
    }
    _resume() {
      Ct.skipAnimation ? this.finish() : Yu.start(this);
    }
    _stop(e, t) {
      if (Bn(this)) {
        gg(this, !1);
        const n = this.animation;
        K(n.values, (i) => {
          i.done = !0;
        }),
          n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
          xs(this, { type: 'idle', parent: this });
        const r = t ? Ei(this.get()) : qt(this.get(), go(this, e ?? n.to));
        bo(this._pendingCalls, r),
          n.changed && ((n.changed = !1), yo(this, 'onRest', r, this));
      }
    }
  };
function go(e, t) {
  const n = Cs(t),
    r = Cs(e.get());
  return kn(r, n);
}
function ix(e, t = e.loop, n = e.to) {
  const r = st(t);
  if (r) {
    const i = r !== !0 && dh(r),
      o = (i || e).reverse,
      s = !i || i.reset;
    return zl({
      ...e,
      loop: t,
      default: !1,
      pause: void 0,
      to: !o || dd(n) ? n : void 0,
      from: s ? e.from : void 0,
      reset: s,
      ...i,
    });
  }
}
function zl(e) {
  const { to: t, from: n } = (e = dh(e)),
    r = new Set();
  return (
    j.obj(t) && vg(t, r),
    j.obj(n) && vg(n, r),
    (e.keys = r.size ? Array.from(r) : null),
    e
  );
}
function vg(e, t) {
  xn(e, (n, r) => n != null && t.add(r));
}
var NM = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];
function xg(e, t, n) {
  e.animation[n] = t[n] !== J2(t, n) ? Z2(t[n], e.key) : void 0;
}
function yo(e, t, ...n) {
  var r, i, o, s;
  (i = (r = e.animation)[t]) == null || i.call(r, ...n),
    (s = (o = e.defaultProps)[t]) == null || s.call(o, ...n);
}
var jM = ['onStart', 'onChange', 'onRest'],
  DM = 1,
  FM = class {
    constructor(e, t) {
      (this.id = DM++),
        (this.springs = {}),
        (this.queue = []),
        (this._lastAsyncId = 0),
        (this._active = new Set()),
        (this._changed = new Set()),
        (this._started = !1),
        (this._state = {
          paused: !1,
          pauseQueue: new Set(),
          resumeQueue: new Set(),
          timeouts: new Set(),
        }),
        (this._events = {
          onStart: new Map(),
          onChange: new Map(),
          onRest: new Map(),
        }),
        (this._onFrame = this._onFrame.bind(this)),
        t && (this._flush = t),
        e && this.start({ default: !0, ...e });
    }
    get idle() {
      return (
        !this._state.asyncTo &&
        Object.values(this.springs).every(
          (e) => e.idle && !e.isDelayed && !e.isPaused
        )
      );
    }
    get item() {
      return this._item;
    }
    set item(e) {
      this._item = e;
    }
    get() {
      const e = {};
      return this.each((t, n) => (e[n] = t.get())), e;
    }
    set(e) {
      for (const t in e) {
        const n = e[t];
        j.und(n) || this.springs[t].set(n);
      }
    }
    update(e) {
      return e && this.queue.push(zl(e)), this;
    }
    start(e) {
      let { queue: t } = this;
      return (
        e ? (t = Je(e).map(zl)) : (this.queue = []),
        this._flush ? this._flush(this, t) : (lx(this, t), zM(this, t))
      );
    }
    stop(e, t) {
      if ((e !== !!e && (t = e), t)) {
        const n = this.springs;
        K(Je(t), (r) => n[r].stop(!!e));
      } else bs(this._state, this._lastAsyncId), this.each((n) => n.stop(!!e));
      return this;
    }
    pause(e) {
      if (j.und(e)) this.start({ pause: !0 });
      else {
        const t = this.springs;
        K(Je(e), (n) => t[n].pause());
      }
      return this;
    }
    resume(e) {
      if (j.und(e)) this.start({ pause: !1 });
      else {
        const t = this.springs;
        K(Je(e), (n) => t[n].resume());
      }
      return this;
    }
    each(e) {
      xn(this.springs, e);
    }
    _onFrame() {
      const { onStart: e, onChange: t, onRest: n } = this._events,
        r = this._active.size > 0,
        i = this._changed.size > 0;
      ((r && !this._started) || (i && !this._started)) &&
        ((this._started = !0),
        Lo(e, ([a, l]) => {
          (l.value = this.get()), a(l, this, this._item);
        }));
      const o = !r && this._started,
        s = i || (o && n.size) ? this.get() : null;
      i &&
        t.size &&
        Lo(t, ([a, l]) => {
          (l.value = s), a(l, this, this._item);
        }),
        o &&
          ((this._started = !1),
          Lo(n, ([a, l]) => {
            (l.value = s), a(l, this, this._item);
          }));
    }
    eventObserved(e) {
      if (e.type == 'change')
        this._changed.add(e.parent), e.idle || this._active.add(e.parent);
      else if (e.type == 'idle') this._active.delete(e.parent);
      else return;
      Q.onFrame(this._onFrame);
    }
  };
function zM(e, t) {
  return Promise.all(t.map((n) => ox(e, n))).then((n) => ph(e, n));
}
async function ox(e, t, n) {
  const { keys: r, to: i, from: o, loop: s, onRest: a, onResolve: l } = t,
    u = j.obj(t.default) && t.default;
  s && (t.loop = !1), i === !1 && (t.to = null), o === !1 && (t.from = null);
  const c = j.arr(i) || j.fun(i) ? i : void 0;
  c
    ? ((t.to = void 0), (t.onRest = void 0), u && (u.onRest = void 0))
    : K(jM, (h) => {
        const x = t[h];
        if (j.fun(x)) {
          const p = e._events[h];
          (t[h] = ({ finished: g, cancelled: v }) => {
            const w = p.get(x);
            w
              ? (g || (w.finished = !1), v && (w.cancelled = !0))
              : p.set(x, {
                  value: null,
                  finished: g || !1,
                  cancelled: v || !1,
                });
          }),
            u && (u[h] = t[h]);
        }
      });
  const f = e._state;
  t.pause === !f.paused
    ? ((f.paused = t.pause), bo(t.pause ? f.pauseQueue : f.resumeQueue))
    : f.paused && (t.pause = !0);
  const d = (r || Object.keys(e.springs)).map((h) => e.springs[h].start(t)),
    m = t.cancel === !0 || J2(t, 'cancel') === !0;
  (c || (m && f.asyncId)) &&
    d.push(
      ex(++e._lastAsyncId, {
        props: t,
        state: f,
        actions: {
          pause: ud,
          resume: ud,
          start(h, x) {
            m
              ? (bs(f, e._lastAsyncId), x(Ei(e)))
              : ((h.onRest = a), x(nx(c, h, f, e)));
          },
        },
      })
    ),
    f.paused &&
      (await new Promise((h) => {
        f.resumeQueue.add(h);
      }));
  const y = ph(e, await Promise.all(d));
  if (s && y.finished && !(n && y.noop)) {
    const h = ix(t, s, i);
    if (h) return lx(e, [h]), ox(e, h, !0);
  }
  return l && Q.batchedUpdates(() => l(y, e, e.item)), y;
}
function UM(e, t) {
  const n = { ...e.springs };
  return (
    t &&
      K(Je(t), (r) => {
        j.und(r.keys) && (r = zl(r)),
          j.obj(r.to) || (r = { ...r, to: void 0 }),
          ax(n, r, (i) => sx(i));
      }),
    VM(e, n),
    n
  );
}
function VM(e, t) {
  xn(t, (n, r) => {
    e.springs[r] || ((e.springs[r] = n), eo(n, e));
  });
}
function sx(e, t) {
  const n = new LM();
  return (n.key = e), t && eo(n, t), n;
}
function ax(e, t, n) {
  t.keys &&
    K(t.keys, (r) => {
      (e[r] || (e[r] = n(r)))._prepareNode(t);
    });
}
function lx(e, t) {
  K(t, (n) => {
    ax(e.springs, n, (r) => sx(r, e));
  });
}
var Zu = ({ children: e, ...t }) => {
    const n = P.useContext(Ul),
      r = t.pause || !!n.pause,
      i = t.immediate || !!n.immediate;
    t = hM(() => ({ pause: r, immediate: i }), [r, i]);
    const { Provider: o } = Ul;
    return P.createElement(o, { value: t }, e);
  },
  Ul = HM(Zu, {});
Zu.Provider = Ul.Provider;
Zu.Consumer = Ul.Consumer;
function HM(e, t) {
  return (
    Object.assign(e, P.createContext(t)),
    (e.Provider._context = e),
    (e.Consumer._context = e),
    e
  );
}
var BM = () => {
  const e = [],
    t = function (r) {
      dM();
      const i = [];
      return (
        K(e, (o, s) => {
          if (j.und(r)) i.push(o.start());
          else {
            const a = n(r, o, s);
            a && i.push(o.start(a));
          }
        }),
        i
      );
    };
  (t.current = e),
    (t.add = function (r) {
      e.includes(r) || e.push(r);
    }),
    (t.delete = function (r) {
      const i = e.indexOf(r);
      ~i && e.splice(i, 1);
    }),
    (t.pause = function () {
      return K(e, (r) => r.pause(...arguments)), this;
    }),
    (t.resume = function () {
      return K(e, (r) => r.resume(...arguments)), this;
    }),
    (t.set = function (r) {
      K(e, (i, o) => {
        const s = j.fun(r) ? r(o, i) : r;
        s && i.set(s);
      });
    }),
    (t.start = function (r) {
      const i = [];
      return (
        K(e, (o, s) => {
          if (j.und(r)) i.push(o.start());
          else {
            const a = this._getProps(r, o, s);
            a && i.push(o.start(a));
          }
        }),
        i
      );
    }),
    (t.stop = function () {
      return K(e, (r) => r.stop(...arguments)), this;
    }),
    (t.update = function (r) {
      return K(e, (i, o) => i.update(this._getProps(r, i, o))), this;
    });
  const n = function (r, i, o) {
    return j.fun(r) ? r(o, i) : r;
  };
  return (t._getProps = n), t;
};
function ux(e, t, n) {
  const r = j.fun(t) && t,
    {
      reset: i,
      sort: o,
      trail: s = 0,
      expires: a = !0,
      exitBeforeEnter: l = !1,
      onDestroyed: u,
      ref: c,
      config: f,
    } = r ? r() : t,
    d = P.useMemo(() => (r || arguments.length == 3 ? BM() : void 0), []),
    m = Je(e),
    y = [],
    h = P.useRef(null),
    x = i ? null : h.current;
  Ar(() => {
    h.current = y;
  }),
    K2(
      () => (
        K(y, (O) => {
          d == null || d.add(O.ctrl), (O.ctrl.ref = d);
        }),
        () => {
          K(h.current, (O) => {
            O.expired && clearTimeout(O.expirationId),
              fg(O.ctrl, d),
              O.ctrl.stop(!0);
          });
        }
      )
    );
  const p = YM(m, r ? r() : t, x),
    g = (i && h.current) || [];
  Ar(() =>
    K(g, ({ ctrl: O, item: D, key: U }) => {
      fg(O, d), st(u, D, U);
    })
  );
  const v = [];
  if (
    (x &&
      K(x, (O, D) => {
        O.expired
          ? (clearTimeout(O.expirationId), g.push(O))
          : ((D = v[D] = p.indexOf(O.key)), ~D && (y[D] = O));
      }),
    K(m, (O, D) => {
      y[D] ||
        ((y[D] = { key: p[D], item: O, phase: 'mount', ctrl: new FM() }),
        (y[D].ctrl.item = O));
    }),
    v.length)
  ) {
    let O = -1;
    const { leave: D } = r ? r() : t;
    K(v, (U, B) => {
      const $ = x[B];
      ~U
        ? ((O = y.indexOf($)), (y[O] = { ...$, item: m[U] }))
        : D && y.splice(++O, 0, $);
    });
  }
  j.fun(o) && y.sort((O, D) => o(O.item, D.item));
  let w = -s;
  const k = Q2(),
    S = fh(t),
    C = new Map(),
    M = P.useRef(new Map()),
    A = P.useRef(!1);
  K(y, (O, D) => {
    const U = O.key,
      B = O.phase,
      $ = r ? r() : t;
    let F, H;
    const q = st($.delay || 0, U);
    if (B == 'mount') (F = $.enter), (H = 'enter');
    else {
      const X = p.indexOf(U) < 0;
      if (B != 'leave')
        if (X) (F = $.leave), (H = 'leave');
        else if ((F = $.update)) H = 'update';
        else return;
      else if (!X) (F = $.enter), (H = 'enter');
      else return;
    }
    if (
      ((F = st(F, O.item, D)), (F = j.obj(F) ? dh(F) : { to: F }), !F.config)
    ) {
      const X = f || S.config;
      F.config = st(X, O.item, D, H);
    }
    w += s;
    const Y = {
      ...S,
      delay: q + w,
      ref: c,
      immediate: $.immediate,
      reset: !1,
      ...F,
    };
    if (H == 'enter' && j.und(Y.from)) {
      const X = r ? r() : t,
        oe = j.und(X.initial) || x ? X.from : X.initial;
      Y.from = st(oe, O.item, D);
    }
    const { onResolve: ye } = Y;
    Y.onResolve = (X) => {
      st(ye, X);
      const oe = h.current,
        ue = oe.find((fe) => fe.key === U);
      if (ue && !(X.cancelled && ue.phase != 'update') && ue.ctrl.idle) {
        const fe = oe.every((z) => z.ctrl.idle);
        if (ue.phase == 'leave') {
          const z = st(a, ue.item);
          if (z !== !1) {
            const W = z === !0 ? 0 : z;
            if (((ue.expired = !0), !fe && W > 0)) {
              W <= 2147483647 && (ue.expirationId = setTimeout(k, W));
              return;
            }
          }
        }
        fe &&
          oe.some((z) => z.expired) &&
          (M.current.delete(ue), l && (A.current = !0), k());
      }
    };
    const ce = UM(O.ctrl, Y);
    H === 'leave' && l
      ? M.current.set(O, { phase: H, springs: ce, payload: Y })
      : C.set(O, { phase: H, springs: ce, payload: Y });
  });
  const T = P.useContext(Zu),
    E = yM(T),
    I = T !== E && EM(T);
  Ar(() => {
    I &&
      K(y, (O) => {
        O.ctrl.start({ default: T });
      });
  }, [T]),
    K(C, (O, D) => {
      if (M.current.size) {
        const U = y.findIndex((B) => B.key === D.key);
        y.splice(U, 1);
      }
    }),
    Ar(
      () => {
        K(M.current.size ? M.current : C, ({ phase: O, payload: D }, U) => {
          const { ctrl: B } = U;
          (U.phase = O),
            d == null || d.add(B),
            I && O == 'enter' && B.start({ default: T }),
            D &&
              (TM(B, D.ref),
              (B.ref || d) && !A.current
                ? B.update(D)
                : (B.start(D), A.current && (A.current = !1)));
        });
      },
      i ? void 0 : n
    );
  const R = (O) =>
    P.createElement(
      P.Fragment,
      null,
      y.map((D, U) => {
        const { springs: B } = C.get(D) || D.ctrl,
          $ = O({ ...B }, D.item, D, U);
        return $ && $.type
          ? P.createElement($.type, {
              ...$.props,
              key: j.str(D.key) || j.num(D.key) ? D.key : D.ctrl.id,
              ref: $.ref,
            })
          : $;
      })
    );
  return d ? [R, d] : R;
}
var WM = 1;
function YM(e, { key: t, keys: n = t }, r) {
  if (n === null) {
    const i = new Set();
    return e.map((o) => {
      const s =
        r && r.find((a) => a.item === o && a.phase !== 'leave' && !i.has(a));
      return s ? (i.add(s), s.key) : WM++;
    });
  }
  return j.und(n) ? e : j.fun(n) ? e.map(n) : Je(n);
}
var cx = class extends hh {
  constructor(e, t) {
    super(),
      (this.source = e),
      (this.idle = !0),
      (this._active = new Set()),
      (this.calc = ys(...t));
    const n = this._get(),
      r = fd(n);
    ch(this, r.create(n));
  }
  advance(e) {
    const t = this._get(),
      n = this.get();
    kn(t, n) || (ln(this).setValue(t), this._onChange(t, this.idle)),
      !this.idle && wg(this._active) && Qc(this);
  }
  _get() {
    const e = j.arr(this.source) ? this.source.map(ot) : Je(ot(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle &&
      !wg(this._active) &&
      ((this.idle = !1),
      K(Xu(this), (e) => {
        e.done = !1;
      }),
      Ct.skipAnimation
        ? (Q.batchedUpdates(() => this.advance()), Qc(this))
        : Yu.start(this));
  }
  _attach() {
    let e = 1;
    K(Je(this.source), (t) => {
      Ot(t) && eo(t, this),
        hd(t) &&
          (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1)));
    }),
      (this.priority = e),
      this._start();
  }
  _detach() {
    K(Je(this.source), (e) => {
      Ot(e) && ws(e, this);
    }),
      this._active.clear(),
      Qc(this);
  }
  eventObserved(e) {
    e.type == 'change'
      ? e.idle
        ? this.advance()
        : (this._active.add(e.parent), this._start())
      : e.type == 'idle'
      ? this._active.delete(e.parent)
      : e.type == 'priority' &&
        (this.priority = Je(this.source).reduce(
          (t, n) => Math.max(t, (hd(n) ? n.priority : 0) + 1),
          0
        ));
  }
};
function GM(e) {
  return e.idle !== !1;
}
function wg(e) {
  return !e.size || Array.from(e).every(GM);
}
function Qc(e) {
  e.idle ||
    ((e.idle = !0),
    K(Xu(e), (t) => {
      t.done = !0;
    }),
    xs(e, { type: 'idle', parent: e }));
}
var Vl = (e, ...t) => new cx(e, t);
Ct.assign({ createStringInterpolator: Y2, to: (e, t) => new cx(e, t) });
var fx = /^--/;
function QM(e, t) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : typeof t == 'number' &&
      t !== 0 &&
      !fx.test(e) &&
      !(Do.hasOwnProperty(e) && Do[e])
    ? t + 'px'
    : ('' + t).trim();
}
var Sg = {};
function KM(e, t) {
  if (!e.nodeType || !e.setAttribute) return !1;
  const n =
      e.nodeName === 'filter' ||
      (e.parentNode && e.parentNode.nodeName === 'filter'),
    {
      style: r,
      children: i,
      scrollTop: o,
      scrollLeft: s,
      viewBox: a,
      ...l
    } = t,
    u = Object.values(l),
    c = Object.keys(l).map((f) =>
      n || e.hasAttribute(f)
        ? f
        : Sg[f] || (Sg[f] = f.replace(/([A-Z])/g, (d) => '-' + d.toLowerCase()))
    );
  i !== void 0 && (e.textContent = i);
  for (const f in r)
    if (r.hasOwnProperty(f)) {
      const d = QM(f, r[f]);
      fx.test(f) ? e.style.setProperty(f, d) : (e.style[f] = d);
    }
  c.forEach((f, d) => {
    e.setAttribute(f, u[d]);
  }),
    o !== void 0 && (e.scrollTop = o),
    s !== void 0 && (e.scrollLeft = s),
    a !== void 0 && e.setAttribute('viewBox', a);
}
var Do = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  XM = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1),
  qM = ['Webkit', 'Ms', 'Moz', 'O'];
Do = Object.keys(Do).reduce(
  (e, t) => (qM.forEach((n) => (e[XM(n, t)] = e[t])), e),
  Do
);
var ZM = /^(matrix|translate|scale|rotate|skew)/,
  JM = /^(translate)/,
  eE = /^(rotate|skew)/,
  Kc = (e, t) => (j.num(e) && e !== 0 ? e + t : e),
  Ga = (e, t) =>
    j.arr(e)
      ? e.every((n) => Ga(n, t))
      : j.num(e)
      ? e === t
      : parseFloat(e) === t,
  tE = class extends qu {
    constructor({ x: e, y: t, z: n, ...r }) {
      const i = [],
        o = [];
      (e || t || n) &&
        (i.push([e || 0, t || 0, n || 0]),
        o.push((s) => [
          `translate3d(${s.map((a) => Kc(a, 'px')).join(',')})`,
          Ga(s, 0),
        ])),
        xn(r, (s, a) => {
          if (a === 'transform')
            i.push([s || '']), o.push((l) => [l, l === '']);
          else if (ZM.test(a)) {
            if ((delete r[a], j.und(s))) return;
            const l = JM.test(a) ? 'px' : eE.test(a) ? 'deg' : '';
            i.push(Je(s)),
              o.push(
                a === 'rotate3d'
                  ? ([u, c, f, d]) => [
                      `rotate3d(${u},${c},${f},${Kc(d, l)})`,
                      Ga(d, 0),
                    ]
                  : (u) => [
                      `${a}(${u.map((c) => Kc(c, l)).join(',')})`,
                      Ga(u, a.startsWith('scale') ? 1 : 0),
                    ]
              );
          }
        }),
        i.length && (r.transform = new nE(i, o)),
        super(r);
    }
  },
  nE = class extends H2 {
    constructor(e, t) {
      super(), (this.inputs = e), (this.transforms = t), (this._value = null);
    }
    get() {
      return this._value || (this._value = this._get());
    }
    _get() {
      let e = '',
        t = !0;
      return (
        K(this.inputs, (n, r) => {
          const i = ot(n[0]),
            [o, s] = this.transforms[r](j.arr(i) ? i : n.map(ot));
          (e += ' ' + o), (t = t && s);
        }),
        t ? 'none' : e
      );
    }
    observerAdded(e) {
      e == 1 && K(this.inputs, (t) => K(t, (n) => Ot(n) && eo(n, this)));
    }
    observerRemoved(e) {
      e == 0 && K(this.inputs, (t) => K(t, (n) => Ot(n) && ws(n, this)));
    }
    eventObserved(e) {
      e.type == 'change' && (this._value = null), xs(this, e);
    }
  },
  rE = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ];
Ct.assign({
  batchedUpdates: mp.unstable_batchedUpdates,
  createStringInterpolator: Y2,
  colors: HP,
});
var iE = CM(rE, {
    applyAnimatedValues: KM,
    createAnimatedStyle: (e) => new tE(e),
    getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
  }),
  dx = iE.animated;
const oE = () => {
    Ar(() => {
      var n;
      if (!window.matchMedia) return Ct.assign({ skipAnimation: !0 }), () => {};
      const e = window.matchMedia('(prefers-reduced-motion)'),
        t = (r) => {
          Ct.assign({ skipAnimation: r.matches || void 0 });
        };
      return (
        t(e),
        (n = e.addEventListener) == null || n.call(e, 'change', t),
        () => {
          var r;
          (r = e.removeEventListener) == null || r.call(e, 'change', t);
        }
      );
    }, []);
  },
  sE = (e, t) => {
    const n = P.useRef(null),
      r = ls(e, n),
      {
        xExtremumGetters: i,
        yExtremumGetters: o,
        seriesFormatters: s,
        colorProcessors: a,
      } = IP(t);
    return (
      oE(),
      {
        svgRef: n,
        chartSurfaceRef: r,
        xExtremumGetters: i,
        yExtremumGetters: o,
        seriesFormatters: s,
        colorProcessors: a,
      }
    );
  },
  kg = (e, t) => {
    const n = t === 'x' ? nv : WS;
    return [
      ...((e == null
        ? void 0
        : e.map((r, i) => _({ id: `defaultized-${t}-axis-${i}` }, r))) ?? []),
      ...(e === void 0 || e.findIndex(({ id: r }) => r === n) === -1
        ? [{ id: n, scaleType: 'linear' }]
        : []),
    ];
  },
  aE = (e, t) => {
    const n = P.useMemo(() => kg(e, 'x'), [e]),
      r = P.useMemo(() => kg(t, 'y'), [t]);
    return [n, r];
  },
  lE = [
    'width',
    'height',
    'series',
    'margin',
    'xAxis',
    'yAxis',
    'zAxis',
    'colors',
    'dataset',
    'sx',
    'title',
    'desc',
    'disableAxisListener',
    'highlightedItem',
    'onHighlightChange',
    'plugins',
    'children',
  ],
  uE = (e, t) => {
    const {
        width: n,
        height: r,
        series: i,
        margin: o,
        xAxis: s,
        yAxis: a,
        zAxis: l,
        colors: u,
        dataset: c,
        sx: f,
        title: d,
        desc: m,
        disableAxisListener: y,
        highlightedItem: h,
        onHighlightChange: x,
        plugins: p,
        children: g,
      } = e,
      v = ie(e, lE),
      {
        svgRef: w,
        chartSurfaceRef: k,
        xExtremumGetters: S,
        yExtremumGetters: C,
        seriesFormatters: M,
        colorProcessors: A,
      } = sE(t, p),
      [T, E] = aE(s, a),
      I = { width: n, height: r, margin: o, svgRef: w },
      R = { colorProcessors: A },
      O = { series: i, colors: u, dataset: c, seriesFormatters: M },
      D = {
        xAxis: T,
        yAxis: E,
        dataset: c,
        xExtremumGetters: S,
        yExtremumGetters: C,
      },
      U = { zAxis: l, dataset: c },
      B = { highlightedItem: h, onHighlightChange: x },
      $ = _({}, v, {
        width: n,
        height: r,
        ref: k,
        sx: f,
        title: d,
        desc: m,
        disableAxisListener: y,
      });
    return {
      children: g,
      drawingProviderProps: I,
      colorProviderProps: R,
      seriesContextProps: O,
      cartesianContextProps: D,
      zAxisContextProps: U,
      highlightedProviderProps: B,
      chartsSurfaceProps: $,
      xAxis: T,
      yAxis: E,
    };
  },
  cE = P.forwardRef(function (t, n) {
    const {
      children: r,
      drawingProviderProps: i,
      colorProviderProps: o,
      seriesContextProps: s,
      cartesianContextProps: a,
      zAxisContextProps: l,
      highlightedProviderProps: u,
      chartsSurfaceProps: c,
    } = uE(t, n);
    return b.jsx(
      QS,
      _({}, i, {
        children: b.jsx(
          V4,
          _({}, o, {
            children: b.jsx(
              F4,
              _({}, s, {
                children: b.jsx(
                  M6,
                  _({}, a, {
                    children: b.jsx(
                      $6,
                      _({}, l, {
                        children: b.jsx(U4, {
                          children: b.jsx(
                            U6,
                            _({}, u, {
                              children: b.jsxs(
                                O6,
                                _({}, c, { children: [b.jsx(N6, {}), r] })
                              ),
                            })
                          ),
                        }),
                      })
                    ),
                  })
                ),
              })
            ),
          })
        ),
      })
    );
  }),
  fE = qe('div', { name: 'MuiResponsiveChart', slot: 'Container' })(
    ({ ownerState: e }) => ({
      width: e.width ?? '100%',
      height: e.height ?? '100%',
      display: 'flex',
      position: 'relative',
      flexGrow: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      '&>svg': { width: '100%', height: '100%' },
    })
  ),
  dE = (e, t) => {
    const n = P.useRef(!1),
      r = P.useRef(null),
      [i, o] = P.useState(0),
      [s, a] = P.useState(0),
      l = P.useCallback(() => {
        const u = r == null ? void 0 : r.current;
        if (!u) return;
        const f = x5(u).getComputedStyle(u),
          d = Math.floor(parseFloat(f.height)) || 0,
          m = Math.floor(parseFloat(f.width)) || 0;
        o(m), a(d);
      }, []);
    return (
      P.useEffect(() => {
        n.current = !0;
      }, []),
      Ur(() => {
        if (e !== void 0 && t !== void 0) return () => {};
        l();
        const u = r.current;
        if (typeof ResizeObserver > 'u') return () => {};
        let c;
        const f = new ResizeObserver(() => {
          c = requestAnimationFrame(() => {
            l();
          });
        });
        return (
          u && f.observe(u),
          () => {
            c && window.cancelAnimationFrame(c), u && f.unobserve(u);
          }
        );
      }, [l, t, e]),
      { containerRef: r, width: e ?? i, height: t ?? s }
    );
  },
  pE = [
    'width',
    'height',
    'margin',
    'children',
    'series',
    'colors',
    'dataset',
    'desc',
    'disableAxisListener',
    'highlightedItem',
    'onHighlightChange',
    'plugins',
    'sx',
    'title',
    'viewBox',
    'xAxis',
    'yAxis',
    'zAxis',
  ],
  hE = (e, t) => {
    const {
        width: n,
        height: r,
        margin: i,
        children: o,
        series: s,
        colors: a,
        dataset: l,
        desc: u,
        disableAxisListener: c,
        highlightedItem: f,
        onHighlightChange: d,
        plugins: m,
        sx: y,
        title: h,
        viewBox: x,
        xAxis: p,
        yAxis: g,
        zAxis: v,
      } = e,
      w = ie(e, pE),
      { containerRef: k, width: S, height: C } = dE(n, r),
      M = _({}, w, { ownerState: { width: n, height: r }, ref: k });
    return {
      hasIntrinsicSize: S && C,
      chartContainerProps: {
        margin: i,
        children: o,
        series: s,
        colors: a,
        dataset: l,
        desc: u,
        disableAxisListener: c,
        highlightedItem: f,
        onHighlightChange: d,
        plugins: m,
        sx: y,
        title: h,
        viewBox: x,
        xAxis: p,
        yAxis: g,
        zAxis: v,
        width: S,
        height: C,
        ref: t,
      },
      resizableChartContainerProps: M,
    };
  },
  mE = P.forwardRef(function (t, n) {
    const {
      hasIntrinsicSize: r,
      chartContainerProps: i,
      resizableChartContainerProps: o,
    } = hE(t, n);
    return b.jsx(fE, _({}, o, { children: r ? b.jsx(cE, _({}, i)) : null }));
  });
function gE(e) {
  return typeof e == 'string';
}
function yE(e, t, n) {
  return e === void 0 || gE(e)
    ? t
    : _({}, t, { ownerState: _({}, t.ownerState, n) });
}
const vE = { disableDefaultClasses: !1 },
  xE = P.createContext(vE);
function wE(e) {
  const { disableDefaultClasses: t } = P.useContext(xE);
  return (n) => (t ? '' : e(n));
}
function SE(e, t = []) {
  if (e === void 0) return {};
  const n = {};
  return (
    Object.keys(e)
      .filter(
        (r) =>
          r.match(/^on[A-Z]/) && typeof e[r] == 'function' && !t.includes(r)
      )
      .forEach((r) => {
        n[r] = e[r];
      }),
    n
  );
}
function kE(e, t, n) {
  return typeof e == 'function' ? e(t, n) : e;
}
function Cg(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == 'function'))
      .forEach((n) => {
        t[n] = e[n];
      }),
    t
  );
}
function CE(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: o,
  } = e;
  if (!t) {
    const m = Tn(
        n == null ? void 0 : n.className,
        o,
        i == null ? void 0 : i.className,
        r == null ? void 0 : r.className
      ),
      y = _(
        {},
        n == null ? void 0 : n.style,
        i == null ? void 0 : i.style,
        r == null ? void 0 : r.style
      ),
      h = _({}, n, i, r);
    return (
      m.length > 0 && (h.className = m),
      Object.keys(y).length > 0 && (h.style = y),
      { props: h, internalRef: void 0 }
    );
  }
  const s = SE(_({}, i, r)),
    a = Cg(r),
    l = Cg(i),
    u = t(s),
    c = Tn(
      u == null ? void 0 : u.className,
      n == null ? void 0 : n.className,
      o,
      i == null ? void 0 : i.className,
      r == null ? void 0 : r.className
    ),
    f = _(
      {},
      u == null ? void 0 : u.style,
      n == null ? void 0 : n.style,
      i == null ? void 0 : i.style,
      r == null ? void 0 : r.style
    ),
    d = _({}, u, n, l, a);
  return (
    c.length > 0 && (d.className = c),
    Object.keys(f).length > 0 && (d.style = f),
    { props: d, internalRef: u.ref }
  );
}
const bE = [
  'elementType',
  'externalSlotProps',
  'ownerState',
  'skipResolvingSlotProps',
];
function yn(e) {
  var t;
  const {
      elementType: n,
      externalSlotProps: r,
      ownerState: i,
      skipResolvingSlotProps: o = !1,
    } = e,
    s = ie(e, bE),
    a = o ? {} : kE(r, i),
    { props: l, internalRef: u } = CE(_({}, s, { externalSlotProps: a })),
    c = ls(
      u,
      a == null ? void 0 : a.ref,
      (t = e.additionalProps) == null ? void 0 : t.ref
    );
  return yE(n, _({}, l, { ref: c }), i);
}
function px(e) {
  return hr('MuiChartsAxis', e);
}
const Sa = Yr('MuiChartsAxis', [
    'root',
    'line',
    'tickContainer',
    'tick',
    'tickLabel',
    'label',
    'directionX',
    'directionY',
    'top',
    'bottom',
    'left',
    'right',
  ]),
  hx = qe('g', {
    name: 'MuiChartsAxis',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })(({ theme: e }) => ({
    [`& .${Sa.tickLabel}`]: _({}, e.typography.caption, {
      fill: (e.vars || e).palette.text.primary,
    }),
    [`& .${Sa.label}`]: _({}, e.typography.body1, {
      fill: (e.vars || e).palette.text.primary,
    }),
    [`& .${Sa.line}`]: {
      stroke: (e.vars || e).palette.text.primary,
      shapeRendering: 'crispEdges',
      strokeWidth: 1,
    },
    [`& .${Sa.tick}`]: {
      stroke: (e.vars || e).palette.text.primary,
      shapeRendering: 'crispEdges',
    },
  }));
function _E() {
  return typeof window > 'u';
}
const wr = { widthCache: {}, cacheCount: 0 },
  PE = 2e3,
  ME = {
    position: 'absolute',
    top: '-20000px',
    left: 0,
    padding: 0,
    margin: 0,
    border: 'none',
    whiteSpace: 'pre',
  },
  EE = [
    'minWidth',
    'maxWidth',
    'width',
    'minHeight',
    'maxHeight',
    'height',
    'top',
    'left',
    'fontSize',
    'padding',
    'margin',
    'paddingLeft',
    'paddingRight',
    'paddingTop',
    'paddingBottom',
    'marginLeft',
    'marginRight',
    'marginTop',
    'marginBottom',
  ],
  bg = 'mui_measurement_span';
function mx(e, t) {
  return EE.indexOf(e) >= 0 && t === +t ? `${t}px` : t;
}
function gx(e) {
  return e
    .split('')
    .reduce(
      (r, i) =>
        i === i.toUpperCase() ? [...r, '-', i.toLowerCase()] : [...r, i],
      []
    )
    .join('');
}
const TE = (e) =>
    Object.keys(e)
      .sort()
      .reduce((t, n) => `${t}${gx(n)}:${mx(n, e[n])};`, ''),
  AE = (e, t = {}) => {
    if (e == null || _E()) return { width: 0, height: 0 };
    const n = `${e}`,
      r = TE(t),
      i = `${n}-${r}`;
    if (wr.widthCache[i]) return wr.widthCache[i];
    try {
      let o = document.getElementById(bg);
      o === null &&
        ((o = document.createElement('span')),
        o.setAttribute('id', bg),
        o.setAttribute('aria-hidden', 'true'),
        document.body.appendChild(o));
      const s = _({}, ME, t);
      Object.keys(s).map((u) => ((o.style[gx(u)] = mx(u, s[u])), u)),
        (o.textContent = n);
      const a = o.getBoundingClientRect(),
        l = { width: a.width, height: a.height };
      return (
        (wr.widthCache[i] = l),
        wr.cacheCount + 1 > PE
          ? ((wr.cacheCount = 0), (wr.widthCache = {}))
          : (wr.cacheCount += 1),
        l
      );
    } catch {
      return { width: 0, height: 0 };
    }
  };
function mh({ style: e, needsComputation: t, text: n }) {
  return n
    .split(
      `
`
    )
    .map((r) => _({ text: r }, t ? AE(r, e) : { width: 0, height: 0 }));
}
const RE = ['x', 'y', 'style', 'text', 'ownerState'],
  OE = ['angle', 'textAnchor', 'dominantBaseline'];
function _s(e) {
  const { x: t, y: n, style: r, text: i } = e,
    o = ie(e, RE),
    s = r ?? {},
    { angle: a, textAnchor: l, dominantBaseline: u } = s,
    c = ie(s, OE),
    f = P.useMemo(
      () =>
        mh({
          style: c,
          needsComputation: i.includes(`
`),
          text: i,
        }),
      [c, i]
    );
  let d;
  switch (u) {
    case 'hanging':
      d = 0;
      break;
    case 'central':
      d = ((f.length - 1) / 2) * -f[0].height;
      break;
    default:
      d = (f.length - 1) * -f[0].height;
      break;
  }
  const m = [];
  return (
    a && m.push(`rotate(${a}, ${t}, ${n})`),
    b.jsx(
      'text',
      _({}, o, {
        transform: m.length > 0 ? m.join(' ') : void 0,
        x: t,
        y: n,
        textAnchor: l,
        dominantBaseline: u,
        style: c,
        children: f.map((y, h) =>
          b.jsx(
            'tspan',
            {
              x: t,
              dy: `${h === 0 ? d : f[0].height}px`,
              dominantBaseline: u,
              children: y.text,
            },
            h
          )
        ),
      })
    )
  );
}
const _g = 5;
function $E(e, t, n = 0) {
  const r = Math.min(
    Math.abs(n) % 180,
    Math.abs((Math.abs(n) % 180) - 180) % 180
  );
  if (r < _g) return e;
  if (r > 90 - _g) return t;
  const i = (r * Math.PI) / 180,
    o = Math.atan2(t, e);
  return i < o ? e / Math.cos(i) : t / Math.sin(i);
}
function IE(e = !1) {
  const [t, n] = P.useState(!1);
  return (
    Ur(() => {
      e || n(!0);
    }, [e]),
    P.useEffect(() => {
      e && n(!0);
    }, [e]),
    t
  );
}
const LE = ['scale', 'tickNumber', 'reverse'],
  NE = (e) => {
    const { classes: t, position: n } = e;
    return Un(
      {
        root: ['root', 'directionX', n],
        line: ['line'],
        tickContainer: ['tickContainer'],
        tick: ['tick'],
        tickLabel: ['tickLabel'],
        label: ['label'],
      },
      px,
      t
    );
  };
function jE(
  e,
  { tickLabelStyle: t, tickLabelInterval: n, reverse: r, isMounted: i }
) {
  const o = e.map((u) => {
    if (!i || u.formattedValue === void 0)
      return _({}, u, { width: 0, height: 0 });
    const c = mh({ style: t, needsComputation: !0, text: u.formattedValue });
    return _({}, u, {
      width: Math.max(...c.map((f) => f.width)),
      height: Math.max(c.length * c[0].height),
    });
  });
  if (typeof n == 'function')
    return o.map((u, c) => _({}, u, { skipLabel: !n(u.value, c) }));
  let s = 0,
    a = 0;
  const l = r ? -1 : 1;
  return o.map((u, c) => {
    const { width: f, offset: d, labelOffset: m, height: y } = u,
      h = $E(f, y, t == null ? void 0 : t.angle),
      x = d + m,
      p = 1.2;
    return (
      (s = x - (l * (p * h)) / 2),
      c > 0 && l * s < l * a
        ? _({}, u, { skipLabel: !0 })
        : ((a = x + (l * (p * h)) / 2), u)
    );
  });
}
const DE = {
  position: 'bottom',
  disableLine: !1,
  disableTicks: !1,
  tickSize: 6,
};
function Pg(e) {
  const { xAxisIds: t, xAxis: n } = gr(),
    r = n[e.axisId ?? t[0]],
    { scale: i, tickNumber: o, reverse: s } = r,
    a = ie(r, LE),
    l = IE(),
    u = Fu({ props: _({}, a, e), name: 'MuiChartsXAxis' }),
    c = _({}, DE, u),
    {
      position: f,
      disableLine: d,
      disableTicks: m,
      tickLabelStyle: y,
      label: h,
      labelStyle: x,
      tickFontSize: p,
      labelFontSize: g,
      tickSize: v,
      valueFormatter: w,
      slots: k,
      slotProps: S,
      tickInterval: C,
      tickLabelInterval: M,
      tickPlacement: A,
      tickLabelPlacement: T,
    } = c,
    E = Zi(),
    I = NE(_({}, c, { theme: E })),
    { left: R, top: O, width: D, height: U } = Vn(),
    B = m ? 4 : v,
    $ = f === 'bottom' ? 1 : -1,
    F = (k == null ? void 0 : k.axisLine) ?? 'line',
    H = (k == null ? void 0 : k.axisTick) ?? 'line',
    q = (k == null ? void 0 : k.axisTickLabel) ?? _s,
    Y = (k == null ? void 0 : k.axisLabel) ?? _s,
    ye = yn({
      elementType: q,
      externalSlotProps: S == null ? void 0 : S.axisTickLabel,
      additionalProps: {
        style: _(
          {
            textAnchor: 'middle',
            dominantBaseline: f === 'bottom' ? 'hanging' : 'auto',
            fontSize: p ?? 12,
          },
          y
        ),
      },
      className: I.tickLabel,
      ownerState: {},
    }),
    ce = w2({
      scale: i,
      tickNumber: o,
      valueFormatter: w,
      tickInterval: C,
      tickPlacement: A,
      tickLabelPlacement: T,
    }),
    X = jE(ce, {
      tickLabelStyle: ye.style,
      tickLabelInterval: M,
      reverse: s,
      isMounted: l,
    }),
    oe = { x: R + D / 2, y: $ * (B + 22) },
    ue = yn({
      elementType: Y,
      externalSlotProps: S == null ? void 0 : S.axisLabel,
      additionalProps: {
        style: _(
          {
            fontSize: g ?? 14,
            textAnchor: 'middle',
            dominantBaseline: f === 'bottom' ? 'hanging' : 'auto',
          },
          x
        ),
      },
      ownerState: {},
    }),
    fe = i.domain();
  return fe.length === 0 || fe[0] === fe[1]
    ? null
    : b.jsxs(hx, {
        transform: `translate(0, ${f === 'bottom' ? O + U : O})`,
        className: I.root,
        children: [
          !d &&
            b.jsx(
              F,
              _(
                { x1: R, x2: R + D, className: I.line },
                S == null ? void 0 : S.axisLine
              )
            ),
          X.map(
            (
              { formattedValue: z, offset: W, labelOffset: G, skipLabel: L },
              Se
            ) => {
              const J = G ?? 0,
                Re = $ * (B + 3),
                Ee = W >= R - 1 && W <= R + D + 1,
                gt = W + J >= R - 1 && W + J <= R + D + 1;
              return b.jsxs(
                'g',
                {
                  transform: `translate(${W}, 0)`,
                  className: I.tickContainer,
                  children: [
                    !m &&
                      Ee &&
                      b.jsx(
                        H,
                        _(
                          { y2: $ * B, className: I.tick },
                          S == null ? void 0 : S.axisTick
                        )
                      ),
                    z !== void 0 &&
                      !L &&
                      gt &&
                      b.jsx(q, _({ x: J, y: Re }, ye, { text: z.toString() })),
                  ],
                },
                Se
              );
            }
          ),
          h &&
            b.jsx('g', {
              className: I.label,
              children: b.jsx(Y, _({}, oe, ue, { text: h })),
            }),
        ],
      });
}
const FE = ['scale', 'tickNumber'],
  zE = (e) => {
    const { classes: t, position: n } = e;
    return Un(
      {
        root: ['root', 'directionY', n],
        line: ['line'],
        tickContainer: ['tickContainer'],
        tick: ['tick'],
        tickLabel: ['tickLabel'],
        label: ['label'],
      },
      px,
      t
    );
  },
  UE = {
    position: 'left',
    disableLine: !1,
    disableTicks: !1,
    tickFontSize: 12,
    labelFontSize: 14,
    tickSize: 6,
  };
function Mg(e) {
  const { yAxisIds: t, yAxis: n } = gr(),
    r = n[e.axisId ?? t[0]],
    { scale: i, tickNumber: o } = r,
    s = ie(r, FE),
    a = Fu({ props: _({}, s, e), name: 'MuiChartsYAxis' }),
    l = _({}, UE, a),
    {
      position: u,
      disableLine: c,
      disableTicks: f,
      tickFontSize: d,
      label: m,
      labelFontSize: y,
      labelStyle: h,
      tickLabelStyle: x,
      tickSize: p,
      valueFormatter: g,
      slots: v,
      slotProps: w,
      tickPlacement: k,
      tickLabelPlacement: S,
      tickInterval: C,
      tickLabelInterval: M,
    } = l,
    A = Zi(),
    T = A.direction === 'rtl',
    E = zE(_({}, l, { theme: A })),
    { left: I, top: R, width: O, height: D } = Vn(),
    U = f ? 4 : p,
    B = w2({
      scale: i,
      tickNumber: o,
      valueFormatter: g,
      tickPlacement: k,
      tickLabelPlacement: S,
      tickInterval: C,
    }),
    $ = u === 'right' ? 1 : -1,
    F = { x: $ * (d + U + 10), y: R + D / 2 },
    H = (v == null ? void 0 : v.axisLine) ?? 'line',
    q = (v == null ? void 0 : v.axisTick) ?? 'line',
    Y = (v == null ? void 0 : v.axisTickLabel) ?? _s,
    ye = (v == null ? void 0 : v.axisLabel) ?? _s,
    ce = (!T && u === 'right') || (T && u !== 'right'),
    X = yn({
      elementType: Y,
      externalSlotProps: w == null ? void 0 : w.axisTickLabel,
      additionalProps: {
        style: _(
          {
            fontSize: d,
            textAnchor: ce ? 'start' : 'end',
            dominantBaseline: 'central',
          },
          x
        ),
      },
      className: E.tickLabel,
      ownerState: {},
    }),
    oe = yn({
      elementType: ye,
      externalSlotProps: w == null ? void 0 : w.axisLabel,
      additionalProps: {
        style: _(
          {
            fontSize: y,
            angle: $ * 90,
            textAnchor: 'middle',
            dominantBaseline: 'auto',
          },
          h
        ),
      },
      ownerState: {},
    }),
    ue = yn({
      elementType: H,
      externalSlotProps: w == null ? void 0 : w.axisLine,
      additionalProps: { strokeLinecap: 'square' },
      ownerState: {},
    }),
    fe = i.domain();
  return fe.length === 0 || fe[0] === fe[1]
    ? null
    : b.jsxs(hx, {
        transform: `translate(${u === 'right' ? I + O : I}, 0)`,
        className: E.root,
        children: [
          !c && b.jsx(H, _({ y1: R, y2: R + D, className: E.line }, ue)),
          B.map(
            (
              { formattedValue: z, offset: W, labelOffset: G, value: L },
              Se
            ) => {
              const J = $ * (U + 2),
                Re = G,
                Ee = typeof M == 'function' && !(M != null && M(L, Se));
              return W >= R - 1 && W <= D + R + 1
                ? b.jsxs(
                    'g',
                    {
                      transform: `translate(0, ${W})`,
                      className: E.tickContainer,
                      children: [
                        !f &&
                          b.jsx(
                            q,
                            _(
                              { x2: $ * U, className: E.tick },
                              w == null ? void 0 : w.axisTick
                            )
                          ),
                        z !== void 0 &&
                          !Ee &&
                          b.jsx(Y, _({ x: J, y: Re, text: z.toString() }, X)),
                      ],
                    },
                    Se
                  )
                : null;
            }
          ),
          m &&
            b.jsx('g', {
              className: E.label,
              children: b.jsx(ye, _({}, F, oe, { text: m })),
            }),
        ],
      });
}
const ka = (e, t) =>
    e == null ? null : typeof e == 'object' ? e.axisId ?? t ?? null : e,
  Ca = (e, t, n) =>
    typeof e == 'object'
      ? _({}, e, {
          slots: _({}, t, e == null ? void 0 : e.slots),
          slotProps: _({}, n, e == null ? void 0 : e.slotProps),
        })
      : { slots: t, slotProps: n };
function VE(e) {
  const {
      topAxis: t,
      leftAxis: n,
      rightAxis: r,
      bottomAxis: i,
      slots: o,
      slotProps: s,
    } = e,
    { xAxis: a, xAxisIds: l, yAxis: u, yAxisIds: c } = gr(),
    f = ka(n === void 0 ? c[0] : n, c[0]),
    d = ka(i === void 0 ? l[0] : i, l[0]),
    m = ka(t, l[0]),
    y = ka(r, c[0]);
  if (m !== null && !a[m])
    throw Error(
      [
        `MUI X: id used for top axis "${m}" is not defined.`,
        `Available ids are: ${l.join(', ')}.`,
      ].join(`
`)
    );
  if (f !== null && !u[f])
    throw Error(
      [
        `MUI X: id used for left axis "${f}" is not defined.`,
        `Available ids are: ${c.join(', ')}.`,
      ].join(`
`)
    );
  if (y !== null && !u[y])
    throw Error(
      [
        `MUI X: id used for right axis "${y}" is not defined.`,
        `Available ids are: ${c.join(', ')}.`,
      ].join(`
`)
    );
  if (d !== null && !a[d])
    throw Error(
      [
        `MUI X: id used for bottom axis "${d}" is not defined.`,
        `Available ids are: ${l.join(', ')}.`,
      ].join(`
`)
    );
  const h = Ca(t, o, s),
    x = Ca(i, o, s),
    p = Ca(n, o, s),
    g = Ca(r, o, s);
  return b.jsxs(P.Fragment, {
    children: [
      m && b.jsx(Pg, _({}, h, { position: 'top', axisId: m })),
      d && b.jsx(Pg, _({}, x, { position: 'bottom', axisId: d })),
      f && b.jsx(Mg, _({}, p, { position: 'left', axisId: f })),
      y && b.jsx(Mg, _({}, g, { position: 'right', axisId: y })),
    ],
  });
}
var pt = 'top',
  Vt = 'bottom',
  Ht = 'right',
  ht = 'left',
  gh = 'auto',
  Ws = [pt, Vt, Ht, ht],
  Hi = 'start',
  Ps = 'end',
  HE = 'clippingParents',
  yx = 'viewport',
  vo = 'popper',
  BE = 'reference',
  Eg = Ws.reduce(function (e, t) {
    return e.concat([t + '-' + Hi, t + '-' + Ps]);
  }, []),
  vx = [].concat(Ws, [gh]).reduce(function (e, t) {
    return e.concat([t, t + '-' + Hi, t + '-' + Ps]);
  }, []),
  WE = 'beforeRead',
  YE = 'read',
  GE = 'afterRead',
  QE = 'beforeMain',
  KE = 'main',
  XE = 'afterMain',
  qE = 'beforeWrite',
  ZE = 'write',
  JE = 'afterWrite',
  e7 = [WE, YE, GE, QE, KE, XE, qE, ZE, JE];
function wn(e) {
  return e ? (e.nodeName || '').toLowerCase() : null;
}
function bt(e) {
  if (e == null) return window;
  if (e.toString() !== '[object Window]') {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Hr(e) {
  var t = bt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Dt(e) {
  var t = bt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function yh(e) {
  if (typeof ShadowRoot > 'u') return !1;
  var t = bt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function t7(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (n) {
    var r = t.styles[n] || {},
      i = t.attributes[n] || {},
      o = t.elements[n];
    !Dt(o) ||
      !wn(o) ||
      (Object.assign(o.style, r),
      Object.keys(i).forEach(function (s) {
        var a = i[s];
        a === !1 ? o.removeAttribute(s) : o.setAttribute(s, a === !0 ? '' : a);
      }));
  });
}
function n7(e) {
  var t = e.state,
    n = {
      popper: {
        position: t.options.strategy,
        left: '0',
        top: '0',
        margin: '0',
      },
      arrow: { position: 'absolute' },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (r) {
        var i = t.elements[r],
          o = t.attributes[r] || {},
          s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]),
          a = s.reduce(function (l, u) {
            return (l[u] = ''), l;
          }, {});
        !Dt(i) ||
          !wn(i) ||
          (Object.assign(i.style, a),
          Object.keys(o).forEach(function (l) {
            i.removeAttribute(l);
          }));
      });
    }
  );
}
const r7 = {
  name: 'applyStyles',
  enabled: !0,
  phase: 'write',
  fn: t7,
  effect: n7,
  requires: ['computeStyles'],
};
function vn(e) {
  return e.split('-')[0];
}
var Lr = Math.max,
  Hl = Math.min,
  Bi = Math.round;
function yd() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + '/' + t.version;
        })
        .join(' ')
    : navigator.userAgent;
}
function xx() {
  return !/^((?!chrome|android).)*safari/i.test(yd());
}
function Wi(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(),
    i = 1,
    o = 1;
  t &&
    Dt(e) &&
    ((i = (e.offsetWidth > 0 && Bi(r.width) / e.offsetWidth) || 1),
    (o = (e.offsetHeight > 0 && Bi(r.height) / e.offsetHeight) || 1));
  var s = Hr(e) ? bt(e) : window,
    a = s.visualViewport,
    l = !xx() && n,
    u = (r.left + (l && a ? a.offsetLeft : 0)) / i,
    c = (r.top + (l && a ? a.offsetTop : 0)) / o,
    f = r.width / i,
    d = r.height / o;
  return {
    width: f,
    height: d,
    top: c,
    right: u + f,
    bottom: c + d,
    left: u,
    x: u,
    y: c,
  };
}
function vh(e) {
  var t = Wi(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function wx(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && yh(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Dn(e) {
  return bt(e).getComputedStyle(e);
}
function i7(e) {
  return ['table', 'td', 'th'].indexOf(wn(e)) >= 0;
}
function yr(e) {
  return ((Hr(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function Ju(e) {
  return wn(e) === 'html'
    ? e
    : e.assignedSlot || e.parentNode || (yh(e) ? e.host : null) || yr(e);
}
function Tg(e) {
  return !Dt(e) || Dn(e).position === 'fixed' ? null : e.offsetParent;
}
function o7(e) {
  var t = /firefox/i.test(yd()),
    n = /Trident/i.test(yd());
  if (n && Dt(e)) {
    var r = Dn(e);
    if (r.position === 'fixed') return null;
  }
  var i = Ju(e);
  for (yh(i) && (i = i.host); Dt(i) && ['html', 'body'].indexOf(wn(i)) < 0; ) {
    var o = Dn(i);
    if (
      o.transform !== 'none' ||
      o.perspective !== 'none' ||
      o.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(o.willChange) !== -1 ||
      (t && o.willChange === 'filter') ||
      (t && o.filter && o.filter !== 'none')
    )
      return i;
    i = i.parentNode;
  }
  return null;
}
function Ys(e) {
  for (var t = bt(e), n = Tg(e); n && i7(n) && Dn(n).position === 'static'; )
    n = Tg(n);
  return n &&
    (wn(n) === 'html' || (wn(n) === 'body' && Dn(n).position === 'static'))
    ? t
    : n || o7(e) || t;
}
function xh(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
}
function Fo(e, t, n) {
  return Lr(e, Hl(t, n));
}
function s7(e, t, n) {
  var r = Fo(e, t, n);
  return r > n ? n : r;
}
function Sx() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function kx(e) {
  return Object.assign({}, Sx(), e);
}
function Cx(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
var a7 = function (t, n) {
  return (
    (t =
      typeof t == 'function'
        ? t(Object.assign({}, n.rects, { placement: n.placement }))
        : t),
    kx(typeof t != 'number' ? t : Cx(t, Ws))
  );
};
function l7(e) {
  var t,
    n = e.state,
    r = e.name,
    i = e.options,
    o = n.elements.arrow,
    s = n.modifiersData.popperOffsets,
    a = vn(n.placement),
    l = xh(a),
    u = [ht, Ht].indexOf(a) >= 0,
    c = u ? 'height' : 'width';
  if (!(!o || !s)) {
    var f = a7(i.padding, n),
      d = vh(o),
      m = l === 'y' ? pt : ht,
      y = l === 'y' ? Vt : Ht,
      h =
        n.rects.reference[c] + n.rects.reference[l] - s[l] - n.rects.popper[c],
      x = s[l] - n.rects.reference[l],
      p = Ys(o),
      g = p ? (l === 'y' ? p.clientHeight || 0 : p.clientWidth || 0) : 0,
      v = h / 2 - x / 2,
      w = f[m],
      k = g - d[c] - f[y],
      S = g / 2 - d[c] / 2 + v,
      C = Fo(w, S, k),
      M = l;
    n.modifiersData[r] = ((t = {}), (t[M] = C), (t.centerOffset = C - S), t);
  }
}
function u7(e) {
  var t = e.state,
    n = e.options,
    r = n.element,
    i = r === void 0 ? '[data-popper-arrow]' : r;
  i != null &&
    ((typeof i == 'string' && ((i = t.elements.popper.querySelector(i)), !i)) ||
      (wx(t.elements.popper, i) && (t.elements.arrow = i)));
}
const c7 = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: l7,
  effect: u7,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow'],
};
function Yi(e) {
  return e.split('-')[1];
}
var f7 = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
function d7(e, t) {
  var n = e.x,
    r = e.y,
    i = t.devicePixelRatio || 1;
  return { x: Bi(n * i) / i || 0, y: Bi(r * i) / i || 0 };
}
function Ag(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    i = e.placement,
    o = e.variation,
    s = e.offsets,
    a = e.position,
    l = e.gpuAcceleration,
    u = e.adaptive,
    c = e.roundOffsets,
    f = e.isFixed,
    d = s.x,
    m = d === void 0 ? 0 : d,
    y = s.y,
    h = y === void 0 ? 0 : y,
    x = typeof c == 'function' ? c({ x: m, y: h }) : { x: m, y: h };
  (m = x.x), (h = x.y);
  var p = s.hasOwnProperty('x'),
    g = s.hasOwnProperty('y'),
    v = ht,
    w = pt,
    k = window;
  if (u) {
    var S = Ys(n),
      C = 'clientHeight',
      M = 'clientWidth';
    if (
      (S === bt(n) &&
        ((S = yr(n)),
        Dn(S).position !== 'static' &&
          a === 'absolute' &&
          ((C = 'scrollHeight'), (M = 'scrollWidth'))),
      (S = S),
      i === pt || ((i === ht || i === Ht) && o === Ps))
    ) {
      w = Vt;
      var A = f && S === k && k.visualViewport ? k.visualViewport.height : S[C];
      (h -= A - r.height), (h *= l ? 1 : -1);
    }
    if (i === ht || ((i === pt || i === Vt) && o === Ps)) {
      v = Ht;
      var T = f && S === k && k.visualViewport ? k.visualViewport.width : S[M];
      (m -= T - r.width), (m *= l ? 1 : -1);
    }
  }
  var E = Object.assign({ position: a }, u && f7),
    I = c === !0 ? d7({ x: m, y: h }, bt(n)) : { x: m, y: h };
  if (((m = I.x), (h = I.y), l)) {
    var R;
    return Object.assign(
      {},
      E,
      ((R = {}),
      (R[w] = g ? '0' : ''),
      (R[v] = p ? '0' : ''),
      (R.transform =
        (k.devicePixelRatio || 1) <= 1
          ? 'translate(' + m + 'px, ' + h + 'px)'
          : 'translate3d(' + m + 'px, ' + h + 'px, 0)'),
      R)
    );
  }
  return Object.assign(
    {},
    E,
    ((t = {}),
    (t[w] = g ? h + 'px' : ''),
    (t[v] = p ? m + 'px' : ''),
    (t.transform = ''),
    t)
  );
}
function p7(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    i = r === void 0 ? !0 : r,
    o = n.adaptive,
    s = o === void 0 ? !0 : o,
    a = n.roundOffsets,
    l = a === void 0 ? !0 : a,
    u = {
      placement: vn(t.placement),
      variation: Yi(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: i,
      isFixed: t.options.strategy === 'fixed',
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Ag(
        Object.assign({}, u, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: s,
          roundOffsets: l,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Ag(
          Object.assign({}, u, {
            offsets: t.modifiersData.arrow,
            position: 'absolute',
            adaptive: !1,
            roundOffsets: l,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-placement': t.placement,
    }));
}
const h7 = {
  name: 'computeStyles',
  enabled: !0,
  phase: 'beforeWrite',
  fn: p7,
  data: {},
};
var ba = { passive: !0 };
function m7(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    i = r.scroll,
    o = i === void 0 ? !0 : i,
    s = r.resize,
    a = s === void 0 ? !0 : s,
    l = bt(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    o &&
      u.forEach(function (c) {
        c.addEventListener('scroll', n.update, ba);
      }),
    a && l.addEventListener('resize', n.update, ba),
    function () {
      o &&
        u.forEach(function (c) {
          c.removeEventListener('scroll', n.update, ba);
        }),
        a && l.removeEventListener('resize', n.update, ba);
    }
  );
}
const g7 = {
  name: 'eventListeners',
  enabled: !0,
  phase: 'write',
  fn: function () {},
  effect: m7,
  data: {},
};
var y7 = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function Qa(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return y7[t];
  });
}
var v7 = { start: 'end', end: 'start' };
function Rg(e) {
  return e.replace(/start|end/g, function (t) {
    return v7[t];
  });
}
function wh(e) {
  var t = bt(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Sh(e) {
  return Wi(yr(e)).left + wh(e).scrollLeft;
}
function x7(e, t) {
  var n = bt(e),
    r = yr(e),
    i = n.visualViewport,
    o = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    l = 0;
  if (i) {
    (o = i.width), (s = i.height);
    var u = xx();
    (u || (!u && t === 'fixed')) && ((a = i.offsetLeft), (l = i.offsetTop));
  }
  return { width: o, height: s, x: a + Sh(e), y: l };
}
function w7(e) {
  var t,
    n = yr(e),
    r = wh(e),
    i = (t = e.ownerDocument) == null ? void 0 : t.body,
    o = Lr(
      n.scrollWidth,
      n.clientWidth,
      i ? i.scrollWidth : 0,
      i ? i.clientWidth : 0
    ),
    s = Lr(
      n.scrollHeight,
      n.clientHeight,
      i ? i.scrollHeight : 0,
      i ? i.clientHeight : 0
    ),
    a = -r.scrollLeft + Sh(e),
    l = -r.scrollTop;
  return (
    Dn(i || n).direction === 'rtl' &&
      (a += Lr(n.clientWidth, i ? i.clientWidth : 0) - o),
    { width: o, height: s, x: a, y: l }
  );
}
function kh(e) {
  var t = Dn(e),
    n = t.overflow,
    r = t.overflowX,
    i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function bx(e) {
  return ['html', 'body', '#document'].indexOf(wn(e)) >= 0
    ? e.ownerDocument.body
    : Dt(e) && kh(e)
    ? e
    : bx(Ju(e));
}
function zo(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = bx(e),
    i = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    o = bt(r),
    s = i ? [o].concat(o.visualViewport || [], kh(r) ? r : []) : r,
    a = t.concat(s);
  return i ? a : a.concat(zo(Ju(s)));
}
function vd(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function S7(e, t) {
  var n = Wi(e, !1, t === 'fixed');
  return (
    (n.top = n.top + e.clientTop),
    (n.left = n.left + e.clientLeft),
    (n.bottom = n.top + e.clientHeight),
    (n.right = n.left + e.clientWidth),
    (n.width = e.clientWidth),
    (n.height = e.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function Og(e, t, n) {
  return t === yx ? vd(x7(e, n)) : Hr(t) ? S7(t, n) : vd(w7(yr(e)));
}
function k7(e) {
  var t = zo(Ju(e)),
    n = ['absolute', 'fixed'].indexOf(Dn(e).position) >= 0,
    r = n && Dt(e) ? Ys(e) : e;
  return Hr(r)
    ? t.filter(function (i) {
        return Hr(i) && wx(i, r) && wn(i) !== 'body';
      })
    : [];
}
function C7(e, t, n, r) {
  var i = t === 'clippingParents' ? k7(e) : [].concat(t),
    o = [].concat(i, [n]),
    s = o[0],
    a = o.reduce(function (l, u) {
      var c = Og(e, u, r);
      return (
        (l.top = Lr(c.top, l.top)),
        (l.right = Hl(c.right, l.right)),
        (l.bottom = Hl(c.bottom, l.bottom)),
        (l.left = Lr(c.left, l.left)),
        l
      );
    }, Og(e, s, r));
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  );
}
function _x(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    i = r ? vn(r) : null,
    o = r ? Yi(r) : null,
    s = t.x + t.width / 2 - n.width / 2,
    a = t.y + t.height / 2 - n.height / 2,
    l;
  switch (i) {
    case pt:
      l = { x: s, y: t.y - n.height };
      break;
    case Vt:
      l = { x: s, y: t.y + t.height };
      break;
    case Ht:
      l = { x: t.x + t.width, y: a };
      break;
    case ht:
      l = { x: t.x - n.width, y: a };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = i ? xh(i) : null;
  if (u != null) {
    var c = u === 'y' ? 'height' : 'width';
    switch (o) {
      case Hi:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case Ps:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function Ms(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = r === void 0 ? e.placement : r,
    o = n.strategy,
    s = o === void 0 ? e.strategy : o,
    a = n.boundary,
    l = a === void 0 ? HE : a,
    u = n.rootBoundary,
    c = u === void 0 ? yx : u,
    f = n.elementContext,
    d = f === void 0 ? vo : f,
    m = n.altBoundary,
    y = m === void 0 ? !1 : m,
    h = n.padding,
    x = h === void 0 ? 0 : h,
    p = kx(typeof x != 'number' ? x : Cx(x, Ws)),
    g = d === vo ? BE : vo,
    v = e.rects.popper,
    w = e.elements[y ? g : d],
    k = C7(Hr(w) ? w : w.contextElement || yr(e.elements.popper), l, c, s),
    S = Wi(e.elements.reference),
    C = _x({ reference: S, element: v, strategy: 'absolute', placement: i }),
    M = vd(Object.assign({}, v, C)),
    A = d === vo ? M : S,
    T = {
      top: k.top - A.top + p.top,
      bottom: A.bottom - k.bottom + p.bottom,
      left: k.left - A.left + p.left,
      right: A.right - k.right + p.right,
    },
    E = e.modifiersData.offset;
  if (d === vo && E) {
    var I = E[i];
    Object.keys(T).forEach(function (R) {
      var O = [Ht, Vt].indexOf(R) >= 0 ? 1 : -1,
        D = [pt, Vt].indexOf(R) >= 0 ? 'y' : 'x';
      T[R] += I[D] * O;
    });
  }
  return T;
}
function b7(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = n.boundary,
    o = n.rootBoundary,
    s = n.padding,
    a = n.flipVariations,
    l = n.allowedAutoPlacements,
    u = l === void 0 ? vx : l,
    c = Yi(r),
    f = c
      ? a
        ? Eg
        : Eg.filter(function (y) {
            return Yi(y) === c;
          })
      : Ws,
    d = f.filter(function (y) {
      return u.indexOf(y) >= 0;
    });
  d.length === 0 && (d = f);
  var m = d.reduce(function (y, h) {
    return (
      (y[h] = Ms(e, { placement: h, boundary: i, rootBoundary: o, padding: s })[
        vn(h)
      ]),
      y
    );
  }, {});
  return Object.keys(m).sort(function (y, h) {
    return m[y] - m[h];
  });
}
function _7(e) {
  if (vn(e) === gh) return [];
  var t = Qa(e);
  return [Rg(e), t, Rg(t)];
}
function P7(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var i = n.mainAxis,
        o = i === void 0 ? !0 : i,
        s = n.altAxis,
        a = s === void 0 ? !0 : s,
        l = n.fallbackPlacements,
        u = n.padding,
        c = n.boundary,
        f = n.rootBoundary,
        d = n.altBoundary,
        m = n.flipVariations,
        y = m === void 0 ? !0 : m,
        h = n.allowedAutoPlacements,
        x = t.options.placement,
        p = vn(x),
        g = p === x,
        v = l || (g || !y ? [Qa(x)] : _7(x)),
        w = [x].concat(v).reduce(function (ce, X) {
          return ce.concat(
            vn(X) === gh
              ? b7(t, {
                  placement: X,
                  boundary: c,
                  rootBoundary: f,
                  padding: u,
                  flipVariations: y,
                  allowedAutoPlacements: h,
                })
              : X
          );
        }, []),
        k = t.rects.reference,
        S = t.rects.popper,
        C = new Map(),
        M = !0,
        A = w[0],
        T = 0;
      T < w.length;
      T++
    ) {
      var E = w[T],
        I = vn(E),
        R = Yi(E) === Hi,
        O = [pt, Vt].indexOf(I) >= 0,
        D = O ? 'width' : 'height',
        U = Ms(t, {
          placement: E,
          boundary: c,
          rootBoundary: f,
          altBoundary: d,
          padding: u,
        }),
        B = O ? (R ? Ht : ht) : R ? Vt : pt;
      k[D] > S[D] && (B = Qa(B));
      var $ = Qa(B),
        F = [];
      if (
        (o && F.push(U[I] <= 0),
        a && F.push(U[B] <= 0, U[$] <= 0),
        F.every(function (ce) {
          return ce;
        }))
      ) {
        (A = E), (M = !1);
        break;
      }
      C.set(E, F);
    }
    if (M)
      for (
        var H = y ? 3 : 1,
          q = function (X) {
            var oe = w.find(function (ue) {
              var fe = C.get(ue);
              if (fe)
                return fe.slice(0, X).every(function (z) {
                  return z;
                });
            });
            if (oe) return (A = oe), 'break';
          },
          Y = H;
        Y > 0;
        Y--
      ) {
        var ye = q(Y);
        if (ye === 'break') break;
      }
    t.placement !== A &&
      ((t.modifiersData[r]._skip = !0), (t.placement = A), (t.reset = !0));
  }
}
const M7 = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: P7,
  requiresIfExists: ['offset'],
  data: { _skip: !1 },
};
function $g(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function Ig(e) {
  return [pt, Ht, Vt, ht].some(function (t) {
    return e[t] >= 0;
  });
}
function E7(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    i = t.rects.popper,
    o = t.modifiersData.preventOverflow,
    s = Ms(t, { elementContext: 'reference' }),
    a = Ms(t, { altBoundary: !0 }),
    l = $g(s, r),
    u = $g(a, i, o),
    c = Ig(l),
    f = Ig(u);
  (t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: f,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-reference-hidden': c,
      'data-popper-escaped': f,
    }));
}
const T7 = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: E7,
};
function A7(e, t, n) {
  var r = vn(e),
    i = [ht, pt].indexOf(r) >= 0 ? -1 : 1,
    o = typeof n == 'function' ? n(Object.assign({}, t, { placement: e })) : n,
    s = o[0],
    a = o[1];
  return (
    (s = s || 0),
    (a = (a || 0) * i),
    [ht, Ht].indexOf(r) >= 0 ? { x: a, y: s } : { x: s, y: a }
  );
}
function R7(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    i = n.offset,
    o = i === void 0 ? [0, 0] : i,
    s = vx.reduce(function (c, f) {
      return (c[f] = A7(f, t.rects, o)), c;
    }, {}),
    a = s[t.placement],
    l = a.x,
    u = a.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l),
    (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[r] = s);
}
const O7 = {
  name: 'offset',
  enabled: !0,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: R7,
};
function $7(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = _x({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: 'absolute',
    placement: t.placement,
  });
}
const I7 = {
  name: 'popperOffsets',
  enabled: !0,
  phase: 'read',
  fn: $7,
  data: {},
};
function L7(e) {
  return e === 'x' ? 'y' : 'x';
}
function N7(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    i = n.mainAxis,
    o = i === void 0 ? !0 : i,
    s = n.altAxis,
    a = s === void 0 ? !1 : s,
    l = n.boundary,
    u = n.rootBoundary,
    c = n.altBoundary,
    f = n.padding,
    d = n.tether,
    m = d === void 0 ? !0 : d,
    y = n.tetherOffset,
    h = y === void 0 ? 0 : y,
    x = Ms(t, { boundary: l, rootBoundary: u, padding: f, altBoundary: c }),
    p = vn(t.placement),
    g = Yi(t.placement),
    v = !g,
    w = xh(p),
    k = L7(w),
    S = t.modifiersData.popperOffsets,
    C = t.rects.reference,
    M = t.rects.popper,
    A =
      typeof h == 'function'
        ? h(Object.assign({}, t.rects, { placement: t.placement }))
        : h,
    T =
      typeof A == 'number'
        ? { mainAxis: A, altAxis: A }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, A),
    E = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    I = { x: 0, y: 0 };
  if (S) {
    if (o) {
      var R,
        O = w === 'y' ? pt : ht,
        D = w === 'y' ? Vt : Ht,
        U = w === 'y' ? 'height' : 'width',
        B = S[w],
        $ = B + x[O],
        F = B - x[D],
        H = m ? -M[U] / 2 : 0,
        q = g === Hi ? C[U] : M[U],
        Y = g === Hi ? -M[U] : -C[U],
        ye = t.elements.arrow,
        ce = m && ye ? vh(ye) : { width: 0, height: 0 },
        X = t.modifiersData['arrow#persistent']
          ? t.modifiersData['arrow#persistent'].padding
          : Sx(),
        oe = X[O],
        ue = X[D],
        fe = Fo(0, C[U], ce[U]),
        z = v ? C[U] / 2 - H - fe - oe - T.mainAxis : q - fe - oe - T.mainAxis,
        W = v ? -C[U] / 2 + H + fe + ue + T.mainAxis : Y + fe + ue + T.mainAxis,
        G = t.elements.arrow && Ys(t.elements.arrow),
        L = G ? (w === 'y' ? G.clientTop || 0 : G.clientLeft || 0) : 0,
        Se = (R = E == null ? void 0 : E[w]) != null ? R : 0,
        J = B + z - Se - L,
        Re = B + W - Se,
        Ee = Fo(m ? Hl($, J) : $, B, m ? Lr(F, Re) : F);
      (S[w] = Ee), (I[w] = Ee - B);
    }
    if (a) {
      var gt,
        Gs = w === 'x' ? pt : ht,
        Nx = w === 'x' ? Vt : Ht,
        vr = S[k],
        Qs = k === 'y' ? 'height' : 'width',
        Ch = vr + x[Gs],
        bh = vr - x[Nx],
        tc = [pt, ht].indexOf(p) !== -1,
        _h = (gt = E == null ? void 0 : E[k]) != null ? gt : 0,
        Ph = tc ? Ch : vr - C[Qs] - M[Qs] - _h + T.altAxis,
        Mh = tc ? vr + C[Qs] + M[Qs] - _h - T.altAxis : bh,
        Eh = m && tc ? s7(Ph, vr, Mh) : Fo(m ? Ph : Ch, vr, m ? Mh : bh);
      (S[k] = Eh), (I[k] = Eh - vr);
    }
    t.modifiersData[r] = I;
  }
}
const j7 = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: N7,
  requiresIfExists: ['offset'],
};
function D7(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function F7(e) {
  return e === bt(e) || !Dt(e) ? wh(e) : D7(e);
}
function z7(e) {
  var t = e.getBoundingClientRect(),
    n = Bi(t.width) / e.offsetWidth || 1,
    r = Bi(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function U7(e, t, n) {
  n === void 0 && (n = !1);
  var r = Dt(t),
    i = Dt(t) && z7(t),
    o = yr(t),
    s = Wi(e, i, n),
    a = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((wn(t) !== 'body' || kh(o)) && (a = F7(t)),
      Dt(t)
        ? ((l = Wi(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
        : o && (l.x = Sh(o))),
    {
      x: s.left + a.scrollLeft - l.x,
      y: s.top + a.scrollTop - l.y,
      width: s.width,
      height: s.height,
    }
  );
}
function V7(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(function (o) {
    t.set(o.name, o);
  });
  function i(o) {
    n.add(o.name);
    var s = [].concat(o.requires || [], o.requiresIfExists || []);
    s.forEach(function (a) {
      if (!n.has(a)) {
        var l = t.get(a);
        l && i(l);
      }
    }),
      r.push(o);
  }
  return (
    e.forEach(function (o) {
      n.has(o.name) || i(o);
    }),
    r
  );
}
function H7(e) {
  var t = V7(e);
  return e7.reduce(function (n, r) {
    return n.concat(
      t.filter(function (i) {
        return i.phase === r;
      })
    );
  }, []);
}
function B7(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function W7(e) {
  var t = e.reduce(function (n, r) {
    var i = n[r.name];
    return (
      (n[r.name] = i
        ? Object.assign({}, i, r, {
            options: Object.assign({}, i.options, r.options),
            data: Object.assign({}, i.data, r.data),
          })
        : r),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var Lg = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
function Ng() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == 'function');
  });
}
function Y7(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    i = t.defaultOptions,
    o = i === void 0 ? Lg : i;
  return function (a, l, u) {
    u === void 0 && (u = o);
    var c = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, Lg, o),
        modifiersData: {},
        elements: { reference: a, popper: l },
        attributes: {},
        styles: {},
      },
      f = [],
      d = !1,
      m = {
        state: c,
        setOptions: function (p) {
          var g = typeof p == 'function' ? p(c.options) : p;
          h(),
            (c.options = Object.assign({}, o, c.options, g)),
            (c.scrollParents = {
              reference: Hr(a)
                ? zo(a)
                : a.contextElement
                ? zo(a.contextElement)
                : [],
              popper: zo(l),
            });
          var v = H7(W7([].concat(r, c.options.modifiers)));
          return (
            (c.orderedModifiers = v.filter(function (w) {
              return w.enabled;
            })),
            y(),
            m.update()
          );
        },
        forceUpdate: function () {
          if (!d) {
            var p = c.elements,
              g = p.reference,
              v = p.popper;
            if (Ng(g, v)) {
              (c.rects = {
                reference: U7(g, Ys(v), c.options.strategy === 'fixed'),
                popper: vh(v),
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (T) {
                  return (c.modifiersData[T.name] = Object.assign({}, T.data));
                });
              for (var w = 0; w < c.orderedModifiers.length; w++) {
                if (c.reset === !0) {
                  (c.reset = !1), (w = -1);
                  continue;
                }
                var k = c.orderedModifiers[w],
                  S = k.fn,
                  C = k.options,
                  M = C === void 0 ? {} : C,
                  A = k.name;
                typeof S == 'function' &&
                  (c = S({ state: c, options: M, name: A, instance: m }) || c);
              }
            }
          }
        },
        update: B7(function () {
          return new Promise(function (x) {
            m.forceUpdate(), x(c);
          });
        }),
        destroy: function () {
          h(), (d = !0);
        },
      };
    if (!Ng(a, l)) return m;
    m.setOptions(u).then(function (x) {
      !d && u.onFirstUpdate && u.onFirstUpdate(x);
    });
    function y() {
      c.orderedModifiers.forEach(function (x) {
        var p = x.name,
          g = x.options,
          v = g === void 0 ? {} : g,
          w = x.effect;
        if (typeof w == 'function') {
          var k = w({ state: c, name: p, instance: m, options: v }),
            S = function () {};
          f.push(k || S);
        }
      });
    }
    function h() {
      f.forEach(function (x) {
        return x();
      }),
        (f = []);
    }
    return m;
  };
}
var G7 = [g7, I7, h7, r7, O7, M7, j7, c7, T7],
  Q7 = Y7({ defaultModifiers: G7 });
function K7(e) {
  return typeof e == 'function' ? e() : e;
}
const X7 = P.forwardRef(function (t, n) {
    const { children: r, container: i, disablePortal: o = !1 } = t,
      [s, a] = P.useState(null),
      l = ls(P.isValidElement(r) ? r.ref : null, n);
    if (
      (Ur(() => {
        o || a(K7(i) || document.body);
      }, [i, o]),
      Ur(() => {
        if (s && !o)
          return (
            Zf(n, s),
            () => {
              Zf(n, null);
            }
          );
      }, [n, s, o]),
      o)
    ) {
      if (P.isValidElement(r)) {
        const u = { ref: l };
        return P.cloneElement(r, u);
      }
      return b.jsx(P.Fragment, { children: r });
    }
    return b.jsx(P.Fragment, { children: s && mp.createPortal(r, s) });
  }),
  Px = 'base';
function q7(e) {
  return `${Px}--${e}`;
}
function Z7(e, t) {
  return `${Px}-${e}-${t}`;
}
function Mx(e, t) {
  const n = Iv[t];
  return n ? q7(n) : Z7(e, t);
}
function J7(e, t) {
  const n = {};
  return (
    t.forEach((r) => {
      n[r] = Mx(e, r);
    }),
    n
  );
}
const Ex = 'Popper';
function eT(e) {
  return Mx(Ex, e);
}
J7(Ex, ['root']);
const tT = [
    'anchorEl',
    'children',
    'direction',
    'disablePortal',
    'modifiers',
    'open',
    'placement',
    'popperOptions',
    'popperRef',
    'slotProps',
    'slots',
    'TransitionProps',
    'ownerState',
  ],
  nT = [
    'anchorEl',
    'children',
    'container',
    'direction',
    'disablePortal',
    'keepMounted',
    'modifiers',
    'open',
    'placement',
    'popperOptions',
    'popperRef',
    'style',
    'transition',
    'slotProps',
    'slots',
  ];
function rT(e, t) {
  if (t === 'ltr') return e;
  switch (e) {
    case 'bottom-end':
      return 'bottom-start';
    case 'bottom-start':
      return 'bottom-end';
    case 'top-end':
      return 'top-start';
    case 'top-start':
      return 'top-end';
    default:
      return e;
  }
}
function xd(e) {
  return typeof e == 'function' ? e() : e;
}
function iT(e) {
  return e.nodeType !== void 0;
}
const oT = () => Un({ root: ['root'] }, wE(eT)),
  sT = {},
  aT = P.forwardRef(function (t, n) {
    var r;
    const {
        anchorEl: i,
        children: o,
        direction: s,
        disablePortal: a,
        modifiers: l,
        open: u,
        placement: c,
        popperOptions: f,
        popperRef: d,
        slotProps: m = {},
        slots: y = {},
        TransitionProps: h,
      } = t,
      x = ie(t, tT),
      p = P.useRef(null),
      g = ls(p, n),
      v = P.useRef(null),
      w = ls(v, d),
      k = P.useRef(w);
    Ur(() => {
      k.current = w;
    }, [w]),
      P.useImperativeHandle(d, () => v.current, []);
    const S = rT(c, s),
      [C, M] = P.useState(S),
      [A, T] = P.useState(xd(i));
    P.useEffect(() => {
      v.current && v.current.forceUpdate();
    }),
      P.useEffect(() => {
        i && T(xd(i));
      }, [i]),
      Ur(() => {
        if (!A || !u) return;
        const D = ($) => {
          M($.placement);
        };
        let U = [
          { name: 'preventOverflow', options: { altBoundary: a } },
          { name: 'flip', options: { altBoundary: a } },
          {
            name: 'onUpdate',
            enabled: !0,
            phase: 'afterWrite',
            fn: ({ state: $ }) => {
              D($);
            },
          },
        ];
        l != null && (U = U.concat(l)),
          f && f.modifiers != null && (U = U.concat(f.modifiers));
        const B = Q7(A, p.current, _({ placement: S }, f, { modifiers: U }));
        return (
          k.current(B),
          () => {
            B.destroy(), k.current(null);
          }
        );
      }, [A, a, l, u, f, S]);
    const E = { placement: C };
    h !== null && (E.TransitionProps = h);
    const I = oT(),
      R = (r = y.root) != null ? r : 'div',
      O = yn({
        elementType: R,
        externalSlotProps: m.root,
        externalForwardedProps: x,
        additionalProps: { role: 'tooltip', ref: g },
        ownerState: t,
        className: I.root,
      });
    return b.jsx(R, _({}, O, { children: typeof o == 'function' ? o(E) : o }));
  }),
  lT = P.forwardRef(function (t, n) {
    const {
        anchorEl: r,
        children: i,
        container: o,
        direction: s = 'ltr',
        disablePortal: a = !1,
        keepMounted: l = !1,
        modifiers: u,
        open: c,
        placement: f = 'bottom',
        popperOptions: d = sT,
        popperRef: m,
        style: y,
        transition: h = !1,
        slotProps: x = {},
        slots: p = {},
      } = t,
      g = ie(t, nT),
      [v, w] = P.useState(!0),
      k = () => {
        w(!1);
      },
      S = () => {
        w(!0);
      };
    if (!l && !c && (!h || v)) return null;
    let C;
    if (o) C = o;
    else if (r) {
      const T = xd(r);
      C = T && iT(T) ? qf(T).body : qf(null).body;
    }
    const M = !c && l && (!h || v) ? 'none' : void 0,
      A = h ? { in: c, onEnter: k, onExited: S } : void 0;
    return b.jsx(X7, {
      disablePortal: a,
      container: C,
      children: b.jsx(
        aT,
        _(
          {
            anchorEl: r,
            direction: s,
            disablePortal: a,
            modifiers: u,
            ref: n,
            open: h ? !v : c,
            placement: f,
            popperOptions: d,
            popperRef: m,
            slotProps: x,
            slots: p,
          },
          g,
          {
            style: _({ position: 'fixed', top: 0, left: 0, display: M }, y),
            TransitionProps: A,
            children: i,
          }
        )
      ),
    });
  });
function Tx(e) {
  const { children: t, defer: n = !1, fallback: r = null } = e,
    [i, o] = P.useState(!1);
  return (
    Ur(() => {
      n || o(!0);
    }, [n]),
    P.useEffect(() => {
      n && o(!0);
    }, [n]),
    b.jsx(P.Fragment, { children: i ? t : r })
  );
}
function uT(e) {
  if (e === null)
    return {
      getBoundingClientRect: () => ({
        width: 0,
        height: 0,
        x: 0,
        y: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        toJSON: () => '',
      }),
    };
  const { x: t, y: n } = e,
    r = {
      width: 0,
      height: 0,
      x: t,
      y: n,
      top: n,
      right: t,
      bottom: n,
      left: t,
    };
  return {
    getBoundingClientRect: () => _({}, r, { toJSON: () => JSON.stringify(r) }),
  };
}
function cT() {
  const e = k2(),
    [t, n] = P.useState(null);
  return (
    P.useEffect(() => {
      const r = e.current;
      if (r === null) return () => {};
      const i = () => {
          n(null);
        },
        o = (s) => {
          n({
            x: s.clientX,
            y: s.clientY,
            height: s.height,
            pointerType: s.pointerType,
          });
        };
      return (
        r.addEventListener('pointerdown', o),
        r.addEventListener('pointermove', o),
        r.addEventListener('pointerup', i),
        () => {
          r.removeEventListener('pointerdown', o),
            r.removeEventListener('pointermove', o),
            r.removeEventListener('pointerup', i);
        }
      );
    }, [e]),
    t
  );
}
function fT(e, t) {
  if (e === 'item') return t !== null;
  const n = t.x !== null,
    r = t.y !== null;
  return n || r;
}
function dT(e) {
  return e instanceof Date ? e.toUTCString() : e.toLocaleString();
}
function pT(e) {
  return hr('MuiChartsTooltip', e);
}
const jg = Yr('MuiChartsTooltip', [
    'root',
    'table',
    'row',
    'cell',
    'mark',
    'markCell',
    'labelCell',
    'valueCell',
  ]),
  Ax = qe('div', { name: 'MuiChartsTooltip', slot: 'Container' })(
    ({ theme: e }) => ({
      boxShadow: e.shadows[1],
      backgroundColor: (e.vars || e).palette.background.paper,
      color: (e.vars || e).palette.text.primary,
      transition: e.transitions.create('box-shadow'),
      borderRadius: e.shape.borderRadius,
    })
  ),
  Rx = qe('table', { name: 'MuiChartsTooltip', slot: 'Table' })(
    ({ theme: e }) => ({
      borderSpacing: 0,
      '& thead td': {
        borderBottom: `solid ${(e.vars || e).palette.divider} 1px`,
      },
    })
  ),
  wd = qe('tr', { name: 'MuiChartsTooltip', slot: 'Row' })(({ theme: e }) => ({
    'tr:first-of-type& td': { paddingTop: e.spacing(1) },
    'tr:last-of-type& td': { paddingBottom: e.spacing(1) },
  })),
  Rr = qe('td', { name: 'MuiChartsTooltip', slot: 'Cell' })(({ theme: e }) => ({
    verticalAlign: 'middle',
    color: (e.vars || e).palette.text.secondary,
    [`&.${jg.labelCell}`]: { paddingLeft: e.spacing(1) },
    [`&.${jg.valueCell}`]: {
      paddingLeft: e.spacing(4),
      color: (e.vars || e).palette.text.primary,
    },
    'td:first-of-type&': { paddingLeft: e.spacing(2) },
    'td:last-of-type&': { paddingRight: e.spacing(2) },
  })),
  Ox = qe('div', {
    name: 'MuiChartsTooltip',
    slot: 'Mark',
    shouldForwardProp: (e) => h5(e) && e !== 'color',
  })(({ theme: e, color: t }) => ({
    width: e.spacing(1),
    height: e.spacing(1),
    borderRadius: '50%',
    boxShadow: e.shadows[1],
    backgroundColor: t,
    borderColor: (e.vars || e).palette.background.paper,
    border: `solid ${(e.vars || e).palette.background.paper} ${e.spacing(
      0.25
    )}`,
    boxSizing: 'content-box',
  }));
function hT(e) {
  var c;
  const { series: t, itemData: n, sx: r, classes: i, getColor: o } = e;
  if (n.dataIndex === void 0 || !t.data[n.dataIndex]) return null;
  const { displayedLabel: s, color: a } =
      t.type === 'pie'
        ? {
            color: o(n.dataIndex),
            displayedLabel: nn(t.data[n.dataIndex].label, 'tooltip'),
          }
        : { color: o(n.dataIndex), displayedLabel: nn(t.label, 'tooltip') },
    l =
      t.type === 'pie'
        ? _({}, t.data[n.dataIndex], {
            label: nn(t.data[n.dataIndex].label, 'tooltip'),
          })
        : t.data[n.dataIndex],
    u =
      (c = t.valueFormatter) == null
        ? void 0
        : c.call(t, l, { dataIndex: n.dataIndex });
  return b.jsx(Ax, {
    sx: r,
    className: i.root,
    children: b.jsx(Rx, {
      className: i.table,
      children: b.jsx('tbody', {
        children: b.jsxs(wd, {
          className: i.row,
          children: [
            b.jsx(Rr, {
              className: Tn(i.markCell, i.cell),
              children: b.jsx(Ox, { color: a, className: i.mark }),
            }),
            b.jsx(Rr, { className: Tn(i.labelCell, i.cell), children: s }),
            b.jsx(Rr, { className: Tn(i.valueCell, i.cell), children: u }),
          ],
        }),
      }),
    }),
  });
}
function $x(e) {
  return P.useContext(Kv);
}
function mT(e) {
  var w;
  const { content: t, itemData: n, sx: r, classes: i, contentProps: o } = e,
    s = Kr()[n.type].series[n.seriesId],
    { xAxis: a, yAxis: l, xAxisIds: u, yAxisIds: c } = gr(),
    { zAxis: f, zAxisIds: d } = P.useContext(Zp),
    m = $x(),
    y = s.xAxisId ?? s.xAxisKey ?? u[0],
    h = s.yAxisId ?? s.yAxisKey ?? c[0],
    x = s.zAxisId ?? s.zAxisKey ?? d[0],
    p =
      ((w = m[s.type]) == null
        ? void 0
        : w.call(m, s, y && a[y], h && l[h], x && f[x])) ?? (() => ''),
    g = t ?? hT,
    v = yn({
      elementType: g,
      externalSlotProps: o,
      additionalProps: {
        itemData: n,
        series: s,
        sx: r,
        classes: i,
        getColor: p,
      },
      ownerState: {},
    });
  return b.jsx(g, _({}, v));
}
function gT(e) {
  return C5(e);
}
function yT(e) {
  return hr('MuiTypography', e);
}
Yr('MuiTypography', [
  'root',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'inherit',
  'button',
  'caption',
  'overline',
  'alignLeft',
  'alignRight',
  'alignCenter',
  'alignJustify',
  'noWrap',
  'gutterBottom',
  'paragraph',
]);
const vT = [
    'align',
    'className',
    'component',
    'gutterBottom',
    'noWrap',
    'paragraph',
    'variant',
    'variantMapping',
  ],
  xT = (e) => {
    const {
        align: t,
        gutterBottom: n,
        noWrap: r,
        paragraph: i,
        variant: o,
        classes: s,
      } = e,
      a = {
        root: [
          'root',
          o,
          e.align !== 'inherit' && `align${Is(t)}`,
          n && 'gutterBottom',
          r && 'noWrap',
          i && 'paragraph',
        ],
      };
    return Un(a, yT, s);
  },
  wT = qe('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== 'inherit' && t[`align${Is(n.align)}`],
        n.noWrap && t.noWrap,
        n.gutterBottom && t.gutterBottom,
        n.paragraph && t.paragraph,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    _(
      { margin: 0 },
      t.variant === 'inherit' && { font: 'inherit' },
      t.variant !== 'inherit' && e.typography[t.variant],
      t.align !== 'inherit' && { textAlign: t.align },
      t.noWrap && {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
      t.gutterBottom && { marginBottom: '0.35em' },
      t.paragraph && { marginBottom: 16 }
    )
  ),
  Dg = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    inherit: 'p',
  },
  ST = {
    primary: 'primary.main',
    textPrimary: 'text.primary',
    secondary: 'secondary.main',
    textSecondary: 'text.secondary',
    error: 'error.main',
  },
  kT = (e) => ST[e] || e,
  Xc = P.forwardRef(function (t, n) {
    const r = gT({ props: t, name: 'MuiTypography' }),
      i = kT(r.color),
      o = Ov(_({}, r, { color: i })),
      {
        align: s = 'inherit',
        className: a,
        component: l,
        gutterBottom: u = !1,
        noWrap: c = !1,
        paragraph: f = !1,
        variant: d = 'body1',
        variantMapping: m = Dg,
      } = o,
      y = ie(o, vT),
      h = _({}, o, {
        align: s,
        color: i,
        className: a,
        component: l,
        gutterBottom: u,
        noWrap: c,
        paragraph: f,
        variant: d,
        variantMapping: m,
      }),
      x = l || (f ? 'p' : m[d] || Dg[d]) || 'span',
      p = xT(h);
    return b.jsx(
      wT,
      _({ as: x, ref: n, ownerState: h, className: Tn(p.root, a) }, y)
    );
  });
let Fg;
class CT {
  constructor() {
    if (((this.types = new Set()), Fg))
      throw new Error('You can only create one instance!');
    Fg = this.types;
  }
  addType(t) {
    this.types.add(t);
  }
  getTypes() {
    return this.types;
  }
}
const ec = new CT();
ec.addType('bar');
ec.addType('line');
ec.addType('scatter');
function Ix(e) {
  return ec.getTypes().has(e);
}
function bT(e) {
  return Ix(e.type);
}
function _T(e) {
  const {
    series: t,
    axis: n,
    dataIndex: r,
    axisValue: i,
    sx: o,
    classes: s,
  } = e;
  if (r == null) return null;
  const a =
    n.valueFormatter ??
    ((l) => (n.scaleType === 'utc' ? dT(l) : l.toLocaleString()));
  return b.jsx(Ax, {
    sx: o,
    className: s.root,
    children: b.jsxs(Rx, {
      className: s.table,
      children: [
        i != null &&
          !n.hideTooltip &&
          b.jsx('thead', {
            children: b.jsx(wd, {
              children: b.jsx(Rr, {
                colSpan: 3,
                children: b.jsx(Xc, {
                  children: a(i, { location: 'tooltip' }),
                }),
              }),
            }),
          }),
        b.jsx('tbody', {
          children: t
            .filter(bT)
            .map(
              ({
                id: l,
                label: u,
                valueFormatter: c,
                data: f,
                getColor: d,
              }) => {
                const m = c(f[r] ?? null, { dataIndex: r });
                if (m == null) return null;
                const y = nn(u, 'tooltip'),
                  h = d(r);
                return b.jsxs(
                  wd,
                  {
                    className: s.row,
                    children: [
                      b.jsx(Rr, {
                        className: Tn(s.markCell, s.cell),
                        children:
                          h && b.jsx(Ox, { color: h, className: s.mark }),
                      }),
                      b.jsx(Rr, {
                        className: Tn(s.labelCell, s.cell),
                        children: y ? b.jsx(Xc, { children: y }) : null,
                      }),
                      b.jsx(Rr, {
                        className: Tn(s.valueCell, s.cell),
                        children: b.jsx(Xc, { children: m }),
                      }),
                    ],
                  },
                  l
                );
              }
            ),
        }),
      ],
    }),
  });
}
function PT(e) {
  const { content: t, contentProps: n, axisData: r, sx: i, classes: o } = e,
    s = (r.x && r.x.index) !== void 0,
    a = s ? r.x && r.x.index : r.y && r.y.index,
    l = s ? r.x && r.x.value : r.y && r.y.value,
    { xAxisIds: u, xAxis: c, yAxisIds: f, yAxis: d } = gr(),
    { zAxisIds: m, zAxis: y } = P.useContext(Zp),
    h = Kr(),
    x = $x(),
    p = s ? u[0] : f[0],
    g = P.useMemo(() => {
      const S = [];
      return (
        Object.keys(h)
          .filter(Ix)
          .forEach((C) => {
            h[C].seriesOrder.forEach((M) => {
              var R;
              const A = h[C].series[M],
                T = A.xAxisId ?? A.xAxisKey,
                E = A.yAxisId ?? A.yAxisKey,
                I = s ? T : E;
              if (I === void 0 || I === p) {
                const O = h[C].series[M],
                  D = T ?? u[0],
                  U = E ?? f[0],
                  B = O.zAxisId ?? O.zAxisKey ?? m[0],
                  $ =
                    ((R = x[C]) == null
                      ? void 0
                      : R.call(x, O, c[D], d[U], B && y[B])) ?? (() => '');
                S.push(_({}, O, { getColor: $ }));
              }
            });
          }),
        S
      );
    }, [p, x, s, h, c, u, d, f, y, m]),
    v = P.useMemo(() => (s ? c[p] : d[p]), [p, s, c, d]),
    w = t ?? _T,
    k = yn({
      elementType: w,
      externalSlotProps: n,
      additionalProps: {
        axisData: r,
        series: g,
        axis: v,
        dataIndex: a,
        axisValue: l,
        sx: i,
        classes: o,
      },
      ownerState: {},
    });
  return b.jsx(w, _({}, k));
}
const MT = (e) => {
    const { classes: t } = e;
    return Un(
      {
        root: ['root'],
        table: ['table'],
        row: ['row'],
        cell: ['cell'],
        mark: ['mark'],
        markCell: ['markCell'],
        labelCell: ['labelCell'],
        valueCell: ['valueCell'],
      },
      pT,
      t
    );
  },
  ET = qe(lT, {
    name: 'MuiChartsTooltip',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })(({ theme: e }) => ({ pointerEvents: 'none', zIndex: e.zIndex.modal }));
function TT(e) {
  const t = Fu({ props: e, name: 'MuiChartsTooltip' }),
    {
      trigger: n = 'axis',
      itemContent: r,
      axisContent: i,
      slots: o,
      slotProps: s,
    } = t,
    a = cT(),
    { item: l, axis: u } = P.useContext(Fs),
    c = n === 'item' ? l : u,
    f = fT(n, c),
    d = a !== null && f,
    m = MT({ classes: t.classes }),
    y = (o == null ? void 0 : o.popper) ?? ET,
    h = yn({
      elementType: y,
      externalSlotProps: s == null ? void 0 : s.popper,
      additionalProps: {
        open: d,
        placement:
          (a == null ? void 0 : a.pointerType) === 'mouse'
            ? 'right-start'
            : 'top',
        anchorEl: uT(a),
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [
                0,
                (a == null ? void 0 : a.pointerType) === 'touch'
                  ? 40 - a.height
                  : 0,
              ],
            },
          },
        ],
      },
      ownerState: {},
    });
  return n === 'none'
    ? null
    : b.jsx(Tx, {
        children:
          d &&
          b.jsx(
            y,
            _({}, h, {
              children:
                n === 'item'
                  ? b.jsx(mT, {
                      itemData: c,
                      content: (o == null ? void 0 : o.itemContent) ?? r,
                      contentProps: s == null ? void 0 : s.itemContent,
                      sx: { mx: 2 },
                      classes: m,
                    })
                  : b.jsx(PT, {
                      axisData: c,
                      content: (o == null ? void 0 : o.axisContent) ?? i,
                      contentProps: s == null ? void 0 : s.axisContent,
                      sx: { mx: 2 },
                      classes: m,
                    }),
            })
          ),
      });
}
const AT = (e) => {
    const { seriesOrder: t, series: n } = e;
    return t.reduce((r, i) => {
      const o = nn(n[i].label, 'legend');
      return o === void 0 || r.push({ color: n[i].color, label: o, id: i }), r;
    }, []);
  },
  RT = (e) => {
    const { seriesOrder: t, series: n } = e;
    return t.reduce((r, i) => {
      const o = nn(n[i].label, 'legend');
      return o === void 0 || r.push({ color: n[i].color, label: o, id: i }), r;
    }, []);
  },
  OT = (e) => {
    const { seriesOrder: t, series: n } = e;
    return t.reduce((r, i) => {
      const o = nn(n[i].label, 'legend');
      return o === void 0 || r.push({ color: n[i].color, label: o, id: i }), r;
    }, []);
  },
  $T = (e) => {
    const { seriesOrder: t, series: n } = e;
    return t.reduce(
      (r, i) => (
        n[i].data.forEach((o) => {
          const s = nn(o.label, 'legend');
          s !== void 0 && r.push({ color: o.color, label: s, id: o.id });
        }),
        r
      ),
      []
    );
  },
  IT = { bar: AT, scatter: RT, line: OT, pie: $T };
function LT(e) {
  return Object.keys(e).flatMap((t) => {
    const n = IT[t];
    return n === void 0 ? [] : n(e[t]);
  });
}
function NT(e) {
  return hr('MuiChartsLegend', e);
}
Yr('MuiChartsLegend', ['root', 'series', 'mark', 'label', 'column', 'row']);
const jT = ['label'];
function DT(e, t, n, r, i, o, s) {
  let a = 0,
    l = 0,
    u = 0,
    c = 0,
    f = 0;
  const d = [0];
  return [
    e
      .map((y) => {
        let { label: h } = y,
          x = ie(y, jT);
        const p = t(h, n),
          g = _({}, x, {
            label: h,
            positionX: a,
            positionY: l,
            innerHeight: p.innerHeight,
            innerWidth: p.innerWidth,
            outerHeight: p.outerHeight,
            outerWidth: p.outerWidth,
            rowIndex: f,
          });
        return (
          r === 'row' &&
            (a + p.innerWidth > i &&
              ((a = 0),
              (l += d[f]),
              (f += 1),
              d.length <= f && d.push(0),
              (g.positionX = a),
              (g.positionY = l),
              (g.rowIndex = f)),
            (u = Math.max(u, a + p.outerWidth)),
            (c = Math.max(c, l + p.outerHeight)),
            (d[f] = Math.max(d[f], p.outerHeight)),
            (a += p.outerWidth)),
          r === 'column' &&
            (l + p.innerHeight > o &&
              ((a = u + s),
              (l = 0),
              (f = 0),
              (g.positionX = a),
              (g.positionY = l),
              (g.rowIndex = f)),
            d.length <= f && d.push(0),
            (u = Math.max(u, a + p.outerWidth)),
            (c = Math.max(c, l + p.outerHeight)),
            (f += 1),
            (l += p.outerHeight)),
          g
        );
      })
      .map((y) =>
        _({}, y, {
          positionY:
            y.positionY + (r === 'row' ? d[y.rowIndex] / 2 : y.outerHeight / 2),
        })
      ),
    u,
    c,
  ];
}
const FT = ['rotate', 'dominantBaseline'],
  zT = qe('g', {
    name: 'MuiChartsLegend',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({}),
  UT = (e) =>
    typeof e == 'number'
      ? { left: e, right: e, top: e, bottom: e }
      : _({ left: 0, right: 0, top: 0, bottom: 0 }, e);
function VT(e) {
  const {
      hidden: t,
      position: n,
      direction: r,
      itemsToDisplay: i,
      classes: o,
      itemMarkWidth: s = 20,
      itemMarkHeight: a = 20,
      markGap: l = 5,
      itemGap: u = 10,
      padding: c = 10,
      labelStyle: f,
    } = e,
    d = Zi(),
    m = d.direction === 'rtl',
    y = Vn(),
    h = P.useMemo(
      () =>
        _(
          {},
          d.typography.subtitle1,
          {
            color: 'inherit',
            dominantBaseline: 'central',
            textAnchor: 'start',
            fill: (d.vars || d).palette.text.primary,
            lineHeight: 1,
          },
          f
        ),
      [f, d]
    ),
    x = P.useMemo(() => UT(c), [c]),
    p = P.useCallback(
      (E, I = {}) => {
        const R = ie(I, FT),
          O = mh({ style: R, needsComputation: !0, text: E }),
          D = {
            innerWidth: s + l + Math.max(...O.map((U) => U.width)),
            innerHeight: Math.max(a, O.length * O[0].height),
          };
        return _({}, D, {
          outerWidth: D.innerWidth + u,
          outerHeight: D.innerHeight + u,
        });
      },
      [u, a, s, l]
    ),
    g = y.left + y.width + y.right,
    v = y.top + y.height + y.bottom,
    w = g - x.left - x.right,
    k = v - x.top - x.bottom,
    [S, C, M] = P.useMemo(() => DT(i, p, h, r, w, k, u), [i, p, h, r, w, k, u]),
    A = P.useMemo(() => {
      switch (n.horizontal) {
        case 'left':
          return x.left;
        case 'right':
          return g - x.right - C;
        default:
          return (g - C) / 2;
      }
    }, [n.horizontal, x.left, x.right, g, C]),
    T = P.useMemo(() => {
      switch (n.vertical) {
        case 'top':
          return x.top;
        case 'bottom':
          return v - x.bottom - M;
        default:
          return (v - M) / 2;
      }
    }, [n.vertical, x.top, x.bottom, v, M]);
  return t
    ? null
    : b.jsx(Tx, {
        children: b.jsx(zT, {
          className: o == null ? void 0 : o.root,
          children: S.map(
            ({ id: E, label: I, color: R, positionX: O, positionY: D }) =>
              b.jsxs(
                'g',
                {
                  className: o == null ? void 0 : o.series,
                  transform: `translate(${A + (m ? C - O : O)} ${T + D})`,
                  children: [
                    b.jsx('rect', {
                      className: o == null ? void 0 : o.mark,
                      x: m ? -s : 0,
                      y: -a / 2,
                      width: s,
                      height: a,
                      fill: R,
                    }),
                    b.jsx(_s, {
                      style: h,
                      text: I,
                      x: (m ? -1 : 1) * (s + l),
                      y: 0,
                    }),
                  ],
                },
                E
              )
          ),
        }),
      });
}
const HT = ['drawingArea', 'seriesToDisplay'];
function BT(e) {
  const { seriesToDisplay: t } = e,
    n = ie(e, HT);
  return b.jsx(VT, _({}, n, { itemsToDisplay: t }));
}
const WT = (e) => {
    const { classes: t, direction: n } = e;
    return Un(
      {
        root: ['root', n],
        mark: ['mark'],
        label: ['label'],
        series: ['series'],
      },
      NT,
      t
    );
  },
  YT = {
    position: { horizontal: 'middle', vertical: 'top' },
    direction: 'row',
  };
function GT(e) {
  const t = Fu({ props: _({}, YT, e), name: 'MuiChartsLegend' }),
    { position: n, direction: r, hidden: i, slots: o, slotProps: s } = t,
    a = Zi(),
    l = WT(_({}, t, { theme: a })),
    u = Vn(),
    c = Kr(),
    f = LT(c),
    d = (o == null ? void 0 : o.legend) ?? BT,
    m = yn({
      elementType: d,
      externalSlotProps: s == null ? void 0 : s.legend,
      additionalProps: {
        position: n,
        direction: r,
        classes: l,
        drawingArea: u,
        series: c,
        hidden: i,
        seriesToDisplay: f,
      },
      ownerState: {},
    });
  return b.jsx(d, _({}, m));
}
function br(e, t) {
  if (typeof e == 'number') return e;
  if (e === '100%') return t;
  if (e.endsWith('%')) {
    const n = Number.parseFloat(e.slice(0, e.length - 1));
    if (!Number.isNaN(n)) return (n * t) / 100;
  }
  if (e.endsWith('px')) {
    const n = Number.parseFloat(e.slice(0, e.length - 2));
    if (!Number.isNaN(n)) return n;
  }
  throw Error(
    `MUI X: Received an unknown value "${e}". It should be a number, or a string with a percentage value.`
  );
}
function QT(e) {
  return hr('MuiChartsAxisHighlight', e);
}
Yr('MuiChartsAxisHighlight', ['root']);
const KT = () => Un({ root: ['root'] }, QT),
  _a = qe('path', {
    name: 'MuiChartsAxisHighlight',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })(({ ownerState: e, theme: t }) =>
    _(
      { pointerEvents: 'none' },
      e.axisHighlight === 'band' && {
        fill: t.palette.mode === 'light' ? 'gray' : 'white',
        fillOpacity: 0.1,
      },
      e.axisHighlight === 'line' && {
        strokeDasharray: '5 2',
        stroke: t.palette.mode === 'light' ? '#000000' : '#ffffff',
      }
    )
  );
function XT(e) {
  const { x: t, y: n } = e,
    { xAxisIds: r, xAxis: i, yAxisIds: o, yAxis: s } = gr(),
    a = KT(),
    l = r[0],
    u = o[0],
    c = i[l].scale,
    f = s[u].scale,
    { axis: d } = P.useContext(Fs),
    m = Qm(c),
    y = Qm(f),
    h = d.x,
    x = d.y,
    p = t === 'band' && h !== null && ms(c),
    g = n === 'band' && x !== null && ms(f);
  return b.jsxs(P.Fragment, {
    children: [
      p &&
        c(h.value) !== void 0 &&
        b.jsx(_a, {
          d: `M ${c(h.value) - (c.step() - c.bandwidth()) / 2} ${
            f.range()[0]
          } l ${c.step()} 0 l 0 ${
            f.range()[1] - f.range()[0]
          } l ${-c.step()} 0 Z`,
          className: a.root,
          ownerState: { axisHighlight: 'band' },
        }),
      g &&
        f(x.value) !== void 0 &&
        b.jsx(_a, {
          d: `M ${c.range()[0]} ${
            f(x.value) - (f.step() - f.bandwidth()) / 2
          } l 0 ${f.step()} l ${
            c.range()[1] - c.range()[0]
          } 0 l 0 ${-f.step()} Z`,
          className: a.root,
          ownerState: { axisHighlight: 'band' },
        }),
      t === 'line' &&
        d.x !== null &&
        b.jsx(_a, {
          d: `M ${m(d.x.value)} ${f.range()[0]} L ${m(d.x.value)} ${
            f.range()[1]
          }`,
          className: a.root,
          ownerState: { axisHighlight: 'line' },
        }),
      n === 'line' &&
        d.y !== null &&
        b.jsx(_a, {
          d: `M ${c.range()[0]} ${y(d.y.value)} L ${c.range()[1]} ${y(
            d.y.value
          )}`,
          className: a.root,
          ownerState: { axisHighlight: 'line' },
        }),
    ],
  });
}
const qT = (e) => {
    const { dispatch: t } = P.useContext(Fs),
      { setHighlighted: n, clearHighlighted: r } = Jp();
    return (o) => ({
      onPointerEnter: () => {
        t({ type: 'enterItem', data: o }),
          n({ seriesId: o.seriesId, dataIndex: o.dataIndex });
      },
      onPointerLeave: (u) => {
        u.currentTarget.releasePointerCapture(u.pointerId),
          t({ type: 'leaveItem', data: o }),
          r();
      },
      onPointerDown: (u) => {
        u.currentTarget.hasPointerCapture(u.pointerId) &&
          u.currentTarget.releasePointerCapture(u.pointerId);
      },
    });
  },
  ZT = [
    'classes',
    'color',
    'cornerRadius',
    'dataIndex',
    'endAngle',
    'id',
    'innerRadius',
    'isFaded',
    'isHighlighted',
    'onClick',
    'outerRadius',
    'paddingAngle',
    'startAngle',
    'highlightScope',
  ];
function JT(e) {
  return hr('MuiPieArc', e);
}
Yr('MuiPieArc', ['root', 'highlighted', 'faded']);
const e8 = (e) => {
    const { classes: t, id: n, isFaded: r, isHighlighted: i } = e,
      o = { root: ['root', `series-${n}`, i && 'highlighted', r && 'faded'] };
    return Un(o, JT, t);
  },
  t8 = qe(dx.path, {
    name: 'MuiPieArc',
    slot: 'Root',
    overridesResolver: (e, t) => t.arc,
  })(({ theme: e }) => ({
    stroke: (e.vars || e).palette.background.paper,
    strokeWidth: 1,
    strokeLinejoin: 'round',
  }));
function n8(e) {
  const {
      classes: t,
      color: n,
      cornerRadius: r,
      dataIndex: i,
      endAngle: o,
      id: s,
      innerRadius: a,
      isFaded: l,
      isHighlighted: u,
      onClick: c,
      outerRadius: f,
      paddingAngle: d,
      startAngle: m,
    } = e,
    y = ie(e, ZT),
    h = {
      id: s,
      dataIndex: i,
      classes: t,
      color: n,
      isFaded: l,
      isHighlighted: u,
    },
    x = e8(h),
    p = qT();
  return b.jsx(
    t8,
    _(
      {
        d: Vl([m, o, d, a, f, r], (g, v, w, k, S, C) =>
          M2().cornerRadius(C)({
            padAngle: w,
            startAngle: g,
            endAngle: v,
            innerRadius: k,
            outerRadius: S,
          })
        ),
        visibility: Vl([m, o], (g, v) => (g === v ? 'hidden' : 'visible')),
        onClick: c,
        cursor: c ? 'pointer' : 'unset',
        ownerState: h,
        className: x.root,
      },
      y,
      p({ type: 'pie', seriesId: s, dataIndex: i })
    )
  );
}
const r8 = {
    keys: (e) => e.id,
    from: ({
      innerRadius: e,
      outerRadius: t,
      cornerRadius: n,
      startAngle: r,
      endAngle: i,
      paddingAngle: o,
      color: s,
      isFaded: a,
    }) => ({
      innerRadius: e,
      outerRadius: (e + t) / 2,
      cornerRadius: n,
      startAngle: (r + i) / 2,
      endAngle: (r + i) / 2,
      paddingAngle: o,
      fill: s,
      opacity: a ? 0.3 : 1,
    }),
    leave: ({ innerRadius: e, startAngle: t, endAngle: n }) => ({
      innerRadius: e,
      outerRadius: e,
      startAngle: (t + n) / 2,
      endAngle: (t + n) / 2,
    }),
    enter: ({
      innerRadius: e,
      outerRadius: t,
      startAngle: n,
      endAngle: r,
    }) => ({ innerRadius: e, outerRadius: t, startAngle: n, endAngle: r }),
    update: ({
      innerRadius: e,
      outerRadius: t,
      cornerRadius: n,
      startAngle: r,
      endAngle: i,
      paddingAngle: o,
      color: s,
      isFaded: a,
    }) => ({
      innerRadius: e,
      outerRadius: t,
      cornerRadius: n,
      startAngle: r,
      endAngle: i,
      paddingAngle: o,
      fill: s,
      opacity: a ? 0.3 : 1,
    }),
    config: { tension: 120, friction: 14, clamp: !0 },
  },
  i8 = {
    keys: (e) => e.id,
    from: ({
      innerRadius: e,
      outerRadius: t,
      arcLabelRadius: n,
      cornerRadius: r,
      startAngle: i,
      endAngle: o,
      paddingAngle: s,
    }) => ({
      innerRadius: e,
      outerRadius: (e + t) / 2,
      cornerRadius: r,
      arcLabelRadius: n,
      startAngle: (i + o) / 2,
      endAngle: (i + o) / 2,
      paddingAngle: s,
      opacity: 0,
    }),
    leave: ({ innerRadius: e, startAngle: t, endAngle: n }) => ({
      innerRadius: e,
      outerRadius: e,
      arcLabelRadius: e,
      startAngle: (t + n) / 2,
      endAngle: (t + n) / 2,
      opacity: 0,
    }),
    enter: ({
      innerRadius: e,
      outerRadius: t,
      startAngle: n,
      endAngle: r,
      arcLabelRadius: i,
    }) => ({
      innerRadius: e,
      outerRadius: t,
      startAngle: n,
      endAngle: r,
      arcLabelRadius: i,
      opacity: 1,
    }),
    update: ({
      innerRadius: e,
      outerRadius: t,
      cornerRadius: n,
      startAngle: r,
      endAngle: i,
      paddingAngle: o,
      arcLabelRadius: s,
    }) => ({
      innerRadius: e,
      outerRadius: t,
      cornerRadius: n,
      startAngle: r,
      endAngle: i,
      paddingAngle: o,
      arcLabelRadius: s,
      opacity: 1,
    }),
    config: { tension: 120, friction: 14, clamp: !0 },
  };
function Lx(e) {
  const {
      id: t,
      data: n,
      faded: r,
      highlighted: i,
      paddingAngle: o = 0,
      innerRadius: s = 0,
      arcLabelRadius: a,
      outerRadius: l,
      cornerRadius: u = 0,
    } = e,
    { isFaded: c, isHighlighted: f } = Jp();
  return P.useMemo(
    () =>
      n.map((m, y) => {
        const h = { seriesId: t, dataIndex: y },
          x = f(h),
          p = !x && c(h),
          g = _({ additionalRadius: 0 }, (p && r) || (x && i) || {}),
          v = Math.max(0, (Math.PI * (g.paddingAngle ?? o)) / 180),
          w = Math.max(0, g.innerRadius ?? s),
          k = Math.max(0, g.outerRadius ?? l + g.additionalRadius),
          S = g.cornerRadius ?? u,
          C = g.arcLabelRadius ?? a ?? (w + k) / 2;
        return _({}, m, g, {
          isFaded: p,
          isHighlighted: x,
          paddingAngle: v,
          innerRadius: w,
          outerRadius: k,
          cornerRadius: S,
          arcLabelRadius: C,
        });
      }),
    [u, s, l, o, a, n, r, i, c, f, t]
  );
}
const o8 = [
    'slots',
    'slotProps',
    'innerRadius',
    'outerRadius',
    'cornerRadius',
    'paddingAngle',
    'id',
    'highlighted',
    'faded',
    'data',
    'onItemClick',
    'skipAnimation',
  ],
  s8 = [
    'startAngle',
    'endAngle',
    'paddingAngle',
    'innerRadius',
    'arcLabelRadius',
    'outerRadius',
    'cornerRadius',
  ];
function a8(e) {
  const {
      slots: t,
      slotProps: n,
      innerRadius: r = 0,
      outerRadius: i,
      cornerRadius: o = 0,
      paddingAngle: s = 0,
      id: a,
      highlighted: l,
      faded: u = { additionalRadius: -5 },
      data: c,
      onItemClick: f,
      skipAnimation: d,
    } = e,
    m = ie(e, o8),
    y = Lx({
      innerRadius: r,
      outerRadius: i,
      cornerRadius: o,
      paddingAngle: s,
      id: a,
      highlighted: l,
      faded: u,
      data: c,
    }),
    h = ux(y, _({}, r8, { immediate: d })),
    { highlightScope: x } = Jp();
  if (c.length === 0) return null;
  const p = (t == null ? void 0 : t.pieArc) ?? n8;
  return b.jsx(
    'g',
    _({}, m, {
      children: h((g, v, w, k) => {
        let {
            startAngle: S,
            endAngle: C,
            paddingAngle: M,
            innerRadius: A,
            outerRadius: T,
            cornerRadius: E,
          } = g,
          I = ie(g, s8);
        return b.jsx(
          p,
          _(
            {
              startAngle: S,
              endAngle: C,
              paddingAngle: M,
              innerRadius: A,
              outerRadius: T,
              cornerRadius: E,
              style: I,
              id: a,
              color: v.color,
              dataIndex: k,
              highlightScope: x,
              isFaded: v.isFaded,
              isHighlighted: v.isHighlighted,
              onClick:
                f &&
                ((R) => {
                  f(R, { type: 'pie', seriesId: a, dataIndex: k }, v);
                }),
            },
            n == null ? void 0 : n.pieArc
          )
        );
      }),
    })
  );
}
const l8 = [
  'id',
  'classes',
  'color',
  'startAngle',
  'endAngle',
  'paddingAngle',
  'arcLabelRadius',
  'innerRadius',
  'outerRadius',
  'cornerRadius',
  'formattedArcLabel',
  'isHighlighted',
  'isFaded',
  'style',
];
function u8(e) {
  return hr('MuiPieArcLabel', e);
}
Yr('MuiPieArcLabel', ['root', 'highlighted', 'faded']);
const c8 = (e) => {
    const { classes: t, id: n, isFaded: r, isHighlighted: i } = e,
      o = { root: ['root', `series-${n}`, i && 'highlighted', r && 'faded'] };
    return Un(o, u8, t);
  },
  f8 = qe(dx.text, {
    name: 'MuiPieArcLabel',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })(({ theme: e }) => ({
    fill: (e.vars || e).palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'middle',
    pointerEvents: 'none',
  })),
  zg = (e, t) => (n, r, i, o, s) => {
    if (!e) return 0;
    const [a, l] = M2()
      .cornerRadius(s)
      .centroid({
        padAngle: i,
        startAngle: n,
        endAngle: r,
        innerRadius: o,
        outerRadius: o,
      });
    return t === 'x' ? a : l;
  };
function d8(e) {
  const {
      id: t,
      classes: n,
      color: r,
      startAngle: i,
      endAngle: o,
      paddingAngle: s,
      arcLabelRadius: a,
      cornerRadius: l,
      formattedArcLabel: u,
      isHighlighted: c,
      isFaded: f,
      style: d,
    } = e,
    m = ie(e, l8),
    h = c8({ id: t, classes: n, color: r, isFaded: f, isHighlighted: c });
  return b.jsx(
    f8,
    _({ className: h.root }, m, {
      style: _(
        {
          x: Vl([i, o, s, a, l], zg(u, 'x')),
          y: Vl([i, o, s, a, l], zg(u, 'y')),
        },
        d
      ),
      children: u,
    })
  );
}
const p8 = [
    'arcLabel',
    'arcLabelMinAngle',
    'arcLabelRadius',
    'cornerRadius',
    'data',
    'faded',
    'highlighted',
    'id',
    'innerRadius',
    'outerRadius',
    'paddingAngle',
    'skipAnimation',
    'slotProps',
    'slots',
  ],
  h8 = [
    'startAngle',
    'endAngle',
    'paddingAngle',
    'innerRadius',
    'outerRadius',
    'arcLabelRadius',
    'cornerRadius',
  ],
  m8 = 180 / Math.PI;
function g8(e, t, n) {
  var i;
  if (!e || (n.endAngle - n.startAngle) * m8 < t) return null;
  switch (e) {
    case 'label':
      return nn(n.label, 'arc');
    case 'value':
      return (i = n.value) == null ? void 0 : i.toString();
    case 'formattedValue':
      return n.formattedValue;
    default:
      return e(_({}, n, { label: nn(n.label, 'arc') }));
  }
}
function y8(e) {
  const {
      arcLabel: t,
      arcLabelMinAngle: n = 0,
      arcLabelRadius: r,
      cornerRadius: i = 0,
      data: o,
      faded: s = { additionalRadius: -5 },
      highlighted: a,
      id: l,
      innerRadius: u,
      outerRadius: c,
      paddingAngle: f = 0,
      skipAnimation: d,
      slotProps: m,
      slots: y,
    } = e,
    h = ie(e, p8),
    x = Lx({
      innerRadius: u,
      outerRadius: c,
      arcLabelRadius: r,
      cornerRadius: i,
      paddingAngle: f,
      id: l,
      highlighted: a,
      faded: s,
      data: o,
    }),
    p = ux(x, _({}, i8, { immediate: d }));
  if (o.length === 0) return null;
  const g = (y == null ? void 0 : y.pieArcLabel) ?? d8;
  return b.jsx(
    'g',
    _({}, h, {
      children: p((v, w) => {
        let {
            startAngle: k,
            endAngle: S,
            paddingAngle: C,
            innerRadius: M,
            outerRadius: A,
            arcLabelRadius: T,
            cornerRadius: E,
          } = v,
          I = ie(v, h8);
        return b.jsx(
          g,
          _(
            {
              startAngle: k,
              endAngle: S,
              paddingAngle: C,
              innerRadius: M,
              outerRadius: A,
              arcLabelRadius: T,
              cornerRadius: E,
              style: I,
              id: l,
              color: w.color,
              isFaded: w.isFaded,
              isHighlighted: w.isHighlighted,
              formattedArcLabel: g8(t, n, w),
            },
            m == null ? void 0 : m.pieArcLabel
          )
        );
      }),
    })
  );
}
function Ug(e, t) {
  const { height: n, width: r } = t,
    { cx: i, cy: o } = e,
    s = Math.min(r, n) / 2,
    a = br(i ?? '50%', r),
    l = br(o ?? '50%', n);
  return { cx: a, cy: l, availableRadius: s };
}
function v8(e) {
  const { skipAnimation: t, slots: n, slotProps: r, onItemClick: i } = e,
    o = P6(),
    { left: s, top: a, width: l, height: u } = P.useContext(su);
  if (o === void 0) return null;
  const { series: c, seriesOrder: f } = o;
  return b.jsxs('g', {
    children: [
      f.map((d) => {
        const {
            innerRadius: m,
            outerRadius: y,
            cornerRadius: h,
            paddingAngle: x,
            data: p,
            cx: g,
            cy: v,
            highlighted: w,
            faded: k,
          } = c[d],
          {
            cx: S,
            cy: C,
            availableRadius: M,
          } = Ug({ cx: g, cy: v }, { width: l, height: u }),
          A = br(y ?? M, M),
          T = br(m ?? 0, M);
        return b.jsx(
          'g',
          {
            transform: `translate(${s + S}, ${a + C})`,
            children: b.jsx(a8, {
              innerRadius: T,
              outerRadius: A,
              cornerRadius: h,
              paddingAngle: x,
              id: d,
              data: p,
              skipAnimation: t,
              highlighted: w,
              faded: k,
              onItemClick: i,
              slots: n,
              slotProps: r,
            }),
          },
          d
        );
      }),
      f.map((d) => {
        const {
            innerRadius: m,
            outerRadius: y,
            arcLabelRadius: h,
            cornerRadius: x,
            paddingAngle: p,
            arcLabel: g,
            arcLabelMinAngle: v,
            data: w,
            cx: k,
            cy: S,
          } = c[d],
          {
            cx: C,
            cy: M,
            availableRadius: A,
          } = Ug({ cx: k, cy: S }, { width: l, height: u }),
          T = br(y ?? A, A),
          E = br(m ?? 0, A),
          I = h === void 0 ? (T + E) / 2 : br(h, A);
        return b.jsx(
          'g',
          {
            transform: `translate(${s + C}, ${a + M})`,
            children: b.jsx(y8, {
              innerRadius: E,
              outerRadius: T ?? A,
              arcLabelRadius: I,
              cornerRadius: x,
              paddingAngle: p,
              id: d,
              data: w,
              skipAnimation: t,
              arcLabel: g,
              arcLabelMinAngle: v,
              slots: n,
              slotProps: r,
            }),
          },
          d
        );
      }),
    ],
  });
}
const x8 = () => Zi().direction === 'rtl',
  w8 = ['message'],
  S8 = qe('text')(({ theme: e }) =>
    _({}, e.typography.body2, {
      stroke: 'none',
      fill: e.palette.text.primary,
      shapeRendering: 'crispEdges',
      textAnchor: 'middle',
      dominantBaseline: 'middle',
    })
  );
function k8(e) {
  const { message: t } = e,
    n = ie(e, w8),
    { top: r, left: i, height: o, width: s } = Vn();
  return b.jsx(
    S8,
    _({ x: i + s / 2, y: r + o / 2 }, n, { children: t ?? 'Loading data…' })
  );
}
const C8 = ['message'],
  b8 = qe('text')(({ theme: e }) =>
    _({}, e.typography.body2, {
      stroke: 'none',
      fill: e.palette.text.primary,
      shapeRendering: 'crispEdges',
      textAnchor: 'middle',
      dominantBaseline: 'middle',
    })
  );
function _8(e) {
  const { message: t } = e,
    n = ie(e, C8),
    { top: r, left: i, height: o, width: s } = Vn();
  return b.jsx(
    b8,
    _({ x: i + s / 2, y: r + o / 2 }, n, {
      children: t ?? 'No data to display',
    })
  );
}
function P8() {
  const e = Kr();
  return Object.values(e).every((t) => {
    if (!t) return !0;
    const { series: n, seriesOrder: r } = t;
    return r.every((i) => n[i].data.length === 0);
  });
}
function M8(e) {
  var n, r, i, o;
  const t = P8();
  if (e.loading) {
    const s = ((n = e.slots) == null ? void 0 : n.loadingOverlay) ?? k8;
    return b.jsx(
      s,
      _({}, (r = e.slotProps) == null ? void 0 : r.loadingOverlay)
    );
  }
  if (t) {
    const s = ((i = e.slots) == null ? void 0 : i.noDataOverlay) ?? _8;
    return b.jsx(
      s,
      _({}, (o = e.slotProps) == null ? void 0 : o.noDataOverlay)
    );
  }
  return null;
}
const E8 = [
    'xAxis',
    'yAxis',
    'series',
    'width',
    'height',
    'margin',
    'colors',
    'sx',
    'tooltip',
    'axisHighlight',
    'skipAnimation',
    'legend',
    'topAxis',
    'leftAxis',
    'rightAxis',
    'bottomAxis',
    'children',
    'slots',
    'slotProps',
    'onItemClick',
    'loading',
    'highlightedItem',
    'onHighlightChange',
    'className',
  ],
  T8 = { top: 5, bottom: 5, left: 5, right: 100 },
  A8 = { top: 5, bottom: 5, left: 100, right: 5 },
  R8 = P.forwardRef(function (t, n) {
    const {
        xAxis: r,
        yAxis: i,
        series: o,
        width: s,
        height: a,
        margin: l,
        colors: u,
        sx: c,
        tooltip: f = { trigger: 'item' },
        axisHighlight: d = { x: 'none', y: 'none' },
        skipAnimation: m,
        legend: y,
        topAxis: h = null,
        leftAxis: x = null,
        rightAxis: p = null,
        bottomAxis: g = null,
        children: v,
        slots: w,
        slotProps: k,
        onItemClick: S,
        loading: C,
        highlightedItem: M,
        onHighlightChange: A,
        className: T,
      } = t,
      E = ie(t, E8),
      I = x8(),
      R = _({}, I ? A8 : T8, l),
      O = _(
        {
          direction: 'column',
          position: { vertical: 'middle', horizontal: I ? 'left' : 'right' },
        },
        y
      );
    return b.jsxs(
      mE,
      _({}, E, {
        ref: n,
        series: o.map((D) => _({ type: 'pie' }, D)),
        width: s,
        height: a,
        margin: R,
        xAxis: r ?? [
          {
            id: nv,
            scaleType: 'point',
            data: [...new Array(Math.max(...o.map((D) => D.data.length)))].map(
              (D, U) => U
            ),
          },
        ],
        yAxis: i,
        colors: u,
        sx: c,
        disableAxisListener:
          (f == null ? void 0 : f.trigger) !== 'axis' &&
          (d == null ? void 0 : d.x) === 'none' &&
          (d == null ? void 0 : d.y) === 'none',
        highlightedItem: M,
        onHighlightChange: A,
        className: T,
        children: [
          b.jsx(VE, {
            topAxis: h,
            leftAxis: x,
            rightAxis: p,
            bottomAxis: g,
            slots: w,
            slotProps: k,
          }),
          b.jsx(v8, {
            slots: w,
            slotProps: k,
            onItemClick: S,
            skipAnimation: m,
          }),
          b.jsx(M8, { loading: C, slots: w, slotProps: k }),
          b.jsx(GT, _({}, O, { slots: w, slotProps: k })),
          b.jsx(XT, _({}, d)),
          !C && b.jsx(TT, _({}, f, { slots: w, slotProps: k })),
          v,
        ],
      })
    );
  });
function O8(e) {
  return b.jsxs('section', {
    className: rt.container,
    children: [
      b.jsxs('section', {
        className: rt.landing,
        children: [
          b.jsx('h1', { className: rt.header, children: '🃏 Покерная лига' }),
          b.jsxs('h3', {
            className: rt.subheader,
            children: [
              b.jsx('img', { src: kS, alt: '', width: 30, height: 30 }),
              ' ',
              b.jsx('span', { children: 'Играют только профессионалы' }),
            ],
          }),
          b.jsx('div', {
            className: rt.buttons,
            children: b.jsxs('a', {
              href: 'mailto:sherstnev.denis.v@gmail.com',
              target: '_blank',
              className: rt.button + ' ' + rt.contact,
              children: [
                b.jsx('img', { src: CS, alt: '', width: 20 }),
                b.jsx('span', { children: 'Написать нам' }),
              ],
            }),
          }),
          b.jsxs('h2', {
            className: rt.stats_header,
            children: [
              b.jsx(z0, {
                className: rt.accent_number,
                end: e.stats.total_games,
              }),
              ' игр сыграно',
            ],
          }),
          b.jsxs('h2', {
            className: rt.stats_header,
            children: [
              b.jsx(z0, {
                className: rt.accent_number,
                end: e.stats.total_chips,
              }),
              ' фишек в банке',
            ],
          }),
        ],
      }),
      b.jsx('section', {
        className: rt.stats,
        children: b.jsxs('div', {
          className: rt.chart,
          children: [
            b.jsx('div', {
              className: rt.chart_header,
              children: 'Распределение побед',
            }),
            b.jsx(R8, {
              width: 500,
              height: 300,
              slotProps: {
                legend: {
                  labelStyle: {
                    fontSize: 16,
                    fontFamily: 'Manrope',
                    fill: '#fafafa',
                  },
                },
              },
              series: [
                {
                  data: e.players.map((t) => ({
                    id: t.Id,
                    value: t.Victories,
                    label: t.Name.split(' ')[0],
                  })),
                  innerRadius: 15,
                  outerRadius: 100,
                  paddingAngle: 2,
                  cornerRadius: 5,
                },
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const $8 = '_rating_1h76d_1',
  I8 = '_header_1h76d_12',
  L8 = '_table_1h76d_24',
  N8 = '_shield_1h76d_60',
  j8 = '_name_1h76d_65',
  xo = { rating: $8, header: I8, table: L8, shield: N8, name: j8 },
  D8 =
    "data:image/svg+xml,%3csvg%20width='800'%20height='800'%20viewBox='0%200%20800%20800'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M112.584%20169.414C100%20187.343%20100%20240.636%20100%20347.223V399.713C100%20587.647%20241.299%20678.85%20329.952%20717.577C354%20728.08%20366.023%20733.333%20400%20733.333V66.6667C372.953%2066.6667%20346.833%2075.6081%20294.591%2093.4907L275.497%20100.026C175.277%20134.332%20125.168%20151.485%20112.584%20169.414Z'%20fill='%236A3505'/%3e%3cpath%20d='M700%20399.047V346.557C700%20239.969%20700%20186.676%20687.417%20168.747C674.833%20150.818%20624.723%20133.665%20524.503%2099.3597L505.41%2092.824C453.167%2074.9413%20427.047%2066%20400%2066V732.667C433.977%20732.667%20446%20727.413%20470.047%20716.91C558.7%20678.183%20700%20586.98%20700%20399.047Z'%20fill='%23AD7056'/%3e%3c/svg%3e",
  F8 =
    "data:image/svg+xml,%3csvg%20width='800'%20height='800'%20viewBox='0%200%20800%20800'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M112.584%20169.414C100%20187.343%20100%20240.636%20100%20347.223V399.713C100%20587.647%20241.299%20678.85%20329.952%20717.577C354%20728.08%20366.023%20733.333%20400%20733.333V66.6667C372.953%2066.6667%20346.833%2075.6081%20294.591%2093.4907L275.497%20100.026C175.277%20134.332%20125.168%20151.485%20112.584%20169.414Z'%20fill='%23D3D3D3'/%3e%3cpath%20d='M700%20399.047V346.557C700%20239.969%20700%20186.676%20687.417%20168.747C674.833%20150.818%20624.723%20133.665%20524.503%2099.3597L505.41%2092.824C453.167%2074.9413%20427.047%2066%20400%2066V732.667C433.977%20732.667%20446%20727.413%20470.047%20716.91C558.7%20678.183%20700%20586.98%20700%20399.047Z'%20fill='%23EFEFEF'/%3e%3c/svg%3e",
  z8 =
    "data:image/svg+xml,%3csvg%20width='800'%20height='800'%20viewBox='0%200%20800%20800'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M112.584%20169.414C100%20187.343%20100%20240.636%20100%20347.223V399.713C100%20587.647%20241.299%20678.85%20329.952%20717.577C354%20728.08%20366.023%20733.333%20400%20733.333V66.6667C372.953%2066.6667%20346.833%2075.6081%20294.591%2093.4907L275.497%20100.026C175.277%20134.332%20125.168%20151.485%20112.584%20169.414Z'%20fill='%23AF9500'/%3e%3cpath%20d='M700%20399.047V346.557C700%20239.969%20700%20186.676%20687.417%20168.747C674.833%20150.818%20624.723%20133.665%20524.503%2099.3597L505.41%2092.824C453.167%2074.9413%20427.047%2066%20400%2066V732.667C433.977%20732.667%20446%20727.413%20470.047%20716.91C558.7%20678.183%20700%20586.98%20700%20399.047Z'%20fill='%23C9B037'/%3e%3c/svg%3e",
  U8 =
    "data:image/svg+xml,%3csvg%20width='800'%20height='800'%20viewBox='0%200%20800%20800'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M112.584%20169.414C100%20187.343%20100%20240.636%20100%20347.223V399.713C100%20587.647%20241.299%20678.85%20329.952%20717.577C354%20728.08%20366.023%20733.333%20400%20733.333V66.6667C372.953%2066.6667%20346.833%2075.6081%20294.591%2093.4907L275.497%20100.026C175.277%20134.332%20125.168%20151.485%20112.584%20169.414Z'%20fill='%23123D68'/%3e%3cpath%20d='M700%20399.047V346.557C700%20239.969%20700%20186.676%20687.417%20168.747C674.833%20150.818%20624.723%20133.665%20524.503%2099.3597L505.41%2092.824C453.167%2074.9413%20427.047%2066%20400%2066V732.667C433.977%20732.667%20446%20727.413%20470.047%20716.91C558.7%20678.183%20700%20586.98%20700%20399.047Z'%20fill='%23094C90'/%3e%3c/svg%3e",
  V8 =
    "data:image/svg+xml,%3csvg%20width='800'%20height='800'%20viewBox='0%200%20800%20800'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M112.584%20169.414C100%20187.343%20100%20240.636%20100%20347.223V399.713C100%20587.647%20241.299%20678.85%20329.952%20717.577C354%20728.08%20366.023%20733.333%20400%20733.333V66.6667C372.953%2066.6667%20346.833%2075.6081%20294.591%2093.4907L275.497%20100.026C175.277%20134.332%20125.168%20151.485%20112.584%20169.414Z'%20fill='%233D0A10'/%3e%3cpath%20d='M700%20399.047V346.557C700%20239.969%20700%20186.676%20687.417%20168.747C674.833%20150.818%20624.723%20133.665%20524.503%2099.3597L505.41%2092.824C453.167%2074.9413%20427.047%2066%20400%2066V732.667C433.977%20732.667%20446%20727.413%20470.047%20716.91C558.7%20678.183%20700%20586.98%20700%20399.047Z'%20fill='%23711521'/%3e%3c/svg%3e",
  H8 =
    "data:image/svg+xml,%3csvg%20width='800'%20height='800'%20viewBox='0%200%20800%20800'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M112.584%20169.414C100%20187.343%20100%20240.636%20100%20347.223V399.713C100%20587.647%20241.299%20678.85%20329.952%20717.577C354%20728.08%20366.023%20733.333%20400%20733.333V66.6667C372.953%2066.6667%20346.833%2075.6081%20294.591%2093.4907L275.497%20100.026C175.277%20134.332%20125.168%20151.485%20112.584%20169.414Z'%20fill='url(%23paint0_linear_21_18)'/%3e%3cpath%20d='M700%20399.047V346.557C700%20239.969%20700%20186.676%20687.417%20168.747C674.833%20150.818%20624.723%20133.665%20524.503%2099.3597L505.41%2092.824C453.167%2074.9413%20427.047%2066%20400%2066V732.667C433.977%20732.667%20446%20727.413%20470.047%20716.91C558.7%20678.183%20700%20586.98%20700%20399.047Z'%20fill='url(%23paint1_linear_21_18)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_21_18'%20x1='250'%20y1='66.6667'%20x2='250'%20y2='733.333'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23D8D8D8'/%3e%3cstop%20offset='0.956666'%20stop-color='%23595959'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_21_18'%20x1='550'%20y1='66'%20x2='550'%20y2='732.667'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23F3F3F3'/%3e%3cstop%20offset='1'%20stop-color='%23B0B0B0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
function B8(e) {
  if (e < 100) return D8;
  if (100 <= e && e < 600) return F8;
  if (600 <= e && e < 1250) return z8;
  if (1250 <= e && e < 2500) return U8;
  if (2500 <= e && e < 3500) return V8;
  if (3500 <= e) return H8;
}
function W8(e) {
  return b.jsxs('section', {
    className: xo.rating,
    children: [
      b.jsx('header', { className: xo.header, children: 'Рейтинг' }),
      b.jsxs('table', {
        className: xo.table,
        children: [
          b.jsxs('tr', {
            children: [
              b.jsx('th', {}),
              b.jsx('th', { children: 'Имя' }),
              b.jsx('th', { children: 'Очки' }),
              b.jsx('th', { children: 'Фишки' }),
              b.jsx('th', { children: 'Победы' }),
              b.jsx('th', { children: 'Долг' }),
            ],
          }),
          e.rating.map((t, n) =>
            b.jsxs('tr', {
              children: [
                b.jsx('td', { children: n + 1 }),
                b.jsxs('td', {
                  className: xo.name,
                  children: [
                    b.jsx('img', {
                      className: xo.shield,
                      src: B8(t.Points),
                      alt: 'Щит',
                    }),
                    b.jsx('span', { children: t.Name }),
                  ],
                }),
                b.jsx('td', { children: t.Points }),
                b.jsx('td', { children: t.Chips }),
                b.jsx('td', { children: t.Victories }),
                b.jsx('td', { children: t.Debt }),
              ],
            })
          ),
        ],
      }),
    ],
  });
}
async function Y8() {
  try {
    return await (await fetch('/players/rating')).json();
  } catch (e) {
    return console.log(e), [];
  }
}
async function G8() {
  try {
    return await (await fetch('/stats')).json();
  } catch (e) {
    return (
      console.log(e),
      {
        total_games: 0,
        total_chips: 0,
        total_points: 0,
        average_chips: 0,
        average_victories: 0,
        chips_per_game: 0,
        points_per_player: 0,
      }
    );
  }
}
function Q8() {
  const [e, t] = P.useState([]),
    [n, r] = P.useState({
      total_games: 0,
      total_chips: 0,
      total_points: 0,
      average_chips: 0,
      average_victories: 0,
      chips_per_game: 0,
      points_per_player: 0,
    });
  return (
    P.useEffect(() => {
      Y8().then((i) => {
        t(i);
      }),
        G8().then((i) => {
          r(i);
        });
    }, []),
    b.jsxs(b.Fragment, {
      children: [
        b.jsx('header', {}),
        b.jsxs('main', {
          children: [
            b.jsx(O8, { players: e, stats: n }),
            b.jsx(W8, { rating: e }),
          ],
        }),
        b.jsx('footer', {}),
      ],
    })
  );
}
Zc.createRoot(document.getElementById('root')).render(b.jsx(Q8, {}));
