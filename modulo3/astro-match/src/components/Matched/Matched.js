import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {ContainerPai,ContainerMatches,ImgMatched,HeaderPerfil,DivBotao,DivMap,DivLista, } from './StyledAll'
import {urlGetMatches, urlClear } from '../urlAll'

function Matched(props) {

  const [matches, setMatches] = useState([])

  useEffect(() => {
    getMatches()
  }, [matches])

  const getMatches = () => {
    axios
      .get(urlGetMatches)
      .then((res) => {
        setMatches(res.data.matches)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const listaMatches = matches.map((person) => {
    return (
      <DivMap>
        <ImgMatched src={person.photo} alt={person.name} />
        <p>{person.name}</p>
      </DivMap>
    )
  })

  const clearMatch = () => {
    axios
      .put(urlClear)
      .then((res) => {
        console.log(res.data.response)
      })
      .catch((err) => {
        alert(err)
      })
  }

  return (
    <ContainerPai>
      <ContainerMatches>
        <HeaderPerfil>
          <p>AstroMatch</p>
          <DivBotao>
            <button onClick={props.paginaHome}> Voltar </button>
            <button onClick={clearMatch}> Limpar </button>
          </DivBotao>
        </HeaderPerfil>
        <DivLista>
          {listaMatches}
        </DivLista>
      </ContainerMatches>
    </ContainerPai>
  )
}

export default Matched 