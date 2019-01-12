import * as Session from '../Session'

describe('Session', () => {
  const testCreatesWithLength = (to, length = 6) => {
    it(`creates an ${length} cycles session`, () => {
      const session = Session.create({}, length)
      const types = session.entries.map(entry => entry.type.id)

      expect(types).toEqual(to)
    })
  }

  testCreatesWithLength([
    'pomodoro',
    'short-break',
    'pomodoro',
    'short-break',
    'pomodoro',
    'long-break',
  ])

  testCreatesWithLength([
    'pomodoro',
    'short-break',
    'pomodoro',
    'long-break',
  ], 4)

  testCreatesWithLength([
    'pomodoro',
    'short-break',
    'pomodoro',
    'short-break',
    'pomodoro',
    'short-break',
    'pomodoro',
    'long-break',
  ], 8)
})
