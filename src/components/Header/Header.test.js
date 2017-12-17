import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'

describe('<Header />', () => {
  it('renders without crashing', () => {
    const props = {
      title: 'Pomodoro',
    }

    const header = document.createElement('header')
    ReactDOM.render(<Header {...props} />, header)
  })
})
