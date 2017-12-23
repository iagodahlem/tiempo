const express = require('express')
const routes = require('./routes')

const PORT = process.env.PORT || 8000

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
    error: { message: err.message, error: err },
  })
})

app.listen(PORT, () => {
  console.log(`Server is up and running at localhost://${PORT}`)
})
