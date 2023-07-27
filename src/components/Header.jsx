import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { navLinks } from '../data/data'
import { motion } from 'framer-motion'


const show = {
    opacity: 1,
    display: "block"
};
  
const hide = {
    opacity: 0,
    y: '-100vh',
    transitionEnd: {
        display: "none"
    }
};

const Header = () => {
    const [showLinks, setShowLinks] = useState(false)

    const toggleLinks = () => {
        setShowLinks(!showLinks)
    }

    return (
    <header>
        <nav className='w-full px-10 py-8 md:flex md:px-16 md:py-8 '>
            <div className="flex justify-between w-full items-center border-b border-[#ffffffb2] pb-4" >
                <div className="xs:w-[6rem]">
                    <img src={logo} alt="logo" className='w-full' />
                </div>
                <ul className='hidden space-x-5 md:flex'>
                    {navLinks.map((nav, index) => (
                        <motion.li key={nav.id} className='font-DMSans cursor-pointer text-white text-lg '
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: 'spring', stifness: 300 }}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </motion.li>
                    ))}
                </ul>
                <motion.button id="menu-btn" className={`${showLinks ? 'open' : 'hamburger'} block hamburger md:hidden focus:outline-none outline-none`} onClick={toggleLinks}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </motion.button>
            </div>
            <motion.div className="md:hidden" 
                animate={showLinks ? show : hide}
            >
                {showLinks && (
                    <motion.div className="absolute flex-col items-center self-end py-8 mt-8 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-8 right-8 drop-shadow-md rounded-md">
                        <motion.ul className='flex flex-col gap-y-4'>
                            {navLinks.map((nav, index) => (
                                <motion.li key={nav.id} className='font-DMSans cursor-pointer text-black text-sm '
                                whileHover={{ scale: 1.2, originY: 0 }}
                                transition={{ type: 'spring', stifness: 300 }}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                )}
            </motion.div>
        </nav>
    </header>
  )
}

export default Header