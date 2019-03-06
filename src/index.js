import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { App } from 'ui/components'
import { sessionReducer, timerReducer } from 'timer/store'
import { TimerContainer } from 'timer/containers'
import { configureStore } from './store'
import { configureContainer } from './container'
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

const store = configureStore({
  rootReducer,
  container,
})

ReactDOM.render((
  <Provider store={store}>
    <App>
      <TimerContainer />
    </App>
  </Provider>
), document.getElementById('root'))

serviceWorker.register()
