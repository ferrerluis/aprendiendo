import styled from 'styled-components'

const Highlight = styled.span`
  transition: background 1s;
  background: -webkit-linear-gradient(rgba(255,255,0,0) 50%, ${props => props.color} 50%);
  background: -o-linear-gradient(rgba(255,255,0,0) 50%, ${props => props.color} 50%);
  background: -moz-linear-gradient(rgba(255,255,0,0) 50%, ${props => props.color} 50%);
  background: linear-gradient(rgba(255,255,0,0) 50%, ${props => props.color} 50%);

  &:hover {
    transition: background 1s;
    background: -webkit-linear-gradient(rgba(255,255,0,0) 10%, ${props => props.color} 50%, rgba(255,255,0,0) 40%);
    background: -o-linear-gradient(rgba(255,255,0,0) 10%, ${props => props.color} 50%, rgba(255,255,0,0) 40%);
    background: -moz-linear-gradient(rgba(255,255,0,0) 10%, ${props => props.color} 50%, rgba(255,255,0,0) 40%);
    background: linear-gradient(rgba(255,255,0,0) 10%, ${props => props.color} 50%, rgba(255,255,0,0) 40%);
  }
`

export default Highlight
