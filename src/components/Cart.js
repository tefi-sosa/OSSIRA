import React from 'react'
import { useSelector } from 'react-redux'

import CheckoutCartItem from './CheckoutCartItem'
import Total from './Total'

export const Cart = () => {

  const cart = useSelector((state) => state.cart.cart)
  console.log(cart)

  return (
<div className="cart">
      <div className="cart__left">
        <div>
          <h2>SHOPPING CART</h2>
          <div className='product_container'>
            {cart.length === 0 ? (<p>You have no items added to the cart</p>) : (
          cart.map((item) => (
            <CheckoutCartItem
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price} 
              quantity={item.quantity}
            />
          ))              
            )}

          </div>
        </div>
      </div>

      <div className="cart__right">
        <Total />
      </div>

    </div>
  )
}
