import{a as v,i as u}from"./assets/vendor-DSJL_ovD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();const p=document.querySelector(".loader"),d=document.querySelector(".js-load-more");function M(s){const r=s.map(({strArtist:t,strBiographyEN:e,strArtistThumb:n,_id:o,genres:a})=>{const c=a.flatMap(l=>l.split("/")).map(l=>l.trim()),L=[...new Set(c)].map(l=>`<span class="artists-genre">${l}</span>`).join("");return`
        <li class="artists-item">
            <div class="artists-box-img">
              <img
                data-id="${o}"
                src="${n}"
                alt="${t}"
                class="artists-img"
              />
            </div>

            <div class="artists-box-genres">${L}</div>

            <div class="artists-content">
              <h4 class="artists-name">${t}</h4>
              <p class="artists-descr">${e}</p>
              <button
                type="button"
                class="artists-learn-more-btn"
                aria-label="button to learn more"
              >
                Learn More
                <svg class="icon-caret-right" width="24" height="24">
                  <use href="../img/sprite.svg#icon-caret-right"></use>
                </svg>
              </button>
            </div>
          </li>
    `}).join("");document.querySelector(".artists-list").insertAdjacentHTML("beforeend",r)}function g(){p.classList.remove("hidden")}function y(){p.classList.add("hidden")}function w(){d.classList.remove("hidden")}function f(){d.classList.add("hidden")}const E=8;let m=1;function S(){return m}function q(s){m=s}async function A(s="artists",r={limit:E,page:m}){const t=`https://sound-wave.b.goit.study/api/${s}`;try{return(await v.get(t,{params:r})).data}catch(e){throw u.warning({message:`Request error: ${e.message}`,position:"center"}),e}}let h=0;async function b(){try{g();const s=await A();h=s.totalArtists,s.artists.length===0&&u.warning({message:"Sorry, but no artists were found",position:"center"}),M(s.artists),w()}catch{u.warning({message:"Sorry, but no artists were found",position:"center"})}finally{y()}}b();d.addEventListener("click",async()=>{const s=S();q(s+1);let r=Math.ceil(h/s);if(s>=r){f();return}f(),g(),await b(),y()});document.addEventListener("DOMContentLoaded",()=>{function s(){const r=document.querySelector(".js-mobile-menu"),i=document.querySelector(".js-mobile-close-menu"),t=document.querySelector(".mobile-menu"),e=document.querySelector(".menu-mobile-overlay"),n=document.querySelectorAll('.mobile-menu a[href^="#"]');if(!r||!i||!t||!e){console.error("One or more mobile menu elements not found. Ensure selectors .js-mobile-menu, .js-mobile-close-menu, .mobile-menu, and .menu-mobile-overlay exist.");return}const o=()=>{t.classList.add("is-open"),e.classList.add("is-active"),document.body.style.overflow="hidden",t.removeAttribute("inert"),t.hidden=!1},a=()=>{t.classList.remove("is-open"),e.classList.remove("is-active"),document.body.style.overflow="",t.setAttribute("inert",""),t.hidden=!0};r.addEventListener("click",o),i.addEventListener("click",a),e.addEventListener("click",a),document.addEventListener("keydown",c=>{c.key==="Escape"&&t.classList.contains("is-open")&&a()}),n.forEach(c=>{c.addEventListener("click",a)}),t.setAttribute("inert",""),t.hidden=!0}s()});
//# sourceMappingURL=index.js.map
