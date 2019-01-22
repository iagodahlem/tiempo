import { Timer } from 'timer/domain'

export default ({ sessionsRepository }) => async ({ onSuccess, onError }) => {
  try {
    const session = await sessionsRepository.getCurrentSession()
    const timer = Timer.create(session)

    return onSuccess({
      session,
      timer,
    })
  } catch (error) {
    return onError(error)
  }
}
