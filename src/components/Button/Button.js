import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({ children, onClick, isDisabled }) => (
  <button className='Button' onClick={onClick} disabled={isDisabled}>
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
}

export default Button
