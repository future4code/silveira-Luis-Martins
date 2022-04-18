import React, { Component } from 'react';
import styled from 'styled-components';
import Image from '../Imagens/background.png'


const Container = styled.div`
    width: 100%;
    height: 100vh;
`

const CardTexto1 = styled.h1`
    display: grid;
    align-items: bottom;
    color:black;
    font-size:100px;
    
`

const CardTexto2 = styled.p`
    display: flex;
    align-items: bottom;
    justify-content: bottom;

    color: black;    
    font-weight: bold;
    font-size: 90px;
    
`

const CardButton = styled.button`
    display: flex;
     align-items: center; 
     justify-content: center;
    text-align: center;
    margin-left: 400px;
    border-radius: 25px;
    border: none;
    background-color: black;
    color: #2941AB;
    height: 45px;
    width: 205px;
    font-weight: bold;
    margin-top: 20px;
    cursor: pointer;
`


export default class MainApp extends Component {
  render() {
    return (
        <Container style={{backgroundImage: `url(${Image})`, backgroundPosition: 'center',   backgroundSize: 'cover',   backgroundRepeat: 'no-repeat', height: '200vh', width: '100%'}}>
        <CardTexto1>Música e uma arte!!</CardTexto1>
        <CardTexto2>Milhões de músicas para explorar!</CardTexto2>
        <CardButton>Labefy Music Box</CardButton>
        </Container>        
    )    
  }
}