import React from "react";
import { useNavigate } from "react-router-dom";


export const ApplicationFormPage = () => {
    const navigate = useNavigate()

    const goToSignupUser1 = () => {
        navigate("/FormAdm")
    }
    const goToHomePage = () => {
        navigate("/")
    }

    return (
        <div>

<p>Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição</p>
<button onClick={goToSignupUser1}>Inscrição concluida</button>
<button onClick={goToHomePage}>Home</button>



        </div>
    )
}