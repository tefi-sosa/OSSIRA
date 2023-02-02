import React from 'react'
import { NavLink} from 'react-router-dom'
import classes from './WishlistCard.module.css'

const WishlistCard = ( { id, name, imgURL, price, children} ) => {
  return (
    
      <div className={classes.product_card}>
<NavLink to={`/product-detail/${id}`}>
        <img className={classes.card_img} src={imgURL} alt=''></img>
        {children}
        <hr className={classes.card_hr}/>
        <h4>{name.toUpperCase()}</h4>
        <h5>${price}</h5>
    </NavLink>
      </div>

  )
}

export default WishlistCard