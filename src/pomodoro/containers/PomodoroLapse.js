import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import format from 'date-fns/format'
import * as fromPomodoro from 'pomodoro/store'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25rem;
  height: 25rem;
  margin-bottom: 5rem;
  border: 2px solid #ffffff;
  border-radius: 50%;
`

const Lapse = styled.time`
  width: 20rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 6.2rem;
  line-height: 1;
  text-align: center;
`

const PomodoroLapse = ({ lapse }) => (
  <Container>
    <Lapse>{format(lapse, 'mm:ss')}</Lapse>
  </Container>
)

PomodoroLapse.propTypes = {
  lapse: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  lapse: fromPomodoro.getLapse(state),
})

export default connect(mapStateToProps)(PomodoroLapse)
