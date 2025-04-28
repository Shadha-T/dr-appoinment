import React from 'react'
import { assets } from '../assets/asset'
import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-green-800 rounded-lg px-6 md:px-10 lg:px-20'>
            {/* left */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-white font-mono leading-tight md:leading-tight  lg:leading-tight'>
                    Book appointment<br />with trusted doctors
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-mono'>
                    <img src={assets.grp} className='w-28 ' />
                    <p >simply browse throught our extensive list of trusted doctors<br className='hidden' />schedule ypur appoint free</p>
                </div>
                <a href='#speciality' className='flex items-center bg-white gap-2 px-8 py-3 rounded-full text-green-800 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                    book appointment <FaArrowRightLong className='w-3' />
                </a>
            </div>
            {/* right */}
            <div className='md:w-1/2 relative'>
                <img src={assets.latestgrp} className='w-full md:absolute bottom-0 h-auto rounded-lg' />
            </div>
        </div>
    )
}

export default Header
