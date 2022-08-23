import styled from "styled-components"
import { useState } from "react"
import { login } from "../redux/apiCalls"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

const Container = styled.div`
 
  width:100vw;
  height:100vh;
  background-color:#ecf5f5;
  display:flex;
  align-items:center;
  justify-content:center;
`

const Wrapper = styled.div`
  width:25%;
  background-color:white;
  padding:20px;
`

const Title = styled.h1`
margin:0px;
font-size:24px;
font-weight:300;

`

const Form = styled.form`
  display:flex;
  flex-wrap:wrap;

`
const Input = styled.input`
  flex:1;
  min-width:80%;
  margin:15px 0px;
  padding:10px;
`
const Button = styled.button`
  width:40%;
  border:none;
  background-color:teal;
  color:white;
  padding:15px 20px;
  margin-bottom:10px;
  display:block;

  &:disabled{
    cursor:not-allowed;
    
  }

`
const Anchor = styled.a`
  font-size:12px;
  // font-weight:1500;
  margin:10px 0px;
  cursor:pointer;
  color:black;
`

const Span = styled.span`
  width:100%;
  color:red;

`

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { error, errorMsg, isFetching, currentUser } = useSelector(state => state.user);




  const handleClick = (e) => {
    e.preventDefault()

    login(dispatch, { username, password });
  }


  return (
    <>


      <Navbar />
      <Container >
        <Wrapper>

          <Title>SIGN IN</Title>
          <Form>

            <Input placeholder="username" onChange={(e) => { setUsername(e.target.value) }} />
            <Input type="password" placeholder="password" onChange={(e) => { setPassword(e.target.value) }} />

            <Button disabled={isFetching} onClick={handleClick}>SIGN IN</Button>
            {error && <Span>{errorMsg}</Span>}

            <Anchor>DON NOT REMEMBER THE PASSWORD?</Anchor>
            <Link to="/register">
              <Anchor>CREATE A NEW ACCOUNT</Anchor>

            </Link>

          </Form>

        </Wrapper>
      </Container>
    </>
  )
}

export default Login