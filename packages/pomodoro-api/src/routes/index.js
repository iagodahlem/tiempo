const express = require('express')
const api = require('./api')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json('Server is up.')
})

router.get('/ping', (req, res) => {
  res.status(200).json('pong')
})

router.use('/api', api)

module.exports = router
