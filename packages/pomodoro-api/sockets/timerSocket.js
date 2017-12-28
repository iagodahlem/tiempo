const handler = require('./handler')
const { entriesService } = require('../services')

const TIMER_START = 'TIMER_START'
const TIMER_STOP = 'TIMER_STOP'
const TIMER_PAUSE = 'TIMER_PAUSE'

const timerSocket = (io, socket) => {
  const handlers = {
    [TIMER_START]: handler(io, socket, start),
    [TIMER_STOP]: stop,
    [TIMER_PAUSE]: pause,
  }

  return handlers
}

const start = async (io, socket, { id } = {}) => {
  console.log('timer start')

  const entry = id
    ? await entriesService.update(id, { start: Date.now(), running: true })
    : await entriesService.create({ start: Date.now(), type: 'Pomodoro' })

  io.emit(TIMER_START, { entry })
}

const stop = async (io, socket, { id } = {}) => {
  console.log('timer stop')

  const entry = await entriesService.update(id, {
    end: Date.now(),
    running: false,
  })

  io.emit(TIMER_STOP, { entry })
}

const pause = () => {
  console.log('timer pause')
}

module.exports = timerSocket
