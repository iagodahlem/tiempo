import { Pomodoro, Timer } from 'pomodoro/domain'

const skipPomodoro = ({ pomodoroRepository }) => async (
  { onSkip, onEnded, onError },
  { pomodoro, timer }
) => {
  try {
    clearInterval(timer.interval)
    const skippedPomodoro = Pomodoro.skip(pomodoro)
    const isEnded = Pomodoro.isEnded(skippedPomodoro)

    if (isEnded) {
      const newPomodoro = await pomodoroRepository.create()

      return onEnded({
        pomodoro: newPomodoro,
        timer: Timer.create(Pomodoro.timer(newPomodoro)),
      })
    }

    pomodoroRepository.update(skippedPomodoro)

    return onSkip({
      pomodoro: skippedPomodoro,
      timer: Timer.create(Pomodoro.timer(skippedPomodoro)),
    })
  } catch (error) {
    return onError(error)
  }
}

export default skipPomodoro
