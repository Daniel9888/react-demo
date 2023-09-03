import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Information from "../components/Information"
import { Navbar } from "../components/Navbar"






function Home(){
    return(
        <div className="home">
            <Navbar active/>
            <Hero />
            <Information/>
            <Footer/>
        </div>
    )
}

export default Home