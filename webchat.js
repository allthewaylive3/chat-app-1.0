// Defines the Verbose flag
const isVerbose = false; // Set to false to silence console.log statements

// Global Variables
let chatbotToggler, closeBtn, chatbox, chatInput, sendChatBtn;
let userMessage = null;
let chatbotAvatarImage;
let inputInitHeight;
let chatbotGreeting;

function getRandomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to calculate a dynamic delay based on the length of the response
function getRandomDelayBasedOnLength(responseLength, minPerChar = 150, minDelay = 3000, maxDelay = 10000) {
    let calculatedDelay = responseLength * minPerChar;
    return Math.min(Math.max(calculatedDelay, minDelay), maxDelay);
}

// Function to retrieve and set the encryptedDataPayload
function setEncryptedDataPayload() {
    // Find the script tag with the 'data-payload' attribute
    const scriptTag = document.querySelector('script[data-payload]');
    
    if (scriptTag) {
        const encryptedDataPayload = scriptTag.getAttribute('data-payload');

        if (isVerbose) {
        console.log("Encrypted Data Payload from script tag:", encryptedDataPayload);
        }
        
        const encryptedDataInput = document.getElementById('encryptedDataPayload');
        if (encryptedDataInput) {
            encryptedDataInput.value = encryptedDataPayload;
            if (isVerbose) {
            console.log("Set encryptedDataPayload value in input field:", encryptedDataInput.value);
            }
        } else {
            console.error("Failed to set encryptedDataPayload. Input field missing.");
        }
    } else {
        console.error("Failed to find script tag with 'data-payload' attribute.");
    }
}

// Function to retrieve and set the encryptedDataId
function setEncryptedDataId() {

    if (isVerbose) {
    console.log("setEncryptedDataId function called");
    }

    // Find the script tag with the 'data-id' attribute
    const scriptTag = document.querySelector('script[data-id]');
    
    if (scriptTag) {
        const encryptedDataId = scriptTag.getAttribute('data-id');

        if (isVerbose) {
        console.log("Encrypted Data ID from script tag:", encryptedDataId); //im not seeing this log 
        }
        // Assuming you have an input or a hidden field in your HTML to store the encryptedDataId
        const encryptedDataIdInput = document.getElementById('encryptedDataId');
        if (encryptedDataIdInput) {
            encryptedDataIdInput.value = encryptedDataId;

            if (isVerbose) {
            console.log("Set encryptedDataId value in input field:", encryptedDataIdInput.value);
            }

        } else {
            console.error("Failed to set encryptedDataId. Input field missing.");
        }
    } else {
        console.error("Failed to find script tag with 'data-id' attribute.");
    } //no console log is showing in this function
}

// Function to activate the chatbot
function activateChatbot() {

    if (isVerbose) {
    console.log("Starting chatbot activation process.");
    }

    const encryptedDataPayload = document.getElementById('encryptedDataPayload').value;
    const encryptedDataId = document.getElementById('encryptedDataId').value; // Make sure this variable is correctly capturing the value
    const clientHostname = window.location.hostname;
    //const clientHostname = "localhost";

    // Debugging: Log the values before sending
    if (isVerbose) {
    console.log("encryptedDataPayload:", encryptedDataPayload);
    console.log("encryptedDataId:", encryptedDataId);
    console.log("clientHostname:", clientHostname);
    }

    // Construct the request body
    const requestBody = JSON.stringify({
        dataPayload: encryptedDataPayload,
        dataId: encryptedDataId,
        hostname: clientHostname
    });

    // Debugging: Log the request body
    if (isVerbose) {
    console.log("Sending request body:", requestBody);
    }

    fetch('https://next.leads-mania.com/webchat/activate-chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: requestBody
    })
    .then(response => response.json())
    .then(data => {
        if (isVerbose) {
        console.log('Chatbot activated:', data);
        }
        if (data.success) {
            localStorage.setItem('isActivated', 'true');
            if (isVerbose) {
            console.log("Updated activation status in localStorage after successful activation.");
            }
        }
    })
    .catch(error => console.error('Error activating chatbot:', error));
}


