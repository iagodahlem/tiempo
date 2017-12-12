import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import { Pause, Play, Skip, Stop } from '../../icons'
import './TimerActions.css'

const TimerActions = ({ running, onStart, onPause, onStop }) => (
  <div className='TimerActions'>
    <Button onClick={onStop} disabled={!running} title='Stop' small noBorder>
      <Stop />
    </Button>

    {
      running
        ?
        <Button onClick={onPause} title='Pause'>
          <Pause />
        </Button>
        :
        <Button onClick={onStart} title='Start'>
          <Play />
        </Button>
    }

    <Button onClick={() => {}} title='Skip' disabled small noBorder>
      <Skip />
    </Button>
  </div>
)

TimerActions.propTypes = {
  running: PropTypes.bool.isRequired,
  onStart: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
}

export default TimerActions
