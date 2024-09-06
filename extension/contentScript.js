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

    // Combine the email content
    var emailContent = `${emailSubject}\n${senderEmail}\n\n${emailBody}`;
    console.log("Email Content: ", emailContent);

    // Remove trailing and leading whitespaces
    emailContent = emailContent.trim();

    return emailContent ? emailContent : "";
}


// Send the email content to the background script for processing
chrome.runtime.sendMessage({
    action: "detectPhishing",
    content: getEmailContent()
});
