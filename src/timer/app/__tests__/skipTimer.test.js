import { skipTimer } from 'timer/app'
import { Session, Entry, Timer } from 'timer/domain'

describe('skipTimer', () => {
  let params = {}
  let callbacks = {}
  let sessionsRepository = {}

  const sessionToEnd = (session) => ({
    ...session,
    entries: session.entries.map((entry, i) =>
      (session.entries.length - 1) === i ? entry : Entry.end(entry)
    ),
  })

  beforeEach(() => {
    params = {
      session: Session.create(),
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
      sessionsRepository = {
        update: jest.fn(),
      }

      await skipTimer({ sessionsRepository })(params, callbacks)

      expect(sessionsRepository.update).toBeCalled()
      expect(callbacks.onSkip).toBeCalled()
      expect(callbacks.onError).not.toBeCalled()
    })
  })

  describe('when session is ended', () => {
    it('creates a new session and calls onEnded callback', async () => {
      params.session = sessionToEnd(Session.create())
      sessionsRepository = {
        create: jest.fn().mockReturnValue(Session.create()),
      }

      await skipTimer({ sessionsRepository })(params, callbacks)

      expect(sessionsRepository.create).toBeCalled()
      expect(callbacks.onEnded).toBeCalled()
      expect(callbacks.onSkip).not.toBeCalled()
    })
  })

  describe('when it fails', () => {
    it('calls onError callback', async () => {
      sessionsRepository = {
        update: jest.fn().mockImplementation(() => {
          throw new Error()
        }),
      }

      await skipTimer({ sessionsRepository })(params, callbacks)

      expect(callbacks.onError).toBeCalled()
      expect(callbacks.onSkip).not.toBeCalled()
    })
  })
})
