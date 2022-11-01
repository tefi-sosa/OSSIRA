import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { TailSpin } from 'react-loading-icons'
import WishlistCard from '../WishlistCard'
import classes from './Wishlist.module.css'


const Wishlist = () => { 
  const [wishlist, setWishlist] = useState([])
  const [loading, setLoading] = useState(true)

  let token = localStorage.getItem('token')
  let userId = localStorage.getItem('userId')

  const url = `http://localhost:4040`

  const handleDeleteFav = (id) => {
    // console.log(id)
    // console.log(userId)
    axios
      .delete(`/api/wishlist/${id}`, {headers: {authorization: token},
      params: {
        user: userId
      }})
    .then((res) => {
        console.log(res.data)
        getAllFavorites()
    })
  }

  const getAllFavorites = () => {
    axios
    .get(`/api/wishlist`, {
      params: {
      user: userId
    }
  })
    .then((res) => {
        // console.log(res.data)
        setWishlist(res.data)
        setLoading(false)
    })
  }

  useEffect(() => {
    getAllFavorites()
  }, [])

  return (
    <div className={classes.product_container}>
      {!loading ? ( (wishlist.length === 0) ? (<p>You have no items added to the wishlist</p>) : ( wishlist.map((s, i) => {
        return (
          <WishlistCard key={s.product_id} id={s.product_id} name={s.product_name} imgURL={s.product_img} price={s.product_price} >
            <div className="close">
            <NavLink to={`/user/wishlist`}>
              <i className="fa-solid fa-xmark fa-xl x_close" onClick={() => {handleDeleteFav(s.product_id)
              getAllFavorites()
              }
              }></i>
            </NavLink>
            </div>
          </WishlistCard> )}
      )) 
      ) : ( <div>
        <TailSpin stroke="#000000" strokeOpacity={.9} speed={.75} height='5rem' />
        <p>Loading...</p>
      </div> ) 
      }
    </div>
  )
}

export default Wishlist