const http = require('http')
const socket = require('socket.io')
const app = require('./src/app')
const models = require('./src/models')
const sockets = require('./src/sockets')

const PORT = process.env.PORT || 8000
const server = http.createServer(app)
const io = socket(server)

models.sequelize.sync().then(() => {
  server.listen(PORT)
  server.on('listening', () => {
    console.log(`Server is up and running at localhost://${PORT}`)
  })
})

sockets(io)
