import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import {useEffect} from "react";

export const TripDetailsPage = () => {
useEffect(()=>{
    const token = localStorage.getItem('token')
axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/NoIFVcOiSgTKTIPVZwXS', {
    headers: {
        auth: token
    }
})
.then((response)=>{
    console.log( response.data)
    }).catch((error)=> {
        console.log('Deu Error:', error.response)
    })
}, [])






    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate("/")
    }
    const goToTripDetailsPage = () => {
        navigate("/admin/trips/list")
    }


    return (
        <div>
  <button onClick={goToHomePage}>Home</button>
<p>Para o administrador ver o detalhe de uma viagem específica,
     bem como os candidatos que aplicaram para ela</p>
   
     <button onClick={goToTripDetailsPage}>Area do Adm</button>


        </div>
    )
}