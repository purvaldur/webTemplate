const socketIO = require('socket.io');

const io = socketIO()

io.on('connection', (socket) => {
    console.log('Socket connected!');
})

module.exports = io;
