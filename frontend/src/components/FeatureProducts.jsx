import styled from "styled-components";
import FeatureItem from "./FeatureItem";
import { mobile } from "../responsive"

const Section=styled.section`
  text-align:center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  margin-top:20vh;
  ${mobile({marginTop:'5vh' })};
  

`
const Container=styled.div`

`
const Heading=styled.h2`
  font-size:40px;
  ${mobile({display:'none' })};
`

const Note =styled.p`
    margin-top:0;
   
`

const FeaturesContainer=styled.div`
  width:75%;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  margin-top:10vh;
  column-gap:20px;
  row-gap:20px;
  // background-color:yellow;
  ${mobile({marginTop:'10px'})};
  
`



const FeatureProducts = () => {
  return (
    <Section>
        <Heading>Featured Products</Heading>
        <Note>Summer Collection New Modern Design</Note>

        <FeaturesContainer>
            <FeatureItem />
            <FeatureItem />
            <FeatureItem />
            <FeatureItem />
            <FeatureItem />
            <FeatureItem />
        </FeaturesContainer>

    </Section>
  )
}

export default FeatureProducts