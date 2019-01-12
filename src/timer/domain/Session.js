import uuid from 'uuid/v4'
import * as Entry from './Entry'

const lengths = [4, 6, 8]
const statuses = {
  IDLE: 'IDLE',
  RUNNING: 'RUNNING',
  PAUSED: 'PAUSED',
}

export const create = ({ id, entries } = {}, length = lengths[1]) => ({
  id: id || uuid(),
  entries: entries
    ? entries.map(entry => Entry.create(entry))
    : Array.from(new Array(length), (_, i) => createEntry(length, i)),
  status: statuses.IDLE,
})

const createEntry = (length, i) => {
  const isLongBreak = i === length - 1
  const isPomodoro = i % 2 === 0

  if (isLongBreak) {
    return Entry.create({ type: 'long-break' })
  }

  if (isPomodoro) {
    return Entry.create({ type: 'pomodoro' })
  }

  return Entry.create({ type: 'short-break' })
}

export const start = (session) => {
  const started = Entry.start(getCurrentEntry(session))

  return {
    ...session,
    entries: updateEntry(session, started),
    status: statuses.RUNNING,
  }
}

export const stop = (session) => {
  const stopped = Entry.stop(getCurrentEntry(session))

  return {
    ...session,
    entries: updateEntry(session, stopped),
    status: statuses.IDLE,
  }
}

export const pause = (session, timer) => {
  const paused = Entry.pause(getCurrentEntry(session), timer)

  return {
    ...session,
    entries: updateEntry(session, paused),
    status: statuses.PAUSED,
  }
}

export const resume = (session) => {
  const resumed = Entry.resume(getCurrentEntry(session))

  return {
    ...session,
    entries: updateEntry(session, resumed),
    status: statuses.RUNNING,
  }
}

const updateEntry = (session, entryToUpdate) => session.entries
  .map(entry => entry.id === entryToUpdate.id ? entryToUpdate : entry)

export const getCurrentEntry = (session) => session.entries
  ? session.entries.find(entry => !entry.end)
  : {}
