function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired76b;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired76b=r),r("dyJsF"),r("gjiCh"),r("iL99u");var i=r("cQLOM"),s=r("7NfYK"),l=r("fb9GJ"),a=r("gjiCh"),c=r("iL99u"),u=r("1OlOi");const d=new(0,a.Spinner)(".spinner"),f=document.querySelector("#pagination"),h=new(0,i.default),m=document.querySelector(".form__input"),v=document.querySelector(".search__error-text");m.addEventListener("submit",(function(t){t.preventDefault();let n=1;const o=t.currentTarget.searchQuery.value;d.addSpinner(),h.getFilms("search",n,o).then((t=>{if(0===t.results.length)return v.classList.remove("visually-hidden"),setTimeout((()=>{v.classList.add("visually-hidden")}),4500),void d.removeSpinner();(0,c.saveDataToLocalStorage)(u.FILMS_DATA,t.results),(0,s.renderFilmsToGallery)(t.results),d.removeSpinner();const r=new(e(l))(f,{totalItems:`${t.total_results}`,itemsPerPage:20,visiblePages:5,centerAlign:!0});r.reset(t.total_results),r.on("beforeMove",(e=>{d.addSpinner(),n=e.page,h.getFilms("search",n,o).then((e=>{e.results&&((0,s.renderFilmsToGallery)(e.results),(0,c.saveDataToLocalStorage)(u.FILMS_DATA,e.results),window.scrollTo({behavior:"smooth",top:0}),d.removeSpinner())}))}))})).catch((e=>console.log(e))).finally(m.reset())})),r("1OlOi");({el:document.querySelector(".btn-up"),show(){this.el.classList.remove("btn-up_hide")},hide(){this.el.classList.add("btn-up_hide")},addEventListener(){window.addEventListener("scroll",(()=>{(window.scrollY||document.documentElement.scrollTop)>800?this.show():this.hide()})),document.querySelector(".btn-up").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener();(function e(t,n,o){function r(s,l){if(!n[s]){if(!t[s]){var a=void 0;if(!l&&a)return a(s,!0);if(i)return i(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[s]={exports:{}};t[s][0].call(u.exports,(function(e){return r(t[s][1][e]||e)}),u,u.exports,e,t,n,o)}return n[s].exports}for(var i=void 0,s=0;s<o.length;s++)r(o[s]);return r})({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},r=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},i=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=i,n.create=function(e,t){var n=function(e,t){var n=o('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return i.appendChild(e)}));var s=r(i,"IMG"),l=r(i,"VIDEO"),a=r(i,"IFRAME");return!0===s&&n.classList.add("basicLightbox--img"),!0===l&&n.classList.add("basicLightbox--video"),!0===a&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(o(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),s=function(e){return!1!==t.onClose(l)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(l)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&s()}));var l={element:function(){return n},visible:function(){return i(n)},show:function(e){return!1!==t.onShow(l)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(l)}))},close:s};return l}},{}]},{},[1])(1),r("cQLOM"),r("bTcpz"),r("9J6qy"),r("8IhTY");
//# sourceMappingURL=index.ccaff860.js.map
