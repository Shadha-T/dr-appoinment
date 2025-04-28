import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/asset'
import RelatedDoc from '../components/RelatedDoc'

const Appointment = () => {

  const { docId } = useParams()

  const { doctors, currencySymbol } = useContext(AppContext)
 
  const daysofWeek = ['SUN' , 'MON' , 'TUE' , 'WED' , 'THU', 'FRI', 'SAT']
  const [docInfo, setDocInfo] = useState(null)

  const [docSlot, setDocSlot] = useState([])
  const [slotindex, setSlotindex] = useState(0)
  const [slottime, setSlotime] = useState('')

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    console.log("found doc", docInfo)
  }


  const getAvailableslots = async () => {
    setDocSlot([])

 // getting crt date
    let today = new Date()
    for(let i=0;i<7;i++){
      // geting date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate()+i)

      // setting time of the date with index
      let endTime = new Date()
      endTime.setDate(today.getDate()+ i)
      endTime.setHours(21,0,0,0)

      // setting hrs
      if (today.getDate() === currentDate.getDate) {
        currentDate.setHours(currentDate.getHours() <10 ? currentDate.getHours() + 1 :10)
        currentDate.setMinutes(currentDate.getMinutes()>30 ? 30: 0)
      }else{
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []
      while(currentDate < endTime){
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute:'2-digit'})
// add slot to array
timeSlots.push({
  datetime:new Date(currentDate),
  time:formattedTime
})

// incremnt currnt time by 30 min
currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      setDocSlot(prev =>([...prev,timeSlots]))
    }

   
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])


  useEffect(() => {
    getAvailableslots()
  }, [docInfo])



  useEffect(()=>{
    console.log(docSlot);
    
  },[docSlot])

  return docInfo && (
    <div className='flex  flex-col sm:flex-col gap-4'>
      {/* doc details */}

      <div className='flex'>
        <div>
          <img src={docInfo.image} className='bg-green-800 w-full sm:max-w-72 rounded-lg' />
           </div>
   

      <div className='flex-1 border border-green-900 rounded-lg p-8 py-7  bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
        {/* doc info name degree exp */}
        <p className='flex  items-center gap-2 text-2xl font-medium text-red-900'>{docInfo.name} <img src={assets.verified} className='w-5' /></p>
        <div className='flex items-center gap-2 text-sm mt-1 text-green-900'>
          <p>{docInfo.degree} - {docInfo.speciality}</p>
          <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
        </div>

        {/* doc abt */}
        <div>
          <p className='flex items-center gap-1 text-sm text-green-900'> About <img src={assets.abt} className='w-4' /></p>
          <p className='text-sm text-green-900 max-w-[700px] mt-1'>{docInfo.about}</p>
        </div>
        <p className='text-green-900 font-medium mt-4'>
          Appointment fee :<span className='text-green-900'>{currencySymbol}{docInfo.fees}</span>
        </p>
        </div>
      </div>



      {/* BOOKINGS SLOTS */}

      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-green-900'>
<p className=''>Booking slots</p>

<div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
  {
    docSlot.length && docSlot.map((item,index)=>(
      <div  onClick={()=>setSlotindex(index)} className = {`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotindex === index ? ' bg-red-600 text-green-600 ' : 'border border-green-600'}`} key={index}>
        <p>{item[0] && daysofWeek[item[0].datetime.getDay()]}</p>
        <p>{item[0] && item[0].datetime.getDate()}</p>

      </div>
    ))
  }
</div>

      <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
        {
          docSlot.length && docSlot[slotindex].map((item,index)=>(
            <p onClick={()=>setSlotime(item.time)} className={`text-sm font-light flex-shrink-0  px-5 py-2 rounded-full cursor-pointer ${item.time === slottime ? 'bg-green-600 text-red-900' : 'text-green-800  border border-green-800' }`} key={index}>
              {item.time.toLowerCase()}
           
              
            </p>
          ))
        }
      </div>
      <button className='bg-green-900 text-white text-sm px-14 font-light py-3 rounded-full my-6'>Book an Appointment</button>
      </div>
      

      {/* listing related doc */}
<RelatedDoc  docId={docId} speciality={docInfo.speciality}/>
    </div>
  )
}

export default Appointment
