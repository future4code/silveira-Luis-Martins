import React from "react";
import { useNavigate } from "react-router-dom";

export const FormUser = () => {
    const navigate = useNavigate()

    const goToAdm = () => {
        navigate("/LoginAdm")
    }
    const goToSignupUser = () => {
        navigate("/formPage")
    }



    return (
        <div>

<p>Para o administrador ver a lista de viagens e poder 
    deletá-las ou acessar o detalhe de cada uma delas</p>
    <button onClick={goToAdm}>Area logada</button>
    <button onClick={goToSignupUser}>Area não logada</button>

    { <div>

   
    </div> }


        </div>
    )
}