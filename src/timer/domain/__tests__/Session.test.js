import * as Session from '../Session'
import * as Type from '../Type'

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

  it('plays a Session', () => {
    const { status, entries } = Session.play(Session.create())

    expect(status).toBe(Session.statuses.RUNNING)
    expect(entries[0].start).toBeDefined()
  })

  it('stops a Session', () => {
    const { status, entries } = Session.stop(Session.play(Session.create()))

    expect(status).toBe(Session.statuses.IDLE)
    expect(entries[0].start).toBe(0)
    expect(entries[0].pause).toBe(0)
  })

  it('pauses a Session', () => {
    const { status, entries } = Session.pause(Session.play(Session.create()))

    expect(status).toBe(Session.statuses.PAUSED)
    expect(entries[0].pause).toBeDefined()
  })

  it('resumes a paused Session', () => {
    const { status, entries } = Session.play(Session.play(Session.create()))

    expect(status).toBe(Session.statuses.RUNNING)
    expect(entries[0].pause).toBeDefined()
  })

  it('skips to the next Entry', () => {
    const { status, entries } = Session.skip(Session.play(Session.create()))

    expect(status).toBe(Session.statuses.IDLE)
    expect(entries[0].end).toBeDefined()
  })

  it('starts the next Entry', () => {
    const { status, entries } = Session.play(Session.skip(Session.play(Session.create())))

    expect(status).toBe(Session.statuses.RUNNING)
    expect(entries[1].start).toBeDefined()
  })

  it('builds a timer from a IDLE session', () => {
    const timer = Session.timer(Session.create())
    const type = Type.create('pomodoro')

    expect(timer).toEqual({
      title: type.name,
      lapse: type.duration,
    })
  })
})
