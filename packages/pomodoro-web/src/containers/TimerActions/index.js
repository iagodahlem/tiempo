import TimerActions from './TimerActions'
import { connect } from 'react-redux'
import * as timerActions from '../../actions/timerActions'
import * as selectors from '../../selectors'

const mapStateToProps = (state) => ({
  running: selectors.getTimerRunning(state),
  paused: selectors.getTimerPaused(state),
})

const mapDispatchToProps = (dispatch) => ({
  timerStart: () => dispatch(timerActions.start()),
  timerGoOn: () => dispatch(timerActions.goOn()),
  timerPause: () => dispatch(timerActions.pause()),
  timerStop: () => dispatch(timerActions.stop()),
  timerSkip: () => dispatch(timerActions.skip()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TimerActions)
