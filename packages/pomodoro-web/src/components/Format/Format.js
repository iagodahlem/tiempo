import PropTypes from 'prop-types'
import { format as formatDate } from '../../services/dateService'

const Format = ({ format, children }) => (
  `${formatDate(children, format)}`
)

Format.propTypes = {
  format: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
}

Format.defaultProps = {
  format: 'mm:ss',
}

export default Format
