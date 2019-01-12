import uuid from 'uuid/v4'

const ONE_SECOND = 1000
const ONE_MINUTE = ONE_SECOND * 60
const FIVE_MINUTES = ONE_MINUTE * 5
const FIFTEEN_MINUTES = ONE_MINUTE * 15
const TWENTY_FIVE_MINUTES = ONE_MINUTE * 25

const types = {
  'short-break': { id: 'short-break', name: 'Short Break', duration: FIVE_MINUTES },
  'long-break': { id: 'long-break', name: 'Long Break', duration: FIFTEEN_MINUTES },
  'pomodoro': { id: 'pomodoro', name: 'Pomodoro', duration: TWENTY_FIVE_MINUTES },
}

export const create = ({ id, start = null, end = null, pause = null, type } = {}) => {
  const typeId = type

  return {
    id: id || uuid(),
    start,
    end,
    pause,
    get type() {
      return types[typeId]
    },
  }
}

export const start = (entry) => ({
  ...entry,
  start: Date.now(),
})

export const stop = (entry) => ({
  ...entry,
  start: null,
  pause: null,
})

export const pause = (entry, timer) => ({
  ...entry,
  pause: entry.type.duration - timer.lapse,
})

export const resume = (entry) => ({
  ...entry,
  pause: Date.now() - entry.pause,
})
