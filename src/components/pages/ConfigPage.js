import React from 'react'

import '../../scss/pages/ConfigPage.scss'

function ConfigPage() {
  return (
    <>
      <section className="config-page">
        <h1 className="config__title">Подберите цвет и диски</h1>
        <div className="config__text">Объедините различные краски и колеса вместе, создавая новый Audi e-tron GT quattro в соответствии с вашими предпочтениями.</div>
        <div className="config-block">
          <img className='car' src="/images/config/111.jpg" alt=""/>
          <div className="choice-block">
            <div className="type-labels">
              <div className="type__label">Цвет</div>
              <div className="type__label">Диски</div>
            </div>
            <div className="colors">
              <img src="/images/config/colors/1.webp" alt=""/>
              <img src="/images/config/colors/2.webp" alt=""/>
              <img src="/images/config/colors/3.webp" alt=""/>
              <img src="/images/config/colors/4.webp" alt=""/>
              <img src="/images/config/colors/5.webp" alt=""/>
              <img src="/images/config/colors/6.webp" alt=""/>
              <img src="/images/config/colors/7.webp" alt=""/>
              <img src="/images/config/colors/8.webp" alt=""/>
              <img src="/images/config/colors/9.webp" alt=""/>
            </div>
            <div className="felgen">
              <img src="/images/config/felgen/1.webp" alt=""/>
              <img src="/images/config/felgen/2.webp" alt=""/>
              <img src="/images/config/felgen/3.webp" alt=""/>
              <img src="/images/config/felgen/4.webp" alt=""/>
              <img src="/images/config/felgen/5.webp" alt=""/>
              <img src="/images/config/felgen/6.webp" alt=""/>
              <img src="/images/config/felgen/7.webp" alt=""/>
              <img src="/images/config/felgen/8.webp" alt=""/>
              <img src="/images/config/felgen/9.webp" alt=""/>
            </div>
            <div className="description">Красный</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ConfigPage
