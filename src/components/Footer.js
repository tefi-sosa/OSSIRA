import React from 'react'

export const Footer = () => {
  return (
    <footer id='footer'>
      <div className='contact-icons'>
        <a href='https://www.twitter.com/' target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-twitter fa-xl"></i></a>
        <a href='https://www.instagram.com/' target="_blank" rel="noreferrer noopener"><i class="social-icon fa-brands fa-instagram fa-xl"></i></a>
        <a href='https://www.tiktok.com/' target="_blank" rel="noreferrer noopener"><i class="social-icon fa-brands fa-tiktok fa-xl"></i></a>
        <a href='https://www.facebook.com/' target="_blank" rel="noreferrer noopener"><i class="social-icon fa-brands fa-facebook fa-xl"></i></a>
      </div>
      <p class="copyright">Copyright © Ossira 2022</p>
    </footer>
  )
}
