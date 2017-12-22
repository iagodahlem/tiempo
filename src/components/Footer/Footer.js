import React from 'react'
import PropTypes from 'prop-types'
import Sessions from '../Sessions'
import './Footer.css'

const Footer = ({ sessions }) => (
  <footer className='Footer'>
    <Sessions sessions={sessions} />
  </footer>
)

Footer.propTypes = {
  sessions: PropTypes.array.isRequired,
}

export default Footer
