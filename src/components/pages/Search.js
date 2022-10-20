import {useState} from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'

const Search = () => {

  const [allShoes, setShoes] = useState([])
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const getShoes = () => {
    axios
      .get('http://localhost:4040/product')
      .then((res) => {
        console.log(res.data)
        setShoes(res.data)
      })
  }

  const handleSearch = () => {

  }

  return (
    <div>
      <i className="fa-solid fa-magnifying-glass fa-xl"></i>
      <button onClick={getShoes}>Search</button>
      <input onClick={getShoes} placeholder='Search our store' onChange={(e) => {setSearch(e.target.value)}}/>
      <div className='search-container'>
        {search.length > 1 && allShoes.filter((p) => {
          let shoeName = p.product_name.toLowerCase()
          let shoeType = p.product_type.toLowerCase()
          let searchImput = search.toLowerCase()

          if(shoeName.includes(searchImput)) return p
          if(shoeType.includes(searchImput)) return p
        })
        .map((p, i) => {
          return <NavLink to={`/product-detail/${p.product_id}`} onClick={() => {
            navigate(`/product-detail/${p.product_id}`)
            setSearch("")}}><h3>{p.product_name}</h3></NavLink>
        })}
      </div>
    </div>
  )
}

export default Search