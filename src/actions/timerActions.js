import * as types from '../constants/actionTypes'
import * as selectors from '../reducers/selectors'

export const set = () => (dispatch, getState) => {
  const setTimer = (type, duration) => ({
    type: types.TIMER_SET,
    payload: {
      type,
      duration,
    },
  })

  const { type } = selectors.getCurrentSession(getState())
  const { duration } = selectors.getType(getState(), type)

  dispatch(setTimer(type, duration))
}

export const start = () => (dispatch, getState) => {
  const startTimer = (start, interval) => ({
    type: types.TIMER_START,
    payload: {
      start,
      interval,
    },
  })

  const lapse = selectors.getTimerLapse(getState())
  const currentStart = selectors.getEntryStart(getState())
  const duration = selectors.getEntryDuration(getState())

  const start = currentStart ? Date.now() - (duration - lapse) : Date.now()
  const interval = setInterval(() => dispatch(tick()), 1000)

  dispatch(startTimer(start, interval))
}

export const tick = () => (dispatch, getState) => {
  const tickTimer = (lapse) => ({ type: types.TIMER_TICK, payload: { lapse }})

  const start = selectors.getEntryStart(getState())
  const duration = selectors.getEntryDuration(getState())

  const lapse = start + duration - Date.now()

  if (lapse <= 0) {
    dispatch(skip())
  } else {
    dispatch(tickTimer(lapse))
  }
}

export const pause = () => (dispatch, getState) => {
  const interval = selectors.getTimerInterval(getState())

  clearInterval(interval)

  dispatch({
    type: types.TIMER_PAUSE,
  })
}

export const stop = () => (dispatch, getState) => {
  const interval = selectors.getTimerInterval(getState())
  const duration = selectors.getEntryDuration(getState())

  clearInterval(interval)

  dispatch({
    type: types.TIMER_STOP,
    payload: {
      duration,
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

export default {
  set,
  start,
  tick,
  pause,
  stop,
  skip,
}
