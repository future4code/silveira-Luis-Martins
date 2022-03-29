import styled from "styled-components";

export const Perfil = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 45px;
    padding: 5px; 
    margin: 0 10px;
`
export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
export const Bod = styled.div`
    display: flex;
    flex-direction: column-reverse;
    margin: 20px auto;
    padding: 10px 0;
    max-width: 450px;
    height: 500px;
    border: solid grey 2px;
`
export const Foot = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    color: white;
    max-width: 450px;
    height: 20px;
    background-color: black;
    position: relative;
    bottom: 0;
    border-radius: 10px;

`
export const UmTerco = styled.input`
    width: 20%;
    height: 30px;
`
export const DoisTerco = styled.input`
    width: 60%;
    height: 30px;
`
export const Input = styled.button`
    height: 30px;
`
export const Mensagem = styled.form`
    display: flex;
    flex-direction: row;
    background-color: aqua;
    align-items: center;
    margin-left: 0.2em;
    max-width: 50%;
    margin-bottom: 1em;
    word-wrap: break-word;
    align-self: flex-start;
    border-radius: 10px;
`
export const Me = styled.div`
    display: flex;
    flex-direction: row;
    background-color: black;
    max-width: 50%;
    margin-bottom: 1em;
    margin-right: 0.2em;
    word-wrap: break-word;
    align-self: flex-end;
    border-radius: 10px;
    color: white;
`

export const DistancH4 = styled.h4`
    padding: 0 5px;
    width: 100%;
`
export const DistancP = styled.p`
    padding: 0 5px;
    width: 70%;
`
export const DistancB = styled.button`
    padding: 0 5px;
`
export const Revers = styled.div`
    display: flex;
    flex-direction: column;
`