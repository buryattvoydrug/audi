import React, { useState } from 'react'
import {Link} from 'react-scroll'

import '../scss/components/Header.scss'
import '../scss/pages/Navbar.scss'
import '../scss/components/Nav.scss'
import { isMobile } from 'react-device-detect'

function Header() {
  const [active,setActive]=useState(0)
  const [menu,setMenu]=useState(false)
  const toggleMenu=()=>{
    setMenu(!menu);
    if (document.body.style.overflowY !== "hidden") {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }
  const closeMenu = () => {
    setMenu(false);
    document.body.style.overflowY = "scroll";
  }
  return (
    <>
      <header>
        <div className="logo">
          <img src="/images/audi logo.svg" alt=""/>
        </div>
        <button onClick={toggleMenu} className="menu__button">
        {
          !menu? <img src="/images/menu button.svg" alt=""/> :
          <img src="/images/close.png" alt=""/>

        }
          
        </button>
      </header>
      {
        menu?
      <section className="navbar-page">
        <nav>
          {navItems.map((n,i) => (
            <Link onClick={closeMenu} to={navItems[i].linkTo} spy={true} smooth={true} offset={0} duration= {500}
            className="nav__item" key={i} onMouseEnter={()=>setActive(i)}>{navItems[i].name}</Link>
          ))}
          
        </nav>
        {isMobile? null:
          <img className='menu__image'  src={navItems[active].imageUrl} alt=""/>
        }
      </section>
      :
      null
    }
    </>
  )
}

const navItems=[
  {
    name:'Экстерьер',
    imageUrl:'/images/menu/1.png',
    linkTo:'exterior'
  },
  {
    name:'Интерьер',
    imageUrl:'/images/menu/2.png',
    linkTo:'interior'
  },
  {
    name:'Техника',
    imageUrl:'/images/menu/3.png',
    linkTo:'technic'
  },
  {
    name:'Особенности',
    imageUrl:'/images/menu/4.png',
    linkTo:'prefs'
  },
];

export default Header
