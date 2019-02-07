import { Session, Timer } from 'timer/domain'
import * as fromTimer from '..'

describe('timerStore', () => {
  const session = Session.create({ id: '1', entries: [] })
  const timer = Timer.create()
  const state = { session, timer }
  const container = {
    initTimer: ({ onInit }) => onInit({ session, timer }),
    playTimer: ({ onStart }) => onStart({ session, timer }),
    stopTimer: ({ onStop }) => onStop({ session, timer }),
    pauseTimer: ({ onPause }) => onPause({ session, timer }),
    skipTimer: ({ onSkip }) => onSkip({ session, timer }),
  }

  describe('timerReducer', () => {
    it('returns the initial state', () => {
      expect(fromTimer.timerReducer(state.timer, {})).toEqual(state.timer)
    })

    it(`handles ${fromTimer.actionTypes.SET_TIMER}`, () => {
      expect(
        fromTimer.timerReducer(state.timer, {
          type: fromTimer.actionTypes.SET_TIMER,
          payload: {
            title: 'Pomodoro',
            lapse: 25000,
          },
        })
      ).toEqual({
        title: 'Pomodoro',
        lapse: 25000,
        interval: null,
      })
    })
  })

  describe('sessionReducer', () => {
    it('returns the initial state', () => {
      expect(fromTimer.sessionReducer(state.session, {})).toEqual(state.session)
    })

    it(`handles ${fromTimer.actionTypes.SET_SESSION}`, () => {
      expect(
        fromTimer.sessionReducer(state.session, {
          type: fromTimer.actionTypes.SET_SESSION,
          payload: {
            entries: [],
          },
        })
      ).toEqual({
        entries: [],
      })
    })
  })

  describe('actions', () => {
    it('sets the initial session and timer', async () => {
      const store = global.mockStore(state, container)

      const expectedActions = [
        { type: fromTimer.actionTypes.SET_SESSION, payload: session },
        { type: fromTimer.actionTypes.SET_TIMER, payload: timer },
      ]

      await store.dispatch(fromTimer.init())

      expect(store.getActions()).toEqual(expectedActions)
    })

    it('plays the timer and updates the session', async () => {
      const store = global.mockStore(state, container)

      const expectedActions = [
        { type: fromTimer.actionTypes.SET_SESSION, payload: session },
        { type: fromTimer.actionTypes.SET_TIMER, payload: timer },
      ]

      await store.dispatch(fromTimer.play())

      expect(store.getActions()).toEqual(expectedActions)
    })

    it('stops the timer and updates the session', async () => {
      const store = global.mockStore(state, container)

      const expectedActions = [
        { type: fromTimer.actionTypes.SET_SESSION, payload: session },
        { type: fromTimer.actionTypes.SET_TIMER, payload: timer },
      ]

      await store.dispatch(fromTimer.stop())

      expect(store.getActions()).toEqual(expectedActions)
    })

    it('pauses the timer and updates the session', async () => {
      const store = global.mockStore(state, container)

      const expectedActions = [
        { type: fromTimer.actionTypes.SET_SESSION, payload: session },
        { type: fromTimer.actionTypes.SET_TIMER, payload: timer },
      ]

      await store.dispatch(fromTimer.pause())

      expect(store.getActions()).toEqual(expectedActions)
    })

    it('skips the timer and updates the session', async () => {
      const store = global.mockStore(state, container)

      const expectedActions = [
        { type: fromTimer.actionTypes.SET_SESSION, payload: session },
        { type: fromTimer.actionTypes.SET_TIMER, payload: timer },
      ]

      await store.dispatch(fromTimer.skip())

      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  describe('selectors', () => {
    it('gets the timer from the state', () => {
      expect(fromTimer.selectTimer(state)).toEqual(state.timer)
    })

    it('gets the session from the state', () => {
      expect(fromTimer.selectSession(state)).toEqual(state.session)
    })
  })
})
