import { playTimer } from 'timer/app'
import { Session, Timer } from 'timer/domain'

jest.useFakeTimers()

describe('playTimer', () => {
  let params = {}
  let callbacks = {}
  let sessionsRepository = {}

  beforeEach(() => {
    params = {
      session: Session.create(),
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
      sessionsRepository = {
        update: jest.fn(),
      }

      await playTimer({ sessionsRepository })(callbacks, params)

      expect(sessionsRepository.update).toBeCalled()
      expect(callbacks.onStart).toBeCalled()
      expect(callbacks.onError).not.toBeCalled()
      expect(setInterval).toBeCalled()

      jest.advanceTimersByTime(15000)

      expect(callbacks.onTick).toBeCalled()
    })
  })

  describe('when it fails', () => {
    it('calls onError callback', async () => {
      sessionsRepository = {
        update: jest.fn().mockImplementation(() => {
          throw new Error()
        }),
      }

      await playTimer({ sessionsRepository })(callbacks, params)

      expect(callbacks.onError).toBeCalled()
      expect(callbacks.onStart).not.toBeCalled()
    })
  })
})
