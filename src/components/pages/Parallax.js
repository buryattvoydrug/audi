import React, { useEffect, useRef, useState } from 'react'
import BackdropFilter from "react-backdrop-filter";


import '../../scss/pages/Parallax.scss'

function Parallax() {
  const [offsetY,setOffsetY]=useState(0);
  const [pos,setPos]=useState(0);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
    setPos(ref.current.getBoundingClientRect().y)
  }
  const ref = useRef();
  let posa=0
  let scaleNum=1;
  let blur=20;
  if (pos<0) {
    scaleNum=1+pos*(-0.01);
    blur+=pos*0.1;
    posa=pos
    if(blur<0){blur=0}
  }
  console.log(pos)
  useEffect(() => {
    
    window.addEventListener('scroll',handleScroll);
    return () => window.removeEventListener('scroll',handleScroll);
  }, [])

  return (
    <>
      <section ref={ref} className="parallax-page" >
        <div className="parallax-container" style={{transform: `translateY(${-posa}px)`}}>
          <div className="mask" style={{transform: `scale(${scaleNum})`}}>
            <BackdropFilter 
            filter={`blur(${blur}px)`} >
              <img src="/images/design.png" alt="" style={{opacity: `${blur+0.5}`}} />
            </BackdropFilter>
          </div>
            <video className="desert"  autoPlay loop muted>
              <source src="/images/video.mp4" type="video/mp4"/>
            </video>
        </div>
      </section>
    </>
  )
}

export default Parallax
