import { useNavigate } from "react-router-dom";
import { goToTripsList, goToAdminHomePage } from "../../routes/coordinator";
import { HomePageContainer } from "./styles";
import logo from "../../assets/img/logo.png";
import { DefaultButton } from "../../components/DefaultButton/DefaultButton";





export function HomePage() {
    const navigate = useNavigate();

    return (
        <HomePageContainer>



            <div>
                <img src={logo} alt="logo" />
            </div>


            <div>
                <DefaultButton onClick={() => goToTripsList(navigate)} text={"Ver viagens"} />
                <DefaultButton onClick={() => goToAdminHomePage(navigate)} text={"Área de Admin"} />
            </div>


        </HomePageContainer>
    );
};