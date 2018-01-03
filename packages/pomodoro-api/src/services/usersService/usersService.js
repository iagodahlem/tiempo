const { User } = require('../../models')
const { dataValues } = require('../baseService')

const show = async (id) => {
  const user = await User.findOne()

  return dataValues(user)
}

module.exports = {
  show,
}
