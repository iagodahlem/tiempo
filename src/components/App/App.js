import React, { Component } from 'react'
import format from 'date-fns/format'

import './App.css'

const calculateTimer = (start) => {
  // const duration = 1000 * 60 * 25
  const duration = 1000 * 5
  let timer = duration

  if (start) {
    timer = start + duration - Date.now()
  }
  return timer
}

class App extends Component {
  handleStartTimer = (event) => {
    this.props.startTimer()
    this.interval = setInterval(this.updateTimer, 1000)
  }

  handleStopTimer = (event) => {
    this.doStopTimer()
  }

  doStopTimer() {
    this.props.stopTimer()
    clearInterval(this.interval)
  }

  updateTimer = () => {
    const timer = calculateTimer(this.props.start)
    if (timer > 0) {
      this.forceUpdate()
    } else {
      this.doStopTimer()
    }
  }

  renderStartButton() {
    return <button onClick={this.handleStartTimer}>Start</button>
  }

  renderStopButton() {
    return <button onClick={this.handleStopTimer}>Stop</button>
  }

  render() {
    const { start } = this.props
    const timer = calculateTimer(start)
    const actionButton = start ? this.renderStopButton() : this.renderStartButton()

    return (
      <div className='App'>
        <h1 className='App__title'>Pomodoro</h1>
        <p>{format(timer, 'mm:ss')}</p>
        {actionButton}
      </div>
    )
  }
}

export default App
