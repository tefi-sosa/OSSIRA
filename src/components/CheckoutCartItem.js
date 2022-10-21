import React from 'react'
import { incrementQuantity, decrementQuantity, removeItem} from '../store/cartSlice'
import { useDispatch } from 'react-redux'
import classes from './CheckoutCartItem.module.css'


const CheckoutCartItem = ( {id, image, title, price, quantity=0} ) => {

  const dispatch = useDispatch()

  return (
    <div className={classes.cartItem}>
      <img className={classes.cartItem_img} src={image} alt='item'/>
      <div className="cartItem__info">
        <p className="cartItem__title">{title}</p>
        <p className="cartItem__price">
          <small>$</small>
          <strong> {price}</strong>
        </p>
        <hr/>
        <div className={classes.cartItem_quantity}>
          <button className={classes.quantity_btn} onClick={() => dispatch(decrementQuantity(id))}>-</button>
          <p>{quantity}</p>
          <button className={classes.quantity_btn} onClick={() => dispatch(incrementQuantity(id))}>+</button>
        </div>
        <button
          className='cartItem__removeButton' 
          onClick={() => dispatch(removeItem(id))}>
            Remove
        </button>
      </div>
    </div>
  )
}

export default CheckoutCartItem