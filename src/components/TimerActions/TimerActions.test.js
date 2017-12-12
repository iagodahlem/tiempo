import React from 'react'
import ReactDOM from 'react-dom'
import TimerActions from './TimerActions'

describe('<TimerActions />', () => {
  const props = {
    running: false,
    onStart: () => {},
    onPause: () => {},
    onStop: () => {},
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TimerActions {...props} />, div)
  })
})
