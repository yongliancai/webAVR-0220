document.getElementById('sendButton').addEventListener('click', function() {
    const inputMessage = document.getElementById('inputMessage').value;
    sendMessageToServer(inputMessage);
    document.getElementById('inputMessage').value = '';
});

function sendMessageToServer(message) {
    fetch('http://35.226.1.111/api/message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })
    })
    .then(response => response.json())
    .then(data => {
        displayMessage(data.reply, 'bot');
    })
    .catch(error => console.error('Error:', error));
}

function displayMessage(message, sender) {
    const messagesContainer = document.getElementById('messages');
    const messageElement = document.createElement('li');
    messageElement.textContent = sender + ': ' + message;
    messagesContainer.appendChild(messageElement);
}
