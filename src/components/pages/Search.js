import {useState} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import Modal from '../Modal'
import classes from './Search.module.css'

const Search = ( {onClose} ) => {

  const [allShoes, setShoes] = useState([])
  const [search, setSearch] = useState("")

  const getShoes = () => {
    axios
      .get('http://localhost:4040/product')
      .then((res) => {
        console.log(res.data)
        setShoes(res.data)
      })
  }

  return (
    <Modal onClose={onClose} >
    <div className={classes.search_section}>

      <div className={classes.search_main}>
        <i className="fa-solid fa-magnifying-glass fa-xl"></i>
        <input  className={classes.input} onClick={getShoes} placeholder='Search our store' value={search} onChange={(e) => {setSearch(e.target.value)}}/>
        <i className="fa-solid fa-xmark fa-xl" onClick={onClose} />         
      </div>
     
      <div className={classes.search_container}>
        {search.length > 1 && allShoes.filter((p) => {
          let shoeName = p.product_name.toLowerCase()
          let shoeType = p.product_type.toLowerCase()
          let searchImput = search.toLowerCase()

          if(shoeName.includes(searchImput)) return p
          if(shoeType.includes(searchImput)) return p
        })
        .map((p, i) => {
          return <NavLink to={`/product-detail/${p.product_id}`} onClick={() => setSearch("")} ><h4>{p.product_name.toUpperCase()}</h4></NavLink>
        })}
      </div>
    </div>
    </Modal>
  )
}

export default Search