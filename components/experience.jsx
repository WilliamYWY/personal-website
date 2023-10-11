'use client'
import { motion, Variants } from "framer-motion";


import { useState } from "react"
import {AiOutlineArrowLeft} from "react-icons/ai"

const Experience = () => {
    const [bullet, setBullet] = useState(0);

    const expand = (cur) => {
        if (cur == bullet) {
            setBullet(0)
        }else{
            setBullet(cur)
        }
    }

    function handleScroll() {
        console.log("scrolled to element")
    }

  return (
    <div onScroll={handleScroll} id="exp" className='hidden md:block w-full h-screen bg-primary-white text-center pt-20 pl-10 pr-10 lg:pl-20 lg:pr-20 relative'>
        <h2 className='md:text-3xl lg:text-5xl 2xl:text-6xl italic text-light-black text-left'>
        It’s a great pleasure to work and learn in these places!
        </h2>
        <div className='h-2/3 mt-10 flex flex-col'>
            <div className='border-y-2'>
                <div className="flex flex-row justify-between pt-3 pb-3">
                    <div className="text-left">
                    <h1 className='text-light-black italic text-left md:text-2xl lg:text-4xl'>
                        Shuang Ho Hospital
                    </h1>
                    <h3 className="italic opacity-80">Software Engineer</h3>
                    <h3 className="italic opacity-80">Mar 2023 - Aug 2023</h3>
                    </div>
                    <button onClick={() => expand(1)} className={`mr-2 cursor-pointer ${bullet == 1 ? '-rotate-90':''} duration-150`}>
                    <AiOutlineArrowLeft className="md:text-xl lg:text-2xl 2xl:text-4xl"/>
                    </button>
                </div>
                <div className={`text-lef overflow-hidden transition-[height] duration-500 ease-in-out ${bullet == 1 ? 'h-52':'h-0'}`}>
                    <ul className="pl-1 text-left list-disc ml-10 md:text-lg lg:text-xl 2xl:text-2xl mr-10 space-y-3">
                        <li>Researched and built image classification models for IAD and PI</li>
                        <li>Trained EfficientNet model on a limited and unbalanced dataset, received a 0.90 recall rate</li>
                        <li>Built backend service with Django to provide user interface for web browser and Line bot</li>
                    </ul>
                </div>
            </div>
            <div className='border-b-2'>
                <div className="flex flex-row justify-between pt-3 pb-3">
                    <div className="text-left">
                    <h1 className='text-light-black text-left md:text-2xl lg:text-4xl italic'>
                        D8AI
                    </h1>
                    <h3 className="italic opacity-80">Software Enginee Intern</h3>
                    <h3 className="italic opacity-80">Mar 2022 - Aug 2022</h3>
                    </div>
                    <button onClick={() => expand(2)} className={`mr-2 cursor-pointer ${bullet == 2 ? '-rotate-90':''} duration-150`}>
                    <AiOutlineArrowLeft className="md:text-xl lg:text-2xl 2xl:text-4xl"/>
                    </button>
                </div>
                <div className={`text-lef overflow-hidden transition-[height] duration-500 ease-in-out ${bullet == 2 ? 'h-52':'h-0'}`}>
                    <ul className="pl-1 text-left pt-3 list-disc ml-10 md:text-lg lg:text-xl 2xl:text-2xl mr-10 space-y-3">
                        <li>Participated in research on speaker verification systems, text to speech technology and built machine learning models using PyTorch</li>
                        <li>Improved the original model for better stability and accuracy by changing the architecture of the network, the loss function, and the transformation function of the spectrogram.</li>
                    </ul>
                </div>
            </div>
            <div className='border-b-2'>
                <div className="flex flex-row justify-between pt-3 pb-3">
                    <div className="text-left">
                    <h1 className='text-light-black text-left md:text-2xl lg:text-4xl italic'>
                        Medtronic
                    </h1>
                    <h3 className="italic opacity-80">Data Intern</h3>
                    <h3 className="italic opacity-80">Jul 2021 - Aug 2021</h3>
                    </div>
                    <button onClick={() => expand(3)} className={`mr-2 cursor-pointer ${bullet == 3 ? '-rotate-90':''} duration-150`}>
                        <AiOutlineArrowLeft className="md:text-xl lg:text-2xl 2xl:text-4xl"/>
                    </button>
                </div>
                <div className={`text-lef overflow-hidden transition-[height] duration-500 ease-in-out ${bullet == 3 ? 'h-52':'h-0'}`}>
                    <ul className="pl-1 text-left pt-3 list-disc ml-10 md:text-lg lg:text-xl 2xl:text-2xl mr-10 space-y-3">
                        <li>Used Python to improve data quality and constructed a patient data matching software which helped organize over 20M patients and their updated information from over 50 hospitals in Taiwan, reduced overall working time from months to days</li>
                    </ul>
                </div>
            </div>
        </div>
        <motion.div
        initial={{opacity:0.5, x:50, y:150}}
        whileInView={{opacity:1, x:[null, -10, 0]}}
        transition={{duration:1}}
        >

            <h1 className="md:text-8xl lg:text-10xl 2xl:text-11xl italic text-primary-gray absolute bottom-5 right-5">Experience</h1>
        </motion.div>
    </div>
  )
}

export default Experience