import Navbar from "../components/Navbar"
import Announcement from "../components/Annoucement"
import Footer from "../components/Footer"
import styled from "styled-components"
import { Add, Remove } from "@material-ui/icons"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import StripeCheckout from "react-stripe-checkout"
import axios from "axios"
import { publicRequest } from "../requestMethods"
import { useNavigate } from "react-router"
import { mobile } from "../responsive"
import { incrementQuantity, decrementQuantity, removeItem } from "../redux/cartRedux"


const Container = styled.div``

const Wrapper = styled.div`
    padding:20px;
`
const Title = styled.h1`
    margin:0px;
    text-align:center;
`
const Message = styled.p`
    margin:0px;
    text-align:center;
`
const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`
const TopButton = styled.button`
    padding:10px;
    font-weight:600;
    cursor:pointer;
    flex:1;
    border:${props => props.type === "filled" && "none"};
    background-color:${props => props.type === "filled" ? "black" : "white"};
    color:${props => props.type === "filled" ? "white" : "black"};

`

const TopTexts = styled.div`
    text-align:center;
    flex:4;
`

const TopText = styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin:0px 10px;
   

`

const Bottom = styled.div`

    display:flex;
    justify:content:space-between;
    margin-top:20px;
    ${mobile({ flexDirection: 'column', justifyContent: 'space-between', rowGap: '50px', columnGap: '100px' })};

`
const Info = styled.div`
    flex:3;
    margin-top:10px;
    display:flex;
    flex-direction:column;
    row-gap:20px;
`
const Product = styled.div`
    display:flex;
    justify-content:space-between;
    column-gap:100px;
    ${mobile({ flexDirection: 'column', justifyContent: 'space-between', rowGap: '50px', columnGap: '100px' })};

`
const ProductDetail = styled.div`
    flex:2;
    display:flex;




`

const ProductName = styled.span`
    font-size:14px;
`
const ProductId = styled.span`
font-size:10px;
`
const ProductColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props => props.color}

`
const ProductSize = styled.span`

`


const Image = styled.img`
    width:200px;
`
const Details = styled.div`
    display:flex;
    justify-content:space-around;
    flex-direction:column;
    margin-left:20px;
`

const PriceDetail = styled.div`

    flex:1;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    ${mobile({ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' })};

`

const ProductAmountContainer = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
    ${mobile({ margin: 0 })};
`
const ProductAmount = styled.div`
    font-size:24px;
    margin:5px;
    ${mobile({ margin: 0 })};
`
const ProductPrice = styled.div`

    font-size:30px;
    font-weight:200;
`

const Hr = styled.hr`
    background-color:#eee;
    border:none;
    height:1px;
`




const Summary = styled.div`
    flex:1;
    //background-color:yellow;
    border:0.5px solid lightgray;
    border-radius:10px;
    padding:20px;
    height:50vh;

`

const SummaryTitle = styled.h1`
    margin:0px;
    font-weight:200;

`
const SummaryItem = styled.div`
    display:flex;
    justify-content:space-between;
    margin:30px 0px;
    font-weight:${props => props.type === "total" && "500"};
    font-size:${props => props.type === "total" && "24px"};

`

const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`
const Button = styled.button`
    width:100%;
    padding:10px;
    background-color:teal;

   

`




const Cart = () => {

    const cart = useSelector(state => state.cart);
    // console.log(cart.products);
    const KEY = "pk_test_51HEbsEIcLXDPuEHqJaFkALmSiRTCivfVbDX0zRVkDSzEBKlC2wEjHDjOWPcCl4HyDuWcw67Wx7uKXsxig4xSLpTM00ooZSKKzJ"
    const [stripeToken, setStripeToken] = useState(null);
    const history = useNavigate();

    const dispatch = useDispatch();

    const handleAdd = (_id, quantity) => {

        dispatch(incrementQuantity({ _id }))
    }
    const handleRemove = (_id, quantity) => {
        if (quantity < 1) dispatch(removeItem({ _id }))
        dispatch(decrementQuantity({ _id }))
    }

    const onToken = (token) => {
        setStripeToken(token);
    }
    console.log(stripeToken);

    useEffect(() => {

        const makePayment = async () => {

            try {
                const res = await axios.post("https://buyerfriendly.herokuapp.com/api/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100,
                })
                console.log(res.data);

                alert("Payment done!");
                history("/success", { replace: true });

            } catch (error) {
                console.log(error)
            }
        }

        stripeToken && makePayment()
    }, [stripeToken])


    return (
        <Container>
            <Navbar />
            <Announcement />

            <Wrapper>
                <Title>YOUR BAG</Title>
                {/* <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(1)</TopText>
                        <TopText>Your Wishlist(3)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT</TopButton>

                </Top> */}
                <Bottom>
                    <Info>
                        {cart.products.map((product, i) => {
                            return (<Product key={i}>
                                <ProductDetail>
                                    <Image src={product.img} />
                                    <Details>
                                        <ProductName>{product.title}</ProductName>
                                        <ProductName>{product.desc}</ProductName>
                                        <ProductColor color={product.color} />
                                        <ProductSize><b>Size</b>: {product.size}</ProductSize>
                                        <ProductId>{product._id}</ProductId>
                                    </Details>

                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Remove onClick={() => { handleRemove(product._id, product.quantity) }} />
                                        <ProductAmount>{product.quantity}</ProductAmount>
                                        <Add onClick={() => { handleAdd(product._id, product.quantity) }} />
                                    </ProductAmountContainer>
                                    <ProductPrice>$ {product.quantity * product.price}</ProductPrice>
                                </PriceDetail>

                                <Hr />
                            </Product>)


                        })}
                        {cart.products.length === 0 && <Message>No products added!</Message>}


                        {/* <Product>
                            <ProductDetail>
                                <Image src="https://img.freepik.com/free-photo/black-t-shirt-front-isolated_125540-808.jpg?size=626&ext=jpg&ga=GA1.2.1196955350.1656685555" />
                                <Details>
                                    <ProductName>Denim slimfit</ProductName>
                                    <ProductId>:525478</ProductId>
                                    <ProductColor color="yellow" />
                                    <ProductSize><b>Size</b>: 35</ProductSize>
                                </Details>

                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 320</ProductPrice>
                            </PriceDetail>
                        </Product> */}
                    </Info>

                    {cart.products.length !== 0 &&
                        <Summary>
                            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Item Price</SummaryItemText>
                                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Estimated Delivery</SummaryItemText>
                                <SummaryItemPrice>$ 6.8</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Shipping Discount</SummaryItemText>
                                <SummaryItemPrice>$ 5</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                            </SummaryItem>
                            <StripeCheckout
                                name="Buyerfriendly"
                                billingAddress
                                shippingAddress
                                description={`Your total is ${cart.total}`}
                                amount={cart.total * 100}
                                stripeKey={KEY}
                                token={onToken}

                            >

                                <button style={{
                                    color: "white",
                                    backgroundColor: "black",
                                    padding: "10px",
                                    cursor: "pointer"
                                }}>
                                    Pay Now
                                </button>
                            </StripeCheckout>
                        </Summary>
                    }
                </Bottom>

            </Wrapper>

            <Footer />


        </Container>
    )
}

export default Cart