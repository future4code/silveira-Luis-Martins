import styled from "styled-components";

export const StyledHeader = styled.div`
    background-color: green;
    height: 3rem;
    
    .header-text{
        display: flex;
        align-items: center;
        height: 100%;
        h2{
            margin-left: 5vw;
            color: black;
            letter-spacing: 0.5em;
            cursor: pointer;
            transition: 0.6s;
            :hover{
                filter: drop-shadow(0 0 5px var(--details));
                color: white;
            }
        }
    
        
        h3{
            color: var(--lighter);
            text-align: center;
            margin-left: 15px;
            transition: 1s;
        }
    }
` 