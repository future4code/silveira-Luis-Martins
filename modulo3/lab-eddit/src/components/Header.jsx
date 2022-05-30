import React from 'react'
import styled from 'styled-components'

const Main = styled.header`
    background-color: #000000;
    justify-content: center;
    height: 6vh;
    display: flex;
`

const P = styled.p`
  color: #00CED1 ;
  font-size: 25px;
  margin-top: 10px;
  font-weight: bold;
`


const Header = () => {
  return (
    <Main>
        <P>Labeddit</P>
    </Main>
  )
}

export default Header