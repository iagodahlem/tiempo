import * as events from '../constants/events'
import * as globalActions from '../actions/globalActions'

const initialDataSocket = (socket, dispatch) => {
  socket.on(events.INITIAL_DATA, (data) => {
    dispatch(globalActions.onInitialData(data))
  })
}

export default initialDataSocket
