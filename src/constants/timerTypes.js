import * as timers from './timers'

export const pomodoro = {
  name: 'Pomodoro',
  duration: timers.TWENTY_FIVE_MINUTES,
}

export const short = {
  name: 'Short Break',
  duration: timers.FIVE_MINUTES,
}

export const long = {
  name: 'Long Break',
  duration: timers.FIFTEEN_MINUTES,
}

export default {
  pomodoro,
  short,
  long,
}
