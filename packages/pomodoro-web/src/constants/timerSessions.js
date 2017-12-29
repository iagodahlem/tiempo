import { allIds, byId } from '../services/normalizeService'

const sessions = [
  { id: '1', type: 'pomodoro', done: false },
  { id: '2', type: 'short-break', done: false },
  { id: '3', type: 'pomodoro', done: false },
  { id: '4', type: 'short-break', done: false },
  { id: '5', type: 'pomodoro', done: false },
  { id: '6', type: 'long-break', done: false },
]

export default {
  allIds: allIds(sessions),
  byId: byId(sessions),
}
