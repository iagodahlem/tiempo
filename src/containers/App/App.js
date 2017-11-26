import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as timerTypes from '../../constants/timerTypes'
import { Button, Header, Timer } from '../../components'
import './App.css'

class App extends Component {
  static propTypes = {
    lapse: PropTypes.number.isRequired,
    running: PropTypes.bool.isRequired,
    setTimer: PropTypes.func.isRequired,
    startTimer: PropTypes.func.isRequired,
    pauseTimer: PropTypes.func.isRequired,
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
      <main className='App'>
        <Header />

        <section className='App__container'>
          <Timer lapse={lapse} />

          {actionButton}

          <Button onClick={this.handlePauseTimer} isDisabled={!running}>
            Pause
          </Button>
        </section>
      </main>
    )
  }
}

export default App
