import React, { useState } from 'react'

import '../../scss/pages/SliderPage.scss'

const TabContent = ({title,image,text})=>(
  <div className="slider-block">
        <div className="text-block">
          <h3 className="slider__title">{title}</h3>
          <div className="slider__text">
          {text}
          </div>
        </div>
        <img className="image__item" src={image} alt=""/>
      </div>
)

function SliderPage({type,items}) {
  console.log(items[0].text)
  const [active,setActive]=useState(0)
  const openTab = (e) => setActive(+e.target.dataset.index)
  return (
    <>
      <section className={'slider-page slider-page_' + type}>
      <div className="slider-numbers">
        {items.map((n,i)=>(
          <button className="number" onClick={openTab} data-index={i} >{i+1}</button>
        ))}
      </div>
      {items[active] && 
        <TabContent {...items[active]} />
      }
      </section>
    </>
  )
}

export default SliderPage
