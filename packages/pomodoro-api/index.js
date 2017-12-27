const express = require('express')
const http = require('http')
const socket = require('socket.io')
const logger = require('morgan')
const bodyParser = require('body-parser')
const models = require('./models')
const routes = require('./routes')

const PORT = process.env.PORT || 8000
const app = express()
const server = http.createServer(app)
const io = socket(server)

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', routes)

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    error: {
      status: err.status,
      message: err.message,
    },
  })
})

models.sequelize.sync().then(() => {
  server.listen(PORT)
  server.on('listening', () => {
    console.log(`Server is up and running at localhost://${PORT}`)
  })
})

io.on('connection', (socket) => {
  console.log('connected')

  socket.emit('start-entry', { entry: {
    start: Date.now(), running: true }
  })
})
