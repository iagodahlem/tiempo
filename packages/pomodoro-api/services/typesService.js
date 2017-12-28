const { Type } = require('../models')

const data = (type) => type.dataValues

const builder = (type) => ({
  ...type,
  duration: Number(type.duration),
})

const index = async () => {
  const types = await Type.findAll()

  return types
    .map(data)
    .map(builder)
}

const show = async (name) => {
  const type = await Type.findOne({
    where: { name },
  })

  return builder(data(type))
}

module.exports = {
  index,
  show,
}
