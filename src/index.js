import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers } from 'redux'
import createStore from './createStore'
import container from './container'
import Root from './Root'
import * as serviceWorker from './serviceWorker'
import './index.css'

import { sessionReducer, timerReducer } from 'timer/store'

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update')
  whyDidYouUpdate(React)
}

const rootReducer = combineReducers({
  session: sessionReducer,
  timer: timerReducer,
})

const store = createStore({
  rootReducer,
  container,
})

ReactDOM.render(<Root store={store} />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
