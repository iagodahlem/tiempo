import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

describe('<App />', () => {
  it('renders without crashing', () => {
    const props = {
      name: 'Pomodoro',
      lapse: 0,
      running: false,
      sessions: [],
      setTimer: () => {},
      startTimer: () => {},
      pauseTimer: () => {},
      stopTimer: () => {},
    }

    const div = document.createElement('div')
    ReactDOM.render(<App {...props} />, div)
  })
})
