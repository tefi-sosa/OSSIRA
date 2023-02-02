import {useState, useEffect} from 'react'
import axios from 'axios'
import { TailSpin } from 'react-loading-icons'
import ProductCard from './elements/ProductCard'

const All = () => {
  const [all, getAll] = useState([])
  const [loading, setLoading] = useState(true)

  const getAllShoes = () => {
    axios
      .get(`/api/product`)
      .then((res) => {
        // console.log(res.data)
        getAll(res.data)
        setLoading(false)
      })
  }

  useEffect(() => {
    getAllShoes()
  }, [])

  return (
    <div className='product_container'>
    {!loading ? (all.map((s, i) => {
      return <ProductCard key={s.product_id} id={s.product_id} name={s.product_name} imgURL={s.product_img} price={s.product_price}/> }
    )) : ( <div>
      <TailSpin stroke="#000000" strokeOpacity={.9} speed={.75} height='5rem' />
      <p>Loading...</p>
    </div> ) 
  }
  </div>
  )
}

export default All
