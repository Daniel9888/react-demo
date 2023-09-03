import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { ProductData } from "../components/ProductData";
import { CartItem } from "../components/Cart-item";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import "../cart.css";
import Footer from "../components/Footer";

export const ShoppingCart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <Navbar/>
      <div>
      </div>
      <div className="cart">
        {ProductData .map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      <div className="btnBox">
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/products")}> Continue Shopping </button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
    </div>
  );
};