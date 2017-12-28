const express = require('express')
const typesRoute = require('./typesRoute')
const router = express.Router()

router.use('/types', typesRoute)

module.exports = router
