import React from 'react'
import PropTypes from 'prop-types'
import { mapTruthyClasses } from '../../services/stylesService'
import './Sessions.css'

const Sessions = ({ sessions }) => sessions.map(({ id, done }) => (
  <div
    key={id}
    className={`Session ${mapTruthyClasses({
      'isDone': done,
    })}`}
  />
))

Sessions.propTypes = {
  sessions: PropTypes.array.isRequired,
}

Sessions.defaultProps = {
  sessions: [],
}

export default Sessions
