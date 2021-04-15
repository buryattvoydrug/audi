import React from 'react'
import Nav from './Nav'

import '../scss/components/Footer.scss'

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <Nav/>
        <button className="to-top nav__item" >Home</button>
      </div>
      <div className="footer-container">
        <span className="copyright">
        © igor.radimov. The site is in the nature of a portfolio. 
        </span>
        <div className="social">
          <div className="social__item">
            <img src="/images/GitHub.svg"/>
          </div>
          <div className="social__item">
            <img src="/images/Instagram.svg"/>
          </div>
          <div className="social__item">
            <img src="/images/Telegram.svg"/>
          </div>
          <div className="social__item">
            <img src="/images/Vkontakte (VK).svg"/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
