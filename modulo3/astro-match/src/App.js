import './App.css';
import React, {useState} from 'react';
import Home from './components/Home/Home';
import Matched from './components/Matched/Matched';


function App() {

  const [pagina, setPagina] = useState("home")


  const renderizaPagina = () => {

    switch (pagina) {
      case 'home':
        return <Home paginaMatched={paginaMatched} />
      case 'matched':
        return <Matched paginaHome={paginaHome} />
      default: 
        return <Home/>
   }
  }

  const paginaMatched = () => {
    setPagina("matched")
  }

  const paginaHome = () => {
    setPagina("home")
  }

  return (
    <div>
      {renderizaPagina()}
    </div>
  );
}

export default App;