import React from 'react'
import styled from 'styled-components'

import Highlight from './highlight'
import { isSmallTablet, isTablet } from '../lib/responsive'

const Container = styled.div`
  display: flex;
  align-items: center;
`

const TextContainer = styled.div`
  margin-right: 60px;

  &>*:not(:last-child) {
    margin-bottom: 40px;
  }

  ${isSmallTablet} {
    margin: 0;
  }
`

const Title = styled.div`
  font-family: "Playfair Display";
  font-weight: 700;
  font-size: 42px;
`

const Body = styled.div`
  font-size: 22px;
`

const Action = styled.a`
  display: inline-block;
  font-size: 18px;
  text-decoration: none;
  color: #FFF;
  background-color: #6BA3FF;
  padding: 10px 25px;
  border-radius: 5px;
  transition: border-bottom 0.1s;

  &:hover {
    border-bottom: 3px solid #517dc4;
    transition: border-bottom 0.1s;
  }
`

const Image = styled.img`
  border-radius: 10px;
  width: 460px;
  aspect-ratio: 23 / 27;
  object-fit: cover;
  object-position: 25% 0;

  ${isTablet} {
    width: 360px;
  }

  ${isSmallTablet} {
    display: none;
  }
`

const Hero = () => (
  <Container>
    <TextContainer>
      <Title>
        Let’s Learn and Thrive.
        <br/>
        <Highlight color="#FDFFB6">Together.</Highlight>
      </Title>
      <Body>
        Aprendiendo is all about learning and improving from mutual interactions. We help small and mid-sized companies identify issues, validate hypotheses, build solutions, lead teams, and optimize processes. Learning is our obsession and teaching you is our passion.
      </Body>
      <Action href="https://calendly.com/aprendiendo-consulting">Let’s Talk</Action>
    </TextContainer>
    <Image src="/images/team.jpg"/>
  </Container>
)

export default Hero
