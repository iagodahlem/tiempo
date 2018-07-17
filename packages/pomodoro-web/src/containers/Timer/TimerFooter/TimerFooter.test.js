import React from 'react'
import ReactDOM from 'react-dom'
import TimerFooter from './TimerFooter'

describe('<TimerFooter />', () => {
  it('renders without crashing', () => {
    const props = {
      sessions: [],
    }

    const div = document.createElement('div')
    ReactDOM.render(<TimerFooter {...props} />, div)
  })
})
