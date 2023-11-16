'use client'
import Image from 'next/image'
import profileImage from '@public/assets/images/profile_2.jpg'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import { motion, useScroll, AnimatePresence } from "framer-motion"

const About = () => {
    
  return (
    <div id='about' className='w-full h-screen bg-primary-gray'>
        <div className="flex flex-col h-screen w-screen pt-16 md:flex-row-reverse md:justify-center md:items-center">
            <div className='flex  h-1/2 items-center justify-center md:flex-1 md:h-full'>
                <div className='flex rounded-full w-72 h-72 pb-0 items-center justify-center overflow-hidden md:rounded-none md:h-full md:w-full md:mr-10'>
                <motion.div
                initial={{y:-100, opacity:0 }}
                whileInView={{y:0, opacity: 1 }}
                transition={{ duration: 1.5}}
                >
                    <Image src={profileImage} style={{height: '100%', width: '100%',}}  alt='profile'/>
                </motion.div>
                </div>
            </div>
            <div className='h-1/2 pl-5 pr-5 md:flex-1 md:h-fit md:p-10'>
                <motion.div
                initial={{ x:-350, opacity:0}}
                whileInView={{ x: 0, opacity:1}}
                viewport={{ once: true }}
                transition={{ duration: 1, delay:0.4}}
                >
                <div className='mb-3 flex flex-row space-x-5 md:hidden'>
                    <a className='cursor-pointer' href='https://www.linkedin.com/in/williamyy777/' target="_blank" rel="noreferrer">
                        <AiFillLinkedin className='text-2xl hover:scale-125 duration-150 drop-shadow-xl'/>
                    </a>
                    <a className='cursor-pointer' href='https://github.com/WilliamYWY' target="_blank" rel="noreferrer">
                        <AiFillGithub className='text-2xl hover:scale-125 duration-150 drop-shadow-xl'/>
                    </a>
                </div>
                </motion.div>
                <motion.div
                initial={{ x:-350, opacity:0}}
                whileInView={{ x: 0, opacity:1}}
                viewport={{ once: true }}
                transition={{ duration: 1}}
                >
                <h1 className='text-3xl md:text-5xl'>Hi, this is William!</h1>
                <h1 className='text-xl md:text-3xl'>Software Engineer</h1>
                </motion.div>
                <motion.div
                initial={{ x:-350, opacity:0}}
                whileInView={{ x: 0, opacity:1}}
                viewport={{ once: true }}
                transition={{ duration: 1, delay:0.2}}
                >
                <p className="mt-3 text-lg md:text-2xl">A coding wizard based in <mark className='bg-black text-primary-white italic'>New York</mark>. Primarily working with <mark className='bg-black text-primary-white italic'>Python and Swift</mark> crafting innovative solutions to real-world problems. Join me as I dive into the exciting world of programming!</p>
                </motion.div>
                <motion.div
                initial={{ x:-350, opacity:0}}
                whileInView={{ x: 0, opacity:1}}
                viewport={{ once: true }}
                transition={{ duration: 1, delay:0.4}}
                >
                <p className="mt-3 text-lg md:text-2xl"><mark className='bg-black text-primary-white italic'>Seeking for summer 2024 internship</mark></p>
                <button  type='button' className='mt-4 bg-primary-black text-primary-white w-40 rounded-full p-2 hover:opacity-80'>
                    <a target="_blank" rel="noreferrer" href='https://docs.google.com/document/d/1OBDdWGnjoyHt7oiRjW4fvmTVUAiSe7TyOLhf9--ZoZs/edit?usp=sharing' className='text-sm italic w-full h-full'>Download <br></br> Resume</a>
                </button>
                <div className='hidden md:flex mt-4 flex-row space-x-5 ml-1'>
                    <a className='cursor-pointer' href='https://www.linkedin.com/in/williamyy777/' target="_blank" rel="noreferrer">
                        <AiFillLinkedin className='md:text-3xl hover:scale-125 duration-150 drop-shadow-xl'/>
                    </a>
                    <a className='cursor-pointer' href='https://github.com/WilliamYWY' target="_blank" rel="noreferrer">
                        <AiFillGithub className='md:text-3xl hover:scale-125 duration-150 drop-shadow-xl'/>
                    </a>
                </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default About