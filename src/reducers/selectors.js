import * as fromEntry from './entryReducer'
import * as fromSessions from './sessionsReducer'
import * as fromTimer from './timerReducer'
import * as fromTypes from './typesReducer'

export const getEntry = (state) => ({ ...state.entry, type: getEntryType(state) })
export const getEntryStart = (state) => fromEntry.getStart(state.entry)
export const getEntryName = (state) => getEntryType(state).name
export const getEntryDuration = (state) => getEntryType(state).duration
export const getEntryType = (state) => getType(state, state.entry.type)

export const getSession = (state, id) => fromSessions.getSession(state.sessions, id)
export const getCurrentSession = (state) => fromSessions.getCurrentSession(state.sessions)
export const getSessions = (state) => fromSessions.getSessions(state.sessions)

export const getTimer = (state) => ({ ...state.timer })
export const getTimerLapse = (state) => fromTimer.getLapse(state.timer)
export const getTimerRunning = (state) => fromTimer.getRunning(state.timer)
export const getTimerInterval = (state) => fromTimer.getInterval(state.timer)

export const getType = (state, id) => fromTypes.getType(state.types, id)
export const getTypes = (state) => fromTypes.getTypes(state.types)
