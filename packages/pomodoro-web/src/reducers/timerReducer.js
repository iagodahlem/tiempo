import * as types from '../constants/actionTypes'

const initialState = {
  lapse: 0,
  running: false,
  interval: null,
}

const timer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case types.TIMER_SET:
      return {
        ...state,
        lapse: payload.duration,
      }
    case types.TIMER_START:
      return {
        ...state,
        running: true,
        interval: payload.interval,
      }
    case types.TIMER_TICK:
      return {
        ...state,
        lapse: payload.lapse,
      }
    case types.TIMER_PAUSE:
      return {
        ...state,
        running: false,
        interval: null,
      }
    case types.TIMER_STOP:
      return {
        ...state,
        lapse: payload.duration,
        running: false,
        interval: null,
      }
    default:
      return state
  }
}

export default timer

export const getLapse = (state) => state.lapse
export const getRunning = (state) => state.running
export const getInterval = (state) => state.interval
