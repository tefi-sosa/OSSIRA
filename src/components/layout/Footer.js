import React from 'react'
import classes from './Footer.module.css'

export const Footer = () => {
  return (
    <footer id='footer'>
      <div className={classes.contact_icons}>
        <a href='https://www.twitter.com/' target="_blank" rel="noreferrer noopener"><i className={`fa-brands fa-twitter fa-xl ${classes.icon}`}></i></a>
        <a href='https://www.instagram.com/' target="_blank" rel="noreferrer noopener"><i className={`social-icon fa-brands fa-instagram fa-xl ${classes.icon}`}></i></a>
        <a href='https://www.tiktok.com/' target="_blank" rel="noreferrer noopener"><i className={`social-icon fa-brands fa-tiktok fa-xl ${classes.icon}`}></i></a>
        <a href='https://www.facebook.com/' target="_blank" rel="noreferrer noopener"><i className={`social-icon fa-brands fa-facebook fa-xl ${classes.icon}`}></i></a>
      </div>
      <p class="copyright">Copyright © Ossira 2022</p>
    </footer>
  )
}
