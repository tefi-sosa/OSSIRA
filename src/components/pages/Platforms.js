import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { TailSpin } from 'react-loading-icons'
import ProductCard from '../ProductCard'
const { REACT_APP_PORT } = process.env

const Platforms = () => {
  const [platforms, getPlatforms] = useState([])
  const [loading, setLoading] = useState(true)

  const getPlatformShoes = () => {
    axios
      .get(`http://localhost:4040/product/platform`)
      .then((res) => {
        console.log(res.data)
        getPlatforms(res.data)
        setLoading(false)
      })
  }

  useEffect(() => {
    getPlatformShoes()
  }, [])

  return (
    <div className='product_container'>
    {!loading ? (platforms.map((s, i) => {
      return <ProductCard id={s.product_id} name={s.product_name} imgURL={s.product_img} price={s.product_price}/> }
    )) : ( <div>
      <TailSpin stroke="#000000" strokeOpacity={.9} speed={.75} height='5rem' />
      <p>Loading...</p>
    </div> ) 
  }
  </div>
  )
}

export default Platforms