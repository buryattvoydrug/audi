import React from 'react'
import Header from '../Header'

import '../../scss/pages/Home.scss'

function Home() {
  return (
    <>
      <section className="home-page">
        <div className="container">
        <Header />
          <h1 className="home__title">e-tron GT</h1>
          <div className="home-buttons">
            <button className="home__button dark__button">Configurate</button>
            <button className="home__button transp__button">Exterior</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
