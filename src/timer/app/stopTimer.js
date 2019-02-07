import { Session, Timer } from 'timer/domain'

export default ({ sessionsRepository }) => async ({ onStop, onError }, { session, timer }) => {
  try {
    clearInterval(timer.interval)
    const stoppedSession = Session.stop(session)
    const initialTimer = Timer.create(Session.timer(stoppedSession))

    sessionsRepository.update(stoppedSession)

    return onStop({
      session: stoppedSession,
      timer: initialTimer,
    })
  } catch (error) {
    return onError(error)
  }
}
