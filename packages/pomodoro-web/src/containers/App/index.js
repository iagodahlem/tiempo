import App from './App'
import { connect } from 'react-redux'
import * as selectors from '../../reducers/selectors'
import * as timerActions from '../../actions/timerActions'
import * as entriesActions from '../../actions/entriesActions'
import * as typesActions from '../../actions/typesActions'

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
  entriesLast: () => dispatch(entriesActions.last()),
  typesIndex: () => dispatch(typesActions.index()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
