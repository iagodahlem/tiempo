import React from 'react'
import PropTypes from 'prop-types'
import { mapTruthyClasses } from '../../services/stylesService'
import './Footer.css'

const Footer = ({ sessions }) => (
  <footer className='Footer'>
    {sessions.map(({ id, done }) => (
      <div
        key={id}
        className={`Session ${mapTruthyClasses({
          'isDone': done,
        })}`}
      >
      </div>
    ))}
  </footer>
)

Footer.propTypes = {
  sessions: PropTypes.array.isRequired,
}

export default Footer
