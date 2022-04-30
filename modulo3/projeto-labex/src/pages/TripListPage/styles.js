import styled from "styled-components";

export const TripsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
    padding: 10px;
    width: 50vw;
`

export const OutOfBoxText = styled.p`
    text-align: center;
    font-style: italic;
`


export const ButtonSignup = styled.button`
display: flex;
text-align: center;
align-items: center;
background: #247589;
width: 15%;
height: 50px;
padding: 10px 10px 10px; 
color: black;
border-radius: 5px;
h1{
   color: black;
}
&:hover {
    opacity: 0.8;
    cursor: pointer;
}
`

export const ButtonBack = styled.button`
display: flex;
text-align: center;
align-items: center;
background: #247589;
width: 10%;
height: 15px;
padding: 10px 10px;
color: black;
border-radius: 5px;
h1{
    color: black;
}
&:hover {   
    cursor: pointer;
    opacity: 0.8;
}
`
    
