import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { TailSpin } from 'react-loading-icons'
import ProductCard from '../ProductCard'


const Wishlist = () => { 
  const [wishlist, setWishlist] = useState([])
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  let token = localStorage.getItem('token')
  let userId = localStorage.getItem('userId')

  const url = `http://localhost:4040`

  const handleDeleteFav = (id) => {
    console.log(id)
    console.log(userId)
    axios
      .delete(`${url}/wishlist/${id}`, {headers: {authorization: token},
      params: {
        user: userId
      }})
    .then((res) => {
        console.log(res.data)
    })
  }

  useEffect(() => {
    axios
        .get(`${url}/wishlist`, {
          params: {
          user: userId
        }
      })
        .then((res) => {
            console.log(res.data)
            setWishlist(res.data)
            setLoading(false)
        })
  }, [])

  return (
    <div className='product_container'>
      {!loading ? (wishlist.map((s, i) => {
        return (
          <ProductCard id={s.product_id} name={s.product_name} imgURL={s.product_img} price={s.product_price} >
            <div class="close">
            <NavLink to={`/wishlist`}>
              <i className="fa-solid fa-xmark fa-xl" onClick={() => {handleDeleteFav(s.product_id)
              navigate('/favorites')}
              }></i>
            </NavLink>
            </div>
          </ProductCard> )}
      )) : ( <div>
        <TailSpin stroke="#000000" strokeOpacity={.9} speed={.75} height='5rem' />
        <p>Loading...</p>
      </div> ) 
      }
    </div>
  )
}

export default Wishlist