import React from 'react'
import ReactDOM from 'react-dom'
import Timer from './Timer'

describe('<Timer />', () => {
  const props = {
    lapse: 15000000,
    running: false,
    onStart: () => {},
    onPause: () => {},
    onStop: () => {},
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Timer {...props} />, div)
  })
})
