import styled from "styled-components"
import ProductItem from "./ProductItem"
import { products as prod } from "../data"
import { useState, useEffect } from "react"
import axios from "axios"

const Container = styled.div`

    padding:20px;
    display:flex;
    flex-wrap:wrap;

`

const Products = ({ cat, sort, filter }) => {

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
      ):setFilteredProducts(products)




  }, [products, cat, filter])

  return (
    <Container>

      {filteredProducts.map((item, i = 0) => {

        return <ProductItem item={item} key={i} />
      })}
    </Container>
  )
}

export default Products