import styled from "styled-components";
import logoBackground from "../../assets/img/background.png";

export const HomePageContainer = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    /* box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px; */
    /* border-radius: 5px; */

    // Container Logo
    div:first-of-type {
        background-image: url(${logoBackground});
        background-repeat: no-repeat;
        background-size: cover;
        height: 5px;

        // Logo
        img {
            display:flex;
            align-self: center;
            width: 45%;
            position: botton;
            top: 10%;
            left: 100%;
        }
    }
`