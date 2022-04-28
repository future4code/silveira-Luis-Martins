import React from "react";
import { useNavigate } from "react-router-dom";

export const AdminHomePage = () => {
    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate("/")
    }
    const goToTripDetailsPage = () => {
        navigate("/admin/trips/:id")
    }



    return (
        <div>

<p>Para o administrador ver a lista de viagens e poder 
    deletá-las ou acessar o detalhe de cada uma delas</p>
    
    <button onClick={goToHomePage}>Home</button>
    <button onClick={goToTripDetailsPage}>Detalhes das viagens</button>

    { <div>

   
    </div> }


        </div>
    )
}