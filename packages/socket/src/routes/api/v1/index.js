const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json('The entry of v1.')
})

module.exports = router
