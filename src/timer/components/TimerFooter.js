import React from 'react'
import styled from 'styled-components'
import { Session } from 'timer/domain'

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

const isFilled = (session, entry) => Boolean(entry.start)
  || Boolean(entry.end)
  || Session.getCurrentEntry(session).id === entry.id

const TimerFooter = ({ session }) => (
  <Footer>
    {session.entries.map(entry => (
      <Entry key={entry.id} filled={isFilled(session, entry)} />
    ))}
  </Footer>
)

TimerFooter.propTypes = {
  session: Session.shape.isRequired,
}

export default TimerFooter
