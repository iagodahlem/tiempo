import * as types from '../constants/actionTypes'

const initialState = null

const socketReducer = (state = initialState, { type, payload = {} }) => {
  const { socket } = payload

  switch (type) {
    case types.SOCKET_CONNECT:
      return socket
    default:
      return state
  }
}

export default socketReducer

export const getSocket = (state) => state
