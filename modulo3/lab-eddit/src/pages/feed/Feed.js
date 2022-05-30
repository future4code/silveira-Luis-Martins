import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { url } from '../../constants/url'
import ProtectToken from '../../hooks/protect'
import like from '../../img/like.png'
import liked from '../../img/liked.png'
import deslike from '../../img/deslike.png'
import desliked from '../../img/desliked.png'
import comment from '../../img/comentarios.png'
import useForm from '../../hooks/useForm'
import loading from '../../img/loading.gif'
import moment from 'moment'
import {Div, Main, DivButton, Button, ButtonDiv, DivCancel, ButtonContainer, ButtonCancel, DivTittle,
  DivUser, DivBody, Form, Input, InputBody, Img, P, PUser, PDate, Span } from './styled'



export default function Feed() {

  ProtectToken()

  const { form, onChangeForm, cleanFields } = useForm({ title: '', body: '' })
  const [posts, setPosts] = useState([])
  const [vote, setVote] = useState(0)
  const [newPost, setNewPost] = useState(0)

  const navigate = useNavigate()

  const GetPosts = () => {

    const token = localStorage.getItem('token')

    axios
      .get(`${url}/posts`, {
        headers: {
          authorization: token
        }
      })
      .then((res) => {
        setPosts(res.data)
      })
      .catch((err) => {
        console.log('erro', err.response)
      })
  }

  const CreatePost = (event) => {
    event.preventDefault()

    const token = localStorage.getItem('token')

    axios
      .post(`${url}/posts`, form, {
        headers: {
          authorization: token
        }
      })
      .then((res) => {
        setNewPost(newPost + 1)
        cleanFields()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const PostVoteLike = (id) => {

    const token = localStorage.getItem('token')

    const body = {
      direction: 1
    }

    axios
      .post(`${url}/posts/${id}/votes`, body, {
        headers: {
          authorization: token
        }
      })
      .then((res) => {
        setVote(1)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const PostVoteDeslike = (id) => {

    const token = localStorage.getItem('token')

    const body = {
      direction: -1
    }

    axios
      .put(`${url}/posts/${id}/votes`, body, {
        headers: {
          authorization: token
        }
      })
      .then((res) => {
        setVote(-1)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const DeletePostVote = (id) => {

    const token = localStorage.getItem('token')

    axios
      .delete(`${url}/posts/${id}/votes`, {
        headers: {
          authorization: token
        }
      })

      .then((res) => {
        setVote(0)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const goToComentsPage = (id) => {
    navigate(`/comments/${id}`)
  }

  useEffect(() => {

    GetPosts()

  }, [vote, newPost])

  return (
    <Main >

      <Form onSubmit={CreatePost}>
        <DivButton>
          <Button onClick={logout}> Logout </Button>
          <Button> Create Post </Button>
        </DivButton>

        <Input
          name='title'
          placeholder='Title'
          required
          type='text'
          value={form.title}
          onChange={onChangeForm} />

        <InputBody
          name='body'
          placeholder='Talk about'
          required
          type='text'
          value={form.body}
          onChange={onChangeForm} />
      </Form>

      {posts && posts.length > 0 ? posts.map(({ id, username, title, body, voteSum, commentCount, userVote, createdAt }) => {
        return (
          <Div key={id}>
            <DivUser>
              <PUser> {username}</PUser>
            </DivUser>
            <DivTittle>
              <P>{title}</P>
            </DivTittle>
            <DivBody>
              <P>{body}</P>
            </DivBody>
            <ButtonDiv>
              <ButtonContainer onClick={() => PostVoteLike(id)}>
                <Img src={userVote === 1 ? liked : like} />
              </ButtonContainer>
              <Span>{voteSum}</Span>
              <ButtonContainer onClick={() => PostVoteDeslike(id)}>
                <Img src={userVote === -1 ? desliked : deslike} />
              </ButtonContainer>
              <ButtonContainer onClick={() => goToComentsPage(id)}>
                <Img src={comment} />
              </ButtonContainer>
              <Span>{commentCount && commentCount.length > 0 ? commentCount : '0'}</Span>
            </ButtonDiv>
            <DivCancel>
              <ButtonCancel style={userVote === null ? { color: 'white' } : { color: '#00a8f3' }} onClick={() => DeletePostVote(id)}> Reset my Likes </ButtonCancel>
            </DivCancel>
            <PDate>{moment(createdAt).fromNow()}</PDate>
          </Div>
        )
      }) : <img src={loading} />}


    </Main>
  )
}