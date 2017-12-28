const handler = (io, socket, fn) => (data) => fn(io, socket, data)

module.exports = handler
