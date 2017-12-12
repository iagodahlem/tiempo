import React from 'react'
import ReactDOM from 'react-dom'
import TimerLapse from './TimerLapse'

describe('<TimerLapse />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TimerLapse lapse={1500000} />, div)
  })
})
