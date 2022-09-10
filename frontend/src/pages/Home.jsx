import Annoucement from "../components/Annoucement"
import Categories from "../components/Categories"
import FeatureProducts from "../components/FeatureProducts"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"
import Products from "../components/Products"
import Slider from "../components/Slider"



const Home = () => {
  return (
    <div>
        {/* <Annoucement/> */}
        <Navbar/>
        <Slider />
        <FeatureProducts />
        <Categories />
        <Products/>
        <NewsLetter/>
        <Footer />

    </div>
  )
}

export default Home