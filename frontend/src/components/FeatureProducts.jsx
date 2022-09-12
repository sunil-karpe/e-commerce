import styled from "styled-components";
import FeatureItem from "./FeatureItem";
import { mobile } from "../responsive"
import { useEffect,useState } from "react";
import axios from "axios";

const Section = styled.section`
  text-align:center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  margin-top:20vh;
  ${mobile({ marginTop: '5vh' })};
  

`
const Container = styled.div`

`
const Heading = styled.h2`
  font-size:40px;
  ${mobile({ display: 'none' })};
`

const Note = styled.p`
    margin-top:0;
   
`

const FeaturesContainer = styled.div`
  width:85%;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  margin-top:10vh;
  column-gap:30px;
  row-gap:20px;
  // background-color:yellow;
  ${mobile({ marginTop: '10px', width: "100vw", columnGap: "5px", rowGap: "5px" })};
  
`



const FeatureProducts = () => {

  const [products, setProducts] = useState([]);


  useEffect(() => {

    const getProducts = async () => {

      try {

        const res = await axios.get( "https://buyerfriendly.herokuapp.com/products");
      

        setProducts(res.data);


      } catch (error) {
        console.log(error)
      }
    }

    getProducts();

  }, [])


  return (
    <Section>
      <Heading>Featured Products</Heading>
      <Note>Summer Collection New Modern Designs</Note>

      <FeaturesContainer>
        {/* <FeatureItem />
            <FeatureItem />
            <FeatureItem />
            <FeatureItem />
            <FeatureItem />
            <FeatureItem /> */}


        {products.map((item, i = 0) => {

          return <FeatureItem item={item} key={i} />
        })}
      </FeaturesContainer>

    </Section>
  )
}

export default FeatureProducts