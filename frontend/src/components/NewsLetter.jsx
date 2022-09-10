import {  Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container=styled.div`
    height:60vh;
    background-color:#fcf5f5;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    ${mobile({height:"auto",paddingBottom:"20px"})};
`
const Title=styled.h1`
    font-size:50px;
    font-weight:500;
    margin-bottom:40px;
    ${mobile({textAlign:"center"})};
`
const Description=styled.div`
    font-size:20px;
    font-weight:300;
    margin-bottom:40px;
    width:60%;
    text-align:center;

`
const InputContainer=styled.div`
    width:50%;
    background-color:white;
    display:flex;
    justify-content:space-between;
    border:0.2px solid lightgray;
    ${mobile({width:"80%"})};
   
`
const Input=styled.input`
    //padding:5px;
    border:none;
    flex:8;
`
const Button=styled.button`
    flex:1;
    background-color:teal;
    color:white;
    border:none;
`



const NewsLetter = () => {
  return (
    <Container>
        <Title>Contact Us</Title>
        <Description>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe cumque optio fugit a aspernatur! Commodi asperiores laudantium repudiandae rerum error.</Description>
        <InputContainer>
            <Input placeholder="Your Email" />
            <Button><Send /></Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter