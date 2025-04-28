import React from 'react'
import { assets } from '../assets/asset'

const Abt = () => {
  return (
    <div >
      <div className='text-center text-2xl  pt-10 text-gray-600'>
        <p>ABOUT <span className='text-gray-800 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img src={assets.grp}  className='w-full md:max-w-[360px]'alt=''/>
     

      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam praesentium magni, asperiores laboriosam minima distinctio. Expedita mollitia modi officia porro sint ab natus quidem distinctio, .</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ut porro beatae, deserunt ullam quas assumenda reprehenderit excepturi perspiciatis doloremque? Doloribus ducimus .</p>
     <b className='text-gray-800'>Our Vision</b>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores nisi, laboriosam nam atque odit maiores explicabo neque saepe sapiente? Ipsa ipsum aut inventore assumenda obcaecati. Modi quos sint ut architecto.</p>
      </div>
    </div>

    <div className='text-xl my-4'>
      <p className='text-gray-700 font-semibold'>WHY <span>CHOOSE US</span></p>
    </div>

    <div className='flex flex-col md:flex-row mb-20'>
      <div className='border  px-10 md:px-16 py-8 sm:py-16 flex  flex-col gap-5 text-[15px] hover:bg-green-800 hover:text-white transition-all duration-300 cursor-pointer'>
        <b>Efficiency</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Eaque, aut obcaecati.</p>
      </div>

      <div  className='border  px-10 md:px-16 py-8 sm:py-16 flex  flex-col gap-5 text-[15px] hover:bg-green-800 hover:text-white transition-all duration-300 cursor-pointer'>
        <b>Convenience</b>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit Amet nobis earu.</p>
      </div>


      <div  className='border  px-10 md:px-16 py-8 sm:py-16 flex  flex-col gap-5 text-[15px] hover:bg-green-800 hover:text-white transition-all duration-300 cursor-pointer'>
        <b>Personalization</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elitCum voluptate.</p>
      </div>

    </div>
    </div>
  )
}

export default Abt
