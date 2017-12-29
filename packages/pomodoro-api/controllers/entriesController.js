const { entriesService } = require('../services')

const last = async (req, res) => {
  try {
    const entry = await entriesService.last()

    if (!entry) {
      return res.status(404).send({ message: 'No recent Entries' })
    }

    return res.status(200).send(entry)
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports = {
  last,
}