// Function to initialize chatbot (fetch configuration, check activation)
async function initializeChatbot() {
    await fetchAndUpdateChatConfig(); // Fetch and update chat configuration
    setEncryptedDataId(); // Set encrypted data ID
    checkActivationStatus();  // Check activation status
}


// Function to get or create a new user session ID
function getSessionId() {
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
        sessionId = uuid.v4(); // Generate a new UUID
        sessionStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
}

// Function to create a thread
function createThread() {
    const encryptedDataPayload = document.getElementById('encryptedDataPayload').value;
    const encryptedDataId = document.getElementById('encryptedDataId').value;
    const clientHostname = window.location.hostname;
    //const clientHostname = "localhost";
    const userId = getSessionId(); // Get the current session ID or generate a new one

    // Construct the request body
    const requestBody = JSON.stringify({
        userId,
        dataPayload: encryptedDataPayload,
        dataId: encryptedDataId,
        hostname: clientHostname
    });

    // Debugging: Log the request body
    if (isVerbose) {
    console.log("Sending request createThread:", requestBody);
    }

    fetch('https://next.leads-mania.com/webchat/create-thread', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: requestBody
    })
    .then(response => response.json())
    .then(data => {
        if (data.success && data.data && data.data.threadID) {
            // Store the thread ID in sessionStorage
            sessionStorage.setItem('threadId', data.data.threadID);
        }
        if (isVerbose) {
        console.log('Thread created:', data);
        }
    })
    .catch(error => console.error('Error creating thread:', error));
}

// Function to create a message
async function createMessage(encryptedDataPayload, encryptedDataId, clientHostname, threadId, lastUtterance) {
    if (isVerbose) {
    console.log("createMessage - Sending request with:", { encryptedDataPayload, encryptedDataId, clientHostname, threadId, lastUtterance });
    }

    const requestBody = JSON.stringify({
        dataPayload: encryptedDataPayload,
        dataId: encryptedDataId,
        hostname: clientHostname,
        threadId,
        lastUtterance
    });
    
    if (isVerbose) {
    console.log("Sending request body for createMessage:", requestBody);
    }

    const response = await fetch('https://next.leads-mania.com/webchat/create-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: requestBody
    });
    const data = await response.json();

    if (isVerbose) {
    console.log("createMessage - Response received:", data);
    }

    if (!response.ok) {
        throw new Error(data.message || 'Failed to create message');
    }
    return data;
}


// Function to create a run
async function createRun(encryptedDataPayload, encryptedDataId, clientHostname, threadId) {

    const requestBody = JSON.stringify({
        dataPayload: encryptedDataPayload,
        dataId: encryptedDataId,
        hostname: clientHostname,
        threadId
    });
    
    if (isVerbose) {
    console.log("Sending request body for createRun:", requestBody);
    }

    try {
        const response = await fetch('https://next.leads-mania.com/webchat/create-run', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: requestBody
        });

        const data = await response.json();
        if (response.ok && data.success) {
            if (isVerbose) {
            console.log('Run created:', data);
            }
            const runId = data.data.runID; // Accessing the runID correctly
            sessionStorage.setItem('runId', runId);
            return runId;
        } else {
            console.error('Failed to create run:', data.message);
            return null;
        }
    } catch (error) {
        console.error('Error creating run:', error);
        return null;
    }
}

