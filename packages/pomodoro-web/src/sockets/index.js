import initialDataSocket from './initialDataSocket'
import timerSocket from './timerSocket'

const handlers = [
  initialDataSocket,
  timerSocket,
]

export default (socket, dispatch) => {
  handlers.forEach(handle => {
    handle(socket, dispatch)
  })
}
