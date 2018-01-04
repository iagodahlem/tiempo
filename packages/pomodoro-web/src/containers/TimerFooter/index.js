import TimerFooter from './TimerFooter'
import { connect } from 'react-redux'
import * as selectors from '../../selectors'

const mapStateToProps = (state) => ({
  sessions: selectors.getSessions(state),
})

export default connect(mapStateToProps)(TimerFooter)
