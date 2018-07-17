import { combineReducers } from 'redux'
import * as types from '../../constants/actionTypes'

const isLoading = (state = true, { type }) => {
  switch (type) {
    case types.GLOBAL_LOADED:
    case types.GLOBAL_FAILURE:
      return false
    default:
      return state
  }
}

const error = (state = null, { type, payload = {} }) => {
  const { message } = payload

  switch (type) {
    case types.GLOBAL_LOADED:
      return null
    case types.GLOBAL_FAILURE:
      return message
    default:
      return state
  }
}

const globalsReducer = combineReducers({
  isLoading,
  error,
})

export default globalsReducer

export const getIsLoading = (state) => state.isLoading
export const getError = (state) => state.error
