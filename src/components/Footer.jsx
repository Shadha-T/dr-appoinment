import React from 'react'
import { assets } from '../assets/asset'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex  flex-col sm:grid grid-cols-[3fr_1fr_1fr]  gap-14 my-10 mt-4 text-sm'>
                <div >
                    {/* lft */}
                    <div className='flex'>
                
                    <img src={assets.logo} className='mb-5 w-20'/>
                    <p className='text-4xl my-4 text-green-900 gap-3'>Diamonds</p>
                    </div>
                    <p className='w-full md:w-2/3 text-green-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus aliquam et sunt facilis ipsa esse sed laboriosam. Aliquam laudantium illo doloribus, quis quod laboriosam exercitationem est ad vel unde!</p>
                </div>


                {/* cnter */}
                <div >
                    <p className='text-xl mb-5 font-medium text-green-900'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-green-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>


                {/* rgt */}
                <div>
                    <p className='text-xl mb-5 font-medium text-green-900'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-green-600'>
                        <li>+1234567890</li>
                        <li>abc@gmail.com</li>
                    </ul>
                </div>
                </div>

                {/* cpy  */}
                <div>
                    <hr />
                    <p className='text-sm py-5 text-center'>Copy right 2025 - All Right Reserved</p>
                </div>
            </div>
   
    )
}

export default Footer
