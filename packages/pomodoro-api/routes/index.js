import express from 'express'
const router = express.Router()

router.get('/', (_, res) => {
  res.json('Server is up.')
})

export default router
