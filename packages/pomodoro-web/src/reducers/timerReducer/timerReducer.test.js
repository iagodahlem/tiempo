import reducer, * as fromReducer from './timerReducer'
import * as types from '../constants/actionTypes'

describe('timerReducer', () => {
  it('should return the initial state', () => {
    const stateExpected = {
      lapse: 0,
      running: false,
      interval: null,
    }

    const state = reducer(undefined, {})

    expect(state).toEqual(stateExpected)
  })

  it('should handle TIMER_SET', () => {
    const action = {
      type: types.TIMER_SET,
      payload: { duration: 10 },
    }
    const stateExpected = { lapse: 10 }

    const state = reducer({}, action)

    expect(state).toEqual(stateExpected)
  })

  it('should handle TIMER_START', () => {
    const action = {
      type: types.TIMER_START,
      payload: { interval: 1 }
    }
    const stateExpected = {
      running: true,
      interval: 1,
    }

    const state = reducer({}, action)

    expect(state).toEqual(stateExpected)
  })

  it('should handle TIMER_TICK', () => {
    const action = {
      type: types.TIMER_TICK,
      payload: { lapse: 24 },
    }
    const currentState = { lapse: 25 }
    const stateExpected = { lapse: 24 }

    const state = reducer(currentState, action)

    expect(state).toEqual(stateExpected)
  })

  it('should handle TIMER_PAUSE', () => {
    const action = {
      type: types.TIMER_PAUSE,
    }
    const currentState = { running: true, interval: 1 }
    const stateExpected = {
      running: false,
      interval: null,
    }

    const state = reducer(currentState, action)

    expect(state).toEqual(stateExpected)
  })

  it('should handle TIMER_STOP', () => {
    const action = {
      type: types.TIMER_STOP,
      payload: { duration: 25 },
    }
    const stateExpected = {
      lapse: 25,
      running: false,
      interval: null,
    }

    const state = reducer({}, action)

    expect(state).toEqual(stateExpected)
  })

  describe('selectors', () => {
    const state = {
      lapse: 0,
      running: false,
      interval: null,
    }

    it('should get the lapse', () => {
      expect(fromReducer.getLapse(state)).toBe(0)
    })

    it('should get the running', () => {
      expect(fromReducer.getRunning(state)).toBe(false)
    })

    it('should get the interval', () => {
      expect(fromReducer.getInterval(state)).toBe(null)
    })
  })
})
