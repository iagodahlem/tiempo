const { User } = require('../models')

const show = async (id) => {
  const user = await User.findById(id)

  return user.dataValues
}

module.exports = {
  show,
}
