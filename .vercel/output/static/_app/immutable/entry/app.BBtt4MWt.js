function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.CO2DvwQT.js","../chunks/scheduler.DQzrkqyK.js","../chunks/index.BpbkGuoE.js","../chunks/entry.D--Gd_Nw.js","../chunks/index.D2W-D5RK.js","../chunks/store.D5ovwJGA.js","../assets/0.BO6A16aa.css","../nodes/1.D6SrqGOw.js","../nodes/2.DHsdN52y.js","../nodes/3.Bq6y1HGE.js","../nodes/4.CR9FnbOK.js","../nodes/5.BQhpLO77.js","../chunks/RangeSelectText.nWCK8d_Y.js","../chunks/each.D6YF6ztN.js","../chunks/PaintList.CAoO3lU0.js","../nodes/6.D_ZKwosl.js","../nodes/7.Blz61cgT.js","../nodes/8.BhkaJ9ox.js","../nodes/9.DiACa88G.js","../nodes/10.C3rusZfI.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as q,b as B,v as h,h as U,i as v,d as g,E as j,o as F,e as G,c as W,f as z,a as I,r as d,t as H,m as J,p as K,D as O,F as R,G as Q}from"../chunks/scheduler.DQzrkqyK.js";import{S as X,i as Y,t as w,b as A,d as E,g as D,c as P,a as T,m as L,e as y}from"../chunks/index.BpbkGuoE.js";const Z="modulepreload",M=function(a,e){return new URL(a,e).href},V={},p=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){const _=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),o=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));r=Promise.all(n.map(s=>{if(s=M(s,i),s in V)return;V[s]=!0;const c=s.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(!!i)for(let b=_.length-1;b>=0;b--){const k=_[b];if(k.href===s&&(!c||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Z,c||(u.as="script",u.crossOrigin=""),u.href=s,o&&u.setAttribute("nonce",o),document.head.appendChild(u),c)return new Promise((b,k)=>{u.addEventListener("load",b),u.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${s}`)))})}))}return r.then(()=>e()).catch(_=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=_,window.dispatchEvent(t),!t.defaultPrevented)throw _})},oe={};function $(a){let e,n,i;var r=a[1][0];function _(t,o){return{props:{data:t[3],form:t[2]}}}return r&&(e=R(r,_(a)),a[12](e)),{c(){e&&P(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,o){e&&L(e,t,o),v(t,n,o),i=!0},p(t,o){if(o&2&&r!==(r=t[1][0])){if(e){D();const s=e;w(s.$$.fragment,1,0,()=>{y(s,1)}),A()}r?(e=R(r,_(t)),t[12](e),P(e.$$.fragment),E(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(r){const s={};o&8&&(s.data=t[3]),o&4&&(s.form=t[2]),e.$set(s)}},i(t){i||(e&&E(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&g(n),a[12](null),e&&y(e,t)}}}function x(a){let e,n,i;var r=a[1][0];function _(t,o){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return r&&(e=R(r,_(a)),a[11](e)),{c(){e&&P(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,o){e&&L(e,t,o),v(t,n,o),i=!0},p(t,o){if(o&2&&r!==(r=t[1][0])){if(e){D();const s=e;w(s.$$.fragment,1,0,()=>{y(s,1)}),A()}r?(e=R(r,_(t)),t[11](e),P(e.$$.fragment),E(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(r){const s={};o&8&&(s.data=t[3]),o&8215&&(s.$$scope={dirty:o,ctx:t}),e.$set(s)}},i(t){i||(e&&E(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&g(n),a[11](null),e&&y(e,t)}}}function ee(a){let e,n,i;var r=a[1][1];function _(t,o){return{props:{data:t[4],form:t[2]}}}return r&&(e=R(r,_(a)),a[10](e)),{c(){e&&P(e.$$.fragment),n=h()},l(t){e&&T(e.$$.fragment,t),n=h()},m(t,o){e&&L(e,t,o),v(t,n,o),i=!0},p(t,o){if(o&2&&r!==(r=t[1][1])){if(e){D();const s=e;w(s.$$.fragment,1,0,()=>{y(s,1)}),A()}r?(e=R(r,_(t)),t[10](e),P(e.$$.fragment),E(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(r){const s={};o&16&&(s.data=t[4]),o&4&&(s.form=t[2]),e.$set(s)}},i(t){i||(e&&E(e.$$.fragment,t),i=!0)},o(t){e&&w(e.$$.fragment,t),i=!1},d(t){t&&g(n),a[10](null),e&&y(e,t)}}}function S(a){let e,n=a[6]&&C(a);return{c(){e=G("div"),n&&n.c(),this.h()},l(i){e=W(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=z(e);n&&n.l(r),r.forEach(g),this.h()},h(){I(e,"id","svelte-announcer"),I(e,"aria-live","assertive"),I(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(i,r){v(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=C(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&g(e),n&&n.d()}}}function C(a){let e;return{c(){e=H(a[7])},l(n){e=J(n,a[7])},m(n,i){v(n,e,i)},p(n,i){i&128&&K(e,n[7])},d(n){n&&g(e)}}}function te(a){let e,n,i,r,_;const t=[x,$],o=[];function s(l,m){return l[1][1]?0:1}e=s(a),n=o[e]=t[e](a);let c=a[5]&&S(a);return{c(){n.c(),i=B(),c&&c.c(),r=h()},l(l){n.l(l),i=U(l),c&&c.l(l),r=h()},m(l,m){o[e].m(l,m),v(l,i,m),c&&c.m(l,m),v(l,r,m),_=!0},p(l,[m]){let u=e;e=s(l),e===u?o[e].p(l,m):(D(),w(o[u],1,1,()=>{o[u]=null}),A(),n=o[e],n?n.p(l,m):(n=o[e]=t[e](l),n.c()),E(n,1),n.m(i.parentNode,i)),l[5]?c?c.p(l,m):(c=S(l),c.c(),c.m(r.parentNode,r)):c&&(c.d(1),c=null)},i(l){_||(E(n),_=!0)},o(l){w(n),_=!1},d(l){l&&(g(i),g(r)),o[e].d(l),c&&c.d(l)}}}function ne(a,e,n){let{stores:i}=e,{page:r}=e,{constructors:_}=e,{components:t=[]}=e,{form:o}=e,{data_0:s=null}=e,{data_1:c=null}=e;j(i.page.notify);let l=!1,m=!1,u=null;F(()=>{const f=i.page.subscribe(()=>{l&&(n(6,m=!0),Q().then(()=>{n(7,u=document.title||"untitled page")}))});return n(5,l=!0),f});function b(f){O[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function k(f){O[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function N(f){O[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return a.$$set=f=>{"stores"in f&&n(8,i=f.stores),"page"in f&&n(9,r=f.page),"constructors"in f&&n(1,_=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,o=f.form),"data_0"in f&&n(3,s=f.data_0),"data_1"in f&&n(4,c=f.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(r)},[t,_,o,s,c,l,m,u,i,r,b,k,N]}class se extends X{constructor(e){super(),Y(this,e,ne,te,q,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>p(()=>import("../nodes/0.CO2DvwQT.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),()=>p(()=>import("../nodes/1.D6SrqGOw.js"),__vite__mapDeps([7,1,2]),import.meta.url),()=>p(()=>import("../nodes/2.DHsdN52y.js"),__vite__mapDeps([8,1,2]),import.meta.url),()=>p(()=>import("../nodes/3.Bq6y1HGE.js"),__vite__mapDeps([9,1,2,5,4]),import.meta.url),()=>p(()=>import("../nodes/4.CR9FnbOK.js"),__vite__mapDeps([10,1,2,5,4]),import.meta.url),()=>p(()=>import("../nodes/5.BQhpLO77.js"),__vite__mapDeps([11,1,2,5,4,12,13,14]),import.meta.url),()=>p(()=>import("../nodes/6.D_ZKwosl.js"),__vite__mapDeps([15,1,2,5,4,12,13,14]),import.meta.url),()=>p(()=>import("../nodes/7.Blz61cgT.js"),__vite__mapDeps([16,1,2,5,4]),import.meta.url),()=>p(()=>import("../nodes/8.BhkaJ9ox.js"),__vite__mapDeps([17,1,2,13,5,4]),import.meta.url),()=>p(()=>import("../nodes/9.DiACa88G.js"),__vite__mapDeps([18,1,2,5,4,13,14]),import.meta.url),()=>p(()=>import("../nodes/10.C3rusZfI.js"),__vite__mapDeps([19,1,2,5,4,13,14]),import.meta.url)],le=[],ce={"/":[2],"/about":[3],"/companies":[4],"/companies/gamesworkshop":[5],"/companies/vallejo":[6],"/contact":[7],"/news":[-9],"/paintcolours":[9],"/painttypes":[10]},fe={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{ce as dictionary,fe as hooks,oe as matchers,ae as nodes,se as root,le as server_loads};
