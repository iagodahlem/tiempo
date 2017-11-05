import * as types from '../constants/actionTypes'

export const start = () => ({
  type: types.TIMER_START,
})

export const stop = () => ({
  type: types.TIMER_STOP,
})

export default {
  start,
  stop,
}
