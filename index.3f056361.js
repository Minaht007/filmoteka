function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},n={},s=t.parcelRequired76b;null==s&&((s=function(e){if(e in l)return l[e].exports;if(e in n){var t=n[e];delete n[e];var s={id:e,exports:{}};return l[e]=s,t.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired76b=s),s("kyEFX").register(JSON.parse('{"5ZPII":"index.3f056361.js","8OQ7p":"icons.d81bbf5a.svg","2KMwB":"photo1.d33c0ec1.jpg","84VuV":"photo0.35093348.jpg","2abUg":"photo3.16145156.jpg","SSvgu":"photo7.88afb516.jpg","iQOHb":"photo11.4c1b2cc6.jpg","3mEuC":"library.b4861dd8.css","cfVHV":"library.5ca55b8e.js"}')),s("dyJsF"),s("gjiCh"),s("iL99u");var i=s("cQLOM"),a=s("7NfYK"),o=s("fb9GJ"),d=s("gjiCh"),r=s("iL99u"),m=s("1OlOi");const c=new(0,d.Spinner)(".spinner"),u=document.querySelector("#pagination"),_=new(0,i.default),g=document.querySelector(".form__input"),h=document.querySelector(".search__error-text");g.addEventListener("submit",(function(t){t.preventDefault();let l=1;const n=t.currentTarget.searchQuery.value;c.addSpinner(),_.getFilms("search",l,n).then((t=>{if(0===t.results.length)return h.classList.remove("visually-hidden"),setTimeout((()=>{h.classList.add("visually-hidden")}),4500),void c.removeSpinner();(0,r.saveDataToLocalStorage)(m.FILMS_DATA,t.results),(0,a.renderFilmsToGallery)(t.results),c.removeSpinner();const s=new(e(o))(u,{totalItems:`${t.total_results}`,itemsPerPage:20,visiblePages:5,centerAlign:!0});s.reset(t.total_results),s.on("beforeMove",(e=>{c.addSpinner(),l=e.page,_.getFilms("search",l,n).then((e=>{e.results&&((0,a.renderFilmsToGallery)(e.results),(0,r.saveDataToLocalStorage)(m.FILMS_DATA,e.results),window.scrollTo({behavior:"smooth",top:0}),c.removeSpinner())}))}))})).catch((e=>console.log(e))).finally(g.reset())})),s("1OlOi");({el:document.querySelector(".btn-up"),show(){this.el.classList.remove("btn-up_hide")},hide(){this.el.classList.add("btn-up_hide")},addEventListener(){window.addEventListener("scroll",(()=>{(window.scrollY||document.documentElement.scrollTop)>800?this.show():this.hide()})),document.querySelector(".btn-up").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener();var v;v=new URL(s("kyEFX").resolve("8OQ7p"),import.meta.url).toString();var p;p=new URL(s("kyEFX").resolve("2KMwB"),import.meta.url).toString();var f;f=new URL(s("kyEFX").resolve("84VuV"),import.meta.url).toString();var b;b=new URL(s("kyEFX").resolve("2abUg"),import.meta.url).toString();var y;y=new URL(s("kyEFX").resolve("SSvgu"),import.meta.url).toString();var L;L=new URL(s("kyEFX").resolve("iQOHb"),import.meta.url).toString();const S=[{name:"Aleks Pastukhov",text:"1",img:e(p),ml:"#",tg:"#",ln:"#",git:"#"},{name:"Nikita Osokin",text:"2",img:e(f),ml:"#",tg:"#",ln:"#",git:"# "},{name:"Anastasia Knihnitska",text:"3",img:e(b),ml:"#",tg:"#",ln:"#",git:"#"},{name:"Oleh Buhaichuk",text:"4",img:e(f),ml:"#",tg:"#",ln:"#",git:"#"},{name:"Ivan Chmil",text:"5",img:e(f),ml:"ivan.chmil.98@gmail.com",tg:"https://t.me/slava_zevsu",ln:"https://www.linkedin.com/in/ivan-chmil-u/",git:"https://github.com/W1n-chester"},{name:"Oleksandr Filippov",text:"6",img:e(f),ml:"#",tg:"#",ln:"#",git:"#"},{name:"Andrey Telnov",text:"7",img:e(y),ml:"#",tg:"#",ln:"#",git:"#"},{name:"Mykhaylo Yervachov",text:"8",img:e(f),ml:"#",tg:"#",ln:"#",git:"#"},{name:"Mykhailo Vasyliuk",text:"9",img:e(f),ml:"#",tg:"#",ln:"#",git:"#"},{name:"Slava Antolyk",text:"10",img:e(f),ml:"#",tg:"#",ln:"#",git:"#"},{name:"Bohdan Hromchak",text:"11",img:e(L),ml:"#",tg:"#",ln:"#",git:"#"},{name:"Egor",text:"12",img:e(f),ml:"#",tg:"#",ln:"#",git:"#"},{name:"Kostya",text:"13",img:e(f),ml:"#",tg:"#",ln:"#",git:"#"}],k={openModalBtn:document.querySelector(".footer__but"),closeModalBtn:document.querySelector("[data-modal-students-close]"),modal:document.querySelector("[data-modal-students]"),tumb:document.querySelector(".inverted_tumb"),btnLeft:document.querySelector(".modal_students_slide_left"),btnRight:document.querySelector(".modal_students_slide_right")};k.openModalBtn.addEventListener("click",(function(){k.modal.classList.remove("visually-hidden"),k.tumb.innerHTML=(t=S,` <img class="modal_foto img" src="${t[0].img}" alt="" width="200" height="200" />\n      <div>\n        <h3 class="modal_students_name">${t[0].name}</h3>\n        <ul class="modal_list">\n          <li class="modal_list_item">\n            <a class="modal_list_link" href="mailto:${t[0].ml}">\n              <div class="modal_list_con">\n                <svg class="modal_list_icon" width="15" height="15">\n                  <use href="${e(v)}#icon-envelope"></use>\n                </svg>\n              </div>\n              <span class="modal_list_text" >      \n                 E-mail\n              </span></a>\n          </li>\n          <li class="modal_list_item">\n            <a class="modal_list_link" href="${t[0].tg}">\n              <div class="modal_list_con">\n                <svg class="modal_list_icon" width="15" height="15">\n                  <use href="${e(v)}#icon-send"></use>\n                </svg>\n              </div><span class="modal_list_text">\n                 Telegram </span></a>\n          </li>\n          <li class="modal_list_item">\n            <a class="modal_list_link" href="${t[0].ln}">\n              <div class="modal_list_con">\n                <svg class="modal_list_icon" width="15" height="15">\n                  <use href="${e(v)}#icon-linkedin"></use>\n                </svg>\n              </div>\n                <span class="modal_list_text">\n                 Linkedin    \n              </span></a>\n          </li>\n          <li class="modal_list_item">\n            <a class="modal_list_link" href="${t[0].git}">\n              <div class="modal_list_con">\n                <svg class="modal_list_icon" width="15" height="15">\n                  <use href="${e(v)}#icon-github"></use>\n                </svg>\n              </div>\n                <span class="modal_list_text">\n                 GitHub    \n             </span></a>\n          </li>\n        </ul>\n      </div>`);var t})),k.closeModalBtn.addEventListener("click",(function(){k.modal.classList.add("visually-hidden"),k.btnLeft.classList.add("visually-hidden"),k.btnRight.classList.remove("visually-hidden"),w=0})),k.btnRight.addEventListener("click",(function(){w+=1,k.tumb.innerHTML=E(S,w),console.log(w),w>=1&&k.btnLeft.classList.remove("visually-hidden");w>=12&&k.btnRight.classList.add("visually-hidden")})),k.btnLeft.addEventListener("click",(function(){w-=1,k.tumb.innerHTML=E(S,w),w>=1&&k.btnRight.classList.remove("visually-hidden");w<=0&&k.btnLeft.classList.add("visually-hidden")}));let w=0;function E(t,l){return` <img class="modal_foto img" src="${t[l].img}" alt="" width="200" height="200" />\n      <div>\n        <h3 class="modal_students_name">${t[l].name}</h3>\n        <ul class="modal_list">\n          <li class="modal_list_item">\n            <a class="modal_list_link" href="mailto:${t[l].ml}" target="_blank">\n              <div class="modal_list_con">\n                <svg class="modal_list_icon" width="15" height="15">\n                  <use href="${e(v)}#icon-envelope"></use>\n                </svg>\n              </div>\n              <span class="modal_list_text" >      \n                 E-mail\n              </span></a>\n          </li>\n          <li class="modal_list_item">\n            <a class="modal_list_link" href="${t[l].tg}" target="_blank">\n              <div class="modal_list_con">\n                <svg class="modal_list_icon" width="15" height="15">\n                  <use href="${e(v)}#icon-send"></use>\n                </svg>\n              </div><span class="modal_list_text">\n                 Telegram </span></a>\n          </li>\n          <li class="modal_list_item">\n            <a class="modal_list_link" href="${t[l].ln}" target="_blank">\n              <div class="modal_list_con">\n                <svg class="modal_list_icon" width="15" height="15">\n                  <use href="${e(v)}#icon-linkedin"></use>\n                </svg>\n              </div><span class="modal_list_text">\n                 Linkedin    \n              </span></a>\n          </li>\n          <li class="modal_list_item">\n            <a class="modal_list_link" href="${t[l].git}" target="_blank">\n              <div class="modal_list_con">\n                <svg class="modal_list_icon" width="15" height="15">\n                  <use href="${e(v)}#icon-github"></use>\n                </svg>\n              </div><span class="modal_list_text">\n                 GitHub    \n             </span></a>\n          </li>\n        </ul>\n      </div>`}s("37v9V"),s("bTcpz"),s("9J6qy"),s("8IhTY"),s("ghT7p");
//# sourceMappingURL=index.3f056361.js.map