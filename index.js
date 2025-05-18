import{a as $,i as f,S as H}from"./assets/vendor-DZInknBW.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const _=document.querySelector(".loader"),C=document.querySelector(".js-load-more");function G(e){const t=e.map(({strArtist:r,strBiographyEN:s,strArtistThumb:o,_id:l,genres:h})=>{const m=h.flatMap(g=>g.split("/")).map(g=>g.trim()),b=[...new Set(m)].map(g=>`<span class="artists-genre">${g}</span>`).join("");return`
        <li class="artists-item">
            <div class="artists-box-img">
              <img
                data-id="${l}"
                src="${o}"
                alt="${r}"
                class="artists-img"
                loading="lazy"
                width="704" 
                height="432"
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
                  <use href="/artists-hub/assets/sprite-c2qr3u0C.svg#icon-caret-right"></use>
                </svg>
              </button>
            </div>
          </li>
    `}).join("");document.querySelector(".artists-list").insertAdjacentHTML("beforeend",t)}function q(){_.classList.remove("hidden")}function x(){_.classList.add("hidden")}function U(){C.classList.remove("hidden")}function z(){C.classList.add("hidden")}const Y=8;let M=1;function T(){return M}function V(e){M=e}async function K(e="artists",t={limit:Y,page:M}){const r=`https://sound-wave.b.goit.study/api/${e}`;try{return(await $.get(r,{params:t})).data}catch(s){throw f.warning({message:`Request error: ${s.message}`,position:"center"}),s}}let A=0;async function B(){try{q();const e=await K();A=e.totalArtists,e.artists.length===0&&f.warning({message:"Sorry, but no artists were found",position:"center"}),G(e.artists);const t=T();let a=Math.ceil(A/t);if(t===a){z();return}U()}catch{f.warning({message:"Sorry, but no artists were found",position:"center"})}finally{x()}}B();C.addEventListener("click",async()=>{const e=T();V(e+1),q(),await B(),x()});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".feedback-section");if(!e)return;const t=e.querySelector(".splide.feedback-slider-splide"),a=e.querySelector(".splide__list.feedback-list-splide"),r=e.querySelector(".splide__arrows"),s=e.querySelector(".splide__pagination.feedback-splide-pagination"),o=e.querySelector(".loader-backdrop");if(!t||!a)return;const l="https://sound-wave.b.goit.study/api/feedbacks",h=15;let m=null;function w(){o&&o.classList.remove("is-hidden")}function b(){o&&o.classList.add("is-hidden")}function g(n,d="error"){d==="error"?f.error({title:"Error",message:n,position:"topRight"}):d==="success"?f.success({title:"Success",message:n,position:"topRight"}):d==="warning"?f.warning({title:"Warning",message:n,position:"topRight"}):f.info({title:"Info",message:n,position:"topRight"})}function y(n,d=""){const i=[t];r&&i.push(r),s&&i.push(s);const u=e.querySelector(".custom-feedback-message");if(u&&u.remove(),n==="error"||n==="no-feedback"){i.forEach(p=>{p&&(p.style.display="none")});const c=e.querySelector(".feedback-container");if(c){const p=document.createElement("p");p.className="custom-feedback-message",p.style.textAlign="center",p.style.padding="20px",n==="error"?(p.style.color="red",p.textContent=d||"Error loading feedbacks."):p.textContent=d||"There are no feedbacks yet.",t&&t.parentNode===c?t.insertAdjacentElement("afterend",p):c&&c.appendChild(p)}}else i.forEach(c=>{c&&(c.style.display="")});a&&n==="clear"&&(a.innerHTML="")}function k(n){const i=parseFloat(n);if(isNaN(i)){let L="";const F='<svg class="feedback-card__star" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>';for(let E=0;E<5;E++)L+=F;return L}const u=Math.floor(i);let c="";const p=`<svg class="feedback-card__star feedback-card__star--filled" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M9.07088 1.31791C9.41462 0.501451 10.5854 0.501452 10.9291 1.31791L12.9579 6.1368C13.1029 6.481 13.4306 6.71618 13.8067 6.74597L19.0727 7.16304C19.9649 7.23371 20.3267 8.3337 19.6469 8.90897L15.6348 12.3042C15.3482 12.5468 15.223 12.9273 15.3106 13.2899L16.5363 18.3666C16.744 19.2267 15.7969 19.9066 15.033 19.4457L10.5245 16.7251C10.2025 16.5308 9.7975 16.5308 9.47548 16.7251L4.96699 19.4457C4.20311 19.9066 3.25596 19.2267 3.46363 18.3666L4.68942 13.2899C4.77698 12.9273 4.65182 12.5468 4.36526 12.3042L0.353062 8.90897C-0.326718 8.3337 0.0350679 7.23371 0.927291 7.16304L6.19336 6.74597C6.5695 6.71618 6.89716 6.481 7.04207 6.1368L9.07088 1.31791Z" fill="#764191"/>
