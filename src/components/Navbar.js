import React, { useState } from "react";
import "../NavbarStyle.css";
import {NavLink, useLocation} from "react-router-dom";
import { CartCheck } from 'react-bootstrap-icons';



export const Navbar = () => {
    const location = useLocation();
    const {pathname} =location;
    const splitLocation = pathname.split("/");

    return(
        <div className="navbar">
            <div className="icon">Entent</div>
            <ul className="links" >
                <li className={splitLocation[1] === "" ? "active" : ""}> <NavLink to="/" className="nav-links">Home</NavLink></li>
                <li className={splitLocation[1] === "ProductData" ? "active" : ""}><NavLink to="/products" className="nav-links">Product</NavLink></li>
                <li className={splitLocation[1] === "carts" ? "active" : ""}><NavLink to="/carts" className="nav-links nav-cart"><CartCheck/></NavLink></li>
            </ul>
        </div>
    )}
// }"fas fa-times" : "fas fa-bar"