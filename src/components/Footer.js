import React from 'react'
import {Link} from 'react-scroll'

import '../scss/components/Footer.scss'
import '../scss/components/Nav.scss'

function Footer() {
  window.addEventListener('scroll', progressBar);

  

  function progressBar(e){
    let windowHeight = document.documentElement.scrollHeight-document.documentElement.clientHeight;
    let windowScroll=document.body.scrollTop || document.documentElement.scrollTop;

    let per = windowScroll/windowHeight*100;
    const progress=document.querySelector('.row');
    if(progress){
      progress.style.width=per+'vw';
    }



  }
  return (
    <footer>
    <div className="row"></div>
      <div className="footer-container">
      <Link to="exterior" spy={true} smooth={true} offset={0} duration= {500} className="nav__item">Экстерьер</Link>
      <Link to="interior" spy={true} smooth={true} offset={0} duration= {500} className="nav__item">Интерьер</Link>  
      <Link to="technic"  spy={true} smooth={true} offset={0} duration= {500} className="nav__item">Техника</Link>  
      <Link to="prefs" spy={true} smooth={true} offset={0} duration= {500} className="nav__item">Особенности</Link>
        <Link to="top" spy={true} smooth={true} offset={0} duration= {500} className="to-top nav__item" >Наверх</Link>
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
