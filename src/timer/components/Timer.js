import React, { PureComponent as Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TimerHeader from './TimerHeader'
import TimerLapse from './TimerLapse'
import TimerControls from './TimerControls'
import TimerFooter from './TimerFooter'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`

const Clock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
`

class Timer extends Component {
  static propTypes = {
    timer: PropTypes.object.isRequired,
    session: PropTypes.object.isRequired,
    initTimer: PropTypes.func.isRequired,
    startTimer: PropTypes.func.isRequired,
    stopTimer: PropTypes.func.isRequired,
    pauseTimer: PropTypes.func.isRequired,
    skipTimer: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.initTimer()
  }

  render() {
    const {
      timer,
      session,
      startTimer,
      stopTimer,
      pauseTimer,
      skipTimer,
    } = this.props

    return (
      <Container>
        <TimerHeader title={timer.title} />

        <Clock>
          <TimerLapse>
            {timer.lapse}
          </TimerLapse>
          <TimerControls
            status={session.status}
            start={startTimer}
            pause={pauseTimer}
            skip={skipTimer}
            stop={stopTimer}
          />
        </Clock>

        <TimerFooter session={session} />
      </Container>
    )
  }
}

export default Timer
