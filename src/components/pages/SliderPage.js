import React, { useState } from 'react'
import { motion } from "framer-motion";


import '../../scss/pages/SliderPage.scss'

const TabContent = ({title,image,text})=>(
  <div className="slider-block">
        <div className="text-block">
          <motion.h3 animate={{ x:10, opacity: 1}} transition={{ duration: 0.9 }} className="slider__title">{title}</motion.h3>
          <motion.div animate={{ x:10, opacity: 1}} transition={{ duration: 0.9 }} className="slider__text">
          {text}
          </motion.div>
        </div>
        <motion.img animate={{ x:50, opacity: 1}} transition={{ duration: 0.6 }} className="image__item" src={image} alt=""/>
      </div>
)


function SliderPage({type,items}) {
  const [active,setActive]=useState(0)
  const [count, setCount] = useState(0);
  const openTab = (e) => {
    setActive(+e.target.dataset.index)
    setCount(count + 1)
  }
  return (
    <>
      <section className={'slider-page slider-page_' + type} id={type==='bottom'? 'prefs' : ''}>
      <div className="slider-numbers">
        {items.map((n,i)=>(
          <button className="number" onClick={openTab} data-index={i} >{i+1}</button>
        ))}
      </div>
          {items[active] && 
              <TabContent key={count} {...items[active]} />
          }
      </section>
    </>
  )
}

export default SliderPage
