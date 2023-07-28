"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function setCorrectChoices(){var e,t,r,o;e=document.querySelectorAll(".default-select"),t=document.querySelectorAll(".catalog-cards__top-line select"),r=document.querySelectorAll(".data-field__select-block select"),e.forEach((function(e){var t=new Choices(e,{searchEnabled:!1,shouldSort:!1,itemSelectText:"",classNames:{item:"options-link__elem",itemSelectable:"options-link__elem_active"}});"select-city-mobile"===e.id&&e.addEventListener("change",(function(){var r,o=t.getValue().label;(null===(r=e.closest(".menu-field"))||void 0===r?void 0:r.querySelector(".menu-field__title")).innerText=o}))})),new Choices(document.querySelector(".menu-mobile select"),{searchEnabled:!1,shouldSort:!1,itemSelectText:"",classNames:{item:"options-link__elem",itemSelectable:"options-link__elem_active"}}),t.forEach((function(e){new Choices(e,{searchEnabled:!1,shouldSort:!1,itemSelectText:"",classNames:{item:"catalog-cards__elem",itemChoice:"catalog-cards__elem_choice",itemSelectable:"catalog-cards__elem_active"}})})),r.forEach((function(e){new Choices(e,{searchEnabled:!1,shouldSort:!1,itemSelectText:""})})),(o=document.querySelectorAll(".dropdown")).forEach((function(e){var t=function t(r){Boolean(r.target.closest(".dropdown-list"))||(e.classList.remove("active"),document.removeEventListener("click",t))};e.addEventListener("click",(function(r){r.stopPropagation(),o.forEach((function(t){t!==e&&t.classList.remove("active")}));var n=e.querySelector(".dropdown__title"),c=e.nextElementSibling.querySelectorAll(".dropdown-item");e.classList[window.matchMedia("(pointer: fine)").matches?"toggle":"add"]("active"),e.classList.contains("dropdown-select")&&c.forEach((function(t){t.addEventListener("click",(function(){n.textContent=t.textContent,n.classList.add("selected"),e.classList.remove("active")}))})),document.addEventListener("click",t)}))}))}function setCorrectMenuAccordeon(){var e=document.querySelectorAll(".menu-drop");e.forEach((function(t){var r=t.querySelectorAll(".inner-list-item");t.addEventListener("click",(function(){e.forEach((function(e){e!==t&&e.classList.remove("active")})),t.classList.toggle("active")})),r.forEach((function(e){e.addEventListener("click",(function(e){e.stopPropagation()}))}))}))}function setCorrectBurger(){var e=document.querySelector(".burger"),t=document.querySelector(".menu-mobile");e.addEventListener("click",(function(){t.classList.add("active"),document.body.classList.add("unscroll")}))}function setCorrectMobileMenus(){document.querySelectorAll(".menu-mobile").forEach((function(e){var t=e.querySelector(".menu__close");e.addEventListener("swiped-left",(function(){e.classList.remove("active"),document.body.classList.remove("unscroll")})),t.addEventListener("click",(function(){e.classList.remove("active"),document.body.classList.remove("unscroll")}))}))}function setCorrectSliders(){!function(){var e=document.querySelectorAll(".products-slider");if(e.length)for(var t=e.length,r=function(){var t=e[o],r=new Swiper(t,{allowTouchMove:!0,grabCursor:!0,simulateTouch:!1,preventClicks:!1,preventClicksPropagation:!1,pagination:{el:".products-".concat(o+1,"__pagination"),clickable:!0},navigation:{prevEl:".products-".concat(o+1,"-arrow-prev"),nextEl:".products-".concat(o+1,"-arrow-next"),disabledClass:"disable"}});if(window.matchMedia("(max-width: 910px)").matches){var n=t.querySelector(".products-slider__wrapper"),c=Array.from(t.querySelectorAll(".products-slider__slide")),i=t.querySelectorAll(".product-card"),a=4,s=t.closest("section").dataset.maxSlidesOnSlide;s&&(a=Number(s));var l=i.length/a;if(0!==c.at(-1).children.length)for(var u=0;u<l;u++){if(void 0===c[u]){var d=document.createElement("div");d.classList.add("swiper-slide","products-cards","products-slider__slide"),c.push(d),n.append(d)}}r.update();for(var m=0;m<l;m++){var f=c[m];f.children.length>a&&Array.from(f.children).slice(a).forEach((function(e){var t;null===(t=c.find((function(e){return Array.from(e.children).length<a})))||void 0===t||t.append(e)}))}}},o=0;o<t;o++)r()}(),function(){var e=document.querySelector(".welcome-slider");if(e)new Swiper(e,{pagination:{el:".welcome-slider-pagination",clickable:!0}})}(),function(){var e=document.querySelector(".forum-slider");if(e)new Swiper(e,{slidesPerView:1,spaceBetween:21,simulateTouch:!1,pagination:{el:".forum-slider-pagination",clickable:!0},breakpoints:{1400:{slidesPerView:3},1150:{slidesPerView:2}}})}(),function(){var e=document.querySelector(".favourite-slider");if(e)new Swiper(e,{slidesPerView:1,spaceBetween:20,simulateTouch:!1,navigation:{prevEl:".favourite-arrow-prev",nextEl:".favourite-arrow-next",disabledClass:"disable"},pagination:{el:".favourite-slider-pagination",clickable:!0},breakpoints:{1280:{slidesPerView:3},510:{slidesPerView:2}}})}(),function(){var e=document.querySelector(".product-main-slider");if(e){var t=document.querySelector(".product-thumbs-slider"),r=new Swiper(t,{slidesPerView:3,spaceBetween:9,slideToClickedSlide:!0});new Swiper(e,{grabCursor:!0,thumbs:{swiper:r,slideThumbActiveClass:"active-thumb"}})}}(),function(){var e=document.querySelector(".reviews-slider");if(e){var t=new Swiper(e,{allowTouchMove:!0,grabCursor:!0,simulateTouch:!1,preventClicks:!1,preventClicksPropagation:!1,speed:500,navigation:{prevEl:".reviews-area__arrow_prev",nextEl:".reviews-area__arrow_next",disabledClass:"disable"}});if(window.matchMedia("(max-width: 1000px)").matches){var r=t.slides[0];Array.from(t.slides).slice(1).forEach((function(e){Array.from(e.children).forEach((function(e){var t=e.cloneNode(!0);t.classList.add("hide"),r.append(t),e.remove()})),e.remove()})),t.update()}}}()}function setCorrectFavourites(){document.querySelectorAll(".product-to-favourite").forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault(),e.classList.toggle("active")}))}))}function setCorrectMap(){ymaps.ready((function(){var e=new ymaps.Map("map-view",{center:[49.83633,24.027426],zoom:19}),t=new ymaps.Placemark([49.83629,24.026669],{balloonContent:"Мы находимся здесь :)"},{iconLayout:"default#image",iconImageHref:"../images/src/map-hint-icon.svg",iconImageSize:[30,42],iconImageOffset:[-5,-38]});e.geoObjects.add(t),e.controls.remove("geolocationControl"),e.controls.remove("searchControl"),e.controls.remove("trafficControl"),e.controls.remove("typeSelector"),e.controls.remove("fullscreenControl"),e.controls.remove("zoomControl"),e.controls.remove("rulerControl"),window.matchMedia("(max-width: 800px)").matches&&e.setCenter([49.83629,24.026669]);window.matchMedia("(max-width: 670px)").matches&&e.setCenter([49.836146,24.026682])}))}function setCorrectPopups(){var e=document.querySelectorAll(".trigger"),t=[".options",".header",".main",".footer"],r=function(){document.body.classList.remove("unscroll"),n()},o=function(){return t.forEach((function(e){document.querySelector(e).inert=!0}))},n=function(){return t.forEach((function(e){document.querySelector(e).inert=!1}))};e.forEach((function(e){e.addEventListener("click",(function(t){t.stopImmediatePropagation();var n=e.dataset.popupSelector,c=document.querySelector(n),i=c.querySelectorAll(".click-and-hide"),a=Array.from(c.querySelectorAll("input[required]"));c&&(i&&i.forEach((function(e){e.addEventListener("click",(function(){a.every((function(e){return e.checkValidity()}))?(a.forEach((function(e){return e.value=""})),c.classList.remove("active"),r()):alert("Введите номер телефона!")}))})),c.classList.add("active"),document.body.classList.add("unscroll"),o(),document.addEventListener("mousedown",(function(e){e.target.closest(".popup__content")||(e.target.closest(".popup").classList.remove("active"),document.querySelector(".popup.active")||r())})))}))}))}function setCorrectInputMasks(){var e=new Inputmask("+380-(99)-99-99-999",{clearMaskOnLostFocus:!0});document.querySelectorAll('input[type="tel"]').forEach((function(t){e.mask(t)}))}function setCorrectCatalogFilters(){var e;(e=document.querySelectorAll(".catalog-opts__inner-item"))&&e.forEach((function(e){e.addEventListener("click",(function(){e.classList.toggle("active")}))})),function(){var e=document.querySelector(".filter-button");if(e){var t=document.querySelector(".menu-filter"),r=t.querySelectorAll(".menu-filter__button"),o=t.querySelector(".menu-filter__reset");e.addEventListener("click",(function(){t.classList.toggle("active")})),r.forEach((function(e){var t=e.dataset.optionsPopup,r=document.querySelector(t),n=e.querySelector(".menu-field__value-label"),c=n.innerText;e.addEventListener("click",(function(){r.classList.toggle("active")})),r.addEventListener("click",(function(e){if(e.stopPropagation(),e.target.closest(".filter-options__close")||e.target.classList.contains("filter-options__row"))r.classList.remove("active");else{var t=e.target.closest(".filter-options-list__item");if(t){var o=t.innerText;n.innerText=o,r.classList.remove("active")}}})),o.addEventListener("click",(function(){n.innerText=c}))}))}}()}function setCorrectLoadMore(){var e=document.querySelector(".load-more");if(e){var t=e.dataset.whatIs,r={products:["товар","товара","товаров"],reviews:["отзыв","отзыв","отзывов"],news:["новость","новости","новостей"],"photos-reviews":["фотоотзыв","фотоотзыва","фотоотзывов"],"videos-reviews":["видоотзыв","видеоотзыва","видеоотзывов"]},o=e.querySelector(".load-more__count"),n=document.getElementsByClassName("hide"),c=function(e,t,r,o){var n=Math.abs(e);return(n%=100)>=5&&n<=20?o:1===(n%=10)?t:n>=2&&n<=4?r:o},i=function(e){0===e&&a(),o.innerText=e+" "+c.apply(void 0,[e].concat(_toConsumableArray(r[t])))},a=function(){e.style.display="none"},s=3;if(window.matchMedia("(max-width: 910px)").matches&&(s=2),window.matchMedia("(max-width: 640px)").matches&&["photos-reviews","videos-reviews"].includes(t)){var l=document.querySelectorAll(".forum-card");Array.from(l).slice(4).forEach((function(e){e.classList.add("hide")}))}setTimeout((function(){i(n.length)}),0),e.addEventListener("click",(function(){Array.from(n).slice(0,s).forEach((function(e){e.classList.remove("hide")})),i(n.length)}))}}function setCorrectCounterProducts(){var e=document.querySelectorAll(".product-counter");e.length&&e.forEach((function(e){var t=e.querySelector(".product-counter__value"),r=e.querySelector(".product-counter__plus"),o=e.querySelector(".product-counter__minus"),n=function(e){t.innerText=e},c=function(e){e>=a?r.classList.add("disabled"):r.classList.remove("disabled"),e<=i?o.classList.add("disabled"):o.classList.remove("disabled")},i=1,a=10,s=1;n(s),c(s),r.addEventListener("click",(function(){s+1>a||(n(++s),c(s))})),o.addEventListener("click",(function(){s-1<i||(n(--s),c(s))}))}))}function setCorrectTabs(){var e=document.querySelector(".tabs");if(e){var t=e.querySelectorAll(".tabs__tab"),r=e.querySelectorAll(".tabs-content__inner");t.forEach((function(e,o){e.addEventListener("click",(function(){var n;n=e,t.forEach((function(e,t){e!==n&&(e.classList.remove("active"),r[t].classList.remove("active"))})),e.classList.toggle("active"),r[o].classList.toggle("active")}))}))}}function setCorrectDateInputs(){var e=document.querySelectorAll(".date-input");e.length&&e.forEach((function(e){var t=new AirDatepicker(e,{minDate:new Date,buttons:["today"]});window.matchMedia("(max-width: 550px)").matches&&t.update({isMobile:!0})}))}function setCorrectAccordeon(){document.querySelectorAll(".questions-accordion").forEach((function(e){var t=e.querySelectorAll(".questions-accordion__item"),r=function(e){var t=e.querySelector(".questions-accordion__control"),r=e.querySelector(".questions-accordion__content");t.setAttribute("aria-expanded",!1),r.setAttribute("aria-hidden",!0),e.classList.remove("active"),r.style.maxHeight=null};t.forEach((function(e){e.addEventListener("click",(function(o){if(!o.target.closest(".questions-accordion__content")){var n,c=e.querySelector(".questions-accordion__control"),i=e.querySelector(".questions-accordion__content");n=e,t.forEach((function(e){e!==n&&r(e)})),e.classList.toggle("active"),e.classList.contains("active")?(c.setAttribute("aria-expanded",!0),i.setAttribute("aria-hidden",!1),i.style.maxHeight=i.scrollHeight+"px"):r(e)}}))}))}))}function setCorrectScrollbars(){var e=document.querySelector(".comments-widget__inner");if(e)new SimpleBar(e,{autoHide:!1})}function setCorrectFancybox(){Fancybox.bind("[data-fancybox]",{})}document.addEventListener("DOMContentLoaded",(function(){document.body.classList.remove("no-js"),document.body.classList.add("yes-js"),[setCorrectChoices,setCorrectMenuAccordeon,setCorrectBurger,setCorrectMobileMenus,setCorrectSliders,setCorrectSliders,setCorrectFavourites,setCorrectMap,setCorrectPopups,setCorrectInputMasks,setCorrectCatalogFilters,setCorrectLoadMore,setCorrectCounterProducts,setCorrectTabs,setCorrectDateInputs,setCorrectAccordeon,setCorrectScrollbars,setCorrectFancybox].forEach((function(e){try{e()}catch(e){console.error(e.message)}}))}));