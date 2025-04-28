import { useState } from 'react'

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Abt from './pages/Abt'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import Myappmnts from './pages/Myappmnts'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<Abt />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myprofile' element={<Profile />} />
        <Route path='/my-appointments' element={<Myappmnts />} />
        <Route path='/appointment/:docId' element={<Appointment />} />


      </Routes>
      <Footer />
    </div>
  )
}

export default App
