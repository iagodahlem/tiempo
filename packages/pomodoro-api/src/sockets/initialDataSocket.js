const handler = require('./handler')
const events = require('../constants/events')
const { entriesService, typesService } = require('../services')

const initialDataSocket = (io, socket) => {
  socket.on(events.INITIAL_DATA, handler(io, socket, onInitialData))
}

const onInitialData = async (io, socket) => {
  console.log('onInitialData')

  const entry = await entriesService.last()
  const types = await typesService.index()

  io.emit(events.INITIAL_DATA, {
    entry,
    types,
  })
}

module.exports = initialDataSocket
