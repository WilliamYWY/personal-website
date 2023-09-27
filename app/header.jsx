'use client'
import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { motion, useScroll } from "framer-motion"


const Header = () => {
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