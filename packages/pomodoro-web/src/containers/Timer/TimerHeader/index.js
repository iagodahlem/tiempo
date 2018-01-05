import TimerHeader from './TimerHeader'
import { connect } from 'react-redux'
import * as selectors from '../../../selectors'

const mapStateToProps = (state) => ({
  name: selectors.getEntryName(state),
})

export default connect(mapStateToProps)(TimerHeader)
