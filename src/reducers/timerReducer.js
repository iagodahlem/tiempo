import * as types from '../constants/actionTypes'

const initialState = {
  start: 0,
  lapse: 0,
  duration: 0,
  running: false,
  interval: null,
}

const timer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case types.TIMER_SET:
      return {
        ...state,
        lapse: payload.lapse,
        duration: payload.duration,
      }
    case types.TIMER_START:
      return {
        ...state,
        start: payload.start,
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
        start: null,
        lapse: state.duration,
        running: false,
        interval: null,
      }
    default:
      return state
  }
}

export default timer

export const getStart = (state) => state.timer.start
export const getInterval = (state) => state.timer.interval
export const getLapse = (state) => state.timer.lapse
export const getRunning = (state) => state.timer.running
export const getDuration = (state) => state.timer.duration
