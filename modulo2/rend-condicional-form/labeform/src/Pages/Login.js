import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
height: 20px;
width: fit-content;
border: none;
cursor: pointer;
border-radius: 4px;
box-shadow: 1px 0px 4px 3px rgba(0, 0, 0, 0.79);
margin: 0 8px;

`;

const LoginTitle = styled.h1`
text-transform: uppercase;
`

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 24px;
`

class Login extends React.Component {
    render () {
        return (
            <Container>
<LoginTitle>Login</LoginTitle>
<CustomButton>Fazer Login</CustomButton>

            </Container>
        );
    }
}

export default Login;