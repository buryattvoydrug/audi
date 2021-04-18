import React, { useState } from 'react'
import Header from '../Header'
import {Link} from 'react-scroll'
import { motion } from "framer-motion";


import '../../scss/pages/Home.scss'

function Home() {
  
  return (
    <>
      <section className="home-page" id="top">
        <div className="container">
        <Header />
          <motion.h1 animate={{ y:-20, opacity:1}} transition={{ duration: 0.7 }} className="home__title">e-tron GT</motion.h1>
          <motion.div animate={{ y:-20 , opacity:1}} transition={{ duration: 0.7 }} className="home-buttons">
            <Link to="config" spy={true} smooth={true} offset={0} duration= {500} className="home__button dark__button">Конфигуратор</Link>
            <Link to="exterior" spy={true} smooth={true} offset={0} duration= {500} className="home__button transp__button">Экстерьер</Link>
          </motion.div>
        </div>
      </section>
      
    </>
  )
}

export default Home
