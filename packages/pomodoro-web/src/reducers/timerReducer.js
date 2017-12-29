import * as types from '../constants/actionTypes'

const initialState = {
  lapse: 0,
  running: false,
  paused: false,
  interval: null,
}

const timer = (state = initialState, { type, payload = {} }) => {
  const { lapse, interval } = payload

  switch (type) {
    case types.TIMER_SET:
      return {
        ...state,
        lapse,
      }
    case types.TIMER_START:
    case types.TIMER_GO_ON:
      return {
        ...state,
        running: true,
        paused: false,
        interval,
      }
    case types.TIMER_TICK:
      return {
        ...state,
        lapse,
      }
    case types.TIMER_PAUSE:
      return {
        ...state,
        running: false,
        paused: true,
        interval: null,
      }
    case types.TIMER_STOP:
      return {
        ...state,
        lapse,
        running: false,
        paused: false,
        interval: null,
      }
    default:
      return state
  }
}

export default timer

export const getLapse = (state) => state.lapse
export const getRunning = (state) => state.running
export const getPaused = (state) => state.paused
export const getInterval = (state) => state.interval
