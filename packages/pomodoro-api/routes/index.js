const express = require('express')
const router = express.Router()

router.get('/', (_, res) => {
  res.json({ data: 'Server is up.' })
})

module.exports = router
