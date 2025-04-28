import React from 'react'
import { specialityData } from '../assets/asset'
import { Link } from 'react-router-dom'

const SpecilaityMenu = () => {
  return (
    <div id='speciality' className='flex flex-col items-center gap-4  py-16 text-gray-900'>
        <h1 className='text-3xl font-mono'>find by speciality</h1>
        <p className='sm:w-1/3 text-center text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  recusandae consectetur esse quae dolore.</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
            {
                specialityData.map((item,index)=>{
                    return(
                        <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs flex-shrink-0 hover:translate-y-2 transition-all duration-500' key ={index}to={`/doctors/${item.speciality}`}>
                        {/* <img src={item.image} className='w-16 sm:w-24 mb-2'/> */}
                       <p className='text-sm  bg-green-800 text-white px-8 py-5 rounded-full'>{item.speciality}</p>
                    </Link> 
                    )
                  
                })
            }
        </div>
      
    </div>
  )
}

export default SpecilaityMenu
