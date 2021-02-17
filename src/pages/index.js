import React from 'react'
import styled from 'styled-components'
import '@fontsource/lora'
import '@fontsource/playfair-display/700.css'

import Header from '../components/header'
import Hero from '../components/hero'
import Footer from '../components/footer'

const Page = styled.div`
  margin: 30px 120px;
  font-family: "Lora";
  color: #333333;

  &>* {
    margin-top: 60px;

    &:first-child {
      margin-top: 0;
    }
  }
`

const Home = () => (
  <Page>
    <Header/>
    <Hero/>
    <Footer/>
  </Page>
)


export default Home
