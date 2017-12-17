import React from 'react'
import ReactDOM from 'react-dom'
import Footer from './Footer'

describe('<Footer />', () => {
  it('renders without crashing', () => {
    const props = {
      sesions: [],
    }

    const footer = document.createElement('footer')
    ReactDOM.render(<Footer {...props} />, footer)
  })
})
