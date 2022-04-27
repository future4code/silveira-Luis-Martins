import React from "react";
import { useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";



export const LoginPage = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

// const history = useNavigate();

const onChangeEmail = (event) => {
    setEmail(event.target.value);
}
const onChangePassword = (event) => {
    setPassword(event.target.value);
}
const onSubmitLogin = () => {
    console.log(email, password);
    const body = {
        email: email,
        password: password
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login', body)
    .then((response)=>{
        console.log('Deu certo:', response.data.token);
        localStorage.setItem('token', response.data.token)
        // history.push("/TripDetailsPage")
    }).catch((error) => {
        console.log('Não deu certo:', error.response);
    })
    
};

    const navigate = useNavigate()

    const goToAdminHomePage = () => {
        navigate("/AdminHomePage")
    }
    const goToHomePage = () => {
        navigate("/")
    }


    return (
        <div>

<div>
<button onClick={goToHomePage}>Home</button>
<p>Para fazermos login como administrador</p>
<button onClick={goToAdminHomePage}>goToAdminHomePage</button>
</div>

<div>
    <input
    placeholder="email"
    type="email"
    value={email}
    onChange={onChangeEmail}
    />
</div>
<div>
    <input
    placeholder="password"
    type="password"
    value={password}
    onChange={onChangePassword}
    />
</div>

<div>
<button onClick={onSubmitLogin}>Logar</button>
</div>


        </div>
    )
}