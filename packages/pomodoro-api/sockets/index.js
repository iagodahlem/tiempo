const timer = require('./timerSocket')

const sockets = [
  timer,
]

const connectSocket = (io) => {
  io.on('connection', (client) => {
    console.log('io connected')

    sockets.forEach(socket => socket(io, client))

    client.on('diconnect', () => {
      console.log('disconnected')
    })
  })
}

module.exports = connectSocket
