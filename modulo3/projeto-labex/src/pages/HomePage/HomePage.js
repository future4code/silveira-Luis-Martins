import { useNavigate } from "react-router-dom";
import { goToTripsList, goToAdminHomePage } from "../../routes/coordinator";
import { ButtonTrips, ButtonAdm,LogoImg,BotaoDiv} from "./styles";
import logo from "../../assets/img/logo.png";


export function HomePage() {
    const navigate = useNavigate();

    return (
    <div>


        <BotaoDiv>
        <ButtonTrips onClick={() => goToTripsList(navigate)}><h1>Viagens</h1> </ButtonTrips>
        <ButtonAdm onClick={() => goToAdminHomePage(navigate)} ><h1> Area Adm</h1> </ButtonAdm>
        </BotaoDiv>

        <LogoImg>
            <img src={logo} alt="logo" />
        </LogoImg>
               
    </div>
);
};