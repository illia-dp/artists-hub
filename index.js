import{a as k,i as g,S as F}from"./assets/vendor-DZInknBW.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const C=document.querySelector(".loader"),M=document.querySelector(".js-load-more");function H(e){const t=e.map(({strArtist:r,strBiographyEN:s,strArtistThumb:n,_id:c,genres:f})=>{const l=f.flatMap(h=>h.split("/")).map(h=>h.trim()),b=[...new Set(l)].map(h=>`<span class="artists-genre">${h}</span>`).join("");return`
        <li class="artists-item">
            <div class="artists-box-img">
              <img
                data-id="${c}"
                src="${n}"
                alt="${r}"
                class="artists-img"
              />
            </div>

            <div class="artists-box-genres">${b}</div>

            <div class="artists-content">
              <h4 class="artists-name">${r}</h4>
              <p class="artists-descr">${s}</p>
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
    `}).join("");document.querySelector(".artists-list").insertAdjacentHTML("beforeend",t)}function _(){C.classList.remove("hidden")}function q(){C.classList.add("hidden")}function G(){M.classList.remove("hidden")}function A(){M.classList.add("hidden")}const U=8;let E=1;function z(){return E}function Y(e){E=e}async function V(e="artists",t={limit:U,page:E}){const r=`https://sound-wave.b.goit.study/api/${e}`;try{return(await k.get(r,{params:t})).data}catch(s){throw g.warning({message:`Request error: ${s.message}`,position:"center"}),s}}let x=0;async function B(){try{_();const e=await V();x=e.totalArtists,e.artists.length===0&&g.warning({message:"Sorry, but no artists were found",position:"center"}),H(e.artists),G()}catch{g.warning({message:"Sorry, but no artists were found",position:"center"})}finally{q()}}B();M.addEventListener("click",async()=>{const e=z();Y(e+1);let t=Math.ceil(x/e);if(e>=t){A();return}A(),_(),await B(),q()});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".feedback-section");if(!e)return;const t=e.querySelector(".splide.feedback-slider-splide"),o=e.querySelector(".splide__list.feedback-list-splide"),r=e.querySelector(".splide__arrows"),s=e.querySelector(".splide__pagination.feedback-splide-pagination"),n=e.querySelector(".loader-backdrop");if(!t||!o)return;const c="https://sound-wave.b.goit.study/api/feedbacks",f=15;let l=null;function v(){n&&n.classList.remove("is-hidden")}function b(){n&&n.classList.add("is-hidden")}function h(a,u="error"){u==="error"?g.error({title:"Error",message:a,position:"topRight"}):u==="success"?g.success({title:"Success",message:a,position:"topRight"}):u==="warning"?g.warning({title:"Warning",message:a,position:"topRight"}):g.info({title:"Info",message:a,position:"topRight"})}function y(a,u=""){const i=[t];r&&i.push(r),s&&i.push(s);const m=e.querySelector(".custom-feedback-message");if(m&&m.remove(),a==="error"||a==="no-feedback"){i.forEach(p=>{p&&(p.style.display="none")});const d=e.querySelector(".feedback-container");if(d){const p=document.createElement("p");p.className="custom-feedback-message",p.style.textAlign="center",p.style.padding="20px",a==="error"?(p.style.color="red",p.textContent=u||"Error loading feedbacks."):p.textContent=u||"There are no feedbacks yet.",t&&t.parentNode===d?t.insertAdjacentElement("afterend",p):d&&d.appendChild(p)}}else i.forEach(d=>{d&&(d.style.display="")});o&&a==="clear"&&(o.innerHTML="")}function S(a){const i=parseFloat(a);if(isNaN(i)){let L="";const I='<svg class="feedback-card__star" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>';for(let $=0;$<5;$++)L+=I;return L}const m=Math.floor(i);let d="";const p=`<svg class="feedback-card__star feedback-card__star--filled" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M9.07088 1.31791C9.41462 0.501451 10.5854 0.501452 10.9291 1.31791L12.9579 6.1368C13.1029 6.481 13.4306 6.71618 13.8067 6.74597L19.0727 7.16304C19.9649 7.23371 20.3267 8.3337 19.6469 8.90897L15.6348 12.3042C15.3482 12.5468 15.223 12.9273 15.3106 13.2899L16.5363 18.3666C16.744 19.2267 15.7969 19.9066 15.033 19.4457L10.5245 16.7251C10.2025 16.5308 9.7975 16.5308 9.47548 16.7251L4.96699 19.4457C4.20311 19.9066 3.25596 19.2267 3.46363 18.3666L4.68942 13.2899C4.77698 12.9273 4.65182 12.5468 4.36526 12.3042L0.353062 8.90897C-0.326718 8.3337 0.0350679 7.23371 0.927291 7.16304L6.19336 6.74597C6.5695 6.71618 6.89716 6.481 7.04207 6.1368L9.07088 1.31791Z" fill="#764191"/>
