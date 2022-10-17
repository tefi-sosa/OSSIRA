import React from 'react'
import banner from '../images/banner.webp'
import secondBanner from '../images/home.webp'

import { NavLink, useNavigate } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <NavLink to='all'><img src={banner} alt=''></img></NavLink>

      <i class="fa-solid fa-truck-fast"></i>
      <h2>Shipping</h2>
      <p>Free nation-wide shipping on any of our products</p>

      <i class="fa-solid fa-store"></i>
      <h2>Store pickup</h2>
      <p>Come to pick up your order at no cost to any of our branches</p>

      <i class="fa-solid fa-arrow-rotate-left"></i>
      <h2>Returns and Exchanges</h2>
      <p>You have 30 days to change your order</p>

      <NavLink to='sandals'><img src={secondBanner} alt=''></img></NavLink>
    </div>
  )
}

export default Home