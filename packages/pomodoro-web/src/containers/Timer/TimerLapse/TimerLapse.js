import React from 'react'
import PropTypes from 'prop-types'
import { Format } from '../../../components'
import './TimerLapse.css'

const TimerLapse = ({ lapse }) => (
  <div className='TimerLapse'>
    <time className='TimerLapse__text'>
      <Format>{lapse}</Format>
    </time>
  </div>
)

TimerLapse.propTypes = {
  lapse: PropTypes.number.isRequired,
}

export default TimerLapse
