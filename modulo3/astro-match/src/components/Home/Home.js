import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {ContainerPai, ContainerHome, HeaderPerfil,DivBotao,ContainerPerfil,ImagemPerfil,
  Img,Informacoes,ContainerBotoes  } from './StyledAll'
import {url, urlChoose } from '../urlAll'


function Home(props) {

  const [profile, setProfile] = useState({})

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = () => {
    axios
      .get(url)
      .then((res) => {
        setProfile(res.data.profile)
      })
      .catch((err) => {
        alert('test')
        console.log(err)
      })
  }

  const choosePerson = (boolean) => {
    const body =
    {
      "id": profile.id,
      "choice": boolean
    }
    axios
      .post(urlChoose, body)
      .then((res) => {
        getProfile()
      })
      .catch((err) => {
        alert('test')
        console.log(err)
      })
  }



  return (
    <ContainerPai>

      <ContainerHome>

        <HeaderPerfil>
          <p>AstroMatch</p>
          <DivBotao>
            <button onClick={props.paginaMatched}>Meus matches</button>
          </DivBotao>
        </HeaderPerfil>

        <ContainerPerfil>
          <ImagemPerfil>
            <Img src={profile.photo} alt={profile.name} />
          </ImagemPerfil>
          <Informacoes>
            <p>{profile.name}, {profile.age}</p>
            <p>{profile.bio}</p>
          </Informacoes>
        </ContainerPerfil>

        <ContainerBotoes>
          <button onClick={() => choosePerson(false)}>Não Curtir</button>
          <button onClick={() => choosePerson(true)}>Curtir</button>
        </ContainerBotoes>

      </ContainerHome>



    </ContainerPai>
  )
}

export default Home 