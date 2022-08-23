import styled from "styled-components";
import { ArrowLeftOutlined,ArrowRightOutlined } from "@material-ui/icons";
import hero from "../hero.png";
import {sliderData} from "../data";
import { useState } from "react";
import { mobile } from "../responsive";

const Container=styled.div`
    width:100%;
  
    height:100vh;
    display:flex;
    position:relative;
    overflow:hidden; 
    ${mobile({display:"none"})};

`
const Arrow=styled.div`
    width:50px;
    height:50px;
    background-color:#f7f7f7;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    //get this work correctly need to add position relative to the parent 
    position:absolute;
    top:0;
    bottom:0;
    margin:auto;
    left:${props=>props.direction==="left" && "10px"};
    right:${props=>props.direction==="right" && "10px"};
    cursor:pointer;
    opacity:0.5;
    z-index:10;
   
`
const Wrapper= styled.div`
    height:100%;
    display:flex;
    transition:all 1.5s ease;
    transform:translateX(${props=>props.index*100+"vw"});
    
`
const Slide=styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify:content:center;
    background-color:#${props=>props.bg}
    
    
`
const ImgContainer=styled.div` 
    flex:1;
    height:100%;

`

const Img=styled.img` 

    height:80%;
`

const InfoContainer=styled.div` 

    flex:10;
    flex:10;
    display:flex;
    align-items:center;
    flex-direction:column;
`
const Title=styled.h1`
    font-size:50px;
    color:teal;

`
const Desc=styled.p`
    margin:20px 0px;
    font-size:20px;
    font-weight:500;
    letter-spacing:3px;

`
const Button=styled.button`

    padding:10px;
    font-size:20px;
    background-color:transparent;
    curser:pointer;

`


const Slider = () => {

    let [slideIndex, setslideIndex] = useState(0);

    // setTimeout(async() => {
    //    await handleSlide("right");
    // }, 5000);

    const handleSlide=async(direction="right")=>{
        // console.log(direction);
        if(direction==="right"){
          slideIndex===-2?setslideIndex((prevState)=>0):setslideIndex((prevState)=>prevState-1);
            // console.log(slideIndex)

        }else{
            slideIndex===0?setslideIndex((prevState)=>-2):setslideIndex((prevState)=>prevState+1);
            // console.log(slideIndex)

        }
    }


  return (
    <Container>
        <Arrow direction="left" onClick={()=>{handleSlide("left")}} > 
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper index={slideIndex}>
            {sliderData.map((item,i=0)=>{
                // f5fafd
                return <Slide bg="fcf5f5" key={i}>
                 <ImgContainer>
                     <Img src={hero} />
                 </ImgContainer>
                 <InfoContainer>
                     <Title>{item.title}</Title>
                     <Desc>{item.desc}</Desc>
                     <Button>SHOW NOW</Button>
                 </InfoContainer>
             </Slide>

            })}
           

        </Wrapper>
        <Arrow direction="right" onClick={()=>{handleSlide("right")}}>
            <ArrowRightOutlined />
        </Arrow>

    </Container>
  )
}

export default Slider