// Function to poll the status of a run
async function pollRunStatus(encryptedDataPayload, encryptedDataId, clientHostname, threadId, runId) {
    
    if (isVerbose) {
    console.log("pollRunStatus - Sending request with:", { encryptedDataPayload, encryptedDataId, clientHostname, threadId, runId });
    }

    // Construct the request body
    const requestBody = JSON.stringify({
        dataPayload: encryptedDataPayload,
        dataId: encryptedDataId,
        hostname: clientHostname,
        threadId: threadId,
        runId: runId
    });

    if (isVerbose) {
    console.log("Sending request body for pollRunStatus:", requestBody);
    }

    try {
        const response = await fetch('https://next.leads-mania.com/webchat/poll-status', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: requestBody
        });

        const data = await response.json();
        if (isVerbose) {
        console.log("pollRunStatus - Response received:", data);
        }

        if (!response.ok) {
            throw new Error(data.message || 'Failed to poll run status.');
        }

        // Check if data contains status and return it
        if (data.success && data.data && data.data.status) {
            if (isVerbose) {
            console.log('Run status:', data.data.status);
            }
            return data.data.status; // Return the status of the run
        } else {
            console.error('Failed to poll run status:', data.message);
            return null;
        }
    } catch (error) {
        console.error('Error polling run status:', error);
        return null; // Return null in case of an error
    }
}


// Function to return the response from the assistant
async function getAssistantResponse(encryptedDataPayload, encryptedDataId, clientHostname, threadId, runId) {
    
    if (isVerbose) {
    console.log('getAssistantResponse called with:', { encryptedDataPayload, encryptedDataId, clientHostname, threadId, runId });
    }

    // Construct the request body
    const requestBody = JSON.stringify({
        dataPayload: encryptedDataPayload,
        dataId: encryptedDataId,
        hostname: clientHostname,
        threadId: threadId,
        runId: runId
    });

    if (isVerbose) {
    console.log("Sending request body for getAssistantResponse:", requestBody);
    }

    try {
        const response = await fetch('https://next.leads-mania.com/webchat/get-assistant-response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: requestBody
        });

        const data = await response.json();

        if (isVerbose) {
        console.log('getAssistantResponse - Response data:', data);
        }

        if (!response.ok) {
            throw new Error(data.message || 'Failed to get assistant response.');
        }

        // Correctly extract the assistant's reply
        const assistantReply = data.data.assistantReply;
        if (isVerbose) {
        console.log('getAssistantResponse - Assistant reply:', assistantReply);
        }

        return assistantReply; // Return the assistant's response
    } catch (error) {
        console.error('Error getting assistant response:', error);
        return null; // Return null in case of an error
    }
}


// Function to fetch and update chat configuration
async function fetchAndUpdateChatConfig() {
    const encryptedDataPayload = document.getElementById('encryptedDataPayload').value;
    const sessionStorageKey = `chatConfig-${encryptedDataPayload}`;

    if (!sessionStorage.getItem(sessionStorageKey)) {
        if (isVerbose) {
        console.log('Fetching chat configuration from server.');
        }
        const response = await fetch('https://next.leads-mania.com/webchat/get-chat-config', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ dataPayload: encryptedDataPayload })
        });
        const chatConfig = await response.json();

        if (response.ok) {
            sessionStorage.setItem(sessionStorageKey, JSON.stringify(chatConfig));
            updateChatUI(chatConfig);
        } else {
            console.error('Failed to fetch chat configuration:', chatConfig.message);
        }
    } else {
        if (isVerbose) {
        console.log('Using stored chat configuration from sessionStorage.');
        }
        const chatConfig = JSON.parse(sessionStorage.getItem(sessionStorageKey));
        updateChatUI(chatConfig);
    }
}

// Function to open the lightbox modal
function openLightboxModal(src) {
    // console.log("Opening lightbox modal with image:", src);
    const modal = document.querySelector(".x1z2Chat-lightbox-modal");
    const modalImg = modal.querySelector(".x1z2Chat-lightbox-content");

    modalImg.src = src;
    modal.style.display = "block";

    // Close modal when clicking on the close button or anywhere outside the image
    modal.addEventListener('click', function(event) {
        if (event.target === modal || event.target.className === "x1z2Chat-close-lightbox") {
            if (isVerbose) {
            console.log("Closing lightbox modal.");
            }
            modal.style.display = "none";
        }
    });
}