</svg>`,D=`<svg class="feedback-card__star" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M9.07082 1.31791C9.41456 0.501451 10.5853 0.501452 10.9291 1.31791L12.9578 6.1368C13.1028 6.481 13.4305 6.71618 13.8066 6.74597L19.0726 7.16304C19.9648 7.23371 20.3266 8.3337 19.6468 8.90897L15.6347 12.3042C15.3482 12.5468 15.2229 12.9273 15.3105 13.2899L16.5363 18.3666C16.7439 19.2267 15.7968 19.9066 15.0329 19.4457L10.5245 16.7251C10.2024 16.5308 9.79744 16.5308 9.47542 16.7251L4.96693 19.4457C4.20305 19.9066 3.25589 19.2267 3.46357 18.3666L4.68936 13.2899C4.77692 12.9273 4.65176 12.5468 4.36519 12.3042L0.353001 8.90897C-0.326779 8.3337 0.0350068 7.23371 0.92723 7.16304L6.19329 6.74597C6.56944 6.71618 6.89709 6.481 7.04201 6.1368L9.07082 1.31791Z" fill="white"/>
</svg>`;for(let L=0;L<5;L++)d+=L<m?p:D;return d}function O(a){const u=a.name||"Anonymous",i=a.descr||"No feedback.",m=a.rating,d=S(m);return`
            <li class="splide__slide feedback-card">
                <div class="feedback-card__stars">${d!==void 0?d:""}</div>
                <p class="feedback-card__text">${i}</p>
                <p class="feedback-card__author">${u}</p>
            </li>
        `}function R(a){if(l){try{l.destroy()}catch{}l=null}if(t&&a!==0){t.querySelector('[data-glide-el="controls[nav]"]')||t.querySelector(".splide__pagination");try{l=new F(t,{type:"slide",perPage:1,arrows:!!r,pagination:!!s,drag:!0,keyboard:"global"}),l.on("mounted",()=>{}),l.on("move",(u,i,m)=>{}),l.mount(),window.myTestSplide=l}catch{}}}async function N(){var a,u;v(),y("clear");try{const i=await k.get(c);if(!i.data||typeof i.data!="object"||!Array.isArray(i.data.data))throw new Error("Incorrect data type from server.");let m=i.data.data;if(m.length===0){y("no-feedback","There is no feedbacks yet."),b();return}y("success");const d=m.slice(0,f);if(o)o.innerHTML=d.map(O).join("");else throw new Error("Show error: there is no .splide__list.");R(d.length)}catch(i){const m=((u=(a=i.response)==null?void 0:a.data)==null?void 0:u.message)||i.message||"Unknown error.";y("error",`Error: ${m}`),h(`Failed to fetch or display feedbacks: ${m}`,"error")}finally{b()}}t&&o?N():n&&b()});document.addEventListener("DOMContentLoaded",()=>{function e(){const t=document.querySelector(".js-mobile-menu"),o=document.querySelector(".js-mobile-close-menu"),r=document.querySelector(".mobile-menu"),s=document.querySelector(".menu-mobile-overlay"),n=document.querySelectorAll('.mobile-menu a[href^="#"]');if(!t||!o||!r||!s){console.error("One or more mobile menu elements not found. Ensure selectors .js-mobile-menu, .js-mobile-close-menu, .mobile-menu, and .menu-mobile-overlay exist.");return}const c=()=>{r.classList.add("is-open"),s.classList.add("is-active"),document.body.style.overflow="hidden",r.removeAttribute("inert"),r.hidden=!1},f=()=>{r.classList.remove("is-open"),s.classList.remove("is-active"),document.body.style.overflow="",r.setAttribute("inert",""),r.hidden=!0};t.addEventListener("click",c),o.addEventListener("click",f),s.addEventListener("click",f),document.addEventListener("keydown",l=>{l.key==="Escape"&&r.classList.contains("is-open")&&f()}),n.forEach(l=>{l.addEventListener("click",f)}),r.setAttribute("inert",""),r.hidden=!0}e()});const K=document.querySelector(".art-modal");function W(e,t){const{intDiedYear:o,intFormedYear:r,intMembers:s,strArtist:n,strArtistThumb:c,strBiographyEN:f,strCountry:l,strGender:v,tracksList:b}=e,h=t.map(S=>`<div class="art-modal-gener"><p>${S}</p></div>`).join(""),y=`
            <button class="modal-close-btn" type="button">
              <svg class="close-icon" width="32" height="32">
                <use href="/img/sprite.svg#icon-Close"></use>
              </svg>
            </button>
            <h2 class="art-modal-name">${n}</h2>
            <div class="art-modal-wrapper">
              <div class="art-modal-wrapper-item">
                <div class="art-modal-item-img">
                  <img
                    src="${c}"
                    alt="${n}"
                    class="art-modal-img"
                  />
                </div>
              </div>
              <div class="art-modal-wrapper-item">
                <div class="art-modal-titles">
                  <p class="art-modal-live">
                    Years active <br />
                    <span>${r}-${o||"present"}</span>
                  </p>
                  <p class="art-modal-sex">
                    Sex <br />
                    <span>${v}</span>
                  </p>
                  <p class="art-modal-members">
                    Members <br />
                    <span>${s}</span>
                  </p>
                  <p class="art-modal-country">
                    Country <br />
                    <span>${l}</span>
                  </p>
                  <p class="art-modal-biography">
                    Biography <br />
                    <span>${f}</span>
                  </p>
                </div>
                <div class="art-modal-geners">
                   ${h}
                </div>
              </div>
            </div>
            <div class="art-modal-albums">
              <h3 class="art-modal-albums-title">Albums</h3>
              <div class="art-modal-albums-cards">
                ${Z(b)}
              </div>
              </div>
            `;K.insertAdjacentHTML("beforeend",y)}function Z(e){const t=J(e);return Object.keys(t).map(s=>`<div class="art-modal-albums-card">
            <h4 class="art-modal-albums-card-title">${s}</h4>
            <div class="art-modal-albums-card-names">
              <p>Track</p>
              <p>Time</p>
              <p>Link</p>
            </div>
            <div class="art-modal-albums-card-block">
              ${Q(t,s)}
            </div>
        </div>`).join("")}function Q(e,t){return e[t].map(({strTrack:o,intDuration:r,movie:s})=>{const n=X(r),c=s!=null&&s.startsWith("http")?`<a href="${s}" target="_blank">
               <svg class="close-icon" width="24" height="25">
                 <use href="/img/sprite.svg#icon-Youtube"></use>
               </svg>
             </a>`:"";return`
          <div class="art-modal-albums-card-item">
            <p class="art-modal-albums-card-track">${o}</p>
            <p class="art-modal-albums-card-duration">${n}</p>
            <p class="art-modal-albums-card-link">${c}</p>
          </div>`}).join("")}function X(e){const t=Math.floor(e/1e3),o=Math.floor(t/60),r=t%60;return`${o}:${r.toString().padStart(2,"0")}`}function J(e){const t={};return e.forEach(o=>{const r=o.strAlbum;t[r]||(t[r]=[]),t[r].push(o)}),t}async function ee(e){const o=`https://sound-wave.b.goit.study/api/artists/${e}`;try{return(await k.get(o)).data}catch(r){throw g.warning({message:`Request error: ${r.message}`,position:"center"}),r}}const te=document.querySelector(".art-modal"),w=document.querySelector(".backdrop"),T=document.querySelector(".modal-loader");document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".artists-list");e&&e.addEventListener("click",t=>{t.target.closest(".artists-learn-more-btn")&&se(t)})});async function se(e){e.preventDefault();const o=e.target.closest(".artists-learn-more-btn").closest(".artists-item"),r=o.querySelector(".artists-img"),s=r==null?void 0:r.dataset.id;if(s)try{const n=Array.from(o.querySelectorAll(".artists-box-genres .artists-genre")).map(f=>f.textContent);oe();const c=await ee(s);if(ne(),!c||!c.strArtist){g.warning({message:"Sorry, but no artist was found",position:"center"});return}te.innerHTML="",W(c,n),re()}catch{g.error({message:"Failed to load artist data",position:"center"})}}function re(){w.classList.add("is-visible"),document.body.style.overflow="hidden",window.addEventListener("keydown",j)}function P(){w.classList.remove("is-visible"),document.body.style.overflow="",window.removeEventListener("keydown",j)}function j(e){e.key==="Escape"&&P()}w.addEventListener("click",e=>{(e.target===w||e.target.closest(".modal-close-btn"))&&P()});function oe(){T.hidden=!1}function ne(){T.hidden=!0}
//# sourceMappingURL=index.js.map
