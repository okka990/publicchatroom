import{c as q,d as L,T as O,a as Y,o as E,q as H,b as U,w as $}from"./main-CJOT-0V8.js";import{t as h,n as C,g as v,m as _,a as y,e as F,b as A}from"./en-US-5MRZld95.js";/* empty css                */function N(n,t){let e=n,a=t;const r=q(L,"chats");let o=null;return{addChat:async u=>{const g=new Date,c={username:a,room:e,message:u,created_at:O.fromDate(g)};try{const f=await Y(r,c)}catch(f){throw console.log("Error addchat ",f),f}},getChats:u=>{o&&o(),o=E(H(r,$("room","==",e),U("created_at")),g=>{g.docChanges().forEach(c=>{console.log(c),c.type==="added"&&u(c.doc.data())})})},updateChatroom:u=>{e=u},updateUsername:u=>{a=u,localStorage.setItem("username",a)}}}function S(n,t){const e=+h(n)-+h(t);return e<0?-1:e>0?1:e}function z(n,t,e){const[a,r]=C(e==null?void 0:e.in,n,t),o=a.getFullYear()-r.getFullYear(),l=a.getMonth()-r.getMonth();return o*12+l}function G(n){return t=>{const a=(n?Math[n]:Math.trunc)(t);return a===0?0:a}}function R(n,t){return+h(n)-+h(t)}function j(n,t){const e=h(n,t==null?void 0:t.in);return e.setHours(23,59,59,999),e}function k(n,t){const e=h(n,t==null?void 0:t.in),a=e.getMonth();return e.setFullYear(e.getFullYear(),a+1,0),e.setHours(23,59,59,999),e}function B(n,t){const e=h(n,t==null?void 0:t.in);return+j(e,t)==+k(e,t)}function J(n,t,e){const[a,r,o]=C(e==null?void 0:e.in,n,n,t),l=S(r,o),s=Math.abs(z(r,o));if(s<1)return 0;r.getMonth()===1&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-l*s);let m=S(r,o)===-l;B(a)&&s===1&&S(a,o)===1&&(m=!1);const d=l*(s-+m);return d===0?0:d}function K(n,t,e){const a=R(n,t)/1e3;return G(e==null?void 0:e.roundingMethod)(a)}function P(n,t,e){const a=A(),r=(e==null?void 0:e.locale)??a.locale??F,o=2520,l=S(n,t);if(isNaN(l))throw new RangeError("Invalid time value");const s=Object.assign({},e,{addSuffix:e==null?void 0:e.addSuffix,comparison:l}),[m,d]=C(e==null?void 0:e.in,...l>0?[t,n]:[n,t]),u=K(d,m),g=(v(d)-v(m))/1e3,c=Math.round((u-g)/60);let f;if(c<2)return e!=null&&e.includeSeconds?u<5?r.formatDistance("lessThanXSeconds",5,s):u<10?r.formatDistance("lessThanXSeconds",10,s):u<20?r.formatDistance("lessThanXSeconds",20,s):u<40?r.formatDistance("halfAMinute",0,s):u<60?r.formatDistance("lessThanXMinutes",1,s):r.formatDistance("xMinutes",1,s):c===0?r.formatDistance("lessThanXMinutes",1,s):r.formatDistance("xMinutes",c,s);if(c<45)return r.formatDistance("xMinutes",c,s);if(c<90)return r.formatDistance("aboutXHours",1,s);if(c<_){const i=Math.round(c/60);return r.formatDistance("aboutXHours",i,s)}else{if(c<o)return r.formatDistance("xDays",1,s);if(c<y){const i=Math.round(c/_);return r.formatDistance("xDays",i,s)}else if(c<y*2)return f=Math.round(c/y),r.formatDistance("aboutXMonths",f,s)}if(f=J(d,m),f<12){const i=Math.round(c/y);return r.formatDistance("xMonths",i,s)}else{const i=f%12,x=Math.trunc(f/12);return i<3?r.formatDistance("aboutXYears",x,s):i<9?r.formatDistance("overXYears",x,s):r.formatDistance("almostXYears",x+1,s)}}function Q(n){return{newli:a=>{const r=P(a.created_at.toDate(),new Date,{addSuffix:!0}),o=`

			 <li class="shadow rounded-lg px-4 py-2">
						<div class="flex justify-between ">
							<h5 class="text-gray-600 font-medium text-sm ">${a.username}</h5>
							<i class="text-gray-300">${r}</i>
						</div>
						<p class="text-xs">${a.message}</p>
					</li>

		`;n.innerHTML+=o},resetli:()=>{n.innerHTML=""}}}const V=document.querySelector(".chatrooms"),W=document.querySelector(".chat-ul"),w=document.querySelector(".chat-form"),D=document.querySelector(".user-form"),I=document.querySelector(".msg"),T=document.querySelector(".roomtitle"),X=localStorage.username?localStorage.username:"Guest";D.username.placeholder=`Username is ${X} `;T.textContent="General";const M=N("general",X);T.textContent="General";const b=Q(W);w.addEventListener("submit",n=>{n.preventDefault();const t=w.message.value.trim();M.addChat(t).then(()=>w.reset()).catch(e=>console.log(e))});D.addEventListener("submit",n=>{n.preventDefault();const t=D.username.value.trim();M.updateUsername(t),D.reset(),I.innerText=`Name updated to ${t} `,D.username.placeholder=`Username is ${t} `,setTimeout(()=>I.innerText="",3e3)});V.addEventListener("click",n=>{n.preventDefault();const t=n.target.closest("button");if(t){b.resetli();const e=t.getAttribute("id"),a=t.querySelector("h3").innerText;T.textContent=a,M.updateChatroom(e),M.getChats(r=>{b.newli(r)})}});M.getChats(n=>{b.newli(n)});
