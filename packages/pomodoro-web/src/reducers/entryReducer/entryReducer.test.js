import reducer, * as fromReducer from './entryReducer'
import * as types from '../../constants/actionTypes'

describe('entryReducer', () => {
  it('should return the initial state', () => {
    const stateExpected = {
      type: 'pomodoro',
      start: 0,
    }

    const state = reducer(undefined, {})

    expect(state).toEqual(stateExpected)
  })

  it('should handle TIMER_SET', () => {
    const action = {
      type: types.TIMER_SET,
      payload: { type: 'short-break' },
    }
    const stateExpected = { type: 'short-break' }

    const state = reducer({}, action)

    expect(state).toEqual(stateExpected)
  })

  it('should handle TIMER_START', () => {
    const action = {
      type: types.TIMER_START,
      payload: { start: 100 },
    }
    const stateExpected = { start: 100 }

    const state = reducer({}, action)

    expect(state).toEqual(stateExpected)
  })

  it('should handle TIMER_START', () => {
    const action = {
      type: types.TIMER_STOP,
    }
    const currentState = { start: 100 }
    const stateExpected = { start: 0 }

    const state = reducer(currentState, action)

    expect(state).toEqual(stateExpected)
  })

  describe('selectors', () => {
    const state = {
      type: 'pomodoro',
      start: 0,
    }

    it('should get the entry type', () => {
      expect(fromReducer.getType(state)).toBe('pomodoro')
    })

    it('should get the entry start', () => {
      expect(fromReducer.getStart(state)).toBe(0)
    })
  })
})
