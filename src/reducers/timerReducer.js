import * as types from '../constants/actionTypes'
import timerSessions from '../constants/timerSessions'
import timerTypes from '../constants/timerTypes'

const initialState = {
  lapse: 0,
  running: false,
  interval: null,
  entry: { type: 'pomodoro', start: 0 },
  sessions: timerSessions,
  types: timerTypes,
}

const timer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case types.TIMER_SET:
      return {
        ...state,
        lapse: payload.duration,
        entry: {
          ...state.entry,
          type: payload.timerType,
        },
      }
    case types.TIMER_START:
      return {
        ...state,
        running: true,
        interval: payload.interval,
        entry: {
          ...state.entry,
          start: payload.start,
        },
      }
    case types.TIMER_TICK:
      return {
        ...state,
        lapse: payload.lapse,
      }
    case types.TIMER_PAUSE:
      return {
        ...state,
        running: false,
        interval: null,
      }
    case types.TIMER_STOP:
      return {
        ...state,
        lapse: payload.duration,
        running: false,
        interval: null,
        entry: {
          ...state.entry,
          start: 0,
        },
      }
    case types.TIMER_RESET:
      return {
        ...state,
        sessions: timerSessions,
      }
    case types.TIMER_SKIP:
      return {
        ...state,
        sessions: {
          ...state.sessions,
          byId: {
            ...state.sessions.byId,
            [payload.id]: {
              ...state.sessions.byId[payload.id],
              done: true,
            },
          },
        },
      }
    default:
      return state
  }
}

export default timer

export const getLapse = (state) => state.timer.lapse
export const getRunning = (state) => state.timer.running
export const getInterval = (state) => state.timer.interval

export const getStart = (state) => state.timer.entry.start
export const getName = (state) => state.timer.types
  .byId[state.timer.entry.type]
  .name
export const getDuration = (state) => state.timer.types
  .byId[state.timer.entry.type]
  .duration

export const getSession = (state, id) => state.timer.sessions.byId[id]
export const getSessions = (state) => state.timer.sessions.allIds
  .map(id => state.timer.sessions.byId[id])
export const getCurrentSession = (state) => state.timer.sessions.allIds
  .map(id => state.timer.sessions.byId[id])
  .find(session => !session.done)

export const getType = (state, id) => state.timer.types.byId[id]
export const getTypes = (state) => state.timer.types.allIds
  .map(id => state.timer.types.byId[id])
