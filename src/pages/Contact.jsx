import React from 'react'
import { assets } from '../assets/asset'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-600'>
        <p>CONTACT<span className='text-gray-700 font-semibold'> US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img src={assets.grp} className='w-full md:max-w-[360px]' />
        <div className='flex flex-col justify-center items-start gap-6 '>
          <p className='font-semibold text-lg text-gray-600'>Our Office</p>
          <p className='text-gray-500'>1234567890 <br />Rose garden,London</p>
          <p className='text-gray-500' >Tel:(315)888-0978 <br />Email:abc@gmail.com</p>
          <p className='font-semibold text-lg'>Careers at Diamonds</p>
          <p className='text-gray-500' >Learn more about our teams and job openings</p>
          <button className='border border-red-800 rounded-full px-8 py-4 text-sm hover:bg-green-800 hover:text-white transition-all duration-500'>Explore jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
