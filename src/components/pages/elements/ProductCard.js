import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import classes from './ProductCard.module.css'

const ProductCard = ( { id, name, imgURL, price, children} ) => {
  return (
    <NavLink to={`/product-detail/${id}`}>
      <div className={classes.product_card}>
        <img className={classes.card_img} src={imgURL} alt=''></img>
        {children}
        <hr className={classes.card_hr}/>
        <h2>{name.toUpperCase()}</h2>
        <h3>${price}</h3>
      </div>
    </NavLink>
  )
}

export default ProductCard