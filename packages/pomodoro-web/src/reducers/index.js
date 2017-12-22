import { combineReducers } from 'redux'
import entry from './entryReducer'
import sessions from './sessionsReducer'
import timer from './timerReducer'
import types from './typesReducer'

const rootReducer = combineReducers({
  entry,
  sessions,
  timer,
  types,
})

export default rootReducer
