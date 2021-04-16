import React from 'react'

import '../../scss/pages/SliderPage.scss'

function SliderPage() {
  return (
    <>
      <section className="slider-page">
        <div className="slider-block">
          <div className="text-block">
            <h3 className="slider__title">Zukunftsweisende Designikone</h3>
            <div className="slider__text">
              Das Design des Audi e-tron GT quattro ist die konsequente Verkörperung elektrischer Mobilität und unverwechselbarer Audi DNA.
            </div>
          </div>
          <img className="image__item" src="/images/slider1.png" alt=""/>
        </div>
        <div className="slider-numbers">
          <button className="number">1</button>
          <button className="number">2</button>
          <button className="number">3</button>
          <button className="number">4</button>
        </div>
      </section>
    </>
  )
}

export default SliderPage