</svg>`,D=`<svg class="feedback-card__star" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M9.07082 1.31791C9.41456 0.501451 10.5853 0.501452 10.9291 1.31791L12.9578 6.1368C13.1028 6.481 13.4305 6.71618 13.8066 6.74597L19.0726 7.16304C19.9648 7.23371 20.3266 8.3337 19.6468 8.90897L15.6347 12.3042C15.3482 12.5468 15.2229 12.9273 15.3105 13.2899L16.5363 18.3666C16.7439 19.2267 15.7968 19.9066 15.0329 19.4457L10.5245 16.7251C10.2024 16.5308 9.79744 16.5308 9.47542 16.7251L4.96693 19.4457C4.20305 19.9066 3.25589 19.2267 3.46357 18.3666L4.68936 13.2899C4.77692 12.9273 4.65176 12.5468 4.36519 12.3042L0.353001 8.90897C-0.326779 8.3337 0.0350068 7.23371 0.92723 7.16304L6.19329 6.74597C6.56944 6.71618 6.89709 6.481 7.04201 6.1368L9.07082 1.31791Z" fill="white"/>
</svg>`;for(let L=0;L<5;L++)c+=L<u?p:D;return c}function N(n){const d=n.name||"Anonymous",i=n.descr||"No feedback.",u=n.rating,c=k(u);return`
            <li class="splide__slide feedback-card">
                <div class="feedback-card__stars">${c!==void 0?c:""}</div>
                <p class="feedback-card__text">${i}</p>
                <p class="feedback-card__author">${d}</p>
            </li>
        `}function O(n){if(m){try{m.destroy()}catch{}m=null}if(t&&n!==0){t.querySelector('[data-glide-el="controls[nav]"]')||t.querySelector(".splide__pagination");try{m=new H(t,{type:"slide",perPage:1,arrows:!!r,pagination:!!s,drag:!0,keyboard:"global"}),m.on("mounted",()=>{}),m.on("move",(d,i,u)=>{}),m.mount(),window.myTestSplide=m}catch{}}}async function I(){var n,d;w(),y("clear");try{const i=await $.get(l);if(!i.data||typeof i.data!="object"||!Array.isArray(i.data.data))throw new Error("Incorrect data type from server.");let u=i.data.data;if(u.length===0){y("no-feedback","There is no feedbacks yet."),b();return}y("success");const c=u.slice(0,h);if(a)a.innerHTML=c.map(N).join("");else throw new Error("Show error: there is no .splide__list.");O(c.length)}catch(i){const u=((d=(n=i.response)==null?void 0:n.data)==null?void 0:d.message)||i.message||"Unknown error.";y("error",`Error: ${u}`),g(`Failed to fetch or display feedbacks: ${u}`,"error")}finally{b()}}t&&a?I():o&&b()});const v=document.querySelector(".mobile-menu"),W=document.querySelector(".js-mobile-menu"),Z=document.querySelector(".js-mobile-close-menu");W.onclick=()=>v.classList.add("is-open");Z.onclick=()=>v.classList.remove("is-open");document.addEventListener("keydown",e=>{e.key==="Escape"&&v.classList.remove("is-open")});v.querySelectorAll('a[href^="#"]').forEach(e=>{e.onclick=()=>v.classList.remove("is-open")});const Q=document.querySelector(".art-modal");function X(e,t){const{intDiedYear:a,intFormedYear:r,intMembers:s,strArtist:o,strArtistThumb:l,strBiographyEN:h,strCountry:m,strGender:w,tracksList:b}=e,g=t.map(k=>`<div class="art-modal-gener"><p>${k}</p></div>`).join(""),y=`
            <button class="modal-close-btn" type="button">
              <svg class="close-icon" width="32" height="32">
                <use href="/artists-hub/assets/sprite-c2qr3u0C.svg#icon-Close"></use>
              </svg>
            </button>
            <h2 class="art-modal-name">${o}</h2>
            <div class="art-modal-wrapper">
              <div class="art-modal-wrapper-item">
                <div class="art-modal-item-img">
                  <img
                    src="${l}"
                    alt="${o}"
                    class="art-modal-img"
                  />
                </div>
              </div>
              <div class="art-modal-wrapper-item">
                <div class="art-modal-titles">
                  <p class="art-modal-live">
                    Years active <br />
                    <span>${r}-${a||"present"}</span>
                  </p>
                  <p class="art-modal-sex">
                    Sex <br />
                    <span>${w}</span>
                  </p>
                  <p class="art-modal-members">
                    Members <br />
                    <span>${s}</span>
                  </p>
                  <p class="art-modal-country">
                    Country <br />
                    <span>${m}</span>
                  </p>
                  <p class="art-modal-biography">
                    Biography <br />
                    <span>${h}</span>
                  </p>
                </div>
                <div class="art-modal-geners">
                   ${g}
                </div>
              </div>
            </div>
            <div class="art-modal-albums">
              <h3 class="art-modal-albums-title">Albums</h3>
              <div class="art-modal-albums-cards">
                ${J(b)}
              </div>
              </div>
            `;Q.insertAdjacentHTML("beforeend",y)}function J(e){const t=se(e);return Object.keys(t).map(s=>`<div class="art-modal-albums-card">
            <h4 class="art-modal-albums-card-title">${s}</h4>
            <div class="art-modal-albums-card-names">
              <p>Track</p>
              <p>Time</p>
              <p>Link</p>
            </div>
            <div class="art-modal-albums-card-block">
              ${ee(t,s)}
            </div>
        </div>`).join("")}function ee(e,t){return e[t].map(({strTrack:a,intDuration:r,movie:s})=>{const o=te(r),l=s!=null&&s.startsWith("http")?`<a href="${s}" target="_blank">
               <svg class="close-icon" width="24" height="25">
                 <use href="/artists-hub/assets/sprite-c2qr3u0C.svg#icon-Youtube"></use>
               </svg>
             </a>`:"";return`
          <div class="art-modal-albums-card-item">
            <p class="art-modal-albums-card-track">${a}</p>
            <p class="art-modal-albums-card-duration">${o}</p>
            <p class="art-modal-albums-card-link">${l}</p>
          </div>`}).join("")}function te(e){const t=Math.floor(e/1e3),a=Math.floor(t/60),r=t%60;return`${a}:${r.toString().padStart(2,"0")}`}function se(e){const t={};return e.forEach(a=>{const r=a.strAlbum;t[r]||(t[r]=[]),t[r].push(a)}),t}async function re(e){const a=`https://sound-wave.b.goit.study/api/artists/${e}`;try{return(await $.get(a)).data}catch(r){throw f.warning({message:`Request error: ${r.message}`,position:"center"}),r}}const ae=document.querySelector(".art-modal"),S=document.querySelector(".backdrop"),P=document.querySelector(".modal-loader");document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".artists-list");e&&e.addEventListener("click",t=>{t.target.closest(".artists-learn-more-btn")&&oe(t)})});async function oe(e){e.preventDefault();const a=e.target.closest(".artists-learn-more-btn").closest(".artists-item"),r=a.querySelector(".artists-img"),s=r==null?void 0:r.dataset.id;if(s)try{const o=Array.from(a.querySelectorAll(".artists-box-genres .artists-genre")).map(h=>h.textContent);ie();const l=await re(s);if(ce(),!l||!l.strArtist){f.warning({message:"Sorry, but no artist was found",position:"center"});return}ae.innerHTML="",X(l,o),ne()}catch{f.error({message:"Failed to load artist data",position:"center"})}}function ne(){S.classList.add("is-visible"),document.body.style.overflow="hidden",window.addEventListener("keydown",R)}function j(){S.classList.remove("is-visible"),document.body.style.overflow="",window.removeEventListener("keydown",R)}function R(e){e.key==="Escape"&&j()}S.addEventListener("click",e=>{(e.target===S||e.target.closest(".modal-close-btn"))&&j()});function ie(){P.hidden=!1}function ce(){P.hidden=!0}
//# sourceMappingURL=index.js.map
