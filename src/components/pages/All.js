import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
const { REACT_APP_PORT } = process.env

const All = () => {

  const getAllShoes = () => {
    axios
      .get(`http://localhost:4040/product`)
      .then((res) => {
        console.log(res.data)
      })
  }

  useEffect(() => {
    getAllShoes()
  }, [])

  return (
    <div>All</div>
  )
}

export default All
