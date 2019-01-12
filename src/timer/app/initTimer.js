import { Timer } from 'timer/domain'

export default ({ sessionsRepository }) => async ({ onSuccess, onError }) => {
  try {
    const session = await sessionsRepository.getCurrentSession()
    const timer = Timer.getInitialState(session)

    onSuccess({
      session,
      timer,
    })
  } catch (error) {
    onError(error)
  }
}
