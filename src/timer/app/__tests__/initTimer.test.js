import { initTimer } from 'timer/app'
import { Session } from 'timer/domain'

describe('initTimer', () => {
  let callbacks = {}
  let sessionsRepository = {}

  beforeEach(() => {
    callbacks = {
      onInit: jest.fn(),
      onPlay: jest.fn(),
      onError: jest.fn(),
    }
  })

  describe('when Session is idle', () => {
    it('calls onInit callback', async () => {
      sessionsRepository = {
        getCurrentSession: jest.fn().mockReturnValue(Session.create()),
      }

      await initTimer({ sessionsRepository })(callbacks)

      expect(callbacks.onInit).toBeCalled()
      expect(callbacks.onPlay).not.toBeCalled()
      expect(callbacks.onError).not.toBeCalled()
    })
  })

  describe('when Session is running', () => {
    it('calls onPlay callback', async () => {
      sessionsRepository = {
        getCurrentSession: jest.fn().mockReturnValue(Session.play(Session.create())),
      }

      await initTimer({ sessionsRepository })(callbacks)

      expect(callbacks.onPlay).toBeCalled()
      expect(callbacks.onInit).not.toBeCalled()
      expect(callbacks.onError).not.toBeCalled()
    })
  })

  describe('when it fails', () => {
    it('calls onError callback', async () => {
      sessionsRepository = {
        getCurrentSession: jest.fn().mockImplementation(() => {
          throw new Error()
        }),
      }

      await initTimer({ sessionsRepository })(callbacks)

      expect(callbacks.onError).toBeCalled()
      expect(callbacks.onInit).not.toBeCalled()
      expect(callbacks.onPlay).not.toBeCalled()
    })
  })
})
