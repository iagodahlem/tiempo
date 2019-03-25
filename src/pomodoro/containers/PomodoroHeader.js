import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import * as fromPomodoro from 'pomodoro/store'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5.8rem;
`

const HeaderTitle = styled.h1`
  font-size: 1.8rem;
`

const PomodoroHeader = ({ title }) => (
  <Header>
    <HeaderTitle>{title}</HeaderTitle>
  </Header>
)

PomodoroHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  title: fromPomodoro.getTitle(state),
})

export default connect(mapStateToProps)(PomodoroHeader)
