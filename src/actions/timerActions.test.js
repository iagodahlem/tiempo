import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './timerActions'
import * as types from '../constants/actionTypes'

describe('timerActions', () => {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)

  let state

  beforeEach(() => {
    state = {
      entry: { start: 0, type: 'pomodoro' },
      timer: { lapse: 0, running: false, interval: null },
      sessions: {
        allIds: ['1', '2', '3'],
        byId: {
          '1': { id: '1', type: 'pomodoro', done: false },
          '2': { id: '2', type: 'short-break', done: false },
          '3': { id: '3', type: 'long-break', done: false },
        },
      },
      types: {
        allIds: ['pomodoro', 'short-break'],
        byId: {
          'pomodoro': { id: 'pomodoro', name: 'Pomodoro', duration: 25 },
          'short-break': { id: 'short-break', name: 'Short Break', duration: 5 },
        },
      },
    }

    jest.useFakeTimers()
    Date.now = jest.fn().mockReturnValue(Date.now())
  })

  afterEach(() => {
    jest.clearAllTimers()
  })

  describe('set', () => {
    it('set the timer type correctly', () => {
      const store = mockStore(state)
      const expectedActions = [
        { type: types.TIMER_SET, payload: { type: 'pomodoro', duration: 25 }}
      ]

      store.dispatch(actions.set())

      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  describe('start', () => {
    it('start the timer correctly', () => {
      const store = mockStore(state)
      const expectedActions = [
        { type: types.TIMER_START, payload: { start: Date.now(), interval: 1 }},
      ]

      store.dispatch(actions.start())

      expect(setInterval.mock.calls.length).toBe(1)
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  describe('tick', () => {
    it('tick the lapse correctly', () => {
      state.entry.start = Date.now()
      state.types.byId['pomodoro'].duration = 1000 * 60 * 25

      const store = mockStore(state)
      const expectedActions = [
        { type: types.TIMER_TICK, payload: { lapse: 1500000 }},
      ]

      // store.dispatch(actions.set())
      store.dispatch(actions.tick())

      expect(store.getActions()).toEqual(expectedActions)
    })

    it('when lapse is 0, call the stop and skip to the next session', () => {
      state.entry.start = - Date.now()

      const store = mockStore(state)
      const expectedActions = [
        { type: types.TIMER_STOP, payload: { duration: 25 }},
        { type: types.TIMER_SKIP, payload: { id: '1' }},
        { type: types.TIMER_SET, payload: { type: 'pomodoro', duration: 25 }}
      ]

      store.dispatch(actions.tick())

      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  describe('pause', () => {
    it('pause the timer correctly', () => {
      const store = mockStore(state)
      const expectedActions = [
        { type: types.TIMER_PAUSE },
      ]

      store.dispatch(actions.pause())

      expect(clearInterval.mock.calls.length).toBe(1)
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  describe('stop', () => {
    it('stop the timer correctly', () => {
      const store = mockStore(state)
      const expectedActions = [
        { type: types.TIMER_STOP, payload: { duration: 25 }},
      ]

      store.dispatch(actions.stop())

      expect(clearInterval.mock.calls.length).toBe(1)
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  describe('skip', () => {
    it('skip the timer correctly', () => {
      const store = mockStore(state)
      const expectedActions = [
        { type: types.TIMER_STOP, payload: { duration: 25 }},
        { type: types.TIMER_SKIP, payload: { id: '1' }},
        { type: types.TIMER_SET, payload: { type: 'pomodoro', duration: 25 }}
      ]

      store.dispatch(actions.skip())

      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
