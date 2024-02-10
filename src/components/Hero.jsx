import React, { useEffect } from 'react';
import {motion} from 'framer-motion'
import {styles} from '../style'
import { ComputersCanvas } from './canvas'
import Typed from 'typed.js'; 

const Hero = () => {
  useEffect(() => {
    var typed = new Typed(".auto-type", {
      strings: ["Developer","Food Connoisseur","Coder","Technology Explorer","Life-long Learner","Problem Solver"],
      typeSpeed: 250,
      backSpeed: 250,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []); 
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
            <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hey! This is <span className="text-[#915eff]">Nagasumukh</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I am <span class="auto-type"></span> and you can<br className="sm:block hidden"/> see that through this website.</p>
        </div>
      </div>
      <ComputersCanvas/>

      <div className="absolute xs:bottom-100 bottom-100 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35-px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{y:[0,24,0]
              }}
              transition={{
                duration:1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero