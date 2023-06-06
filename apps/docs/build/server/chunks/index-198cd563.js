function e() {
}
function t(e2) {
  return e2();
}
function n(e2, t2) {
  return e2 != e2 ? t2 == t2 : e2 !== t2 || e2 && "object" == typeof e2 || "function" == typeof e2;
}
function F(t2, ...n2) {
  if (null == t2)
    return e;
  const F2 = t2.subscribe(...n2);
  return F2.unsubscribe ? () => F2.unsubscribe() : F2;
}
let u;
function r(e2) {
  u = e2;
}
function s() {
  if (!u)
    throw new Error("Function called outside component initialization");
  return u;
}
function c(e2, t2) {
  return s().$$.context.set(e2, t2), t2;
}
function a(e2) {
  return s().$$.context.get(e2);
}
const m = /[&"]/g, $ = /[&<]/g;
function y(e2, t2 = false) {
  const n2 = String(e2), F2 = t2 ? m : $;
  F2.lastIndex = 0;
  let o2 = "", u2 = 0;
  for (; F2.test(n2); ) {
    const e3 = F2.lastIndex - 1, t3 = n2[e3];
    o2 += n2.substring(u2, e3) + ("&" === t3 ? "&amp;" : '"' === t3 ? "&quot;" : "&lt;"), u2 = e3 + 1;
  }
  return o2 + n2.substring(u2);
}
const h = { $$render: () => "" };
function w(e2, t2) {
  if (!e2 || !e2.$$render)
    throw "svelte:component" === t2 && (t2 += " this={...}"), new Error(`<${t2}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${t2}>.`);
  return e2;
}
let g;
function x(e2) {
  function n2(t2, n3, F2, o2, s2) {
    const c2 = u;
    r({ $$: { on_destroy: g, context: new Map(s2 || (c2 ? c2.$$.context : [])), on_mount: [], before_update: [], after_update: [], callbacks: /* @__PURE__ */ Object.create(null) } });
    const a2 = e2(t2, n3, F2, o2);
    return r(c2), a2;
  }
  return { render: (e3 = {}, { $$slots: F2 = {}, context: o2 = /* @__PURE__ */ new Map() } = {}) => {
    g = [];
    const u2 = { title: "", head: "", css: /* @__PURE__ */ new Set() }, r2 = n2(u2, e3, {}, F2, o2);
    return g.forEach(t), { html: r2, css: { code: Array.from(u2.css).map((e4) => e4.code).join("\n"), map: null }, head: u2.title + u2.head };
  }, $$render: n2 };
}

export { F, a, c, e, h, n, w, x, y };
//# sourceMappingURL=index-198cd563.js.map
