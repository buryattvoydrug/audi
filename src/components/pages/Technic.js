import React from 'react'

import '../../scss/pages/Technic.scss'

function Technic() {
  return (
    <>
      <section className="technic-page">
        <div className="container">
          <div className="technic">
            <div className="technic__block">
              <h2 className="technic__title">Laden in neuer Dimension</h2>
              <div className="technic__text">
              Die flach in den Unterboden integrierte 800-Volt-Lithium-Ionen-Batterie verfügt über eine außergewöhnlich hohe Performance – beim Laden und beim Antrieb. In Verbindung mit dem Rekuperationssystem wurden bis zu 488 km Reichweite nach dem Messverfahren WLTP ermittelt (Stromverbrauch kombiniert1 in kWh/100 km: 19,6–18,8 (NEFZ); 21,6–19,9 (WLTP); CO₂-Emissionen kombiniert1 in g/km: 0. Angaben zu den Stromverbräuchen und CO₂-Emissionen bei Spannbreiten in Abhängigkeit von der gewählten Ausstattung des Fahrzeugs).
              </div>
              <div className="technic__logo">
                <img src="/images/audi logo.svg" alt=""/>
              </div>
            </div>
            <div className="technic__numbers">
              <div className="numbers__item">
                <div className="number">
                  <strong>5</strong>Min.
                </div>
                <div className="number__subtitle">
                  Energie für 100 km geladen in ca.
                </div>
              </div>
              <hr/>
              <div className="numbers__item">
                <div className="number">
                  <strong>22,5</strong>Min.
                </div>
                <div className="number__subtitle">
                Batterie von 5 % zu 80 % aufgeladen in
                </div>
              </div>
              <hr/>
              <div className="numbers__item">
                <div className="number">
                  <strong>488</strong>Min.
                </div>
                <div className="number__subtitle">
                  Reichweite (WLTP) bis zu
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
