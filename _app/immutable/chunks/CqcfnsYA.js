import{a3 as b,a4 as E,a5 as H,a6 as R,D as B,a7 as C,C as M,a8 as P,a9 as S,aa as W,H as Y,ab as q,ac as m,x as w,w as O,o as $,B as p,ad as z,ae as x,af as F,ag as G,ah as J,ai as K,aj as Q,z as U,p as X,c as Z,n as L,j as rr}from"./BnrCCFMJ.js";import{b as tr}from"./D0NuZ35r.js";const ar=["touchstart","touchmove"];function er(r){return ar.includes(r)}function sr(r){var t=H,e=R;b(null),E(null);try{return r()}finally{b(t),E(e)}}const ir=new Set,A=new Set;function nr(r,t,e,o={}){function i(a){if(o.capture||y.call(t,a),!a.cancelBubble)return sr(()=>e==null?void 0:e.call(this,a))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?P(()=>{t.addEventListener(r,i,o)}):t.addEventListener(r,i,o),i}function cr(r,t,e,o,i){var a={capture:o,passive:i},u=nr(r,t,e,a);(t===document.body||t===window||t===document)&&M(()=>{t.removeEventListener(r,u,a)})}function y(r){var D;var t=this,e=t.ownerDocument,o=r.type,i=((D=r.composedPath)==null?void 0:D.call(r))||[],a=i[0]||r.target,u=0,_=r.__root;if(_){var l=i.indexOf(_);if(l!==-1&&(t===document||t===window)){r.__root=t;return}var h=i.indexOf(t);if(h===-1)return;l<=h&&(u=l)}if(a=i[u]||r.target,a!==t){B(r,"currentTarget",{configurable:!0,get(){return a||e}});var T=H,f=R;b(null),E(null);try{for(var s,n=[];a!==null;){var c=a.assignedSlot||a.parentNode||a.host||null;try{var d=a["__"+o];if(d!=null&&(!a.disabled||r.target===a))if(C(d)){var[V,...j]=d;V.apply(a,[r,...j])}else d.call(a,r)}catch(g){s?n.push(g):s=g}if(r.cancelBubble||c===t||c===null)break;a=c}if(s){for(let g of n)queueMicrotask(()=>{throw g});throw s}}finally{r.__root=t,delete r.currentTarget,b(T),E(f)}}}let k=!0;function lr(r,t){var e=t==null?"":typeof t=="object"?t+"":t;e!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=e,r.nodeValue=e+"")}function or(r,t){return I(r,t)}function dr(r,t){S(),t.intro=t.intro??!1;const e=t.target,o=L,i=p;try{for(var a=W(e);a&&(a.nodeType!==8||a.data!==Y);)a=q(a);if(!a)throw m;w(!0),O(a),$();const u=I(r,{...t,anchor:a});if(p===null||p.nodeType!==8||p.data!==z)throw x(),m;return w(!1),u}catch(u){if(u===m)return t.recover===!1&&F(),S(),G(e),w(!1),or(r,t);throw u}finally{w(o),O(i)}}const v=new Map;function I(r,{target:t,anchor:e,props:o={},events:i,context:a,intro:u=!0}){S();var _=new Set,l=f=>{for(var s=0;s<f.length;s++){var n=f[s];if(!_.has(n)){_.add(n);var c=er(n);t.addEventListener(n,y,{passive:c});var d=v.get(n);d===void 0?(document.addEventListener(n,y,{passive:c}),v.set(n,1)):v.set(n,d+1)}}};l(J(ir)),A.add(l);var h=void 0,T=K(()=>{var f=e??t.appendChild(Q());return U(()=>{if(a){X({});var s=Z;s.c=a}i&&(o.$$events=i),L&&tr(f,null),k=u,h=r(f,o)||{},k=!0,L&&(R.nodes_end=p),a&&rr()}),()=>{var c;for(var s of _){t.removeEventListener(s,y);var n=v.get(s);--n===0?(document.removeEventListener(s,y),v.delete(s)):v.set(s,n)}A.delete(l),f!==e&&((c=f.parentNode)==null||c.removeChild(f))}});return N.set(h,T),h}let N=new WeakMap;function _r(r,t){const e=N.get(r);return e?(N.delete(r),e(t)):Promise.resolve()}export{k as a,cr as e,dr as h,or as m,lr as s,_r as u,sr as w};
