!function(){const e=function(){"use strict";if(window.__ectimmers=window.__ectimmers||{},window.__ectimmers["ecom-4n38caeqqz"]=window.__ectimmers["ecom-4n38caeqqz"]||{},!this.$el)return;const e=this.$el,t=e.querySelector(".ecom-text_view-more-btn"),o=e.querySelector(".ecom-text_view-less-btn"),c=e.querySelector(".text-content.ecom-html");!c||(t&&t.addEventListener("click",()=>{c.classList.remove("ecom-text--is-mark"),c.style.maxHeight="",t.style.display="none",o.style.display=""}),o&&o.addEventListener("click",()=>{c.classList.add("ecom-text--is-mark"),c.style.maxHeight="var(--ecom-text-height)",o.style.display="none",t.style.display=""}))};document.querySelectorAll(".ecom-4n38caeqqz").forEach((function(t){e.call({$el:t,id:"ecom-4n38caeqqz",settings:{},isLive:!0})})),document.querySelectorAll(".ecom-wwgshkrkg3").forEach((function(t){e.call({$el:t,id:"ecom-wwgshkrkg3",settings:{},isLive:!0})})),document.querySelectorAll(".ecom-m1pgn0saqz").forEach((function(t){e.call({$el:t,id:"ecom-m1pgn0saqz",settings:{},isLive:!0})}))}(),function(){const e=function(){"use strict";if(window.__ectimmers=window.__ectimmers||{},window.__ectimmers["ecom-591f06l9fg"]=window.__ectimmers["ecom-591f06l9fg"]||{},!this.$el)return!1;const e=this.$el;this.settings.animation&&function(t){if(!e)return;const o=e.querySelector(".ecom__element--button");if(!o)return;let c=1e3*parseInt(t.settings.animation_loop_time)||6e3;window.__ectimmers["ecom-591f06l9fg"].ppdr8zve1=setInterval((function(){o.classList.add("animated"),setTimeout((function(){o.classList.remove("animated")}),1e3)}),c)}(this);var t=e.querySelector(".ecom__element--button");this.isLive&&t&&t.dataset.ecTrackingId&&t.addEventListener("click",(function(e){if(window.Shopify.analytics){e.preventDefault();let o=document.createElement("div");document.body.appendChild(o),o.click();let c=window.EComposer.PAGE||window.EComposer.TEMPLATE||window.EComposer.SECTION||window.EComposer.BLOCK||{};const i=Object.assign({button_id:t.id,tracking_id:t.dataset.ecTrackingId},c);Shopify.analytics.publish("ec_custom_events",i),t.cloneNode(!0).click()}}),{once:!0}),this.isLive&&t&&t.dataset.eventTrackingFb&&t.addEventListener("click",(function(e){window.fbq&&window.fbq("track",""+t.dataset.eventTrackingFb)}),{once:!0})};document.querySelectorAll(".ecom-591f06l9fg").forEach((function(t){e.call({$el:t,id:"ecom-591f06l9fg",settings:{animation:!1},isLive:!0})})),document.querySelectorAll(".ecom-97ya41u8nl").forEach((function(t){e.call({$el:t,id:"ecom-97ya41u8nl",settings:{animation:!1},isLive:!0})}))}(),function(){const e=function(){"use strict";window.__ectimmers=window.__ectimmers||{},window.__ectimmers["ecom-0exn848aah5f"]=window.__ectimmers["ecom-0exn848aah5f"]||{};const e=this.$el;if(!e||!this.isLive)return;const t=e.querySelector(".element__featured--wrapper-list");if(t){let e={top:0,left:0,x:0,y:0};const o=function(o){const c=o.clientX-e.x;t.scrollLeft=e.left-c},c=function(){t.removeEventListener("mousemove",o),t.removeEventListener("mouseup",c),t.style.cursor="default",t.style.removeProperty("user-select")},i=function(i){t.style.cursor="grabbing",t.style.userSelect="none",e={left:t.scrollLeft,top:t.scrollTop,x:i.clientX,y:i.clientY},t.addEventListener("mousemove",o),t.addEventListener("mouseup",c)};t.addEventListener("mousedown",i),t.addEventListener("mouseleave",c)}};document.querySelectorAll(".ecom-0exn848aah5f").forEach((function(t){e.call({$el:t,id:"ecom-0exn848aah5f",settings:{},isLive:!0})}))}(),function(){const e=function(){"use strict";window.__ectimmers=window.__ectimmers||{},window.__ectimmers["ecom-zpqizgqegw"]=window.__ectimmers["ecom-zpqizgqegw"]||{};const e=this.$el;if(!e)return;let t=this.settings.link_redirect,o=this.settings.hide_form_when_submit||!1,c=e.querySelector('.ecom-contact-form-file[type="file"]');const i=this.id;(function(){if(window.location.href.includes("contact_posted=true")){if(t&&t.href){let e=t.href;if(""==e)return!1;"_blank"===t.target?window.open(e):window.location.href=e}if(o){const t=e.querySelector(".ecom__contact-form-content");t&&(t.style.display="none")}}})(),window.location.href.includes(o);const n=e.querySelector("#ecom-contact-form-"+i);if(!n)return;const r=n.querySelector(".ecom__form-button");if(!r)return;c&&(n.setAttribute("enctype","multipart/form-data"),n.addEventListener("submit",(function(e){if(!c.value||""===c.value)return;e.preventDefault(),e.stopImmediatePropagation(),r.classList.add("ecom-ajax-loading","ecom-loading");const t=n.querySelector('input[type="file"]');let o=new FormData,i=window.location.origin,l=window.EComposer&&window.EComposer.proxy_path;const s=`${i}${l}/contact-form`;o.append("file",t.files[0]),t.value&&l&&fetch(s,{method:"POST",body:o}).then(e=>e.json()).then(e=>{if("success"===e.status){let o=t.name;t.remove();let c=document.createElement("input");c.value=e.src_file,c.type="hidden",c.name=o,n.appendChild(c),n.submit()}else alert("Notice: "+e.message)}).catch(e=>console.error(e)).finally((function(){r.classList.remove("ecom-ajax-loading","ecom-loading")}))})),c.addEventListener("change",(function(){this.files[0].size>10485760&&(this.value="",alert("File size exceeds the maximum allowed limit (10MB)."))})));let l=e.querySelectorAll(".ecom-required--checkbox");r.addEventListener("click",(function(e){l.length>0&&l.forEach((function(e){let t=e.querySelectorAll("input[type=checkbox]");if(0==t.length)return;let o=!1;t.forEach((function(e){e.checked&&(o=!0)})),o?t.forEach((function(e){e.required=!1})):t.forEach((function(e){e.required=!0}))}))})),n.dataset.ecTrackingId&&n.addEventListener("submit",(function(){window.Shopify&&window.Shopify.analytics&&Shopify.analytics.publish("ec_custom_events",{button_id:n.id,tracking_id:n.dataset.ecTrackingId})}),{once:!0})};document.querySelectorAll(".ecom-zpqizgqegw").forEach((function(t){e.call({$el:t,id:"ecom-zpqizgqegw",settings:{hide_form_when_submit:!0},isLive:!0})}))}(),function(){const e=function(){"use strict";var e,t,o;window.__ectimmers=window.__ectimmers||{},window.__ectimmers["ecom-ct6byhtspi"]=window.__ectimmers["ecom-ct6byhtspi"]||{};let c=this.$el;if(!c)return;let i=!0,n=c.querySelectorAll(".ecom-collection__product-variants"),r=this.isLive,l=null!=(e=this.settings.show_featured_media)&&e,s=null!=(t=this.settings.bage_sale)?t:"",a=null!=(o=this.settings.enable_progress_pagination)&&o,d=this.settings.price_type,u="bullets";const m=this.settings.slider_center,p=this.settings.slider_center__tablet,_=this.settings.slider_center__mobile;"progress"===this.settings.slider_pagination_style&&(u="progressbar");const f=this.settings.sale_badge_type;let w=this.settings.slider_speed,y=this.settings.slider_speed__tablet,h=this.settings.slider_speed__mobile;const v=function(e,t={},o=""){return window.innerWidth>1024&&e[0]&&(t[""+o]=e[0]),window.innerWidth<=1024&&window.innerWidth>768&&e[1]?t[""+o]=e[1]:e[0]&&(t[""+o]=e[0]),window.innerWidth<768&&e[2]?t[""+o]=e[2]:e[1]?t[""+o]=e[1]:e[0]&&(t[""+o]=e[0]),t};let g=c.querySelectorAll(".ecom-collection__product-item");function q(e=!1,t){const o=c.querySelector(".ecom-paginate__progress-bar--outner"),i=c.querySelector(".ecom-paginate__progress-bar--inner"),n=c.querySelector(".ecom-paginate__progress-text");if(!(a&&r&&o&&i&&n))return;let{total:l,initProduct:s}=o&&o.dataset,d=n&&n.dataset.text,u=0,m=1,p=0,_=0;s=parseInt(s),e?(m=1,p=s*t):(window.location.href.match(/page=\d*/gm)&&(u=new URL(window.location.href).searchParams.get("page"),m=1===u?1:s*(u-1)+1),p=m+s-1),p>l&&(p=l),_=Math.round(p/l*100),i.style.width=_+"%",d=d.replace("{_start}",m),d=d.replace("{_end}",p),d=d.replace("{_total}",l),n.innerText=d}function S(e,t){var o=t.variantIdField.closest(".ecom-collection__product-item");let i=o.querySelector(".ecom-collection__product-submit"),n=o.querySelector(".ecom-collection__product-quantity-input"),a=o.querySelector(".ecom-collection__product-price"),u=o.querySelector(".ecom-collection__product-price--regular"),m=o.querySelector(".ecom-unit-price");u&&u.classList.add("ecom-collection__product--compare-at-price");let p=o.querySelector(".ecom-collection__product-price--bage-sale"),_=o.querySelector(".ecom-collection__product-badge--sale"),w=o.querySelector(".ecom-collection__product-badge--sold-out"),y=o.querySelector(".ecom-collection__product-item-sku-element"),h="";if(null===e||o.hasAttribute("ec-variant-init")&&"first_price"===d){let t=o.querySelector('select[name="variant_id"]'),c=o.querySelector(".product-json"),i=null;try{i=JSON.parse(c.innerHTML)}catch(e){return 1}if(o.hasAttribute("ec-variant-init")&&"first_price"===d)o.removeAttribute("ec-variant-init"),null==(e=i.variants.find(e=>e.available))&&(e=i.variants[0]);else{let c=o.querySelector("select#"+t.id+"-option-0");if(!c)return;const n=c.value;n&&i.variants.forEach((function(t){t.options.includes(n)&&(e=t)}))}}if(e){if(a&&(a.innerHTML=window.EComposer.formatMoney(e.price)),u&&(u.innerHTML=window.EComposer.formatMoney(e.compare_at_price)),m){e.unit_price?m.style.display="block":m.style.display="none";const t=m.querySelector(".ecom-ground-price_unit-price");t&&(t.innerHTML=window.EComposer.formatMoney(e.unit_price))}if(e.compare_at_price>e.price){u&&(u.style.display="inherit");let t="";t=c.querySelector(".ecom-collection__product-main").dataset.sale,"false"==c.querySelector(".ecom-collection__product-main").dataset.translate&&(t=s),_&&w&&(_.style.display="block",w.style.display="none"),"amount"===f?(h=e.compare_at_price-e.price,p&&(p.style.display="inherit",p.innerHTML=t.replace(/\{{.*\}}/g,window.EComposer.formatMoney(h)))):(h=100*(e.compare_at_price-e.price)/e.compare_at_price,p&&(p.style.display="inherit",p.innerHTML=t.replace(/\{{.*\}}/g,Math.round(h))))}else u&&(u.style.display="none"),_&&w&&(_.style.display="none",w.style.display="none"),p&&(p.style.display="none",p.innerHTML="");if(y&&(e.sku?(y.querySelector(".ecom-collection__product-item-sku").innerHTML=e.sku,y.style.display="flex"):y.style.display="none"),e.featured_image){let t=o.querySelector(".ecom-collection__product-media img");if(!l){let o=t.closest("div");o.classList.add("ecom-product-image-loading"),t.setAttribute("src",e.featured_image.src),t.removeAttribute("srcset"),t.addEventListener("load",(function(){o.classList.remove("ecom-product-image-loading")}))}}if(e.options.length,o.querySelector(".ecom-collection__product-submit"))if(e.available){const t=i.closest(".ecom-collection__product--wrapper-items");if(t.dataset.iconAdd&&i.querySelector(".ecom-collection__product-add-cart-icon")&&(i.querySelector(".ecom-collection__product-add-cart-icon").innerHTML=t.dataset.iconAdd),!e.inventory_management||e.inventory_management&&e.inventory_quantity>0){if(i.removeAttribute("disabled"),n){let t=n.closest(".ecom-collection__product-quantity--wrapper");t&&(t.style.display="flex"),n.style.display="flex",e.inventory_management?n.max=e.inventory_quantity:n.max=9999}i.classList.add("ecom-collection__product-form__actions--add"),i.classList.remove("ecom-collection__product-form__actions--soldout"),i.classList.remove("ecom-collection__product-form__actions--unavailable"),i.querySelector(".ecom-add-to-cart-text").innerHTML=i.getAttribute("data-text-add-cart")}else if("continue"==e.inventory_policy&&e.inventory_quantity<=0){if(i.removeAttribute("disabled"),n){let e=n.closest(".ecom-collection__product-quantity--wrapper");e&&(e.style.display="flex"),n.max=9999,n.style.display="flex"}i.classList.add("ecom-collection__product-form__actions--add"),i.classList.remove("ecom-collection__product-form__actions--soldout"),i.classList.remove("ecom-collection__product-form__actions--unavailable"),i.querySelector(".ecom-add-to-cart-text").innerHTML=i.getAttribute("data-text-pre-order")}i.dataset.childName="add_to_cart_button",i.dataset.childTitle="Add to cart button"}else{if(_&&w&&(_.style.display="none",w.style.display="block"),r&&i.setAttribute("disabled","disabled"),n){let e=n.closest(".ecom-collection__product-quantity--wrapper");e&&(e.style.display="none"),n.style.display="none"}const e=i.closest(".ecom-collection__product--wrapper-items");e.dataset.iconSoldout&&i.querySelector(".ecom-collection__product-add-cart-icon")&&(i.querySelector(".ecom-collection__product-add-cart-icon").innerHTML=e.dataset.iconSoldout),i.classList.add("ecom-collection__product-form__actions--soldout"),i.classList.remove("ecom-collection__product-form__actions--add"),i.classList.remove("ecom-collection__product-form__actions--unavailable"),i.querySelector(".ecom-add-to-cart-text").innerHTML=i.getAttribute("data-text-sold-out"),i.dataset.childName="sold_out_button",i.dataset.childTitle="Sold out button"}}else a.html=window.EComposer.formatMoney(0),u&&(u.innerHTML=window.EComposer.formatMoney(0),u.style.display="none"),i&&(i.setAttribute("disabled","disabled"),i.classList.add("ecom-collection__product-form__actions--unavailable"),i.classList.remove("ecom-collection__product-form__actions--add"),i.classList.remove("ecom-collection__product-form__actions--soldout"),i.querySelector(".ecom-add-to-cart-text").innerHTML=i.getAttribute("data-text-unavailable"))}function b(e){e.classList.add("ecom-swatch-init");let t=e.querySelector(".ecom-collection__product-form");if(!t)return;let o=t.querySelector('select[name="variant_id"]'),c=e.querySelector(".product-json"),i=null;try{i=JSON.parse(c.innerHTML)}catch(e){return 1}window.EComposer&&window.EComposer.OptionSelectors&&new window.EComposer.OptionSelectors(o.id,{product:i,onVariantSelected:S,enableHistoryState:!1}),e.querySelectorAll(".ecom-collection__product-swatch-item").forEach((function(t){t.addEventListener("click",(function(){l=!1;var t=this.closest("li");if(t.classList.contains("ecom-product-swatch-item--active"))return!1;t.parentNode.querySelectorAll(".ecom-product-swatch-item--active").forEach((function(e){e.classList.remove("ecom-product-swatch-item--active")})),t.classList.add("ecom-product-swatch-item--active");var c=t.getAttribute("data-option-index"),i=t.getAttribute("data-value");let n=e.querySelector("select#"+o.id+"-option-"+c);n.value=i,n.dispatchEvent(new Event("change"))}))})),e.querySelectorAll("select.ecom-collection__product-swatch-select").forEach((function(t){t.addEventListener("change",(function(){var t=this.getAttribute("data-option-index"),c=this.value;e.querySelectorAll("select#"+o.id+"-option-"+t).forEach((function(e){e.value=c,e.dispatchEvent(new Event("change"))}))}))}))}if(g&&g.forEach((function(e){let t=e.querySelector(".ecom-collection__product-quantity-input"),o=e.querySelector(".ecom-collection__quantity-controls-plus"),c=e.querySelector(".ecom-collection__quantity-controls-minus");c&&c.addEventListener("click",(function(){t.stepDown(),t.dispatchEvent(new Event("change"))})),o&&o.addEventListener("click",(function(){t.stepUp(),t.dispatchEvent(new Event("change"))})),t&&t.addEventListener("change",(function(t){let o=e.querySelector("a.ecom-collection__product-submit");if(t.target.value>parseInt(t.target.max)&&(t.target.value=parseInt(t.target.max)),o){let e=o.getAttribute("href");o.setAttribute("href",e.replace(/quantity=(\d*)/gm,"quantity="+t.target.value))}}))})),q(!1,1),"slider"===this.settings.layout){let e=function(e){let t=e.querySelector(".ecom-swiper-container"),o=t&&t.dataset.optionSwiper;if(!o)return;o=JSON.parse(o),o.pagination={el:e.querySelector(".ecom-swiper-pagination"),type:u,clickable:!0},o.navigation={nextEl:e.querySelector(".ecom-swiper-button-next"),prevEl:e.querySelector(".ecom-swiper-button-prev")},o.autoHeight=!1,o.on={init:function(){this.el.classList.add("ecom-swiper-initialized")}};let c=[w,y,h];if(r){o=v(c,o,"speed"),o=v([m,p,_],o,"centeredSlides");const e=new window.EComSwiper(t,o);o.autoplay.enabled&&(e.on("touchStart",(function(e,t){e.params.speed=300,e.autoplay.stop()})),e.on("touchEnd",(function(e,t){window.innerWidth>1024&&w&&(e.params.speed=w),window.innerWidth<=1024&&window.innerWidth>768&&y?e.params.speed=y:w&&(e.params.speed=w),window.innerWidth<768&&h?e.params.speed=h:y?e.params.speed=y:w&&(e.params.speed=w),e.autoplay.start()})))}else setTimeout((function(){o=v(c,o,"speed"),o=v([m,p,_],o,"centeredSlides"),new window.EComSwiper(t,o)}),200)},t=this.$el,o=t.querySelector(".ecom-collection__product-container");e(t),o.addEventListener("ecom-products-init-slider",(function(t){e(t.detail.wrapper)}))}n.forEach(b);const E=function(e){e.querySelectorAll(".ecom-collection__product-form__actions--quickshop").forEach((function(e){e.addEventListener("click",(function(e){this.style.display="none";let t=this.closest(".ecom-collection__product-item");t.querySelectorAll(".ecom-collection__product-variants").forEach((function(e){e.classList.add("ecom-active")})),t.querySelectorAll(".ecom-collection__product-quick-shop-wrapper").forEach((function(e){e.style.display="inherit"}))}))})),e.querySelectorAll(".ecom-collection__product-close").forEach((function(e){e.addEventListener("click",(function(e){let t=this.closest(".ecom-collection__product-item");t.querySelectorAll(".ecom-collection__product-variants").forEach((function(e){e.classList.remove("ecom-active")})),t.querySelectorAll(".ecom-collection__product-quick-shop-wrapper").forEach((function(e){e.style.display="none"})),t.querySelectorAll(".ecom-collection__product-form__actions--quickshop").forEach((function(e){e.style.display="inherit"}))}))}))};E(c);const L=c.querySelector(".ecom-collection__product-main");let k=L.dataset,A=L.dataset.countdownShows;const x=/\[([^\]]+)\]/gm;var T="";if(A.indexOf("week")>=0&&k.week){let e="",t=k.week.replace(x,(...t)=>(e=t[1],""));T+=`\n                            <div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--week">\n                                <span class="ecom-collection__product-time--number">\n                                    ${e}\n                                </span>\n                                <span class="ecom-collection__product-time--label">\n                                    ${t}\n                                </span>\n                            </div>`}if(A.indexOf("day")>=0&&k.day){let e="",t=k.day.replace(x,(...t)=>(e=t[1],""));T+=`<div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--day">\n                                    <span class="ecom-collection__product-time--number">\n                                        ${e}\n                                    </span>\n                                    <span class="ecom-collection__product-time--label">\n                                        ${t}\n                                    </span>\n                                </div> `}if(A.indexOf("hour")>=0&&k.hour){let e="",t=k.hour.replace(x,(...t)=>(e=t[1],""));T+=`\n                            <div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--hour">\n                                <span class="ecom-collection__product-time--number">\n                                    ${e}\n                                </span>\n                                <span class="ecom-collection__product-time--label">\n                                    ${t}\n                                </span>\n                            </div>\n                        `}if(A.indexOf("minute")>=0&&k.minute){let e="",t=k.minute.replace(x,(...t)=>(e=t[1],""));T+=`<div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--minute">\n                                    <span class="ecom-collection__product-time--number">\n                                        ${e}\n                                    </span>\n                                    <span class="ecom-collection__product-time--label">\n                                        ${t}\n                                    </span>\n                                </div>\n                            `}if(A.indexOf("second")>=0&&k.second){let e="",t=k.second.replace(x,(...t)=>(e=t[1],""));T+=`<div class="ecom-collection__product-time--item ecom-d-flex ecom-collection__product-time--second">\n                                    <span class="ecom-collection__product-time--number">\n                                        ${e}\n                                    </span>\n                                    <span class="ecom-collection__product-time--label">\n                                        ${t}\n                                    </span>\n                                </div>`}function C(e){let t=this.closest(".ecom-collection__product-countdown-wrapper"),o=t.querySelector(".ecom-collection__product-countdown-progress-bar"),c=t.querySelector(".ecom-collection__product-countdown-progress-bar--timer"),i=this.getAttribute("data-ecom-countdown-from")||0;if(this.innerHTML=e.strftime(T),o&&i){let t=(new Date).getTime(),n=new Date(i).getTime(),r=e.finalDate.getTime();if(n<t&&r>n){o.style.removeProperty("display");let e=r-n,i=r-t,l=Math.round(100*i/e)+"%";c.style.width=l}else o.style.display="none"}}function $(e){if(e.dataset.ecomCountdown){if(e.dataset.ecomCountdownFrom&&(new Date).getTime()>new Date(e.dataset.ecomCountdown).getTime()&&r)return e.closest(".ecom-collection__product-countdown-wrapper").style.display="none",!1;window.EComCountdown&&window.EComCountdown(e,new Date(e.dataset.ecomCountdown),C),e.addEventListener("stoped.ecom.countdown",()=>{e.closest(".ecom-collection__product-countdown-wrapper").style.display="none"})}}if(c.querySelectorAll(".ecom-collection__product-countdown-time").forEach((function(e){$(e)})),r){const e=c.querySelector(".ecom-collection__product-main");let t=1;const o=function(e){e.preventDefault();const o=this.dataset.get,i=this.closest(".ecom-sections[data-section-id]"),n=c.closest(".ecom-row.ecom-section");if(!o||!i||!i.dataset.sectionId)return;const l=`${o}&section_id=${i.dataset.sectionId}`;t++,q(!0,t),this.classList.add("ecom-loading"),r(l,i,this,"loadmore",n)},n=function(e){var t,o;t=e,o={},new IntersectionObserver((e,n)=>{e.forEach(e=>{e.isIntersecting&&(o.cb?o.cb(t):function(e){const t=e.dataset.get,o=e.closest(".ecom-sections[data-section-id]"),n=e.closest(".ecom-row.ecom-section");if(!t||!o||!o.dataset.sectionId)return;const l=o.dataset.sectionId,s=`${t}&section_id=${l}`;i&&(c.classList.add("ecom-doing-scroll"),r(s,o,e,"infinite",n))}(e.target),n.unobserve(e.target))})},o).observe(t)},r=function(t,o,r,l,s){i=!1,async function(e){return(await fetch(e,{method:"GET",cache:"no-cache",headers:{"Content-Type":"text/html"}})).text()}(t).then((function(t){const o=document.createElement("div");o.innerHTML=t;const c=o.querySelector(".ecom-collection__product-main.ecom-collection_product_template_collection .ecom-collection__product--wrapper-items");if(!c)return;const i=s.querySelector(".ecom-collection__product--wrapper-items"),a=s.querySelector(".ecom-products-pagination-loadmore");for(;c.firstChild;)i.appendChild(c.firstChild);if(c.parentNode.removeChild(c),"loadmore"===l){const e=o.querySelector(".ecom-products-pagination-loadmore");e?a.innerHTML=e.innerHTML:a.remove()}else{r.remove();const e=o.querySelector(".ecom-products-pagination-infinite");e&&(i.after(e),n(e))}e.dispatchEvent(new CustomEvent("ecom-products-init",{detail:{wrapper:e}}))})).finally((function(){window.EComposer&&window.EComposer.initQuickview(),i=!0,c.classList.remove("ecom-doing-scroll"),r.classList.remove("ecom-loading")}))};if(e&&e.dataset.pagination){const t=e.dataset.pagination;if("loadmore"===t)c.querySelector(".ecom-products-pagination-loadmore-btn")&&c.querySelector(".ecom-products-pagination-loadmore-btn").addEventListener("click",o);else if("infinit"===t){const e=c.querySelector(".ecom-products-pagination-infinite");e&&n(e)}}e.addEventListener("ecom-products-init",(function(t){const i=t.detail.wrapper;if(!i)return;if(e&&e.dataset.pagination){const t=e.dataset.pagination;if("loadmore"===t)c.querySelector(".ecom-products-pagination-loadmore-btn")&&c.querySelector(".ecom-products-pagination-loadmore-btn").addEventListener("click",o);else if("infinit"===t){const e=c.querySelector(".ecom-products-pagination-infinite");e&&n(e)}}i.querySelectorAll(".ecom-collection__product-variants:not(.ecom-swatch-init)").length&&i.querySelectorAll(".ecom-collection__product-variants:not(.ecom-swatch-init)").forEach(b),i.querySelectorAll(".ecom-collection__product-countdown-time").length&&i.querySelectorAll(".ecom-collection__product-countdown-time").forEach((function(e){$(e)})),E(i),i.querySelector(".ecom-products-pagination-loadmore-btn")&&i.querySelector(".ecom-products-pagination-loadmore-btn").addEventListener("click",o),window.EComposer&&"function"==typeof window.EComposer.init&&window.EComposer.init(),M(i);H(i.querySelector(".ecom-collection__product--wishlist-wrapper"))}))}function M(e){if(e&&e.dataset.reviewPlatform)switch(e.dataset.reviewPlatform){case"product-reviews":if(window.SPR)try{window.SPR.$=window.jQuery,window.SPR.initDomEls(),window.SPR.loadBadges()}catch(e){console.info(e.message)}break;case"judgeme":if(window.jdgm){try{window.jdgm.batchRenderBadges()}catch(e){console.info(e.message)}c.querySelectorAll('[data-average-rating="0.00"]').forEach((function(e){e.style.display="block !important"}))}break;case"product-reviews-addon":window.StampedFn&&window.StampedFn.loadBadges();break;case"lai-reviews":void 0!==window.SMARTIFYAPPS&&window.SMARTIFYAPPS.rv.installed&&window.SMARTIFYAPPS.rv.scmReviewsRate.actionCreateReviews();break;case"air-reviews":"function"==typeof window.avadaAirReviewRerender&&window.avadaAirReviewRerender()}}function H(e){if(e)switch(e.dataset.wishlistApp){case"swym-relay":window._swat&&window._swat.initializeActionButtons(".ecom-collection__product-wishlist-button");break;case"wishlist-hero":c.querySelectorAll(".wishlist-hero-custom-button").forEach((function(e){var t=new CustomEvent("wishlist-hero-add-to-custom-element",{detail:e});document.dispatchEvent(t)}))}}if(!r){M(c.querySelector(".ecom-collection__product-main"));H(c.querySelector(".ecom-collection__product--wishlist-wrapper"))}this.settings.enable_preload&&c.querySelectorAll(".ecom-collection__product-item").forEach((function(e){e.addEventListener("mouseenter",(function(){let e=document.createElement("link");e.rel="prefetch",document.head.appendChild(e);var t=this.querySelector("a.ecom-collection__product-item-information-title").getAttribute("href");e.href=t}),{once:!0})}));this.settings.show_compare&&!r&&c.querySelectorAll(".ecom-product__compare-link").forEach((function(e){e.addEventListener("click",(function(){this.classList.contains("ecom-product__compare-link-added")?this.classList.remove("ecom-product__compare-link-added","ecom-button-active"):this.classList.add("ecom-product__compare-link-added","ecom-button-active")}))}));this.settings.show_wishlist&&!r&&c.querySelectorAll(".ecom-product__wishlist-link").forEach((function(e){e.addEventListener("click",(function(){this.classList.contains("ecom-product__wishlist-link-added")?this.classList.remove("ecom-product__wishlist-link-added","ecom-button-active"):this.classList.add("ecom-product__wishlist-link-added","ecom-button-active")}))}));if("recommendations"===this.settings.show_product_by&&r){let e=c.closest(".ecom-builder");if(e){let t=e.querySelector(".ecom-sections").dataset.sectionId,o=e.querySelector('input[name="product-id"]')?e.querySelector('input[name="product-id"]').value:"",c=8,i=e.querySelector(`[data-section-id="${t}"]`),n=i.querySelector(".ecom-collection__product-container"),r=i.querySelector(".ecom-collection__product-main");r.classList.contains("ecom-collection_product_template_product")&&"recommendations"===this.settings.show_product_by&&(c=this.settings.limit_recommended_products),fetch(`${window.EComposer.routes.root_url}recommendations/products?product_id=${o}&limit=${c}&section_id=${t}`).then(e=>e.text()).then(e=>{const o=document.createElement("div");o.innerHTML=e;const c=o.querySelector(`[data-section-id="${t}"]`),i=c.querySelector(".ecom-collection__product-main");c.innerHTML.trim().length&&r&&(r.innerHTML=i.innerHTML,r.querySelector(".ecom-collection__product--wrapper-items")&&r.dispatchEvent(new CustomEvent("ecom-products-init",{detail:{wrapper:r}})),n.dispatchEvent(new CustomEvent("ecom-products-init-slider",{detail:{wrapper:n}})))}).catch(e=>{console.error(e)})}}};document.querySelectorAll(".ecom-ct6byhtspi").forEach((function(t){e.call({$el:t,id:"ecom-ct6byhtspi",settings:{show_featured_media:!1,bage_sale:"-{{sale}}%",price_type:"first_price",sale_badge_type:"percent",slider_speed:800,layout:"slider",enable_preload:!1,show_compare:!1,show_wishlist:!1,show_product_by:"condition",limit_recommended_products:8},isLive:!0})}))}();