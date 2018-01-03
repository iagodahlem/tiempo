const express = require('express')
const api = require('./api')
const router = express.Router()

router.get('/', (req, res) => {
  res.json('Server is up.')
})

router.use('/api', api)

module.exports = router
