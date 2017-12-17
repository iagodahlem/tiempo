import App from './App'
import { connect } from 'react-redux'
import * as fromTimer from '../../reducers/timerReducer'
import * as timerActions from '../../actions/timerActions'

const mapStateToProps = (state) => ({
  name: fromTimer.getName(state),
  lapse: fromTimer.getLapse(state),
  running: fromTimer.getRunning(state),
})

const mapDispatchToProps = (dispatch) => ({
  setTimer: (type) => dispatch(timerActions.set(type)),
  startTimer: () => dispatch(timerActions.start()),
  pauseTimer: () => dispatch(timerActions.pause()),
  stopTimer: () => dispatch(timerActions.stop()),
  skipTimer: () => dispatch(timerActions.skip()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
