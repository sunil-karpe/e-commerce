import styled from "styled-components"
import Navbar from "../components/Navbar"

const Container=styled.div`
 
  width:100vw;
  height:100vh;
  background-color:#ecf5f5;
  display:flex;
  align-items:center;
  justify-content:center;
`

const Wrapper=styled.div`
  width:40%;
  background-color:white;
  padding:20px;
`

const Title=styled.h1`
margin:0px;
font-size:24px;
font-weight:300;

`

const Form=styled.form`
  display:flex;
  flex-wrap:wrap;

`
const Input=styled.input`
  flex:1;
  min-width:40%;
  margin:20px 10px 0px 0px;
  padding:10px;
`
const Button=styled.button`
  width:40%;
  border:none;
  background-color:teal;
  color:white;
  padding:15px 20px;

`
const Agreement=styled.p`
  font-size:12px;
  margin:20px 0px;
`

const Register = () => {
  return (
    <div>
  <Navbar/>
    <Container >
        <Wrapper>
            <Title>CREATE A NEW ACCOUNT</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
            </Form>
            <Agreement>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente exercitationem odio dolore, voluptatem fugiat quasi ea expedita dolorum inventore est!
            </Agreement>
            <Button>CREATE</Button>
        </Wrapper>
    </Container>
    </div>
      
  )
}

export default Register