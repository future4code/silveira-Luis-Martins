import React from "react";
import { useNavigate } from "react-router-dom";

export const CreateTripPage = () => {
    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate("/")
    }
    const goToApplicationFormPage = () => {
        navigate("/ApplicationFormPage")
    }


    return (
        <div>

<p>Formulário para o usuario criar uma nova viagem</p>
<button onClick={goToHomePage}>Home</button>
<button onClick={goToApplicationFormPage}>Formulario de inscrição</button>

        </div>
    )
}