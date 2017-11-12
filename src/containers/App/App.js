import React, { Component } from 'react'
import format from 'date-fns/format'
import { Button } from '../../components'
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
    return (
      <Button onClick={this.handleStartTimer}>
        Start
      </Button>
    )
  }

  renderStopButton() {
    return (
      <Button onClick={this.handleStopTimer}>
        Stop
      </Button>
    )
  }

  render() {
    const { start } = this.props
    const timer = calculateTimer(start)
    const actionButton = start ? this.renderStopButton() : this.renderStartButton()

    return (
      <div className='App'>
        <h1 className='App__title'>{format(timer, 'mm:ss')}</h1>
        {actionButton}
      </div>
    )
  }
}

export default App
