import { pausePomodoro } from 'pomodoro/app'
import { Pomodoro, Timer } from 'pomodoro/domain'

describe('pausePomodoro', () => {
  let params = {}
  let callbacks = {}
  let pomodoroRepository = {}

  beforeEach(() => {
    params = {
      pomodoro: Pomodoro.create(),
      timer: Timer.create(),
    }

    callbacks = {
      onPause: jest.fn(),
      onError: jest.fn(),
    }
  })

  describe('when it succeeds', () => {
    it('updates the session and calls onPause callback', async () => {
      pomodoroRepository = {
        update: jest.fn(),
      }

      await pausePomodoro({ pomodoroRepository })(callbacks, params)

      expect(pomodoroRepository.update).toBeCalled()
      expect(callbacks.onPause).toBeCalled()
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

      await pausePomodoro({ pomodoroRepository })(callbacks, params)

      expect(callbacks.onError).toBeCalled()
      expect(callbacks.onPause).not.toBeCalled()
    })
  })
})
