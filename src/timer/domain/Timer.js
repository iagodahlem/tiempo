import PropTypes from 'prop-types'

export const create = ({ interval = null, title = '', lapse = 0 } = {}) => ({
  interval,
  title,
  lapse,
})

export const tick = (timer, runned, onInterval) => {
  const decrease = r => r - Date.now()
  const lapse = decrease(runned)
  const interval = setInterval(() => onInterval(decrease(runned)), 1000)

  return {
    ...timer,
    interval,
    lapse,
  }
}

export const shape = PropTypes.shape({
  interval: PropTypes.number,
  title: PropTypes.string.isRequired,
  lapse: PropTypes.number.isRequired,
})
