import React, { useState } from 'react'
import Header from '../Header'
import {Link} from 'react-scroll'

import '../../scss/pages/Home.scss'

function Home() {
  
  return (
    <>
      <section className="home-page" id="top">
        <div className="container">
        <Header />
          <h1 className="home__title">e-tron GT</h1>
          <div className="home-buttons">
            <Link to="config" spy={true} smooth={true} offset={0} duration= {500} className="home__button dark__button">Конфигуратор</Link>
            <Link to="exterior" spy={true} smooth={true} offset={0} duration= {500} className="home__button transp__button">Экстерьер</Link>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Home
