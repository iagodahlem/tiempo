import reducer from './timerReducer'
import * as types from '../constants/actionTypes'

describe('timerReducer', () => {
  it('returns the initial state', () => {
    const state = reducer(undefined, {})
    const stateExpected = {
      name: '',
      start: 0,
      lapse: 0,
      duration: 0,
      running: false,
      interval: null,
    }

    expect(state).toEqual(stateExpected)
  })

  describe(types.TIMER_SET, () => {
    it('returns lapse and duration when setted', () => {
      const payload = { name: 'Pomodoro', lapse: 25, duration: 25 }
      const state = reducer(undefined, { type: types.TIMER_SET, payload })
      const stateExpected = {
        name: 'Pomodoro',
        start: 0,
        lapse: 25,
        duration: 25,
        running: false,
        interval: null,
      }

      expect(state).toEqual(stateExpected)
    })
  })

  describe(types.TIMER_START, () => {
    it('returns start and interval when started', () => {
      const payload = { start: 25, interval: 1 }
      const state = reducer(undefined, { type: types.TIMER_START, payload })
      const stateExpected = {
        name: '',
        start: 25,
        lapse: 0,
        duration: 0,
        running: true,
        interval: 1,
      }

      expect(state).toEqual(stateExpected)
    })
  })

  describe(types.TIMER_TICK, () => {
    it('changes the current lapse at each tick', () => {
      const payload = { lapse: 24 }
      const currentState = { lapse: 25 }
      const state = reducer(currentState, { type: types.TIMER_TICK, payload })
      const stateExpected = {
        lapse: 24,
      }

      expect(state).toEqual(stateExpected)
    })
  })

  describe(types.TIMER_PAUSE, () => {
    it('resets running and interval when paused', () => {
      const currentState = { running: true, interval: 1 }
      const state = reducer(currentState, { type: types.TIMER_PAUSE })
      const stateExpected = {
        running: false,
        interval: null,
      }

      expect(state).toEqual(stateExpected)
    })
  })

  describe(types.TIMER_STOP, () => {
    it('resets running and interval when stoped', () => {
      const currentState = { duration: 25 }
      const state = reducer(currentState, { type: types.TIMER_STOP })
      const stateExpected = {
        start: null,
        lapse: 25,
        duration: 25,
        running: false,
        interval: null,
      }

      expect(state).toEqual(stateExpected)
    })
  })
})
