import{a as m,i as u}from"./assets/vendor-DSJL_ovD.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();function f(r){const n=r.map(({strArtist:t,strBiographyEN:e,strArtistThumb:s,_id:o,genres:c})=>{const a=c.flatMap(l=>l.split("/")).map(l=>l.trim()),d=[...new Set(a)].map(l=>`<span class="artists-genre">${l}</span>`).join("");return`
        <li class="artists-item">
            <div class="artists-box-img">
              <img
                data-id="${o}"
                src="${s}"
                alt="${t}"
                class="artists-img"
              />
            </div>

            <div class="artists-box-genres">
            ${d}
            </div>

            <div class="artists-content">
              <h4 class="artists-name">${t}</h4>
              <p class="artists-descr">${e}</p>
              <button type="button" class="artists-learn-more-btn">
                Learn More
              </button>
            </div>
          </li>
    `}).join("");document.querySelector(".artists-list").insertAdjacentHTML("beforeend",n)}const p=8;async function b(r="artists",n={limit:p}){const t=`https://sound-wave.b.goit.study/api/${r}`;try{return(await m.get(t,{params:n})).data}catch(e){throw u.warning({message:`Request error: ${e.message}`,position:"center"}),e}}async function y(){const r=await b();r.artists.length===0&&u.warning({message:"Sorry, but no artists were found",position:"center"}),f(r.artists)}y();document.addEventListener("DOMContentLoaded",()=>{function r(){const n=document.querySelector(".js-mobile-menu"),i=document.querySelector(".js-mobile-close-menu"),t=document.querySelector(".mobile-menu"),e=document.querySelector(".menu-mobile-overlay"),s=document.querySelectorAll('.mobile-menu a[href^="#"]');if(!n||!i||!t||!e){console.error("One or more mobile menu elements not found. Ensure selectors .js-mobile-menu, .js-mobile-close-menu, .mobile-menu, and .menu-mobile-overlay exist.");return}const o=()=>{t.classList.add("is-open"),e.classList.add("is-active"),document.body.style.overflow="hidden",t.removeAttribute("inert"),t.hidden=!1},c=()=>{t.classList.remove("is-open"),e.classList.remove("is-active"),document.body.style.overflow="",t.setAttribute("inert",""),t.hidden=!0};n.addEventListener("click",o),i.addEventListener("click",c),e.addEventListener("click",c),document.addEventListener("keydown",a=>{a.key==="Escape"&&t.classList.contains("is-open")&&c()}),s.forEach(a=>{a.addEventListener("click",c)}),t.setAttribute("inert",""),t.hidden=!0}r()});
//# sourceMappingURL=index.js.map
