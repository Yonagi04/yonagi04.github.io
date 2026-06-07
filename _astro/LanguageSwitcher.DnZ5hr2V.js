import{j as t}from"./jsx-runtime.ClP7wGfN.js";import{r as n}from"./index.DK-fsZOb.js";const k={zh:"中文",ja:"日本語",en:"English"},m="zh";function p(r){return`lang:${r}`}function w(r){try{return localStorage.getItem(p(r))}catch{return null}}function g(r,s){try{localStorage.setItem(p(r),s)}catch{}}function L({availableLanguages:r,articleSlug:s}){const[a,u]=n.useState(m),[o,i]=n.useState(!1),c=n.useRef(null),h=n.useRef(!1),l=n.useCallback(e=>{document.querySelectorAll("[data-lang]").forEach(x=>{x.hidden=x.dataset.lang!==e})},[]);n.useEffect(()=>{if(h.current)return;h.current=!0;const e=w(s);e&&r.includes(e)&&(u(e),l(e))},[s,r,l]),n.useEffect(()=>{if(!o)return;const e=d=>{c.current&&!c.current.contains(d.target)&&i(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[o]),n.useEffect(()=>{if(!o)return;const e=d=>{d.key==="Escape"&&(i(!1),c.current?.querySelector("button")?.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[o]);const b=n.useCallback(e=>{u(e),g(s,e),l(e),i(!1)},[s,l]);if(r.length<=1)return null;const f=k[a]||a;return t.jsxs("div",{ref:c,className:"language-switcher relative inline-flex items-center",children:[t.jsxs("button",{type:"button",onClick:()=>i(e=>!e),"aria-expanded":o,"aria-haspopup":"listbox","aria-label":`选择语言，当前为${f}`,className:`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm
                   border border-black/15 dark:border-white/20
                   bg-transparent
                   text-black/60 dark:text-white/60
                   hover:text-black dark:hover:text-white
                   hover:bg-black/5 dark:hover:bg-white/5
                   transition-colors duration-300
                   cursor-pointer select-none`,children:[t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[t.jsx("circle",{cx:"12",cy:"12",r:"10"}),t.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),t.jsx("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})]}),t.jsx("span",{children:f}),t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",style:{transform:o?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.2s ease"},children:t.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),o&&t.jsx("div",{role:"listbox","aria-label":"选择语言",className:`absolute right-0 top-full mt-1.5 z-50
                     min-w-[120px]
                     rounded-lg
                     border border-black/15 dark:border-white/20
                     bg-zinc-100 dark:bg-zinc-800
                     shadow-lg
                     py-1
                     animate-in fade-in`,children:r.map(e=>t.jsx("button",{role:"option","aria-selected":e===a,onClick:()=>b(e),className:`w-full text-left px-3.5 py-1.5 text-sm
                         transition-colors duration-150
                         cursor-pointer select-none
                         ${e===a?"text-black dark:text-white font-medium bg-black/5 dark:bg-white/10":"text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"}
              `,children:k[e]||e},e))})]})}export{L as default};
