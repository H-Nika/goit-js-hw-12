import{a as S,S as v,i as l}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();async function h(o,e){const r="42236651-09dd8ef8cae726de85d6e38a7",a="https://pixabay.com",t="/api/",s={key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e},i=`${a}${t}`;return(await S.get(i,{params:s})).data}function E(o){return o.hits.map(e=>` <a href="${e.largeImageURL}" class="image-card">
    <img src="${e.webformatURL}" alt="${e.tags}"/>
    <div class="caption">
    <ul class="caption-list"><li class="caption-text">Views <span>${e.views}</span></li>
    <li class="caption-text">Likes <span>${e.likes}</span></li>
    <li class="caption-text">Comments <span>${e.comments}</span></li>
    <li class="caption-text">Downloads <span>${e.downloads}</span></li>
    </ul>
    </div>
  </a>`).join("")}const $=document.querySelector("form"),p=document.querySelector(".gallery"),g=document.querySelector(".loader"),f=document.querySelector(".load-btn"),x={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250};let m=new v(".gallery a",x);m.on("show.simplelightbox");let c,n,y;$.addEventListener("submit",P);f.addEventListener("click",R);async function P(o){if(o.preventDefault(),p.innerHTML="",n=1,d(),c=o.target.elements.search.value.trim(),w(),!c){l.warning({title:"Caution",position:"topLeft",message:"This field is required"}),u();return}try{const e=await h(c,n);y=Math.ceil(e.total/15),L(e),m.refresh(),u(),b(),q(e)}catch(e){console.log(e),O()}o.target.reset()}function q(o){o.total||(l.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),d())}function L(o){const e=E(o);p.insertAdjacentHTML("beforeend",e)}async function R(o){d(),w(),n+=1;const e=await h(c,n);L(e),m.refresh(),u(),b(),M();const r=p.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:`${2*r}`})}function M(){n>=y&&(d(),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}function w(){g.classList.remove("is-hidden")}function u(){g.classList.add("is-hidden")}function b(){f.classList.remove("is-hidden")}function d(){f.classList.add("is-hidden")}function O(){l.error({title:"",message:"Sorry, maybe there are some issues with network connection!",position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map