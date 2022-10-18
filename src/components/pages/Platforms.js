import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
const { REACT_APP_PORT } = process.env

const Platforms = () => {

  const getPlatformShoes = () => {
    axios
      .get(`http://localhost:4040/product/platform`)
      .then((res) => {
        console.log(res.data)
      })
  }

  useEffect(() => {
    getPlatformShoes()
  }, [])

  return (
    <div>Platforms</div>
  )
}

export default Platforms