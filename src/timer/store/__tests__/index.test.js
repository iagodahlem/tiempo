import * as fromTimer from '../'
import { Timer, Session } from 'timer/domain'

describe('timerStore', () => {
  const state = {
    timer: Timer.create(),
    session: Session.create(),
  }

  describe('timerReducer', () => {
    it('returns the initial state', () => {
      expect(fromTimer.timerReducer(state.timer, {})).toEqual(state.timer)
    })

    it(`handles ${fromTimer.actionTypes.SET_TIMER}`, () => {
      expect(fromTimer.timerReducer(state.timer, {
        type: fromTimer.actionTypes.SET_TIMER,
        payload: {
          title: 'Pomodoro',
          lapse: 25000,
        },
      })).toEqual({
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
      expect(fromTimer.sessionReducer(state.session, {
        type: fromTimer.actionTypes.SET_SESSION,
        payload: {
          entries: [],
        },
      })).toEqual({
        entries: [],
      })
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
