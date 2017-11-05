import * as types from '../constants/actionTypes'

export const start = () => ({
  type: types.TIMER_START,
  start: 0,
})

export default {
  start,
}
