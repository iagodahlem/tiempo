import { Session, Timer } from 'timer/domain'

export default ({ sessionsRepository }) => async ({ session, timer }, { onSkip, onError }) => {
  try {
    clearInterval(timer.interval)
    const skippedSession = Session.skip(session)
    const isNotEnded = !Session.isEnded(skippedSession)

    if (isNotEnded) {
      sessionsRepository.update(skippedSession)

      return onSkip({
        session: skippedSession,
        timer: Timer.create(Session.timer(skippedSession)),
      })
    }

    const newSession = await sessionsRepository.create()

    return onSkip({
      session: newSession,
      timer: Timer.create(Session.timer(newSession)),
    })
  } catch (error) {
    return onError(error)
  }
}
