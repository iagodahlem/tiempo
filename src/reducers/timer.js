import * as types from '../constants/actionTypes'

const INITIAL_STATE = {
  start: null,
}

const timer = (state = INITIAL_STATE, action) => {
  const { type } = action

  switch (type) {
    case types.TIMER_START:
      return { ...state, start: Date.now() }
    case types.TIMER_STOP:
      return { ...state, start: null }
    default:
      return state
  }
}

export default timer
