!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], t)
    : t(((e = e || self).timezoneSupport = {}));
})(this, function (e) {
  'use strict';
  function v(e) {
    return 96 < e ? e - 87 : 64 < e ? e - 29 : e - 48;
  }
  function o(e) {
    var t = e.split('.'),
      n = t[0],
      o = t[1] || '',
      r = 1,
      i = 0,
      s = 0,
      a = 1;
    45 === e.charCodeAt(0) && (a = -(i = 1));
    for (var f = i, u = n.length; f < u; ++f) {
      s = 60 * s + v(n.charCodeAt(f));
    }
    for (var c = 0, d = o.length; c < d; ++c) {
      s += v(o.charCodeAt(c)) * (r /= 60);
    }
    return s * a;
  }
  function f(e) {
    for (var t = 0, n = e.length; t < n; ++t) e[t] = o(e[t]);
  }
  function u(e, t) {
    for (var n = [], o = 0, r = t.length; o < r; ++o) n[o] = e[t[o]];
    return n;
  }
  function r(e) {
    var t = e.split('|'),
      n = t[2].split(' '),
      o = t[3].split(''),
      r = t[4].split(' ');
    f(n);
    f(o);
    f(r);
    (function (e, t) {
      for (var n = 0; n < t; ++n) e[n] = Math.round((e[n - 1] || 0) + 6e4 * e[n]);
      e[t - 1] = 1 / 0;
    })(r, o.length);
    var i = t[0],
      s = u(t[1].split(' '), o),
      a = 0 | t[5];
    return { name: i, abbreviations: s, offsets: (n = u(n, o)), untils: r, population: a };
  }
  var i, s, a, c;
  function p(e) {
    var t = e.year,
      n = e.month,
      o = e.day,
      r = e.hours,
      i = void 0 === r ? 0 : r,
      s = e.minutes,
      a = void 0 === s ? 0 : s,
      f = e.seconds,
      u = void 0 === f ? 0 : f,
      c = e.milliseconds,
      d = void 0 === c ? 0 : c;
    return Date.UTC(t, n - 1, o, i, a, u, d);
  }
  function T(e) {
    return {
      year: e.getUTCFullYear(),
      month: e.getUTCMonth() + 1,
      day: e.getUTCDate(),
      dayOfWeek: e.getUTCDay(),
      hours: e.getUTCHours(),
      minutes: e.getUTCMinutes(),
      seconds: e.getUTCSeconds() || 0,
      milliseconds: e.getUTCMilliseconds() || 0,
    };
  }
  function b(e) {
    return {
      year: e.getFullYear(),
      month: e.getMonth() + 1,
      day: e.getDate(),
      dayOfWeek: e.getDay(),
      hours: e.getHours(),
      minutes: e.getMinutes(),
      seconds: e.getSeconds() || 0,
      milliseconds: e.getMilliseconds() || 0,
    };
  }
  function y(e, t) {
    var n = (function (e, t) {
      for (var n = t.untils, o = 0, r = n.length; o < r; ++o) if (e < n[o]) return o;
    })(e, t);
    return { abbreviation: t.abbreviations[n], offset: t.offsets[n] };
  }
  function w(e, t) {
    Object.defineProperty(e, 'epoch', { value: t });
  }
  e.convertDateToTime = function (e) {
    var t = b(e),
      n = /\(([^)]+)\)$/.exec(e.toTimeString());
    return (t.zone = { abbreviation: n ? n[1] : '???', offset: e.getTimezoneOffset() }), w(t, e.getTime()), t;
  };
  e.convertTimeToDate = function (e) {
    var t = e.epoch;
    if (void 0 !== t) return new Date(t);
    var n = (e.zone || {}).offset;
    if (void 0 === n)
      return (function (e) {
        var t = e.year,
          n = e.month,
          o = e.day,
          r = e.hours,
          i = void 0 === r ? 0 : r,
          s = e.minutes,
          a = void 0 === s ? 0 : s,
          f = e.seconds,
          u = void 0 === f ? 0 : f,
          c = e.milliseconds;
        return new Date(t, n - 1, o, i, a, u, void 0 === c ? 0 : c);
      })(e);
    var o = p(e);
    return new Date(o + 6e4 * n);
  };
  e.findTimeZone = function (e) {
    var t = a[e] || e,
      n = c[t];
    if (!n) {
      var o = i[t];
      if (!o) throw new Error('Unknown time zone "' + t + '".');
      n = c[t] = r(o);
    }
    return n;
  };
  e.getUTCOffset = function (e, t) {
    var n = y('number' == typeof e ? e : e.getTime(), t);
    return { abbreviation: n.abbreviation, offset: n.offset };
  };
  e.getUnixTime = function (e, t) {
    var n = e.zone,
      o = e.epoch;
    if (o) {
      if (t) throw new Error('Both epoch and other time zone specified. Omit the other one.');
      return o;
    }
    var r = p(e);
    if (n) {
      if (t) throw new Error('Both own and other time zones specified. Omit the other one.');
    } else {
      if (!t) throw new Error('Missing other time zone.');
      n = y(r, t);
    }
    return r + 6e4 * n.offset;
  };
  e.getZonedTime = function (e, t) {
    var n = 'number' == typeof e,
      o = n ? e : e.getTime(),
      r = y(o, t),
      i = r.abbreviation,
      s = r.offset;
    (n || s) && (e = new Date(o - 6e4 * s));
    var a = T(e);
    return (a.zone = { abbreviation: i, offset: s }), w(a, o), a;
  };
  e.listTimeZones = function () {
    return s.slice();
  };
  e.populateTimeZones = function (e) {
    var t = e.zones,
      n = e.links;
    (i = {}),
      (s = t.map(function (e) {
        var t = e.substr(0, e.indexOf('|'));
        return (i[t] = e), t;
      })),
      (a = n.reduce(function (e, t) {
        var n = t.split('|'),
          o = n[0];
        return (e[n[1]] = o), e;
      }, {})),
      (c = {});
  };
  e.setTimeZone = function (e, t, n) {
    if (e instanceof Date)
      e = (function (e, t) {
        var n,
          o = (t || {}).useUTC;
        if (!0 === o) n = T;
        else {
          if (!1 !== o) throw new Error('Extract local or UTC date? Set useUTC option.');
          n = b;
        }
        return n(e);
      })(e, n);
    else {
      var o = e,
        r = o.year,
        i = o.month,
        s = o.day,
        a = o.hours,
        f = o.minutes,
        u = o.seconds,
        c = void 0 === u ? 0 : u,
        d = o.milliseconds;
      e = { year: r, month: i, day: s, hours: a, minutes: f, seconds: c, milliseconds: void 0 === d ? 0 : d };
    }
    var v = p(e),
      l = new Date(v);
    e.dayOfWeek = l.getUTCDay();
    var m = y(v, t),
      h = m.abbreviation,
      g = m.offset;
    return (e.zone = { abbreviation: h, offset: g }), w(e, v + 6e4 * g), e;
  };
  Object.defineProperty(e, '__esModule', { value: !0 });
});
//# sourceMappingURL=lookup-convert.umd.js.map
