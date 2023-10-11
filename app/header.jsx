'use client'
import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react";
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'


const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  
  return (
    <section>
    <motion.div
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    >
        <div className='bg-primary-gray/70 backdrop-blur-sm h-16 flex justify-between items-center fixed w-full pl-5 pr-5 z-50'> 
          <div className='w-full sm:w-1/3 text-center sm:text-start'>
          <motion.div
            initial={{ x:-400 }}
            animate={{ x:0 }}
            transition={{duration: 1}}
          >
            <a href="#about">
              <h1 className='text-2xl sm:text-3xl'>William, Yang</h1>
            </a>
          </motion.div>
          </div>
          <div className={`${scrollY > 440 ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out duration-200 flex flex-row sm:hidden space-x-5 absolute`}>
            <a className={`${scrollY > 440 ? "pointer-events-auto" : "pointer-events-none"} cursor-pointer`} href='https://www.linkedin.com/in/williamyy777/' target="_blank" rel="noreferrer">
                <AiFillLinkedin className='text-2xl hover:scale-125 duration-150 drop-shadow-xl'/>
            </a>
            <a className={`${scrollY > 440 ? "pointer-events-auto" : "pointer-events-none"} cursor-pointer`} href='https://github.com/WilliamYWY' target="_blank" rel="noreferrer">
                <AiFillGithub className='text-2xl hover:scale-125 duration-150 drop-shadow-xl'/>
            </a>
          </div>
          <div className='hidden sm:flex sm:w-1/3 sm:justify-end sm:space-x-10'>
          <motion.div
            initial={{ y:-50 }}
            animate={{ y:0 }}
            transition={{duration: 1}}
          >
            <a href="#skill"><h2 className='inline-block'>Skill</h2></a>
          </motion.div>
          <motion.div
            initial={{ y:-50 }}
            animate={{ y:0 }}
            transition={{duration: 1, delay: 0.3}}
          >
            <a href="#project"><h2 className='inline-block'>Project</h2></a>
          </motion.div>
          <motion.div
            initial={{ y:-50 }}
            animate={{ y:0 }}
            transition={{duration: 1, delay: 0.6}}
          >
            <a href="#exp"><h2 className='inline-block'>Experience</h2></a>
            </motion.div>
            <motion.div
            initial={{ y:-50 }}
            animate={{ y:0 }}
            transition={{duration: 1, delay: 0.9}}
          >
            <a href="#edu"><h2 className='inline-block'>Education</h2></a>
            </motion.div>
            <motion.div
            initial={{ y:-50 }}
            animate={{ y:0 }}
            transition={{duration: 1, delay: 1.2}}
          >
            <a href="#"><h2 className='inline-block'>Contact</h2></a>
            </motion.div>
          </div>

        </div>
    </motion.div>
    </section>
  )
}

export default Header