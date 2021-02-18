import React from 'react'
import styled from 'styled-components'

import Highlight from './highlight'

const Container = styled.div`
`

const Logo = styled.div`
  font-size: 18px;
`

// const Navigation = styled.div`
// `

// const Link = styled.a`
// `

const Header = () => (
  <Container>
    <Logo>
      <Highlight color="#FDFFB6">Aprendiendo</Highlight>
    </Logo>
    {/* <Navigation>
      <Link href="blog">Blog</Link>
      <Link href="resources">Resources</Link>
      <Link href="about">About</Link>
    </Navigation> */}
  </Container>
)

export default Header
