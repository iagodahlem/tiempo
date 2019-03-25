import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Pomodoro } from 'pomodoro/domain'
import * as fromPomodoro from 'pomodoro/store'

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5.8rem;
`

const Entry = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  margin: 0.4rem;
  border-radius: 50%;
  background-color: #fff;
  opacity: ${({ filled }) => (filled ? 1 : 0.6)};
  transition: opacity 0.3s ease;
`

const isFilled = (pomodoro, entry) => Boolean(entry.start)
  || Boolean(entry.end)
  || Pomodoro.getCurrentEntry(pomodoro).id === entry.id

const PomodoroFooter = ({ pomodoro }) => (
  <Footer>
    {pomodoro.entries.map(entry => (
      <Entry key={entry.id} filled={isFilled(pomodoro, entry)} />
    ))}
  </Footer>
)

PomodoroFooter.propTypes = {
  pomodoro: Pomodoro.shape.isRequired,
}

const mapStateToProps = state => ({
  pomodoro: fromPomodoro.getPomodoro(state),
})

export default connect(mapStateToProps)(PomodoroFooter)
