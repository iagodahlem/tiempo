import * as types from '../constants/actionTypes'
import * as fromTimer from '../reducers/timerReducer'

export const set = () => (dispatch, getState) => {
  const setTimer = (duration, timerType) => ({
    type: types.TIMER_SET,
    payload: {
      duration,
      timerType,
    },
  })

  const { type } = fromTimer.getCurrentSession(getState())
  const { duration } = fromTimer.getType(getState(), type)

  dispatch(setTimer(duration, type))
}

export const start = () => (dispatch, getState) => {
  const startTimer = (start, interval) => ({
    type: types.TIMER_START,
    payload: {
      start,
      interval,
    },
  })

  const lapse = fromTimer.getLapse(getState())
  const currentStart = fromTimer.getStart(getState())
  const duration = fromTimer.getDuration(getState())

  const start = currentStart ? Date.now() - (duration - lapse) : Date.now()
  const interval = setInterval(() => dispatch(tick()), 1000)

  dispatch(startTimer(start, interval))
}

export const tick = () => (dispatch, getState) => {
  const tickTimer = (lapse) => ({ type: types.TIMER_TICK, payload: { lapse }})

  const start = fromTimer.getStart(getState())
  const duration = fromTimer.getDuration(getState())

  const lapse = start + duration - Date.now()

  if (lapse <= 0) {
    dispatch(stop())
    dispatch(skip())
  } else {
    dispatch(tickTimer(lapse))
  }
}

export const pause = () => (dispatch, getState) => {
  const interval = fromTimer.getInterval(getState())

  clearInterval(interval)

  dispatch({
    type: types.TIMER_PAUSE,
  })
}

export const stop = () => (dispatch, getState) => {
  const interval = fromTimer.getInterval(getState())
  const duration = fromTimer.getDuration(getState())

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

  const sessions = fromTimer.getSessions(getState())
  const currentSession = fromTimer.getCurrentSession(getState())
  const isLastSession = sessions.indexOf(currentSession) === sessions.length - 1

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
