import "../InformationStyle.css"
import nylon from "../assets/nylon.jpg"
import nylon2 from "../assets/nylon2.webp"
import environment1 from "../assets/earth.jpg"
import environment2 from "../assets/recycle.webp"

function Information(){
    return(
    
    <div className="infopage">
        <div className="information">
            <h1>Marterial</h1>
            <div className="box1">
                <div className="nylonimg">
                    <img id="nylon1"alt="nylon" src={nylon}/>
                    <img id="nylon2" alt="nylon2" src={nylon2}/>
                </div>
                    <div className="nylon-text">
                        <p>Nylon camping tents are lightweight and easy to set up, making them a popular choice for backpackers and hikers.<br/>
                            These tents are typically made of a nylon material that is both durable and water-resistant. <br/>
                            They are available in a variety of sizes and styles, from small one-person tents to large family-sized tents.</p>
                    </div>
            </div>
        </div>

        <div className="information2">
            <h1>Environment</h1>
            <div className="box2">
                <div className="environmentimg">
                    <img id="environment1"alt="environment1" src={environment1}/>
                    <img id="environment2" alt="environment2" src={environment2}/>
                </div>
                    <div className="environment-text">
                        <p> 100% recycled tent fabric to produce sustainable camping tents that don’t compromise on durability or lightweight design. Their lifetime warranty is the s’mores at the end of the day.<br/>
                        Fight against climate change by taking the first step toward supporting the environment and eco camping trips to come.</p>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default Information