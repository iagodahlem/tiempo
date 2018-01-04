import TimerLapse from './TimerLapse'
import { connect } from 'react-redux'
import * as selectors from '../../selectors'

const mapStateToProps = (state) => ({
  lapse: selectors.getTimerLapse(state),
  paused: selectors.getTimerPaused(state),
})

export default connect(mapStateToProps)(TimerLapse)
