import"./hoisted.RlhmG3H2.js";function i(){document.querySelectorAll("article pre").forEach(o=>{if(o.querySelector(".copy-btn"))return;const t=document.createElement("div");t.className="code-block-wrapper",t.style.position="relative",o.parentNode?.insertBefore(t,o),t.appendChild(o);const e=document.createElement("button");e.className="copy-btn",e.setAttribute("aria-label","复制代码"),e.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <span class="copy-text">复制</span>
        <svg class="copy-check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `,e.style.cssText=`
        position: absolute; top: 0.5rem; right: 0.5rem;
        display: flex; align-items: center; gap: 0.3rem;
        padding: 0.3rem 0.6rem; font-size: 0.75rem;
        border-radius: 0.375rem;
        border: 1px solid transparent;
        background: rgba(128,128,128,0.15);
        color: rgba(128,128,128,0.8);
        cursor: pointer; opacity: 0;
        transition: opacity 0.2s, background 0.2s, color 0.2s;
        line-height: 1.4;
      `,e.addEventListener("click",async()=>{const c=o.querySelector("code")?.textContent??o.textContent??"";await navigator.clipboard.writeText(c);const n=e.querySelector("svg:first-of-type"),r=e.querySelector(".copy-check"),s=e.querySelector(".copy-text");n&&(n.style.display="none"),r&&(r.style.display=""),s&&(s.textContent="已复制"),e.style.color="#22c55e",setTimeout(()=>{n&&(n.style.display=""),r&&(r.style.display="none"),s&&(s.textContent="复制"),e.style.color=""},2e3)}),t.addEventListener("mouseenter",()=>{e.style.opacity="1"}),t.addEventListener("mouseleave",()=>{e.style.opacity="0"}),t.appendChild(e)})}document.addEventListener("DOMContentLoaded",i);document.addEventListener("astro:after-swap",i);
