const handler = require('./handler')
const { entriesService } = require('../services')

const TIMER_START = 'TIMER_START'
const TIMER_GO_ON = 'TIMER_GO_ON'
const TIMER_PAUSE = 'TIMER_PAUSE'
const TIMER_STOP = 'TIMER_STOP'

const timerSocket = (io, socket) => {
  socket.on(TIMER_START, handler(io, socket, onStart))
  socket.on(TIMER_GO_ON, handler(io, socket, onGoOn))
  socket.on(TIMER_PAUSE, handler(io, socket, onPause))
  socket.on(TIMER_STOP, handler(io, socket, onStop))
}

const onStart = async (io, socket, { type }) => {
  console.log('timer start')

  const entry = await entriesService.create({
    type,
  })

  io.emit(TIMER_START, { entry })
}

const onGoOn = async (io, socket, { id }) => {
  console.log('timer go on')

  const entry = await entriesService.update(id, {
    start: Date.now(),
    running: true,
  })

  io.emit(TIMER_GO_ON, { entry })
}

const onPause = async (io, socket, { id }) => {
  console.log('timer pause')

  const entry = await entriesService.update(id, {
    running: false,
  })

  io.emit(TIMER_PAUSE, { entry })
}

const onStop = async (io, socket, { id } = {}) => {
  console.log('timer stop')

  const entry = await entriesService.update(id, {
    end: Date.now(),
    running: false,
  })

  io.emit(TIMER_STOP, { entry })
}

module.exports = timerSocket
