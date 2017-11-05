import React, { Component } from 'react'
import format from 'date-fns/format'

import './App.css'

class App extends Component {
  handleStartTimer = (event) => {
    const { startTimer } = this.props
    startTimer()
    this.interval = setInterval(this.forceUpdate.bind(this), 1000)
  }

  render() {
    const { start } = this.props
    const duration = 1000 * 60 * 25
    let timer = duration

    if (start) {
      timer = start + duration - Date.now()
    }

    return (
      <div className='App'>
        <h1 className='App__title'>Pomodoro</h1>
        <p>{format(timer, 'mm:ss')}</p>
        <button onClick={this.handleStartTimer}>Start</button>
      </div>
    )
  }
}

export default App
