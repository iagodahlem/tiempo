import { Session, Timer } from 'timer/domain'

export default () => async (session, timer, { onSuccess, onError }) => {
  try {
    clearInterval(timer.interval)
    const stoppedSession = Session.stop(session)
    const initialTimer = Timer.getInitialState(session)

    onSuccess({
      session: stoppedSession,
      timer: initialTimer,
    })
  } catch (error) {
    onError(error)
  }
}
