const express = require('express')
const entriesController = require('../../../controllers/entriesController')
const router = express.Router()

router.get('/last', entriesController.last)

module.exports = router
