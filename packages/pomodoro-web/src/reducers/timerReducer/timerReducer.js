import { combineReducers } from 'redux'
import * as types from '../../constants/actionTypes'

const lapseReducer = (state = 0, { type, payload = {} }) => {
  const { lapse } = payload

  switch (type) {
    case types.TIMER_SET:
    case types.TIMER_TICK:
    case types.TIMER_STOP:
      return lapse
    default:
      return state
  }
}

const intervalReducer = (state = null, { type, payload = {} }) => {
  const { interval } = payload

  switch (type) {
    case types.TIMER_START:
    case types.TIMER_GO_ON:
      return interval
    case types.TIMER_PAUSE:
    case types.TIMER_STOP:
      return null
    default:
      return state
  }
}

const timerReducer = combineReducers({
  lapse: lapseReducer,
  interval: intervalReducer,
})

export default timerReducer

export const getLapse = (state) => state.lapse
export const getInterval = (state) => state.interval
