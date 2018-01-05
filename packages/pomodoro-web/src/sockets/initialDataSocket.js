import * as events from '../constants/events'
import * as initialDataActions from '../actions/initialDataActions'

const initialDataSocket = (socket, dispatch) => {
  socket.on(events.INITIAL_DATA_SUCCESS, (data) => {
    dispatch(initialDataActions.onSuccess(data))
  })

  socket.on(events.INITIAL_DATA_FAILURE, (error) => {
    dispatch(initialDataActions.onFailure(error))
  })
}

export default initialDataSocket
