import * as Timer from '../Timer'

describe('Timer', () => {
  it('creates a timer with default values', () => {
    const timer = Timer.create()

    expect(timer).toEqual({
      interval: null,
      title: '',
      lapse: 0,
    })
  })

  it('creates a timer', () => {
    const values = { interval: 16, title: 'Pomodoro', lapse: Date.now() }
    const timer = Timer.create(values)

    expect(timer).toEqual(values)
  })
})
