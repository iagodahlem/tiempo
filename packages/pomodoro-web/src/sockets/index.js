import { connect } from '../services/socketService'
import timerSocket from './timerSocket'

const sockets = [
  timerSocket,
]

const connectSocket = ({ dispatch }) => {
  connect()

  sockets.forEach(socket => {
    socket(dispatch)
  })
}

export default connectSocket
