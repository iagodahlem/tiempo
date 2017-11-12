import { combineReducers } from 'redux'
import timer from './timerReducer'

const rootReducer = combineReducers({
  timer,
})

export default rootReducer
