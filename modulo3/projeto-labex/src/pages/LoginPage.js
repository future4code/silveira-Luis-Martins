import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginAdm = () => {
    const navigate = useNavigate()

    const goToAdm = () => {
        navigate("/FormUser")
    }


    return (
        <div>

<p>Para fazermos login como administrador</p>
<button onClick={goToAdm}>Login</button>


        </div>
    )
}