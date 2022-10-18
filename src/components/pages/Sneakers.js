import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
const { REACT_APP_PORT } = process.env


const Sneakers = () => {

  const getSneakersShoes = () => {
    axios
      .get(`http://localhost:4040/product/sneaker`)
      .then((res) => {
        console.log(res.data)
      })
  }

  useEffect(() => {
    getSneakersShoes()
  }, [])

  return (
    <div>Sneakers</div>
  )
}

export default Sneakers