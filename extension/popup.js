document.getElementById('checkPhishing').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ['contentScript.js']
        });
    });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'displayResult') {
        const result = message.result;
        const resultElement = document.getElementById('phishingResult');
        resultElement.style.display = 'block';
        // bold text, size 20px
        resultElement.style.fontWeight = 'bold';
        resultElement.style.fontSize = '20px';
        if (resultElement) {
            if (result === 'Phishing') {
                resultElement.innerText = "This email is likely a phishing email.";
            }
            else {
                resultElement.innerText = "This email contains no suspicious content.";
            }
        }
    }
});