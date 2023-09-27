'use client'
import React, { useRef, useState } from 'react';
import { AiFillGithub } from "react-icons/ai";
import { FaPython, FaSwift, FaJava, FaGoogleDrive } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '@styles/swiper_mobile.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const ProjectsMobile = () => {
    
  return (
    <div className='w-full h-screen bg-primary-gray text-center pt-16 pl-5 pr-5 lg:hidden'>
        <h1 className='text-6xl italic text-primary-black'>PROJECT</h1>
        <div className='flex flex-row justify-center items-center h-5/6 w-full border-2 border-primary-white mt-3'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                rotate: 40,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                }}
                pagination={{clickable: true}}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='bg-light-black/80 rounded-2xl'>
                    <div className='w-full h-full p-5 overflow-hidden flex flex-col items-center group justify-center'>
                        <h1 className='text-primary-white text-2xl underline'>
                            MintMatch
                        </h1>
                        <p className='text-primary-white italic mt-5'>
                            #Python #NextJS #Solidity #firebase #Web3
                        </p>
                        <ul className='text-dark-white list-disc text-start ml-5 mt-14'>
                            <li>A Web3 social application enables users to connect based shared NFT</li>
                            <li>In-app NFT trading and NFT minting</li>
                            <li>Smart contract deployed on Polygon Mumbai network</li>
                            <li>Utilized XMTP to direct wallet-to-wallet communication</li>
                        </ul>
                        <div className={`bg-primary-gray h-full inset-0 m-auto absolute rounded-2xl opacity-0 group-hover:opacity-30 duration-200`}>
                        </div>
                        <div className="h-1/3 flex justify-center items-center z-10 absolute -bottom-1/3 left-0 right-0 rounded-bl-lg rounded-br-lg group-hover:-translate-y-full duration-200">
                            <a target="_blank" rel="noreferrer" href="https://www.canva.com/design/DAFvV3fdaGo/a77okZsEnezx90ybP_ZwJg/view?utm_content=DAFvV3fdaGo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" className="">
                                <AiFillGithub className="text-4xl hover:scale-110 duration-150 text-white" />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-light-black/80 rounded-2xl'>
                    <div className='w-full h-full p-5 overflow-hidden flex flex-col items-center justify-center group rounded-2xl'>
                        <h1 className='text-primary-white text-2xl underline'>
                            Trading Bot & Trading Simulation
                        </h1>
                        <p className='text-primary-white italic mt-5'>
                            #Python
                        </p>
                        <ul className='text-dark-white list-disc text-start ml-5 mt-14'>
                            <li>Designed bots and algo. for trading cryptocurrency on Binance and sending notifications via Telegram</li>
                            <li>Built a market simulator for testing trading strategies on historical data with the ability to simulate TP/SL</li>
                        </ul>
                        <div className={`bg-primary-gray h-full inset-0 m-auto absolute rounded-2xl opacity-0 group-hover:opacity-30 duration-200`}>
                        </div>
                        <div className="h-1/3 flex justify-center items-center z-10 absolute -bottom-1/3 left-0 right-0 rounded-bl-lg rounded-br-lg group-hover:-translate-y-full duration-200">
                            <a target="_blank" rel="noreferrer" href="https://github.com/WilliamYWY/tradingBot" className="">
                                <AiFillGithub className="text-4xl hover:scale-110 duration-150 text-white" />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-light-black/80 rounded-2xl'>
                    <div className='w-full h-full p-5 overflow-hidden flex flex-col items-center group justify-center relative'>
                        <h1 className='text-primary-white text-2xl underline'>
                            hAIr
                        </h1>
                        <p className='text-primary-white italic mt-5'>
                            #Python #SwiftUI #MySQL #FlaskRESTful
                        </p>
                        <ul className='text-dark-white list-disc text-start ml-5 mt-14'>
                            <li>Use Scikit-Image to analyze photos</li>
                            <li>Use Flask RESTful to contract backend server</li>
                            <li>Use PyMySQL to manage data storage</li>
                            <li>Build IOS app with SwiftUI</li>
                        </ul>
                        <div className={`bg-primary-gray h-full inset-0 m-auto absolute rounded-2xl opacity-0 group-hover:opacity-30 duration-200`}>
                        </div>
                        <div className="h-1/3 flex justify-center items-center z-10 absolute -bottom-1/3 left-0 right-0 rounded-bl-lg rounded-br-lg group-hover:-translate-y-full duration-200">
                            <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1YiEGJ-OD-6-svDI6W6x3obZEoJ5d7_xK/view" className="">
                                <FaGoogleDrive className="text-4xl hover:scale-110 duration-150 text-white" />
                            </a>
                        </div>
                    </div>
                    
                </SwiperSlide>
                <SwiperSlide className='bg-light-black/80 rounded-2xl'>
                    <div className='w-full h-full p-5 overflow-hidden flex flex-col items-center group justify-center'>
                        <h1 className='text-primary-white text-2xl underline'>
                            Triplet Loss
                        </h1>
                        <p className='text-primary-white italic mt-5'>
                            #Python #Pytorch
                        </p>
                        <ul className='text-dark-white list-disc text-start ml-5 mt-14'>
                            <li>Loss function that can be use to determine the similarity of arrays</li>
                            <li>Widely used at speaker verification.</li>
                        </ul>
                        <div className={`bg-primary-gray h-full inset-0 m-auto absolute rounded-2xl opacity-0 group-hover:opacity-30 duration-200`}>
                        </div>
                        <div className="h-1/3 flex justify-center items-center z-10 absolute -bottom-1/3 left-0 right-0 rounded-bl-lg rounded-br-lg group-hover:-translate-y-full duration-200">
                            <a target="_blank" rel="noreferrer" href="https://github.com/WilliamYWY/TripletLoss-note" className="">
                                <AiFillGithub className="text-4xl hover:scale-110 duration-150 text-white" />
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className='h-1/2 w-full bg-primary-gray absolute right-0 z-0'></div>
        </div>
    </div>
  )
}

export default ProjectsMobile