import * as types from '../constants/actionTypes'

const initialState = {}

const entryReducer = (state = initialState, { type, payload = {} }) => {
  const { entry } = payload

  switch (type) {
    case types.GLOBAL_SUCCESS:
    case types.TIMER_START:
    case types.TIMER_GO_ON:
    case types.TIMER_PAUSE:
    case types.TIMER_STOP:
      return {
        ...state,
        ...entry,
      }
    default:
      return state
  }
}

export default entryReducer

export const getStart = (state) => state.start
