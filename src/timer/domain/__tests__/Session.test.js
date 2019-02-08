import * as Session from '../Session'
import * as Type from '../Type'

const fourLengthTypes = ['pomodoro', 'short-break', 'pomodoro', 'long-break']
const sixLengthTypes = ['pomodoro', 'short-break', ...fourLengthTypes]
const eightLengthTypes = ['pomodoro', 'short-break', ...sixLengthTypes]

describe('Session', () => {
  describe('creates a Session', () => {
    const testCreateEntries = (expectedTypes, length) => {
      it(`with ${length} Entries`, () => {
        const { entries } = Session.create({}, length)
        const currentTypes = entries.map((entry) => entry.type.id)

        expect(currentTypes).toEqual(expectedTypes)
      })
    }

    testCreateEntries(fourLengthTypes, 4)
    testCreateEntries(sixLengthTypes, 6)
    testCreateEntries(eightLengthTypes, 8)

    it('throws an Error when pass incorrect length', () => {
      expect(() => Session.create({}, 1)).toThrow(
        'Is not possible to create a session with 1 length.'
      )
    })
  })

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
