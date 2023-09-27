import React from 'react'

const Experience_mobile = () => {
  return (
    <div className='w-full h-screen bg-primary-white text-center pl-5 pr-5 pt-16 md:hidden'>
        <h1 className="text-7xl italic text-primary-gray">Exp.</h1>
        <div className='h-5/6 w-full flex flex-row mt-3 items-center'>
            <div className='w-1/2 h-5/6 flex flex-col justify-between'>
                <div className='h-1/3 w-full pr-5 sm:pr-7 text-end flex flex-col justify-center'>
                    <h1 className="text-primary-black italic sm:text-2xl">Shuang Ho Hospital</h1>
                    <h1 className="text-primary-black italic opacity-60 text-sm sm:text-lg">Software Engineer RA</h1>
                    <h1 className="text-primary-black italic opacity-60 text-sm sm:text-lg">Mar 2023 - Aug 2023</h1>
                </div>
                <div className='h-1/3 w-full pr-5 sm:pr-7 text-end flex flex-col justify-center'>
                    <h1 className="text-primary-black italic sm:text-2xl">Medtronic</h1>
                    <h1 className="text-primary-black italic opacity-60 text-sm sm:text-lg">Data Intern</h1>
                    <h1 className="text-primary-black italic opacity-60 text-sm sm:text-lg">Jul 2021 - Aug 2021</h1>
                </div>
            </div>
            <div className='border-2 border-primary-gray h-5/6 relative'>
                <div className='bg-primary-gray w-4 h-4 absolute -ml-2 top-20 rounded-full'></div>
                <div className='bg-primary-gray w-4 h-4 absolute -ml-2 top-1/2 rounded-full'></div>
                <div className='bg-primary-gray w-4 h-4 absolute -ml-2 bottom-20 rounded-full'></div>
            </div>
            <div className='w-1/2 h-5/6 flex flex-col items-center justify-center'>
                <div className='h-1/3 w-full pl-5 sm:pl-7 text-start flex flex-col justify-center'>
                    <h1 className="text-primary-black italic sm:text-2xl">D8AI</h1>
                    <h1 className="text-primary-black italic opacity-60 text-sm sm:text-lg">Software Engineer Intern</h1>
                    <h1 className="text-primary-black italic opacity-60 text-sm sm:text-lg">Mar 2022 - Aug 2022</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience_mobile