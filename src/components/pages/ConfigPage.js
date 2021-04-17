import React, { useState } from 'react'
import { isMobile } from 'react-device-detect';


import '../../scss/pages/ConfigPage.scss'

function ConfigPage() {

  const [col,setCol]=useState(1);
  const [felgen,setFelgen]=useState(1);
  const [choice,setChoice]=useState(1);
  const changeChoice = (e) => {
    setChoice(+e.target.dataset.index)
  }
  const changeColor = (e) => {
    setCol(+e.target.dataset.index)
  }
  const changeFelgen = (e) => {
    setFelgen(+e.target.dataset.index)
  }

  return (
    <>
      <section className="config-page">
        <h1 className="config__title">Подберите цвет и диски</h1>
        {isMobile? null:
          <div className="config__text">Объедините различные краски и колеса вместе, создавая новый Audi e-tron GT quattro в соответствии с вашими предпочтениями.</div>
        }
        <div className="config-block">
          <img className='car' src={"/images/config/" + col + felgen +  "1.jpg"} alt=""/>
          <div className="choice-block">
            <div className="type-labels">
              <div onClick={changeChoice} data-index={1} className={choice===1? 'active_choice type__label' : 'type__label'}>Цвет</div>
              <div onClick={changeChoice} data-index={2} className={choice===2? 'active_choice type__label' : 'type__label'}>Диски</div>
            </div>
            {choice === 1? 
              <div className="colors">
                {colors.map((n,i)=>(
                    <img onClick={changeColor} key={i} className={col===i+1? 'active_color' : ''} data-index={i+1} title={colors[i].title} src={colors[i].iconSrc} alt=""/>
                ))}
              </div>
            : 
              <div className="felgen">
              {felgenItems.map((n,i)=>(
                    <img onClick={changeFelgen} key={i} className={felgen===i+1? 'active_felgen' : ''} data-index={i+1} title={felgenItems[i].title} src={felgenItems[i].iconSrc} alt=""/>
                ))}
              </div>
            }
            <div className="description">
              {choice === 1? colors[col-1].title : felgenItems[felgen-1].title}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const colors=[
  {
    title:'Mythosschwarz Metallic',
    iconSrc:'/images/config/colors/1.webp',
  },
  {
    title:'Daytonagrau Perleffekt',
    iconSrc:'/images/config/colors/2.webp',
  },
  {
    title:'Kemoragrau Metallic',
    iconSrc:'/images/config/colors/3.webp',
  },
  {
    title:'Ascariblau Metallic',
    iconSrc:'/images/config/colors/4.webp',
  },
  {
    title:'Florettsilber Metallic',
    iconSrc:'/images/config/colors/5.webp',
  },
  {
    title:'Suzukagrau Metallic',
    iconSrc:'/images/config/colors/6.webp',
  },
  {
    title:'Ibisweiß',
    iconSrc:'/images/config/colors/7.webp',
  },
  {
    title:'Taktikgrün Metallic',
    iconSrc:'/images/config/colors/8.webp',
  },
  {
    title:'Tangorot Metallic',
    iconSrc:'/images/config/colors/9.webp',
  }
];
const felgenItems=[
  {
    title:'Колеса, 10-спицевый трапециевидный модуль, черный, глянцевый, 9,5 Дж / 11, 5Jx21, шины 265/35/305/30 R21',
    iconSrc:'/images/config/felgen/1.webp',
  },
  {
    title:'Колеса, 5-спицевый вогнутый модуль, черный с графической печатью, 9,5 Дж / 11, 5Jx21, шины 265/35/305/30 R21',
    iconSrc:'/images/config/felgen/2.webp',
  },
  {
    title:'Колеса, 5-сегментный Аэро, платиновый серый, 8,0 Дж / 10, 0Jx19, шины 225/55/275/45 R19',
    iconSrc:'/images/config/felgen/3.webp',
  },
  {
    title:'Колеса, 5-двойное смещение спиц, черный, глянцевый, 9,0 Дж / 11, 0Jx20, шины 245/45/285/40 R20',
    iconSrc:'/images/config/felgen/4.webp',
  },
  {
    title:'Колеса, 5-спицевый аэромодуль, черный, глянцевый, 9,0 Дж / 11, 0Jx20, шины 245/45/285/40 R20',
    iconSrc:'/images/config/felgen/5.webp',
  },
  
  {
    title:'Колеса, 5-двойное смещение спиц, платиновый серый, 9,0 Дж / 11, 0Jx20, шины 245/45/285/40 R20',
    iconSrc:'/images/config/felgen/6.webp',
  },
  {
    title:'Колеса, 10-спицевый трапециевидный модуль, платиновый серый, глянцевый, 9,5 Дж / 11, 5Jx21, шины 265/35/305/30 R21',
    iconSrc:'/images/config/felgen/7.webp',
  },
  {
    title:'Колеса, 10-спицевый трапециевидный модуль, титановый серый матовый, глянцевый, 9,5 Дж / 11, 5Jx21, шины 265/35/305/30 R21',
    iconSrc:'/images/config/felgen/8.webp',
  },
  {
    title:'Колеса, 5-сегментный аэро, черный, глянцевый, 8,0 Дж / 10, 0Jx19, шины 225/55/275/45 R19',
    iconSrc:'/images/config/felgen/9.webp',
  }
];

export default ConfigPage
