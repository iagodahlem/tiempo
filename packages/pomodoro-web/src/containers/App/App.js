import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Header, Footer, Timer } from '../../components'
import './App.css'

class App extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    lapse: PropTypes.number.isRequired,
    running: PropTypes.bool.isRequired,
    paused: PropTypes.bool.isRequired,
    sessions: PropTypes.array.isRequired,
    timerSet: PropTypes.func.isRequired,
    timerStart: PropTypes.func.isRequired,
    timerGoOn: PropTypes.func.isRequired,
    timerPause: PropTypes.func.isRequired,
    timerStop: PropTypes.func.isRequired,
    timerSkip: PropTypes.func.isRequired,
    socketConnect: PropTypes.func.isRequired,
    initialData: PropTypes.func.isRequired,
  }

  static defaultProps = {
    name: 'Pomodoro',
  }

  componentDidMount() {
    this.connect()
      .then(() => this.initialData())
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.name !== this.props.name) {
      return true
    }

    if (nextProps.lapse !== this.props.lapse) {
      return true
    }

    if (nextProps.running !== this.props.running) {
      return true
    }

    if (nextProps.sessions !== this.props.sessions) {
      return true
    }

    return false
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

  connect() {
    return this.props.socketConnect()
  }

  initialData() {
    return this.props.initialData()
  }

  set(type) {
    this.props.timerSet(type)
  }

  start() {
    const { timerStart, timerGoOn, paused } = this.props

    if (paused) {
      timerGoOn()
    } else {
      timerStart()
    }
  }

  pause() {
    this.props.timerPause()
  }

  stop() {
    this.props.timerStop()
  }

  skip() {
    this.props.timerSkip()
  }

  render() {
    const { name, lapse, running, paused, sessions } = this.props

    return (
      <main className='App'>
        <Header title={name} />

        <section className='App__container'>
          <Timer
            lapse={lapse}
            running={running}
            paused={paused}
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
