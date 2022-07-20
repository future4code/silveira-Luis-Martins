import { useHistory } from "react-router-dom"
import { changePage } from "../../Router/routerGPS"
import { StyledHeader } from "./style"



export const CompHeader = () => {
    

    const history = useHistory()


    return(
        <StyledHeader>
            <div className="header-text">
                <h2 onClick={() => changePage(history, "/")}>Filmes e Séries</h2>

              
            </div>
        </StyledHeader>
    )
} 