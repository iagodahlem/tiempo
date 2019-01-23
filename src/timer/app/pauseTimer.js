import { Session } from 'timer/domain'

export default () => async ({ session, timer }, { onPause, onError }) => {
  try {
    clearInterval(timer.interval)
    const pausedSession = Session.pause(session, timer.lapse)

    return onPause({
      session: pausedSession,
    })
  } catch (error) {
    return onError(error)
  }
}
