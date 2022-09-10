import { Star } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
// background-color:green;
    width:15%;
    padding:10px 12px;
    border: 1px solid #cce7d0;
    min-width:250px;
    border-radius:25px;
    cursor:pointer;
    // box-shadow:20px 20px 30px rgba(0,0,0,0.02);
    box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition:0.2s ease;

    &:hover {
        box-shadow:20px 20px 30px rgba(0,0,0,0.06);
        border: 1px solid teal;
        
    }

`

const Img = styled.img`
height:40vh;
    width:100%;
    object-fit:cover;
    border-radius:20px;

    
`

const Desc = styled.div`
    text-align:start;
    padding:10px 0;
`

const Span = styled.span`
    color:#606063
`

const Title = styled.h5`

    padding-top:8px;
    color:#1a1a1a;
    font-size:14px;

`
const Price = styled.h4`
    margin-bottom:0;
`



const FeatureItem = () => {
    return (
        <Container>
            <Img src="https://img.freepik.com/free-photo/fashion-men-accessories-new-trendy-blue-jeans_1357-154.jpg?size=626&ext=jpg&ga=GA1.2.1324430802.1656413860" />

            <Desc>
                <Span>Men</Span>
                <Title>Peter England</Title>
                <Span>
                    <Star style={{color:"#f4b400"}}/>
                    <Star style={{color:"#f4b400"}}/>
                    <Star style={{color:"#f4b400"}}/>
                    <Star style={{color:"#f4b400"}}/>
                    <Star />
                </Span>

                <Price>$ 56</Price>

            </Desc>


        </Container>
    )
}

export default FeatureItem