import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { url } from '../../constants/url'
import axios from 'axios'
import {Main, Container, Form, Input, Button, SignUp, Registrer, Span3, H4, H1 , H2 } from './styled'


export default function Signup() {

  const { form, onChangeForm } = useForm({ username: '', email: '', password: '' })

  const navigate = useNavigate()

  const goToLoginPage = () => {
    navigate('/')
  }

  const Signup = (event) => {

    event.preventDefault()

    axios
      .post(`${url}/users/signup`, form)
      .then((res) => {
        console.log(res)
        alert("Conta criada com sucesso.")
      })
      .catch((err) => {
        console.log(err.response)
        console.log(err)
        alert("Erro ao criar usário, tente novamente.")
      })
  }

  return (
    <Main>
      <Container>
        <H1>Labeddit</H1>
        <H2>Register your account</H2>
        <H4></H4>
        <Form onSubmit={Signup}>
          <Input
            name='username'
            placeholder='UserName'
            required
            type='text'
            value={form.username}
            onChange={onChangeForm} />

          <Input
            name='email'
            placeholder='E-mail'
            required
            type='email'
            value={form.email}
            onChange={onChangeForm} />

          <Input
            name='password'
            placeholder='Password'
            pattern={"^.{6,}"}
            title={"A senha deve ter no mínimo 6 digitos"}
            required
            type='password'
            value={form.password}
            onChange={onChangeForm} />

          <Button> SignUp </Button>
        </Form>
        <Registrer>
            <Span3>Already have an account?</Span3>
            <SignUp onClick={goToLoginPage}> Log In </SignUp>
          </Registrer>
      </Container>
    </Main>
  )
}