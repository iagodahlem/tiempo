const handler = require('./handler')
const events = require('../constants/events')
const { entriesService } = require('../services')

const timerSocket = (io, socket) => {
  socket.on(events.TIMER_START, handler(io, socket, onStart))
  socket.on(events.TIMER_GO_ON, handler(io, socket, onGoOn))
  socket.on(events.TIMER_PAUSE, handler(io, socket, onPause))
  socket.on(events.TIMER_STOP, handler(io, socket, onStop))
}

const onStart = async (io, socket, { type }) => {
  console.log('timer start')

  const entry = await entriesService.create({
    type,
  })

  io.emit(events.TIMER_START, { entry })
}

const onGoOn = async (io, socket, { id }) => {
  console.log('timer go on')

  const entry = await entriesService.update(id, {
    start: Date.now(),
    running: true,
  })

  io.emit(events.TIMER_GO_ON, { entry })
}

const onPause = async (io, socket, { id }) => {
  console.log('timer pause')

  const entry = await entriesService.update(id, {
    running: false,
  })

  io.emit(events.TIMER_PAUSE, { entry })
}

const onStop = async (io, socket, { id } = {}) => {
  console.log('timer stop')

  const entry = await entriesService.update(id, {
    end: Date.now(),
    running: false,
  })

  io.emit(events.TIMER_STOP, { entry })
}

module.exports = timerSocket
