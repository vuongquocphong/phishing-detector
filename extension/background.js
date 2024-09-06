// Log the installation event
chrome.runtime.onInstalled.addListener(() => {
    console.log('Phishing Detector extension installed');
});

// Function to get the current active tab and inject the content script
function injectContentScript() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs && tabs.length > 0) {
            let currentTab = tabs[0];
            // Check if the tab URL is not a chrome:// or about: URL
            if (currentTab.url && !currentTab.url.startsWith('chrome://') && !currentTab.url.startsWith('about:')) {
                if (currentTab.id) {
                    chrome.scripting.executeScript({
                        target: { tabId: currentTab.id },
                        files: ['contentScript.js']
                    });
                } else {
                    console.error('No valid tabId found for the current tab.');
                }
            } else {
                console.error('Cannot inject script into a chrome:// or about: URL');
            }
        } else {
            console.error('No active tab found.');
        }
    });
}

// Call the function to inject the content script into the current tab
injectContentScript();

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.content == '') {
        // If the email content is empty, send an error message
        chrome.runtime.sendMessage({
            action: 'displayResult',
            result: ''
        });
        sendResponse({ error: 'No email content found.' });
        return true;
    }
    if (message.action === 'detectPhishing') {
        fetch('http://127.0.0.1:5000/predict', {
            name: 'Phishing Detector API',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ email_content: message.content })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            
            // Send the phishing result to the popup script
            chrome.runtime.sendMessage({
                action: 'displayResult',
                result: data.prediction
            });
            sendResponse(data);
        })
        .catch(error => {
            chrome.runtime.sendMessage({
                action: 'displayResult',
                result: 'error'
            });
            sendResponse({ error: error });
            console.error('Error:', error);
        });

        return true; // Keep the message channel open
    }
});
