import { allIds, byId } from '../services/normalizeService'
import * as times from './times'

const pomodoro = {
  id: 'pomodoro',
  name: 'Pomodoro',
  duration: times.TWENTY_FIVE_MINUTES,
}

const shortBreak = {
  id: 'short-break',
  name: 'Short Break',
  duration: times.FIVE_MINUTES,
}

const longBreak = {
  id: 'long-break',
  name: 'Long Break',
  duration: times.FIFTEEN_MINUTES,
}

const timerTypes = [
  pomodoro,
  shortBreak,
  longBreak,
]

export default {
  allIds: allIds(timerTypes),
  byId: byId(timerTypes),
}
