import { Star } from "@material-ui/icons"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
// background-color:green;
${mobile({ width: "45vw", border: "0.5px solid grey" })};

    &:hover {
        box-shadow:20px 20px 30px rgba(0,0,0,0.06);
        // border: 0.01px solid teal;
        box-shadow:2px 2px 2px grey;
        
    }


`

const Img = styled.img`
height:40vh;
    width:100%;
    object-fit:cover;
    // border-radius:20px;

    
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



const FeatureItem = ({ item }) => {
    return (
        <Container>
            {/* <Img src="https://assets.myntassets.com/f_webp,fl_progressive/h_960,q_80,w_720/v1/assets/images/15509228/2021/10/20/fd805bf7-d880-48cf-a5b2-56cc0e21a8d91634723966843IndoEraWomenPinkYokeDesignRegularKurtawithPalazzosDupatta1.jpg" /> */}
            <Link to={`/product/${item._id}`}>

                <Img src={item.img} />

            </Link>

            <Desc>
                <Span>{item.desc}</Span>
                <Title>{item.title}</Title>
                <Span>
                    {/* <Star style={{color:"#f4b400"}}/>
                    <Star style={{color:"#f4b400"}}/>
                    <Star style={{color:"#f4b400"}}/>
                    <Star style={{color:"#f4b400"}}/>
                    <Star /> */}
                </Span>

                <Price>$ {item.price}</Price>

            </Desc>


        </Container>
    )
}

export default FeatureItem