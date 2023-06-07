import{S as k,i as E,s as M,a as B,k as T,q as U,K as N,h as f,c as q,l as x,m as L,r as D,n as S,b as C,G as $,H as b,o as O,N as Y}from"../chunks/index.5b37bd6f.js";import{S as r}from"../chunks/sweetalert2.all.fe32f612.js";const{document:p}=Y;function A(v){let h,g,i,n,u;return p.title=h=v[0],{c(){g=B(),i=T("div"),n=T("div"),u=U("Please wait... (If this is taking too long try reloading the page)"),this.h()},l(t){N("svelte-1258swp",p.head).forEach(f),g=q(t),i=x(t,"DIV",{id:!0});var o=L(i);n=x(o,"DIV",{id:!0});var e=L(n);u=D(e,"Please wait... (If this is taking too long try reloading the page)"),e.forEach(f),o.forEach(f),this.h()},h(){S(n,"id","messagelol"),S(i,"id","root2")},m(t,o){C(t,g,o),C(t,i,o),$(i,n),$(n,u)},p(t,[o]){1&o&&h!==(h=t[0])&&(p.title=h)},i:b,o:b,d(t){t&&f(g),t&&f(i)}}}function P(v,h,g){let i;return O(()=>{fetch("https://crowdcards-api.glitch.me/api/getCardData",{method:"GET"}).then(n=>n.json()).then(n=>{const u=document.getElementById("root2");let t=0;for(const o in n){const e=n[o];if(e.status===0){t=1;let d=!1;document.getElementById("messagelol").innerHTML="";const a=document.createElement("div");a.classList.add("card"),a.innerHTML=`
      <div class="card-header"><div></div><a class="flex-center" href="/view_card?cuuid=${o}">${e.name}</a><div></div></div>
        <div id="card-content" class="card-content">
          <svg></svg>
        </div>
      <div class="card-header"><img id="upvote", src="https://cdn.glitch.global/d24a8d52-d1f8-43e5-a4b9-2b8939c0a945/green-thumbs-up-11246.svg"/><div id="score">${e.score}</div><img id="downvote", src="https://cdn.glitch.global/d24a8d52-d1f8-43e5-a4b9-2b8939c0a945/thumbs-down-14924.svg", width="16", height="16"/></div>
      `;const c=a.querySelector("#score");e.score>0?c.innerHTML=`<font color="green">${e.score}</font>`:e.score===0?c.innerHTML=`<font color="white">${e.score}</font>`:e.score<0&&(c.innerHTML=`<font color="red">${e.score}</font>`);const m=a.querySelector("svg");m.innerHTML=e.data;const w=a.querySelector("#upvote"),y=a.querySelector("#downvote"),I=a.getElementsByClassName("card-header")[0],H=a.getElementsByClassName("card-header")[1];requestAnimationFrame(()=>{const l=m.getBBox();m.setAttribute("viewBox",`${l.x} ${l.y} ${l.width} ${l.height}`)}),m.addEventListener("click",()=>{a.classList.toggle("expanded"),I.classList.toggle("expanded"),H.classList.toggle("expanded"),w.classList.toggle("expanded"),y.classList.toggle("expanded")}),y.addEventListener("click",()=>{localStorage.getItem("sessionToken")?d===!1?r.fire({icon:"question",text:"Are you sure you want to downvote this card? There is no way to reverse this!",showCancelButton:!0,confirmButtonText:"Downvote"}).then(l=>{l.isConfirmed&&fetch("https://crowdcards-api.glitch.me/api/downvoteCard",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({CUUID:o,UUID:localStorage.getItem("uuid"),stoken:localStorage.getItem("sessionToken")})}).then(s=>s.text()).then(s=>{s.startsWith("001")?(d=!0,e.score-1>0?c.innerHTML=`<font color="green">${e.score-1}</font>`:e.score-1==0?c.innerHTML=`<font color="white">${e.score-1}</font>`:e.score-1<0&&(c.innerHTML=`<font color="red">${e.score-1}</font>`),r.fire("You have downvoted this card!","","success")):s==="003-0004"?(d=!0,r.fire({icon:"error",title:"Oops!",text:"You already voted on this card! Sorry about that."})):r.fire({text:`Something went wrong downvoting the card! The error message was ${s}.`,title:"Uh oh!",icon:"error"})})}):d===!0&&r.fire({icon:"error",title:"Oops!",text:"You already voted on this card! Sorry about that."}):r.fire({icon:"error",title:"Not logged in!",text:"You're not logged in! Log in to downvote cards!"})}),w.addEventListener("click",()=>{localStorage.getItem("sessionToken")?d===!1?r.fire({icon:"question",text:"Are you sure you want to upvote this card? There is no way to reverse this!",showCancelButton:!0,confirmButtonText:"Upvote"}).then(l=>{l.isConfirmed&&fetch("https://crowdcards-api.glitch.me/api/upvoteCard",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({CUUID:o,UUID:localStorage.getItem("uuid"),stoken:localStorage.getItem("sessionToken")})}).then(s=>s.text()).then(s=>{s.startsWith("001")?(d=!0,e.score+1>0?c.innerHTML=`<font color="green">${e.score+1}</font>`:e.score+1===0?c.innerHTML=`<font color="white">${e.score+1}</font>`:e.score+1<0&&(c.innerHTML=`<font color="red">${e.score+1}</font>`),r.fire("You have upvoted this card!","","success")):s==="003-0004"?(d=!0,r.fire({icon:"error",title:"Oops!",text:"You already voted on this card! Sorry about that."})):r.fire({text:`Something went wrong upvoting the card! The error message was ${s}.`,title:"Uh oh!",icon:"error"})})}):d===!0&&r.fire({icon:"error",title:"Oops!",text:"You already voted on this card! Sorry about that."}):r.fire({icon:"error",title:"Not logged in!",text:"You're not logged in! Log in to upvote cards!"})}),u.appendChild(a)}}t===0&&(document.getElementById("messagelol").innerHTML='<font color="red">There are no cards in this category yet! Come back later.</font>')})}),g(0,i="CrowdCards - New Cards"),["CrowdCards - New Cards"]}class J extends k{constructor(h){super(),E(this,h,P,A,M,{})}}export{J as component};
