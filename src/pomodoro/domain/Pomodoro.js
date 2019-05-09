import uuid from 'uuid/v4'
import PropTypes from 'prop-types'
import * as Entry from './Entry'

export const lengths = [4, 6, 8]

export const statuses = {
  IDLE: 'IDLE',
  RUNNING: 'RUNNING',
  PAUSED: 'PAUSED',
}

export const create = (
  { id = uuid(), status = statuses.IDLE, entries = null } = {},
  length = lengths[1]
) => ({
  id,
  status,
  entries: createEntries(entries, length),
})

export const play = (session, lapse) => {
  const initActions = {
    [statuses.IDLE]: Entry.start,
    [statuses.RUNNING]: Entry.goOn,
    [statuses.PAUSED]: Entry.resume,
  }

  const currentEntry = getCurrentEntry(session)
  const entry = initActions[session.status](currentEntry, lapse)

  return {
    ...session,
    status: statuses.RUNNING,
    entries: updateEntry(session, entry),
  }
}

export const stop = session => ({
  ...session,
  status: statuses.IDLE,
  entries: updateEntry(session, Entry.stop(getCurrentEntry(session))),
})

export const pause = (session, lapse) => ({
  ...session,
  status: statuses.PAUSED,
  entries: updateEntry(session, Entry.pause(getCurrentEntry(session), lapse)),
})

export const skip = session => ({
  ...session,
  status: statuses.IDLE,
  entries: updateEntry(session, Entry.end(getCurrentEntry(session))),
})

export const timer = session => {
  const entry = getCurrentEntry(session)

  if (!entry) {
    return
  }

  const { name: title, duration } = entry.type
  const lapses = {
    [statuses.IDLE]: () => duration,
    [statuses.RUNNING]: () => duration + entry.start - Date.now(),
    [statuses.PAUSED]: () => duration - entry.pause,
  }

  return {
    title,
    lapse: lapses[session.status](),
  }
}

export const runned = session => {
  const entry = getCurrentEntry(session)
  const { duration } = entry.type

  return (entry.pause || entry.start) + duration
}

export const isIdle = session => session.status === statuses.IDLE

export const isRunning = session => session.status === statuses.RUNNING

export const isPaused = session => session.status === statuses.PAUSED

export const isEnded = session => session.entries.every(entry => Entry.isEnded(entry))

export const getCurrentEntry = session => (session.entries
  ? session.entries.find(entry => !Entry.isEnded(entry))
  : {})

export const shape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  status: PropTypes.oneOf(Object.keys(statuses)).isRequired,
  entries: PropTypes.arrayOf(Entry.shape).isRequired,
})

const createEntries = (entries, length) => {
  if (entries) {
    return entries.map(entry => Entry.create(entry))
  }

  if (!lengths.includes(length)) {
    throw new Error(`Is not possible to create a Pomodoro session with ${length} length.`)
  }

  return Array.from(new Array(length), (_, i) => {
    const isPomodoro = i % 2 === 0
    const isLongBreak = i === length - 1

    if (isLongBreak) {
      return Entry.create({ type: 'long-break' })
    }

    if (isPomodoro) {
      return Entry.create({ type: 'pomodoro' })
    }

    return Entry.create({ type: 'short-break' })
  })
}

const updateEntry = (session, entryToUpdate) => session.entries
  .map(entry => (entry.id === entryToUpdate.id ? entryToUpdate : entry))
