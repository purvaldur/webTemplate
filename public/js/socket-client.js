const socket = io()

socket.on('connect', () => {
    console.log('Socket.io status: Connected!')
})
