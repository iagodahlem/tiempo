import React from 'react'
import ReactDOM from 'react-dom'
import TimerHead from './TimerHead'

describe('<TimerHead />', () => {
  it('renders without crashing', () => {
    const props = {
      name: 'Pomodoro',
    }

    const div = document.createElement('div')
    ReactDOM.render(<TimerHead {...props} />, div)
  })
})
