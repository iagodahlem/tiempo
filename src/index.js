import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers } from 'redux'
import { sessionReducer, timerReducer } from 'timer/store'
import createStore from './createStore'
import { configureContainer } from './container'
import Root from './Root'
import * as serviceWorker from './serviceWorker'
import './index.css'

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update')
  whyDidYouUpdate(React)
}

const rootReducer = combineReducers({
  session: sessionReducer,
  timer: timerReducer,
})

const container = configureContainer()

const store = createStore({
  rootReducer,
  container,
})

ReactDOM.render(<Root store={store} />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
