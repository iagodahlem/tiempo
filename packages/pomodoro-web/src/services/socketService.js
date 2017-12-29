import io from 'socket.io-client'

const API_URL = process.env.REACT_APP_WS_URL

let socket

export const connect = () => {
  socket = io.connect(API_URL)
}

export const emit = (event, data) => {
  socket.emit(event, data)
}

export const on = (event, cb) => {
  socket.on(event, cb)
}