// Function to handle chatbot toggle
function toggleChatbot() {
    document.body.classList.toggle("x1z2Chat-show-chatbot");
    
    // Create a thread only if no thread exists and the chatbot is being opened
    if (!sessionStorage.getItem('threadId') && document.body.classList.contains("x1z2Chat-show-chatbot")) {
        createThread();
    }

    // Send the initial greeting if it hasn't been sent yet
    if (!document.querySelector(".x1z2Chat-chatbox .incoming") && chatbotGreeting) {
        setTimeout(() => {
            addMessageToChat(chatbotGreeting, "incoming", false, chatbotAvatarImage);
        }, 1000);
    }
}

function convertMarkdownToHtml(markdownText) {
    // Convert bold text
    const boldPattern = /\*\*(.*?)\*\*/g;
    let htmlText = markdownText.replace(boldPattern, '<strong>$1</strong>');

    // Convert image links (Markdown syntax)
    const imagePattern = /!\[(.*?)\]\((https?:\/\/\S+(?:jpg|jpeg|png|gif|bmp))\)/gi;
    htmlText = htmlText.replace(imagePattern, '<a href="$2" class="x1z2Chat-image-link" target="_blank"><img src="$2" alt="$1" class="thumbnail"></a>');

    // Convert regular links (Markdown syntax)
    const linkPattern = /\[(.*?)\]\((https?:\/\/\S+)\)/gi;
    htmlText = htmlText.replace(linkPattern, '<a href="$2" target="_blank">$1</a>');

    return htmlText;
}

// Function to show typing indicator in chat
function showTypingIndicator() {
    // console.log("Showing typing indicator...");
    const typingIndicator = document.createElement("div");
    typingIndicator.classList.add("x1z2Chat-typing");

    // Create three span elements for the dots
    for (let i = 0; i < 3; i++) {
        const dot = document.createElement("span");
        typingIndicator.appendChild(dot);
    }

    chatbox.appendChild(typingIndicator);
    chatbox.scrollTo(0, chatbox.scrollHeight);
}

