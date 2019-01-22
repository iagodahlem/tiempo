import React from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5.8rem;
`

const Entry = styled.div`
  width: .8rem;
  height: .8rem;
  margin: .4rem;
  border-radius: 50%;
  background-color: #fff;
  opacity: ${({ filled }) => filled ? 1 : .6};
  transition: opacity .3s ease;
`

const TimerFooter = ({ session }) => (
  <Footer>
    {session.entries.map(entry => (
      <Entry key={entry.id} filled={Boolean(entry.start) || Boolean(entry.end)} />
    ))}
  </Footer>
)

export default TimerFooter
