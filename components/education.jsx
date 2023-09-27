'use client'
import React from 'react'
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import CT from '@public/assets/images/CT.png'
import Image from 'next/image';
import TMU from '@public/assets/images/TMU.svg.png'


const Education = () => {

    const [cardFlip1, setCardFlip1] = useState(false)
    const [cardFlip2, setCardFlip2] = useState(false)
  return (
    <div id='edu' className='bg-primary-gray w-full h-screen text-center pl-5 pr-5 pt-16 lg:pt-56'>
        <h1 className="text-6xl italic text-primary-black">Education</h1>
        <div className='mt-5 flex flex-col lg:flex-row justify-center items-center h-5/6 pb-5 lg:pb-16  space-y-20 lg:justify-center lg:space-y-0 lg:pl-10 lg:pr-10 lg:space-x-10 xl:space-x-20 2xl:space-x-48'>
            <ReactCardFlip isFlipped={cardFlip1} flipDirection="horizontal">
                <button onClick={() => setCardFlip1(true)} className='hover:scale-110 duration-200 delay-75'>
                    <div className='w-[350px] h-[200px] sm:w-[560px] drop-shadow-2xl sm:h-[300px] rounded-3xl bg-primary-white flex flex-col justify-center items-center'>
                        <Image src={CT} className='scale-110' ></Image>
                    </div>
                </button>

                <button onClick={() => setCardFlip1(false)} className='hover:scale-110 duration-200 delay-75'>
                <div className='w-[350px] h-[200px] sm:w-[560px] drop-shadow-2xl sm:h-[300px] rounded-3xl bg-primary-white p-5 text-left italic flex flex-col justify-center'>
                    <h1 className='text-lg sm:text-2xl'>Cornell Tech (Cornell University)</h1>
                    <h2 className='sm:text-lg'>Master’s, Information Systems</h2>
                    <h2 className='hidden sm:block opacity-80 sm:text-lg'>Jacobs Technion-Cornell Dual Master of Science Degrees – Health Tech Concentration</h2>
                    <h2 className='mt-5 opacity-80 sm:text-lg'>Aug 2023 - May 2025</h2>

                </div>
                </button>
            </ReactCardFlip>
            <ReactCardFlip isFlipped={cardFlip2} flipDirection="horizontal">
                <button onClick={() => setCardFlip2(true)} className='hover:scale-110 duration-200 delay-75'>
                    <div className='w-[350px] h-[200px] sm:w-[560px] drop-shadow-2xl sm:h-[300px] rounded-3xl bg-primary-white flex flex-col justify-center items-center'>
                        <Image src={TMU} className='scale-75'></Image>
                    </div>
                </button>

                <button onClick={() => setCardFlip2(false)} className='hover:scale-110 duration-200 delay-75'>
                <div className='w-[350px] h-[200px] sm:w-[560px] drop-shadow-2xl sm:h-[300px] rounded-3xl bg-primary-white p-5 text-left italic flex flex-col justify-center'>
                    <h1 className='text-lg sm:text-2xl'>Taipei Medical University</h1>
                    <h2 className='sm:text-lg'>Bachelor's, Biomedical Engineering</h2>
                    <h2 className='mt-5 opacity-80 sm:text-lg'>Sep 2019 - Jun 2022</h2>

                </div>
                </button>
            </ReactCardFlip>
        </div>
    </div>
  )
}

export default Education