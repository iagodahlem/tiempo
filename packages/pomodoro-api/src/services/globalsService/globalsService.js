const { Global } = require('../../models')
const { dataValues } = require('../baseService')

const index = async () => {
  const globals = await Global.findAll()

  return globals
    .map(dataValues)
}

module.exports = {
  index,
}
