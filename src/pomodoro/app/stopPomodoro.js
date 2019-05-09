import { Pomodoro, Timer } from 'pomodoro/domain'

const stopPomodoro = ({ pomodoroRepository }) => async (
  { onStop, onError },
  { pomodoro, timer }
) => {
  try {
    clearInterval(timer.interval)
    const stoppedPomodoro = Pomodoro.stop(pomodoro)
    const initialTimer = Timer.create(Pomodoro.timer(stoppedPomodoro))

    pomodoroRepository.update(stoppedPomodoro)

    return onStop({
      pomodoro: stoppedPomodoro,
      timer: initialTimer,
    })
  } catch (error) {
    return onError(error)
  }
}

export default stopPomodoro
