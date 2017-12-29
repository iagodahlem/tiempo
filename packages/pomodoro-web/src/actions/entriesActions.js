import * as types from '../constants/actionTypes'
import * as entriesService from '../services/entriesService'

export const last = () => async (dispatch, getState) => {
  const entriesLastRequest = () => ({
    type: types.ENTRIES_LAST_REQUEST,
  })

  const entriesLastSuccess = (entry) => ({
    type: types.ENTRIES_LAST_SUCCESS,
    payload: { entry },
  })

  const entriesLastFailure = (error) => ({
    type: types.ENTRIES_LAST_FAILURE,
    payload: { message: error.message },
  })

  dispatch(entriesLastRequest())

  try {
    const entry = await entriesService.last()
    dispatch(entriesLastSuccess(entry))

    if (entry.running) {
      console.log('is already running')
    }
  } catch (error) {
    dispatch(entriesLastFailure(error))
  }
}
