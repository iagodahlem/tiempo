import React from 'react'
import ReactDOM from 'react-dom'
import Sessions from './Sessions'

describe('<Sessions />', () => {
  it('renders without crashing', () => {
    const sessions = document.createElement('sessions')
    ReactDOM.render(<Sessions />, sessions)
  })
})
