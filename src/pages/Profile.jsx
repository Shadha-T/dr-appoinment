import React, { useState } from 'react'
import { assets } from '../assets/asset'

const Profile = () => {

  const [userData, setUserData] = useState({
    name: "Kevin Peter",
    image: assets.profile,
    email: "kevin@gmail.com",
    phone: '+1 123 345 6788',
    address: {
      line1: "45th Nagar, London",
      line2: "Circle , Main Road,London"
    },
    gender: "male",
    dob: "2000-01-01"

  })


  const [isEdit, setIsEdit] = useState(false)
  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      <img src={userData.image} alt='' className='w-36 rounded' />
      {
        isEdit ? <input type='text' value={userData.name} onChange={e => setUserData(Prev => ({ ...Prev, name: e.target.value }))} className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' />
          : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }

      <hr className='bg-zinc-400 h-[1px] border-none' />
      <div >
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium '>Email id:</p>
          <p className='text-red-700'>{userData.email}</p>
          <p>Phone:</p>

          {
            isEdit ? <input className='bg-gray-100 max-w-52' type='text' value={userData.phone} onChange={e => setUserData(Prev => ({ ...Prev, phone: e.target.value }))} />
              : <p className='text-red-700'>{userData.phone}</p>
          }

          <p className='font-medium'>Address:</p>
          {
            isEdit ? <p className='text-gray-500'>
              <input className='bg-gray-100' type='text' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} />

              <br></br>
              <input className='bg-gray-100' type="text" onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev, address, line2: e.target.value } }))} value={userData.address.line2} />

            </p>
              : <p>
                {userData.address.line1}<br />
                {userData.address.line2}
              </p>
          }

        </div>
      </div>

      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>
          {
            isEdit
              ? <select className='max-w-20 bg-gray-100' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>

              </select>
              : <p>{userData.gender}</p>
          }
          <p className='font-medium' >Birthday</p>
          {
            isEdit ? <input className='max-w-28 bg-gray-100' type='date' onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
              : <p className='text-gray-400'>{userData.dob}</p>
          }
        </div>
      </div>

      <div className='mt-10'>
        {
          isEdit ? <button className='border   border-red-800 px-8 py-2 rounded-full hover:bg-green-800 hover:text-white transition-all' onClick={() => setIsEdit(false)}>Save information</button>
            : <button className='border  border-red-800 px-8 py-2 rounded-full  hover:bg-green-800 hover:text-white transition-all' onClick={() => setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  )
} 


export default Profile