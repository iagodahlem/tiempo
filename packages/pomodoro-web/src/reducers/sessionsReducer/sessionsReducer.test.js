import reducer, * as fromReducer from './sessionsReducer'
import timerSessions from '../../constants/timerSessions'
import * as types from '../../constants/actionTypes'

describe('sessionsReducer', () => {
  it('should return the initial state', () => {
    const stateExpected = timerSessions

    const state = reducer(undefined, {})

    expect(state).toEqual(stateExpected)
  })

  it('should handle TIMER_RESET', () => {
    const action = {
      type: types.TIMER_RESET,
    }
    const stateExpected = timerSessions

    const state = reducer(undefined, action)

    expect(state).toEqual(stateExpected)
  })

  it('should handle TIMER_SKIP', () => {
    const action = {
      type: types.TIMER_SKIP,
      payload: { id: '1' },
    }
    const stateExpected = {
      allIds: ['1', '2', '3', '4', '5', '6'],
      byId: {
        '1': { id: '1', type: 'pomodoro', done: true },
        '2': { id: '2', type: 'short-break', done: false },
        '3': { id: '3', type: 'pomodoro', done: false },
        '4': { id: '4', type: 'short-break', done: false },
        '5': { id: '5', type: 'pomodoro', done: false },
        '6': { id: '6', type: 'long-break', done: false },
      },
    }

    const state = reducer(undefined, action)

    expect(state).toEqual(stateExpected)
  })

  describe('selectors', () => {
    const state = {
      allIds: ['1', '2', '3'],
      byId: {
        '1': { id: '1', type: 'pomodoro', done: true },
        '2': { id: '2', type: 'short-break', done: true },
        '3': { id: '3', type: 'long-break', done: false },
      },
    }

    it('should get the session', () => {
      expect(fromReducer.getSession(state, '1')).toEqual({ id: '1', type: 'pomodoro', done: true })
    })

    it('should get the current session', () => {
      expect(fromReducer.getCurrentSession(state)).toEqual({ id: '3', type: 'long-break', done: false })
    })

    it('should get all the sessions', () => {
      expect(fromReducer.getSessions(state)).toEqual([
        { id: '1', type: 'pomodoro', done: true },
        { id: '2', type: 'short-break', done: true },
        { id: '3', type: 'long-break', done: false },
      ])
    })
  })
})
