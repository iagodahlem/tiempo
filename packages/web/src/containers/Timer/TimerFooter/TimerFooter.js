import React from 'react'
import PropTypes from 'prop-types'
import { Footer } from '../../../components'
import './TimerFooter.css'

const TimerFooter = ({ sessions }) => (
  <Footer sessions={sessions} />
)

TimerFooter.propTypes = {
  sessions: PropTypes.array.isRequired,
}

export default TimerFooter
