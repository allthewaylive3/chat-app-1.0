(()=>{function t(t,e,a,s){Object.defineProperty(t,e,{get:a,set:s,enumerable:!0,configurable:!0})}var e=globalThis,a={},s={},r=e.parcelRequire1352;null==r&&((r=function(t){if(t in a)return a[t].exports;if(t in s){var e=s[t];delete s[t];var r={id:t,exports:{}};return a[t]=r,e.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){s[t]=e},e.parcelRequire1352=r);var n=r.register;function o(t,e,a){document.addEventListener("DOMContentLoaded",s=>{let r=0,n=t.length;t.forEach(t=>{let s=document.createElement(t.type);Object.entries(t.attributes).forEach(([t,e])=>s.setAttribute(t,e)),s.onload=()=>{r++,"script"===t.type&&"function"==typeof a&&a(),r===n&&"function"==typeof e&&e()},s.onerror=()=>{console.error(`Error loading resource: ${t.attributes.href||t.attributes.src}`)},"link"===t.type?document.head.appendChild(s):"script"===t.type&&document.body.appendChild(s)})})}n("kI8SP",function(e,a){t(e.exports,"register",()=>s,t=>s=t),t(e.exports,"resolve",()=>r,t=>r=t);var s,r,n=new Map;s=function(t,e){for(var a=0;a<e.length-1;a+=2)n.set(e[a],{baseUrl:t,path:e[a+1]})},r=function(t){var e=n.get(t);if(null==e)throw Error("Could not resolve bundle with id "+t);return new URL(e.path,e.baseUrl).toString()}}),n("hIarR",function(e,a){t(e.exports,"getBundleURL",()=>s,t=>s=t);var s,r={};s=function(t){var e=r[t];return e||(e=function(){try{throw Error()}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)return(""+t[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),r[t]=e),e}}),n("7sAWT",function(t,e){t.exports=r("dNLwc")(r("kI8SP").resolve("cfuMX")).then(()=>r("k19Rm"))}),n("dNLwc",function(t,e){var a=r("7lV8K");t.exports=a(function(t){return new Promise(function(e,a){if([].concat(document.getElementsByTagName("script")).some(function(e){return e.src===t})){e();return}var s=document.createElement("link");s.href=t,s.rel="preload",s.as="script",document.head.appendChild(s);var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.src=t,r.onerror=function(e){var s=TypeError("Failed to fetch dynamically imported module: ".concat(t,". Error: ").concat(e.message));r.onerror=r.onload=null,r.remove(),a(s)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})})}),n("7lV8K",function(t,e){var a={},s={},r={};t.exports=function(t,e){return function(n){var o=function(t){switch(t){case"preload":return s;case"prefetch":return r;default:return a}}(e);return o[n]?o[n]:o[n]=t.apply(null,arguments).catch(function(t){throw delete o[n],t})}}}),r("kI8SP").register(r("hIarR").getBundleURL("59myI"),JSON.parse('["59myI","chat-embed.js","cfuMX","webchat.8333e173.js","blwdD","chat-embed.css"]')),r("7sAWT").then(t=>{}).catch(t=>console.error("Failed to load webchat.js",t));let l=`<div>
    <button class="x1z2Chat-chatbot-toggler">
        <span class="material-symbols-rounded">mode_comment</span>
        <span class="material-symbols-outlined">close</span>
    </button>
    
    <!-- Chat Interface -->
    <div class="x1z2Chat-chatbot">
        <header class="x1z2Chat-chatbot-header">
            <img src="#" alt="Logo" class="x1z2Chat-chatbot-logo">
            <div class="x1z2Chat-chatbot-header-text">
                <h2 class="x1z2Chat-chatbot-heading-text">Default Heading</h2>
                <div class="x1z2Chat-status-wrapper">
                    <p class="x1z2Chat-online-status">Default Subheading</p>
                </div>
            </div>
            <span class="x1z2Chat-close-btn material-symbols-outlined">close</span>
        </header>
        <ul class="x1z2Chat-chatbox">
            <!-- Chat messages will be dynamically inserted here -->
        </ul>
        <!-- Hidden fields for backend data -->
        <input type="hidden" id="encryptedDataPayload" value="" />
        <input type="hidden" id="encryptedDataId" value="" />
        <input type="hidden" id="threadId" value="" />
        <input type="hidden" id="runId" value="" />

        <!-- Chat input area -->
        <div class="x1z2Chat-chat-input">
            <textarea placeholder="Compose your message..." spellcheck="false" required></textarea>
            <span id="send-btn" class="x1z2Chat-send-btn material-symbols-rounded">send</span>
        </div>
    </div>

    <!-- Lightbox Modal HTML -->
    <div id="lightbox-modal" class="x1z2Chat-lightbox-modal">
        <span class="x1z2Chat-close-lightbox">&times;</span>
        <img class="x1z2Chat-lightbox-content">
        <div class="x1z2Chat-caption"></div>
    </div>

    <!-- Chat Popup HTML -->
    <div id="chat-popup" class="x1z2Chat-chat-popup">
        <img src="#" class="x1z2Chat-popup-assistant-avatar">
        <span class="x1z2Chat-close-popup material-symbols-outlined">close</span>
        <p class="x1z2Chat-popup-message">Default Popup Message</p>
    </div>        
</div>`;o([{type:"link",attributes:{rel:"preload",as:"style",href:"https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap"}},{type:"link",attributes:{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap"}},{type:"link",attributes:{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Urbanist&display=swap"}},{type:"link",attributes:{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"}},{type:"link",attributes:{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0"}},{type:"script",attributes:{src:"https://cdnjs.cloudflare.com/ajax/libs/uuid/8.3.2/uuid.min.js",crossorigin:"anonymous"}},{type:"link",attributes:{rel:"stylesheet",href:"webchat.css"}}],()=>{document.body.insertAdjacentHTML("beforeend",l),o([{type:"script",attributes:{src:"webchat.js"}}],null,()=>{chatbotToggler=document.querySelector(".x1z2Chat-chatbot-toggler"),closeBtn=document.querySelector(".x1z2Chat-close-btn"),chatbox=document.querySelector(".x1z2Chat-chatbox"),chatInput=document.querySelector(".x1z2Chat-chat-input textarea"),sendChatBtn=document.querySelector(".x1z2Chat-chat-input span"),inputInitHeight=chatInput.scrollHeight,setupEventListeners(),setEncryptedDataPayload(),initializeChatbot()})})})();
//# sourceMappingURL=chat-embed.js.map
