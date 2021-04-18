import React, { useEffect, useRef } from 'react'
import { motion } from "framer-motion";


import '../../scss/pages/Technic.scss'
import { useIntersectionObserver } from '../useInterselectionObserver'

function Technic() {

  const elementRef = useRef(null);
  const [inView, entry] = useIntersectionObserver(elementRef, {
    threshold: 0
  });


  
  return (
    <>
      <section className="technic-page">
        <div className="container">
          <div className="technic">
            <div className="technic__block" >
              <h2 className="technic__title">Загрузка в новом измерении</h2>
              <div className="technic__text">
              Литий-ионный аккумулятор на 800 В, встроенный в нижнюю часть кузова, обеспечивает исключительно высокий уровень производительности - как при зарядке, так и во время движения. В сочетании с системой рекуперации запас хода до 488 км был определен с использованием метода измерения WLTP (комбинированное энергопотребление1 в кВтч / 100 км: 19,6–18,8 (NEDC); 21,6–19,9 (WLTP); выбросы CO₂, комбинированные1 в г / км: 0. Информация о потребляемой мощности и выбросах CO₂ в диапазонах в зависимости от выбранной комплектации автомобиля).
              </div>
              <div className="technic__logo">
                <img src="/images/audi logo.svg" alt=""/>
              </div>
            </div>
            <div className="technic__numbers" ref={elementRef}>
              <div className="numbers__item">
                <div className="number" >
                  {inView && <motion.strong animate={{opacity: 1}} transition={{ duration: 0.9 }}>5</motion.strong>}Мин.
                </div>
                <div className="number__subtitle">
                Энергия на 100 км заряжается за
                </div>
              </div>
              <hr/>
              <div className="numbers__item">
                <div className="number">
                  {inView && <motion.strong animate={{opacity: 1}} transition={{ duration: 0.9 }}>22.5</motion.strong>}Мин.
                </div>
                <div className="number__subtitle">
                Аккумулятор заряжается с 5% до 80% за
                </div>
              </div>
              <hr/>
              <div className="numbers__item">
                <div className="number">
                  {inView && <motion.strong animate={{opacity: 1}} transition={{ duration: 0.9 }}>488</motion.strong>}Мин.
                </div>
                <div className="number__subtitle">
                  Диапазон (WLTP) до
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Technic
