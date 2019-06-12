import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as fromPomodoro from 'pomodoro/store'
import {
  PomodoroHeader,
  PomodoroLapse,
  PomodoroControls,
  PomodoroFooter,
  PomodoroTitle,
} from 'pomodoro/containers'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`

const Clock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
`

class PomodoroPage extends PureComponent {
  static propTypes = {
    initPomodoro: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { initPomodoro } = this.props

    initPomodoro()
  }

  render() {
    return (
      <Section>
        <PomodoroTitle />
        <PomodoroHeader />

        <Clock>
          <PomodoroLapse />
          <PomodoroControls />
        </Clock>

        <PomodoroFooter />
      </Section>
    )
  }
}

const mapDispatchToProps = {
  initPomodoro: fromPomodoro.init,
}

export default connect(
  null,
  mapDispatchToProps
)(PomodoroPage)
