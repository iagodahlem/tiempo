const { Entry } = require('../../models')
const { dataValues } = require('../baseService')
const typesService = require('../typesService')
const usersService = require('../usersService')

const builder = (entry) => ({
  ...entry,
  start: Number(entry.start),
  update: Number(entry.update),
  runned: Number(entry.runned),
  end: Number(entry.end),
})

const show = async (id) => {
  const entry = await Entry.findById(id)

  return builder(dataValues(entry))
}

const create = async ({ start = Date.now(), running = true, type, user }) => {
  const { id: typeId } = await typesService.show({ label: type })
  const { id: userId } = await usersService.show(user)
  const entry = await Entry.create({
    start,
    running,
    typeId,
    userId,
  })

  return builder(dataValues(entry))
}

const update = async (id, { update, runned, end, running, paused }) => {
  const entry = await Entry.findById(id)
  const newEntry = await entry.update({
    update,
    runned,
    end,
    running,
    paused,
  })

  return builder(dataValues(newEntry))
}

const last = async () => {
  try {
    const entry = await Entry.findOne({
      order: [['createdAt', 'DESC']],
    })

    return builder(dataValues(entry))
  } catch (error) {
    // TODO: thrown something
  }
}

module.exports = {
  last,
  show,
  create,
  update,
}
