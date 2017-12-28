import io from 'socket.io-client'

let socket

export const connect = () => {
  socket = io.connect('http://localhost:8000')
}

export const emit = (event, data) => {
  socket.emit(event, data)
}

export const on = (event, cb) => {
  socket.on(event, cb)
}
