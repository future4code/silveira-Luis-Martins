import React from 'react'
import styled from 'styled-components'

const Main = styled.footer`
    background-color: #000000;
    justify-content: center;
    height: 4vh;
    display: flex;
    position: relative;
    bottom: 0px ;
    width: 100% ;
`

const P = styled.p`
  color: #00CED1 ;
  font-weight: bold;
  margin-top: 10px;
`


const Footer = () => {
  return (
    <Main>
        <P> © 2022 Labeddit - All Rights Reserved.</P>
    </Main>
  )
}

export default Footer