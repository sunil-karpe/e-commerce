import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Info = styled.div`
    opacity:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.2);
    position:absolute;
    left:0;
    top:0;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:all 0.5s ease;
    cursor:pointer;


`

const Container = styled.div`
    flex:1;
    margin-left:20px;
    margin-bottom:20px;
    min-width:280px;
    height:350px;
    display:flex;
 
    justify-content:center;
    align-items:center;
    background-color:gray;
    position:relative;

    &:hover ${Info}{
        opacity:1;
    }

`

const Circle = styled.div`

`
const Img = styled.img`
    height:100%;
    width:100%;
    object-fit:cover;
   

`


const Icon = styled.div`
    width:35px;
    height:35px;
    background-color:white;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:6px;
    transition:all 0.5s ease;

    &:hover{
        background-color:#e6f5f5;
        transform:scale(1.1);
    }
  


`

const ProductItem = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Img src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <Link to={`/product/${item._id}`}>

                        <SearchOutlined />
                        

                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>

            </Info>

        </Container>
    )
}

export default ProductItem