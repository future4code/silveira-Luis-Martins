import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

 class App extends React.Component {
    state = {
      usuario : [
        {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
  
      },
      {
        nomeUsuario:'Luis',
        fotoUsuario:'https://picsum.photos/50/70',
        fotoPost:'https://picsum.photos/200/250'
      },
      {
        nomeUsuario:'Gustavo',
        fotoUsuario:'https://picsum.photos/50/60',
        fotoPost:'https://picsum.photos/200/350'
      }
    ],
    }
    render (){
      const componentesUsuario = this.state.usuario.map((usuario) =>{
    })
    return (
      <MainContainer>
        {
        }
      </MainContainer>
    
  )

  
  }
}
export default App