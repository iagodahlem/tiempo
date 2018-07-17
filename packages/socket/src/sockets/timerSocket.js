const handler = require('./handler')
const events = require('../constants/events')
const { entriesService } = require('../services')

const timerSocket = (io, socket) => {
  socket.on(events.TIMER_START, handler(io, socket, onStart))
  socket.on(events.TIMER_GO_ON, handler(io, socket, onGoOn))
  socket.on(events.TIMER_TICK, handler(io, socket, onTick))
  socket.on(events.TIMER_PAUSE, handler(io, socket, onPause))
  socket.on(events.TIMER_STOP, handler(io, socket, onStop))
}

const onStart = async (io, socket, { type }) => {
  const entry = await entriesService.create({
    type,
  })

  io.emit(events.TIMER_START, { entry })
}

const onGoOn = async (io, socket, { id }) => {
  const { runned } = await entriesService.show(id)
  const entry = await entriesService.update(id, {
    update: Date.now() - runned,
    running: true,
    paused: false,
  })

  io.emit(events.TIMER_GO_ON, { entry })
}

const onTick = (io, socket) => {
  io.emit(events.TIMER_TICK, { now: Date.now() })
}

const onPause = async (io, socket, { id, runned }) => {
  const entry = await entriesService.update(id, {
    runned,
    running: false,
    paused: true,
  })

  io.emit(events.TIMER_PAUSE, { entry })
}

const onStop = async (io, socket, { id } = {}) => {
  const entry = await entriesService.update(id, {
    end: Date.now(),
    running: false,
    paused: false,
  })

  io.emit(events.TIMER_STOP, { entry })
}

module.exports = timerSocket
