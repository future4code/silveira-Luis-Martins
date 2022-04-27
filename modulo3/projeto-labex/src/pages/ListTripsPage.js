import React from "react";
import { useNavigate } from "react-router-dom";

export const ListTripsPage = () => {
    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate("/")
    }
    const goToApplicationFormPage = () => {
        navigate("/ApplicationFormPage")
    }

    return (
        <div>
<button onClick={goToHomePage}>Home</button>
<p>Para vermos todas as viagens</p>

<button onClick={goToApplicationFormPage}>inscrever-se</button>


        </div>
    )
}