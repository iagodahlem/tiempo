import * as Session from './Session'

export const create = (session) => {
  if (!session) {
    return {
      interval: null,
      title: '',
      lapse: 0,
    }
  }

  const currentEntry = Session.getCurrentEntry(session)
  const title = currentEntry.type.name
  const lapse = currentEntry.type.duration

  return {
    interval: null,
    title,
    lapse,
  }
}

export const tick = (session, timer, onInterval) => {
  const lapse = decrease(session)
  const interval = setInterval(() => onInterval(decrease(session)), 1000)

  return {
    ...timer,
    interval,
    lapse,
  }
}

const decrease = (session) => {
  const { start, pause, type } = Session.getCurrentEntry(session)
  const current = pause || start

  return (current + type.duration) - Date.now()
}
