import React, { useState } from 'react'

import '../../scss/pages/Navbar.scss'
import '../../scss/components/Nav.scss'

function Navbar() {
  const [active,setActive]=useState(0)
  console.log(active)
  return (
    <>
      <section className="navbar-page">
        <nav>
          {navItems.map((n,i) => (
            <div  className="nav__item" key={i} onMouseEnter={()=>setActive(i)}>{navItems[i].name}</div>
          ))}
          
        </nav>
        <img className='menu__image' src={navItems[active].imageUrl} alt=""/>
      </section>
    </>
  )
}

const navItems=[
  {
    name:'Exterior',
    imageUrl:'/images/menu/1.png'
  },
  {
    name:'Interior',
    imageUrl:'/images/menu/2.png'
  },
  {
    name:'Technic',
    imageUrl:'/images/menu/3.png'
  },
  {
    name:'Preferernces',
    imageUrl:'/images/menu/4.png'
  },
];

export default Navbar
