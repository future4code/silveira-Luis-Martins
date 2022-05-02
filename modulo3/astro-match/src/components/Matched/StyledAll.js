import styled from 'styled-components'

export const ContainerPai = styled.div`
height: 100vh;
display: flex;
align-items:center;
justify-content:center;
`

export const ContainerMatches = styled.div`
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
border: 5px solid black;
width: 20vw;
`

export const ImgMatched = styled.img`
width:5vw;
`

export const HeaderPerfil = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-content: space-between;
align-items: space-between;
`

export const DivBotao = styled.div`
display:flex;
justify-content: center;
align-items: center;
    button {
      border: 0px;
      background-color: black;
      color: white;
      cursor: pointer;
      border-radius: 10px;
      height: 30px;
      transition-duration: 0.4s;
        :hover {
          background-color: white;
          color: black;
          width: 120px;
        }
    }
`

export const DivMap = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
padding: 10px;
`

export const DivLista = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
`