import React from 'react'

import '../scss/components/Footer.scss'
import '../scss/components/Nav.scss'

function Footer() {
  return (
    <footer>
      <div className="footer-container">
      <div  className="nav__item">Экстерьер</div>
      <div  className="nav__item">Интерьер</div>  
      <div  className="nav__item">Техника</div>  
      <div  className="nav__item">Особенности</div>
        <button className="to-top nav__item" >Наверх</button>
      </div>
      <div className="footer-container">
        <span className="copyright">
        © igor.radimov. Сайт имеет характер портфолио. 
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
