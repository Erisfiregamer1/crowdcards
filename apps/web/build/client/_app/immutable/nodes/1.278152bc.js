import{S as H,i as b,s as q,k as l,q as d,a as G,l as g,m as x,r as k,h as p,c as I,b as f,G as j,u as v,H as E,I as P}from"../chunks/index.5b37bd6f.js";import{p as S}from"../chunks/stores.eb4638b3.js";function w(c){var h;let s,o,e,t,i,n=c[0].status+"",m=((h=c[0].error)==null?void 0:h.message)+"";return{c(){s=l("h1"),o=d(n),e=G(),t=l("p"),i=d(m)},l(a){s=g(a,"H1",{});var r=x(s);o=k(r,n),r.forEach(p),e=I(a),t=g(a,"P",{});var u=x(t);i=k(u,m),u.forEach(p)},m(a,r){f(a,s,r),j(s,o),f(a,e,r),f(a,t,r),j(t,i)},p(a,[r]){var u;1&r&&n!==(n=a[0].status+"")&&v(o,n),1&r&&m!==(m=((u=a[0].error)==null?void 0:u.message)+"")&&v(i,m)},i:E,o:E,d(a){a&&p(s),a&&p(e),a&&p(t)}}}function y(c,s,o){let e;return P(c,S,t=>o(0,e=t)),[e]}class B extends H{constructor(s){super(),b(this,s,y,w,q,{})}}export{B as component};
