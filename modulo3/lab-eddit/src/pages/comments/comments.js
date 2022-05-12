import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../../constants/url'
import { useNavigate, useParams } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import like from '../../img/like.png'
import liked from '../../img/liked.png'
import deslike from '../../img/deslike.png'
import desliked from '../../img/desliked.png'
import {Main, Form, Input, Button, DivCancel, ButtonDiv,ButtonContainer, 
  ButtonCancel, Img, DivUser, DivBody, PUser, P, Span, Div, DiviButton}  from './styled'


const Coments = () => {

  const { form, onChangeForm } = useForm({ body: '' })

  const navigate = useNavigate()

  const [coments, setComents] = useState([])
  const [vote, setVote] = useState(0)
  const [newComment, setNewComment] = useState(0)

  const params = useParams()

  const GetComments = () => {

    const token = localStorage.getItem('token')

    axios
      .get(`${url}/posts/${params.id}/comments`, {
        headers: {
          Authorization: token
        }
      })
      .then((res) => {
        setComents(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const CreateComment = (event) => {
    event.preventDefault()

    const token = localStorage.getItem('token')

    axios
      .post(`${url}/posts/${params.id}/comments`, form, {
        headers: {
          authorization: token
        }
      })
      .then((res) => {
        console.log(res.data)
        setNewComment(newComment + 1)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const CommentVoteLike = (id) => {

    const token = localStorage.getItem('token')

    const body = {
      direction: 1
    }

    axios
      .post(`${url}/comments/${id}/votes`, body, {
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


  const CommentVoteDeslike = (id) => {

    const token = localStorage.getItem('token')

    const body = {
      direction: -1
    }

    axios
      .put(`${url}/comments/${id}/votes`, body, {
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

  const DeleteCommentVote = (id) => {

    const token = localStorage.getItem('token')

    axios
      .delete(`${url}/comments/${id}/votes`, {
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

  useEffect(() => {

    GetComments()

  }, [vote, newComment])

  const backPage = (event) => {
    event.preventDefault()
    navigate(-1)
  }

  return (
    <Main>

      <Form onSubmit={CreateComment}>
        <DiviButton>
          <Button onClick={backPage}> Back </Button>
          <Button> Comment </Button>
        </DiviButton>

        <Input
          name='body'
          placeholder='Talk about'
          required
          type='text'
          value={form.body}
          onChange={onChangeForm} />


      </Form>
      <div>
        {coments && coments.length > 0 ? coments?.map(({ id, username, body, voteSum, userVote }) => {
          return (
            <Div key={id}>
            <DivUser>
              <PUser> {username}</PUser>
            </DivUser>
            <DivBody>
              <P>{body}</P>
            </DivBody>
              
              <ButtonDiv>
              <ButtonContainer
               onClick={() => CommentVoteLike(id)}> 
               <Img src={userVote === 1 ? liked : like} />
              </ButtonContainer>
              <Span>{voteSum}</Span>
              <ButtonContainer
              onClick={() => CommentVoteDeslike(id)}>
              <Img src={userVote === -1 ? desliked : deslike} />
              </ButtonContainer>
              </ButtonDiv>
              <DivCancel>
              <ButtonCancel style={userVote === null ? { color: 'white' } : { color: '#00a8f3' }} onClick={() => DeleteCommentVote(id)}> Reset my Likes </ButtonCancel>
              </DivCancel>
            </Div>
          )
        }): <P> There are no comments on this post yet, be the first! </P>}

      </div>
    </Main>
  )
}

export default Coments