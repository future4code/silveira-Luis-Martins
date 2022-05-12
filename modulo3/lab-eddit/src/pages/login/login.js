import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import axios from 'axios'
import { url } from '../../constants/url'
import {Main, Container, Form, Input, Button, SignUp, Registrer, Span3, H4, H1, H2  } from './styled'



const Login = () => {

  const { form, onChangeForm } = useForm({ email: '', password: '' })

  const navigate = useNavigate()

  const goToFeedPage = () => {
    navigate('/feed')
  }

  const goToSingupPage = () => {
    navigate('/signup')
  }

  const Login = (event) => {
    event.preventDefault()

    axios
      .post(`${url}/users/login`, form)
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        goToFeedPage()
      })
      .catch((err) => {
        console.log(err.response)
        alert("Incorrect email or password")
      })
  }
  
  return (
    <Main>
      <Container>
        <H1>Labeddit</H1>
        <H2>Login to your account</H2>
        <H4></H4>
        <Form onSubmit={Login}>
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
            required
            type='password'
            value={form.password}
            onChange={onChangeForm} />
          <Button> Login </Button>
        </Form>
        <Registrer>
          <Span3>Don't have an account?</Span3>
          <SignUp onClick={goToSingupPage}> Sign Up </SignUp>
        </Registrer>
      </Container>
    </Main>
  )
}

export default Login