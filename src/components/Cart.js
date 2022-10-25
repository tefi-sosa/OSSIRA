import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classes from './Cart.module.css'
import axios from 'axios'
import { resetCart } from '../store/cartSlice'

import CheckoutCartItem from './CheckoutCartItem'
import Total from './Total'
import { Navigate, useNavigate } from 'react-router-dom'

export const Cart = () => {

  const url = `http://localhost:4040`

  const cart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // console.log(cart)
  let token = localStorage.getItem('token')
  let userId = localStorage.getItem('userId') 

  const handleAddToOrders = () => {
    axios
    .post(`${url}/orders/${userId}`, {cart}, {headers: {authorization: token}})
    .then((res) => {
      // console.log('ADDED')
      console.log(res.data)
    })
  }

  const handleCheckOut = () => {
    token && handleAddToOrders()
    navigate('/checkout')
    dispatch(resetCart())
  }

  return (
    <div className={classes.cart}>
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
              <button
                onClick={() => {
                  handleCheckOut()
                }}
              >Checkout</button>
            </div>              

          </>
        )}
      </div>

    </div>
  )
}
