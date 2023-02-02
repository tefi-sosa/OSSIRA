import React from 'react'
import { incrementQuantity, decrementQuantity, removeItem} from '../../../store/cartSlice'
import { useDispatch } from 'react-redux'
import classes from './CheckoutCartItem.module.css'


const CheckoutCartItem = ( {id, image, title, price, quantity=0} ) => {

  const dispatch = useDispatch()

  return (
    <tr className={classes.cartItem}>
      <td >
        <div className={classes.product_table}>
          <img className={classes.cartItem_img} src={image} alt='item'/>
          <p className="cartItem_title">{title}</p>          
        </div>
      </td>
      <td>
        <p className="cartItem_price">
          <small>$</small>
          <strong> {price}</strong>
        </p>
      </td>  
        <td >
          <div className={classes.cartItem_quantity}>
            <button className={classes.quantity_btn} onClick={() => dispatch(decrementQuantity(id))}>-</button>
            <p>{quantity}</p>
            <button className={classes.quantity_btn} onClick={() => dispatch(incrementQuantity(id))}>+</button>
          </div>
        </td>
        <td>
          <button
            className='cartItem__removeButton' 
            onClick={() => dispatch(removeItem(id))}>
              Remove
          </button>
        </td>
    </tr>
  )
}

export default CheckoutCartItem