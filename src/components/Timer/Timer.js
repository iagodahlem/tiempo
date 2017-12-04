import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import Format from '../Format'
import { Pause, Play, Skip, Stop } from '../../icons'
import './Timer.css'

const Timer = ({ lapse, running, onStart, onPause, onStop }) => (
  <div className='Timer'>
    <div className='Timer__lapse'>
      <time className='Timer__text'>
        <Format>{lapse}</Format>
      </time>
    </div>

    <div className="Timer__actions">
      <Button onClick={onStop} disabled={!running} title='Stop' small noBorder>
        <Stop />
      </Button>

      {
        running ?
          <Button onClick={onPause} title='Pause'>
            <Pause />
          </Button> :
          <Button onClick={onStart} title='Start'>
            <Play />
          </Button>
      }

      <Button onClick={() => {}} title='Skip' disabled small noBorder>
        <Skip />
      </Button>
    </div>
  </div>
)

Timer.propTypes = {
  lapse: PropTypes.number.isRequired,
  running: PropTypes.bool.isRequired,
  onStart: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
}

export default Timer
