import { Session, Timer } from 'timer/domain'

export default ({ sessionsRepository }) => async ({ session, timer }, { onSkip, onError }) => {
  try {
    clearInterval(timer.interval)
    const skippedSession = Session.skip(session)
    const isSessionNotEnded = !Session.isEnded(skippedSession)

    if (isSessionNotEnded) {
      sessionsRepository.update(skippedSession)

      return onSkip({
        session: skippedSession,
        timer: Timer.create(skippedSession),
      })
    }

    const newSession = await sessionsRepository.create()

    return onSkip({
      session: newSession,
      timer: Timer.create(newSession),
    })
  } catch (error) {
    return onError(error)
  }
}
