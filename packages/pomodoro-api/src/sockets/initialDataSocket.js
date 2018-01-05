const handler = require('./handler')
const events = require('../constants/events')
const { entriesService, globalsService, typesService } = require('../services')

const initialDataSocket = (io, socket) => {
  socket.on(events.INITIAL_DATA, handler(io, socket, onInitialData))
}

const onInitialData = async (io, socket) => {
  try {
    const entry = await entriesService.last()
    const globals = await globalsService.index()
    const types = await typesService.index()

    socket.emit(events.INITIAL_DATA_SUCCESS, {
      entry,
      globals,
      types,
    })
  } catch (error) {
    socket.emit(events.INITIAL_DATA_FAILURE, error)
  }
}

module.exports = initialDataSocket
