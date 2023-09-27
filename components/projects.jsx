'use client'
import '@styles/swiper.css';
import Image from 'next/image';
import ethImage from '@public/assets/images/eth.jpg'
import Typer_tb from '@components/typer_tb';
import Typer_hair from '@components/typer_hair';
import hairImage from '@public/assets/images/hAIr.png'
import Typer_tri from '@components/typer_triplet';
import triImage from '@public/assets/images/tri.png'
import Typer_mintmatch from '@components/Typer_mintmatch';
import mintmatchImage from '@public/assets/images/mintmatch.png'
import { AiFillGithub, AiFillVideoCamera} from "react-icons/ai";
import {FaGoogleDrive } from "react-icons/fa";


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Projects = () => {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div id='project' className='w-full h-screen bg-primary-gray text-center pt-16 pl-5 pr-5 hidden lg:block'>
        <h1 className='text-6xl italic text-primary-black'>PROJECT</h1>
        <div className='relative flex flex-col items-center justify-center h-5/6 w-full border-y-2 border-primary-white mt-3'>
            <div className='w-2/3 flex flex-col items-center justify-center'>
            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 12000,
            disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
        >
            <SwiperSlide className='bg-light-black/80 rounded-2xl' style={{"height": "auto"}}>
              <div className='w-full h-[500px] flex flex-row items-center justify-center space-x-10 ml-10'>
                <a target="_blank" rel="noreferrer" href="https://www.canva.com/design/DAFvV3fdaGo/a77okZsEnezx90ybP_ZwJg/view?utm_content=DAFvV3fdaGo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" className='w-2/5 rounded-2xl overflow-hidden shadow-xl shadow-slate-50/40 relative group'>
                  <div className='bg-primary-white/0 group-hover:bg-primary-black/40 absolute w-full h-full duration-200 cursor-pointer flex justify-center items-center'>
                    <h1 className='text-primary-white/0 group-hover:text-primary-white text-xl'>MintMatch</h1>
                  </div>
                  <div className="absolute w-full flex justify-center -bottom-10 group-hover:-translate-y-16 duration-200">
                        <AiFillVideoCamera className="text-4xl hover:scale-110 duration-150 text-white" />
                    </div>
                  <Image src={mintmatchImage} className='bg-primary-gray'></Image>
                </a>
                <div className='w-3/5 h-5/6 flex text-center items-center justify-center pl-10 pr-10'>
                  <div className='w-auto h-auto border-y-2 flex text-dark-white text-center items-center justify-center pl-10 pr-10'>
                  <Typer_mintmatch options={{autoStart: true, loop: true,}}/>
                  </div>
                </div>

              </div>
            </SwiperSlide>
            <SwiperSlide className='bg-light-black/80 rounded-2xl' style={{"height": "auto"}}>
              <div className='w-full h-[500px] flex flex-row items-center justify-center space-x-10 ml-10'>
                <a target="_blank" rel="noreferrer" href="https://github.com/WilliamYWY/tradingBot" className='w-2/5 rounded-2xl overflow-hidden shadow-xl shadow-slate-50/40 relative group'>
                  <div className='bg-primary-white/0 group-hover:bg-primary-black/40 absolute w-full h-full duration-200 cursor-pointer flex justify-center items-center'>
                    <h1 className='text-primary-white/0 group-hover:text-primary-white text-xl'>Trading Bot</h1>
                  </div>
                  <div className="absolute w-full flex justify-center -bottom-10 group-hover:-translate-y-16 duration-200">
                        <AiFillGithub className="text-4xl hover:scale-110 duration-150 text-white" />
                    </div>
                  <Image src={ethImage}></Image>
                </a>
                <div className='w-3/5 h-5/6 flex text-center items-center justify-center pl-10 pr-10'>
                  <div className='w-auto h-auto border-y-2 flex text-dark-white text-center items-center justify-center pl-10 pr-10'>
                  <Typer_tb options={{autoStart: true, loop: true,}}/>
                  </div>
                </div>

              </div>
            </SwiperSlide>
            <SwiperSlide className='bg-light-black/80 rounded-2xl' style={{"height": "auto"}}>
            <div className='w-full h-[500px] flex flex-row items-center justify-center space-x-10 ml-10'>
                <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1YiEGJ-OD-6-svDI6W6x3obZEoJ5d7_xK/view" className='w-2/5 rounded-2xl overflow-hidden shadow-xl shadow-slate-50/40 relative group'>
                    <div className='bg-primary-white/0 group-hover:bg-primary-black/40 absolute w-full h-full duration-200 cursor-pointer z-10 flex justify-center items-center'>
                      <h1 className='text-primary-white/0 group-hover:text-primary-white text-xl'> hAIr </h1>
                    </div>
                    <div className="absolute w-full flex justify-center -bottom-10 group-hover:-translate-y-16 duration-200 z-10">
                          < FaGoogleDrive className="text-4xl hover:scale-110 duration-150 text-white" />
                      </div>
                    <Image src={hairImage} className='scale-105 -z-10'></Image>
                  </a>

                <div className='w-3/5 h-5/6 flex text-center items-center justify-center pl-10 pr-10'>
                  <div className='w-auto h-auto border-y-2 flex text-dark-white text-center items-center justify-center pl-10 pr-10'>
                    <Typer_hair/>
                  </div>
                </div>

              </div>
            </SwiperSlide>
            <SwiperSlide className='bg-light-black/80 rounded-2xl' style={{"height": "auto"}}>
            <div className='w-full h-[500px] flex flex-row items-center justify-center space-x-10 ml-10'>
                  <a target="_blank" rel="noreferrer" href="https://github.com/WilliamYWY/TripletLoss-note" className='w-2/5 rounded-2xl overflow-hidden shadow-xl shadow-slate-50/40 relative group'>
                    <div className='bg-primary-white/0 group-hover:bg-primary-black/40 absolute w-full h-full duration-200 cursor-pointer flex justify-center items-center'>
                      <h1 className='text-primary-white/0 group-hover:text-primary-white text-xl'>Triplet Loss</h1>
                    </div>
                    <div className="absolute w-full flex justify-center -bottom-10 group-hover:-translate-y-16 duration-200">
                          <AiFillGithub className="text-4xl hover:scale-110 duration-150 text-white" />
                      </div>
                    <Image src={triImage}></Image>
                  </a>
                <div className='w-3/5 h-5/6 flex text-center items-center justify-center pl-10 pr-10'>
                  <div className='w-auto h-auto border-y-2 flex text-dark-white text-center items-center justify-center pl-10 pr-10'>
                    <Typer_tri/>
                  </div>
                </div>

              </div>
            </SwiperSlide>
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>

        </Swiper>
        </div>
        </div>
    </div>
  )

}

export default Projects