const { Type } = require('../../models')
const { dataValues } = require('../baseService')

const builder = (type) => ({
  ...type,
  duration: Number(type.duration),
})

const index = async () => {
  const types = await Type.findAll()

  return types
    .map(dataValues)
    .map(builder)
}

const show = async (where) => {
  const type = await Type.findOne({ where })

  return builder(dataValues(type))
}

module.exports = {
  index,
  show,
}
