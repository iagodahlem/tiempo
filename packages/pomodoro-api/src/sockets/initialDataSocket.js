const handler = require('./handler')
const events = require('../constants/events')
const { entriesService, typesService } = require('../services')

const initialDataSocket = (io, socket) => {
  socket.on(events.INITIAL_DATA, handler(io, socket, onInitialData))
}

const onInitialData = async (io, socket) => {
  try {
    const entry = await entriesService.last()
    const types = await typesService.index()

    socket.emit(events.INITIAL_DATA, {
      entry,
      types,
    })
  } catch (error) {
    console.log('error', error)
  }
}

module.exports = initialDataSocket
