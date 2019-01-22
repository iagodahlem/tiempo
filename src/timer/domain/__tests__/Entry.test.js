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
      start: null,
      pause: null,
      end: null,
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

    expect(start).toEqual(null)
  })

  it('pauses a Entry', () => {
    const { pause } = Entry.pause(Entry.create(), 1494999)

    expect(pause).toEqual(5001)
  })

  it('resumes a paused Entry', () => {
    const { pause } = Entry.resume(Entry.pause(Entry.create(), 1494999))

    expect(pause).toEqual(now - 5001)
  })
})
