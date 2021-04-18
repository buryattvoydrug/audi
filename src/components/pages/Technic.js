import React, { useEffect, useRef } from 'react'
import {useSpring, animated,config } from 'react-spring'

import '../../scss/pages/Technic.scss'
import { useIntersectionObserver } from '../useInterselectionObserver'

function Technic() {

  const elementRef = useRef(null);
  const [inView, entry] = useIntersectionObserver(elementRef, {
    threshold: 0
  });
  const prop1 = useSpring({from: { number: 1000 },to: { number: 5 }, delay: 3000})
  const prop2 = useSpring({from: { number: 1000.76 },to: { number: 22.5 }, delay: 3000})
  const prop3 = useSpring({from: { number: 9999 },to: { number: 488 }, delay: 3000})


  
  return (
    <>
      <section className="technic-page">
        <div className="container">
          <div className="technic">
            <div className="technic__block" ref={elementRef}>
              <h2 className="technic__title">Загрузка в новом измерении</h2>
              <div className="technic__text">
              Литий-ионный аккумулятор на 800 В, встроенный в нижнюю часть кузова, обеспечивает исключительно высокий уровень производительности - как при зарядке, так и во время движения. В сочетании с системой рекуперации запас хода до 488 км был определен с использованием метода измерения WLTP (комбинированное энергопотребление1 в кВтч / 100 км: 19,6–18,8 (NEDC); 21,6–19,9 (WLTP); выбросы CO₂, комбинированные1 в г / км: 0. Информация о потребляемой мощности и выбросах CO₂ в диапазонах в зависимости от выбранной комплектации автомобиля).
              </div>
              <div className="technic__logo">
                <img src="/images/audi logo.svg" alt=""/>
              </div>
            </div>
            <div className="technic__numbers" >
            {inView && <>
              <div className="numbers__item">
                <div className="number" >
                
                  <animated.strong >{prop1.number.interpolate(x=>x.toFixed(0))}</animated.strong>Мин.
                
                </div>
                <div className="number__subtitle">
                Энергия на 100 км заряжается за
                </div>
              </div>
              <hr/>
              <div className="numbers__item">
                <div className="number">
                  <animated.strong>{prop2.number.interpolate(x=>x.toFixed(1))}</animated.strong>Мин.
                </div>
                <div className="number__subtitle">
                Аккумулятор заряжается с 5% до 80% за
                </div>
              </div>
              <hr/>
              <div className="numbers__item">
                <div className="number">
                  <animated.strong >{prop3.number.interpolate(x=>x.toFixed(0))}</animated.strong>Мин.
                </div>
                <div className="number__subtitle">
                  Диапазон (WLTP) до
                </div>
              </div>
              </>}
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Technic
