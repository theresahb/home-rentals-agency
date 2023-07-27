import React from 'react'
import logo from '../assets/logo.png'
import mapIcon from '../assets/pin.png'
import phoneIcon from '../assets/call.png'
import faxIcon from '../assets/printer.png'
import { footerLinks, media } from '../data/data'

const Footer = () => {
  return (
    <footer className='px-4 mt-24 lg:px-16'>
        <div className="flex flex-col justify-start gap-y-10 px-10 py-16 w-full border-t-2 border-t-orange md:px-4 lg:px-16 lg:gap-y-20">
            <div className="flex flex-col gap-y-12 items-center md:flex-row md:justify-between">
                <div className="bg-[#f4501ede] p-2">
                    <img src={logo} alt="logo" className='' />
                </div>
                <div className="font-Assistant flex flex-col gap-y-8 items-start">
                    <div className="flex flex-col items-start gap-y-2">
                        <div className="flex gap-x-3 items-center">
                            <div className="w-4">
                                <img src={mapIcon} alt="" />
                            </div>
                            <p className='text-sm'>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
                        </div>
                        <div className="flex flex-col gap-y-2 items-center md:flex-row md:justify-between md:w-full">
                            <div className="flex gap-x-3 items-center">
                                <div className="w-3">
                                    <img src={phoneIcon} alt="" />
                                </div>
                                <p className='text-sm'>(123) 456-7890</p>
                            </div>
                            <div className="flex gap-x-3 items-center">
                                <div className="w-5">
                                    <img src={faxIcon} alt="" />
                                </div>
                                <p className='text-sm'>(123) 456-7890</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-5">
                        <p className='text-[#0A142F] text-xs'>Social Media</p>
                        <ul className="flex items-center gap-x-4">
                            {media.map((social, index) => (
                                <li key={social.id}>
                                    <a href={`#${social.link}`}>
                                        <div className="w-3">
                                            <img src={social.image} alt="" />
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="font-Inter flex flex-col gap-y-4 items-center md:flex-row md:justify-between">
                <ul className="flex gap-x-4">
                    {footerLinks.map((foot, index) => (
                        <li key={foot.id} className="text-[.6rem] uppercase">
                            <a href={`#${foot.id}`}>{foot.title}</a>
                        </li>
                    ))}
                </ul>
                <p className='text-[#0A142F] text-xs'>Copyright © 2020 Minimumlivingcost. All rights reserved</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer