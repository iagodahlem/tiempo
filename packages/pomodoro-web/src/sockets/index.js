import initialDataSocket from './initialDataSocket'
import timerSocket from './timerSocket'

const handlers = [
  initialDataSocket,
  timerSocket,
]

const sockets = (socket, dispatch) => {
  handlers
    .forEach(handle => handle(socket, dispatch))
}

export default sockets
