const http = require('http')
const express = require('express')
const socket = require('socket.io')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const models = require('./models')
const routes = require('./routes')
const sockets = require('./sockets')

const app = express()

app.use(cors())
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
