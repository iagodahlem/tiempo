const timer = require('./timerSocket')

const sockets = (io) => {
  io.on('connection', (socket) => {
    console.log('connected')

    Object.entries(timer(io, socket))
      .forEach(([event, handler]) => {
        socket.on(event, handler)
      })
  })
}

module.exports = sockets
