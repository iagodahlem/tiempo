const express = require('express')
const router = express.Router()

router.get('/', (_, res) => {
  res.json('Server is up.')
})

module.exports = router
