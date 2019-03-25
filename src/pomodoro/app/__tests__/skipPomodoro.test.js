import { skipPomodoro } from 'pomodoro/app'
import { Pomodoro, Entry, Timer } from 'pomodoro/domain'

describe('skipPomodoro', () => {
  let params = {}
  let callbacks = {}
  let pomodoroRepository = {}

  const pomodoroToEnd = pomodoro => ({
    ...pomodoro,
    entries: pomodoro
      .entries.map((entry, i) => (pomodoro.entries.length - 1 === i ? entry : Entry.end(entry))),
  })

  beforeEach(() => {
    params = {
      pomodoro: Pomodoro.create(),
      timer: Timer.create(),
    }

    callbacks = {
      onSkip: jest.fn(),
      onEnded: jest.fn(),
      onError: jest.fn(),
    }
  })

  describe('when it succeeds', () => {
    it('updates the session and calls onSkip callback', async () => {
      pomodoroRepository = {
        update: jest.fn(),
      }

      await skipPomodoro({ pomodoroRepository })(callbacks, params)

      expect(pomodoroRepository.update).toBeCalled()
      expect(callbacks.onSkip).toBeCalled()
      expect(callbacks.onError).not.toBeCalled()
    })
  })

  describe('when session is ended', () => {
    it('creates a new session and calls onEnded callback', async () => {
      params.pomodoro = pomodoroToEnd(Pomodoro.create())
      pomodoroRepository = {
        create: jest.fn().mockReturnValue(Pomodoro.create()),
      }

      await skipPomodoro({ pomodoroRepository })(callbacks, params)

      expect(pomodoroRepository.create).toBeCalled()
      expect(callbacks.onEnded).toBeCalled()
      expect(callbacks.onSkip).not.toBeCalled()
    })
  })

  describe('when it fails', () => {
    it('calls onError callback', async () => {
      pomodoroRepository = {
        update: jest.fn().mockImplementation(() => {
          throw new Error()
        }),
      }

      await skipPomodoro({ pomodoroRepository })(callbacks, params)

      expect(callbacks.onError).toBeCalled()
      expect(callbacks.onSkip).not.toBeCalled()
    })
  })
})
