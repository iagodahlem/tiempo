import React from 'react'
import PropTypes from 'prop-types'
import { Header } from '../../../components'
import './TimerHeader.css'

const TimerHeader = ({ name }) => (
  <Header title={name} />
)

TimerHeader.propTypes = {
  name: PropTypes.string.isRequired,
}

TimerHeader.defaultProps = {
  name: 'Pomodoro',
}

export default TimerHeader
