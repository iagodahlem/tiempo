import React, { Component } from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'
import { Button } from '../../components'
import * as timerTypes from '../../constants/timerTypes'
import './App.css'

class App extends Component {
  static propTypes = {
    lapse: PropTypes.number.isRequired,
    running: PropTypes.bool.isRequired,
    startTimer: PropTypes.func.isRequired,
    stopTimer: PropTypes.func.isRequired,
  }

  componentDidMount = () => {
    this.set(timerTypes.pomodoro)
  }

  handleStartTimer = () => {
    this.start()
  }

  handlePauseTimer = () => {
    this.pause()
  }

  handleStopTimer = () => {
    this.stop()
  }

  set = (type) => {
    this.props.setTimer(type)
  }

  start = () => {
    this.props.startTimer()
  }

  pause = () => {
    this.props.pauseTimer()
  }

  stop = () => {
    this.props.stopTimer()
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
    const { lapse, running } = this.props
    const actionButton = running ? this.renderStopButton() : this.renderStartButton()

    return (
      <div className='App'>
        <h1 className='App__title'>{format(lapse, 'mm:ss:SSS')}</h1>

        {actionButton}

        <Button onClick={this.handlePauseTimer} isDisabled={!running}>
          Pause
        </Button>
      </div>
    )
  }
}

export default App
