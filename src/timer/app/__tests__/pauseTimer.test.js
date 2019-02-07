import { pauseTimer } from 'timer/app'
import { Session, Timer } from 'timer/domain'

describe('pauseTimer', () => {
  let params = {}
  let callbacks = {}
  let sessionsRepository = {}

  beforeEach(() => {
    params = {
      session: Session.create(),
      timer: Timer.create(),
    }

    callbacks = {
      onPause: jest.fn(),
      onError: jest.fn(),
    }
  })

  describe('when it succeeds', () => {
    it('updates the session and calls onPause callback', async () => {
      sessionsRepository = {
        update: jest.fn(),
      }

      await pauseTimer({ sessionsRepository })(callbacks, params)

      expect(sessionsRepository.update).toBeCalled()
      expect(callbacks.onPause).toBeCalled()
      expect(callbacks.onError).not.toBeCalled()
    })
  })

  describe('when it fails', () => {
    it('calls onError callback', async () => {
      sessionsRepository = {
        update: jest.fn().mockImplementation(() => {
          throw new Error()
        }),
      }

      await pauseTimer({ sessionsRepository })(callbacks, params)

      expect(callbacks.onError).toBeCalled()
      expect(callbacks.onPause).not.toBeCalled()
    })
  })
})
