// import './total.css'
import {useSelector, useDispatch } from 'react-redux'
import { setTotal } from '../store/cartSlice'

function Total() {

  const cart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch()

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    // dispatch(setTotal(totalPrice))
    return {totalPrice, totalQuantity}
  }
 
  return (
    <div className="total">
      <h2>ORDER SUMMARY</h2>
      <div>
        <p className="total__p">
          total ({getTotal().totalQuantity} items) 
          : <strong>${getTotal().totalPrice}</strong>
        </p>
      </div>
    </div>
  )
}

export default Total