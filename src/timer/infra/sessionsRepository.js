import { Session } from 'timer/domain'

export default ({ storageService }) => ({
  async getCurrentSession() {
    const sessions = storageService.get('sessions')

    if (!sessions) {
      return this.create()
    }

    return Session.create(sessions[sessions.length - 1])
  },

  async create() {
    const sessions = storageService.get('sessions') || []
    const newSession = this.serialize(Session.create())

    storageService.set('sessions', [...sessions, newSession])

    return Session.create(newSession)
  },

  async update(session) {

  },

  serialize: ({ id, entries }) => ({
    id,
    entries: entries.map(({ entry, type }) => ({
      entry,
      type: type.id,
    }))
  })
})
