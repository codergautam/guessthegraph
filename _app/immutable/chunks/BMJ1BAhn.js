var Ft=Array.isArray,_n=Array.prototype.indexOf,te=Array.from,ne=Object.defineProperty,G=Object.getOwnPropertyDescriptor,cn=Object.getOwnPropertyDescriptors,vn=Object.prototype,pn=Array.prototype,Ct=Object.getPrototypeOf,Dt=Object.isExtensible;function ee(t){return typeof t=="function"}const re=()=>{};function le(t){return t()}function qt(t){for(var n=0;n<t.length;n++)t[n]()}const R=2,Lt=4,ot=8,mt=16,D=32,U=64,rt=128,x=256,lt=512,m=1024,P=2048,B=4096,j=8192,_t=16384,hn=32768,Mt=65536,ae=1<<17,dn=1<<19,jt=1<<20,dt=1<<21,K=Symbol("$state"),se=Symbol("legacy props");function Yt(t){return t===this.v}function wn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Ut(t){return!wn(t,this.v)}function yn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function En(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function gn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function mn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function fe(){throw new Error("https://svelte.dev/e/hydration_failed")}function ue(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Tn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function xn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function bn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let J=!1;function ie(){J=!0}const oe=1,_e=2,ce=4,ve=8,pe=16,he=1,de=2,we=4,ye=1,Ee=2,An="[",Rn="[!",On="]",Bt={},E=Symbol();function Ht(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function Tt(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let p=null;function Nt(t){p=t}function ge(t,n=!1,e){var r=p={p,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};J&&!n&&(p.l={s:null,u:null,r1:[],r2:xt(!1)}),Pn(()=>{r.d=!0})}function me(t){const n=p;if(n!==null){const _=n.e;if(_!==null){var e=h,r=v;n.e=null;try{for(var l=0;l<_.length;l++){var a=_[l];ft(a.effect),Y(a.reaction),zt(a.fn)}}finally{ft(e),Y(r)}}p=n.p,n.m=!0}return{}}function ct(){return!J||p!==null&&p.l===null}function M(t,n){if(typeof t!="object"||t===null||K in t)return t;const e=Ct(t);if(e!==vn&&e!==pn)return t;var r=new Map,l=Ft(t),a=k(0),_=v,c=f=>{var s=v;Y(_);var u;return u=f(),Y(s),u};return l&&r.set("length",k(t.length)),new Proxy(t,{defineProperty(f,s,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Tn();var i=r.get(s);return i===void 0?(i=c(()=>k(u.value)),r.set(s,i)):I(i,c(()=>M(u.value))),!0},deleteProperty(f,s){var u=r.get(s);if(u===void 0)s in f&&r.set(s,c(()=>k(E)));else{if(l&&typeof s=="string"){var i=r.get("length"),o=Number(s);Number.isInteger(o)&&o<i.v&&I(i,o)}I(u,E),kt(a)}return!0},get(f,s,u){var N;if(s===K)return t;var i=r.get(s),o=s in f;if(i===void 0&&(!o||(N=G(f,s))!=null&&N.writable)&&(i=c(()=>k(M(o?f[s]:E))),r.set(s,i)),i!==void 0){var d=V(i);return d===E?void 0:d}return Reflect.get(f,s,u)},getOwnPropertyDescriptor(f,s){var u=Reflect.getOwnPropertyDescriptor(f,s);if(u&&"value"in u){var i=r.get(s);i&&(u.value=V(i))}else if(u===void 0){var o=r.get(s),d=o==null?void 0:o.v;if(o!==void 0&&d!==E)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return u},has(f,s){var d;if(s===K)return!0;var u=r.get(s),i=u!==void 0&&u.v!==E||Reflect.has(f,s);if(u!==void 0||h!==null&&(!i||(d=G(f,s))!=null&&d.writable)){u===void 0&&(u=c(()=>k(i?M(f[s]):E)),r.set(s,u));var o=V(u);if(o===E)return!1}return i},set(f,s,u,i){var Ot;var o=r.get(s),d=s in f;if(l&&s==="length")for(var N=u;N<o.v;N+=1){var tt=r.get(N+"");tt!==void 0?I(tt,E):N in f&&(tt=c(()=>k(E)),r.set(N+"",tt))}o===void 0?(!d||(Ot=G(f,s))!=null&&Ot.writable)&&(o=c(()=>k(void 0)),I(o,c(()=>M(u))),r.set(s,o)):(d=o.v!==E,I(o,c(()=>M(u))));var nt=Reflect.getOwnPropertyDescriptor(f,s);if(nt!=null&&nt.set&&nt.set.call(i,u),!d){if(l&&typeof s=="string"){var Rt=r.get("length"),ht=Number(s);Number.isInteger(ht)&&ht>=Rt.v&&I(Rt,ht+1)}kt(a)}return!0},ownKeys(f){V(a);var s=Reflect.ownKeys(f).filter(o=>{var d=r.get(o);return d===void 0||d.v!==E});for(var[u,i]of r)i.v!==E&&!(u in f)&&s.push(u);return s},setPrototypeOf(){xn()}})}function kt(t,n=1){I(t,t.v+n)}const Z=new Map;function xt(t,n){var e={f:0,v:t,reactions:null,equals:Yt,rv:0,wv:0};return e}function k(t,n){const e=xt(t);return rn(e),e}function Te(t,n=!1){var r;const e=xt(t);return n||(e.equals=Ut),J&&p!==null&&p.l!==null&&((r=p.l).s??(r.s=[])).push(e),e}function I(t,n,e=!1){v!==null&&!A&&ct()&&(v.f&(R|mt))!==0&&!(y!=null&&y.includes(t))&&bn();let r=e?M(n):n;return Dn(t,r)}function Dn(t,n){if(!t.equals(n)){var e=t.v;Q?Z.set(t,n):Z.set(t,e),t.v=n,t.wv=an(),Vt(t,P),ct()&&h!==null&&(h.f&m)!==0&&(h.f&(D|U))===0&&(T===null?Bn([t]):T.push(t))}return n}function Vt(t,n){var e=t.reactions;if(e!==null)for(var r=ct(),l=e.length,a=0;a<l;a++){var _=e[a],c=_.f;(c&P)===0&&(!r&&_===h||(O(_,n),(c&(m|x))!==0&&((c&R)!==0?Vt(_,B):pt(_))))}}let C=!1;function xe(t){C=t}let b;function W(t){if(t===null)throw Ht(),Bt;return b=t}function be(){return W(L(b))}function Ae(t){if(C){if(L(b)!==null)throw Ht(),Bt;b=t}}function Re(t=1){if(C){for(var n=t,e=b;n--;)e=L(e);b=e}}function Oe(){for(var t=0,n=b;;){if(n.nodeType===8){var e=n.data;if(e===On){if(t===0)return n;t-=1}else(e===An||e===Rn)&&(t+=1)}var r=L(n);n.remove(),n=r}}var It,Nn,Gt,Kt;function De(){if(It===void 0){It=window,Nn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype,e=Text.prototype;Gt=G(n,"firstChild").get,Kt=G(n,"nextSibling").get,Dt(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Dt(e)&&(e.__t=void 0)}}function wt(t=""){return document.createTextNode(t)}function yt(t){return Gt.call(t)}function L(t){return Kt.call(t)}function Ne(t,n){if(!C)return yt(t);var e=yt(b);if(e===null)e=b.appendChild(wt());else if(n&&e.nodeType!==3){var r=wt();return e==null||e.before(r),W(r),r}return W(e),e}function ke(t,n){if(!C){var e=yt(t);return e instanceof Comment&&e.data===""?L(e):e}return b}function Ie(t,n=1,e=!1){let r=C?b:t;for(var l;n--;)l=r,r=L(r);if(!C)return r;var a=r==null?void 0:r.nodeType;if(e&&a!==3){var _=wt();return r===null?l==null||l.after(_):r.before(_),W(_),_}return W(r),r}function Se(t){t.textContent=""}function bt(t){var n=R|P,e=v!==null&&(v.f&R)!==0?v:null;return h===null||e!==null&&(e.f&x)!==0?n|=x:h.f|=jt,{ctx:p,deps:null,effects:null,equals:Yt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:e??h}}function Pe(t){const n=bt(t);return rn(n),n}function Fe(t){const n=bt(t);return n.equals=Ut,n}function $t(t){var n=t.effects;if(n!==null){t.effects=null;for(var e=0;e<n.length;e+=1)q(n[e])}}function kn(t){for(var n=t.parent;n!==null;){if((n.f&R)===0)return n;n=n.parent}return null}function In(t){var n,e=h;ft(kn(t));try{$t(t),n=fn(t)}finally{ft(e)}return n}function Zt(t){var n=In(t),e=(S||(t.f&x)!==0)&&t.deps!==null?B:m;O(t,e),t.equals(n)||(t.v=n,t.wv=an())}function Wt(t){h===null&&v===null&&gn(),v!==null&&(v.f&x)!==0&&h===null&&En(),Q&&yn()}function Sn(t,n){var e=n.last;e===null?n.last=n.first=t:(e.next=t,t.prev=e,n.last=t)}function H(t,n,e,r=!0){var l=h,a={ctx:p,deps:null,nodes_start:null,nodes_end:null,f:t|P,first:null,fn:n,last:null,next:null,parent:l,prev:null,teardown:null,transitions:null,wv:0};if(e)try{At(a),a.f|=hn}catch(f){throw q(a),f}else n!==null&&pt(a);var _=e&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(jt|rt))===0;if(!_&&r&&(l!==null&&Sn(a,l),v!==null&&(v.f&R)!==0)){var c=v;(c.effects??(c.effects=[])).push(a)}return a}function Pn(t){const n=H(ot,null,!1);return O(n,m),n.teardown=t,n}function Fn(t){Wt();var n=h!==null&&(h.f&D)!==0&&p!==null&&!p.m;if(n){var e=p;(e.e??(e.e=[])).push({fn:t,effect:h,reaction:v})}else{var r=zt(t);return r}}function Ce(t){return Wt(),Cn(t)}function qe(t){const n=H(U,t,!0);return(e={})=>new Promise(r=>{e.outro?Mn(n,()=>{q(n),r(void 0)}):(q(n),r(void 0))})}function zt(t){return H(Lt,t,!1)}function Cn(t){return H(ot,t,!0)}function Le(t,n=[],e=bt){const r=n.map(e);return qn(()=>t(...r.map(V)))}function qn(t,n=0){return H(ot|mt|n,t,!0)}function Me(t,n=!0){return H(ot|D,t,!0,n)}function Jt(t){var n=t.teardown;if(n!==null){const e=Q,r=v;Pt(!0),Y(null);try{n.call(null)}finally{Pt(e),Y(r)}}}function Qt(t,n=!1){var e=t.first;for(t.first=t.last=null;e!==null;){var r=e.next;(e.f&U)!==0?e.parent=null:q(e,n),e=r}}function Ln(t){for(var n=t.first;n!==null;){var e=n.next;(n.f&D)===0&&q(n),n=e}}function q(t,n=!0){var e=!1;if((n||(t.f&dn)!==0)&&t.nodes_start!==null){for(var r=t.nodes_start,l=t.nodes_end;r!==null;){var a=r===l?null:L(r);r.remove(),r=a}e=!0}Qt(t,n&&!e),it(t,0),O(t,_t);var _=t.transitions;if(_!==null)for(const f of _)f.stop();Jt(t);var c=t.parent;c!==null&&c.first!==null&&Xt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Xt(t){var n=t.parent,e=t.prev,r=t.next;e!==null&&(e.next=r),r!==null&&(r.prev=e),n!==null&&(n.first===t&&(n.first=r),n.last===t&&(n.last=e))}function Mn(t,n){var e=[];tn(t,e,!0),jn(e,()=>{q(t),n&&n()})}function jn(t,n){var e=t.length;if(e>0){var r=()=>--e||n();for(var l of t)l.out(r)}else n()}function tn(t,n,e){if((t.f&j)===0){if(t.f^=j,t.transitions!==null)for(const _ of t.transitions)(_.is_global||e)&&n.push(_);for(var r=t.first;r!==null;){var l=r.next,a=(r.f&Mt)!==0||(r.f&D)!==0;tn(r,n,a?e:!1),r=l}}}function je(t){nn(t,!0)}function nn(t,n){if((t.f&j)!==0){t.f^=j,(t.f&m)===0&&(t.f^=m),X(t)&&(O(t,P),pt(t));for(var e=t.first;e!==null;){var r=e.next,l=(e.f&Mt)!==0||(e.f&D)!==0;nn(e,l?n:!1),e=r}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let z=[],Et=[];function en(){var t=z;z=[],qt(t)}function Yn(){var t=Et;Et=[],qt(t)}function Ye(t){z.length===0&&queueMicrotask(en),z.push(t)}function St(){z.length>0&&en(),Et.length>0&&Yn()}let et=!1,at=!1,st=null,F=!1,Q=!1;function Pt(t){Q=t}let $=[];let v=null,A=!1;function Y(t){v=t}let h=null;function ft(t){h=t}let y=null;function Un(t){y=t}function rn(t){v!==null&&v.f&dt&&(y===null?Un([t]):y.push(t))}let w=null,g=0,T=null;function Bn(t){T=t}let ln=1,ut=0,S=!1;function an(){return++ln}function X(t){var i;var n=t.f;if((n&P)!==0)return!0;if((n&B)!==0){var e=t.deps,r=(n&x)!==0;if(e!==null){var l,a,_=(n&lt)!==0,c=r&&h!==null&&!S,f=e.length;if(_||c){var s=t,u=s.parent;for(l=0;l<f;l++)a=e[l],(_||!((i=a==null?void 0:a.reactions)!=null&&i.includes(s)))&&(a.reactions??(a.reactions=[])).push(s);_&&(s.f^=lt),c&&u!==null&&(u.f&x)===0&&(s.f^=x)}for(l=0;l<f;l++)if(a=e[l],X(a)&&Zt(a),a.wv>t.wv)return!0}(!r||h!==null&&!S)&&O(t,m)}return!1}function Hn(t,n){for(var e=n;e!==null;){if((e.f&rt)!==0)try{e.fn(t);return}catch{e.f^=rt}e=e.parent}throw et=!1,t}function Vn(t){return(t.f&_t)===0&&(t.parent===null||(t.parent.f&rt)===0)}function vt(t,n,e,r){if(et){if(e===null&&(et=!1),Vn(n))throw t;return}e!==null&&(et=!0);{Hn(t,n);return}}function sn(t,n,e=!0){var r=t.reactions;if(r!==null)for(var l=0;l<r.length;l++){var a=r[l];y!=null&&y.includes(t)||((a.f&R)!==0?sn(a,n,!1):n===a&&(e?O(a,P):(a.f&m)!==0&&O(a,B),pt(a)))}}function fn(t){var d;var n=w,e=g,r=T,l=v,a=S,_=y,c=p,f=A,s=t.f;w=null,g=0,T=null,S=(s&x)!==0&&(A||!F||v===null),v=(s&(D|U))===0?t:null,y=null,Nt(t.ctx),A=!1,ut++,t.f|=dt;try{var u=(0,t.fn)(),i=t.deps;if(w!==null){var o;if(it(t,g),i!==null&&g>0)for(i.length=g+w.length,o=0;o<w.length;o++)i[g+o]=w[o];else t.deps=i=w;if(!S)for(o=g;o<i.length;o++)((d=i[o]).reactions??(d.reactions=[])).push(t)}else i!==null&&g<i.length&&(it(t,g),i.length=g);if(ct()&&T!==null&&!A&&i!==null&&(t.f&(R|B|P))===0)for(o=0;o<T.length;o++)sn(T[o],t);return l!==null&&(ut++,T!==null&&(r===null?r=T:r.push(...T))),u}finally{w=n,g=e,T=r,v=l,S=a,y=_,Nt(c),A=f,t.f^=dt}}function Gn(t,n){let e=n.reactions;if(e!==null){var r=_n.call(e,t);if(r!==-1){var l=e.length-1;l===0?e=n.reactions=null:(e[r]=e[l],e.pop())}}e===null&&(n.f&R)!==0&&(w===null||!w.includes(n))&&(O(n,B),(n.f&(x|lt))===0&&(n.f^=lt),$t(n),it(n,0))}function it(t,n){var e=t.deps;if(e!==null)for(var r=n;r<e.length;r++)Gn(t,e[r])}function At(t){var n=t.f;if((n&_t)===0){O(t,m);var e=h,r=p,l=F;h=t,F=!0;try{(n&mt)!==0?Ln(t):Qt(t),Jt(t);var a=fn(t);t.teardown=typeof a=="function"?a:null,t.wv=ln;var _=t.deps,c}catch(f){vt(f,t,e,r||t.ctx)}finally{F=l,h=e}}}function Kn(){try{mn()}catch(t){if(st!==null)vt(t,st,null);else throw t}}function un(){var t=F;try{var n=0;for(F=!0;$.length>0;){n++>1e3&&Kn();var e=$,r=e.length;$=[];for(var l=0;l<r;l++){var a=Zn(e[l]);$n(a)}}}finally{at=!1,F=t,st=null,Z.clear()}}function $n(t){var n=t.length;if(n!==0)for(var e=0;e<n;e++){var r=t[e];if((r.f&(_t|j))===0)try{X(r)&&(At(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Xt(r):r.fn=null))}catch(l){vt(l,r,null,r.ctx)}}}function pt(t){at||(at=!0,queueMicrotask(un));for(var n=st=t;n.parent!==null;){n=n.parent;var e=n.f;if((e&(U|D))!==0){if((e&m)===0)return;n.f^=m}}$.push(n)}function Zn(t){for(var n=[],e=t;e!==null;){var r=e.f,l=(r&(D|U))!==0,a=l&&(r&m)!==0;if(!a&&(r&j)===0){if((r&Lt)!==0)n.push(e);else if(l)e.f^=m;else{var _=v;try{v=e,X(e)&&At(e)}catch(s){vt(s,e,null,e.ctx)}finally{v=_}}var c=e.first;if(c!==null){e=c;continue}}var f=e.parent;for(e=e.next;e===null&&f!==null;)e=f.next,f=f.parent}return n}function Wn(t){var n;for(St();$.length>0;)at=!0,un(),St();return n}async function Ue(){await Promise.resolve(),Wn()}function V(t){var n=t.f,e=(n&R)!==0;if(v!==null&&!A){if(!(y!=null&&y.includes(t))){var r=v.deps;t.rv<ut&&(t.rv=ut,w===null&&r!==null&&r[g]===t?g++:w===null?w=[t]:(!S||!w.includes(t))&&w.push(t))}}else if(e&&t.deps===null&&t.effects===null){var l=t,a=l.parent;a!==null&&(a.f&x)===0&&(l.f^=x)}return e&&(l=t,X(l)&&Zt(l)),Q&&Z.has(t)?Z.get(t):t.v}function on(t){var n=A;try{return A=!0,t()}finally{A=n}}const zn=-7169;function O(t,n){t.f=t.f&zn|n}function Be(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(K in t)gt(t);else if(!Array.isArray(t))for(let n in t){const e=t[n];typeof e=="object"&&e&&K in e&&gt(e)}}}function gt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let r in t)try{gt(t[r],n)}catch{}const e=Ct(t);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const r=cn(e);for(let l in r){const a=r[l].get;if(a)try{a.call(t)}catch{}}}}}function Jn(t){p===null&&Tt(),J&&p.l!==null?Xn(p).m.push(t):Fn(()=>{const n=on(t);if(typeof n=="function")return n})}function He(t){p===null&&Tt(),Jn(()=>()=>on(t))}function Qn(t,n,{bubbles:e=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:r})}function Ve(){const t=p;return t===null&&Tt(),(n,e,r)=>{var a;const l=(a=t.s.$$events)==null?void 0:a[n];if(l){const _=Ft(l)?l.slice():[l],c=Qn(n,e,r);for(const f of _)f.call(t.x,c);return!c.defaultPrevented}return!0}}function Xn(t){var n=t.l;return n.u??(n.u={a:[],b:[],m:[]})}export{ye as $,me as A,Ne as B,Ae as C,Ie as D,Mt as E,Y as F,ft as G,An as H,v as I,h as J,ne as K,Ft as L,Pn as M,Ye as N,De as O,yt as P,L as Q,Bt as R,On as S,Ht as T,E as U,fe as V,Se as W,te as X,qe as Y,wt as Z,Nn as _,be as a,Ee as a0,q as a1,Jn as a2,He as a3,mt as a4,hn as a5,zt as a6,we as a7,he as a8,de as a9,ee as aa,Ve as ab,I as ac,Te as ad,Re as ae,Fe as af,Cn as ag,K as ah,G as ai,ue as aj,ae as ak,ce as al,Ut as am,M as an,ve as ao,se as ap,J as aq,_e as ar,oe as as,pe as at,Wn as au,k as av,Ue as aw,Pe as ax,qn as b,Rn as c,xe as d,je as e,Me as f,b as g,C as h,wn as i,p as j,Ce as k,Fn as l,qt as m,re as n,V as o,Mn as p,le as q,Oe as r,W as s,Be as t,on as u,bt as v,ie as w,ge as x,ke as y,Le as z};
