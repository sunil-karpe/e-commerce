import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import {items} from "../data";
import { mobile } from "../responsive";

const Container=styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({flexDirection:"column"})};
    
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