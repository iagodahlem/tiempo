import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './timerActions'
import * as types from '../constants/actionTypes'

describe('timerActions', () => {
  const middlewares = [thunk]
  const mockStore = configureMockStore(middlewares)

  let state = {
    start: 0,
    lapse: 0,
    duration: 0,
    running: false,
    interval: null,
  }

  beforeEach(() => {
    jest.useFakeTimers()
    Date.now = jest.fn().mockReturnValue(Date.now())
  })

  afterEach(() => {
    jest.clearAllTimers()
  })

  describe('set', () => {
    it('sets the timer type correctly', () => {
      const store = mockStore({ timer: state })
      const payload = { duration: 100, lapse: 100 }

      const expectedActions = [
        { type: types.TIMER_SET, payload },
      ]

      store.dispatch(actions.set({ duration: 100 }))

      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  describe('start', () => {
    it('starts the timer correctly', () => {
      const store = mockStore({ timer: state })
      const payload = {
        start: Date.now(),
        interval: 1,
      }

      const expectedActions = [
        { type: types.TIMER_START, payload },
      ]

      store.dispatch(actions.start())

      expect(setInterval.mock.calls.length).toBe(1)
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  describe('tick', () => {
    it('ticks the lapse correctly', () => {
      state.start = Date.now()
      state.duration = 1000 * 60 * 25

      const store = mockStore({ timer: state })
      const payload = {
        lapse: 1500000,
      }

      const expectedActions = [
        { type: types.TIMER_TICK, payload },
      ]

      store.dispatch(actions.tick())

      expect(store.getActions()).toEqual(expectedActions)
    })

    it('calls the stop when lapse gets to 0', () => {
      state.start = Date.now()
      state.duration = 0

      const store = mockStore({ timer: state })

      const expectedActions = [
        { type: types.TIMER_STOP },
      ]

      store.dispatch(actions.tick())

      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  describe('pause', () => {
    it('pauses the timer correctly', () => {
      const store = mockStore({ timer: state })

      const expectedActions = [
        { type: types.TIMER_PAUSE },
      ]

      store.dispatch(actions.pause())

      expect(clearInterval.mock.calls.length).toBe(1)
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  describe('stop', () => {
    it('stops the timer correctly', () => {
      const store = mockStore({ timer: state })

      const expectedActions = [
        { type: types.TIMER_STOP },
      ]

      store.dispatch(actions.stop())

      expect(clearInterval.mock.calls.length).toBe(1)
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
