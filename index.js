import{a as m,i as c}from"./assets/vendor-DSJL_ovD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();function p(s){const r=s.map(({strArtist:i,strBiographyEN:t,strArtistThumb:e,_id:n,genres:l})=>{const u=l.flatMap(o=>o.split("/")).map(o=>o.trim()),d=[...new Set(u)].map(o=>`<span class="artists-genre">${o}</span>`).join("");return`
        <li class="artists-item">
            <div class="artists-box-img">
              <img
                data-id="${n}"
                src="${e}"
                alt="${i}"
                class="artists-img"
              />
            </div>

            <div class="artists-box-genres">
            ${d}
            </div>

            <div class="artists-content">
              <h4 class="artists-name">${i}</h4>
              <p class="artists-descr">${t}</p>
              <button type="button" class="artists-learn-more-btn">
                Learn More
              </button>
            </div>
          </li>
    `}).join("");document.querySelector(".artists-list").insertAdjacentHTML("beforeend",r)}const f=8;async function g(s="artists",r={limit:f}){const i=`https://sound-wave.b.goit.study/api/${s}`;try{return(await m.get(i,{params:r})).data}catch(t){throw c.warning({message:`Request error: ${t.message}`,position:"center"}),t}}async function y(){const s=await g();s.artists.length===0&&c.warning({message:"Sorry, but no artists were found",position:"center"}),p(s.artists)}y();document.querySelectorAll(".js-mobile-menu").forEach(s=>{s.addEventListener("click",()=>{document.querySelector(".mobile-menu").classList.toggle("is-open")})});
//# sourceMappingURL=index.js.map
