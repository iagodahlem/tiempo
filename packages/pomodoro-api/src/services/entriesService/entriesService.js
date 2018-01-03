const { Entry } = require('../../models')
const { dataValues } = require('../baseService')
const typesService = require('../typesService')
const usersService = require('../usersService')

const loggedUserId = '822149dc-9025-44b9-ba00-c406af47746a'

const builder = (entry) => ({
  ...entry,
  start: Number(entry.start),
})

const last = async () => {
  const entry = await Entry.findOne({
    order: [['createdAt', 'DESC']],
  })

  return builder(dataValues(entry))
}

const create = async ({ start = Date.now(), running = true, type, user = loggedUserId }) => {
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

const update = async (id, { start, end, running }) => {
  const entry = await Entry.findById(id)
  const newEntry = await entry.update({
    start,
    end,
    running,
  })

  return builder(dataValues(entry))
}

module.exports = {
  last,
  create,
  update,
}
