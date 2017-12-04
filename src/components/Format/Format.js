import PropTypes from 'prop-types'
import dateFormat from 'date-fns/format'
import './Format.css'

const Format = ({ children, format }) => (
  `${dateFormat(children, format)}`
)

Format.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  format: PropTypes.string,
}

Format.defaultProps = {
  format: 'mm:ss',
}

export default Format
