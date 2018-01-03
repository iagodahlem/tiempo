import App from './App'
import { connect } from 'react-redux'
import * as socketActions from '../../actions/socketActions'
import * as globalActions from '../../actions/globalActions'
import * as timerActions from '../../actions/timerActions'
import * as selectors from '../../reducers/selectors'

const mapStateToProps = (state) => ({
  name: selectors.getEntryName(state),
  lapse: selectors.getTimerLapse(state),
  running: selectors.getTimerRunning(state),
  paused: selectors.getTimerPaused(state),
  sessions: selectors.getSessions(state),
})

const mapDispatchToProps = (dispatch) => ({
  timerSet: () => dispatch(timerActions.set()),
  timerStart: () => dispatch(timerActions.start()),
  timerGoOn: () => dispatch(timerActions.goOn()),
  timerPause: () => dispatch(timerActions.pause()),
  timerStop: () => dispatch(timerActions.stop()),
  timerSkip: () => dispatch(timerActions.skip()),
  socketConnect: () => dispatch(socketActions.connect()),
  initialData: () => dispatch(globalActions.initialData()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
