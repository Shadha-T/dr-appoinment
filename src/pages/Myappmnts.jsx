import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Myappmnts = () => {

  const {doctors} = useContext(AppContext)
  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-green-800 border-b'>My Appoinments</p>
      <div>
{doctors.slice(0,3).map((item,index)=>
(
  <div key={index} className=' grid grid-cols-[1fr_2fr] gap-4 sm:gap-6 py-2 border-b'>
<div>
<img className='w-32 bg-green-100' src={item.image}/>
</div>
<div className='flex-1 text-sm text-green-800'>
  <p className='text-neutral-800 font-semibold'>{item.name}</p>
  <p>{item.speciality}</p>
  <p className='text-zinc-700 mt-1 font-medium'>Address:</p>
  <p className='text-xs'>{item.address.line1}</p>
  <p className='text-xs'>{item.address.line2}</p>
  <p className='text-sm mt-1'><span className='text-sm text-neutral-700 font-medium' >Date & Time</span>12 Jan 2025 | 7.00pm</p>
</div>

<div></div>
<div className='flex flex-col gap-2 justify-end'>
  <button className='text-sm text-green-800 text-center sm:min-w-48 py-2 border rounded hover:bg-green-800 hover:text-white duration-300'>Pay Online</button>
  <button className='text-sm text-green-800 text-center sm:min-w-48 py-2 border rounded hover:bg-red-800 hover:text-white duration-300'>Cancel Appoinment</button>
</div>
  </div>
))}
      </div>
    </div>
  )
}

export default Myappmnts
