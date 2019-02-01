import { Session, Timer } from 'timer/domain'

export default ({ sessionsRepository }) => async ({ onInit, onPlay, onError }) => {
  try {
    const session = await sessionsRepository.getCurrentSession()
    const timer = Timer.create(Session.timer(session))

    if (Session.isRunning(session)) {
      return onPlay({ session, timer })
    }

    return onInit({
      session,
      timer,
    })
  } catch (error) {
    return onError(error)
  }
}
