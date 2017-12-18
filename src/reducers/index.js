import { combineReducers } from 'redux'
import entry from './entryReducer'
import timer from './timerReducer'
import types from './typesReducer'

const rootReducer = combineReducers({
  entry,
  timer,
  types,
})

export default rootReducer
