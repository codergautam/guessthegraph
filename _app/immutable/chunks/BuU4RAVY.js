import{n as o,u as a,i as d}from"./BMJ1BAhn.js";function p(n,u,e){if(n==null)return u(void 0),o;const t=a(()=>n.subscribe(u,e));return t.unsubscribe?()=>t.unsubscribe():t}const i=[];function _(n,u=o){let e=null;const t=new Set;function c(r){if(d(n,r)&&(n=r,e)){const b=!i.length;for(const s of t)s[1](),i.push(s,n);if(b){for(let s=0;s<i.length;s+=2)i[s][0](i[s+1]);i.length=0}}}function f(r){c(r(n))}function l(r,b=o){const s=[r,b];return t.add(s),t.size===1&&(e=u(c,f)||o),r(n),()=>{t.delete(s),t.size===0&&e&&(e(),e=null)}}return{set:c,update:f,subscribe:l}}function h(n){let u;return p(n,e=>u=e)(),u}export{h as g,_ as w};
