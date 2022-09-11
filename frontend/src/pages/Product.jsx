import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Annoucement from "../components/Annoucement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { publicRequest } from "../requestMethods"
import { addProduct } from "../redux/cartRedux"
import { useDispatch } from "react-redux"
import { mobile } from "../responsive"

const Container = styled.div``
const Wrapper = styled.div`
    padding:50px 0px;
    display:flex;
    ${mobile({ flexDirection: 'column',alignItems:'center'})};
    justify-content:center;
    // background-color:red;
    

`

const ImgContainer = styled.div`
    flex:1;
    // background-color:yellow;
    ${mobile({ width: '100vw', marginBottom: '10vh' })};
    display:grid;
    place-items:center;

`
const Img = styled.img`
${mobile({ width: '80%' })};
width:350px;
object-fit:contain;

`
const InfoContainer = styled.div`
// background-color:green;
   
    flex:1;
    padding:10px 50px 0 0;
    margin:0px;
    ${mobile({ margin:'0px 20px' })};
`
const Title = styled.h1`
    margin:0px 0px;
    padding:0px 0px;
    font-weight:200;
`
const Desc = styled.p`
    margin:20px 0px;
`
const Price = styled.span`
    font-size:40px;
    font-weight:100;
`
const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
    margin:30px 0px;
    width:50%;
`
const Filter = styled.div`
    display:flex;
    align-items:center;
`
const FilterTitle = styled.span`
    font-size:20px;
    font-weight:200;
`
const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props => props.color};
    cursor:pointer;
    margin:0px 5px;
`
const FilterSize = styled.select`
    margin-left:10px;
    padding:5px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    // width:50%;
    display:flex;
    // justify-content:space-between;
    column-gap:20px;

`

const AmountContainer = styled.div`
    display:flex;
    align-items:center;
`

const Amount = styled.span`
    width:30px;
    height:30px;
    border:1px solid teal;
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;

`
const Button = styled.button`
    padding:10px;
    background-color:teal;
    cursor:pointer;
    color:white;
    border:none;
    display:inline-block;
    ${mobile({ width:'auto' })};
    transition:all 0.5s ease-out;

    &:hover{
        background-color:teal;
        color:white;
        box-shadow: 2px 2px 2px grey;

    }
`

const Product = () => {



    const location = useLocation();

    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    // console.log(id);

    useEffect(() => {
        const getProduct = async () => {

            const res = await publicRequest.get(`/products/find/${id}`);
            setProduct(res.data)

        }
        getProduct();

    }, [product, id]);

    const handleQuantity = (type) => {
        if (type === "desc") {

            quantity === 0 ? setQuantity(0) : setQuantity((preQuantity) => preQuantity - 1);
        } else {
            setQuantity((preQuantity) => preQuantity + 1);
        }
    }

    const handleClick = () => {
        dispatch(addProduct({ ...product, quantity }));
    }


    return (
        <Container>
            <Navbar />
            {/* <Annoucement /> */}
            <Wrapper>
                <ImgContainer>
                    <Img src={product.img} />
                </ImgContainer>
                <InfoContainer>

                    <Title>{product.title}</Title>

                    <Desc>{product.desc} Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quasi mollitia pariatur officiis. Debitis voluptatem molestiae laboriosam ipsa ab ratione deserunt provident possimus maxime harum, animi aliquid, similique illum maiores. Corporis suscipit natus odit minus velit repellat aut ullam consequatur?</Desc>
                    <Price >{"$" + product.price}</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color={product.color} />


                            {/* {product.color.map((c)=>{
                                return <FilterColor color={c} key={c}/>

                            })} */}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>{product.size}</FilterSizeOption>

                                {/* {product.color.map((c)=>{
                                return <FilterColor color={c} key={c}/>

                            })} */}
                            </FilterSize>
                        </Filter>

                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => { handleQuantity("desc") }} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => { handleQuantity("asc") }} />
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>

                    {/* <Desc>Kurta design:
                        Woven design yoke design
                        Straight shape
                        Regular style
                        Round neck, three-quarter regular sleeves
                        Calf length with straight hem
                        Cotton blend machine weave fabric</Desc> */}

                </InfoContainer>

            </Wrapper>
            <NewsLetter />
            <Footer />

        </Container>
    )
}

export default Product