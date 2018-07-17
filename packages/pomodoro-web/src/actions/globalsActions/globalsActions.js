import * as types from '../../constants/actionTypes'

export const loaded = () => ({
  type: types.GLOBAL_LOADED,
})

export const failure = (message) => ({
  type: types.GLOBAL_FAILURE,
  payload: {
    message,
  },
})
