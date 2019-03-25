import { pomodoroRepository as makePomodoroRepository } from 'pomodoro/infra'
import { Pomodoro } from 'pomodoro/domain'

describe('pomodoroRepository', () => {
  let storageService = {}
  let pomodoroRepository = {}

  beforeEach(() => {
    storageService = {
      get: jest.fn().mockReturnValue(null),
      set: jest.fn(),
    }

    pomodoroRepository = makePomodoroRepository({ storageService })
  })

  describe('when there is no current pomodoro session', () => {
    it('creates a new pomodoro session', async () => {
      await pomodoroRepository.get()

      expect(storageService.set).toBeCalled()
    })
  })

  describe('when there a current pomodoro session', () => {
    const current = Pomodoro.create()

    beforeEach(() => {
      storageService.get = jest.fn().mockReturnValue(current)
    })

    it('returns the current session', async () => {
      const session = await pomodoroRepository.get()

      expect(session.id).toEqual(current.id)
    })
  })

  it('creates a new session', async () => {
    await pomodoroRepository.create()

    expect(storageService.set).toBeCalled()
  })

  it('updates a session', async () => {
    await pomodoroRepository.update(Pomodoro.create())

    expect(storageService.set).toBeCalled()
  })
})
