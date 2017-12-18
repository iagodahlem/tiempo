import { combineReducers } from 'redux'
import timer from './timerReducer'
import types from './typesReducer'

const rootReducer = combineReducers({
  timer,
  types,
})

export default rootReducer
