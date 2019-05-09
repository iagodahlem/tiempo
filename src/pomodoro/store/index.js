import { Pomodoro, Timer } from 'pomodoro/domain'

export const actionTypes = {
  SET_POMODORO: 'SET_POMODORO',
  SET_TIMER: 'SET_TIMER',
}

export const pomodoroReducer = (state = Pomodoro.create(), { type, payload = {} } = {}) => {
  switch (type) {
    case actionTypes.SET_POMODORO:
      return payload
    default:
      return state
  }
}

export const timerReducer = (state = Timer.create(), { type, payload = {} } = {}) => {
  switch (type) {
    case actionTypes.SET_TIMER:
      return { ...state, ...payload }
    default:
      return state
  }
}

export const init = () => (dispatch, _, container) => container.initPomodoro({
  onInit: payload => dispatch(onSuccess(payload)),
  onPlay: payload => dispatch(play(payload)),
  onError,
})

export const play = ({ pomodoro: optionalPomodoro, timer: optionalTimer } = {}) => (
  dispatch,
  getState,
  container
) => {
  const state = getState()
  const pomodoro = optionalPomodoro || getPomodoro(state)
  const timer = optionalTimer || getTimer(state)

  container.playPomodoro(
    {
      onStart: payload => dispatch(onSuccess(payload)),
      onTick: payload => dispatch(onSuccess(payload)),
      onSkip: () => dispatch(skip()),
      onError,
    },
    {
      pomodoro,
      timer,
    }
  )
}

export const stop = () => (dispatch, getState, container) => {
  const state = getState()
  const pomodoro = getPomodoro(state)
  const timer = getTimer(state)

  container.stopPomodoro(
    {
      onStop: payload => dispatch(onSuccess(payload)),
      onError,
    },
    {
      pomodoro,
      timer,
    }
  )
}

export const pause = () => (dispatch, getState, container) => {
  const state = getState()
  const pomodoro = getPomodoro(state)
  const timer = getTimer(state)

  container.pausePomodoro(
    {
      onPause: payload => dispatch(onSuccess(payload)),
      onError,
    },
    {
      pomodoro,
      timer,
    }
  )
}

export const skip = () => (dispatch, getState, container) => {
  const state = getState()
  const pomodoro = getPomodoro(state)
  const timer = getTimer(state)

  container.skipPomodoro(
    {
      onSkip: payload => dispatch(onSuccess(payload)),
      onEnded: payload => dispatch(onSuccess(payload)),
      onError,
    },
    {
      pomodoro,
      timer,
    }
  )
}

const onSuccess = (payload = {}) => {
  const actions = {
    pomodoro: setPomodoro,
    timer: setTimer,
  }

  return Object.keys(payload).map(key => actions[key](payload[key]))
}

const onError = error => new Error(error)

export const setPomodoro = payload => ({
  type: actionTypes.SET_POMODORO,
  payload,
})

const setTimer = payload => ({
  type: actionTypes.SET_TIMER,
  payload,
})

export const getPomodoro = state => state.pomodoro

export const getStatus = state => getPomodoro(state).status

export const getTimer = state => state.timer

export const getTitle = state => getTimer(state).title

export const getLapse = state => getTimer(state).lapse
