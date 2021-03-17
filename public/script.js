const socket = io('/')
const myPeer = new Peer(undefined, {
    
})

socket.emit('join-room', ROOM_ID, 10)

socket.on('user-connected', userId => {

})