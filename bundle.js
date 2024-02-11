(()=>{var t={952:()=>{var t,n,e;function a(){var t,a,i,r,s,c;document.body.classList.toggle("x1z2Chat-show-chatbot"),!sessionStorage.getItem("threadId")&&document.body.classList.contains("x1z2Chat-show-chatbot")&&(a=document.getElementById("encryptedDataPayload").value,i=document.getElementById("encryptedDataId").value,r=window.location.hostname,(t=sessionStorage.getItem("sessionId"))||(t=uuid.v4(),sessionStorage.setItem("sessionId",t)),s=t,c=JSON.stringify({userId:s,dataPayload:a,dataId:i,hostname:r}),console.log("Sending request createThread:",c),fetch("https://next.leads-mania.com/webchat/create-thread",{method:"POST",headers:{"Content-Type":"application/json"},body:c}).then((function(t){return t.json()})).then((function(t){t.success&&t.data&&t.data.threadID&&sessionStorage.setItem("threadId",t.data.threadID),console.log("Thread created:",t)})).catch((function(t){return console.error("Error creating thread:",t)}))),!document.querySelector(".x1z2Chat-chatbox .incoming")&&e&&setTimeout((function(){o(e,"incoming",!1,n)}),1e3)}var o=function(e,a){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n,r=document.createElement("li");r.classList.add("x1z2Chat-chat",a);var s=document.createElement("p"),c=o?e:e.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/!\[(.*?)\]\((https?:\/\/\S+(?:jpg|jpeg|png|gif|bmp))\)/gi,'<a href="$2" class="x1z2Chat-image-link" target="_blank"><img src="$2" alt="$1" class="thumbnail"></a>').replace(/\[(.*?)\]\((https?:\/\/\S+)\)/gi,'<a href="$2" target="_blank">$1</a>');if(s.innerHTML=c,"incoming"===a){var l=document.createElement("img");l.src=i,l.classList.add("x1z2Chat-assistant-avatar"),r.appendChild(l)}r.appendChild(s),t.appendChild(r),t.scrollTo(0,t.scrollHeight)};function i(){console.log("DOMContentLoaded event triggered or DOM already loaded");var t=document.getElementById("chat-popup"),n=document.querySelector(".x1z2Chat-close-popup"),e=document.querySelector(".x1z2Chat-chatbot-toggler");console.log("chatPopup:",t),console.log("closeButton:",n),console.log("chatbotToggler:",e);var o=!1;function i(){console.log("Closing popup"),t.style.opacity=0,t.style.visibility="hidden",sessionStorage.setItem("popupClosed","true")}window.addEventListener("scroll",(function(){console.log("Scroll event triggered, pageYOffset:",window.pageYOffset),window.pageYOffset>300&&!o&&(console.log("User scrolled more than 300px, showing popup"),o=!0,setTimeout((function(){sessionStorage.getItem("popupClosed")?console.log("Popup previously closed, not showing"):(console.log("Showing popup"),t.style.opacity=1,t.style.visibility="visible")}),4e3))})),n?(console.log("Adding click listener to closeButton"),n.addEventListener("click",i)):console.log("closeButton not found"),e?(console.log("Adding click listener to chatbotToggler"),e.addEventListener("click",i)):console.log("chatbotToggler not found"),t?t.addEventListener("click",(function(){console.log("Chat popup clicked, toggling chatbot"),a(),i()})):console.log("chatPopup not found")}console.log("Script loaded"),"loading"===document.readyState?document.addEventListener("DOMContentLoaded",i):i()},272:(t,n,e)=>{"use strict";e.d(n,{c:()=>s});var a=e(500),o=e.n(a),i=e(312),r=e.n(i)()(o());r.push([t.id,".x1z2Chat-chatbot-toggler,\n.x1z2Chat-chatbot-header,\n.x1z2Chat-chatbox .x1z2Chat-chat p {\n  background: var(--primary-color);\n}\n\n.x1z2Chat-chat-input span {\n  color: var(--primary-color);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n/* body {\n  background: #E3F2FD;\n} */\n.x1z2Chat-chatbot-toggler {\n  position: fixed;\n  bottom: 30px;\n  right: 35px;\n  outline: none;\n  border: none;\n  height: 70px;\n  width: 70px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  transition: all 0.2s ease;\n  z-index: 998;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px, rgba(0, 0, 0, 0.2) 0px 2px 12px;\n}\n.x1z2Chat-show-chatbot .x1z2Chat-chatbot-toggler {\n  transform: rotate(90deg);\n}\n.x1z2Chat-chatbot-toggler span {\n  color: #fff;\n  position: absolute;\n  font-size: 34px;\n}\n.x1z2Chat-chatbot-toggler span:last-child,\n.x1z2Chat-show-chatbot .x1z2Chat-chatbot-toggler span:first-child  {\n  opacity: 0;\n}\n.x1z2Chat-show-chatbot .x1z2Chat-chatbot-toggler span:last-child {\n  opacity: 1;\n}\n.x1z2Chat-chatbot {\n  font-family: 'Inter', sans-serif;\n  position: fixed;\n  right: 46px;\n  bottom: 113px;\n  width: 420px;\n  background: #fff;\n  border-radius: 15px;\n  overflow: hidden;\n  opacity: 0;\n  pointer-events: none;\n  transform: scale(0.5);\n  transform-origin: bottom right;\n  box-shadow: 0 0 128px 0 rgba(0,0,0,0.1),\n              0 32px 64px -48px rgba(0,0,0,0.5);\n  transition: all 0.25s ease-in-out;\n\tz-index: 1000;\n  \n}\n\n.x1z2Chat-chatbot-header {\n  padding: 16px;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  position: relative;\n}\n\n.x1z2Chat-chatbot-logo {\n  width: 50px; /* Keep the width as per your current design */\n  height: 50px; /* Make height equal to width for a circle */\n  border-radius: 50%; /* Makes the image round */\n  border: 3px solid white; /* Adds a white border, adjust thickness as needed */\n  object-fit: cover; /* Ensures the image covers the frame without distorting */\n  margin-right: 15px; /* Retain your existing margin */\n}\n\n\n.x1z2Chat-chatbot-header-text h2 {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 4px;\n  color: #fff;\n  font-family: 'Inter', sans-serif;\n}\n\n.x1z2Chat-online-status::before {\n  content: \"\"!important;\n  background-color: #4ece3d!important;\n  vertical-align: middle!important;\n  width: 8px!important;\n  height: 8px!important;\n  margin-right: 5px!important;\n  flex: 0 0 auto!important;\n  border-radius: 50%!important; /* Makes it perfectly circular */\n  display: inline-block!important; /* This will help in aligning it with the text */\n  position: relative!important;\n  top: -1.6px!important;\n}\n\n\n.x1z2Chat-chatbot-header-text p {\n  font-size: 0.92rem;\n  font-weight: 300;\n}\n\n.x1z2Chat-show-chatbot .x1z2Chat-chatbot {\n  opacity: 1;\n  pointer-events: auto;\n  transform: scale(1);\n}\n/* .chatbot header {\n  padding: 16px 0;\n  position: relative;\n  text-align: center;\n  color: #fff;\n  background: #724ae8;\n  box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n} */\n.x1z2Chat-chatbot header span {\n  position: absolute;\n  right: 15px;\n  top: 50%;\n  display: none;\n  cursor: pointer;\n  transform: translateY(-50%);\n}\nheader h2 {\n  font-size: 1.4rem;\n}\n.x1z2Chat-chatbot .x1z2Chat-chatbox {\n  overflow-y: auto;\n  height: 510px;\n  padding: 30px 20px 100px;\n}\n.x1z2Chat-chatbot :where(.x1z2Chat-chatbox, textarea)::-webkit-scrollbar {\n  width: 6px;\n}\n.x1z2Chat-chatbot :where(.x1z2Chat-chatbox, textarea)::-webkit-scrollbar-track {\n  background: #fff;\n  border-radius: 25px;\n}\n.x1z2Chat-chatbot :where(.x1z2Chat-chatbox, textarea)::-webkit-scrollbar-thumb {\n  background: #ccc;\n  border-radius: 25px;\n}\n.x1z2Chat-chatbox .x1z2Chat-chat {\n  display: flex;\n  list-style: none;\n}\n.x1z2Chat-chatbox .outgoing {\n  margin: 20px 0;\n  justify-content: flex-end;\n}\n/* .chatbox .incoming span {\n  width: 45px;\n  height: 45px;\n  color: #fff;\n  cursor: default;\n  text-align: center;\n  line-height: 32px;\n  align-self: flex-end;\n  background: #724ae8;\n  border-radius: 27px;\n  margin: 0 10px 7px 0;\n} */\n\n.x1z2Chat-chatbox .incoming .x1z2Chat-assistant-avatar {\n  width: 45px; /* Adjust to your preference */\n  height: 45px; /* Make height equal to width for a circle */\n  object-fit: cover; /* Ensures the image covers the frame without distorting */\n  border-radius: 50%; /* Makes the image round */\n  align-self: flex-end;\n  margin: 0 10px -25px 0px;\n  /* margin: 0 10px 7px 0; */\n}\n\n.x1z2Chat-chatbox .x1z2Chat-chat p {\n  white-space: pre-wrap;\n  padding: 12px 17px;\n  border-radius: 10px 10px 0 10px;\n  max-width: 78%;\n  color: #fff;\n  font-size: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 50px;\n  justify-content: center;\n}\n\n/* Styles specifically for links within chat messages */\n.x1z2Chat-chatbox .x1z2Chat-chat p a {\n    color: #007bff; /* standard blue color for links */\n    text-decoration: none; /* removes underline from links */\n}\n\n.x1z2Chat-chatbox .x1z2Chat-chat p a:hover,\n.x1z2Chat-chatbox .x1z2Chat-chat p a:focus {\n    text-decoration: underline; /* adds underline on hover for better user interaction */\n    color: #0056b3; /* slightly darker blue on hover for visual feedback */\n}\n\n.x1z2Chat-chatbox .x1z2Chat-chat p img {\n    max-width: 100%; /* Ensures image does not exceed the bubble's width */\n    height: auto; /* Keeps the aspect ratio of the image */\n    border-radius: 5px; /* Optional: Rounds the corners of the image */\n    cursor: pointer; /* Changes cursor to indicate the image is clickable */\n    display: block; /* Ensures the image takes its own line within the paragraph */\n    margin-top: 15px; /* Adds some space above the image */\n}\n\n.x1z2Chat-chatbox .incoming p {\n  border-radius: 10px 10px 10px 0;\n}\n\n.x1z2Chat-chatbox .x1z2Chat-chat p.error {\n  color: #721c24;\n  background: #f8d7da;\n}\n\n.x1z2Chat-chatbox .incoming p {\n  color: rgb(66, 75, 83);\n  background: rgb(234, 240, 246);\n  font-weight: 440;\n}\n\n.x1z2Chat-chatbox .incoming p strong {\n  display: inline-block;\n  padding-top: 15px;\n}\n\n.x1z2Chat-chatbot .x1z2Chat-chat-input {\n  display: flex;\n  gap: 5px;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  background: #fff;\n  padding: 3px 20px;\n  border-top: 1px solid #ddd;\n}\n.x1z2Chat-chat-input textarea {\n  font-family: 'Inter', sans-serif;\n  height: 55px;\n  width: 100%;\n  border: none;\n  outline: none;\n  resize: none;\n  max-height: 180px;\n  padding: 15px 15px 15px 0;\n  font-size: 1rem;\n}\n.x1z2Chat-chat-input span {\n  align-self: flex-end;\n  cursor: pointer;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  visibility: hidden;\n  font-size: 1.8rem;\n}\n.x1z2Chat-chat-input textarea:valid ~ span {\n  visibility: visible;\n}\n\n\n@media (max-width: 490px) {\n  .x1z2Chat-chatbot-toggler {\n    right: 20px;\n    bottom: 20px;\n  }\n  .x1z2Chat-chatbot {\n    right: 0;\n    bottom: 0;\n    height: 100%;\n    border-radius: 0;\n    width: 100%;\n  }\n  .x1z2Chat-chatbot .x1z2Chat-chatbox {\n    height: calc(100vh - 60px - 60px - 20px);\n    padding: 25px 15px 100px;\n    overflow-y: auto;\n  }\n  .x1z2Chat-chatbot .x1z2Chat-chat-input {\n    padding: 5px 15px;\n  }\n  .x1z2Chat-chatbot header span {\n    display: block;\n  }\n}\n\n\n/*\nLightbox css\n*/\n\n.x1z2Chat-lightbox-modal {\n    display: none;\n    position: fixed;\n    z-index: 1000;\n    padding-top: 100px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0, 0, 0);\n    background-color: rgba(0, 0, 0, 0.9);\n}\n\n.x1z2Chat-lightbox-modal img {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n}\n\n.x1z2Chat-close-lightbox {\n    position: absolute;\n    top: 25px;\n    right: 35px;\n    color: #f1f1f1;\n    font-size: 40px;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n/*\nTyping effect css\n*/\n\n\n.x1z2Chat-typing {\n  position: relative;\n}\n\n.x1z2Chat-typing span {\n  animation: blink 1.5s infinite;\n  animation-fill-mode: both;\n  height: 10px;\n  width: 10px;\n  background: #3b5998;\n  position: absolute;\n  left: 0;\n  top: 0;\n  border-radius: 50%;\n}\n\n.x1z2Chat-typing span:nth-child(2) {\n  animation-delay: .2s;\n  margin-left: 15px;\n}\n\n.x1z2Chat-typing span:nth-child(3) {\n  animation-delay: .4s;\n  margin-left: 30px;\n}\n\n@keyframes blink {\n  0% { opacity: .1; }\n  20% { opacity: 1; }\n  100% { opacity: .1; }\n}\n\n\n/*\nPopup window styling\n*/\n\n.x1z2Chat-chat-popup {\n  font-family: 'Urbanist', sans-serif;\n  color: #6f6f6f;\n  font-weight: 400;\n  line-height: 1.6;\n  position: fixed;\n  max-width: 250px; /* Maximum width for the popup */\n  width: auto; /* Allows the width to adjust based on content */\n  bottom: 110px; /* Adjust this value to place it over the chat icon */\n  right: 35px; /* Align with the chat icon, adjust as necessary */\n  background: white;\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-top: 40px;\n  padding-bottom: 20px;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  z-index: 999; /* Ensure it is above the chatbot-toggler */\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.5s ease, visibility 0.5s ease;\n}\n\n\n.x1z2Chat-chat-popup .x1z2Chat-close-popup {\n  position: absolute;\n  top: -13px;\n  right: 3px;\n  cursor: pointer;\n  padding: 10px;\n  z-index: 3;\n  font-size: 25px;\n}\n\n.x1z2Chat-popup-assistant-avatar {\n  width: 45px; /* This can be changed to '3em' for example, to scale with font size */\n  height: 45px; /* Keep this the same as width to maintain a circle */\n  object-fit: cover;\n  border-radius: 50%;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: -22.5px; /* You can change this to '-1.5em' to scale with font size */\n  z-index: 2;\n}\n\n/* Responsive adjustments */\n@media (max-width: 600px) {\n  .x1z2Chat-popup-assistant-avatar {\n    width: 35px; /* Smaller size on small screens */\n    height: 35px;\n    top: -17.5px; /* Adjust accordingly */\n  }\n\n  .x1z2Chat-chat-popup {\n    padding-top: 30px; /* Less padding on small screens */\n    right: 20px; /* Adjust position for smaller screens */\n    bottom: 103px; /* Adjust position for smaller screens */\n  }\n}\n\n/* More media queries can be added for additional breakpoints */\n\n/* Hide images in the chat interface initially\n.chatbot img {\n  display: none;\n} */",""]);const s=r},312:t=>{"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",a=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),a&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),a&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,a,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var r={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(r[c]=!0)}for(var l=0;l<t.length;l++){var p=[].concat(t[l]);a&&r[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},500:t=>{"use strict";t.exports=function(t){return t[1]}},596:t=>{"use strict";var n=[];function e(t){for(var e=-1,a=0;a<n.length;a++)if(n[a].identifier===t){e=a;break}return e}function a(t,a){for(var i={},r=[],s=0;s<t.length;s++){var c=t[s],l=a.base?c[0]+a.base:c[0],p=i[l]||0,h="".concat(l," ").concat(p);i[l]=p+1;var d=e(h),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)n[d].references++,n[d].updater(u);else{var x=o(u,a);a.byIndex=s,n.splice(s,0,{identifier:h,updater:x,references:1})}r.push(h)}return r}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var i=a(t=t||[],o=o||{});return function(t){t=t||[];for(var r=0;r<i.length;r++){var s=e(i[r]);n[s].references--}for(var c=a(t,o),l=0;l<i.length;l++){var p=e(i[l]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}i=c}}},176:t=>{"use strict";var n={};t.exports=function(t,e){var a=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}},808:t=>{"use strict";t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},120:(t,n,e)=>{"use strict";t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},520:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var a="";e.supports&&(a+="@supports (".concat(e.supports,") {")),e.media&&(a+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(a+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),a+=e.css,o&&(a+="}"),e.media&&(a+="}"),e.supports&&(a+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(a,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},936:t=>{"use strict";t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(a){var o=n[a];if(void 0!==o)return o.exports;var i=n[a]={id:a,exports:{}};return t[a](i,i.exports,e),i.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0,(()=>{"use strict";e(952);var t=e(596),n=e.n(t),a=e(520),o=e.n(a),i=e(176),r=e.n(i),s=e(120),c=e.n(s),l=e(808),p=e.n(l),h=e(936),d=e.n(h),u=e(272),x={};function g(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function f(t,n,e){var a=function(){var a=0,o=t.length;t.forEach((function(t){var i=document.createElement(t.type);Object.entries(t.attributes).forEach((function(t){var n,e,a=(e=2,function(t){if(Array.isArray(t))return t}(n=t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var a,o,i,r,s=[],c=!0,l=!1;try{if(i=(e=e.call(t)).next,0===n){if(Object(e)!==e)return;c=!1}else for(;!(c=(a=i.call(e)).done)&&(s.push(a.value),s.length!==n);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=e.return&&(r=e.return(),Object(r)!==r))return}finally{if(l)throw o}}return s}}(n,e)||function(t,n){if(t){if("string"==typeof t)return g(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?g(t,n):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=a[0],r=a[1];return i.setAttribute(o,r)})),i.onload=function(){a++,"script"===t.type&&"function"==typeof e&&e(),a===o&&"function"==typeof n&&n()},i.onerror=function(){console.error("Error loading resource: ".concat(t.attributes.href||t.attributes.src))},"link"===t.type?document.head.appendChild(i):"script"===t.type&&document.body.appendChild(i)}))};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",(function(t){a()})):a()}x.styleTagTransform=d(),x.setAttributes=c(),x.insert=r().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=p(),n()(u.c,x),u.c&&u.c.locals&&u.c.locals,f([{type:"link",attributes:{rel:"preload",as:"style",href:"https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap"}},{type:"link",attributes:{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap"}},{type:"link",attributes:{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Urbanist&display=swap"}},{type:"link",attributes:{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"}},{type:"link",attributes:{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0"}},{type:"script",attributes:{src:"https://cdnjs.cloudflare.com/ajax/libs/uuid/8.3.2/uuid.min.js",crossorigin:"anonymous"}},{type:"link",attributes:{rel:"stylesheet",href:"webchat.css"}}],(function(){document.body.insertAdjacentHTML("beforeend",'<div>\n    <button class="x1z2Chat-chatbot-toggler">\n        <span class="material-symbols-rounded">mode_comment</span>\n        <span class="material-symbols-outlined">close</span>\n    </button>\n    \n    \x3c!-- Chat Interface --\x3e\n    <div class="x1z2Chat-chatbot">\n        <header class="x1z2Chat-chatbot-header">\n            <img src="#" alt="Logo" class="x1z2Chat-chatbot-logo">\n            <div class="x1z2Chat-chatbot-header-text">\n                <h2 class="x1z2Chat-chatbot-heading-text">Default Heading</h2>\n                <div class="x1z2Chat-status-wrapper">\n                    <p class="x1z2Chat-online-status">Default Subheading</p>\n                </div>\n            </div>\n            <span class="x1z2Chat-close-btn material-symbols-outlined">close</span>\n        </header>\n        <ul class="x1z2Chat-chatbox">\n            \x3c!-- Chat messages will be dynamically inserted here --\x3e\n        </ul>\n        \x3c!-- Hidden fields for backend data --\x3e\n        <input type="hidden" id="encryptedDataPayload" value="" />\n        <input type="hidden" id="encryptedDataId" value="" />\n        <input type="hidden" id="threadId" value="" />\n        <input type="hidden" id="runId" value="" />\n\n        \x3c!-- Chat input area --\x3e\n        <div class="x1z2Chat-chat-input">\n            <textarea placeholder="Compose your message..." spellcheck="false" required></textarea>\n            <span id="send-btn" class="x1z2Chat-send-btn material-symbols-rounded">send</span>\n        </div>\n    </div>\n\n    \x3c!-- Lightbox Modal HTML --\x3e\n    <div id="lightbox-modal" class="x1z2Chat-lightbox-modal">\n        <span class="x1z2Chat-close-lightbox">&times;</span>\n        <img class="x1z2Chat-lightbox-content">\n        <div class="x1z2Chat-caption"></div>\n    </div>\n\n    \x3c!-- Chat Popup HTML --\x3e\n    <div id="chat-popup" class="x1z2Chat-chat-popup">\n        <img src="#" class="x1z2Chat-popup-assistant-avatar">\n        <span class="x1z2Chat-close-popup material-symbols-outlined">close</span>\n        <p class="x1z2Chat-popup-message">Default Popup Message</p>\n    </div>        \n</div>'),f([{type:"script",attributes:{src:"webchat.js"}}],null,(function(){chatbotToggler=document.querySelector(".x1z2Chat-chatbot-toggler"),closeBtn=document.querySelector(".x1z2Chat-close-btn"),chatbox=document.querySelector(".x1z2Chat-chatbox"),chatInput=document.querySelector(".x1z2Chat-chat-input textarea"),sendChatBtn=document.querySelector(".x1z2Chat-chat-input span"),inputInitHeight=chatInput.scrollHeight,setupEventListeners(),setEncryptedDataPayload(),initializeChatbot()}))}))})()})();
