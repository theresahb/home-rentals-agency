import React from 'react'
import service1 from '../assets/service1.png'
import service2 from '../assets/service2.png'
import service3 from '../assets/service3.png'
import service4 from '../assets/service4.png'
import { motion } from 'framer-motion'

const Services = () => {
    return (
    <section>
        <div className="flex flex-col justify-between items-center gap-y-16 px-10 py-16 w-full font-Inter lg:flex-row gap-x-16 xs:px-4 md:px-12 overflow-hidden">
            <motion.div className="flex flex-col gap-y-4"
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1,
                transition : {
                    type: 'spring', 
                    duration: 1.7, 
                    delay: .4
                } }}
            exit={{ x: 300, opacity: 0 }}
            >
                <div className="flex gap-x-4 items-end w-fit overflow-hidden">
                    <div className="flex flex-col items-center w-fit h-fit relative overflow-hidden text-center" >
                        <div className="absolute z-10 px-8 py-4">
                            <h1 className='capitalize  text-lg text-white font-semibold xs:text-sm'>flexible leases</h1>
                        </div>
                        <div className="">
                            <img src={service1} alt="" className='w-full' />
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-fit h-fit relative overflow-hidden text-center" >
                        <div className="absolute z-10 px-8 py-4">
                            <h1 className='capitalize  text-lg text-white font-semibold xs:text-sm'>7-day happiness guaranteed</h1>
                        </div>
                        <div className="">
                            <img src={service2} alt="" className='w-full' />
                        </div>
                    </div>
                </div>
                <div className="flex gap-x-4 w-fit overflow-hidden">
                    <div className="flex flex-col items-center w-fit h-fit relative overflow-hidden text-center" >
                        <div className="absolute z-10 px-8 py-4">
                            <h1 className='capitalize  text-lg text-white font-semibold xs:text-sm'>monthly house cleaning</h1>
                        </div>
                        <div className="">
                            <img src={service3} alt="" className='w-full' />
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-fit h-fit relative overflow-hidden text-center" >
                        <div className="absolute z-10 px-8 py-4">
                            <h1 className='capitalize  text-lg text-white font-semibold xs:text-sm'>choose your own roomate</h1>
                        </div>
                        <div className="">
                            <img src={service4} alt="" className='w-full' />
                        </div>
                    </div>
                </div>
            </motion.div>
            
            <motion.div className="flex flex-col space-y-4 items-start lg:w-1/2 md:px-8"
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1,
                transition : {
                    type: 'spring', 
                    duration: 1.,
                    delay: .4
                } }}
            exit={{ x: -300, opacity: 0 }}
            >
                <div className="flex flex-col space-y-2 text-start">
                    <h1 className='text-3xl text-[#18191F] font-bold leading-normal xs:text-2xl'>Flexibility and options to suit your lifestyle.</h1>
                    <p>
                        You need it? We got it. We make finding your next home easy, comfortable, and simple. 
                        From our happiness guarantee to our selective roommate finder option. We provide you the flexibility that you most desire.
                    </p>
                </div>
                <motion.button className='text-white text-sm bg-orange px-6 py-2 rounded'
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >Search Rooms</motion.button>
            </motion.div>
        </div>
    </section>
  )
}

export default Services