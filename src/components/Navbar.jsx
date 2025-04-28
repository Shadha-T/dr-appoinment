import React, { useState } from 'react'
import { assets } from '../assets/asset'
import { NavLink, useNavigate } from 'react-router-dom'
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {

  const navigate = useNavigate()

  const [showMenu, setShowMenu] = useState(false)
  const [token, setToken] = useState(true)
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-600'>
      <img onClick={() => navigate('/')} src={assets.logo} alt='' className='w-32 cursor-pointer' />
      <ul className='hidden md:flex  items-star gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-green-800 w-3/5 m-auto hidden ' />
        </NavLink>
        <NavLink to='/doctors'>
          <li className='py-1'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-green-800 w-3/5 m-auto hidden ' />
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-green-800 w-3/5 m-auto hidden ' />
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-green-800 w-3/5 m-auto hidden ' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
          token
            ? <div className='cursor-pointer flex items-center gap-2 group relative'>
              <img src={assets.profile} className='w-12 rounded-full ' />
              <RiArrowDropDownLine className='w-2.5' />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-green-800 z:20 hidden group-hover:block'>
                <div className='min-w-48 bg-gray-200 rounded flex  flex-col gap-4 p-4'>
                  <p onClick={() => navigate('myprofile')} className='hover:text-green-700 cursor-pointer'>My Profile</p>
                  <p onClick={() => navigate('my-appointments')} className='hover:text-green-700 cursor-pointer'>Appointments</p>
                  <p onClick={() => setToken(false)} className='hover:text-green-700 cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>

            : <button onClick={() => navigate('/login')} className='bg-green-800 text-white px-8 py-3 rounded-full font-serif hidden md:block'>Create account</button>

        }
        <i onClick={() => setShowMenu(true)} className="fa-solid fa-bars w-6 md:hidden"></i>
        {/* mobile menu */}
        <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 overflow-hidden z-20 bg-white transition-all`}>
          <div className='flex items-center  justify-between px-5 py-6'>
            <img src={assets.logo}  className='w-36'/>
            <i class="fa-solid fa-circle-xmark w-10 flex items-center jus  rounded-full"></i>
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium text-green-800 '>
              <NavLink   onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2  rounded inline-block'>HOME</p></NavLink>
              <NavLink   onClick={()=>setShowMenu(false)}to='/doctors'> <p className='px-4 py-2 rounded inline-block'>ALL DOCTORS </p></NavLink>
              <NavLink   onClick={()=>setShowMenu(false)}to='/about'><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
              <NavLink onClick={()=>setShowMenu(false)} to='/contact'><p  className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
            </ul>
        
        </div>
      </div>
    </div>
  )
}

export default Navbar
