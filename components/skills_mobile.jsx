'use client'
import { motion, Variants } from "framer-motion";



const Skills_mobile = () => {
  return (
    <div className='w-full h-screen bg-primary-white text-center pl-5 pr-5 pt-16 md:hidden'>
        <h1 className="text-7xl italic text-primary-gray">SKILL</h1>
        <div className="flex-col h-5/6 mt-3">
            <div className="flex flex-col items-start border-primary-gray border-t-2 border-l-2 flex-1 h-1/3 pt-2 pl-4 pr-4">
                <h1 className="text-primary-black italic text-xl">Languages</h1>
                <div className="border-t-2 border-primary-black w-5/6"></div>
                <div className="mt-4 pl-5">
                <motion.div
                    initial={{opacity:0, x:-100}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:1}}
                    >
                <ul className="list-disc text-left text-light-black italic text-lg">
                    <li>Python</li>
                    <li>Swift</li>
                    <li>SQL</li>
                    <li>Java</li>
                    <li>HTML / CSS / JavaScript</li>
                    <li>Solidity</li>
                </ul>
                </motion.div>
                </div>
            </div>
            <div className="flex flex-col items-end border-primary-gray flex-1 h-1/3 pl-4 pr-4 overflow-hidden">
                <h1 className="text-primary-black italic text-xl">Libs & Tools</h1>
                <div className="border-t-2 border-primary-black w-5/6"></div>
                <div className="w-5/6 mt-4 flex flex-row justify-between space-x-2">
                <motion.div
                    initial={{opacity:0, x:-100}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:1}}
                    >
                    <ul className="list-disc text-left text-light-black italic text-lg flex-1 ml-5">
                        <li>Django</li>
                        <li>FlaskRESTful</li>
                        <li>SwiftUI</li>
                        <li>PyTorch</li>
                        <li>Tensorflow</li>
                        <li>Pandas</li>
                    </ul>
                    </motion.div>
                    <motion.div
                    initial={{opacity:0, x:100}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:1}}
                    >
                    <ul className="list-disc text-left text-light-black italic text-lg flex-1">
                        <li className="invisible"></li>
                        <li className="invisible"></li>
                        <li>NextJS</li>
                        <li>React/React Native</li>
                        <li>Docker</li>
                        <li>Git</li>
                        
                    </ul>
                    </motion.div>
                </div>
            </div>
            <div className="flex flex-col items-start border-primary-gray border-b-2 border-r-2 flex-1 h-1/3">
                <h1 className="text-primary-black italic text-xl">Fields</h1>
                <div className="border-t-2 border-primary-black w-5/6"></div>
                <div className="mt-4 pl-5">
                <motion.div
                    initial={{opacity:0, x:-100}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:1}}
                    >
                <ul className="list-disc text-left text-light-black italic text-lg">
                    <li>FullStack</li>
                    <li>Machine Learning</li>
                    <li>Blockchain</li>
                    <li>Health Tech</li>
                    <li>Crypto Trading</li>
                </ul>
                </motion.div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Skills_mobile