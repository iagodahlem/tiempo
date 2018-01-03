const { User } = require('../../models')
const { dataValues } = require('../baseService')

const show = async (id) => {
  const user = await User.findOne({ where: { name: 'Admin' }})

  return dataValues(user)
}

module.exports = {
  show,
}
