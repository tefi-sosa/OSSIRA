import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams} from 'react-router-dom'
import { TailSpin } from 'react-loading-icons'

const DetailProduct = () => {

  const { id } = useParams();  
  const [shoe, setShoe] = useState({})
  const [loading, setLoading] = useState(true)

  const url = `http://localhost:4040`
  let imgURL = shoe.product_img
  console.log(shoe)

  useEffect(() => {
    axios
        .get(`${url}/product-detail/${id}`)
        .then((res) => {
            setShoe(res.data[0])
            setLoading(false)
        })
  }, [])

  return (
    <div>
      {loading ? (
        <div>
          <TailSpin stroke="#000000" strokeOpacity={.9} speed={.75} height='5rem' />
          <p>Loading...</p>
        </div>
      ) : (
        <div>
        <img src={imgURL} alt=''></img>
        <h2>{shoe.product_name}</h2>
        <h3>$ {shoe.product_price}</h3>
        <hr/>
        <p>Description</p>
        <button>Add to Cart</button>
        <i className="fa-regular fa-heart"></i>
        <i className="fa-solid fa-plus"></i>
        <i className="fa-solid fa-minus"></i>
        </div>
      )}
    </div>
  )
}

export default DetailProduct