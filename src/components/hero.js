import React from 'react'
import styled from 'styled-components'

import Highlight from './highlight'

const Container = styled.div`
  display: flex;
  align-items: center;
`

const TextContainer = styled.div`
  margin-right: 60px;

  &>* {
    margin-bottom: 40px;

    &::last-child {
      margin-bottom: 0;
    }
  }
`

const Title = styled.div`
  font-family: "Playfair Display";
  font-weight: 700;
  font-size: 48px;
`

const Body = styled.div`
  font-size: 24px;
`

const Action = styled.a`
  font-size: 18px;
  text-decoration: none;
  color: #FFF;
  background-color: #6BA3FF;
  padding: 10px 25px;
  border-radius: 5px;
  transition: border-bottom 0.2s;

  &:hover {
    border-bottom: 3px solid #517dc4;
    transition: border-bottom 0.2s;
  }
`

const Image = styled.img`
  border-radius: 10px;
  width: 460px;
  height: 530px;
  object-fit: cover;
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
    <Image src="/images/hero.jpg"/>
  </Container>
)

export default Hero
