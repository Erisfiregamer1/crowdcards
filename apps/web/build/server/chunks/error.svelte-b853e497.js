import { a as a$1, x, F, y } from './index-198cd563.js';

const e = { subscribe: (e2) => (() => {
  const e3 = a$1("__svelte__");
  return { page: { subscribe: e3.page.subscribe }, navigating: { subscribe: e3.navigating.subscribe }, updated: e3.updated };
})().page.subscribe(e2) };

const a = x((s2, a2, o, n) => {
  let p, m;
  return m = F(e, (s3) => p = s3), m(), `<h1>${y(p.status)}</h1>
<p>${y(p.error?.message)}</p>`;
});

export { a as default };
//# sourceMappingURL=error.svelte-b853e497.js.map