// Function to remove the typing indicator
function removeTypingIndicator() {
    // console.log("Removing typing indicator...");
    const typingIndicator = document.querySelector(".x1z2Chat-typing");
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Function to add messages to chat
const addMessageToChat = (message, className, isHtml = false, isTypingIndicator = false, avatarImageUrl = chatbotAvatarImage) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("x1z2Chat-chat", className);

    const chatBubble = document.createElement("p");
    // chatBubble.classList.add("x1z2Chat-chat-bubble");

    let convertedMessage = isHtml ? message : convertMarkdownToHtml(message);
    chatBubble.innerHTML = convertedMessage;

    if (className === "incoming") {
        // For incoming messages, include the avatar image
        const avatarImg = document.createElement("img");
        avatarImg.src = avatarImageUrl;
        avatarImg.classList.add("x1z2Chat-assistant-avatar");
        chatLi.appendChild(avatarImg);
    }

    chatLi.appendChild(chatBubble);
    chatbox.appendChild(chatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
};


// Function to update UI with chat configuration data
function updateChatUI(chatConfig) {
    chatbotGreeting = chatConfig.greeting_message;
    if (isVerbose) {
    console.log("Updating chat UI with configuration:", chatConfig);
    }

    // Update the primary color
    if (chatConfig.colorTheme) {
        document.documentElement.style.setProperty('--primary-color', chatConfig.colorTheme);
    }
    
    document.querySelector('.x1z2Chat-chatbot-logo').src = chatConfig.company_image;
    document.querySelector('.x1z2Chat-chatbot-heading-text').textContent = chatConfig.heading_text;
    document.querySelector('.x1z2Chat-online-status').textContent = chatConfig.subheading_text;
    chatbotAvatarImage = chatConfig.avatar_image;
    document.querySelector('.x1z2Chat-popup-assistant-avatar').src = chatConfig.popup_image;
    document.querySelector('.x1z2Chat-popup-message').textContent = chatConfig.popup_message;
    
    // Store activation status
    localStorage.setItem('isActivated', chatConfig.is_activated);
    if (isVerbose) {
    console.log("Stored activation status:", chatConfig.is_activated);
    }

}

// Function to check activation status
function checkActivationStatus() {
    const isActivated = localStorage.getItem('isActivated');
    console.log("Checking activation status:", isActivated);
    
    // Convert the retrieved value to a boolean for accurate comparison
    const isActivatedBool = isActivated === '1';

    if (!isActivatedBool) {
        console.log("Activating chat as it is not yet activated.");
        // Activation has not been done or is not marked as activated
        activateChatbot();
    } else {
        console.log("Chat is already activated.");
    }
}


// Process the user message by creating a run, polling the status, and getting the response
async function processUserMessage(message) {
    if (isVerbose) {
    console.log("processUserMessage - Received message:", message);
    }
    try {
        // Retrieve encrypted data and hostname from the DOM elements
        const encryptedDataPayload = document.getElementById('encryptedDataPayload').value;
        const encryptedDataId = document.getElementById('encryptedDataId').value;
        const clientHostname = document.location.hostname; // Dynamically get the hostname
        // const clientHostname = "localhost"; // Dynamically get the hostname
        const threadId = sessionStorage.getItem('threadId'); // Assuming threadId is stored in sessionStorage

        // Step 1: Create a message
        if (isVerbose) {
        console.log("processUserMessage - Creating message with:", message);
        }
        await createMessage(encryptedDataPayload, encryptedDataId, clientHostname, threadId, message); // Adjust parameters as per the latest function signature

        // Step 2: Create a run
        if (isVerbose) {
        console.log("processUserMessage - Creating run.");
        }
        const runId = await createRun(encryptedDataPayload, encryptedDataId, clientHostname, threadId); // Adjust parameters as per the latest function signature
        if (isVerbose) {
        console.log("processUserMessage - Run created with ID:", runId);
        }

        // Step 3: Poll for the status of the run
        let runStatus;
        do {
            runStatus = await pollRunStatus(encryptedDataPayload, encryptedDataId, clientHostname, threadId, runId); // Adjust parameters as per the latest function signature
            if (isVerbose) {
            console.log("Polling run status:", runStatus);
            }
            await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds before polling again
        } while (runStatus !== 'completed');

        // Step 4: Get the assistant's response
        if (isVerbose) {
        console.log("processUserMessage - Getting assistant's response.");
        }
        const assistantResponse = await getAssistantResponse(encryptedDataPayload, encryptedDataId, clientHostname, threadId, runId); // Adjust parameters as per the latest function signature

        // Display the assistant's response
        if (assistantResponse) {
            addMessageToChat(assistantResponse, "incoming");
            removeTypingIndicator(); // Remove typing indicator as soon as the response is displayed
            if (isVerbose) {
            console.log("processUserMessage - Assistant response:", assistantResponse);
            }
        }
    } catch (error) {
        console.error('Error processing user message:', error);
    }
}


// Handle chat function
const handleChat = async (message) => {
    if (!message) {
        if (isVerbose) {
        console.log("handleChat - No message entered. Exiting.");
        }
        return;
    }

    // Add the user message to the chat as an outgoing message
    addMessageToChat(message, "outgoing");
    if (isVerbose) {
    console.log("handleChat - Message added to chat:", message);
    }

    // Clear the chat input field
    chatInput.value = "";
    if (isVerbose) {
    console.log("handleChat - Chat input cleared");
    }

    // Generate a random initial delay for showing the typing indicator
    const initialTypingDelay = getRandomDelay(4000, 5000);

    setTimeout(async () => {
        // Show typing indicator after the initialTypingDelay
        showTypingIndicator();
        if (isVerbose) {
        console.log("handleChat - Showing typing indicator.");
        }

        // Retrieve necessary data
        const encryptedDataPayload = document.getElementById('encryptedDataPayload').value;
        const threadId = sessionStorage.getItem('threadId');
        if (isVerbose) {
        console.log("handleChat - encryptedDataPayload and threadId:", encryptedDataPayload, threadId);
        }

        try {
            // Process the user message
            if (isVerbose) {
            console.log("handleChat - Calling processUserMessage with:", message);
            }
            await processUserMessage(message, encryptedDataPayload, threadId);
        } catch (error) {
            console.error("Error processing user message:", error);
        }

        // The typing indicator will be removed inside processUserMessage after receiving the assistant's response
    }, initialTypingDelay);
};

function setupEventListeners() {
    chatbotToggler.addEventListener("click", toggleChatbot);
    sendChatBtn.addEventListener("click", () => { handleChat(chatInput.value.trim()); });

    chatInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault(); // Prevent the default action (i.e., inserting a newline)
            handleChat(chatInput.value.trim()); // Call the handleChat function with the trimmed message
        }
    });
    // Event listener for thumbnails
    chatbox.addEventListener('click', function(event) {
        if (event.target.classList.contains('x1z2Chat-image-link') || event.target.classList.contains('thumbnail')) {
            event.preventDefault();
            let imgSrc = event.target.href || event.target.src;
            openLightboxModal(imgSrc);
        }
    });    
    // Add event listeners to other queried DOM elements as needed
}

