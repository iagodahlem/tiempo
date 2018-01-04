import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker'
import { App } from './components'
import './index.css'

const store = configureStore()

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
registerServiceWorker()
