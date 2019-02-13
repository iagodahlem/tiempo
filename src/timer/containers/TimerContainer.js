import { connect } from 'react-redux'
import { Timer } from 'timer/components'
import * as fromTimer from 'timer/store'

const mapStateToProps = state => ({
  timer: fromTimer.selectTimer(state),
  session: fromTimer.selectSession(state),
})

const mapDispatchToProps = {
  initTimer: fromTimer.init,
  pauseTimer: fromTimer.pause,
  playTimer: fromTimer.play,
  skipTimer: fromTimer.skip,
  stopTimer: fromTimer.stop,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer)
