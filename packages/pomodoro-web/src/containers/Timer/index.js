import Timer from './Timer'
import { connect } from 'react-redux'
import * as selectors from '../../selectors'
import * as initialDataActions from '../../actions/initialDataActions'
import * as socketActions from '../../actions/socketActions'

const mapStateToProps = (state) => ({
  isLoading: selectors.getIsLoading(state),
})

const mapDispatchToProps = (dispatch) => ({
  connectSocket: () => dispatch(socketActions.connect()),
  loadInitialData: () => dispatch(initialDataActions.loadInitialData()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
