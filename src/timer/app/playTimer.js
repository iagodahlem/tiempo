import { Session, Timer } from 'timer/domain'

export default ({ sessionsRepository }) => async (
  { onStart, onTick, onSkip, onError },
  { session, timer }
) => {
  try {
    const startedSession = Session.play(session, timer.lapse)
    const runningTimer = Timer.tick(
      timer,
      Session.runned(startedSession),
      tickCallback({ onTick, onSkip })
    )

    sessionsRepository.update(startedSession)

    return onStart({
      session: startedSession,
      timer: runningTimer,
    })
  } catch (error) {
    return onError(error)
  }
}

const tickCallback = ({ onTick, onSkip }) => lapse => {
  if (lapse <= 0) {
    return onSkip()
  }

  return onTick({ timer: { lapse } })
}
