const io = require('socket.io')(3008)

io.compress('connnection', socket => {
    socket.emit('chat-message', 'hello world')
})