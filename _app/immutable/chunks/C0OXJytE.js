import{m as G,n as N,o as H,E as Z,H as $,q as z,v as V,w as J,x as h,y as p,z as U,A as Y,U as K,B as Q,C as W,D as X,F as q,G as C,I as j,J as w,K as k,g as d,L as x,M as ee,N as ae,f as B,O as re,P as ne,Q as se,R as ue,b as M,S as ie,T as fe,V as te,W as le,X as _e,Y as ce,Z as ve}from"./BnrCCFMJ.js";function de(e,r,[n,a]=[0,0]){N&&n===0&&H();var i=e,u=null,f=null,b=K,E=n>0?Z:0,l=!1;const g=(t,_=!0)=>{l=!0,o(_,t)},o=(t,_)=>{if(b===(b=t))return;let I=!1;if(N&&a!==-1){if(n===0){const c=i.data;c===$?a=0:c===z?a=1/0:(a=parseInt(c.substring(1)),a!==a&&(a=b?1/0:-1))}const P=a>n;!!b===P&&(i=V(),J(i),h(!1),I=!0,a=-1)}b?(u?p(u):_&&(u=U(()=>_(i))),f&&Y(f,()=>{f=null})):(f?p(f):_&&(f=U(()=>_(i,[n+1,a]))),u&&Y(u,()=>{u=null})),I&&h(!0)};G(()=>{l=!1,r(g),l||o(null,null)},E),N&&(i=Q)}let T=!1,O=Symbol();function Ie(e,r,n){const a=n[r]??(n[r]={store:null,source:C(void 0),unsubscribe:q});if(a.store!==e&&!(O in n))if(a.unsubscribe(),a.store=e??null,e==null)a.source.v=void 0,a.unsubscribe=q;else{var i=!0;a.unsubscribe=j(e,u=>{i?a.source.v=u:w(a.source,u)}),i=!1}return e&&O in n?k(e):d(a.source)}function Se(){const e={};function r(){W(()=>{for(var n in e)e[n].unsubscribe();X(e,O,{enumerable:!1,value:!0})})}return[e,r]}function oe(e){var r=T;try{return T=!1,[e(),T]}finally{T=r}}function y(e){var r;return((r=e.ctx)==null?void 0:r.d)??!1}function Ee(e,r,n,a){var L;var i=(n&ce)!==0,u=!le||(n&_e)!==0,f=(n&ie)!==0,b=(n&ve)!==0,E=!1,l;f?[l,E]=oe(()=>e[r]):l=e[r];var g=fe in e||te in e,o=f&&(((L=x(e,r))==null?void 0:L.set)??(g&&r in e&&(s=>e[r]=s)))||void 0,t=a,_=!0,I=!1,P=()=>(I=!0,_&&(_=!1,b?t=M(a):t=a),t);l===void 0&&a!==void 0&&(o&&u&&ee(),l=P(),o&&o(l));var c;if(u)c=()=>{var s=e[r];return s===void 0?P():(_=!0,I=!1,s)};else{var D=(i?B:re)(()=>e[r]);D.f|=ae,c=()=>{var s=d(D);return s!==void 0&&(t=void 0),s===void 0?t:s}}if((n&ne)===0)return c;if(o){var F=e.$$legacy;return function(s,S){return arguments.length>0?((!u||!S||F||E)&&o(S?c():s),s):c()}}var A=!1,R=C(l),v=B(()=>{var s=c(),S=d(R);return A?(A=!1,S):R.v=s});return f&&d(v),i||(v.equals=se),function(s,S){if(arguments.length>0){const m=S?d(v):u&&f?ue(s):s;if(!v.equals(m)){if(A=!0,w(R,m),I&&t!==void 0&&(t=m),y(v))return s;M(()=>d(v))}return s}return y(v)?v.v:d(v)}}export{Se as a,de as i,Ee as p,Ie as s};
