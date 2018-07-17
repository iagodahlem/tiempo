import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { App } from './components'
import { Timer } from './containers'

const routes = (
  <Router>
    <App>
      <Switch>
        <Route exact path='/' component={Timer} />
      </Switch>
    </App>
  </Router>
)

export default routes
