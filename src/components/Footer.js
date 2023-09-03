import "../FooterStyle.css"
import {NavLink} from "react-router-dom";
import { Twitter } from 'react-bootstrap-icons';
import { Facebook } from 'react-bootstrap-icons';
import { Whatsapp } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';

const Footer =() => {
    return(
        <div className="footer">
            <div className="top">
                <h1>Entent</h1>
                <h2>We Explore With You.</h2>
            </div>
            <div className="footer-link">
                <ul>
                    <li className="pages">
                        <p>Pages</p>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/ProductData">ProductData</NavLink>
                        <NavLink to="/carts">Shopping Cart</NavLink>
                    </li>
                </ul>

                <ul className="contact">
                    <li>
                        <p>Contact</p>
                        <a href="/"><Twitter /></a>
                        <a href="/"><Facebook /></a>
                        <a href="/"><Whatsapp /></a>
                        <a href="/"><Instagram /></a>
                    </li>
                </ul>

                <div className="sign-in">
                    <p>Leave Your Email For More News !</p>
                   <div className="input-box"><input type="text" placeholder="Email"/>
                    <button>Submit</button></div> 
                </div>
            </div>
        </div>
    )
}

export default Footer