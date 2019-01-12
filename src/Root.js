import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import { TimerContainer } from 'timer/containers'

const App = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #000;
`

const Root = ({ store }) => (
  <Provider store={store}>
    <App>
      <TimerContainer />
    </App>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
