import React from 'react'
import { useSelector } from 'react-redux'
import classes from './Cart.module.css'

import CheckoutCartItem from './CheckoutCartItem'
import Total from './Total'

export const Cart = () => {

  const cart = useSelector((state) => state.cart.cart)
  // console.log(cart)

  return (
    <div className="cart">
      <h2>SHOPPING CART</h2>

      <div className='container'>

        {cart.length === 0 ? (<p>You have no items added to the cart</p>) : (
          <>
            <table>
              <thead className={classes.titles}>
                <tr>
                  <th className={classes.title_left}><h4>PRODUCT</h4></th>
                  <th><h4>PRICE</h4></th>
                  <th><h4>AMOUNT</h4></th>      
                  <th className={classes.hide}><h4>Action</h4> </th>              
                </tr>
              </thead>
              <tbody className={classes.cart_item}>         
                {cart.map((item) => (
                  <>
                    <CheckoutCartItem
                      key={item.id}
                      id={item.id}
                      image={item.image}
                      title={item.title}
                      price={item.price} 
                      quantity={item.quantity}
                    /> 
                  </>                 
                ))}

              </tbody> 
            </table>
          
            <div className={classes.cart_right}>
              <Total />
              <button>Checkout</button>
            </div>              

          </>
        )}
      </div>

    </div>
  )
}
