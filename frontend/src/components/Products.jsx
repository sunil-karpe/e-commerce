import styled from "styled-components"
import ProductItem from "./ProductItem"
import { products as prod } from "../data"
import { useState, useEffect } from "react"
import axios from "axios"
import {mobile} from "../responsive"

const Section = styled.section`
  text-align:center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  margin-top:20vh;
  ${mobile({ marginTop: '5vh' })};
  

`

const Heading = styled.h2`
  font-size:40px;
  ${mobile({ display: 'none' })};
`

const Note = styled.p`
    margin-top:0;
   
`


const Container = styled.div`

    // padding:20px 0px;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    // background-color:red;
    
    column-gap:20px;
    row-gap:10px;

`



const Products = ({ cat, sort, filter,heading =true}) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([products]);
  // console.log(filter);
  // console.log(filteredProducts)
  // console.log(products)

  useEffect(() => {

    const getProducts = async () => {

      try {

        const res = await axios.get(cat ? `https://buyerfriendly.herokuapp.com/products?category=${cat}` : "https://buyerfriendly.herokuapp.com/products");
        console.log(cat);

        setProducts(res.data);


      } catch (error) {
        console.log(error)
      }
    }

    getProducts();

  }, [cat])




  useEffect(() => {



    cat ?
      setFilteredProducts(
        products.filter((item) => {
          return Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        })
      ) : setFilteredProducts(products)




  }, [products, cat, filter])

  return (
    <Section>
      {heading&&<Heading>New Arrivals</Heading>}
      
      {heading&&<Note>Summer Collection New Modern Design</Note>}
      

      <Container>



        {filteredProducts.map((item, i = 0) => {

          return <ProductItem item={item} key={i} />
        })}
      </Container>
    </Section>
  )
}

export default Products