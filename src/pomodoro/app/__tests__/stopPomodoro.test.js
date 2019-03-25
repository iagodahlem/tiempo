import { stopPomodoro } from 'pomodoro/app'
import { Pomodoro, Timer } from 'pomodoro/domain'

describe('stopPomodoro', () => {
  let params = {}
  let callbacks = {}
  let pomodoroRepository = {}

  beforeEach(() => {
    params = {
      pomodoro: Pomodoro.create(),
      timer: Timer.create(),
    }

    callbacks = {
      onStop: jest.fn(),
      onError: jest.fn(),
    }
  })

  describe('when it succeeds', () => {
    it('updates the session and calls onStop callback', async () => {
      pomodoroRepository = {
        update: jest.fn(),
      }

      await stopPomodoro({ pomodoroRepository })(callbacks, params)

      expect(pomodoroRepository.update).toBeCalled()
      expect(callbacks.onStop).toBeCalled()
      expect(callbacks.onError).not.toBeCalled()
    })
  })

  describe('when it fails', () => {
    it('calls onError callback', async () => {
      pomodoroRepository = {
        update: jest.fn().mockImplementation(() => {
          throw new Error()
        }),
      }

      await stopPomodoro({ pomodoroRepository })(callbacks, params)

      expect(callbacks.onError).toBeCalled()
      expect(callbacks.onStop).not.toBeCalled()
    })
  })
})
