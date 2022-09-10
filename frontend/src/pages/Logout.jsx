import React from 'react'
import styled from 'styled-components'
import Login from './Login'
import {mobile} from '../responsive'
import { useDispatch } from 'react-redux'
import {logout} from '../redux/userRedux'

const Container = styled.div`
 
  width:100vw;
  height:100vh;
  background-color:#ecf5f5;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
`

const Wrapper = styled.div`
  width:25%;
  background-color:white;
  padding:20px;
`
const Title = styled.h1`
    font-size:50px;
    font-weight:500;
    margin-bottom:40px;
    ${mobile({ textAlign: "center" })};
`

const Logout = () => {

    const dispatch=useDispatch();
    dispatch(logout());


    return (

        <Container>

            {/* <Title>You are successfully logout</Title> */}

            <Login />


        </Container>
    )
}

export default Logout