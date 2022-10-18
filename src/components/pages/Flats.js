import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
const { REACT_APP_PORT } = process.env

const Flats = () => {
  // const [flats, getFlats] = useState()

  const getFlatShoes = () => {
    axios
      .get(`http://localhost:4040/product/flat`)
      .then((res) => {
        console.log(res.data)
      })
  }

  useEffect(() => {
    getFlatShoes()
  }, [])

  return (
    <div>Flats

    </div>
  )
}

export default Flats