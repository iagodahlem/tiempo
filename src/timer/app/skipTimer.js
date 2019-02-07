import { Session, Timer } from 'timer/domain'

export default ({ sessionsRepository }) => async (
  { onSkip, onEnded, onError },
  { session, timer },
) => {
  try {
    clearInterval(timer.interval)
    const skippedSession = Session.skip(session)
    const isEnded = Session.isEnded(skippedSession)

    if (isEnded) {
      const newSession = await sessionsRepository.create()

      return onEnded({
        session: newSession,
        timer: Timer.create(Session.timer(newSession)),
      })
    }

    sessionsRepository.update(skippedSession)

    return onSkip({
      session: skippedSession,
      timer: Timer.create(Session.timer(skippedSession)),
    })
  } catch (error) {
    return onError(error)
  }
}
