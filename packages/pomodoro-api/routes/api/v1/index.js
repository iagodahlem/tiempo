const express = require('express')
const entriesRoute = require('./entriesRoute')
const typesRoute = require('./typesRoute')
const router = express.Router()

router.use('/entries', entriesRoute)
router.use('/types', typesRoute)

module.exports = router
