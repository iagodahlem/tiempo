import { connect } from 'react-redux'
import { Timer } from 'timer/components'
import * as fromTimer from 'timer/store'

const mapStateToProps = (state) => ({
  timer: fromTimer.selectTimer(state),
  session: fromTimer.selectSession(state),
})

const mapDispatchToProps = {
  initTimer: fromTimer.init,
  startTimer: fromTimer.start,
  stopTimer: fromTimer.stop,
  pauseTimer: fromTimer.pause,
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
