import React from 'react'
import styled from 'styled-components'
import { Helmet } from "react-helmet"

import '@fontsource/lora'
import '@fontsource/playfair-display/700.css'

import Header from '../components/header'
import Hero from '../components/hero'
import Footer from '../components/footer'
import { isTablet } from '../lib/responsive'

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

  ${isTablet} {
    margin: 30px;
  }
`

const Home = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Aprendiendo Consulting</title>
      <link rel="canonical" href="https://aprendiendo.us" />
    </Helmet>
    <Page>
      <Header/>
      <Hero/>
      <Footer/>
    </Page>
  </>
)


export default Home
