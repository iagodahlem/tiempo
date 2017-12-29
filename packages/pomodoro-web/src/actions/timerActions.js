import * as types from '../constants/actionTypes'
import * as selectors from '../reducers/selectors'
import { emit } from '../services/socketService'

export const set = () => (dispatch, getState) => {
  const { type } = selectors.getCurrentSession(getState())
  const { duration } = selectors.getTypeByLabel(getState(), type)

  dispatch({
    type: types.TIMER_SET,
    payload: {
      lapse: duration,
    },
  })
}

export const start = () => (dispatch, getState) => {
  const { type } = selectors.getCurrentSession(getState())

  emit(types.TIMER_START, {
    type,
  })
}

export const onStart = (entry) => (dispatch, getState) => {
  const interval = setInterval(() => dispatch(tick()), 100)

  dispatch({
    type: types.TIMER_START,
    payload: {
      entry,
      interval,
    },
  })
}

export const goOn = () => (dispatch, getState) => {
  const { id } = selectors.getEntry(getState())

  emit(types.TIMER_GO_ON, {
    id,
  })
}

export const onGoOn = (entry) => (dispatch, getState) => {
  const state = getState()
  const duration = selectors.getEntryDuration(state)
  const lapse = selectors.getTimerLapse(state)

  const start = entry.start - (duration - lapse)
  const interval = setInterval(() => dispatch(tick()), 100)

  dispatch({
    type: types.TIMER_GO_ON,
    payload: {
      entry: { ...entry, start },
      interval,
    },
  })
}

export const tick = () => (dispatch, getState) => {
  const start = selectors.getEntryStart(getState())
  const duration = selectors.getEntryDuration(getState())

  const lapse = start + duration - Date.now()

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
  const { id } = selectors.getEntry(getState())

  emit(types.TIMER_PAUSE, {
    id,
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
  const { id } = selectors.getEntry(getState())

  emit(types.TIMER_STOP, {
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
