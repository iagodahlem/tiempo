import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'
import './Timer.css'

const Format = ({ date, type = 'mm:ss' }) => (
  `${format(date, type)}`
)

const Timer = ({ lapse }) => (
  <div className='Timer'>
    <time className='Timer__lapse'>
      <Format date={lapse} />
    </time>
  </div>
)

Timer.propTypes = {
  lapse: PropTypes.number.isRequired,
}

export default Timer
