import background from "./assets/img/background.png";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto";
    color: #ffffff;
  }

  body {
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
  }
`

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 50px;
`