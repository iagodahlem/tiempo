import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Header, Footer, Timer } from '../../components'
import './App.css'

class App extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    lapse: PropTypes.number.isRequired,
    running: PropTypes.bool.isRequired,
    sessions: PropTypes.array.isRequired,
    setTimer: PropTypes.func.isRequired,
    startTimer: PropTypes.func.isRequired,
    pauseTimer: PropTypes.func.isRequired,
    stopTimer: PropTypes.func.isRequired,
    skipTimer: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.set()
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

  handleSkipTimer = () => {
    this.skip()
  }

  set(type) {
    this.props.setTimer(type)
  }

  start() {
    this.props.startTimer()
  }

  pause() {
    this.props.pauseTimer()
  }

  stop() {
    this.props.stopTimer()
  }

  skip() {
    this.props.skipTimer()
  }

  render() {
    const { name, lapse, running, sessions } = this.props

    return (
      <main className='App'>
        <Header title={name} />

        <section className='App__container'>
          <Timer
            lapse={lapse}
            running={running}
            onStart={this.handleStartTimer}
            onPause={this.handlePauseTimer}
            onStop={this.handleStopTimer}
            onSkip={this.handleSkipTimer}
          />
        </section>

        <Footer sessions={sessions} />
      </main>
    )
  }
}

export default App
