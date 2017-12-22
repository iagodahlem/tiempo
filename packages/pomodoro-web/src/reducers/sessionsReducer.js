import * as types from '../constants/actionTypes'
import timerSessions from '../constants/timerSessions'

const initialState = timerSessions

const sessions = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case types.TIMER_RESET:
      return {
        ...timerSessions,
      }
    case types.TIMER_SKIP:
      return {
        ...state,
        byId: {
          ...state.byId,
          [payload.id]: {
            ...state.byId[payload.id],
            done: true,
          },
        },
      }
    default:
      return state
  }
}

export default sessions

export const getSession = (state, id) => state.byId[id]
export const getCurrentSession = (state) => getSessions(state)
  .find(session => !session.done)
export const getSessions = (state) => state.allIds
  .map(id => state.byId[id])
