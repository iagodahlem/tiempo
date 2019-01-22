import uuid from 'uuid/v4'
import * as Type from './Type'

export const create = ({
  id = uuid(),
  start = null,
  end = null,
  pause = null,
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

export const end = (entry) => ({
  ...entry,
  start: entry.start || Date.now(),
  end: Date.now(),
})

export const stop = (entry) => ({
  ...entry,
  start: null,
  pause: null,
})

export const pause = (entry, lapse) => ({
  ...entry,
  pause: entry.type.duration - lapse,
})

export const resume = (entry) => ({
  ...entry,
  pause: Date.now() - entry.pause,
})
