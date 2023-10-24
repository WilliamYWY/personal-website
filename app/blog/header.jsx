'use client'
import { motion, useScroll } from "framer-motion"
import Link from "next/link";
import { useEffect, useState } from "react";
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {MdKeyboardDoubleArrowLeft} from 'react-icons/md'


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
          className="flex flex-row items-center space-x-6"
            initial={{ x:-400 }}
            animate={{ x:0 }}
            transition={{duration: 1}}
          >
            <Link href="/" className="flex flex-col items-center justify-center -space-y-2">
              <MdKeyboardDoubleArrowLeft className="text-2xl"/>
              <h1 className="text-sm">Bio</h1>
            </Link>
            <a href="#about">
              <h1 className='text-2xl sm:text-3xl'>William's Blog</h1>
            </a>
          </motion.div>
          </div>
        </div>
    </motion.div>
    </section>
  )
}

export default Header