import uuid from 'uuid/v4'
import * as Entry from './Entry'

export const lengths = [4, 6, 8]

export const statuses = {
  IDLE: 'IDLE',
  RUNNING: 'RUNNING',
  PAUSED: 'PAUSED',
}

export const create = ({
  id = uuid(),
  status = statuses.IDLE,
  entries,
} = {},
length = lengths[1]) => ({
  id,
  status,
  entries: createEntries(entries, length),
})

export const play = (session, lapse) => {
  const actions = {
    [statuses.IDLE]: Entry.start,
    [statuses.RUNNING]: Entry.goOn,
    [statuses.PAUSED]: Entry.resume,
  }

  const currentEntry = getCurrentEntry(session)
  const entry = actions[session.status](currentEntry, lapse)

  return {
    ...session,
    status: statuses.RUNNING,
    entries: updateEntry(session, entry),
  }
}

export const stop = (session) => {
  const stopped = Entry.stop(getCurrentEntry(session))

  return {
    ...session,
    status: statuses.IDLE,
    entries: updateEntry(session, stopped),
  }
}

export const pause = (session, lapse) => {
  const paused = Entry.pause(getCurrentEntry(session), lapse)

  return {
    ...session,
    status: statuses.PAUSED,
    entries: updateEntry(session, paused),
  }
}

export const skip = (session) => {
  const skipped = Entry.end(getCurrentEntry(session))

  return {
    ...session,
    status: statuses.IDLE,
    entries: updateEntry(session, skipped),
  }
}

export const timer = (session) => {
  const entry = getCurrentEntry(session)
  const title = entry.type.name
  const duration = entry.type.duration

  if (!entry) {
    return
  }

  if (isRunning(session)) {
    return {
      title,
      lapse: (duration + entry.start) - Date.now(),
    }
  }

  if (isPaused(session)) {
    return {
      title,
      lapse: duration - entry.pause,
    }
  }

  return {
    title,
    lapse: duration,
  }
}

export const runned = (session) => {
  const { start, pause, type } = getCurrentEntry(session)
  const { duration } = type

  return (pause || start) + duration
}

export const isRunning = (session) => session.status === statuses.RUNNING

export const isPaused = (session) => session.status === statuses.PAUSED

export const isEnded = (session) => session.entries.every(({ end }) => end)

export const getCurrentEntry = (session) => session.entries
  ? session.entries.find(entry => !entry.end)
  : {}

const createEntries = (entries, length) => {
  if (!lengths.includes(length)) {
    throw new Error(`Is not possible to create a session with ${length} length.`)
  }

  if (entries) {
    return entries.map(entry => Entry.create(entry))
  }

  return Array.from(new Array(length), (_, i) => {
    const isLongBreak = i === length - 1
    const isPomodoro = i % 2 === 0

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
  .map(entry => entry.id === entryToUpdate.id ? entryToUpdate : entry)
