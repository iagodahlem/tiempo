import { Pomodoro, Timer } from 'pomodoro/domain'
import * as fromTimer from 'pomodoro/store'

describe('timerStore', () => {
  const pomodoro = Pomodoro.create({ id: '1', entries: [] })
  const timer = Timer.create()
  const state = { pomodoro, timer }
  const container = {
    initPomodoro: ({ onInit }) => onInit({ pomodoro, timer }),
    playPomodoro: ({ onStart }) => onStart({ pomodoro, timer }),
    stopPomodoro: ({ onStop }) => onStop({ pomodoro, timer }),
    pausePomodoro: ({ onPause }) => onPause({ pomodoro, timer }),
    skipPomodoro: ({ onSkip }) => onSkip({ pomodoro, timer }),
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

  describe('pomodoroReducer', () => {
    it('returns the initial state', () => {
      expect(fromTimer.pomodoroReducer(state.pomodoro, {})).toEqual(state.pomodoro)
    })

    it(`handles ${fromTimer.actionTypes.SET_POMODORO}`, () => {
      expect(
        fromTimer.pomodoroReducer(state.pomodoro, {
          type: fromTimer.actionTypes.SET_POMODORO,
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
    it('sets the initial pomodoro and timer', async () => {
      const store = global.mockStore(state, container)

      const expectedActions = [
        { type: fromTimer.actionTypes.SET_POMODORO, payload: pomodoro },
        { type: fromTimer.actionTypes.SET_TIMER, payload: timer },
      ]

      await store.dispatch(fromTimer.init())

      expect(store.getActions()).toEqual(expectedActions)
    })

    it('plays the timer and updates the pomodoro', async () => {
      const store = global.mockStore(state, container)

      const expectedActions = [
        { type: fromTimer.actionTypes.SET_POMODORO, payload: pomodoro },
        { type: fromTimer.actionTypes.SET_TIMER, payload: timer },
      ]

      await store.dispatch(fromTimer.play())

      expect(store.getActions()).toEqual(expectedActions)
    })

    it('stops the timer and updates the pomodoro', async () => {
      const store = global.mockStore(state, container)

      const expectedActions = [
        { type: fromTimer.actionTypes.SET_POMODORO, payload: pomodoro },
        { type: fromTimer.actionTypes.SET_TIMER, payload: timer },
      ]

      await store.dispatch(fromTimer.stop())

      expect(store.getActions()).toEqual(expectedActions)
    })

    it('pauses the timer and updates the pomodoro', async () => {
      const store = global.mockStore(state, container)

      const expectedActions = [
        { type: fromTimer.actionTypes.SET_POMODORO, payload: pomodoro },
        { type: fromTimer.actionTypes.SET_TIMER, payload: timer },
      ]

      await store.dispatch(fromTimer.pause())

      expect(store.getActions()).toEqual(expectedActions)
    })

    it('skips the timer and updates the pomodoro', async () => {
      const store = global.mockStore(state, container)

      const expectedActions = [
        { type: fromTimer.actionTypes.SET_POMODORO, payload: pomodoro },
        { type: fromTimer.actionTypes.SET_TIMER, payload: timer },
      ]

      await store.dispatch(fromTimer.skip())

      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  describe('selectors', () => {
    it('gets the timer from the state', () => {
      expect(fromTimer.getTimer(state)).toEqual(state.timer)
    })

    it('gets the pomodoro from the state', () => {
      expect(fromTimer.getPomodoro(state)).toEqual(state.pomodoro)
    })

    it('gets formatted lapse from the state', () => {
      expect(fromTimer.getFormattedLapse(state)).toEqual('00:00')
    })
  })
})
