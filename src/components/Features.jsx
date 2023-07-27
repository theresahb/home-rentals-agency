import React from 'react'
import featureImage from '../assets/feature.png'
import { features } from '../data/data'
import { motion } from 'framer-motion'

const Features = () => {
    return (
    <motion.section 
        initial={{ opacity: .7, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 2.5,
            delay: 0.3,
            ease: [0, 0.71, 0.71, 1]
        }}
    >
        <div className="flex flex-col items-start font-Inter space-y-16 px-10 py-16 w-full xs:items-center md:px-12">
            <div className="">
                <h1 className='text-2xl md:text-3xl text-[#18191F] font-bold capitalize leading-normal md:leading-relaxed'><span className='md:underline decoration-orange decoration-4 underline-offset-[12px]'>Minimum living cost</span> takes care of everything</h1>
            </div>
            <div className="flex justify-between items-center">
                <div className="hidden lg:block">
                    <img src={featureImage} alt="" />
                </div>
                <div className="grid grid-cols-3 gap-4 xs:grid-cols-1 xs:place-items-center xs:gap-y-8">
                    {features.map((feature, index) => (
                        <div className="flex flex-col items-start text-start text-[#18191F] space-y-4 xs:items-center xs:text-center" key={feature.id}>
                            <div className="bg-white rounded-[10px] shadow-xl w-12 p-2">
                                <img src={feature.image} alt="" className=' w-full'/>
                            </div>
                            <h4 className='capitalize text-sm font-semibold md:font-semibold'>{feature.text}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    </motion.section>
  )
}

export default Features