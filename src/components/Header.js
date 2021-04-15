import React from 'react'

import '../scss/components/Header.scss'

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="/images/audi logo.svg" alt=""/>
      </div>
      <button className="menu__button">
        <img src="/images/menu button.svg" alt=""/>
      </button>
    </header>
  )
}

export default Header
