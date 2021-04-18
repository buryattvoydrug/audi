import React, { useEffect, useRef } from 'react'
import { motion } from "framer-motion";


import '../../scss/pages/TextPage.scss'
import { useIntersectionObserver } from '../useInterselectionObserver';

function TextPage({content,number}) {


  const elementRef = useRef(null);
  const [inView, entry] = useIntersectionObserver(elementRef, {
    threshold: 0
  });

  // console.log our state everytime its updated to see if it works.
  useEffect(() => {
    console.log(inView);
  }, [inView]);



  return (
    <>
      <section className="text-page" ref={elementRef}>
        {inView && <motion.h1 animate={{ y:20 , opacity:1}} transition={{ duration: 2 }} className="text-page__title">
          {content[number].title}
        </motion.h1>}
        {inView && <motion.div animate={{ y:20 , opacity:1}} transition={{ duration: 2 }} className="text-page__text">
          {content[number].text}
        </motion.div>}
      </section>
    </>
  )
}

export default TextPage
