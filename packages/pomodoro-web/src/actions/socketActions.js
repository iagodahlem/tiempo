import * as types from '../constants/actionTypes'
import * as socketService from '../services/socketService'

export const connect = () => (dispatch, getState) => {
  const socketConnect = (socket) => ({
    type: types.SOCKET_CONNECT,
    payload: {
      socket,
    },
  })

  return socketService
    .connect(dispatch)
    .then(socket => dispatch(socketConnect(socket)))
}
