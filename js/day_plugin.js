!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.dayjs_plugin_advancedFormat = t() }(this, function () { "use strict"; return function (e, t, r) { var n = t.prototype, o = n.format; r.en.ordinal = function (e) { var t = ["th", "st", "nd", "rd"], r = e % 100; return "[" + e + (t[(r - 20) % 10] || t[r] || t[0]) + "]" }, n.format = function (e) { var t = this, r = this.$locale(), n = this.$utils(), i = (e || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|gggg|Do|X|x|k{1,2}|S/g, function (e) { switch (e) { case "Q": return Math.ceil((t.$M + 1) / 3); case "Do": return r.ordinal(t.$D); case "gggg": return t.weekYear(); case "wo": return r.ordinal(t.week(), "W"); case "k": case "kk": return n.s(String(0 === t.$H ? 24 : t.$H), "k" === e ? 1 : 2, "0"); case "X": return Math.floor(t.$d.getTime() / 1e3); case "x": return t.$d.getTime(); default: return e } }); return o.bind(this)(i) } } });