import { Session, Timer } from 'timer/domain'

export default () => async ({ session, timer }, { onStart, onTick, onSkip, onError }) => {
  const tickCallback = (lapse) => {
    if (lapse <= 0) {
      return onSkip()
    }

    return onTick({ timer: { lapse } })
  }

  try {
    const startedSession = Session.start(session)
    const runningTimer = Timer.tick(startedSession, timer, tickCallback)

    return onStart({
      session: startedSession,
      timer: runningTimer,
    })
  } catch (error) {
    return onError(error)
  }
}
