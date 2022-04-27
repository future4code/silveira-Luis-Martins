import React from "react";
import { useNavigate } from "react-router-dom";


export const HomePage = () => {
    const navigate = useNavigate()

    const goToLoginPage = () => {
        navigate("/LoginPage")
    }
    const goToListTripsPage = () => {
        navigate("/ListTripsPage")
    }
  
    return (
<div>
   
    <div>
    <p>Para o usuário escolher entre Área Administrativa e Lista de Viagens</p>
    <button onClick={goToLoginPage}>Área Adm</button>
    <button onClick={goToListTripsPage}>Ver Viagens</button>
    </div>


</div>
    );
};