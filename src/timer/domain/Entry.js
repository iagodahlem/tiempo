import uuid from 'uuid/v4'
import * as Type from './Type'

export const create = ({
  id = uuid(),
  start = 0,
  pause = 0,
  end = 0,
  type = 'pomodoro',
} = {}) => {
  const typeId = type

  return {
    id,
    start,
    end,
    pause,
    get type() {
      return Type.create(typeId)
    },
  }
}

export const start = (entry) => ({
  ...entry,
  start: Date.now(),
})

export const pause = (entry, lapse) => ({
  ...entry,
  pause: entry.type.duration - lapse,
})

export const resume = (entry) => ({
  ...entry,
  pause: Date.now() - entry.pause,
})

export const goOn = (entry, lapse) => ({
  ...entry,
  pause: Date.now() - (entry.type.duration - lapse),
})

export const stop = (entry) => ({
  ...entry,
  start: 0,
  pause: 0,
})

export const end = (entry) => ({
  ...entry,
  start: entry.start || Date.now(),
  end: Date.now(),
})

export const isStarted = (entry) => Boolean(entry.start)

export const isPaused = (entry) => Boolean(entry.pause)

export const isEnded = (entry) => Boolean(entry.end)
