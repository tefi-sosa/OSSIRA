import { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { TailSpin } from 'react-loading-icons'
import classes from './DetailProduct.module.css'
import { addToCart } from '../../store/cartSlice'

const DetailProduct = () => {

  const { id } = useParams();  
  const [shoe, setShoe] = useState({})
  const [loading, setLoading] = useState(true)
  const [fav, setFav] = useState(false)
  const [message, setMessage] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const url = `http://localhost:4040`

    let token = localStorage.getItem('token')
    let userId = localStorage.getItem('userId')  

    const exp = Date.now() + 1000 * 60 * 60 

  const handleAddToFav = (id) => {
    axios
    .post(`/api/wishlist/${id}`, {userId}, {headers: {authorization: token}})
    .then((res) => {
      // console.log('ADDED')
      // console.log(res.data)
      setFav(true)
      setMessage('Product has been added to wishlist!')
      setTimeout(() => {
        setMessage('')
      }, 3000)
    })
  }

  const handleDeleteFav = (id) => {
    // console.log(id)
    // console.log(userId)
    axios
      .delete(`/api/wishlist/${id}`, {headers: {authorization: token},
      params: {
        user: userId
      }})
    .then((res) => {
        // console.log(res.data)
        setFav(false)
        setMessage('Product has been removed from wishlist!')
        setTimeout(() => {
					setMessage('')
				}, 3000)
    })
  }

  useEffect(() => {
    if (token) {
      axios
      .get(`/api/wishlist`, {
        params: {
        user: userId
      }
    })
      .then((res) => {
          // console.log(res.data)
          const wishlistData = res.data
          wishlistData.forEach((element) => { 
            if (element.product_id === shoe.product_id) {
            setFav(true)
          }
          })

      })
    }

  }, [shoe, fav])

  useEffect(() => {
    axios
        .get(`/api/product-detail/${id}`)
        .then((res) => {
            setShoe(res.data[0])
            setLoading(false)
        })
  
  }, [id])

  return (
    <div className='product_container'>
      {loading ? (
        <div>
          <TailSpin stroke="#000000" strokeOpacity={.9} speed={.75} height='5rem' />
          <p>Loading...</p>
        </div>
      ) : (
        <div className={classes.detail_container}>
          <img className={classes.detail_img} src={shoe.product_img} alt=''></img>
          <div className={classes.detail_info}>
            <h2>{shoe.product_name.toUpperCase()}</h2>
            <h3>$ {shoe.product_price}</h3>
            <hr/>
            <p>Description - Lorem ipsum dolor sit amet, eos ex duis omnis, solum doming atomorum vim at. </p>
            <p>Usu te vero legimus repudiandae. </p>
            <p>At vix iuvaret honestatis necessitatibus, regione fuisset delicatissimi ut nec. In falli alterum his. Eam forensibus honestatis te, id quo elit perpetua adipiscing.</p>
            <div className={classes.button_div}>
              <button 
                onClick={() => {
                  dispatch(addToCart({
                    id:shoe.product_id, title:shoe.product_name, image:shoe.product_img, price:shoe.product_price, expCart: exp
                  }))
                  setMessage('Product has been added to the cart!')
                  setTimeout(() => {
                    setMessage('')
                  }, 3000)
                  }
                }
              >Add to Cart</button>
              <div>
                {!token && <i onClick={() => {navigate('/auth')}} className="fa-regular fa-heart fa-xl"></i>}
                {token && (fav ? (
                  <i onClick={() => {handleDeleteFav(shoe.product_id)}} className="fa-solid fa-heart fa-xl"></i>
                ) : (
                  <i onClick={() => {
                    handleAddToFav(shoe.product_id)
                    setFav(false)
                  }} className="fa-regular fa-heart fa-xl"></i>
                ))
                }              
              </div>
            </div>
            <p className={classes.message}>{message}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default DetailProduct