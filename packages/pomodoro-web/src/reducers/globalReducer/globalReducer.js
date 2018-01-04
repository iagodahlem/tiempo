import * as types from '../../constants/actionTypes'

const initialState = {
  isLoading: true,
  error: null,
}

const globalReducer = (state = initialState, { type, payload = {} }) => {
  const { message } = payload

  switch (type) {
    case types.GLOBAL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      }
    case types.GLOBAL_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: message,
      }
    default:
      return state
  }
}

export default globalReducer

export const getIsLoading = (state) => state.isLoading
export const getError = (state) => state.error
