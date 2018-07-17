import { combineReducers } from 'redux'
import entryReducer from './entryReducer'
import globalsReducer from './globalsReducer'
import sessionsReducer from './sessionsReducer'
import settingsReducer from './settingsReducer'
import socketReducer from './socketReducer'
import timerReducer from './timerReducer'
import typesReducer from './typesReducer'

const rootReducer = combineReducers({
  entry: entryReducer,
  globals: globalsReducer,
  sessions: sessionsReducer,
  settings: settingsReducer,
  socket: socketReducer,
  timer: timerReducer,
  types: typesReducer,
})

export default rootReducer
