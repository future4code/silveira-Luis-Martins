import React, {useEffect, useState} from "react";
import axios from "axios";
import PokeCard from './components/PokeCard/PokeCard'
import './style.css'

function App () {
//STATE
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState ("");

//FUNCTION DO STATE POKELIST
  useEffect (() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setPokeList(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
    }, [])

//FUNCTION DO STATE POKENAME
const changePokeName = (event) => {
  setPokeName( event.target.value );
};


// class App extends React.Component {
//   state = {
//     // lista de pokemons que está sendo guardada no estado
//     pokeList: [],
//     // nome do pokemon guardado no estado, assim que o usuário
//     // escolhe um nome no dropdown
//     pokeName: ""
//   };

//   // método que roda após a montagem do componente
//   componentDidMount = () => {
//     // função axios que está batendo na API e buscando 151 pokemons
//     axios
//       .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
//       .then(response => {
//         // função que está setando no estado os 151 pokemons
//         this.setState({ pokeList: response.data.results });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

    return (
      <div className="App">
        {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {/* renderizando a lista de pokemons como opções do select */}
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
    );
  }


export default App;
