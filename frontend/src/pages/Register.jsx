import styled from "styled-components"
import Navbar from "../components/Navbar"
import { mobile } from "../responsive"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { register } from "../redux/apiCalls"

const Container = styled.div`
 
  width:100vw;
  height:100vh;
  background-color:#ecf5f5;
  display:flex;
  align-items:center;
  justify-content:center;
`

const Wrapper = styled.div`
  width:40%;
  background-color:white;
  padding:20px;
  ${mobile({ width: "75%" })};
`

const Title = styled.h1`
margin:0px;
font-size:24px;
font-weight:300;

`

const Form = styled.form`
  display:flex;
  flex-wrap:wrap;
  row-gap:20px;

`
const Input = styled.input`
  flex:1;
  min-width:85%;
  
  padding:10px;
  display:block;
`
const Button = styled.button`
  width:40%;
  border:none;
  background-color:teal;
  color:white;
  padding:10px 20px;
  ${mobile({ width: "auto" })};

`


const Agreement = styled.p`
  font-size:12px;
  margin:20px 0px;
`
const Span=styled.span`
  color:red;
  font-size:12px;
`
const InputContainer=styled.div`
flex:1;

min-width:40%;
margin:10px 10px 0px 0px;
${mobile({minWidth:"80%"})}
`

const Register = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const dispatch = useDispatch();


  const validateName=(e)=>{
    if(e.target.value===""||e.target.value===" "||e.target.value.length<3){
        setUsernameError("Please provide the valid username!")
    }else{
      setUsernameError(false)
      setUsername(e.target.value)
    }
  }
  const validateEmail=(e)=>{
    if(e.target.value===""||e.target.value===" "||e.target.value.length<3){
        setEmailError("Please provide the valid email!")
    }else{
      setEmailError(false)
      setEmail(e.target.value)
    }
  }
  const validatePassword=(e)=>{
    if(e.target.value===""||e.target.value===" "||e.target.value.length<3){
        setPasswordError("Please provide the valid password!")
    }else{
      setPasswordError(false)
      setPassword(e.target.value)
    }
  }
  const validateConfirmPassword=(e)=>{
    if(e.target.value!==password){
        setConfirmPasswordError("Password mismatch!")
    }else{
      setConfirmPasswordError(false)
      setConfirmPassword(e.target.value)
    }
  }


  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!usernameError&&!emailError&&!passwordError&&!confirmPasswordError){
      alert("can be registered")
      register(dispatch,{username,password,email})
    }else{
      alert("error presents")

    }
  }



  return (
    <div>
      <Navbar />
      <Container >
        <Wrapper>
          <Title>CREATE A NEW ACCOUNT</Title>
          <Form>



          <InputContainer>
            <Input placeholder="username" name="username"
              onChange={validateName}/>
            {usernameError&&<Span>{usernameError}</Span>}
          
          </InputContainer>

          <InputContainer>
            <Input placeholder="email" name="email"
              onChange={validateEmail } />
               {emailError&&<Span>{emailError}</Span>}
          
          </InputContainer>

          <InputContainer>
            <Input placeholder="password" name="password"
              type={password} onChange={validatePassword} />
               {passwordError&&<Span>{passwordError}</Span>}
          
          </InputContainer>

          <InputContainer>
          
            <Input placeholder="confirm password" name="confirmPassword"
              type={password} 
              onChange={validateConfirmPassword }/>
               {confirmPasswordError&&<Span>{confirmPasswordError}</Span>}
          </InputContainer>
          </Form>
          <Agreement>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente exercitationem odio dolore, voluptatem fugiat quasi ea expedita dolorum inventore est!
          </Agreement>
          <Button onClick={handleSubmit}>CREATE</Button>
        </Wrapper>
      </Container>
    </div>

  )
}

export default Register