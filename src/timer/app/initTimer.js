import { Timer } from 'timer/domain'

export default ({ sessionsRepository }) => async ({ onInit, onError }) => {
  try {
    const session = await sessionsRepository.getCurrentSession()
    const timer = Timer.create(session)

    return onInit({
      session,
      timer,
    })
  } catch (error) {
    return onError(error)
  }
}
