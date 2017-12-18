import React from 'react'
import PropTypes from 'prop-types'
import TimerActions from '../TimerActions'
import TimerLapse from '../TimerLapse'
import './Timer.css'

const Timer = ({ lapse, running, onStart, onPause, onStop, onSkip }) => (
  <div className='Timer'>
    <TimerLapse
      lapse={lapse}
    />
    <TimerActions
      running={running}
      onStart={onStart}
      onPause={onPause}
      onStop={onStop}
      onSkip={onSkip}
    />
  </div>
)

Timer.propTypes = {
  lapse: PropTypes.number.isRequired,
  running: PropTypes.bool.isRequired,
  onStart: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  onSkip: PropTypes.func.isRequired,
}

export default Timer
