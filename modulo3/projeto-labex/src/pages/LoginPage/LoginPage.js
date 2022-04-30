import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { BASE_URL } from "../../constants/requests";
import { goToHome, goToAdminHomePage } from "../../routes/coordinator";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { LoginContainer } from "./styles";
import { DefaultButton } from "../../components/DefaultButton/DefaultButton";



export function LoginPage() {
    const {form, onChange, cleanFields} = useForm({email: "", password: ""});
    const navigate = useNavigate();

    const login = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`${BASE_URL}/login`, form);
            localStorage.setItem("token", response.data.token);
            goToAdminHomePage(navigate);
            console.log(response.data.token)

        } catch(error) {
            alert("Email ou senha inválidos, tente novamente.");
            cleanFields();
            console.log(error)
        }
    };
    
    return (
        <div>
            <PageTitle text={"Login"} />

            <LoginContainer onSubmit={ login }>
                <input placeholder="Email" 
                name="email" 
                value={form.email} 
                onChange={onChange} />
                
                <input type="password" 
                placeholder="Senha" 
                name="password" 
                value={form.password} 
                onChange={onChange} />

                <div>
                    <DefaultButton onClick={ () => goToHome(navigate) } text={"Voltar"} />
                    <DefaultButton text={"Entrar"} />
                </div>
            </LoginContainer>
        </div>
    );
};