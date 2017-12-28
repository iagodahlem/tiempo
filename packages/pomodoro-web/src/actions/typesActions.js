import * as types from '../constants/actionTypes'
import * as typesService from '../services/typesService'

export const index = () => (dispatch, getState) => {
  const typesIndexRequest = () => ({
    type: types.TYPES_INDEX_REQUEST,
  })

  const typesIndexSuccess = (payload) => ({
    type: types.TYPES_INDEX_SUCCESS,
    payload,
  })

  const typesIndexFailure = (error) => ({
    type: types.TYPES_INDEX_FAILURE,
    message: error.message,
  })

  dispatch(typesIndexRequest())

  return typesService.index()
    .then(payload => dispatch(typesIndexSuccess(payload)))
    .catch(error => dispatch(typesIndexFailure(error)))
}
