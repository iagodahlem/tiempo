import * as types from '../constants/actionTypes'
import * as timerActions from '../actions/timerActions'
import { on } from '../services/socketService'

const timerSocket = (dispatch) => {
  on(types.TIMER_START, ({ entry }) => {
    dispatch(timerActions.onStart(entry))
  })

  on(types.TIMER_GO_ON, ({ entry }) => {
    dispatch(timerActions.onGoOn(entry))
  })

  on(types.TIMER_PAUSE, ({ entry }) => {
    dispatch(timerActions.onPause(entry))
  })

  on(types.TIMER_STOP, ({ entry }) => {
    dispatch(timerActions.onStop(entry))
  })
}

export default timerSocket
