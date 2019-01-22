import * as Timer from '../Timer'
import * as Session from '../Session'
import * as Type from '../Type'

describe('Timer', () => {
  it('creates a timer based on a new session', () => {
    const session = Session.create()
    const timer = Timer.create(session)
    const type = Type.create('pomodoro')

    expect(timer).toEqual({
      interval: null,
      title: type.name,
      lapse: type.duration,
    })
  })

  it('creates a timer based on a skipped session', () => {
    const session = Session.skip(Session.start(Session.create()))
    const timer = Timer.create(session)
    const type = Type.create('short-break')

    expect(timer).toEqual({
      interval: null,
      title: type.name,
      lapse: type.duration,
    })
  })
})
