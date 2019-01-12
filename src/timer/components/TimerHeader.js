import React from 'react'
import styled from 'styled-components'

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

const TimerHeader = ({ title }) => (
  <Header>
    <HeaderTitle>{title}</HeaderTitle>
  </Header>
)

export default TimerHeader
