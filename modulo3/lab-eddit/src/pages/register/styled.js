import styled from 'styled-components'

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #696969;
`

export const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  background-color: #000000;
  border-radius: 15px;
  width: 500px;
  height: 550px;
  position:absolute;
  top:50%;
  left:50%;
  margin-left:-250px;/* half width*/
  margin-top:-250px;/* half height*/
  text-align: center;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export const Input = styled.input`
  border: 0px;
  margin: 10px;
  border-radius: 10px;
  width: 250px;
  padding: 5px 0px 5px 10px;
  outline: 0;
`

export const Button = styled.button`
  align-items: center;
  padding: 6px 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  border-radius: 6px;
  color: #000000;
  background: #fff;
  border: none;
  font-weight: bold;
  margin: 20px;
  font-size: 14px;
  :hover{
    background-color: #00FFFF;
    color: black;
    cursor: pointer;
    transform: scale(1.15);
    transition: all 0.5s ease 0s;
  }  
`

export const SignUp = styled.button`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  border-radius: 6px;
  color: #00CED1;
  background: none;
  border: none;
  font-weight: 900;
  margin: 10px;
  font-size: 18px;
  :hover{
    color: #00FFFF;
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.5s ease 0s;
  }  
`

export const Registrer = styled.div`
  margin-top: 20px;
`

export const Span3 = styled.span`
  font-weight: bold;
  font-size: 18px;
  color: aliceblue;
`

export const H4 = styled.h4`
  font-size: 13px;
  color:  aliceblue;
`

export const H1 = styled.h1`
  color: #00CED1 ;
`

export const H2 = styled.h2`
  color:white;
`
