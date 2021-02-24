//front end javascript

const socket = io('http://localhost:3008');

socket.on('chat-message', data => {
    console.log(data)
})