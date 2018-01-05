import * as events from '../../constants/events'
import * as actionTypes from '../../constants/actionTypes'
import * as timerActions from '../../actions/timerActions'
import * as selectors from '../../selectors'

export const initialData = () => (dispatch, getState) => {
  const state = getState()
  const socket = selectors.getSocket(state)

  socket.emit(events.INITIAL_DATA)
}

export const onInitialData = ({ entry, types }) => (dispatch, getState) => {
  const onInitialSuccess = () => ({
    type: actionTypes.GLOBAL_SUCCESS,
    payload: {
      entry,
      types,
    },
  })

  dispatch(onInitialSuccess())

  if (entry && entry.running) {
    dispatch(timerActions.onGoOn(entry))
    return
  }

  if (entry && entry.paused) {
    dispatch(timerActions.set())
    dispatch(timerActions.onPause(entry))
    return
  }

  dispatch(timerActions.set())
}
