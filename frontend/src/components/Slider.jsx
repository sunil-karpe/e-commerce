import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
// import hero from "../hero.png";
import hero from "../hero.jpg";
import { sliderData } from "../data";
import { useState } from "react";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
    width:100%;
  
    height:100vh;
    display:flex;
    position:relative;
    overflow:hidden; 
    ${mobile({ display: "none" })};
    

`
const Arrow = styled.div`
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
    left:${props => props.direction === "left" && "10px"};
    right:${props => props.direction === "right" && "10px"};
    cursor:pointer;
    opacity:0.5;
    z-index:10;
   
`
const Wrapper = styled.div`
   
    height:100%;
    display:flex;
    transition:all 1.5s ease;
    transform:translateX(${props => props.index * 100 + "vw"});
    
`
const Slide = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:row;
    // background-color:#${props => props.bg}
    // background-color:green;
    
//    padding:0 500px !important;
    
`
const SliderContent = styled.div` 
    // background-color:orange;
    z-index:105;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:row;


`

const ImgContainer = styled.div` 
    width:500px;
    height:80%;
`

const Img = styled.img` 
    width:500px;
    height:100%;
`

const InfoContainer = styled.div` 

    width:500px;
    display:flex;
    align-items:center;
    flex-direction:column;
    // background-color:red;
`
const Title = styled.h1`
    font-size:50px;
    color:teal;
    margin:0;

`
const Desc = styled.p`
    margin:20px 0px;
    font-size:20px;
    font-weight:500;
    letter-spacing:3px;

`
const Button = styled.button`

    padding:10px;
    font-size:15px;
    background-color:transparent;
    curser:pointer !important;
    border:0.5px solid grey;
    border-radius:10px;

`


const Slider = () => {

    let [slideIndex, setslideIndex] = useState(0);

    // setTimeout(async() => {
    //    await handleSlide("right");
    // }, 5000);

    const handleSlide = async (direction = "right") => {
        // console.log(direction);
        if (direction === "right") {
            slideIndex === -2 ? setslideIndex((prevState) => 0) : setslideIndex((prevState) => prevState - 1);
            // console.log(slideIndex)

        } else {
            slideIndex === 0 ? setslideIndex((prevState) => -2) : setslideIndex((prevState) => prevState + 1);
            // console.log(slideIndex)

        }
    }


    return (
        <Container>
            <Arrow direction="left" onClick={() => { handleSlide("left") }} >
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper index={slideIndex}>
                {sliderData.map((item, i = 0) => {
                    // f5fafd
                    return <Slide bg="fcf5f5" key={i}>
                        <SliderContent>

                        <ImgContainer>
                            <Img src={hero} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Link to={`/products/`}>
                                <Button>SHOP NOW</Button>

                            </Link>
                        </InfoContainer>
                        </SliderContent>
                    </Slide>

                })}


            </Wrapper>
            <Arrow direction="right" onClick={() => { handleSlide("right") }}>
                <ArrowRightOutlined />
            </Arrow>

        </Container>
    )
}

export default Slider