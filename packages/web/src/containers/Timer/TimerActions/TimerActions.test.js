import React from 'react'
import ReactDOM from 'react-dom'
import TimerActions from './TimerActions'

describe('<TimerActions />', () => {
  const props = {
    running: false,
    paused: false,
    timerStart: () => {},
    timerGoOn: () => {},
    timerPause: () => {},
    timerStop: () => {},
    timerSkip: () => {},
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TimerActions {...props} />, div)
  })
})
