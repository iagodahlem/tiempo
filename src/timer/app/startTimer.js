import { Session, Timer } from 'timer/domain'

export default ({ sessionsRepository }) => async (session, timer, { onSuccess, onTick, onError }) => {
  try {
    const entry = Session.getCurrentEntry(session)
    const startedSession = entry.pause
      ? Session.resume(session)
      : Session.start(session)

    await sessionsRepository.update(startedSession)

    const currentTimer = Timer.tick(startedSession)
    const interval = setInterval(() => onTick({ timer: Timer.tick(startedSession) }), 1000)

    onSuccess({
      session: startedSession,
      timer: { ...currentTimer, interval },
    })
  } catch (error) {
    onError(error)
  }
}
