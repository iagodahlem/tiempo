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

const show = async (where) => {
  const type = await Type.findOne({ where })

  return builder(data(type))
}

module.exports = {
  index,
  show,
}
