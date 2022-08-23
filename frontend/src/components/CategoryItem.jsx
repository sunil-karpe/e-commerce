import styled from "styled-components"
import { mobile } from "../responsive"
import { Link } from "react-router-dom"



const Container = styled.div`
width:100%;
height:80vh;

margin:10px;
position:relative;
flex:1;
${mobile({ marginLeft: "0px" })};

`
const Img = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
  ${mobile({ height: "40vh" })};

`
const Info = styled.div`
  position:absolute;
  top:0;
  left:0;
  display:flex;
  width:100%;
  height:100%;
  justify-content:center;
  align-items:center;
  flex-direction:column;


`

const Title = styled.h1`
  color:white;

`
const Button = styled.button`
  background-color:white;
  color:gray;
  padding:10px;
  border:none;
  cursor:pointer;

`

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to ={ `/products/${item.cat}`}>
        <Img src={item.src} />
        <Info >
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>

      </Link>

    </Container>
  )
}

export default CategoryItem