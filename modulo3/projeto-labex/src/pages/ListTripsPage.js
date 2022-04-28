import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useRequestData";




export const ListTripsPage = (props) => {
    const navigate = useNavigate()
    

    const goToHomePage = () => {
        navigate("/")
    }
    const goToApplicationFormPage = () => {
        navigate("/admin/trips/create")
    }


    return (
        <div>
<button onClick={goToHomePage}>Home</button>
<p>Para vermos todas as viagens</p>

<button onClick={goToApplicationFormPage}>inscrever-se</button>


        </div>
    )
}