import { mobile } from "../../responsive"
import styled from "styled-components"

export const Container = styled.div`
    height:60px;
    //background-color:grey;
     ${mobile({})};
   
`
export const Wrapper = styled.div`
    padding:5px 20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    ${mobile({ padding: "10px" })};

`

export const Left = styled.div`
    
    display:flex;
    flex:1;
    align-items:center;

`
export const Language = styled.span`
    cursor:pointer;
    font-size:14px;
    ${mobile({ display: 'none' })};
`

export const SearchContainer = styled.div`
    border:0.5px solid lightgrey;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
    ${mobile({ marginLeft: "0px" })};

`

export const Input = styled.input`
    border:none;
    background-color:transparent;
    ${mobile({ width: "20vw" })};
    outline:none;

`


export const Logo = styled.h2`
   font-weight:bold;
   //margin-top:10px;
   color:purple;
 
   ${mobile({ fontSize: "20px" })};

   

`

export const Center = styled.div`
   
    flex:1;
    text-align:center;
`
export const Right = styled.div`
    
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile({ justifyContent: "flex-start", flex: "2" })};

    

`

export const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    ${mobile({ marginLeft: "8px" })};
    text-underline:none;
    // color:orange;
    text-decoration:none;

    
`