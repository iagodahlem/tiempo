import { initPomodoro } from 'pomodoro/app'
import { Pomodoro } from 'pomodoro/domain'

describe('initPomodoro', () => {
  let callbacks = {}
  let pomodoroRepository = {}

  beforeEach(() => {
    callbacks = {
      onInit: jest.fn(),
      onPlay: jest.fn(),
      onError: jest.fn(),
    }
  })

  describe('when Pomodoro session is idle', () => {
    it('calls onInit callback', async () => {
      pomodoroRepository = {
        get: jest.fn().mockReturnValue(Pomodoro.create()),
      }

      await initPomodoro({ pomodoroRepository })(callbacks)

      expect(callbacks.onInit).toBeCalled()
      expect(callbacks.onPlay).not.toBeCalled()
      expect(callbacks.onError).not.toBeCalled()
    })
  })

  describe('when Pomodoro is running', () => {
    it('calls onPlay callback', async () => {
      pomodoroRepository = {
        get: jest.fn().mockReturnValue(Pomodoro.play(Pomodoro.create())),
      }

      await initPomodoro({ pomodoroRepository })(callbacks)

      expect(callbacks.onPlay).toBeCalled()
      expect(callbacks.onInit).not.toBeCalled()
      expect(callbacks.onError).not.toBeCalled()
    })
  })

  describe('when it fails', () => {
    it('calls onError callback', async () => {
      pomodoroRepository = {
        get: jest.fn().mockImplementation(() => {
          throw new Error()
        }),
      }

      await initPomodoro({ pomodoroRepository })(callbacks)

      expect(callbacks.onError).toBeCalled()
      expect(callbacks.onInit).not.toBeCalled()
      expect(callbacks.onPlay).not.toBeCalled()
    })
  })
})
