import { Session } from 'timer/domain'

const actionTypes = {
  SET_TIMER: 'SET_TIMER',
  SET_SESSION: 'SET_SESSION',
}

const initialState = {
  title: '',
  lapse: 0,
  interval: null,
}

export const timerReducer = (state = initialState, { type, payload = {} } = {}) => {
  switch (type) {
    case actionTypes.SET_TIMER:
      return { ...state, ...payload }
    default:
      return state
  }
}

export const sessionReducer = (state = Session.create(), { type, payload } = {}) => {
  switch (type) {
    case actionTypes.SET_SESSION:
      return payload
    default:
      return state
  }
}

export const init = () => (dispatch, _, container) => {
  container.initTimer({
    onSuccess: ({ session, timer }) => dispatch([ setSession(session), setTimer(timer) ]),
    onError: (error) => console.error(error),
  })
}

export const start = () => (dispatch, getState, container) => {
  const state = getState()
  const session = selectSession(state)
  const timer = selectTimer(state)

  container.startTimer(session, timer, {
    onSuccess: ({ session, timer }) => dispatch([ setSession(session), setTimer(timer) ]),
    onTick: ({ timer }) => dispatch([ setTimer(timer) ]),
    onError: (error) => console.error(error),
  })
}

export const stop = () => (dispatch, getState, container) => {
  const state = getState()
  const session = selectSession(state)
  const timer = selectTimer(state)

  container.stopTimer(session, timer, {
    onSuccess: ({ session, timer }) => dispatch([ setSession(session), setTimer(timer) ]),
    onError: (error) => console.error(error),
  })
}

export const pause = () => (dispatch, getState, container) => {
  const state = getState()
  const session = selectSession(state)
  const timer = selectTimer(state)

  container.pauseTimer(session, timer, {
    onSuccess: ({ session, timer }) => dispatch([ setSession(session), setTimer(timer) ]),
    onError: (error) => console.error(error),
  })
}

const setTimer = (payload) => ({
  type: actionTypes.SET_TIMER,
  payload,
})

const setSession = (payload) => ({
  type: actionTypes.SET_SESSION,
  payload,
})

export const selectSession = (state) => state.session

export const selectTimer = (state) => state.timer

export const selectTitle = (state) => state.timer.title

export const selectLapse = (state) => state.timer.lapse
