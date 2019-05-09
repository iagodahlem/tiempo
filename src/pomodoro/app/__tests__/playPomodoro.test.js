import { playPomodoro } from 'pomodoro/app'
import { Pomodoro, Timer } from 'pomodoro/domain'

jest.useFakeTimers()

describe('playPomodoro', () => {
  let params = {}
  let callbacks = {}
  let pomodoroRepository = {}

  beforeEach(() => {
    params = {
      pomodoro: Pomodoro.create(),
      timer: Timer.create(),
    }

    callbacks = {
      onStart: jest.fn(),
      onTick: jest.fn(),
      onSkip: jest.fn(),
      onError: jest.fn(),
    }
  })

  describe('when it succeeds', () => {
    it('updates the session, calls onStart callback, sets a interval and calls onTick callback', async () => {
      pomodoroRepository = {
        update: jest.fn(),
      }

      await playPomodoro({ pomodoroRepository })(callbacks, params)

      expect(pomodoroRepository.update).toBeCalled()
      expect(callbacks.onStart).toBeCalled()
      expect(callbacks.onError).not.toBeCalled()
      expect(setInterval).toBeCalled()

      jest.advanceTimersByTime(15000)

      expect(callbacks.onTick).toBeCalled()
    })
  })

  describe('when it fails', () => {
    it('calls onError callback', async () => {
      pomodoroRepository = {
        update: jest.fn().mockImplementation(() => {
          throw new Error()
        }),
      }

      await playPomodoro({ pomodoroRepository })(callbacks, params)

      expect(callbacks.onError).toBeCalled()
      expect(callbacks.onStart).not.toBeCalled()
    })
  })
})
