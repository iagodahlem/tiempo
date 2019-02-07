import { stopTimer } from 'timer/app'
import { Session, Timer } from 'timer/domain'

describe('stopTimer', () => {
  let params = {}
  let callbacks = {}
  let sessionsRepository = {}

  beforeEach(() => {
    params = {
      session: Session.create(),
      timer: Timer.create(),
    }

    callbacks = {
      onStop: jest.fn(),
      onError: jest.fn(),
    }
  })

  describe('when it succeeds', () => {
    it('updates the session and calls onStop callback', async () => {
      sessionsRepository = {
        update: jest.fn(),
      }

      await stopTimer({ sessionsRepository })(params, callbacks)

      expect(sessionsRepository.update).toBeCalled()
      expect(callbacks.onStop).toBeCalled()
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

      await stopTimer({ sessionsRepository })(params, callbacks)

      expect(callbacks.onError).toBeCalled()
      expect(callbacks.onStop).not.toBeCalled()
    })
  })
})
