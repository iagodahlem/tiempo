import { Session, Timer } from 'timer/domain'

export default () => async ({ session, timer }, { onSuccess, onError }) => {
  try {
    clearInterval(timer.interval)
    const skippedSession = Session.skip(session)
    const initialTimer = Timer.create(skippedSession)

    return onSuccess({
      session: skippedSession,
      timer: initialTimer,
    })
  } catch (error) {
    return onError(error)
  }
}
