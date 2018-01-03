const initialDataSocket = require('./initialDataSocket')
const timerSocket = require('./timerSocket')

const handlers = [
  initialDataSocket,
  timerSocket,
]

const sockets = (io) => {
  io.on('connection', (socket) => {
    console.log('connected')

    handlers.forEach(handler => handler(io, socket))

    socket.on('disconnect', () => {
      console.log('disconnected')
    })
  })
}

module.exports = sockets
