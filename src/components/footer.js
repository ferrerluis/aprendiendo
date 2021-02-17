import React from 'react'
import styled from 'styled-components'

import Highlight from './highlight'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const Social = styled.div`
  font-size: 14px;

  ${Highlight} {
    text-decoration: none;
    color: #333333;
    margin-right: 20px;
  }
`

const Copyright = styled.div`
  font-size: 12px;
`

const Footer = () => (
  <Container>
    <Social>
      <Highlight as="a" href="https://www.linkedin.com/in/luisferrerl" color="#A0C4FF">LinkedIn</Highlight>
      <Highlight as="a" href="https://twitter.com/aprendiendous" color="#9BF6FF">Twitter</Highlight>
    </Social>
    <Copyright>©2020 All Rights Reserved.</Copyright>
  </Container>
)

export default Footer
