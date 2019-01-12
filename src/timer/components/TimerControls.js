import React from 'react'
import styled from 'styled-components'
import { Icon } from 'ui/components'

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
  width: ${props => props.size === 'small' ? '5rem' : '7.5rem'};
  height: ${props => props.size === 'small' ? '5rem' : '7.5rem'};
  padding: 0;
  outline: none;
  font-family: inherit;
  font-size: inherit;
  text-transform: uppercase;
  color: #fff;
  background-color: transparent;
  border: ${props => props.design === 'tertiary' ? '.1rem solid transparent' : '.1rem solid #fff'};
  border-radius: 50%;
  opacity: 1;
  transform: scale3d(1, 1, 1);
  transition: opacity .15s ease-in-out, transform .15s ease-in-out;
  will-change: transform;
  cursor: pointer;

  & + & {
    margin-left: 1.6rem;
  }

  &:hover {
    opacity: .8;
  }

  &:active {
    opacity: .8;
  }

  &:disabled {
    opacity: .6;
    cursor: not-allowed;
  }
`

const TimerControls = ({ status, start, pause, stop }) => (
  <Container>
    <Button
      size='small'
      design='tertiary'
      onClick={() => stop()}
      disabled={status === 'IDLE'}
    >
      <Icon icon='stop' />
    </Button>

    {status === 'RUNNING' ? (
      <Button onClick={() => pause()}>
        <Icon icon='pause' width='28' height='28' />
      </Button>
    ):(
      <Button onClick={() => start()}>
        <Icon icon='play' width='38' height='38' />
      </Button>
    )}

    <Button size='small' design='tertiary'>
      <Icon icon='skip' />
    </Button>
  </Container>
)

export default TimerControls
