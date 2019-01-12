import * as Session from './Session'

export const getInitialState = (session) => {
  const currentEntry = Session.getCurrentEntry(session)
  const title = currentEntry.type.name
  const lapse = currentEntry.type.duration

  return {
    interval: null,
    title,
    lapse,
  }
}

export const tick = (session) => {
  const { start, pause, type } = Session.getCurrentEntry(session)

  const current = pause || start

  return {
    lapse: (current + type.duration) - Date.now(),
  }
}
