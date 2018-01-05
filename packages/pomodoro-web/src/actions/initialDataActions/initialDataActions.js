import * as events from '../../constants/events'
import * as entryActions from '../entryActions'
import * as globalsActions from '../globalsActions'
import * as timerActions from '../timerActions'
import * as typesActions from '../typesActions'
import * as selectors from '../../selectors'

export const loadInitialData = () => (dispatch, getState) => {
  const state = getState()
  const socket = selectors.getSocket(state)

  socket.emit(events.INITIAL_DATA_REQUEST)
}

export const onSuccess = ({ entry, types }) => (dispatch, getState) => {
  dispatch(entryActions.update(entry))
  dispatch(typesActions.update(types))
  dispatch(globalsActions.loaded())
  dispatch(timerActions.init())
}

export const onFailure = ({ message }) => (dispatch, getState) => {
  dispatch(globalsActions.failure(message))
}
