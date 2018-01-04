import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../components'
import { Pause, Play, Skip, Stop } from '../../icons'
import './TimerActions.css'

class TimerActions extends Component {
  static propTypes = {
    running: PropTypes.bool.isRequired,
    paused: PropTypes.bool.isRequired,
    timerStart: PropTypes.func.isRequired,
    timerGoOn: PropTypes.func.isRequired,
    timerPause: PropTypes.func.isRequired,
    timerStop: PropTypes.func.isRequired,
    timerSkip: PropTypes.func.isRequired,
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.running !== this.props.running) {
      return true
    }

    if (nextProps.paused !== this.props.paused) {
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
    const { running, paused } = this.props

    return (
      <div className='TimerActions'>
        <Button onClick={this.handleStopTimer} disabled={!(running || paused)} small noBorder>
          <Stop />
        </Button>

        {
          running
            ?
            <Button onClick={this.handlePauseTimer}>
              <Pause />
            </Button>
            :
            <Button onClick={this.handleStartTimer}>
              <Play />
            </Button>
        }

        <Button onClick={this.handleSkipTimer} small noBorder>
          <Skip />
        </Button>
      </div>
    )
  }
}

export default TimerActions
