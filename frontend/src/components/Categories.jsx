import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import {items} from "../data";
import { mobile } from "../responsive";

const Container=styled.div`
    display:flex;
    // justify-content:space-between;
    margin:10vh 0px;
    ${mobile({flexDirection:"column",border:'none'})};
    border-top:0.1px solid darkgrey;
    border-bottom:0.1px solid darkgrey;

    
`

const Categories = () => {
  return (
    <Container>
        
        {items.map((item,i=0)=>{
          return  <CategoryItem item={item} key={i}/>    

        })}


    </Container>
  )
}

export default Categories