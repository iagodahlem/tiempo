const handler = require('./handler')
const events = require('../constants/events')
const { entriesService, typesService } = require('../services')

const initialDataSocket = (io, socket) => {
  socket.on(events.INITIAL_DATA, handler(io, socket, onInitialData))
}

const onInitialData = async (io, socket) => {
  console.log('SOCKET initial data')

  try {
    const entry = await entriesService.last()
    const types = await typesService.index()

    io.emit(events.INITIAL_DATA, {
      entry,
      types,
    })
  } catch (error) {
    console.log('error', error)
  }
}

module.exports = initialDataSocket
