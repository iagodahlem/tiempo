import * as fromEntry from '../reducers/entryReducer'
import * as fromSessions from '../reducers/sessionsReducer'
import * as fromSocket from '../reducers/socketReducer'
import * as fromTimer from '../reducers/timerReducer'
import * as fromTypes from '../reducers/typesReducer'

export const getEntry = (state) => ({ ...state.entry })
export const getEntryStart = (state) => fromEntry.getStart(state.entry)
export const getEntryName = (state) => getEntryType(state).name
export const getEntryDuration = (state) => getEntryType(state).duration
export const getEntryType = (state) => getType(state, state.entry.typeId)

export const getSession = (state, id) => fromSessions.getSession(state.sessions, id)
export const getCurrentSession = (state) => fromSessions.getCurrentSession(state.sessions)
export const getSessions = (state) => fromSessions.getSessions(state.sessions)

export const getSocket = (state) => fromSocket.getSocket(state.socket)

export const getTimer = (state) => ({ ...state.timer })
export const getTimerLapse = (state) => fromTimer.getLapse(state.timer)
export const getTimerRunning = (state) => fromTimer.getRunning(state.timer)
export const getTimerPaused = (state) => fromTimer.getPaused(state.timer)
export const getTimerInterval = (state) => fromTimer.getInterval(state.timer)

export const getType = (state, id) => fromTypes.getType(state.types, id)
export const getTypeByLabel = (state, label) => fromTypes.getTypeByLabel(state.types, label)
export const getTypes = (state) => fromTypes.getTypes(state.types)
