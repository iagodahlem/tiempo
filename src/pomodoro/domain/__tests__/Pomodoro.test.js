import { Pomodoro, Type } from 'pomodoro/domain'

const fourLengthTypes = ['pomodoro', 'short-break', 'pomodoro', 'long-break']
const sixLengthTypes = ['pomodoro', 'short-break', ...fourLengthTypes]
const eightLengthTypes = ['pomodoro', 'short-break', ...sixLengthTypes]

describe('Pomodoro', () => {
  describe('creates a Pomodoro session', () => {
    const testCreateEntries = (expectedTypes, length) => {
      it(`with ${length} Entries`, () => {
        const { entries } = Pomodoro.create({}, length)
        const currentTypes = entries.map(entry => entry.type.id)

        expect(currentTypes).toEqual(expectedTypes)
      })
    }

    testCreateEntries(fourLengthTypes, 4)
    testCreateEntries(sixLengthTypes, 6)
    testCreateEntries(eightLengthTypes, 8)

    it('throws an Error when pass incorrect length', () => {
      expect(() => Pomodoro.create({}, 1)).toThrow(
        'Is not possible to create a Pomodoro session with 1 length.'
      )
    })
  })

  it('plays a Pomodoro session', () => {
    const { status, entries } = Pomodoro.play(Pomodoro.create())

    expect(status).toBe(Pomodoro.statuses.RUNNING)
    expect(entries[0].start).toBeDefined()
  })

  it('stops a Pomodoro session', () => {
    const { status, entries } = Pomodoro.stop(Pomodoro.play(Pomodoro.create()))

    expect(status).toBe(Pomodoro.statuses.IDLE)
    expect(entries[0].start).toBe(0)
    expect(entries[0].pause).toBe(0)
  })

  it('pauses a Pomodoro session', () => {
    const { status, entries } = Pomodoro.pause(Pomodoro.play(Pomodoro.create()))

    expect(status).toBe(Pomodoro.statuses.PAUSED)
    expect(entries[0].pause).toBeDefined()
  })

  it('resumes a paused Pomodoro session', () => {
    const { status, entries } = Pomodoro.play(Pomodoro.play(Pomodoro.create()))

    expect(status).toBe(Pomodoro.statuses.RUNNING)
    expect(entries[0].pause).toBeDefined()
  })

  it('skips to the next Entry', () => {
    const { status, entries } = Pomodoro.skip(Pomodoro.play(Pomodoro.create()))

    expect(status).toBe(Pomodoro.statuses.IDLE)
    expect(entries[0].end).toBeDefined()
  })

  it('starts the next Entry', () => {
    const { status, entries } = Pomodoro.play(Pomodoro.skip(Pomodoro.play(Pomodoro.create())))

    expect(status).toBe(Pomodoro.statuses.RUNNING)
    expect(entries[1].start).toBeDefined()
  })

  it('builds a timer from a IDLE Pomodoro session', () => {
    const timer = Pomodoro.timer(Pomodoro.create())
    const type = Type.create('pomodoro')

    expect(timer).toEqual({
      title: type.name,
      lapse: type.duration,
    })
  })
})
