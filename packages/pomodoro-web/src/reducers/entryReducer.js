import * as types from '../constants/actionTypes'

const initialState = {
  isLoading: false,
  error: null,
}

const entryReducer = (state = initialState, { type, payload = {} }) => {
  const { entry, message } = payload

  switch (type) {
    case types.TIMER_START:
    case types.TIMER_GO_ON:
    case types.TIMER_PAUSE:
    case types.TIMER_STOP:
      return {
        ...state,
        ...entry,
      }
    case types.ENTRIES_LAST_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case types.ENTRIES_LAST_SUCCESS:
      return {
        ...state,
        ...entry,
        isLoading: false,
      }
    case types.ENTRIES_LAST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: message,
      }
    default:
      return state
  }
}

export default entryReducer

export const getStart = (state) => state.start
