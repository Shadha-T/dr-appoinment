import React from 'react';
import { useContext, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext'

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter,setShowFilter] = useState(false)
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (!doctors) return;
    
    if (speciality) {
      // Create a mapping for speciality variations
      const specialityMapping = {
        'GeneralMedicine': 'General Medicine',
        'Pediatricians': 'Pediatrics',
        'Gynecologist': 'Gynacologist'
        // Add other mappings if needed
      };
      
      // Get the correct speciality name to match doctor data
      const specialityToMatch = specialityMapping[speciality] || speciality;
      
      setFilterDoc(doctors.filter(doc => 
        doc.speciality.toLowerCase() === specialityToMatch.toLowerCase()
      ));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p className='text-green-900 '>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1  px-3  border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-green-800 text-white' : ''}`} onClick={()=>setShowFilter(prev => !prev)}>filters</button>
        <div className={`flex-col gap-4 text-sm text-red-900 ${showFilter ? 'flex' : ' hidden sm:flex'}`}>
          <p onClick={()=>speciality === 'GeneralMedicine' ? navigate('/doctors') : navigate('/doctors/GeneralMedicine')} className={`w-[94vw] sm:w-auto pl-3 pr-16 border border-green-900 rounded transition-all cursor-pointer ${speciality === "GeneralMedicine" ? "bg-red-600 text-white" : ""}`}>GeneralMedicine</p>
          <p onClick={()=>speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 pr-16 border border-green-900 rounded transition-all cursor-pointer  ${speciality === "Dermatologist" ? "bg-red-600 text-white" : ""}`}>Dermatologist</p>
          <p onClick={()=>speciality === 'Cardiologist' ? navigate('/doctors') : navigate('/doctors/Cardiologist')} className={`w-[94vw] sm:w-auto pl-3 pr-16 border border-green-900 rounded transition-all cursor-pointer  ${speciality === "Cardiologist" ? "bg-red-600 text-white" : ""}`}>Cardiologist</p>
          <p onClick={()=>speciality === 'Gynacologist' ? navigate('/doctors') : navigate('/doctors/Gynacologist')} className={`w-[94vw] sm:w-auto pl-3 pr-16 border border-green-900 rounded transition-all cursor-pointer  ${speciality === "Gynacologist" ? "bg-red-600 text-white" : ""}`}>Gynacologist</p>
          <p onClick={()=>speciality === 'Nephrologist' ? navigate('/doctors') : navigate('/doctors/Nephrologist')} className={`w-[94vw] sm:w-auto pl-3 pr-16 border border-green-900 rounded transition-all cursor-pointer  ${speciality === "Nephrologist" ? "bg-red-600 text-white" : ""}`}>Nephrologist</p>
          <p onClick={()=>speciality === 'Pediatrics' ? navigate('/doctors') : navigate('/doctors/Pediatrics')} className={`w-[94vw] sm:w-auto pl-3 pr-16 border border-green-900 rounded transition-all cursor-pointer  ${speciality === "Pediatrics" ? "bg-red-600 text-white" : ""}`}>Pediatrics</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.map((item, index) => (
            <div 
              onClick={() => navigate(`/appointment/${item._id}`)} 
              className='border border-green-300 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' 
              key={index}
            >
              <img src={item.image} className='bg-green-100' alt={item.name} />
              <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-center text-green-800'>
                  <p className='w-2 h-2 rounded-full bg-green-900'></p>
                  <p>Available</p>
                </div>
                <p className='text-green-800 text-lg font-medium'>{item.name}</p>
                <p className='text-green-800 text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;