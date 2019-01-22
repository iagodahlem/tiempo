import { Session, Timer } from 'timer/domain'

export default () => async ({ session, timer }, { onSuccess, onError }) => {
  try {
    const intervalCallback = (lapse) => {
      onSuccess({ timer: { lapse } })
    }

    const startedSession = Session.start(session)
    const runningTimer = Timer.tick(startedSession, timer, intervalCallback)

    return onSuccess({
      session: startedSession,
      timer: runningTimer,
    })
  } catch (error) {
    return onError(error)
  }
}
