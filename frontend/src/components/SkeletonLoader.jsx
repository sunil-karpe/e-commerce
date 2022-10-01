import { Star } from "@material-ui/icons"
import { Link } from "react-router-dom"
import styled,{ keyframes }  from "styled-components"
import { mobile } from "../responsive"


const rotate = keyframes`
  0% {
    background-color:hsl(200,20%,60%);
  }

  0% {
    background-color:hsl(200,20%,95%);
  }

`

const SkeletonText=styled.div` 

    width:${props=>props.width?props.width:"100%"};
    height:0.6rem;
    margin-top:5px;
   
    animation:${rotate} 1s linear infinite alternate;

`

const Container = styled.div`
// background-color:green;
${mobile({ width: "45vw", border: "0.5px solid #f1f1f1" })};

    &:hover {
        box-shadow:20px 20px 30px rgba(0,0,0,0.06);
        // border: 0.01px solid teal;
        box-shadow:2px 2px 2px grey;
        
    }
    width:200px;
    border:1px solid #f1f1f1;

`



const Img = styled.div`
height:40vh;
    width:100%;
    object-fit:cover;
    // border-radius:20px;

  opacity:0.7;
  animation:${rotate} 1s linear infinite alternate;
 
`

const Desc = styled.div`
    text-align:start;
    padding:2px 10px;
`

const Span = styled.span`
    color:#606063
`

const Title = styled.h5`

    padding-top:2px;
    margin:0px;
    color:#1a1a1a;
    font-size:14px;

`
const Price = styled.h4`
    margin-bottom:0;
`

const arr=[{},{},{},{},{},{},{}];




const SkeletonLoader = () => {
    return (

        arr.map((item,i)=>{
             return   <Container key={i}>
            {/* <Img src="https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/15509228/2021/10/20/fd805bf7-d880-48cf-a5b2-56cc0e21a8d91634723966843IndoEraWomenPinkYokeDesignRegularKurtawithPalazzosDupatta1.jpg" /> */}
    

                <Img src="" />

        

            <Desc>
                <Span><SkeletonText /></Span>
                <Title><SkeletonText width="80%"/></Title>
                <Price><SkeletonText width="30%"/></Price>

            </Desc>


        </Container>
    
        })
    )   
}

export default SkeletonLoader;