const { Entry } = require('../models')
const typesService = require('./typesService')
const usersService = require('./usersService')

const loggedUserId = '822149dc-9025-44b9-ba00-c406af47746a'

const create = async ({ start = Date.now(), running = true, type, user = loggedUserId }) => {
  const { id: typeId } = await typesService.show(type)
  const { id: userId } = await usersService.show(user)
  const entry = await Entry.create({
    start,
    running,
    typeId,
    userId,
  })

  return entry.dataValues
}

const update = async (id, { start, end, running }) => {
  const entry = await Entry.findById(id).update({
    start,
    end,
    running,
  })

  return entry.dataValues
}

module.exports = {
  create,
  update,
}
