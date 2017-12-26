import express from 'express'
import http from 'http'
import routes from './routes'

const app = express()

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

server.listen(PORT)
server.on('listening', () => {
  console.log(`Server is up and running at localhost://${PORT}`)
})
