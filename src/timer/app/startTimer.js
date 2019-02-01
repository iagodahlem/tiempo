import { Session, Timer } from 'timer/domain'

export default ({ sessionsRepository }) => async ({ session, timer }, { onStart, onTick, onSkip, onError }) => {
  try {
    const startedSession = Session.start(session)
    const runningTimer = Timer.tick(startedSession, timer, tickCallback({ onTick, onSkip }))

    sessionsRepository.update(startedSession)

    return onStart({
      session: startedSession,
      timer: runningTimer,
    })
  } catch (error) {
    return onError(error)
  }
}

const tickCallback = ({ onTick, onSkip }) => (lapse) => {
  if (lapse <= 0) {
    return onSkip()
  }

  return onTick({ timer: { lapse } })
}
