import React from 'react';
import PlaylistsCadastradas from './components/PlaylistsCadastradas';
import CadastroPlaylist from './components/CadastroPlaylist';
import styled from 'styled-components'
import MainApp from './components/MainApp';
import VisualizarPlaylists from './components/VisualizarPlaylists'


const CardTelaMain = styled.div`
    margin: 0;
    padding: 0;
    background-color: #2941AB;
  `

export default class App extends React.Component {
  state = {
    telaAtual: "cadastroPlaylist",
    playlistUrlClicada: ""
}

escolheTela = () => {
  switch (this.state.telaAtual){
    case "cadastroPlaylist":
      return <CadastroPlaylist irParaLista={this.irParaLista}/>        
    case "listaPlaylists":
      return <PlaylistsCadastradas voltarParaLista={this.voltarParaLista} irParaInfoPlaylists = {this.irParaInfoPlaylists}/>
      case "visualizarPlaylists":
        return <VisualizarPlaylists voltarParaLista={this.voltarParaLista}/>
    default:
        return <div>ERROR !</div>      
  }
}

irParaCadastro = () => {
  this.setState({telaAtual: "cadastroPlaylist"})
}

irParaLista = () => {
  this.setState({telaAtual: "listaPlaylists"})
}

irParaInfoPlaylists = () => {
  this.setState({telaAtual: "infoPlaylists"})
}

voltarParaLista = () => {
  this.setState({telaAtual: "listaPlaylists", playlistUrlClicada: ""})
}



  render() {
    return (
     
    <CardTelaMain>      
      {this.escolheTela()}
      <MainApp/> 
    </CardTelaMain>
    )
  }
}