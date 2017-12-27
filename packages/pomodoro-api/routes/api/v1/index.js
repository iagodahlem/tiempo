const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json('Server is up.')
})

module.exports = router
