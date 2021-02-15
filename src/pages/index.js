import React from 'react'
import styled from 'styled-components'
import '@fontsource/playfair-display/700.css'

const Hi = styled.div`
  text-align: center;
  font-family: "Playfair Display";
  font-size: 2em;
  font-weight: 700;
`

export default function Home() {
  return <Hi>Let’s Learn and Thrive. Together.</Hi>
}
