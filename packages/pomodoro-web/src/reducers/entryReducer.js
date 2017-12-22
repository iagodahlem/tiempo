import * as types from '../constants/actionTypes'

const initialState = {
  type: 'pomodoro',
  start: 0,
}

const entry = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case types.TIMER_SET:
      return {
        ...state,
        type: payload.type,
      }
    case types.TIMER_START:
      return {
        ...state,
        start: payload.start,
      }
    case types.TIMER_STOP:
      return {
        ...state,
        start: 0,
      }
    default:
      return state
  }
}

export default entry

export const getType = (state) => state.type
export const getStart = (state) => state.start
