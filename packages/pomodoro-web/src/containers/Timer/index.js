import Timer from './Timer'
import { connect } from 'react-redux'
import * as selectors from '../../selectors'
import * as globalActions from '../../actions/globalActions'
import * as socketActions from '../../actions/socketActions'

const mapStateToProps = (state) => ({
  isLoading: selectors.getIsLoading(state),
})

const mapDispatchToProps = (dispatch) => ({
  connectSocket: () => dispatch(socketActions.connect()),
  loadInitialData: () => dispatch(globalActions.initialData()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
