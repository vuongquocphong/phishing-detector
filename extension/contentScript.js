// Function to get email content
function getEmailContent() {
    const emailBody = document.querySelector(".ii.gt").innerText;
    console.log(emailBody);
    return emailBody ? emailBody : "";
}

// Send the email content to the background script for processing
chrome.runtime.sendMessage({
    action: "detectPhishing",
    content: getEmailContent()
});
