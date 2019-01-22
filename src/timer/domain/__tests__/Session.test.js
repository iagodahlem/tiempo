import * as Session from '../Session'

describe('Session', () => {
  const testCreateEntries = (equal, length) => {
    it(`creates an ${length} cycles Session`, () => {
      const { id, status, entries } = Session.create({ id: 1 }, length)
      const types = entries.map(entry => entry.type.id)

      expect(id).toEqual(1)
      expect(status).toEqual(Session.statuses.IDLE)
      expect(types).toEqual(equal)
    })
  }

  testCreateEntries(['pomodoro', 'short-break', 'pomodoro', 'long-break'], 4)
  testCreateEntries(['pomodoro', 'short-break', 'pomodoro', 'short-break', 'pomodoro', 'long-break'], 6)
  testCreateEntries(['pomodoro', 'short-break', 'pomodoro', 'short-break', 'pomodoro', 'short-break', 'pomodoro', 'long-break'], 8)

  it('starts a Session', () => {
    const { status, entries } = Session.start(Session.create())

    expect(status).toBe(Session.statuses.RUNNING)
    expect(entries[0].start).toBeDefined()
  })

  it('stops a Session', () => {
    const { status, entries } = Session.stop(Session.start(Session.create()))

    expect(status).toBe(Session.statuses.IDLE)
    expect(entries[0].start).toBe(null)
  })

  it('pauses a Session', () => {
    const { status, entries } = Session.pause(Session.start(Session.create()))

    expect(status).toBe(Session.statuses.PAUSED)
    expect(entries[0].pause).toBeDefined()
  })

  it('resumes a paused Session', () => {
    const { status, entries } = Session.start(Session.start(Session.create()))

    expect(status).toBe(Session.statuses.RUNNING)
    expect(entries[0].pause).toBeDefined()
  })

  it('skips to the next Entry', () => {
    const { status, entries } = Session.skip(Session.start(Session.create()))

    expect(status).toBe(Session.statuses.IDLE)
    expect(entries[0].end).toBeDefined()
  })

  it('starts the next Entry', () => {
    const { status, entries } = Session.start(Session.skip(Session.start(Session.create())))

    expect(status).toBe(Session.statuses.RUNNING)
    expect(entries[1].start).toBeDefined()
  })
})
