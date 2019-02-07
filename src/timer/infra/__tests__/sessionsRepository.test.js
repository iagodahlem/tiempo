import { sessionsRepository } from 'timer/infra'
import { Session } from 'timer/domain'

describe('sessionsRepository', () => {
  let storageService = {}

  beforeEach(() => {
    storageService = {
      get: jest.fn().mockReturnValue([]),
      set: jest.fn(),
    }
  })

  describe('when there are no sessions', () => {
    it('creates a new session', async () => {
      await sessionsRepository({ storageService }).getCurrentSession()

      expect(storageService.set).toBeCalled()
    })
  })

  describe('when there are sessions', () => {
    const current = Session.create()

    beforeEach(() => {
      storageService.get = jest.fn().mockReturnValue([current])
    })

    it('returns the current session', async () => {
      const session = await sessionsRepository({ storageService }).getCurrentSession()

      expect(session.id).toEqual(current.id)
    })
  })

  it('creates a new session', async () => {
    await sessionsRepository({ storageService }).create()

    expect(storageService.set).toBeCalled()
  })

  it('updates a session', async () => {
    await sessionsRepository({ storageService }).update()

    expect(storageService.set).toBeCalled()
  })
})
