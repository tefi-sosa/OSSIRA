import {useState, useEffect} from 'react'
import axios from 'axios'
import ProductCard from './elements/ProductCard'
import { TailSpin } from 'react-loading-icons'

const Flats = () => {
  const [flats, getFlats] = useState([])
  const [loading, setLoading] = useState(true)

  const getFlatShoes = () => {
    axios
      .get(`/api/product/flat`)
      .then((res) => {
        console.log(res.data)
        getFlats(res.data)
        setLoading(false)
      })
  }

  useEffect(() => {
    getFlatShoes()
  }, [])

  return (
    <div className='product_container'>
      {!loading ? (flats.map((s, i) => {
          return <ProductCard key={s.product_id} id={s.product_id} name={s.product_name} imgURL={s.product_img} price={s.product_price}/> }
        )) : ( <div>
          <TailSpin stroke="#000000" strokeOpacity={.9} speed={.75} height='5rem' />
          <p>Loading...</p>
        </div> ) 
      }
    </div>
  )
}

export default Flats