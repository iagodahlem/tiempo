import { Session } from 'timer/domain'

export default () => async ({ session, timer }, { onSuccess, onError }) => {
  try {
    clearInterval(timer.interval)
    const pausedSession = Session.pause(session, timer.lapse)

    return onSuccess({
      session: pausedSession,
    })
  } catch (error) {
    return onError(error)
  }
}
