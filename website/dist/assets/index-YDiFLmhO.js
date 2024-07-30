function Dx(e, t) {
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
function Fx(e) {
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
var Hg = { exports: {} },
  Wl = {},
  Bg = { exports: {} },
  Z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ts = Symbol.for('react.element'),
  zx = Symbol.for('react.portal'),
  Ux = Symbol.for('react.fragment'),
  Vx = Symbol.for('react.strict_mode'),
  Hx = Symbol.for('react.profiler'),
  Bx = Symbol.for('react.provider'),
  Wx = Symbol.for('react.context'),
  Yx = Symbol.for('react.forward_ref'),
  Gx = Symbol.for('react.suspense'),
  Qx = Symbol.for('react.memo'),
  Kx = Symbol.for('react.lazy'),
  Ah = Symbol.iterator;
function Xx(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ah && e[Ah]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Wg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Yg = Object.assign,
  Gg = {};
function Ki(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gg),
    (this.updater = n || Wg);
}
Ki.prototype.isReactComponent = {};
Ki.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Ki.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Qg() {}
Qg.prototype = Ki.prototype;
function kd(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gg),
    (this.updater = n || Wg);
}
var Cd = (kd.prototype = new Qg());
Cd.constructor = kd;
Yg(Cd, Ki.prototype);
Cd.isPureReactComponent = !0;
var Rh = Array.isArray,
  Kg = Object.prototype.hasOwnProperty,
  bd = { current: null },
  Xg = { key: !0, ref: !0, __self: !0, __source: !0 };
function qg(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      Kg.call(t, r) && !Xg.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Ts,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: bd.current,
  };
}
function qx(e, t) {
  return {
    $$typeof: Ts,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function _d(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Ts;
}
function Zx(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Oh = /\/+/g;
function rc(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Zx('' + e.key)
    : t.toString(36);
}
function Ma(e, t, n, r, i) {
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
          case Ts:
          case zx:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === '' ? '.' + rc(s, 0) : r),
      Rh(i)
        ? ((n = ''),
          e != null && (n = e.replace(Oh, '$&/') + '/'),
          Ma(i, t, n, '', function (u) {
            return u;
          }))
        : i != null &&
          (_d(i) &&
            (i = qx(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ''
                  : ('' + i.key).replace(Oh, '$&/') + '/') +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === '' ? '.' : r + ':'), Rh(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + rc(o, a);
      s += Ma(o, t, n, l, i);
    }
  else if (((l = Xx(e)), typeof l == 'function'))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + rc(o, a++)), (s += Ma(o, t, n, l, i));
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
function Xs(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ma(e, r, '', '', function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Jx(e) {
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
  Ea = { transition: null },
  ew = {
    ReactCurrentDispatcher: tt,
    ReactCurrentBatchConfig: Ea,
    ReactCurrentOwner: bd,
  };
function Zg() {
  throw Error('act(...) is not supported in production builds of React.');
}
Z.Children = {
  map: Xs,
  forEach: function (e, t, n) {
    Xs(
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
      Xs(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Xs(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!_d(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
Z.Component = Ki;
Z.Fragment = Ux;
Z.Profiler = Hx;
Z.PureComponent = kd;
Z.StrictMode = Vx;
Z.Suspense = Gx;
Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ew;
Z.act = Zg;
Z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Yg({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = bd.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Kg.call(t, l) &&
        !Xg.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Ts, type: e.type, key: i, ref: o, props: r, _owner: s };
};
Z.createContext = function (e) {
  return (
    (e = {
      $$typeof: Wx,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Bx, _context: e }),
    (e.Consumer = e)
  );
};
Z.createElement = qg;
Z.createFactory = function (e) {
  var t = qg.bind(null, e);
  return (t.type = e), t;
};
Z.createRef = function () {
  return { current: null };
};
Z.forwardRef = function (e) {
  return { $$typeof: Yx, render: e };
};
Z.isValidElement = _d;
Z.lazy = function (e) {
  return { $$typeof: Kx, _payload: { _status: -1, _result: e }, _init: Jx };
};
Z.memo = function (e, t) {
  return { $$typeof: Qx, type: e, compare: t === void 0 ? null : t };
};
Z.startTransition = function (e) {
  var t = Ea.transition;
  Ea.transition = {};
  try {
    e();
  } finally {
    Ea.transition = t;
  }
};
Z.unstable_act = Zg;
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
Bg.exports = Z;
var P = Bg.exports;
const tw = Fx(P),
  Zc = Dx({ __proto__: null, default: tw }, [P]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nw = P,
  rw = Symbol.for('react.element'),
  iw = Symbol.for('react.fragment'),
  ow = Object.prototype.hasOwnProperty,
  sw = nw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  aw = { key: !0, ref: !0, __self: !0, __source: !0 };
function Jg(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) ow.call(t, r) && !aw.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: rw,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: sw.current,
  };
}
Wl.Fragment = iw;
Wl.jsx = Jg;
Wl.jsxs = Jg;
Hg.exports = Wl;
var b = Hg.exports,
  Jc = {},
  ey = { exports: {} },
  _t = {},
  ty = { exports: {} },
  ny = {};
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
})(ny);
ty.exports = ny;
var lw = ty.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uw = P,
  kt = lw;
function j(e) {
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
var ry = new Set(),
  Vo = {};
function Wr(e, t) {
  Ri(e, t), Ri(e + 'Capture', t);
}
function Ri(e, t) {
  for (Vo[e] = t, e = 0; e < t.length; e++) ry.add(t[e]);
}
var An = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  ef = Object.prototype.hasOwnProperty,
  cw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  $h = {},
  Ih = {};
function fw(e) {
  return ef.call(Ih, e)
    ? !0
    : ef.call($h, e)
    ? !1
    : cw.test(e)
    ? (Ih[e] = !0)
    : (($h[e] = !0), !1);
}
function dw(e, t, n, r) {
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
function pw(e, t, n, r) {
  if (t === null || typeof t > 'u' || dw(e, t, n, r)) return !0;
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
var Pd = /[\-:]([a-z])/g;
function Md(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Pd, Md);
    Be[t] = new nt(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Pd, Md);
    Be[t] = new nt(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Pd, Md);
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
function Ed(e, t, n, r) {
  var i = Be.hasOwnProperty(t) ? Be[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (pw(t, n, i, r) && (n = null),
    r || i === null
      ? fw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var zn = uw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  qs = Symbol.for('react.element'),
  ai = Symbol.for('react.portal'),
  li = Symbol.for('react.fragment'),
  Td = Symbol.for('react.strict_mode'),
  tf = Symbol.for('react.profiler'),
  iy = Symbol.for('react.provider'),
  oy = Symbol.for('react.context'),
  Ad = Symbol.for('react.forward_ref'),
  nf = Symbol.for('react.suspense'),
  rf = Symbol.for('react.suspense_list'),
  Rd = Symbol.for('react.memo'),
  Yn = Symbol.for('react.lazy'),
  sy = Symbol.for('react.offscreen'),
  Nh = Symbol.iterator;
function ro(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Nh && e[Nh]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var we = Object.assign,
  ic;
function So(e) {
  if (ic === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ic = (t && t[1]) || '';
    }
  return (
    `
` +
    ic +
    e
  );
}
var oc = !1;
function sc(e, t) {
  if (!e || oc) return '';
  oc = !0;
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
    (oc = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? So(e) : '';
}
function hw(e) {
  switch (e.tag) {
    case 5:
      return So(e.type);
    case 16:
      return So('Lazy');
    case 13:
      return So('Suspense');
    case 19:
      return So('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = sc(e.type, !1)), e;
    case 11:
      return (e = sc(e.type.render, !1)), e;
    case 1:
      return (e = sc(e.type, !0)), e;
    default:
      return '';
  }
}
function of(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case li:
      return 'Fragment';
    case ai:
      return 'Portal';
    case tf:
      return 'Profiler';
    case Td:
      return 'StrictMode';
    case nf:
      return 'Suspense';
    case rf:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case oy:
        return (e.displayName || 'Context') + '.Consumer';
      case iy:
        return (e._context.displayName || 'Context') + '.Provider';
      case Ad:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Rd:
        return (
          (t = e.displayName || null), t !== null ? t : of(e.type) || 'Memo'
        );
      case Yn:
        (t = e._payload), (e = e._init);
        try {
          return of(e(t));
        } catch {}
    }
  return null;
}
function mw(e) {
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
      return of(t);
    case 8:
      return t === Td ? 'StrictMode' : 'Mode';
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
function cr(e) {
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
function ay(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function gw(e) {
  var t = ay(e) ? 'checked' : 'value',
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
function Zs(e) {
  e._valueTracker || (e._valueTracker = gw(e));
}
function ly(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = ay(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Xa(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function sf(e, t) {
  var n = t.checked;
  return we({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function jh(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = cr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function uy(e, t) {
  (t = t.checked), t != null && Ed(e, 'checked', t, !1);
}
function af(e, t) {
  uy(e, t);
  var n = cr(t.value),
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
    ? lf(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && lf(e, t.type, cr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Lh(e, t, n) {
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
function lf(e, t, n) {
  (t !== 'number' || Xa(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var ko = Array.isArray;
function wi(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + cr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function uf(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return we({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Dh(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(j(92));
      if (ko(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: cr(n) };
}
function cy(e, t) {
  var n = cr(t.value),
    r = cr(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Fh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function fy(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function cf(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? fy(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var Js,
  dy = (function (e) {
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
        Js = Js || document.createElement('div'),
          Js.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Js.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ho(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Po = {
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
  yw = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Po).forEach(function (e) {
  yw.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Po[t] = Po[e]);
  });
});
function py(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Po.hasOwnProperty(e) && Po[e])
    ? ('' + t).trim()
    : t + 'px';
}
function hy(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = py(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var vw = we(
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
function ff(e, t) {
  if (t) {
    if (vw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(j(62));
  }
}
function df(e, t) {
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
var pf = null;
function Od(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var hf = null,
  Si = null,
  ki = null;
function zh(e) {
  if ((e = Os(e))) {
    if (typeof hf != 'function') throw Error(j(280));
    var t = e.stateNode;
    t && ((t = Xl(t)), hf(e.stateNode, e.type, t));
  }
}
function my(e) {
  Si ? (ki ? ki.push(e) : (ki = [e])) : (Si = e);
}
function gy() {
  if (Si) {
    var e = Si,
      t = ki;
    if (((ki = Si = null), zh(e), t)) for (e = 0; e < t.length; e++) zh(t[e]);
  }
}
function yy(e, t) {
  return e(t);
}
function vy() {}
var ac = !1;
function xy(e, t, n) {
  if (ac) return e(t, n);
  ac = !0;
  try {
    return yy(e, t, n);
  } finally {
    (ac = !1), (Si !== null || ki !== null) && (vy(), gy());
  }
}
function Bo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Xl(n);
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
  if (n && typeof n != 'function') throw Error(j(231, t, typeof n));
  return n;
}
var mf = !1;
if (An)
  try {
    var io = {};
    Object.defineProperty(io, 'passive', {
      get: function () {
        mf = !0;
      },
    }),
      window.addEventListener('test', io, io),
      window.removeEventListener('test', io, io);
  } catch {
    mf = !1;
  }
function xw(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Mo = !1,
  qa = null,
  Za = !1,
  gf = null,
  ww = {
    onError: function (e) {
      (Mo = !0), (qa = e);
    },
  };
function Sw(e, t, n, r, i, o, s, a, l) {
  (Mo = !1), (qa = null), xw.apply(ww, arguments);
}
function kw(e, t, n, r, i, o, s, a, l) {
  if ((Sw.apply(this, arguments), Mo)) {
    if (Mo) {
      var u = qa;
      (Mo = !1), (qa = null);
    } else throw Error(j(198));
    Za || ((Za = !0), (gf = u));
  }
}
function Yr(e) {
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
function wy(e) {
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
function Uh(e) {
  if (Yr(e) !== e) throw Error(j(188));
}
function Cw(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Yr(e)), t === null)) throw Error(j(188));
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
        if (o === n) return Uh(i), e;
        if (o === r) return Uh(i), t;
        o = o.sibling;
      }
      throw Error(j(188));
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
        if (!s) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function Sy(e) {
  return (e = Cw(e)), e !== null ? ky(e) : null;
}
function ky(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ky(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Cy = kt.unstable_scheduleCallback,
  Vh = kt.unstable_cancelCallback,
  bw = kt.unstable_shouldYield,
  _w = kt.unstable_requestPaint,
  _e = kt.unstable_now,
  Pw = kt.unstable_getCurrentPriorityLevel,
  $d = kt.unstable_ImmediatePriority,
  by = kt.unstable_UserBlockingPriority,
  Ja = kt.unstable_NormalPriority,
  Mw = kt.unstable_LowPriority,
  _y = kt.unstable_IdlePriority,
  Yl = null,
  dn = null;
function Ew(e) {
  if (dn && typeof dn.onCommitFiberRoot == 'function')
    try {
      dn.onCommitFiberRoot(Yl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var en = Math.clz32 ? Math.clz32 : Rw,
  Tw = Math.log,
  Aw = Math.LN2;
function Rw(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Tw(e) / Aw) | 0)) | 0;
}
var ea = 64,
  ta = 4194304;
function Co(e) {
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
function el(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = Co(a)) : ((o &= s), o !== 0 && (r = Co(o)));
  } else (s = n & ~i), s !== 0 ? (r = Co(s)) : o !== 0 && (r = Co(o));
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
function Ow(e, t) {
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
function $w(e, t) {
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
      ? (!(a & n) || a & r) && (i[s] = Ow(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function yf(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Py() {
  var e = ea;
  return (ea <<= 1), !(ea & 4194240) && (ea = 64), e;
}
function lc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function As(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - en(t)),
    (e[t] = n);
}
function Iw(e, t) {
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
function Id(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - en(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var se = 0;
function My(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ey,
  Nd,
  Ty,
  Ay,
  Ry,
  vf = !1,
  na = [],
  tr = null,
  nr = null,
  rr = null,
  Wo = new Map(),
  Yo = new Map(),
  Qn = [],
  Nw =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Hh(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      tr = null;
      break;
    case 'dragenter':
    case 'dragleave':
      nr = null;
      break;
    case 'mouseover':
    case 'mouseout':
      rr = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Wo.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Yo.delete(t.pointerId);
  }
}
function oo(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Os(t)), t !== null && Nd(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function jw(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (tr = oo(tr, e, t, n, r, i)), !0;
    case 'dragenter':
      return (nr = oo(nr, e, t, n, r, i)), !0;
    case 'mouseover':
      return (rr = oo(rr, e, t, n, r, i)), !0;
    case 'pointerover':
      var o = i.pointerId;
      return Wo.set(o, oo(Wo.get(o) || null, e, t, n, r, i)), !0;
    case 'gotpointercapture':
      return (
        (o = i.pointerId), Yo.set(o, oo(Yo.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Oy(e) {
  var t = Pr(e.target);
  if (t !== null) {
    var n = Yr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = wy(n)), t !== null)) {
          (e.blockedOn = t),
            Ry(e.priority, function () {
              Ty(n);
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
function Ta(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = xf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (pf = r), n.target.dispatchEvent(r), (pf = null);
    } else return (t = Os(n)), t !== null && Nd(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Bh(e, t, n) {
  Ta(e) && n.delete(t);
}
function Lw() {
  (vf = !1),
    tr !== null && Ta(tr) && (tr = null),
    nr !== null && Ta(nr) && (nr = null),
    rr !== null && Ta(rr) && (rr = null),
    Wo.forEach(Bh),
    Yo.forEach(Bh);
}
function so(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    vf ||
      ((vf = !0),
      kt.unstable_scheduleCallback(kt.unstable_NormalPriority, Lw)));
}
function Go(e) {
  function t(i) {
    return so(i, e);
  }
  if (0 < na.length) {
    so(na[0], e);
    for (var n = 1; n < na.length; n++) {
      var r = na[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    tr !== null && so(tr, e),
      nr !== null && so(nr, e),
      rr !== null && so(rr, e),
      Wo.forEach(t),
      Yo.forEach(t),
      n = 0;
    n < Qn.length;
    n++
  )
    (r = Qn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Qn.length && ((n = Qn[0]), n.blockedOn === null); )
    Oy(n), n.blockedOn === null && Qn.shift();
}
var Ci = zn.ReactCurrentBatchConfig,
  tl = !0;
function Dw(e, t, n, r) {
  var i = se,
    o = Ci.transition;
  Ci.transition = null;
  try {
    (se = 1), jd(e, t, n, r);
  } finally {
    (se = i), (Ci.transition = o);
  }
}
function Fw(e, t, n, r) {
  var i = se,
    o = Ci.transition;
  Ci.transition = null;
  try {
    (se = 4), jd(e, t, n, r);
  } finally {
    (se = i), (Ci.transition = o);
  }
}
function jd(e, t, n, r) {
  if (tl) {
    var i = xf(e, t, n, r);
    if (i === null) vc(e, t, r, nl, n), Hh(e, r);
    else if (jw(i, e, t, n, r)) r.stopPropagation();
    else if ((Hh(e, r), t & 4 && -1 < Nw.indexOf(e))) {
      for (; i !== null; ) {
        var o = Os(i);
        if (
          (o !== null && Ey(o),
          (o = xf(e, t, n, r)),
          o === null && vc(e, t, r, nl, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else vc(e, t, r, null, n);
  }
}
var nl = null;
function xf(e, t, n, r) {
  if (((nl = null), (e = Od(r)), (e = Pr(e)), e !== null))
    if (((t = Yr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = wy(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (nl = e), null;
}
function $y(e) {
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
      switch (Pw()) {
        case $d:
          return 1;
        case by:
          return 4;
        case Ja:
        case Mw:
          return 16;
        case _y:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var qn = null,
  Ld = null,
  Aa = null;
function Iy() {
  if (Aa) return Aa;
  var e,
    t = Ld,
    n = t.length,
    r,
    i = 'value' in qn ? qn.value : qn.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Aa = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ra(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ra() {
  return !0;
}
function Wh() {
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
        ? ra
        : Wh),
      (this.isPropagationStopped = Wh),
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
          (this.isDefaultPrevented = ra));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = ra));
      },
      persist: function () {},
      isPersistent: ra,
    }),
    t
  );
}
var Xi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Dd = Pt(Xi),
  Rs = we({}, Xi, { view: 0, detail: 0 }),
  zw = Pt(Rs),
  uc,
  cc,
  ao,
  Gl = we({}, Rs, {
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
    getModifierState: Fd,
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
        : (e !== ao &&
            (ao && e.type === 'mousemove'
              ? ((uc = e.screenX - ao.screenX), (cc = e.screenY - ao.screenY))
              : (cc = uc = 0),
            (ao = e)),
          uc);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : cc;
    },
  }),
  Yh = Pt(Gl),
  Uw = we({}, Gl, { dataTransfer: 0 }),
  Vw = Pt(Uw),
  Hw = we({}, Rs, { relatedTarget: 0 }),
  fc = Pt(Hw),
  Bw = we({}, Xi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ww = Pt(Bw),
  Yw = we({}, Xi, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Gw = Pt(Yw),
  Qw = we({}, Xi, { data: 0 }),
  Gh = Pt(Qw),
  Kw = {
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
  Xw = {
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
  qw = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function Zw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = qw[e]) ? !!t[e] : !1;
}
function Fd() {
  return Zw;
}
var Jw = we({}, Rs, {
    key: function (e) {
      if (e.key) {
        var t = Kw[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Ra(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Xw[e.keyCode] || 'Unidentified'
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
    getModifierState: Fd,
    charCode: function (e) {
      return e.type === 'keypress' ? Ra(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Ra(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  e3 = Pt(Jw),
  t3 = we({}, Gl, {
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
  Qh = Pt(t3),
  n3 = we({}, Rs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fd,
  }),
  r3 = Pt(n3),
  i3 = we({}, Xi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  o3 = Pt(i3),
  s3 = we({}, Gl, {
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
  a3 = Pt(s3),
  l3 = [9, 13, 27, 32],
  zd = An && 'CompositionEvent' in window,
  Eo = null;
An && 'documentMode' in document && (Eo = document.documentMode);
var u3 = An && 'TextEvent' in window && !Eo,
  Ny = An && (!zd || (Eo && 8 < Eo && 11 >= Eo)),
  Kh = ' ',
  Xh = !1;
function jy(e, t) {
  switch (e) {
    case 'keyup':
      return l3.indexOf(t.keyCode) !== -1;
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
function Ly(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var ui = !1;
function c3(e, t) {
  switch (e) {
    case 'compositionend':
      return Ly(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Xh = !0), Kh);
    case 'textInput':
      return (e = t.data), e === Kh && Xh ? null : e;
    default:
      return null;
  }
}
function f3(e, t) {
  if (ui)
    return e === 'compositionend' || (!zd && jy(e, t))
      ? ((e = Iy()), (Aa = Ld = qn = null), (ui = !1), e)
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
      return Ny && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var d3 = {
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
function qh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!d3[e.type] : t === 'textarea';
}
function Dy(e, t, n, r) {
  my(r),
    (t = rl(t, 'onChange')),
    0 < t.length &&
      ((n = new Dd('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var To = null,
  Qo = null;
function p3(e) {
  Ky(e, 0);
}
function Ql(e) {
  var t = di(e);
  if (ly(t)) return e;
}
function h3(e, t) {
  if (e === 'change') return t;
}
var Fy = !1;
if (An) {
  var dc;
  if (An) {
    var pc = 'oninput' in document;
    if (!pc) {
      var Zh = document.createElement('div');
      Zh.setAttribute('oninput', 'return;'),
        (pc = typeof Zh.oninput == 'function');
    }
    dc = pc;
  } else dc = !1;
  Fy = dc && (!document.documentMode || 9 < document.documentMode);
}
function Jh() {
  To && (To.detachEvent('onpropertychange', zy), (Qo = To = null));
}
function zy(e) {
  if (e.propertyName === 'value' && Ql(Qo)) {
    var t = [];
    Dy(t, Qo, e, Od(e)), xy(p3, t);
  }
}
function m3(e, t, n) {
  e === 'focusin'
    ? (Jh(), (To = t), (Qo = n), To.attachEvent('onpropertychange', zy))
    : e === 'focusout' && Jh();
}
function g3(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Ql(Qo);
}
function y3(e, t) {
  if (e === 'click') return Ql(t);
}
function v3(e, t) {
  if (e === 'input' || e === 'change') return Ql(t);
}
function x3(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var rn = typeof Object.is == 'function' ? Object.is : x3;
function Ko(e, t) {
  if (rn(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!ef.call(t, i) || !rn(e[i], t[i])) return !1;
  }
  return !0;
}
function e0(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function t0(e, t) {
  var n = e0(e);
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
    n = e0(n);
  }
}
function Uy(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Uy(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Vy() {
  for (var e = window, t = Xa(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Xa(e.document);
  }
  return t;
}
function Ud(e) {
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
function w3(e) {
  var t = Vy(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Uy(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ud(n)) {
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
          (i = t0(n, o));
        var s = t0(n, r);
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
var S3 = An && 'documentMode' in document && 11 >= document.documentMode,
  ci = null,
  wf = null,
  Ao = null,
  Sf = !1;
function n0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Sf ||
    ci == null ||
    ci !== Xa(r) ||
    ((r = ci),
    'selectionStart' in r && Ud(r)
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
    (Ao && Ko(Ao, r)) ||
      ((Ao = r),
      (r = rl(wf, 'onSelect')),
      0 < r.length &&
        ((t = new Dd('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ci))));
}
function ia(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var fi = {
    animationend: ia('Animation', 'AnimationEnd'),
    animationiteration: ia('Animation', 'AnimationIteration'),
    animationstart: ia('Animation', 'AnimationStart'),
    transitionend: ia('Transition', 'TransitionEnd'),
  },
  hc = {},
  Hy = {};
An &&
  ((Hy = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete fi.animationend.animation,
    delete fi.animationiteration.animation,
    delete fi.animationstart.animation),
  'TransitionEvent' in window || delete fi.transitionend.transition);
function Kl(e) {
  if (hc[e]) return hc[e];
  if (!fi[e]) return e;
  var t = fi[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Hy) return (hc[e] = t[n]);
  return e;
}
var By = Kl('animationend'),
  Wy = Kl('animationiteration'),
  Yy = Kl('animationstart'),
  Gy = Kl('transitionend'),
  Qy = new Map(),
  r0 =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function dr(e, t) {
  Qy.set(e, t), Wr(t, [e]);
}
for (var mc = 0; mc < r0.length; mc++) {
  var gc = r0[mc],
    k3 = gc.toLowerCase(),
    C3 = gc[0].toUpperCase() + gc.slice(1);
  dr(k3, 'on' + C3);
}
dr(By, 'onAnimationEnd');
dr(Wy, 'onAnimationIteration');
dr(Yy, 'onAnimationStart');
dr('dblclick', 'onDoubleClick');
dr('focusin', 'onFocus');
dr('focusout', 'onBlur');
dr(Gy, 'onTransitionEnd');
Ri('onMouseEnter', ['mouseout', 'mouseover']);
Ri('onMouseLeave', ['mouseout', 'mouseover']);
Ri('onPointerEnter', ['pointerout', 'pointerover']);
Ri('onPointerLeave', ['pointerout', 'pointerover']);
Wr(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Wr(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
Wr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Wr(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Wr(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Wr(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var bo =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  b3 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(bo));
function i0(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), kw(r, t, void 0, e), (e.currentTarget = null);
}
function Ky(e, t) {
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
          i0(i, a, u), (o = l);
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
          i0(i, a, u), (o = l);
        }
    }
  }
  if (Za) throw ((e = gf), (Za = !1), (gf = null), e);
}
function pe(e, t) {
  var n = t[Pf];
  n === void 0 && (n = t[Pf] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Xy(t, e, 2, !1), n.add(r));
}
function yc(e, t, n) {
  var r = 0;
  t && (r |= 4), Xy(n, e, r, t);
}
var oa = '_reactListening' + Math.random().toString(36).slice(2);
function Xo(e) {
  if (!e[oa]) {
    (e[oa] = !0),
      ry.forEach(function (n) {
        n !== 'selectionchange' && (b3.has(n) || yc(n, !1, e), yc(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[oa] || ((t[oa] = !0), yc('selectionchange', !1, t));
  }
}
function Xy(e, t, n, r) {
  switch ($y(t)) {
    case 1:
      var i = Dw;
      break;
    case 4:
      i = Fw;
      break;
    default:
      i = jd;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !mf ||
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
function vc(e, t, n, r, i) {
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
          if (((s = Pr(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  xy(function () {
    var u = o,
      c = Od(n),
      f = [];
    e: {
      var d = Qy.get(e);
      if (d !== void 0) {
        var m = Dd,
          y = e;
        switch (e) {
          case 'keypress':
            if (Ra(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            m = e3;
            break;
          case 'focusin':
            (y = 'focus'), (m = fc);
            break;
          case 'focusout':
            (y = 'blur'), (m = fc);
            break;
          case 'beforeblur':
          case 'afterblur':
            m = fc;
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
            m = Yh;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            m = Vw;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            m = r3;
            break;
          case By:
          case Wy:
          case Yy:
            m = Ww;
            break;
          case Gy:
            m = o3;
            break;
          case 'scroll':
            m = zw;
            break;
          case 'wheel':
            m = a3;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            m = Gw;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            m = Qh;
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
              p !== null && ((w = Bo(g, p)), w != null && h.push(qo(g, w, v)))),
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
            n !== pf &&
            (y = n.relatedTarget || n.fromElement) &&
            (Pr(y) || y[Rn]))
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
              (y = y ? Pr(y) : null),
              y !== null &&
                ((x = Yr(y)), y !== x || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((m = null), (y = u)),
          m !== y)
        ) {
          if (
            ((h = Yh),
            (w = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (g = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((h = Qh),
              (w = 'onPointerLeave'),
              (p = 'onPointerEnter'),
              (g = 'pointer')),
            (x = m == null ? d : di(m)),
            (v = y == null ? d : di(y)),
            (d = new h(w, g + 'leave', m, n, c)),
            (d.target = x),
            (d.relatedTarget = v),
            (w = null),
            Pr(c) === u &&
              ((h = new h(p, g + 'enter', y, n, c)),
              (h.target = v),
              (h.relatedTarget = x),
              (w = h)),
            (x = w),
            m && y)
          )
            t: {
              for (h = m, p = y, g = 0, v = h; v; v = qr(v)) g++;
              for (v = 0, w = p; w; w = qr(w)) v++;
              for (; 0 < g - v; ) (h = qr(h)), g--;
              for (; 0 < v - g; ) (p = qr(p)), v--;
              for (; g--; ) {
                if (h === p || (p !== null && h === p.alternate)) break t;
                (h = qr(h)), (p = qr(p));
              }
              h = null;
            }
          else h = null;
          m !== null && o0(f, d, m, h, !1),
            y !== null && x !== null && o0(f, x, y, h, !0);
        }
      }
      e: {
        if (
          ((d = u ? di(u) : window),
          (m = d.nodeName && d.nodeName.toLowerCase()),
          m === 'select' || (m === 'input' && d.type === 'file'))
        )
          var k = h3;
        else if (qh(d))
          if (Fy) k = v3;
          else {
            k = g3;
            var S = m3;
          }
        else
          (m = d.nodeName) &&
            m.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (k = y3);
        if (k && (k = k(e, u))) {
          Dy(f, k, n, c);
          break e;
        }
        S && S(e, d, u),
          e === 'focusout' &&
            (S = d._wrapperState) &&
            S.controlled &&
            d.type === 'number' &&
            lf(d, 'number', d.value);
      }
      switch (((S = u ? di(u) : window), e)) {
        case 'focusin':
          (qh(S) || S.contentEditable === 'true') &&
            ((ci = S), (wf = u), (Ao = null));
          break;
        case 'focusout':
          Ao = wf = ci = null;
          break;
        case 'mousedown':
          Sf = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Sf = !1), n0(f, n, c);
          break;
        case 'selectionchange':
          if (S3) break;
        case 'keydown':
        case 'keyup':
          n0(f, n, c);
      }
      var C;
      if (zd)
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
        ui
          ? jy(e, n) && (M = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (M = 'onCompositionStart');
      M &&
        (Ny &&
          n.locale !== 'ko' &&
          (ui || M !== 'onCompositionStart'
            ? M === 'onCompositionEnd' && ui && (C = Iy())
            : ((qn = c),
              (Ld = 'value' in qn ? qn.value : qn.textContent),
              (ui = !0))),
        (S = rl(u, M)),
        0 < S.length &&
          ((M = new Gh(M, e, null, n, c)),
          f.push({ event: M, listeners: S }),
          C ? (M.data = C) : ((C = Ly(n)), C !== null && (M.data = C)))),
        (C = u3 ? c3(e, n) : f3(e, n)) &&
          ((u = rl(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new Gh('onBeforeInput', 'beforeinput', null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = C)));
    }
    Ky(f, t);
  });
}
function qo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function rl(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Bo(e, n)),
      o != null && r.unshift(qo(e, o, i)),
      (o = Bo(e, t)),
      o != null && r.push(qo(e, o, i))),
      (e = e.return);
  }
  return r;
}
function qr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function o0(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = Bo(n, o)), l != null && s.unshift(qo(n, l, a)))
        : i || ((l = Bo(n, o)), l != null && s.push(qo(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var _3 = /\r\n?/g,
  P3 = /\u0000|\uFFFD/g;
function s0(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      _3,
      `
`
    )
    .replace(P3, '');
}
function sa(e, t, n) {
  if (((t = s0(t)), s0(e) !== t && n)) throw Error(j(425));
}
function il() {}
var kf = null,
  Cf = null;
function bf(e, t) {
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
var _f = typeof setTimeout == 'function' ? setTimeout : void 0,
  M3 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  a0 = typeof Promise == 'function' ? Promise : void 0,
  E3 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof a0 < 'u'
      ? function (e) {
          return a0.resolve(null).then(e).catch(T3);
        }
      : _f;
function T3(e) {
  setTimeout(function () {
    throw e;
  });
}
function xc(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), Go(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = i;
  } while (n);
  Go(t);
}
function ir(e) {
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
function l0(e) {
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
var qi = Math.random().toString(36).slice(2),
  fn = '__reactFiber$' + qi,
  Zo = '__reactProps$' + qi,
  Rn = '__reactContainer$' + qi,
  Pf = '__reactEvents$' + qi,
  A3 = '__reactListeners$' + qi,
  R3 = '__reactHandles$' + qi;
function Pr(e) {
  var t = e[fn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Rn] || n[fn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = l0(e); e !== null; ) {
          if ((n = e[fn])) return n;
          e = l0(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Os(e) {
  return (
    (e = e[fn] || e[Rn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function di(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function Xl(e) {
  return e[Zo] || null;
}
var Mf = [],
  pi = -1;
function pr(e) {
  return { current: e };
}
function he(e) {
  0 > pi || ((e.current = Mf[pi]), (Mf[pi] = null), pi--);
}
function de(e, t) {
  pi++, (Mf[pi] = e.current), (e.current = t);
}
var fr = {},
  Xe = pr(fr),
  ct = pr(!1),
  Lr = fr;
function Oi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return fr;
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
function ol() {
  he(ct), he(Xe);
}
function u0(e, t, n) {
  if (Xe.current !== fr) throw Error(j(168));
  de(Xe, t), de(ct, n);
}
function qy(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(j(108, mw(e) || 'Unknown', i));
  return we({}, n, r);
}
function sl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || fr),
    (Lr = Xe.current),
    de(Xe, e),
    de(ct, ct.current),
    !0
  );
}
function c0(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n
    ? ((e = qy(e, t, Lr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      he(ct),
      he(Xe),
      de(Xe, e))
    : he(ct),
    de(ct, n);
}
var Cn = null,
  ql = !1,
  wc = !1;
function Zy(e) {
  Cn === null ? (Cn = [e]) : Cn.push(e);
}
function O3(e) {
  (ql = !0), Zy(e);
}
function hr() {
  if (!wc && Cn !== null) {
    wc = !0;
    var e = 0,
      t = se;
    try {
      var n = Cn;
      for (se = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Cn = null), (ql = !1);
    } catch (i) {
      throw (Cn !== null && (Cn = Cn.slice(e + 1)), Cy($d, hr), i);
    } finally {
      (se = t), (wc = !1);
    }
  }
  return null;
}
var hi = [],
  mi = 0,
  al = null,
  ll = 0,
  Tt = [],
  At = 0,
  Dr = null,
  bn = 1,
  _n = '';
function kr(e, t) {
  (hi[mi++] = ll), (hi[mi++] = al), (al = e), (ll = t);
}
function Jy(e, t, n) {
  (Tt[At++] = bn), (Tt[At++] = _n), (Tt[At++] = Dr), (Dr = e);
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
function Vd(e) {
  e.return !== null && (kr(e, 1), Jy(e, 1, 0));
}
function Hd(e) {
  for (; e === al; )
    (al = hi[--mi]), (hi[mi] = null), (ll = hi[--mi]), (hi[mi] = null);
  for (; e === Dr; )
    (Dr = Tt[--At]),
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
function e1(e, t) {
  var n = It(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function f0(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (wt = e), (xt = ir(t.firstChild)), !0)
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
          ? ((n = Dr !== null ? { id: bn, overflow: _n } : null),
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
function Ef(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Tf(e) {
  if (ge) {
    var t = xt;
    if (t) {
      var n = t;
      if (!f0(e, t)) {
        if (Ef(e)) throw Error(j(418));
        t = ir(n.nextSibling);
        var r = wt;
        t && f0(e, t)
          ? e1(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ge = !1), (wt = e));
      }
    } else {
      if (Ef(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (ge = !1), (wt = e);
    }
  }
}
function d0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  wt = e;
}
function aa(e) {
  if (e !== wt) return !1;
  if (!ge) return d0(e), (ge = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !bf(e.type, e.memoizedProps))),
    t && (t = xt))
  ) {
    if (Ef(e)) throw (t1(), Error(j(418)));
    for (; t; ) e1(e, t), (t = ir(t.nextSibling));
  }
  if ((d0(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              xt = ir(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      xt = null;
    }
  } else xt = wt ? ir(e.stateNode.nextSibling) : null;
  return !0;
}
function t1() {
  for (var e = xt; e; ) e = ir(e.nextSibling);
}
function $i() {
  (xt = wt = null), (ge = !1);
}
function Bd(e) {
  Xt === null ? (Xt = [e]) : Xt.push(e);
}
var $3 = zn.ReactCurrentBatchConfig;
function lo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
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
    if (typeof e != 'string') throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function la(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function p0(e) {
  var t = e._init;
  return t(e._payload);
}
function n1(e) {
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
    return (p = lr(p, g)), (p.index = 0), (p.sibling = null), p;
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
      ? ((g = Mc(v, p.mode, w)), (g.return = p), g)
      : ((g = i(g, v)), (g.return = p), g);
  }
  function l(p, g, v, w) {
    var k = v.type;
    return k === li
      ? c(p, g, v.props.children, w, v.key)
      : g !== null &&
        (g.elementType === k ||
          (typeof k == 'object' &&
            k !== null &&
            k.$$typeof === Yn &&
            p0(k) === g.type))
      ? ((w = i(g, v.props)), (w.ref = lo(p, g, v)), (w.return = p), w)
      : ((w = Da(v.type, v.key, v.props, null, p.mode, w)),
        (w.ref = lo(p, g, v)),
        (w.return = p),
        w);
  }
  function u(p, g, v, w) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== v.containerInfo ||
      g.stateNode.implementation !== v.implementation
      ? ((g = Ec(v, p.mode, w)), (g.return = p), g)
      : ((g = i(g, v.children || [])), (g.return = p), g);
  }
  function c(p, g, v, w, k) {
    return g === null || g.tag !== 7
      ? ((g = Ir(v, p.mode, w, k)), (g.return = p), g)
      : ((g = i(g, v)), (g.return = p), g);
  }
  function f(p, g, v) {
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return (g = Mc('' + g, p.mode, v)), (g.return = p), g;
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case qs:
          return (
            (v = Da(g.type, g.key, g.props, null, p.mode, v)),
            (v.ref = lo(p, null, g)),
            (v.return = p),
            v
          );
        case ai:
          return (g = Ec(g, p.mode, v)), (g.return = p), g;
        case Yn:
          var w = g._init;
          return f(p, w(g._payload), v);
      }
      if (ko(g) || ro(g))
        return (g = Ir(g, p.mode, v, null)), (g.return = p), g;
      la(p, g);
    }
    return null;
  }
  function d(p, g, v, w) {
    var k = g !== null ? g.key : null;
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return k !== null ? null : a(p, g, '' + v, w);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case qs:
          return v.key === k ? l(p, g, v, w) : null;
        case ai:
          return v.key === k ? u(p, g, v, w) : null;
        case Yn:
          return (k = v._init), d(p, g, k(v._payload), w);
      }
      if (ko(v) || ro(v)) return k !== null ? null : c(p, g, v, w, null);
      la(p, v);
    }
    return null;
  }
  function m(p, g, v, w, k) {
    if ((typeof w == 'string' && w !== '') || typeof w == 'number')
      return (p = p.get(v) || null), a(g, p, '' + w, k);
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case qs:
          return (p = p.get(w.key === null ? v : w.key) || null), l(g, p, w, k);
        case ai:
          return (p = p.get(w.key === null ? v : w.key) || null), u(g, p, w, k);
        case Yn:
          var S = w._init;
          return m(p, g, v, S(w._payload), k);
      }
      if (ko(w) || ro(w)) return (p = p.get(v) || null), c(g, p, w, k, null);
      la(g, w);
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
    if (M === v.length) return n(p, C), ge && kr(p, M), k;
    if (C === null) {
      for (; M < v.length; M++)
        (C = f(p, v[M], w)),
          C !== null &&
            ((g = o(C, g, M)), S === null ? (k = C) : (S.sibling = C), (S = C));
      return ge && kr(p, M), k;
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
      ge && kr(p, M),
      k
    );
  }
  function h(p, g, v, w) {
    var k = ro(v);
    if (typeof k != 'function') throw Error(j(150));
    if (((v = k.call(v)), v == null)) throw Error(j(151));
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
    if (T.done) return n(p, C), ge && kr(p, M), k;
    if (C === null) {
      for (; !T.done; M++, T = v.next())
        (T = f(p, T.value, w)),
          T !== null &&
            ((g = o(T, g, M)), S === null ? (k = T) : (S.sibling = T), (S = T));
      return ge && kr(p, M), k;
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
      ge && kr(p, M),
      k
    );
  }
  function x(p, g, v, w) {
    if (
      (typeof v == 'object' &&
        v !== null &&
        v.type === li &&
        v.key === null &&
        (v = v.props.children),
      typeof v == 'object' && v !== null)
    ) {
      switch (v.$$typeof) {
        case qs:
          e: {
            for (var k = v.key, S = g; S !== null; ) {
              if (S.key === k) {
                if (((k = v.type), k === li)) {
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
                    k.$$typeof === Yn &&
                    p0(k) === S.type)
                ) {
                  n(p, S.sibling),
                    (g = i(S, v.props)),
                    (g.ref = lo(p, S, v)),
                    (g.return = p),
                    (p = g);
                  break e;
                }
                n(p, S);
                break;
              } else t(p, S);
              S = S.sibling;
            }
            v.type === li
              ? ((g = Ir(v.props.children, p.mode, w, v.key)),
                (g.return = p),
                (p = g))
              : ((w = Da(v.type, v.key, v.props, null, p.mode, w)),
                (w.ref = lo(p, g, v)),
                (w.return = p),
                (p = w));
          }
          return s(p);
        case ai:
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
            (g = Ec(v, p.mode, w)), (g.return = p), (p = g);
          }
          return s(p);
        case Yn:
          return (S = v._init), x(p, g, S(v._payload), w);
      }
      if (ko(v)) return y(p, g, v, w);
      if (ro(v)) return h(p, g, v, w);
      la(p, v);
    }
    return (typeof v == 'string' && v !== '') || typeof v == 'number'
      ? ((v = '' + v),
        g !== null && g.tag === 6
          ? (n(p, g.sibling), (g = i(g, v)), (g.return = p), (p = g))
          : (n(p, g), (g = Mc(v, p.mode, w)), (g.return = p), (p = g)),
        s(p))
      : n(p, g);
  }
  return x;
}
var Ii = n1(!0),
  r1 = n1(!1),
  ul = pr(null),
  cl = null,
  gi = null,
  Wd = null;
function Yd() {
  Wd = gi = cl = null;
}
function Gd(e) {
  var t = ul.current;
  he(ul), (e._currentValue = t);
}
function Af(e, t, n) {
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
function bi(e, t) {
  (cl = e),
    (Wd = gi = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (lt = !0), (e.firstContext = null));
}
function Ft(e) {
  var t = e._currentValue;
  if (Wd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), gi === null)) {
      if (cl === null) throw Error(j(308));
      (gi = e), (cl.dependencies = { lanes: 0, firstContext: e });
    } else gi = gi.next = e;
  return t;
}
var Mr = null;
function Qd(e) {
  Mr === null ? (Mr = [e]) : Mr.push(e);
}
function i1(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Qd(t)) : ((n.next = i.next), (i.next = n)),
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
var Gn = !1;
function Kd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function o1(e, t) {
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
function or(e, t, n) {
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
    i === null ? ((t.next = t), Qd(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    On(e, n)
  );
}
function Oa(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Id(e, n);
  }
}
function h0(e, t) {
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
function fl(e, t, n, r) {
  var i = e.updateQueue;
  Gn = !1;
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
              Gn = !0;
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
    (zr |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function m0(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function'))
          throw Error(j(191, i));
        i.call(r);
      }
    }
}
var $s = {},
  pn = pr($s),
  Jo = pr($s),
  es = pr($s);
function Er(e) {
  if (e === $s) throw Error(j(174));
  return e;
}
function Xd(e, t) {
  switch ((de(es, t), de(Jo, e), de(pn, $s), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : cf(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = cf(t, e));
  }
  he(pn), de(pn, t);
}
function Ni() {
  he(pn), he(Jo), he(es);
}
function s1(e) {
  Er(es.current);
  var t = Er(pn.current),
    n = cf(t, e.type);
  t !== n && (de(Jo, e), de(pn, n));
}
function qd(e) {
  Jo.current === e && (he(pn), he(Jo));
}
var ve = pr(0);
function dl(e) {
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
var Sc = [];
function Zd() {
  for (var e = 0; e < Sc.length; e++)
    Sc[e]._workInProgressVersionPrimary = null;
  Sc.length = 0;
}
var $a = zn.ReactCurrentDispatcher,
  kc = zn.ReactCurrentBatchConfig,
  Fr = 0,
  xe = null,
  Oe = null,
  je = null,
  pl = !1,
  Ro = !1,
  ts = 0,
  I3 = 0;
function We() {
  throw Error(j(321));
}
function Jd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!rn(e[n], t[n])) return !1;
  return !0;
}
function ep(e, t, n, r, i, o) {
  if (
    ((Fr = o),
    (xe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    ($a.current = e === null || e.memoizedState === null ? D3 : F3),
    (e = n(r, i)),
    Ro)
  ) {
    o = 0;
    do {
      if (((Ro = !1), (ts = 0), 25 <= o)) throw Error(j(301));
      (o += 1),
        (je = Oe = null),
        (t.updateQueue = null),
        ($a.current = z3),
        (e = n(r, i));
    } while (Ro);
  }
  if (
    (($a.current = hl),
    (t = Oe !== null && Oe.next !== null),
    (Fr = 0),
    (je = Oe = xe = null),
    (pl = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function tp() {
  var e = ts !== 0;
  return (ts = 0), e;
}
function an() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return je === null ? (xe.memoizedState = je = e) : (je = je.next = e), je;
}
function zt() {
  if (Oe === null) {
    var e = xe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Oe.next;
  var t = je === null ? xe.memoizedState : je.next;
  if (t !== null) (je = t), (Oe = e);
  else {
    if (e === null) throw Error(j(310));
    (Oe = e),
      (e = {
        memoizedState: Oe.memoizedState,
        baseState: Oe.baseState,
        baseQueue: Oe.baseQueue,
        queue: Oe.queue,
        next: null,
      }),
      je === null ? (xe.memoizedState = je = e) : (je = je.next = e);
  }
  return je;
}
function ns(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Cc(e) {
  var t = zt(),
    n = t.queue;
  if (n === null) throw Error(j(311));
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
      if ((Fr & c) === c)
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
          (zr |= c);
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
    do (o = i.lane), (xe.lanes |= o), (zr |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function bc(e) {
  var t = zt(),
    n = t.queue;
  if (n === null) throw Error(j(311));
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
function a1() {}
function l1(e, t) {
  var n = xe,
    r = zt(),
    i = t(),
    o = !rn(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (lt = !0)),
    (r = r.queue),
    np(f1.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (je !== null && je.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      rs(9, c1.bind(null, n, r, i, t), void 0, null),
      De === null)
    )
      throw Error(j(349));
    Fr & 30 || u1(n, t, i);
  }
  return i;
}
function u1(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = xe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (xe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function c1(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), d1(t) && p1(e);
}
function f1(e, t, n) {
  return n(function () {
    d1(t) && p1(e);
  });
}
function d1(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !rn(e, n);
  } catch {
    return !0;
  }
}
function p1(e) {
  var t = On(e, 1);
  t !== null && tn(t, e, 1, -1);
}
function g0(e) {
  var t = an();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ns,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = L3.bind(null, xe, e)),
    [t.memoizedState, e]
  );
}
function rs(e, t, n, r) {
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
function h1() {
  return zt().memoizedState;
}
function Ia(e, t, n, r) {
  var i = an();
  (xe.flags |= e),
    (i.memoizedState = rs(1 | t, n, void 0, r === void 0 ? null : r));
}
function Zl(e, t, n, r) {
  var i = zt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Oe !== null) {
    var s = Oe.memoizedState;
    if (((o = s.destroy), r !== null && Jd(r, s.deps))) {
      i.memoizedState = rs(t, n, o, r);
      return;
    }
  }
  (xe.flags |= e), (i.memoizedState = rs(1 | t, n, o, r));
}
function y0(e, t) {
  return Ia(8390656, 8, e, t);
}
function np(e, t) {
  return Zl(2048, 8, e, t);
}
function m1(e, t) {
  return Zl(4, 2, e, t);
}
function g1(e, t) {
  return Zl(4, 4, e, t);
}
function y1(e, t) {
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
function v1(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Zl(4, 4, y1.bind(null, t, e), n)
  );
}
function rp() {}
function x1(e, t) {
  var n = zt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Jd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function w1(e, t) {
  var n = zt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Jd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function S1(e, t, n) {
  return Fr & 21
    ? (rn(n, t) || ((n = Py()), (xe.lanes |= n), (zr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (lt = !0)), (e.memoizedState = n));
}
function N3(e, t) {
  var n = se;
  (se = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = kc.transition;
  kc.transition = {};
  try {
    e(!1), t();
  } finally {
    (se = n), (kc.transition = r);
  }
}
function k1() {
  return zt().memoizedState;
}
function j3(e, t, n) {
  var r = ar(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    C1(e))
  )
    b1(t, n);
  else if (((n = i1(e, t, n, r)), n !== null)) {
    var i = et();
    tn(n, e, r, i), _1(n, t, r);
  }
}
function L3(e, t, n) {
  var r = ar(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (C1(e)) b1(t, i);
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
            ? ((i.next = i), Qd(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = i1(e, t, i, r)),
      n !== null && ((i = et()), tn(n, e, r, i), _1(n, t, r));
  }
}
function C1(e) {
  var t = e.alternate;
  return e === xe || (t !== null && t === xe);
}
function b1(e, t) {
  Ro = pl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function _1(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Id(e, n);
  }
}
var hl = {
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
  D3 = {
    readContext: Ft,
    useCallback: function (e, t) {
      return (an().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ft,
    useEffect: y0,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ia(4194308, 4, y1.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ia(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ia(4, 2, e, t);
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
        (e = e.dispatch = j3.bind(null, xe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = an();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: g0,
    useDebugValue: rp,
    useDeferredValue: function (e) {
      return (an().memoizedState = e);
    },
    useTransition: function () {
      var e = g0(!1),
        t = e[0];
      return (e = N3.bind(null, e[1])), (an().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = xe,
        i = an();
      if (ge) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), De === null)) throw Error(j(349));
        Fr & 30 || u1(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        y0(f1.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        rs(9, c1.bind(null, r, o, n, t), void 0, null),
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
          (n = ts++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = I3++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  F3 = {
    readContext: Ft,
    useCallback: x1,
    useContext: Ft,
    useEffect: np,
    useImperativeHandle: v1,
    useInsertionEffect: m1,
    useLayoutEffect: g1,
    useMemo: w1,
    useReducer: Cc,
    useRef: h1,
    useState: function () {
      return Cc(ns);
    },
    useDebugValue: rp,
    useDeferredValue: function (e) {
      var t = zt();
      return S1(t, Oe.memoizedState, e);
    },
    useTransition: function () {
      var e = Cc(ns)[0],
        t = zt().memoizedState;
      return [e, t];
    },
    useMutableSource: a1,
    useSyncExternalStore: l1,
    useId: k1,
    unstable_isNewReconciler: !1,
  },
  z3 = {
    readContext: Ft,
    useCallback: x1,
    useContext: Ft,
    useEffect: np,
    useImperativeHandle: v1,
    useInsertionEffect: m1,
    useLayoutEffect: g1,
    useMemo: w1,
    useReducer: bc,
    useRef: h1,
    useState: function () {
      return bc(ns);
    },
    useDebugValue: rp,
    useDeferredValue: function (e) {
      var t = zt();
      return Oe === null ? (t.memoizedState = e) : S1(t, Oe.memoizedState, e);
    },
    useTransition: function () {
      var e = bc(ns)[0],
        t = zt().memoizedState;
      return [e, t];
    },
    useMutableSource: a1,
    useSyncExternalStore: l1,
    useId: k1,
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
function Rf(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : we({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Jl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Yr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = et(),
      i = ar(e),
      o = En(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = or(e, o, i)),
      t !== null && (tn(t, e, i, r), Oa(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = et(),
      i = ar(e),
      o = En(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = or(e, o, i)),
      t !== null && (tn(t, e, i, r), Oa(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = et(),
      r = ar(e),
      i = En(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = or(e, i, r)),
      t !== null && (tn(t, e, r, n), Oa(t, e, r));
  },
};
function v0(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ko(n, r) || !Ko(i, o)
      : !0
  );
}
function P1(e, t, n) {
  var r = !1,
    i = fr,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = Ft(o))
      : ((i = ft(t) ? Lr : Xe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Oi(e, i) : fr)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Jl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function x0(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Jl.enqueueReplaceState(t, t.state, null);
}
function Of(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Kd(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (i.context = Ft(o))
    : ((o = ft(t) ? Lr : Xe.current), (i.context = Oi(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (Rf(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Jl.enqueueReplaceState(i, i.state, null),
      fl(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
}
function ji(e, t) {
  try {
    var n = '',
      r = t;
    do (n += hw(r)), (r = r.return);
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
function _c(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function $f(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var U3 = typeof WeakMap == 'function' ? WeakMap : Map;
function M1(e, t, n) {
  (n = En(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      gl || ((gl = !0), (Hf = r)), $f(e, t);
    }),
    n
  );
}
function E1(e, t, n) {
  (n = En(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        $f(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        $f(e, t),
          typeof r != 'function' &&
            (sr === null ? (sr = new Set([this])) : sr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : '',
        });
      }),
    n
  );
}
function w0(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new U3();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = tS.bind(null, e, t, n)), t.then(e, e));
}
function S0(e) {
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
function k0(e, t, n, r, i) {
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
              : ((t = En(-1, 1)), (t.tag = 2), or(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var V3 = zn.ReactCurrentOwner,
  lt = !1;
function Ze(e, t, n, r) {
  t.child = e === null ? r1(t, null, n, r) : Ii(t, e.child, n, r);
}
function C0(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    bi(t, i),
    (r = ep(e, t, n, r, o, i)),
    (n = tp()),
    e !== null && !lt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        $n(e, t, i))
      : (ge && n && Vd(t), (t.flags |= 1), Ze(e, t, r, i), t.child)
  );
}
function b0(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !fp(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), T1(e, t, o, r, i))
      : ((e = Da(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ko), n(s, r) && e.ref === t.ref)
    )
      return $n(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = lr(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function T1(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Ko(o, r) && e.ref === t.ref)
      if (((lt = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (lt = !0);
      else return (t.lanes = e.lanes), $n(e, t, i);
  }
  return If(e, t, n, r, i);
}
function A1(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        de(vi, yt),
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
          de(vi, yt),
          (yt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        de(vi, yt),
        (yt |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      de(vi, yt),
      (yt |= r);
  return Ze(e, t, i, n), t.child;
}
function R1(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function If(e, t, n, r, i) {
  var o = ft(n) ? Lr : Xe.current;
  return (
    (o = Oi(t, o)),
    bi(t, i),
    (n = ep(e, t, n, r, o, i)),
    (r = tp()),
    e !== null && !lt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        $n(e, t, i))
      : (ge && r && Vd(t), (t.flags |= 1), Ze(e, t, n, i), t.child)
  );
}
function _0(e, t, n, r, i) {
  if (ft(n)) {
    var o = !0;
    sl(t);
  } else o = !1;
  if ((bi(t, i), t.stateNode === null))
    Na(e, t), P1(t, n, r), Of(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = Ft(u))
      : ((u = ft(n) ? Lr : Xe.current), (u = Oi(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == 'function' ||
        typeof s.getSnapshotBeforeUpdate == 'function';
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((a !== r || l !== u) && x0(t, s, r, u)),
      (Gn = !1);
    var d = t.memoizedState;
    (s.state = d),
      fl(t, r, s, i),
      (l = t.memoizedState),
      a !== r || d !== l || ct.current || Gn
        ? (typeof c == 'function' && (Rf(t, n, c, r), (l = t.memoizedState)),
          (a = Gn || v0(t, n, a, r, d, l, u))
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
      o1(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Gt(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = Ft(l))
        : ((l = ft(n) ? Lr : Xe.current), (l = Oi(t, l)));
    var m = n.getDerivedStateFromProps;
    (c =
      typeof m == 'function' ||
      typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((a !== f || d !== l) && x0(t, s, r, l)),
      (Gn = !1),
      (d = t.memoizedState),
      (s.state = d),
      fl(t, r, s, i);
    var y = t.memoizedState;
    a !== f || d !== y || ct.current || Gn
      ? (typeof m == 'function' && (Rf(t, n, m, r), (y = t.memoizedState)),
        (u = Gn || v0(t, n, u, r, d, y, l) || !1)
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
  return Nf(e, t, n, r, o, i);
}
function Nf(e, t, n, r, i, o) {
  R1(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && c0(t, n, !1), $n(e, t, o);
  (r = t.stateNode), (V3.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Ii(t, e.child, null, o)), (t.child = Ii(t, null, a, o)))
      : Ze(e, t, a, o),
    (t.memoizedState = r.state),
    i && c0(t, n, !0),
    t.child
  );
}
function O1(e) {
  var t = e.stateNode;
  t.pendingContext
    ? u0(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && u0(e, t.context, !1),
    Xd(e, t.containerInfo);
}
function P0(e, t, n, r, i) {
  return $i(), Bd(i), (t.flags |= 256), Ze(e, t, n, r), t.child;
}
var jf = { dehydrated: null, treeContext: null, retryLane: 0 };
function Lf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function $1(e, t, n) {
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
      Tf(t),
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
                : (o = nu(s, r, 0, null)),
              (e = Ir(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Lf(n)),
              (t.memoizedState = jf),
              e)
            : ip(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return H3(e, t, s, r, a, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: 'hidden', children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = lr(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = lr(a, o)) : ((o = Ir(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Lf(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = jf),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = lr(o, { mode: 'visible', children: r.children })),
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
function ip(e, t) {
  return (
    (t = nu({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ua(e, t, n, r) {
  return (
    r !== null && Bd(r),
    Ii(t, e.child, null, n),
    (e = ip(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function H3(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = _c(Error(j(422)))), ua(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = nu({ mode: 'visible', children: r.children }, i, 0, null)),
        (o = Ir(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Ii(t, e.child, null, s),
        (t.child.memoizedState = Lf(s)),
        (t.memoizedState = jf),
        o);
  if (!(t.mode & 1)) return ua(e, t, s, null);
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(j(419))), (r = _c(o, r, void 0)), ua(e, t, s, r);
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
    return cp(), (r = _c(Error(j(421)))), ua(e, t, s, r);
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = nS.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (xt = ir(i.nextSibling)),
      (wt = t),
      (ge = !0),
      (Xt = null),
      e !== null &&
        ((Tt[At++] = bn),
        (Tt[At++] = _n),
        (Tt[At++] = Dr),
        (bn = e.id),
        (_n = e.overflow),
        (Dr = t)),
      (t = ip(t, r.children)),
      (t.flags |= 4096),
      t);
}
function M0(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Af(e.return, t, n);
}
function Pc(e, t, n, r, i) {
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
function I1(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Ze(e, t, r.children, n), (r = ve.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && M0(e, n, t);
        else if (e.tag === 19) M0(e, n, t);
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
            e !== null && dl(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Pc(t, !1, i, n, o);
        break;
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && dl(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Pc(t, !0, n, null, o);
        break;
      case 'together':
        Pc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Na(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function $n(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (zr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, n = lr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = lr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function B3(e, t, n) {
  switch (t.tag) {
    case 3:
      O1(t), $i();
      break;
    case 5:
      s1(t);
      break;
    case 1:
      ft(t.type) && sl(t);
      break;
    case 4:
      Xd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      de(ul, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (de(ve, ve.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? $1(e, t, n)
          : (de(ve, ve.current & 1),
            (e = $n(e, t, n)),
            e !== null ? e.sibling : null);
      de(ve, ve.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return I1(e, t, n);
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
      return (t.lanes = 0), A1(e, t, n);
  }
  return $n(e, t, n);
}
var N1, Df, j1, L1;
N1 = function (e, t) {
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
Df = function () {};
j1 = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Er(pn.current);
    var o = null;
    switch (n) {
      case 'input':
        (i = sf(e, i)), (r = sf(e, r)), (o = []);
        break;
      case 'select':
        (i = we({}, i, { value: void 0 })),
          (r = we({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (i = uf(e, i)), (r = uf(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = il);
    }
    ff(n, r);
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
            (Vo.hasOwnProperty(u)
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
              (Vo.hasOwnProperty(u)
                ? (l != null && u === 'onScroll' && pe('scroll', e),
                  o || a === l || (o = []))
                : (o = o || []).push(u, l));
    }
    n && (o = o || []).push('style', n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
L1 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function uo(e, t) {
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
function W3(e, t, n) {
  var r = t.pendingProps;
  switch ((Hd(t), t.tag)) {
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
      return ft(t.type) && ol(), Ye(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Ni(),
        he(ct),
        he(Xe),
        Zd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (aa(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Xt !== null && (Yf(Xt), (Xt = null)))),
        Df(e, t),
        Ye(t),
        null
      );
    case 5:
      qd(t);
      var i = Er(es.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        j1(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return Ye(t), null;
        }
        if (((e = Er(pn.current)), aa(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[fn] = t), (r[Zo] = o), (e = (t.mode & 1) !== 0), n)) {
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
              for (i = 0; i < bo.length; i++) pe(bo[i], r);
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
              jh(r, o), pe('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                pe('invalid', r);
              break;
            case 'textarea':
              Dh(r, o), pe('invalid', r);
          }
          ff(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      sa(r.textContent, a, e),
                    (i = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      sa(r.textContent, a, e),
                    (i = ['children', '' + a]))
                : Vo.hasOwnProperty(s) &&
                  a != null &&
                  s === 'onScroll' &&
                  pe('scroll', r);
            }
          switch (n) {
            case 'input':
              Zs(r), Lh(r, o, !0);
              break;
            case 'textarea':
              Zs(r), Fh(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = il);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = fy(n)),
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
            (e[Zo] = r),
            N1(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = df(n, r)), n)) {
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
                for (i = 0; i < bo.length; i++) pe(bo[i], e);
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
                jh(e, r), (i = sf(e, r)), pe('invalid', e);
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
                Dh(e, r), (i = uf(e, r)), pe('invalid', e);
                break;
              default:
                i = r;
            }
            ff(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === 'style'
                  ? hy(e, l)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((l = l ? l.__html : void 0), l != null && dy(e, l))
                  : o === 'children'
                  ? typeof l == 'string'
                    ? (n !== 'textarea' || l !== '') && Ho(e, l)
                    : typeof l == 'number' && Ho(e, '' + l)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (Vo.hasOwnProperty(o)
                      ? l != null && o === 'onScroll' && pe('scroll', e)
                      : l != null && Ed(e, o, l, s));
              }
            switch (n) {
              case 'input':
                Zs(e), Lh(e, r, !1);
                break;
              case 'textarea':
                Zs(e), Fh(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + cr(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? wi(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      wi(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == 'function' && (e.onclick = il);
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
      if (e && t.stateNode != null) L1(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(j(166));
        if (((n = Er(es.current)), Er(pn.current), aa(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[fn] = t),
            (o = r.nodeValue !== n) && ((e = wt), e !== null))
          )
            switch (e.tag) {
              case 3:
                sa(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  sa(r.nodeValue, n, (e.mode & 1) !== 0);
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
          t1(), $i(), (t.flags |= 98560), (o = !1);
        else if (((o = aa(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(j(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(j(317));
            o[fn] = t;
          } else
            $i(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ye(t), (o = !1);
        } else Xt !== null && (Yf(Xt), (Xt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ve.current & 1 ? Ie === 0 && (Ie = 3) : cp())),
          t.updateQueue !== null && (t.flags |= 4),
          Ye(t),
          null);
    case 4:
      return (
        Ni(), Df(e, t), e === null && Xo(t.stateNode.containerInfo), Ye(t), null
      );
    case 10:
      return Gd(t.type._context), Ye(t), null;
    case 17:
      return ft(t.type) && ol(), Ye(t), null;
    case 19:
      if ((he(ve), (o = t.memoizedState), o === null)) return Ye(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) uo(o, !1);
        else {
          if (Ie !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = dl(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    uo(o, !1),
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
            ((t.flags |= 128), (r = !0), uo(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = dl(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              uo(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !s.alternate && !ge)
            )
              return Ye(t), null;
          } else
            2 * _e() - o.renderingStartTime > Li &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), uo(o, !1), (t.lanes = 4194304));
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
        up(),
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
  throw Error(j(156, t.tag));
}
function Y3(e, t) {
  switch ((Hd(t), t.tag)) {
    case 1:
      return (
        ft(t.type) && ol(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ni(),
        he(ct),
        he(Xe),
        Zd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return qd(t), null;
    case 13:
      if (
        (he(ve), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(j(340));
        $i();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return he(ve), null;
    case 4:
      return Ni(), null;
    case 10:
      return Gd(t.type._context), null;
    case 22:
    case 23:
      return up(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ca = !1,
  Ke = !1,
  G3 = typeof WeakSet == 'function' ? WeakSet : Set,
  V = null;
function yi(e, t) {
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
function Ff(e, t, n) {
  try {
    n();
  } catch (r) {
    be(e, t, r);
  }
}
var E0 = !1;
function Q3(e, t) {
  if (((kf = tl), (e = Vy()), Ud(e))) {
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
  for (Cf = { focusedElem: e, selectionRange: n }, tl = !1, V = t; V !== null; )
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
                throw Error(j(163));
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
  return (y = E0), (E0 = !1), y;
}
function Oo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Ff(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function eu(e, t) {
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
function zf(e) {
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
function D1(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), D1(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[fn], delete t[Zo], delete t[Pf], delete t[A3], delete t[R3])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function F1(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function T0(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || F1(e.return)) return null;
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
function Uf(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = il));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Uf(e, t, n), e = e.sibling; e !== null; ) Uf(e, t, n), (e = e.sibling);
}
function Vf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Vf(e, t, n), e = e.sibling; e !== null; ) Vf(e, t, n), (e = e.sibling);
}
var Ue = null,
  Kt = !1;
function Hn(e, t, n) {
  for (n = n.child; n !== null; ) z1(e, t, n), (n = n.sibling);
}
function z1(e, t, n) {
  if (dn && typeof dn.onCommitFiberUnmount == 'function')
    try {
      dn.onCommitFiberUnmount(Yl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ke || yi(n, t);
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
              ? xc(e.parentNode, n)
              : e.nodeType === 1 && xc(e, n),
            Go(e))
          : xc(Ue, n.stateNode));
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
            s !== void 0 && (o & 2 || o & 4) && Ff(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      Hn(e, t, n);
      break;
    case 1:
      if (
        !Ke &&
        (yi(n, t),
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
function A0(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new G3()),
      t.forEach(function (r) {
        var i = rS.bind(null, e, r);
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
        if (Ue === null) throw Error(j(160));
        z1(o, s, i), (Ue = null), (Kt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        be(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) U1(t, e), (t = t.sibling);
}
function U1(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Yt(t, e), on(e), r & 4)) {
        try {
          Oo(3, e, e.return), eu(3, e);
        } catch (h) {
          be(e, e.return, h);
        }
        try {
          Oo(5, e, e.return);
        } catch (h) {
          be(e, e.return, h);
        }
      }
      break;
    case 1:
      Yt(t, e), on(e), r & 512 && n !== null && yi(n, n.return);
      break;
    case 5:
      if (
        (Yt(t, e),
        on(e),
        r & 512 && n !== null && yi(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Ho(i, '');
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
            a === 'input' && o.type === 'radio' && o.name != null && uy(i, o),
              df(a, s);
            var u = df(a, o);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                f = l[s + 1];
              c === 'style'
                ? hy(i, f)
                : c === 'dangerouslySetInnerHTML'
                ? dy(i, f)
                : c === 'children'
                ? Ho(i, f)
                : Ed(i, c, f, u);
            }
            switch (a) {
              case 'input':
                af(i, o);
                break;
              case 'textarea':
                cy(i, o);
                break;
              case 'select':
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var m = o.value;
                m != null
                  ? wi(i, !!o.multiple, m, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? wi(i, !!o.multiple, o.defaultValue, !0)
                      : wi(i, !!o.multiple, o.multiple ? [] : '', !1));
            }
            i[Zo] = o;
          } catch (h) {
            be(e, e.return, h);
          }
      }
      break;
    case 6:
      if ((Yt(t, e), on(e), r & 4)) {
        if (e.stateNode === null) throw Error(j(162));
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
          Go(t.containerInfo);
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
            (ap = _e())),
        r & 4 && A0(e);
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
                  Oo(4, d, d.return);
                  break;
                case 1:
                  yi(d, d.return);
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
                  yi(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    O0(f);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), (V = m)) : O0(f);
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
                      (a.style.display = py('display', s)));
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
      Yt(t, e), on(e), r & 4 && A0(e);
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
          if (F1(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Ho(i, ''), (r.flags &= -33));
          var o = T0(e);
          Vf(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = T0(e);
          Uf(e, a, s);
          break;
        default:
          throw Error(j(161));
      }
    } catch (l) {
      be(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function K3(e, t, n) {
  (V = e), V1(e);
}
function V1(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var i = V,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || ca;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || Ke;
        a = ca;
        var u = Ke;
        if (((ca = s), (Ke = l) && !u))
          for (V = i; V !== null; )
            (s = V),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? $0(i)
                : l !== null
                ? ((l.return = s), (V = l))
                : $0(i);
        for (; o !== null; ) (V = o), V1(o), (o = o.sibling);
        (V = i), (ca = a), (Ke = u);
      }
      R0(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (V = o)) : R0(e);
  }
}
function R0(e) {
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
              Ke || eu(5, t);
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
              o !== null && m0(t, o, r);
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
                m0(t, s, n);
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
                    f !== null && Go(f);
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
              throw Error(j(163));
          }
        Ke || (t.flags & 512 && zf(t));
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
function O0(e) {
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
function $0(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            eu(4, t);
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
            zf(t);
          } catch (l) {
            be(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            zf(t);
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
var X3 = Math.ceil,
  ml = zn.ReactCurrentDispatcher,
  op = zn.ReactCurrentOwner,
  Lt = zn.ReactCurrentBatchConfig,
  ee = 0,
  De = null,
  Ae = null,
  He = 0,
  yt = 0,
  vi = pr(0),
  Ie = 0,
  is = null,
  zr = 0,
  tu = 0,
  sp = 0,
  $o = null,
  at = null,
  ap = 0,
  Li = 1 / 0,
  Sn = null,
  gl = !1,
  Hf = null,
  sr = null,
  fa = !1,
  Zn = null,
  yl = 0,
  Io = 0,
  Bf = null,
  ja = -1,
  La = 0;
function et() {
  return ee & 6 ? _e() : ja !== -1 ? ja : (ja = _e());
}
function ar(e) {
  return e.mode & 1
    ? ee & 2 && He !== 0
      ? He & -He
      : $3.transition !== null
      ? (La === 0 && (La = Py()), La)
      : ((e = se),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : $y(e.type))),
        e)
    : 1;
}
function tn(e, t, n, r) {
  if (50 < Io) throw ((Io = 0), (Bf = null), Error(j(185)));
  As(e, n, r),
    (!(ee & 2) || e !== De) &&
      (e === De && (!(ee & 2) && (tu |= n), Ie === 4 && Kn(e, He)),
      dt(e, r),
      n === 1 && ee === 0 && !(t.mode & 1) && ((Li = _e() + 500), ql && hr()));
}
function dt(e, t) {
  var n = e.callbackNode;
  $w(e, t);
  var r = el(e, e === De ? He : 0);
  if (r === 0)
    n !== null && Vh(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Vh(n), t === 1))
      e.tag === 0 ? O3(I0.bind(null, e)) : Zy(I0.bind(null, e)),
        E3(function () {
          !(ee & 6) && hr();
        }),
        (n = null);
    else {
      switch (My(r)) {
        case 1:
          n = $d;
          break;
        case 4:
          n = by;
          break;
        case 16:
          n = Ja;
          break;
        case 536870912:
          n = _y;
          break;
        default:
          n = Ja;
      }
      n = X1(n, H1.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function H1(e, t) {
  if (((ja = -1), (La = 0), ee & 6)) throw Error(j(327));
  var n = e.callbackNode;
  if (_i() && e.callbackNode !== n) return null;
  var r = el(e, e === De ? He : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = vl(e, r);
  else {
    t = r;
    var i = ee;
    ee |= 2;
    var o = W1();
    (De !== e || He !== t) && ((Sn = null), (Li = _e() + 500), $r(e, t));
    do
      try {
        J3();
        break;
      } catch (a) {
        B1(e, a);
      }
    while (!0);
    Yd(),
      (ml.current = o),
      (ee = i),
      Ae !== null ? (t = 0) : ((De = null), (He = 0), (t = Ie));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = yf(e)), i !== 0 && ((r = i), (t = Wf(e, i)))), t === 1)
    )
      throw ((n = is), $r(e, 0), Kn(e, r), dt(e, _e()), n);
    if (t === 6) Kn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !q3(i) &&
          ((t = vl(e, r)),
          t === 2 && ((o = yf(e)), o !== 0 && ((r = o), (t = Wf(e, o)))),
          t === 1))
      )
        throw ((n = is), $r(e, 0), Kn(e, r), dt(e, _e()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          Cr(e, at, Sn);
          break;
        case 3:
          if (
            (Kn(e, r), (r & 130023424) === r && ((t = ap + 500 - _e()), 10 < t))
          ) {
            if (el(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              et(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = _f(Cr.bind(null, e, at, Sn), t);
            break;
          }
          Cr(e, at, Sn);
          break;
        case 4:
          if ((Kn(e, r), (r & 4194240) === r)) break;
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
                : 1960 * X3(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = _f(Cr.bind(null, e, at, Sn), r);
            break;
          }
          Cr(e, at, Sn);
          break;
        case 5:
          Cr(e, at, Sn);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return dt(e, _e()), e.callbackNode === n ? H1.bind(null, e) : null;
}
function Wf(e, t) {
  var n = $o;
  return (
    e.current.memoizedState.isDehydrated && ($r(e, t).flags |= 256),
    (e = vl(e, t)),
    e !== 2 && ((t = at), (at = n), t !== null && Yf(t)),
    e
  );
}
function Yf(e) {
  at === null ? (at = e) : at.push.apply(at, e);
}
function q3(e) {
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
function Kn(e, t) {
  for (
    t &= ~sp,
      t &= ~tu,
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
function I0(e) {
  if (ee & 6) throw Error(j(327));
  _i();
  var t = el(e, 0);
  if (!(t & 1)) return dt(e, _e()), null;
  var n = vl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = yf(e);
    r !== 0 && ((t = r), (n = Wf(e, r)));
  }
  if (n === 1) throw ((n = is), $r(e, 0), Kn(e, t), dt(e, _e()), n);
  if (n === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Cr(e, at, Sn),
    dt(e, _e()),
    null
  );
}
function lp(e, t) {
  var n = ee;
  ee |= 1;
  try {
    return e(t);
  } finally {
    (ee = n), ee === 0 && ((Li = _e() + 500), ql && hr());
  }
}
function Ur(e) {
  Zn !== null && Zn.tag === 0 && !(ee & 6) && _i();
  var t = ee;
  ee |= 1;
  var n = Lt.transition,
    r = se;
  try {
    if (((Lt.transition = null), (se = 1), e)) return e();
  } finally {
    (se = r), (Lt.transition = n), (ee = t), !(ee & 6) && hr();
  }
}
function up() {
  (yt = vi.current), he(vi);
}
function $r(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), M3(n)), Ae !== null))
    for (n = Ae.return; n !== null; ) {
      var r = n;
      switch ((Hd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ol();
          break;
        case 3:
          Ni(), he(ct), he(Xe), Zd();
          break;
        case 5:
          qd(r);
          break;
        case 4:
          Ni();
          break;
        case 13:
          he(ve);
          break;
        case 19:
          he(ve);
          break;
        case 10:
          Gd(r.type._context);
          break;
        case 22:
        case 23:
          up();
      }
      n = n.return;
    }
  if (
    ((De = e),
    (Ae = e = lr(e.current, null)),
    (He = yt = t),
    (Ie = 0),
    (is = null),
    (sp = tu = zr = 0),
    (at = $o = null),
    Mr !== null)
  ) {
    for (t = 0; t < Mr.length; t++)
      if (((n = Mr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Mr = null;
  }
  return e;
}
function B1(e, t) {
  do {
    var n = Ae;
    try {
      if ((Yd(), ($a.current = hl), pl)) {
        for (var r = xe.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        pl = !1;
      }
      if (
        ((Fr = 0),
        (je = Oe = xe = null),
        (Ro = !1),
        (ts = 0),
        (op.current = null),
        n === null || n.return === null)
      ) {
        (Ie = 1), (is = t), (Ae = null);
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
          var m = S0(s);
          if (m !== null) {
            (m.flags &= -257),
              k0(m, s, a, o, t),
              m.mode & 1 && w0(o, u, t),
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
              w0(o, u, t), cp();
              break e;
            }
            l = Error(j(426));
          }
        } else if (ge && a.mode & 1) {
          var x = S0(s);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              k0(x, s, a, o, t),
              Bd(ji(l, a));
            break e;
          }
        }
        (o = l = ji(l, a)),
          Ie !== 4 && (Ie = 2),
          $o === null ? ($o = [o]) : $o.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = M1(o, l, t);
              h0(o, p);
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
                    (sr === null || !sr.has(v))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = E1(o, a, t);
                h0(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      G1(n);
    } catch (k) {
      (t = k), Ae === n && n !== null && (Ae = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function W1() {
  var e = ml.current;
  return (ml.current = hl), e === null ? hl : e;
}
function cp() {
  (Ie === 0 || Ie === 3 || Ie === 2) && (Ie = 4),
    De === null || (!(zr & 268435455) && !(tu & 268435455)) || Kn(De, He);
}
function vl(e, t) {
  var n = ee;
  ee |= 2;
  var r = W1();
  (De !== e || He !== t) && ((Sn = null), $r(e, t));
  do
    try {
      Z3();
      break;
    } catch (i) {
      B1(e, i);
    }
  while (!0);
  if ((Yd(), (ee = n), (ml.current = r), Ae !== null)) throw Error(j(261));
  return (De = null), (He = 0), Ie;
}
function Z3() {
  for (; Ae !== null; ) Y1(Ae);
}
function J3() {
  for (; Ae !== null && !bw(); ) Y1(Ae);
}
function Y1(e) {
  var t = K1(e.alternate, e, yt);
  (e.memoizedProps = e.pendingProps),
    t === null ? G1(e) : (Ae = t),
    (op.current = null);
}
function G1(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Y3(n, t)), n !== null)) {
        (n.flags &= 32767), (Ae = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ie = 6), (Ae = null);
        return;
      }
    } else if (((n = W3(n, t, yt)), n !== null)) {
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
function Cr(e, t, n) {
  var r = se,
    i = Lt.transition;
  try {
    (Lt.transition = null), (se = 1), eS(e, t, n, r);
  } finally {
    (Lt.transition = i), (se = r);
  }
  return null;
}
function eS(e, t, n, r) {
  do _i();
  while (Zn !== null);
  if (ee & 6) throw Error(j(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Iw(e, o),
    e === De && ((Ae = De = null), (He = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      fa ||
      ((fa = !0),
      X1(Ja, function () {
        return _i(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Lt.transition), (Lt.transition = null);
    var s = se;
    se = 1;
    var a = ee;
    (ee |= 4),
      (op.current = null),
      Q3(e, n),
      U1(n, e),
      w3(Cf),
      (tl = !!kf),
      (Cf = kf = null),
      (e.current = n),
      K3(n),
      _w(),
      (ee = a),
      (se = s),
      (Lt.transition = o);
  } else e.current = n;
  if (
    (fa && ((fa = !1), (Zn = e), (yl = i)),
    (o = e.pendingLanes),
    o === 0 && (sr = null),
    Ew(n.stateNode),
    dt(e, _e()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (gl) throw ((gl = !1), (e = Hf), (Hf = null), e);
  return (
    yl & 1 && e.tag !== 0 && _i(),
    (o = e.pendingLanes),
    o & 1 ? (e === Bf ? Io++ : ((Io = 0), (Bf = e))) : (Io = 0),
    hr(),
    null
  );
}
function _i() {
  if (Zn !== null) {
    var e = My(yl),
      t = Lt.transition,
      n = se;
    try {
      if (((Lt.transition = null), (se = 16 > e ? 16 : e), Zn === null))
        var r = !1;
      else {
        if (((e = Zn), (Zn = null), (yl = 0), ee & 6)) throw Error(j(331));
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
                      Oo(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (V = f);
                  else
                    for (; V !== null; ) {
                      c = V;
                      var d = c.sibling,
                        m = c.return;
                      if ((D1(c), c === u)) {
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
                    Oo(9, o, o.return);
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
                      eu(9, a);
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
          ((ee = i), hr(), dn && typeof dn.onPostCommitFiberRoot == 'function')
        )
          try {
            dn.onPostCommitFiberRoot(Yl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (se = n), (Lt.transition = t);
    }
  }
  return !1;
}
function N0(e, t, n) {
  (t = ji(n, t)),
    (t = M1(e, t, 1)),
    (e = or(e, t, 1)),
    (t = et()),
    e !== null && (As(e, 1, t), dt(e, t));
}
function be(e, t, n) {
  if (e.tag === 3) N0(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        N0(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (sr === null || !sr.has(r)))
        ) {
          (e = ji(n, e)),
            (e = E1(t, e, 1)),
            (t = or(t, e, 1)),
            (e = et()),
            t !== null && (As(t, 1, e), dt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function tS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = et()),
    (e.pingedLanes |= e.suspendedLanes & n),
    De === e &&
      (He & n) === n &&
      (Ie === 4 || (Ie === 3 && (He & 130023424) === He && 500 > _e() - ap)
        ? $r(e, 0)
        : (sp |= n)),
    dt(e, t);
}
function Q1(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ta), (ta <<= 1), !(ta & 130023424) && (ta = 4194304))
      : (t = 1));
  var n = et();
  (e = On(e, t)), e !== null && (As(e, t, n), dt(e, n));
}
function nS(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Q1(e, n);
}
function rS(e, t) {
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
      throw Error(j(314));
  }
  r !== null && r.delete(t), Q1(e, n);
}
var K1;
K1 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ct.current) lt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (lt = !1), B3(e, t, n);
      lt = !!(e.flags & 131072);
    }
  else (lt = !1), ge && t.flags & 1048576 && Jy(t, ll, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Na(e, t), (e = t.pendingProps);
      var i = Oi(t, Xe.current);
      bi(t, n), (i = ep(null, t, r, e, i, n));
      var o = tp();
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ft(r) ? ((o = !0), sl(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Kd(t),
            (i.updater = Jl),
            (t.stateNode = i),
            (i._reactInternals = t),
            Of(t, r, e, n),
            (t = Nf(null, t, r, !0, o, n)))
          : ((t.tag = 0), ge && o && Vd(t), Ze(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Na(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = oS(r)),
          (e = Gt(r, e)),
          i)
        ) {
          case 0:
            t = If(null, t, r, e, n);
            break e;
          case 1:
            t = _0(null, t, r, e, n);
            break e;
          case 11:
            t = C0(null, t, r, e, n);
            break e;
          case 14:
            t = b0(null, t, r, Gt(r.type, e), n);
            break e;
        }
        throw Error(j(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Gt(r, i)),
        If(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Gt(r, i)),
        _0(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((O1(t), e === null)) throw Error(j(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          o1(e, t),
          fl(t, r, null, n);
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
            (i = ji(Error(j(423)), t)), (t = P0(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = ji(Error(j(424)), t)), (t = P0(e, t, r, n, i));
            break e;
          } else
            for (
              xt = ir(t.stateNode.containerInfo.firstChild),
                wt = t,
                ge = !0,
                Xt = null,
                n = r1(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if (($i(), r === i)) {
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
        s1(t),
        e === null && Tf(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        bf(r, i) ? (s = null) : o !== null && bf(r, o) && (t.flags |= 32),
        R1(e, t),
        Ze(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Tf(t), null;
    case 13:
      return $1(e, t, n);
    case 4:
      return (
        Xd(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Ii(t, null, r, n)) : Ze(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Gt(r, i)),
        C0(e, t, r, i, n)
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
          de(ul, r._currentValue),
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
                      Af(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(j(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Af(s, n, t),
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
        bi(t, n),
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
        b0(e, t, r, i, n)
      );
    case 15:
      return T1(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Gt(r, i)),
        Na(e, t),
        (t.tag = 1),
        ft(r) ? ((e = !0), sl(t)) : (e = !1),
        bi(t, n),
        P1(t, r, i),
        Of(t, r, i, n),
        Nf(null, t, r, !0, e, n)
      );
    case 19:
      return I1(e, t, n);
    case 22:
      return A1(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function X1(e, t) {
  return Cy(e, t);
}
function iS(e, t, n, r) {
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
  return new iS(e, t, n, r);
}
function fp(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function oS(e) {
  if (typeof e == 'function') return fp(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ad)) return 11;
    if (e === Rd) return 14;
  }
  return 2;
}
function lr(e, t) {
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
function Da(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == 'function')) fp(e) && (s = 1);
  else if (typeof e == 'string') s = 5;
  else
    e: switch (e) {
      case li:
        return Ir(n.children, i, o, t);
      case Td:
        (s = 8), (i |= 8);
        break;
      case tf:
        return (
          (e = It(12, n, t, i | 2)), (e.elementType = tf), (e.lanes = o), e
        );
      case nf:
        return (e = It(13, n, t, i)), (e.elementType = nf), (e.lanes = o), e;
      case rf:
        return (e = It(19, n, t, i)), (e.elementType = rf), (e.lanes = o), e;
      case sy:
        return nu(n, i, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case iy:
              s = 10;
              break e;
            case oy:
              s = 9;
              break e;
            case Ad:
              s = 11;
              break e;
            case Rd:
              s = 14;
              break e;
            case Yn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = It(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Ir(e, t, n, r) {
  return (e = It(7, e, r, t)), (e.lanes = n), e;
}
function nu(e, t, n, r) {
  return (
    (e = It(22, e, r, t)),
    (e.elementType = sy),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Mc(e, t, n) {
  return (e = It(6, e, null, t)), (e.lanes = n), e;
}
function Ec(e, t, n) {
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
function sS(e, t, n, r, i) {
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
    (this.eventTimes = lc(0)),
    (this.expirationTimes = lc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = lc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function dp(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new sS(e, t, n, a, l)),
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
    Kd(o),
    e
  );
}
function aS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ai,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function q1(e) {
  if (!e) return fr;
  e = e._reactInternals;
  e: {
    if (Yr(e) !== e || e.tag !== 1) throw Error(j(170));
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
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ft(n)) return qy(e, n, t);
  }
  return t;
}
function Z1(e, t, n, r, i, o, s, a, l) {
  return (
    (e = dp(n, r, !0, e, i, o, s, a, l)),
    (e.context = q1(null)),
    (n = e.current),
    (r = et()),
    (i = ar(n)),
    (o = En(r, i)),
    (o.callback = t ?? null),
    or(n, o, i),
    (e.current.lanes = i),
    As(e, i, r),
    dt(e, r),
    e
  );
}
function ru(e, t, n, r) {
  var i = t.current,
    o = et(),
    s = ar(i);
  return (
    (n = q1(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = En(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = or(i, t, s)),
    e !== null && (tn(e, i, s, o), Oa(e, i, s)),
    s
  );
}
function xl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function j0(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function pp(e, t) {
  j0(e, t), (e = e.alternate) && j0(e, t);
}
function lS() {
  return null;
}
var J1 =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function hp(e) {
  this._internalRoot = e;
}
iu.prototype.render = hp.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  ru(e, t, null, null);
};
iu.prototype.unmount = hp.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ur(function () {
      ru(null, e, null, null);
    }),
      (t[Rn] = null);
  }
};
function iu(e) {
  this._internalRoot = e;
}
iu.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ay();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Qn.length && t !== 0 && t < Qn[n].priority; n++);
    Qn.splice(n, 0, e), n === 0 && Oy(e);
  }
};
function mp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ou(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function L0() {}
function uS(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var u = xl(s);
        o.call(u);
      };
    }
    var s = Z1(t, r, e, 0, null, !1, !1, '', L0);
    return (
      (e._reactRootContainer = s),
      (e[Rn] = s.current),
      Xo(e.nodeType === 8 ? e.parentNode : e),
      Ur(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var u = xl(l);
      a.call(u);
    };
  }
  var l = dp(e, 0, !1, null, null, !1, !1, '', L0);
  return (
    (e._reactRootContainer = l),
    (e[Rn] = l.current),
    Xo(e.nodeType === 8 ? e.parentNode : e),
    Ur(function () {
      ru(t, l, n, r);
    }),
    l
  );
}
function su(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == 'function') {
      var a = i;
      i = function () {
        var l = xl(s);
        a.call(l);
      };
    }
    ru(t, s, e, i);
  } else s = uS(n, t, e, i, r);
  return xl(s);
}
Ey = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Co(t.pendingLanes);
        n !== 0 &&
          (Id(t, n | 1), dt(t, _e()), !(ee & 6) && ((Li = _e() + 500), hr()));
      }
      break;
    case 13:
      Ur(function () {
        var r = On(e, 1);
        if (r !== null) {
          var i = et();
          tn(r, e, 1, i);
        }
      }),
        pp(e, 1);
  }
};
Nd = function (e) {
  if (e.tag === 13) {
    var t = On(e, 134217728);
    if (t !== null) {
      var n = et();
      tn(t, e, 134217728, n);
    }
    pp(e, 134217728);
  }
};
Ty = function (e) {
  if (e.tag === 13) {
    var t = ar(e),
      n = On(e, t);
    if (n !== null) {
      var r = et();
      tn(n, e, t, r);
    }
    pp(e, t);
  }
};
Ay = function () {
  return se;
};
Ry = function (e, t) {
  var n = se;
  try {
    return (se = e), t();
  } finally {
    se = n;
  }
};
hf = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((af(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
            var i = Xl(r);
            if (!i) throw Error(j(90));
            ly(r), af(r, i);
          }
        }
      }
      break;
    case 'textarea':
      cy(e, n);
      break;
    case 'select':
      (t = n.value), t != null && wi(e, !!n.multiple, t, !1);
  }
};
yy = lp;
vy = Ur;
var cS = { usingClientEntryPoint: !1, Events: [Os, di, Xl, my, gy, lp] },
  co = {
    findFiberByHostInstance: Pr,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  fS = {
    bundleType: co.bundleType,
    version: co.version,
    rendererPackageName: co.rendererPackageName,
    rendererConfig: co.rendererConfig,
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
      return (e = Sy(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: co.findFiberByHostInstance || lS,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var da = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!da.isDisabled && da.supportsFiber)
    try {
      (Yl = da.inject(fS)), (dn = da);
    } catch {}
}
_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cS;
_t.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!mp(t)) throw Error(j(200));
  return aS(e, t, null, n);
};
_t.createRoot = function (e, t) {
  if (!mp(e)) throw Error(j(299));
  var n = !1,
    r = '',
    i = J1;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = dp(e, 1, !1, null, null, n, !1, r, i)),
    (e[Rn] = t.current),
    Xo(e.nodeType === 8 ? e.parentNode : e),
    new hp(t)
  );
};
_t.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(j(188))
      : ((e = Object.keys(e).join(',')), Error(j(268, e)));
  return (e = Sy(t)), (e = e === null ? null : e.stateNode), e;
};
_t.flushSync = function (e) {
  return Ur(e);
};
_t.hydrate = function (e, t, n) {
  if (!ou(t)) throw Error(j(200));
  return su(null, e, t, !0, n);
};
_t.hydrateRoot = function (e, t, n) {
  if (!mp(e)) throw Error(j(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = '',
    s = J1;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Z1(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[Rn] = t.current),
    Xo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new iu(t);
};
_t.render = function (e, t, n) {
  if (!ou(t)) throw Error(j(200));
  return su(null, e, t, !1, n);
};
_t.unmountComponentAtNode = function (e) {
  if (!ou(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (Ur(function () {
        su(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Rn] = null);
        });
      }),
      !0)
    : !1;
};
_t.unstable_batchedUpdates = lp;
_t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ou(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return su(e, t, n, !1, r);
};
_t.version = '18.3.1-next-f1338f8080-20240426';
function ev() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ev);
    } catch (e) {
      console.error(e);
    }
}
ev(), (ey.exports = _t);
var gp = ey.exports,
  D0 = gp;
(Jc.createRoot = D0.createRoot), (Jc.hydrateRoot = D0.hydrateRoot);
const dS = '_container_1snv6_1',
  pS = '_landing_1snv6_19',
  hS = '_header_1snv6_36',
  mS = '_subheader_1snv6_48',
  gS = '_buttons_1snv6_65',
  yS = '_button_1snv6_65',
  vS = '_stats_1snv6_110',
  xS = '_stats_header_1snv6_126',
  wS = '_accent_number_1snv6_132',
  SS = '_chart_1snv6_141',
  kS = '_chart_header_1snv6_152',
  rt = {
    container: dS,
    landing: pS,
    header: hS,
    subheader: mS,
    buttons: gS,
    button: yS,
    stats: vS,
    stats_header: xS,
    accent_number: wS,
    chart: SS,
    chart_header: kS,
  },
  CS = './website/dist/assets/cool-Bo-Drqd6.png',
  bS =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%209.00005L10.2%2013.65C11.2667%2014.45%2012.7333%2014.45%2013.8%2013.65L20%209'%20stroke='%23fafafa'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M3%209.17681C3%208.45047%203.39378%207.78123%204.02871%207.42849L11.0287%203.5396C11.6328%203.20402%2012.3672%203.20402%2012.9713%203.5396L19.9713%207.42849C20.6062%207.78123%2021%208.45047%2021%209.17681V17C21%2018.1046%2020.1046%2019%2019%2019H5C3.89543%2019%203%2018.1046%203%2017V9.17681Z'%20stroke='%23fafafa'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e";
var yp = {},
  wl = function () {
    return (
      (wl =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }),
      wl.apply(this, arguments)
    );
  },
  _S = (function () {
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
        (this.options = wl(wl({}, this.defaults), r)),
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
const PS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, CountUp: _S },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  MS = Fn(PS);
Object.defineProperty(yp, '__esModule', { value: !0 });
var Le = P,
  ES = MS;
function TS(e, t) {
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
function F0(e, t) {
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
function Sl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? F0(Object(n), !0).forEach(function (r) {
          OS(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : F0(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function AS(e, t) {
  if (typeof e != 'object' || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || 'default');
    if (typeof r != 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function RS(e) {
  var t = AS(e, 'string');
  return typeof t == 'symbol' ? t : String(t);
}
function OS(e, t, n) {
  return (
    (t = RS(t)),
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
function Gf() {
  return (
    (Gf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Gf.apply(this, arguments)
  );
}
function $S(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function tv(e, t) {
  if (e == null) return {};
  var n = $S(e, t),
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
function IS(e, t) {
  return NS(e) || TS(e, t) || jS(e, t) || LS();
}
function NS(e) {
  if (Array.isArray(e)) return e;
}
function jS(e, t) {
  if (e) {
    if (typeof e == 'string') return z0(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return z0(e, t);
  }
}
function z0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function LS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var DS =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u'
    ? Le.useLayoutEffect
    : Le.useEffect;
function Qt(e) {
  var t = Le.useRef(e);
  return (
    DS(function () {
      t.current = e;
    }),
    Le.useCallback(function () {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return t.current.apply(void 0, r);
    }, [])
  );
}
var FS = function (t, n) {
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
    return new ES.CountUp(t, a, {
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
  zS = [
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
  US = {
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
  nv = function (t) {
    var n = Object.fromEntries(
        Object.entries(t).filter(function (A) {
          var T = IS(A, 2),
            E = T[1];
          return E !== void 0;
        })
      ),
      r = Le.useMemo(
        function () {
          return Sl(Sl({}, US), n);
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
      m = tv(r, zS),
      y = Le.useRef(),
      h = Le.useRef(),
      x = Le.useRef(!1),
      p = Qt(function () {
        return FS(typeof i == 'string' ? i : i.current, m);
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
      Le.useEffect(
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
      Le.useEffect(
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
  VS = ['className', 'redraw', 'containerProps', 'children', 'style'],
  HS = function (t) {
    var n = t.className,
      r = t.redraw,
      i = t.containerProps,
      o = t.children,
      s = t.style,
      a = tv(t, VS),
      l = Le.useRef(null),
      u = Le.useRef(!1),
      c = nv(
        Sl(
          Sl({}, a),
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
    Le.useEffect(
      function () {
        g();
      },
      [g]
    ),
      Le.useEffect(
        function () {
          u.current && p(t.end);
        },
        [t.end, p]
      );
    var v = r && t;
    return (
      Le.useEffect(
        function () {
          r && u.current && x();
        },
        [x, r, v]
      ),
      Le.useEffect(
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
      Le.useEffect(function () {
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
        : Le.createElement(
            'span',
            Gf({ className: n, ref: l, style: s }, i),
            typeof t.start < 'u' ? h().formattingFn(t.start) : ''
          )
    );
  },
  U0 = (yp.default = HS);
yp.useCountUp = nv;
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
let V0 = 0;
function BS(e) {
  const [t, n] = P.useState(e),
    r = t;
  return (
    P.useEffect(() => {
      t == null && ((V0 += 1), n(`mui-${V0}`));
    }, [t]),
    r
  );
}
const H0 = Zc.useId;
function WS(e) {
  return H0 !== void 0 ? H0() : BS(e);
}
const rv = 'DEFAULT_X_AXIS_KEY',
  YS = 'DEFAULT_Y_AXIS_KEY',
  GS = { top: 50, bottom: 50, left: 50, right: 50 },
  QS = (e, t, n) => {
    const r = _({}, GS, n);
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
  au = P.createContext({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 300,
    width: 400,
    chartId: '',
    isPointInside: () => !1,
  }),
  iv = P.createContext({ isInitialized: !1, data: { current: null } });
function KS(e) {
  const { width: t, height: n, margin: r, svgRef: i, children: o } = e,
    s = QS(t, n, r),
    a = WS(),
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
  return b.jsx(iv.Provider, {
    value: c,
    children: b.jsx(au.Provider, { value: u, children: o }),
  });
}
function os(e) {
  let t = 'https://mui.com/production-error/?code=' + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return 'Minified MUI error #' + e + '; visit ' + t + ' for the full message.';
}
const XS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: os },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  vp = '$$material';
function ov(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var qS =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  ZS = ov(function (e) {
    return (
      qS.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  JS = !1;
function ek(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function tk(e) {
  var t = document.createElement('style');
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  );
}
var nk = (function () {
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
        (this.isSpeedy = n.speedy === void 0 ? !JS : n.speedy),
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
          this._insertTag(tk(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = ek(i);
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
  kl = '-moz-',
  ne = '-webkit-',
  sv = 'comm',
  xp = 'rule',
  wp = 'decl',
  rk = '@import',
  av = '@keyframes',
  ik = '@layer',
  ok = Math.abs,
  lu = String.fromCharCode,
  sk = Object.assign;
function ak(e, t) {
  return Ve(e, 0) ^ 45
    ? (((((((t << 2) ^ Ve(e, 0)) << 2) ^ Ve(e, 1)) << 2) ^ Ve(e, 2)) << 2) ^
        Ve(e, 3)
    : 0;
}
function lv(e) {
  return e.trim();
}
function lk(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function re(e, t, n) {
  return e.replace(t, n);
}
function Qf(e, t) {
  return e.indexOf(t);
}
function Ve(e, t) {
  return e.charCodeAt(t) | 0;
}
function ss(e, t, n) {
  return e.slice(t, n);
}
function un(e) {
  return e.length;
}
function Sp(e) {
  return e.length;
}
function pa(e, t) {
  return t.push(e), e;
}
function uk(e, t) {
  return e.map(t).join('');
}
var uu = 1,
  Di = 1,
  uv = 0,
  mt = 0,
  Te = 0,
  Zi = '';
function cu(e, t, n, r, i, o, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: o,
    line: uu,
    column: Di,
    length: s,
    return: '',
  };
}
function fo(e, t) {
  return sk(cu('', null, null, '', null, null, 0), e, { length: -e.length }, t);
}
function ck() {
  return Te;
}
function fk() {
  return (
    (Te = mt > 0 ? Ve(Zi, --mt) : 0), Di--, Te === 10 && ((Di = 1), uu--), Te
  );
}
function St() {
  return (
    (Te = mt < uv ? Ve(Zi, mt++) : 0), Di++, Te === 10 && ((Di = 1), uu++), Te
  );
}
function hn() {
  return Ve(Zi, mt);
}
function Fa() {
  return mt;
}
function Is(e, t) {
  return ss(Zi, e, t);
}
function as(e) {
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
function cv(e) {
  return (uu = Di = 1), (uv = un((Zi = e))), (mt = 0), [];
}
function fv(e) {
  return (Zi = ''), e;
}
function za(e) {
  return lv(Is(mt - 1, Kf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function dk(e) {
  for (; (Te = hn()) && Te < 33; ) St();
  return as(e) > 2 || as(Te) > 3 ? '' : ' ';
}
function pk(e, t) {
  for (
    ;
    --t &&
    St() &&
    !(Te < 48 || Te > 102 || (Te > 57 && Te < 65) || (Te > 70 && Te < 97));

  );
  return Is(e, Fa() + (t < 6 && hn() == 32 && St() == 32));
}
function Kf(e) {
  for (; St(); )
    switch (Te) {
      case e:
        return mt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Kf(Te);
        break;
      case 40:
        e === 41 && Kf(e);
        break;
      case 92:
        St();
        break;
    }
  return mt;
}
function hk(e, t) {
  for (; St() && e + Te !== 57; ) if (e + Te === 84 && hn() === 47) break;
  return '/*' + Is(t, mt - 1) + '*' + lu(e === 47 ? e : St());
}
function mk(e) {
  for (; !as(hn()); ) St();
  return Is(e, mt);
}
function gk(e) {
  return fv(Ua('', null, null, null, [''], (e = cv(e)), 0, [0], e));
}
function Ua(e, t, n, r, i, o, s, a, l) {
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
          Qf((C += re(za(g), '&', '&\f')), '&\f') != -1 && (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += za(g);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += dk(y);
        break;
      case 92:
        C += pk(Fa() - 1, 7);
        continue;
      case 47:
        switch (hn()) {
          case 42:
          case 47:
            pa(yk(hk(St(), Fa()), t, n), l);
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
                pa(
                  m > 32
                    ? W0(C + ';', r, n, f - 1)
                    : W0(re(C, ' ', '') + ';', r, n, f - 2),
                  l
                );
            break;
          case 59:
            C += ';';
          default:
            if (
              (pa((S = B0(C, t, n, u, c, i, a, v, (w = []), (k = []), f)), o),
              g === 123)
            )
              if (c === 0) Ua(C, t, S, S, w, o, f, a, k);
              else
                switch (d === 99 && Ve(C, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ua(
                      e,
                      S,
                      S,
                      r && pa(B0(e, S, S, 0, 0, i, a, v, i, (w = []), f), k),
                      i,
                      k,
                      f,
                      a,
                      r ? w : k
                    );
                    break;
                  default:
                    Ua(C, S, S, S, [''], k, 0, a, k);
                }
        }
        (u = c = m = 0), (h = p = 1), (v = C = ''), (f = s);
        break;
      case 58:
        (f = 1 + un(C)), (m = y);
      default:
        if (h < 1) {
          if (g == 123) --h;
          else if (g == 125 && h++ == 0 && fk() == 125) continue;
        }
        switch (((C += lu(g)), g * h)) {
          case 38:
            p = c > 0 ? 1 : ((C += '\f'), -1);
            break;
          case 44:
            (a[u++] = (un(C) - 1) * p), (p = 1);
            break;
          case 64:
            hn() === 45 && (C += za(St())),
              (d = hn()),
              (c = f = un((v = C += mk(Fa())))),
              g++;
            break;
          case 45:
            y === 45 && un(C) == 2 && (h = 0);
        }
    }
  return o;
}
function B0(e, t, n, r, i, o, s, a, l, u, c) {
  for (
    var f = i - 1, d = i === 0 ? o : [''], m = Sp(d), y = 0, h = 0, x = 0;
    y < r;
    ++y
  )
    for (var p = 0, g = ss(e, f + 1, (f = ok((h = s[y])))), v = e; p < m; ++p)
      (v = lv(h > 0 ? d[p] + ' ' + g : re(g, /&\f/g, d[p]))) && (l[x++] = v);
  return cu(e, t, n, i === 0 ? xp : a, l, u, c);
}
function yk(e, t, n) {
  return cu(e, t, n, sv, lu(ck()), ss(e, 2, -2), 0);
}
function W0(e, t, n, r) {
  return cu(e, t, n, wp, ss(e, 0, r), ss(e, r + 1, -1), r);
}
function Pi(e, t) {
  for (var n = '', r = Sp(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || '';
  return n;
}
function vk(e, t, n, r) {
  switch (e.type) {
    case ik:
      if (e.children.length) break;
    case rk:
    case wp:
      return (e.return = e.return || e.value);
    case sv:
      return '';
    case av:
      return (e.return = e.value + '{' + Pi(e.children, r) + '}');
    case xp:
      e.value = e.props.join(',');
  }
  return un((n = Pi(e.children, r)))
    ? (e.return = e.value + '{' + n + '}')
    : '';
}
function xk(e) {
  var t = Sp(e);
  return function (n, r, i, o) {
    for (var s = '', a = 0; a < t; a++) s += e[a](n, r, i, o) || '';
    return s;
  };
}
function wk(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var Sk = function (t, n, r) {
    for (
      var i = 0, o = 0;
      (i = o), (o = hn()), i === 38 && o === 12 && (n[r] = 1), !as(o);

    )
      St();
    return Is(t, mt);
  },
  kk = function (t, n) {
    var r = -1,
      i = 44;
    do
      switch (as(i)) {
        case 0:
          i === 38 && hn() === 12 && (n[r] = 1), (t[r] += Sk(mt - 1, n, r));
          break;
        case 2:
          t[r] += za(i);
          break;
        case 4:
          if (i === 44) {
            (t[++r] = hn() === 58 ? '&\f' : ''), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += lu(i);
      }
    while ((i = St()));
    return t;
  },
  Ck = function (t, n) {
    return fv(kk(cv(t), n));
  },
  Y0 = new WeakMap(),
  bk = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          i = t.column === r.column && t.line === r.line;
        r.type !== 'rule';

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Y0.get(r)) &&
        !i
      ) {
        Y0.set(t, !0);
        for (
          var o = [], s = Ck(n, o), a = r.props, l = 0, u = 0;
          l < s.length;
          l++
        )
          for (var c = 0; c < a.length; c++, u++)
            t.props[u] = o[l] ? s[l].replace(/&\f/g, a[c]) : a[c] + ' ' + s[l];
      }
    }
  },
  _k = function (t) {
    if (t.type === 'decl') {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ''), (t.value = ''));
    }
  };
function dv(e, t) {
  switch (ak(e, t)) {
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
      return ne + e + kl + e + Qe + e + e;
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
                  kl +
                  (Ve(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            );
          case 115:
            return ~Qf(e, 'stretch')
              ? dv(re(e, 'stretch', 'fill-available'), t) + e
              : e;
        }
      break;
    case 4949:
      if (Ve(e, t + 1) !== 115) break;
    case 6444:
      switch (Ve(e, un(e) - 3 - (~Qf(e, '!important') && 10))) {
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
var Pk = function (t, n, r, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case wp:
          t.return = dv(t.value, t.length);
          break;
        case av:
          return Pi([fo(t, { value: re(t.value, '@', '@' + ne) })], i);
        case xp:
          if (t.length)
            return uk(t.props, function (o) {
              switch (lk(o, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return Pi(
                    [fo(t, { props: [re(o, /:(read-\w+)/, ':' + kl + '$1')] })],
                    i
                  );
                case '::placeholder':
                  return Pi(
                    [
                      fo(t, {
                        props: [re(o, /:(plac\w+)/, ':' + ne + 'input-$1')],
                      }),
                      fo(t, { props: [re(o, /:(plac\w+)/, ':' + kl + '$1')] }),
                      fo(t, { props: [re(o, /:(plac\w+)/, Qe + 'input-$1')] }),
                    ],
                    i
                  );
              }
              return '';
            });
      }
  },
  Mk = [Pk],
  pv = function (t) {
    var n = t.key;
    if (n === 'css') {
      var r = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(r, function (h) {
        var x = h.getAttribute('data-emotion');
        x.indexOf(' ') !== -1 &&
          (document.head.appendChild(h), h.setAttribute('data-s', ''));
      });
    }
    var i = t.stylisPlugins || Mk,
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
      u = [bk, _k];
    {
      var c,
        f = [
          vk,
          wk(function (h) {
            c.insert(h);
          }),
        ],
        d = xk(u.concat(i, f)),
        m = function (x) {
          return Pi(gk(x), d);
        };
      l = function (x, p, g, v) {
        (c = g),
          m(x ? x + '{' + p.styles + '}' : p.styles),
          v && (y.inserted[p.name] = !0);
      };
    }
    var y = {
      key: n,
      sheet: new nk({
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
  hv = { exports: {} },
  ae = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fe = typeof Symbol == 'function' && Symbol.for,
  kp = Fe ? Symbol.for('react.element') : 60103,
  Cp = Fe ? Symbol.for('react.portal') : 60106,
  fu = Fe ? Symbol.for('react.fragment') : 60107,
  du = Fe ? Symbol.for('react.strict_mode') : 60108,
  pu = Fe ? Symbol.for('react.profiler') : 60114,
  hu = Fe ? Symbol.for('react.provider') : 60109,
  mu = Fe ? Symbol.for('react.context') : 60110,
  bp = Fe ? Symbol.for('react.async_mode') : 60111,
  gu = Fe ? Symbol.for('react.concurrent_mode') : 60111,
  yu = Fe ? Symbol.for('react.forward_ref') : 60112,
  vu = Fe ? Symbol.for('react.suspense') : 60113,
  Ek = Fe ? Symbol.for('react.suspense_list') : 60120,
  xu = Fe ? Symbol.for('react.memo') : 60115,
  wu = Fe ? Symbol.for('react.lazy') : 60116,
  Tk = Fe ? Symbol.for('react.block') : 60121,
  Ak = Fe ? Symbol.for('react.fundamental') : 60117,
  Rk = Fe ? Symbol.for('react.responder') : 60118,
  Ok = Fe ? Symbol.for('react.scope') : 60119;
function Mt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case kp:
        switch (((e = e.type), e)) {
          case bp:
          case gu:
          case fu:
          case pu:
          case du:
          case vu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case mu:
              case yu:
              case wu:
              case xu:
              case hu:
                return e;
              default:
                return t;
            }
        }
      case Cp:
        return t;
    }
  }
}
function mv(e) {
  return Mt(e) === gu;
}
ae.AsyncMode = bp;
ae.ConcurrentMode = gu;
ae.ContextConsumer = mu;
ae.ContextProvider = hu;
ae.Element = kp;
ae.ForwardRef = yu;
ae.Fragment = fu;
ae.Lazy = wu;
ae.Memo = xu;
ae.Portal = Cp;
ae.Profiler = pu;
ae.StrictMode = du;
ae.Suspense = vu;
ae.isAsyncMode = function (e) {
  return mv(e) || Mt(e) === bp;
};
ae.isConcurrentMode = mv;
ae.isContextConsumer = function (e) {
  return Mt(e) === mu;
};
ae.isContextProvider = function (e) {
  return Mt(e) === hu;
};
ae.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === kp;
};
ae.isForwardRef = function (e) {
  return Mt(e) === yu;
};
ae.isFragment = function (e) {
  return Mt(e) === fu;
};
ae.isLazy = function (e) {
  return Mt(e) === wu;
};
ae.isMemo = function (e) {
  return Mt(e) === xu;
};
ae.isPortal = function (e) {
  return Mt(e) === Cp;
};
ae.isProfiler = function (e) {
  return Mt(e) === pu;
};
ae.isStrictMode = function (e) {
  return Mt(e) === du;
};
ae.isSuspense = function (e) {
  return Mt(e) === vu;
};
ae.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === fu ||
    e === gu ||
    e === pu ||
    e === du ||
    e === vu ||
    e === Ek ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === wu ||
        e.$$typeof === xu ||
        e.$$typeof === hu ||
        e.$$typeof === mu ||
        e.$$typeof === yu ||
        e.$$typeof === Ak ||
        e.$$typeof === Rk ||
        e.$$typeof === Ok ||
        e.$$typeof === Tk))
  );
};
ae.typeOf = Mt;
hv.exports = ae;
var $k = hv.exports,
  gv = $k,
  Ik = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Nk = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  yv = {};
yv[gv.ForwardRef] = Ik;
yv[gv.Memo] = Nk;
var jk = !0;
function Lk(e, t, n) {
  var r = '';
  return (
    n.split(' ').forEach(function (i) {
      e[i] !== void 0 ? t.push(e[i] + ';') : (r += i + ' ');
    }),
    r
  );
}
var vv = function (t, n, r) {
    var i = t.key + '-' + n.name;
    (r === !1 || jk === !1) &&
      t.registered[i] === void 0 &&
      (t.registered[i] = n.styles);
  },
  xv = function (t, n, r) {
    vv(t, n, r);
    var i = t.key + '-' + n.name;
    if (t.inserted[n.name] === void 0) {
      var o = n;
      do t.insert(n === o ? '.' + i : '', o, t.sheet, !0), (o = o.next);
      while (o !== void 0);
    }
  };
function Dk(e) {
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
var Fk = {
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
  zk = !1,
  Uk = /[A-Z]|^ms/g,
  Vk = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  wv = function (t) {
    return t.charCodeAt(1) === 45;
  },
  G0 = function (t) {
    return t != null && typeof t != 'boolean';
  },
  Tc = ov(function (e) {
    return wv(e) ? e : e.replace(Uk, '-$&').toLowerCase();
  }),
  Q0 = function (t, n) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof n == 'string')
          return n.replace(Vk, function (r, i, o) {
            return (cn = { name: i, styles: o, next: cn }), i;
          });
    }
    return Fk[t] !== 1 && !wv(t) && typeof n == 'number' && n !== 0
      ? n + 'px'
      : n;
  },
  Hk =
    'Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.';
function ls(e, t, n) {
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
      return Bk(e, t, n);
    }
    case 'function': {
      if (e !== void 0) {
        var l = cn,
          u = n(e);
        return (cn = l), ls(e, t, u);
      }
      break;
    }
  }
  var c = n;
  if (t == null) return c;
  var f = t[c];
  return f !== void 0 ? f : c;
}
function Bk(e, t, n) {
  var r = '';
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++) r += ls(e, t, n[i]) + ';';
  else
    for (var o in n) {
      var s = n[o];
      if (typeof s != 'object') {
        var a = s;
        t != null && t[a] !== void 0
          ? (r += o + '{' + t[a] + '}')
          : G0(a) && (r += Tc(o) + ':' + Q0(o, a) + ';');
      } else {
        if (o === 'NO_COMPONENT_SELECTOR' && zk) throw new Error(Hk);
        if (
          Array.isArray(s) &&
          typeof s[0] == 'string' &&
          (t == null || t[s[0]] === void 0)
        )
          for (var l = 0; l < s.length; l++)
            G0(s[l]) && (r += Tc(o) + ':' + Q0(o, s[l]) + ';');
        else {
          var u = ls(e, t, s);
          switch (o) {
            case 'animation':
            case 'animationName': {
              r += Tc(o) + ':' + u + ';';
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
var K0 = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  cn;
function _p(e, t, n) {
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
  if (o == null || o.raw === void 0) (r = !1), (i += ls(n, t, o));
  else {
    var s = o;
    i += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (((i += ls(n, t, e[a])), r)) {
      var l = o;
      i += l[a];
    }
  K0.lastIndex = 0;
  for (var u = '', c; (c = K0.exec(i)) !== null; ) u += '-' + c[1];
  var f = Dk(i) + u;
  return { name: f, styles: i, next: cn };
}
var Wk = function (t) {
    return t();
  },
  Sv = Zc.useInsertionEffect ? Zc.useInsertionEffect : !1,
  Yk = Sv || Wk,
  X0 = Sv || P.useLayoutEffect,
  kv = P.createContext(typeof HTMLElement < 'u' ? pv({ key: 'css' }) : null),
  Gk = kv.Provider,
  Cv = function (t) {
    return P.forwardRef(function (n, r) {
      var i = P.useContext(kv);
      return t(n, i, r);
    });
  },
  Su = P.createContext({}),
  Ac = { exports: {} },
  q0;
function bv() {
  return (
    q0 ||
      ((q0 = 1),
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
      })(Ac)),
    Ac.exports
  );
}
bv();
var Qk = Cv(function (e, t) {
  var n = e.styles,
    r = _p([n], void 0, P.useContext(Su)),
    i = P.useRef();
  return (
    X0(
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
    X0(
      function () {
        var o = i.current,
          s = o[0],
          a = o[1];
        if (a) {
          o[1] = !1;
          return;
        }
        if ((r.next !== void 0 && xv(t, r.next, !0), s.tags.length)) {
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
function _v() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return _p(t);
}
var Kk = function () {
    var t = _v.apply(void 0, arguments),
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
  Xk = ZS,
  qk = function (t) {
    return t !== 'theme';
  },
  Z0 = function (t) {
    return typeof t == 'string' && t.charCodeAt(0) > 96 ? Xk : qk;
  },
  J0 = function (t, n, r) {
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
  Zk = !1,
  Jk = function (t) {
    var n = t.cache,
      r = t.serialized,
      i = t.isStringTag;
    return (
      vv(n, r, i),
      Yk(function () {
        return xv(n, r, i);
      }),
      null
    );
  },
  eC = function e(t, n) {
    var r = t.__emotion_real === t,
      i = (r && t.__emotion_base) || t,
      o,
      s;
    n !== void 0 && ((o = n.label), (s = n.target));
    var a = J0(t, n, r),
      l = a || Z0(i),
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
      var y = Cv(function (h, x, p) {
        var g = (u && h.as) || i,
          v = '',
          w = [],
          k = h;
        if (h.theme == null) {
          k = {};
          for (var S in h) k[S] = h[S];
          k.theme = P.useContext(Su);
        }
        typeof h.className == 'string'
          ? (v = Lk(x.registered, w, h.className))
          : h.className != null && (v = h.className + ' ');
        var C = _p(f.concat(w), x.registered, k);
        (v += x.key + '-' + C.name), s !== void 0 && (v += ' ' + s);
        var M = u && a === void 0 ? Z0(g) : l,
          A = {};
        for (var T in h) (u && T === 'as') || (M(T) && (A[T] = h[T]));
        return (
          (A.className = v),
          p && (A.ref = p),
          P.createElement(
            P.Fragment,
            null,
            P.createElement(Jk, {
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
            return s === void 0 && Zk ? 'NO_COMPONENT_SELECTOR' : '.' + s;
          },
        }),
        (y.withComponent = function (h, x) {
          return e(h, _({}, n, x, { shouldForwardProp: J0(y, x, !0) })).apply(
            void 0,
            f
          );
        }),
        y
      );
    };
  },
  tC = [
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
  Xf = eC.bind();
tC.forEach(function (e) {
  Xf[e] = Xf(e);
});
let qf;
typeof document == 'object' && (qf = pv({ key: 'css', prepend: !0 }));
function nC(e) {
  const { injectFirst: t, children: n } = e;
  return t && qf ? b.jsx(Gk, { value: qf, children: n }) : n;
}
function rC(e) {
  return e == null || Object.keys(e).length === 0;
}
function iC(e) {
  const { styles: t, defaultTheme: n = {} } = e,
    r = typeof t == 'function' ? (i) => t(rC(i) ? n : i) : t;
  return b.jsx(Qk, { styles: r });
}
function oC(e, t) {
  return Xf(e, t);
}
const sC = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  aC = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        GlobalStyles: iC,
        StyledEngineProvider: nC,
        ThemeContext: Su,
        css: _v,
        default: oC,
        internal_processStyles: sC,
        keyframes: Kk,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
function Xn(e) {
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
function Pv(e) {
  if (!Xn(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = Pv(e[n]);
    }),
    t
  );
}
function mn(e, t, n = { clone: !0 }) {
  const r = n.clone ? _({}, e) : e;
  return (
    Xn(e) &&
      Xn(t) &&
      Object.keys(t).forEach((i) => {
        Xn(t[i]) && Object.prototype.hasOwnProperty.call(e, i) && Xn(e[i])
          ? (r[i] = mn(e[i], t[i], n))
          : n.clone
          ? (r[i] = Xn(t[i]) ? Pv(t[i]) : t[i])
          : (r[i] = t[i]);
      }),
    r
  );
}
const lC = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: mn, isPlainObject: Xn },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  uC = ['values', 'unit', 'step'],
  cC = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => _({}, n, { [r.key]: r.val }), {})
    );
  };
function Mv(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = 'px',
      step: r = 5,
    } = e,
    i = ie(e, uC),
    o = cC(t),
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
const fC = { borderRadius: 4 };
function No(e, t) {
  return t ? mn(e, t, { clone: !1 }) : e;
}
const Pp = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  em = {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: (e) => `@media (min-width:${Pp[e]}px)`,
  };
function In(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const o = r.breakpoints || em;
    return t.reduce((s, a, l) => ((s[o.up(o.keys[l])] = n(t[l])), s), {});
  }
  if (typeof t == 'object') {
    const o = r.breakpoints || em;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(o.values || Pp).indexOf(a) !== -1) {
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
function dC(e = {}) {
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
function pC(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function Ns(e) {
  if (typeof e != 'string') throw new Error(os(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const hC = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Ns }, Symbol.toStringTag, {
    value: 'Module',
  })
);
function ku(e, t, n = !0) {
  if (!t || typeof t != 'string') return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split('.')
      .reduce((i, o) => (i && i[o] ? i[o] : null), e);
    if (r != null) return r;
  }
  return t.split('.').reduce((r, i) => (r && r[i] != null ? r[i] : null), e);
}
function Cl(e, t, n, r = n) {
  let i;
  return (
    typeof e == 'function'
      ? (i = e(n))
      : Array.isArray(e)
      ? (i = e[n] || r)
      : (i = ku(e, n) || r),
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
        u = ku(l, r) || {};
      return In(s, a, (f) => {
        let d = Cl(u, i, f);
        return (
          f === d &&
            typeof f == 'string' &&
            (d = Cl(u, i, `${t}${f === 'default' ? '' : Ns(f)}`, f)),
          n === !1 ? d : { [n]: d }
        );
      });
    };
  return (o.propTypes = {}), (o.filterProps = [t]), o;
}
function mC(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const gC = { m: 'margin', p: 'padding' },
  yC = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom'],
  },
  tm = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  vC = mC((e) => {
    if (e.length > 2)
      if (tm[e]) e = tm[e];
      else return [e];
    const [t, n] = e.split(''),
      r = gC[t],
      i = yC[n] || '';
    return Array.isArray(i) ? i.map((o) => r + o) : [r + i];
  }),
  Mp = [
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
  Ep = [
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
[...Mp, ...Ep];
function js(e, t, n, r) {
  var i;
  const o = (i = ku(e, t, !1)) != null ? i : n;
  return typeof o == 'number'
    ? (s) => (typeof s == 'string' ? s : o * s)
    : Array.isArray(o)
    ? (s) => (typeof s == 'string' ? s : o[s])
    : typeof o == 'function'
    ? o
    : () => {};
}
function Ev(e) {
  return js(e, 'spacing', 8);
}
function Ls(e, t) {
  if (typeof t == 'string' || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == 'number' ? -r : `-${r}`;
}
function xC(e, t) {
  return (n) => e.reduce((r, i) => ((r[i] = Ls(t, n)), r), {});
}
function wC(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const i = vC(n),
    o = xC(i, r),
    s = e[n];
  return In(e, s, o);
}
function Tv(e, t) {
  const n = Ev(e.theme);
  return Object.keys(e)
    .map((r) => wC(e, t, r, n))
    .reduce(No, {});
}
function ke(e) {
  return Tv(e, Mp);
}
ke.propTypes = {};
ke.filterProps = Mp;
function Ce(e) {
  return Tv(e, Ep);
}
Ce.propTypes = {};
Ce.filterProps = Ep;
function SC(e = 8) {
  if (e.mui) return e;
  const t = Ev({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((o) => {
          const s = t(o);
          return typeof s == 'number' ? `${s}px` : s;
        })
        .join(' ');
  return (n.mui = !0), n;
}
function Cu(...e) {
  const t = e.reduce(
      (r, i) => (
        i.filterProps.forEach((o) => {
          r[o] = i;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((i, o) => (t[o] ? No(i, t[o](r)) : i), {});
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
const kC = Bt('border', Rt),
  CC = Bt('borderTop', Rt),
  bC = Bt('borderRight', Rt),
  _C = Bt('borderBottom', Rt),
  PC = Bt('borderLeft', Rt),
  MC = Bt('borderColor'),
  EC = Bt('borderTopColor'),
  TC = Bt('borderRightColor'),
  AC = Bt('borderBottomColor'),
  RC = Bt('borderLeftColor'),
  OC = Bt('outline', Rt),
  $C = Bt('outlineColor'),
  bu = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = js(e.theme, 'shape.borderRadius', 4),
        n = (r) => ({ borderRadius: Ls(t, r) });
      return In(e, e.borderRadius, n);
    }
    return null;
  };
bu.propTypes = {};
bu.filterProps = ['borderRadius'];
Cu(kC, CC, bC, _C, PC, MC, EC, TC, AC, RC, bu, OC, $C);
const _u = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = js(e.theme, 'spacing', 8),
      n = (r) => ({ gap: Ls(t, r) });
    return In(e, e.gap, n);
  }
  return null;
};
_u.propTypes = {};
_u.filterProps = ['gap'];
const Pu = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = js(e.theme, 'spacing', 8),
      n = (r) => ({ columnGap: Ls(t, r) });
    return In(e, e.columnGap, n);
  }
  return null;
};
Pu.propTypes = {};
Pu.filterProps = ['columnGap'];
const Mu = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = js(e.theme, 'spacing', 8),
      n = (r) => ({ rowGap: Ls(t, r) });
    return In(e, e.rowGap, n);
  }
  return null;
};
Mu.propTypes = {};
Mu.filterProps = ['rowGap'];
const IC = Pe({ prop: 'gridColumn' }),
  NC = Pe({ prop: 'gridRow' }),
  jC = Pe({ prop: 'gridAutoFlow' }),
  LC = Pe({ prop: 'gridAutoColumns' }),
  DC = Pe({ prop: 'gridAutoRows' }),
  FC = Pe({ prop: 'gridTemplateColumns' }),
  zC = Pe({ prop: 'gridTemplateRows' }),
  UC = Pe({ prop: 'gridTemplateAreas' }),
  VC = Pe({ prop: 'gridArea' });
Cu(_u, Pu, Mu, IC, NC, jC, LC, DC, FC, zC, UC, VC);
function Mi(e, t) {
  return t === 'grey' ? t : e;
}
const HC = Pe({ prop: 'color', themeKey: 'palette', transform: Mi }),
  BC = Pe({
    prop: 'bgcolor',
    cssProperty: 'backgroundColor',
    themeKey: 'palette',
    transform: Mi,
  }),
  WC = Pe({ prop: 'backgroundColor', themeKey: 'palette', transform: Mi });
Cu(HC, BC, WC);
function vt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const YC = Pe({ prop: 'width', transform: vt }),
  Tp = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, i;
        const o =
          ((r = e.theme) == null ||
          (r = r.breakpoints) == null ||
          (r = r.values) == null
            ? void 0
            : r[n]) || Pp[n];
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
Tp.filterProps = ['maxWidth'];
const GC = Pe({ prop: 'minWidth', transform: vt }),
  QC = Pe({ prop: 'height', transform: vt }),
  KC = Pe({ prop: 'maxHeight', transform: vt }),
  XC = Pe({ prop: 'minHeight', transform: vt });
Pe({ prop: 'size', cssProperty: 'width', transform: vt });
Pe({ prop: 'size', cssProperty: 'height', transform: vt });
const qC = Pe({ prop: 'boxSizing' });
Cu(YC, Tp, GC, QC, KC, XC, qC);
const Ds = {
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
  borderRadius: { themeKey: 'shape.borderRadius', style: bu },
  color: { themeKey: 'palette', transform: Mi },
  bgcolor: {
    themeKey: 'palette',
    cssProperty: 'backgroundColor',
    transform: Mi,
  },
  backgroundColor: { themeKey: 'palette', transform: Mi },
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
  gap: { style: _u },
  rowGap: { style: Mu },
  columnGap: { style: Pu },
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
  maxWidth: { style: Tp },
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
function ZC(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function JC(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function Av() {
  function e(n, r, i, o) {
    const s = { [n]: r, theme: i },
      a = o[n];
    if (!a) return { [n]: r };
    const { cssProperty: l = n, themeKey: u, transform: c, style: f } = a;
    if (r == null) return null;
    if (u === 'typography' && r === 'inherit') return { [n]: r };
    const d = ku(i, u) || {};
    return f
      ? f(s)
      : In(s, r, (y) => {
          let h = Cl(d, c, y);
          return (
            y === h &&
              typeof y == 'string' &&
              (h = Cl(d, c, `${n}${y === 'default' ? '' : Ns(y)}`, y)),
            l === !1 ? h : { [l]: h }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: i, theme: o = {} } = n || {};
    if (!i) return null;
    const s = (r = o.unstable_sxConfig) != null ? r : Ds;
    function a(l) {
      let u = l;
      if (typeof l == 'function') u = l(o);
      else if (typeof l != 'object') return l;
      if (!u) return null;
      const c = dC(o.breakpoints),
        f = Object.keys(c);
      let d = c;
      return (
        Object.keys(u).forEach((m) => {
          const y = JC(u[m], o);
          if (y != null)
            if (typeof y == 'object')
              if (s[m]) d = No(d, e(m, y, o, s));
              else {
                const h = In({ theme: o }, y, (x) => ({ [m]: x }));
                ZC(h, y) ? (d[m] = t({ sx: y, theme: o })) : (d = No(d, h));
              }
            else d = No(d, e(m, y, o, s));
        }),
        pC(f, d)
      );
    }
    return Array.isArray(i) ? i.map(a) : a(i);
  }
  return t;
}
const Eu = Av();
Eu.filterProps = ['sx'];
function Rv(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == 'function'
    ? {
        [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, '*:where($1)')]: t,
      }
    : n.palette.mode === e
    ? t
    : {};
}
const e5 = ['breakpoints', 'palette', 'spacing', 'shape'];
function Tu(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: i, shape: o = {} } = e,
    s = ie(e, e5),
    a = Mv(n),
    l = SC(i);
  let u = mn(
    {
      breakpoints: a,
      direction: 'ltr',
      components: {},
      palette: _({ mode: 'light' }, r),
      spacing: l,
      shape: _({}, fC, o),
    },
    s
  );
  return (
    (u.applyStyles = Rv),
    (u = t.reduce((c, f) => mn(c, f), u)),
    (u.unstable_sxConfig = _({}, Ds, s == null ? void 0 : s.unstable_sxConfig)),
    (u.unstable_sx = function (f) {
      return Eu({ sx: f, theme: this });
    }),
    u
  );
}
const t5 = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      default: Tu,
      private_createBreakpoints: Mv,
      unstable_applyStyles: Rv,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function n5(e) {
  return Object.keys(e).length === 0;
}
function r5(e = null) {
  const t = P.useContext(Su);
  return !t || n5(t) ? e : t;
}
const i5 = Tu();
function Ov(e = i5) {
  return r5(e);
}
const o5 = ['sx'],
  s5 = (e) => {
    var t, n;
    const r = { systemProps: {}, otherProps: {} },
      i =
        (t =
          e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) !=
        null
          ? t
          : Ds;
    return (
      Object.keys(e).forEach((o) => {
        i[o] ? (r.systemProps[o] = e[o]) : (r.otherProps[o] = e[o]);
      }),
      r
    );
  };
function $v(e) {
  const { sx: t } = e,
    n = ie(e, o5),
    { systemProps: r, otherProps: i } = s5(n);
  let o;
  return (
    Array.isArray(t)
      ? (o = [r, ...t])
      : typeof t == 'function'
      ? (o = (...s) => {
          const a = t(...s);
          return Xn(a) ? _({}, r, a) : r;
        })
      : (o = _({}, r, t)),
    _({}, i, { sx: o })
  );
}
const a5 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: Eu,
        extendSxProp: $v,
        unstable_createStyleFunctionSx: Av,
        unstable_defaultSxConfig: Ds,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  nm = (e) => e,
  l5 = () => {
    let e = nm;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = nm;
      },
    };
  },
  u5 = l5();
function Iv(e) {
  var t,
    n,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = Iv(e[t])) && (r && (r += ' '), (r += n));
    } else for (n in e) e[n] && (r && (r += ' '), (r += n));
  return r;
}
function Tn() {
  for (var e, t, n = 0, r = '', i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = Iv(e)) && (r && (r += ' '), (r += t));
  return r;
}
const Nv = {
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
function mr(e, t, n = 'Mui') {
  const r = Nv[t];
  return r ? `${n}-${r}` : `${u5.generate(e)}-${t}`;
}
function Gr(e, t, n = 'Mui') {
  const r = {};
  return (
    t.forEach((i) => {
      r[i] = mr(e, i, n);
    }),
    r
  );
}
var jv = { exports: {} },
  le = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ap = Symbol.for('react.element'),
  Rp = Symbol.for('react.portal'),
  Au = Symbol.for('react.fragment'),
  Ru = Symbol.for('react.strict_mode'),
  Ou = Symbol.for('react.profiler'),
  $u = Symbol.for('react.provider'),
  Iu = Symbol.for('react.context'),
  c5 = Symbol.for('react.server_context'),
  Nu = Symbol.for('react.forward_ref'),
  ju = Symbol.for('react.suspense'),
  Lu = Symbol.for('react.suspense_list'),
  Du = Symbol.for('react.memo'),
  Fu = Symbol.for('react.lazy'),
  f5 = Symbol.for('react.offscreen'),
  Lv;
Lv = Symbol.for('react.module.reference');
function Wt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ap:
        switch (((e = e.type), e)) {
          case Au:
          case Ou:
          case Ru:
          case ju:
          case Lu:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case c5:
              case Iu:
              case Nu:
              case Fu:
              case Du:
              case $u:
                return e;
              default:
                return t;
            }
        }
      case Rp:
        return t;
    }
  }
}
le.ContextConsumer = Iu;
le.ContextProvider = $u;
le.Element = Ap;
le.ForwardRef = Nu;
le.Fragment = Au;
le.Lazy = Fu;
le.Memo = Du;
le.Portal = Rp;
le.Profiler = Ou;
le.StrictMode = Ru;
le.Suspense = ju;
le.SuspenseList = Lu;
le.isAsyncMode = function () {
  return !1;
};
le.isConcurrentMode = function () {
  return !1;
};
le.isContextConsumer = function (e) {
  return Wt(e) === Iu;
};
le.isContextProvider = function (e) {
  return Wt(e) === $u;
};
le.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Ap;
};
le.isForwardRef = function (e) {
  return Wt(e) === Nu;
};
le.isFragment = function (e) {
  return Wt(e) === Au;
};
le.isLazy = function (e) {
  return Wt(e) === Fu;
};
le.isMemo = function (e) {
  return Wt(e) === Du;
};
le.isPortal = function (e) {
  return Wt(e) === Rp;
};
le.isProfiler = function (e) {
  return Wt(e) === Ou;
};
le.isStrictMode = function (e) {
  return Wt(e) === Ru;
};
le.isSuspense = function (e) {
  return Wt(e) === ju;
};
le.isSuspenseList = function (e) {
  return Wt(e) === Lu;
};
le.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Au ||
    e === Ou ||
    e === Ru ||
    e === ju ||
    e === Lu ||
    e === f5 ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Fu ||
        e.$$typeof === Du ||
        e.$$typeof === $u ||
        e.$$typeof === Iu ||
        e.$$typeof === Nu ||
        e.$$typeof === Lv ||
        e.getModuleId !== void 0))
  );
};
le.typeOf = Wt;
jv.exports = le;
var rm = jv.exports;
const d5 = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Dv(e) {
  const t = `${e}`.match(d5);
  return (t && t[1]) || '';
}
function Fv(e, t = '') {
  return e.displayName || e.name || Dv(e) || t;
}
function im(e, t, n) {
  const r = Fv(t);
  return e.displayName || (r !== '' ? `${n}(${r})` : n);
}
function p5(e) {
  if (e != null) {
    if (typeof e == 'string') return e;
    if (typeof e == 'function') return Fv(e, 'Component');
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case rm.ForwardRef:
          return im(e, e.render, 'ForwardRef');
        case rm.Memo:
          return im(e, e.type, 'memo');
        default:
          return;
      }
  }
}
const h5 = Object.freeze(
  Object.defineProperty(
    { __proto__: null, default: p5, getFunctionName: Dv },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function m5(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
Tu();
function bl(e, t) {
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
                n[r][s] = bl(i[s], o[s]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function g5(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : bl(t.components[n].defaultProps, r);
}
function y5({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let i = Ov(n);
  return r && (i = i[r] || i), g5({ theme: i, name: t, props: e });
}
const Vr = typeof window < 'u' ? P.useLayoutEffect : P.useEffect;
function v5(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const x5 = Object.freeze(
  Object.defineProperty({ __proto__: null, default: v5 }, Symbol.toStringTag, {
    value: 'Module',
  })
);
function Zf(e) {
  return (e && e.ownerDocument) || document;
}
function w5(e) {
  return Zf(e).defaultView || window;
}
function Jf(e, t) {
  typeof e == 'function' ? e(t) : e && (e.current = t);
}
function S5({ controlled: e, default: t, name: n, state: r = 'value' }) {
  const { current: i } = P.useRef(e !== void 0),
    [o, s] = P.useState(t),
    a = i ? e : o,
    l = P.useCallback((u) => {
      i || s(u);
    }, []);
  return [a, l];
}
function us(...e) {
  return P.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              Jf(n, t);
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
const k5 = P.createContext(void 0);
function C5(e) {
  const { theme: t, name: n, props: r } = e;
  if (!t || !t.components || !t.components[n]) return r;
  const i = t.components[n];
  return i.defaultProps
    ? bl(i.defaultProps, r)
    : !i.styleOverrides && !i.variants
    ? bl(i, r)
    : r;
}
function b5({ props: e, name: t }) {
  const n = P.useContext(k5);
  return C5({ props: e, name: t, theme: { components: n } });
}
function _5(e, t) {
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
  zv = { exports: {} };
(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(zv);
var Uv = zv.exports;
const P5 = Fn(XS),
  M5 = Fn(x5);
var Vv = Uv;
Object.defineProperty(Me, '__esModule', { value: !0 });
Me.alpha = Yv;
Me.blend = z5;
Me.colorChannel = void 0;
var E5 = (Me.darken = $p);
Me.decomposeColor = Ut;
Me.emphasize = Gv;
var T5 = (Me.getContrastRatio = N5);
Me.getLuminance = _l;
Me.hexToRgb = Hv;
Me.hslToRgb = Wv;
var A5 = (Me.lighten = Ip);
Me.private_safeAlpha = j5;
Me.private_safeColorChannel = void 0;
Me.private_safeDarken = L5;
Me.private_safeEmphasize = F5;
Me.private_safeLighten = D5;
Me.recomposeColor = Ji;
Me.rgbToHex = I5;
var om = Vv(P5),
  R5 = Vv(M5);
function Op(e, t = 0, n = 1) {
  return (0, R5.default)(e, t, n);
}
function Hv(e) {
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
function O5(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function Ut(e) {
  if (e.type) return e;
  if (e.charAt(0) === '#') return Ut(Hv(e));
  const t = e.indexOf('('),
    n = e.substring(0, t);
  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(n) === -1)
    throw new Error((0, om.default)(9, e));
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
      throw new Error((0, om.default)(10, i));
  } else r = r.split(',');
  return (
    (r = r.map((o) => parseFloat(o))), { type: n, values: r, colorSpace: i }
  );
}
const Bv = (e) => {
  const t = Ut(e);
  return t.values
    .slice(0, 3)
    .map((n, r) => (t.type.indexOf('hsl') !== -1 && r !== 0 ? `${n}%` : n))
    .join(' ');
};
Me.colorChannel = Bv;
const $5 = (e, t) => {
  try {
    return Bv(e);
  } catch {
    return e;
  }
};
Me.private_safeColorChannel = $5;
function Ji(e) {
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
function I5(e) {
  if (e.indexOf('#') === 0) return e;
  const { values: t } = Ut(e);
  return `#${t.map((n, r) => O5(r === 3 ? Math.round(255 * n) : n)).join('')}`;
}
function Wv(e) {
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
    e.type === 'hsla' && ((a += 'a'), l.push(t[3])), Ji({ type: a, values: l })
  );
}
function _l(e) {
  e = Ut(e);
  let t = e.type === 'hsl' || e.type === 'hsla' ? Ut(Wv(e)).values : e.values;
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
function N5(e, t) {
  const n = _l(e),
    r = _l(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Yv(e, t) {
  return (
    (e = Ut(e)),
    (t = Op(t)),
    (e.type === 'rgb' || e.type === 'hsl') && (e.type += 'a'),
    e.type === 'color' ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    Ji(e)
  );
}
function j5(e, t, n) {
  try {
    return Yv(e, t);
  } catch {
    return e;
  }
}
function $p(e, t) {
  if (((e = Ut(e)), (t = Op(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf('rgb') !== -1 || e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return Ji(e);
}
function L5(e, t, n) {
  try {
    return $p(e, t);
  } catch {
    return e;
  }
}
function Ip(e, t) {
  if (((e = Ut(e)), (t = Op(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf('rgb') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return Ji(e);
}
function D5(e, t, n) {
  try {
    return Ip(e, t);
  } catch {
    return e;
  }
}
function Gv(e, t = 0.15) {
  return _l(e) > 0.5 ? $p(e, t) : Ip(e, t);
}
function F5(e, t, n) {
  try {
    return Gv(e, t);
  } catch {
    return e;
  }
}
function z5(e, t, n, r = 1) {
  const i = (l, u) =>
      Math.round((l ** (1 / r) * (1 - n) + u ** (1 / r) * n) ** r),
    o = Ut(e),
    s = Ut(t),
    a = [
      i(o.values[0], s.values[0]),
      i(o.values[1], s.values[1]),
      i(o.values[2], s.values[2]),
    ];
  return Ji({ type: 'rgb', values: a });
}
const cs = { black: '#000', white: '#fff' },
  U5 = {
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
  Zr = {
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
  Jr = {
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
  po = {
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
  ei = {
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
  ti = {
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
  ni = {
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
  V5 = ['mode', 'contrastThreshold', 'tonalOffset'],
  sm = {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { paper: cs.white, default: cs.white },
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
  Rc = {
    text: {
      primary: cs.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: { paper: '#121212', default: '#121212' },
    action: {
      active: cs.white,
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
function am(e, t, n, r) {
  const i = r.light || r,
    o = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === 'light'
      ? (e.light = A5(e.main, i))
      : t === 'dark' && (e.dark = E5(e.main, o)));
}
function H5(e = 'light') {
  return e === 'dark'
    ? { main: ei[200], light: ei[50], dark: ei[400] }
    : { main: ei[700], light: ei[400], dark: ei[800] };
}
function B5(e = 'light') {
  return e === 'dark'
    ? { main: Zr[200], light: Zr[50], dark: Zr[400] }
    : { main: Zr[500], light: Zr[300], dark: Zr[700] };
}
function W5(e = 'light') {
  return e === 'dark'
    ? { main: Jr[500], light: Jr[300], dark: Jr[700] }
    : { main: Jr[700], light: Jr[400], dark: Jr[800] };
}
function Y5(e = 'light') {
  return e === 'dark'
    ? { main: ti[400], light: ti[300], dark: ti[700] }
    : { main: ti[700], light: ti[500], dark: ti[900] };
}
function G5(e = 'light') {
  return e === 'dark'
    ? { main: ni[400], light: ni[300], dark: ni[700] }
    : { main: ni[800], light: ni[500], dark: ni[900] };
}
function Q5(e = 'light') {
  return e === 'dark'
    ? { main: po[400], light: po[300], dark: po[700] }
    : { main: '#ed6c02', light: po[500], dark: po[900] };
}
function K5(e) {
  const {
      mode: t = 'light',
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    i = ie(e, V5),
    o = e.primary || H5(t),
    s = e.secondary || B5(t),
    a = e.error || W5(t),
    l = e.info || Y5(t),
    u = e.success || G5(t),
    c = e.warning || Q5(t);
  function f(h) {
    return T5(h, Rc.text.primary) >= n ? Rc.text.primary : sm.text.primary;
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
        throw new Error(os(11, x ? ` (${x})` : '', p));
      if (typeof h.main != 'string')
        throw new Error(os(12, x ? ` (${x})` : '', JSON.stringify(h.main)));
      return (
        am(h, 'light', g, r),
        am(h, 'dark', v, r),
        h.contrastText || (h.contrastText = f(h.main)),
        h
      );
    },
    m = { dark: Rc, light: sm };
  return mn(
    _(
      {
        common: _({}, cs),
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
        grey: U5,
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
const X5 = [
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
function q5(e) {
  return Math.round(e * 1e5) / 1e5;
}
const lm = { textTransform: 'uppercase' },
  um = '"Roboto", "Helvetica", "Arial", sans-serif';
function Z5(e, t) {
  const n = typeof t == 'function' ? t(e) : t,
    {
      fontFamily: r = um,
      fontSize: i = 14,
      fontWeightLight: o = 300,
      fontWeightRegular: s = 400,
      fontWeightMedium: a = 500,
      fontWeightBold: l = 700,
      htmlFontSize: u = 16,
      allVariants: c,
      pxToRem: f,
    } = n,
    d = ie(n, X5),
    m = i / 14,
    y = f || ((p) => `${(p / u) * m}rem`),
    h = (p, g, v, w, k) =>
      _(
        { fontFamily: r, fontWeight: p, fontSize: y(g), lineHeight: v },
        r === um ? { letterSpacing: `${q5(w / g)}em` } : {},
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
      button: h(a, 14, 1.75, 0.4, lm),
      caption: h(s, 12, 1.66, 0.4),
      overline: h(s, 12, 2.66, 1, lm),
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
const J5 = 0.2,
  e4 = 0.14,
  t4 = 0.12;
function me(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${J5})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${e4})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${t4})`,
  ].join(',');
}
const n4 = [
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
  r4 = ['duration', 'easing', 'delay'],
  i4 = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  o4 = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function cm(e) {
  return `${Math.round(e)}ms`;
}
function s4(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function a4(e) {
  const t = _({}, i4, e.easing),
    n = _({}, o4, e.duration);
  return _(
    {
      getAutoHeightDuration: s4,
      create: (i = ['all'], o = {}) => {
        const {
          duration: s = n.standard,
          easing: a = t.easeInOut,
          delay: l = 0,
        } = o;
        return (
          ie(o, r4),
          (Array.isArray(i) ? i : [i])
            .map(
              (u) =>
                `${u} ${typeof s == 'string' ? s : cm(s)} ${a} ${
                  typeof l == 'string' ? l : cm(l)
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
const l4 = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  u4 = [
    'breakpoints',
    'mixins',
    'spacing',
    'palette',
    'transitions',
    'typography',
    'shape',
  ];
function c4(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: i = {},
      typography: o = {},
    } = e,
    s = ie(e, u4);
  if (e.vars) throw new Error(os(18));
  const a = K5(r),
    l = Tu(e);
  let u = mn(l, {
    mixins: _5(l.breakpoints, n),
    palette: a,
    shadows: n4.slice(),
    typography: Z5(a, o),
    transitions: a4(i),
    zIndex: _({}, l4),
  });
  return (
    (u = mn(u, s)),
    (u = t.reduce((c, f) => mn(c, f), u)),
    (u.unstable_sxConfig = _({}, Ds, s == null ? void 0 : s.unstable_sxConfig)),
    (u.unstable_sx = function (f) {
      return Eu({ sx: f, theme: this });
    }),
    u
  );
}
const Np = c4();
function eo() {
  const e = Ov(Np);
  return e[vp] || e;
}
function zu({ props: e, name: t }) {
  return y5({ props: e, name: t, defaultTheme: Np, themeId: vp });
}
var Fs = {},
  Oc = { exports: {} },
  fm;
function f4() {
  return (
    fm ||
      ((fm = 1),
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
      })(Oc)),
    Oc.exports
  );
}
const d4 = Fn(aC),
  p4 = Fn(lC),
  h4 = Fn(hC),
  m4 = Fn(h5),
  g4 = Fn(t5),
  y4 = Fn(a5);
var to = Uv;
Object.defineProperty(Fs, '__esModule', { value: !0 });
var v4 = (Fs.default = R4);
Fs.shouldForwardProp = Va;
Fs.systemDefaultTheme = void 0;
var Et = to(bv()),
  ed = to(f4()),
  dm = _4(d4),
  x4 = p4;
to(h4);
to(m4);
var w4 = to(g4),
  S4 = to(y4);
const k4 = ['ownerState'],
  C4 = ['variants'],
  b4 = ['name', 'slot', 'skipVariantsResolver', 'skipSx', 'overridesResolver'];
function Qv(e) {
  if (typeof WeakMap != 'function') return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (Qv = function (r) {
    return r ? n : t;
  })(e);
}
function _4(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || (typeof e != 'object' && typeof e != 'function'))
    return { default: e };
  var n = Qv(t);
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
function P4(e) {
  return Object.keys(e).length === 0;
}
function M4(e) {
  return typeof e == 'string' && e.charCodeAt(0) > 96;
}
function Va(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const E4 = (Fs.systemDefaultTheme = (0, w4.default)()),
  T4 = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function ha({ defaultTheme: e, theme: t, themeId: n }) {
  return P4(t) ? e : t[n] || t;
}
function A4(e) {
  return e ? (t, n) => n[e] : null;
}
function Ha(e, t) {
  let { ownerState: n } = t,
    r = (0, ed.default)(t, k4);
  const i =
    typeof e == 'function' ? e((0, Et.default)({ ownerState: n }, r)) : e;
  if (Array.isArray(i))
    return i.flatMap((o) => Ha(o, (0, Et.default)({ ownerState: n }, r)));
  if (i && typeof i == 'object' && Array.isArray(i.variants)) {
    const { variants: o = [] } = i;
    let a = (0, ed.default)(i, C4);
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
function R4(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = E4,
      rootShouldForwardProp: r = Va,
      slotShouldForwardProp: i = Va,
    } = e,
    o = (s) =>
      (0, S4.default)(
        (0, Et.default)({}, s, {
          theme: ha((0, Et.default)({}, s, { defaultTheme: n, themeId: t })),
        })
      );
  return (
    (o.__mui_systemSx = !0),
    (s, a = {}) => {
      (0, dm.internal_processStyles)(s, (k) =>
        k.filter((S) => !(S != null && S.__mui_systemSx))
      );
      const {
          name: l,
          slot: u,
          skipVariantsResolver: c,
          skipSx: f,
          overridesResolver: d = A4(T4(u)),
        } = a,
        m = (0, ed.default)(a, b4),
        y = c !== void 0 ? c : (u && u !== 'Root' && u !== 'root') || !1,
        h = f || !1;
      let x,
        p = Va;
      u === 'Root' || u === 'root'
        ? (p = r)
        : u
        ? (p = i)
        : M4(s) && (p = void 0);
      const g = (0, dm.default)(
          s,
          (0, Et.default)({ shouldForwardProp: p, label: x }, m)
        ),
        v = (k) =>
          (typeof k == 'function' && k.__emotion_real !== k) ||
          (0, x4.isPlainObject)(k)
            ? (S) =>
                Ha(
                  k,
                  (0, Et.default)({}, S, {
                    theme: ha({ theme: S.theme, defaultTheme: n, themeId: t }),
                  })
                )
            : k,
        w = (k, ...S) => {
          let C = v(k);
          const M = S ? S.map(v) : [];
          l &&
            d &&
            M.push((E) => {
              const I = ha(
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
                  O[D] = Ha(U, (0, Et.default)({}, E, { theme: I }));
                }),
                d(E, O)
              );
            }),
            l &&
              !y &&
              M.push((E) => {
                var I;
                const R = ha(
                    (0, Et.default)({}, E, { defaultTheme: n, themeId: t })
                  ),
                  O =
                    R == null ||
                    (I = R.components) == null ||
                    (I = I[l]) == null
                      ? void 0
                      : I.variants;
                return Ha(
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
function O4(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const $4 = (e) => O4(e) && e !== 'classes',
  qe = v4({ themeId: vp, defaultTheme: Np, rootShouldForwardProp: $4 }),
  I4 = [
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
function N4(e, t, n = I4) {
  return e.type === 'pie'
    ? _({}, e, { data: e.data.map((r, i) => _({ color: n[i % n.length] }, r)) })
    : _({ color: n[t % n.length] }, e);
}
const j4 = ['#02B2AF', '#2E96FF', '#B800D8', '#60009B', '#2731C8', '#03008D'],
  L4 = ['#02B2AF', '#72CCFF', '#DA00FF', '#9001CB', '#2E96FF', '#3B48E0'],
  D4 = (e) => (e === 'dark' ? L4 : j4),
  Kv = P.createContext({ isInitialized: !1, data: {} }),
  F4 = (e, t, n, r) => {
    const i = {};
    e.forEach((s, a) => {
      var c;
      const { id: l = `auto-generated-id-${a}`, type: u } = s;
      if (
        (i[u] === void 0 && (i[u] = { series: {}, seriesOrder: [] }),
        ((c = i[u]) == null ? void 0 : c.series[l]) !== void 0)
      )
        throw new Error(`MUI X: series' id "${l}" is not unique.`);
      (i[u].series[l] = _({ id: l }, N4(s, a, t))), i[u].seriesOrder.push(l);
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
function z4(e) {
  const {
      series: t,
      dataset: n,
      colors: r = D4,
      seriesFormatters: i,
      children: o,
    } = e,
    s = eo(),
    a = P.useMemo(
      () => ({
        isInitialized: !0,
        data: F4(t, typeof r == 'function' ? r(s.palette.mode) : r, i, n),
      }),
      [t, r, s.palette.mode, i, n]
    );
  return b.jsx(Kv.Provider, { value: a, children: o });
}
const zs = P.createContext({
    item: null,
    axis: { x: null, y: null },
    useVoronoiInteraction: !1,
    dispatch: () => null,
  }),
  U4 = (e, t) => {
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
function V4(e) {
  const { children: t } = e,
    [n, r] = P.useReducer(U4, {
      item: null,
      axis: { x: null, y: null },
      useVoronoiInteraction: !1,
    }),
    i = P.useMemo(() => _({}, n, { dispatch: r }), [n]);
  return b.jsx(zs.Provider, { value: i, children: t });
}
const Xv = P.createContext({});
function H4(e) {
  const { colorProcessors: t, children: n } = e;
  return b.jsx(Xv.Provider, { value: t, children: n });
}
function Ba(e, t) {
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
function B4(e, t) {
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
function jp(e) {
  let t, n, r;
  e.length !== 2
    ? ((t = Ba), (n = (a, l) => Ba(e(a), l)), (r = (a, l) => e(a) - l))
    : ((t = e === Ba || e === B4 ? e : W4), (n = e), (r = e));
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
function W4() {
  return 0;
}
function Y4(e) {
  return e === null ? NaN : +e;
}
const G4 = jp(Ba),
  qv = G4.right;
jp(Y4).center;
class pm extends Map {
  constructor(t, n = X4) {
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
    return super.get(hm(this, t));
  }
  has(t) {
    return super.has(hm(this, t));
  }
  set(t, n) {
    return super.set(Q4(this, t), n);
  }
  delete(t) {
    return super.delete(K4(this, t));
  }
}
function hm({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) ? e.get(r) : n;
}
function Q4({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) ? e.get(r) : (e.set(r, n), n);
}
function K4({ _intern: e, _key: t }, n) {
  const r = t(n);
  return e.has(r) && ((n = e.get(r)), e.delete(r)), n;
}
function X4(e) {
  return e !== null && typeof e == 'object' ? e.valueOf() : e;
}
const q4 = Math.sqrt(50),
  Z4 = Math.sqrt(10),
  J4 = Math.sqrt(2);
function Pl(e, t, n) {
  const r = (t - e) / Math.max(0, n),
    i = Math.floor(Math.log10(r)),
    o = r / Math.pow(10, i),
    s = o >= q4 ? 10 : o >= Z4 ? 5 : o >= J4 ? 2 : 1;
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
    l < a && 0.5 <= n && n < 2 ? Pl(e, t, n * 2) : [a, l, u]
  );
}
function td(e, t, n) {
  if (((t = +t), (e = +e), (n = +n), !(n > 0))) return [];
  if (e === t) return [e];
  const r = t < e,
    [i, o, s] = r ? Pl(t, e, n) : Pl(e, t, n);
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
function nd(e, t, n) {
  return (t = +t), (e = +e), (n = +n), Pl(e, t, n)[2];
}
function rd(e, t, n) {
  (t = +t), (e = +e), (n = +n);
  const r = t < e,
    i = r ? nd(t, e, n) : nd(e, t, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function eb(e, t, n) {
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
function gr(e, t) {
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
function tb(e, t) {
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
const mm = Symbol('implicit');
function Ml() {
  var e = new pm(),
    t = [],
    n = [],
    r = mm;
  function i(o) {
    let s = e.get(o);
    if (s === void 0) {
      if (r !== mm) return r;
      e.set(o, (s = t.push(o) - 1));
    }
    return n[s % n.length];
  }
  return (
    (i.domain = function (o) {
      if (!arguments.length) return t.slice();
      (t = []), (e = new pm());
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
      return Ml(t, n).unknown(r);
    }),
    gr.apply(i, arguments),
    i
  );
}
function Lp() {
  var e = Ml().unknown(void 0),
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
    var x = eb(d).map(function (p) {
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
      return Lp(t(), [r, i]).round(a).paddingInner(l).paddingOuter(u).align(c);
    }),
    gr.apply(f(), arguments)
  );
}
function Zv(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return Zv(t());
    }),
    e
  );
}
function nb() {
  return Zv(Lp.apply(null, arguments).paddingInner(1));
}
function Dp(e, t, n) {
  (e.prototype = t.prototype = n), (n.constructor = e);
}
function Jv(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Us() {}
var fs = 0.7,
  El = 1 / fs,
  Ei = '\\s*([+-]?\\d+)\\s*',
  ds = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
  gn = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
  rb = /^#([0-9a-f]{3,8})$/,
  ib = new RegExp(`^rgb\\(${Ei},${Ei},${Ei}\\)$`),
  ob = new RegExp(`^rgb\\(${gn},${gn},${gn}\\)$`),
  sb = new RegExp(`^rgba\\(${Ei},${Ei},${Ei},${ds}\\)$`),
  ab = new RegExp(`^rgba\\(${gn},${gn},${gn},${ds}\\)$`),
  lb = new RegExp(`^hsl\\(${ds},${gn},${gn}\\)$`),
  ub = new RegExp(`^hsla\\(${ds},${gn},${gn},${ds}\\)$`),
  gm = {
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
Dp(Us, ps, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ym,
  formatHex: ym,
  formatHex8: cb,
  formatHsl: fb,
  formatRgb: vm,
  toString: vm,
});
function ym() {
  return this.rgb().formatHex();
}
function cb() {
  return this.rgb().formatHex8();
}
function fb() {
  return e2(this).formatHsl();
}
function vm() {
  return this.rgb().formatRgb();
}
function ps(e) {
  var t, n;
  return (
    (e = (e + '').trim().toLowerCase()),
    (t = rb.exec(e))
      ? ((n = t[1].length),
        (t = parseInt(t[1], 16)),
        n === 6
          ? xm(t)
          : n === 3
          ? new ut(
              ((t >> 8) & 15) | ((t >> 4) & 240),
              ((t >> 4) & 15) | (t & 240),
              ((t & 15) << 4) | (t & 15),
              1
            )
          : n === 8
          ? ma(
              (t >> 24) & 255,
              (t >> 16) & 255,
              (t >> 8) & 255,
              (t & 255) / 255
            )
          : n === 4
          ? ma(
              ((t >> 12) & 15) | ((t >> 8) & 240),
              ((t >> 8) & 15) | ((t >> 4) & 240),
              ((t >> 4) & 15) | (t & 240),
              (((t & 15) << 4) | (t & 15)) / 255
            )
          : null)
      : (t = ib.exec(e))
      ? new ut(t[1], t[2], t[3], 1)
      : (t = ob.exec(e))
      ? new ut((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, 1)
      : (t = sb.exec(e))
      ? ma(t[1], t[2], t[3], t[4])
      : (t = ab.exec(e))
      ? ma((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4])
      : (t = lb.exec(e))
      ? km(t[1], t[2] / 100, t[3] / 100, 1)
      : (t = ub.exec(e))
      ? km(t[1], t[2] / 100, t[3] / 100, t[4])
      : gm.hasOwnProperty(e)
      ? xm(gm[e])
      : e === 'transparent'
      ? new ut(NaN, NaN, NaN, 0)
      : null
  );
}
function xm(e) {
  return new ut((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function ma(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new ut(e, t, n, r);
}
function db(e) {
  return (
    e instanceof Us || (e = ps(e)),
    e ? ((e = e.rgb()), new ut(e.r, e.g, e.b, e.opacity)) : new ut()
  );
}
function id(e, t, n, r) {
  return arguments.length === 1 ? db(e) : new ut(e, t, n, r ?? 1);
}
function ut(e, t, n, r) {
  (this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r);
}
Dp(
  ut,
  id,
  Jv(Us, {
    brighter(e) {
      return (
        (e = e == null ? El : Math.pow(El, e)),
        new ut(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? fs : Math.pow(fs, e)),
        new ut(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb() {
      return this;
    },
    clamp() {
      return new ut(Nr(this.r), Nr(this.g), Nr(this.b), Tl(this.opacity));
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
    hex: wm,
    formatHex: wm,
    formatHex8: pb,
    formatRgb: Sm,
    toString: Sm,
  })
);
function wm() {
  return `#${Tr(this.r)}${Tr(this.g)}${Tr(this.b)}`;
}
function pb() {
  return `#${Tr(this.r)}${Tr(this.g)}${Tr(this.b)}${Tr(
    (isNaN(this.opacity) ? 1 : this.opacity) * 255
  )}`;
}
function Sm() {
  const e = Tl(this.opacity);
  return `${e === 1 ? 'rgb(' : 'rgba('}${Nr(this.r)}, ${Nr(this.g)}, ${Nr(
    this.b
  )}${e === 1 ? ')' : `, ${e})`}`;
}
function Tl(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Nr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Tr(e) {
  return (e = Nr(e)), (e < 16 ? '0' : '') + e.toString(16);
}
function km(e, t, n, r) {
  return (
    r <= 0
      ? (e = t = n = NaN)
      : n <= 0 || n >= 1
      ? (e = t = NaN)
      : t <= 0 && (e = NaN),
    new Zt(e, t, n, r)
  );
}
function e2(e) {
  if (e instanceof Zt) return new Zt(e.h, e.s, e.l, e.opacity);
  if ((e instanceof Us || (e = ps(e)), !e)) return new Zt();
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
function hb(e, t, n, r) {
  return arguments.length === 1 ? e2(e) : new Zt(e, t, n, r ?? 1);
}
function Zt(e, t, n, r) {
  (this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r);
}
Dp(
  Zt,
  hb,
  Jv(Us, {
    brighter(e) {
      return (
        (e = e == null ? El : Math.pow(El, e)),
        new Zt(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker(e) {
      return (
        (e = e == null ? fs : Math.pow(fs, e)),
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
        $c(e >= 240 ? e - 240 : e + 120, i, r),
        $c(e, i, r),
        $c(e < 120 ? e + 240 : e - 120, i, r),
        this.opacity
      );
    },
    clamp() {
      return new Zt(Cm(this.h), ga(this.s), ga(this.l), Tl(this.opacity));
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
      const e = Tl(this.opacity);
      return `${e === 1 ? 'hsl(' : 'hsla('}${Cm(this.h)}, ${
        ga(this.s) * 100
      }%, ${ga(this.l) * 100}%${e === 1 ? ')' : `, ${e})`}`;
    },
  })
);
function Cm(e) {
  return (e = (e || 0) % 360), e < 0 ? e + 360 : e;
}
function ga(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function $c(e, t, n) {
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
const Fp = (e) => () => e;
function mb(e, t) {
  return function (n) {
    return e + n * t;
  };
}
function gb(e, t, n) {
  return (
    (e = Math.pow(e, n)),
    (t = Math.pow(t, n) - e),
    (n = 1 / n),
    function (r) {
      return Math.pow(e + r * t, n);
    }
  );
}
function yb(e) {
  return (e = +e) == 1
    ? t2
    : function (t, n) {
        return n - t ? gb(t, n, e) : Fp(isNaN(t) ? n : t);
      };
}
function t2(e, t) {
  var n = t - e;
  return n ? mb(e, n) : Fp(isNaN(e) ? t : e);
}
const bm = (function e(t) {
  var n = yb(t);
  function r(i, o) {
    var s = n((i = id(i)).r, (o = id(o)).r),
      a = n(i.g, o.g),
      l = n(i.b, o.b),
      u = t2(i.opacity, o.opacity);
    return function (c) {
      return (
        (i.r = s(c)), (i.g = a(c)), (i.b = l(c)), (i.opacity = u(c)), i + ''
      );
    };
  }
  return (r.gamma = e), r;
})(1);
function vb(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0,
    r = t.slice(),
    i;
  return function (o) {
    for (i = 0; i < n; ++i) r[i] = e[i] * (1 - o) + t[i] * o;
    return r;
  };
}
function xb(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function wb(e, t) {
  var n = t ? t.length : 0,
    r = e ? Math.min(n, e.length) : 0,
    i = new Array(r),
    o = new Array(n),
    s;
  for (s = 0; s < r; ++s) i[s] = Uu(e[s], t[s]);
  for (; s < n; ++s) o[s] = t[s];
  return function (a) {
    for (s = 0; s < r; ++s) o[s] = i[s](a);
    return o;
  };
}
function n2(e, t) {
  var n = new Date();
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return n.setTime(e * (1 - r) + t * r), n;
    }
  );
}
function hs(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return e * (1 - n) + t * n;
    }
  );
}
function Sb(e, t) {
  var n = {},
    r = {},
    i;
  (e === null || typeof e != 'object') && (e = {}),
    (t === null || typeof t != 'object') && (t = {});
  for (i in t) i in e ? (n[i] = Uu(e[i], t[i])) : (r[i] = t[i]);
  return function (o) {
    for (i in n) r[i] = n[i](o);
    return r;
  };
}
var od = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  Ic = new RegExp(od.source, 'g');
function kb(e) {
  return function () {
    return e;
  };
}
function Cb(e) {
  return function (t) {
    return e(t) + '';
  };
}
function bb(e, t) {
  var n = (od.lastIndex = Ic.lastIndex = 0),
    r,
    i,
    o,
    s = -1,
    a = [],
    l = [];
  for (e = e + '', t = t + ''; (r = od.exec(e)) && (i = Ic.exec(t)); )
    (o = i.index) > n &&
      ((o = t.slice(n, o)), a[s] ? (a[s] += o) : (a[++s] = o)),
      (r = r[0]) === (i = i[0])
        ? a[s]
          ? (a[s] += i)
          : (a[++s] = i)
        : ((a[++s] = null), l.push({ i: s, x: hs(r, i) })),
      (n = Ic.lastIndex);
  return (
    n < t.length && ((o = t.slice(n)), a[s] ? (a[s] += o) : (a[++s] = o)),
    a.length < 2
      ? l[0]
        ? Cb(l[0].x)
        : kb(t)
      : ((t = l.length),
        function (u) {
          for (var c = 0, f; c < t; ++c) a[(f = l[c]).i] = f.x(u);
          return a.join('');
        })
  );
}
function Uu(e, t) {
  var n = typeof t,
    r;
  return t == null || n === 'boolean'
    ? Fp(t)
    : (n === 'number'
        ? hs
        : n === 'string'
        ? (r = ps(t))
          ? ((t = r), bm)
          : bb
        : t instanceof ps
        ? bm
        : t instanceof Date
        ? n2
        : xb(t)
        ? vb
        : Array.isArray(t)
        ? wb
        : (typeof t.valueOf != 'function' && typeof t.toString != 'function') ||
          isNaN(t)
        ? Sb
        : hs)(e, t);
}
function r2(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return Math.round(e * (1 - n) + t * n);
    }
  );
}
function _b(e) {
  return function () {
    return e;
  };
}
function Pb(e) {
  return +e;
}
var _m = [0, 1];
function Nt(e) {
  return e;
}
function sd(e, t) {
  return (t -= e = +e)
    ? function (n) {
        return (n - e) / t;
      }
    : _b(isNaN(t) ? NaN : 0.5);
}
function Mb(e, t) {
  var n;
  return (
    e > t && ((n = e), (e = t), (t = n)),
    function (r) {
      return Math.max(e, Math.min(t, r));
    }
  );
}
function Eb(e, t, n) {
  var r = e[0],
    i = e[1],
    o = t[0],
    s = t[1];
  return (
    i < r ? ((r = sd(i, r)), (o = n(s, o))) : ((r = sd(r, i)), (o = n(o, s))),
    function (a) {
      return o(r(a));
    }
  );
}
function Tb(e, t, n) {
  var r = Math.min(e.length, t.length) - 1,
    i = new Array(r),
    o = new Array(r),
    s = -1;
  for (
    e[r] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
    ++s < r;

  )
    (i[s] = sd(e[s], e[s + 1])), (o[s] = n(t[s], t[s + 1]));
  return function (a) {
    var l = qv(e, a, 1, r) - 1;
    return o[l](i[l](a));
  };
}
function Vu(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function zp() {
  var e = _m,
    t = _m,
    n = Uu,
    r,
    i,
    o,
    s = Nt,
    a,
    l,
    u;
  function c() {
    var d = Math.min(e.length, t.length);
    return (
      s !== Nt && (s = Mb(e[0], e[d - 1])),
      (a = d > 2 ? Tb : Eb),
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
      return s(i((u || (u = a(t, e.map(r), hs)))(d)));
    }),
    (f.domain = function (d) {
      return arguments.length ? ((e = Array.from(d, Pb)), c()) : e.slice();
    }),
    (f.range = function (d) {
      return arguments.length ? ((t = Array.from(d)), c()) : t.slice();
    }),
    (f.rangeRound = function (d) {
      return (t = Array.from(d)), (n = r2), c();
    }),
    (f.clamp = function (d) {
      return arguments.length ? ((s = d ? !0 : Nt), c()) : s !== Nt;
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
function i2() {
  return zp()(Nt, Nt);
}
function Ab(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString('en').replace(/,/g, '')
    : e.toString(10);
}
function Al(e, t) {
  if (
    (n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf('e')) < 0
  )
    return null;
  var n,
    r = e.slice(0, n);
  return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
function Fi(e) {
  return (e = Al(Math.abs(e))), e ? e[1] : NaN;
}
function Rb(e, t) {
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
function Ob(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (n) {
      return e[+n];
    });
  };
}
var $b =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ms(e) {
  if (!(t = $b.exec(e))) throw new Error('invalid format: ' + e);
  var t;
  return new Up({
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
ms.prototype = Up.prototype;
function Up(e) {
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
Up.prototype.toString = function () {
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
function Ib(e) {
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
var o2;
function Nb(e, t) {
  var n = Al(e, t);
  if (!n) return e + '';
  var r = n[0],
    i = n[1],
    o = i - (o2 = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
    s = r.length;
  return o === s
    ? r
    : o > s
    ? r + new Array(o - s + 1).join('0')
    : o > 0
    ? r.slice(0, o) + '.' + r.slice(o)
    : '0.' + new Array(1 - o).join('0') + Al(e, Math.max(0, t + o - 1))[0];
}
function Pm(e, t) {
  var n = Al(e, t);
  if (!n) return e + '';
  var r = n[0],
    i = n[1];
  return i < 0
    ? '0.' + new Array(-i).join('0') + r
    : r.length > i + 1
    ? r.slice(0, i + 1) + '.' + r.slice(i + 1)
    : r + new Array(i - r.length + 2).join('0');
}
const Mm = {
  '%': (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + '',
  d: Ab,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Pm(e * 100, t),
  r: Pm,
  s: Nb,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function Em(e) {
  return e;
}
var Tm = Array.prototype.map,
  Am = [
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
function jb(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? Em
        : Rb(Tm.call(e.grouping, Number), e.thousands + ''),
    n = e.currency === void 0 ? '' : e.currency[0] + '',
    r = e.currency === void 0 ? '' : e.currency[1] + '',
    i = e.decimal === void 0 ? '.' : e.decimal + '',
    o = e.numerals === void 0 ? Em : Ob(Tm.call(e.numerals, String)),
    s = e.percent === void 0 ? '%' : e.percent + '',
    a = e.minus === void 0 ? '−' : e.minus + '',
    l = e.nan === void 0 ? 'NaN' : e.nan + '';
  function u(f) {
    f = ms(f);
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
      : Mm[k] || (v === void 0 && (v = 12), (w = !0), (k = 'g')),
      (x || (d === '0' && m === '=')) && ((x = !0), (d = '0'), (m = '='));
    var S =
        h === '$'
          ? n
          : h === '#' && /[boxX]/.test(k)
          ? '0' + k.toLowerCase()
          : '',
      C = h === '$' ? r : /[%p]/.test(k) ? s : '',
      M = Mm[k],
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
          w && (E = Ib(E)),
          B && +E == 0 && y !== '+' && (B = !1),
          (I = (B ? (y === '(' ? y : a) : y === '-' || y === '(' ? '' : y) + I),
          (R =
            (k === 's' ? Am[8 + o2 / 3] : '') +
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
    var m = u(((f = ms(f)), (f.type = 'f'), f)),
      y = Math.max(-8, Math.min(8, Math.floor(Fi(d) / 3))) * 3,
      h = Math.pow(10, -y),
      x = Am[8 + y / 3];
    return function (p) {
      return m(h * p) + x;
    };
  }
  return { format: u, formatPrefix: c };
}
var ya, Vp, s2;
Lb({ thousands: ',', grouping: [3], currency: ['$', ''] });
function Lb(e) {
  return (ya = jb(e)), (Vp = ya.format), (s2 = ya.formatPrefix), ya;
}
function Db(e) {
  return Math.max(0, -Fi(Math.abs(e)));
}
function Fb(e, t) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(Fi(t) / 3))) * 3 - Fi(Math.abs(e))
  );
}
function zb(e, t) {
  return (
    (e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, Fi(t) - Fi(e)) + 1
  );
}
function Ub(e, t, n, r) {
  var i = rd(e, t, n),
    o;
  switch (((r = ms(r ?? ',f')), r.type)) {
    case 's': {
      var s = Math.max(Math.abs(e), Math.abs(t));
      return (
        r.precision == null && !isNaN((o = Fb(i, s))) && (r.precision = o),
        s2(r, s)
      );
    }
    case '':
    case 'e':
    case 'g':
    case 'p':
    case 'r': {
      r.precision == null &&
        !isNaN((o = zb(i, Math.max(Math.abs(e), Math.abs(t))))) &&
        (r.precision = o - (r.type === 'e'));
      break;
    }
    case 'f':
    case '%': {
      r.precision == null &&
        !isNaN((o = Db(i))) &&
        (r.precision = o - (r.type === '%') * 2);
      break;
    }
  }
  return Vp(r);
}
function Hp(e) {
  var t = e.domain;
  return (
    (e.ticks = function (n) {
      var r = t();
      return td(r[0], r[r.length - 1], n ?? 10);
    }),
    (e.tickFormat = function (n, r) {
      var i = t();
      return Ub(i[0], i[i.length - 1], n ?? 10, r);
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
        if (((u = nd(s, a, n)), u === l)) return (r[i] = s), (r[o] = a), t(r);
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
function a2() {
  var e = i2();
  return (
    (e.copy = function () {
      return Vu(e, a2());
    }),
    gr.apply(e, arguments),
    Hp(e)
  );
}
function l2(e, t) {
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
function Rm(e) {
  return Math.log(e);
}
function Om(e) {
  return Math.exp(e);
}
function Vb(e) {
  return -Math.log(-e);
}
function Hb(e) {
  return -Math.exp(-e);
}
function Bb(e) {
  return isFinite(e) ? +('1e' + e) : e < 0 ? 0 : e;
}
function Wb(e) {
  return e === 10 ? Bb : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function Yb(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)), (t) => Math.log(t) / e);
}
function $m(e) {
  return (t, n) => -e(-t, n);
}
function Gb(e) {
  const t = e(Rm, Om),
    n = t.domain;
  let r = 10,
    i,
    o;
  function s() {
    return (
      (i = Yb(r)),
      (o = Wb(r)),
      n()[0] < 0 ? ((i = $m(i)), (o = $m(o)), e(Vb, Hb)) : e(Rm, Om),
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
        p.length * 2 < x && (p = td(u, c, x));
      } else p = td(d, m, Math.min(m - d, x)).map(o);
      return f ? p.reverse() : p;
    }),
    (t.tickFormat = (a, l) => {
      if (
        (a == null && (a = 10),
        l == null && (l = r === 10 ? 's' : ','),
        typeof l != 'function' &&
          (!(r % 1) && (l = ms(l)).precision == null && (l.trim = !0),
          (l = Vp(l))),
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
        l2(n(), {
          floor: (a) => o(Math.floor(i(a))),
          ceil: (a) => o(Math.ceil(i(a))),
        })
      )),
    t
  );
}
function u2() {
  const e = Gb(zp()).domain([1, 10]);
  return (e.copy = () => Vu(e, u2()).base(e.base())), gr.apply(e, arguments), e;
}
function Im(e) {
  return function (t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function Qb(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function Kb(e) {
  return e < 0 ? -e * e : e * e;
}
function Xb(e) {
  var t = e(Nt, Nt),
    n = 1;
  function r() {
    return n === 1 ? e(Nt, Nt) : n === 0.5 ? e(Qb, Kb) : e(Im(n), Im(1 / n));
  }
  return (
    (t.exponent = function (i) {
      return arguments.length ? ((n = +i), r()) : n;
    }),
    Hp(t)
  );
}
function Bp() {
  var e = Xb(zp());
  return (
    (e.copy = function () {
      return Vu(e, Bp()).exponent(e.exponent());
    }),
    gr.apply(e, arguments),
    e
  );
}
function qb() {
  return Bp.apply(null, arguments).exponent(0.5);
}
function c2() {
  var e = [0.5],
    t = [0, 1],
    n,
    r = 1;
  function i(o) {
    return o != null && o <= o ? t[qv(e, o, 0, r)] : n;
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
      return c2().domain(e).range(t).unknown(n);
    }),
    gr.apply(i, arguments)
  );
}
const Nc = new Date(),
  jc = new Date();
function Ne(e, t, n, r) {
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
      Ne(
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
        Nc.setTime(+o), jc.setTime(+s), e(Nc), e(jc), Math.floor(n(Nc, jc))
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
const Rl = Ne(
  () => {},
  (e, t) => {
    e.setTime(+e + t);
  },
  (e, t) => t - e
);
Rl.every = (e) => (
  (e = Math.floor(e)),
  !isFinite(e) || !(e > 0)
    ? null
    : e > 1
    ? Ne(
        (t) => {
          t.setTime(Math.floor(t / e) * e);
        },
        (t, n) => {
          t.setTime(+t + n * e);
        },
        (t, n) => (n - t) / e
      )
    : Rl
);
Rl.range;
const Pn = 1e3,
  jt = Pn * 60,
  Mn = jt * 60,
  Nn = Mn * 24,
  Wp = Nn * 7,
  Nm = Nn * 30,
  Lc = Nn * 365,
  Ar = Ne(
    (e) => {
      e.setTime(e - e.getMilliseconds());
    },
    (e, t) => {
      e.setTime(+e + t * Pn);
    },
    (e, t) => (t - e) / Pn,
    (e) => e.getUTCSeconds()
  );
Ar.range;
const Yp = Ne(
  (e) => {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * Pn);
  },
  (e, t) => {
    e.setTime(+e + t * jt);
  },
  (e, t) => (t - e) / jt,
  (e) => e.getMinutes()
);
Yp.range;
const Gp = Ne(
  (e) => {
    e.setUTCSeconds(0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * jt);
  },
  (e, t) => (t - e) / jt,
  (e) => e.getUTCMinutes()
);
Gp.range;
const Qp = Ne(
  (e) => {
    e.setTime(
      e - e.getMilliseconds() - e.getSeconds() * Pn - e.getMinutes() * jt
    );
  },
  (e, t) => {
    e.setTime(+e + t * Mn);
  },
  (e, t) => (t - e) / Mn,
  (e) => e.getHours()
);
Qp.range;
const Kp = Ne(
  (e) => {
    e.setUTCMinutes(0, 0, 0);
  },
  (e, t) => {
    e.setTime(+e + t * Mn);
  },
  (e, t) => (t - e) / Mn,
  (e) => e.getUTCHours()
);
Kp.range;
const Vs = Ne(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * jt) / Nn,
  (e) => e.getDate() - 1
);
Vs.range;
const Hu = Ne(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / Nn,
  (e) => e.getUTCDate() - 1
);
Hu.range;
const f2 = Ne(
  (e) => {
    e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCDate(e.getUTCDate() + t);
  },
  (e, t) => (t - e) / Nn,
  (e) => Math.floor(e / Nn)
);
f2.range;
function Qr(e) {
  return Ne(
    (t) => {
      t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
        t.setHours(0, 0, 0, 0);
    },
    (t, n) => {
      t.setDate(t.getDate() + n * 7);
    },
    (t, n) =>
      (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * jt) / Wp
  );
}
const Bu = Qr(0),
  Ol = Qr(1),
  Zb = Qr(2),
  Jb = Qr(3),
  zi = Qr(4),
  e_ = Qr(5),
  t_ = Qr(6);
Bu.range;
Ol.range;
Zb.range;
Jb.range;
zi.range;
e_.range;
t_.range;
function Kr(e) {
  return Ne(
    (t) => {
      t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
        t.setUTCHours(0, 0, 0, 0);
    },
    (t, n) => {
      t.setUTCDate(t.getUTCDate() + n * 7);
    },
    (t, n) => (n - t) / Wp
  );
}
const Wu = Kr(0),
  $l = Kr(1),
  n_ = Kr(2),
  r_ = Kr(3),
  Ui = Kr(4),
  i_ = Kr(5),
  o_ = Kr(6);
Wu.range;
$l.range;
n_.range;
r_.range;
Ui.range;
i_.range;
o_.range;
const Xp = Ne(
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
Xp.range;
const qp = Ne(
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
qp.range;
const jn = Ne(
  (e) => {
    e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setFullYear(e.getFullYear() + t);
  },
  (e, t) => t.getFullYear() - e.getFullYear(),
  (e) => e.getFullYear()
);
jn.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : Ne(
        (t) => {
          t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0);
        },
        (t, n) => {
          t.setFullYear(t.getFullYear() + n * e);
        }
      );
jn.range;
const Ln = Ne(
  (e) => {
    e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  },
  (e, t) => {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
  (e) => e.getUTCFullYear()
);
Ln.every = (e) =>
  !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : Ne(
        (t) => {
          t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0);
        },
        (t, n) => {
          t.setUTCFullYear(t.getUTCFullYear() + n * e);
        }
      );
Ln.range;
function d2(e, t, n, r, i, o) {
  const s = [
    [Ar, 1, Pn],
    [Ar, 5, 5 * Pn],
    [Ar, 15, 15 * Pn],
    [Ar, 30, 30 * Pn],
    [o, 1, jt],
    [o, 5, 5 * jt],
    [o, 15, 15 * jt],
    [o, 30, 30 * jt],
    [i, 1, Mn],
    [i, 3, 3 * Mn],
    [i, 6, 6 * Mn],
    [i, 12, 12 * Mn],
    [r, 1, Nn],
    [r, 2, 2 * Nn],
    [n, 1, Wp],
    [t, 1, Nm],
    [t, 3, 3 * Nm],
    [e, 1, Lc],
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
      m = jp(([, , x]) => x).right(s, d);
    if (m === s.length) return e.every(rd(u / Lc, c / Lc, f));
    if (m === 0) return Rl.every(Math.max(rd(u, c, f), 1));
    const [y, h] = s[d / s[m - 1][2] < s[m][2] / d ? m - 1 : m];
    return y.every(h);
  }
  return [a, l];
}
const [s_, a_] = d2(Ln, qp, Wu, f2, Kp, Gp),
  [l_, u_] = d2(jn, Xp, Bu, Vs, Qp, Yp);
function Dc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Fc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function ho(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function c_(e) {
  var t = e.dateTime,
    n = e.date,
    r = e.time,
    i = e.periods,
    o = e.days,
    s = e.shortDays,
    a = e.months,
    l = e.shortMonths,
    u = mo(i),
    c = go(i),
    f = mo(o),
    d = go(o),
    m = mo(s),
    y = go(s),
    h = mo(a),
    x = go(a),
    p = mo(l),
    g = go(l),
    v = {
      a: B,
      A: $,
      b: F,
      B: H,
      c: null,
      d: Um,
      e: Um,
      f: $_,
      g: H_,
      G: W_,
      H: A_,
      I: R_,
      j: O_,
      L: p2,
      m: I_,
      M: N_,
      p: q,
      q: Y,
      Q: Bm,
      s: Wm,
      S: j_,
      u: L_,
      U: D_,
      V: F_,
      w: z_,
      W: U_,
      x: null,
      X: null,
      y: V_,
      Y: B_,
      Z: Y_,
      '%': Hm,
    },
    w = {
      a: ye,
      A: ce,
      b: X,
      B: oe,
      c: null,
      d: Vm,
      e: Vm,
      f: X_,
      g: s6,
      G: l6,
      H: G_,
      I: Q_,
      j: K_,
      L: m2,
      m: q_,
      M: Z_,
      p: ue,
      q: fe,
      Q: Bm,
      s: Wm,
      S: J_,
      u: e6,
      U: t6,
      V: n6,
      w: r6,
      W: i6,
      x: null,
      X: null,
      y: o6,
      Y: a6,
      Z: u6,
      '%': Hm,
    },
    k = {
      a: T,
      A: E,
      b: I,
      B: R,
      c: O,
      d: Fm,
      e: Fm,
      f: P_,
      g: Dm,
      G: Lm,
      H: zm,
      I: zm,
      j: k_,
      L: __,
      m: S_,
      M: C_,
      p: A,
      q: w_,
      Q: E_,
      s: T_,
      S: b_,
      u: m_,
      U: g_,
      V: y_,
      w: h_,
      W: v_,
      x: D,
      X: U,
      y: Dm,
      Y: Lm,
      Z: x_,
      '%': M_,
    };
  (v.x = S(n, v)),
    (v.X = S(r, v)),
    (v.c = S(t, v)),
    (w.x = S(n, w)),
    (w.X = S(r, w)),
    (w.c = S(t, w));
  function S(z, W) {
    return function (G) {
      var N = [],
        Se = -1,
        J = 0,
        Re = z.length,
        Ee,
        gt,
        Qs;
      for (G instanceof Date || (G = new Date(+G)); ++Se < Re; )
        z.charCodeAt(Se) === 37 &&
          (N.push(z.slice(J, Se)),
          (gt = jm[(Ee = z.charAt(++Se))]) != null
            ? (Ee = z.charAt(++Se))
            : (gt = Ee === 'e' ? ' ' : '0'),
          (Qs = W[Ee]) && (Ee = Qs(G, gt)),
          N.push(Ee),
          (J = Se + 1));
      return N.push(z.slice(J, Se)), N.join('');
    };
  }
  function C(z, W) {
    return function (G) {
      var N = ho(1900, void 0, 1),
        Se = M(N, z, (G += ''), 0),
        J,
        Re;
      if (Se != G.length) return null;
      if ('Q' in N) return new Date(N.Q);
      if ('s' in N) return new Date(N.s * 1e3 + ('L' in N ? N.L : 0));
      if (
        (W && !('Z' in N) && (N.Z = 0),
        'p' in N && (N.H = (N.H % 12) + N.p * 12),
        N.m === void 0 && (N.m = 'q' in N ? N.q : 0),
        'V' in N)
      ) {
        if (N.V < 1 || N.V > 53) return null;
        'w' in N || (N.w = 1),
          'Z' in N
            ? ((J = Fc(ho(N.y, 0, 1))),
              (Re = J.getUTCDay()),
              (J = Re > 4 || Re === 0 ? $l.ceil(J) : $l(J)),
              (J = Hu.offset(J, (N.V - 1) * 7)),
              (N.y = J.getUTCFullYear()),
              (N.m = J.getUTCMonth()),
              (N.d = J.getUTCDate() + ((N.w + 6) % 7)))
            : ((J = Dc(ho(N.y, 0, 1))),
              (Re = J.getDay()),
              (J = Re > 4 || Re === 0 ? Ol.ceil(J) : Ol(J)),
              (J = Vs.offset(J, (N.V - 1) * 7)),
              (N.y = J.getFullYear()),
              (N.m = J.getMonth()),
              (N.d = J.getDate() + ((N.w + 6) % 7)));
      } else
        ('W' in N || 'U' in N) &&
          ('w' in N || (N.w = 'u' in N ? N.u % 7 : 'W' in N ? 1 : 0),
          (Re =
            'Z' in N
              ? Fc(ho(N.y, 0, 1)).getUTCDay()
              : Dc(ho(N.y, 0, 1)).getDay()),
          (N.m = 0),
          (N.d =
            'W' in N
              ? ((N.w + 6) % 7) + N.W * 7 - ((Re + 5) % 7)
              : N.w + N.U * 7 - ((Re + 6) % 7)));
      return 'Z' in N
        ? ((N.H += (N.Z / 100) | 0), (N.M += N.Z % 100), Fc(N))
        : Dc(N);
    };
  }
  function M(z, W, G, N) {
    for (var Se = 0, J = W.length, Re = G.length, Ee, gt; Se < J; ) {
      if (N >= Re) return -1;
      if (((Ee = W.charCodeAt(Se++)), Ee === 37)) {
        if (
          ((Ee = W.charAt(Se++)),
          (gt = k[Ee in jm ? W.charAt(Se++) : Ee]),
          !gt || (N = gt(z, G, N)) < 0)
        )
          return -1;
      } else if (Ee != G.charCodeAt(N++)) return -1;
    }
    return N;
  }
  function A(z, W, G) {
    var N = u.exec(W.slice(G));
    return N ? ((z.p = c.get(N[0].toLowerCase())), G + N[0].length) : -1;
  }
  function T(z, W, G) {
    var N = m.exec(W.slice(G));
    return N ? ((z.w = y.get(N[0].toLowerCase())), G + N[0].length) : -1;
  }
  function E(z, W, G) {
    var N = f.exec(W.slice(G));
    return N ? ((z.w = d.get(N[0].toLowerCase())), G + N[0].length) : -1;
  }
  function I(z, W, G) {
    var N = p.exec(W.slice(G));
    return N ? ((z.m = g.get(N[0].toLowerCase())), G + N[0].length) : -1;
  }
  function R(z, W, G) {
    var N = h.exec(W.slice(G));
    return N ? ((z.m = x.get(N[0].toLowerCase())), G + N[0].length) : -1;
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
var jm = { '-': '', _: ' ', 0: '0' },
  ze = /^\s*\d+/,
  f_ = /^%/,
  d_ = /[\\^$*+?|[\]().{}]/g;
function te(e, t, n) {
  var r = e < 0 ? '-' : '',
    i = (r ? -e : e) + '',
    o = i.length;
  return r + (o < n ? new Array(n - o + 1).join(t) + i : i);
}
function p_(e) {
  return e.replace(d_, '\\$&');
}
function mo(e) {
  return new RegExp('^(?:' + e.map(p_).join('|') + ')', 'i');
}
function go(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function h_(e, t, n) {
  var r = ze.exec(t.slice(n, n + 1));
  return r ? ((e.w = +r[0]), n + r[0].length) : -1;
}
function m_(e, t, n) {
  var r = ze.exec(t.slice(n, n + 1));
  return r ? ((e.u = +r[0]), n + r[0].length) : -1;
}
function g_(e, t, n) {
  var r = ze.exec(t.slice(n, n + 2));
  return r ? ((e.U = +r[0]), n + r[0].length) : -1;
}
function y_(e, t, n) {
  var r = ze.exec(t.slice(n, n + 2));
  return r ? ((e.V = +r[0]), n + r[0].length) : -1;
}
function v_(e, t, n) {
  var r = ze.exec(t.slice(n, n + 2));
  return r ? ((e.W = +r[0]), n + r[0].length) : -1;
}
function Lm(e, t, n) {
  var r = ze.exec(t.slice(n, n + 4));
  return r ? ((e.y = +r[0]), n + r[0].length) : -1;
}
function Dm(e, t, n) {
  var r = ze.exec(t.slice(n, n + 2));
  return r ? ((e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), n + r[0].length) : -1;
}
function x_(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r
    ? ((e.Z = r[1] ? 0 : -(r[2] + (r[3] || '00'))), n + r[0].length)
    : -1;
}
function w_(e, t, n) {
  var r = ze.exec(t.slice(n, n + 1));
  return r ? ((e.q = r[0] * 3 - 3), n + r[0].length) : -1;
}
function S_(e, t, n) {
  var r = ze.exec(t.slice(n, n + 2));
  return r ? ((e.m = r[0] - 1), n + r[0].length) : -1;
}
function Fm(e, t, n) {
  var r = ze.exec(t.slice(n, n + 2));
  return r ? ((e.d = +r[0]), n + r[0].length) : -1;
}
function k_(e, t, n) {
  var r = ze.exec(t.slice(n, n + 3));
  return r ? ((e.m = 0), (e.d = +r[0]), n + r[0].length) : -1;
}
function zm(e, t, n) {
  var r = ze.exec(t.slice(n, n + 2));
  return r ? ((e.H = +r[0]), n + r[0].length) : -1;
}
function C_(e, t, n) {
  var r = ze.exec(t.slice(n, n + 2));
  return r ? ((e.M = +r[0]), n + r[0].length) : -1;
}
function b_(e, t, n) {
  var r = ze.exec(t.slice(n, n + 2));
  return r ? ((e.S = +r[0]), n + r[0].length) : -1;
}
function __(e, t, n) {
  var r = ze.exec(t.slice(n, n + 3));
  return r ? ((e.L = +r[0]), n + r[0].length) : -1;
}
function P_(e, t, n) {
  var r = ze.exec(t.slice(n, n + 6));
  return r ? ((e.L = Math.floor(r[0] / 1e3)), n + r[0].length) : -1;
}
function M_(e, t, n) {
  var r = f_.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function E_(e, t, n) {
  var r = ze.exec(t.slice(n));
  return r ? ((e.Q = +r[0]), n + r[0].length) : -1;
}
function T_(e, t, n) {
  var r = ze.exec(t.slice(n));
  return r ? ((e.s = +r[0]), n + r[0].length) : -1;
}
function Um(e, t) {
  return te(e.getDate(), t, 2);
}
function A_(e, t) {
  return te(e.getHours(), t, 2);
}
function R_(e, t) {
  return te(e.getHours() % 12 || 12, t, 2);
}
function O_(e, t) {
  return te(1 + Vs.count(jn(e), e), t, 3);
}
function p2(e, t) {
  return te(e.getMilliseconds(), t, 3);
}
function $_(e, t) {
  return p2(e, t) + '000';
}
function I_(e, t) {
  return te(e.getMonth() + 1, t, 2);
}
function N_(e, t) {
  return te(e.getMinutes(), t, 2);
}
function j_(e, t) {
  return te(e.getSeconds(), t, 2);
}
function L_(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function D_(e, t) {
  return te(Bu.count(jn(e) - 1, e), t, 2);
}
function h2(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? zi(e) : zi.ceil(e);
}
function F_(e, t) {
  return (e = h2(e)), te(zi.count(jn(e), e) + (jn(e).getDay() === 4), t, 2);
}
function z_(e) {
  return e.getDay();
}
function U_(e, t) {
  return te(Ol.count(jn(e) - 1, e), t, 2);
}
function V_(e, t) {
  return te(e.getFullYear() % 100, t, 2);
}
function H_(e, t) {
  return (e = h2(e)), te(e.getFullYear() % 100, t, 2);
}
function B_(e, t) {
  return te(e.getFullYear() % 1e4, t, 4);
}
function W_(e, t) {
  var n = e.getDay();
  return (
    (e = n >= 4 || n === 0 ? zi(e) : zi.ceil(e)),
    te(e.getFullYear() % 1e4, t, 4)
  );
}
function Y_(e) {
  var t = e.getTimezoneOffset();
  return (
    (t > 0 ? '-' : ((t *= -1), '+')) +
    te((t / 60) | 0, '0', 2) +
    te(t % 60, '0', 2)
  );
}
function Vm(e, t) {
  return te(e.getUTCDate(), t, 2);
}
function G_(e, t) {
  return te(e.getUTCHours(), t, 2);
}
function Q_(e, t) {
  return te(e.getUTCHours() % 12 || 12, t, 2);
}
function K_(e, t) {
  return te(1 + Hu.count(Ln(e), e), t, 3);
}
function m2(e, t) {
  return te(e.getUTCMilliseconds(), t, 3);
}
function X_(e, t) {
  return m2(e, t) + '000';
}
function q_(e, t) {
  return te(e.getUTCMonth() + 1, t, 2);
}
function Z_(e, t) {
  return te(e.getUTCMinutes(), t, 2);
}
function J_(e, t) {
  return te(e.getUTCSeconds(), t, 2);
}
function e6(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function t6(e, t) {
  return te(Wu.count(Ln(e) - 1, e), t, 2);
}
function g2(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Ui(e) : Ui.ceil(e);
}
function n6(e, t) {
  return (e = g2(e)), te(Ui.count(Ln(e), e) + (Ln(e).getUTCDay() === 4), t, 2);
}
function r6(e) {
  return e.getUTCDay();
}
function i6(e, t) {
  return te($l.count(Ln(e) - 1, e), t, 2);
}
function o6(e, t) {
  return te(e.getUTCFullYear() % 100, t, 2);
}
function s6(e, t) {
  return (e = g2(e)), te(e.getUTCFullYear() % 100, t, 2);
}
function a6(e, t) {
  return te(e.getUTCFullYear() % 1e4, t, 4);
}
function l6(e, t) {
  var n = e.getUTCDay();
  return (
    (e = n >= 4 || n === 0 ? Ui(e) : Ui.ceil(e)),
    te(e.getUTCFullYear() % 1e4, t, 4)
  );
}
function u6() {
  return '+0000';
}
function Hm() {
  return '%';
}
function Bm(e) {
  return +e;
}
function Wm(e) {
  return Math.floor(+e / 1e3);
}
var ri, y2, v2;
c6({
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
function c6(e) {
  return (
    (ri = c_(e)),
    (y2 = ri.format),
    ri.parse,
    (v2 = ri.utcFormat),
    ri.utcParse,
    ri
  );
}
function f6(e) {
  return new Date(e);
}
function d6(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function Zp(e, t, n, r, i, o, s, a, l, u) {
  var c = i2(),
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
      return arguments.length ? d(Array.from(S, d6)) : d().map(f6);
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
        S ? d(l2(C, S)) : c
      );
    }),
    (c.copy = function () {
      return Vu(c, Zp(e, t, n, r, i, o, s, a, l, u));
    }),
    c
  );
}
function x2() {
  return gr.apply(
    Zp(l_, u_, jn, Xp, Bu, Vs, Qp, Yp, Ar, y2).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments
  );
}
function p6() {
  return gr.apply(
    Zp(s_, a_, Ln, qp, Wu, Hu, Kp, Gp, Ar, v2).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments
  );
}
function h6() {
  var e = 0,
    t = 1,
    n,
    r,
    i,
    o,
    s = Nt,
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
    (u.range = c(Uu)),
    (u.rangeRound = c(r2)),
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
function m6(e, t) {
  return t
    .domain(e.domain())
    .interpolator(e.interpolator())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function w2() {
  var e = Hp(h6()(Nt));
  return (
    (e.copy = function () {
      return m6(e, w2());
    }),
    tb.apply(e, arguments)
  );
}
function g6(e) {
  return e.scaleType === 'band';
}
function y6(e) {
  return e.scaleType === 'point';
}
function v6(e) {
  return e.type === 'piecewise'
    ? c2(e.thresholds, e.colors)
    : w2([e.min ?? 0, e.max ?? 100], e.color);
}
function Il(e) {
  return e.values
    ? Ml(e.values, e.colors).unknown(e.unknownColor ?? null)
    : Ml(
        e.colors.map((t, n) => n),
        e.colors
      ).unknown(e.unknownColor ?? null);
}
function Wa(e) {
  return e.type === 'ordinal' ? Il(e) : v6(e);
}
function gs(e) {
  return e.bandwidth !== void 0;
}
function x6(e) {
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
const zc = { start: 0, extremities: 0, end: 1, middle: 0.5 };
function S2(e) {
  const {
    scale: t,
    tickNumber: n,
    valueFormatter: r,
    tickInterval: i,
    tickPlacement: o = 'extremities',
    tickLabelPlacement: s = 'middle',
  } = e;
  return P.useMemo(() => {
    if (gs(t)) {
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
              offset: t(f) - (t.step() - t.bandwidth()) / 2 + zc[o] * t.step(),
              labelOffset: s === 'tick' ? 0 : t.step() * (zc[s] - zc[o]),
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
function w6(e, t, n) {
  switch (e) {
    case 'log':
      return u2(t, n);
    case 'pow':
      return Bp(t, n);
    case 'sqrt':
      return qb(t, n);
    case 'time':
      return x2(t, n);
    case 'utc':
      return p6(t, n);
    default:
      return a2(t, n);
  }
}
const S6 = (e, t, n, r, i, o) => {
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
  k6 = (e, t, n, r) =>
    Object.keys(t).reduce((o, s) => S6(o, s, e, t, n, r), [null, null]),
  C6 = (e, t, n) =>
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
  b6 = (e, t, n) => {
    const r =
      t === 'x' ? [e.left, e.left + e.width] : [e.top + e.height, e.top];
    return n ? r.reverse() : r;
  },
  Uc = (e, t) => {
    const n = e[1] - e[0],
      r = t[1] - t[0],
      i = e[0] - (t[0] * n) / r,
      o = e[1] + ((100 - t[1]) * n) / r;
    return [i, o];
  },
  Ym = (e) => (e == null ? void 0 : e[0]) instanceof Date;
function Gm(e, t) {
  const n = x2(e.data, t);
  return (r, { location: i }) =>
    i === 'tick' ? n.tickFormat(e.tickNumber)(r) : `${r.toLocaleString()}`;
}
const _6 = 0.2,
  P6 = 0.1;
function Qm({
  drawingArea: e,
  formattedSeries: t,
  axis: n,
  extremumGetters: r,
  dataset: i,
  axisDirection: o,
  zoomData: s,
}) {
  const a = C6(n, i, o),
    l = {};
  return (
    a.forEach((u, c) => {
      const f = c === 0,
        [d, m] = k6(u, r, f, t),
        y = s == null ? void 0 : s.find(({ axisId: T }) => T === u.id),
        h = y ? [y.start, y.end] : [0, 100],
        x = b6(e, o, u.reverse);
      if (g6(u)) {
        const T = u.categoryGapRatio ?? _6,
          E = u.barGapRatio ?? P6,
          I = o === 'x' ? x : [x[1], x[0]],
          R = Uc(I, h);
        if (
          ((l[u.id] = _({ categoryGapRatio: T, barGapRatio: E }, u, {
            scale: Lp(u.data, R)
              .paddingInner(T)
              .paddingOuter(T / 2),
            tickNumber: u.data.length,
            colorScale:
              u.colorMap &&
              (u.colorMap.type === 'ordinal'
                ? Il(_({ values: u.data }, u.colorMap))
                : Wa(u.colorMap)),
          })),
          Ym(u.data))
        ) {
          const O = Gm(u, I);
          l[u.id].valueFormatter = u.valueFormatter ?? O;
        }
      }
      if (y6(u)) {
        const T = o === 'x' ? x : [...x].reverse(),
          E = Uc(T, h);
        if (
          ((l[u.id] = _({}, u, {
            scale: nb(u.data, E),
            tickNumber: u.data.length,
            colorScale:
              u.colorMap &&
              (u.colorMap.type === 'ordinal'
                ? Il(_({ values: u.data }, u.colorMap))
                : Wa(u.colorMap)),
          })),
          Ym(u.data))
        ) {
          const I = Gm(u, T);
          l[u.id].valueFormatter = u.valueFormatter ?? I;
        }
      }
      if (u.scaleType === 'band' || u.scaleType === 'point') return;
      const p = u.scaleType ?? 'linear',
        g = [u.min ?? d, u.max ?? m],
        v = x6(_({}, u, { range: x, domain: g })),
        w = v / ((h[1] - h[0]) / 100),
        k = Uc(x, h),
        S = w6(p, g, k).nice(v),
        [C, M] = S.domain(),
        A = [u.min ?? C, u.max ?? M];
      l[u.id] = _({}, u, {
        scaleType: p,
        scale: S.domain(A),
        tickNumber: w,
        colorScale: u.colorMap && Wa(u.colorMap),
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
  } = P.useContext(au);
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
function Xr() {
  const { isInitialized: e, data: t } = P.useContext(Kv);
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
function M6() {
  const e = Xr();
  return P.useMemo(() => e.pie, [e.pie]);
}
const k2 = P.createContext({
  isInitialized: !1,
  data: { xAxis: {}, yAxis: {}, xAxisIds: [], yAxisIds: [] },
});
function E6(e) {
  const {
      xAxis: t,
      yAxis: n,
      dataset: r,
      xExtremumGetters: i,
      yExtremumGetters: o,
      children: s,
    } = e,
    a = Xr(),
    l = Vn(),
    u = P.useMemo(
      () =>
        Qm({
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
        Qm({
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
  return b.jsx(k2.Provider, { value: f, children: s });
}
const yr = () => {
  const { data: e } = P.useContext(k2);
  return e;
};
function T6(e, t) {
  const n = e.createSVGPoint();
  return (
    (n.x = t.clientX),
    (n.y = t.clientY),
    n.matrixTransform(e.getScreenCTM().inverse())
  );
}
function C2() {
  const { isInitialized: e, data: t } = P.useContext(iv);
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
function ii(e) {
  return e instanceof Date ? e.getTime() : e;
}
const A6 = (e) => {
    const t = C2(),
      n = Vn(),
      { xAxis: r, yAxis: i, xAxisIds: o, yAxisIds: s } = yr(),
      { dispatch: a } = P.useContext(zs),
      l = o[0],
      u = s[0],
      c = P.useRef({ isInChart: !1, x: -1, y: -1 });
    P.useEffect(() => {
      const f = t.current;
      if (f === null || e) return () => {};
      function d(x, p) {
        const { scale: g, data: v, reverse: w } = x;
        if (!gs(g)) {
          const S = g.invert(p);
          if (v === void 0) return { value: S };
          const C = ii(S),
            M =
              v == null
                ? void 0
                : v.findIndex((A, T) => {
                    const E = ii(A);
                    return (
                      (E > C &&
                        (T === 0 ||
                          Math.abs(C - E) <= Math.abs(C - ii(v[T - 1])))) ||
                      (E <= C &&
                        (T === v.length - 1 ||
                          Math.abs(ii(S) - E) < Math.abs(ii(S) - ii(v[T + 1]))))
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
            g = T6(f, p);
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
  R6 = [
    'children',
    'width',
    'height',
    'viewBox',
    'disableAxisListener',
    'className',
    'title',
    'desc',
  ],
  O6 = qe('svg', { name: 'MuiChartsSurface', slot: 'Root' })(() => ({
    touchAction: 'none',
  })),
  $6 = P.forwardRef(function (t, n) {
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
      f = ie(t, R6),
      d = _({ width: i, height: o, x: 0, y: 0 }, s);
    return (
      A6(a),
      b.jsxs(
        O6,
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
function Km(e) {
  return gs(e) ? (t) => (e(t) ?? 0) + e.bandwidth() / 2 : (t) => e(t);
}
const Jp = P.createContext({ zAxis: {}, zAxisIds: [] });
function I6(e) {
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
                ? Il(_({ values: l.data }, l.colorMap))
                : Wa(
                    l.colorMap.type === 'continuous'
                      ? _({ min: l.min, max: l.max }, l.colorMap)
                      : l.colorMap
                  )),
          });
        }),
        { zAxis: a, zAxisIds: s.map(({ id: l }) => l) }
      );
    }, [i]);
  return b.jsx(Jp.Provider, { value: o, children: r });
}
function Xm(e) {
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
const N6 = 10;
function qm(e) {
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
  const f = typeof u[0] == 'number' ? hs(u[0], u[1]) : n2(u[0], u[1]),
    d = Math.round((Math.max(...c) - Math.min(...c)) / N6),
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
function j6() {
  const { chartId: e } = P.useContext(au);
  return P.useCallback((t, n) => `${e}-gradient-${n}-${t}`, [e]);
}
function L6() {
  const { top: e, height: t, bottom: n, left: r, width: i, right: o } = Vn(),
    s = e + t + n,
    a = r + i + o,
    l = j6(),
    { xAxisIds: u, xAxis: c, yAxisIds: f, yAxis: d } = yr();
  return b.jsxs('defs', {
    children: [
      f
        .filter((m) => d[m].colorMap !== void 0)
        .map((m) => {
          const y = l(m, 'y'),
            { colorMap: h, scale: x, colorScale: p, reverse: g } = d[m];
          return (h == null ? void 0 : h.type) === 'piecewise'
            ? b.jsx(
                Xm,
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
                qm,
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
                Xm,
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
                qm,
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
const b2 = P.createContext({
    isInitialized: !1,
    data: {
      highlightedItem: null,
      setHighlighted: () => {},
      clearHighlighted: () => {},
      isHighlighted: () => !1,
      isFaded: () => !1,
    },
  }),
  D6 = (e, t) => (n) =>
    e
      ? e.fade === 'series'
        ? n.seriesId === (t == null ? void 0 : t.seriesId) &&
          n.dataIndex !== (t == null ? void 0 : t.dataIndex)
        : e.fade === 'global'
        ? n.seriesId !== (t == null ? void 0 : t.seriesId) ||
          n.dataIndex !== (t == null ? void 0 : t.dataIndex)
        : !1
      : !1,
  F6 = (e, t) => (n) =>
    e
      ? e.highlight === 'series'
        ? n.seriesId === (t == null ? void 0 : t.seriesId)
        : e.highlight === 'item'
        ? n.dataIndex === (t == null ? void 0 : t.dataIndex) &&
          n.seriesId === (t == null ? void 0 : t.seriesId)
        : !1
      : !1,
  z6 = ['highlighted', 'faded'],
  U6 = (e) => {
    const t = e ?? {},
      { highlighted: n, faded: r } = t,
      i = ie(t, z6);
    return _({ highlight: n, fade: r }, i);
  };
function V6({ children: e, highlightedItem: t, onHighlightChange: n }) {
  const [r, i] = S5({
      controlled: t,
      default: null,
      name: 'HighlightedProvider',
      state: 'highlightedItem',
    }),
    o = Xr(),
    s = P.useMemo(() => {
      const u = new Map();
      return (
        Object.keys(o).forEach((c) => {
          const f = o[c];
          Object.keys((f == null ? void 0 : f.series) ?? {}).forEach((d) => {
            const m = f == null ? void 0 : f.series[d];
            u.set(d, U6(m == null ? void 0 : m.highlightScope));
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
          isHighlighted: F6(a, r),
          isFaded: D6(a, r),
        },
      }),
      [r, a, i, n]
    );
  return b.jsx(b2.Provider, { value: l, children: e });
}
function eh() {
  const { isInitialized: e, data: t } = P.useContext(b2);
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
const _2 = (e) => {
    const { axis: t } = e,
      n = Math.min(...(t.data ?? [])),
      r = Math.max(...(t.data ?? []));
    return [n, r];
  },
  P2 = (e) => {
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
  H6 = (e) =>
    Object.keys(e.series).some((n) => e.series[n].layout === 'horizontal')
      ? P2(e)
      : _2(e),
  B6 = (e) =>
    Object.keys(e.series).some((n) => e.series[n].layout === 'horizontal')
      ? _2(e)
      : P2(e);
function $e(e) {
  return function () {
    return e;
  };
}
const Zm = Math.abs,
  Ge = Math.atan2,
  wr = Math.cos,
  W6 = Math.max,
  Vc = Math.min,
  sn = Math.sin,
  xi = Math.sqrt,
  it = 1e-12,
  ys = Math.PI,
  Nl = ys / 2,
  Ya = 2 * ys;
function Y6(e) {
  return e > 1 ? 0 : e < -1 ? ys : Math.acos(e);
}
function Jm(e) {
  return e >= 1 ? Nl : e <= -1 ? -Nl : Math.asin(e);
}
const ad = Math.PI,
  ld = 2 * ad,
  br = 1e-6,
  G6 = ld - br;
function M2(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t) this._ += arguments[t] + e[t];
}
function Q6(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return M2;
  const n = 10 ** t;
  return function (r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class K6 {
  constructor(t) {
    (this._x0 = this._y0 = this._x1 = this._y1 = null),
      (this._ = ''),
      (this._append = t == null ? M2 : Q6(t));
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
    else if (d > br)
      if (!(Math.abs(f * l - u * c) > br) || !o)
        this._append`L${(this._x1 = t)},${(this._y1 = n)}`;
      else {
        let m = r - s,
          y = i - a,
          h = l * l + u * u,
          x = m * m + y * y,
          p = Math.sqrt(h),
          g = Math.sqrt(d),
          v = o * Math.tan((ad - Math.acos((h + d - x) / (2 * p * g))) / 2),
          w = v / g,
          k = v / p;
        Math.abs(w - 1) > br && this._append`L${t + w * c},${n + w * f}`,
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
      : (Math.abs(this._x1 - u) > br || Math.abs(this._y1 - c) > br) &&
        this._append`L${u},${c}`,
      r &&
        (d < 0 && (d = (d % ld) + ld),
        d > G6
          ? this._append`A${r},${r},0,1,${f},${t - a},${
              n - l
            }A${r},${r},0,1,${f},${(this._x1 = u)},${(this._y1 = c)}`
          : d > br &&
            this._append`A${r},${r},0,${+(d >= ad)},${f},${(this._x1 =
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
function X6(e) {
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
    () => new K6(t)
  );
}
function q6(e) {
  return e.innerRadius;
}
function Z6(e) {
  return e.outerRadius;
}
function J6(e) {
  return e.startAngle;
}
function eP(e) {
  return e.endAngle;
}
function tP(e) {
  return e && e.padAngle;
}
function nP(e, t, n, r, i, o, s, a) {
  var l = n - e,
    u = r - t,
    c = s - i,
    f = a - o,
    d = f * l - c * u;
  if (!(d * d < it))
    return (d = (c * (t - o) - f * (e - i)) / d), [e + d * l, t + d * u];
}
function va(e, t, n, r, i, o, s) {
  var a = e - n,
    l = t - r,
    u = (s ? o : -o) / xi(a * a + l * l),
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
    C = (v < 0 ? -1 : 1) * xi(W6(0, k * k * w - S * S)),
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
function E2() {
  var e = q6,
    t = Z6,
    n = $e(0),
    r = null,
    i = J6,
    o = eP,
    s = tP,
    a = null,
    l = X6(u);
  function u() {
    var c,
      f,
      d = +e.apply(this, arguments),
      m = +t.apply(this, arguments),
      y = i.apply(this, arguments) - Nl,
      h = o.apply(this, arguments) - Nl,
      x = Zm(h - y),
      p = h > y;
    if ((a || (a = c = l()), m < d && ((f = m), (m = d), (d = f)), !(m > it)))
      a.moveTo(0, 0);
    else if (x > Ya - it)
      a.moveTo(m * wr(y), m * sn(y)),
        a.arc(0, 0, m, y, h, !p),
        d > it && (a.moveTo(d * wr(h), d * sn(h)), a.arc(0, 0, d, h, y, p));
    else {
      var g = y,
        v = h,
        w = y,
        k = h,
        S = x,
        C = x,
        M = s.apply(this, arguments) / 2,
        A = M > it && (r ? +r.apply(this, arguments) : xi(d * d + m * m)),
        T = Vc(Zm(m - d) / 2, +n.apply(this, arguments)),
        E = T,
        I = T,
        R,
        O;
      if (A > it) {
        var D = Jm((A / d) * sn(M)),
          U = Jm((A / m) * sn(M));
        (S -= D * 2) > it
          ? ((D *= p ? 1 : -1), (w += D), (k -= D))
          : ((S = 0), (w = k = (y + h) / 2)),
          (C -= U * 2) > it
            ? ((U *= p ? 1 : -1), (g += U), (v -= U))
            : ((C = 0), (g = v = (y + h) / 2));
      }
      var B = m * wr(g),
        $ = m * sn(g),
        F = d * wr(k),
        H = d * sn(k);
      if (T > it) {
        var q = m * wr(v),
          Y = m * sn(v),
          ye = d * wr(w),
          ce = d * sn(w),
          X;
        if (x < ys)
          if ((X = nP(B, $, ye, ce, q, Y, F, H))) {
            var oe = B - X[0],
              ue = $ - X[1],
              fe = q - X[0],
              z = Y - X[1],
              W =
                1 /
                sn(
                  Y6(
                    (oe * fe + ue * z) /
                      (xi(oe * oe + ue * ue) * xi(fe * fe + z * z))
                  ) / 2
                ),
              G = xi(X[0] * X[0] + X[1] * X[1]);
            (E = Vc(T, (d - G) / (W - 1))), (I = Vc(T, (m - G) / (W + 1)));
          } else E = I = 0;
      }
      C > it
        ? I > it
          ? ((R = va(ye, ce, B, $, m, I, p)),
            (O = va(q, Y, F, H, m, I, p)),
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
          ? ((R = va(F, H, q, Y, d, -E, p)),
            (O = va(B, $, ye, ce, d, -E, p)),
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
          (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 - ys / 2;
      return [wr(f) * c, sn(f) * c];
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
function T2(e) {
  return typeof e == 'object' && 'length' in e ? e : Array.from(e);
}
function rP(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function iP(e) {
  return e;
}
function oP() {
  var e = iP,
    t = rP,
    n = null,
    r = $e(0),
    i = $e(Ya),
    o = $e(0);
  function s(a) {
    var l,
      u = (a = T2(a)).length,
      c,
      f,
      d = 0,
      m = new Array(u),
      y = new Array(u),
      h = +r.apply(this, arguments),
      x = Math.min(Ya, Math.max(-Ya, i.apply(this, arguments) - h)),
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
function Vi(e, t) {
  if ((s = e.length) > 1)
    for (var n = 1, r, i, o = e[t[0]], s, a = o.length; n < s; ++n)
      for (i = o, o = e[t[n]], r = 0; r < a; ++r)
        o[r][1] += o[r][0] = isNaN(i[r][1]) ? i[r][0] : i[r][1];
}
function Hi(e) {
  for (var t = e.length, n = new Array(t); --t >= 0; ) n[t] = t;
  return n;
}
function sP(e, t) {
  return e[t];
}
function aP(e) {
  const t = [];
  return (t.key = e), t;
}
function A2() {
  var e = $e([]),
    t = Hi,
    n = Vi,
    r = sP;
  function i(o) {
    var s = Array.from(e.apply(this, arguments), aP),
      a,
      l = s.length,
      u = -1,
      c;
    for (const f of o)
      for (a = 0, ++u; a < l; ++a)
        (s[a][u] = [0, +r(f, s[a].key, u, o)]).data = f;
    for (a = 0, c = T2(t(s)); a < l; ++a) s[c[a]].index = a;
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
            o == null ? Hi : typeof o == 'function' ? o : $e(Array.from(o))),
          i)
        : t;
    }),
    (i.offset = function (o) {
      return arguments.length ? ((n = o ?? Vi), i) : n;
    }),
    i
  );
}
function lP(e, t) {
  if ((r = e.length) > 0) {
    for (var n, r, i = 0, o = e[0].length, s; i < o; ++i) {
      for (s = n = 0; n < r; ++n) s += e[n][i][1] || 0;
      if (s) for (n = 0; n < r; ++n) e[n][i][1] /= s;
    }
    Vi(e, t);
  }
}
function uP(e, t) {
  if ((l = e.length) > 0)
    for (var n, r = 0, i, o, s, a, l, u = e[t[0]].length; r < u; ++r)
      for (s = a = 0, n = 0; n < l; ++n)
        (o = (i = e[t[n]][r])[1] - i[0]) > 0
          ? ((i[0] = s), (i[1] = s += o))
          : o < 0
          ? ((i[1] = a), (i[0] = a += o))
          : ((i[0] = 0), (i[1] = o));
}
function cP(e, t) {
  if ((i = e.length) > 0) {
    for (var n = 0, r = e[t[0]], i, o = r.length; n < o; ++n) {
      for (var s = 0, a = 0; s < i; ++s) a += e[s][n][1] || 0;
      r[n][1] += r[n][0] = -a / 2;
    }
    Vi(e, t);
  }
}
function fP(e, t) {
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
    (i[r - 1][1] += i[r - 1][0] = n), Vi(e, t);
  }
}
function R2(e) {
  var t = e.map(dP);
  return Hi(e).sort(function (n, r) {
    return t[n] - t[r];
  });
}
function dP(e) {
  for (var t = -1, n = 0, r = e.length, i, o = -1 / 0; ++t < r; )
    (i = +e[t][1]) > o && ((o = i), (n = t));
  return n;
}
function O2(e) {
  var t = e.map($2);
  return Hi(e).sort(function (n, r) {
    return t[n] - t[r];
  });
}
function $2(e) {
  for (var t = 0, n = -1, r = e.length, i; ++n < r; )
    (i = +e[n][1]) && (t += i);
  return t;
}
function pP(e) {
  return O2(e).reverse();
}
function hP(e) {
  var t = e.length,
    n,
    r,
    i = e.map($2),
    o = R2(e),
    s = 0,
    a = 0,
    l = [],
    u = [];
  for (n = 0; n < t; ++n)
    (r = o[n]), s < a ? ((s += i[r]), l.push(r)) : ((a += i[r]), u.push(r));
  return u.reverse().concat(l);
}
function mP(e) {
  return Hi(e).reverse();
}
const Hc = {
    appearance: R2,
    ascending: O2,
    descending: pP,
    insideOut: hP,
    none: Hi,
    reverse: mP,
  },
  Bc = { expand: lP, diverging: uP, none: Vi, silhouette: cP, wiggle: fP },
  I2 = (e) => {
    const { series: t, seriesOrder: n, defaultStrategy: r } = e,
      i = [],
      o = {};
    return (
      n.forEach((s) => {
        const { stack: a, stackOrder: l, stackOffset: u } = t[s];
        a === void 0
          ? i.push({
              ids: [s],
              stackingOrder: Hc.none,
              stackingOffset: Bc.none,
            })
          : o[a] === void 0
          ? ((o[a] = i.length),
            i.push({
              ids: [s],
              stackingOrder:
                Hc[l ?? (r == null ? void 0 : r.stackOrder) ?? 'none'],
              stackingOffset:
                Bc[u ?? (r == null ? void 0 : r.stackOffset) ?? 'diverging'],
            }))
          : (i[o[a]].ids.push(s),
            l !== void 0 && (i[o[a]].stackingOrder = Hc[l]),
            u !== void 0 && (i[o[a]].stackingOffset = Bc[u]));
      }),
      i
    );
  };
function th(e, t) {
  const n = {};
  return (
    Object.keys(e).forEach((r) => {
      n[r] = _({}, e[r], { valueFormatter: e[r].valueFormatter ?? t });
    }),
    n
  );
}
const gP = (e, t) => {
  const { seriesOrder: n, series: r } = e,
    i = I2(e),
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
        f = A2()
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
      series: th(s, (a) => (a == null ? '' : a.toLocaleString())),
    }
  );
};
function yP(e, t, n) {
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
const vP = {
    seriesType: 'bar',
    seriesFormatter: gP,
    colorProcessor: yP,
    xExtremumGetter: H6,
    yExtremumGetter: B6,
  },
  jl = (e, t) =>
    e[0] === null || e[1] === null
      ? t
      : t[0] === null || t[1] === null
      ? e
      : [Math.min(e[0], t[0]), Math.max(e[1], t[1])],
  xP = (e) => {
    const { series: t, axis: n, isDefaultAxis: r } = e;
    return Object.keys(t)
      .filter((i) => {
        const o = t[i].xAxisId ?? t[i].xAxisKey;
        return o === n.id || (o === void 0 && r);
      })
      .reduce(
        (i, o) => {
          const s = t[o].data.reduce(
            (a, { x: l }) => jl(a, [l, l]),
            [null, null]
          );
          return jl(i, s);
        },
        [null, null]
      );
  },
  wP = (e) => {
    const { series: t, axis: n, isDefaultAxis: r } = e;
    return Object.keys(t)
      .filter((i) => {
        const o = t[i].yAxisId ?? t[i].yAxisKey;
        return o === n.id || (o === void 0 && r);
      })
      .reduce(
        (i, o) => {
          const s = t[o].data.reduce(
            (a, { y: l }) => jl(a, [l, l]),
            [null, null]
          );
          return jl(i, s);
        },
        [null, null]
      );
  },
  SP = ({ series: e, seriesOrder: t }) => ({
    series: th(e, (n) => `(${n.x}, ${n.y})`),
    seriesOrder: t,
  });
function kP(e, t, n, r) {
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
const CP = {
    seriesType: 'scatter',
    seriesFormatter: SP,
    colorProcessor: kP,
    xExtremumGetter: xP,
    yExtremumGetter: wP,
  },
  bP = (e) => {
    const { axis: t } = e,
      n = Math.min(...(t.data ?? [])),
      r = Math.max(...(t.data ?? []));
    return [n, r];
  };
function _P(e, t) {
  return t.length === 0
    ? [null, null]
    : t.reduce((n, r) => {
        const [i, o] = e(r);
        return n[0] === null
          ? [Math.min(i, o), Math.max(i, o)]
          : [Math.min(i, o, n[0]), Math.max(i, o, n[1])];
      }, e(t[0]));
}
const PP = (e) => {
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
            c = _P(u, a);
          if (i[0] === null) return c;
          if (c[0] === null) return i;
          const [f, d] = c;
          return [Math.min(f, i[0]), Math.max(d, i[1])];
        },
        [null, null]
      );
  },
  MP = (e, t) => {
    const { seriesOrder: n, series: r } = e,
      i = I2(_({}, e, { defaultStrategy: { stackOffset: 'none' } })),
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
          f = A2()
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
        series: th(s, (a) => (a == null ? '' : a.toLocaleString())),
      }
    );
  };
function EP(e, t, n) {
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
const TP = {
  seriesType: 'line',
  colorProcessor: EP,
  seriesFormatter: MP,
  xExtremumGetter: bP,
  yExtremumGetter: PP,
};
function nn(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
const AP = (e = 'none') => {
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
  RP = (e) => {
    const { seriesOrder: t, series: n } = e,
      r = {};
    return (
      t.forEach((i) => {
        const o = oP()
          .startAngle((2 * Math.PI * (n[i].startAngle ?? 0)) / 360)
          .endAngle((2 * Math.PI * (n[i].endAngle ?? 360)) / 360)
          .padAngle((2 * Math.PI * (n[i].paddingAngle ?? 0)) / 360)
          .sortValues(AP(n[i].sortingValues ?? 'none'))(
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
function OP(e) {
  return (t) => e.data[t].color;
}
const $P = { seriesType: 'pie', colorProcessor: OP, seriesFormatter: RP },
  IP = [vP, CP, TP, $P];
function NP(e) {
  const t = e ?? IP;
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
var nh = Bs(),
  Q = (e) => Hs(e, nh),
  rh = Bs();
Q.write = (e) => Hs(e, rh);
var Yu = Bs();
Q.onStart = (e) => Hs(e, Yu);
var ih = Bs();
Q.onFrame = (e) => Hs(e, ih);
var oh = Bs();
Q.onFinish = (e) => Hs(e, oh);
var Ti = [];
Q.setTimeout = (e, t) => {
  const n = Q.now() + t,
    r = () => {
      const o = Ti.findIndex((s) => s.cancel == r);
      ~o && Ti.splice(o, 1), (er -= ~o ? 1 : 0);
    },
    i = { time: n, handler: e, cancel: r };
  return Ti.splice(N2(n), 0, i), (er += 1), j2(), i;
};
var N2 = (e) => ~(~Ti.findIndex((t) => t.time > e) || ~Ti.length);
Q.cancel = (e) => {
  Yu.delete(e), ih.delete(e), oh.delete(e), nh.delete(e), rh.delete(e);
};
Q.sync = (e) => {
  (ud = !0), Q.batchedUpdates(e), (ud = !1);
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
      Yu.delete(n), (t = null);
    }),
    r
  );
};
var sh = typeof window < 'u' ? window.requestAnimationFrame : () => {};
Q.use = (e) => (sh = e);
Q.now = typeof performance < 'u' ? () => performance.now() : Date.now;
Q.batchedUpdates = (e) => e();
Q.catch = console.error;
Q.frameLoop = 'always';
Q.advance = () => {
  Q.frameLoop !== 'demand'
    ? console.warn(
        'Cannot call the manual advancement of rafz whilst frameLoop is not set as demand'
      )
    : D2();
};
var Jn = -1,
  er = 0,
  ud = !1;
function Hs(e, t) {
  ud ? (t.delete(e), e(0)) : (t.add(e), j2());
}
function j2() {
  Jn < 0 && ((Jn = 0), Q.frameLoop !== 'demand' && sh(L2));
}
function jP() {
  Jn = -1;
}
function L2() {
  ~Jn && (sh(L2), Q.batchedUpdates(D2));
}
function D2() {
  const e = Jn;
  Jn = Q.now();
  const t = N2(Jn);
  if ((t && (F2(Ti.splice(0, t), (n) => n.handler()), (er -= t)), !er)) {
    jP();
    return;
  }
  Yu.flush(),
    nh.flush(e ? Math.min(64, Jn - e) : 16.667),
    ih.flush(),
    rh.flush(),
    oh.flush();
}
function Bs() {
  let e = new Set(),
    t = e;
  return {
    add(n) {
      (er += t == e && !e.has(n) ? 1 : 0), e.add(n);
    },
    delete(n) {
      return (er -= t == e && e.has(n) ? 1 : 0), e.delete(n);
    },
    flush(n) {
      t.size &&
        ((e = new Set()),
        (er -= t.size),
        F2(t, (r) => r(n) && e.add(r)),
        (er += e.size),
        (t = e));
    },
  };
}
function F2(e, t) {
  e.forEach((n) => {
    try {
      t(n);
    } catch (r) {
      Q.catch(r);
    }
  });
}
var LP = Object.defineProperty,
  DP = (e, t) => {
    for (var n in t) LP(e, n, { get: t[n], enumerable: !0 });
  },
  Ct = {};
DP(Ct, {
  assign: () => zP,
  colors: () => ur,
  createStringInterpolator: () => lh,
  skipAnimation: () => U2,
  to: () => z2,
  willAdvance: () => uh,
});
function cd() {}
var FP = (e, t, n) =>
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
  L = {
    arr: Array.isArray,
    obj: (e) => !!e && e.constructor.name === 'Object',
    fun: (e) => typeof e == 'function',
    str: (e) => typeof e == 'string',
    num: (e) => typeof e == 'number',
    und: (e) => e === void 0,
  };
function kn(e, t) {
  if (L.arr(e)) {
    if (!L.arr(t) || e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
    return !0;
  }
  return e === t;
}
var K = (e, t) => e.forEach(t);
function xn(e, t, n) {
  if (L.arr(e)) {
    for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    return;
  }
  for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var Je = (e) => (L.und(e) ? [] : L.arr(e) ? e : [e]);
function jo(e, t) {
  if (e.size) {
    const n = Array.from(e);
    e.clear(), K(n, t);
  }
}
var _o = (e, ...t) => jo(e, (n) => n(...t)),
  ah = () =>
    typeof window > 'u' ||
    !window.navigator ||
    /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
  lh,
  z2,
  ur = null,
  U2 = !1,
  uh = cd,
  zP = (e) => {
    e.to && (z2 = e.to),
      e.now && (Q.now = e.now),
      e.colors !== void 0 && (ur = e.colors),
      e.skipAnimation != null && (U2 = e.skipAnimation),
      e.createStringInterpolator && (lh = e.createStringInterpolator),
      e.requestAnimationFrame && Q.use(e.requestAnimationFrame),
      e.batchedUpdates && (Q.batchedUpdates = e.batchedUpdates),
      e.willAdvance && (uh = e.willAdvance),
      e.frameLoop && (Q.frameLoop = e.frameLoop);
  },
  Lo = new Set(),
  $t = [],
  Wc = [],
  Ll = 0,
  Gu = {
    get idle() {
      return !Lo.size && !$t.length;
    },
    start(e) {
      Ll > e.priority ? (Lo.add(e), Q.onStart(UP)) : (V2(e), Q(fd));
    },
    advance: fd,
    sort(e) {
      if (Ll) Q.onFrame(() => Gu.sort(e));
      else {
        const t = $t.indexOf(e);
        ~t && ($t.splice(t, 1), H2(e));
      }
    },
    clear() {
      ($t = []), Lo.clear();
    },
  };
function UP() {
  Lo.forEach(V2), Lo.clear(), Q(fd);
}
function V2(e) {
  $t.includes(e) || H2(e);
}
function H2(e) {
  $t.splice(
    VP($t, (t) => t.priority > e.priority),
    0,
    e
  );
}
function fd(e) {
  const t = Wc;
  for (let n = 0; n < $t.length; n++) {
    const r = $t[n];
    (Ll = r.priority), r.idle || (uh(r), r.advance(e), r.idle || t.push(r));
  }
  return (Ll = 0), (Wc = $t), (Wc.length = 0), ($t = t), $t.length > 0;
}
function VP(e, t) {
  const n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
var HP = (e, t, n) => Math.min(Math.max(n, e), t),
  BP = {
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
  Dl = Jt + '%';
function Qu(...e) {
  return '\\(\\s*(' + e.join(')\\s*,\\s*(') + ')\\s*\\)';
}
var WP = new RegExp('rgb' + Qu(Jt, Jt, Jt)),
  YP = new RegExp('rgba' + Qu(Jt, Jt, Jt, Jt)),
  GP = new RegExp('hsl' + Qu(Jt, Dl, Dl)),
  QP = new RegExp('hsla' + Qu(Jt, Dl, Dl, Jt)),
  KP = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  XP = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  qP = /^#([0-9a-fA-F]{6})$/,
  ZP = /^#([0-9a-fA-F]{8})$/;
function JP(e) {
  let t;
  return typeof e == 'number'
    ? e >>> 0 === e && e >= 0 && e <= 4294967295
      ? e
      : null
    : (t = qP.exec(e))
    ? parseInt(t[1] + 'ff', 16) >>> 0
    : ur && ur[e] !== void 0
    ? ur[e]
    : (t = WP.exec(e))
    ? ((oi(t[1]) << 24) | (oi(t[2]) << 16) | (oi(t[3]) << 8) | 255) >>> 0
    : (t = YP.exec(e))
    ? ((oi(t[1]) << 24) | (oi(t[2]) << 16) | (oi(t[3]) << 8) | ng(t[4])) >>> 0
    : (t = KP.exec(e))
    ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + 'ff', 16) >>> 0
    : (t = ZP.exec(e))
    ? parseInt(t[1], 16) >>> 0
    : (t = XP.exec(e))
    ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
    : (t = GP.exec(e))
    ? (eg(tg(t[1]), xa(t[2]), xa(t[3])) | 255) >>> 0
    : (t = QP.exec(e))
    ? (eg(tg(t[1]), xa(t[2]), xa(t[3])) | ng(t[4])) >>> 0
    : null;
}
function Yc(e, t, n) {
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
function eg(e, t, n) {
  const r = n < 0.5 ? n * (1 + t) : n + t - n * t,
    i = 2 * n - r,
    o = Yc(i, r, e + 1 / 3),
    s = Yc(i, r, e),
    a = Yc(i, r, e - 1 / 3);
  return (
    (Math.round(o * 255) << 24) |
    (Math.round(s * 255) << 16) |
    (Math.round(a * 255) << 8)
  );
}
function oi(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function tg(e) {
  return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function ng(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function xa(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function rg(e) {
  let t = JP(e);
  if (t === null) return e;
  t = t || 0;
  const n = (t & 4278190080) >>> 24,
    r = (t & 16711680) >>> 16,
    i = (t & 65280) >>> 8,
    o = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${i}, ${o})`;
}
var vs = (e, t, n) => {
  if (L.fun(e)) return e;
  if (L.arr(e)) return vs({ range: e, output: t, extrapolate: n });
  if (L.str(e.output[0])) return lh(e);
  const r = e,
    i = r.output,
    o = r.range || [0, 1],
    s = r.extrapolateLeft || r.extrapolate || 'extend',
    a = r.extrapolateRight || r.extrapolate || 'extend',
    l = r.easing || ((u) => u);
  return (u) => {
    const c = tM(u, o);
    return eM(u, o[c], o[c + 1], i[c], i[c + 1], l, s, a, r.map);
  };
};
function eM(e, t, n, r, i, o, s, a, l) {
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
function tM(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
  return n - 1;
}
var nM =
    (e, t = 'end') =>
    (n) => {
      n = t === 'end' ? Math.min(n, 0.999) : Math.max(n, 0.001);
      const r = n * e,
        i = t === 'end' ? Math.floor(r) : Math.ceil(r);
      return HP(0, 1, i / e);
    },
  Fl = 1.70158,
  wa = Fl * 1.525,
  ig = Fl + 1,
  og = (2 * Math.PI) / 3,
  sg = (2 * Math.PI) / 4.5,
  Sa = (e) =>
    e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375,
  rM = {
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
    easeInBack: (e) => ig * e * e * e - Fl * e * e,
    easeOutBack: (e) => 1 + ig * Math.pow(e - 1, 3) + Fl * Math.pow(e - 1, 2),
    easeInOutBack: (e) =>
      e < 0.5
        ? (Math.pow(2 * e, 2) * ((wa + 1) * 2 * e - wa)) / 2
        : (Math.pow(2 * e - 2, 2) * ((wa + 1) * (e * 2 - 2) + wa) + 2) / 2,
    easeInElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * og),
    easeOutElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * og) + 1,
    easeInOutElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : e < 0.5
        ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * sg)) / 2
        : (Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * sg)) / 2 +
          1,
    easeInBounce: (e) => 1 - Sa(1 - e),
    easeOutBounce: Sa,
    easeInOutBounce: (e) =>
      e < 0.5 ? (1 - Sa(1 - 2 * e)) / 2 : (1 + Sa(2 * e - 1)) / 2,
    steps: nM,
  },
  xs = Symbol.for('FluidValue.get'),
  Bi = Symbol.for('FluidValue.observers'),
  Ot = (e) => !!(e && e[xs]),
  ot = (e) => (e && e[xs] ? e[xs]() : e),
  ag = (e) => e[Bi] || null;
function iM(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function ws(e, t) {
  const n = e[Bi];
  n &&
    n.forEach((r) => {
      iM(r, t);
    });
}
var B2 = class {
    constructor(e) {
      if (!e && !(e = this.get)) throw Error('Unknown getter');
      oM(this, e);
    }
  },
  oM = (e, t) => W2(e, xs, t);
function no(e, t) {
  if (e[xs]) {
    let n = e[Bi];
    n || W2(e, Bi, (n = new Set())),
      n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function Ss(e, t) {
  const n = e[Bi];
  if (n && n.has(t)) {
    const r = n.size - 1;
    r ? n.delete(t) : (e[Bi] = null),
      e.observerRemoved && e.observerRemoved(r, t);
  }
}
var W2 = (e, t, n) =>
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
  Ga = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
  sM =
    /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
  lg = new RegExp(`(${Ga.source})(%|[a-z]+)`, 'i'),
  aM = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
  Ku = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
  Y2 = (e) => {
    const [t, n] = lM(e);
    if (!t || ah()) return e;
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
      if (n && Ku.test(n)) return Y2(n);
      if (n) return n;
    }
    return e;
  },
  lM = (e) => {
    const t = Ku.exec(e);
    if (!t) return [,];
    const [, n, r] = t;
    return [n, r];
  },
  Gc,
  uM = (e, t, n, r, i) =>
    `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
  G2 = (e) => {
    Gc ||
      (Gc = ur
        ? new RegExp(`(${Object.keys(ur).join('|')})(?!\\w)`, 'g')
        : /^\b$/);
    const t = e.output.map((o) =>
        ot(o).replace(Ku, Y2).replace(sM, rg).replace(Gc, rg)
      ),
      n = t.map((o) => o.match(Ga).map(Number)),
      i = n[0]
        .map((o, s) =>
          n.map((a) => {
            if (!(s in a))
              throw Error('The arity of each "output" value must be equal');
            return a[s];
          })
        )
        .map((o) => vs({ ...e, output: o }));
    return (o) => {
      var l;
      const s =
        !lg.test(t[0]) &&
        ((l = t.find((u) => lg.test(u))) == null ? void 0 : l.replace(Ga, ''));
      let a = 0;
      return t[0].replace(Ga, () => `${i[a++](o)}${s || ''}`).replace(aM, uM);
    };
  },
  ch = 'react-spring: ',
  Q2 = (e) => {
    const t = e;
    let n = !1;
    if (typeof t != 'function')
      throw new TypeError(`${ch}once requires a function parameter`);
    return (...r) => {
      n || (t(...r), (n = !0));
    };
  },
  cM = Q2(console.warn);
function fM() {
  cM(`${ch}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var dM = Q2(console.warn);
function pM() {
  dM(
    `${ch}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function Xu(e) {
  return (
    L.str(e) &&
    (e[0] == '#' || /\d/.test(e) || (!ah() && Ku.test(e)) || e in (ur || {}))
  );
}
var Rr = ah() ? P.useEffect : P.useLayoutEffect,
  hM = () => {
    const e = P.useRef(!1);
    return (
      Rr(
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
function K2() {
  const e = P.useState()[1],
    t = hM();
  return () => {
    t.current && e(Math.random());
  };
}
function mM(e, t) {
  const [n] = P.useState(() => ({ inputs: t, result: e() })),
    r = P.useRef(),
    i = r.current;
  let o = i;
  return (
    o
      ? (t && o.inputs && gM(t, o.inputs)) || (o = { inputs: t, result: e() })
      : (o = n),
    P.useEffect(() => {
      (r.current = o), i == n && (n.inputs = n.result = void 0);
    }, [o]),
    o.result
  );
}
function gM(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
var X2 = (e) => P.useEffect(e, yM),
  yM = [];
function vM(e) {
  const t = P.useRef();
  return (
    P.useEffect(() => {
      t.current = e;
    }),
    t.current
  );
}
var ks = Symbol.for('Animated:node'),
  xM = (e) => !!e && e[ks] === e,
  ln = (e) => e && e[ks],
  fh = (e, t) => FP(e, ks, t),
  qu = (e) => e && e[ks] && e[ks].getPayload(),
  q2 = class {
    constructor() {
      fh(this, this);
    }
    getPayload() {
      return this.payload || [];
    }
  },
  Ws = class extends q2 {
    constructor(e) {
      super(),
        (this._value = e),
        (this.done = !0),
        (this.durationProgress = 0),
        L.num(this._value) && (this.lastPosition = this._value);
    }
    static create(e) {
      return new Ws(e);
    }
    getPayload() {
      return [this];
    }
    getValue() {
      return this._value;
    }
    setValue(e, t) {
      return (
        L.num(e) &&
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
        L.num(this._value) &&
          ((this.elapsedTime = 0),
          (this.durationProgress = 0),
          (this.lastPosition = this._value),
          e && (this.lastVelocity = null),
          (this.v0 = null));
    }
  },
  Cs = class extends Ws {
    constructor(e) {
      super(0),
        (this._string = null),
        (this._toString = vs({ output: [e, e] }));
    }
    static create(e) {
      return new Cs(e);
    }
    getValue() {
      const e = this._string;
      return e ?? (this._string = this._toString(this._value));
    }
    setValue(e) {
      if (L.str(e)) {
        if (e == this._string) return !1;
        (this._string = e), (this._value = 1);
      } else if (super.setValue(e)) this._string = null;
      else return !1;
      return !0;
    }
    reset(e) {
      e && (this._toString = vs({ output: [this.getValue(), e] })),
        (this._value = 0),
        super.reset();
    }
  },
  zl = { dependencies: null },
  Zu = class extends q2 {
    constructor(e) {
      super(), (this.source = e), this.setValue(e);
    }
    getValue(e) {
      const t = {};
      return (
        xn(this.source, (n, r) => {
          xM(n)
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
      zl.dependencies && Ot(e) && zl.dependencies.add(e);
      const t = qu(e);
      t && K(t, (n) => this.add(n));
    }
  },
  Z2 = class extends Zu {
    constructor(e) {
      super(e);
    }
    static create(e) {
      return new Z2(e);
    }
    getValue() {
      return this.source.map((e) => e.getValue());
    }
    setValue(e) {
      const t = this.getPayload();
      return e.length == t.length
        ? t.map((n, r) => n.setValue(e[r])).some(Boolean)
        : (super.setValue(e.map(wM)), !0);
    }
  };
function wM(e) {
  return (Xu(e) ? Cs : Ws).create(e);
}
function dd(e) {
  const t = ln(e);
  return t ? t.constructor : L.arr(e) ? Z2 : Xu(e) ? Cs : Ws;
}
var ug = (e, t) => {
    const n = !L.fun(e) || (e.prototype && e.prototype.isReactComponent);
    return P.forwardRef((r, i) => {
      const o = P.useRef(null),
        s =
          n &&
          P.useCallback(
            (y) => {
              o.current = CM(i, y);
            },
            [i]
          ),
        [a, l] = kM(r, t),
        u = K2(),
        c = () => {
          const y = o.current;
          if (n && !y) return;
          (y ? t.applyAnimatedValues(y, a.getValue(!0)) : !1) === !1 && u();
        },
        f = new SM(c, l),
        d = P.useRef();
      Rr(
        () => (
          (d.current = f),
          K(l, (y) => no(y, f)),
          () => {
            d.current &&
              (K(d.current.deps, (y) => Ss(y, d.current)),
              Q.cancel(d.current.update));
          }
        )
      ),
        P.useEffect(c, []),
        X2(() => () => {
          const y = d.current;
          K(y.deps, (h) => Ss(h, y));
        });
      const m = t.getComponentProps(a.getValue());
      return P.createElement(e, { ...m, ref: s });
    });
  },
  SM = class {
    constructor(e, t) {
      (this.update = e), (this.deps = t);
    }
    eventObserved(e) {
      e.type == 'change' && Q.write(this.update);
    }
  };
function kM(e, t) {
  const n = new Set();
  return (
    (zl.dependencies = n),
    e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }),
    (e = new Zu(e)),
    (zl.dependencies = null),
    [e, n]
  );
}
function CM(e, t) {
  return e && (L.fun(e) ? e(t) : (e.current = t)), t;
}
var cg = Symbol.for('AnimatedComponent'),
  bM = (
    e,
    {
      applyAnimatedValues: t = () => !1,
      createAnimatedStyle: n = (i) => new Zu(i),
      getComponentProps: r = (i) => i,
    } = {}
  ) => {
    const i = {
        applyAnimatedValues: t,
        createAnimatedStyle: n,
        getComponentProps: r,
      },
      o = (s) => {
        const a = fg(s) || 'Anonymous';
        return (
          L.str(s)
            ? (s = o[s] || (o[s] = ug(s, i)))
            : (s = s[cg] || (s[cg] = ug(s, i))),
          (s.displayName = `Animated(${a})`),
          s
        );
      };
    return (
      xn(e, (s, a) => {
        L.arr(e) && (a = fg(s)), (o[a] = o(s));
      }),
      { animated: o }
    );
  },
  fg = (e) =>
    L.str(e)
      ? e
      : e && L.str(e.displayName)
      ? e.displayName
      : (L.fun(e) && e.name) || null;
function st(e, ...t) {
  return L.fun(e) ? e(...t) : e;
}
var Do = (e, t) =>
    e === !0 || !!(t && e && (L.fun(e) ? e(t) : Je(e).includes(t))),
  J2 = (e, t) => (L.obj(e) ? t && e[t] : e),
  ex = (e, t) => (e.default === !0 ? e[t] : e.default ? e.default[t] : void 0),
  _M = (e) => e,
  dh = (e, t = _M) => {
    let n = PM;
    e.default && e.default !== !0 && ((e = e.default), (n = Object.keys(e)));
    const r = {};
    for (const i of n) {
      const o = t(e[i], i);
      L.und(o) || (r[i] = o);
    }
    return r;
  },
  PM = [
    'config',
    'onProps',
    'onStart',
    'onChange',
    'onPause',
    'onResume',
    'onRest',
  ],
  MM = {
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
function EM(e) {
  const t = {};
  let n = 0;
  if (
    (xn(e, (r, i) => {
      MM[i] || ((t[i] = r), n++);
    }),
    n)
  )
    return t;
}
function ph(e) {
  const t = EM(e);
  if (t) {
    const n = { to: t };
    return xn(e, (r, i) => i in t || (n[i] = r)), n;
  }
  return { ...e };
}
function bs(e) {
  return (
    (e = ot(e)),
    L.arr(e)
      ? e.map(bs)
      : Xu(e)
      ? Ct.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
      : e
  );
}
function TM(e) {
  for (const t in e) return !0;
  return !1;
}
function pd(e) {
  return L.fun(e) || (L.arr(e) && L.obj(e[0]));
}
function dg(e, t) {
  var n;
  (n = e.ref) == null || n.delete(e), t == null || t.delete(e);
}
function AM(e, t) {
  var n;
  t &&
    e.ref !== t &&
    ((n = e.ref) == null || n.delete(e), t.add(e), (e.ref = t));
}
var RM = {
    default: { tension: 170, friction: 26 },
    gentle: { tension: 120, friction: 14 },
    wobbly: { tension: 180, friction: 12 },
    stiff: { tension: 210, friction: 20 },
    slow: { tension: 280, friction: 60 },
    molasses: { tension: 280, friction: 120 },
  },
  hd = { ...RM.default, mass: 1, damping: 1, easing: rM.linear, clamp: !1 },
  OM = class {
    constructor() {
      (this.velocity = 0), Object.assign(this, hd);
    }
  };
function $M(e, t, n) {
  n && ((n = { ...n }), pg(n, t), (t = { ...n, ...t })),
    pg(e, t),
    Object.assign(e, t);
  for (const s in hd) e[s] == null && (e[s] = hd[s]);
  let { frequency: r, damping: i } = e;
  const { mass: o } = e;
  return (
    L.und(r) ||
      (r < 0.01 && (r = 0.01),
      i < 0 && (i = 0),
      (e.tension = Math.pow((2 * Math.PI) / r, 2) * o),
      (e.friction = (4 * Math.PI * i * o) / r)),
    e
  );
}
function pg(e, t) {
  if (!L.und(t.decay)) e.duration = void 0;
  else {
    const n = !L.und(t.tension) || !L.und(t.friction);
    (n || !L.und(t.frequency) || !L.und(t.damping) || !L.und(t.mass)) &&
      ((e.duration = void 0), (e.decay = void 0)),
      n && (e.frequency = void 0);
  }
}
var hg = [],
  IM = class {
    constructor() {
      (this.changed = !1),
        (this.values = hg),
        (this.toValues = null),
        (this.fromValues = hg),
        (this.config = new OM()),
        (this.immediate = !1);
    }
  };
function tx(e, { key: t, props: n, defaultProps: r, state: i, actions: o }) {
  return new Promise((s, a) => {
    let l,
      u,
      c = Do(n.cancel ?? (r == null ? void 0 : r.cancel), t);
    if (c) m();
    else {
      L.und(n.pause) || (i.paused = Do(n.pause, t));
      let y = r == null ? void 0 : r.pause;
      y !== !0 && (y = i.paused || Do(y, t)),
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
var hh = (e, t) =>
    t.length == 1
      ? t[0]
      : t.some((n) => n.cancelled)
      ? Ai(e.get())
      : t.every((n) => n.noop)
      ? nx(e.get())
      : qt(
          e.get(),
          t.every((n) => n.finished)
        ),
  nx = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
  qt = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
  Ai = (e) => ({ value: e, cancelled: !0, finished: !1 });
function rx(e, t, n, r) {
  const { callId: i, parentId: o, onRest: s } = t,
    { asyncTo: a, promise: l } = n;
  return !o && e === a && !t.reset
    ? l
    : (n.promise = (async () => {
        (n.asyncId = i), (n.asyncTo = e);
        const u = dh(t, (x, p) => (p === 'onRest' ? void 0 : x));
        let c, f;
        const d = new Promise((x, p) => ((c = x), (f = p))),
          m = (x) => {
            const p =
              (i <= (n.cancelId || 0) && Ai(r)) ||
              (i !== n.asyncId && qt(r, !1));
            if (p) throw ((x.result = p), f(x), x);
          },
          y = (x, p) => {
            const g = new mg(),
              v = new gg();
            return (async () => {
              if (Ct.skipAnimation)
                throw (_s(n), (v.result = qt(r, !1)), f(v), v);
              m(g);
              const w = L.obj(x) ? { ...x } : { ...p, to: x };
              (w.parentId = i),
                xn(u, (S, C) => {
                  L.und(w[C]) && (w[C] = S);
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
        if (Ct.skipAnimation) return _s(n), qt(r, !1);
        try {
          let x;
          L.arr(e)
            ? (x = (async (p) => {
                for (const g of p) await y(g);
              })(e))
            : (x = Promise.resolve(e(y, r.stop.bind(r)))),
            await Promise.all([x.then(c), d]),
            (h = qt(r.get(), !0, !1));
        } catch (x) {
          if (x instanceof mg) h = x.result;
          else if (x instanceof gg) h = x.result;
          else throw x;
        } finally {
          i == n.asyncId &&
            ((n.asyncId = o),
            (n.asyncTo = o ? a : void 0),
            (n.promise = o ? l : void 0));
        }
        return (
          L.fun(s) &&
            Q.batchedUpdates(() => {
              s(h, r, r.item);
            }),
          h
        );
      })());
}
function _s(e, t) {
  jo(e.timeouts, (n) => n.cancel()),
    e.pauseQueue.clear(),
    e.resumeQueue.clear(),
    (e.asyncId = e.asyncTo = e.promise = void 0),
    t && (e.cancelId = t);
}
var mg = class extends Error {
    constructor() {
      super(
        'An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.'
      );
    }
  },
  gg = class extends Error {
    constructor() {
      super('SkipAnimationSignal');
    }
  },
  md = (e) => e instanceof mh,
  NM = 1,
  mh = class extends B2 {
    constructor() {
      super(...arguments), (this.id = NM++), (this._priority = 0);
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
      return fM(), Ct.to(this, e);
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
      ws(this, { type: 'change', parent: this, value: e, idle: t });
    }
    _onPriorityChange(e) {
      this.idle || Gu.sort(this),
        ws(this, { type: 'priority', parent: this, priority: e });
    }
  },
  Hr = Symbol.for('SpringPhase'),
  ix = 1,
  gd = 2,
  yd = 4,
  Qc = (e) => (e[Hr] & ix) > 0,
  Bn = (e) => (e[Hr] & gd) > 0,
  yo = (e) => (e[Hr] & yd) > 0,
  yg = (e, t) => (t ? (e[Hr] |= gd | ix) : (e[Hr] &= ~gd)),
  vg = (e, t) => (t ? (e[Hr] |= yd) : (e[Hr] &= ~yd)),
  jM = class extends mh {
    constructor(e, t) {
      if (
        (super(),
        (this.animation = new IM()),
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
        !L.und(e) || !L.und(t))
      ) {
        const n = L.obj(e) ? { ...e } : { ...t, from: e };
        L.und(n.default) && (n.default = !0), this.start(n);
      }
    }
    get idle() {
      return !(Bn(this) || this._state.asyncTo) || yo(this);
    }
    get goal() {
      return ot(this.animation.to);
    }
    get velocity() {
      const e = ln(this);
      return e instanceof Ws
        ? e.lastVelocity || 0
        : e.getPayload().map((t) => t.lastVelocity || 0);
    }
    get hasAnimated() {
      return Qc(this);
    }
    get isAnimating() {
      return Bn(this);
    }
    get isPaused() {
      return yo(this);
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
        s = qu(r.to);
      !s && Ot(r.to) && (i = Je(ot(r.to))),
        r.values.forEach((u, c) => {
          if (u.done) return;
          const f = u.constructor == Cs ? 1 : s ? s[c].lastPosition : i[c];
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
                  : (u.v0 = L.arr(o.velocity) ? o.velocity[c] : o.velocity);
            let p;
            const g =
              o.precision ||
              (h == f ? 0.005 : Math.min(1, Math.abs(f - h) * 0.001));
            if (L.und(o.duration))
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
                  k = !L.und(w),
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
        L.und(e)
          ? ((n = this.queue || []), (this.queue = []))
          : (n = [L.obj(e) ? e : { ...t, to: e }]),
        Promise.all(n.map((r) => this._update(r))).then((r) => hh(this, r))
      );
    }
    stop(e) {
      const { to: t } = this.animation;
      return (
        this._focus(this.get()),
        _s(this._state, e && this._lastCallId),
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
      (n = L.obj(n) ? n[t] : n),
        (n == null || pd(n)) && (n = void 0),
        (r = L.obj(r) ? r[t] : r),
        r == null && (r = void 0);
      const i = { to: n, from: r };
      return (
        Qc(this) ||
          (e.reverse && ([n, r] = [r, n]),
          (r = ot(r)),
          L.und(r) ? ln(this) || this._set(n) : this._set(r)),
        i
      );
    }
    _update({ ...e }, t) {
      const { key: n, defaultProps: r } = this;
      e.default &&
        Object.assign(
          r,
          dh(e, (s, a) => (/^on/.test(a) ? J2(s, n) : s))
        ),
        wg(this, e, 'onProps'),
        xo(this, 'onProps', e, this);
      const i = this._prepareNode(e);
      if (Object.isFrozen(this))
        throw Error(
          'Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?'
        );
      const o = this._state;
      return tx(++this._lastCallId, {
        key: n,
        props: e,
        defaultProps: r,
        state: o,
        actions: {
          pause: () => {
            yo(this) ||
              (vg(this, !0),
              _o(o.pauseQueue),
              xo(this, 'onPause', qt(this, vo(this, this.animation.to)), this));
          },
          resume: () => {
            yo(this) &&
              (vg(this, !1),
              Bn(this) && this._resume(),
              _o(o.resumeQueue),
              xo(
                this,
                'onResume',
                qt(this, vo(this, this.animation.to)),
                this
              ));
          },
          start: this._merge.bind(this, i),
        },
      }).then((s) => {
        if (e.loop && s.finished && !(t && s.noop)) {
          const a = ox(e);
          if (a) return this._update(a, !0);
        }
        return s;
      });
    }
    _merge(e, t, n) {
      if (t.cancel) return this.stop(!0), n(Ai(this));
      const r = !L.und(e.to),
        i = !L.und(e.from);
      if (r || i)
        if (t.callId > this._lastToId) this._lastToId = t.callId;
        else return n(Ai(this));
      const { key: o, defaultProps: s, animation: a } = this,
        { to: l, from: u } = a;
      let { to: c = l, from: f = u } = e;
      i && !r && (!t.default || L.und(c)) && (c = f),
        t.reverse && ([c, f] = [f, c]);
      const d = !kn(f, u);
      d && (a.from = f), (f = ot(f));
      const m = !kn(c, l);
      m && this._focus(c);
      const y = pd(t.to),
        { config: h } = a,
        { decay: x, velocity: p } = h;
      (r || i) && (h.velocity = 0),
        t.config &&
          !y &&
          $M(
            h,
            st(t.config, o),
            t.config !== s.config ? st(s.config, o) : void 0
          );
      let g = ln(this);
      if (!g || L.und(c)) return n(qt(this, !0));
      const v = L.und(t.reset) ? i && !t.default : !L.und(f) && Do(t.reset, o),
        w = v ? f : this.get(),
        k = bs(c),
        S = L.num(k) || L.arr(k) || Xu(k),
        C = !y && (!S || Do(s.immediate || t.immediate, o));
      if (m) {
        const E = dd(c);
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
        const E = v || (!Qc(this) && d);
        (m || E) && ((T = kn(bs(w), k)), (A = !T)),
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
            (a.toValues = Ot(c) ? null : M == Cs ? [1] : Je(k))),
          a.immediate != C && ((a.immediate = C), !C && !v && this._set(l)),
          A))
      ) {
        const { onRest: E } = a;
        K(LM, (R) => wg(this, t, R));
        const I = qt(this, vo(this, l));
        _o(this._pendingCalls, I),
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
          ? n(rx(t.to, t, this._state, this))
          : A
          ? this._start()
          : Bn(this) && !m
          ? this._pendingCalls.add(n)
          : n(nx(w));
    }
    _focus(e) {
      const t = this.animation;
      e !== t.to &&
        (ag(this) && this._detach(), (t.to = e), ag(this) && this._attach());
    }
    _attach() {
      let e = 0;
      const { to: t } = this.animation;
      Ot(t) && (no(t, this), md(t) && (e = t.priority + 1)),
        (this.priority = e);
    }
    _detach() {
      const { to: e } = this.animation;
      Ot(e) && Ss(e, this);
    }
    _set(e, t = !0) {
      const n = ot(e);
      if (!L.und(n)) {
        const r = ln(this);
        if (!r || !kn(n, r.getValue())) {
          const i = dd(n);
          !r || r.constructor != i ? fh(this, i.create(n)) : r.setValue(n),
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
        ((e.changed = !0), xo(this, 'onStart', qt(this, vo(this, e.to)), this));
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
        Bn(this) || (yg(this, !0), yo(this) || this._resume());
    }
    _resume() {
      Ct.skipAnimation ? this.finish() : Gu.start(this);
    }
    _stop(e, t) {
      if (Bn(this)) {
        yg(this, !1);
        const n = this.animation;
        K(n.values, (i) => {
          i.done = !0;
        }),
          n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
          ws(this, { type: 'idle', parent: this });
        const r = t ? Ai(this.get()) : qt(this.get(), vo(this, e ?? n.to));
        _o(this._pendingCalls, r),
          n.changed && ((n.changed = !1), xo(this, 'onRest', r, this));
      }
    }
  };
function vo(e, t) {
  const n = bs(t),
    r = bs(e.get());
  return kn(r, n);
}
function ox(e, t = e.loop, n = e.to) {
  const r = st(t);
  if (r) {
    const i = r !== !0 && ph(r),
      o = (i || e).reverse,
      s = !i || i.reset;
    return Ul({
      ...e,
      loop: t,
      default: !1,
      pause: void 0,
      to: !o || pd(n) ? n : void 0,
      from: s ? e.from : void 0,
      reset: s,
      ...i,
    });
  }
}
function Ul(e) {
  const { to: t, from: n } = (e = ph(e)),
    r = new Set();
  return (
    L.obj(t) && xg(t, r),
    L.obj(n) && xg(n, r),
    (e.keys = r.size ? Array.from(r) : null),
    e
  );
}
function xg(e, t) {
  xn(e, (n, r) => n != null && t.add(r));
}
var LM = ['onStart', 'onRest', 'onChange', 'onPause', 'onResume'];
function wg(e, t, n) {
  e.animation[n] = t[n] !== ex(t, n) ? J2(t[n], e.key) : void 0;
}
function xo(e, t, ...n) {
  var r, i, o, s;
  (i = (r = e.animation)[t]) == null || i.call(r, ...n),
    (s = (o = e.defaultProps)[t]) == null || s.call(o, ...n);
}
var DM = ['onStart', 'onChange', 'onRest'],
  FM = 1,
  zM = class {
    constructor(e, t) {
      (this.id = FM++),
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
        L.und(n) || this.springs[t].set(n);
      }
    }
    update(e) {
      return e && this.queue.push(Ul(e)), this;
    }
    start(e) {
      let { queue: t } = this;
      return (
        e ? (t = Je(e).map(Ul)) : (this.queue = []),
        this._flush ? this._flush(this, t) : (ux(this, t), UM(this, t))
      );
    }
    stop(e, t) {
      if ((e !== !!e && (t = e), t)) {
        const n = this.springs;
        K(Je(t), (r) => n[r].stop(!!e));
      } else _s(this._state, this._lastAsyncId), this.each((n) => n.stop(!!e));
      return this;
    }
    pause(e) {
      if (L.und(e)) this.start({ pause: !0 });
      else {
        const t = this.springs;
        K(Je(e), (n) => t[n].pause());
      }
      return this;
    }
    resume(e) {
      if (L.und(e)) this.start({ pause: !1 });
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
        jo(e, ([a, l]) => {
          (l.value = this.get()), a(l, this, this._item);
        }));
      const o = !r && this._started,
        s = i || (o && n.size) ? this.get() : null;
      i &&
        t.size &&
        jo(t, ([a, l]) => {
          (l.value = s), a(l, this, this._item);
        }),
        o &&
          ((this._started = !1),
          jo(n, ([a, l]) => {
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
function UM(e, t) {
  return Promise.all(t.map((n) => sx(e, n))).then((n) => hh(e, n));
}
async function sx(e, t, n) {
  const { keys: r, to: i, from: o, loop: s, onRest: a, onResolve: l } = t,
    u = L.obj(t.default) && t.default;
  s && (t.loop = !1), i === !1 && (t.to = null), o === !1 && (t.from = null);
  const c = L.arr(i) || L.fun(i) ? i : void 0;
  c
    ? ((t.to = void 0), (t.onRest = void 0), u && (u.onRest = void 0))
    : K(DM, (h) => {
        const x = t[h];
        if (L.fun(x)) {
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
    ? ((f.paused = t.pause), _o(t.pause ? f.pauseQueue : f.resumeQueue))
    : f.paused && (t.pause = !0);
  const d = (r || Object.keys(e.springs)).map((h) => e.springs[h].start(t)),
    m = t.cancel === !0 || ex(t, 'cancel') === !0;
  (c || (m && f.asyncId)) &&
    d.push(
      tx(++e._lastAsyncId, {
        props: t,
        state: f,
        actions: {
          pause: cd,
          resume: cd,
          start(h, x) {
            m
              ? (_s(f, e._lastAsyncId), x(Ai(e)))
              : ((h.onRest = a), x(rx(c, h, f, e)));
          },
        },
      })
    ),
    f.paused &&
      (await new Promise((h) => {
        f.resumeQueue.add(h);
      }));
  const y = hh(e, await Promise.all(d));
  if (s && y.finished && !(n && y.noop)) {
    const h = ox(t, s, i);
    if (h) return ux(e, [h]), sx(e, h, !0);
  }
  return l && Q.batchedUpdates(() => l(y, e, e.item)), y;
}
function VM(e, t) {
  const n = { ...e.springs };
  return (
    t &&
      K(Je(t), (r) => {
        L.und(r.keys) && (r = Ul(r)),
          L.obj(r.to) || (r = { ...r, to: void 0 }),
          lx(n, r, (i) => ax(i));
      }),
    HM(e, n),
    n
  );
}
function HM(e, t) {
  xn(t, (n, r) => {
    e.springs[r] || ((e.springs[r] = n), no(n, e));
  });
}
function ax(e, t) {
  const n = new jM();
  return (n.key = e), t && no(n, t), n;
}
function lx(e, t, n) {
  t.keys &&
    K(t.keys, (r) => {
      (e[r] || (e[r] = n(r)))._prepareNode(t);
    });
}
function ux(e, t) {
  K(t, (n) => {
    lx(e.springs, n, (r) => ax(r, e));
  });
}
var Ju = ({ children: e, ...t }) => {
    const n = P.useContext(Vl),
      r = t.pause || !!n.pause,
      i = t.immediate || !!n.immediate;
    t = mM(() => ({ pause: r, immediate: i }), [r, i]);
    const { Provider: o } = Vl;
    return P.createElement(o, { value: t }, e);
  },
  Vl = BM(Ju, {});
Ju.Provider = Vl.Provider;
Ju.Consumer = Vl.Consumer;
function BM(e, t) {
  return (
    Object.assign(e, P.createContext(t)),
    (e.Provider._context = e),
    (e.Consumer._context = e),
    e
  );
}
var WM = () => {
  const e = [],
    t = function (r) {
      pM();
      const i = [];
      return (
        K(e, (o, s) => {
          if (L.und(r)) i.push(o.start());
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
        const s = L.fun(r) ? r(o, i) : r;
        s && i.set(s);
      });
    }),
    (t.start = function (r) {
      const i = [];
      return (
        K(e, (o, s) => {
          if (L.und(r)) i.push(o.start());
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
    return L.fun(r) ? r(o, i) : r;
  };
  return (t._getProps = n), t;
};
function cx(e, t, n) {
  const r = L.fun(t) && t,
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
    d = P.useMemo(() => (r || arguments.length == 3 ? WM() : void 0), []),
    m = Je(e),
    y = [],
    h = P.useRef(null),
    x = i ? null : h.current;
  Rr(() => {
    h.current = y;
  }),
    X2(
      () => (
        K(y, (O) => {
          d == null || d.add(O.ctrl), (O.ctrl.ref = d);
        }),
        () => {
          K(h.current, (O) => {
            O.expired && clearTimeout(O.expirationId),
              dg(O.ctrl, d),
              O.ctrl.stop(!0);
          });
        }
      )
    );
  const p = GM(m, r ? r() : t, x),
    g = (i && h.current) || [];
  Rr(() =>
    K(g, ({ ctrl: O, item: D, key: U }) => {
      dg(O, d), st(u, D, U);
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
        ((y[D] = { key: p[D], item: O, phase: 'mount', ctrl: new zM() }),
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
  L.fun(o) && y.sort((O, D) => o(O.item, D.item));
  let w = -s;
  const k = K2(),
    S = dh(t),
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
      ((F = st(F, O.item, D)), (F = L.obj(F) ? ph(F) : { to: F }), !F.config)
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
    if (H == 'enter' && L.und(Y.from)) {
      const X = r ? r() : t,
        oe = L.und(X.initial) || x ? X.from : X.initial;
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
    const ce = VM(O.ctrl, Y);
    H === 'leave' && l
      ? M.current.set(O, { phase: H, springs: ce, payload: Y })
      : C.set(O, { phase: H, springs: ce, payload: Y });
  });
  const T = P.useContext(Ju),
    E = vM(T),
    I = T !== E && TM(T);
  Rr(() => {
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
    Rr(
      () => {
        K(M.current.size ? M.current : C, ({ phase: O, payload: D }, U) => {
          const { ctrl: B } = U;
          (U.phase = O),
            d == null || d.add(B),
            I && O == 'enter' && B.start({ default: T }),
            D &&
              (AM(B, D.ref),
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
              key: L.str(D.key) || L.num(D.key) ? D.key : D.ctrl.id,
              ref: $.ref,
            })
          : $;
      })
    );
  return d ? [R, d] : R;
}
var YM = 1;
function GM(e, { key: t, keys: n = t }, r) {
  if (n === null) {
    const i = new Set();
    return e.map((o) => {
      const s =
        r && r.find((a) => a.item === o && a.phase !== 'leave' && !i.has(a));
      return s ? (i.add(s), s.key) : YM++;
    });
  }
  return L.und(n) ? e : L.fun(n) ? e.map(n) : Je(n);
}
var fx = class extends mh {
  constructor(e, t) {
    super(),
      (this.source = e),
      (this.idle = !0),
      (this._active = new Set()),
      (this.calc = vs(...t));
    const n = this._get(),
      r = dd(n);
    fh(this, r.create(n));
  }
  advance(e) {
    const t = this._get(),
      n = this.get();
    kn(t, n) || (ln(this).setValue(t), this._onChange(t, this.idle)),
      !this.idle && Sg(this._active) && Kc(this);
  }
  _get() {
    const e = L.arr(this.source) ? this.source.map(ot) : Je(ot(this.source));
    return this.calc(...e);
  }
  _start() {
    this.idle &&
      !Sg(this._active) &&
      ((this.idle = !1),
      K(qu(this), (e) => {
        e.done = !1;
      }),
      Ct.skipAnimation
        ? (Q.batchedUpdates(() => this.advance()), Kc(this))
        : Gu.start(this));
  }
  _attach() {
    let e = 1;
    K(Je(this.source), (t) => {
      Ot(t) && no(t, this),
        md(t) &&
          (t.idle || this._active.add(t), (e = Math.max(e, t.priority + 1)));
    }),
      (this.priority = e),
      this._start();
  }
  _detach() {
    K(Je(this.source), (e) => {
      Ot(e) && Ss(e, this);
    }),
      this._active.clear(),
      Kc(this);
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
          (t, n) => Math.max(t, (md(n) ? n.priority : 0) + 1),
          0
        ));
  }
};
function QM(e) {
  return e.idle !== !1;
}
function Sg(e) {
  return !e.size || Array.from(e).every(QM);
}
function Kc(e) {
  e.idle ||
    ((e.idle = !0),
    K(qu(e), (t) => {
      t.done = !0;
    }),
    ws(e, { type: 'idle', parent: e }));
}
var Hl = (e, ...t) => new fx(e, t);
Ct.assign({ createStringInterpolator: G2, to: (e, t) => new fx(e, t) });
var dx = /^--/;
function KM(e, t) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : typeof t == 'number' &&
      t !== 0 &&
      !dx.test(e) &&
      !(Fo.hasOwnProperty(e) && Fo[e])
    ? t + 'px'
    : ('' + t).trim();
}
var kg = {};
function XM(e, t) {
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
        : kg[f] || (kg[f] = f.replace(/([A-Z])/g, (d) => '-' + d.toLowerCase()))
    );
  i !== void 0 && (e.textContent = i);
  for (const f in r)
    if (r.hasOwnProperty(f)) {
      const d = KM(f, r[f]);
      dx.test(f) ? e.style.setProperty(f, d) : (e.style[f] = d);
    }
  c.forEach((f, d) => {
    e.setAttribute(f, u[d]);
  }),
    o !== void 0 && (e.scrollTop = o),
    s !== void 0 && (e.scrollLeft = s),
    a !== void 0 && e.setAttribute('viewBox', a);
}
var Fo = {
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
  qM = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1),
  ZM = ['Webkit', 'Ms', 'Moz', 'O'];
Fo = Object.keys(Fo).reduce(
  (e, t) => (ZM.forEach((n) => (e[qM(n, t)] = e[t])), e),
  Fo
);
var JM = /^(matrix|translate|scale|rotate|skew)/,
  eE = /^(translate)/,
  tE = /^(rotate|skew)/,
  Xc = (e, t) => (L.num(e) && e !== 0 ? e + t : e),
  Qa = (e, t) =>
    L.arr(e)
      ? e.every((n) => Qa(n, t))
      : L.num(e)
      ? e === t
      : parseFloat(e) === t,
  nE = class extends Zu {
    constructor({ x: e, y: t, z: n, ...r }) {
      const i = [],
        o = [];
      (e || t || n) &&
        (i.push([e || 0, t || 0, n || 0]),
        o.push((s) => [
          `translate3d(${s.map((a) => Xc(a, 'px')).join(',')})`,
          Qa(s, 0),
        ])),
        xn(r, (s, a) => {
          if (a === 'transform')
            i.push([s || '']), o.push((l) => [l, l === '']);
          else if (JM.test(a)) {
            if ((delete r[a], L.und(s))) return;
            const l = eE.test(a) ? 'px' : tE.test(a) ? 'deg' : '';
            i.push(Je(s)),
              o.push(
                a === 'rotate3d'
                  ? ([u, c, f, d]) => [
                      `rotate3d(${u},${c},${f},${Xc(d, l)})`,
                      Qa(d, 0),
                    ]
                  : (u) => [
                      `${a}(${u.map((c) => Xc(c, l)).join(',')})`,
                      Qa(u, a.startsWith('scale') ? 1 : 0),
                    ]
              );
          }
        }),
        i.length && (r.transform = new rE(i, o)),
        super(r);
    }
  },
  rE = class extends B2 {
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
            [o, s] = this.transforms[r](L.arr(i) ? i : n.map(ot));
          (e += ' ' + o), (t = t && s);
        }),
        t ? 'none' : e
      );
    }
    observerAdded(e) {
      e == 1 && K(this.inputs, (t) => K(t, (n) => Ot(n) && no(n, this)));
    }
    observerRemoved(e) {
      e == 0 && K(this.inputs, (t) => K(t, (n) => Ot(n) && Ss(n, this)));
    }
    eventObserved(e) {
      e.type == 'change' && (this._value = null), ws(this, e);
    }
  },
  iE = [
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
  batchedUpdates: gp.unstable_batchedUpdates,
  createStringInterpolator: G2,
  colors: BP,
});
var oE = bM(iE, {
    applyAnimatedValues: XM,
    createAnimatedStyle: (e) => new nE(e),
    getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
  }),
  px = oE.animated;
const sE = () => {
    Rr(() => {
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
  aE = (e, t) => {
    const n = P.useRef(null),
      r = us(e, n),
      {
        xExtremumGetters: i,
        yExtremumGetters: o,
        seriesFormatters: s,
        colorProcessors: a,
      } = NP(t);
    return (
      sE(),
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
  Cg = (e, t) => {
    const n = t === 'x' ? rv : YS;
    return [
      ...((e == null
        ? void 0
        : e.map((r, i) => _({ id: `defaultized-${t}-axis-${i}` }, r))) ?? []),
      ...(e === void 0 || e.findIndex(({ id: r }) => r === n) === -1
        ? [{ id: n, scaleType: 'linear' }]
        : []),
    ];
  },
  lE = (e, t) => {
    const n = P.useMemo(() => Cg(e, 'x'), [e]),
      r = P.useMemo(() => Cg(t, 'y'), [t]);
    return [n, r];
  },
  uE = [
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
  cE = (e, t) => {
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
      v = ie(e, uE),
      {
        svgRef: w,
        chartSurfaceRef: k,
        xExtremumGetters: S,
        yExtremumGetters: C,
        seriesFormatters: M,
        colorProcessors: A,
      } = aE(t, p),
      [T, E] = lE(s, a),
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
  fE = P.forwardRef(function (t, n) {
    const {
      children: r,
      drawingProviderProps: i,
      colorProviderProps: o,
      seriesContextProps: s,
      cartesianContextProps: a,
      zAxisContextProps: l,
      highlightedProviderProps: u,
      chartsSurfaceProps: c,
    } = cE(t, n);
    return b.jsx(
      KS,
      _({}, i, {
        children: b.jsx(
          H4,
          _({}, o, {
            children: b.jsx(
              z4,
              _({}, s, {
                children: b.jsx(
                  E6,
                  _({}, a, {
                    children: b.jsx(
                      I6,
                      _({}, l, {
                        children: b.jsx(V4, {
                          children: b.jsx(
                            V6,
                            _({}, u, {
                              children: b.jsxs(
                                $6,
                                _({}, c, { children: [b.jsx(L6, {}), r] })
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
  dE = qe('div', { name: 'MuiResponsiveChart', slot: 'Container' })(
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
  pE = (e, t) => {
    const n = P.useRef(!1),
      r = P.useRef(null),
      [i, o] = P.useState(0),
      [s, a] = P.useState(0),
      l = P.useCallback(() => {
        const u = r == null ? void 0 : r.current;
        if (!u) return;
        const f = w5(u).getComputedStyle(u),
          d = Math.floor(parseFloat(f.height)) || 0,
          m = Math.floor(parseFloat(f.width)) || 0;
        o(m), a(d);
      }, []);
    return (
      P.useEffect(() => {
        n.current = !0;
      }, []),
      Vr(() => {
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
  hE = [
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
  mE = (e, t) => {
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
      w = ie(e, hE),
      { containerRef: k, width: S, height: C } = pE(n, r),
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
  gE = P.forwardRef(function (t, n) {
    const {
      hasIntrinsicSize: r,
      chartContainerProps: i,
      resizableChartContainerProps: o,
    } = mE(t, n);
    return b.jsx(dE, _({}, o, { children: r ? b.jsx(fE, _({}, i)) : null }));
  });
function yE(e) {
  return typeof e == 'string';
}
function vE(e, t, n) {
  return e === void 0 || yE(e)
    ? t
    : _({}, t, { ownerState: _({}, t.ownerState, n) });
}
const xE = { disableDefaultClasses: !1 },
  wE = P.createContext(xE);
function SE(e) {
  const { disableDefaultClasses: t } = P.useContext(wE);
  return (n) => (t ? '' : e(n));
}
function kE(e, t = []) {
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
function CE(e, t, n) {
  return typeof e == 'function' ? e(t, n) : e;
}
function bg(e) {
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
function bE(e) {
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
  const s = kE(_({}, i, r)),
    a = bg(r),
    l = bg(i),
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
const _E = [
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
    s = ie(e, _E),
    a = o ? {} : CE(r, i),
    { props: l, internalRef: u } = bE(_({}, s, { externalSlotProps: a })),
    c = us(
      u,
      a == null ? void 0 : a.ref,
      (t = e.additionalProps) == null ? void 0 : t.ref
    );
  return vE(n, _({}, l, { ref: c }), i);
}
function hx(e) {
  return mr('MuiChartsAxis', e);
}
const ka = Gr('MuiChartsAxis', [
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
  mx = qe('g', {
    name: 'MuiChartsAxis',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })(({ theme: e }) => ({
    [`& .${ka.tickLabel}`]: _({}, e.typography.caption, {
      fill: (e.vars || e).palette.text.primary,
    }),
    [`& .${ka.label}`]: _({}, e.typography.body1, {
      fill: (e.vars || e).palette.text.primary,
    }),
    [`& .${ka.line}`]: {
      stroke: (e.vars || e).palette.text.primary,
      shapeRendering: 'crispEdges',
      strokeWidth: 1,
    },
    [`& .${ka.tick}`]: {
      stroke: (e.vars || e).palette.text.primary,
      shapeRendering: 'crispEdges',
    },
  }));
function PE() {
  return typeof window > 'u';
}
const Sr = { widthCache: {}, cacheCount: 0 },
  ME = 2e3,
  EE = {
    position: 'absolute',
    top: '-20000px',
    left: 0,
    padding: 0,
    margin: 0,
    border: 'none',
    whiteSpace: 'pre',
  },
  TE = [
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
  _g = 'mui_measurement_span';
function gx(e, t) {
  return TE.indexOf(e) >= 0 && t === +t ? `${t}px` : t;
}
function yx(e) {
  return e
    .split('')
    .reduce(
      (r, i) =>
        i === i.toUpperCase() ? [...r, '-', i.toLowerCase()] : [...r, i],
      []
    )
    .join('');
}
const AE = (e) =>
    Object.keys(e)
      .sort()
      .reduce((t, n) => `${t}${yx(n)}:${gx(n, e[n])};`, ''),
  RE = (e, t = {}) => {
    if (e == null || PE()) return { width: 0, height: 0 };
    const n = `${e}`,
      r = AE(t),
      i = `${n}-${r}`;
    if (Sr.widthCache[i]) return Sr.widthCache[i];
    try {
      let o = document.getElementById(_g);
      o === null &&
        ((o = document.createElement('span')),
        o.setAttribute('id', _g),
        o.setAttribute('aria-hidden', 'true'),
        document.body.appendChild(o));
      const s = _({}, EE, t);
      Object.keys(s).map((u) => ((o.style[yx(u)] = gx(u, s[u])), u)),
        (o.textContent = n);
      const a = o.getBoundingClientRect(),
        l = { width: a.width, height: a.height };
      return (
        (Sr.widthCache[i] = l),
        Sr.cacheCount + 1 > ME
          ? ((Sr.cacheCount = 0), (Sr.widthCache = {}))
          : (Sr.cacheCount += 1),
        l
      );
    } catch {
      return { width: 0, height: 0 };
    }
  };
function gh({ style: e, needsComputation: t, text: n }) {
  return n
    .split(
      `
`
    )
    .map((r) => _({ text: r }, t ? RE(r, e) : { width: 0, height: 0 }));
}
const OE = ['x', 'y', 'style', 'text', 'ownerState'],
  $E = ['angle', 'textAnchor', 'dominantBaseline'];
function Ps(e) {
  const { x: t, y: n, style: r, text: i } = e,
    o = ie(e, OE),
    s = r ?? {},
    { angle: a, textAnchor: l, dominantBaseline: u } = s,
    c = ie(s, $E),
    f = P.useMemo(
      () =>
        gh({
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
const Pg = 5;
function IE(e, t, n = 0) {
  const r = Math.min(
    Math.abs(n) % 180,
    Math.abs((Math.abs(n) % 180) - 180) % 180
  );
  if (r < Pg) return e;
  if (r > 90 - Pg) return t;
  const i = (r * Math.PI) / 180,
    o = Math.atan2(t, e);
  return i < o ? e / Math.cos(i) : t / Math.sin(i);
}
function NE(e = !1) {
  const [t, n] = P.useState(!1);
  return (
    Vr(() => {
      e || n(!0);
    }, [e]),
    P.useEffect(() => {
      e && n(!0);
    }, [e]),
    t
  );
}
const jE = ['scale', 'tickNumber', 'reverse'],
  LE = (e) => {
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
      hx,
      t
    );
  };
function DE(
  e,
  { tickLabelStyle: t, tickLabelInterval: n, reverse: r, isMounted: i }
) {
  const o = e.map((u) => {
    if (!i || u.formattedValue === void 0)
      return _({}, u, { width: 0, height: 0 });
    const c = gh({ style: t, needsComputation: !0, text: u.formattedValue });
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
      h = IE(f, y, t == null ? void 0 : t.angle),
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
const FE = {
  position: 'bottom',
  disableLine: !1,
  disableTicks: !1,
  tickSize: 6,
};
function Mg(e) {
  const { xAxisIds: t, xAxis: n } = yr(),
    r = n[e.axisId ?? t[0]],
    { scale: i, tickNumber: o, reverse: s } = r,
    a = ie(r, jE),
    l = NE(),
    u = zu({ props: _({}, a, e), name: 'MuiChartsXAxis' }),
    c = _({}, FE, u),
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
    E = eo(),
    I = LE(_({}, c, { theme: E })),
    { left: R, top: O, width: D, height: U } = Vn(),
    B = m ? 4 : v,
    $ = f === 'bottom' ? 1 : -1,
    F = (k == null ? void 0 : k.axisLine) ?? 'line',
    H = (k == null ? void 0 : k.axisTick) ?? 'line',
    q = (k == null ? void 0 : k.axisTickLabel) ?? Ps,
    Y = (k == null ? void 0 : k.axisLabel) ?? Ps,
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
    ce = S2({
      scale: i,
      tickNumber: o,
      valueFormatter: w,
      tickInterval: C,
      tickPlacement: A,
      tickLabelPlacement: T,
    }),
    X = DE(ce, {
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
    : b.jsxs(mx, {
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
              { formattedValue: z, offset: W, labelOffset: G, skipLabel: N },
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
                      !N &&
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
const zE = ['scale', 'tickNumber'],
  UE = (e) => {
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
      hx,
      t
    );
  },
  VE = {
    position: 'left',
    disableLine: !1,
    disableTicks: !1,
    tickFontSize: 12,
    labelFontSize: 14,
    tickSize: 6,
  };
function Eg(e) {
  const { yAxisIds: t, yAxis: n } = yr(),
    r = n[e.axisId ?? t[0]],
    { scale: i, tickNumber: o } = r,
    s = ie(r, zE),
    a = zu({ props: _({}, s, e), name: 'MuiChartsYAxis' }),
    l = _({}, VE, a),
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
    A = eo(),
    T = A.direction === 'rtl',
    E = UE(_({}, l, { theme: A })),
    { left: I, top: R, width: O, height: D } = Vn(),
    U = f ? 4 : p,
    B = S2({
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
    Y = (v == null ? void 0 : v.axisTickLabel) ?? Ps,
    ye = (v == null ? void 0 : v.axisLabel) ?? Ps,
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
    : b.jsxs(mx, {
        transform: `translate(${u === 'right' ? I + O : I}, 0)`,
        className: E.root,
        children: [
          !c && b.jsx(H, _({ y1: R, y2: R + D, className: E.line }, ue)),
          B.map(
            (
              { formattedValue: z, offset: W, labelOffset: G, value: N },
              Se
            ) => {
              const J = $ * (U + 2),
                Re = G,
                Ee = typeof M == 'function' && !(M != null && M(N, Se));
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
const Ca = (e, t) =>
    e == null ? null : typeof e == 'object' ? e.axisId ?? t ?? null : e,
  ba = (e, t, n) =>
    typeof e == 'object'
      ? _({}, e, {
          slots: _({}, t, e == null ? void 0 : e.slots),
          slotProps: _({}, n, e == null ? void 0 : e.slotProps),
        })
      : { slots: t, slotProps: n };
function HE(e) {
  const {
      topAxis: t,
      leftAxis: n,
      rightAxis: r,
      bottomAxis: i,
      slots: o,
      slotProps: s,
    } = e,
    { xAxis: a, xAxisIds: l, yAxis: u, yAxisIds: c } = yr(),
    f = Ca(n === void 0 ? c[0] : n, c[0]),
    d = Ca(i === void 0 ? l[0] : i, l[0]),
    m = Ca(t, l[0]),
    y = Ca(r, c[0]);
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
  const h = ba(t, o, s),
    x = ba(i, o, s),
    p = ba(n, o, s),
    g = ba(r, o, s);
  return b.jsxs(P.Fragment, {
    children: [
      m && b.jsx(Mg, _({}, h, { position: 'top', axisId: m })),
      d && b.jsx(Mg, _({}, x, { position: 'bottom', axisId: d })),
      f && b.jsx(Eg, _({}, p, { position: 'left', axisId: f })),
      y && b.jsx(Eg, _({}, g, { position: 'right', axisId: y })),
    ],
  });
}
var pt = 'top',
  Vt = 'bottom',
  Ht = 'right',
  ht = 'left',
  yh = 'auto',
  Ys = [pt, Vt, Ht, ht],
  Wi = 'start',
  Ms = 'end',
  BE = 'clippingParents',
  vx = 'viewport',
  wo = 'popper',
  WE = 'reference',
  Tg = Ys.reduce(function (e, t) {
    return e.concat([t + '-' + Wi, t + '-' + Ms]);
  }, []),
  xx = [].concat(Ys, [yh]).reduce(function (e, t) {
    return e.concat([t, t + '-' + Wi, t + '-' + Ms]);
  }, []),
  YE = 'beforeRead',
  GE = 'read',
  QE = 'afterRead',
  KE = 'beforeMain',
  XE = 'main',
  qE = 'afterMain',
  ZE = 'beforeWrite',
  JE = 'write',
  e7 = 'afterWrite',
  t7 = [YE, GE, QE, KE, XE, qE, ZE, JE, e7];
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
function Br(e) {
  var t = bt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Dt(e) {
  var t = bt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function vh(e) {
  if (typeof ShadowRoot > 'u') return !1;
  var t = bt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function n7(e) {
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
function r7(e) {
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
const i7 = {
  name: 'applyStyles',
  enabled: !0,
  phase: 'write',
  fn: n7,
  effect: r7,
  requires: ['computeStyles'],
};
function vn(e) {
  return e.split('-')[0];
}
var jr = Math.max,
  Bl = Math.min,
  Yi = Math.round;
function vd() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + '/' + t.version;
        })
        .join(' ')
    : navigator.userAgent;
}
function wx() {
  return !/^((?!chrome|android).)*safari/i.test(vd());
}
function Gi(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(),
    i = 1,
    o = 1;
  t &&
    Dt(e) &&
    ((i = (e.offsetWidth > 0 && Yi(r.width) / e.offsetWidth) || 1),
    (o = (e.offsetHeight > 0 && Yi(r.height) / e.offsetHeight) || 1));
  var s = Br(e) ? bt(e) : window,
    a = s.visualViewport,
    l = !wx() && n,
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
function xh(e) {
  var t = Gi(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function Sx(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && vh(n)) {
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
function o7(e) {
  return ['table', 'td', 'th'].indexOf(wn(e)) >= 0;
}
function vr(e) {
  return ((Br(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function ec(e) {
  return wn(e) === 'html'
    ? e
    : e.assignedSlot || e.parentNode || (vh(e) ? e.host : null) || vr(e);
}
function Ag(e) {
  return !Dt(e) || Dn(e).position === 'fixed' ? null : e.offsetParent;
}
function s7(e) {
  var t = /firefox/i.test(vd()),
    n = /Trident/i.test(vd());
  if (n && Dt(e)) {
    var r = Dn(e);
    if (r.position === 'fixed') return null;
  }
  var i = ec(e);
  for (vh(i) && (i = i.host); Dt(i) && ['html', 'body'].indexOf(wn(i)) < 0; ) {
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
function Gs(e) {
  for (var t = bt(e), n = Ag(e); n && o7(n) && Dn(n).position === 'static'; )
    n = Ag(n);
  return n &&
    (wn(n) === 'html' || (wn(n) === 'body' && Dn(n).position === 'static'))
    ? t
    : n || s7(e) || t;
}
function wh(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
}
function zo(e, t, n) {
  return jr(e, Bl(t, n));
}
function a7(e, t, n) {
  var r = zo(e, t, n);
  return r > n ? n : r;
}
function kx() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Cx(e) {
  return Object.assign({}, kx(), e);
}
function bx(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
var l7 = function (t, n) {
  return (
    (t =
      typeof t == 'function'
        ? t(Object.assign({}, n.rects, { placement: n.placement }))
        : t),
    Cx(typeof t != 'number' ? t : bx(t, Ys))
  );
};
function u7(e) {
  var t,
    n = e.state,
    r = e.name,
    i = e.options,
    o = n.elements.arrow,
    s = n.modifiersData.popperOffsets,
    a = vn(n.placement),
    l = wh(a),
    u = [ht, Ht].indexOf(a) >= 0,
    c = u ? 'height' : 'width';
  if (!(!o || !s)) {
    var f = l7(i.padding, n),
      d = xh(o),
      m = l === 'y' ? pt : ht,
      y = l === 'y' ? Vt : Ht,
      h =
        n.rects.reference[c] + n.rects.reference[l] - s[l] - n.rects.popper[c],
      x = s[l] - n.rects.reference[l],
      p = Gs(o),
      g = p ? (l === 'y' ? p.clientHeight || 0 : p.clientWidth || 0) : 0,
      v = h / 2 - x / 2,
      w = f[m],
      k = g - d[c] - f[y],
      S = g / 2 - d[c] / 2 + v,
      C = zo(w, S, k),
      M = l;
    n.modifiersData[r] = ((t = {}), (t[M] = C), (t.centerOffset = C - S), t);
  }
}
function c7(e) {
  var t = e.state,
    n = e.options,
    r = n.element,
    i = r === void 0 ? '[data-popper-arrow]' : r;
  i != null &&
    ((typeof i == 'string' && ((i = t.elements.popper.querySelector(i)), !i)) ||
      (Sx(t.elements.popper, i) && (t.elements.arrow = i)));
}
const f7 = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: u7,
  effect: c7,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow'],
};
function Qi(e) {
  return e.split('-')[1];
}
var d7 = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
function p7(e, t) {
  var n = e.x,
    r = e.y,
    i = t.devicePixelRatio || 1;
  return { x: Yi(n * i) / i || 0, y: Yi(r * i) / i || 0 };
}
function Rg(e) {
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
    var S = Gs(n),
      C = 'clientHeight',
      M = 'clientWidth';
    if (
      (S === bt(n) &&
        ((S = vr(n)),
        Dn(S).position !== 'static' &&
          a === 'absolute' &&
          ((C = 'scrollHeight'), (M = 'scrollWidth'))),
      (S = S),
      i === pt || ((i === ht || i === Ht) && o === Ms))
    ) {
      w = Vt;
      var A = f && S === k && k.visualViewport ? k.visualViewport.height : S[C];
      (h -= A - r.height), (h *= l ? 1 : -1);
    }
    if (i === ht || ((i === pt || i === Vt) && o === Ms)) {
      v = Ht;
      var T = f && S === k && k.visualViewport ? k.visualViewport.width : S[M];
      (m -= T - r.width), (m *= l ? 1 : -1);
    }
  }
  var E = Object.assign({ position: a }, u && d7),
    I = c === !0 ? p7({ x: m, y: h }, bt(n)) : { x: m, y: h };
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
function h7(e) {
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
      variation: Qi(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: i,
      isFixed: t.options.strategy === 'fixed',
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Rg(
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
        Rg(
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
const m7 = {
  name: 'computeStyles',
  enabled: !0,
  phase: 'beforeWrite',
  fn: h7,
  data: {},
};
var _a = { passive: !0 };
function g7(e) {
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
        c.addEventListener('scroll', n.update, _a);
      }),
    a && l.addEventListener('resize', n.update, _a),
    function () {
      o &&
        u.forEach(function (c) {
          c.removeEventListener('scroll', n.update, _a);
        }),
        a && l.removeEventListener('resize', n.update, _a);
    }
  );
}
const y7 = {
  name: 'eventListeners',
  enabled: !0,
  phase: 'write',
  fn: function () {},
  effect: g7,
  data: {},
};
var v7 = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function Ka(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return v7[t];
  });
}
var x7 = { start: 'end', end: 'start' };
function Og(e) {
  return e.replace(/start|end/g, function (t) {
    return x7[t];
  });
}
function Sh(e) {
  var t = bt(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function kh(e) {
  return Gi(vr(e)).left + Sh(e).scrollLeft;
}
function w7(e, t) {
  var n = bt(e),
    r = vr(e),
    i = n.visualViewport,
    o = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    l = 0;
  if (i) {
    (o = i.width), (s = i.height);
    var u = wx();
    (u || (!u && t === 'fixed')) && ((a = i.offsetLeft), (l = i.offsetTop));
  }
  return { width: o, height: s, x: a + kh(e), y: l };
}
function S7(e) {
  var t,
    n = vr(e),
    r = Sh(e),
    i = (t = e.ownerDocument) == null ? void 0 : t.body,
    o = jr(
      n.scrollWidth,
      n.clientWidth,
      i ? i.scrollWidth : 0,
      i ? i.clientWidth : 0
    ),
    s = jr(
      n.scrollHeight,
      n.clientHeight,
      i ? i.scrollHeight : 0,
      i ? i.clientHeight : 0
    ),
    a = -r.scrollLeft + kh(e),
    l = -r.scrollTop;
  return (
    Dn(i || n).direction === 'rtl' &&
      (a += jr(n.clientWidth, i ? i.clientWidth : 0) - o),
    { width: o, height: s, x: a, y: l }
  );
}
function Ch(e) {
  var t = Dn(e),
    n = t.overflow,
    r = t.overflowX,
    i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function _x(e) {
  return ['html', 'body', '#document'].indexOf(wn(e)) >= 0
    ? e.ownerDocument.body
    : Dt(e) && Ch(e)
    ? e
    : _x(ec(e));
}
function Uo(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = _x(e),
    i = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    o = bt(r),
    s = i ? [o].concat(o.visualViewport || [], Ch(r) ? r : []) : r,
    a = t.concat(s);
  return i ? a : a.concat(Uo(ec(s)));
}
function xd(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function k7(e, t) {
  var n = Gi(e, !1, t === 'fixed');
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
function $g(e, t, n) {
  return t === vx ? xd(w7(e, n)) : Br(t) ? k7(t, n) : xd(S7(vr(e)));
}
function C7(e) {
  var t = Uo(ec(e)),
    n = ['absolute', 'fixed'].indexOf(Dn(e).position) >= 0,
    r = n && Dt(e) ? Gs(e) : e;
  return Br(r)
    ? t.filter(function (i) {
        return Br(i) && Sx(i, r) && wn(i) !== 'body';
      })
    : [];
}
function b7(e, t, n, r) {
  var i = t === 'clippingParents' ? C7(e) : [].concat(t),
    o = [].concat(i, [n]),
    s = o[0],
    a = o.reduce(function (l, u) {
      var c = $g(e, u, r);
      return (
        (l.top = jr(c.top, l.top)),
        (l.right = Bl(c.right, l.right)),
        (l.bottom = Bl(c.bottom, l.bottom)),
        (l.left = jr(c.left, l.left)),
        l
      );
    }, $g(e, s, r));
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  );
}
function Px(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    i = r ? vn(r) : null,
    o = r ? Qi(r) : null,
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
  var u = i ? wh(i) : null;
  if (u != null) {
    var c = u === 'y' ? 'height' : 'width';
    switch (o) {
      case Wi:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case Ms:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function Es(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = r === void 0 ? e.placement : r,
    o = n.strategy,
    s = o === void 0 ? e.strategy : o,
    a = n.boundary,
    l = a === void 0 ? BE : a,
    u = n.rootBoundary,
    c = u === void 0 ? vx : u,
    f = n.elementContext,
    d = f === void 0 ? wo : f,
    m = n.altBoundary,
    y = m === void 0 ? !1 : m,
    h = n.padding,
    x = h === void 0 ? 0 : h,
    p = Cx(typeof x != 'number' ? x : bx(x, Ys)),
    g = d === wo ? WE : wo,
    v = e.rects.popper,
    w = e.elements[y ? g : d],
    k = b7(Br(w) ? w : w.contextElement || vr(e.elements.popper), l, c, s),
    S = Gi(e.elements.reference),
    C = Px({ reference: S, element: v, strategy: 'absolute', placement: i }),
    M = xd(Object.assign({}, v, C)),
    A = d === wo ? M : S,
    T = {
      top: k.top - A.top + p.top,
      bottom: A.bottom - k.bottom + p.bottom,
      left: k.left - A.left + p.left,
      right: A.right - k.right + p.right,
    },
    E = e.modifiersData.offset;
  if (d === wo && E) {
    var I = E[i];
    Object.keys(T).forEach(function (R) {
      var O = [Ht, Vt].indexOf(R) >= 0 ? 1 : -1,
        D = [pt, Vt].indexOf(R) >= 0 ? 'y' : 'x';
      T[R] += I[D] * O;
    });
  }
  return T;
}
function _7(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = n.boundary,
    o = n.rootBoundary,
    s = n.padding,
    a = n.flipVariations,
    l = n.allowedAutoPlacements,
    u = l === void 0 ? xx : l,
    c = Qi(r),
    f = c
      ? a
        ? Tg
        : Tg.filter(function (y) {
            return Qi(y) === c;
          })
      : Ys,
    d = f.filter(function (y) {
      return u.indexOf(y) >= 0;
    });
  d.length === 0 && (d = f);
  var m = d.reduce(function (y, h) {
    return (
      (y[h] = Es(e, { placement: h, boundary: i, rootBoundary: o, padding: s })[
        vn(h)
      ]),
      y
    );
  }, {});
  return Object.keys(m).sort(function (y, h) {
    return m[y] - m[h];
  });
}
function P7(e) {
  if (vn(e) === yh) return [];
  var t = Ka(e);
  return [Og(e), t, Og(t)];
}
function M7(e) {
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
        v = l || (g || !y ? [Ka(x)] : P7(x)),
        w = [x].concat(v).reduce(function (ce, X) {
          return ce.concat(
            vn(X) === yh
              ? _7(t, {
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
        R = Qi(E) === Wi,
        O = [pt, Vt].indexOf(I) >= 0,
        D = O ? 'width' : 'height',
        U = Es(t, {
          placement: E,
          boundary: c,
          rootBoundary: f,
          altBoundary: d,
          padding: u,
        }),
        B = O ? (R ? Ht : ht) : R ? Vt : pt;
      k[D] > S[D] && (B = Ka(B));
      var $ = Ka(B),
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
const E7 = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: M7,
  requiresIfExists: ['offset'],
  data: { _skip: !1 },
};
function Ig(e, t, n) {
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
function Ng(e) {
  return [pt, Ht, Vt, ht].some(function (t) {
    return e[t] >= 0;
  });
}
function T7(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    i = t.rects.popper,
    o = t.modifiersData.preventOverflow,
    s = Es(t, { elementContext: 'reference' }),
    a = Es(t, { altBoundary: !0 }),
    l = Ig(s, r),
    u = Ig(a, i, o),
    c = Ng(l),
    f = Ng(u);
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
const A7 = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: T7,
};
function R7(e, t, n) {
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
function O7(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    i = n.offset,
    o = i === void 0 ? [0, 0] : i,
    s = xx.reduce(function (c, f) {
      return (c[f] = R7(f, t.rects, o)), c;
    }, {}),
    a = s[t.placement],
    l = a.x,
    u = a.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l),
    (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[r] = s);
}
const $7 = {
  name: 'offset',
  enabled: !0,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: O7,
};
function I7(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = Px({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: 'absolute',
    placement: t.placement,
  });
}
const N7 = {
  name: 'popperOffsets',
  enabled: !0,
  phase: 'read',
  fn: I7,
  data: {},
};
function j7(e) {
  return e === 'x' ? 'y' : 'x';
}
function L7(e) {
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
    x = Es(t, { boundary: l, rootBoundary: u, padding: f, altBoundary: c }),
    p = vn(t.placement),
    g = Qi(t.placement),
    v = !g,
    w = wh(p),
    k = j7(w),
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
        q = g === Wi ? C[U] : M[U],
        Y = g === Wi ? -M[U] : -C[U],
        ye = t.elements.arrow,
        ce = m && ye ? xh(ye) : { width: 0, height: 0 },
        X = t.modifiersData['arrow#persistent']
          ? t.modifiersData['arrow#persistent'].padding
          : kx(),
        oe = X[O],
        ue = X[D],
        fe = zo(0, C[U], ce[U]),
        z = v ? C[U] / 2 - H - fe - oe - T.mainAxis : q - fe - oe - T.mainAxis,
        W = v ? -C[U] / 2 + H + fe + ue + T.mainAxis : Y + fe + ue + T.mainAxis,
        G = t.elements.arrow && Gs(t.elements.arrow),
        N = G ? (w === 'y' ? G.clientTop || 0 : G.clientLeft || 0) : 0,
        Se = (R = E == null ? void 0 : E[w]) != null ? R : 0,
        J = B + z - Se - N,
        Re = B + W - Se,
        Ee = zo(m ? Bl($, J) : $, B, m ? jr(F, Re) : F);
      (S[w] = Ee), (I[w] = Ee - B);
    }
    if (a) {
      var gt,
        Qs = w === 'x' ? pt : ht,
        Lx = w === 'x' ? Vt : Ht,
        xr = S[k],
        Ks = k === 'y' ? 'height' : 'width',
        bh = xr + x[Qs],
        _h = xr - x[Lx],
        nc = [pt, ht].indexOf(p) !== -1,
        Ph = (gt = E == null ? void 0 : E[k]) != null ? gt : 0,
        Mh = nc ? bh : xr - C[Ks] - M[Ks] - Ph + T.altAxis,
        Eh = nc ? xr + C[Ks] + M[Ks] - Ph - T.altAxis : _h,
        Th = m && nc ? a7(Mh, xr, Eh) : zo(m ? Mh : bh, xr, m ? Eh : _h);
      (S[k] = Th), (I[k] = Th - xr);
    }
    t.modifiersData[r] = I;
  }
}
const D7 = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: L7,
  requiresIfExists: ['offset'],
};
function F7(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function z7(e) {
  return e === bt(e) || !Dt(e) ? Sh(e) : F7(e);
}
function U7(e) {
  var t = e.getBoundingClientRect(),
    n = Yi(t.width) / e.offsetWidth || 1,
    r = Yi(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function V7(e, t, n) {
  n === void 0 && (n = !1);
  var r = Dt(t),
    i = Dt(t) && U7(t),
    o = vr(t),
    s = Gi(e, i, n),
    a = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((wn(t) !== 'body' || Ch(o)) && (a = z7(t)),
      Dt(t)
        ? ((l = Gi(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
        : o && (l.x = kh(o))),
    {
      x: s.left + a.scrollLeft - l.x,
      y: s.top + a.scrollTop - l.y,
      width: s.width,
      height: s.height,
    }
  );
}
function H7(e) {
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
function B7(e) {
  var t = H7(e);
  return t7.reduce(function (n, r) {
    return n.concat(
      t.filter(function (i) {
        return i.phase === r;
      })
    );
  }, []);
}
function W7(e) {
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
function Y7(e) {
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
var jg = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
function Lg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == 'function');
  });
}
function G7(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    i = t.defaultOptions,
    o = i === void 0 ? jg : i;
  return function (a, l, u) {
    u === void 0 && (u = o);
    var c = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, jg, o),
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
              reference: Br(a)
                ? Uo(a)
                : a.contextElement
                ? Uo(a.contextElement)
                : [],
              popper: Uo(l),
            });
          var v = B7(Y7([].concat(r, c.options.modifiers)));
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
            if (Lg(g, v)) {
              (c.rects = {
                reference: V7(g, Gs(v), c.options.strategy === 'fixed'),
                popper: xh(v),
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
        update: W7(function () {
          return new Promise(function (x) {
            m.forceUpdate(), x(c);
          });
        }),
        destroy: function () {
          h(), (d = !0);
        },
      };
    if (!Lg(a, l)) return m;
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
var Q7 = [y7, N7, m7, i7, $7, E7, D7, f7, A7],
  K7 = G7({ defaultModifiers: Q7 });
function X7(e) {
  return typeof e == 'function' ? e() : e;
}
const q7 = P.forwardRef(function (t, n) {
    const { children: r, container: i, disablePortal: o = !1 } = t,
      [s, a] = P.useState(null),
      l = us(P.isValidElement(r) ? r.ref : null, n);
    if (
      (Vr(() => {
        o || a(X7(i) || document.body);
      }, [i, o]),
      Vr(() => {
        if (s && !o)
          return (
            Jf(n, s),
            () => {
              Jf(n, null);
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
    return b.jsx(P.Fragment, { children: s && gp.createPortal(r, s) });
  }),
  Mx = 'base';
function Z7(e) {
  return `${Mx}--${e}`;
}
function J7(e, t) {
  return `${Mx}-${e}-${t}`;
}
function Ex(e, t) {
  const n = Nv[t];
  return n ? Z7(n) : J7(e, t);
}
function eT(e, t) {
  const n = {};
  return (
    t.forEach((r) => {
      n[r] = Ex(e, r);
    }),
    n
  );
}
const Tx = 'Popper';
function tT(e) {
  return Ex(Tx, e);
}
eT(Tx, ['root']);
const nT = [
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
  rT = [
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
function iT(e, t) {
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
function wd(e) {
  return typeof e == 'function' ? e() : e;
}
function oT(e) {
  return e.nodeType !== void 0;
}
const sT = () => Un({ root: ['root'] }, SE(tT)),
  aT = {},
  lT = P.forwardRef(function (t, n) {
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
      x = ie(t, nT),
      p = P.useRef(null),
      g = us(p, n),
      v = P.useRef(null),
      w = us(v, d),
      k = P.useRef(w);
    Vr(() => {
      k.current = w;
    }, [w]),
      P.useImperativeHandle(d, () => v.current, []);
    const S = iT(c, s),
      [C, M] = P.useState(S),
      [A, T] = P.useState(wd(i));
    P.useEffect(() => {
      v.current && v.current.forceUpdate();
    }),
      P.useEffect(() => {
        i && T(wd(i));
      }, [i]),
      Vr(() => {
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
        const B = K7(A, p.current, _({ placement: S }, f, { modifiers: U }));
        return (
          k.current(B),
          () => {
            B.destroy(), k.current(null);
          }
        );
      }, [A, a, l, u, f, S]);
    const E = { placement: C };
    h !== null && (E.TransitionProps = h);
    const I = sT(),
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
  uT = P.forwardRef(function (t, n) {
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
        popperOptions: d = aT,
        popperRef: m,
        style: y,
        transition: h = !1,
        slotProps: x = {},
        slots: p = {},
      } = t,
      g = ie(t, rT),
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
      const T = wd(r);
      C = T && oT(T) ? Zf(T).body : Zf(null).body;
    }
    const M = !c && l && (!h || v) ? 'none' : void 0,
      A = h ? { in: c, onEnter: k, onExited: S } : void 0;
    return b.jsx(q7, {
      disablePortal: a,
      container: C,
      children: b.jsx(
        lT,
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
function Ax(e) {
  const { children: t, defer: n = !1, fallback: r = null } = e,
    [i, o] = P.useState(!1);
  return (
    Vr(() => {
      n || o(!0);
    }, [n]),
    P.useEffect(() => {
      n && o(!0);
    }, [n]),
    b.jsx(P.Fragment, { children: i ? t : r })
  );
}
function cT(e) {
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
function fT() {
  const e = C2(),
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
function dT(e, t) {
  if (e === 'item') return t !== null;
  const n = t.x !== null,
    r = t.y !== null;
  return n || r;
}
function pT(e) {
  return e instanceof Date ? e.toUTCString() : e.toLocaleString();
}
function hT(e) {
  return mr('MuiChartsTooltip', e);
}
const Dg = Gr('MuiChartsTooltip', [
    'root',
    'table',
    'row',
    'cell',
    'mark',
    'markCell',
    'labelCell',
    'valueCell',
  ]),
  Rx = qe('div', { name: 'MuiChartsTooltip', slot: 'Container' })(
    ({ theme: e }) => ({
      boxShadow: e.shadows[1],
      backgroundColor: (e.vars || e).palette.background.paper,
      color: (e.vars || e).palette.text.primary,
      transition: e.transitions.create('box-shadow'),
      borderRadius: e.shape.borderRadius,
    })
  ),
  Ox = qe('table', { name: 'MuiChartsTooltip', slot: 'Table' })(
    ({ theme: e }) => ({
      borderSpacing: 0,
      '& thead td': {
        borderBottom: `solid ${(e.vars || e).palette.divider} 1px`,
      },
    })
  ),
  Sd = qe('tr', { name: 'MuiChartsTooltip', slot: 'Row' })(({ theme: e }) => ({
    'tr:first-of-type& td': { paddingTop: e.spacing(1) },
    'tr:last-of-type& td': { paddingBottom: e.spacing(1) },
  })),
  Or = qe('td', { name: 'MuiChartsTooltip', slot: 'Cell' })(({ theme: e }) => ({
    verticalAlign: 'middle',
    color: (e.vars || e).palette.text.secondary,
    [`&.${Dg.labelCell}`]: { paddingLeft: e.spacing(1) },
    [`&.${Dg.valueCell}`]: {
      paddingLeft: e.spacing(4),
      color: (e.vars || e).palette.text.primary,
    },
    'td:first-of-type&': { paddingLeft: e.spacing(2) },
    'td:last-of-type&': { paddingRight: e.spacing(2) },
  })),
  $x = qe('div', {
    name: 'MuiChartsTooltip',
    slot: 'Mark',
    shouldForwardProp: (e) => m5(e) && e !== 'color',
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
function mT(e) {
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
  return b.jsx(Rx, {
    sx: r,
    className: i.root,
    children: b.jsx(Ox, {
      className: i.table,
      children: b.jsx('tbody', {
        children: b.jsxs(Sd, {
          className: i.row,
          children: [
            b.jsx(Or, {
              className: Tn(i.markCell, i.cell),
              children: b.jsx($x, { color: a, className: i.mark }),
            }),
            b.jsx(Or, { className: Tn(i.labelCell, i.cell), children: s }),
            b.jsx(Or, { className: Tn(i.valueCell, i.cell), children: u }),
          ],
        }),
      }),
    }),
  });
}
function Ix(e) {
  return P.useContext(Xv);
}
function gT(e) {
  var w;
  const { content: t, itemData: n, sx: r, classes: i, contentProps: o } = e,
    s = Xr()[n.type].series[n.seriesId],
    { xAxis: a, yAxis: l, xAxisIds: u, yAxisIds: c } = yr(),
    { zAxis: f, zAxisIds: d } = P.useContext(Jp),
    m = Ix(),
    y = s.xAxisId ?? s.xAxisKey ?? u[0],
    h = s.yAxisId ?? s.yAxisKey ?? c[0],
    x = s.zAxisId ?? s.zAxisKey ?? d[0],
    p =
      ((w = m[s.type]) == null
        ? void 0
        : w.call(m, s, y && a[y], h && l[h], x && f[x])) ?? (() => ''),
    g = t ?? mT,
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
function yT(e) {
  return b5(e);
}
function vT(e) {
  return mr('MuiTypography', e);
}
Gr('MuiTypography', [
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
const xT = [
    'align',
    'className',
    'component',
    'gutterBottom',
    'noWrap',
    'paragraph',
    'variant',
    'variantMapping',
  ],
  wT = (e) => {
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
          e.align !== 'inherit' && `align${Ns(t)}`,
          n && 'gutterBottom',
          r && 'noWrap',
          i && 'paragraph',
        ],
      };
    return Un(a, vT, s);
  },
  ST = qe('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== 'inherit' && t[`align${Ns(n.align)}`],
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
  Fg = {
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
  kT = {
    primary: 'primary.main',
    textPrimary: 'text.primary',
    secondary: 'secondary.main',
    textSecondary: 'text.secondary',
    error: 'error.main',
  },
  CT = (e) => kT[e] || e,
  qc = P.forwardRef(function (t, n) {
    const r = yT({ props: t, name: 'MuiTypography' }),
      i = CT(r.color),
      o = $v(_({}, r, { color: i })),
      {
        align: s = 'inherit',
        className: a,
        component: l,
        gutterBottom: u = !1,
        noWrap: c = !1,
        paragraph: f = !1,
        variant: d = 'body1',
        variantMapping: m = Fg,
      } = o,
      y = ie(o, xT),
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
      x = l || (f ? 'p' : m[d] || Fg[d]) || 'span',
      p = wT(h);
    return b.jsx(
      ST,
      _({ as: x, ref: n, ownerState: h, className: Tn(p.root, a) }, y)
    );
  });
let zg;
class bT {
  constructor() {
    if (((this.types = new Set()), zg))
      throw new Error('You can only create one instance!');
    zg = this.types;
  }
  addType(t) {
    this.types.add(t);
  }
  getTypes() {
    return this.types;
  }
}
const tc = new bT();
tc.addType('bar');
tc.addType('line');
tc.addType('scatter');
function Nx(e) {
  return tc.getTypes().has(e);
}
function _T(e) {
  return Nx(e.type);
}
function PT(e) {
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
    ((l) => (n.scaleType === 'utc' ? pT(l) : l.toLocaleString()));
  return b.jsx(Rx, {
    sx: o,
    className: s.root,
    children: b.jsxs(Ox, {
      className: s.table,
      children: [
        i != null &&
          !n.hideTooltip &&
          b.jsx('thead', {
            children: b.jsx(Sd, {
              children: b.jsx(Or, {
                colSpan: 3,
                children: b.jsx(qc, {
                  children: a(i, { location: 'tooltip' }),
                }),
              }),
            }),
          }),
        b.jsx('tbody', {
          children: t
            .filter(_T)
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
                  Sd,
                  {
                    className: s.row,
                    children: [
                      b.jsx(Or, {
                        className: Tn(s.markCell, s.cell),
                        children:
                          h && b.jsx($x, { color: h, className: s.mark }),
                      }),
                      b.jsx(Or, {
                        className: Tn(s.labelCell, s.cell),
                        children: y ? b.jsx(qc, { children: y }) : null,
                      }),
                      b.jsx(Or, {
                        className: Tn(s.valueCell, s.cell),
                        children: b.jsx(qc, { children: m }),
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
function MT(e) {
  const { content: t, contentProps: n, axisData: r, sx: i, classes: o } = e,
    s = (r.x && r.x.index) !== void 0,
    a = s ? r.x && r.x.index : r.y && r.y.index,
    l = s ? r.x && r.x.value : r.y && r.y.value,
    { xAxisIds: u, xAxis: c, yAxisIds: f, yAxis: d } = yr(),
    { zAxisIds: m, zAxis: y } = P.useContext(Jp),
    h = Xr(),
    x = Ix(),
    p = s ? u[0] : f[0],
    g = P.useMemo(() => {
      const S = [];
      return (
        Object.keys(h)
          .filter(Nx)
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
    w = t ?? PT,
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
const ET = (e) => {
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
      hT,
      t
    );
  },
  TT = qe(uT, {
    name: 'MuiChartsTooltip',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })(({ theme: e }) => ({ pointerEvents: 'none', zIndex: e.zIndex.modal }));
function AT(e) {
  const t = zu({ props: e, name: 'MuiChartsTooltip' }),
    {
      trigger: n = 'axis',
      itemContent: r,
      axisContent: i,
      slots: o,
      slotProps: s,
    } = t,
    a = fT(),
    { item: l, axis: u } = P.useContext(zs),
    c = n === 'item' ? l : u,
    f = dT(n, c),
    d = a !== null && f,
    m = ET({ classes: t.classes }),
    y = (o == null ? void 0 : o.popper) ?? TT,
    h = yn({
      elementType: y,
      externalSlotProps: s == null ? void 0 : s.popper,
      additionalProps: {
        open: d,
        placement:
          (a == null ? void 0 : a.pointerType) === 'mouse'
            ? 'right-start'
            : 'top',
        anchorEl: cT(a),
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
    : b.jsx(Ax, {
        children:
          d &&
          b.jsx(
            y,
            _({}, h, {
              children:
                n === 'item'
                  ? b.jsx(gT, {
                      itemData: c,
                      content: (o == null ? void 0 : o.itemContent) ?? r,
                      contentProps: s == null ? void 0 : s.itemContent,
                      sx: { mx: 2 },
                      classes: m,
                    })
                  : b.jsx(MT, {
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
const RT = (e) => {
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
    return t.reduce((r, i) => {
      const o = nn(n[i].label, 'legend');
      return o === void 0 || r.push({ color: n[i].color, label: o, id: i }), r;
    }, []);
  },
  IT = (e) => {
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
  NT = { bar: RT, scatter: OT, line: $T, pie: IT };
function jT(e) {
  return Object.keys(e).flatMap((t) => {
    const n = NT[t];
    return n === void 0 ? [] : n(e[t]);
  });
}
function LT(e) {
  return mr('MuiChartsLegend', e);
}
Gr('MuiChartsLegend', ['root', 'series', 'mark', 'label', 'column', 'row']);
const DT = ['label'];
function FT(e, t, n, r, i, o, s) {
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
          x = ie(y, DT);
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
const zT = ['rotate', 'dominantBaseline'],
  UT = qe('g', {
    name: 'MuiChartsLegend',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({}),
  VT = (e) =>
    typeof e == 'number'
      ? { left: e, right: e, top: e, bottom: e }
      : _({ left: 0, right: 0, top: 0, bottom: 0 }, e);
function HT(e) {
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
    d = eo(),
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
    x = P.useMemo(() => VT(c), [c]),
    p = P.useCallback(
      (E, I = {}) => {
        const R = ie(I, zT),
          O = gh({ style: R, needsComputation: !0, text: E }),
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
    [S, C, M] = P.useMemo(() => FT(i, p, h, r, w, k, u), [i, p, h, r, w, k, u]),
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
    : b.jsx(Ax, {
        children: b.jsx(UT, {
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
                    b.jsx(Ps, {
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
const BT = ['drawingArea', 'seriesToDisplay'];
function WT(e) {
  const { seriesToDisplay: t } = e,
    n = ie(e, BT);
  return b.jsx(HT, _({}, n, { itemsToDisplay: t }));
}
const YT = (e) => {
    const { classes: t, direction: n } = e;
    return Un(
      {
        root: ['root', n],
        mark: ['mark'],
        label: ['label'],
        series: ['series'],
      },
      LT,
      t
    );
  },
  GT = {
    position: { horizontal: 'middle', vertical: 'top' },
    direction: 'row',
  };
function QT(e) {
  const t = zu({ props: _({}, GT, e), name: 'MuiChartsLegend' }),
    { position: n, direction: r, hidden: i, slots: o, slotProps: s } = t,
    a = eo(),
    l = YT(_({}, t, { theme: a })),
    u = Vn(),
    c = Xr(),
    f = jT(c),
    d = (o == null ? void 0 : o.legend) ?? WT,
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
function _r(e, t) {
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
function KT(e) {
  return mr('MuiChartsAxisHighlight', e);
}
Gr('MuiChartsAxisHighlight', ['root']);
const XT = () => Un({ root: ['root'] }, KT),
  Pa = qe('path', {
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
function qT(e) {
  const { x: t, y: n } = e,
    { xAxisIds: r, xAxis: i, yAxisIds: o, yAxis: s } = yr(),
    a = XT(),
    l = r[0],
    u = o[0],
    c = i[l].scale,
    f = s[u].scale,
    { axis: d } = P.useContext(zs),
    m = Km(c),
    y = Km(f),
    h = d.x,
    x = d.y,
    p = t === 'band' && h !== null && gs(c),
    g = n === 'band' && x !== null && gs(f);
  return b.jsxs(P.Fragment, {
    children: [
      p &&
        c(h.value) !== void 0 &&
        b.jsx(Pa, {
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
        b.jsx(Pa, {
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
        b.jsx(Pa, {
          d: `M ${m(d.x.value)} ${f.range()[0]} L ${m(d.x.value)} ${
            f.range()[1]
          }`,
          className: a.root,
          ownerState: { axisHighlight: 'line' },
        }),
      n === 'line' &&
        d.y !== null &&
        b.jsx(Pa, {
          d: `M ${c.range()[0]} ${y(d.y.value)} L ${c.range()[1]} ${y(
            d.y.value
          )}`,
          className: a.root,
          ownerState: { axisHighlight: 'line' },
        }),
    ],
  });
}
const ZT = (e) => {
    const { dispatch: t } = P.useContext(zs),
      { setHighlighted: n, clearHighlighted: r } = eh();
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
  JT = [
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
function e8(e) {
  return mr('MuiPieArc', e);
}
Gr('MuiPieArc', ['root', 'highlighted', 'faded']);
const t8 = (e) => {
    const { classes: t, id: n, isFaded: r, isHighlighted: i } = e,
      o = { root: ['root', `series-${n}`, i && 'highlighted', r && 'faded'] };
    return Un(o, e8, t);
  },
  n8 = qe(px.path, {
    name: 'MuiPieArc',
    slot: 'Root',
    overridesResolver: (e, t) => t.arc,
  })(({ theme: e }) => ({
    stroke: (e.vars || e).palette.background.paper,
    strokeWidth: 1,
    strokeLinejoin: 'round',
  }));
function r8(e) {
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
    y = ie(e, JT),
    h = {
      id: s,
      dataIndex: i,
      classes: t,
      color: n,
      isFaded: l,
      isHighlighted: u,
    },
    x = t8(h),
    p = ZT();
  return b.jsx(
    n8,
    _(
      {
        d: Hl([m, o, d, a, f, r], (g, v, w, k, S, C) =>
          E2().cornerRadius(C)({
            padAngle: w,
            startAngle: g,
            endAngle: v,
            innerRadius: k,
            outerRadius: S,
          })
        ),
        visibility: Hl([m, o], (g, v) => (g === v ? 'hidden' : 'visible')),
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
const i8 = {
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
  o8 = {
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
function jx(e) {
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
    { isFaded: c, isHighlighted: f } = eh();
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
const s8 = [
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
  a8 = [
    'startAngle',
    'endAngle',
    'paddingAngle',
    'innerRadius',
    'arcLabelRadius',
    'outerRadius',
    'cornerRadius',
  ];
function l8(e) {
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
    m = ie(e, s8),
    y = jx({
      innerRadius: r,
      outerRadius: i,
      cornerRadius: o,
      paddingAngle: s,
      id: a,
      highlighted: l,
      faded: u,
      data: c,
    }),
    h = cx(y, _({}, i8, { immediate: d })),
    { highlightScope: x } = eh();
  if (c.length === 0) return null;
  const p = (t == null ? void 0 : t.pieArc) ?? r8;
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
          I = ie(g, a8);
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
const u8 = [
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
function c8(e) {
  return mr('MuiPieArcLabel', e);
}
Gr('MuiPieArcLabel', ['root', 'highlighted', 'faded']);
const f8 = (e) => {
    const { classes: t, id: n, isFaded: r, isHighlighted: i } = e,
      o = { root: ['root', `series-${n}`, i && 'highlighted', r && 'faded'] };
    return Un(o, c8, t);
  },
  d8 = qe(px.text, {
    name: 'MuiPieArcLabel',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })(({ theme: e }) => ({
    fill: (e.vars || e).palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'middle',
    pointerEvents: 'none',
  })),
  Ug = (e, t) => (n, r, i, o, s) => {
    if (!e) return 0;
    const [a, l] = E2()
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
function p8(e) {
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
    m = ie(e, u8),
    h = f8({ id: t, classes: n, color: r, isFaded: f, isHighlighted: c });
  return b.jsx(
    d8,
    _({ className: h.root }, m, {
      style: _(
        {
          x: Hl([i, o, s, a, l], Ug(u, 'x')),
          y: Hl([i, o, s, a, l], Ug(u, 'y')),
        },
        d
      ),
      children: u,
    })
  );
}
const h8 = [
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
  m8 = [
    'startAngle',
    'endAngle',
    'paddingAngle',
    'innerRadius',
    'outerRadius',
    'arcLabelRadius',
    'cornerRadius',
  ],
  g8 = 180 / Math.PI;
function y8(e, t, n) {
  var i;
  if (!e || (n.endAngle - n.startAngle) * g8 < t) return null;
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
function v8(e) {
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
    h = ie(e, h8),
    x = jx({
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
    p = cx(x, _({}, o8, { immediate: d }));
  if (o.length === 0) return null;
  const g = (y == null ? void 0 : y.pieArcLabel) ?? p8;
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
          I = ie(v, m8);
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
              formattedArcLabel: y8(t, n, w),
            },
            m == null ? void 0 : m.pieArcLabel
          )
        );
      }),
    })
  );
}
function Vg(e, t) {
  const { height: n, width: r } = t,
    { cx: i, cy: o } = e,
    s = Math.min(r, n) / 2,
    a = _r(i ?? '50%', r),
    l = _r(o ?? '50%', n);
  return { cx: a, cy: l, availableRadius: s };
}
function x8(e) {
  const { skipAnimation: t, slots: n, slotProps: r, onItemClick: i } = e,
    o = M6(),
    { left: s, top: a, width: l, height: u } = P.useContext(au);
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
          } = Vg({ cx: g, cy: v }, { width: l, height: u }),
          A = _r(y ?? M, M),
          T = _r(m ?? 0, M);
        return b.jsx(
          'g',
          {
            transform: `translate(${s + S}, ${a + C})`,
            children: b.jsx(l8, {
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
          } = Vg({ cx: k, cy: S }, { width: l, height: u }),
          T = _r(y ?? A, A),
          E = _r(m ?? 0, A),
          I = h === void 0 ? (T + E) / 2 : _r(h, A);
        return b.jsx(
          'g',
          {
            transform: `translate(${s + C}, ${a + M})`,
            children: b.jsx(v8, {
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
const w8 = () => eo().direction === 'rtl',
  S8 = ['message'],
  k8 = qe('text')(({ theme: e }) =>
    _({}, e.typography.body2, {
      stroke: 'none',
      fill: e.palette.text.primary,
      shapeRendering: 'crispEdges',
      textAnchor: 'middle',
      dominantBaseline: 'middle',
    })
  );
function C8(e) {
  const { message: t } = e,
    n = ie(e, S8),
    { top: r, left: i, height: o, width: s } = Vn();
  return b.jsx(
    k8,
    _({ x: i + s / 2, y: r + o / 2 }, n, { children: t ?? 'Loading data…' })
  );
}
const b8 = ['message'],
  _8 = qe('text')(({ theme: e }) =>
    _({}, e.typography.body2, {
      stroke: 'none',
      fill: e.palette.text.primary,
      shapeRendering: 'crispEdges',
      textAnchor: 'middle',
      dominantBaseline: 'middle',
    })
  );
function P8(e) {
  const { message: t } = e,
    n = ie(e, b8),
    { top: r, left: i, height: o, width: s } = Vn();
  return b.jsx(
    _8,
    _({ x: i + s / 2, y: r + o / 2 }, n, {
      children: t ?? 'No data to display',
    })
  );
}
function M8() {
  const e = Xr();
  return Object.values(e).every((t) => {
    if (!t) return !0;
    const { series: n, seriesOrder: r } = t;
    return r.every((i) => n[i].data.length === 0);
  });
}
function E8(e) {
  var n, r, i, o;
  const t = M8();
  if (e.loading) {
    const s = ((n = e.slots) == null ? void 0 : n.loadingOverlay) ?? C8;
    return b.jsx(
      s,
      _({}, (r = e.slotProps) == null ? void 0 : r.loadingOverlay)
    );
  }
  if (t) {
    const s = ((i = e.slots) == null ? void 0 : i.noDataOverlay) ?? P8;
    return b.jsx(
      s,
      _({}, (o = e.slotProps) == null ? void 0 : o.noDataOverlay)
    );
  }
  return null;
}
const T8 = [
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
  A8 = { top: 5, bottom: 5, left: 5, right: 100 },
  R8 = { top: 5, bottom: 5, left: 100, right: 5 },
  O8 = P.forwardRef(function (t, n) {
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
      E = ie(t, T8),
      I = w8(),
      R = _({}, I ? R8 : A8, l),
      O = _(
        {
          direction: 'column',
          position: { vertical: 'middle', horizontal: I ? 'left' : 'right' },
        },
        y
      );
    return b.jsxs(
      gE,
      _({}, E, {
        ref: n,
        series: o.map((D) => _({ type: 'pie' }, D)),
        width: s,
        height: a,
        margin: R,
        xAxis: r ?? [
          {
            id: rv,
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
          b.jsx(HE, {
            topAxis: h,
            leftAxis: x,
            rightAxis: p,
            bottomAxis: g,
            slots: w,
            slotProps: k,
          }),
          b.jsx(x8, {
            slots: w,
            slotProps: k,
            onItemClick: S,
            skipAnimation: m,
          }),
          b.jsx(E8, { loading: C, slots: w, slotProps: k }),
          b.jsx(QT, _({}, O, { slots: w, slotProps: k })),
          b.jsx(qT, _({}, d)),
          !C && b.jsx(AT, _({}, f, { slots: w, slotProps: k })),
          v,
        ],
      })
    );
  });
function $8(e) {
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
              b.jsx('img', { src: CS, alt: '', width: 30, height: 30 }),
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
                b.jsx('img', { src: bS, alt: '', width: 20 }),
                b.jsx('span', { children: 'Написать нам' }),
              ],
            }),
          }),
          b.jsxs('h2', {
            className: rt.stats_header,
            children: [
              b.jsx(U0, {
                className: rt.accent_number,
                end: e.stats.total_games,
              }),
              ' игр сыграно',
            ],
          }),
          b.jsxs('h2', {
            className: rt.stats_header,
            children: [
              b.jsx(U0, {
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
            b.jsx(O8, {
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
const I8 = '_rating_v2r5l_1',
  N8 = '_header_v2r5l_11',
  j8 = '_table_wrapper_v2r5l_23',
  L8 = '_table_v2r5l_23',
  D8 = '_shield_v2r5l_67',
  F8 = '_name_v2r5l_72',
  si = {
    rating: I8,
    header: N8,
    table_wrapper: j8,
    table: L8,
    shield: D8,
    name: F8,
  },
  z8 =
    "data:image/svg+xml,%3csvg%20width='800'%20height='800'%20viewBox='0%200%20800%20800'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M112.584%20169.414C100%20187.343%20100%20240.636%20100%20347.223V399.713C100%20587.647%20241.299%20678.85%20329.952%20717.577C354%20728.08%20366.023%20733.333%20400%20733.333V66.6667C372.953%2066.6667%20346.833%2075.6081%20294.591%2093.4907L275.497%20100.026C175.277%20134.332%20125.168%20151.485%20112.584%20169.414Z'%20fill='%236A3505'/%3e%3cpath%20d='M700%20399.047V346.557C700%20239.969%20700%20186.676%20687.417%20168.747C674.833%20150.818%20624.723%20133.665%20524.503%2099.3597L505.41%2092.824C453.167%2074.9413%20427.047%2066%20400%2066V732.667C433.977%20732.667%20446%20727.413%20470.047%20716.91C558.7%20678.183%20700%20586.98%20700%20399.047Z'%20fill='%23AD7056'/%3e%3c/svg%3e",
  U8 =
    "data:image/svg+xml,%3csvg%20width='800'%20height='800'%20viewBox='0%200%20800%20800'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M112.584%20169.414C100%20187.343%20100%20240.636%20100%20347.223V399.713C100%20587.647%20241.299%20678.85%20329.952%20717.577C354%20728.08%20366.023%20733.333%20400%20733.333V66.6667C372.953%2066.6667%20346.833%2075.6081%20294.591%2093.4907L275.497%20100.026C175.277%20134.332%20125.168%20151.485%20112.584%20169.414Z'%20fill='%23D3D3D3'/%3e%3cpath%20d='M700%20399.047V346.557C700%20239.969%20700%20186.676%20687.417%20168.747C674.833%20150.818%20624.723%20133.665%20524.503%2099.3597L505.41%2092.824C453.167%2074.9413%20427.047%2066%20400%2066V732.667C433.977%20732.667%20446%20727.413%20470.047%20716.91C558.7%20678.183%20700%20586.98%20700%20399.047Z'%20fill='%23EFEFEF'/%3e%3c/svg%3e",
  V8 =
    "data:image/svg+xml,%3csvg%20width='800'%20height='800'%20viewBox='0%200%20800%20800'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M112.584%20169.414C100%20187.343%20100%20240.636%20100%20347.223V399.713C100%20587.647%20241.299%20678.85%20329.952%20717.577C354%20728.08%20366.023%20733.333%20400%20733.333V66.6667C372.953%2066.6667%20346.833%2075.6081%20294.591%2093.4907L275.497%20100.026C175.277%20134.332%20125.168%20151.485%20112.584%20169.414Z'%20fill='%23AF9500'/%3e%3cpath%20d='M700%20399.047V346.557C700%20239.969%20700%20186.676%20687.417%20168.747C674.833%20150.818%20624.723%20133.665%20524.503%2099.3597L505.41%2092.824C453.167%2074.9413%20427.047%2066%20400%2066V732.667C433.977%20732.667%20446%20727.413%20470.047%20716.91C558.7%20678.183%20700%20586.98%20700%20399.047Z'%20fill='%23C9B037'/%3e%3c/svg%3e",
  H8 =
    "data:image/svg+xml,%3csvg%20width='800'%20height='800'%20viewBox='0%200%20800%20800'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M112.584%20169.414C100%20187.343%20100%20240.636%20100%20347.223V399.713C100%20587.647%20241.299%20678.85%20329.952%20717.577C354%20728.08%20366.023%20733.333%20400%20733.333V66.6667C372.953%2066.6667%20346.833%2075.6081%20294.591%2093.4907L275.497%20100.026C175.277%20134.332%20125.168%20151.485%20112.584%20169.414Z'%20fill='%23123D68'/%3e%3cpath%20d='M700%20399.047V346.557C700%20239.969%20700%20186.676%20687.417%20168.747C674.833%20150.818%20624.723%20133.665%20524.503%2099.3597L505.41%2092.824C453.167%2074.9413%20427.047%2066%20400%2066V732.667C433.977%20732.667%20446%20727.413%20470.047%20716.91C558.7%20678.183%20700%20586.98%20700%20399.047Z'%20fill='%23094C90'/%3e%3c/svg%3e",
  B8 =
    "data:image/svg+xml,%3csvg%20width='800'%20height='800'%20viewBox='0%200%20800%20800'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M112.584%20169.414C100%20187.343%20100%20240.636%20100%20347.223V399.713C100%20587.647%20241.299%20678.85%20329.952%20717.577C354%20728.08%20366.023%20733.333%20400%20733.333V66.6667C372.953%2066.6667%20346.833%2075.6081%20294.591%2093.4907L275.497%20100.026C175.277%20134.332%20125.168%20151.485%20112.584%20169.414Z'%20fill='%233D0A10'/%3e%3cpath%20d='M700%20399.047V346.557C700%20239.969%20700%20186.676%20687.417%20168.747C674.833%20150.818%20624.723%20133.665%20524.503%2099.3597L505.41%2092.824C453.167%2074.9413%20427.047%2066%20400%2066V732.667C433.977%20732.667%20446%20727.413%20470.047%20716.91C558.7%20678.183%20700%20586.98%20700%20399.047Z'%20fill='%23711521'/%3e%3c/svg%3e",
  W8 =
    "data:image/svg+xml,%3csvg%20width='800'%20height='800'%20viewBox='0%200%20800%20800'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M112.584%20169.414C100%20187.343%20100%20240.636%20100%20347.223V399.713C100%20587.647%20241.299%20678.85%20329.952%20717.577C354%20728.08%20366.023%20733.333%20400%20733.333V66.6667C372.953%2066.6667%20346.833%2075.6081%20294.591%2093.4907L275.497%20100.026C175.277%20134.332%20125.168%20151.485%20112.584%20169.414Z'%20fill='url(%23paint0_linear_21_18)'/%3e%3cpath%20d='M700%20399.047V346.557C700%20239.969%20700%20186.676%20687.417%20168.747C674.833%20150.818%20624.723%20133.665%20524.503%2099.3597L505.41%2092.824C453.167%2074.9413%20427.047%2066%20400%2066V732.667C433.977%20732.667%20446%20727.413%20470.047%20716.91C558.7%20678.183%20700%20586.98%20700%20399.047Z'%20fill='url(%23paint1_linear_21_18)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_21_18'%20x1='250'%20y1='66.6667'%20x2='250'%20y2='733.333'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23D8D8D8'/%3e%3cstop%20offset='0.956666'%20stop-color='%23595959'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_21_18'%20x1='550'%20y1='66'%20x2='550'%20y2='732.667'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23F3F3F3'/%3e%3cstop%20offset='1'%20stop-color='%23B0B0B0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
function Y8(e) {
  if (e < 100) return z8;
  if (100 <= e && e < 600) return U8;
  if (600 <= e && e < 1250) return V8;
  if (1250 <= e && e < 2500) return H8;
  if (2500 <= e && e < 3500) return B8;
  if (3500 <= e) return W8;
}
function G8(e) {
  return b.jsxs('section', {
    className: si.rating,
    children: [
      b.jsx('header', { className: si.header, children: 'Рейтинг' }),
      b.jsx('div', {
        className: si.table_wrapper,
        children: b.jsxs('table', {
          className: si.table,
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
                    className: si.name,
                    children: [
                      b.jsx('img', {
                        className: si.shield,
                        src: Y8(t.Points),
                        alt: 'Щит',
                      }),
                      b.jsxs('span', {
                        children: [
                          t.Name.split(' ')[0],
                          ' ',
                          t.Name.split(' ')[1][0],
                          '.',
                        ],
                      }),
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
      }),
    ],
  });
}
const Q8 = '_season_z8iyr_1',
  K8 = '_header_z8iyr_15',
  X8 = '_subheader_z8iyr_21',
  q8 = '_best_z8iyr_26',
  Z8 = '_stat_z8iyr_31',
  Wn = { season: Q8, header: K8, subheader: X8, best: q8, stat: Z8 };
function J8(e) {
  return b.jsxs('section', {
    className: Wn.season,
    children: [
      b.jsx('div', {
        className: Wn.subheader,
        children: '01.06.2024-01.09.2024',
      }),
      b.jsx('header', {
        className: Wn.header,
        children: 'Текущий сезон - Лето 2024',
      }),
      e.bestPlayer
        ? b.jsxs('div', {
            className: Wn.best,
            children: [
              'Лучший игрок - ',
              e.bestPlayer.Name.split(' ')[0],
              ' ',
              e.bestPlayer.Name.split(' ')[1][0],
              '., ',
              e.bestPlayer.Points,
              ' очков',
            ],
          })
        : '',
      b.jsxs('div', {
        className: Wn.stat,
        children: ['Побед на игрока - ', e.stats.average_victories],
      }),
      b.jsxs('div', {
        className: Wn.stat,
        children: ['Средне фишек на игрока - ', e.stats.average_chips],
      }),
      b.jsxs('div', {
        className: Wn.stat,
        children: ['Средне очков на игрока - ', e.stats.points_per_player],
      }),
      b.jsxs('div', {
        className: Wn.stat,
        children: [
          'Средне фишек за игру заработано - ',
          e.stats.chips_per_game,
        ],
      }),
    ],
  });
}
async function eA() {
  try {
    return await (await fetch('https://poker.is-very.fun/players/rating')).json();
  } catch (e) {
    return console.log(e), [];
  }
}
async function tA() {
  try {
    return await (await fetch('https://poker.is-very.fun/stats')).json();
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
function nA() {
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
      eA().then((i) => {
        t(i);
      }),
        tA().then((i) => {
          r(i);
        });
    }, []),
    b.jsxs(b.Fragment, {
      children: [
        b.jsxs('main', {
          children: [
            b.jsx($8, { players: e, stats: n }),
            b.jsx(G8, { rating: e }),
            b.jsx(J8, { stats: n, bestPlayer: e[0] }),
          ],
        }),
        b.jsx('footer', {
          children:
            'Организация не устраивает незаконные турниры по азартным играм. Все игры ведутся на рейтинг и интерес. Хорошего дня!',
        }),
      ],
    })
  );
}
Jc.createRoot(document.getElementById('root')).render(b.jsx(nA, {}));
