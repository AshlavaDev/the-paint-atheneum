import{s as G,e as T,b as P,t as Y,c as E,f as O,g as $,h as j,m as J,d as C,a as v,r as q,i as L,k as b,n as F,l as Z,v as ee,o as ke,T as dt,U as ae,V as je,W as Oe,X as ht,Y as pt,Z as gt,_ as mt,$ as Le,a0 as bt,z as V,A as xt,D as yt,p as Me,F as $e,a1 as vt,a2 as _t,a3 as wt,a4 as kt}from"../chunks/scheduler.DQzrkqyK.js";import{S as K,i as W,c as z,a as U,m as B,d as D,t as H,e as R,b as Ct,g as It}from"../chunks/index.BpbkGuoE.js";import{s as St}from"../chunks/entry.D--Gd_Nw.js";import{t as X,h as Tt}from"../chunks/store.D5ovwJGA.js";function Ye(e,t){const n={},r={},s={$$scope:1};let o=e.length;for(;o--;){const i=e[o],l=t[o];if(l){for(const a in i)a in l||(r[a]=1);for(const a in l)s[a]||(n[a]=l[a],s[a]=1);e[o]=l}else for(const a in i)s[a]=1}for(const i in r)i in n||(n[i]=void 0);return n}const Et=()=>{const e=St;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},At={subscribe(e){return Et().page.subscribe(e)}};function Pt(e){let t,n,r,s,o="The Paint Atheneum",i,l,a,c,f;return{c(){t=T("footer"),n=T("div"),r=T("div"),s=T("a"),s.textContent=o,i=P(),l=T("p"),a=Y("Copyright © "),c=Y(e[1]),f=Y(". All rights reserved."),this.h()},l(d){t=E(d,"FOOTER",{"aria-label":!0,class:!0,style:!0});var p=O(t);n=E(p,"DIV",{class:!0});var k=O(n);r=E(k,"DIV",{class:!0});var _=O(r);s=E(_,"A",{href:!0,class:!0,"data-svelte-h":!0}),$(s)!=="svelte-eljmro"&&(s.textContent=o),i=j(_),l=E(_,"P",{class:!0});var x=O(l);a=J(x,"Copyright © "),c=J(x,e[1]),f=J(x,". All rights reserved."),x.forEach(C),_.forEach(C),k.forEach(C),p.forEach(C),this.h()},h(){v(s,"href","/"),v(s,"class","font-display text-xl md:text-3xl"),v(l,"class","mt-4 text-center text lg:mt-0 lg:text-right font-serif"),v(r,"class","flex flex-col md:flex-row items-center justify-between text-darkblue"),v(n,"class","mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8"),v(t,"aria-label","footer"),v(t,"class","mt-auto border-t-4 border-darkblue bg-offwhite relative"),q(t,"top",e[0]+"px")},m(d,p){L(d,t,p),b(t,n),b(n,r),b(r,s),b(r,i),b(r,l),b(l,a),b(l,c),b(l,f)},p(d,[p]){p&1&&q(t,"top",d[0]+"px")},i:F,o:F,d(d){d&&C(t)}}}function jt(e,t,n){let r;return Z(e,X,o=>n(0,r=o)),[r,new Date().getFullYear()]}class Ot extends K{constructor(t){super(),W(this,t,jt,Pt,G,{})}}function Lt(e){let t,n='<div class="px-2 py-6 flex flex-col justify-between text-darkblue font-sans"><span class="block w-32 h-10 rounded-lg"></span> <h4 class="text-lg md:text-xl">Menu</h4> <nav class="flex flex-col mt-6 space-y-1"><a href="/" class="side-nav-link">Home</a> <a href="/about" class="side-nav-link">About</a> <details class="group [&amp;_summary::-webkit-details-marker]:hidden"><summary class="flex items-center rounded-md cursor-pointer hover:bg-darkblue hover:text-offwhite"><span class="ml-2 text-sm md:text-lg py-2">Paints</span></summary> <ul class="my-1 ml-6 flex flex-col gap-1"><li><a href="/companies" class="text-sm hover:bg-darkblue hover:text-offwhite">By Company</a></li> <li><a href="/paintcolours" class="text-sm hover:bg-darkblue hover:text-offwhite">By Colour</a></li> <li><a href="/painttypes" class="text-sm hover:bg-darkblue hover:text-offwhite">By Type</a></li></ul></details> <a href="/news" class="side-nav-link">News</a> <a href="/contact" class="side-nav-link">Contact</a></nav></div>';return{c(){t=T("div"),t.innerHTML=n,this.h()},l(r){t=E(r,"DIV",{class:!0,"data-svelte-h":!0}),$(t)!=="svelte-t7s3op"&&(t.innerHTML=n),this.h()},h(){v(t,"class","max-w-1/5 h-screen sticky top-0 border-r-4 border-darkblue hidden md:block")},m(r,s){L(r,t,s)},p:F,i:F,o:F,d(r){r&&C(t)}}}class Mt extends K{constructor(t){super(),W(this,t,null,Lt,G,{})}}const ne=/^[a-z0-9]+(-[a-z0-9]+)*$/,fe=(e,t,n,r="")=>{const s=e.split(":");if(e.slice(0,1)==="@"){if(s.length<2||s.length>3)return null;r=s.shift().slice(1)}if(s.length>3||!s.length)return null;if(s.length>1){const l=s.pop(),a=s.pop(),c={provider:s.length>0?s[0]:r,prefix:a,name:l};return t&&!ie(c)?null:c}const o=s[0],i=o.split("-");if(i.length>1){const l={provider:r,prefix:i.shift(),name:i.join("-")};return t&&!ie(l)?null:l}if(n&&r===""){const l={provider:r,prefix:"",name:o};return t&&!ie(l,n)?null:l}return null},ie=(e,t)=>e?!!((e.provider===""||e.provider.match(ne))&&(t&&e.prefix===""||e.prefix.match(ne))&&e.name.match(ne)):!1,Je=Object.freeze({left:0,top:0,width:16,height:16}),ce=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),ue=Object.freeze({...Je,...ce}),me=Object.freeze({...ue,body:"",hidden:!1});function $t(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function Fe(e,t){const n=$t(e,t);for(const r in me)r in ce?r in e&&!(r in n)&&(n[r]=ce[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function Ft(e,t){const n=e.icons,r=e.aliases||Object.create(null),s=Object.create(null);function o(i){if(n[i])return s[i]=[];if(!(i in s)){s[i]=null;const l=r[i]&&r[i].parent,a=l&&o(l);a&&(s[i]=[l].concat(a))}return s[i]}return(t||Object.keys(n).concat(Object.keys(r))).forEach(o),s}function Nt(e,t,n){const r=e.icons,s=e.aliases||Object.create(null);let o={};function i(l){o=Fe(r[l]||s[l],o)}return i(t),n.forEach(i),Fe(e,o)}function Xe(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(s=>{t(s,null),n.push(s)});const r=Ft(e);for(const s in r){const o=r[s];o&&(t(s,Nt(e,s,o)),n.push(s))}return n}const Dt={provider:"",aliases:{},not_found:{},...Je};function he(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function Ze(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!he(e,Dt))return null;const n=t.icons;for(const s in n){const o=n[s];if(!s.match(ne)||typeof o.body!="string"||!he(o,me))return null}const r=t.aliases||Object.create(null);for(const s in r){const o=r[s],i=o.parent;if(!s.match(ne)||typeof i!="string"||!n[i]&&!r[i]||!he(o,me))return null}return t}const Ne=Object.create(null);function Ht(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function Q(e,t){const n=Ne[e]||(Ne[e]=Object.create(null));return n[t]||(n[t]=Ht(e,t))}function Ce(e,t){return Ze(t)?Xe(t,(n,r)=>{r?e.icons[n]=r:e.missing.add(n)}):[]}function Vt(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let se=!1;function et(e){return typeof e=="boolean"&&(se=e),se}function zt(e){const t=typeof e=="string"?fe(e,!0,se):e;if(t){const n=Q(t.provider,t.prefix),r=t.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function Bt(e,t){const n=fe(e,!0,se);if(!n)return!1;const r=Q(n.provider,n.prefix);return Vt(r,n.name,t)}function Rt(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),se&&!t&&!e.prefix){let s=!1;return Ze(e)&&(e.prefix="",Xe(e,(o,i)=>{i&&Bt(o,i)&&(s=!0)})),s}const n=e.prefix;if(!ie({provider:t,prefix:n,name:"a"}))return!1;const r=Q(t,n);return!!Ce(r,e)}const tt=Object.freeze({width:null,height:null}),nt=Object.freeze({...tt,...ce}),qt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Ut=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function De(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const r=e.split(qt);if(r===null||!r.length)return e;const s=[];let o=r.shift(),i=Ut.test(o);for(;;){if(i){const l=parseFloat(o);isNaN(l)?s.push(o):s.push(Math.ceil(l*t*n)/n)}else s.push(o);if(o=r.shift(),o===void 0)return s.join("");i=!i}}function Qt(e,t="defs"){let n="";const r=e.indexOf("<"+t);for(;r>=0;){const s=e.indexOf(">",r),o=e.indexOf("</"+t);if(s===-1||o===-1)break;const i=e.indexOf(">",o);if(i===-1)break;n+=e.slice(s+1,o).trim(),e=e.slice(0,r).trim()+e.slice(i+1)}return{defs:n,content:e}}function Gt(e,t){return e?"<defs>"+e+"</defs>"+t:t}function Kt(e,t,n){const r=Qt(e);return Gt(r.defs,t+r.content+n)}const Wt=e=>e==="unset"||e==="undefined"||e==="none";function Yt(e,t){const n={...ue,...e},r={...nt,...t},s={left:n.left,top:n.top,width:n.width,height:n.height};let o=n.body;[n,r].forEach(x=>{const m=[],u=x.hFlip,h=x.vFlip;let S=x.rotate;u?h?S+=2:(m.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),m.push("scale(-1 1)"),s.top=s.left=0):h&&(m.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),m.push("scale(1 -1)"),s.top=s.left=0);let w;switch(S<0&&(S-=Math.floor(S/4)*4),S=S%4,S){case 1:w=s.height/2+s.top,m.unshift("rotate(90 "+w.toString()+" "+w.toString()+")");break;case 2:m.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:w=s.width/2+s.left,m.unshift("rotate(-90 "+w.toString()+" "+w.toString()+")");break}S%2===1&&(s.left!==s.top&&(w=s.left,s.left=s.top,s.top=w),s.width!==s.height&&(w=s.width,s.width=s.height,s.height=w)),m.length&&(o=Kt(o,'<g transform="'+m.join(" ")+'">',"</g>"))});const i=r.width,l=r.height,a=s.width,c=s.height;let f,d;i===null?(d=l===null?"1em":l==="auto"?c:l,f=De(d,a/c)):(f=i==="auto"?a:i,d=l===null?De(f,c/a):l==="auto"?c:l);const p={},k=(x,m)=>{Wt(m)||(p[x]=m.toString())};k("width",f),k("height",d);const _=[s.left,s.top,a,c];return p.viewBox=_.join(" "),{attributes:p,viewBox:_,body:o}}const Jt=/\sid="(\S+)"/g,Xt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Zt=0;function en(e,t=Xt){const n=[];let r;for(;r=Jt.exec(e);)n.push(r[1]);if(!n.length)return e;const s="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(o=>{const i=typeof t=="function"?t(o):t+(Zt++).toString(),l=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+l+')([")]|\\.[a-z])',"g"),"$1"+i+s+"$3")}),e=e.replace(new RegExp(s,"g"),""),e}const be=Object.create(null);function tn(e,t){be[e]=t}function xe(e){return be[e]||be[""]}function Ie(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const Se=Object.create(null),te=["https://api.simplesvg.com","https://api.unisvg.com"],le=[];for(;te.length>0;)te.length===1||Math.random()>.5?le.push(te.shift()):le.push(te.pop());Se[""]=Ie({resources:["https://api.iconify.design"].concat(le)});function nn(e,t){const n=Ie(t);return n===null?!1:(Se[e]=n,!0)}function Te(e){return Se[e]}const sn=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let He=sn();function rn(e,t){const n=Te(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let s=0;n.resources.forEach(i=>{s=Math.max(s,i.length)});const o=t+".json?icons=";r=n.maxURL-s-n.path.length-o.length}return r}function on(e){return e===404}const ln=(e,t,n)=>{const r=[],s=rn(e,t),o="icons";let i={type:o,provider:e,prefix:t,icons:[]},l=0;return n.forEach((a,c)=>{l+=a.length+1,l>=s&&c>0&&(r.push(i),i={type:o,provider:e,prefix:t,icons:[]},l=a.length),i.icons.push(a)}),r.push(i),r};function an(e){if(typeof e=="string"){const t=Te(e);if(t)return t.path}return"/"}const cn=(e,t,n)=>{if(!He){n("abort",424);return}let r=an(t.provider);switch(t.type){case"icons":{const o=t.prefix,l=t.icons.join(","),a=new URLSearchParams({icons:l});r+=o+".json?"+a.toString();break}case"custom":{const o=t.uri;r+=o.slice(0,1)==="/"?o.slice(1):o;break}default:n("abort",400);return}let s=503;He(e+r).then(o=>{const i=o.status;if(i!==200){setTimeout(()=>{n(on(i)?"abort":"next",i)});return}return s=501,o.json()}).then(o=>{if(typeof o!="object"||o===null){setTimeout(()=>{o===404?n("abort",o):n("next",s)});return}setTimeout(()=>{n("success",o)})}).catch(()=>{n("next",s)})},fn={prepare:ln,send:cn};function un(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((s,o)=>s.provider!==o.provider?s.provider.localeCompare(o.provider):s.prefix!==o.prefix?s.prefix.localeCompare(o.prefix):s.name.localeCompare(o.name));let r={provider:"",prefix:"",name:""};return e.forEach(s=>{if(r.name===s.name&&r.prefix===s.prefix&&r.provider===s.provider)return;r=s;const o=s.provider,i=s.prefix,l=s.name,a=n[o]||(n[o]=Object.create(null)),c=a[i]||(a[i]=Q(o,i));let f;l in c.icons?f=t.loaded:i===""||c.missing.has(l)?f=t.missing:f=t.pending;const d={provider:o,prefix:i,name:l};f.push(d)}),t}function st(e,t){e.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(s=>s.id!==t))})}function dn(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const r=e.provider,s=e.prefix;t.forEach(o=>{const i=o.icons,l=i.pending.length;i.pending=i.pending.filter(a=>{if(a.prefix!==s)return!0;const c=a.name;if(e.icons[c])i.loaded.push({provider:r,prefix:s,name:c});else if(e.missing.has(c))i.missing.push({provider:r,prefix:s,name:c});else return n=!0,!0;return!1}),i.pending.length!==l&&(n||st([e],o.id),o.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),o.abort))})}))}let hn=0;function pn(e,t,n){const r=hn++,s=st.bind(null,n,r);if(!t.pending.length)return s;const o={id:r,icons:t,callback:e,abort:s};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(o)}),s}function gn(e,t=!0,n=!1){const r=[];return e.forEach(s=>{const o=typeof s=="string"?fe(s,t,n):s;o&&r.push(o)}),r}var mn={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function bn(e,t,n,r){const s=e.resources.length,o=e.random?Math.floor(Math.random()*s):e.index;let i;if(e.random){let g=e.resources.slice(0);for(i=[];g.length>1;){const y=Math.floor(Math.random()*g.length);i.push(g[y]),g=g.slice(0,y).concat(g.slice(y+1))}i=i.concat(g)}else i=e.resources.slice(o).concat(e.resources.slice(0,o));const l=Date.now();let a="pending",c=0,f,d=null,p=[],k=[];typeof r=="function"&&k.push(r);function _(){d&&(clearTimeout(d),d=null)}function x(){a==="pending"&&(a="aborted"),_(),p.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),p=[]}function m(g,y){y&&(k=[]),typeof g=="function"&&k.push(g)}function u(){return{startTime:l,payload:t,status:a,queriesSent:c,queriesPending:p.length,subscribe:m,abort:x}}function h(){a="failed",k.forEach(g=>{g(void 0,f)})}function S(){p.forEach(g=>{g.status==="pending"&&(g.status="aborted")}),p=[]}function w(g,y,I){const A=y!=="success";switch(p=p.filter(M=>M!==g),a){case"pending":break;case"failed":if(A||!e.dataAfterTimeout)return;break;default:return}if(y==="abort"){f=I,h();return}if(A){f=I,p.length||(i.length?N():h());return}if(_(),S(),!e.random){const M=e.resources.indexOf(g.resource);M!==-1&&M!==e.index&&(e.index=M)}a="completed",k.forEach(M=>{M(I)})}function N(){if(a!=="pending")return;_();const g=i.shift();if(g===void 0){if(p.length){d=setTimeout(()=>{_(),a==="pending"&&(S(),h())},e.timeout);return}h();return}const y={status:"pending",resource:g,callback:(I,A)=>{w(y,I,A)}};p.push(y),c++,d=setTimeout(N,e.rotate),n(g,t,y.callback)}return setTimeout(N),u}function rt(e){const t={...mn,...e};let n=[];function r(){n=n.filter(l=>l().status==="pending")}function s(l,a,c){const f=bn(t,l,a,(d,p)=>{r(),c&&c(d,p)});return n.push(f),f}function o(l){return n.find(a=>l(a))||null}return{query:s,find:o,setIndex:l=>{t.index=l},getIndex:()=>t.index,cleanup:r}}function Ve(){}const pe=Object.create(null);function xn(e){if(!pe[e]){const t=Te(e);if(!t)return;const n=rt(t),r={config:t,redundancy:n};pe[e]=r}return pe[e]}function yn(e,t,n){let r,s;if(typeof e=="string"){const o=xe(e);if(!o)return n(void 0,424),Ve;s=o.send;const i=xn(e);i&&(r=i.redundancy)}else{const o=Ie(e);if(o){r=rt(o);const i=e.resources?e.resources[0]:"",l=xe(i);l&&(s=l.send)}}return!r||!s?(n(void 0,424),Ve):r.query(t,s,n)().abort}const ze="iconify2",re="iconify",ot=re+"-count",Be=re+"-version",it=36e5,vn=168,_n=50;function ye(e,t){try{return e.getItem(t)}catch{}}function Ee(e,t,n){try{return e.setItem(t,n),!0}catch{}}function Re(e,t){try{e.removeItem(t)}catch{}}function ve(e,t){return Ee(e,ot,t.toString())}function _e(e){return parseInt(ye(e,ot))||0}const de={local:!0,session:!0},lt={local:new Set,session:new Set};let Ae=!1;function wn(e){Ae=e}let oe=typeof window>"u"?{}:window;function at(e){const t=e+"Storage";try{if(oe&&oe[t]&&typeof oe[t].length=="number")return oe[t]}catch{}de[e]=!1}function ct(e,t){const n=at(e);if(!n)return;const r=ye(n,Be);if(r!==ze){if(r){const l=_e(n);for(let a=0;a<l;a++)Re(n,re+a.toString())}Ee(n,Be,ze),ve(n,0);return}const s=Math.floor(Date.now()/it)-vn,o=l=>{const a=re+l.toString(),c=ye(n,a);if(typeof c=="string"){try{const f=JSON.parse(c);if(typeof f=="object"&&typeof f.cached=="number"&&f.cached>s&&typeof f.provider=="string"&&typeof f.data=="object"&&typeof f.data.prefix=="string"&&t(f,l))return!0}catch{}Re(n,a)}};let i=_e(n);for(let l=i-1;l>=0;l--)o(l)||(l===i-1?(i--,ve(n,i)):lt[e].add(l))}function ft(){if(!Ae){wn(!0);for(const e in de)ct(e,t=>{const n=t.data,r=t.provider,s=n.prefix,o=Q(r,s);if(!Ce(o,n).length)return!1;const i=n.lastModified||-1;return o.lastModifiedCached=o.lastModifiedCached?Math.min(o.lastModifiedCached,i):i,!0})}}function kn(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const r in de)ct(r,s=>{const o=s.data;return s.provider!==e.provider||o.prefix!==e.prefix||o.lastModified===t});return!0}function Cn(e,t){Ae||ft();function n(r){let s;if(!de[r]||!(s=at(r)))return;const o=lt[r];let i;if(o.size)o.delete(i=Array.from(o).shift());else if(i=_e(s),i>=_n||!ve(s,i+1))return;const l={cached:Math.floor(Date.now()/it),provider:e.provider,data:t};return Ee(s,re+i.toString(),JSON.stringify(l))}t.lastModified&&!kn(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function qe(){}function In(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,dn(e)}))}function Sn(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:r}=e,s=e.iconsToLoad;delete e.iconsToLoad;let o;if(!s||!(o=xe(n)))return;o.prepare(n,r,s).forEach(l=>{yn(n,l,a=>{if(typeof a!="object")l.icons.forEach(c=>{e.missing.add(c)});else try{const c=Ce(e,a);if(!c.length)return;const f=e.pendingIcons;f&&c.forEach(d=>{f.delete(d)}),Cn(e,a)}catch(c){console.error(c)}In(e)})})}))}const Tn=(e,t)=>{const n=gn(e,!0,et()),r=un(n);if(!r.pending.length){let a=!0;return t&&setTimeout(()=>{a&&t(r.loaded,r.missing,r.pending,qe)}),()=>{a=!1}}const s=Object.create(null),o=[];let i,l;return r.pending.forEach(a=>{const{provider:c,prefix:f}=a;if(f===l&&c===i)return;i=c,l=f,o.push(Q(c,f));const d=s[c]||(s[c]=Object.create(null));d[f]||(d[f]=[])}),r.pending.forEach(a=>{const{provider:c,prefix:f,name:d}=a,p=Q(c,f),k=p.pendingIcons||(p.pendingIcons=new Set);k.has(d)||(k.add(d),s[c][f].push(d))}),o.forEach(a=>{const{provider:c,prefix:f}=a;s[c][f].length&&Sn(a,s[c][f])}),t?pn(t,r,o):qe};function En(e,t){const n={...e};for(const r in t){const s=t[r],o=typeof s;r in tt?(s===null||s&&(o==="string"||o==="number"))&&(n[r]=s):o===typeof n[r]&&(n[r]=r==="rotate"?s%4:s)}return n}const An=/[\s,]+/;function Pn(e,t){t.split(An).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function jn(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(s){for(;s<0;)s+=4;return s%4}if(n===""){const s=parseInt(e);return isNaN(s)?0:r(s)}else if(n!==e){let s=0;switch(n){case"%":s=25;break;case"deg":s=90}if(s){let o=parseFloat(e.slice(0,e.length-n.length));return isNaN(o)?0:(o=o/s,o%1===0?r(o):0)}}return t}function On(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)n+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function Ln(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Mn(e){return"data:image/svg+xml,"+Ln(e)}function $n(e){return'url("'+Mn(e)+'")'}const Ue={...nt,inline:!1},Fn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Nn={display:"inline-block"},we={"background-color":"currentColor"},ut={"background-color":"transparent"},Qe={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Ge={"-webkit-mask":we,mask:we,background:ut};for(const e in Ge){const t=Ge[e];for(const n in Qe)t[e+"-"+n]=Qe[n]}function Dn(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}function Hn(e,t){const n=En(Ue,t),r=t.mode||"svg",s=r==="svg"?{...Fn}:{};e.body.indexOf("xlink:")===-1&&delete s["xmlns:xlink"];let o=typeof t.style=="string"?t.style:"";for(let u in t){const h=t[u];if(h!==void 0)switch(u){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[u]=h===!0||h==="true"||h===1;break;case"flip":typeof h=="string"&&Pn(n,h);break;case"color":o=o+(o.length>0&&o.trim().slice(-1)!==";"?";":"")+"color: "+h+"; ";break;case"rotate":typeof h=="string"?n[u]=jn(h):typeof h=="number"&&(n[u]=h);break;case"ariaHidden":case"aria-hidden":h!==!0&&h!=="true"&&delete s["aria-hidden"];break;default:if(u.slice(0,3)==="on:")break;Ue[u]===void 0&&(s[u]=h)}}const i=Yt(e,n),l=i.attributes;if(n.inline&&(o="vertical-align: -0.125em; "+o),r==="svg"){Object.assign(s,l),o!==""&&(s.style=o);let u=0,h=t.id;return typeof h=="string"&&(h=h.replace(/-/g,"_")),{svg:!0,attributes:s,body:en(i.body,h?()=>h+"ID"+u++:"iconifySvelte")}}const{body:a,width:c,height:f}=e,d=r==="mask"||(r==="bg"?!1:a.indexOf("currentColor")!==-1),p=On(a,{...l,width:c+"",height:f+""}),_={"--svg":$n(p)},x=u=>{const h=l[u];h&&(_[u]=Dn(h))};x("width"),x("height"),Object.assign(_,Nn,d?we:ut);let m="";for(const u in _)m+=u+": "+_[u]+";";return s.style=m+o,{svg:!1,attributes:s}}et(!0);tn("",fn);if(typeof document<"u"&&typeof window<"u"){ft();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Rt(r))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const r="IconifyProviders["+n+"] is invalid.";try{const s=t[n];if(typeof s!="object"||!s||s.resources===void 0)continue;nn(n,s)||console.error(r)}catch{console.error(r)}}}}function Vn(e,t,n,r,s){function o(){t.loading&&(t.loading.abort(),t.loading=null)}if(typeof e=="object"&&e!==null&&typeof e.body=="string")return t.name="",o(),{data:{...ue,...e}};let i;if(typeof e!="string"||(i=fe(e,!1,!0))===null)return o(),null;const l=zt(i);if(!l)return n&&(!t.loading||t.loading.name!==e)&&(o(),t.name="",t.loading={name:e,abort:Tn([i],r)}),null;o(),t.name!==e&&(t.name=e,s&&!t.destroyed&&s(e));const a=["iconify"];return i.prefix!==""&&a.push("iconify--"+i.prefix),i.provider!==""&&a.push("iconify--"+i.provider),{data:l,classes:a}}function zn(e,t){return e?Hn({...ue,...e},t):null}function Ke(e){let t;function n(o,i){return o[0].svg?Rn:Bn}let r=n(e),s=r(e);return{c(){s.c(),t=ee()},l(o){s.l(o),t=ee()},m(o,i){s.m(o,i),L(o,t,i)},p(o,i){r===(r=n(o))&&s?s.p(o,i):(s.d(1),s=r(o),s&&(s.c(),s.m(t.parentNode,t)))},d(o){o&&C(t),s.d(o)}}}function Bn(e){let t,n=[e[0].attributes],r={};for(let s=0;s<n.length;s+=1)r=ae(r,n[s]);return{c(){t=T("span"),this.h()},l(s){t=E(s,"SPAN",{}),O(t).forEach(C),this.h()},h(){Oe(t,r)},m(s,o){L(s,t,o)},p(s,o){Oe(t,r=Ye(n,[o&1&&s[0].attributes]))},d(s){s&&C(t)}}}function Rn(e){let t,n,r=e[0].body+"",s=[e[0].attributes],o={};for(let i=0;i<s.length;i+=1)o=ae(o,s[i]);return{c(){t=ht("svg"),n=new pt(!0),this.h()},l(i){t=gt(i,"svg",{});var l=O(t);n=mt(l,!0),l.forEach(C),this.h()},h(){n.a=null,Le(t,o)},m(i,l){L(i,t,l),n.m(r,t)},p(i,l){l&1&&r!==(r=i[0].body+"")&&n.p(r),Le(t,o=Ye(s,[l&1&&i[0].attributes]))},d(i){i&&C(t)}}}function qn(e){let t,n=e[0]&&Ke(e);return{c(){n&&n.c(),t=ee()},l(r){n&&n.l(r),t=ee()},m(r,s){n&&n.m(r,s),L(r,t,s)},p(r,[s]){r[0]?n?n.p(r,s):(n=Ke(r),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:F,o:F,d(r){r&&C(t),n&&n.d(r)}}}function Un(e,t,n){const r={name:"",loading:null,destroyed:!1};let s=!1,o=0,i;const l=c=>{typeof t.onLoad=="function"&&t.onLoad(c),bt()("load",{icon:c})};function a(){n(3,o++,o)}return ke(()=>{n(2,s=!0)}),dt(()=>{n(1,r.destroyed=!0,r),r.loading&&(r.loading.abort(),n(1,r.loading=null,r))}),e.$$set=c=>{n(6,t=ae(ae({},t),je(c)))},e.$$.update=()=>{{const c=Vn(t.icon,r,s,a,l);n(0,i=c?zn(c.data,t):null),i&&c.classes&&n(0,i.attributes.class=(typeof t.class=="string"?t.class+" ":"")+c.classes.join(" "),i)}},t=je(t),[i,r,s,o]}class ge extends K{constructor(t){super(),W(this,t,Un,qn,G,{})}}function We(e){let t,n,r="Home",s,o,i="About",l,a,c="Companies",f,d,p="Colours",k,_,x="Types",m,u,h="News",S,w,N="Contact",g,y;return{c(){t=T("nav"),n=T("a"),n.textContent=r,s=P(),o=T("a"),o.textContent=i,l=P(),a=T("a"),a.textContent=c,f=P(),d=T("a"),d.textContent=p,k=P(),_=T("a"),_.textContent=x,m=P(),u=T("a"),u.textContent=h,S=P(),w=T("a"),w.textContent=N,this.h()},l(I){t=E(I,"NAV",{class:!0,style:!0});var A=O(t);n=E(A,"A",{class:!0,href:!0,"data-svelte-h":!0}),$(n)!=="svelte-1cy5hxg"&&(n.textContent=r),s=j(A),o=E(A,"A",{class:!0,href:!0,"data-svelte-h":!0}),$(o)!=="svelte-a0d0a5"&&(o.textContent=i),l=j(A),a=E(A,"A",{class:!0,href:!0,"data-svelte-h":!0}),$(a)!=="svelte-1silscl"&&(a.textContent=c),f=j(A),d=E(A,"A",{class:!0,href:!0,"data-svelte-h":!0}),$(d)!=="svelte-1y86eg9"&&(d.textContent=p),k=j(A),_=E(A,"A",{class:!0,href:!0,"data-svelte-h":!0}),$(_)!=="svelte-nqie6x"&&(_.textContent=x),m=j(A),u=E(A,"A",{class:!0,href:!0,"data-svelte-h":!0}),$(u)!=="svelte-rcnu65"&&(u.textContent=h),S=j(A),w=E(A,"A",{class:!0,href:!0,"data-svelte-h":!0}),$(w)!=="svelte-risl1v"&&(w.textContent=N),A.forEach(C),this.h()},h(){v(n,"class","top-nav-link"),v(n,"href","/"),v(o,"class","top-nav-link"),v(o,"href","/about"),v(a,"class","top-nav-link"),v(a,"href","/companies"),v(d,"class","top-nav-link"),v(d,"href","/paintcolours"),v(_,"class","top-nav-link"),v(_,"href","/painttypes"),v(u,"class","top-nav-link"),v(u,"href","/news"),v(w,"class","top-nav-link"),v(w,"href","/contact"),v(t,"class","flex flex-col text-darkblue font-serif z-20 w-full fixed bg-offwhite border-b-2 border-darkblue"),q(t,"top",e[2]+"px")},m(I,A){L(I,t,A),b(t,n),b(t,s),b(t,o),b(t,l),b(t,a),b(t,f),b(t,d),b(t,k),b(t,_),b(t,m),b(t,u),b(t,S),b(t,w),g||(y=[V(n,"click",e[5]),V(o,"click",e[6]),V(a,"click",e[7]),V(d,"click",e[8]),V(_,"click",e[9]),V(u,"click",e[10]),V(w,"click",e[11])],g=!0)},p(I,A){A&4&&q(t,"top",I[2]+"px")},d(I){I&&C(t),g=!1,xt(y)}}}function Qn(e){let t,n,r="The Paint Atheneum",s,o,i,l,a,c,f,d,p,k='<div class="space-x-8 lg:flex hidden"><a class="top-nav-link" href="/">Home</a> <a class="top-nav-link" href="/about">About</a> <a class="top-nav-link" href="/companies">Companies</a> <a class="top-nav-link" href="/paintcolours">Colours</a> <a class="top-nav-link" href="/painttypes">Types</a> <a class="top-nav-link" href="/news">News</a> <a class="top-nav-link" href="/contact">Contact</a></div>',_,x,m,u,h,S,w,N;l=new ge({props:{icon:"material-symbols:book-5-outline"}}),c=new ge({props:{icon:"mdi:paint-outline"}}),m=new ge({props:{icon:"material-symbols:menu-rounded",class:"w-full h-full"}});let g=e[0]&&We(e);return{c(){t=T("header"),n=T("a"),n.textContent=r,s=P(),o=T("a"),i=T("span"),z(l.$$.fragment),a=P(),z(c.$$.fragment),f=Y(`
		The PA`),d=P(),p=T("nav"),p.innerHTML=k,_=P(),x=T("button"),z(m.$$.fragment),u=P(),g&&g.c(),h=ee(),this.h()},l(y){t=E(y,"HEADER",{class:!0});var I=O(t);n=E(I,"A",{href:!0,class:!0,"data-svelte-h":!0}),$(n)!=="svelte-b5lmkf"&&(n.textContent=r),s=j(I),o=E(I,"A",{href:!0,class:!0});var A=O(o);i=E(A,"SPAN",{class:!0});var M=O(i);U(l.$$.fragment,M),a=j(M),U(c.$$.fragment,M),M.forEach(C),f=J(A,`
		The PA`),A.forEach(C),d=j(I),p=E(I,"NAV",{"data-svelte-h":!0}),$(p)!=="svelte-zplllx"&&(p.innerHTML=k),_=j(I),x=E(I,"BUTTON",{class:!0});var Pe=O(x);U(m.$$.fragment,Pe),Pe.forEach(C),I.forEach(C),u=j(y),g&&g.l(y),h=ee(),this.h()},h(){v(n,"href","/"),v(n,"class","hidden xl:block font-display text-4xl"),v(i,"class","flex"),v(o,"href","/"),v(o,"class","xl:hidden text-2xl flex items-center gap-2"),v(x,"class","lg:hidden h-8 w-8"),v(t,"class","flex items-center justify-around py-4 md:py-8 px-4 text-darkblue border-b-4 border-darkblue font-serif fixed top-0 w-full z-20 bg-offwhite lg:static")},m(y,I){L(y,t,I),b(t,n),b(t,s),b(t,o),b(o,i),B(l,i,null),b(i,a),B(c,i,null),b(o,f),b(t,d),b(t,p),b(t,_),b(t,x),B(m,x,null),e[4](t),L(y,u,I),g&&g.m(y,I),L(y,h,I),S=!0,w||(N=V(x,"click",e[3]),w=!0)},p(y,[I]){y[0]?g?g.p(y,I):(g=We(y),g.c(),g.m(h.parentNode,h)):g&&(g.d(1),g=null)},i(y){S||(D(l.$$.fragment,y),D(c.$$.fragment,y),D(m.$$.fragment,y),S=!0)},o(y){H(l.$$.fragment,y),H(c.$$.fragment,y),H(m.$$.fragment,y),S=!1},d(y){y&&(C(t),C(u),C(h)),R(l),R(c),R(m),e[4](null),g&&g.d(y),w=!1,N()}}}function Gn(e,t,n){let r;Z(e,X,x=>n(2,r=x));let s=!1,o;ke(()=>{const x=()=>{window.innerWidth>1024?X.set(0):o&&X.set(o.offsetHeight)};return x(),window.addEventListener("resize",x),()=>{window.removeEventListener("resize",x)}});const i=()=>n(0,s=!s);function l(x){yt[x?"unshift":"push"](()=>{o=x,n(1,o)})}return[s,o,r,i,l,()=>n(0,s=!1),()=>n(0,s=!1),()=>n(0,s=!1),()=>n(0,s=!1),()=>n(0,s=!1),()=>n(0,s=!1),()=>n(0,s=!1)]}class Kn extends K{constructor(t){super(),W(this,t,Gn,Qn,G,{})}}function Wn(e){let t,n='<div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"><div class="mx-auto max-w-3xl text-center bg-golden py-8 px-5 rounded-3xl"><h1 class="text-4xl font-display sm:text-6xl">The Paint Atheneum</h1> <p class="mx-auto mt-4 max-w-xl text-lg sm:text-2xl sm:leading-relaxed font-serif">A Library of Paints for Miniatures</p> <div class="mt-8 flex flex-wrap justify-center gap-4"><a href="/paintcolours" class="block w-full rounded border border-darkblue bg-darkblue px-12 py-3 font-sans text-offwhite hover:bg-transparent hover:text-darkblue focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">Find Colours</a> <a href="/companies" class="block w-full rounded border border-darkblue px-12 py-3 font-sans text-darkblue hover:bg-offwhite focus:outline-none focus:ring active:bg-darkblue sm:w-auto">Find Companies</a></div></div></div>';return{c(){t=T("section"),t.innerHTML=n,this.h()},l(r){t=E(r,"SECTION",{class:!0,"data-svelte-h":!0}),$(t)!=="svelte-1wcr39j"&&(t.innerHTML=n),this.h()},h(){v(t,"class","bg-waterhero bg-no-repeat bg-center bg-cover text-darkblue opacity-90")},m(r,s){L(r,t,s)},p:F,i:F,o:F,d(r){r&&C(t)}}}class Yn extends K{constructor(t){super(),W(this,t,null,Wn,G,{})}}function Jn(e){let t,n,r=e[1].heading+"",s,o,i,l=e[1].subHeading+"",a;return{c(){t=T("div"),n=T("h1"),s=Y(r),o=P(),i=T("p"),a=Y(l),this.h()},l(c){t=E(c,"DIV",{class:!0,style:!0});var f=O(t);n=E(f,"H1",{class:!0});var d=O(n);s=J(d,r),d.forEach(C),o=j(f),i=E(f,"P",{class:!0});var p=O(i);a=J(p,l),p.forEach(C),f.forEach(C),this.h()},h(){v(n,"class","text-6xl lg:text-8xl font-bold mt-0 mb-6 font-display"),v(i,"class","text-xl md:text-3xl font-serif"),v(t,"class","text-center bg-darkhero bg-center text-offwhite border-b-2 border-darkblue py-20 px-6 lg:top-0"),q(t,"top",e[0])},m(c,f){L(c,t,f),b(t,n),b(n,s),b(t,o),b(t,i),b(i,a)},p(c,[f]){f&2&&r!==(r=c[1].heading+"")&&Me(s,r),f&2&&l!==(l=c[1].subHeading+"")&&Me(a,l),f&1&&q(t,"top",c[0])},i:F,o:F,d(c){c&&C(t)}}}function Xn(e,t,n){let r,s;Z(e,X,i=>n(2,r=i)),Z(e,Tt,i=>n(1,s=i));let o="0px";return ke(()=>{console.log(r),n(0,o=r+"px"),console.log(o)}),[o,s]}class Zn extends K{constructor(t){super(),W(this,t,Xn,Jn,G,{})}}function es(e){let t,n,r,s,o,i,l,a,c,f,d,p;n=new Kn({});var k=e[0];function _(u,h){return{}}k&&(o=$e(k,_())),a=new Mt({});const x=e[4].default,m=vt(x,e,e[3],null);return d=new Ot({}),{c(){t=T("div"),z(n.$$.fragment),r=P(),s=T("main"),o&&z(o.$$.fragment),i=P(),l=T("div"),z(a.$$.fragment),c=P(),m&&m.c(),f=P(),z(d.$$.fragment),this.h()},l(u){t=E(u,"DIV",{class:!0});var h=O(t);U(n.$$.fragment,h),r=j(h),s=E(h,"MAIN",{class:!0,style:!0});var S=O(s);o&&U(o.$$.fragment,S),i=j(S),l=E(S,"DIV",{class:!0});var w=O(l);U(a.$$.fragment,w),c=j(w),m&&m.l(w),w.forEach(C),S.forEach(C),f=j(h),U(d.$$.fragment,h),h.forEach(C),this.h()},h(){v(l,"class","flex"),v(s,"class","relative flex-grow"),q(s,"top",e[1]+"px"),v(t,"class","bg-offwhite flex flex-col min-h-screen")},m(u,h){L(u,t,h),B(n,t,null),b(t,r),b(t,s),o&&B(o,s,null),b(s,i),b(s,l),B(a,l,null),b(l,c),m&&m.m(l,null),b(t,f),B(d,t,null),p=!0},p(u,[h]){if(h&1&&k!==(k=u[0])){if(o){It();const S=o;H(S.$$.fragment,1,0,()=>{R(S,1)}),Ct()}k?(o=$e(k,_()),z(o.$$.fragment),D(o.$$.fragment,1),B(o,s,i)):o=null}m&&m.p&&(!p||h&8)&&_t(m,x,u,u[3],p?kt(x,u[3],h,null):wt(u[3]),null),(!p||h&2)&&q(s,"top",u[1]+"px")},i(u){p||(D(n.$$.fragment,u),o&&D(o.$$.fragment,u),D(a.$$.fragment,u),D(m,u),D(d.$$.fragment,u),p=!0)},o(u){H(n.$$.fragment,u),o&&H(o.$$.fragment,u),H(a.$$.fragment,u),H(m,u),H(d.$$.fragment,u),p=!1},d(u){u&&C(t),R(n),o&&R(o),R(a),m&&m.d(u),R(d)}}}function ts(e,t,n){let r,s;Z(e,At,a=>n(2,r=a)),Z(e,X,a=>n(1,s=a));let{$$slots:o={},$$scope:i}=t,l;return e.$$set=a=>{"$$scope"in a&&n(3,i=a.$$scope)},e.$$.update=()=>{e.$$.dirty&4&&(r.url.pathname==="/"?n(0,l=Yn):n(0,l=Zn))},[l,s,r,i,o]}class is extends K{constructor(t){super(),W(this,t,ts,es,G,{})}}export{is as component};
