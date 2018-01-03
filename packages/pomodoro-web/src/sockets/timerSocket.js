import * as types from '../constants/actionTypes'
import * as timerActions from '../actions/timerActions'

const timerSocket = (socket, dispatch) => {
  socket.on(types.TIMER_START, ({ entry }) => {
    dispatch(timerActions.onStart(entry))
  })

  socket.on(types.TIMER_GO_ON, ({ entry }) => {
    dispatch(timerActions.onGoOn(entry))
  })

  socket.on(types.TIMER_PAUSE, ({ entry }) => {
    dispatch(timerActions.onPause(entry))
  })

  socket.on(types.TIMER_STOP, ({ entry }) => {
    dispatch(timerActions.onStop(entry))
  })
}

export default timerSocket
