import React from 'react'
import styled from 'styled-components'
import format from 'date-fns/format'

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

const TimerLapse = ({ children }) => (
  <Container>
    <Lapse>{format(children, 'mm:ss')}</Lapse>
  </Container>
)

export default TimerLapse
