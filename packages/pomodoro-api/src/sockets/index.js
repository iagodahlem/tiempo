const initialDataSocket = require('./initialDataSocket')
const timerSocket = require('./timerSocket')

const events = [
  initialDataSocket,
  timerSocket,
]

const sockets = (io) => {
  io.on('connection', (socket) => {
    console.log('connected')

    events.forEach(event => event(io, socket))

    socket.on('disconnect', () => {
      console.log('disconnected')
    })
  })
}

module.exports = sockets
