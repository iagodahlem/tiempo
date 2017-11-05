import * as types from '../constants/actionTypes'

const timer = (state = {}, action) => {
  const { type } = action

  switch (type) {
    case types.TIMER_START:
      return { ...state, start: Date.now() }
    default:
      return state
  }
}

export default timer
