'use client'
import { motion, Variants } from "framer-motion";

const Skills = () => {
  return (
    <div id="skill" className='w-full h-screen bg-primary-white text-center pl-5 pr-5 pt-10 md:flex flex-row items-center justify-between relative hidden '>
        <div className="h-5/6 flex-1 border-2 border-primary-gray flex flex-col p-5 items-center">
            <h1 className="text-primary-black italic text-3xl lg:text-4xl xl:text-5xl">Languages</h1>
            <div className="border-t-2 border-primary-black w-5/6 mt-3"></div>
            <div className="mt-4 pl-5 text-xl lg:text-3xl italic lg:mr-5">
                <motion.div
                    initial={{opacity:0, x:-100}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:1}}
                    >
                <ul className="list-disc text-left text-light-black lg:pl-10 space-y-5 lg:space-y-8 lg:mt-3">
                    <li>Python</li>
                    <li>Swift</li>
                    <li>SQL</li>
                    <li>Java</li>
                    <li>HTML / CSS / JavaScript</li>
                    <li>Solidity</li>
                    <li>Rust</li>
                </ul>
                </motion.div>
            </div>
        </div>
        <div className="h-5/6 flex-1 flex flex-col p-5 items-center">
            <h1 className="text-primary-black italic text-3xl lg:text-4xl xl:text-5xl pt-1">Libs & Tools</h1>
                <div className="border-t-2 border-primary-black w-5/6 mt-3"></div>
                <div className="w-5/6 mt-4 flex flex-row justify-between space-x-2 text-xl lg:text-3xl italic lg:mr-5">
                    <motion.div
                    initial={{opacity:0, x:-100}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:1}}
                    >
                    <ul className="list-disc text-left text-light-black lg:pl-10 space-y-5 lg:space-y-8 lg:mt-3">
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
                    <ul className="list-disc text-left text-light-black lg:pl-10 space-y-5 lg:space-y-8 lg:mt-3">
                        <li className="invisible"></li>
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
        <div className="h-5/6 flex-1 border-2 border-primary-gray flex flex-col p-5 items-center">
            <h1 className="text-primary-black italic text-3xl lg:text-4xl xl:text-5xl">Fields</h1>
            <div className="border-t-2 border-primary-black w-5/6 mt-3"></div>
            <div className="mt-4 pl-5 text-xl lg:text-3xl italic lg:mr-5">
                <motion.div
                    initial={{opacity:0, x:100}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:1}}
                    >
                <ul className="list-disc text-left text-light-black lg:pl-10 space-y-5 lg:space-y-8 lg:mt-3">
                    <li>Fullstack</li>
                    <li>Machine Learning</li>
                    <li>Blockchain</li>
                    <li>Health Tech</li>
                    <li>Crypto Trading</li>
                </ul>
                </motion.div>
            </div>
        </div>
        <h1 className="absolute italic text-primary-gray bottom-5 left-16 text-9xl md:text-10xl lg:text-11xl 2xl:text-15xl bg-primary-white md:bottom-10 lg:bottom-5">SKILL</h1>
    </div>
  )
}

export default Skills