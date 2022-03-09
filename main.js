(()=>{"use strict";var e={baseUrl:"https://mesto.nomoreparties.co/v1/plus-cohort7",headers:{authorization:"4c5b4ec3-9f91-4be6-8da0-79b50322f097","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject(err)}const o=function(){return fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t)},n=function(){return fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)},r=function(o,n){return fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:o,about:n})}).then(t)},c=function(o,n){return fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:o,link:n})}).then(t)},a=function(o){return fetch("".concat(e.baseUrl,"/cards/").concat(o),{method:"DELETE",headers:e.headers}).then(t)},i=function(o){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(o),{method:"PUT",headers:e.headers}).then(t)},u=function(o){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(o),{method:"DELETE",headers:e.headers}).then(t)},l=function(o){return fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:o})}).then(t)};var s=document.querySelector(".popup_type_full-image"),d=s.querySelector(".full-image__picture"),f=s.querySelector(".full-image__description"),_=document.querySelector("#photo-template").content,m=document.querySelector("#self-photo-template").content,p=document.querySelector(".photos");function v(e){var t=e.closest(".photo"),o=e.querySelector(".photo__likes-count");e.addEventListener("click",(function(){e.classList.contains("photo__likes-button_active")?u(t.id).then((function(t){o.textContent=t.likes.length,e.classList.remove("photo__likes-button_active")})).catch((function(e){return console.log(e)})):i(t.id).then((function(t){o.textContent=t.likes.length,e.classList.add("photo__likes-button_active")})).catch((function(e){return console.log(e)}))}))}function y(e){var t;t=e.target.closest(".photo").id,w.value=t,J.classList.remove("form__submit_inactive"),J.removeAttribute("disabled"),I(j)}function h(e){var t=e.target,o=t.closest(".photo").querySelector(".photo__description-text").textContent;d.src=t.dataset.image,d.alt=o,f.textContent=o,I(s)}function S(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=e._id,r=e.link,c=e.name,a=e.likes,i=void 0===a?0:a,u=t?m.cloneNode(!0):_.cloneNode(!0),l=u.querySelector(".photo"),s=l.querySelector(".photo__image"),d=u.querySelector(".photo__description-text"),f=u.querySelector(".photo__likes-button"),p=f.querySelector(".photo__likes-count");return o&&f.classList.add("photo__likes-button_active"),l.id=n,s.style="background-image: url(".concat(r,")"),s.dataset.image=r,p.textContent=i.length,d.textContent=c,s.addEventListener("click",h),v(f),t&&u.querySelector(".photo__delete-button").addEventListener("click",y),u}var b=document.querySelector(".popup_type_edit-profile"),q=document.querySelector(".profile"),g=q.querySelector(".profile__name"),L=q.querySelector(".profile__profession"),k=b.querySelector(".form__item_el_name"),C=b.querySelector(".form__item_el_profession"),E=b.querySelector(".form__submit"),x=document.querySelector(".popup_type_add-card"),A=document.querySelector(".photos"),U=x.querySelector(".form__item_el_image-url"),D=x.querySelector(".form__submit"),T=x.querySelector(".form__item_el_mesto-name"),B=document.querySelector(".popup_type_edit-avatar"),P=B.querySelector(".form__submit"),N=B.querySelector(".form__item"),O=document.querySelector(".profile__avatar"),j=document.querySelector(".popup_type_delete-card"),w=j.querySelector(".form__item_type_hidden"),J=j.querySelector(".form__submit");function H(e){if("Escape"===e.key){var t=document.querySelector(".popup_opened");console.log(t),t&&z(t)}}function z(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",H)}function I(e){e.classList.add("popup_opened"),document.addEventListener("keydown",H)}function M(e,t,o){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(o),t.removeAttribute("disabled")):(t.classList.add(o),t.setAttribute("disabled",""))}var F,G,K,Q,R,V,W,X=document.querySelector(".popup_type_edit-profile"),Y=document.querySelector(".profile"),Z=Y.querySelector(".profile__button-edit"),$=Y.querySelector(".profile__name"),ee=Y.querySelector(".profile__profession"),te=X.querySelector(".form_type_edit-profile"),oe=Y.querySelector(".profile__button-add"),ne=document.querySelector(".popup_type_add-card").querySelector(".form_type_add-card"),re=Y.querySelector(".profile__avatar"),ce=document.querySelector(".form_type_edit-avatar"),ae=document.querySelector(".form_type_delete-card"),ie=document.querySelectorAll(".popup");te.addEventListener("submit",(function(e){e.preventDefault(),E.textContent="Сохранение...",r(k.value,C.value).then((function(e){g.textContent=e.name,L.textContent=e.about,z(b)})).catch((function(e){return console.log(e)})).finally((function(){E.textContent="Сохраненить"}))})),Z.addEventListener("click",(function(){k.value=g.textContent,C.value=L.textContent,I(b)})),ne.addEventListener("submit",(function(e){e.preventDefault(),D.textContent="Сохранение...",c(T.value,U.value).then((function(e){var t=S(e);A.prepend(t),U.value="",T.value="",D.classList.add("form__submit_inactive"),D.setAttribute("disabled",""),z(x)})).catch((function(e){return console.log(e)})).finally((function(){D.textContent="Создать"}))})),oe.addEventListener("click",(function(){I(x)})),re.addEventListener("click",(function(){I(B)})),ce.addEventListener("submit",(function(e){e.preventDefault(),P.textContent="Сохранение...",l(N.value).then((function(e){O.style="background-image: url(".concat(e.avatar,")"),N.value="",P.classList.add("form__submit_inactive"),P.setAttribute("disabled",""),z(B)})).catch((function(e){return console.log(e)})).finally((function(){P.textContent="Сохранить"}))})),ae.addEventListener("submit",(function(e){e.preventDefault();var t=w.value,o=document.getElementById("".concat(t));a(t).then((function(){o.remove(),z(j)})).catch((function(e){return console.log(e)})).finally((function(){w.value=""}))})),ie.forEach((function(e){e.addEventListener("click",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__close-button"))&&z(e)}))})),G=(F={formSelector:"form",inputSelector:"form__item",submitButtonSelector:"form__submit",inactiveButtonClass:"form__submit_inactive",inputErrorClass:"form__item_type_error",errorClass:"form__item-error_active"}).formSelector,K=F.inputSelector,Q=F.submitButtonSelector,R=F.inactiveButtonClass,V=F.inputErrorClass,W=F.errorClass,Array.from(document.querySelectorAll(G)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t,o,n,r,c){var a=Array.from(e.querySelectorAll(".".concat(t))),i=e.querySelector(".".concat(o));M(a,i,n),a.forEach((function(t){t.addEventListener("input",(function(){!function(e,t,o,n){t.validity.valid?function(e,t,o,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(o),r.classList.remove(n),r.textContent=""}(e,t,o,n):function(e,t,o,n,r){var c=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o),c.textContent=n,c.classList.add(r)}(e,t,o,t.validationMessage,n)}(e,t,r,c),M(a,i,n)}))}))}(e,K,Q,R,V,W)}));var ue=[o(),n()];Promise.all(ue).then((function(e){var t,o,n=e[0],r=e[1];$.textContent=n.name,ee.textContent=n.about,re.style="background-image: url(".concat(n.avatar,")"),t=r,o=n._id,t.forEach((function(e){var t=o===e.owner._id,n=Boolean(e.likes.find((function(e){return e._id===o}))),r=S(e,t,n);p.append(r)}))})).catch((function(e){return console.log(e)}))})();