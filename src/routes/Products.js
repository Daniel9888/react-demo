import { Navbar } from "../components/Navbar"
import Footer from "../components/Footer"
import ProductHero from "../components/ProductHero"
import { ProductData } from '../components/ProductData'
import { ProductCard } from "../components/ProductCard"
import "../ProductsStyle.css";


function Products(){
    return(
        <div>
            <Navbar active/>
            <ProductHero />
            <div className="product">
            {" "}
            <div className="productBG">
                {ProductData.map((product) =>(<ProductCard data={product}/>))}
            </div>
            </div>
            <Footer/>
        </div>
    )

}

export default Products

