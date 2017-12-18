import App from './App'
import { connect } from 'react-redux'
import * as selectors from '../../reducers/selectors'
import * as timerActions from '../../actions/timerActions'

const mapStateToProps = (state) => ({
  name: selectors.getEntryName(state),
  lapse: selectors.getTimerLapse(state),
  running: selectors.getTimerRunning(state),
  sessions: selectors.getSessions(state),
})

const mapDispatchToProps = (dispatch) => ({
  setTimer: () => dispatch(timerActions.set()),
  startTimer: () => dispatch(timerActions.start()),
  pauseTimer: () => dispatch(timerActions.pause()),
  stopTimer: () => dispatch(timerActions.stop()),
  skipTimer: () => dispatch(timerActions.skip()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
