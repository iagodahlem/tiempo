const { typesService } = require('../services')

const index = async (req, res) => {
  const types = await typesService.index()

  res.json(types)
}

module.exports = {
  index,
}
