function getEmailContent() {
    // Get the email subject
    const emailSubject = document.querySelector(".ha h2").innerText;
    console.log("Subject: ", emailSubject);

    // Get the email body
    const emailBody = document.querySelector(".ii.gt").innerText;
    console.log("Body: ", emailBody);

    // Get the sender's email address
    const senderEmailElement = document.querySelector(".gD"); // This is usually the selector for the sender's email
    const senderEmail = senderEmailElement ? senderEmailElement.getAttribute("email") : "Unknown";
    console.log("Sender Email: ", senderEmail);

    // Extract all URLs from the email body
    const urlElements = document.querySelectorAll(".ii.gt a"); // Find all <a> tags in the email body
    let urls = [];
    urlElements.forEach(element => {
        const url = element.getAttribute("href");
        if (url) {
            urls.push(url);
        }
    });
    console.log("URLs: ", urls);

    // Combine the email content
    var emailContent = `${emailSubject}\n${senderEmail}\n\n${emailBody}`;
    console.log("Email Content: ", emailContent);

    // Remove trailing and leading whitespaces
    emailContent = emailContent.trim();

    // Return an object with both email content and URLs
    return {
        content: emailContent ? emailContent : "",
        urls: urls.length > 0 ? urls : []
    };
}

// Send the email content to the background script for processing
chrome.runtime.sendMessage({
    action: "detectPhishing",
    content: getEmailContent()
});
