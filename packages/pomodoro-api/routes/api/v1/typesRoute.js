const express = require('express')
const typesController = require('../../../controllers/typesController')
const router = express.Router()

router.get('/', typesController.index)

module.exports = router
