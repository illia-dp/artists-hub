import{a as k,i as m,S as N}from"./assets/vendor-DZInknBW.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();const H="data:image/jpeg;base64,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",q=document.querySelector(".artists-loader"),M=document.querySelector(".js-load-more");function V(A){const e=A.map(({strArtist:s,strBiographyEN:t,strArtistThumb:a,_id:c,genres:f})=>{const p=f.flatMap(g=>g.split("/")).map(g=>g.trim()),h=[...new Set(p)].map(g=>`<span class="artists-genre">${g}</span>`).join("");return`
        <li class="artists-item">
            <div class="artists-box-img">
              <img
                data-id="${c}"
                src="${a??H}"
                alt="${s}"
                class="artists-img"
                loading="lazy"
                width="704" 
                height="432"
              />
            </div>

            <div class="artists-box-genres">${h}</div>

            <div class="artists-content">
              <h4 class="artists-name">${s}</h4>
              <p class="artists-descr">${t}</p>
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
    `}).join("");document.querySelector(".artists-list").insertAdjacentHTML("beforeend",e)}function Q(){q.classList.remove("hidden")}function P(){q.classList.add("hidden")}function K(){M.classList.remove("hidden")}function R(){M.classList.add("hidden")}function _(A,e){window.scrollBy({top:e,left:A,behavior:"smooth"})}const G=8;let C=1;function U(){return C}function X(A){C=A}async function Z(A="artists",e={limit:G,page:C}){const s=`https://sound-wave.b.goit.study/api/${A}`;try{return(await k.get(s,{params:e})).data}catch(t){throw m.warning({message:`Request error: ${t.message}`,position:"center"}),t}}let B=0,I,E=0;async function j(){try{Q();const A=await Z();B=A.totalArtists,A.artists.length===0&&m.warning({message:"Sorry, but no artists were found",position:"center"}),V(A.artists),I=document.querySelector(".artists-item"),E=I.getBoundingClientRect().height,console.log(E);const e=U();let r=Math.ceil(B/e);if(e===r){R();return}K()}catch{m.warning({message:"Sorry, but no artists were found",position:"center"})}finally{P()}}j();M.addEventListener("click",async()=>{R();const A=U();X(A+1),Q(),await j(),P(),_(0,E)});document.addEventListener("DOMContentLoaded",()=>{const A=document.querySelector(".feedback-section");if(!A)return;const e=A.querySelector(".splide.feedback-slider-splide"),r=A.querySelector(".splide__list.feedback-list-splide"),s=A.querySelector(".splide__arrows"),t=A.querySelector(".splide__pagination.feedback-splide-pagination"),a=A.querySelector(".loader-backdrop");if(!e||!r)return;const c="https://sound-wave.b.goit.study/api/feedbacks",f=15;let p=null;function L(){a&&a.classList.remove("is-hidden")}function h(){a&&a.classList.add("is-hidden")}function g(o,l="error"){l==="error"?m.error({title:"Error",message:o,position:"topRight"}):l==="success"?m.success({title:"Success",message:o,position:"topRight"}):l==="warning"?m.warning({title:"Warning",message:o,position:"topRight"}):m.info({title:"Info",message:o,position:"topRight"})}function y(o,l=""){const n=[e];s&&n.push(s),t&&n.push(t);const d=A.querySelector(".custom-feedback-message");if(d&&d.remove(),o==="error"||o==="no-feedback"){n.forEach(u=>{u&&(u.style.display="none")});const i=A.querySelector(".feedback-container");if(i){const u=document.createElement("p");u.className="custom-feedback-message",u.style.textAlign="center",u.style.padding="20px",o==="error"?(u.style.color="red",u.textContent=l||"Error loading feedbacks."):u.textContent=l||"There are no feedbacks yet.",e&&e.parentNode===i?e.insertAdjacentElement("afterend",u):i&&i.appendChild(u)}}else n.forEach(i=>{i&&(i.style.display="")});r&&o==="clear"&&(r.innerHTML="")}function S(o){const n=parseFloat(o);if(isNaN(n)){let b="";const J='<svg class="feedback-card__star" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>';for(let D=0;D<5;D++)b+=J;return b}const d=Math.floor(n);let i="";const u=`<svg class="feedback-card__star feedback-card__star--filled" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M9.07088 1.31791C9.41462 0.501451 10.5854 0.501452 10.9291 1.31791L12.9579 6.1368C13.1029 6.481 13.4306 6.71618 13.8067 6.74597L19.0727 7.16304C19.9649 7.23371 20.3267 8.3337 19.6469 8.90897L15.6348 12.3042C15.3482 12.5468 15.223 12.9273 15.3106 13.2899L16.5363 18.3666C16.744 19.2267 15.7969 19.9066 15.033 19.4457L10.5245 16.7251C10.2025 16.5308 9.7975 16.5308 9.47548 16.7251L4.96699 19.4457C4.20311 19.9066 3.25596 19.2267 3.46363 18.3666L4.68942 13.2899C4.77698 12.9273 4.65182 12.5468 4.36526 12.3042L0.353062 8.90897C-0.326718 8.3337 0.0350679 7.23371 0.927291 7.16304L6.19336 6.74597C6.5695 6.71618 6.89716 6.481 7.04207 6.1368L9.07088 1.31791Z" fill="#764191"/>
