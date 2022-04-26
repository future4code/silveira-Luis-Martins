import React from "react";
import { useNavigate } from "react-router-dom";


export const SignupUser = () => {
    const navigate = useNavigate()

    const goToSignupUser1 = () => {
        navigate("/FormAdm")
    }

    return (
        <div>

<p>Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição</p>
<button onClick={goToSignupUser1}>Inscição</button>



        </div>
    )
}