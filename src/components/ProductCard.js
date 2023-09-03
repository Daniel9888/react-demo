import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/shop-context';
import "../ProductCardStyle.css"
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';

export const ProductCard = (props) => {
  const { id,productName, price, intro, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];


  return (
    <>
    <div className='cards'>
        <MDBCard className='mb-3'>
          <MDBCardImage position='top' src={productImage} alt='productimg' />
          <MDBCardBody>
            <MDBCardTitle>{productName}</MDBCardTitle>
            <MDBCardTitle> $ {price}</MDBCardTitle>
            <MDBCardText>{intro}</MDBCardText>
            <MDBCardText>
            <button className='cart-btn' to="/carts" onClick={() => addToCart(id)}>
              Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
              </button>        
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>  
      </div>
    </>
  );
};
