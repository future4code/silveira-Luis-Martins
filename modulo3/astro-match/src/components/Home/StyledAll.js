import styled from 'styled-components'

export const ContainerPai = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
height: 100vh;
`

export const ContainerHome = styled.div`
border: 5px solid black;
`

export const HeaderPerfil = styled.div`
display: flex;
flex-direction: row-gap;
justify-content: space-around;
background-color: white;
`

export const DivBotao = styled.div`
display:flex;
justify-content: center;
align-items: center;
    button {
      border: 0px;
      color: white;
      cursor: pointer;
      background-color: black;
      border-radius: 10px;
      height: 30px;
      transition-duration: 0.4s;
        :hover {
          background-color: black;
          width: 120px;
          cursor: pointer;
          box-shadow: solid black 1 px;
        }
    }
`

export const ContainerPerfil = styled.div`
background-color: whitesmoke;
`

export const Img = styled.img`
width: 30vw;
`
export const ContainerBotoes = styled.div`
display: flex;
flex-direction:row;
justify-content: space-around;
padding: 10px;
background-color: white;
    button {
      border: none;
      cursor: pointer;
      background-color: black;
      color: white;
      border-radius: 10px;
      height: 30px;
        :hover {
          background-color: white;
          color: black;
          width: 50px;
          cursor: pointer;
          box-shadow: solid black 1 px;
        }
    }
`

export const ImagemPerfil = styled.div`
display: flex;
justify-content:center;
align-items:center;
  img{
  max-height:50vh;
  width: 20vw;
}
`
export const Informacoes = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
 p{
  text-align:center;
  width: 10vw;
  
 }
`