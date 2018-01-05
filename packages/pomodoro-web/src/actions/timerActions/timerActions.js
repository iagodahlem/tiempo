import * as types from '../../constants/actionTypes'
import * as selectors from '../../selectors'

export const set = () => (dispatch, getState) => {
  const state = getState()
  const entry = selectors.getEntry(state)
  const { type } = selectors.getCurrentSession(state)
  const { duration } = selectors.getTypeByLabel(state, type)

  const lapse = entry && entry.paused
    ? (duration - entry.runned)
    : duration

  dispatch({
    type: types.TIMER_SET,
    payload: {
      lapse,
    },
  })
}

export const start = () => (dispatch, getState) => {
  const state = getState()
  const socket = selectors.getSocket(state)
  const { type } = selectors.getCurrentSession(state)

  socket.emit(types.TIMER_START, {
    type,
  })
}

export const onStart = (entry) => (dispatch, getState) => {
  const interval = setInterval(() => dispatch(tick()), 1000)

  dispatch(tick())

  dispatch({
    type: types.TIMER_START,
    payload: {
      entry,
      interval,
    },
  })
}

export const goOn = () => (dispatch, getState) => {
  const state = getState()
  const socket = selectors.getSocket(state)
  const { id } = selectors.getEntry(state)

  socket.emit(types.TIMER_GO_ON, {
    id,
  })
}

export const onGoOn = (entry) => (dispatch, getState) => {
  const interval = setInterval(() => dispatch(tick()), 1000)

  dispatch(tick())

  dispatch({
    type: types.TIMER_GO_ON,
    payload: {
      entry,
      interval,
    },
  })
}

export const tick = () => (dispatch, getState) => {
  const socket = selectors.getSocket(getState())

  socket.emit(types.TIMER_TICK)
}

export const onTick = (now) => (dispatch, getState) => {
  const { start, update, duration } = selectors.getEntry(getState())
  const current = update || start

  const lapse = current + duration - now
  const isLessThanZero = lapse <= 0

  if (isLessThanZero) {
    return dispatch(skip())
  }

  dispatch({
    type: types.TIMER_TICK,
    payload: {
      lapse,
    },
  })
}

export const pause = () => (dispatch, getState) => {
  const state = getState()
  const socket = selectors.getSocket(state)
  const lapse = selectors.getTimerLapse(state)
  const { id, duration } = selectors.getEntry(state)

  const runned = duration - lapse

  socket.emit(types.TIMER_PAUSE, {
    id,
    runned,
  })
}

export const onPause = (entry) => (dispatch, getState) => {
  const interval = selectors.getTimerInterval(getState())

  clearInterval(interval)

  dispatch({
    type: types.TIMER_PAUSE,
    payload: {
      entry,
    },
  })
}

export const stop = () => (dispatch, getState) => {
  const state = getState()
  const socket = selectors.getSocket(state)
  const { id } = selectors.getEntry(state)

  socket.emit(types.TIMER_STOP, {
    id,
  })
}

export const onStop = (entry) => (dispatch, getState) => {
  const state = getState()
  const duration = selectors.getEntryDuration(state)
  const interval = selectors.getTimerInterval(state)

  clearInterval(interval)

  dispatch({
    type: types.TIMER_STOP,
    payload: {
      entry,
      lapse: duration,
    },
  })
}

export const skip = () => (dispatch, getState) => {
  const resetTimer = () => ({ type: types.TIMER_RESET })
  const skipTimer = (id) => ({ type: types.TIMER_SKIP, payload: { id }})

  const sessions = selectors.getSessions(getState())
  const currentSession = selectors.getCurrentSession(getState())
  const isLastSession = sessions.indexOf(currentSession) === sessions.length - 1

  dispatch(stop())

  if (isLastSession) {
    dispatch(resetTimer())
  } else {
    dispatch(skipTimer(currentSession.id))
  }

  dispatch(set())
}
