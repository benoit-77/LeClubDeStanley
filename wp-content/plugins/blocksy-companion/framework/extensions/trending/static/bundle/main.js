!function(){"use strict";function t(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||n(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(t,e)||n(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={},l=function(t){return c[t]?new Promise((function(e){e(c[t]),window.ct_customizer_localizations||(c[t]=c[t].clone())})):new Promise((function(e){return fetch(t).then((function(n){e(n),window.ct_customizer_localizations||(c[t]=n.clone())}))}))},s=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if((n=a({el:null,action:null},n)).el&&n.action&&!n.el.classList.contains("ct-loading")){var r=parseInt(n.el.dataset.page,10);if(("prev"!==n.action||1!==r)&&!(n.el.querySelectorAll(".ct-container > a").length<4&&1===r||n.el.dataset.page.indexOf("last")>-1&&"next"===n.action)){n.el.classList.add("ct-loading");var o="prev"===n.action?r-1:r+1;Promise.all([new Promise((function(t){n.el.classList.add("ct-leave-active"),requestAnimationFrame((function(){n.el.classList.remove("ct-leave-active"),n.el.classList.add("ct-leave"),setTimeout((function(){return t()}),650)}))})),l("".concat(ct_localizations.ajax_url,"?action=blocksy_get_trending_posts&page=").concat(o)).then((function(t){return t.json()}))]).then((function(r){var a=e(r,2),i=(a[0],a[1]),c=i.success,l=i.data;if(c){var s=l.posts,u=s.is_last_page,f=s.posts;n.el.dataset.page="".concat(o).concat(u?":last":""),t(n.el.querySelectorAll("a")).map((function(t){return t.remove()})),f.map((function(t){return n.el.insertAdjacentHTML("beforeend",'<a href="'.concat(t.url,'">\n                        ').concat(t.image,'\n                        <span class="ct-item-title">\n                         ').concat(t.title,"\n                        </span>\n                    </a>"))})),setTimeout((function(){n.el.classList.remove("ct-leave"),n.el.classList.add("ct-enter-active"),requestAnimationFrame((function(){n.el.classList.remove("ct-enter-active"),n.el.classList.add("ct-active"),setTimeout((function(){n.el.classList.remove("ct-active"),n.el.classList.remove("ct-loading")}),650)}))}),50)}}))}}};(0,window.ctFrontend.registerDynamicChunk)("blocksy_ext_trending",{mount:function(t,e){e.event;var n=t.closest("[data-page]");t.classList.contains("ct-arrow-left")&&s({el:n,action:"prev"}),t.classList.contains("ct-arrow-right")&&s({el:n,action:"next"})}})}();