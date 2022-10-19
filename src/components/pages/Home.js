import React from 'react'
import banner from '../images/banner.webp'
import secondBanner from '../images/home.webp'

import classes from './Home.module.css'

import { NavLink, useNavigate } from 'react-router-dom'

const Home = () => {
  return (
    <section>
      <div className={classes.img_}>
        <NavLink to='all'><img className={classes.img_banner} src={secondBanner} alt=''></img></NavLink>
      </div>
      
      <div className={classes.features}>
        <div className={classes.features_item}>
          <i class="fa-solid fa-truck-fast fa-xl"></i>
          <h4>Shipping</h4>
          <p>Free nation-wide shipping on any of our products</p>
        </div>
        <div className={classes.features_item}>
          <i class="fa-solid fa-store fa-xl"></i>
          <h4>Store pickup</h4>
          <p>Come to pick up your order at no cost to any of our branches</p>
        </div>
        <div className={classes.features_item}>
          <i class="fa-solid fa-arrow-rotate-left fa-xl"></i>
          <h4>Returns and Exchanges</h4>
          <p>You have 30 days to change your order</p>           
        </div>
      </div>
      <div className={classes.img_}>
        <NavLink to='platforms'><img className={classes.img_banner} src={banner} alt=''></img></NavLink>
      </div>
          </section>
  )
}

export default Home