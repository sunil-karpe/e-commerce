
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  
    display:flex;
    height:40vh;
    justify-content:space-between;
    flex-wrap:wrap;
    
`
const Left = styled.div`
    
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;   
`
const Logo = styled.h1``

const Desc = styled.p`
    margin:20px 0px;
`

const SocialContainer = styled.div`
    display:flex;

`

const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:#${props => props.color};
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
    
    `


const Center = styled.div`
    flex:1;
    padding:20px;
    //background-color:yellow;
    
    `

const Title =styled.h3`
    margin-bottom:30px;
`
const List =styled.ul`
    display:flex;
    list-style:none;
    margin:0px;
    padding:0px;
    flex-wrap:wrap;
   
`
const ListItem =styled.li`
    width:50%;
    margin-bottom:10px;


`


const Right = styled.div`
    
    flex:1;
    padding:20px;
    //background-color:green;
`
const ContactItem = styled.div`
    
  display:flex;
  align-items:center;
  margin-bottom:20px;

`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Kharido</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus expedita incidunt sint maxime mollitia provident consectetur magni voluptates excepturi molestias!</Desc>
                <SocialContainer>

                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="3B5999">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>

            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Account</ListItem>
                    <ListItem>Terms</ListItem>
                   
                </List>
            </Center>

            <Right>
                <Title>Contact</Title>

                <ContactItem><Room style={{marginRight:"10px"}}/> 745 Baker street London 98345</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}/> +1 345 345 643</ContactItem>
                <ContactItem><MailOutline style={{marginRight:"10px"}}/> connect@kharido.com</ContactItem>
            </Right>
        </Container>
    )
}

export default Footer