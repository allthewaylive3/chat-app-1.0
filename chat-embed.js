// // At the top of your chat-embed.js or where it makes sense logically
// import('./webchat.js').then((module) => {
//     // Use the module here, if needed, or just ensure it's loaded
//     // console.log('webchat.js loaded');
// }).catch(err => console.error('Failed to load webchat.js', err));

// import './webchat.css';

function preloadResources(resources, htmlCallback, scriptCallback) {
    document.addEventListener('DOMContentLoaded', (event) => {
        let loadedCount = 0;
        let totalResources = resources.length;
        resources.forEach(resource => {
            const tag = document.createElement(resource.type);
            Object.entries(resource.attributes).forEach(([key, value]) => tag.setAttribute(key, value));

            tag.onload = () => {
                loadedCount++;
                if (resource.type === 'script' && typeof scriptCallback === 'function') {
                    scriptCallback(); // Call script callback if it's a function
                }
                if (loadedCount === totalResources && typeof htmlCallback === 'function') {
                    htmlCallback(); // Call HTML callback if it's a function
                }
            };

            tag.onerror = () => {
                console.error(`Error loading resource: ${resource.attributes.href || resource.attributes.src}`);
            };

            if (resource.type === 'link') {
                document.head.appendChild(tag);
            } else if (resource.type === 'script') {
                document.body.appendChild(tag);
            }
        });
    });
}

// Dynamically insert chat HTML
const chatHtml = `<div>
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
</div>`;



function queryDOMElements() {
    chatbotToggler = document.querySelector(".x1z2Chat-chatbot-toggler");
    closeBtn = document.querySelector(".x1z2Chat-close-btn");
    chatbox = document.querySelector(".x1z2Chat-chatbox");
    chatInput = document.querySelector(".x1z2Chat-chat-input textarea");
    sendChatBtn = document.querySelector(".x1z2Chat-chat-input span");
    inputInitHeight = chatInput.scrollHeight;
}


// Preload CSS and other scripts except webchat.js
preloadResources([
    // Preload Inter font
    { type: 'link', attributes: { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap' }},

    // Then load Inter font as a stylesheet
    { type: 'link', attributes: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap' }},
    { type: 'link', attributes: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Urbanist&display=swap' }},
    { type: 'link', attributes: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0' }},
    { type: 'link', attributes: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0' }},
    { type: 'script', attributes: { src: 'https://cdnjs.cloudflare.com/ajax/libs/uuid/8.3.2/uuid.min.js', crossorigin: 'anonymous' }},
    { type: 'link', attributes: { rel: 'stylesheet', href: 'webchat.css' }},
], () => {
    // Inject HTML after these resources are preloaded
    document.body.insertAdjacentHTML('beforeend', chatHtml);
    
    // Preload webchat.js separately
    preloadResources([
        { type: 'script', attributes: { src: 'webchat.js' }}
    ], null, () => {
        // Callback after webchat.js is loaded
        queryDOMElements();       // First, query the DOM elements
        setupEventListeners();    // Then, set up event listeners
        setEncryptedDataPayload();
        initializeChatbot();
    });
});


