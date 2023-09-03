import "../ProductHeroStyle.css";
import bgvideo2 from "../assets/bgvideo2.mp4";



function ProductHero(){
    return(
        <>
            <div className="proudct-hero">
                <video id="bgvideo2" src={bgvideo2} autoPlay loop muted/>
                <div className="proudct-hero-text">
                    <h1>Camping tents for different needs are available now.</h1>
                    <h3>Explore the wild</h3>
                </div>
            </div>
        </>
    )
}

export default ProductHero;