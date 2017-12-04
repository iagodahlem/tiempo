import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const mapTruthyClasses = (classes) => Object.entries(classes)
  .filter(([, value]) => value)
  .map(([key]) => key)
  .join(' ')

const Button = ({ children, onClick, disabled, title, small, noBorder }) => (
  <button
    className={`Button ${mapTruthyClasses({
      'Button--small': small,
      'Button--noBorder': noBorder,
    })}`}
    onClick={onClick}
    disabled={disabled}
    title={title}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  small: PropTypes.bool,
  noBorder: PropTypes.bool,
}

Button.defaultProps = {
  disabled: false,
  small: false,
  noBorder: false,
}

export default Button
