import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Annoucement"
import Products from "../components/Products"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"
import { useLocation } from "react-router-dom"
import { useState } from "react";


const Container = styled.div``
const Title = styled.h1`
    margin:30px;

`
const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
    
`
const Filter = styled.div`
    margin:30px;
`
const FilterText = styled.span`
    font-size:20px;
    font-weight:600;    
`

const Select = styled.select`
    padding:10px;
    margin:0px 20px; 
`
const Option = styled.option``

const ProductList = () => {

    const location = useLocation();
    const [filter, setFilter] = useState({});
    const [sort, setSort] = useState("newest"); 
    const cat = location.pathname.split("/")[2];
    // console.log(cat);


    const handleFilter = (e) => {
        const value = e.target.value;
        setFilter({
            ...filter,
            [e.target.name]: value,
        })
    }


    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>{cat.toUpperCase()}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products: </FilterText>
                    {/* {console.log(filter)} */}
                    <Select name="color" onClick={handleFilter}>
                        <Option disabled>Color</Option>
                        <Option>Blue</Option>
                        <Option>Red</Option>
                        <Option>Yellow</Option>
                    </Select>
                    <Select name="size" onClick={handleFilter}>
                        <Option disabled>Size</Option>
                        <Option>xs</Option>
                        <Option>s</Option>
                        <Option>m</Option>
                        <Option>l</Option>
                        <Option>xl</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Filter: </FilterText>
                    {/* {console.log(sort)} */}
                    <Select onClick={(e) => { setSort(e.target.value) }}>
                        <Option value="newest">Newest</Option>
                        <Option value="price">Price (asc)</Option>
                        <Option value="lowest">Lowest (desc)</Option>

                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} sort={sort} filter={filter} />
            <NewsLetter />
            <Footer />


        </Container>
    )
}

export default ProductList