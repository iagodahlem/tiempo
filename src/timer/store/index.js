import { Session, Timer } from 'timer/domain'

const actionTypes = {
  SET_TIMER: 'SET_TIMER',
  SET_SESSION: 'SET_SESSION',
}

export const timerReducer = (state = Timer.create(), { type, payload = {} } = {}) => {
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
    onSuccess: onSuccess(dispatch),
    onError: onError(dispatch),
  })
}

export const start = () => (dispatch, getState, container) => {
  const state = getState()
  const session = selectSession(state)
  const timer = selectTimer(state)

  container.startTimer({ session, timer }, {
    onSuccess: onSuccess(dispatch),
    onError: onError(dispatch),
  })
}

export const stop = () => (dispatch, getState, container) => {
  const state = getState()
  const session = selectSession(state)
  const timer = selectTimer(state)

  container.stopTimer({ session, timer }, {
    onSuccess: onSuccess(dispatch),
    onError: onError(dispatch),
  })
}

export const pause = () => (dispatch, getState, container) => {
  const state = getState()
  const session = selectSession(state)
  const timer = selectTimer(state)

  container.pauseTimer({ session, timer }, {
    onSuccess: onSuccess(dispatch),
    onError: onError(dispatch),
  })
}

export const skip = () => (dispatch, getState, container) => {
  const state = getState()
  const session = selectSession(state)
  const timer = selectTimer(state)

  container.skipTimer({ session, timer }, {
    onSuccess: onSuccess(dispatch),
    onError: onError(dispatch),
  })
}

const onSuccess = (dispatch) => ({ session = null, timer = null } = {}) => {
  let actions = []

  if (session) actions.push(setSession(session))
  if (timer) actions.push(setTimer(timer))

  dispatch(actions)
}

const onError = (_) => (error) => console.error(error)

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
