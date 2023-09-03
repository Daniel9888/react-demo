import "../HeroStyle.css";
import bgvideo from "../assets/bgvideo.mp4";



function Hero(){
    return(
        <>
            <div className="hero">
                <video src={bgvideo} autoPlay loop muted/>
                <div className="hero-text">
                    <h1>The Best Camping Tent For You</h1>
                    <h3>Explore the wild</h3>
                    <a href="/products"><button className="hero-btn"> Buy Now </button></a>
                </div>
            </div>
        </>
    )
}

export default Hero;