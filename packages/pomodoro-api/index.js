const express = require('express')

const PORT = process.env.PORT || 8080

const app = express()

app.get('/', (_, res) => res.json('Server is up.'))

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json('error')
})

app.listen(PORT, () => {
  console.log(`Server is up and running at localhost://${PORT}`)
})
