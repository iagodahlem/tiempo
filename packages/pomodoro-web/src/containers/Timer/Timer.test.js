import React from 'react'
import ReactDOM from 'react-dom'
import Timer from './Timer'

console.log('Timer', Timer)

describe('<Timer />', () => {
  it('renders without crashing', () => {
    const props = {
      isLoading: false,
      connectSocket: () => {},
      loadInitialData: () => {},
    }

    const div = document.createElement('div')
    ReactDOM.render(<Timer {...props} />, div)
  })
})
