import io from 'socket.io-client'
import sockets from '../sockets'

const WS_URL = process.env.REACT_APP_WS_URL

export const connect = (dispatch) => {
  return new Promise((resolve, reject) => {
    const socket = io(WS_URL)

    if (!socket) {
      reject()
    }

    socket.on('connect', () => {
      console.log('connected')
      sockets(socket, dispatch)
      resolve(socket)
    })

    socket.on('disconnect', () => {
      console.log('disconnected')
    })
  })
}
