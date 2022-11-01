import {useState, useEffect} from 'react'
import axios from 'axios'
import { TailSpin } from 'react-loading-icons'
import ProductCard from '../ProductCard'


const Sneakers = () => {
  const [sneakers, getSneakers] = useState([])
  const [loading, setLoading] = useState(true)

  const getSneakersShoes = () => {
    axios
      .get(`/api/product/sneaker`)
      .then((res) => {
        console.log(res.data)
        getSneakers(res.data)
        setLoading(false)
      })
  }

  useEffect(() => {
    getSneakersShoes()
  }, [])

  return (
    <div className='product_container'>
    {!loading ? (sneakers.map((s, i) => {
      return <ProductCard key={s.product_id} id={s.product_id} name={s.product_name} imgURL={s.product_img} price={s.product_price}/> }
    )) : ( <div>
      <TailSpin stroke="#000000" strokeOpacity={.9} speed={.75} height='5rem' />
      <p>Loading...</p>
    </div> ) 
  }
  </div>
  )
}

export default Sneakers