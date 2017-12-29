const { User } = require('../models')

const show = async (id) => {
  const user = await User.findOne()

  return user.dataValues
}

module.exports = {
  show,
}
