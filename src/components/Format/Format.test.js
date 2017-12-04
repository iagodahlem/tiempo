import React from 'react'
import ReactDOM from 'react-dom'
import Format from './Format'

describe('<Format />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Format>1500000</Format>, div)
  })
})
