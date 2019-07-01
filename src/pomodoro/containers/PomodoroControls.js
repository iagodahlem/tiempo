import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Icon } from '@common/components'
import * as fromPomodoro from 'pomodoro/store'

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => (props.size === 'small' ? '5rem' : '7.5rem')};
  height: ${props => (props.size === 'small' ? '5rem' : '7.5rem')};
  padding: 0;
  outline: none;
  font-family: inherit;
  font-size: inherit;
  text-transform: uppercase;
  color: #fff;
  background-color: transparent;
  border: ${props => (props.design === 'tertiary' ? '.1rem solid transparent' : '.1rem solid #fff')};
  border-radius: 50%;
  opacity: 1;
  transform: scale3d(1, 1, 1);
  transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
  will-change: transform;
  cursor: pointer;

  & + & {
    margin-left: 1.6rem;
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

class PomodoroControl extends React.PureComponent {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
  }

  static defaultProps = {
    width: '22',
    height: '22',
  }

  render() {
    const { icon, width, height, ...props } = this.props

    return (
      <Button {...props}>
        <Icon icon={icon} width={width} height={height} />
      </Button>
    )
  }
}


class PomodoroShortcuts extends React.PureComponent {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyboard)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyboard)
  }

  handleKeyboard = event => {
    const { status, play, pause, stop, skip } = this.props

    switch (event.code) {
      case "Enter":
      case "Space":
        return status === 'RUNNING' ? pause() : play()
      case "ArrowRight":
        return skip()
      case "Escape":
        return stop()
      default:
        return false
    }
  }

  render() {
    return null
  }

}

const PomodoroControls = ({ status, play, pause, stop, skip }) =>
  <Container>
    <PomodoroShortcuts
      status={status}
      play={play}
      pause={pause}
      stop={stop}
      skip={skip}
    />
    <PomodoroControl
      icon='stop'
      size='small'
      design='tertiary'
      onClick={stop}
      disabled={Boolean(status === 'IDLE')}
    />
    {
      status === 'RUNNING' ? (
        <PomodoroControl
          icon='pause'
          onClick={pause}
          width='28'
          height='28'
        />
      ) : (
        <PomodoroControl
          icon='play'
          onClick={play}
          width='38'
          height='38'
        />
      )
    }
    <PomodoroControl
      icon='skip'
      size='small'
      design='tertiary'
      onClick={skip}
    />
  </Container>

PomodoroControls.propTypes = {
  status: PropTypes.string.isRequired,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  skip: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  status: fromPomodoro.getStatus(state),
})

const mapDispatchToProps = {
  play: fromPomodoro.play,
  pause: fromPomodoro.pause,
  stop: fromPomodoro.stop,
  skip: fromPomodoro.skip,
}

export default connect(mapStateToProps, mapDispatchToProps)(PomodoroControls)
