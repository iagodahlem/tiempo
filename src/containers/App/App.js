import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as timerTypes from '../../constants/timerTypes'
import { Header, Timer } from '../../components'
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

  render() {
    const { lapse, running } = this.props

    return (
      <main className='App'>
        <Header />

        <section className='App__container'>
          <Timer
            lapse={lapse}
            running={running}
            onStart={this.handleStartTimer}
            onPause={this.handlePauseTimer}
            onStop={this.handleStopTimer}
          />
        </section>

        <footer className='Footer'>

        </footer>
      </main>
    )
  }
}

export default App
