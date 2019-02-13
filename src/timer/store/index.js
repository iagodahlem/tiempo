import { Session, Timer } from 'timer/domain'

export const actionTypes = {
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

export const init = () => (dispatch, _, container) => container.initTimer({
  onInit: payload => dispatch(onSuccess(payload)),
  onPlay: payload => dispatch(play(payload)),
  onError,
})

export const play = ({ session: optionalSession, timer: optionalTimer } = {}) => (
  dispatch,
  getState,
  container
) => {
  const state = getState()
  const session = optionalSession || selectSession(state)
  const timer = optionalTimer || selectTimer(state)

  container.playTimer(
    {
      onStart: payload => dispatch(onSuccess(payload)),
      onTick: payload => dispatch(onSuccess(payload)),
      onSkip: () => dispatch(skip()),
      onError,
    },
    {
      session,
      timer,
    }
  )
}

export const stop = () => (dispatch, getState, container) => {
  const state = getState()
  const session = selectSession(state)
  const timer = selectTimer(state)

  container.stopTimer(
    {
      onStop: payload => dispatch(onSuccess(payload)),
      onError,
    },
    {
      session,
      timer,
    }
  )
}

export const pause = () => (dispatch, getState, container) => {
  const state = getState()
  const session = selectSession(state)
  const timer = selectTimer(state)

  container.pauseTimer(
    {
      onPause: payload => dispatch(onSuccess(payload)),
      onError,
    },
    {
      session,
      timer,
    }
  )
}

export const skip = () => (dispatch, getState, container) => {
  const state = getState()
  const session = selectSession(state)
  const timer = selectTimer(state)

  container.skipTimer(
    {
      onSkip: payload => dispatch(onSuccess(payload)),
      onEnded: payload => dispatch(onSuccess(payload)),
      onError,
    },
    {
      session,
      timer,
    }
  )
}

const onSuccess = (payload = {}) => {
  const actions = {
    session: setSession,
    timer: setTimer,
  }

  return Object.keys(payload).map(key => actions[key](payload[key]))
}

const setTimer = payload => ({
  type: actionTypes.SET_TIMER,
  payload,
})

const setSession = payload => ({
  type: actionTypes.SET_SESSION,
  payload,
})

const onError = error => console.error(error)

export const selectTimer = state => state.timer

export const selectSession = state => state.session
