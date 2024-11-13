// Include the chat widget JavaScript from the CDN
// Ensure this script is included in the HTML before this main.js
// createChat function is available after loading chat.bundle.umd.js

createChat({
    webhookUrl: 'https://sofrito.app.n8n.cloud/webhook/chat', // Ensure this matches your webhook URL
    parentElementSelector: '#n8n-chat'
});
