import React from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useRequestData";


export const ApplicationFormPage = () => {
    const navigate = useNavigate()

    const goToSignupUser1 = () => {
        navigate("/FormAdm")
    }
    const goToHomePage = () => {
        navigate("/")
    }

    const { form, onChange, cleanFields } = useForm({
        nome: "",
        idade: "",
        email: ""
      });
    
      const cadastrar = (event) => {
        event.preventDefault();
        console.log("Formulário enviado!", form);
        cleanFields();
      };

    return (
        <div>

<p>Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição</p>
<button onClick={goToSignupUser1}>Inscrição concluida</button>
<button onClick={goToHomePage}>Home</button>

<div>
      <h1>Cadastro</h1>
      <form onSubmit={cadastrar}>
        <input
          name={"nome"}
          value={form.nome}
          onChange={onChange}
          placeholder="Nome"
          required
          pattern={"^.{3,}"}
          title={"O nome deve ter no mínimo 3 letras"}
        />
        <input
          name={"idade"}
          value={form.idade}
          onChange={onChange}
          placeholder="Idade"
          required
          type={"number"}
          min={18}
        />
        <input
          name={"email"}
          value={form.email}
          onChange={onChange}
          placeholder="E-mail"
          required
          type={"email"}
        />
        <button>Cadastrar</button>
      </form>
    </div>
  );



        </div>
    )
}