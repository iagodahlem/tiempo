import { Session } from 'timer/domain'

export default () => async (session, timer, { onSuccess, onError }) => {
  try {
    clearInterval(timer.interval)
    const pausedSession = Session.pause(session, timer)

    onSuccess({
      session: pausedSession,
      timer: { ...timer, interval: null },
    })
  } catch (error) {
    onError(error)
  }
}
