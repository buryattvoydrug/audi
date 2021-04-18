import React, { useEffect, useRef, useState } from 'react'
import BackdropFilter from "react-backdrop-filter";


import '../scss/pages/Parallax.scss'

function Parallax({videoUrl,maskUrl,noblur,type}) {
  // const [offsetY,setOffsetY]=useState(0);
  const [pos,setPos]=useState(0);
  const handleScroll = () => {
    // setOffsetY(window.pageYOffset);
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
  useEffect(() => {
    window.addEventListener('scroll',handleScroll);
    return () => window.removeEventListener('scroll',handleScroll);
  }, [])

  return (
    <>
      <section ref={ref} className="parallax-page"  id={type}>
        <div className="parallax-container" >
          {noblur? null:
          <div className="mask" style={{transform: `scale(${scaleNum})`}}>
            <BackdropFilter 
            filter={`blur(${blur}px)`} >
              <img src={maskUrl} alt="" style={{opacity: `${blur+0.5}`}} />
            </BackdropFilter>
          </div>}
            <video className="desert"  autoPlay loop muted>
              <source src={videoUrl} type="video/mp4"/>
            </video>
        </div>
      </section>
    </>
  )
}

export default Parallax
