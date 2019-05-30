import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import * as fromPomodoro from 'pomodoro/store'

const PomodoroTitle = ({ lapse, title }) => (
  <Helmet>
    <title>
      {`
        ${String.fromCodePoint(128336)} 
        ${lapse} 
        ${String.fromCodePoint(128221)} 
        ${title} - Tiempo
      `}
    </title>
  </Helmet>
)

PomodoroTitle.propTypes = {
  lapse: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  lapse: fromPomodoro.getFormattedLapse(state),
  title: fromPomodoro.getTitle(state),
})

export default connect(mapStateToProps)(PomodoroTitle)
