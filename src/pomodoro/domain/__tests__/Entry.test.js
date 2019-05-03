import * as Entry from '../Entry'
import * as Type from '../Type'

describe('Entry', () => {
  const now = 1547834515666
  const dateNow = jest.fn(() => now)

  beforeEach(() => {
    global.Date.now = dateNow
  })

  it('creates a Entry', () => {
    const entry = Entry.create({ id: 1 })

    expect(entry).toEqual({
      id: 1,
      start: 0,
      pause: 0,
      end: 0,
      type: Type.create('pomodoro'),
    })
  })

  it('starts a Entry', () => {
    const { start } = Entry.start(Entry.create())

    expect(start).toEqual(now)
  })

  it('ends a entry', () => {
    const { end } = Entry.end(Entry.create())

    expect(end).toEqual(now)
  })

  it('stops a Entry', () => {
    const { start } = Entry.stop(Entry.start(Entry.create()))

    expect(start).toEqual(0)
  })

  it('pauses a Entry', () => {
    const { pause, type } = Entry.pause(Entry.create(), 1494999)

    expect(pause).toEqual(type.duration - 1494999)
  })

  it('resumes a paused Entry', () => {
    const { pause, type } = Entry.resume(Entry.pause(Entry.create(), 1494999))

    expect(pause).toEqual(now - (type.duration - 1494999))
  })

  it('returns true when Entry is started', () => {
    const entry = Entry.start(Entry.create())

    expect(Entry.isStarted(entry)).toBeTruthy()
  })

  it('returns true when Entry is paused', () => {
    const entry = Entry.pause(Entry.start(Entry.create()), 1)

    expect(Entry.isPaused(entry)).toBeTruthy()
  })

  it('returns true when Entry is ended', () => {
    const entry = Entry.end(Entry.start(Entry.create()))

    expect(Entry.isEnded(entry)).toBeTruthy()
  })
})
