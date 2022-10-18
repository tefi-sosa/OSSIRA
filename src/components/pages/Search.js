import {useState} from 'react'
import axios from 'axios'

const Search = () => {

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

  const handleSearch = () => {

  }

  return (
    <div>Search
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
          return <h1>{p.product_name}</h1>
        })}
      </div>
    </div>
  )
}

export default Search