import { Pomodoro, Timer } from 'pomodoro/domain'

const playPomodoro = ({ pomodoroRepository }) => async (
  { onStart, onTick, onSkip, onError },
  { pomodoro, timer }
) => {
  try {
    const startedPomodoro = Pomodoro.play(pomodoro, timer.lapse)
    const runningTimer = Timer.tick(
      timer,
      Pomodoro.runned(startedPomodoro),
      tickCallback({ onTick, onSkip })
    )

    pomodoroRepository.update(startedPomodoro)

    return onStart({
      pomodoro: startedPomodoro,
      timer: runningTimer,
    })
  } catch (error) {
    return onError(error)
  }
}

const tickCallback = ({ onTick, onSkip }) => lapse => {
  if (lapse <= 0) {
    return onSkip()
  }

  return onTick({ timer: { lapse } })
}

export default playPomodoro
