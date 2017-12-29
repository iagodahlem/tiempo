const { typesService } = require('../services')

const index = async (req, res) => {
  try {
    const types = await typesService.index()

    res.status(200).send(types)
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports = {
  index,
}
