import styled from "styled-components"

const Container=styled.div`
    height:30px;
    background-color:teal;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Annoucement = () => {
  return (
    <Container>
        Awesome Sale! Get discount upto $60 for each item.
    </Container>
  )
}

export default Annoucement