if (isVerbose) {
console.log("Script loaded");
}

function onDomContentLoaded() {
    if (isVerbose) {
    console.log("DOMContentLoaded event triggered or DOM already loaded");
    }

    // Get references to the chat popup, close button, and chatbot toggler
    var chatPopup = document.getElementById('chat-popup');
    var closeButton = document.querySelector('.x1z2Chat-close-popup');
    var chatbotToggler = document.querySelector('.x1z2Chat-chatbot-toggler');

    if (isVerbose) {
    console.log("chatPopup:", chatPopup);
    console.log("closeButton:", closeButton);
    console.log("chatbotToggler:", chatbotToggler);
    }

    // Variable to track if the user has scrolled past a certain point
    var hasScrolled = false;

    // Add scroll event listener
    window.addEventListener('scroll', function() {
        if (isVerbose) {
        console.log("Scroll event triggered, pageYOffset:", window.pageYOffset);
        }
        if (window.pageYOffset > 300 && !hasScrolled) {
            if (isVerbose) {
            console.log("User scrolled more than 300px, showing popup");
            }
            hasScrolled = true;
            setTimeout(function() {
                if (!sessionStorage.getItem('popupClosed')) {
                    if (isVerbose) {
                    console.log("Showing popup");
                    }
                    chatPopup.style.opacity = 1;
                    chatPopup.style.visibility = 'visible';
                } else {
                    if (isVerbose) {
                    console.log("Popup previously closed, not showing");
                    }
                }
            }, 4000);
        }
    });

    // Add click event listener to the close button
    if (closeButton) {
        if (isVerbose) {
        console.log("Adding click listener to closeButton");
        }
        closeButton.addEventListener('click', closePopup);
    } else {
        if (isVerbose) {
        console.log("closeButton not found");
        }
    }

    // Add click event listener to the chatbot toggler
    if (chatbotToggler) {
        if (isVerbose) {
        console.log("Adding click listener to chatbotToggler");
        }
        chatbotToggler.addEventListener('click', closePopup);
    } else {
        if (isVerbose) {
        console.log("chatbotToggler not found");
        }
    }

    // Add click event listener to the chat popup
    if (chatPopup) {
        chatPopup.addEventListener('click', function() {
            if (isVerbose) {
            console.log("Chat popup clicked, toggling chatbot");
            }
            toggleChatbot();
            // Optionally, close the popup when the chatbot is opened
            closePopup();
        });
    } else {
        if (isVerbose) {
        console.log("chatPopup not found");
        }
    }

    // Function to close the popup
    function closePopup() {
        if (isVerbose) {
        console.log("Closing popup");
        }
        chatPopup.style.opacity = 0;
        chatPopup.style.visibility = 'hidden';
        sessionStorage.setItem('popupClosed', 'true');
    }
}

if (document.readyState === "loading") {
    document.addEventListener('DOMContentLoaded', onDomContentLoaded);
} else {
    onDomContentLoaded();
}

