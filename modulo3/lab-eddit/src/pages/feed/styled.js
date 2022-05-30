import styled from 'styled-components'

export const Div = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  width: 500px;
  min-height: 300px;
  margin: 30px;
  border-radius: 20px;
  background-color: #000000;
  word-break: break-word;
  `


export const Main = styled.div`
  background-color: #696969;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh ;
`

export const DivButton = styled.div`
  width: 360px;
  display: flex;
  justify-content: space-between;
`

export const Button = styled.button`
  align-items: center;
  padding: 6px 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  border-radius: 6px;
  color: black;
  background: #fff;
  border: none;
  font-weight: bold;
  margin: 20px;
  font-size: 14px;
  :hover{
    background-color: #00CED1;
    color: black;
    cursor: pointer;
    transform: scale(1.15);
    transition: all 0.5s ease 0s;
  }  
`

export const ButtonDiv = styled.div`
  display: flex ;
  justify-content: space-evenly;
  width: 300px ;
  margin-left: auto;
  margin-right: auto ;
  margin-top: 20px ;
`

export const DivCancel = styled.div`
  margin-top: 30px ;
  display: flex ;
  justify-content: center ;
`

export const ButtonContainer = styled.button`
  background-color: transparent;
  border: 0px ;
  border-radius: 10px;
  :hover{
    cursor: pointer;
    transform: scale(1.3);
    transition: all 0.5s ease 0s;
  }
`

export const ButtonCancel = styled.button`
  border: 0px; 
  background-color: transparent ;
  font-size: 16px ;
  font-weight: bold ;
  :hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.5s ease 0s;
  }
`

export const DivTittle = styled.div`
text-align: center ;
margin-top: -2vh ;
width: 250px;
margin-left: auto ;
margin-right: auto ;
`

export const DivUser = styled.div`
  display: flex ;
  justify-content: end ;
  padding-right: 35px;
`

export const DivBody = styled.div`
  border: 2px solid white;
  width: 300px ;
  min-height: 50px ;
  text-align: center ;
  border-radius: 15px;
  padding: 10px ;
  margin-left: auto ;
  margin-right: auto ;
`

export const Form = styled.form`
  display: flex ;
  flex-direction: column ;
  margin: 20px ;
  align-items: center
`

export const Input = styled.input`
  width: 300px ;
  margin: 5px ;
  border-radius: 15px ;
  padding: 10px ;
  font-size: 17px;
  outline: 0px;
  border: 0px ;
  font-weight: bold ;
`

export const InputBody = styled.textarea`
  width: 300px ;
  height: 100px ;
  border-radius: 15px ;
  margin: 5px ;
  padding: 10px ;
  font-size: 17px;
  outline: 0px;
  border: 0px ;
  font-weight: bold ;
`

export const Img = styled.img`
  margin-left: 10px ;
  width: 20px;
  height: 20px ;
`

export const P = styled.p`
  color: white;
  font-weight: bold;
`

export const PUser = styled.p`
  color: lightblue;
`

export const PDate = styled.p`
  color: lightblue;
  margin: 5px 0px 0px 15px;
  padding: 10px ;
`

export const Span = styled.span`
  font-weight: bold ;
  color: white;
`