import { Badge } from "@material-ui/core"
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import { Link } from "react-router-dom"
import { Container, Wrapper, Left, Center, Right, Language, SearchContainer, Input, Logo, MenuItem } from "./style/navbar"
import { useSelector } from "react-redux"

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);
    // const total=useSelector(state=>state.cart.total);
    // const myproduct=useSelector(state=>state.cart.products);
    // console.log(myproduct);
    const user = useSelector(state => state.user.currentUser);

    return (
        <Container>

            <Wrapper>
                <Left>
                    {/* <Language>EN </Language> */}
                    <SearchContainer>
                        <Input placeholder="Find here.."></Input>
                        <Search style={{ color: "gray", fontSize: 16 }}></Search>
                    </SearchContainer>
                </Left>

                <Center>

                    <Logo>
                        <Link to="/" style={{color:"teal", textDecoration:"none"}}>
                            Buyerfriendly
                        </Link>
                    </Logo>

                </Center>

                <Right>
                    {
                        !user ? <>
                            <Link to="/register" style={{color:"black", textDecoration:"none"}}>
                                <MenuItem >REGISTER</MenuItem>
                            </Link>
                            <Link to="/login" style={{color:"black", textDecoration:"none"}}>
                                <MenuItem>LOG IN</MenuItem>
                            </Link>

                        </> : <>
                            <Link to="/logout">
                                <MenuItem>LOGOUT</MenuItem>
                            </Link>

                            <Link to="/cart">

                                <MenuItem>
                                    <Badge color="primary" badgeContent={quantity} overlap="circular">
                                        <ShoppingCartOutlined></ShoppingCartOutlined>
                                    </Badge>
                                </MenuItem>
                            </Link>
                        </>
                    }



                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar