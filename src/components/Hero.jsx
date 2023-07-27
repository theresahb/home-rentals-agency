import React from 'react'
import Header from './Header'
import map from '../assets/map.png'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible : {
      opacity: 1,
      transition : { 
        delay: .5,
        duration: 1.5
      }
    },
  }

const Hero = () => {
    return (
    <section className='hero'>
        <Header />
        <motion.div className="flex flex-col gap-y-8 items-center px-10 py-16 w-full md:flex-row md:justify-between md:gap-x-8 md:px-12"
            variants={containerVariants}
            initial='hidden'
            animate='visible'
        >
            <div className=" md:w-1/2">
                <h1 className='text-white capitalize text-[2.3rem] text-center font-Inter font-bold xs:text-3xl md:text-[2.5rem] md:text-start lg:text-[2.9rem]'>
                    The most affordable place to stay in the san francisco bay area
                </h1>
            </div>
            <div className="flex flex-col space-y-4 w-[20rem] xs:w-[18rem] md:w-[23rem]">
                <div className="rounded-lg overflow-hidden ">
                    <img src={map} alt="" className='w-full'/>
                </div>
                <div className=" bg-[#F9F9F9] p-4 font-Poppins rounded-lg w-full">
                    <div className="flex justify-between w-full border border-[#E6E6E6] xs:flex ">
                        <div className="flex justify-center items-center w-full border-r border-[#E6E6E6] p-2 xs:w-[6rem]">
                            <select name="" id="" className='bg-[#F9F9F9] outline-none xs:text-sm cursor-pointer'>
                                <option value="all">All Type</option>
                                <option value="all">Mansion</option>
                                <option value="all">Single</option>
                                <option value="all">Bangalow</option>
                            </select>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down xx:hidden" width={20} height={20} viewBox="0 0 24 24" strokeWidth={2} stroke="#252B42" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M6 9l6 6l6 -6"></path>
                            </svg>
                        </div>
                        <div className="flex justify-center items-center w-full  p-2 xs:w-[6rem]">
                            <select name="" id="" className='bg-[#F9F9F9] outline-none xs:text-sm cursor-pointer'>
                                <option value="all">Neighborhood</option>
                                <option value="all">City</option>
                                <option value="all">Ghetto</option>
                                <option value="all">Village</option>
                            </select>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down xx:hidden" width={20} height={20} viewBox="0 0 24 24" strokeWidth={2} stroke="#252B42" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M6 9l6 6l6 -6"></path>
                            </svg>
                        </div>
                        <button className='p-3 bg-[#23A6F0]'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={20} height={20} viewBox="0 0 24 24" strokeWidth={2} stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                                <path d="M21 21l-6 -6"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Hero