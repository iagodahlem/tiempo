import { Pomodoro, Timer } from 'pomodoro/domain'

const initPomodoro = ({ pomodoroRepository }) => async ({ onInit, onPlay, onError }) => {
  try {
    const pomodoro = await pomodoroRepository.get()
    const timer = Timer.create(Pomodoro.timer(pomodoro))

    if (Pomodoro.isRunning(pomodoro)) {
      return onPlay({ pomodoro, timer })
    }

    return onInit({
      pomodoro,
      timer,
    })
  } catch (error) {
    return onError(error)
  }
}

export default initPomodoro
