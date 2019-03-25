import { Pomodoro } from 'pomodoro/domain'

const pomodoroRepository = ({ storageService }) => {
  return {
    async get() {
      const pomodoro = storageService.get('pomodoro')

      if (!pomodoro) {
        return this.create()
      }

      return Pomodoro.create(pomodoro)
    },

    async create() {
      const pomodoro = Pomodoro.create()

      storageService.set('pomodoro', this.serialize(pomodoro))

      return pomodoro
    },

    async update(pomodoro) {
      storageService.set('pomodoro', this.serialize(pomodoro))

      return pomodoro
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

export default pomodoroRepository
