import { Pomodoro } from 'pomodoro/domain'

const pausePomodoro = ({ pomodoroRepository }) => async (
  { onPause, onError },
  { pomodoro, timer }
) => {
  try {
    clearInterval(timer.interval)
    const pausedPomodoro = Pomodoro.pause(pomodoro, timer.lapse)

    pomodoroRepository.update(pausedPomodoro)

    return onPause({
      pomodoro: pausedPomodoro,
    })
  } catch (error) {
    return onError(error)
  }
}

export default pausePomodoro
