const http = require('http')
const https = require('https')
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

// keep alive for Now, pings each 20m
setInterval(() => https.get('https://pomodoro-api.now.sh/ping'), 1000 * 60 * 20)
