import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const n="feedback-form-state",a=document.querySelector(".feedback-form"),t=a.querySelector("#textareaInput"),o=a.querySelector("#emailInput");console.log(t);a.addEventListener("submit",m);t.addEventListener("input",r);o.addEventListener("input",r);function u(){const e=JSON.parse(localStorage.getItem(n))||{};o.value=e.email??"",t.value=e.message??""}u();function r(e){e.preventDefault();const l={email:o.value.trim(),message:t.value.trim()};localStorage.setItem(n,JSON.stringify(l))}function m(e){e.preventDefault(),!(!t.value||!o.value)&&(console.log("send"),localStorage.removeItem(n),a.reset())}
//# sourceMappingURL=commonHelpers2.js.map
