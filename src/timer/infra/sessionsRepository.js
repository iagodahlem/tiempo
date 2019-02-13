import { Session } from 'timer/domain'

export default ({ storageService }) => {
  const getAll = () => storageService.get('sessions') || []

  const getCurrent = () => {
    const all = getAll()

    return all[all.length - 1]
  }

  return {
    async getCurrentSession() {
      const currentSession = getCurrent()

      if (!currentSession) {
        return this.create()
      }

      return Session.create(currentSession)
    },

    async create() {
      const sessions = getAll()
      const newSession = this.serialize(Session.create())

      storageService.set('sessions', [...sessions, newSession])

      return Session.create(newSession)
    },

    async update(updatedSession) {
      const sessions = getAll().map(session => (session.id !== updatedSession.id
        ? session
        : {
          ...session,
          ...this.serialize(updatedSession),
        }))

      storageService.set('sessions', sessions)

      return updatedSession
    },

    serialize: ({ id, status, entries }) => ({
      id,
      status,
      entries: entries.map(({ type, ...entry }) => ({
        ...entry,
        type: type.id,
      })),
    }),
  }
}
