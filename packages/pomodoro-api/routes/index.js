import express from 'express'
const router = express.Router()

router.get('/', (_, res) => {
  res.json({ data: 'Server is up.' })
})

export default router
