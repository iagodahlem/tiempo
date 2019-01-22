import { Session, Timer } from 'timer/domain'

export default () => async ({ session, timer }, { onSuccess, onError }) => {
  try {
    clearInterval(timer.interval)
    const stoppedSession = Session.stop(session)
    const initialTimer = Timer.create(stoppedSession)

    return onSuccess({
      session: stoppedSession,
      timer: initialTimer,
    })
  } catch (error) {
    return onError(error)
  }
}