</svg>`,$=`<svg class="feedback-card__star" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M9.07082 1.31791C9.41456 0.501451 10.5853 0.501452 10.9291 1.31791L12.9578 6.1368C13.1028 6.481 13.4305 6.71618 13.8066 6.74597L19.0726 7.16304C19.9648 7.23371 20.3266 8.3337 19.6468 8.90897L15.6347 12.3042C15.3482 12.5468 15.2229 12.9273 15.3105 13.2899L16.5363 18.3666C16.7439 19.2267 15.7968 19.9066 15.0329 19.4457L10.5245 16.7251C10.2024 16.5308 9.79744 16.5308 9.47542 16.7251L4.96693 19.4457C4.20305 19.9066 3.25589 19.2267 3.46357 18.3666L4.68936 13.2899C4.77692 12.9273 4.65176 12.5468 4.36519 12.3042L0.353001 8.90897C-0.326779 8.3337 0.0350068 7.23371 0.92723 7.16304L6.19329 6.74597C6.56944 6.71618 6.89709 6.481 7.04201 6.1368L9.07082 1.31791Z" fill="white"/>
</svg>`;for(let b=0;b<5;b++)i+=b<d?u:$;return i}function Y(o){const l=o.name||"Anonymous",n=o.descr||"No feedback.",d=o.rating,i=S(d);return`
            <li class="splide__slide feedback-card">
                <div class="feedback-card__stars">${i!==void 0?i:""}</div>
                <p class="feedback-card__text">${n}</p>
                <p class="feedback-card__author">${l}</p>
            </li>
        `}function O(o){if(p){try{p.destroy()}catch{}p=null}if(e&&o!==0){e.querySelector('[data-glide-el="controls[nav]"]')||e.querySelector(".splide__pagination");try{p=new N(e,{type:"slide",perPage:1,arrows:!!s,pagination:!!t,drag:!0,keyboard:"global"}),p.on("mounted",()=>{}),p.on("move",(l,n,d)=>{}),p.mount(),window.myTestSplide=p}catch{}}}async function W(){var o,l;L(),y("clear");try{const n=await k.get(c);if(!n.data||typeof n.data!="object"||!Array.isArray(n.data.data))throw new Error("Incorrect data type from server.");let d=n.data.data;if(d.length===0){y("no-feedback","There is no feedbacks yet."),h();return}y("success");const i=d.slice(0,f);if(r)r.innerHTML=i.map(Y).join("");else throw new Error("Show error: there is no .splide__list.");O(i.length)}catch(n){const d=((l=(o=n.response)==null?void 0:o.data)==null?void 0:l.message)||n.message||"Unknown error.";y("error",`Error: ${d}`),g(`Failed to fetch or display feedbacks: ${d}`,"error")}finally{h()}}e&&r?W():a&&h()});const w=document.querySelector(".mobile-menu"),z=document.querySelector(".js-mobile-menu"),AA=document.querySelector(".js-mobile-close-menu");z.onclick=()=>w.classList.add("is-open");AA.onclick=()=>w.classList.remove("is-open");document.addEventListener("keydown",A=>{A.key==="Escape"&&w.classList.remove("is-open")});w.querySelectorAll('a[href^="#"]').forEach(A=>{A.onclick=()=>w.classList.remove("is-open")});const eA=document.querySelector(".art-modal");function tA(A,e){const{intDiedYear:r,intFormedYear:s,intMembers:t,strArtist:a,strArtistThumb:c,strBiographyEN:f,strCountry:p,strGender:L,tracksList:h}=A,g=e.map(S=>`<div class="art-modal-gener"><p>${S}</p></div>`).join(""),y=`
            <button class="modal-close-btn" type="button">
              <svg class="close-icon" width="32" height="32">
                <use href="/artists-hub/assets/sprite-c2qr3u0C.svg#icon-Close"></use>
              </svg>
            </button>
            <h2 class="art-modal-name">${a}</h2>
            <div class="art-modal-wrapper">
              <div class="art-modal-wrapper-item">
                <div class="art-modal-item-img">
                  <img
                    src="${c}"
                    alt="${a}"
                    class="art-modal-img"
                  />
                </div>
              </div>
              <div class="art-modal-wrapper-item">
                <div class="art-modal-titles">
                  <p class="art-modal-live">
                    Years active <br />
                    <span>${s}-${r||"present"}</span>
                  </p>
                  <p class="art-modal-sex">
                    Sex <br />
                    <span>${L}</span>
                  </p>
                  <p class="art-modal-members">
                    Members <br />
                    <span>${t}</span>
                  </p>
                  <p class="art-modal-country">
                    Country <br />
                    <span>${p}</span>
                  </p>
                  <p class="art-modal-biography">
                    Biography <br />
                    <span>${f}</span>
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
                ${sA(h)}
              </div>
              </div>
            `;eA.insertAdjacentHTML("beforeend",y)}function sA(A){const e=oA(A);return Object.keys(e).map(t=>`<div class="art-modal-albums-card">
            <h4 class="art-modal-albums-card-title">${t}</h4>
            <div class="art-modal-albums-card-names">
              <p>Track</p>
              <p>Time</p>
              <p>Link</p>
            </div>
            <div class="art-modal-albums-card-block">
              ${rA(e,t)}
            </div>
        </div>`).join("")}function rA(A,e){return A[e].map(({strTrack:r,intDuration:s,movie:t})=>{const a=aA(s),c=t!=null&&t.startsWith("http")?`<a href="${t}" target="_blank">
               <svg class="close-icon" width="24" height="25">
                 <use href="/artists-hub/assets/sprite-c2qr3u0C.svg#icon-Youtube"></use>
               </svg>
             </a>`:"";return`
          <div class="art-modal-albums-card-item">
            <p class="art-modal-albums-card-track">${r}</p>
            <p class="art-modal-albums-card-duration">${a}</p>
            <p class="art-modal-albums-card-link">${c}</p>
          </div>`}).join("")}function aA(A){const e=Math.floor(A/1e3),r=Math.floor(e/60),s=e%60;return`${r}:${s.toString().padStart(2,"0")}`}function oA(A){const e={};return A.forEach(r=>{const s=r.strAlbum;e[s]||(e[s]=[]),e[s].push(r)}),e}async function nA(A){const r=`https://sound-wave.b.goit.study/api/artists/${A}`;try{return(await k.get(r)).data}catch(s){throw m.warning({message:`Request error: ${s.message}`,position:"center"}),s}}const iA=document.querySelector(".art-modal"),v=document.querySelector(".backdrop"),x=document.querySelector(".modal-loader");document.addEventListener("DOMContentLoaded",()=>{const A=document.querySelector(".artists-list");A&&A.addEventListener("click",e=>{e.target.closest(".artists-learn-more-btn")&&cA(e)})});async function cA(A){A.preventDefault();const r=A.target.closest(".artists-learn-more-btn").closest(".artists-item"),s=r.querySelector(".artists-img"),t=s==null?void 0:s.dataset.id;if(t)try{const a=Array.from(r.querySelectorAll(".artists-box-genres .artists-genre")).map(f=>f.textContent);dA();const c=await nA(t);if(uA(),!c||!c.strArtist){m.warning({message:"Sorry, but no artist was found",position:"center"});return}iA.innerHTML="",tA(c,a),lA()}catch{m.error({message:"Failed to load artist data",position:"center"})}}function lA(){v.classList.add("is-visible"),document.body.style.overflow="hidden",window.addEventListener("keydown",F)}function T(){v.classList.remove("is-visible"),document.body.style.overflow="",window.removeEventListener("keydown",F)}function F(A){A.key==="Escape"&&T()}v.addEventListener("click",A=>{(A.target===v||A.target.closest(".modal-close-btn"))&&T()});function dA(){x.hidden=!1}function uA(){x.hidden=!0}
//# sourceMappingURL=index.js.map
