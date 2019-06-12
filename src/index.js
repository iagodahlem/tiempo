import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { pomodoroReducer, timerReducer } from 'pomodoro/store'
import { App } from '@common/components'
import { PomodoroPage } from 'pomodoro/components'
import { configureStore } from './store'
import { configureContainer } from './container'
import * as serviceWorker from './serviceWorker'
import './index.css'

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update')
  whyDidYouUpdate(React)
}

const rootReducer = combineReducers({
  pomodoro: pomodoroReducer,
  timer: timerReducer,
})

const container = configureContainer()

const store = configureStore({
  rootReducer,
  container,
})

ReactDOM.render((
  <Provider store={store}>
    <App>
      <PomodoroPage />
    </App>
  </Provider>
), document.getElementById('root'))

serviceWorker.unregister()
