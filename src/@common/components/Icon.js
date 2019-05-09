import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const icons = {
  pause: 'M128 128h320v768h-320zM576 128h320v768h-320z',
  play: 'M192 128l640 384-640 384z',
  skip: 'M768 128v768h-128v-352l-320 320v-704l320 320v-352z',
  stop: 'M128 128h768v768h-768z',
}

const StyledIcon = styled.svg`
  fill: #fff;
`

class Icon extends PureComponent {
  static propTypes = {
    icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
  }

  render() {
    const { icon } = this.props

    return (
      <StyledIcon as='svg' viewBox='0 0 1024 1024' {...this.props}>
        <path d={icons[icon]} />
      </StyledIcon>
    )
  }
}

Icon.defaultProps = {
  width: '22',
  height: '22',
}

export default Icon
